/**
 * Flattens nested arrays and returns a sorted unique list of string values.
 * @param {Array<Array<string>|string>} values
 * @returns {string[]}
 */
export function uniqueSorted(values) {
  const flat = values.flatMap((value) =>
    Array.isArray(value) ? value : value ? [value] : [],
  );

  return [
    ...new Set(flat.map((value) => String(value).trim()).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b));
}

/**
 * Filters projects by text search, tag, and tech stack.
 * @param {Object[]} projects
 * @param {{ term?: string, tag?: string, tech?: string }} state
 * @returns {Object[]}
 */
export function filterProjects(projects, state = {}) {
  const term = (state.term || "").trim().toLowerCase();
  const tag = (state.tag || "").trim().toLowerCase();
  const tech = (state.tech || "").trim().toLowerCase();

  return projects.filter((project) => {
    const tags = (project.tags || []).map((item) => String(item).toLowerCase());
    const techStack = (project.techStack || []).map((item) =>
      String(item).toLowerCase(),
    );

    const haystack = [
      project.title || "",
      project.description || "",
      project.id || "",
      ...tags,
      ...techStack,
    ]
      .join(" ")
      .toLowerCase();

    if (term && !haystack.includes(term)) return false;
    if (tag && !tags.includes(tag)) return false;
    if (tech && !techStack.includes(tech)) return false;

    return true;
  });
}
