(function () {
  var UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var STORAGE_KEY = 'fb_utm';
  var PHONE_DISPLAY = '+41 (0) 52 521 10 20';
  var PHONE_TEL = '+41525211020';

  function getUtmsFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var utm = {};
    UTM_KEYS.forEach(function (key) {
      var value = params.get(key);
      if (value) utm[key] = value;
    });
    return utm;
  }

  function readStoredUtms() {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
    } catch (_e) {
      return {};
    }
  }

  function persistUtms() {
    var fromUrl = getUtmsFromUrl();
    if (Object.keys(fromUrl).length) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    return readStoredUtms();
  }

  function getUtms() {
    return readStoredUtms();
  }

  function track(eventName, params) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, Object.assign({}, getUtms(), params || {}));
  }

  function sendPageView() {
    persistUtms();
    track('page_view', {
      page_location: window.location.href,
      page_title: document.title,
    });
  }

  function initPhoneOverlay() {
    var overlay = document.getElementById('phone-overlay');
    if (!overlay) return;

    var panel = overlay.querySelector('.phone-overlay-panel');
    var closeBtn = overlay.querySelector('.phone-overlay-close');
    var backdrop = overlay.querySelector('.phone-overlay-backdrop');
    var lastFocus = null;

    function openOverlay(location) {
      lastFocus = document.activeElement;
      overlay.hidden = false;
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('overlay-open');
      track('phone_overlay_open', { cta_location: location || 'unknown' });
      if (closeBtn) closeBtn.focus();
    }

    function closeOverlay() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('overlay-open');
      window.setTimeout(function () {
        overlay.hidden = true;
      }, 220);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    document.querySelectorAll('[data-action="show-phone"]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openOverlay(el.dataset.ctaLocation || 'erstberatung');
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeOverlay);
    if (backdrop) backdrop.addEventListener('click', closeOverlay);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeOverlay();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeOverlay();
    });

    overlay.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.addEventListener('click', function () {
        track('cta_click', {
          cta_name: 'phone_call',
          cta_location: 'phone_overlay',
          link_url: link.href,
        });
      });
    });

    if (panel) {
      panel.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
  }

  function initCtaTracking() {
    document.querySelectorAll('[data-cta]').forEach(function (el) {
      el.addEventListener('click', function () {
        track('cta_click', {
          cta_name: el.dataset.cta,
          cta_location: el.dataset.ctaLocation || 'unknown',
          link_url: el.getAttribute('href') || undefined,
        });
      });
    });

    document.querySelectorAll('a[href^="mailto:"]').forEach(function (el) {
      if (el.dataset.cta) return;
      el.addEventListener('click', function () {
        track('cta_click', {
          cta_name: 'email',
          cta_location: el.dataset.ctaLocation || 'inline',
          link_url: el.href,
        });
      });
    });

    document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
      if (el.closest('#phone-overlay')) return;
      el.addEventListener('click', function () {
        track('cta_click', {
          cta_name: 'phone_call',
          cta_location: el.dataset.ctaLocation || 'inline',
          link_url: el.href,
        });
      });
    });

    document.querySelectorAll('a[data-outbound="linkedin"]').forEach(function (el) {
      el.addEventListener('click', function () {
        track('outbound_click', {
          link_domain: 'linkedin.com',
          cta_location: el.dataset.ctaLocation || 'unknown',
          link_url: el.href,
        });
      });
    });
  }

  function initScrollDepth() {
    var marks = [50, 90];
    var seen = {};

    function onScroll() {
      var doc = document.documentElement;
      var scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      var depth = Math.round((window.scrollY / scrollable) * 100);
      marks.forEach(function (mark) {
        if (depth >= mark && !seen[mark]) {
          seen[mark] = true;
          track('scroll_depth', { percent: mark });
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function init() {
    sendPageView();
    initPhoneOverlay();
    initCtaTracking();
    initScrollDepth();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
