---
description: Save session state for continuity across Claude Code sessions
---

# /orient — Session Handover

Capture the current state of this TabulaKit site so a future Claude Code session can pick up where this one left off.

## What to Do

1. **Read the current site state** by examining these files:
   - `site/config.js` — site name, description, theme
   - `site/auth-config.js` — auth mode
   - `site/_sidebar.md` — current page structure
   - `site/README.md` — home page content

2. **Check deployment state:**
   - Does `.firebaserc` exist? (Firebase is configured)
   - Does `.github/workflows/deploy.yml` exist? (GitHub Pages is configured)
   - Does `netlify.toml` exist? (Netlify is configured)

3. **Check git state:**
   - Current branch
   - Any uncommitted changes
   - Last few commit messages

4. **Write the orientation file** to `.claude/state/session.md` with this format:

```markdown
# Session State

**Generated:** {date}
**Site:** {name} — {description}
**Theme:** {color hex}
**Auth:** {mode}
**Deploy:** {configured targets}

## Site Structure

{List of pages from _sidebar.md}

## Recent Changes

{Last 3-5 commit messages}

## Uncommitted Work

{Any staged or unstaged changes, or "Clean working tree"}

## Notes

{Any observations about the site state — e.g., placeholder content that still needs replacing, broken links, incomplete sections}
```

5. **Update the SessionStart hook** in `.claude/settings.json` if it doesn't already load the state file. Add this hook if missing:

```json
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "if [ -f .claude/state/session.md ]; then echo '--- SESSION STATE ---'; cat .claude/state/session.md; echo '--- END SESSION STATE ---'; fi",
            "timeout": 5
          }
        ]
      }
    ]
  }
}
```

**Important:** Merge this into the existing settings.json — don't overwrite the permissions block.

6. **Confirm** to the user what was saved and that the next session will pick it up automatically.
