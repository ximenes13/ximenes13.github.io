// Router SPA Vanilla JS
const app = document.getElementById("app");

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

function router() {
  const routes = {
    "/": "profile",
    "/about": "about",
    "/experience": "experience",
    "/projects": "projects",
    "/contact": "contact"
  };

  const path = window.location.pathname;
  const sectionId = routes[path] || "profile";

  document.querySelectorAll("main section").forEach(section => {
    section.style.display = "none";
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "block";
    activeSection.classList.add("visible"); // fade-in
  }
}

// Intercepta cliques SPA
document.addEventListener("click", e => {
  const link = e.target.closest("a[data-link]");
  if (!link) return;

  e.preventDefault();
  navigateTo(link.getAttribute("href"));
});

// Back / forward do browser
window.addEventListener("popstate", router);

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  router();
});

// Menu hambúrguer
const hamburger = document.getElementById('hamburger');
const menuLinks = document.getElementById('menu-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  const isOpen = menuLinks.style.display === 'flex';
  menuLinks.style.display = isOpen ? 'none' : 'flex';
});

// Scroll fade-in (para seções visíveis)
const fadeIn = () => {
  const activeSection = document.querySelector("main section:not([style*='display: none'])");
  if (!activeSection) return;

  const top = activeSection.getBoundingClientRect().top;
  if (top < window.innerHeight - 100) {
    activeSection.classList.add("visible");
  }
};
window.addEventListener('scroll', fadeIn);
window.addEventListener('load', fadeIn);
