# Code Dump for fe

## fe/auth.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>LSP API Tester — Simple Frontend</title>
    <!-- Tailwind CDN (for quick testing) -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-slate-50 text-slate-900">
    <div class="max-w-6xl mx-auto p-6">
      <header class="mb-6">
        <h1 class="text-2xl font-bold">LSP API Tester</h1>
        <p class="text-sm text-slate-600">
          Simple single-page tester for endpoints: auth, users, euk, lsp,
          scheme, tuk.
        </p>
      </header>

      <section class="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="col-span-2">
          <label class="text-sm">Base API URL</label>
          <input
            id="baseUrl"
            class="w-full mt-1 p-2 border rounded"
            value="http://localhost:3000/api"
          />
        </div>
        <div>
          <label class="text-sm">Auth Token</label>
          <div class="flex gap-2 mt-1">
            <input
              id="token"
              class="flex-1 p-2 border rounded"
              placeholder="Bearer token will appear here"
              readonly
            />
            <button
              id="clearAuth"
              class="px-3 py-2 bg-red-500 text-white rounded"
            >
              Clear
            </button>
          </div>
          <small class="text-xs text-slate-500"
            >Token is saved to localStorage for convenience.</small
          >
        </div>
      </section>

      <nav class="mb-6">
        <div class="flex flex-wrap gap-2" id="navTabs">
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="auth"
          >
            Auth
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="user"
          >
            User
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="euk"
          >
            EUK
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="lsp"
          >
            LSP
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="scheme"
          >
            Scheme
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="juk"
          >
            JUK
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="tuk"
          >
            TUK
          </button>
        </div>
      </nav>

      <main>
        <!-- AUTH TAB -->
        <section
          id="auth"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">Authentication</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">Register Asesi</h3>
              <form id="formRegisterAsesi" class="space-y-2 mt-2">
                <input
                  name="username"
                  placeholder="username (NPP)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="password"
                  placeholder="password"
                  type="password"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="email"
                  placeholder="email"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="full_name"
                  placeholder="full_name"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="ktp_number"
                  placeholder="ktp_number"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="phone_number"
                  placeholder="phone_number"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="address"
                  placeholder="address"
                  class="w-full p-2 border rounded"
                />
                <div class="flex gap-2">
                  <button class="px-3 py-2 bg-green-600 text-white rounded">
                    Register
                  </button>
                  <button
                    type="button"
                    id="fillAsesiDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Privileged Register (Admin / Asesor)</h3>
              <form id="formRegisterPriv" class="space-y-2 mt-2">
                <select name="role_name" class="w-full p-2 border rounded">
                  <option value="Admin">Admin</option>
                  <option value="Asesor">Asesor</option>
                </select>
                <input
                  name="admin_secret"
                  placeholder="admin_secret (from .env)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="username"
                  placeholder="username"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="password"
                  placeholder="password"
                  type="password"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="email"
                  placeholder="email"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="full_name"
                  placeholder="full_name"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="position"
                  placeholder="position (for Admin)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="reg_number"
                  placeholder="reg_number (for Asesor)"
                  class="w-full p-2 border rounded"
                />
                <div class="flex gap-2">
                  <button class="px-3 py-2 bg-green-600 text-white rounded">
                    Register Privileged
                  </button>
                  <button
                    type="button"
                    id="fillPrivDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
            </div>

            <div class="p-3 border rounded md:col-span-2">
              <h3 class="font-medium">Login</h3>
              <form id="formLogin" class="mt-2 flex gap-2">
                <input
                  name="username"
                  placeholder="username"
                  class="flex-1 p-2 border rounded"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  class="flex-1 p-2 border rounded"
                />
                <button class="px-3 py-2 bg-blue-600 text-white rounded">
                  Login
                </button>
              </form>
              <form id="formForgot" class="mt-3 grid grid-cols-3 gap-2">
                <input
                  name="username"
                  placeholder="username"
                  class="p-2 border rounded col-span-1"
                />
                <input
                  name="email"
                  placeholder="email"
                  class="p-2 border rounded col-span-1"
                />
                <input
                  name="new_password"
                  placeholder="new_password"
                  class="p-2 border rounded col-span-1"
                />
                <button
                  class="mt-2 px-3 py-2 bg-orange-500 text-white rounded col-span-1"
                >
                  Reset Password
                </button>
                <div class="col-span-2 text-sm text-slate-500 mt-3">
                  Use this to simulate forgot-password (no email sent). Provide
                  username+email+new_password.
                </div>
              </form>
            </div>
          </div>
        </section>

        <!-- USER TAB -->
        <section
          id="user"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">User</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">Get My Profile</h3>
              <button
                id="btnGetProfile"
                class="mt-2 px-3 py-2 bg-indigo-600 text-white rounded"
              >
                Fetch Profile
              </button>
              <pre
                id="profileResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Change Password</h3>
              <form id="formChangePassword" class="mt-2 space-y-2">
                <input
                  name="currentPassword"
                  type="password"
                  placeholder="currentPassword"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="newPassword"
                  type="password"
                  placeholder="newPassword"
                  class="w-full p-2 border rounded"
                />
                <button class="px-3 py-2 bg-emerald-600 text-white rounded">
                  Change Password
                </button>
              </form>
              <pre
                id="changePwdResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>
          </div>
        </section>

        <!-- EUK TAB -->
        <section
          id="euk"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">Event Uji Kompetensi (EUK)</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">List EUKs</h3>
              <div class="flex gap-2 mt-2">
                <input
                  id="eukSearch"
                  placeholder="search"
                  class="flex-1 p-2 border rounded"
                />
                <button
                  id="btnListEuk"
                  class="px-3 py-2 bg-sky-600 text-white rounded"
                >
                  List
                </button>
              </div>
              <pre
                id="eukList"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Create / Update / Delete EUK (Admin)</h3>
              <form id="formEuk" class="space-y-2 mt-2">
                <input
                  name="id"
                  placeholder="(optional) id for update/delete"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="namaKegiatan"
                  placeholder="namaKegiatan"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="tanggal"
                  placeholder="tanggal (YYYY-MM-DD)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="tempat"
                  placeholder="tempat"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="alamat"
                  placeholder="alamat"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="jumlahPeserta"
                  placeholder="jumlahPeserta"
                  type="number"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="penanggungJawab"
                  placeholder="penanggungJawab"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="schemeId"
                  placeholder="schemeId (numeric)"
                  class="w-full p-2 border rounded"
                />
                <div class="flex gap-2">
                  <button
                    type="button"
                    id="btnCreateEuk"
                    class="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    id="btnUpdateEuk"
                    class="px-3 py-2 bg-amber-600 text-white rounded"
                  >
                    Update (use id)
                  </button>
                  <button
                    type="button"
                    id="btnDeleteEuk"
                    class="px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Delete (use id)
                  </button>
                  <button
                    type="button"
                    id="fillEukDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
              <pre
                id="eukCrudResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>
          </div>
        </section>

        <!-- LSP TAB -->
        <section
          id="lsp"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">LSP Institutions</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">List LSPs</h3>
              <div class="flex gap-2 mt-2">
                <input
                  id="lspSearch"
                  placeholder="search"
                  class="flex-1 p-2 border rounded"
                />
                <button
                  id="btnListLsp"
                  class="px-3 py-2 bg-sky-600 text-white rounded"
                >
                  List
                </button>
              </div>
              <pre
                id="lspList"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Create / Update / Delete LSP (Admin)</h3>
              <form id="formLsp" class="space-y-2 mt-2">
                <input
                  name="id"
                  placeholder="(optional) id for update/delete"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="namaLsp"
                  placeholder="namaLsp"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="direkturLsp"
                  placeholder="direkturLsp"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="jenisLsp"
                  placeholder="jenisLsp"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="alamat"
                  placeholder="alamat"
                  class="w-full p-2 border rounded"
                />
                <div class="flex gap-2">
                  <button
                    type="button"
                    id="btnCreateLsp"
                    class="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    id="btnUpdateLsp"
                    class="px-3 py-2 bg-amber-600 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    id="btnDeleteLsp"
                    class="px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    id="fillLspDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
              <pre
                id="lspCrudResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>
          </div>
        </section>

        <!-- SCHEME TAB -->
        <section
          id="scheme"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">Certification Schemes</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">List Schemes</h3>
              <div class="flex gap-2 mt-2">
                <input
                  id="schemeSearch"
                  placeholder="search"
                  class="flex-1 p-2 border rounded"
                />
                <button
                  id="btnListScheme"
                  class="px-3 py-2 bg-sky-600 text-white rounded"
                >
                  List
                </button>
              </div>
              <pre
                id="schemeList"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">
                Create / Update / Delete Scheme (Admin)
              </h3>
              <form id="formScheme" class="space-y-2 mt-2">
                <input
                  name="id"
                  placeholder="(optional) id"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="kodeSkema"
                  placeholder="kodeSkema"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="namaSkema"
                  placeholder="namaSkema"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="skkni"
                  placeholder="skkni"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="keteranganBukti"
                  placeholder="keteranganBukti"
                  class="w-full p-2 border rounded"
                />
                <label class="flex items-center gap-2"
                  ><input name="isActive" type="checkbox" /> isActive</label
                >
                <div class="flex gap-2">
                  <button
                    type="button"
                    id="btnCreateScheme"
                    class="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    id="btnUpdateScheme"
                    class="px-3 py-2 bg-amber-600 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    id="btnDeleteScheme"
                    class="px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    id="fillSchemeDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
              <pre
                id="schemeCrudResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>
          </div>
        </section>

        <!-- JUK TAB (Jadwal Uji Kompetensi) -->
        <section
          id="juk"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">Jadwal Uji Kompetensi (JUK)</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">List JUKs</h3>
              <div class="flex gap-2 mt-2">
                <input
                  id="jukSearch"
                  placeholder="search"
                  class="flex-1 p-2 border rounded"
                />
                <button
                  id="btnListJuk"
                  class="px-3 py-2 bg-sky-600 text-white rounded"
                >
                  List
                </button>
              </div>
              <pre
                id="jukList"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Create / Update / Delete JUK (Admin)</h3>
              <form id="formJuk" class="space-y-2 mt-2">
                <input
                  name="id"
                  placeholder="(optional) id for update/delete"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="judulKegiatan"
                  placeholder="judulKegiatan (Event Name)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="tanggalPelaksanaan"
                  placeholder="tanggalPelaksanaan (YYYY-MM-DD)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="jamPelaksanaan"
                  placeholder="jamPelaksanaan (e.g., 09:00 - 12:00)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="kuotaPeserta"
                  placeholder="kuotaPeserta"
                  type="number"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="schemeId"
                  placeholder="schemeId (Wajib)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="tukId"
                  placeholder="tukId (Wajib)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="asesorId"
                  placeholder="asesorId (Wajib - User ID Asesor)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="nomorSuratTugas"
                  placeholder="nomorSuratTugas"
                  class="w-full p-2 border rounded"
                />
                <div class="flex gap-2">
                  <button
                    type="button"
                    id="btnCreateJuk"
                    class="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    id="btnUpdateJuk"
                    class="px-3 py-2 bg-amber-600 text-white rounded"
                  >
                    Update (use id)
                  </button>
                  <button
                    type="button"
                    id="btnDeleteJuk"
                    class="px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Delete (use id)
                  </button>
                  <button
                    type="button"
                    id="fillJukDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
              <pre
                id="jukCrudResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              "></pre>
            </div>
          </div>
        </section>

        <!-- TUK TAB -->
        <section
          id="tuk"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">Tempat Uji Kompetensi (TUK)</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">List TUKs</h3>
              <div class="flex gap-2 mt-2">
                <input
                  id="tukSearch"
                  placeholder="search"
                  class="flex-1 p-2 border rounded"
                />
                <button
                  id="btnListTuk"
                  class="px-3 py-2 bg-sky-600 text-white rounded"
                >
                  List
                </button>
              </div>
              <pre
                id="tukList"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Create / Update / Delete TUK (Admin)</h3>
              <form id="formTuk" class="space-y-2 mt-2">
                <input
                  name="id"
                  placeholder="(optional) id"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="kodeTuk"
                  placeholder="kodeTuk"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="namaTempat"
                  placeholder="namaTempat"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="jenisTuk"
                  placeholder="jenisTuk"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="lspIndukId"
                  placeholder="lspIndukId"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="penanggungJawab"
                  placeholder="penanggungJawab"
                  class="w-full p-2 border rounded"
                />
                <div class="flex gap-2">
                  <button
                    type="button"
                    id="btnCreateTuk"
                    class="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    id="btnUpdateTuk"
                    class="px-3 py-2 bg-amber-600 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    id="btnDeleteTuk"
                    class="px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    id="fillTukDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
              <pre
                id="tukCrudResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>
          </div>
        </section>
      </main>

      <footer class="mt-6 text-sm text-slate-500">
        Tip: set Base API URL then Login as Admin to test create/update/delete
        endpoints.
      </footer>
    </div>

    <!-- MAIN SCRIPT (ES Module) -->
    <script type="module" src="./src/main.js"></script>
  </body>
