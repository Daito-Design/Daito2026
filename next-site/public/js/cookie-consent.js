/**
 * GDPR-Compliant Cookie Consent Banner
 * Daito Design - 2026
 */

(function() {
  'use strict';

  const CONSENT_KEY = 'daito_cookie_consent';
  const CONSENT_VERSION = '1.0';

  // Check if consent has been given
  function hasConsent() {
    try {
      const consent = JSON.parse(localStorage.getItem(CONSENT_KEY));
      return consent && consent.version === CONSENT_VERSION;
    } catch (e) {
      return false;
    }
  }

  // Get consent preferences
  function getConsentPreferences() {
    try {
      const consent = JSON.parse(localStorage.getItem(CONSENT_KEY));
      return consent || { analytics: false, marketing: false, necessary: true };
    } catch (e) {
      return { analytics: false, marketing: false, necessary: true };
    }
  }

  // Save consent preferences
  function saveConsent(preferences) {
    const consent = {
      ...preferences,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    applyConsent(preferences);
    hideBanner();
  }

  // Apply consent preferences
  function applyConsent(preferences) {
    if (preferences.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }
    
    if (preferences.marketing) {
      enableMarketing();
    } else {
      disableMarketing();
    }
  }

  // Enable Google Analytics
  function enableAnalytics() {
    // GA is loaded but we need to enable tracking
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  }

  // Disable Google Analytics
  function disableAnalytics() {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    // Also set opt-out cookie
    window['ga-disable-G-7HPF8C3VXH'] = true;
  }

  // Enable marketing/HubSpot
  function enableMarketing() {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_personalization': 'granted',
        'ad_user_data': 'granted'
      });
    }
  }

  // Disable marketing
  function disableMarketing() {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_personalization': 'denied',
        'ad_user_data': 'denied'
      });
    }
  }

  // Hide banner
  function hideBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
      banner.style.transform = 'translateY(100%)';
      setTimeout(() => banner.remove(), 300);
    }
  }

  // Create and show banner
  function showBanner() {
    if (hasConsent()) {
      applyConsent(getConsentPreferences());
      return;
    }

    // Set default denied state for Google Analytics
    if (typeof gtag === 'function') {
      gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'ad_personalization': 'denied',
        'ad_user_data': 'denied'
      });
    }

    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.innerHTML = `
      <style>
        #cookie-consent-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #1A1A1A;
          color: #F5F0E8;
          padding: 20px;
          z-index: 10000;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
          transform: translateY(100%);
          transition: transform 0.3s ease;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        #cookie-consent-banner.visible {
          transform: translateY(0);
        }
        .cookie-consent-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
        }
        .cookie-consent-text {
          flex: 1;
          min-width: 300px;
        }
        .cookie-consent-text h4 {
          margin: 0 0 8px 0;
          font-size: 16px;
          font-weight: 600;
        }
        .cookie-consent-text p {
          margin: 0;
          font-size: 14px;
          color: rgba(245,240,232,0.8);
          line-height: 1.5;
        }
        .cookie-consent-text a {
          color: #8B3A42;
          text-decoration: underline;
        }
        .cookie-consent-options {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cookie-consent-options label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          cursor: pointer;
          padding: 8px 12px;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .cookie-consent-options input[type="checkbox"] {
          width: 16px;
          height: 16px;
          accent-color: #722F37;
        }
        .cookie-consent-options input:disabled {
          opacity: 0.5;
        }
        .cookie-consent-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cookie-consent-buttons button {
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 500;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-accept-all {
          background: #722F37;
          color: white;
        }
        .btn-accept-all:hover {
          background: #8B3A42;
        }
        .btn-accept-selected {
          background: transparent;
          color: #F5F0E8;
          border: 1px solid rgba(245,240,232,0.3) !important;
        }
        .btn-accept-selected:hover {
          background: rgba(255,255,255,0.1);
        }
        .btn-reject-all {
          background: transparent;
          color: rgba(245,240,232,0.7);
        }
        .btn-reject-all:hover {
          color: #F5F0E8;
        }
        @media (max-width: 768px) {
          .cookie-consent-container {
            flex-direction: column;
            align-items: stretch;
          }
          .cookie-consent-buttons {
            justify-content: stretch;
          }
          .cookie-consent-buttons button {
            flex: 1;
          }
        }
      </style>
      <div class="cookie-consent-container">
        <div class="cookie-consent-text">
          <h4>🍪 Cookie Preferences</h4>
          <p>We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
          Read our <a href="/privacy.html">Privacy Policy</a> for more information.</p>
        </div>
        <div class="cookie-consent-options">
          <label>
            <input type="checkbox" id="cookie-necessary" checked disabled>
            Necessary
          </label>
          <label>
            <input type="checkbox" id="cookie-analytics">
            Analytics
          </label>
          <label>
            <input type="checkbox" id="cookie-marketing">
            Marketing
          </label>
        </div>
        <div class="cookie-consent-buttons">
          <button class="btn-reject-all" onclick="window.cookieConsent.rejectAll()">Reject All</button>
          <button class="btn-accept-selected" onclick="window.cookieConsent.acceptSelected()">Save Preferences</button>
          <button class="btn-accept-all" onclick="window.cookieConsent.acceptAll()">Accept All</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);
    
    // Trigger animation
    requestAnimationFrame(() => {
      banner.classList.add('visible');
    });
  }

  // Public API
  window.cookieConsent = {
    acceptAll: function() {
      saveConsent({ necessary: true, analytics: true, marketing: true });
    },
    acceptSelected: function() {
      const analytics = document.getElementById('cookie-analytics').checked;
      const marketing = document.getElementById('cookie-marketing').checked;
      saveConsent({ necessary: true, analytics, marketing });
    },
    rejectAll: function() {
      saveConsent({ necessary: true, analytics: false, marketing: false });
    },
    showPreferences: function() {
      showBanner();
    },
    getPreferences: getConsentPreferences
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBanner);
  } else {
    showBanner();
  }
})();
