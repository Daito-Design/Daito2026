import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="/images/daito-logo.webp"
              alt="Daito Design"
              style={{ height: '60px', width: 'auto', marginBottom: '1rem' }}
            />
            <p className="footer-tagline">Industrial UX & Experience Design</p>
            <p style={{ color: 'var(--charcoal-soft)', fontSize: 'var(--text-sm)', marginTop: '0.5rem' }}>
              Where field expertise meets design excellence.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li>
                <Link href="/services">UX Research & Discovery</Link>
              </li>
              <li>
                <Link href="/services">Design & Interaction</Link>
              </li>
              <li>
                <Link href="/services">Strategy & Planning</Link>
              </li>
              <li>
                <Link href="/agentic-experience">Agentic Experience Design</Link>
              </li>
            </ul>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/case-studies">Work</Link>
              </li>
              <li>
                <Link href="/blog">Insights</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Get In Touch</h4>
            <p>
              <a href="mailto:info@daitodesign.com">info@daitodesign.com</a>
            </p>
            <p style={{ marginTop: '1rem', color: 'var(--charcoal-soft)', fontSize: 'var(--text-sm)' }}>
              Austin, TX · Houston, TX · Pittsburgh, PA
            </p>
            <a
              href="https://www.linkedin.com/company/daitodesign/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1rem',
                color: 'var(--charcoal-soft)',
                fontSize: 'var(--text-sm)',
                textDecoration: 'none',
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Daito Design. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
