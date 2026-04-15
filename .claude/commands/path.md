---
description: Suggest promising next topics to explore
---

# /path — Find the Next Trail

Analyze the exploration queue and suggest 2-3 promising next topics to investigate, prioritizing continuation of recent work.

## What to Do

### 1. Understand Where We've Been Recently

```bash
# Recent commits to knowledge pages
git log --oneline --since="30 days ago" -- site/knowledge/

# Recently closed issues
gh issue list --repo TreyOverton/trey-explores --state closed --json number,title,labels,closedAt --limit 5
```

Identify which terrain was most recently active and what concepts were last explored.

### 2. Find Candidate Next Steps

```bash
# Open issues, prioritizing next-up
gh issue list --repo TreyOverton/trey-explores --state open --label "next-up" --json number,title,labels,body --limit 10
gh issue list --repo TreyOverton/trey-explores --state open --json number,title,labels,body --limit 50
```

For each candidate, check:
- Is it `blocked`? If so, skip unless the blocker is close to done
- Does it continue the most recently active terrain? (prioritize these)
- Does it build directly on something already explored?
- Is it a `bridge` connecting to new territory? (these are high-value)

### 3. Read the Provisional Beliefs Page

Check `site/provisional-beliefs.md` for beliefs that have upcoming stress-test checkpoints. If a candidate topic is a stress-test point, flag that — it adds motivation.

### 4. Suggest 2-3 Paths

Present options as distinct trails with different character:

```
## Suggested Paths

### 1. Continue the current trail
**#{num} Topic Name** — {why this is the natural next step}
Continues: {recent terrain}
Builds on: {recently explored concept}

### 2. Bridge to new territory
**#{num} Topic Name** — {why this is interesting now}
Connects: {terrain A} → {terrain B}
Unlocks: {what becomes available after this}

### 3. Stress-test a belief
**#{num} Topic Name** — {what provisional belief this challenges}
Tests: "{belief summary}" from provisional-beliefs.md
```

Not every suggestion set will have all three types. Pick the 2-3 most compelling options from whatever's available. If there's a clear single best next step, say so.

### 5. Let Trey Choose

Don't start exploring — present the options and let Trey pick. If he picks one, mark it `next-up` on GitHub and offer to begin the exploration conversation.

## Prioritization Rules (in order)

1. **Continuation** — same terrain as the last few explorations, next in dependency chain
2. **Unblocking** — a concept that unblocks multiple downstream topics
3. **Bridge concepts** — connecting explored territory to unexplored territory
4. **Stress-test points** — topics that will test provisional beliefs
5. **Interest signals** — topics Trey has mentioned wanting to get to
6. **Staleness avoidance** — old items that might lose context if deferred too long

## Tone

Frame suggestions as trails to follow, paths to take, territory to explore. "The most natural continuation..." "This bridges into..." "This would stress-test your belief that..."
