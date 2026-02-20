import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ─── HOMEPAGE ─────────────────────────────────────────────────────────
      {
        name: "homePage",
        label: "Homepage",
        path: "content/pages",
        match: { include: "home" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object", name: "hero", label: "Hero Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow Text" },
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "cta_text", label: "CTA Button Text" },
              { type: "string", name: "cta_link", label: "CTA Button Link" },
            ],
          },
          {
            type: "object", name: "trust_strip", label: "Client Trust Strip",
            fields: [
              { type: "string", name: "clients", label: "Client Names", list: true },
            ],
          },
          {
            type: "object", name: "stats", label: "Stats Section",
            fields: [
              {
                type: "object", name: "items", label: "Stats", list: true,
                fields: [
                  { type: "string", name: "value", label: "Value (e.g. 15+)" },
                  { type: "string", name: "label", label: "Label" },
                ],
              },
            ],
          },
          {
            type: "object", name: "statement", label: "Statement Section",
            fields: [
              { type: "string", name: "text", label: "Statement Text", ui: { component: "textarea" } },
              { type: "string", name: "highlight", label: "Highlight Text" },
            ],
          },
          {
            type: "object", name: "value_prop", label: "Value Proposition",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body Text", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object", name: "services_section", label: "Services Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object", name: "services", label: "Services", list: true,
                fields: [
                  { type: "string", name: "number", label: "Number (e.g. 01)" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "services_list", label: "Services List", list: true },
                ],
              },
            ],
          },
          {
            type: "object", name: "featured_cases", label: "Featured Case Studies",
            fields: [
              { type: "string", name: "heading", label: "Section Heading" },
              {
                type: "object", name: "cases", label: "Cases", list: true,
                fields: [
                  { type: "string", name: "client", label: "Client Name" },
                  { type: "string", name: "headline", label: "Headline" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "metric1_value", label: "Metric 1 Value" },
                  { type: "string", name: "metric1_label", label: "Metric 1 Label" },
                  { type: "string", name: "metric2_value", label: "Metric 2 Value" },
                  { type: "string", name: "metric2_label", label: "Metric 2 Label" },
                  { type: "image", name: "image", label: "Case Study Image" },
                  { type: "string", name: "link", label: "Link URL" },
                ],
              },
            ],
          },
          {
            type: "object", name: "industries", label: "Industries Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object", name: "items", label: "Industries", list: true,
                fields: [
                  { type: "string", name: "name", label: "Industry Name" },
                  { type: "string", name: "clients", label: "Clients" },
                ],
              },
            ],
          },
          {
            type: "object", name: "cta", label: "CTA Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "button_text", label: "Button Text" },
              { type: "string", name: "button_link", label: "Button Link" },
            ],
          },
        ],
      },

      // ─── ABOUT PAGE ───────────────────────────────────────────────────────
      {
        name: "aboutPage",
        label: "About Page",
        path: "content/pages",
        match: { include: "about" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object", name: "hero", label: "Hero Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object", name: "story", label: "Our Story",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body Text", ui: { component: "textarea" } },
              { type: "string", name: "body2", label: "Body Text 2", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object", name: "values", label: "Values",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object", name: "items", label: "Values List", list: true,
                fields: [
                  { type: "string", name: "title", label: "Value Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object", name: "team", label: "Team",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object", name: "members", label: "Team Members", list: true,
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "bio", label: "Bio", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Photo" },
                  { type: "string", name: "linkedin", label: "LinkedIn URL" },
                ],
              },
            ],
          },
          {
            type: "object", name: "locations", label: "Locations",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object", name: "cities", label: "Cities", list: true,
                fields: [
                  { type: "string", name: "city", label: "City" },
                  { type: "string", name: "region", label: "Region/State" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
          },
          {
            type: "object", name: "expertise", label: "Expertise",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "areas", label: "Expertise Areas", list: true },
            ],
          },
          {
            type: "object", name: "cta", label: "CTA Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "button_text", label: "Button Text" },
            ],
          },
        ],
      },

      // ─── SERVICES PAGE ────────────────────────────────────────────────────
      {
        name: "servicesPage",
        label: "Services Page",
        path: "content/pages",
        match: { include: "services" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object", name: "hero", label: "Hero Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object", name: "phases", label: "Service Phases", list: true,
            fields: [
              { type: "string", name: "number", label: "Phase Number (e.g. 01)" },
              { type: "string", name: "title", label: "Phase Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "services", label: "Services List", list: true },
              { type: "string", name: "color", label: "Color Class" },
            ],
          },
          {
            type: "object", name: "industries", label: "Industries Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object", name: "items", label: "Industries", list: true,
                fields: [
                  { type: "string", name: "name", label: "Industry Name" },
                  { type: "string", name: "clients", label: "Featured Clients" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object", name: "cta", label: "CTA Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "button_text", label: "Button Text" },
            ],
          },
        ],
      },

      // ─── CASE STUDIES ─────────────────────────────────────────────────────
      {
        name: "caseStudy",
        label: "Case Studies",
        path: "content/case-studies",
        format: "json",
        ui: {
          router: ({ document }) => `/case-studies/${document._sys.filename}`,
        },
        fields: [
          { type: "string", name: "slug", label: "Slug" },
          { type: "string", name: "client", label: "Client Name" },
          { type: "string", name: "industry", label: "Industry" },
          { type: "string", name: "year", label: "Year(s)" },
          { type: "string", name: "tags", label: "Tags", list: true },
          {
            type: "object", name: "hero", label: "Hero Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Hero Image" },
              { type: "string", name: "image_alt", label: "Image Alt Text" },
              {
                type: "object", name: "metrics", label: "Key Metrics", list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                ],
              },
            ],
          },
          {
            type: "object", name: "challenge", label: "Challenge Section",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "intro", label: "Intro", ui: { component: "textarea" } },
              {
                type: "object", name: "cards", label: "Challenge Cards", list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object", name: "approach", label: "Approach Section",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "intro", label: "Intro", ui: { component: "textarea" } },
              {
                type: "object", name: "steps", label: "Steps", list: true,
                fields: [
                  { type: "string", name: "number", label: "Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object", name: "work", label: "The Work Section",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "intro", label: "Intro", ui: { component: "textarea" } },
              {
                type: "object", name: "cards", label: "Work Cards", list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object", name: "results", label: "Results Section",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "intro", label: "Intro", ui: { component: "textarea" } },
              {
                type: "object", name: "metrics", label: "Result Metrics", list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
          },
          {
            type: "object", name: "testimonial", label: "Testimonial",
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "author", label: "Author" },
              { type: "string", name: "company", label: "Company" },
              { type: "string", name: "author_title", label: "Author Title" },
            ],
          },
          {
            type: "object", name: "capabilities", label: "Capabilities Section",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "services", label: "Services Applied", list: true },
            ],
          },
          {
            type: "object", name: "cta", label: "CTA Section",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "button_text", label: "Button Text" },
            ],
          },
        ],
      },
    ],
  },
});
