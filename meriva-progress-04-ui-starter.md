# Meriva — Progress Note #04

**Tanggal:** 10 Oktober 2026
**Fase:** UI starter (`apps/web`)
**Status:** Kode siap diterapkan, belum dijalankan/diuji di mesin lokal

---

## Keputusan

Frontend dikerjakan **per irisan tipis bersama backend**, bukan menunggu seluruh backend selesai dan bukan membangun UI penuh sekarang. Dari brainstorm UI hanya diambil bagian kecil yang bisa langsung dipakai dengan API yang sudah ada.

## Yang dikerjakan

| Route | Isi | Sumber konsep brainstorm |
|---|---|---|
| `/` | Redirect ke `/events` | — |
| `/login` | Masuk dan daftar (satu halaman, dua mode) | — |
| `/events` | Beranda organizer: hero, tombol Buat acara, kartu acara, dialog buat acara | Event Atlas |
| `/events/[id]` | Header acara, tab horizontal, detail, checklist persiapan, jumlah undangan | Event Cockpit, Event Readiness |
| `/i/[token]` | Placeholder statis | Guest Experience (menyusul) |

**Fondasi:**
- Tema: palet Midnight Navy, Warm Ivory, Sage Green, Soft Sand diterapkan di `globals.css`. Font: Plus Jakarta Sans (heading) dan Inter (isi). Mode gelap belum disentuh.
- `lib/auth.ts`: satu-satunya tempat yang menyentuh token (`localStorage`). Pindah ke cookie `httpOnly` nanti cukup mengubah file ini.
- `lib/api.ts`: pembungkus `fetch` dengan header Bearer, `ApiError`, dan pembersihan sesi saat 401. URL dari `NEXT_PUBLIC_API_URL` (default `http://localhost:4000`).
- Layout dashboard menjaga akses: tanpa token diarahkan ke `/login`; navigasi berupa top bar, tanpa sidebar.

## Keputusan desain

- `/events` dipakai sebagai Event Atlas (bukan `/workspace`), mengikuti scaffold yang sudah ada.
- Halaman undangan publik memakai `/i/[token]`, **bukan** `/i/[slug]` seperti di brainstorm, karena backend mengidentifikasi undangan lewat token.
- Tab Undangan, Tamu, RSVP, Check-in, Laporan tampil tetapi nonaktif sampai modul backend-nya ada.
- Waktu mulai di dialog diasumsikan WIB (+07:00), sesuai default `Asia/Jakarta`. Pemilih zona waktu menyusul.
- Checklist persiapan hanya memuat tiga butir yang bisa dihitung dari data saat ini (lokasi terisi, acara dipublikasikan, ada undangan).
- Tombol Buat acara tampil untuk semua role; jika role tidak berhak, pesan 403 dari backend ditampilkan di dialog.

## Sengaja ditunda dari brainstorm

Command bar (`Ctrl + K`), Guest Explorer dan panel detail, Activity Stream, Check-in Console, Platform Control Room, gambar sampul dan progres pada kartu acara, statistik RSVP (butuh API Guest dan RSVP), pengubah status acara dari UI, tema gelap.

## Cara menerapkan

1. Salin isi folder `web-patch` ke `apps/web` (struktur sama persis, pilih timpa):

```powershell
Copy-Item -Recurse -Force .\web-patch\* <path-ke>\apps\web\
```

   File kosong di scaffold (`login/page.tsx`, `events/page.tsx`, `i/[token]/page.tsx`, `lib/api.ts`) ikut tertimpa. Catatan: halaman Next.js yang kosong akan membuat `next build` gagal.

2. Tidak ada dependensi baru.
3. Pastikan API aktif di `localhost:4000`, lalu `pnpm dev` di `apps/web`.
4. Jalankan `pnpm build` dan `pnpm lint` sekali untuk memastikan tidak ada galat.

## Tes manual

1. Buka `localhost:3000` → diarahkan ke `/login`
2. Daftar akun baru → masuk ke `/events` dengan keadaan kosong; nama organisasi muncul di top bar
3. Buat acara → kartu muncul di daftar dengan lencana tanggal dan status Draf
4. Klik kartu → `/events/[id]` menampilkan detail; tab selain Ringkasan nonaktif
5. Muat ulang halaman → tetap masuk (token tersimpan)
6. Klik Keluar → kembali ke `/login`; membuka `/events` langsung → diarahkan ke login
7. Di Prisma Studio hapus baris `OrganizationMember` akun tes → muat ulang → kembali ke login (401)

## Catatan

- `AGENTS.md` di `apps/web` memperingatkan bahwa Next.js 16.4 memiliki perubahan API dan meminta membaca `node_modules/next/dist/docs/`. Dokumen itu tidak dapat saya akses. Kode memakai pola konservatif (halaman klien, `Suspense` di sekitar route dinamis karena `cacheComponents` aktif). Jika `pnpm build` memunculkan galat, kirimkan pesannya.
- CORS backend saat ini hanya mengizinkan `http://localhost:3000`.

## Berikutnya

1. Terapkan dan uji UI starter, commit
2. Backend Guest + GuestGroup + Invitation (import CSV), lalu halaman Tamu
3. Backend `/i/[token]` dan RSVP, lalu halaman undangan publik
4. Backend check-in, lalu Check-in Console
