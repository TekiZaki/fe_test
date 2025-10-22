// src/lsp.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupLspCRUD() {
  qs("#btnListLsp").addEventListener("click", async () => {
    const q = qs("#lspSearch").value.trim();
    const res = await apiFetch(
      "/lsps" + (q ? "?search=" + encodeURIComponent(q) : ""),
    );
    qs("#lspList").textContent = pretty(res);
  });

  qs("#btnCreateLsp").addEventListener("click", async () => {
    const fd = getFormData("#formLsp");
    delete fd.id;
    const res = await apiFetch("/lsps", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    qs("#lspCrudResult").textContent = pretty(res);
  });

  qs("#btnUpdateLsp").addEventListener("click", async () => {
    const fd = getFormData("#formLsp");
    if (!fd.id) {
      alert("Provide id");
      return;
    }
    const id = fd.id;
    delete fd.id;
    const res = await apiFetch("/lsps/" + id, {
      method: "PUT",
      body: JSON.stringify(fd),
    });
    qs("#lspCrudResult").textContent = pretty(res);
  });

  qs("#btnDeleteLsp").addEventListener("click", async () => {
    const fd = getFormData("#formLsp");
    if (!fd.id) {
      alert("Provide id");
      return;
    }
    const id = fd.id;
    const res = await apiFetch("/lsps/" + id, { method: "DELETE" });
    qs("#lspCrudResult").textContent = pretty(res);
  });

  qs("#fillLspDummy").addEventListener("click", () => {
    const f = qs("#formLsp");
    f.id.value = "";
    f.namaLsp.value =
      "LSP Dummy " + Math.random().toString(36).substring(7).toUpperCase();
    f.direkturLsp.value = "Direktur Dummy";
    f.jenisLsp.value = "P3";
    f.alamat.value = "Jl. LSP Dummy";
  });
}

export function setupLsp() {
  setupLspCRUD();
}
