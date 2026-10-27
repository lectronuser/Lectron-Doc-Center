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
// pointer is still over the tab when the new page loads, so the panel would
// open again; remember the tab for that one load and keep it closed until
// the pointer leaves it.
const LECTRON_CLOSED_TAB = "lectron-closed-tab";

function lectronCloseTab(item) {
  item.classList.add("is-closed");

  // mousemove rather than mouseleave: on a fresh page the pointer may never
  // have entered the tab, and mouseleave would then never fire
  const onMove = (event) => {
    if (item.contains(event.target)) return;
    item.classList.remove("is-closed");
    document.removeEventListener("mousemove", onMove);
  };
  document.addEventListener("mousemove", onMove);
}

document.addEventListener("click", (event) => {
  const link = event.target.closest(".lc-dropdown a");
  if (!link) return;

  const item = link.closest(".md-tabs__item--dropdown");
  const index = [...document.querySelectorAll(".md-tabs__item")].indexOf(item);
  try {
    sessionStorage.setItem(LECTRON_CLOSED_TAB, String(index));
  } catch (e) {
    // Storage blocked: the panel may reopen on the next page, nothing else
  }
  link.blur();
  lectronCloseTab(item);
});

function lectronRestoreClosedTab() {
  let index = null;
  try {
    index = sessionStorage.getItem(LECTRON_CLOSED_TAB);
    sessionStorage.removeItem(LECTRON_CLOSED_TAB);
  } catch (e) {
    return;
  }
  if (index === null) return;

  const item = document.querySelectorAll(".md-tabs__item")[Number(index)];
  if (item) lectronCloseTab(item);
}

// Left menu (overrides/partials/lc-sidenav.html): mark the heading whose
// section is in view.
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
  // Material emits document$ once its components are mounted
  document$.subscribe(lectronInit);
} else {
  document.addEventListener("DOMContentLoaded", lectronInit);
}