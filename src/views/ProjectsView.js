import { getState } from "../state.js";
import { filterProjects, uniqueSorted } from "../../scripts/filters.js";
import { ProjectCard } from "../components/ProjectCard.js";

/**
 * Renders the Projects page: a list of projects with search and filters by tag and tech stack.
 * @returns {Promise<HTMLElement>} The rendered Projects page.
 */
export async function ProjectsView() {
  const { projects } = getState();
  const tags = uniqueSorted(projects.map((p) => p.tags || []));
  const techs = uniqueSorted(projects.map((p) => p.techStack || []));

  const container = document.createElement("section");
  container.innerHTML = `
    <h1>Projects</h1>
    <div class="searchbar">
      <input id="projects-search" type="search" placeholder="Search…" aria-label="Search projects" />
      <select id="projects-tag" aria-label="Filter by tag">
        <option value="">All tags</option>
        ${tags.map((t) => `<option>${t}</option>`).join("")}
      </select>
      <select id="projects-tech" aria-label="Filter by tech">
        <option value="">All tech</option>
        ${techs.map((t) => `<option>${t}</option>`).join("")}
      </select>
    </div>
    <div id="projects-list" class="grid" aria-live="polite"></div>
  `;

  const list = container.querySelector("#projects-list");
  const state = { term: "", tag: "", tech: "" };

  const update = () => {
    const filtered = filterProjects(projects, state);
    list.innerHTML = filtered.length
      ? filtered.map(ProjectCard).join("")
      : `<p>No projects match.</p>`;
  };

  container.querySelector("#projects-search").addEventListener("input", (e) => {
    state.term = e.target.value;
    update();
  });
  container.querySelector("#projects-tag").addEventListener("change", (e) => {
    state.tag = e.target.value;
    update();
  });
  container.querySelector("#projects-tech").addEventListener("change", (e) => {
    state.tech = e.target.value;
    update();
  });

  update();
  return container;
}
