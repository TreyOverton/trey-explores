---
description: Create or update GitHub issues to track documentation topics
---

# /chart — Track Topics with GitHub Issues

Create or update GitHub issues to track documentation topics, questions, and tasks for your site.

## Detecting the Repository

Always detect the repo dynamically — never hardcode a repo name:

```bash
# Get the GitHub owner/repo from the origin remote
REPO=$(gh repo view --json nameWithOwner -q '.nameWithOwner' 2>/dev/null)
```

If this fails, tell the user that `gh` isn't authenticated or the repo isn't connected to GitHub, and stop.

## Label System

On first use, check if TabulaKit labels exist. If not, offer to create them.

### Category Labels (prefix `area:`)

Category labels group issues by topic area. They're created as needed — when the user adds content about a new area, create a matching label.

```bash
# Example: create a new area label
gh label create "area: operations" --repo $REPO --color "1d76db" --description "Operations and process documentation"
```

Use these colors for visual grouping — pick the closest fit for new areas:

| Color | Suggested use |
|-------|--------------|
| `#1d76db` | Technical topics |
| `#c5a03f` | Business/operations |
| `#0e8a16` | Guides and how-tos |
| `#7b4bb3` | Research/exploration |
| `#e55934` | Urgent/priority |

### Type Labels

| Label | Color | Use |
|-------|-------|-----|
| `topic` | `#0e8a16` | A subject to document — the default for most items |
| `question` | `#fbca04` | Something to research or figure out |
| `task` | `#1d76db` | An action item (restructure, migrate, review) |

### Status Labels

| Label | Color | Use |
|-------|-------|-----|
| `next-up` | `#e55934` | Prioritized for near-term work |
| `blocked` | `#6a737d` | Waiting on something else |

## Issue Conventions

### Title

Clear, concise topic name. Examples:
- "Employee onboarding process"
- "Q2 marketing strategy"
- "API authentication docs"

### Body Format

```markdown
## What

One or two sentences describing the topic and why it matters.

## Connections

- **Builds on:** #issue_number (if this depends on another topic)
- **Leads to:** #issue_number (if other topics depend on this)
- **Related pages:** [Page Name](page-name.md)

## Notes

Any additional context — why this came up, what questions it should answer, who needs it.
```

### Labels

Every issue gets:
1. Exactly one **type** label (`topic`, `question`, or `task`)
2. At least one **area** label (create new area labels as needed)
3. Optionally a **status** label (`next-up` or `blocked`)

### Closing Issues

Close an issue when the content has been written and published. Include a link to the page:

```
Documented: [Page Title](page-name.md)
```

## What to Do

1. Determine what topics need issues
2. Detect the repo: `REPO=$(gh repo view --json nameWithOwner -q '.nameWithOwner')`
3. Check for existing issues to avoid duplicates: `gh issue list --repo $REPO --state open --search "topic keywords"`
4. Create missing area labels if needed
5. Create issues following the conventions above
6. Report what was created, with issue numbers
