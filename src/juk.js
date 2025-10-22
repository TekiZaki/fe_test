// src/juk.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupJukCRUD() {
  qs("#btnListJuk").addEventListener("click", async () => {
    const q = qs("#jukSearch").value.trim();
    const res = await apiFetch(
      "/juks" + (q ? "?search=" + encodeURIComponent(q) : ""),
    );
    qs("#jukList").textContent = pretty(res);
  });

  qs("#btnCreateJuk").addEventListener("click", async () => {
    const fd = getFormData("#formJuk");
    delete fd.id;
    fd.kuotaPeserta = parseInt(fd.kuotaPeserta, 10);
    fd.schemeId = parseInt(fd.schemeId, 10);
    fd.tukId = parseInt(fd.tukId, 10);
    fd.asesorId = parseInt(fd.asesorId, 10);

    const res = await apiFetch("/juks", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    qs("#jukCrudResult").textContent = pretty(res);
  });

  qs("#btnUpdateJuk").addEventListener("click", async () => {
    const fd = getFormData("#formJuk");
    if (!fd.id) {
      alert("Provide id");
      return;
    }
    const id = fd.id;
    delete fd.id;

    fd.kuotaPeserta = parseInt(fd.kuotaPeserta, 10);
    fd.schemeId = parseInt(fd.schemeId, 10);
    fd.tukId = parseInt(fd.tukId, 10);
    fd.asesorId = parseInt(fd.asesorId, 10);

    const res = await apiFetch("/juks/" + id, {
      method: "PUT",
      body: JSON.stringify(fd),
    });
    qs("#jukCrudResult").textContent = pretty(res);
  });

  qs("#btnDeleteJuk").addEventListener("click", async () => {
    const fd = getFormData("#formJuk");
    if (!fd.id) {
      alert("Provide id");
      return;
    }
    const id = fd.id;
    const res = await apiFetch("/juks/" + id, { method: "DELETE" });
    qs("#jukCrudResult").textContent = pretty(res);
  });

  qs("#fillJukDummy").addEventListener("click", () => {
    const f = qs("#formJuk");
    f.id.value = "";
    f.judulKegiatan.value =
      "JUK Skema A - " + Math.random().toString(36).substring(7).toUpperCase();
    f.tanggalPelaksanaan.value = "2024-11-15";
    f.jamPelaksanaan.value = "09:00 - 16:00";
    f.kuotaPeserta.value = 20;
    f.schemeId.value = 1; // Dummy ID
    f.tukId.value = 1; // Dummy ID
    f.asesorId.value = 3; // Dummy ID
    f.nomorSuratTugas.value = "ST/ADM/001/2024";
  });
}

export function setupJuk() {
  setupJukCRUD();
}
