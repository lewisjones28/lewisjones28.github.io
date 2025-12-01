/**
 * Renders a project card component.
 * @param {Object} project - The project data.
 * @param {string} project.title - The project title.
 * @param {string} [project.description] - The project description.
 * @param {boolean} [project.featured] - Whether the project is featured.
 * @param {string[]} [project.techStack] - The technologies used in the project.
 * @param {string[]} [project.tags] - The tags associated with the project.
 * @param {string} [project.liveUrl] - The URL to the live project.
 * @param {string} [project.repoUrl] - The URL to the project's repository.
 * @returns {string} The HTML string for the project card.
 */
export function ProjectCard(project) {
  return `
    <article class="card">
      <div class="title">${project.title}</div>
      <p>${project.description || ""}</p>
      <div class="meta">
        ${project.featured ? `<span class="tag featured">featured</span>` : ""}
        ${(project.techStack || [])
          .map((t) => `<span class="tag tech">${t}</span>`)
          .join("")}
        ${(project.tags || [])
          .map((t) => `<span class="tag">${t}</span>`)
          .join("")}
      </div>
      <div class="actions">
        ${
          project.liveUrl
            ? `<a class="btn" href="${project.liveUrl}" target="_blank" rel="noopener">Live</a>`
            : ""
        }
        ${
          project.repoUrl
            ? `<a class="btn" href="${project.repoUrl}" target="_blank" rel="noopener">Repo</a>`
            : ""
        }
      </div>
    </article>
  `;
}
