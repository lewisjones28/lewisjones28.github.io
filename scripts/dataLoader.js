export async function loadJSON(path) {
  const res = await fetch(path, { headers: { Accept: "application/json" } });
  if (!res.ok) {
    throw new Error(`Failed to load JSON: ${path} (${res.status})`);
  }
  return res.json();
}
