// Menu hambúrguer
const hamburger = document.getElementById('hamburger');
const menuLinks = document.getElementById('menu-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menuLinks.style.display = menuLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Scroll fade-in
const sections = document.querySelectorAll('section');
const fadeIn = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', fadeIn);
window.addEventListener('load', fadeIn);
