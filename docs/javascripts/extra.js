function lectronInitSectionReveal() {
  const sections = document.querySelectorAll(".section");
  if (!sections.length || !("IntersectionObserver" in window)) return;

  sections.forEach((section) => section.classList.add("will-reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

function lectronInit() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  lectronInitSectionReveal();
}

if (window.document$) {
  // Material's instant-loading swaps page content via AJAX, so re-run
  // init on every navigation instead of relying on DOMContentLoaded.
  document$.subscribe(lectronInit);
} else {
  document.addEventListener("DOMContentLoaded", lectronInit);
}