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

export function NavbarAnimation(){

    const button=document.querySelector(".menu-btn");
    const menu=document.querySelector(".mobile-menu");

    if(!button||!menu) return;

    button.addEventListener("click",()=>{

        menu.classList.toggle("active");

        button.textContent=
            menu.classList.contains("active")
            ? "✕"
            : "☰";

    });

}