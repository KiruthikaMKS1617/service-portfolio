const closeNavOnLinkClick = () => {
  const nav = document.querySelector(".nav");
  const toggleBtn = document.querySelector(".nav__toggle");

  if (!nav || !toggleBtn) return;
  const links = nav.querySelectorAll(".nav__menu a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
      toggleBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
};

export default closeNavOnLinkClick;
