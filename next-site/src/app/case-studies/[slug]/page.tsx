import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  year: string;
  tags: string[];
  hero: any;
  challenge?: any;
  approach?: any;
  work?: any;
  gallery?: any;
  results?: any;
  testimonial?: any;
  capabilities?: any;
  cta?: any;
  [key: string]: any;
}

export async function generateStaticParams() {
  const caseStudiesDir = path.join(process.cwd(), 'content/case-studies');
  const files = fs.readdirSync(caseStudiesDir).filter((f) => f.endsWith('.json'));
  return files.map((file) => ({
    slug: file.replace('.json', ''),
  }));
}

async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const caseStudiesDir = path.join(process.cwd(), 'content/case-studies');
    const filePath = path.join(caseStudiesDir, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="page-case-study">
      {/* Hero Section */}
      <section
        className="hero hero-case-study section-xl"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url('${caseStudy.hero.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'flex-end',
          position: 'relative',
        }}
        data-tina-field="hero"
      >
        <div className="container" style={{ paddingBottom: 'var(--space-12)' }}>
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow" data-tina-field="client">
              {caseStudy.client}
            </span>
            <h1 className="hero-title" data-tina-field="headline">
              {caseStudy.hero.headline}
            </h1>
            <p className="hero-subtitle" data-tina-field="subtitle">
              {caseStudy.hero.subtitle}
            </p>

            {/* Hero Metrics */}
            {caseStudy.hero.metrics && caseStudy.hero.metrics.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: 'var(--space-6)',
                  marginTop: 'var(--space-12)',
                }}
                data-tina-field="hero-metrics"
              >
                {caseStudy.hero.metrics.map((metric: any, idx: number) => (
                  <div key={idx} className="metric" data-tina-field={`metric-${idx}`}>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      {caseStudy.challenge && (
        <section className="section section-xl" data-tina-field="challenge-section">
          <div className="container">
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <span className="label" data-tina-field="challenge-label">
                {caseStudy.challenge.label}
              </span>
              <h2 className="text-title" data-tina-field="challenge-heading">
                {caseStudy.challenge.heading}
              </h2>
              <p className="text-lg" style={{ marginTop: 'var(--space-4)' }} data-tina-field="challenge-intro">
                {caseStudy.challenge.intro}
              </p>
            </div>

            {/* Challenge Cards */}
            {caseStudy.challenge.cards && caseStudy.challenge.cards.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'var(--space-6)',
                  marginTop: 'var(--space-8)',
                }}
                data-tina-field="challenge-cards"
              >
                {caseStudy.challenge.cards.map((card: any, idx: number) => (
                  <article
                    key={idx}
                    className="card"
                    style={{
                      padding: 'var(--space-6)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                    }}
                    data-tina-field={`challenge-card-${idx}`}
                  >
                    <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-3)' }} data-tina-field={`card-title-${idx}`}>
                      {card.title}
                    </h3>
                    <p style={{ opacity: 0.8 }} data-tina-field={`card-description-${idx}`}>
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Approach Section */}
      {caseStudy.approach && (
        <section className="section section-xl bg-secondary" data-tina-field="approach-section">
          <div className="container">
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <span className="label" data-tina-field="approach-label">
                {caseStudy.approach.label}
              </span>
              <h2 className="text-title" data-tina-field="approach-heading">
                {caseStudy.approach.heading}
              </h2>
              <p className="text-lg" style={{ marginTop: 'var(--space-4)' }} data-tina-field="approach-intro">
                {caseStudy.approach.intro}
              </p>
            </div>

            {/* Approach Steps */}
            {caseStudy.approach.steps && caseStudy.approach.steps.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: 'var(--space-6)',
                  marginTop: 'var(--space-8)',
                }}
                data-tina-field="approach-steps"
              >
                {caseStudy.approach.steps.map((step: any, idx: number) => (
                  <div
                    key={idx}
                    style={{ display: 'flex', gap: 'var(--space-4)' }}
                    data-tina-field={`step-${idx}`}
                  >
                    <div
                      style={{
                        fontSize: 'var(--text-4xl)',
                        fontWeight: 600,
                        opacity: 0.2,
                        minWidth: '60px',
                      }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }} data-tina-field={`step-title-${idx}`}>
                        {step.title}
                      </h4>
                      <p style={{ opacity: 0.8 }} data-tina-field={`step-description-${idx}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Work Section */}
      {caseStudy.work && (
        <section className="section section-xl" data-tina-field="work-section">
          <div className="container">
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <span className="label" data-tina-field="work-label">
                {caseStudy.work.label}
              </span>
              <h2 className="text-title" data-tina-field="work-heading">
                {caseStudy.work.heading}
              </h2>
              <p className="text-lg" style={{ marginTop: 'var(--space-4)' }} data-tina-field="work-intro">
                {caseStudy.work.intro}
              </p>
            </div>

            {/* Work Cards */}
            {caseStudy.work.cards && caseStudy.work.cards.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: 'var(--space-6)',
                  marginTop: 'var(--space-8)',
                }}
                data-tina-field="work-cards"
              >
                {caseStudy.work.cards.map((card: any, idx: number) => (
                  <article
                    key={idx}
                    className="card"
                    style={{
                      padding: 'var(--space-6)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      background: 'var(--bg-secondary)',
                    }}
                    data-tina-field={`work-card-${idx}`}
                  >
                    <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-3)' }} data-tina-field={`work-title-${idx}`}>
                      {card.title}
                    </h3>
                    <p style={{ opacity: 0.8 }} data-tina-field={`work-description-${idx}`}>
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {caseStudy.gallery && caseStudy.gallery.images && caseStudy.gallery.images.length > 0 && (
        <section className="section section-xl bg-secondary" data-tina-field="gallery-section">
          <div className="container">
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <span className="label" data-tina-field="gallery-label">
                {caseStudy.gallery.label}
              </span>
              <h2 className="text-title" data-tina-field="gallery-heading">
                {caseStudy.gallery.heading}
              </h2>
              <p className="text-lg" style={{ marginTop: 'var(--space-4)' }} data-tina-field="gallery-intro">
                {caseStudy.gallery.intro}
              </p>
            </div>

            {/* Gallery Images */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--space-6)',
                marginTop: 'var(--space-8)',
              }}
              data-tina-field="gallery-images"
            >
              {caseStudy.gallery.images.map((image: any, idx: number) => (
                <div
                  key={idx}
                  style={{
                    overflow: 'hidden',
                    borderRadius: '8px',
                    background: 'var(--charcoal)',
                    aspectRatio: image.full_width ? '16 / 9' : '1 / 1',
                    gridColumn: image.full_width ? '1 / -1' : 'auto',
                  }}
                  data-tina-field={`gallery-image-${idx}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {caseStudy.results && (
        <section className="section section-xl" data-tina-field="results-section">
          <div className="container">
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <span className="label" data-tina-field="results-label">
                {caseStudy.results.label}
              </span>
              <h2 className="text-title" data-tina-field="results-heading">
                {caseStudy.results.heading}
              </h2>
              <p className="text-lg" style={{ marginTop: 'var(--space-4)' }} data-tina-field="results-intro">
                {caseStudy.results.intro}
              </p>
            </div>

            {/* Results Metrics */}
            {caseStudy.results.metrics && caseStudy.results.metrics.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 'var(--space-6)',
                  marginTop: 'var(--space-8)',
                }}
                data-tina-field="results-metrics"
              >
                {caseStudy.results.metrics.map((metric: any, idx: number) => (
                  <div key={idx} className="metric" data-tina-field={`result-metric-${idx}`}>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                    {metric.description && (
                      <p style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--space-2)', opacity: 0.7 }} data-tina-field={`metric-description-${idx}`}>
                        {metric.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {caseStudy.testimonial && (
        <section className="section section-xl bg-secondary" data-tina-field="testimonial-section">
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <blockquote
              style={{
                fontSize: 'var(--text-2xl)',
                fontStyle: 'italic',
                marginBottom: 'var(--space-6)',
                lineHeight: 1.6,
              }}
              data-tina-field="quote"
            >
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div data-tina-field="testimonial-author">
              <p style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }} data-tina-field="author-name">
                {caseStudy.testimonial.author}
              </p>
              <p style={{ opacity: 0.7 }} data-tina-field="author-company">
                {caseStudy.testimonial.company}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Capabilities Section */}
      {caseStudy.capabilities && (
        <section className="section section-xl" data-tina-field="capabilities-section">
          <div className="container">
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <span className="label" data-tina-field="capabilities-label">
                {caseStudy.capabilities.label}
              </span>
              <h2 className="text-title" data-tina-field="capabilities-heading">
                {caseStudy.capabilities.heading}
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)' }}>
              <p className="text-lg" data-tina-field="capabilities-body">
                {caseStudy.capabilities.body}
              </p>

              {caseStudy.capabilities.services && caseStudy.capabilities.services.length > 0 && (
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--space-4)',
                  }}
                  data-tina-field="services"
                >
                  {caseStudy.capabilities.services.map((service: string, idx: number) => (
                    <li
                      key={idx}
                      style={{
                        paddingLeft: 'var(--space-4)',
                        position: 'relative',
                      }}
                      data-tina-field={`service-${idx}`}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        +
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {caseStudy.cta && (
        <section className="section section-xl bg-primary" style={{ color: 'white' }} data-tina-field="cta-section">
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="text-title" style={{ color: 'white' }} data-tina-field="cta-heading">
              {caseStudy.cta.heading}
            </h2>
            <p className="text-lg" style={{ marginTop: 'var(--space-4)', opacity: 0.95 }} data-tina-field="cta-body">
              {caseStudy.cta.body}
            </p>
            <Link href="/contact" className="btn btn-secondary" style={{ marginTop: 'var(--space-6)' }}>
              {caseStudy.cta.button_text || 'Get in Touch'} →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
