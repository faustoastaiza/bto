// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('is-open'));
    document.querySelectorAll('.nav__link').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
  }

  // Nav scrolled state
  const navEl = document.querySelector('.nav');
  const onScroll = () => {
    if (!navEl) return;
    if (window.scrollY > 40) navEl.classList.add('is-scrolled');
    else navEl.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
