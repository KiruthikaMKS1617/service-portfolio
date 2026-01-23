const focusTrapNav = () => {
  const nav = document.querySelector(".nav");
  const menu = document.querySelector(".nav__menu");
  const toggleBtn = document.querySelector(".nav__toggle");

  if (!nav || !menu || !toggleBtn) return;

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    if (!nav.classList.contains("nav--open")) return;

    const focusableElements = menu.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
    );

    if (!focusableElements.length) return;

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
};

export default focusTrapNav;
