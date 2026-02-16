# Daito Design Website — Deployment Guide

**Last updated:** February 16, 2026  
**Site URL:** https://daito2026.vercel.app  
**Repository:** Daito-Design/Daito2026 (GitHub)  
**Deployment platform:** Vercel  
**CMS:** Sveltia CMS (with GitHub PKCE authentication)

---

## Overview

The Daito Design website is a **static HTML/CSS site** with no build step. Changes to HTML, CSS, or images in the GitHub repo are automatically deployed to Vercel within ~30 seconds of pushing to the `main` branch. Content can also be edited directly via the CMS admin panel, which commits changes to GitHub and triggers automatic deployment.

**Key principles:**
- Edit files directly in the repo (no build tool needed)
- Push to `main` branch → Vercel deploys automatically
- Use the CMS for non-technical edits (case studies, blog posts, settings)
- All CMS edits create commits in GitHub

---

## Prerequisites

Before deploying, ensure you have:

1. **GitHub Account**
   - Member of the Daito-Design organization
   - Write (push) access to the Daito2026 repository
   - Verify access: https://github.com/Daito-Design/Daito2026

2. **Vercel Account**
   - Linked to the GitHub repo (auto-deploys are already configured)
   - No action needed on your part unless project settings require changes

3. **Git Installed Locally** (if developing locally)
   - Download from https://git-scm.com/
   - Verify: Open terminal and run `git --version`

---

## Project Structure

Understanding the file layout helps you know where to make changes:

```
/                           Root folder (served as-is)
├── index.html              Homepage
├── about.html              About page
├── services.html           Services page (if exists)
├── contact.html            Contact form page
├── agentic-experience.html Agentic Experience page
├── agentic-assessment.html Assessment tool
├── agentic-manual.html     Agentic Experience Manual
├── case-studies.html       Case studies overview
├── case-study-*.html       Individual case studies
│   ├── case-study-shell.html
│   ├── case-study-constellation.html
│   ├── case-study-3lc.html
│   ├── case-study-schneider.html
│   ├── case-study-bluware.html
│   └── case-study-tdecu.html
├── blog.html               Blog overview page
├── blog/                   Blog post folder
│   ├── agent-journey.html
│   ├── enterprise-ux.html
│   └── human-ai-collaboration.html
├── css/                    Stylesheets
│   └── styles.css          Main CSS file
├── js/                     JavaScript files
├── images/                 Image assets
│   ├── daito-logo.webp     (dark logo)
│   ├── daito-logo-white.webp (white logo)
│   └── ... (other images)
├── admin/                  CMS configuration
│   ├── index.html          CMS admin interface
│   ├── config.yml          CMS collection definitions
│   ├── brand.json          Brand color settings
│   └── issues.json         Content issues tracker
├── api/                    Legacy OAuth endpoints (deprecated)
├── _redirects              Redirect rules (Vercel)
├── vercel.json             Vercel configuration
└── 404.html                Custom 404 page
```

---

## Local Development

### Step 1: Clone the Repository

```bash
git clone https://github.com/Daito-Design/Daito2026.git
cd Daito2026
```

### Step 2: Open a Local Preview

Since there's no build step, you can preview the site by opening files directly in your browser:

1. Open `index.html` in your browser (double-click the file or drag it into Chrome/Safari)
2. Click links to navigate through the site
3. **Note:** Some features may not work in file:// mode (e.g., external API calls); use a local server for full testing

**To run a local web server** (optional, for complete testing):

