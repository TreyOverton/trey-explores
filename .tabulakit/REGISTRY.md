# TabulaKit Template Registry

## Directory Structure

```
.tabulakit/
├── REGISTRY.md              # This file
├── templates/               # Site templates
│   └── <template-name>/
│       ├── manifest.json    # Template metadata and configuration
│       ├── content/         # Markdown files copied into site/
│       ├── sidebar.md       # Navigation structure for this template
│       └── skills/          # Optional Claude Code skills
│           └── <skill>/
│               └── SKILL.md
│
└── modules/                 # Optional add-on modules
    └── <module-name>/
        ├── manifest.json    # Module metadata
        ├── content/         # Files copied into site/
        └── sidebar-section.md  # Sidebar entries to append
```

## Template manifest.json Schema

```json
{
  "name": "Template Name",
  "description": "One-line description shown in /startup wizard",
  "version": "1.0.0",
  "questions": [
    {
      "key": "variable_name",
      "prompt": "Question to ask the user",
      "default": "Default value",
      "type": "text"
    }
  ],
  "skills": ["skill-name"],
  "getting_started": "Optional template-specific getting started text"
}
```

### Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Display name for the template |
| `description` | Yes | One-line description shown during `/startup` template selection |
| `version` | Yes | Semver version string |
| `questions` | No | Additional questions to ask during `/startup` (beyond the standard name/theme/deploy questions) |
| `skills` | No | List of skill directory names under `skills/` to install |
| `getting_started` | No | Extra text appended to the Getting Started summary |

### Question Types

| Type | Description |
|------|-------------|
| `text` | Free-text input |
| `choice` | Pick from a list (add `options` array to the question) |
| `boolean` | Yes/no question |

Question answers are available as `{{variable_name}}` placeholders in template content files.

## Module manifest.json Schema

```json
{
  "name": "Module Name",
  "description": "One-line description",
  "version": "1.0.0",
  "install_path": "docs/module-name"
}
```

Modules are simpler than templates — they just copy content into a subdirectory and append sidebar entries.

## How /startup Uses Templates

1. Lists templates from `.tabulakit/templates/` by reading each `manifest.json`
2. Presents template choices to the user
3. Asks template-specific questions (from `manifest.questions`)
4. Copies `content/` files into `site/`, replacing `{{placeholders}}` with answers
5. Replaces `site/_sidebar.md` with the template's `sidebar.md`
6. Copies template skills into `.claude/commands/`
7. Updates `.claude/settings.json` permissions for new skills
