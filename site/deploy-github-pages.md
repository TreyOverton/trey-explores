# Deploy to GitHub Pages

GitHub Pages is the simplest way to put your site on the internet. Once set up, every change you push automatically goes live.

## What You Need to Do (One Time)

There's one manual step that GitHub requires you to do in your browser — Claude Code can't do this for you:

1. Go to your repository on **github.com**
2. Click **Settings** (the gear icon, top menu bar)
3. Click **Pages** (left sidebar, under "Code and automation")
4. Under **Build and deployment**, change Source to **GitHub Actions**
5. Click **Save**

That's it. You only do this once.

## What Happens Automatically

Every time you (or Claude Code) push changes to `main`, a workflow deploys your `site/` folder to GitHub Pages. No commands to run, nothing to remember.

Your site will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

The first deploy takes a minute or two. After that, updates are fast.

> **Tip:** You can check if a deploy is running by clicking the **Actions** tab in your repository on GitHub.

## Limitations

- **Public only** — anyone on the internet can see your site. If you need to restrict access, use [Firebase](deploy-firebase.md) instead.
- **Public repo required** unless you have GitHub Pro, Team, or Enterprise.

## Advanced: Custom Domain

If you own a domain name and want to use it instead of the `github.io` address:

1. Go to **Settings** > **Pages**
2. Enter your domain under **Custom domain**
3. At your DNS provider, add a `CNAME` record pointing to `YOUR_USERNAME.github.io`
4. Check **Enforce HTTPS** once the DNS change takes effect (can take up to 24 hours)

If you're not sure what DNS means, skip this — the `github.io` address works fine.
