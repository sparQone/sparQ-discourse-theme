import { apiInitializer } from "discourse/lib/api";

// Injects horizontal nav links into the Discourse header matching
// the help.sparqone.com navbar pattern:
//   Forum (active) | Help | Developers | sparQ | Community (pill)

export default apiInitializer((api) => {
  api.onPageChange(() => {
    if (document.querySelector(".sparq-header-nav")) return;

    const titleEl = document.querySelector(".d-header .title");
    if (!titleEl) return;

    const nav = document.createElement("nav");
    nav.className = "sparq-header-nav";
    nav.setAttribute("aria-label", "sparQ sites");
    nav.innerHTML = `
      <ul class="sparq-header-nav-links">
        <li><a href="/" class="sparq-nav-link sparq-nav-link--active">Forum</a></li>
        <li><a href="https://help.sparqone.com" class="sparq-nav-link">Help</a></li>
        <li><a href="https://developer.sparqone.com" class="sparq-nav-link">Developers</a></li>
        <li><a href="https://www.sparqone.com" class="sparq-nav-link">sparQ</a></li>
        <li><a href="https://www.sparqone.com/community.html" class="sparq-nav-link sparq-nav-pill">Community</a></li>
      </ul>
    `;

    titleEl.parentNode.insertBefore(nav, titleEl.nextSibling);
  });
});
