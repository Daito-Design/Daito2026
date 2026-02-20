'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="Daito Design Home">
            <img
              src="/images/daito-logo.webp"
              alt="Daito Design"
              className="nav-logo-img"
              style={{ height: '72px', width: 'auto' }}
            />
          </Link>
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li>
              <Link href="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/agentic-experience" className="nav-link">
                Agentic Experience
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="nav-link">
                Work
              </Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-cta">
                Get in Touch
              </Link>
            </li>
          </ul>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
