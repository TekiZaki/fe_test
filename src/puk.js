// src/puk.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupPukCRUD() {
  const pukListResult = qs("#pukListResult");
  const pukCrudResult = qs("#pukCrudResult");

  // --- Get Peserta by Jadwal ID ---
  qs("#btnGetPeserta").addEventListener("click", async () => {
    const jadwalId = qs("#pukJadwalId").value.trim();
    if (!jadwalId) {
      alert("Please provide a Jadwal ID.");
      return;
    }
    const res = await apiFetch(`/puks/jadwal/${jadwalId}/peserta`);
    pukListResult.textContent = pretty(res);
  });

  // --- Add Peserta ---
  qs("#btnAddPeserta").addEventListener("click", async () => {
    const fd = getFormData("#formPuk");
    if (!fd.jadwalId || !fd.asesiId) {
      alert("Please provide Jadwal ID and Asesi ID.");
      return;
    }
    const res = await apiFetch(`/puks/jadwal/${fd.jadwalId}/peserta`, {
      method: "POST",
      body: JSON.stringify({ asesiId: parseInt(fd.asesiId, 10) }),
    });
    pukCrudResult.textContent = pretty(res);
  });

  // --- Remove Peserta ---
  qs("#btnRemovePeserta").addEventListener("click", async () => {
    const fd = getFormData("#formPuk");
    if (!fd.jadwalId || !fd.pesertaId) {
      alert("Please provide Jadwal ID and Peserta ID.");
      return;
    }
    const res = await apiFetch(
      `/puks/jadwal/${fd.jadwalId}/peserta/${fd.pesertaId}`,
      {
        method: "DELETE",
      },
    );
    pukCrudResult.textContent = pretty(res);
  });

  // --- Fill Dummy ---
  qs("#fillPukDummy").addEventListener("click", () => {
    const f = qs("#formPuk");
    f.jadwalId.value = 1; // example JUK id
    f.asesiId.value = 2; // example asesi id
    f.pesertaId.value = "";
  });
}

export function setupPuk() {
  setupPukCRUD();
}
