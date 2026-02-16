# Decap CMS Configuration for Daito Design

This directory contains the Decap CMS (formerly Netlify CMS) configuration and sample data files for the Daito Design website.

## Architecture Overview

The CMS is configured to manage content through **structured JSON data files** instead of markdown. Each page has a corresponding JSON file in the `admin/data/` directory that editors can modify through the Decap UI.

### File Structure

```
admin/
├── config.yml                      # Main CMS configuration
├── data/
│   ├── homepage.json              # Homepage content
│   ├── about.json                 # About page content
│   ├── services.json              # Services page content
│   ├── settings.json              # Global brand settings & colors
│   └── case-studies/
│       ├── shell.json             # Shell case study
│       ├── constellation.json      # Constellation case study
│       ├── schneider.json         # Schneider Electric case study
│       ├── 3lc.json               # 3LC case study
│       ├── bluware.json           # Bluware case study
│       └── tdecu.json             # TDECU case study
└── issues/                        # Content issues/todo tracking
```

## Collections Explained

### 1. **Pages (Single File Collections)**

Pages like Homepage, About, and Services use **file-based collections** rather than folder-based. This keeps page structure organized in one JSON file per page.

#### Homepage (`admin/data/homepage.json`)
- **Hero section**: Eyebrow, headline, subtitle, background image, CTA
- **Trust strip**: Client logos/names
- **Statement section**: Main quote with highlighted phrase
- **Value proposition**: Heading and body text
- **Services overview**: 3 service cards with titles, descriptions, and related services
- **Featured case studies**: 3 case study cards with metrics
- **Industries section**: 4 industry cards
- **Insights section**: 3 featured blog articles
- **Bottom CTA section**: Call-to-action block

#### About Page (`admin/data/about.json`)
- **Hero**: Eyebrow, headline, subtitle
- **Story section**: Heading, subheading, and multiple body paragraphs
- **Values**: 3 value cards (title + description)
- **Global presence**: Locations with city, type (HQ/Office/Studio), and description
- **Expertise**: 6 expertise cards
- **Team**: Team member list (name, title, photo)
- **CTA**: Bottom call-to-action

#### Services Page (`admin/data/services.json`)
- **Hero**: Eyebrow, headline, subtitle
- **Service phases**: 3 phases, each with heading, description, and 4 service cards
- **Industries**: 4 industry cards with featured clients list
- **CTA**: Bottom call-to-action

### 2. **Case Studies (Folder Collection)**

Case studies are stored in `admin/data/case-studies/` as individual JSON files, allowing editors to:
- Create new case studies
- Edit existing case studies
- Delete case studies

#### Case Study Structure
Each case study contains:
- **Meta**: Slug, client name, industry, year/date
- **Hero section**: Headline, subtitle/lead, hero image, 3 metrics (value + label)
- **Challenge section**: Heading, intro paragraph, 3 challenge cards
- **Approach section**: Heading, intro paragraph, 4 process steps
- **Work section**: Heading, intro text, multiple deliverable cards
- **Results section**: Heading, intro text, 4 result metrics (value, label, description)
- **Services used**: List of service names
- **CTA section**: Heading and button text

### 3. **Site Settings**

Global brand configuration stored in `admin/data/settings.json`:
- **Brand colors**: Primary (oxblood), Secondary (sand), Accent (charcoal), Success, Warning, Error
- **Company information**: Name, tagline, email, phone, website
- **Social links**: LinkedIn, Twitter, Instagram
- **Analytics**: Google Analytics ID

### 4. **Content Issues Tracker**

The "Content Issues" collection allows you to:
- Log content gaps or problems
- Assign priority (Low, Medium, High, Critical)
- Track status (To Do, In Progress, Done)
- Assign to team members
- Files stored in `admin/issues/`

## Widget Types Used

### Text Widgets
- `string`: Short text (titles, headlines)
- `text`: Longer text (subtitles, descriptions)
- `markdown`: Rich formatted content with bold, italic, lists, code blocks
- `color`: Color picker for brand colors

### List Widgets
- `list`: Simple arrays of items (e.g., client names, services)
- `list` with `fields`: Arrays of objects (e.g., service cards with title + description)

### Object Widgets
- Used for grouping related fields (e.g., hero section contains multiple fields)
- Can be collapsed/expanded for better UX
- Allows unlimited nesting

### Media Widgets
- `image`: Image uploads with preview

### Select Widgets
- `select`: Dropdown choices (e.g., Priority: Low/Medium/High/Critical)

