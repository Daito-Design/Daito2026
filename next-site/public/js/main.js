/* ==========================================================================
   DAITO DESIGN V2 - Premium Interactions & Animations
   GSAP ScrollTrigger powered scroll animations
   ========================================================================== */

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --------------------------------------------------------------------------
   GSAP ScrollTrigger Registration
   -------------------------------------------------------------------------- */
gsap.registerPlugin(ScrollTrigger);

/* --------------------------------------------------------------------------
   Navigation Module
   -------------------------------------------------------------------------- */
const Navigation = {
  nav: null,
  toggle: null,
  links: null,
  lastScrollY: 0,
  scrollThreshold: 50,

  init() {
    this.nav = document.querySelector('.nav');
    this.toggle = document.querySelector('.nav-toggle');
    this.links = document.querySelector('.nav-links');

    if (!this.nav) return;

    this.bindEvents();
    this.updateOnScroll();
  },

  bindEvents() {
    // Scroll handling
    window.addEventListener('scroll', () => this.updateOnScroll(), { passive: true });

    // Mobile toggle
    if (this.toggle && this.links) {
      this.toggle.addEventListener('click', () => this.toggleMobile());

      // Close on link click
      this.links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.closeMobile());
      });

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.closeMobile();
      });
    }
  },

  updateOnScroll() {
    const currentScrollY = window.scrollY;

    // Add scrolled class
    if (currentScrollY > this.scrollThreshold) {
      this.nav.classList.add('scrolled');
    } else {
      this.nav.classList.remove('scrolled');
    }

    this.lastScrollY = currentScrollY;
  },

  toggleMobile() {
    this.toggle.classList.toggle('active');
    this.links.classList.toggle('active');
    document.body.style.overflow = this.links.classList.contains('active') ? 'hidden' : '';
  },

  closeMobile() {
    this.toggle?.classList.remove('active');
    this.links?.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/* --------------------------------------------------------------------------
   Hero Animations
   -------------------------------------------------------------------------- */
const HeroAnimations = {
  init() {
    if (prefersReducedMotion) {
      // Just show content immediately
      document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta').forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }

    this.animateHeroText();
    this.animateHeroElements();
  },

  animateHeroText() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    // Split text into words
    const text = heroTitle.innerHTML;
    const words = text.split(' ');
    heroTitle.innerHTML = words.map(word =>
      `<span class="word"><span>${word}</span></span>`
    ).join(' ');

    // Trigger animation after short delay
    setTimeout(() => {
      heroTitle.classList.add('revealed');
    }, 300);
  },

  animateHeroElements() {
    const subtitle = document.querySelector('.hero-subtitle');
    const cta = document.querySelector('.hero-cta');

    setTimeout(() => {
      subtitle?.classList.add('revealed');
    }, 600);

    setTimeout(() => {
      cta?.classList.add('revealed');
    }, 900);
  }
};

/* --------------------------------------------------------------------------
   Scroll Reveal Animations
   -------------------------------------------------------------------------- */
const ScrollReveal = {
  elements: [],

  init() {
    if (prefersReducedMotion) {
      // Show all elements immediately
      document.querySelectorAll('.reveal, .reveal-stagger, .reveal-scale, .reveal-left, .reveal-right').forEach(el => {
        el.classList.add('active');
      });
      return;
    }

    this.elements = document.querySelectorAll('.reveal, .reveal-stagger, .reveal-scale, .reveal-left, .reveal-right');

    this.elements.forEach(element => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 85%',
        onEnter: () => element.classList.add('active'),
        once: true
      });
    });
  }
};

/* --------------------------------------------------------------------------
   Parallax Effects (Apple-style)
   -------------------------------------------------------------------------- */
