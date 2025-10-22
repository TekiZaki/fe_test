# Code Dump for fe_test

## fe_test/auth.html

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
          scheme, tuk, juk, asesi, unit.
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
          <!-- NEW TABS -->
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="asesi"
          >
            Asesi
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="unit"
          >
            Unit Kompetensi
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="puk"
          >
            PUK
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="biaya"
          >
            Biaya
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="rekening"
          >
            Rekening
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="sms"
          >
            SMS
          </button>
          <button
            class="tab-btn px-3 py-2 bg-white border rounded"
            data-tab="verifikasi"
          >
            Verifikasi
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

        <!-- NEW: ASESI TAB -->
        <section
          id="asesi"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">Asesi Management</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">List All Asesi (Admin)</h3>
              <div class="flex flex-col gap-2 mt-2">
                <input
                  id="asesiSearch"
                  placeholder="Search (name, username, reg. no.)"
                  class="w-full p-2 border rounded"
                />
                <div class="flex gap-2">
                  <select
                    id="asesiStatusFilter"
                    class="flex-1 p-2 border rounded"
                  >
                    <option value="">All Status</option>
                    <option value="belum terverifikasi">Unverified</option>
                    <option value="terverifikasi">Verified</option>
                    <option value="kompeten">Competent</option>
                    <option value="belum kompeten">Not Competent</option>
                  </select>
                  <select
                    id="asesiBlockedFilter"
                    class="flex-1 p-2 border rounded"
                  >
                    <option value="">All Block Status</option>
                    <option value="false">Not Blocked</option>
                    <option value="true">Blocked</option>
                  </select>
                  <button
                    id="btnListAsesi"
                    class="px-3 py-2 bg-sky-600 text-white rounded"
                  >
                    List
                  </button>
                </div>
              </div>
              <pre
                id="asesiList"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">
                Create / Update / Delete Asesi (Admin)
              </h3>
              <form id="formAsesi" class="space-y-2 mt-2">
                <input
                  name="id"
                  placeholder="(optional) id for update/delete"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="username"
                  placeholder="username (required for create)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="password (required for create)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="email"
                  placeholder="email (required for create)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="fullName"
                  placeholder="full_name"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="ktpNumber"
                  placeholder="ktp_number"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="phoneNumber"
                  placeholder="phone_number"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="address"
                  placeholder="address (e.g., Kota/Kabupaten: Bandung, Provinsi: Jawa Barat)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="registrationNumber"
                  placeholder="registration_number (required for create)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="education"
                  placeholder="education"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="schemeId"
                  placeholder="schemeId (numeric, required for create)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="assessmentDate"
                  type="date"
                  placeholder="assessmentDate (YYYY-MM-DD)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="plottingAsesor"
                  placeholder="plottingAsesor"
                  class="w-full p-2 border rounded"
                />
                <select name="status" class="w-full p-2 border rounded">
                  <option value="belum terverifikasi">
                    belum terverifikasi
                  </option>
                  <option value="terverifikasi">terverifikasi</option>
                  <option value="kompeten">kompeten</option>
                  <option value="belum kompeten">belum kompeten</option>
                </select>
                <label class="flex items-center gap-2"
                  ><input name="isBlocked" type="checkbox" /> isBlocked</label
                >
                <input
                  name="documentsStatus"
                  placeholder="documentsStatus"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="certificateStatus"
                  placeholder="certificateStatus"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="photoUrl"
                  placeholder="photoUrl"
                  class="w-full p-2 border rounded"
                />
                <div class="flex flex-wrap gap-2">
                  <button
                    type="button"
                    id="btnCreateAsesi"
                    class="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    id="btnGetAsesiById"
                    class="px-3 py-2 bg-indigo-600 text-white rounded"
                  >
                    Get By ID
                  </button>
                  <button
                    type="button"
                    id="btnUpdateAsesi"
                    class="px-3 py-2 bg-amber-600 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    id="btnDeleteAsesi"
                    class="px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    id="btnVerifyAsesi"
                    class="px-3 py-2 bg-blue-500 text-white rounded"
                  >
                    Verify
                  </button>
                  <button
                    type="button"
                    id="btnBlockAsesi"
                    class="px-3 py-2 bg-red-500 text-white rounded"
                  >
                    Block
                  </button>
                  <button
                    type="button"
                    id="btnUnblockAsesi"
                    class="px-3 py-2 bg-green-500 text-white rounded"
                  >
                    Unblock
                  </button>
                  <button
                    type="button"
                    id="fillAsesiFormDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
              <pre
                id="asesiCrudResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-96 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Import Asesi (Admin)</h3>
              <p class="text-sm text-slate-500 mb-2">
                Simulates importing an array of Asesi data. For actual Excel
                import, you'd parse Excel first.
              </p>
              <textarea
                id="asesiImportData"
                class="w-full p-2 border rounded h-32 text-xs"
                placeholder='[{"username": "import_asesi1", "password": "pass", "email": "import1@mail.com", "fullName": "Import Asesi 1", "registrationNumber": "REG001", "schemeCode": "SKM-02-LSP Batik", "address": "Kota/Kabupaten: Bandung, Provinsi: Jawa Barat"}, ...]'
              ></textarea>
              <button
                id="btnImportAsesi"
                class="mt-2 px-3 py-2 bg-purple-600 text-white rounded"
              >
                Import Asesi (JSON)
              </button>
              <pre
                id="asesiImportResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Public Asesi Data</h3>
              <div class="space-y-2 mt-2">
                <button
                  id="btnListProvinces"
                  class="px-3 py-2 bg-blue-600 text-white rounded"
                >
                  List Provinces
                </button>
                <div class="flex gap-2">
                  <input
                    id="provinceIdForCities"
                    placeholder="Province ID"
                    type="number"
                    value="1"
                    class="flex-1 p-2 border rounded"
                  />
                  <button
                    id="btnListCities"
                    class="px-3 py-2 bg-blue-600 text-white rounded"
                  >
                    List Cities by Province
                  </button>
                </div>
                <div class="flex gap-2">
                  <input
                    id="cityIdForAsesi"
                    placeholder="City ID"
                    type="number"
                    value="1"
                    class="flex-1 p-2 border rounded"
                  />
                  <button
                    id="btnListAsesiByCity"
                    class="px-3 py-2 bg-blue-600 text-white rounded"
                  >
                    List Asesi by City
                  </button>
                </div>
              </div>
              <pre
                id="publicAsesiResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>
          </div>
        </section>

        <!-- NEW: UNIT KOMPETENSI TAB -->
        <section
          id="unit"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">Unit Kompetensi & Detail</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">List Units</h3>
              <div class="flex flex-col gap-2 mt-2">
                <input
                  id="unitSearch"
                  placeholder="search unit"
                  class="w-full p-2 border rounded"
                />
                <input
                  id="unitSchemeIdFilter"
                  placeholder="Filter by Scheme ID (numeric)"
                  class="w-full p-2 border rounded"
                />
                <button
                  id="btnListUnits"
                  class="px-3 py-2 bg-sky-600 text-white rounded"
                >
                  List
                </button>
              </div>
              <pre
                id="unitList"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Unit Detail (incl. Elemen & KUK)</h3>
              <div class="flex gap-2 mt-2">
                <input
                  id="unitDetailId"
                  placeholder="Unit ID"
                  class="flex-1 p-2 border rounded"
                />
                <button
                  id="btnGetUnitDetail"
                  class="px-3 py-2 bg-indigo-600 text-white rounded"
                >
                  Get Detail
                </button>
              </div>
              <pre
                id="unitDetailResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded md:col-span-2">
              <h3 class="font-medium">Create Unit / Elemen / KUK (Admin)</h3>
              <div class="grid md:grid-cols-3 gap-4 mt-2">
                <div class="col-span-1 border p-2 rounded">
                  <h4 class="font-medium mb-2">Create Unit</h4>
                  <form id="formCreateUnit" class="space-y-2">
                    <input
                      name="schemeId"
                      placeholder="Scheme ID (numeric)"
                      type="number"
                      class="w-full p-2 border rounded"
                    />
                    <input
                      name="kodeUnit"
                      placeholder="Kode Unit"
                      class="w-full p-2 border rounded"
                    />
                    <input
                      name="namaUnit"
                      placeholder="Nama Unit"
                      class="w-full p-2 border rounded"
                    />
                    <input
                      name="jenisStandar"
                      placeholder="Jenis Standar"
                      class="w-full p-2 border rounded"
                    />
                    <div class="flex gap-2">
                      <button class="px-3 py-2 bg-green-600 text-white rounded">
                        Create Unit
                      </button>
                      <button
                        type="button"
                        id="fillUnitDummy"
                        class="px-3 py-2 bg-slate-200 rounded"
                      >
                        Fill dummy
                      </button>
                    </div>
                  </form>
                </div>

                <div class="col-span-1 border p-2 rounded">
                  <h4 class="font-medium mb-2">Create Elemen</h4>
                  <form id="formCreateElemen" class="space-y-2">
                    <input
                      name="unitId"
                      placeholder="Target Unit ID (numeric)"
                      type="number"
                      class="w-full p-2 border rounded"
                    />
                    <input
                      name="namaElemen"
                      placeholder="Nama Elemen"
                      class="w-full p-2 border rounded"
                    />
                    <div class="flex gap-2">
                      <button class="px-3 py-2 bg-green-600 text-white rounded">
                        Create Elemen
                      </button>
                      <button
                        type="button"
                        id="fillElemenDummy"
                        class="px-3 py-2 bg-slate-200 rounded"
                      >
                        Fill dummy
                      </button>
                    </div>
                  </form>
                </div>

                <div class="col-span-1 border p-2 rounded">
                  <h4 class="font-medium mb-2">Create KUK</h4>
                  <form id="formCreateKuk" class="space-y-2">
                    <input
                      name="elemenId"
                      placeholder="Target Elemen ID (numeric)"
                      type="number"
                      class="w-full p-2 border rounded"
                    />
                    <textarea
                      name="deskripsi"
                      placeholder="Deskripsi KUK"
                      class="w-full p-2 border rounded"
                    ></textarea>
                    <div class="flex gap-2">
                      <button class="px-3 py-2 bg-green-600 text-white rounded">
                        Create KUK
                      </button>
                      <button
                        type="button"
                        id="fillKukDummy"
                        class="px-3 py-2 bg-slate-200 rounded"
                      >
                        Fill dummy
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <pre
                id="unitCrudResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>
          </div>
        </section>
        <!-- NEW: PUK TAB -->
        <section
          id="puk"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">Peserta Uji Kompetensi (PUK)</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">Get Peserta by Jadwal ID</h3>
              <div class="flex gap-2 mt-2">
                <input
                  id="pukJadwalId"
                  placeholder="Jadwal ID"
                  type="number"
                  class="flex-1 p-2 border rounded"
                />
                <button
                  id="btnGetPeserta"
                  class="px-3 py-2 bg-sky-600 text-white rounded"
                >
                  Get
                </button>
              </div>
              <pre
                id="pukListResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Add / Remove Peserta (Admin)</h3>
              <form id="formPuk" class="space-y-2 mt-2">
                <input
                  name="jadwalId"
                  placeholder="Jadwal ID"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="asesiId"
                  placeholder="Asesi ID (for add)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="pesertaId"
                  placeholder="Peserta ID (for delete)"
                  class="w-full p-2 border rounded"
                />
                <div class="flex gap-2">
                  <button
                    type="button"
                    id="btnAddPeserta"
                    class="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    id="btnRemovePeserta"
                    class="px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    id="fillPukDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
              <pre
                id="pukCrudResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>
          </div>
        </section>

        <!-- NEW: BIAYA TAB -->
        <section
          id="biaya"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">Biaya Management (Admin Only)</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">List Biaya</h3>
              <button
                id="btnListBiaya"
                class="mt-2 px-3 py-2 bg-sky-600 text-white rounded"
              >
                List All Biaya
              </button>
              <pre
                id="biayaListResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Create / Update / Delete Biaya</h3>
              <form id="formBiaya" class="space-y-2 mt-2">
                <input
                  name="id"
                  placeholder="(optional) ID for update/delete"
                  type="number"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="schemeId"
                  placeholder="Scheme ID (numeric)"
                  type="number"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="jenisBiaya"
                  placeholder="Jenis Biaya (e.g., Pendaftaran, Sertifikasi)"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="nominal"
                  placeholder="Nominal (numeric)"
                  type="number"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="standar"
                  placeholder="Standar (optional, e.g., BNSP)"
                  class="w-full p-2 border rounded"
                />
                <div class="flex gap-2">
                  <button
                    type="button"
                    id="btnCreateBiaya"
                    class="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    id="btnUpdateBiaya"
                    class="px-3 py-2 bg-amber-600 text-white rounded"
                  >
                    Update (use ID)
                  </button>
                  <button
                    type="button"
                    id="btnDeleteBiaya"
                    class="px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Delete (use ID)
                  </button>
                  <button
                    type="button"
                    id="fillBiayaDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
              <pre
                id="biayaCrudResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>
          </div>
        </section>

        <!-- NEW: REKENING TAB -->
        <section
          id="rekening"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">Rekening Management (Admin Only)</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">List Rekening</h3>
              <button
                id="btnListRekening"
                class="mt-2 px-3 py-2 bg-sky-600 text-white rounded"
              >
                List All Rekening
              </button>
              <pre
                id="rekeningListResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">Create / Update / Delete Rekening</h3>
              <form id="formRekening" class="space-y-2 mt-2">
                <input
                  name="id"
                  placeholder="(optional) ID for update/delete"
                  type="number"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="bank"
                  placeholder="Nama Bank"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="nomor"
                  placeholder="Nomor Rekening"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="atasNama"
                  placeholder="Atas Nama"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="namaLsp"
                  placeholder="Nama LSP (optional)"
                  class="w-full p-2 border rounded"
                />
                <div class="flex gap-2">
                  <button
                    type="button"
                    id="btnCreateRekening"
                    class="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    id="btnUpdateRekening"
                    class="px-3 py-2 bg-amber-600 text-white rounded"
                  >
                    Update (use ID)
                  </button>
                  <button
                    type="button"
                    id="btnDeleteRekening"
                    class="px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Delete (use ID)
                  </button>
                  <button
                    type="button"
                    id="fillRekeningDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
              <pre
                id="rekeningCrudResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>
          </div>
        </section>

        <!-- NEW: SMS TAB -->
        <section
          id="sms"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">SMS Management (Admin Only)</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">List Incoming SMS</h3>
              <button
                id="btnListSmsMasuk"
                class="mt-2 px-3 py-2 bg-sky-600 text-white rounded"
              >
                List SMS Masuk
              </button>
              <pre
                id="smsMasukResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded">
              <h3 class="font-medium">List Outgoing SMS</h3>
              <button
                id="btnListSmsKeluar"
                class="mt-2 px-3 py-2 bg-sky-600 text-white rounded"
              >
                List SMS Keluar
              </button>
              <pre
                id="smsKeluarResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-64 overflow-auto"
              ></pre>
            </div>

            <div class="p-3 border rounded md:col-span-2">
              <h3 class="font-medium">Send SMS</h3>
              <form id="formSendSms" class="space-y-2 mt-2">
                <input
                  name="penerimaNama"
                  placeholder="Penerima Nama"
                  class="w-full p-2 border rounded"
                />
                <input
                  name="penerimaNomor"
                  placeholder="Penerima Nomor (e.g., 08123...)"
                  class="w-full p-2 border rounded"
                />
                <textarea
                  name="isiPesan"
                  placeholder="Isi Pesan SMS"
                  class="w-full p-2 border rounded h-24"
                ></textarea>
                <select name="status" class="w-full p-2 border rounded">
                  <option value="Menunggu">Menunggu</option>
                  <option value="Terkirim">Terkirim</option>
                  <option value="Gagal">Gagal</option>
                </select>
                <div class="flex gap-2">
                  <button
                    type="button"
                    id="btnSendSms"
                    class="px-3 py-2 bg-green-600 text-white rounded"
                  >
                    Send SMS
                  </button>
                  <button
                    type="button"
                    id="fillSmsDummy"
                    class="px-3 py-2 bg-slate-200 rounded"
                  >
                    Fill dummy
                  </button>
                </div>
              </form>
              <pre
                id="sendSmsResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-48 overflow-auto"
              ></pre>
            </div>
          </div>
        </section>

        <!-- NEW: VERIFIKASI TAB -->
        <section
          id="verifikasi"
          class="tab-content hidden bg-white p-4 rounded shadow"
        >
          <h2 class="font-semibold mb-2">Verifikasi Asesi (Admin Only)</h2>
          <div class="grid md:grid-cols-1 gap-4">
            <div class="p-3 border rounded">
              <h3 class="font-medium">Get Asesi Verification Data</h3>
              <div class="flex gap-2 mt-2">
                <input
                  id="asesiIdVerifikasi"
                  placeholder="Asesi ID"
                  type="number"
                  class="flex-1 p-2 border rounded"
                />
                <button
                  id="btnGetVerifikasiData"
                  class="px-3 py-2 bg-indigo-600 text-white rounded"
                >
                  Fetch Data
                </button>
                <button
                  type="button"
                  id="fillVerifikasiDummy"
                  class="px-3 py-2 bg-slate-200 rounded"
                >
                  Fill dummy
                </button>
              </div>
              <pre
                id="verifikasiResult"
                class="mt-3 bg-slate-100 p-2 rounded max-h-96 overflow-auto"
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

