---
description: Survey open issues, summarize progress, and refine the backlog
---

# /horizon — Survey Your Documentation Landscape

Look at all open GitHub issues for this site, summarize what's there, identify stale or stuck items, and help the user prioritize.

## What to Do

### 1. Detect the Repository

```bash
REPO=$(gh repo view --json nameWithOwner -q '.nameWithOwner' 2>/dev/null)
```

If this fails, tell the user `gh` isn't set up and stop.

### 2. Gather the Current State

```bash
# All open issues with labels
gh issue list --repo $REPO --state open --json number,title,labels,createdAt,updatedAt --limit 100

# Recently closed issues (last 10)
gh issue list --repo $REPO --state closed --json number,title,labels,closedAt --limit 10
```

If there are no open issues, tell the user there's nothing in the queue and suggest using `/chart` to add topics.

### 3. Summarize by Area

Group open issues by their `area:` labels. For each area, report:
- Total open issues
- Which are marked `next-up`
- Which are `blocked` and on what
- Brief description of what that area covers

### 4. Identify Stale Items

Flag any open issue that:
- Was created more than 30 days ago with no comments or updates
- Has been `blocked` for more than 14 days
- Is marked `next-up` but hasn't been worked on

For each stale item, ask the user: "Still want to pursue this? Keep, re-prioritize, or close?"

### 5. Check for Gaps

- Are there `blocked` issues whose prerequisites are also not being worked on? Flag these chains as stuck.
- Look at recently added site pages (check recent git commits to `site/`) and see if any open issues should be closed based on pages that now exist.

### 6. Report

Present the summary in conversation:

```
## Horizon Check — {date}

**{N} open topics** across {M} areas

### By Area
- **Area Name** — {count} open ({details})
- ...

### Next Up
- #{num} Topic name
- #{num} Topic name

### Stale Items ({count})
- #{num} Topic name — created {date}, no activity since. Still interested?

### Stuck Chains
- #{num} is blocked by #{num}, which is also not started

### Recently Completed
- {page} was added — close #{num}?
```

## Tone

Keep it conversational and helpful. "This one hasn't had any activity in a while." "These two are blocking each other." "Looks like you already wrote a page for this one — want to close the issue?"
