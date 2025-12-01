import { loadInitialData } from "./state.js";
import { initRouter } from "./router.js";
import { setYearAndSocials, initThemeToggle } from "../scripts/router.js";

window.addEventListener("DOMContentLoaded", async () => {
  await loadInitialData();
  initThemeToggle();
  setYearAndSocials();
  initRouter();
});