## fe_test/src/asesi.js

```js
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
    if (fd.isBlocked) fd.isBlocked = fd.isBlocked === "true"; // Handle checkbox value

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
    if (fd.isBlocked) fd.isBlocked = fd.isBlocked === "true"; // Handle checkbox value

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

```

## fe_test/src/auth.js

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

## fe_test/src/biaya.js

```js
// src/biaya.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupBiayaCRUD() {
  const biayaListResult = qs("#biayaListResult");
  const biayaCrudResult = qs("#biayaCrudResult");

  // --- List Biaya ---
  qs("#btnListBiaya").addEventListener("click", async () => {
    const res = await apiFetch("/biaya");
    biayaListResult.textContent = pretty(res);
  });

  // --- Create Biaya ---
  qs("#btnCreateBiaya").addEventListener("click", async () => {
    const fd = getFormData("#formBiaya");
    delete fd.id; // ID is auto-generated
    fd.schemeId = parseInt(fd.schemeId, 10);
    fd.nominal = parseInt(fd.nominal, 10);

    const res = await apiFetch("/biaya", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    biayaCrudResult.textContent = pretty(res);
  });

  // --- Update Biaya ---
  qs("#btnUpdateBiaya").addEventListener("click", async () => {
    const fd = getFormData("#formBiaya");
    if (!fd.id) {
      alert("Provide Biaya ID to update.");
      return;
    }
    const id = fd.id;
    delete fd.id;
    fd.schemeId = parseInt(fd.schemeId, 10);
    fd.nominal = parseInt(fd.nominal, 10);

    const res = await apiFetch(`/biaya/${id}`, {
      method: "PUT",
      body: JSON.stringify(fd),
    });
    biayaCrudResult.textContent = pretty(res);
  });

  // --- Delete Biaya ---
  qs("#btnDeleteBiaya").addEventListener("click", async () => {
    const fd = getFormData("#formBiaya");
    if (!fd.id) {
      alert("Provide Biaya ID to delete.");
      return;
    }
    const id = fd.id;
    const res = await apiFetch(`/biaya/${id}`, {
      method: "DELETE",
    });
    biayaCrudResult.textContent = pretty(res);
  });

  // --- Fill Dummy Data ---
  qs("#fillBiayaDummy").addEventListener("click", () => {
    const f = qs("#formBiaya");
    f.id.value = "";
    f.schemeId.value = 1; // Assuming Scheme ID 1 exists
    f.jenisBiaya.value =
      "Pendaftaran " + Math.random().toString(36).substring(7).toUpperCase();
    f.nominal.value = 250000;
    f.standar.value = "BNSP";
  });
}

export function setupBiaya() {
  setupBiayaCRUD();
}

```

