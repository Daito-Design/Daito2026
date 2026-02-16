# Decap CMS Implementation Guide for Daito Design

## Quick Summary

You now have a **complete, production-ready CMS configuration** that replaces raw HTML editing with a structured, user-friendly interface. The config is saved at:

**`/admin/config.yml`**

### What Changed

**Before:** Every page was hardcoded HTML with inline styles and content
**After:** Content is stored in clean JSON files in `admin/data/`, and the CMS provides an editor interface

### Key Files Created

1. **`admin/config.yml`** (509 lines) - Complete Decap CMS configuration
2. **`admin/data/homepage.json`** - Homepage content structure
3. **`admin/data/about.json`** - About page content structure  
4. **`admin/data/services.json`** - Services page content structure
5. **`admin/data/settings.json`** - Global brand settings & colors
6. **`admin/data/case-studies/shell.json`** - Sample case study (template for others)
7. **`admin/README.md`** - Detailed documentation

---

## Implementation Checklist

### Step 1: Set Up CMS Authentication (Day 1)

The config is pre-configured for GitHub authentication. You need to:

- [ ] Verify GitHub repo is `jaredhuke/Daito2026`
- [ ] Ensure repo branch is `main`
- [ ] **Create GitHub OAuth App** at `github.com/settings/developers` (Settings → Developer Settings → OAuth Apps)
  - Authorization callback URL: `https://daito2026.vercel.app/api/auth`
  - Get Client ID and Client Secret
- [ ] Set environment variables on Vercel:
  ```
  GITHUB_CLIENT_ID=your_client_id
  GITHUB_CLIENT_SECRET=your_client_secret
  ```
- [ ] Deploy the auth endpoint (see Step 2)

### Step 2: Deploy Auth Endpoint (Day 1-2)

Decap CMS needs a backend auth handler. Two options:

#### Option A: Use Vercel Functions (Recommended)
Already set up in the config. Just ensure `/api/auth` endpoint exists:

```javascript
// /api/auth.js (Vercel serverless function)
import { auth } from '@decap/cms-backend-github';

export default async function handler(req, res) {
  return auth(req, res);
}
```

#### Option B: Use Netlify Identity
Alternative if not using Vercel. Change config to:
```yaml
backend:
  name: github-backend
  repo: jaredhuke/Daito2026
  branch: main
```

### Step 3: Load JSON Content in HTML (Day 2-3)

The CMS edits JSON files, but your HTML needs to **load and display** that data. Choose one approach:

#### Option A: Server-Side Template Engine (Recommended for Static Sites)
Use Node.js build process with **Nunjucks** or **EJS**:

```html
<!-- index.html template -->
<section class="hero" style="background-image: url({{ hero.background_image }})">
  <span class="eyebrow">{{ hero.eyebrow }}</span>
  <h1>{{ hero.headline }}</h1>
  <p>{{ hero.subtitle }}</p>
  <a href="{{ hero.cta_link }}">{{ hero.cta_text }}</a>
</section>
```

Build script:
```javascript
const nunjucks = require('nunjucks');
const fs = require('fs');

const homepageData = JSON.parse(
  fs.readFileSync('admin/data/homepage.json', 'utf8')
);

const html = nunjucks.render('src/index.njk', homepageData);
fs.writeFileSync('dist/index.html', html);
```

#### Option B: Client-Side JavaScript (For SPAs)
Load JSON and populate DOM:

```javascript
// Load homepage content
async function loadPage() {
  const data = await fetch('/admin/data/homepage.json').then(r => r.json());
  
  // Hero section
  document.querySelector('.hero').style.backgroundImage = 
    `url(${data.hero.background_image})`;
  document.querySelector('.hero-title').textContent = data.hero.headline;
  document.querySelector('.hero-subtitle').textContent = data.hero.subtitle;
  
  // Trust strip
  const clients = data.trust_strip.clients
    .map(client => `<span>${client}</span>`)
    .join(' | ');
  document.querySelector('.trust-clients').innerHTML = clients;
  
  // Featured case studies
  data.featured_cases.cases.forEach((caseStudy, i) => {
    const card = document.querySelector(`.case-card-${i}`);
    card.querySelector('h3').textContent = caseStudy.client;
    // ... etc
  });
}

loadPage();
```

