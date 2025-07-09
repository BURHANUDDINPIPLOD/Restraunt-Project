// Toggle Sidebar on Mobile
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Optional: Animate sections on scroll
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const scrollPos = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < scrollPos - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Initial style for scroll animation
window.addEventListener('DOMContentLoaded', () => {
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.6s ease-out';
  });
  revealOnScroll(); // show if already in view
});