## fe_test/src/euk.js

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

## fe_test/src/juk.js

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

## fe_test/src/lsp.js

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

## fe_test/src/main.js

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
import { setupAsesi } from "./asesi.js";
import { setupUnit } from "./unit.js";
import { setupPuk } from "./puk.js";
import { setupBiaya } from "./biaya.js"; // NEW
import { setupRekening } from "./rekening.js"; // NEW
import { setupSms } from "./sms.js"; // NEW
import { setupVerifikasi } from "./verifikasi.js"; // NEW

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
  setupAsesi();
  setupUnit();
  setupPuk();
  setupBiaya(); // NEW
  setupRekening(); // NEW
  setupSms(); // NEW
  setupVerifikasi(); // NEW
});

```

## fe_test/src/puk.js

```js
// src/puk.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupPukCRUD() {
  const pukListResult = qs("#pukListResult");
  const pukCrudResult = qs("#pukCrudResult");

  // --- Get Peserta by Jadwal ID ---
  qs("#btnGetPeserta").addEventListener("click", async () => {
    const jadwalId = qs("#pukJadwalId").value.trim();
    if (!jadwalId) {
      alert("Please provide a Jadwal ID.");
      return;
    }
    const res = await apiFetch(`/puks/jadwal/${jadwalId}/peserta`);
    pukListResult.textContent = pretty(res);
  });

  // --- Add Peserta ---
  qs("#btnAddPeserta").addEventListener("click", async () => {
    const fd = getFormData("#formPuk");
    if (!fd.jadwalId || !fd.asesiId) {
      alert("Please provide Jadwal ID and Asesi ID.");
      return;
    }
    const res = await apiFetch(`/puks/jadwal/${fd.jadwalId}/peserta`, {
      method: "POST",
      body: JSON.stringify({ asesiId: parseInt(fd.asesiId, 10) }),
    });
    pukCrudResult.textContent = pretty(res);
  });

  // --- Remove Peserta ---
  qs("#btnRemovePeserta").addEventListener("click", async () => {
    const fd = getFormData("#formPuk");
    if (!fd.jadwalId || !fd.pesertaId) {
      alert("Please provide Jadwal ID and Peserta ID.");
      return;
    }
    const res = await apiFetch(
      `/puks/jadwal/${fd.jadwalId}/peserta/${fd.pesertaId}`,
      {
        method: "DELETE",
      }
    );
    pukCrudResult.textContent = pretty(res);
  });

  // --- Fill Dummy ---
  qs("#fillPukDummy").addEventListener("click", () => {
    const f = qs("#formPuk");
    f.jadwalId.value = 1; // example JUK id
    f.asesiId.value = 2; // example asesi id
    f.pesertaId.value = "";
  });
}

