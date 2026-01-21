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
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
};

export default mobileNavToggle;
