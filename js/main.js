/**
 * DesignLab — main.js
 * Handles: hamburger menu toggle, contact form feedback
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ============================================================
     HAMBURGER / MOBILE NAV
     ============================================================ */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');

  if (hamburger && mobileMenu) {

    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      hamburger.classList.toggle('is-active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close menu when a nav link is clicked (single-page navigation)
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when user clicks outside the nav
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.nav') && mobileMenu.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
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
     CONTACT FORM — client-side feedback
     The form is not wired to a backend yet. Connect it to
     Formspree, Netlify Forms, or EmailJS before going live.
     See: https://formspree.io | https://www.netlify.com/products/forms
     ============================================================ */
  const contactForm = document.getElementById('contact-form');
  const successMsg  = document.getElementById('form-success');

  if (contactForm && successMsg) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Basic required-field check (HTML5 validation already handles this,
      // but this gives us a hook if we want custom messaging later)
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      // Show success message and reset the form
      contactForm.reset();
      successMsg.style.display = 'block';
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Hide the success message after 8 seconds
      setTimeout(function () {
        successMsg.style.display = 'none';
      }, 8000);
    });
  }

});