export function setupPuk() {
  setupPukCRUD();
}

```

## fe_test/src/rekening.js

```js
// src/rekening.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupRekeningCRUD() {
  const rekeningListResult = qs("#rekeningListResult");
  const rekeningCrudResult = qs("#rekeningCrudResult");

  // --- List Rekening ---
  qs("#btnListRekening").addEventListener("click", async () => {
    const res = await apiFetch("/rekening");
    rekeningListResult.textContent = pretty(res);
  });

  // --- Create Rekening ---
  qs("#btnCreateRekening").addEventListener("click", async () => {
    const fd = getFormData("#formRekening");
    delete fd.id; // ID is auto-generated

    const res = await apiFetch("/rekening", {
      method: "POST",
      body: JSON.stringify(fd),
    });
    rekeningCrudResult.textContent = pretty(res);
  });

  // --- Update Rekening ---
  qs("#btnUpdateRekening").addEventListener("click", async () => {
    const fd = getFormData("#formRekening");
    if (!fd.id) {
      alert("Provide Rekening ID to update.");
      return;
    }
    const id = fd.id;
    delete fd.id;

    const res = await apiFetch(`/rekening/${id}`, {
      method: "PUT",
      body: JSON.stringify(fd),
    });
    rekeningCrudResult.textContent = pretty(res);
  });

  // --- Delete Rekening ---
  qs("#btnDeleteRekening").addEventListener("click", async () => {
    const fd = getFormData("#formRekening");
    if (!fd.id) {
      alert("Provide Rekening ID to delete.");
      return;
    }
    const id = fd.id;
    const res = await apiFetch(`/rekening/${id}`, {
      method: "DELETE",
    });
    rekeningCrudResult.textContent = pretty(res);
  });

  // --- Fill Dummy Data ---
  qs("#fillRekeningDummy").addEventListener("click", () => {
    const f = qs("#formRekening");
    f.id.value = "";
    f.bank.value = "Bank Mandiri";
    f.nomor.value = "1234567890" + Math.floor(Math.random() * 100);
    f.atasNama.value = "PT LSP Jaya";
    f.namaLsp.value =
      "LSP " + Math.random().toString(36).substring(7).toUpperCase();
  });
}

