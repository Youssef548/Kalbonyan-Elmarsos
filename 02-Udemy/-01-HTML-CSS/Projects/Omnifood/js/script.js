// === Set Current Year ===
function setCurrentYear() {
  const yearElement = document.querySelector('.year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// === Mobile Navigation Toggle ===
function initMobileNavigation() {
  const navToggleButton = document.querySelector('.btn-mobile-nav');
  const header = document.querySelector('header');
  if (navToggleButton && header) {
    navToggleButton.addEventListener('click', () =>
      header.classList.toggle('nav-open')
    );
  }
}

// === Smooth Scroll Animation ===
function initSmoothScrolling() {
  const links = document.querySelectorAll('a:link');
  const header = document.querySelector('header');

  links.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');

      if (!href || href[0] !== '#') return;

      event.preventDefault();

      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Close mobile navigation if applicable
      if (link.classList.contains('main-nav-link') && header) {
        header.classList.remove('nav-open');
      }
    });
  });
}

// === Sticky Navigation ===
function initStickyNavigation() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;

  const observer = new IntersectionObserver(
    entries => {
      const entry = entries[0];
      document.body.classList.toggle('sticky', !entry.isIntersecting);
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '-80px',
    }
  );

  observer.observe(heroSection);
}

// === Flexbox Gap Compatibility Check (Safari Fix) ===
function fixFlexGap() {
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  document.body.appendChild(flex);

  const isGapSupported = flex.scrollHeight === 1;
  document.body.removeChild(flex);

  if (!isGapSupported) {
    document.body.classList.add('no-flexbox-gap');
  }
}

// === Init All Functions ===
function init() {
  setCurrentYear();
  initMobileNavigation();
  initSmoothScrolling();
  initStickyNavigation();
  fixFlexGap();
}

document.addEventListener('DOMContentLoaded', init);
