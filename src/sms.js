// src/sms.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupSMS() {
  const smsMasukResult = qs("#smsMasukResult");
  const smsKeluarResult = qs("#smsKeluarResult");
  const sendSmsResult = qs("#sendSmsResult");

  // --- List Incoming SMS ---
  qs("#btnListSmsMasuk").addEventListener("click", async () => {
    const res = await apiFetch("/sms/masuk");
    smsMasukResult.textContent = pretty(res);
  });

  // --- List Outgoing SMS ---
  qs("#btnListSmsKeluar").addEventListener("click", async () => {
    const res = await apiFetch("/sms/keluar");
    smsKeluarResult.textContent = pretty(res);
  });

  // --- Send SMS ---
  qs("#btnSendSms").addEventListener("click", async () => {
    const fd = getFormData("#formSendSms");
    if (!fd.penerimaNomor || !fd.isiPesan) {
      alert("Penerima Nomor and Isi Pesan are required to send SMS.");
      return;
    }

    const payload = {
      penerima: {
        nama: fd.penerimaNama || "Anonim",
        nomor: fd.penerimaNomor,
      },
      isiPesan: fd.isiPesan,
      status: fd.status,
    };

    const res = await apiFetch("/sms/kirim", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    sendSmsResult.textContent = pretty(res);
  });

  // --- Fill SMS Dummy ---
  qs("#fillSmsDummy").addEventListener("click", () => {
    const f = qs("#formSendSms");
    f.penerimaNama.value = "Dummy User " + Math.floor(Math.random() * 100);
    f.penerimaNomor.value = "081234567890";
    f.isiPesan.value =
      "Halo, ini pesan dummy dari LSP Tester. Waktu: " +
      new Date().toLocaleString();
    f.status.value = "Menunggu";
  });
}

export function setupSms() {
  setupSMS();
}
