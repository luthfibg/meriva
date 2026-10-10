# Meriva — Progress Note #03

**Tanggal:** 10 Oktober 2026
**Fase:** Modul Event (CRUD) + otorisasi berbasis role
**Status:** Kode siap diterapkan, belum dijalankan/diuji di mesin lokal

---

## Konfirmasi progress #02

- Skema baru dan perubahan auth sudah diterapkan di lokal, tes manual lolos
- Penggabungan `event_guests` + `invitations` menjadi satu model `Invitation` **disetujui**

## Yang dikerjakan

### 1. Modul Events (`src/events/`)

| Method | Endpoint | Role yang boleh |
|---|---|---|
| POST | `/events` | OWNER, ADMIN, EVENT_MANAGER |
| GET | `/events` | semua anggota organisasi |
| GET | `/events/:id` | semua anggota organisasi |
| PATCH | `/events/:id` | OWNER, ADMIN, EVENT_MANAGER |
| DELETE | `/events/:id` | OWNER, ADMIN |

Semua query menyertakan `organizationId` dari token. Event milik organisasi lain dijawab **404**, bukan 403.

**Field Event:** `title`, `slug`, `type`, `status`, `startsAt`, `endsAt`, `timezone`, `venue`, `description`.

**Aturan:**
- `slug` opsional saat membuat. Jika kosong, dibuat dari `title` dan dijamin unik per organisasi (sufiks acak bila bentrok). Slug manual yang bentrok → 409. Slug tidak bisa diubah setelah dibuat.
- `endsAt` harus setelah `startsAt` (juga dicek saat PATCH terhadap nilai yang sudah ada) → 400.
- `timezone` harus zona IANA yang valid (default `Asia/Jakarta`) → 400.
- PATCH: `null` pada `endsAt`, `venue`, `description` menghapus isinya; `undefined` berarti tidak diubah.
- DELETE: ditolak dengan **409** bila acara sudah punya undangan. Gunakan PATCH `status: CANCELLED`.
- `GET /events`: filter `status`, `type`, `search` (judul), pagination `page` (default 1) dan `limit` (default 20, maks 100). Respons `{ data, meta: { page, limit, total, totalPages } }`.

### 2. Otorisasi role

- `RolesGuard` + dekorator `@Roles(...)`, dipakai bersama `AuthGuard`.
- Endpoint tanpa `@Roles` terbuka untuk semua anggota organisasi.

### 3. Perubahan di file yang sudah ada

- **`auth.guard.ts`**: sekarang mengecek keanggotaan ke database di setiap request, dan `req.user.role` diambil dari database, bukan dari JWT. Anggota yang dikeluarkan atau diubah perannya langsung berlaku. Ini menutup risiko yang dicatat di #02. Konsekuensi: satu query tambahan per request.
- **`main.ts`**: `ValidationPipe` ditambah `transform: true` (dibutuhkan agar query `page` dan `limit` menjadi number).
- **`app.module.ts`**: tambahkan `EventsModule` (lihat di bawah).

## Cara menerapkan

1. Salin folder `src/` dan `scripts/` ke `apps/api`, timpa `main.ts` dan `auth/auth.guard.ts`.
2. Di `src/app.module.ts`:

```ts
import { EventsModule } from './events/events.module.js';
// ...
imports: [
  // ...
  PrismaModule,
  AuthModule,
  EventsModule,
],
```

3. Tidak ada perubahan skema, jadi tidak perlu migrasi.
4. `pnpm build`, lalu jalankan API (`pnpm start:dev`).
5. Tes otomatis lewat PowerShell: `.\scripts\test-events.ps1` (semua baris harus `PASS`).

## Tes manual untuk role (tidak tercakup skrip)

Belum ada endpoint untuk mengelola anggota, jadi ubah role lewat Prisma Studio:

1. `pnpm exec prisma studio` → tabel `OrganizationMember` → ubah `role` user tes menjadi `VIEWER`
2. Dengan **token lama** yang sama: `GET /events` → 200, `POST /events` → **403**
3. Ubah role menjadi `EVENT_MANAGER`: `POST /events` → 201, `DELETE /events/:id` → **403**
4. Hapus baris `OrganizationMember` tersebut: request apa pun dengan token lama → **401**

Satu skenario belum bisa dites sampai modul Guest ada: DELETE event yang sudah punya undangan → 409.

## Catatan

- Draf CRUD Event sebelumnya (memakai `name`) sudah digantikan sepenuhnya oleh versi ini.
- Status `SUSPENDED` pada Organization belum dicek di guard (akses tetap jalan). Usulan: dikerjakan bersama paket/billing.
- Pembuatan anggota organisasi (undang user, atur role) belum ada; saat ini hanya OWNER lewat register.

## Berikutnya

1. Terapkan dan uji modul Event, commit
2. Guest + GuestGroup + Invitation (token dibuat dengan `randomBytes`), termasuk import CSV
3. Halaman publik `/i/[token]` dan RSVP
4. Check-in QR