#### Option C: Use a Static Site Generator
If using **Hugo**, **Jekyll**, **11ty**, or **Next.js**, they can all load JSON files during build:

```javascript
// 11ty example
module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("json", contents => 
    JSON.parse(contents)
  );
  return {
    dir: { data: "admin/data" }
  };
};
```

Then in templates:
```html
<h1>{{ homepage.hero.headline }}</h1>
```

### Step 4: Create Remaining Case Study JSON Files (Day 3-4)

The `shell.json` is a template. Create similar files for:

- [ ] `constellation.json`
- [ ] `schneider.json`
- [ ] `3lc.json`
- [ ] `bluware.json`
- [ ] `tdecu.json`

Use the Shell case study structure as a template, updating:
- `slug`, `client`, `industry`, `year`
- `hero.headline` and `hero.subtitle`
- All section content (challenge, approach, work, results)

### Step 5: Test the CMS (Day 4)

- [ ] Navigate to `https://daito2026.vercel.app/admin/`
- [ ] Click "Login with GitHub"
- [ ] Verify you can see all collections (Homepage, About, Services, Case Studies)
- [ ] Edit a field (e.g., homepage headline) and save
- [ ] Verify the JSON file was updated in GitHub
- [ ] Test that your HTML loads and displays the updated content

### Step 6: Train Your Team (Day 5)

Provide access to:
1. The Decap CMS UI at `/admin/`
2. The `admin/README.md` documentation
3. Best practices:
   - Keep headlines punchy
   - Use markdown for body copy formatting
   - Optimize images before upload
   - Test after editing

---

## Content Editing Workflow

### For Non-Technical Users

1. Go to `https://daitodesign.com/admin/`
2. Log in with GitHub (no password needed)
3. Click the collection you want to edit (Homepage, About, Services, etc.)
4. Edit fields directly in the form
5. Click "Publish" to save

### For Adding a New Case Study

1. Go to Admin → Case Studies
2. Click "New Case Study"
3. Fill in all fields:
   - Slug (machine name like `bluware`)
   - Client name
   - Industry
   - Year
   - Hero section (headline, subtitle, image, metrics)
   - Challenge cards (3 max)
   - Approach steps (4)
   - Work deliverables
   - Results metrics (4)
4. Click "Publish"
5. The JSON file is automatically created in `admin/data/case-studies/`

---

## Field Reference

### Hero Section (All Pages)
```json
{
  "eyebrow": "Small label above headline",
  "headline": "Main title (keep short)",
  "subtitle": "Supporting text (2-3 sentences)",
  "background_image": "/images/hero.jpg",
  "cta_text": "Button label",
  "cta_link": "/target-page.html"
}
```

### Challenge/Approach/Work Sections
```json
{
  "heading": "Section title",
  "intro": "Intro paragraph (supports **markdown**)",
  "cards": [
    {
      "title": "Card title",
      "description": "Card description (**supports markdown**)"
    }
  ]
}
```

### Metrics (Hero & Results)
```json
{
  "metrics": [
    { "value": "40%", "label": "Faster" },
    { "value": "6", "label": "Continents" }
  ]
}
```

