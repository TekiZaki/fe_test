// src/websiteContent.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupWebsiteContentCRUD() {
  const listResult = qs("#wcListResult");
  const crudResult = qs("#wcCrudResult");

  // --- List Content ---
  qs("#btnListWc").addEventListener("click", async () => {
    const search = qs("#wcSearch").value.trim();
    const category = qs("#wcCategory").value.trim();

    let url = "/website-content?";
    if (search) url += `search=${encodeURIComponent(search)}&`;
    if (category) url += `category=${encodeURIComponent(category)}&`;

    const res = await apiFetch(url);
    listResult.textContent = pretty(res);
  });

  // --- Create ---
  qs("#btnCreateWc").addEventListener("click", async () => {
    const fd = getFormData("#formWc");
    delete fd.id;

    // Handle JSON content
    try {
      if (fd.slateContent) fd.slateContent = JSON.parse(fd.slateContent);
    } catch (e) {
      alert("Slate Content is not valid JSON.");
      return;
    }

    const res = await apiFetch("/website-content", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    crudResult.textContent = pretty(res);
  });

  // --- Update ---
  qs("#btnUpdateWc").addEventListener("click", async () => {
    const fd = getFormData("#formWc");
    if (!fd.id) {
      alert("Provide ID to update");
      return;
    }
    const id = fd.id;
    delete fd.id;

    try {
      if (fd.slateContent) fd.slateContent = JSON.parse(fd.slateContent);
    } catch (e) {
      alert("Slate Content is not valid JSON.");
      return;
    }

    const res = await apiFetch(`/website-content/${id}`, {
      method: "PUT",
      body: JSON.stringify(fd),
    });
    crudResult.textContent = pretty(res);
  });

  // --- Delete ---
  qs("#btnDeleteWc").addEventListener("click", async () => {
    const fd = getFormData("#formWc");
    if (!fd.id) {
      alert("Provide ID to delete");
      return;
    }
    const res = await apiFetch(`/website-content/${fd.id}`, {
      method: "DELETE",
    });
    crudResult.textContent = pretty(res);
  });

  // --- Fill Dummy ---
  qs("#fillWcDummy").addEventListener("click", () => {
    const f = qs("#formWc");
    f.id.value = "";
    f.title.value =
      "Berita Terbaru: " + Math.random().toString(36).substring(7);
    f.subtitle.value = "Subtitle untuk berita terbaru.";
    f.category.value = "news";
    f.publishDate.value = new Date().toISOString().split("T")[0];
    f.description.value =
      "Ini adalah deskripsi singkat dari konten website yang dibuat secara otomatis.";
    f.slateContent.value = JSON.stringify(
      [{ type: "paragraph", children: [{ text: "Ini adalah konten slate." }] }],
      null,
      2,
    );
  });
}

export function setupWebsiteContent() {
  setupWebsiteContentCRUD();
}
