const closeNavOnOutsideClick = () => {
  const nav = document.querySelector(".nav");
  const toggleBtn = document.querySelector(".nav__toggle");

  if (!nav || !toggleBtn) return;

  document.addEventListener("click", (e) => {
    // 1. Only run if the nav is actually open
    if (!nav.classList.contains("nav--open")) return;

    // 2. Check if the click was ON or INSIDE a link
    // This replaces links.contains(e.target)
    const clickedLink = e.target.closest(".nav__link");

    // 3. Check if the click was ON or INSIDE the toggle button
    const clickedToggle = toggleBtn.contains(e.target);
    // this must not be treated as outside click coz, clicking toggle performs both open and close actions

    // 4. If the click was NOT on a link and NOT on the toggle, close it
    if (!clickedLink && !clickedToggle) {
      nav.classList.remove("nav--open");
      toggleBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      toggleBtn.focus();
    }
  });
};

export default closeNavOnOutsideClick;
