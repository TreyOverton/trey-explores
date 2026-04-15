# Trey Explores — Personal Knowledge Wiki

This is Trey Overton's personal knowledge base — a living wiki built through exploratory conversations with AI. It uses [TabulaKit](https://heatherstoneio.github.io/tabulakit/) (Docsify-based, zero build step) to render markdown as a single-page app.

## What This Site Is

An "explored knowledge base" — Trey works through topics in conversation, and when he feels he genuinely understands a concept, a summary gets captured here. Topics follow connections organically: geometry axioms led to non-Euclidean geometry, which led to spacetime curvature, which led to Special Relativity. Creative tangents (story concepts, essays) get captured too.

## Trey's Working Style

Trey is a senior software architect and CTO. When helping him explore topics:

- **He declares priors explicitly** — flags intuitions, provisional beliefs, and emotional positions separately from demonstrated knowledge. Don't accept false premises; give calibrated pushback.
- **He accepts things provisionally** — flags them for later stress-testing and continues building. Don't let unresolved questions block progress, but don't lose the thread either.
- **He links physics to human behavior** — encourage pattern-finding across domains but don't let it derail the primary subject.
- **He believes in objective truth** — skeptical of claims that quantities have no ground truth. Engage this seriously.
- **He provides rich context** — background beliefs, what he knows, what he suspects. Use this to give precisely targeted responses, not generic ones.

## Content Organization Principles

- **One primary concept per page** — each markdown file targets a single idea
- **Cross-link aggressively** — related concepts should link to each other within the text, wiki-style
- **Knowledge areas grow into subdirectories** — a single page can become an index of sub-documents as the area expands
- **Status tracking** — concepts are either understood (summarized) or queued for exploration
- **Exploration queue** — topics to explore later are tracked on a dedicated page (future: GitHub issues)
- **Provisional beliefs** — intuitions flagged for stress-testing get their own page

### Site Structure

```
site/
├── README.md                        # Home page — overview and recent activity
├── exploration-queue.md             # Topics to explore next
├── provisional-beliefs.md           # Beliefs held for stress-testing
├── knowledge/
│   ├── special-relativity/          # SR concepts (one file per concept)
│   ├── geometry/                    # Geometry concepts
│   └── general-relativity/         # GR concepts (future)
├── creative/
│   ├── the-outrider.md             # Sci-fi story concept
│   └── authority-and-authorship.md # Essay on AI expertise
└── about.md                        # About this site and process
```

### Adding a New Concept Page

1. Create a `.md` file in the appropriate `site/knowledge/<area>/` or `site/creative/` directory
2. Include cross-links to related concept pages within the content
3. Add a link in `site/_sidebar.md` under the appropriate section
4. If the concept was on the exploration queue, remove it from there

### Linking Between Concepts

Use standard markdown links with paths relative to `site/`:
- `[Time Dilation](knowledge/special-relativity/time-dilation.md)` from any page
- Related concepts should be linked inline where they're mentioned, not just in a "see also" section

## TabulaKit Reference

### Sidebar Navigation

`site/_sidebar.md` controls the left navigation. Bold text = section headers. Indentation = nested items.

### Site Configuration

`site/config.js` controls the site identity and theme:

- `name` — site title (shown in sidebar and browser tab)
- `description` — subtitle text
- `logo` — path to a logo image (optional, shown in sidebar)
- `theme.color` — primary accent color (hex value)
- `theme.sidebarWidth` — sidebar width in CSS units
- `theme.baseFontSize` — base font size in CSS units
- `docsify.subMaxLevel` — heading depth shown in sidebar
- `docsify.search` — enable/disable full-text search

### Authentication

`site/auth-config.js` controls access. Three modes:

| Mode | Effect |
|------|--------|
| `"public"` | No sign-in required (default) |
| `"domain"` | Google sign-in, restricted to one domain |
| `"allowlist"` | Google sign-in, restricted to specific emails |

Domain and allowlist modes require Firebase config values. See `site/deploy-firebase.md`.

### Deployment

Three deployment targets are pre-configured:

| Target | Config File | Guide |
|--------|------------|-------|
| GitHub Pages | `.github/workflows/deploy.yml` | `site/deploy-github-pages.md` |
| Firebase | `firebase.json` | `site/deploy-firebase.md` |
| Netlify | `netlify.toml` | `site/deploy-netlify.md` |

All deploy automatically on push to `main`. Each requires a one-time manual setup step in the provider's dashboard.

### Local Preview

Each site has a preview port stored in `.tabulakit/config.json` (`previewPort` field, range 3100–3800). Use that port:

```bash
npx live-server site --port=<previewPort from .tabulakit/config.json>
```

## Working with This Repo

- **Content goes in `site/`** — all markdown files, images, and assets
- **Never edit `index.html`** unless you know what you're doing — it contains the Docsify runtime, theme, and auth logic
- **Config changes go in `config.js` and `auth-config.js`** — not in `index.html`
- **Commit messages** should be concise and descriptive
- **Push to `main`** triggers deployment (GitHub Pages and Netlify auto-deploy; Firebase requires `firebase deploy`)

## Available Skills

| Skill | Purpose |
|-------|---------|
| `/startup` | Initial site setup wizard — name, theme, deployment target |
| `/orient` | Save session state so the next Claude Code session picks up where you left off |
| `/publish` | Save and publish changes to the live site |
| `/tabula-update` | Check for and apply the latest TabulaKit template improvements |

## Permissions

This repository's `.claude/settings.json` grants broad file access so you can freely edit site content, configuration, and documentation without permission prompts. This is intentional — TabulaKit is a content-focused project where most work is editing markdown and config files.
