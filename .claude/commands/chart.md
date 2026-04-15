---
description: Create or update GitHub issues for exploration topics
---

# /chart — Map New Territory

Create or update GitHub issues to track exploration topics. This skill ensures consistent use of the label system and issue conventions.

## Repository

All issues go on `TreyOverton/trey-explores`. Always use `--repo TreyOverton/trey-explores` with `gh` commands.

## Label System

### Terrain Labels (knowledge domain — prefix `terrain:`)

| Label | Color | Domain |
|-------|-------|--------|
| `terrain: geometry` | `#c5a03f` | Euclidean, non-Euclidean, projective, finite geometries |
| `terrain: special-relativity` | `#1d76db` | SR postulates, spacetime, Lorentz effects |
| `terrain: general-relativity` | `#0e4785` | Equivalence principle, field equations, curved spacetime |
| `terrain: riemannian-geometry` | `#2b67a1` | Manifolds, tensors, curvature — the math of GR |
| `terrain: quantum-mechanics` | `#7b4bb3` | QM fundamentals, wave-particle duality, uncertainty |
| `terrain: quantum-computing` | `#9b59b6` | Qubits, decoherence, error correction |

New terrain labels can be created as new knowledge areas emerge. Use the `terrain:` prefix, pick a color that groups visually with related territories.

### Type Labels

| Label | Color | Use |
|-------|-------|-----|
| `concept` | `#0e8a16` | A discrete idea to understand — the default for most items |
| `bridge` | `#fbca04` | Connects two knowledge territories (e.g., "Why Newtonian gravity conflicts with SR") |
| `tangent` | `#d4c5f9` | Creative, meta, or side-trail thread |
| `historical` | `#c2b280` | History of science or mathematics |

### Status Labels

| Label | Color | Use |
|-------|-------|-----|
| `next-up` | `#e55934` | Prioritized for near-term exploration |
| `blocked` | `#6a737d` | Waiting on a prerequisite concept |

## Issue Conventions

### Title

Clear, concise concept name. Examples:
- "Newtonian gravity — instantaneous action at a distance"
- "The Equivalence Principle"
- "Riemann curvature tensor (R^ρ_σμν)"

### Body Format

Use this template:

```markdown
## What

One or two sentences describing the concept and why it matters.

## Connections

- **Builds on:** #issue_number, #issue_number
- **Leads to:** #issue_number, #issue_number
- **Related site pages:** [Page Name](https://treyoverton.github.io/trey-explores/#/path/to/page.md)

## Context

Any notes about why this topic came up, what questions it should answer, or what provisional beliefs it might stress-test.
```

### Labels

Every issue gets:
1. Exactly one **type** label (`concept`, `bridge`, `tangent`, or `historical`)
2. At least one **terrain** label
3. Optionally a **status** label (`next-up` or `blocked`)

Bridge issues get two terrain labels (the two territories they connect).

### Dependencies

Use "Builds on: #N" in the body to express dependencies. Add the `blocked` label if the prerequisite hasn't been explored yet. When a prerequisite is closed, remove `blocked` from downstream issues.

### Closing Issues

Close an issue when the concept has been explored and a site page has been written for it. Include a link to the page in the closing comment:

```
Explored and captured: [Page Title](https://treyoverton.github.io/trey-explores/#/path/to/page.md)
```

## When to Use This Skill

- When Trey identifies new topics to explore
- When creating issues from conversation exports or exploration queue updates
- When the user says to "chart" a topic or add something to the exploration queue
- Internally by other skills (`/horizon`, `/path`) when they need to create or update issues

## What to Do

1. Determine what topics need issues
2. Check for existing issues to avoid duplicates: `gh issue list --repo TreyOverton/trey-explores --state open --search "topic"`
3. Create issues following the conventions above
4. Report what was created, with issue numbers
