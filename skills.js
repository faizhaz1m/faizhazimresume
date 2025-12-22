/* =========================
   HERO BACKGROUND FADE + SMOOTH SCROLL
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector(".hero-bg");

  if (bg) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const fadePoint = window.innerHeight;

      // opacity fade
      const opacity = Math.max(1 - scrollY / fadePoint, 0);

      // soft parallax movement
      const translate = scrollY * 0.25;

      bg.style.opacity = opacity;
      bg.style.transform = `translateY(${translate}px)`;
    });
  }
});


/* =========================
   OVERALL STATS BAR ANIMATION
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".stats");
  const items = document.querySelectorAll(".stat-item");

  if (!statsSection || items.length === 0) return;

  const fillBars = () => {
    items.forEach(item => {
      const level = item.dataset.level;
      const fill = item.querySelector(".stat-fill");

      if (fill) {
        fill.style.width = level + "%";
      }
    });
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fillBars();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(statsSection);
});
