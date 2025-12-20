const mainContent = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');

/*
const sections = {
    home: document.getElementById('home').outerHTML,
    about: `<div class="blank-section">About Section</div>`,
    skills: `<div class="blank-section">Skills Section</div>`,
};
*/

   

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const section = item.getAttribute('data-section');
        mainContent.innerHTML = sections[section];
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const skillSection = document.querySelector('.skills-section');
  const bars = document.querySelectorAll('.progress-fill');

  if (!skillSection || bars.length === 0) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bars.forEach(bar => {
            bar.style.width = bar.dataset.level + '%';
          });
          observer.disconnect(); // animate sekali
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(skillSection);
});
