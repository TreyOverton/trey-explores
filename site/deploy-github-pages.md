# Deploy to GitHub Pages

GitHub Pages is the simplest deployment option — push to `main` and your site goes live automatically.

## Setup

### 1. Enable GitHub Pages

In your repository on GitHub:

1. Go to **Settings** > **Pages**
2. Under **Build and deployment**, set Source to **GitHub Actions**
3. Click **Save**

### 2. Push to Main

The included workflow (`.github/workflows/deploy.yml`) deploys the `site/` directory to GitHub Pages automatically on every push to `main`.

To trigger a deploy manually, go to **Actions** > **Deploy to GitHub Pages** > **Run workflow**.

### 3. Access Your Site

Your site will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

Allow a minute or two for the first deployment to complete. You can check progress in the **Actions** tab.

## Custom Domain

To use a custom domain:

1. Go to **Settings** > **Pages**
2. Enter your domain under **Custom domain**
3. Add a `CNAME` DNS record pointing to `YOUR_USERNAME.github.io`
4. Check **Enforce HTTPS** once DNS propagates

## SPA Routing

TabulaKit includes a `404.html` that redirects missing paths to Docsify's hash-based router. This means deep links like `your-site.com/guides/setup` will correctly resolve to `/#/guides/setup`. No additional configuration is needed.

## Limitations

- **No authentication** — GitHub Pages sites are public. Use [Firebase](deploy-firebase.md) if you need Google auth.
- **Repo must be public** (or you need GitHub Pro/Team/Enterprise for private repo Pages).
