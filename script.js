// Router SPA FINAL - scroll automático incluído
function navigateTo(url) {
  if (!url.startsWith('/')) url = '/' + url;
  window.location.hash = url;
  router();
}

function router() {
  const routes = {
    "/": "profile",
    "/profile": "profile",
    "/about": "about",
    "/experience": "experience",
    "/projects": "projects",
    "/contact": "contact"
  };

  let path = window.location.hash.slice(1) || window.location.pathname;
  const sectionId = routes[path] || "profile";

  // Esconde todas
  document.querySelectorAll("main section").forEach(section => {
    section.style.display = "none";
    section.classList.remove("visible");
  });

  // Mostra ativa
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "block";
    // Scroll suave + fade-in automático
    setTimeout(() => {
      activeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => activeSection.classList.add("visible"), 200);
    }, 10);
  }
}

// Cliques, hamburger, etc... (igual)
document.addEventListener("click", e => {
  const link = e.target.closest("a[data-link]");
  if (!link) return;
  e.preventDefault();
  navigateTo(link.getAttribute("href"));
});

window.addEventListener("hashchange", router);

const hamburger = document.getElementById('hamburger');
const menuLinks = document.getElementById('menu-links');
if (hamburger && menuLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menuLinks.style.display = menuLinks.style.display === 'flex' ? 'none' : 'flex';
  });
}

document.addEventListener("DOMContentLoaded", router);
