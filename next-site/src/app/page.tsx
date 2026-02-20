import Link from 'next/link';
import homeData from "../../content/pages/home.json";

export default function HomePage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <style>{`
          @keyframes kenburns {
            0% { transform: scale(1) translateX(0); }
            50% { transform: scale(1.1) translateX(-2%); }
            100% { transform: scale(1) translateX(0); }
          }
          .hero-bg-animated {
            animation: kenburns 20s ease-in-out infinite;
          }
        `}</style>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://images.pexels.com/photos/3216911/pexels-photo-3216911.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Offshore drilling rig on water"
            className="hero-bg-animated"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.6,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to right, var(--sand) 0%, rgba(245,240,232,0.7) 40%, rgba(245,240,232,0.3) 100%)',
            }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow" data-tina-field="hero.eyebrow">
              {homeData.hero.eyebrow}
            </span>
            <h1 className="hero-title" data-tina-field="hero.headline">
              {homeData.hero.headline}
            </h1>
            <p className="hero-subtitle" data-tina-field="hero.subtitle">
              {homeData.hero.subtitle}
            </p>
            <div className="hero-cta">
              <Link
                href={homeData.hero.cta_link}
                className="btn btn-primary btn-lg btn-arrow"
                style={{ backgroundColor: '#722F37', borderColor: '#722F37' }}
                data-tina-field="hero.cta_text"
              >
                {homeData.hero.cta_text}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-indicator-line"></div>
        </div>
      </section>

      {/* Trust Strip Section */}
      <section style={{ background: 'var(--charcoal)', padding: 'var(--space-6) 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <div className="trust-strip" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-10)', flexWrap: 'wrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em' }} data-tina-field="trust_strip.eyebrow">
              Trusted by
            </span>
            <div className="trust-logos" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', color: 'rgba(255,255,255,0.8)', flexWrap: 'wrap', justifyContent: 'center' }}>
              {homeData.trust_strip.clients.map((client, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
                  <span className="trust-item" style={{ fontWeight: 600, fontSize: 'var(--text-base)' }} data-tina-field={`trust_strip.clients.${idx}`}>
                    {client}
                  </span>
                  {idx < homeData.trust_strip.clients.length - 1 && (
                    <span style={{ opacity: 0.3 }}>|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="section-full statement-section bg-sand-light">
        <div className="container">
          <p className="statement-text reveal" data-tina-field="statement.text">
            {homeData.statement.text}
            <span className="highlight" data-tina-field="statement.highlight">
              {homeData.statement.highlight}
            </span>
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section section-xl bg-charcoal" style={{ color: 'var(--sand)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://images.pexels.com/photos/1716008/pexels-photo-1716008.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Oil rig platform silhouette at sunrise"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.25,
            }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)', alignItems: 'center' }}>
            <div className="reveal-left">
              <span className="eyebrow" style={{ color: 'var(--oxblood-light)' }} data-tina-field="value_prop.eyebrow">
                Enterprise Complexity at Global Scale
              </span>
              <h2 className="text-title" style={{ color: 'var(--white)', marginBottom: 'var(--space-8)' }} data-tina-field="value_prop.heading">
                {homeData.value_prop.heading}
              </h2>
              <p className="text-body-lg" style={{ color: 'var(--sand-darker)', marginBottom: 'var(--space-8)', maxWidth: '50ch' }} data-tina-field="value_prop.body">
                {homeData.value_prop.body}
              </p>
            </div>
            <div className="reveal-right">
              <div style={{ position: 'relative', marginBottom: 'var(--space-8)' }}>
                <img
                  src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Engineer in hard hat inspecting machinery"
                  className="field-img"
                  style={{
                    width: '100%',
                    aspectRatio: '16/10',
                    objectFit: 'cover',
                    transition: 'filter 0.5s ease',
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--charcoal) 0%, transparent 30%)' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                {homeData.stats.items.map((stat, idx) => (
                  <div key={idx} style={{ padding: 'var(--space-6)', background: 'var(--charcoal-light)' }}>
                    <div className="metric-value" style={{ color: 'var(--oxblood-light)' }} data-tina-field={`stats.items.${idx}.value`}>
                      {stat.value}
                    </div>
                    <div className="metric-label" style={{ color: 'var(--sand-darker)' }} data-tina-field={`stats.items.${idx}.label`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-xl">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <span className="eyebrow" data-tina-field="services_section.subtitle">
              {homeData.services_section.subtitle}
            </span>
            <h2 className="text-title mb-6" data-tina-field="services_section.heading">
              {homeData.services_section.heading}
            </h2>
          </div>

          <div className="services-grid">
            {homeData.services_section.services.map((service, idx) => (
              <article key={idx} className="service-card">
                <div className="service-number" aria-hidden="true" data-tina-field={`services_section.services.${idx}.number`}>
                  {service.number}
                </div>
                <h3 className="service-title" data-tina-field={`services_section.services.${idx}.title`}>
                  {service.title}
                </h3>
                <p className="service-description" data-tina-field={`services_section.services.${idx}.description`}>
                  {service.description}
                </p>
                <ul className="service-list">
                  {service.services_list.map((item, itemIdx) => (
                    <li key={itemIdx} data-tina-field={`services_section.services.${idx}.services_list.${itemIdx}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases Section */}
      <section className="section section-xl bg-sand-light">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <h2 className="text-title" data-tina-field="featured_cases.heading">
              {homeData.featured_cases.heading}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-12)' }}>
            {homeData.featured_cases.cases.map((caseStudy, idx) => (
              <Link
                key={idx}
                href={caseStudy.link}
                className="case-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  background: 'var(--white)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
              >
                <div style={{ position: 'relative', paddingBottom: '66.67%', overflow: 'hidden', background: 'var(--charcoal-light)' }}>
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.headline}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div style={{ padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span className="eyebrow" style={{ color: 'var(--oxblood)', marginBottom: 'var(--space-2)' }} data-tina-field={`featured_cases.cases.${idx}.client`}>
                    {caseStudy.client}
                  </span>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--charcoal)', lineHeight: 1.3 }} data-tina-field={`featured_cases.cases.${idx}.headline`}>
                    {caseStudy.headline}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--charcoal-soft)', marginBottom: 'var(--space-6)', flex: 1 }} data-tina-field={`featured_cases.cases.${idx}.description`}>
                    {caseStudy.description}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', borderTop: '1px solid var(--sand)', paddingTop: 'var(--space-6)' }}>
                    <div>
                      <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--oxblood)' }} data-tina-field={`featured_cases.cases.${idx}.metric1_value`}>
                        {caseStudy.metric1_value}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--charcoal-soft)', textTransform: 'uppercase', letterSpacing: '0.05em' }} data-tina-field={`featured_cases.cases.${idx}.metric1_label`}>
                        {caseStudy.metric1_label}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--oxblood)' }} data-tina-field={`featured_cases.cases.${idx}.metric2_value`}>
                        {caseStudy.metric2_value}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--charcoal-soft)', textTransform: 'uppercase', letterSpacing: '0.05em' }} data-tina-field={`featured_cases.cases.${idx}.metric2_label`}>
                        {caseStudy.metric2_label}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section section-xl bg-charcoal">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <h2 className="text-title" style={{ color: 'var(--white)' }} data-tina-field="industries.heading">
              {homeData.industries.heading}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)' }}>
            {homeData.industries.cards.map((industry, idx) => (
              <div
                key={idx}
                style={{
                  padding: 'var(--space-8)',
                  background: 'var(--charcoal-light)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--white)', marginBottom: 'var(--space-3)' }} data-tina-field={`industries.cards.${idx}.name`}>
                  {industry.name}
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--sand-darker)', marginBottom: 'var(--space-6)' }} data-tina-field={`industries.cards.${idx}.description`}>
                  {industry.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                  {industry.clients.map((client, clientIdx) => (
                    <span
                      key={clientIdx}
                      style={{
                        padding: 'var(--space-1) var(--space-3)',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '4px',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--sand-darker)',
                        whiteSpace: 'nowrap',
                      }}
                      data-tina-field={`industries.cards.${idx}.clients.${clientIdx}`}
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-xl bg-sand-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '60ch', margin: '0 auto' }}>
            <h2 className="text-title mb-6" style={{ color: 'var(--charcoal)' }} data-tina-field="cta_section.heading">
              {homeData.cta_section.heading}
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--charcoal-soft)', marginBottom: 'var(--space-10)' }} data-tina-field="cta_section.body">
              {homeData.cta_section.body}
            </p>
            <Link
              href={homeData.cta_section.button_link}
              className="btn btn-primary btn-lg btn-arrow"
              style={{ backgroundColor: '#722F37', borderColor: '#722F37', display: 'inline-block' }}
              data-tina-field="cta_section.button_text"
            >
              {homeData.cta_section.button_text}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