</html>
```

## fe/src/auth.js

```js
// src/auth.js

import { qs, apiFetch, pretty, saveToken, getFormData } from "./utils.js";

function setupRegisterAsesi() {
  qs("#formRegisterAsesi").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formRegisterAsesi");
    const res = await apiFetch("/auth/register/asesi", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    alert("Status: " + res.status + "\n" + pretty(res.data));
  });

  qs("#fillAsesiDummy").addEventListener("click", () => {
    const f = qs("#formRegisterAsesi");
    f.username.value = "asesi" + Math.floor(Math.random() * 9999);
    f.password.value = "password123";
    f.email.value = "asesi@example.test";
    f.full_name.value = "Dummy Asesi";
    f.ktp_number.value = "1234567890";
    f.phone_number.value = "081234567890";
    f.address.value = "Jalan Contoh";
  });
}

function setupRegisterPrivileged() {
  qs("#formRegisterPriv").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formRegisterPriv");
    const res = await apiFetch("/auth/register/privileged", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    alert("Status: " + res.status + "\n" + pretty(res.data));
  });

  qs("#fillPrivDummy").addEventListener("click", () => {
    const f = qs("#formRegisterPriv");
    f.admin_secret.value = "testsecret";
    f.username.value = "admin";
    f.password.value = "1234";
    f.email.value = "admin@mail.com";
    f.full_name.value = "Admin";
    f.position.value = "IT";
    f.reg_number.value = "REG12345";
  });
}

