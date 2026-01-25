const mobileNavToggle = () => {
  const nav = document.querySelector(".nav");
  const toggleBtn = document.querySelector(".nav__toggle");

  if (!nav || !toggleBtn) return;
  // | Layer                 | What it describes    | Your meaning (refined)                              |
  // | --------------------- | -------------------- | --------------------------------------------------- |
  // | Defensive Programming | **Why** you wrote it | Intention to protect the system from invalid states |
  // | Guard Clause          | **How** you wrote it | Conditions tested + early-exit structure            |
  // | Fail Fast             | **What** it does     | Immediately stops execution when conditions fail    |

  // “This line is a guard clause written using defensive programming principles to make the function fail fast if required DOM elements are missing.”

  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav--open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
    toggleBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

    document.body.style.overflow = isOpen ? "hidden" : "";

    if (!isOpen) toggleBtn.focus();
  });
};

export default mobileNavToggle;

export const toggleRoleDialog = () => {
  const nav = document.querySelector(".nav");
  const navMenu = document.querySelector(".nav__menu");

  if (!nav || !navMenu) return;

  const isOpen = nav.classList.contains("nav--open");
  if (isOpen) {
    // Add roles ONLY when behaving like a mobile modal
    navMenu.setAttribute("role", "dialog");
    navMenu.setAttribute("aria-modal", "true");
  } else {
    // Remove roles so it's a normal element on desktop
    navMenu.removeAttribute("role");
    navMenu.removeAttribute("aria-modal");
  }
};
