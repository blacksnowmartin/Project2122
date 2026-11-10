document.addEventListener("DOMContentLoaded", () => {
  const navCta = document.querySelector(".nav-cta");
  const primaryBtn = document.querySelector(".primary-btn");

  const scrollToSection = (selector) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (navCta) {
    navCta.addEventListener("click", () => scrollToSection("#strategy"));
  }

  if (primaryBtn) {
    primaryBtn.addEventListener("click", () => scrollToSection("#strategy"));
  }
});
