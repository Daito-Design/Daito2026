import Link from 'next/link';
import servicesData from "../../../content/pages/services.json";

export const metadata = {
  title: 'Services | Daito Design',
  description: 'End-to-end enterprise UX. From discovery through design systems and ongoing support.',
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="container">
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow" data-tina-field="hero.eyebrow">
              {servicesData.hero.eyebrow}
            </span>
            <h1 className="hero-title" style={{ fontSize: 'var(--text-5xl)' }} data-tina-field="hero.headline">
              {servicesData.hero.headline}
            </h1>
            <p className="hero-subtitle" data-tina-field="hero.subtitle">
              {servicesData.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Phases Sections */}
      {servicesData.phases.map((phase, idx) => {
        const isEvenPhase = idx % 2 === 0;
        const bgClass = isEvenPhase ? 'bg-sand-light' : '';
        
        return (
          <section
            key={phase.number}
            id={`phase-${phase.number}`}
            className={`section section-xl ${bgClass}`}
          >
            <div className="container">
              <div className="grid" style={{ gridTemplateColumns: '1fr 2fr', gap: 'var(--space-16)' }}>
                {/* Phase Header */}
                <div className="reveal">
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-6xl)',
                      color: isEvenPhase ? 'var(--sand-darker)' : 'var(--charcoal)',
                      marginBottom: 'var(--space-4)',
                    }}
                    data-tina-field={`phases.${idx}.number`}
                  >
                    {phase.number}
                  </div>
                  <span className="eyebrow" data-tina-field={`phases.${idx}.heading`}>
                    {phase.heading}
                  </span>
                  <h2 className="text-title" data-tina-field={`phases.${idx}.description`}>
                    {phase.description}
                  </h2>
                </div>

                {/* Services Grid */}
                <div className="reveal">
                  <div className="grid grid-2" style={{ gap: 'var(--space-8)' }}>
                    {phase.services.map((service, serviceIdx) => (
                      <div
                        key={serviceIdx}
                        style={{
                          padding: 'var(--space-6)',
                          background: isEvenPhase ? 'var(--white)' : 'var(--sand-light)',
                          borderRadius: 'var(--radius-md)',
                        }}
                        data-tina-field={`phases.${idx}.services.${serviceIdx}`}
                      >
                        <h4
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: 'var(--text-lg)',
                            marginBottom: 'var(--space-3)',
                            fontWeight: 600,
                            color: 'var(--charcoal)',
                          }}
                          data-tina-field={`phases.${idx}.services.${serviceIdx}.title`}
                        >
                          {service.title}
                        </h4>
                        <p
                          style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--charcoal-soft)',
                            lineHeight: 1.6,
                          }}
                          data-tina-field={`phases.${idx}.services.${serviceIdx}.description`}
                        >
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Industries Section */}
      <section className="section section-xl">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <span className="eyebrow" data-tina-field="industries.heading">
              Industries
            </span>
            <h2 className="text-title" data-tina-field="industries.heading">
              {servicesData.industries.heading}
            </h2>
          </div>

          <div className="grid grid-2 reveal-stagger" style={{ gap: 'var(--space-8)' }}>
            {servicesData.industries.cards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  padding: 'var(--space-10)',
                  background: 'var(--sand-light)',
                  borderRadius: 'var(--radius-md)',
                }}
                data-tina-field={`industries.cards.${idx}`}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-2xl)',
                    marginBottom: 'var(--space-4)',
                    color: 'var(--charcoal)',
                    fontWeight: 600,
                  }}
                  data-tina-field={`industries.cards.${idx}.name`}
                >
                  {card.name}
                </h3>
                <p
                  style={{
                    color: 'var(--charcoal-soft)',
                    marginBottom: 'var(--space-6)',
                    lineHeight: 1.6,
                  }}
                  data-tina-field={`industries.cards.${idx}.description`}
                >
                  {card.description}
                </p>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: 'var(--space-6)' }}>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--charcoal-medium)',
                      lineHeight: 1.6,
                    }}
                    data-tina-field={`industries.cards.${idx}.clients`}
                  >
                    <span style={{ fontWeight: 600, display: 'block', marginBottom: 'var(--space-2)' }}>
                      Featured clients:
                    </span>
                    {Array.isArray(card.clients) ? card.clients.join(', ') : card.clients}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section section-xl"
        style={{
          background: 'var(--oxblood)',
          color: 'var(--white)',
        }}
      >
        <div className="container text-center">
          <div className="reveal">
            <h2
              className="text-display"
              style={{
                color: 'var(--white)',
                marginBottom: 'var(--space-8)',
              }}
              data-tina-field="cta.heading"
            >
              {servicesData.cta.heading}
            </h2>
            <p
              className="text-body-lg"
              style={{
                maxWidth: '50ch',
                margin: '0 auto var(--space-12)',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.6,
              }}
              data-tina-field="cta.body"
            >
              {servicesData.cta.body}
            </p>
            <Link
              href="/contact"
              className="btn btn-lg"
              style={{
                background: 'var(--white)',
                color: 'var(--oxblood)',
                fontWeight: 600,
                padding: 'var(--space-4) var(--space-8)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease',
              }}
              data-tina-field="cta.button_text"
            >
              {servicesData.cta.button_text}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
