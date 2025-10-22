// src/utils.js

export const qs = (s, root = document) => root.querySelector(s);
export const qsa = (s, root = document) => Array.from(root.querySelectorAll(s));

export function getBase() {
  return (qs("#baseUrl").value || "").replace(/\/+$/, "");
}

export function saveToken(t) {
  localStorage.setItem("lsp_token", t || "");
  qs("#token").value = t ? t : "";
}

export function loadToken() {
  const t = localStorage.getItem("lsp_token") || "";
  qs("#token").value = t;
  return t;
}

export function pretty(o) {
  try {
    return JSON.stringify(o, null, 2);
  } catch (e) {
    return String(o);
  }
}

// Generic fetch helper
export async function apiFetch(path, opts = {}) {
  const base = getBase();
  const url = base + path;
  const headers = opts.headers || {};
  if (!headers["Content-Type"] && opts.body && !(opts.body instanceof FormData))
    headers["Content-Type"] = "application/json";

  const token = localStorage.getItem("lsp_token");
  if (token) headers["Authorization"] = "Bearer " + token;

  try {
    const res = await fetch(url, { ...opts, headers });
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      data = text;
    }
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return { ok: false, status: 0, data: err.message };
  }
}

// Helper to extract form data
export function getFormData(formSelector) {
  const form = qs(formSelector);
  const formData = new FormData(form);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Handle checkboxes specifically, as FormData does not include unchecked ones
  qsa(`${formSelector} input[type="checkbox"]`).forEach((checkbox) => {
    if (!data.hasOwnProperty(checkbox.name)) {
      data[checkbox.name] = false; // Set to false if not checked
    } else {
      data[checkbox.name] = true; // Set to true if checked
    }
  });

  // Convert numbers
  for (const key in data) {
    if (form.querySelector(`[name="${key}"][type="number"]`)) {
      data[key] = data[key] === "" ? null : parseFloat(data[key]);
    }
  }

  return data;
}
