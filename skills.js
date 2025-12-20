/* ======================
   HERO FADE ON SCROLL
====================== */
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (hero) {
    let scrollY = window.scrollY;
    let fadePoint = window.innerHeight;
    let opacity = 1 - scrollY / fadePoint;
    hero.style.opacity = Math.max(opacity, 0);
  }
});


/* ======================
   STATS BAR ANIMATION
====================== */
const statsSection = document.querySelector('.stats-section');
const bars = document.querySelectorAll('.fill');

if (statsSection && bars.length > 0) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach(bar => {
          bar.style.width = bar.dataset.level + '%';
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(statsSection);
}
