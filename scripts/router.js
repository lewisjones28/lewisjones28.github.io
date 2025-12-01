import { loadJSON } from "./dataLoader.js";

export function setYearAndSocials() {
  document.getElementById("year").textContent = new Date().getFullYear();
  loadJSON("data/profile.json")
    .then((p) => {
      document.getElementById("brand-name").textContent = p.name || "Portfolio";
      const socialsEl = document.getElementById("footer-socials");
      const socials = p.socials || {};
      const items = [
        ["GitHub", socials.github],
        ["LinkedIn", socials.linkedin],
        ["Twitter", socials.twitter],
        ["Email", `mailto:${socials.email}`],
      ].filter(([, url]) => !!url);
      socialsEl.innerHTML = items
        .map(
          ([label, url]) =>
            `<li><a href="${url}" target="_blank" rel="noopener">${label}</a></li>`
        )
        .join("");
    })
    .catch(() => {});
}

export function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  const apply = (mode) => {
    if (mode === "light") document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
    localStorage.setItem("theme", mode);
    btn.textContent = mode === "light" ? "☀" : "☾";
  };
  const saved = localStorage.getItem("theme");
  apply(saved || "dark");
  btn.addEventListener("click", () =>
    apply(
      document.documentElement.classList.contains("dark") ? "light" : "dark"
    )
  );
}
