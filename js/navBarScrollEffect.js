const nav = document.querySelector(".nav");
let isScrollEffectApplied = false;
const navBarScrollEffect = () => {
  const isScrollYMoreThan10 = window.scrollY > 10;

  if (isScrollYMoreThan10 === isScrollEffectApplied) return;

  isScrollEffectApplied = isScrollYMoreThan10;
  nav.classList.toggle("nav--scrolled", isScrollYMoreThan10);
};

window.addEventListener("scroll", navBarScrollEffect, { passive: true });