## How Content Maps to HTML

The JSON structure is designed to be intuitive:

1. **Section-based organization**: Each major section is an object (hero, challenge, approach, etc.)
2. **Card arrays**: Repeating elements (metrics, cards, steps) are stored as arrays of objects
3. **Markdown support**: Body copy uses `markdown` widget for rich formatting
4. **Asset paths**: Image paths use absolute URLs `/images/filename.jpg`

### Example: Hero Section

**JSON in CMS:**
```json
{
  "hero": {
    "eyebrow": "Industrial UX",
    "headline": "We design for the field.",
    "subtitle": "Enterprise software that works...",
    "background_image": "/images/hero.jpg",
    "cta_text": "See Our Work",
    "cta_link": "/case-studies.html"
  }
}
```

**Your HTML would access it:**
```html
<section class="hero" style="background-image: url({{ hero.background_image }})">
  <span class="eyebrow">{{ hero.eyebrow }}</span>
  <h1>{{ hero.headline }}</h1>
  <p>{{ hero.subtitle }}</p>
  <a href="{{ hero.cta_link }}" class="btn">{{ hero.cta_text }}</a>
</section>
```

## Setup Instructions

### 1. Enable GitHub Authentication
The config is set to use GitHub as the backend. Make sure:
- Repository is set to `jaredhuke/Daito2026` (or your repo)
- Branch is `main`
- Authentication endpoint is configured at `/api/auth`

### 2. Load Data in HTML Templates
Create a small JS loader that:
1. Fetches JSON from `admin/data/[page].json`
2. Inserts content into your HTML via JS or template engine

**Example (vanilla JS):**
```javascript
async function loadPageContent() {
  const response = await fetch('/admin/data/homepage.json');
  const data = await response.json();
  
  // Populate hero
  document.querySelector('.hero-title').textContent = data.hero.headline;
  document.querySelector('.hero-subtitle').textContent = data.hero.subtitle;
  // ... etc
}
```

Or use a template engine like **Handlebars**, **Nunjucks**, or **EJS** for cleaner markup.

### 3. Access the CMS
- Navigate to `/admin/index.html`
- Authenticate with GitHub
- Start editing content in the intuitive UI

## Editor Experience Features

### Organized Sections
- Each page is logically grouped into sections (Hero, Challenge, Approach, Results)
- Collapsed sections reduce cognitive load
- Clear labels and hints guide editors

### Rich Content Support
- `markdown` widget allows editors to format body copy without HTML knowledge
- Image picker with preview
- Color picker for brand colors
- Date/time picker for scheduling

### Validation & Hints
- Hints explain what each field is for (e.g., "e.g., 'Industrial UX & Experience Design'")
- Default values reduce data entry
- Max field limits prevent content overflow (e.g., max 3 hero metrics)

### Consistent Patterns
- All case studies follow the same structure
- Same field types used consistently
- Easy to understand even for non-technical editors

## Best Practices

### For Content Editors
1. **Use markdown** for body copy to enable proper formatting
2. **Keep headlines punchy** - these are scanned, not read
3. **Write benefits, not features** - focus on outcomes
4. **Use consistent language** across case studies
5. **Optimize images before upload** - keep file sizes < 500KB

### For Developers
1. **Don't hardcode content** - always fetch from JSON files
2. **Validate JSON structure** - check sample files in `admin/data/`
3. **Use consistent image paths** - all images go in `/images/`
4. **Document custom fields** - if you add new fields, update this README
5. **Test with sample data** - use provided JSON files to verify integrations

## Troubleshooting

### Images Not Showing
- Check that image paths are absolute: `/images/filename.jpg`
- Verify images are in the correct folder
- Use modern formats: `.webp`, `.jpg`, `.png`

### Content Not Loading
- Verify JSON file is valid (use JSONLint)
- Check that paths in `config.yml` match actual file locations
- Browser console will show fetch errors

### Editor Can't Save
- Check GitHub repo settings (do not require branch protection review)
- Verify authentication token is valid
- Ensure `base_url` in config matches your Vercel deployment

## Next Steps

1. **Implement the data loader** - Create JS to fetch and display JSON content
2. **Test the CMS** - Log in and make a test edit
3. **Train your team** - Show editors how to use the interface
4. **Set up CI/CD** - Automatically rebuild site when content changes
5. **Monitor analytics** - Track which content performs best

---

**Questions?** Review the sample JSON files to understand the data structure. The config is designed to be self-documenting through hints and labels.
