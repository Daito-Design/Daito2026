# Daito Design Website - Content Structure

**Last Updated:** February 1, 2026
**Source:** User-provided canonical website files
**Status:** Ready for deployment with updates

---

## File Structure

```
04_Website/
├── css/
│   └── styles.css              # Complete design system (1825 lines)
├── js/
│   └── main.js                 # GSAP animations & interactions
├── blog/
│   └── agent-journey.html      # Sample blog article
├── index.html                  # Homepage
├── services.html               # Services page
├── about.html                  # About page
├── agentic-experience.html     # AXD - Human-Centered AI
├── agentic-assessment.html     # Self-assessment tool
├── agentic-manual.html         # AXD Manual download
├── case-studies.html           # Case studies/work
├── blog.html                   # Blog listing
├── contact.html                # Contact page
├── vercel.json                 # Vercel deployment config
└── README.md                   # Documentation
```

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--sand` | `#F5F0E8` | Primary background |
| `--sand-light` | `#FAF8F4` | Secondary background |
| `--sand-dark` | `#E8E0D4` | Accent backgrounds |
| `--sand-darker` | `#D4C9B8` | Muted accents |
| `--charcoal` | `#1A1A1A` | Primary text, dark sections |
| `--charcoal-light` | `#2C2C2C` | Secondary dark |
| `--charcoal-medium` | `#4A4A4A` | Medium text |
| `--charcoal-soft` | `#6B6B6B` | Muted text |
| `--oxblood` | `#722F37` | Primary accent, CTAs |
| `--oxblood-light` | `#8B3A44` | Hover states |
| `--oxblood-dark` | `#5A252C` | Active states |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Display/Headlines | Cormorant Garamond | 300 (Light) | `--text-hero` to `--text-3xl` |
| Body | Inter | 400-600 | `--text-base` to `--text-xl` |
| Eyebrow/Labels | Inter | 600 (Semibold) | `--text-xs`, uppercase |
| Buttons | Inter | 500 (Medium) | `--text-sm`, uppercase |

### Fluid Typography Scale

```css
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.6vw, 1.375rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem);
--text-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);
--text-3xl: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
--text-4xl: clamp(2.5rem, 1.8rem + 3.5vw, 5rem);
--text-5xl: clamp(3rem, 2rem + 5vw, 7rem);
--text-6xl: clamp(4rem, 2.5rem + 7.5vw, 10rem);
--text-hero: clamp(3.5rem, 2rem + 8vw, 12rem);
```

---

## Page Structure

### Homepage (`index.html`)

1. **Hero Section**
   - Background image (industrial/energy themed)
   - Eyebrow: "Industrial UX & Experience Design"
   - Headline: "We design for the field."
   - Subhead: "Enterprise software that works for the people who actually use it. From oil rigs to trading floors."
   - CTA: "See Our Work" → case-studies.html
   - Scroll indicator

2. **Statement Section 1** (Pinned)
   - "Most enterprise software is designed by people who've never used it. We're different."

3. **Value Proposition** (Dark section with image)
   - Eyebrow: "Our Approach"
   - Headline: "We go to the field."
   - Copy about immersion in users' world
   - Field image
   - Metrics: $6.1M Project Value, 156 Projects, 9 Years, 3+ Year Avg Partnership

4. **Services Overview**
   - Pre-Product (01): Validation, Research, Competitive Analysis, Workshops
   - Product (02): UX/UI, Design Systems, Prototyping, AXD
   - Post-Product (03): Change Management, Training, Analytics, Optimization

5. **Agentic Experience Highlight**
   - Headline: "Agentic Experience Design (AXD)"
   - "Human-Centered AI" visual
   - Link to agentic-experience.html

6. **Featured Case Studies**
   - Shell: 5+ year partnership, exploration platform design
   - Constellation: Digital procedures & work planning for nuclear
   - NTT: Audio technology research (REMOVE "via Hikari Consulting" reference)

7. **Statement Section 2**
   - "We've been on oil platforms, inside trading rooms, and at control centers around the globe."

