// src/biaya.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupBiayaCRUD() {
  const biayaListResult = qs("#biayaListResult");
  const biayaCrudResult = qs("#biayaCrudResult");

  // --- List Biaya ---
  qs("#btnListBiaya").addEventListener("click", async () => {
    const res = await apiFetch("/biaya");
    biayaListResult.textContent = pretty(res);
  });

  // --- Create Biaya ---
  qs("#btnCreateBiaya").addEventListener("click", async () => {
    const fd = getFormData("#formBiaya");
    delete fd.id; // ID is auto-generated
    fd.schemeId = parseInt(fd.schemeId, 10);
    fd.nominal = parseInt(fd.nominal, 10);

    const res = await apiFetch("/biaya", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    biayaCrudResult.textContent = pretty(res);
  });

  // --- Update Biaya ---
  qs("#btnUpdateBiaya").addEventListener("click", async () => {
    const fd = getFormData("#formBiaya");
    if (!fd.id) {
      alert("Provide Biaya ID to update.");
      return;
    }
    const id = fd.id;
    delete fd.id;
    fd.schemeId = parseInt(fd.schemeId, 10);
    fd.nominal = parseInt(fd.nominal, 10);

    const res = await apiFetch(`/biaya/${id}`, {
      method: "PUT",
      body: JSON.stringify(fd),
    });
    biayaCrudResult.textContent = pretty(res);
  });

  // --- Delete Biaya ---
  qs("#btnDeleteBiaya").addEventListener("click", async () => {
    const fd = getFormData("#formBiaya");
    if (!fd.id) {
      alert("Provide Biaya ID to delete.");
      return;
    }
    const id = fd.id;
    const res = await apiFetch(`/biaya/${id}`, {
      method: "DELETE",
    });
    biayaCrudResult.textContent = pretty(res);
  });

  // --- Fill Dummy Data ---
  qs("#fillBiayaDummy").addEventListener("click", () => {
    const f = qs("#formBiaya");
    f.id.value = "";
    f.schemeId.value = 1; // Assuming Scheme ID 1 exists
    f.jenisBiaya.value =
      "Pendaftaran " + Math.random().toString(36).substring(7).toUpperCase();
    f.nominal.value = 250000;
    f.standar.value = "BNSP";
  });
}

export function setupBiaya() {
  setupBiayaCRUD();
}
