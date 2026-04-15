---
description: Survey the exploration queue, summarize, and refine the backlog
---

# /horizon — Survey the Landscape

Look around at everything in the exploration queue, summarize what's there, and do backlog refinement — identifying stale items, suggesting re-prioritization, and updating the exploration queue page.

## What to Do

### 1. Gather the Current State

```bash
# All open issues with labels
gh issue list --repo TreyOverton/trey-explores --state open --json number,title,labels,createdAt,updatedAt --limit 100

# Recently closed issues (last 10)
gh issue list --repo TreyOverton/trey-explores --state closed --json number,title,labels,closedAt --limit 10
```

### 2. Summarize by Terrain

Group open issues by their `terrain:` label. For each terrain, report:
- Total open issues
- Which are marked `next-up`
- Which are `blocked` and on what
- Brief description of what that terrain covers

### 3. Identify Stale Items

Flag any open issue that:
- Was created more than 30 days ago with no comments or updates
- Has been `blocked` for more than 14 days
- Is marked `next-up` but hasn't been worked on

For each stale item, ask Trey: "Still interested in this? Want to keep it, re-prioritize it, or close it?"

### 4. Check for Gaps

Look at the dependency chains — are there blocked issues whose prerequisites are also not being worked on? Flag these chains as potentially stuck.

Look at recently explored pages (recent git commits to `site/knowledge/`) and check whether any issues should be closed based on pages that now exist.

### 5. Update the Exploration Queue Page

Regenerate `site/exploration-queue.md` to reflect current GitHub issue state:
- Link each item to its GitHub issue
- Group by terrain
- Mark next-up items prominently
- Note blocked items and what blocks them

### 6. Report

Present the summary to Trey in conversation. Use this format:

```
## Horizon Check — {date}

**{N} open topics** across {M} terrains

### By Terrain
- **Geometry** — {count} open ({details})
- **Special Relativity** — {count} open ({details})
- ...

### Next Up
- #{num} Topic name
- #{num} Topic name

### Stale Items ({count})
- #{num} Topic name — created {date}, no activity since. Still interested?

### Stuck Chains
- #{num} is blocked by #{num}, which is also not started

### Recently Explored
- {page} was added — close #{num}?
```

## Tone

Use exploration metaphors naturally. "This trail hasn't been visited in a while." "This path is blocked by an unexplored prerequisite." "New territory was mapped recently." Don't force it — keep it readable.
