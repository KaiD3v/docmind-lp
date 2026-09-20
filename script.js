/**
 * DocMind Landing Page Scripts
 * Handles Dark/Light theme switching, mobile menu, FAQ accordion,
 * and smooth scroll navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initFaqAccordion();
  initSmoothScroll();
});

/**
 * 1. Dark & Light Theme Management
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Check saved preference or system preference
  const savedTheme = localStorage.getItem('docmind-theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else if (systemPrefersLight) {
    root.setAttribute('data-theme', 'light');
  } else {
    root.setAttribute('data-theme', 'dark');
  }

  // Handle click to toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('docmind-theme', newTheme);
    });
  }

  // Listen for system theme changes if user hasn't explicitly set preference
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem('docmind-theme')) {
      root.setAttribute('data-theme', e.matches ? 'light' : 'dark');
    }
  });
}

/**
 * 2. Responsive Mobile Navigation Menu
 */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!mobileToggle || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove('open');
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    navLinks.classList.add('open');
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
  }

  mobileToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking any nav link
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close when resizing above tablet breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * 3. FAQ Accordion Component
 */
function initFaqAccordion() {
  const faqRows = document.querySelectorAll('.faq-row');

  faqRows.forEach((row) => {
    const trigger = row.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = row.classList.contains('active');

      // Close all other rows for clean single disclosure
      faqRows.forEach((other) => {
        if (other !== row) {
          other.classList.remove('active');
        }
      });

      row.classList.toggle('active', !isActive);
    });
  });
}

/**
 * 4. Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight : 60;
        const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 16);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}
