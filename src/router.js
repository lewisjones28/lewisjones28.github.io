import { HomeView } from "./views/HomeView.js";
import { ProjectsView } from "./views/ProjectsView.js";
import { AboutView } from "./views/AboutView.js";
import { ContactView } from "./views/ContactView.js";

const routes = [
  {
    path: "/",
    title: "Home",
    view: HomeView,
  },
  { path: "/projects", title: "Projects", view: ProjectsView },
  {
    path: "/about",
    title: "About",
    view: AboutView,
  },
  {
    path: "/contact",
    title: "Contact",
    view: ContactView,
  },
];

/**
 * Match a route to a given hash.
 * If no matching route is found, the home route is returned.
 * @param {string} hash - The hash to match against.
 * @returns {object} The matched route, or the home route if no match is found.
 */
function matchRoute(hash) {
  const path = (hash || "#/").replace(/^#/, "");
  return routes.find((r) => r.path === path) || routes[0];
}

/**
 * Navigate to a given route.
 * @description This function matches the current URL hash to a route object,
 * calls the view function associated with the route, and updates the page
 * title and content.
 */
export async function navigate() {
  const route = matchRoute(location.hash);
  const viewEl = document.getElementById("route");
  const node = await route.view();
  viewEl.innerHTML = "";
  viewEl.appendChild(node);
  document.title = `Lewis Jones — ${route.title}`;
  viewEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Initialize the router.
 * This function adds an event listener to the window's
 * 'hashchange' event, and calls the navigate function
 * to update the page content and title.
 */
export function initRouter() {
  window.addEventListener("hashchange", navigate);
  navigate();
}