export function setupRekening() {
  setupRekeningCRUD();
}

```

## fe_test/src/scheme.js

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

## fe_test/src/sms.js

```js
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

```

## fe_test/src/tuk.js

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

## fe_test/src/unit.js

```js
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

```

## fe_test/src/user.js

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

## fe_test/src/utils.js

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
  const form = qs(formSelector);
  const formData = new FormData(form);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Handle checkboxes specifically, as FormData does not include unchecked ones
  qsa(`${formSelector} input[type="checkbox"]`).forEach((checkbox) => {
    if (!data.hasOwnProperty(checkbox.name)) {
      data[checkbox.name] = false; // Set to false if not checked
    } else {
      data[checkbox.name] = true; // Set to true if checked
    }
  });

  // Convert numbers
  for (const key in data) {
    if (form.querySelector(`[name="${key}"][type="number"]`)) {
      data[key] = data[key] === "" ? null : parseFloat(data[key]);
    }
  }

  return data;
}

```

## fe_test/src/verifikasi.js

```js
// src/verifikasi.js

import { qs, apiFetch, pretty, getFormData } from "./utils.js";

function setupVerifikasiAsesi() {
  const verifikasiResult = qs("#verifikasiResult");

  // --- Get Asesi Verification Data ---
  qs("#btnGetVerifikasiData").addEventListener("click", async () => {
    const asesiId = qs("#asesiIdVerifikasi").value.trim();
    if (!asesiId) {
      alert("Please provide an Asesi ID to fetch verification data.");
      return;
    }
    const res = await apiFetch(`/verifikasi/data/${asesiId}`);
    verifikasiResult.textContent = pretty(res);
  });

  // --- Fill Dummy Asesi ID ---
  qs("#fillVerifikasiDummy").addEventListener("click", () => {
    qs("#asesiIdVerifikasi").value = 1; // Assuming Asesi ID 1 exists
  });
}

export function setupVerifikasi() {
  setupVerifikasiAsesi();
}

```
