// src/verifikasi.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupVerifikasiAsesi() {
  const verifikasiResult = qs("#verifikasiResult");

  // --- Get Asesi Verification Data ---
  qs("#btnGetVerifikasiData").addEventListener("click", async () => {
    const asesiId = qs("#asesiIdVerifikasi").value.trim();
    if (!asesiId) {
      alert("Please provide an Asesi ID to fetch verification data.");
      return;
    }
    const res = await apiFetch(`/verifikasi/data/${asesiId}`);
    verifikasiResult.textContent = pretty(res);
  });

  // --- Fill Dummy Asesi ID ---
  qs("#fillVerifikasiDummy").addEventListener("click", () => {
    qs("#asesiIdVerifikasi").value = 1; // Assuming Asesi ID 1 exists
  });
}

export function setupVerifikasi() {
  setupVerifikasiAsesi();
}
