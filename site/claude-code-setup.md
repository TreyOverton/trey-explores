# Using Claude Code with TabulaKit

TabulaKit is designed to work with [Claude Code](https://claude.ai/code). When you open this repository in Claude Code, it automatically understands your site structure, configuration, and deployment setup.

## What's Pre-Configured

### Permissions (`.claude/settings.json`)

TabulaKit ships with broad permissions already granted so Claude Code can freely:

- Read and edit your markdown files and configuration
- Run commands (local preview, deployment, git)
- Search your site content
- Run skills like `/startup`

You won't be prompted to approve every file edit — this is intentional. TabulaKit is a content project where most work is editing markdown and config files, so the permissions are set to keep things flowing smoothly.

### Project Context (`.claude/CLAUDE.md`)

Claude Code reads `.claude/CLAUDE.md` at the start of every conversation. This file tells Claude about your site structure, how Docsify works, where configuration lives, and what skills are available. You don't need to explain your project setup each time.

## What You Can Ask Claude Code to Do

Here are some things that work well:

- **"Add a new page about X"** — creates the markdown file and adds it to the sidebar
- **"Change the site name to X"** — updates `config.js`
- **"Change the accent color to blue"** — updates the theme in `config.js`
- **"Deploy to Firebase"** — runs `firebase deploy`
- **"Add a section header called Resources to the sidebar"** — edits `_sidebar.md`
- **"Help me write documentation about X"** — creates well-structured markdown

## Available Skills

| Skill | What It Does |
|-------|-------------|
| `/startup` | Interactive setup wizard — walks you through naming your site, picking colors, and choosing a deployment target |
| `/orient` | Saves your current session state so the next time you open Claude Code, it picks up where you left off |

## Customizing Permissions

If you add MCP servers or new skills, you may want to update `.claude/settings.json` to grant permissions for them. The format is:

```json
{
  "permissions": {
    "allow": [
      "Bash",
      "Read",
      "Write",
      "Edit",
      "Skill(your-new-skill)"
    ]
  }
}
```

See the [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code) for the full list of permission options.
