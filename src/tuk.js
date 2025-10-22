// src/tuk.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupTukCRUD() {
  qs("#btnListTuk").addEventListener("click", async () => {
    const q = qs("#tukSearch").value.trim();
    const res = await apiFetch(
      "/tuks" + (q ? "?search=" + encodeURIComponent(q) : ""),
    );
    qs("#tukList").textContent = pretty(res);
  });

  qs("#btnCreateTuk").addEventListener("click", async () => {
    const fd = getFormData("#formTuk");
    delete fd.id;
    const res = await apiFetch("/tuks", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    qs("#tukCrudResult").textContent = pretty(res);
  });

  qs("#btnUpdateTuk").addEventListener("click", async () => {
    const fd = getFormData("#formTuk");
    if (!fd.id) {
      alert("Provide id");
      return;
    }
    const id = fd.id;
    delete fd.id;
    const res = await apiFetch("/tuks/" + id, {
      method: "PUT",
      body: JSON.stringify(fd),
    });
    qs("#tukCrudResult").textContent = pretty(res);
  });

  qs("#btnDeleteTuk").addEventListener("click", async () => {
    const fd = getFormData("#formTuk");
    if (!fd.id) {
      alert("Provide id");
      return;
    }
    const id = fd.id;
    const res = await apiFetch("/tuks/" + id, { method: "DELETE" });
    qs("#tukCrudResult").textContent = pretty(res);
  });

  qs("#fillTukDummy").addEventListener("click", () => {
    const f = qs("#formTuk");
    f.id.value = "";
    f.kodeTuk.value = "TUK" + Math.floor(Math.random() * 999);
    f.namaTempat.value = "TUK Mandiri Dummy";
    f.jenisTuk.value = "Mandiri";
    f.lspIndukId.value = 1;
    f.penanggungJawab.value = "PJ TUK Dummy";
  });
}

export function setupTuk() {
  setupTukCRUD();
}
