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

document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const backHomeBtn = document.getElementById("backHomeBtn");

  // Scroll to top (smooth)
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Show "Back to Home" only when user reaches near bottom
  const toggleBackHome = () => {
    if (!backHomeBtn) return;

    const scrollPos = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // show when you're within 120px of bottom
    const nearBottom = pageHeight - scrollPos < 120;

    backHomeBtn.classList.toggle("show", nearBottom);
  };

  window.addEventListener("scroll", toggleBackHome);
  window.addEventListener("resize", toggleBackHome);
  toggleBackHome();
});