function setupLogin() {
  qs("#formLogin").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formLogin");
    const res = await apiFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    if (res.ok && res.data && res.data.token) {
      saveToken(res.data.token);
      alert("Login successful — token saved");
    } else {
      alert("Login failed: " + pretty(res.data));
    }
  });
}

function setupForgotPassword() {
  qs("#formForgot").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formForgot");
    const res = await apiFetch("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    alert("Status: " + res.status + "\n" + pretty(res.data));
  });
}

export function setupAuth() {
  setupRegisterAsesi();
  setupRegisterPrivileged();
  setupLogin();
  setupForgotPassword();
}
```

## fe/src/euk.js

```js
// src/euk.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupEukCRUD() {
  qs("#btnListEuk").addEventListener("click", async () => {
    const q = qs("#eukSearch").value.trim();
    const res = await apiFetch(
      "/euks" + (q ? "?search=" + encodeURIComponent(q) : "")
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
```

## fe/src/juk.js

```js
// src/juk.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupJukCRUD() {
  qs("#btnListJuk").addEventListener("click", async () => {
    const q = qs("#jukSearch").value.trim();
    const res = await apiFetch(
      "/juks" + (q ? "?search=" + encodeURIComponent(q) : "")
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
```

## fe/src/lsp.js

```js
// src/lsp.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupLspCRUD() {
  qs("#btnListLsp").addEventListener("click", async () => {
    const q = qs("#lspSearch").value.trim();
    const res = await apiFetch(
      "/lsps" + (q ? "?search=" + encodeURIComponent(q) : "")
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
```

## fe/src/main.js

```js
// src/main.js

import { qs, qsa, loadToken, saveToken } from "./utils.js";
import { setupAuth } from "./auth.js";
import { setupUser } from "./user.js";
import { setupEuk } from "./euk.js";
import { setupLsp } from "./lsp.js";
import { setupScheme } from "./scheme.js";
import { setupJuk } from "./juk.js";
import { setupTuk } from "./tuk.js";

// --- Global Initialization ---

function setupTabs() {
  qsa(".tab-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      qsa(".tab-content").forEach((t) => t.classList.add("hidden"));
      qs("#" + tab).classList.remove("hidden");
      // mark active
      qsa(".tab-btn").forEach((b) =>
        b.classList.remove("ring", "ring-indigo-300")
      );
      btn.classList.add("ring", "ring-indigo-300");
    })
  );
  // default open
  qsa(".tab-btn")[0].click();
}

function setupGlobalListeners() {
  // init token field
  loadToken();

  qs("#clearAuth").addEventListener("click", () => {
    saveToken("");
    alert("Auth cleared");
  });

  // Helpful: click baseUrl to select
  qs("#baseUrl").addEventListener("click", (e) => e.target.select());
}

// --- Run Setups ---
document.addEventListener("DOMContentLoaded", () => {
  setupGlobalListeners();
  setupTabs();

  // Setup specific feature handlers
  setupAuth();
  setupUser();
  setupEuk();
  setupLsp();
  setupScheme();
  setupJuk();
  setupTuk();
});
```

## fe/src/scheme.js

```js
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
```

## fe/src/tuk.js

```js
// src/tuk.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupTukCRUD() {
  qs("#btnListTuk").addEventListener("click", async () => {
    const q = qs("#tukSearch").value.trim();
    const res = await apiFetch(
      "/tuks" + (q ? "?search=" + encodeURIComponent(q) : "")
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
```

## fe/src/user.js

```js
// src/user.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupGetProfile() {
  qs("#btnGetProfile").addEventListener("click", async () => {
    const res = await apiFetch("/users/profile");
    qs("#profileResult").textContent = pretty(res);
  });
}

function setupChangePassword() {
  qs("#formChangePassword").addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const fd = getFormData("#formChangePassword");
    const res = await apiFetch("/users/change-password", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    qs("#changePwdResult").textContent = pretty(res);
  });
}

export function setupUser() {
  setupGetProfile();
  setupChangePassword();
}
```

## fe/src/utils.js

```js
// src/utils.js

export const qs = (s, root = document) => root.querySelector(s);
export const qsa = (s, root = document) => Array.from(root.querySelectorAll(s));

export function getBase() {
  return (qs("#baseUrl").value || "").replace(/\/+$/, "");
}

export function saveToken(t) {
  localStorage.setItem("lsp_token", t || "");
  qs("#token").value = t ? t : "";
}

export function loadToken() {
  const t = localStorage.getItem("lsp_token") || "";
  qs("#token").value = t;
  return t;
}

export function pretty(o) {
  try {
    return JSON.stringify(o, null, 2);
  } catch (e) {
    return String(o);
  }
}

// Generic fetch helper
export async function apiFetch(path, opts = {}) {
  const base = getBase();
  const url = base + path;
  const headers = opts.headers || {};
  if (!headers["Content-Type"] && opts.body && !(opts.body instanceof FormData))
    headers["Content-Type"] = "application/json";

  const token = localStorage.getItem("lsp_token");
  if (token) headers["Authorization"] = "Bearer " + token;

  try {
    const res = await fetch(url, { ...opts, headers });
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      data = text;
    }
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return { ok: false, status: 0, data: err.message };
  }
}

// Helper to extract form data
export function getFormData(formSelector) {
  return Object.fromEntries(new FormData(qs(formSelector)).entries());
}
```
