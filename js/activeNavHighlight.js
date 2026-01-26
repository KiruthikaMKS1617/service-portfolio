const activeNavHighlight = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.toggle(
            "nav__link--active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      });
    },
    {
      rootMargin: "0px 0px -50% 0px",
      threshold: 0.2,
    },
  );

  sections.forEach((section) => observer.observe(section));
};

export default activeNavHighlight;
