// src/asesi.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupAsesiCRUD() {
  const asesiCrudResult = qs("#asesiCrudResult");
  const asesiListOutput = qs("#asesiList");
  const publicAsesiResult = qs("#publicAsesiResult");

  const listAsesi = async () => {
    const search = qs("#asesiSearch").value.trim();
    const status = qs("#asesiStatusFilter").value;
    const isBlocked = qs("#asesiBlockedFilter").value;

    let url = "/asesi?";
    if (search) url += `search=${encodeURIComponent(search)}&`;
    if (status) url += `status=${encodeURIComponent(status)}&`;
    if (isBlocked) url += `isBlocked=${encodeURIComponent(isBlocked)}&`;

    const res = await apiFetch(url);
    asesiListOutput.textContent = pretty(res);
  };

  qs("#btnListAsesi").addEventListener("click", listAsesi);

  qs("#btnCreateAsesi").addEventListener("click", async () => {
    const fd = getFormData("#formAsesi");
    delete fd.id; // ID is not needed for creation

    // Convert numeric fields
    if (fd.schemeId) fd.schemeId = parseInt(fd.schemeId, 10);

    const res = await apiFetch("/asesi", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    asesiCrudResult.textContent = pretty(res);
  });

  qs("#btnGetAsesiById").addEventListener("click", async () => {
    const fd = getFormData("#formAsesi");
    if (!fd.id) {
      alert("Provide Asesi ID to get details");
      return;
    }
    const res = await apiFetch("/asesi/" + fd.id);
    asesiCrudResult.textContent = pretty(res);
  });

  qs("#btnUpdateAsesi").addEventListener("click", async () => {
    const fd = getFormData("#formAsesi");
    if (!fd.id) {
      alert("Provide Asesi ID to update");
      return;
    }
    const id = fd.id;
    delete fd.id;

    // Convert numeric fields
    if (fd.schemeId) fd.schemeId = parseInt(fd.schemeId, 10);

    const res = await apiFetch("/asesi/" + id, {
      method: "PUT",
      body: JSON.stringify(fd),
    });
    asesiCrudResult.textContent = pretty(res);
  });

  qs("#btnDeleteAsesi").addEventListener("click", async () => {
    const fd = getFormData("#formAsesi");
    if (!fd.id) {
      alert("Provide Asesi ID to delete");
      return;
    }
    const id = fd.id;
    const res = await apiFetch("/asesi/" + id, { method: "DELETE" });
    asesiCrudResult.textContent = pretty(res);
  });

  qs("#btnVerifyAsesi").addEventListener("click", async () => {
    const fd = getFormData("#formAsesi");
    if (!fd.id) {
      alert("Provide Asesi ID to verify");
      return;
    }
    const id = fd.id;
    const res = await apiFetch("/asesi/" + id + "/verify", { method: "PATCH" });
    asesiCrudResult.textContent = pretty(res);
  });

  qs("#btnBlockAsesi").addEventListener("click", async () => {
    const fd = getFormData("#formAsesi");
    if (!fd.id) {
      alert("Provide Asesi ID to block");
      return;
    }
    const id = fd.id;
    const res = await apiFetch("/asesi/" + id + "/block", { method: "PATCH" });
    asesiCrudResult.textContent = pretty(res);
  });

  qs("#btnUnblockAsesi").addEventListener("click", async () => {
    const fd = getFormData("#formAsesi");
    if (!fd.id) {
      alert("Provide Asesi ID to unblock");
      return;
    }
    const id = fd.id;
    const res = await apiFetch("/asesi/" + id + "/unblock", {
      method: "PATCH",
    });
    asesiCrudResult.textContent = pretty(res);
  });

  qs("#btnImportAsesi").addEventListener("click", async () => {
    const importData = qs("#asesiImportData").value;
    try {
      const parsedData = JSON.parse(importData);
      const res = await apiFetch("/asesi/import", {
        method: "POST",
        body: JSON.stringify(parsedData),
      });
      qs("#asesiImportResult").textContent = pretty(res);
    } catch (e) {
      qs("#asesiImportResult").textContent = "Error parsing JSON: " + e.message;
    }
  });

  qs("#fillAsesiFormDummy").addEventListener("click", () => {
    const f = qs("#formAsesi");
    f.id.value = "";
    f.username.value = "asesi" + Math.floor(Math.random() * 9999);
    f.password.value = "password123";
    f.email.value = "asesi_new@example.test";
    f.fullName.value = "New Dummy Asesi";
    f.ktpNumber.value = "9876543210" + Math.floor(Math.random() * 99);
    f.phoneNumber.value = "087654321099";
    f.address.value =
      "Kota/Kabupaten: Bandung, Provinsi: Jawa Barat, Jl. Dummy Asesi";
    f.registrationNumber.value =
      "REG-ASESI-" + Math.floor(Math.random() * 9999);
    f.education.value = "S1 Teknik Informatika";
    f.schemeId.value = 1; // Assuming Scheme ID 1 exists
    f.assessmentDate.value = "2025-01-01";
    f.plottingAsesor.value = "Asesor A";
    f.status.value = "belum terverifikasi";
    f.isBlocked.checked = false;
    f.documentsStatus.value = "Lengkap";
    f.certificateStatus.value = "Belum Dicetak";
    f.photoUrl.value = "https://example.com/photo.jpg";
  });

  // --- Public Asesi Endpoints ---
  qs("#btnListProvinces").addEventListener("click", async () => {
    const res = await apiFetch("/asesi/public/provinces");
    publicAsesiResult.textContent = pretty(res);
  });

  qs("#btnListCities").addEventListener("click", async () => {
    const provinceId = qs("#provinceIdForCities").value;
    if (!provinceId) {
      alert("Please provide a Province ID.");
      return;
    }
    const res = await apiFetch(`/asesi/public/provinces/${provinceId}/cities`);
    publicAsesiResult.textContent = pretty(res);
  });

  qs("#btnListAsesiByCity").addEventListener("click", async () => {
    const cityId = qs("#cityIdForAsesi").value;
    if (!cityId) {
      alert("Please provide a City ID.");
      return;
    }
    const res = await apiFetch(`/asesi/public/cities/${cityId}/asesi`);
    publicAsesiResult.textContent = pretty(res);
  });
}

export function setupAsesi() {
  setupAsesiCRUD();
}