```bash
# Using Python 3 (macOS/Linux)
cd Daito2026
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

---

## Making Changes

### Option A: Edit in GitHub (Easiest for Quick Fixes)

1. Go to https://github.com/Daito-Design/Daito2026
2. Navigate to the file you want to edit (e.g., `about.html`)
3. Click the **pencil icon** (edit button)
4. Make your changes
5. Scroll down and click **Commit changes**
6. Add a commit message (e.g., "Update About page team section")
7. Select **Commit directly to the main branch**
8. Click **Commit changes**

**Deployment happens automatically** — check https://daito2026.vercel.app within 30 seconds.

### Option B: Edit Locally & Push (For Larger Changes)

1. Clone the repo (see "Local Development" above)
2. Open files in your text editor (VS Code, Sublime, etc.)
3. Make your edits and save
4. Commit and push:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

5. Vercel deploys automatically

### Option C: Use the CMS (Non-Technical Changes)

See **Using the CMS** section below.

---

## Using the CMS (Sveltia CMS)

The CMS allows editing of content, case studies, blog posts, and settings without touching code.

### Accessing the CMS

1. Go to https://daito2026.vercel.app/admin/
2. Click **Login with GitHub**
3. You'll be asked to authorize access to the Daito2026 repo
4. After login, you'll see the CMS dashboard

### What You Can Edit in the CMS

- **Case Studies:** Edit HTML content for Shell, Constellation, 3LC, Schneider, Bluware, TDECU
- **Blog Posts:** Edit or create blog posts (Agent Journey, Enterprise UX, Human-AI Collaboration)
- **Site Pages:** Edit Homepage, About, Services, Contact, Agentic Experience
- **Brand Settings:** Update brand colors (Sand, Charcoal, Oxblood)
- **Content Issues:** Track issues that need fixing (priority, status, notes)
- **Image Library:** Manage images with metadata

### How CMS Edits Work

1. Make changes in the CMS editor
2. Click **Save** (top-right button)
3. The CMS creates a **commit in GitHub** automatically
4. Vercel detects the commit and **deploys within 30 seconds**
5. Changes appear live on the website

### CMS Limitations

- The CMS edits **HTML content directly** — if you're not familiar with HTML, it's easy to break formatting
- The CMS does **not** have a visual WYSIWYG editor for HTML files
- For complex edits, it's safer to edit directly in GitHub or locally
- The CMS cannot create entirely new pages (you must add files to GitHub first)

---

## CMS Troubleshooting

### Problem: "You don't have access to the repository"

**Cause:** Your GitHub account doesn't have write access to the Daito2026 repo.

**Solution:**

1. Verify you're logged into the correct GitHub account in your browser
2. Check that your account is a **member** of the Daito-Design organization
3. Verify the repository settings show you have **write access**
4. Clear browser cache and cookies, then try again
5. If still blocked:
   - Ask the repo owner (Jared Huke) to add you as a collaborator
   - Repo owner goes to GitHub → Daito-Design/Daito2026 → Settings → Collaborators → Add person

### Problem: CMS page loads but shows blank content

**Cause:** Browser cache or CORS issue.

**Solution:**

1. Check browser console for errors (Press F12 → Console tab)
2. Try opening CMS in an incognito/private browser window
3. Try a different browser (Chrome, Safari, Firefox)
4. Verify `admin/config.yml` exists and has correct syntax
5. Check that `repo: Daito-Design/Daito2026` is in `admin/config.yml`

### Problem: CMS changes don't appear on the live site

**Cause:** Vercel hasn't deployed yet, or cache hasn't cleared.

**Solution:**

1. Wait 30-60 seconds for Vercel to deploy
2. Check Vercel project status: https://vercel.com → daito2026 project → Deployments
3. Hard refresh the live site (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows/Linux)
4. If still not visible, check the GitHub repo to confirm the CMS commit was created

---

## Vercel Configuration

The Vercel project (`daito2026`) is already configured. Here's what's set up:

### Build Settings

- **Build Command:** None (static files, no build needed)
- **Output Directory:** `.` (root folder)
- **Framework:** None (static site)

### Server Configuration (vercel.json)

The `vercel.json` file defines:

- **Clean URLs:** `/about` redirects to `/about.html` (enabled)
- **Security Headers:** Content Security Policy, X-Frame-Options, HSTS, etc.
- **Cache Rules:** CSS, JS, images cached forever (1 year)
- **Redirects:** `/assessment` → `/agentic-assessment.html`, `/manual` → `/agentic-manual.html`, etc.

### Custom Domains

To add a custom domain (e.g., `daito.design`):

1. Go to https://vercel.com → daito2026 project → Settings → Domains
2. Click **Add Domain**
3. Enter the domain name
4. Vercel provides DNS instructions
5. Update DNS records at your domain registrar
6. Vercel auto-generates SSL certificate

---

## Adding New Content

### Adding a New Case Study

1. **Create the HTML file** in the root folder (e.g., `case-study-acme.html`)
2. Use an existing case study as a template (e.g., `case-study-shell.html`)
3. Replace content with your new case study
4. Push to GitHub (or edit in GitHub directly)
5. **Register in the CMS** (optional, for CMS editing):
   - Edit `admin/config.yml`
   - Add to the `case-studies` collection:
   ```yaml
   - label: "ACME Corporation"
     name: "acme"
     file: "case-study-acme.html"
     fields:
       - {label: "Content", name: "body", widget: "code", default_language: "html", output_code_only: true}
   ```
6. Link to the new case study from `case-studies.html`
7. Commit and deploy

### Adding a New Blog Post

1. **Create the HTML file** in the `blog/` folder (e.g., `blog/my-post.html`)
2. Use an existing blog post as a template (e.g., `blog/agent-journey.html`)
3. Edit the post content
4. Push to GitHub
5. **Register in CMS** (optional):
   - Edit `admin/config.yml`
   - Add to the `blog` collection
6. Link to the post from `blog.html`
7. Commit and deploy

### Adding a New Page

1. **Create the HTML file** in the root folder (e.g., `insights.html`)
2. Copy content structure from an existing page (e.g., `about.html`)
3. Replace content as needed
4. Push to GitHub
5. **Register in CMS** (optional):
   - Edit `admin/config.yml`
   - Add to the `pages` collection
6. Link to the new page from navigation/menus
7. Commit and deploy

### Adding Images

1. **Optimize the image** (compress using online tool like TinyPNG or use ImageOptim on Mac)
2. **Add to the `images/` folder** (via GitHub upload or locally)
3. **Reference in HTML** with the correct path:
   ```html
   <img src="/images/my-image.webp" alt="Description">
   ```
4. Commit and push
5. For best performance, use `.webp` format; PNG and JPEG also work

---

## Deployment Checklist

Use this checklist before considering the site "live":

- [ ] All HTML files are syntactically correct (no unclosed tags)
- [ ] All images are present and paths are correct
- [ ] CSS is linked correctly in each HTML file
- [ ] Navigation links point to correct files
- [ ] Logo files exist (`daito-logo.webp`, `daito-logo-white.webp`)
- [ ] `admin/config.yml` is valid and properly formatted
- [ ] GitHub repo has all necessary files committed
- [ ] Vercel deployment succeeded (check Vercel dashboard)
- [ ] Live site loads at https://daito2026.vercel.app
- [ ] CMS admin is accessible at https://daito2026.vercel.app/admin/
- [ ] Test a few page links on the live site
- [ ] Test CMS login and ability to edit a test file
- [ ] Check mobile responsiveness on a phone/tablet

---

## Brand Guidelines (Reference)

Use these guidelines for consistency across the site:

### Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| Sand | `#F5F0E8` | Primary background, light elements |
| Charcoal | `#1A1A1A` | Primary text, dark elements |
| Oxblood | `#722F37` | Accents, highlights, CTAs |