const ParallaxEffects = {
  init() {
    if (prefersReducedMotion) return;

    this.initBackgroundParallax();
    this.initImageParallax();
    this.initTextParallax();
    this.initPinnedSections();
  },

  initBackgroundParallax() {
    gsap.utils.toArray('.parallax-bg').forEach(bg => {
      gsap.to(bg, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: bg.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  },

  initImageParallax() {
    gsap.utils.toArray('.parallax-image').forEach(img => {
      gsap.to(img, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  },

  initTextParallax() {
    // Large statement text that moves slower than scroll
    gsap.utils.toArray('.parallax-text').forEach(text => {
      gsap.to(text, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: text.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });
  },

  initPinnedSections() {
    // Pinned statement sections (Apple-style)
    gsap.utils.toArray('.pinned-statement').forEach(section => {
      const content = section.querySelector('.pinned-statement-content');

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        pin: content,
        pinSpacing: false
      });

      // Fade in/out the text
      gsap.fromTo(content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'center center',
            scrub: 1
          }
        }
      );

      gsap.to(content, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: 'bottom center',
          scrub: 1
        }
      });
    });
  }
};

/* --------------------------------------------------------------------------
   Scroll-Linked Animations (Apple-style)
   -------------------------------------------------------------------------- */
const ScrollLinkedAnimations = {
  init() {
    if (prefersReducedMotion) return;

    this.initServiceCards();
    this.initCaseStudyReveal();
    this.initStatementReveal();
    this.initMetricsCounter();
    this.initHorizontalScroll();
  },

  initServiceCards() {
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });
  },

  initCaseStudyReveal() {
    gsap.utils.toArray('.case-study-featured').forEach(study => {
      const image = study.querySelector('.case-study-image');
      const content = study.querySelector('.case-study-content');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: study,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });

      tl.from(image, {
        xPercent: -10,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .from(content, {
        xPercent: 10,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.7');
    });
  },

  initStatementReveal() {
    gsap.utils.toArray('.statement-text').forEach(text => {
      // Split into characters for more dramatic effect
      const chars = text.textContent.split('');
      text.innerHTML = chars.map(char =>
        char === ' ' ? ' ' : `<span class="char">${char}</span>`
      ).join('');

      gsap.from(text.querySelectorAll('.char'), {
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });
    });
  },

  initMetricsCounter() {
    gsap.utils.toArray('.metric-value').forEach(metric => {
      const target = parseInt(metric.textContent);
      if (isNaN(target)) return;

      const suffix = metric.textContent.replace(/[0-9]/g, '');

      gsap.from(metric, {
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: metric,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        onUpdate: function() {
          metric.textContent = Math.round(this.targets()[0].textContent) + suffix;
        }
      });
    });
  },

  initHorizontalScroll() {
    const horizontalSections = document.querySelectorAll('.horizontal-scroll');

    horizontalSections.forEach(section => {
      const wrapper = section.querySelector('.horizontal-scroll-wrapper');
      if (!wrapper) return;

      const items = wrapper.children;
      const totalWidth = Array.from(items).reduce((acc, item) => acc + item.offsetWidth, 0);

      gsap.to(wrapper, {
        x: () => -(totalWidth - window.innerWidth + 100),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });
    });
  }
};

/* --------------------------------------------------------------------------
   Scroll Progress Indicator
   -------------------------------------------------------------------------- */
const ScrollProgress = {
  indicator: null,

  init() {
    this.indicator = document.querySelector('.scroll-progress');
    if (!this.indicator) return;

    gsap.to(this.indicator, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    });
  }
};

/* --------------------------------------------------------------------------
   Image Lazy Loading with Fade
   -------------------------------------------------------------------------- */
const LazyImages = {
  init() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px'
    });

    images.forEach(img => imageObserver.observe(img));
  }
};

/* --------------------------------------------------------------------------
   Form Handling
   -------------------------------------------------------------------------- */
const Forms = {
  init() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => this.setupForm(form));
  },

  setupForm(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;

      // Show loading state
      button.textContent = 'Sending...';
      button.disabled = true;

      // Simulate form submission
      setTimeout(() => {
        button.textContent = 'Message Sent!';
        button.classList.add('success');

        // Reset form
        setTimeout(() => {
          form.reset();
          button.textContent = originalText;
          button.disabled = false;
          button.classList.remove('success');
        }, 3000);
      }, 1500);
    });

    // Input animations
    form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
      });

      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement.classList.remove('focused');
        }
      });
    });
  }
};

/* --------------------------------------------------------------------------
   Smooth Scroll for Anchor Links
   -------------------------------------------------------------------------- */
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        if (prefersReducedMotion) {
          target.scrollIntoView();
        } else {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: target,
              offsetY: 80
            },
            ease: 'power3.inOut'
          });
        }
      });
    });
  }
};

/* --------------------------------------------------------------------------
   Cursor Effects (Optional - for desktop)
   -------------------------------------------------------------------------- */
