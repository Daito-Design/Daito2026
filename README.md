# Daito Design Website V2

A premium, award-caliber website redesign for Daito Design featuring Apple-style scroll animations, elegant typography, and a sophisticated sand/charcoal/oxblood color palette.

## Design Research Sources

This design was informed by analysis of:

**UX Design Agencies:**
- Pentagram, Work & Co, ustwo, Fantasy
- Huge, Basic Agency, FROG, IDEO

**Luxury Automotive:**
- Porsche, Mercedes-Benz, Audi, Bentley
- Rolls-Royce, Lexus

**Key Patterns Applied:**
- Bold, declarative typography (fluid clamp sizing up to 10rem)
- Generous whitespace and breathing room
- GSAP ScrollTrigger for real parallax effects
- Scroll-linked animations with pinned sections
- Minimal interface chrome, maximum content impact
- WCAG 2.2 AA accessibility compliance

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Sand | `#F5F0E8` | Primary background |
| Sand Light | `#FAF8F4` | Secondary background |
| Sand Dark | `#E8E0D4` | Accent backgrounds |
| Charcoal | `#1A1A1A` | Primary text, dark sections |
| Charcoal Light | `#2C2C2C` | Secondary dark |
| Charcoal Soft | `#6B6B6B` | Muted text |
| Ox Blood | `#722F37` | Primary accent, CTAs |
| Ox Blood Light | `#8B3A44` | Hover states |
| Ox Blood Dark | `#5A252C` | Active states |

## Typography

- **Display Font**: Cormorant Garamond (elegant serif)
- **Body Font**: Inter (clean sans-serif)
- **Hero Headlines**: Up to 12rem with tight letter-spacing
- **Fluid Typography**: CSS clamp() for responsive scaling

## Key Features

### Animation & Interaction
- ✅ GSAP ScrollTrigger integration
- ✅ Apple-style parallax scroll effects
- ✅ Scroll-linked reveal animations
- ✅ Staggered content animations
- ✅ Pinned statement sections
- ✅ Smooth scroll navigation
- ✅ Scroll progress indicator
- ✅ Page transition effects
- ✅ Reduced motion support

### Accessibility (WCAG 2.2 AA)
- ✅ Skip navigation link
- ✅ Semantic HTML structure
- ✅ ARIA landmarks and labels
- ✅ Focus visible indicators
- ✅ Color contrast compliance
- ✅ Keyboard navigation support
- ✅ Respects prefers-reduced-motion

### Responsive Design
- ✅ Mobile-first approach
- ✅ Fluid typography scaling
- ✅ Responsive navigation
- ✅ Touch-friendly interactions
- ✅ Optimized for all screen sizes

## File Structure

```
daito-website-v2/
├── css/
│   └── styles.css              # Complete design system
├── js/
│   └── main.js                 # GSAP animations & interactions
├── blog/
│   └── agent-journey.html      # Sample blog article
├── index.html                  # Homepage
├── services.html               # Services page
├── agentic-experience.html     # NEW: AXD page (human factors)
├── case-studies.html           # Case studies/work
├── blog.html                   # Blog listing
├── contact.html                # Contact page
├── about.html                  # About page
└── README.md                   # This file
```

## Pages

### 1. Homepage (`index.html`)
- Full-viewport hero with animated text reveal
- "We go to the field" value proposition
- Services overview (Pre-Product, Product, Post-Product)
- Featured case study with metrics
- Client logos grid
- Industry sectors
- Latest blog posts
- Oxblood CTA section

### 2. Agentic Experience (`agentic-experience.html`) — NEW
- Dark hero section
- "Enterprise Human Factors for AI" framework
- Four pillars: Calibrated Trust, Explainable Actions, Graceful Handoff, Appropriate Autonomy
- Traditional vs. Daito comparison
- Agent Journey framework visualization
- Process overview
- Case study highlight

### 3. Services (`services.html`)
- Pre-Product services (validation, research)
- Product services (UX/UI, design systems)
- Post-Product services (change management)
- Industry expertise sections

### 4. Case Studies (`case-studies.html`)
- Featured alternating case studies
- Metrics and results
- Case study grid
- Client logos

### 5. Blog (`blog.html`)
- Featured post highlight
- Blog post grid (9 posts)
- Newsletter signup

### 6. About (`about.html`)
- Company story
- Values section
- Global office locations
- Expertise areas

### 7. Contact (`contact.html`)
- Contact form with validation
- Office locations
- Global presence map

## Dependencies

- **GSAP 3.12.2** (loaded via CDN)
  - Core library
  - ScrollTrigger plugin
  - ScrollToPlugin
- **Google Fonts**
  - Cormorant Garamond
  - Inter

## How to Use

1. Open `index.html` in a modern browser
2. All pages are interconnected with navigation
3. CSS and JS are linked and ready to use

## For Production

Consider:
- Adding actual photography/imagery
- Connecting form to backend (Formspree, Netlify Forms, etc.)
- Setting up analytics (GA4, Plausible, etc.)
- Optimizing images with WebP/AVIF
- Adding meta tags for social sharing
- Implementing proper 404 page
- Adding sitemap.xml and robots.txt

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

**V2 Created:** January 2026
**Design System:** Sand/Charcoal/Oxblood
**Animation:** GSAP ScrollTrigger
**Accessibility:** WCAG 2.2 AA Compliant
