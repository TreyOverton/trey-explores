---
description: Suggest promising next topics to document
---

# /path — Find What to Work on Next

Analyze open GitHub issues and recent activity to suggest 2-3 promising next topics for the user to work on.

## What to Do

### 1. Detect the Repository

```bash
REPO=$(gh repo view --json nameWithOwner -q '.nameWithOwner' 2>/dev/null)
```

If this fails, tell the user `gh` isn't set up and stop.

### 2. Understand Recent Activity

```bash
# Recent commits to site content
git log --oneline --since="30 days ago" -- site/

# Recently closed issues
gh issue list --repo $REPO --state closed --json number,title,labels,closedAt --limit 5
```

Identify which area was most recently active and what pages were last added.

### 3. Find Candidates

```bash
# Prioritized items first
gh issue list --repo $REPO --state open --label "next-up" --json number,title,labels,body --limit 10

# Then everything else
gh issue list --repo $REPO --state open --json number,title,labels,body --limit 50
```

For each candidate, consider:
- Is it `blocked`? If so, skip unless the blocker is close to done
- Does it continue the most recently active area? (prioritize these — momentum matters)
- Does it build directly on something already documented?
- Is it a `question` that would unblock other topics?

### 4. Suggest 2-3 Options

Present options with different character:

```
## Suggested Next Steps

### 1. Continue where you left off
**#{num} Topic Name** — {why this is the natural next step}
Continues: {recent area}
Builds on: {recently completed page}

### 2. Quick win
**#{num} Topic Name** — {why this could be done quickly}
Estimated scope: {small/medium}

### 3. Unblock downstream work
**#{num} Topic Name** — {what this enables}
Unblocks: #{num}, #{num}
```

Not every suggestion set will have all three types. Pick the 2-3 most compelling options from whatever's available. If there's a clear single best next step, say so.

### 5. Let the User Choose

Don't start working — present the options and let the user pick. If they pick one, mark it `next-up` on GitHub and offer to begin.

## Prioritization Rules (in order)

1. **Continuation** — same area as recent work, next in sequence
2. **Unblocking** — a topic that unblocks multiple downstream items
3. **Quick wins** — small topics that can be completed in one session
4. **User signals** — topics the user has mentioned wanting to get to
5. **Staleness** — old items that might lose context if deferred too long

## Tone

Keep it practical and helpful. "The most natural next step would be..." "This is a quick one that would unblock two other topics." "You haven't touched this area in a while — still on your radar?"
