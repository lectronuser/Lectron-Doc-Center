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

// Block diagram viewer: zoom by rewriting the SVG viewBox (stays vector-sharp),
// drag to pan, Ctrl/⌘ + wheel or double-click to zoom, optional fullscreen.
const LECTRON_MAX_ZOOM = 6;

function lectronInitDiagram(viewer) {
  if (viewer.dataset.ready) return;
  const svg = viewer.querySelector("svg");
  if (!svg) return;
  viewer.dataset.ready = "1";

  const base = svg.viewBox.baseVal;
  const home = { x: base.x, y: base.y, w: base.width, h: base.height };
  let view = { ...home };

  const toolbar = document.createElement("div");
  toolbar.className = "bd-viewer__toolbar";
  toolbar.innerHTML = `
    <span class="bd-viewer__zoom" aria-live="polite">100%</span>
    <button type="button" class="bd-viewer__btn" data-act="out" title="Zoom out" aria-label="Zoom out">−</button>
    <button type="button" class="bd-viewer__btn" data-act="in" title="Zoom in" aria-label="Zoom in">+</button>
    <button type="button" class="bd-viewer__btn" data-act="reset" title="Reset view" aria-label="Reset view">⟲</button>
    <button type="button" class="bd-viewer__btn" data-act="full" title="Fullscreen" aria-label="Fullscreen">⛶</button>`;
  viewer.prepend(toolbar);

  const hint = document.createElement("span");
  hint.className = "bd-viewer__hint";
  hint.textContent = "Ctrl + scroll to zoom · drag to pan";
  viewer.prepend(hint);

  const label = toolbar.querySelector(".bd-viewer__zoom");

  function apply() {
    // Keep the view inside the drawing
    view.w = Math.min(home.w, Math.max(home.w / LECTRON_MAX_ZOOM, view.w));
    view.h = view.w * (home.h / home.w);
    view.x = Math.min(home.x + home.w - view.w, Math.max(home.x, view.x));
    view.y = Math.min(home.y + home.h - view.h, Math.max(home.y, view.y));
    svg.setAttribute("viewBox", `${view.x} ${view.y} ${view.w} ${view.h}`);
    const zoom = home.w / view.w;
    label.textContent = `${Math.round(zoom * 100)}%`;
    viewer.classList.toggle("is-zoomed", zoom > 1.001);
  }

  // Zoom by `factor` around a point given in client coordinates (default: centre)
  function zoomAt(factor, clientX, clientY) {
    const rect = svg.getBoundingClientRect();
    const fx = clientX === undefined ? 0.5 : (clientX - rect.left) / rect.width;
    const fy = clientY === undefined ? 0.5 : (clientY - rect.top) / rect.height;
    const px = view.x + view.w * fx;
    const py = view.y + view.h * fy;
    view.w /= factor;
    view.h = view.w * (home.h / home.w);
    view.x = px - view.w * fx;
    view.y = py - view.h * fy;
    apply();
  }

  toolbar.addEventListener("click", (event) => {
    const act = event.target.closest("button")?.dataset.act;
    if (act === "in") zoomAt(1.4);
    if (act === "out") zoomAt(1 / 1.4);
    if (act === "reset") { view = { ...home }; apply(); }
    if (act === "full") {
      if (document.fullscreenElement) document.exitFullscreen();
      else viewer.requestFullscreen?.();
    }
  });

  svg.addEventListener("wheel", (event) => {
    // Plain wheel scrolls the page; zoom only with a modifier or in fullscreen
    if (!event.ctrlKey && !event.metaKey && document.fullscreenElement !== viewer) return;
    event.preventDefault();
    zoomAt(event.deltaY < 0 ? 1.15 : 1 / 1.15, event.clientX, event.clientY);
  }, { passive: false });

  svg.addEventListener("dblclick", (event) => zoomAt(1.6, event.clientX, event.clientY));

  let drag = null;
  svg.addEventListener("pointerdown", (event) => {
    if (!viewer.classList.contains("is-zoomed")) return;
    drag = { x: event.clientX, y: event.clientY, vx: view.x, vy: view.y };
    svg.setPointerCapture(event.pointerId);
    viewer.classList.add("is-dragging");
  });
  svg.addEventListener("pointermove", (event) => {
    if (!drag) return;
    const scale = view.w / svg.getBoundingClientRect().width;
    view.x = drag.vx - (event.clientX - drag.x) * scale;
    view.y = drag.vy - (event.clientY - drag.y) * scale;
    apply();
  });
  const endDrag = () => { drag = null; viewer.classList.remove("is-dragging"); };
  svg.addEventListener("pointerup", endDrag);
  svg.addEventListener("pointercancel", endDrag);

  apply();
}

