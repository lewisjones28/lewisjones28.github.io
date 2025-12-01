import { getState } from "../state.js";

/**
 * Renders the About page, including the user's bio, skills, and timeline.
 * @returns {Promise<HTMLSectionElement>} A promise that resolves with the rendered About page section element.
 */
export async function AboutView() {
  const { profile } = getState();

  const section = document.createElement("section");
  section.innerHTML = `
    <h1>About</h1>
    <p>${profile.bio}</p>
    <h2>Skills</h2>
    <div class="meta">${(profile.skills || [])
      .map((s) => `<span class="tag tech">${s}</span>`)
      .join("")}</div>
    <h2>Timeline</h2>
    <div class="grid">
      ${(profile.timeline || [])
        .map(
          (t) => `
          <article class="card">
            <div class="title">${t.role} — ${t.company}</div>
            <div class="meta">${t.start} – ${t.end || "Present"}</div>
            <p>${t.summary || ""}</p>
          </article>
        `
        )
        .join("")}
    </div>
  `;

  return section;
}
