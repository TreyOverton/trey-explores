# Deploy to Firebase

Use Firebase if you want to control who can access your site. It supports three modes: fully public, restricted to a Google Workspace domain (e.g., everyone at `@yourcompany.com`), or restricted to a specific list of email addresses.

If you don't need access control, [GitHub Pages](deploy-github-pages.md) is simpler.

## What You Need to Do Manually

Firebase requires a few steps in your browser that Claude Code can't do for you.

### Step 1: Create a Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project**
3. **Project name** — use your site name or something short (e.g., "my-docs-site"). This becomes part of your URL.
4. **Google Analytics** — you can disable this (toggle off). It's not needed for a documentation site.
5. Click **Create project** and wait for it to finish
6. Note your **Project ID** — it's shown below the project name on the project home page (e.g., `my-docs-site-abc12`)

### Step 2: Register a Web App

1. On the Firebase project home page, click the **web icon** (`</>`) to add a web app
2. **App nickname** — anything you'll recognize (e.g., "docs site")
3. **Firebase Hosting** — leave this **unchecked** (we handle hosting separately)
4. Click **Register app**
5. You'll see a code block with your config values that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

**Keep this page open** or copy these values — you'll give them to Claude Code in the next step.

### Step 3: Enable Google Sign-In (Skip If Public)

Only needed if you're restricting access by domain or allowlist:

1. In the Firebase Console left sidebar, click **Build** → **Authentication**
2. Click **Get started**
3. Under the **Sign-in method** tab, click **Google**
4. Toggle **Enable** (top right)
5. **Public-facing name** — enter your site name or organization name. This is what users see on the Google sign-in screen (e.g., "Acme Docs" or "Workshop Materials"). You can change it later.
6. **Support email** — pick your email from the dropdown. This is shown on the sign-in page if users need help.
7. Click **Save**

That's everything in Firebase Console.

## What Claude Code Does for You

Tell Claude Code you want to deploy to Firebase and give it your Project ID and config values from Step 2. It will:

- Set up your `.firebaserc` with your project ID
- Update `site/auth-config.js` with your Firebase config and auth mode
- Install the Firebase CLI if needed
- Log you in (opens a browser window for Google sign-in)
- Run `firebase deploy`

Or if you prefer to do it yourself:

```bash
cp .firebaserc.template .firebaserc        # Copy the template
# Edit .firebaserc — replace YOUR_FIREBASE_PROJECT_ID with your actual project ID
# Edit site/auth-config.js — add your Firebase config values and set your auth mode
npm install -g firebase-tools               # Install Firebase CLI (once)
firebase login                              # Log in (opens browser)
firebase deploy                             # Deploy
```

Your site will be live at `https://YOUR_PROJECT_ID.web.app`.

## Choosing an Auth Mode

Edit the `mode` value in `site/auth-config.js`:

| Mode | Who Can Access | When to Use |
|------|---------------|-------------|
| `"public"` | Anyone | You want Firebase hosting but don't need access control |
| `"domain"` | Anyone with an `@yourcompany.com` Google account | Company or school internal docs |
| `"allowlist"` | Only specific email addresses you list | Small team or client-facing docs |

For **domain** mode, also set `allowedDomain` to your domain (e.g., `"yourcompany.com"`).

For **allowlist** mode, add email addresses to the `allowedEmails` list.

> **During development**, auth is automatically skipped on `localhost` so you can preview without signing in.

## Advanced: Custom Domain

1. In Firebase Console, go to **Hosting** > **Add custom domain**
2. Follow the DNS verification steps
3. If using auth, also add the domain under **Authentication** > **Settings** > **Authorized domains**
