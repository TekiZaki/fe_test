// src/user.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupGetProfile() {
  qs("#btnGetProfile").addEventListener("click", async () => {
    const res = await apiFetch("/users/profile");
    qs("#profileResult").textContent = pretty(res);
  });
}

function setupChangePassword() {
  qs("#formChangePassword").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formChangePassword");
    const res = await apiFetch("/users/change-password", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    qs("#changePwdResult").textContent = pretty(res);
  });
}

export function setupUser() {
  setupGetProfile();
  setupChangePassword();
}