### Typography

- **Headings:** Cormorant Garamond (serif, elegant)
- **Body Text:** Inter (sans-serif, clean and readable)
- Both fonts are imported via Google Fonts in the `<head>` of HTML files

### Logo

- **Dark Logo:** `daito-logo.webp` (use on light backgrounds)
- **White Logo:** `daito-logo-white.webp` (use on dark backgrounds)
- Location: `/images/`

---

## Quick Reference: Common Tasks

| Task | Steps |
|------|-------|
| **Fix a typo on the homepage** | Edit `index.html` in GitHub or locally, commit, push |
| **Update a case study** | Edit `case-study-*.html` via CMS or GitHub, commit, push |
| **Add a new blog post** | Create `blog/new-post.html`, register in CMS, link from `blog.html` |
| **Change a color** | Edit color in CMS (Brand Settings) or update CSS in `css/styles.css` |
| **Add a new page** | Create HTML file, add to CMS (optional), link from navigation |
| **Deploy changes** | Commit to GitHub main branch → Vercel auto-deploys |
| **Check deployment status** | Visit https://vercel.com → daito2026 → Deployments |

---

## Support & Questions

- **GitHub Issues:** Create an issue in the GitHub repo: https://github.com/Daito-Design/Daito2026/issues
- **Vercel Status:** Check deployment logs at https://vercel.com/dashboard
- **CMS Auth Issues:** Verify GitHub account access to the Daito-Design organization
- **Content Issues Tracker:** Use the CMS to log content issues that need fixing

---

**Document last verified:** February 16, 2026
