# Meriva — Progress Note #02

**Tanggal:** 10 Oktober 2026
**Fase:** Restrukturisasi database (sebelum Event CRUD)
**Status:** Kode siap diterapkan, belum dijalankan/diuji di mesin lokal

---

## Ringkasan

Skema awal (Organization, User, Event, Guest, Rsvp) terlalu sederhana untuk alur `Create Event → Manage Guest → Personalized Invitation → RSVP → QR Check-in`. Usulan struktur baru sudah dibandingkan dengan skema dan kode `apps/api` saat ini. Hasilnya **diadopsi sebagian**: hanya tabel yang dibutuhkan fase berikutnya (Event, Guest, halaman publik, RSVP, check-in) yang masuk sekarang.

## Skema baru (9 model)

`Organization`, `User`, `OrganizationMember`, `Event`, `Guest`, `GuestGroup`, `Invitation`, `Rsvp`, `CheckIn`

```
Organization ─< OrganizationMember >─ User
Organization ─< Event ─< GuestGroup
Organization ─< Guest ─< Invitation >─ Event
                          Invitation >─? GuestGroup
                          Invitation ─? Rsvp
                          Invitation ─< CheckIn >─? User (checkedInBy)
```

## Hasil review usulan

| Usulan | Keputusan | Alasan |
|---|---|---|
| `organization_members` (M:N user–org) | **Diadopsi** | `role` pindah dari `User` ke keanggotaan; satu user bisa di banyak organisasi |
| Role: OWNER, ADMIN, EVENT_MANAGER, CHECKIN_STAFF, VIEWER | **Diadopsi** | Menggantikan OWNER/STAFF. Default keanggotaan `VIEWER` (hak terkecil); register memberi `OWNER` |
| `guests` sebagai profil tamu | **Diadopsi** | Kolom spesifik acara (`eventId`, `category`, `maxPax`, `token`) pindah ke `Invitation` |
| `event_guests` + `invitations` (dua tabel) | **Digabung jadi `Invitation`** | Keduanya praktis 1:1 per tamu per acara. Dua tabel menambah join di setiap scan check-in dan RSVP. `@@unique([eventId, guestId])` menjaga satu undangan per tamu per acara; contoh "Budi di dua acara" tetap terpenuhi |
| `guest_groups` | **Diadopsi** | Ada di dokumen tapi tidak ada di diagram (ketidaksesuaian dokumen vs diagram) |
| `rsvps`, `check_ins` | **Diadopsi** | `CheckIn` ditambah `paxCount`, boleh lebih dari satu per undangan (rombongan datang bertahap), sesuai relasi 1:N di diagram |
| `events` | **Diperluas** | Tambah `type`, `status`, `endsAt`, `timezone` (default `Asia/Jakarta`). Nama kolom tetap `title` |
| `organizations` | **Diperluas** | Tambah `logoUrl`, `status` |
| `sessions` | **Tidak dipakai** | Auth memakai JWT stateless; tabel ini akan redundan |
| `invitation_templates`, `event_invitations` | **Ditunda** | Fase editor undangan. `/i/[token]` cukup memakai data `Event` dulu. Saran: ganti nama `event_invitations` agar tidak membingungkan dengan `invitations` |
| `event_media`, `event_sessions`, `event_settings`, `guestbook_entries`, `notification_logs`, `audit_logs`, `subscriptions`, `plans` | **Ditunda** | Belum dibutuhkan alur inti (media butuh R2, billing belum ada) |
| Penamaan tabel snake_case | **Tidak diadopsi** | Kosmetik; model Prisma tetap PascalCase |

## Keputusan tambahan dari review

- **Token undangan** tidak lagi `@default(cuid())`. cuid dirancang unik, bukan tak-tertebak. Token dibuat di service dengan `randomBytes(16).toString('base64url')` (dipakai untuk link `/i/[token]` dan QR).
- **onDelete**: `Event`, `Guest`, `Organization` → `Restrict` pada data yang menyimpan riwayat undangan/check-in. Acara yang sudah punya undangan tidak dihapus, tetapi diubah ke status `CANCELLED`.
- **Isolasi tenant**: `organizationId` tetap ada di tabel utama. Konsistensi tenant antar relasi (mis. Invitation memakai Event dan Guest dari organisasi yang sama) dijaga di service. Composite FK ditunda sebagai hardening.
- **`Guest.phone`** hanya diindeks, tidak unik (pasangan/keluarga bisa berbagi nomor). Dedup saat import CSV dilakukan di service.

## Perubahan kode

- `prisma/schema.prisma` — skema baru
- `src/auth/auth.service.ts` — register membuat User + Organization + keanggotaan OWNER secara atomik; login membaca keanggotaan; `me()` mengambil role dari keanggotaan pada org di token
- `src/auth/dto/login.dto.ts` — `organizationId` opsional
- `src/auth/auth.controller.ts` — `me` memakai `sub` dan `orgId`

Bentuk respons `/auth/register`, `/auth/login`, `/auth/me` tidak berubah. Payload JWT tetap `{ sub, orgId, role }`.

## Cara menerapkan (PowerShell, di `apps/api`)

```powershell
# 1. salin 4 file di atas ke project, lalu:
pnpm exec prisma validate
# 2. DEV SAJA — menghapus semua data lokal, karena User.organizationId dan role dihapus
pnpm exec prisma migrate reset
pnpm exec prisma migrate dev --name restructure_core_schema
pnpm exec prisma generate
# 3. cek tipe
pnpm build
```

Catatan: repo memiliki `prisma7.config.ts`, sedangkan Prisma mencari `prisma.config.ts`. Jika muncul error datasource url, tambahkan `--config prisma7.config.ts` pada perintah di atas atau ganti nama file.

## Tes manual yang diharapkan

1. `POST /auth/register` → 201, token berisi `role: OWNER`
2. `GET /auth/me` → role `OWNER`, objek `organization` terisi
3. `POST /auth/login` dengan `organizationId` palsu → **403**
4. Register organisasi kedua dengan email lain → token berbeda `orgId`

## Catatan / risiko yang terlihat

- `AuthGuard` hanya memverifikasi JWT (berlaku 7 hari). Anggota yang dikeluarkan masih bisa mengakses endpoint selain `/auth/me` sampai token kedaluwarsa. Usulan: guard mengecek keanggotaan per request, dikerjakan bersama role guard.
- Login multi-organisasi sementara memakai keanggotaan tertua. Endpoint ganti organisasi (switch org) belum ada.
- Draf Event CRUD sebelumnya perlu direvisi: field `name` → `title`, `slug` wajib (unik per organisasi), ditambah `type`, `status`, `endsAt`, `timezone`.

## Berikutnya

1. Terapkan dan uji skema ini, commit
2. Event CRUD (sesuai skema baru, hapus acara = `CANCELLED` bila sudah ada undangan)
3. Guest + GuestGroup + Invitation (termasuk import CSV)
4. Halaman publik `/i/[token]` dan RSVP
5. Check-in QR
