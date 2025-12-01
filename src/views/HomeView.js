import { getState } from "../state.js";

/**
 * Renders the Home page, including the user's profile, a call to action to view all projects, and a list of featured projects.
 * @returns {Promise<HTMLSectionElement>} A promise that resolves with the rendered Home page section element.
 */
export async function HomeView() {
  const { profile, projects } = getState();
  const featured = (projects || []).filter((p) => p.featured);

  const section = document.createElement("section");
  section.innerHTML = `
    <section class="hero" aria-label="Profile">
      <img alt="${profile.name} avatar" src="${
    profile.avatarUrl || "assets/avatar.png"
  }" loading="lazy"/>
      <div>
        <h1 style="margin:0">${profile.name}</h1>
        <p>${profile.bio}</p>
        <div class="actions">
          <a class="btn" href="#/projects">View Projects</a>
          <a class="btn" href="#/contact">Contact</a>
        </div>
      </div>
    </section>

    <h2 style="margin-top:24px">Featured Projects</h2>
    <div id="featured" class="grid" aria-live="polite"></div>
  `;

  const featuredEl = section.querySelector("#featured");
  featuredEl.innerHTML = featured
    .map(
      (p) => `
        <article class="card">
          <div class="title">${p.title}</div>
          <p>${p.description || ""}</p>
        </article>
      `
    )
    .join("");

  return section;
}
