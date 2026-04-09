# TabulaKit

A template for creating documentation sites with zero build step. Fork, run `/startup`, deploy in 5 minutes.

Built on [Docsify](https://docsify.js.org/) with [Claude Code](https://claude.ai/code) integration for AI-assisted content creation and site management.

## Quick Start

### 1. Create Your Site

Click **[Use this template](https://github.com/heatherstoneio/tabulakit/generate)** to create your own copy, then clone it:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2. Run the Setup Wizard

Open the repo in Claude Code and run:

```
/startup
```

The wizard walks you through naming your site, picking a template, choosing colors, and selecting a deployment target.

### 3. Deploy

Push to `main` and your site goes live. Each deployment target requires a one-time manual setup step — the wizard tells you exactly what to do.

## Templates

| Template | Description |
|----------|-------------|
| **Blank** | Minimal starting point — home page, about page, getting started guide |
| **Mission** | Operational reference site — timeline, roster, comms log, checklists, risk register. Includes `/note` and `/aar` skills. |
| **Course** | Workshop or course site — syllabus, schedule, session outlines, pre-work, participant resources |

## Deployment Targets

| Target | Best For | Auth Support | Setup |
|--------|----------|-------------|-------|
| **GitHub Pages** | Public sites, simplest setup | No | Enable in Settings → Pages |
| **Firebase** | Sites needing access control | Yes (Google sign-in) | Create project, deploy |
| **Netlify** | Public sites, deploy previews | No | Connect repo, auto-deploys |

All three are free and auto-deploy on push to `main`.

## Authentication (Firebase)

Three modes for controlling access:

| Mode | Who Can Access |
|------|---------------|
| `public` | Anyone (default) |
| `domain` | Users with a specific Google Workspace domain |
| `allowlist` | Specific email addresses only |

## Claude Code Skills

| Skill | Available In | Description |
|-------|-------------|-------------|
| `/startup` | All templates | Interactive site setup wizard |
| `/orient` | All templates | Save session state for continuity across sessions |
| `/note` | Mission template | Add timestamped comms log entries with smart propagation |
| `/aar` | Mission template | Log observations for the After Action Review |

## Optional Modules

### Command Architecture

A military-inspired organizational framework for structured planning and execution. Includes reference docs on staff sections (S1-S7), planning process, execution lifecycle, orders communication, and operating rhythm.

Install during `/startup` or manually copy from `.tabulakit/modules/command-architecture/`.

## Project Structure

```
tabulakit/
├── site/                          # Your documentation content
│   ├── index.html                 # Docsify app shell
│   ├── config.js                  # Site name, theme, options
│   ├── auth-config.js             # Authentication settings
│   ├── _sidebar.md                # Navigation
│   └── *.md                       # Your pages
│
├── .claude/                       # Claude Code integration
│   ├── CLAUDE.md                  # Project context
│   ├── settings.json              # Permissions and hooks
│   └── commands/                  # Slash command skills
│
├── .tabulakit/                    # Template system
│   ├── templates/                 # Site templates
│   │   ├── blank/
│   │   ├── mission/
│   │   └── course/
│   └── modules/                   # Optional add-on modules
│       └── command-architecture/
│
├── .github/workflows/deploy.yml   # GitHub Pages auto-deploy
├── firebase.json                  # Firebase hosting config
├── netlify.toml                   # Netlify hosting config
└── LICENSE                        # MIT
```

## Creating Your Own Template

Templates live in `.tabulakit/templates/<name>/` with this structure:

```
my-template/
├── manifest.json    # Metadata, questions, skills list
├── content/         # Markdown files copied into site/
├── sidebar.md       # Navigation structure
└── skills/          # Optional Claude Code skills
    └── my-skill/
        └── SKILL.md
```

### manifest.json

```json
{
  "name": "My Template",
  "description": "One-line description shown in /startup",
  "version": "1.0.0",
  "questions": [
    {
      "key": "project_name",
      "prompt": "What is the project name?",
      "default": "My Project",
      "type": "text"
    }
  ],
  "skills": ["my-skill"],
  "getting_started": "Extra text for the setup summary"
}
```

Use `{{project_name}}` placeholders in content files — they're replaced with the user's answers during `/startup`.

## Local Development

```bash
npx live-server site --port=3000
```

No build step, no dependencies to install. Edit markdown, refresh browser.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `/startup` not recognized | Make sure you're running Claude Code from the repo root |
| Local preview won't start | Run `npx live-server site --port=3000` from the repo root |
| Site shows blank page | Check that `site/index.html` exists |
| GitHub Pages not deploying | Go to Settings → Pages and set Source to **GitHub Actions** |
| Firebase deploy fails | Run `firebase login` first, make sure `.firebaserc` has your project ID |
| Auth not working | Check that Firebase Auth is enabled and `auth-config.js` has your config values |
| Sidebar not showing | Verify `site/_sidebar.md` exists and has valid markdown links |
| Search not working | Make sure `docsify.search` is `true` in `site/config.js` |

## License

MIT — see [LICENSE](LICENSE).

---

Built by [Heatherstone](https://heatherstone.com). Powered by [Docsify](https://docsify.js.org/) and [Claude Code](https://claude.ai/code).
