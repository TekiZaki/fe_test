// src/rekening.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupRekeningCRUD() {
  const rekeningListResult = qs("#rekeningListResult");
  const rekeningCrudResult = qs("#rekeningCrudResult");

  // --- List Rekening ---
  qs("#btnListRekening").addEventListener("click", async () => {
    const res = await apiFetch("/rekening");
    rekeningListResult.textContent = pretty(res);
  });

  // --- Create Rekening ---
  qs("#btnCreateRekening").addEventListener("click", async () => {
    const fd = getFormData("#formRekening");
    delete fd.id; // ID is auto-generated

    const res = await apiFetch("/rekening", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    rekeningCrudResult.textContent = pretty(res);
  });

  // --- Update Rekening ---
  qs("#btnUpdateRekening").addEventListener("click", async () => {
    const fd = getFormData("#formRekening");
    if (!fd.id) {
      alert("Provide Rekening ID to update.");
      return;
    }
    const id = fd.id;
    delete fd.id;

    const res = await apiFetch(`/rekening/${id}`, {
      method: "PUT",
      body: JSON.stringify(fd),
    });
    rekeningCrudResult.textContent = pretty(res);
  });

  // --- Delete Rekening ---
  qs("#btnDeleteRekening").addEventListener("click", async () => {
    const fd = getFormData("#formRekening");
    if (!fd.id) {
      alert("Provide Rekening ID to delete.");
      return;
    }
    const id = fd.id;
    const res = await apiFetch(`/rekening/${id}`, {
      method: "DELETE",
    });
    rekeningCrudResult.textContent = pretty(res);
  });

  // --- Fill Dummy Data ---
  qs("#fillRekeningDummy").addEventListener("click", () => {
    const f = qs("#formRekening");
    f.id.value = "";
    f.bank.value = "Bank Mandiri";
    f.nomor.value = "1234567890" + Math.floor(Math.random() * 100);
    f.atasNama.value = "PT LSP Jaya";
    f.namaLsp.value =
      "LSP " + Math.random().toString(36).substring(7).toUpperCase();
  });
}

export function setupRekening() {
  setupRekeningCRUD();
}
