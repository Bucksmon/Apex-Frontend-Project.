export function initNavbar() {
  const nav = document.querySelector(".navbar");

  if (!nav) return;

  window.addEventListener("scroll", () => {
    nav.style.background =
      window.scrollY > 80
        ? "rgba(10,10,10,.75)"
        : "rgba(10,10,10,.15)";
  });
}

export function NavbarAnimation() {
  const button = document.querySelector(".menu-btn");
  const menu = document.querySelector(".mobile-menu");

  if (!button || !menu) return;

  const setMenuOpen = (open) => {
    menu.classList.toggle("active", open);
    button.textContent = open ? "✕" : "☰";
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  };

  button.addEventListener("click", () => {
    setMenuOpen(!menu.classList.contains("active"));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}
