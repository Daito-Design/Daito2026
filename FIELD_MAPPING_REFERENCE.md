# Decap CMS Field Mapping Reference

This document provides a complete field-by-field reference for all content types, showing how CMS fields map to JSON structure and example values.

---

## HOMEPAGE

**File:** `admin/data/homepage.json`

### Hero Section
```json
{
  "hero": {
    "eyebrow": "Industrial UX & Experience Design",
    "headline": "We design for the field.",
    "subtitle": "Enterprise software that works for the people who actually use it.",
    "background_image": "/images/hero-offshore.jpg",
    "cta_text": "See Our Work",
    "cta_link": "/case-studies.html"
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Eyebrow (Label) | `hero.eyebrow` | string | Small text above headline | "Industrial UX & Experience Design" |
| Headline | `hero.headline` | string | Main title | "We design for the field." |
| Subtitle | `hero.subtitle` | text | Supporting text | "Enterprise software that works..." |
| Background Image | `hero.background_image` | image | Hero background | "/images/hero-offshore.jpg" |
| CTA Button Text | `hero.cta_text` | string | Button label | "See Our Work" |
| CTA Button Link | `hero.cta_link` | string | Button destination | "/case-studies.html" |

### Trust Strip Section
```json
{
  "trust_strip": {
    "clients": [
      "Shell",
      "Constellation",
      "Exelon",
      "NTT"
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Featured Clients | `trust_strip.clients[]` | list | Client logos/names | ["Shell", "Constellation", ...] |

### Statement Section
```json
{
  "statement": {
    "text": "Most enterprise software is designed by people who've never used it.",
    "highlight": "We're different."
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Main Quote | `statement.text` | string | Primary statement | "Most enterprise software is designed..." |
| Highlighted Word/Phrase | `statement.highlight` | string | Text to emphasize | "We're different." |

### Value Proposition Section
```json
{
  "value_prop": {
    "heading": "Enterprise Complexity at Global Scale",
    "body": "Our 15+ years in industrial UX means we understand the real constraints: extreme environments, safety-critical workflows, multi-disciplinary teams, and legacy system integration."
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Heading | `value_prop.heading` | string | Section heading | "Enterprise Complexity at Global Scale" |
| Body Text | `value_prop.body` | markdown | Full paragraph (supports **bold**, etc.) | "Our 15+ years..." |

### Services Overview Section
```json
{
  "services_section": {
    "heading": "What We Do",
    "subtitle": "Full-spectrum enterprise experience design",
    "services": [
      {
        "number": "01",
        "title": "UX Research & Discovery",
        "description": "Deep contextual research in the field...",
        "services_list": [
          "User Research",
          "Contextual Inquiry",
          "Workflow Mapping",
          "Personas"
        ]
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Heading | `services_section.heading` | string | Section title | "What We Do" |
| Subtitle | `services_section.subtitle` | string | Subheading | "Full-spectrum enterprise experience design" |
| Number/Icon | `services_section.services[].number` | string | Card number | "01", "02", "03" |
| Title | `services_section.services[].title` | string | Service title | "UX Research & Discovery" |
| Description | `services_section.services[].description` | text | Service description | "Deep contextual research..." |
| Services List | `services_section.services[].services_list[]` | list | Related services | ["User Research", "Workflow Mapping", ...] |

### Featured Case Studies
```json
{
  "featured_cases": {
    "heading": "Featured Work",
    "cases": [
      {
        "client": "Shell",
        "headline": "Designing Fluid Interfaces for Subsurface Navigation",
        "description": "Since 2018, a partnership transforming exploration workflows across 6 continents.",
        "metric1_value": "2018",
        "metric1_label": "Partnership Start",
        "metric2_value": "6",
        "metric2_label": "Continents",
        "image": "/images/case-shell-hero.jpg",
        "link": "/case-study-shell.html"
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Heading | `featured_cases.heading` | string | Section title | "Featured Work" |
| Client Name | `featured_cases.cases[].client` | string | Client name | "Shell" |
| Headline | `featured_cases.cases[].headline` | string | Case study headline | "Designing Fluid Interfaces..." |
| Description | `featured_cases.cases[].description` | text | Short description | "Since 2018, a partnership..." |
| Metric 1 Value | `featured_cases.cases[].metric1_value` | string | First metric value | "2018", "50%", "6x" |
| Metric 1 Label | `featured_cases.cases[].metric1_label` | string | First metric label | "Partnership Start" |
| Metric 2 Value | `featured_cases.cases[].metric2_value` | string | Second metric value | "6" |
| Metric 2 Label | `featured_cases.cases[].metric2_label` | string | Second metric label | "Continents" |
| Featured Image | `featured_cases.cases[].image` | image | Case study image | "/images/case-shell-hero.jpg" |
| Link | `featured_cases.cases[].link` | string | Case study URL | "/case-study-shell.html" |

### Industries Section
```json
{
  "industries": {
    "heading": "Industries We Serve",
    "cards": [
      {
        "name": "Energy & Utilities",
        "description": "Oil, gas, nuclear, renewables. From exploration to operations.",
        "icon_name": "energy"
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Heading | `industries.heading` | string | Section title | "Industries We Serve" |
| Industry Name | `industries.cards[].name` | string | Industry name | "Energy & Utilities" |
| Description | `industries.cards[].description` | text | Industry description | "Oil, gas, nuclear..." |
| Icon Name | `industries.cards[].icon_name` | string | CSS class or SVG name | "energy", "maritime" |

### Insights Section
```json
{
  "insights": {
    "heading": "Latest Insights",
    "articles": [
      {
        "tag": "Design",
        "title": "Designing for Extreme Environments",
        "excerpt": "What we learned designing interfaces for offshore platforms...",
        "image": "/images/blog-extreme.jpg",
        "link": "/blog/designing-for-extreme-environments.html"
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Heading | `insights.heading` | string | Section title | "Latest Insights" |
| Article Tag | `insights.articles[].tag` | string | Category tag | "Design", "Strategy", "Innovation" |
| Title | `insights.articles[].title` | string | Article title | "Designing for Extreme Environments" |
| Excerpt | `insights.articles[].excerpt` | text | Article summary | "What we learned designing interfaces..." |
| Featured Image | `insights.articles[].image` | image | Article image | "/images/blog-extreme.jpg" |
| Link | `insights.articles[].link` | string | Article URL | "/blog/designing-for-extreme-environments.html" |

### Bottom CTA Section
```json
{
  "cta_section": {
    "heading": "Ready to transform your enterprise software?",
    "body": "Let's talk about your biggest challenges...",
    "button_text": "Get in Touch",
    "button_link": "/contact.html"
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Heading | `cta_section.heading` | string | CTA heading | "Ready to transform your enterprise software?" |
| Body Text | `cta_section.body` | text | Supporting text | "Let's talk about your biggest challenges..." |
| Button Text | `cta_section.button_text` | string | Button label | "Get in Touch" |
| Button Link | `cta_section.button_link` | string | Button destination | "/contact.html" |

---

## CASE STUDIES

**File:** `admin/data/case-studies/[slug].json`
**Slug Examples:** `shell`, `constellation`, `schneider`, `3lc`, `bluware`, `tdecu`

### Meta & Hero
```json
{
  "slug": "shell",
  "client": "Shell",
  "industry": "Energy",
  "year": "2018-Present",
  "hero": {
    "headline": "Designing Fluid Interfaces for Subsurface Navigation",
    "subtitle": "Since 2018, we've partnered with Shell...",
    "image": "/images/case-shell-hero.jpg",
    "metrics": [
      { "value": "2018", "label": "Partnership Start" },
      { "value": "6", "label": "Continents" },
      { "value": "50+", "label": "Applications" }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Page Slug | `slug` | string | File name (auto-generated) | "shell", "constellation" |
| Client Name | `client` | string | Company name | "Shell" |
| Industry | `industry` | string | Industry category | "Energy", "Nuclear", "Manufacturing" |
| Year/Date | `year` | string | Timeline | "2018-Present", "2024" |
| Headline | `hero.headline` | string | Main case study title | "Designing Fluid Interfaces..." |
| Subtitle/Lead | `hero.subtitle` | markdown | Hero description | "Since 2018, we've partnered..." |
| Hero Image | `hero.image` | image | Hero image | "/images/case-shell-hero.jpg" |
| Metric Value | `hero.metrics[].value` | string | Metric value | "2018", "6", "50%" |
| Metric Label | `hero.metrics[].label` | string | Metric label | "Partnership Start", "Continents" |

### Challenge Section
```json
{
  "challenge": {
    "heading": "The Challenge",
    "intro": "Shell's exploration teams were managing complex subsurface data across fragmented systems...",
    "cards": [
      {
        "title": "Complex Workflows",
        "description": "Geoscientists juggle seismic data, well logs, geological models, and interpretation tools simultaneously."
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Section Heading | `challenge.heading` | string | Heading (default: "The Challenge") | "The Challenge" |
| Intro Paragraph | `challenge.intro` | markdown | Intro text | "Shell's exploration teams..." |
| Card Title | `challenge.cards[].title` | string | Challenge title | "Complex Workflows" |
| Card Description | `challenge.cards[].description` | markdown | Challenge description | "Geoscientists juggle..." |

### Approach Section
```json
{
  "approach": {
    "heading": "Our Approach",
    "intro": "We embedded ourselves in Shell's world...",
    "steps": [
      {
        "number": "1",
        "title": "Field Research",
        "description": "On-platform observation across multiple continents..."
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Section Heading | `approach.heading` | string | Heading (default: "Our Approach") | "Our Approach" |
| Intro Paragraph | `approach.intro` | markdown | Intro text | "We embedded ourselves..." |
| Step Number | `approach.steps[].number` | string | Sequential number | "1", "2", "3", "4" |
| Step Title | `approach.steps[].title` | string | Process step title | "Field Research" |
| Step Description | `approach.steps[].description` | markdown | Process description | "On-platform observation..." |

### Work Section
```json
{
  "work": {
    "heading": "The Work",
    "intro": "Since 2018, we've designed and refined multiple applications...",
    "cards": [
      {
        "title": "Fluid Data Navigation",
        "description": "Intuitive interfaces for navigating subsurface data..."
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Section Heading | `work.heading` | string | Heading (default: "The Work") | "The Work" |
| Intro Text | `work.intro` | markdown | Intro paragraph | "Since 2018, we've designed..." |
| Card Title | `work.cards[].title` | string | Deliverable title | "Fluid Data Navigation" |
| Card Description | `work.cards[].description` | markdown | Deliverable description | "Intuitive interfaces for..." |

### Results Section
```json
{
  "results": {
    "heading": "Results",
    "intro": "Our partnership has delivered tangible improvements...",
    "metrics": [
      {
        "value": "40%",
        "label": "Faster Interpretation Time",
        "description": "Geoscientists can now interpret seismic data 40% faster..."
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Section Heading | `results.heading` | string | Heading (default: "Results") | "Results" |
| Intro Paragraph | `results.intro` | markdown | Intro text | "Our partnership has delivered..." |
| Metric Value | `results.metrics[].value` | string | Metric value | "40%", "6/5", "98%" |
| Metric Label | `results.metrics[].label` | string | Metric label | "Faster Interpretation Time" |
| Metric Description | `results.metrics[].description` | markdown | Metric details | "Geoscientists can now interpret..." |

### Services & CTA
```json
{
  "services": [
    "UX Research",
    "Field Research",
    "Design Systems",
    "Interaction Design"
  ],
  "cta": {
    "heading": "Ready to transform your enterprise software?",
    "button_text": "Get in Touch"
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Services Used | `services[]` | list | Service names | ["UX Research", "Design Systems", ...] |
| CTA Heading | `cta.heading` | string | CTA heading | "Ready to transform..." |
| Button Text | `cta.button_text` | string | Button label | "Get in Touch" |

---

## ABOUT PAGE

**File:** `admin/data/about.json`

### Hero Section
```json
{
  "hero": {
    "eyebrow": "About Daito",
    "headline": "We design for the people who build the world.",
    "subtitle": "15 years of enterprise UX expertise. From offshore platforms to control rooms."
  }
}
```

### Story Section
```json
{
  "story": {
    "heading": "Our Story",
    "subheading": "How a small team of designers became trusted partners...",
    "paragraphs": [
      "Daito Design was founded on a simple insight...",
      "Over the past 15 years, we've spent time on offshore platforms..."
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Heading | `story.heading` | string | Section heading | "Our Story" |
| Subheading | `story.subheading` | string | Subheading | "How a small team of designers..." |
| Paragraph | `story.paragraphs[]` | markdown (list) | Body paragraphs | ["Daito Design was founded...", "Over the past..."] |

### Values Section
```json
{
  "values": {
    "heading": "Our Values",
    "cards": [
      {
        "title": "Context Over Assumption",
        "description": "We design in context, not in conference rooms..."
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Heading | `values.heading` | string | Section title | "Our Values" |
| Card Title | `values.cards[].title` | string | Value title | "Context Over Assumption" |
| Card Description | `values.cards[].description` | markdown | Value description | "We design in context..." |

### Global Presence Section
```json
{
  "global_presence": {
    "heading": "Global Presence",
    "intro": "We work with enterprises across 6 continents...",
    "locations": [
      {
        "city": "Austin, TX",
        "type": "HQ",
        "description": "US headquarters. Home to our core design and strategy team."
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Heading | `global_presence.heading` | string | Section title | "Global Presence" |
| Intro Text | `global_presence.intro` | markdown | Intro paragraph | "We work with enterprises..." |
| City | `global_presence.locations[].city` | string | City name | "Austin, TX", "London, UK" |
| Location Type | `global_presence.locations[].type` | string | HQ/Office/Studio | "HQ", "Office", "Studio" |
| Description | `global_presence.locations[].description` | text | Location details | "US headquarters. Home to..." |

### Expertise Section
```json
{
  "expertise": {
    "heading": "Our Expertise",
    "cards": [
      {
        "title": "Industrial UX",
        "description": "Control rooms, SCADA systems, real-time monitoring..."
      }
    ]
  }
}
```

### Team Section
```json
{
  "team": {
    "heading": "Our Team",
    "subtitle": "Small, senior, focused.",
    "members": [
      {
        "name": "Jared Huke",
        "title": "Founder & Creative Director",
        "image": "/images/team-jared.jpg"
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Member Name | `team.members[].name` | string | Person's name | "Jared Huke" |
| Member Title | `team.members[].title` | string | Job title | "Founder & Creative Director" |
| Member Photo | `team.members[].image` | image | Profile photo | "/images/team-jared.jpg" |

---

## SERVICES PAGE

**File:** `admin/data/services.json`

### Hero Section
[Same as Homepage/About — eyebrow, headline, subtitle]

### Service Phases
```json
{
  "phases": [
    {
      "number": "01",
      "heading": "Discovery & Research",
      "description": "Understanding your world before we design...",
      "services": [
        {
          "title": "Contextual Inquiry",
          "description": "On-site observation of your users..."
        }
      ]
    }
  ]
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Phase Number | `phases[].number` | string | Sequential number | "01", "02", "03" |
| Phase Heading | `phases[].heading` | string | Phase title | "Discovery & Research" |
| Phase Description | `phases[].description` | markdown | Phase description | "Understanding your world..." |
| Service Title | `phases[].services[].title` | string | Service name | "Contextual Inquiry" |
| Service Description | `phases[].services[].description` | markdown | Service details | "On-site observation..." |

### Industries Section
```json
{
  "industries": {
    "heading": "Industries We Serve",
    "cards": [
      {
        "name": "Energy & Utilities",
        "description": "Oil, gas, nuclear, renewables...",
        "clients": ["Shell", "Constellation", "Exelon"]
      }
    ]
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Industry Name | `industries.cards[].name` | string | Industry name | "Energy & Utilities" |
| Description | `industries.cards[].description` | markdown | Industry description | "Oil, gas, nuclear..." |
| Featured Clients | `industries.cards[].clients[]` | list | Client names | ["Shell", "Constellation"] |

---

## GLOBAL SETTINGS

**File:** `admin/data/settings.json`

```json
{
  "colors": {
    "primary": "#722F37",
    "secondary": "#F5F0E8",
    "accent": "#1A1A1A",
    "success": "#10B981",
    "warning": "#F59E0B",
    "error": "#EF4444"
  },
  "company": {
    "name": "Daito Design",
    "tagline": "Industrial UX & Enterprise Experience Design",
    "email": "info@daitodesign.com",
    "phone": "+1 (512) 555-0123",
    "website": "https://daitodesign.com"
  },
  "social": {
    "linkedin": "https://www.linkedin.com/company/daitodesign/",
    "twitter": "https://twitter.com/daitodesign",
    "instagram": "https://instagram.com/daitodesign"
  },
  "analytics": {
    "google_analytics": "G-7HPF8C3VXH"
  }
}
```

| CMS Field | JSON Path | Type | Purpose | Example |
|-----------|-----------|------|---------|---------|
| Primary Color | `colors.primary` | color | Brand primary | "#722F37" (oxblood) |
| Secondary Color | `colors.secondary` | color | Brand secondary | "#F5F0E8" (sand) |
| Accent Color | `colors.accent` | color | Brand accent | "#1A1A1A" (charcoal) |
| Company Name | `company.name` | string | Company name | "Daito Design" |
| Tagline | `company.tagline` | string | Company tagline | "Industrial UX & Enterprise Experience Design" |
| Email | `company.email` | string | Contact email | "info@daitodesign.com" |
| Phone | `company.phone` | string | Contact phone | "+1 (512) 555-0123" |
| Website | `company.website` | string | Website URL | "https://daitodesign.com" |
| LinkedIn | `social.linkedin` | string | LinkedIn URL | "https://www.linkedin.com/company/daitodesign/" |
| Twitter | `social.twitter` | string | Twitter URL | "https://twitter.com/daitodesign" |
| Instagram | `social.instagram` | string | Instagram URL | "https://instagram.com/daitodesign" |
| Google Analytics | `analytics.google_analytics` | string | GA ID | "G-7HPF8C3VXH" |

---

## Quick Reference: Field Types

| Widget Type | Input Method | Best For | Example |
|-------------|--------------|----------|---------|
| `string` | Text input (single line) | Short text (titles, names, labels) | "We design for the field." |
| `text` | Text area (multi-line) | Medium text (descriptions, subtitles) | "Enterprise software that works..." |
| `markdown` | Text editor with formatting buttons | Long-form content (body copy, descriptions) | Supports **bold**, *italic*, lists |
| `image` | File upload with preview | Images, photos, graphics | Uploads to `/images/` folder |
| `color` | Color picker | Brand colors, hex codes | "#722F37" |
| `select` | Dropdown menu | Predefined options | "HQ", "Office", "Studio" |
| `list` | Add/remove items | Arrays of simple values | ["Shell", "Constellation", "Exelon"] |
| `object` | Nested fields | Grouped related fields | hero { eyebrow, headline, ... } |

---

## Validation Rules

- **Headlines**: Keep to 10 words or less for best readability
- **Subtitles**: 2-3 sentences maximum
- **Body text**: Use markdown for formatting, not HTML
- **Images**: Optimize to < 500KB before upload
- **Metrics**: Use simple values ("40%", "6", "2018-Present")
- **Labels**: Keep metric labels to 3 words or less
- **URLs**: Always include protocol ("https://") for external links
- **Phone**: Include country code for international audiences

---

**For questions on specific fields, consult the CMS field hints and `admin/README.md`.**
