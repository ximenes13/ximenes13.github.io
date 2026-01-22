// Menu hambúrguer
const hamburger = document.getElementById('hamburger');
const menuLinks = document.getElementById('menu-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  const isOpen = menuLinks.style.display === 'flex';
  menuLinks.style.display = isOpen ? 'none' : 'flex';
});

// Scroll fade-in
const sections = document.querySelectorAll('section');
const fadeIn = () => {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', fadeIn);
window.addEventListener('load', fadeIn);

// OPCIONAL: carregar projects.json futuramente com fetch se quiseres
