# Deploy to Firebase

Firebase Hosting supports all three TabulaKit auth modes: public, domain-restricted, and email allowlist.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- Firebase CLI: `npm install -g firebase-tools`

## Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **Add project** and follow the prompts
3. Note your **Project ID** (you'll need it below)

### 2. Configure Firebase in Your Repo

Copy the template and set your project ID:

```bash
cp .firebaserc.template .firebaserc
```

Edit `.firebaserc` and replace `YOUR_FIREBASE_PROJECT_ID` with your actual project ID.

### 3. Log In

```bash
firebase login
```

### 4. Deploy

```bash
firebase deploy
```

Your site will be live at `https://YOUR_PROJECT_ID.web.app`.

## Authentication Setup

If you're using `"domain"` or `"allowlist"` auth mode, you need to configure Firebase Authentication:

### Enable Google Sign-In

1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Enable **Google** as a sign-in provider
3. Go to **Authentication** > **Settings** > **Authorized domains**
4. Add your custom domain if using one

### Configure Auth in TabulaKit

Edit `site/auth-config.js`:

1. Set `mode` to `"domain"` or `"allowlist"`
2. Fill in the `firebase` config block with values from **Project Settings** > **General** > **Your apps** > **Web app**:
   - `apiKey`
   - `authDomain`
   - `projectId`
   - `appId`
3. For **domain** mode: set `allowedDomain` to your Google Workspace domain (e.g., `"example.com"`)
4. For **allowlist** mode: add authorized email addresses to the `allowedEmails` array

### Auth Modes Explained

| Mode | Behavior |
|------|----------|
| `"public"` | No sign-in required. Docsify loads immediately. |
| `"domain"` | Google sign-in required. Only users with email addresses matching `allowedDomain` can access the site. |
| `"allowlist"` | Google sign-in required. Only email addresses listed in `allowedEmails` can access the site. |

### Localhost Bypass

During development, auth is automatically skipped on `localhost` and `127.0.0.1` so you can preview without signing in.

## Custom Domain

1. In Firebase Console, go to **Hosting** > **Add custom domain**
2. Follow the DNS verification steps
3. Add the domain to **Authentication** > **Settings** > **Authorized domains** if using auth

## SPA Routing

The included `firebase.json` has a catch-all rewrite to `index.html`, so Docsify's hash-based routing works correctly. No additional configuration needed.
