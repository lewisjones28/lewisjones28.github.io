import { getState } from "../state.js";

/**
 * Returns a section element containing contact information.
 * Includes a link to email and a button to copy the email address to the clipboard.
 * @returns {Promise<HTMLSectionElement>} A promise that resolves with a section element.
 */
export async function ContactView() {
  const { profile } = getState();
  const email = profile.socials?.email || "LewisJones28@hotmail.co.uk";

  const section = document.createElement("section");
  section.innerHTML = `
    <h1>Contact</h1>
    <p>Prefer email? Click the button or copy the address.</p>
    <div class="actions">
      <a class="btn" href="mailto:${email}">Email me</a>
      <button class="btn" id="copy">Copy email</button>
    </div>
    <p id="copied" class="meta" role="status" aria-live="polite"></p>
  `;

  section.querySelector("#copy").addEventListener("click", async () => {
    await navigator.clipboard.writeText(email);
    section.querySelector("#copied").textContent = "Email copied to clipboard.";
  });

  return section;
}