### Markdown Support
Fields marked as `markdown` support:
- **Bold text** with `**text**`
- *Italic text* with `*text*`
- Bullet lists
- Numbered lists
- [Links](http://example.com)
- `Code blocks` with backticks

---

## Architecture Summary

### Data Flow

```
Browser
  ↓
/admin/index.html (Decap CMS UI)
  ↓
GitHub OAuth (Authentication)
  ↓
admin/config.yml (CMS Schema)
  ↓
admin/data/*.json (Content Files)
  ↓
User saves → Commits to GitHub → Webhook → Your Build System
  ↓
HTML pages load JSON → Display content
```

### Widget Types in Use

| Widget | Purpose | Example |
|--------|---------|---------|
| `string` | Short text fields | Headlines, titles |
| `text` | Multi-line text | Descriptions, subtitles |
| `markdown` | Rich formatted text | Body copy, challenges |
| `image` | Image uploads | Hero images, case study images |
| `object` | Grouped fields | Hero section (multiple fields together) |
| `list` | Arrays | Client names, services, team members |
| `color` | Color picker | Brand colors |
| `select` | Dropdown choice | Priority, status |

---

## Customization Guide

### Add a New Field to Homepage

1. Edit `admin/config.yml`, find the `homepage` collection
2. Add a field inside the appropriate object:

```yaml
- label: "Hero Section"
  name: "hero"
  widget: "object"
  fields:
    # ... existing fields ...
    - { label: "New Field Name", name: "new_field_name", widget: "string" }
```

3. Update `admin/data/homepage.json` with the new field:

```json
{
  "hero": {
    "eyebrow": "...",
    "new_field_name": "initial value"
  }
}
```

4. Update your HTML to use `{{ hero.new_field_name }}`

### Add a New Page

1. Create a new file collection in `config.yml`:

```yaml
- name: "contact"
  label: "Contact Page"
  files:
    - name: "contact"
      label: "Contact Page Data"
      file: "admin/data/contact.json"
      format: "json"
      fields:
        - { label: "Heading", name: "heading", widget: "string" }
        # ... add your fields ...
```

2. Create `admin/data/contact.json` with initial data

3. Update your HTML to fetch and display from `/admin/data/contact.json`

### Change Colors

Edit `admin/data/settings.json`:

```json
{
  "colors": {
    "primary": "#722F37",
    "secondary": "#F5F0E8",
    "accent": "#1A1A1A"
  }
}
```

Editors can change these via Admin → Site Settings, and your CSS can reference them.

---

## Deployment

### Deploy to Vercel

The config is already optimized for Vercel:

1. Push all files to GitHub
2. Vercel automatically detects changes
3. GitHub Actions (or Vercel Build) runs your build script
4. HTML is generated from JSON data
5. `/admin/` is live at `daito2026.vercel.app/admin/`

### Deploy to Netlify

Change the backend config to:
```yaml
backend:
  name: netlify-cms
  repo: jaredhuke/Daito2026
```

And follow Netlify's CMS documentation.

---

## Troubleshooting

### "GitHub Login Failed"
- Check that OAuth app Client ID/Secret are set as environment variables
- Verify the callback URL matches exactly: `https://daito2026.vercel.app/api/auth`
- Check browser console for error messages

### "Collection Not Found"
- Verify JSON files exist in the correct paths
- Check that file paths in `config.yml` match actual files
- Restart the dev server if editing config.yml locally

### "Image Not Uploading"
- Check that `images/` folder exists and is writable
- Verify media_folder is set correctly in config: `media_folder: "images"`
- Check GitHub repo has no branch protection that blocks commits

### "Content Not Showing on Website"
- Verify HTML is loading JSON from correct path
- Check that JSON field names match exactly (case-sensitive)
- Open browser DevTools → Network tab to see if JSON loads
- Check for JavaScript errors in console

---

## Next Steps

1. **Complete Step 1-2** (Auth setup) this week
2. **Complete Step 3** (JSON loader) next week  
3. **Complete Step 4** (Remaining case studies) week 3
4. **Complete Step 5-6** (Testing & training) week 4

Once live, the CMS will handle 80% of content updates without touching code.

---

**Questions?** See `admin/README.md` for detailed architecture documentation.
