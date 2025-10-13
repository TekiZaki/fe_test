// src/auth.js

import { qs, apiFetch, pretty, saveToken, getFormData } from "./utils.js";

function setupRegisterAsesi() {
  qs("#formRegisterAsesi").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formRegisterAsesi");
    const res = await apiFetch("/auth/register/asesi", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    alert("Status: " + res.status + "\n" + pretty(res.data));
  });

  qs("#fillAsesiDummy").addEventListener("click", () => {
    const f = qs("#formRegisterAsesi");
    f.username.value = "asesi" + Math.floor(Math.random() * 9999);
    f.password.value = "password123";
    f.email.value = "asesi@example.test";
    f.full_name.value = "Dummy Asesi";
    f.ktp_number.value = "1234567890";
    f.phone_number.value = "081234567890";
    f.address.value = "Jalan Contoh";
  });
}

function setupRegisterPrivileged() {
  qs("#formRegisterPriv").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formRegisterPriv");
    const res = await apiFetch("/auth/register/privileged", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    alert("Status: " + res.status + "\n" + pretty(res.data));
  });

  qs("#fillPrivDummy").addEventListener("click", () => {
    const f = qs("#formRegisterPriv");
    f.admin_secret.value = "testsecret";
    f.username.value = "admin";
    f.password.value = "1234";
    f.email.value = "admin@mail.com";
    f.full_name.value = "Admin";
    f.position.value = "IT";
    f.reg_number.value = "REG12345";
  });
}

function setupLogin() {
  qs("#formLogin").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formLogin");
    const res = await apiFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    if (res.ok && res.data && res.data.token) {
      saveToken(res.data.token);
      alert("Login successful — token saved");
    } else {
      alert("Login failed: " + pretty(res.data));
    }
  });
}

function setupForgotPassword() {
  qs("#formForgot").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formForgot");
    const res = await apiFetch("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    alert("Status: " + res.status + "\n" + pretty(res.data));
  });
}

export function setupAuth() {
  setupRegisterAsesi();
  setupRegisterPrivileged();
  setupLogin();
  setupForgotPassword();
}