// Pinout explorer (raspberry/pinout.md): clicking a numbered port on the
// locator views, or its button, shows that connector's sheet; the others are
// hidden. Hovering a table row highlights the pin in the connector strip and
// the other way round. Without JS every sheet stays visible and the links
// jump to it.
function lectronInitPinout(explorer) {
  if (explorer.dataset.ready) return;
  explorer.dataset.ready = "1";
  const sheets = [...explorer.querySelectorAll(".pin-sheet")];
  if (!sheets.length) return;
  const triggers = ".pin-spot, .pin-conn, .pin-index a";
  const mark = (num, cls, on) =>
    explorer.querySelectorAll(`.pin-spot[data-conn="${num}"], .pin-conn[data-conn="${num}"], .pin-index a[data-conn="${num}"]`)
      .forEach((el) => el.classList.toggle(cls, on));

  function select(num, scroll) {
    const sheet = sheets.find((el) => el.dataset.conn === num);
    if (!sheet) return;
    explorer.querySelectorAll(".is-active").forEach((el) => el.classList.remove("is-active"));
    sheet.classList.add("is-active");
    mark(num, "is-active", true);
    if (scroll) sheet.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  explorer.addEventListener("click", (event) => {
    const trigger = event.target.closest(triggers);
    if (!trigger) return;
    event.preventDefault();
    select(trigger.dataset.conn, true);
    history.replaceState(null, "", `#conn-${trigger.dataset.conn}`);
  });

  // Pins: a table row, its dot in the connector strip and, on drawn board
  // views, the same pin on the board all highlight together
  function pinTargets(el) {
    const pin = el.closest("[data-pin]");
    if (!pin) return [];
    const holder = pin.closest(".pin-sheet, .pin-conn");
    if (!holder) return [];
    const num = holder.dataset.conn;
    return explorer.querySelectorAll(
      `.pin-sheet[data-conn="${num}"] [data-pin="${pin.dataset.pin}"], .pin-conn[data-conn="${num}"] [data-pin="${pin.dataset.pin}"]`);
  }

  explorer.addEventListener("mouseover", (event) => {
    const trigger = event.target.closest(triggers);
    if (trigger) mark(trigger.dataset.conn, "is-hover", true);
    pinTargets(event.target).forEach((el) => el.classList.add("is-hover"));
  });
  explorer.addEventListener("mouseout", (event) => {
    const trigger = event.target.closest(triggers);
    if (trigger) mark(trigger.dataset.conn, "is-hover", false);
    pinTargets(event.target).forEach((el) => el.classList.remove("is-hover"));
  });

  const fromHash = /^#conn-(\d+)$/.exec(location.hash);
  select(fromHash ? fromHash[1] : sheets[0].dataset.conn, false);
  explorer.classList.add("is-ready");
}

function lectronInit() {
  lectronInitSectionReveal();
  lectronRestoreClosedTab();
  lectronUpdateCurrentHeading();
  document.querySelectorAll(".bd-viewer").forEach(lectronInitDiagram);
  document.querySelectorAll(".pin-explorer").forEach(lectronInitPinout);
}

if (window.document$) {
  // Material emits document$ once its components are mounted
  document$.subscribe(lectronInit);
} else {
  document.addEventListener("DOMContentLoaded", lectronInit);
}