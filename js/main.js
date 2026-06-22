/**
 * DesignLab — main.js
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ============================================================
     HAMBURGER / MOBILE NAV
     ============================================================ */
  var hamburger  = document.querySelector('.nav__hamburger');
  var mobileMenu = document.querySelector('.nav__mobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('is-open');
      hamburger.classList.toggle('is-active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav') && mobileMenu.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMobileMenu();
        hamburger.focus();
      }
    });

    function closeMobileMenu() {
      mobileMenu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  }

  /* ============================================================
     CONTACT FORM
     ============================================================ */
  var contactForm = document.getElementById('contact-form');
  var successMsg  = document.getElementById('form-success');

  if (contactForm && successMsg) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      contactForm.reset();
      successMsg.style.display = 'block';
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      setTimeout(function () { successMsg.style.display = 'none'; }, 8000);
    });
  }

  /* ============================================================
     SCROLL REVEAL
     Elements fade-up as they enter the viewport.
     Grid siblings stagger automatically.
     ============================================================ */
  if (!window.IntersectionObserver) return; // graceful fallback

  var revealTargets = document.querySelectorAll(
    '.section-header, .step-card, .service-card, .testimonial-card, ' +
    '.team-card, .value-card, .portfolio-card, .service-detail-card, ' +
    '.addon-card, .form-card, .aside-card, .cta-banner .container'
  );

  revealTargets.forEach(function (el) {
    el.classList.add('reveal');

    // Stagger siblings that share the same direct parent
    var siblings = Array.from(el.parentElement.children).filter(function (c) {
      return c.classList.contains('reveal');
    });
    var idx = siblings.indexOf(el);
    if (idx > 0) {
      el.style.setProperty('--reveal-delay', (idx * 95) + 'ms');
    }
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -48px 0px' });

  revealTargets.forEach(function (el) { observer.observe(el); });

});
