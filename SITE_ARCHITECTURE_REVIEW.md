# SITE ARCHITECTURE REVIEW
**Date:** February 11, 2026
**Goal:** Balance completeness with simplicity for high understandability

---

## 1. RECOMMENDED SITE STRUCTURE

### PRIMARY NAVIGATION (6 items max for cognitive load)

```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO]    Services ▼   Work   Industries   Insights   About   │ [Get in Touch]
└─────────────────────────────────────────────────────────────────┘
                │
                ├── Pre-Product
                ├── Product
                ├── Post-Product
                └── Agentic Experience Design
```

**Rationale:**
- Services dropdown consolidates 4 service types without cluttering nav
- "Industries" added back - critical for enterprise buyers who search by vertical
- "Insights" (blog) is cleaner than "Blog" for B2B
- "Agentic Experience" moves into Services dropdown (it's a service, not separate category)

### SITEMAP

```
/                           Homepage
├── /services               Services overview (anchor links to sections)
│   ├── #pre-product        Pre-Product section
│   ├── #product            Product section
│   ├── #post-product       Post-Product section
│   └── #agentic            Agentic Experience Design section
├── /agentic-experience     Deep-dive standalone page (linked from services)
├── /agentic-assessment     Assessment tool
├── /agentic-manual         Manual/guide download
├── /industries             Industries overview
│   ├── #oil-gas
│   ├── #utility
│   ├── #nuclear
│   ├── #medical
│   ├── #financial
│   └── #startups
├── /case-studies           Work/Portfolio
│   ├── /case-study-shell
│   ├── /case-study-constellation
│   ├── /case-study-shearwater
│   └── ... (7 total)
├── /blog                   Blog listing (paginated)
│   └── /blog/[post-slug]   Individual posts (20 total)
├── /about                  About + Team
├── /contact                Contact form
├── /book                   Book page (if exists)
├── /privacy                Privacy policy
└── /terms                  Terms of service
```

### PAGE COUNT: 35-40 pages
- 7 main pages
- 7 case studies
- 20 blog posts
- 3 legal/misc

---

## 2. SERVICE GROUPING RECOMMENDATION

### ✅ KEEP COMBINED SERVICES.HTML

**Pros of combined page:**
- Single destination for "what do you do?"
- Easier to maintain
- Better for users exploring services
- Clear anchor links for deep-linking (#pre-product, #product, etc.)

**Cons of separate pages:**
- More pages to maintain
- Users have to navigate between pages
- Duplicate header/footer content
- Harder to show service relationships

**RECOMMENDATION:** Keep services.html with anchor sections. Add "Learn More" expandable sections if more detail needed.

---

## 3. SEO MIGRATION AUDIT

### 🔴 CRITICAL SEO ISSUES

#### A. URL STRUCTURE CHANGES
| Old URL | New URL | Action Needed |
|---------|---------|---------------|
| /blog | /blog.html | ⚠️ 301 redirect needed |
| /work | /case-studies.html | ⚠️ 301 redirect needed |
| /about | /about.html | ⚠️ 301 redirect needed |
| /contact | /contact.html | ⚠️ 301 redirect needed |
| /industries | MISSING | ❌ Create page |
| /pre-product | /services.html#pre-product | ⚠️ 301 redirect |
| /product | /services.html#product | ⚠️ 301 redirect |
| /post-product | /services.html#post-product | ⚠️ 301 redirect |

**SOLUTION:** Create `_redirects` file (Vercel/Netlify) or `.htaccess` (Apache):

```
# _redirects (Vercel/Netlify)
/blog           /blog.html              301
/work           /case-studies.html      301
/about          /about.html             301
/contact        /contact.html           301
/pre-product    /services.html#pre-product  301
/product        /services.html#product      301
/post-product   /services.html#post-product 301
/industries     /industries.html        301
```

#### B. CANONICAL URLS
Each page needs `<link rel="canonical">` tag:
```html
<link rel="canonical" href="https://daitodesign.com/services.html">
```

#### C. MISSING FROM NEW SITE
- [ ] XML Sitemap (`/sitemap.xml`)
- [ ] Robots.txt (`/robots.txt`)
- [ ] 404 page (`/404.html`)
- [ ] Schema.org structured data (some pages have it, verify all)

#### D. META TAGS AUDIT
| Page | Title | Description | Status |
|------|-------|-------------|--------|
| index.html | ✅ | ✅ | Good |
| services.html | ✅ | ✅ | Good |
| about.html | ✅ | ✅ | Good |
| contact.html | ✅ | ⚠️ Short | Improve |
| case-studies.html | ✅ | ⚠️ | Verify |
| blog.html | ✅ | ⚠️ | Verify |
| industries.html | ❌ | ❌ | CREATE |

#### E. BLOG POST URL STRUCTURE
Old site likely uses: `/blog/post-title`
New site uses: `/blog/post-slug.html`

**Ensure 301 redirects for all 20 blog post URLs**

#### F. IMAGE SEO
- [ ] All images have `alt` tags ✅ (verified)
- [ ] Images optimized for web (WebP format) ⚠️ (some are large PNGs)
- [ ] Lazy loading implemented ⚠️ (add `loading="lazy"`)

### 🟡 SEO RECOMMENDATIONS

1. **Add hreflang tags** if implementing multi-language:
```html
<link rel="alternate" hreflang="en" href="https://daitodesign.com/page">
<link rel="alternate" hreflang="nl" href="https://daitodesign.com/nl/page">
```

2. **Improve internal linking:**
- Blog posts should link to relevant services
- Case studies should link to industries
- Services should link to case studies as proof points

3. **Add breadcrumbs** for deep pages:
```html
Home > Industries > Oil & Gas
Home > Blog > Post Title
```

4. **Submit sitemap to Google Search Console** after launch

---

## 4. LANGUAGE SELECTOR - TECHNICAL SOLUTIONS

### OPTION A: Static HTML Per Language (RECOMMENDED for small sites)

**How it works:**
- Duplicate pages with translated content: `/nl/`, `/de/`, `/ja/`
- Language switcher links to equivalent page in other language
- No build tools required

**Pros:** Simple, fast, full SEO control
**Cons:** Manual translation management, content duplication

**Implementation:**
```html
<!-- Language switcher -->
<div class="language-selector">
  <a href="/services.html" hreflang="en" class="active">EN</a>
  <a href="/nl/services.html" hreflang="nl">NL</a>
  <a href="/de/services.html" hreflang="de">DE</a>
</div>
```

**File structure:**
```
/index.html          (English - default)
/nl/index.html       (Dutch)
/de/index.html       (German)
/ja/index.html       (Japanese)
```

---

### OPTION B: JavaScript i18n Library

**Libraries:**
- **i18next** - Most popular, works with vanilla JS
- **FormatJS** - From Yahoo, good for React

**How it works:**
- Single HTML file
- JSON translation files
- JavaScript swaps content based on language preference

**Pros:** Single codebase, easy updates
**Cons:** SEO challenges (content loaded via JS), requires build step

**Implementation:**
```javascript
// i18next setup
i18next.init({
  lng: 'en',
  resources: {
    en: { translation: { hero_title: "We design for the field." }},
    nl: { translation: { hero_title: "Wij ontwerpen voor het veld." }}
  }
});

// Usage in HTML
<h1 data-i18n="hero_title"></h1>
```

---

### OPTION C: Headless CMS + Static Site Generator

**Stack:** Contentful/Sanity + Astro/Next.js

**How it works:**
- Content managed in CMS with language fields
- Build process generates static HTML for each language
- Automatic sitemap and hreflang generation

**Pros:** Best for scale, content team friendly
**Cons:** Requires migration to new tech stack

---

### RECOMMENDATION

**For Daito (small team, 2 primary markets):**

**Phase 1:** Static HTML duplication
- Create `/nl/` folder for Dutch market (Amsterdam office)
- Manual translation of key pages: Homepage, Services, About, Contact
- Blog posts can remain English-only initially

**Phase 2 (if scaling):** Migrate to Astro + Contentful
- When you need 3+ languages or frequent content updates

**Languages to prioritize:**
1. English (default)
2. Dutch (Amsterdam market)
3. Japanese (Tokyo market) - if expansion planned

---

## 5. ASSESSMENT CTA IMPLEMENTATION

Add to multiple pages:

```html
<!-- Assessment CTA Block -->
<section class="section bg-oxblood" style="color: var(--white);">
  <div class="container text-center">
    <h2 class="text-display" style="color: var(--white);">
      Ready to Ensure Your Product's Market Success?
    </h2>
    <p class="text-body-lg max-w-50ch mx-auto mb-8" style="color: rgba(255,255,255,0.8);">
      Don't let your innovation become another statistic. Our Product Market Fit Assessment
      provides a pathway to success built on user experience insights.
    </p>
    <a href="agentic-assessment.html" class="btn btn-lg" style="background: var(--white); color: var(--oxblood);">
      Request Your Assessment
    </a>
  </div>
</section>
```

**Add to:**
- Homepage (before footer)
- Services page (after each service section)
- Industries page (after each industry)
- Case studies page (after case study grid)

---

## 6. ACTION ITEMS

### Immediate (Before Launch)
- [ ] Create industries.html
- [ ] Create 301 redirects file
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Create 404.html
- [ ] Add canonical URLs to all pages
- [ ] Add Assessment CTA to key pages

### Short-term (Week 1 Post-Launch)
- [ ] Migrate 20 blog posts
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Search Console monitoring
- [ ] Implement cookie consent

### Medium-term (Month 1)
- [ ] Dutch language version of key pages
- [ ] Add breadcrumbs to deep pages
- [ ] Improve internal linking
