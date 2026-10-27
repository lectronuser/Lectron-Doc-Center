function lectronInitSectionReveal() {
  const sections = document.querySelectorAll(".section:not(.section--hero)");
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

// Tab dropdowns open on :hover/:focus-within. After a link is chosen the
// pointer is still over the tab, so hide the panel until the pointer leaves.
// Instant loading re-renders the tabs, so the closed tab is remembered by
// position and closed again on the new page.
let lectronClosedTab = -1;

function lectronCloseTab(item) {
  item.classList.add("is-closed");
  item.addEventListener("mouseleave", () => item.classList.remove("is-closed"), { once: true });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest(".lc-dropdown a");
  if (!link) return;

  const item = link.closest(".md-tabs__item--dropdown");
  lectronClosedTab = [...document.querySelectorAll(".md-tabs__item")].indexOf(item);
  link.blur();
  lectronCloseTab(item);
});

function lectronRestoreClosedTab() {
  if (lectronClosedTab < 0) return;

  const item = document.querySelectorAll(".md-tabs__item")[lectronClosedTab];
  lectronClosedTab = -1;
  if (item && item.matches(":hover")) lectronCloseTab(item);
}

// Left menu (overrides/partials/lc-sidenav.html): mark the heading whose
// section is in view. One scroll listener queries the current DOM, so it
// keeps working after instant loading swaps the page.
let lectronHeadingFrame = 0;

function lectronUpdateCurrentHeading() {
  lectronHeadingFrame = 0;
  const links = [...document.querySelectorAll(".lc-sidenav__heading")];
  if (!links.length) return;

  // Header plus a small margin: a section counts once its heading is under it
  const offset = (document.querySelector(".md-header")?.offsetHeight || 0) + 24;
  let current = links[0];
  for (const link of links) {
    const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    if (target && target.getBoundingClientRect().top - offset <= 0) current = link;
  }

  links.forEach((link) => link.classList.toggle("lc-sidenav__heading--current", link === current));
}

window.addEventListener("scroll", () => {
  if (!lectronHeadingFrame) lectronHeadingFrame = requestAnimationFrame(lectronUpdateCurrentHeading);
}, { passive: true });

function lectronInit() {
  lectronInitSectionReveal();
  lectronRestoreClosedTab();
  lectronUpdateCurrentHeading();
}

if (window.document$) {
  // Material's instant-loading swaps page content via AJAX, so re-run
  // init on every navigation instead of relying on DOMContentLoaded.
  document$.subscribe(lectronInit);
} else {
  document.addEventListener("DOMContentLoaded", lectronInit);
}