const CursorEffects = {
  cursor: null,

  init() {
    if (prefersReducedMotion || 'ontouchstart' in window) return;

    // Create custom cursor
    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    this.cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
    document.body.appendChild(this.cursor);

    // Add cursor styles
    const style = document.createElement('style');
    style.textContent = `
      .custom-cursor {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
      }
      .cursor-dot {
        position: absolute;
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
      .cursor-ring {
        position: absolute;
        width: 40px;
        height: 40px;
        border: 1px solid rgba(255,255,255,0.5);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s, border-color 0.3s;
      }
      .custom-cursor.hovering .cursor-ring {
        width: 60px;
        height: 60px;
        border-color: white;
      }
      body { cursor: none; }
      a, button { cursor: none; }
    `;
    document.head.appendChild(style);

    this.bindEvents();
  },

  bindEvents() {
    document.addEventListener('mousemove', (e) => {
      gsap.to(this.cursor.querySelector('.cursor-dot'), {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });
      gsap.to(this.cursor.querySelector('.cursor-ring'), {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
      });
    });

    document.querySelectorAll('a, button, .interactive').forEach(el => {
      el.addEventListener('mouseenter', () => this.cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => this.cursor.classList.remove('hovering'));
    });
  }
};

/* --------------------------------------------------------------------------
   Page Transitions
   -------------------------------------------------------------------------- */
const PageTransitions = {
  init() {
    if (prefersReducedMotion) return;

    // Fade in on page load
    document.body.classList.add('is-loading');

    window.addEventListener('load', () => {
      setTimeout(() => {
        document.body.classList.remove('is-loading');
        document.body.classList.add('is-loaded');
      }, 100);
    });

    // Fade out on link click (internal links only)
    document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="mailto"]):not([href^="tel"])').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('http')) return;

        e.preventDefault();
        document.body.classList.add('is-loading');

        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    });
  }
};

/* --------------------------------------------------------------------------
   Accessibility Helpers
   -------------------------------------------------------------------------- */
const Accessibility = {
  init() {
    // Keyboard navigation indication
    document.body.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });

    document.body.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-nav');
    });

    // Skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href'));
        target?.focus();
      });
    }

    // Announce page transitions for screen readers
    this.setupLiveRegion();
  },

  setupLiveRegion() {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'visually-hidden';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  },

  announce(message) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
    }
  }
};

/* --------------------------------------------------------------------------
   AXD Page Specific Animations
   -------------------------------------------------------------------------- */
const AXDAnimations = {
  init() {
    if (!document.querySelector('.axd-page')) return;
    if (prefersReducedMotion) return;

    this.initPillars();
    this.initComparison();
    this.initDiagram();
  },

  initPillars() {
    gsap.utils.toArray('.axd-pillar').forEach((pillar, i) => {
      gsap.from(pillar, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pillar,
          start: 'top 85%'
        }
      });
    });
  },

  initComparison() {
    const comparison = document.querySelector('.comparison-grid');
    if (!comparison) return;

    const cards = comparison.querySelectorAll('.comparison-card');

    gsap.from(cards[0], {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: comparison,
        start: 'top 70%'
      }
    });

    gsap.from(cards[1], {
      x: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: comparison,
        start: 'top 70%'
      }
    });
  },

  initDiagram() {
    // Animated connection lines for any diagram
    gsap.utils.toArray('.diagram-line').forEach(line => {
      gsap.from(line, {
        scaleX: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: line,
          start: 'top 80%'
        }
      });
    });
  }
};

/* --------------------------------------------------------------------------
   Initialize Everything
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  HeroAnimations.init();
  ScrollReveal.init();
  ParallaxEffects.init();
  ScrollLinkedAnimations.init();
  ScrollProgress.init();
  LazyImages.init();
  Forms.init();
  SmoothScroll.init();
  PageTransitions.init();
  Accessibility.init();
  AXDAnimations.init();
  // CursorEffects.init(); // Uncomment for custom cursor

  // Refresh ScrollTrigger on window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  });
});

/* --------------------------------------------------------------------------
   Export for potential module use
   -------------------------------------------------------------------------- */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Navigation,
    HeroAnimations,
    ScrollReveal,
    ParallaxEffects,
    ScrollLinkedAnimations,
    Accessibility
  };
}
