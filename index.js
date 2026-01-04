document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     NAVIGATION SWITCH CONTENT
  =============================== */
  const mainContent = document.getElementById('main-content');
  const navItems = document.querySelectorAll('.nav-item');

  if (typeof sections !== "undefined") {
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const section = item.getAttribute('data-section');
        mainContent.innerHTML = sections[section];
      });
    });
  }

  /* ===============================
     SKILLS BAR ANIMATION
  =============================== */
  const skillSection = document.querySelector('.skills-section');
  const bars = document.querySelectorAll('.progress-fill');

  if (skillSection && bars.length > 0) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            bars.forEach(bar => {
              bar.style.width = bar.dataset.level + '%';
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(skillSection);
  }

  /* ===============================
     DATE + DAY (TOP RIGHT)
  =============================== */
  const dateEl = document.getElementById("dateDay");

  if (dateEl) {
    const now = new Date();

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];

    dateEl.textContent =
      `${days[now.getDay()]} • ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
  }

});
function updateDateTime() {
  const now = new Date();

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // tambah 0 depan kalau < 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("dateDay").innerHTML =
    `${dayName} • ${day} ${month} ${year} &nbsp;|&nbsp; ${hours}:${minutes}:${seconds}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

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
