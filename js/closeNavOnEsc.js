const closeNavOnEsc = () => {
  const nav = document.querySelector(".nav");
  const toggleBtn = document.querySelector(".nav__toggle");

  if (!nav || !toggleBtn) return;

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!nav.classList.contains("nav--open")) return;

    nav.classList.remove("nav--open");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";

    toggleBtn.focus();
  });
};

export default closeNavOnEsc;
