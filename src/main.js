// src/main.js

import { qs, qsa, loadToken, saveToken } from "./utils.js";
import { setupAuth } from "./auth.js";
import { setupUser } from "./user.js";
import { setupEuk } from "./euk.js";
import { setupLsp } from "./lsp.js";
import { setupScheme } from "./scheme.js";
import { setupJuk } from "./juk.js";
import { setupTuk } from "./tuk.js";

// --- Global Initialization ---

function setupTabs() {
  qsa(".tab-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      qsa(".tab-content").forEach((t) => t.classList.add("hidden"));
      qs("#" + tab).classList.remove("hidden");
      // mark active
      qsa(".tab-btn").forEach((b) =>
        b.classList.remove("ring", "ring-indigo-300")
      );
      btn.classList.add("ring", "ring-indigo-300");
    })
  );
  // default open
  qsa(".tab-btn")[0].click();
}

function setupGlobalListeners() {
  // init token field
  loadToken();

  qs("#clearAuth").addEventListener("click", () => {
    saveToken("");
    alert("Auth cleared");
  });

  // Helpful: click baseUrl to select
  qs("#baseUrl").addEventListener("click", (e) => e.target.select());
}

// --- Run Setups ---
document.addEventListener("DOMContentLoaded", () => {
  setupGlobalListeners();
  setupTabs();

  // Setup specific feature handlers
  setupAuth();
  setupUser();
  setupEuk();
  setupLsp();
  setupScheme();
  setupJuk();
  setupTuk();
});
