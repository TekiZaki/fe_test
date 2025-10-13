// src/scheme.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupSchemeCRUD() {
  qs("#btnListScheme").addEventListener("click", async () => {
    const q = qs("#schemeSearch").value.trim();
    const res = await apiFetch(
      "/schemes" + (q ? "?search=" + encodeURIComponent(q) : "")
    );
    qs("#schemeList").textContent = pretty(res);
  });

  qs("#btnCreateScheme").addEventListener("click", async () => {
    const form = qs("#formScheme");
    const fd = getFormData("#formScheme");
    delete fd.id;
    fd.isActive = !!form.isActive?.checked;
    const res = await apiFetch("/schemes", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    qs("#schemeCrudResult").textContent = pretty(res);
  });

  qs("#btnUpdateScheme").addEventListener("click", async () => {
    const form = qs("#formScheme");
    const fd = getFormData("#formScheme");
    if (!fd.id) {
      alert("Provide id");
      return;
    }
    const id = fd.id;
    delete fd.id;
    fd.isActive = !!form.isActive?.checked;
    const res = await apiFetch("/schemes/" + id, {
      method: "PUT",
      body: JSON.stringify(fd),
    });
    qs("#schemeCrudResult").textContent = pretty(res);
  });

  qs("#btnDeleteScheme").addEventListener("click", async () => {
    const fd = getFormData("#formScheme");
    if (!fd.id) {
      alert("Provide id");
      return;
    }
    const id = fd.id;
    const res = await apiFetch("/schemes/" + id, { method: "DELETE" });
    qs("#schemeCrudResult").textContent = pretty(res);
  });

  qs("#fillSchemeDummy").addEventListener("click", () => {
    const f = qs("#formScheme");
    f.id.value = "";
    f.kodeSkema.value = "SKM" + Math.floor(Math.random() * 999);
    f.namaSkema.value = "Skema Dummy Sertifikasi";
    f.skkni.value = "SKKNI-DUMMY-2024";
    f.keteranganBukti.value = "Contoh Bukti";
    f.isActive.checked = true;
  });
}

export function setupScheme() {
  setupSchemeCRUD();
}
