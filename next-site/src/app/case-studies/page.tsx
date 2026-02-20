import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  year: string;
  tags: string[];
  hero: {
    headline: string;
    subtitle: string;
    image: string;
    image_alt: string;
    metrics: Array<{ value: string; label: string }>;
  };
  [key: string]: any;
}

export default function CaseStudiesPage() {
  // Read all case study JSON files
  const caseStudiesDir = path.join(process.cwd(), 'content/case-studies');
  const files = fs.readdirSync(caseStudiesDir).filter((f) => f.endsWith('.json'));

  const caseStudies: CaseStudy[] = files.map((file) => {
    const content = fs.readFileSync(path.join(caseStudiesDir, file), 'utf-8');
    return JSON.parse(content);
  });

  // Sort to get featured cases first (shell, constellation, 3lc)
  const featuredOrder = ['shell', 'constellation', '3lc'];
  const featured = caseStudies.filter((cs) => featuredOrder.includes(cs.slug));
  const others = caseStudies.filter((cs) => !featuredOrder.includes(cs.slug));

  // Sort featured by the defined order
  featured.sort((a, b) => featuredOrder.indexOf(a.slug) - featuredOrder.indexOf(b.slug));

  return (
    <main className="page-case-studies">
      {/* Hero Section */}
      <section className="hero section section-xl">
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow" data-tina-field="eyebrow">
              Case Studies
            </span>
            <h1 className="hero-title" data-tina-field="title">
              Our Work
            </h1>
            <p className="hero-subtitle" data-tina-field="subtitle">
              Real results for enterprise clients across energy, financial services, and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Cases - Top 3 */}
      {featured.map((caseStudy, index) => (
        <section
          key={caseStudy.slug}
          style={{ padding: 0 }}
          data-tina-field={`featured-case-${index}`}
        >
          <Link href={`/case-studies/${caseStudy.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              className="case-study-featured"
              style={index === 1 ? { direction: 'rtl' } : undefined}
            >
              {/* Image Section */}
              <div
                className="case-study-image"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--charcoal) 0%, #2a2a2a 100%), url('${caseStudy.hero.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Brand accent stripe */}
                <div
                  style={{
                    position: 'absolute',
                    [index === 1 ? 'right' : 'left']: 0,
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    background:
                      caseStudy.slug === 'shell'
                        ? '#FBCE07'
                        : caseStudy.slug === 'constellation'
                          ? '#0078D4'
                          : '#FFD60A',
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: index === 1 ? 'flex-end' : 'flex-start',
                    justifyContent: 'flex-end',
                    padding: 'var(--space-8)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-6xl)',
                      color: 'var(--white)',
                      opacity: 0.9,
                      fontWeight: 300,
                      textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                      textAlign: index === 1 ? 'right' : 'left',
                    }}
                  >
                    {caseStudy.client}
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'rgba(255,255,255,0.7)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginTop: 'var(--space-2)',
                      textShadow: '0 1px 10px rgba(0,0,0,0.5)',
                    }}
                  >
                    {caseStudy.industry}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`case-study-content ${
                  index % 2 === 0 ? 'bg-sand-light' : 'bg-sand'
                }`}
                style={index === 1 ? { direction: 'ltr' } : undefined}
              >
                <span className="case-study-client" data-tina-field={`client-${caseStudy.slug}`}>
                  {caseStudy.client} • {caseStudy.year}
                </span>
                <h3 className="case-study-title" data-tina-field={`headline-${caseStudy.slug}`}>
                  {caseStudy.hero.headline}
                </h3>
                <p className="case-study-excerpt" data-tina-field={`subtitle-${caseStudy.slug}`}>
                  {caseStudy.hero.subtitle}
                </p>

                {/* Metrics */}
                {caseStudy.hero.metrics && caseStudy.hero.metrics.length > 0 && (
                  <div className="case-study-metrics">
                    {caseStudy.hero.metrics.map((metric: any, idx: number) => (
                      <div key={idx} className="metric" data-tina-field={`metric-${idx}`}>
                        <div className="metric-value">{metric.value}</div>
                        <div className="metric-label">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <span className="btn btn-outline" style={{ marginTop: 'var(--space-6)' }}>
                  View Case Study →
                </span>
              </div>
            </div>
          </Link>
        </section>
      ))}

      {/* More Case Studies Grid */}
      {others.length > 0 && (
        <section className="section section-xl">
          <div className="container">
            <h2 className="text-title mb-12 reveal" data-tina-field="more-work-title">
              More work.
            </h2>
            <div className="case-studies-grid reveal-stagger">
              {others.map((caseStudy, index) => (
                <Link
                  key={caseStudy.slug}
                  href={`/case-studies/${caseStudy.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <article
                    className="case-study-card"
                    style={{
                      background: 'var(--charcoal)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    data-tina-field={`case-card-${index}`}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'var(--primary)',
                        zIndex: 2,
                      }}
                    />
                    <div
                      className="case-study-card-content"
                      style={{ position: 'relative', zIndex: 1 }}
                    >
                      <span
                        style={{
                          fontSize: 'var(--text-xs)',
                          letterSpacing: 'var(--tracking-widest)',
                          textTransform: 'uppercase',
                          color: 'var(--primary)',
                        }}
                        data-tina-field={`client-${caseStudy.slug}`}
                      >
                        {caseStudy.client}
                      </span>
                      <h3
                        style={{ fontSize: 'var(--text-xl)', marginTop: 'var(--space-2)' }}
                        data-tina-field={`headline-${caseStudy.slug}`}
                      >
                        {caseStudy.hero.headline}
                      </h3>
                      <p
                        style={{
                          fontSize: 'var(--text-sm)',
                          opacity: 0.6,
                          marginTop: 'var(--space-2)',
                        }}
                        data-tina-field={`year-${caseStudy.slug}`}
                      >
                        {caseStudy.year}
                      </p>

                      {/* Tags */}
                      {caseStudy.tags && caseStudy.tags.length > 0 && (
                        <div
                          style={{
                            display: 'flex',
                            gap: 'var(--space-2)',
                            marginTop: 'var(--space-4)',
                            flexWrap: 'wrap',
                          }}
                          data-tina-field={`tags-${caseStudy.slug}`}
                        >
                          {caseStudy.tags.map((tag: string, tagIdx: number) => (
                            <span
                              key={tagIdx}
                              style={{
                                fontSize: 'var(--text-xs)',
                                padding: '4px 8px',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '4px',
                                opacity: 0.7,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
