// src/unit.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupUnitKompetensi() {
  const unitListOutput = qs("#unitList");
  const unitDetailResult = qs("#unitDetailResult");
  const unitCrudResult = qs("#unitCrudResult");

  // --- List Units ---
  qs("#btnListUnits").addEventListener("click", async () => {
    const search = qs("#unitSearch").value.trim();
    const schemeId = qs("#unitSchemeIdFilter").value.trim();

    let url = "/units?";
    if (search) url += `search=${encodeURIComponent(search)}&`;
    if (schemeId) url += `schemeId=${encodeURIComponent(schemeId)}&`;

    const res = await apiFetch(url);
    unitListOutput.textContent = pretty(res);
  });

  // --- Get Unit Detail ---
  qs("#btnGetUnitDetail").addEventListener("click", async () => {
    const unitId = qs("#unitDetailId").value.trim();
    if (!unitId) {
      alert("Please provide a Unit ID.");
      return;
    }
    const res = await apiFetch(`/units/${unitId}`);
    unitDetailResult.textContent = pretty(res);
  });

  // --- Create Unit ---
  qs("#formCreateUnit").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formCreateUnit");
    if (!fd.schemeId || !fd.kodeUnit || !fd.namaUnit) {
      alert("Scheme ID, Kode Unit, and Nama Unit are required for creation.");
      return;
    }
    fd.schemeId = parseInt(fd.schemeId, 10); // Ensure it's a number

    const res = await apiFetch("/units", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    unitCrudResult.textContent = pretty(res);
  });

  // --- Fill Unit Dummy ---
  qs("#fillUnitDummy").addEventListener("click", () => {
    const f = qs("#formCreateUnit");
    f.schemeId.value = 1; // Assuming scheme ID 1 exists
    f.kodeUnit.value = "UK-" + Math.floor(Math.random() * 1000);
    f.namaUnit.value =
      "Unit Kompetensi Dummy " +
      Math.random().toString(36).substring(7).toUpperCase();
    f.jenisStandar.value = "SKKNI";
  });

  // --- Create Elemen ---
  qs("#formCreateElemen").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formCreateElemen");
    if (!fd.unitId || !fd.namaElemen) {
      alert("Unit ID and Nama Elemen are required.");
      return;
    }
    const unitId = parseInt(fd.unitId, 10);

    const res = await apiFetch(`/units/${unitId}/elemen`, {
      method: "POST",
      body: JSON.stringify({ namaElemen: fd.namaElemen }),
    });
    unitCrudResult.textContent = pretty(res);
  });

  // --- Fill Elemen Dummy ---
  qs("#fillElemenDummy").addEventListener("click", () => {
    const f = qs("#formCreateElemen");
    f.unitId.value = 1; // Assuming unit ID 1 exists
    f.namaElemen.value =
      "Menerapkan " + Math.random().toString(36).substring(7) + " prosedur";
  });

  // --- Create KUK ---
  qs("#formCreateKuk").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formCreateKuk");
    if (!fd.elemenId || !fd.deskripsi) {
      alert("Elemen ID and Deskripsi KUK are required.");
      return;
    }
    const elemenId = parseInt(fd.elemenId, 10);

    const res = await apiFetch(`/units/elemen/${elemenId}/kuk`, {
      method: "POST",
      body: JSON.stringify({ deskripsi: fd.deskripsi }),
    });
    unitCrudResult.textContent = pretty(res);
  });

  // --- Fill KUK Dummy ---
  qs("#fillKukDummy").addEventListener("click", () => {
    const f = qs("#formCreateKuk");
    f.elemenId.value = 1; // Assuming elemen ID 1 exists
    f.deskripsi.value =
      "KUK dummy " +
      Math.random().toString(36).substring(7) +
      " dengan detail.";
  });
}

export function setupUnit() {
  setupUnitKompetensi();
}
