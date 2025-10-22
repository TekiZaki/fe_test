// src/euk.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupEukCRUD() {
  qs("#btnListEuk").addEventListener("click", async () => {
    const q = qs("#eukSearch").value.trim();
    const res = await apiFetch(
      "/euks" + (q ? "?search=" + encodeURIComponent(q) : ""),
    );
    qs("#eukList").textContent = pretty(res);
  });

  qs("#btnCreateEuk").addEventListener("click", async () => {
    const fd = getFormData("#formEuk");
    delete fd.id;
    const res = await apiFetch("/euks", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    qs("#eukCrudResult").textContent = pretty(res);
  });

  qs("#btnUpdateEuk").addEventListener("click", async () => {
    const fd = getFormData("#formEuk");
    if (!fd.id) {
      alert("Provide id to update");
      return;
    }
    const id = fd.id;
    delete fd.id;
    const res = await apiFetch("/euks/" + id, {
      method: "PUT",
      body: JSON.stringify(fd),
    });
    qs("#eukCrudResult").textContent = pretty(res);
  });

  qs("#btnDeleteEuk").addEventListener("click", async () => {
    const fd = getFormData("#formEuk");
    if (!fd.id) {
      alert("Provide id to delete");
      return;
    }
    const id = fd.id;
    const res = await apiFetch("/euks/" + id, { method: "DELETE" });
    qs("#eukCrudResult").textContent = pretty(res);
  });

  qs("#fillEukDummy").addEventListener("click", () => {
    const f = qs("#formEuk");
    f.id.value = "";
    f.namaKegiatan.value =
      "Uji Kompetensi " + Math.random().toString(36).substring(7);
    f.tanggal.value = "2024-12-31";
    f.tempat.value = "Gedung Ujian Dummy";
    f.alamat.value = "Jl. Contoh No. 123";
    f.jumlahPeserta.value = 50;
    f.penanggungJawab.value = "Bapak Dummy Euk";
    f.schemeId.value = 1;
  });
}

export function setupEuk() {
  setupEukCRUD();
}