8. **Client Logos** (12 clients)
   - Shell, TDECU, Bluware, Halliburton, Weatherford, Constellation
   - Red Bull, NTT, 3LC, Pennzoil, Sertodo, Schneider Electric

9. **Industries Section** (Dark)
   - Energy, Financial Services, Industrial, Healthcare

10. **Latest Insights** (3 blog cards)
    - "Where Are You on Your Agent Journey?"
    - "Why Enterprise Software Needs Enterprise UX"
    - "The Indispensable Role of Human-AI Collaboration"

11. **CTA Section** (Oxblood)
    - "Let's talk."
    - Button: "Start a Conversation"

12. **Footer**
    - Logo + tagline
    - Services links
    - Company links
    - Austin HQ address
    - Copyright + legal

### Navigation

| Link | Target |
|------|--------|
| Services | services.html |
| Agentic Experience | agentic-experience.html |
| Work | case-studies.html |
| Insights | blog.html |
| About | about.html |
| Get in Touch | contact.html |

---

## Components

### Buttons
- `.btn-primary` - Charcoal background, white text
- `.btn-accent` - Oxblood background, white text
- `.btn-outline` - Transparent with charcoal border
- `.btn-ghost` - Text only, no background
- `.btn-arrow` - Includes animated arrow on hover

### Cards
- `.service-card` - Number, title, description, list, link
- `.case-study-featured` - 50/50 image + content grid
- `.blog-card` - Image, meta, title, excerpt, link
- `.client-logo` - Grayscale, reveals color on hover

### Sections
- `.section` - Standard padding (6rem)
- `.section-xl` - Extra padding (12rem)
- `.section-full` - Full viewport height
- `.statement-section` - Centered large text

### Animations (GSAP)
- `.reveal` - Fade up on scroll
- `.reveal-stagger` - Staggered children
- `.reveal-scale` - Scale up
- `.reveal-left` / `.reveal-right` - Horizontal slides

---

## Content Guidelines

### REQUIRED UPDATES

1. **Logo**: Replace CSS-based logo with uploaded Daito logo image (red square with white "D")

2. **Remove Hikari Reference**: Line 421 in index.html contains "(via Hikari Consulting)" - REMOVE this text

3. **Images**:
   - Replace Unsplash stock images with energy-specific imagery
   - NEVER use images with animals
   - Exception: Blog section can keep generic professional images

4. **Primary CTA**: "Schedule Consultation" (not "Start a Conversation")

5. **Hero Video**: Placeholder for edge-to-edge hero video (to be generated with Veo 2 or similar)

### Image Guidelines

| Section | Image Type |
|---------|------------|
| Hero | Industrial/energy facility, operators at work |
| Value Prop | Field work, control rooms, offshore platforms |
| Case Studies | Client-specific or industry imagery |
| Industries | Energy facilities, trading floors, industrial |
| Blog | Can use professional/generic images |

### Tone

- Confident but not arrogant
- Technical but accessible
- Premium/sophisticated
- Field-focused, practical

---

## Dependencies

| Library | Version | CDN |
|---------|---------|-----|
| GSAP | 3.12.2 | cdnjs.cloudflare.com |
| ScrollTrigger | 3.12.2 | (GSAP plugin) |
| ScrollToPlugin | 3.12.2 | (GSAP plugin) |
| Cormorant Garamond | - | Google Fonts |
| Inter | - | Google Fonts |

---

## Deployment

**Target Platform:** Vercel

**Required:**
- HubSpot forms (4 total)
- Google Analytics
- SSL certificate (auto via Vercel)

**Domain:** daitodesign.com

---

## Key Metrics

| Metric | Source | Value |
|--------|--------|-------|
| 2025 Revenue | QuickBooks | $736,907 |
| Shell Concentration | QuickBooks | 73.4% |
| HubSpot Contacts | HubSpot | 4,482 |
| LinkedIn Connections | Export | 7,801 |

---

*This document defines the canonical content structure for the Daito Design website.*
