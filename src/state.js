import { getProfile, getProjects } from "./services/dataService.js";

const cache = {
  profile: null,
  projects: null,
};

/**
 * Loads the initial data for the application from JSON files.
 * Resolves a promise when the data has been loaded and the cache updated.
 * @returns {Promise<void>} Resolved promise when the data has been loaded and the cache updated.
 */
export async function loadInitialData() {
  const [profile, projects] = await Promise.all([getProfile(), getProjects()]);
  cache.profile = profile;
  cache.projects = projects;
}

/**
 * Returns a shallow copy of the application state cache.
 * The cache is populated when loadInitialData is called.
 * @returns {Object} A shallow copy of the application state cache
 */
export function getState() {
  return { ...cache };
}
