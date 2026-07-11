/* ==========================================================================
   SAFS Information Technologies — script.js
   Handles: sticky nav shadow, mobile menu, active link highlight,
   scroll-reveal animation, back-to-top button, contact form validation.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky navbar shadow on scroll ---------- */
  const navbar = document.querySelector('.navbar');
  const handleNavShadow = () => {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  handleNavShadow();
  window.addEventListener('scroll', handleNavShadow);

  /* ---------- Mobile hamburger menu ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is tapped (mobile)
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Active page highlighting ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---------- Scroll-reveal animation ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Back to top button ---------- */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Contact form validation + mock submit ---------- */
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    const successMsg = document.querySelector('.form-success');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let valid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#DC2626';
        } else {
          field.style.borderColor = '';
        }
      });

      const emailField = contactForm.querySelector('#email');
      if (emailField && emailField.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          valid = false;
          emailField.style.borderColor = '#DC2626';
        }
      }

      if (!valid) return;

      // Mock submission (no backend connected yet)
      contactForm.reset();
      if (successMsg) {
        successMsg.classList.add('is-visible');
        setTimeout(() => successMsg.classList.remove('is-visible'), 6000);
      }
    });
  }

  /* ---------- Current year in footer (if marked) ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

});
