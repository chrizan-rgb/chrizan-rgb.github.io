const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

const sections = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(section => observer.observe(section));
} else {
  sections.forEach(section => section.classList.add('visible'));
}

document.getElementById('year').textContent = new Date().getFullYear();

// Project details: return to the actual previous page when reached from this portfolio.
const backLink = document.querySelector('.back-link');
if (backLink) {
  backLink.addEventListener('click', (event) => {
    try {
      const previous = new URL(document.referrer);
      if (previous.origin === window.location.origin && previous.pathname !== window.location.pathname && window.history.length > 1) {
        event.preventDefault();
        window.history.back();
      }
    } catch (_) { /* fallback uses the link to projects.html */ }
  });
}
const currentFilename = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentFilename) link.setAttribute('aria-current', 'page');
});
