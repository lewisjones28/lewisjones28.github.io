/**
 * Fetches JSON data from a given path and returns the parsed data.
 * @param {string} path - The path to the JSON data
 * @throws {Error} If the response status is not OK
 * @returns {Promise<Object>} Resolved promise with the parsed JSON data
 */
async function fetchJSON(path) {
  const res = await fetch(path, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}

/**
 * Fetches and returns the profile data from /data/profile.json
 * @returns {Promise<Object>} Resolved promise with the profile data
 */
export function getProfile() {
  return fetchJSON("/data/profile.json");
}

/**
 * Fetches and returns the projects data from /data/projects.json
 * @returns {Promise<Object[]>} Resolved promise with the projects data
 */
export function getProjects() {
  return fetchJSON("/data/projects.json");
}
