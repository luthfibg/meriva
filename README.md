# Meriva

Meriva adalah platform undangan digital untuk Wedding Organizer (WO) dan Event Organizer (EO). Sistem berfokus pada pengelolaan undangan dan kehadiran, bukan marketplace tiket.

## Alur Sistem

Create Event → Design Invitation → Manage Guest → Personalized Invitation → RSVP → Event Day Registration → QR Check-in → Attendance & Report

Setiap WO/EO menjadi satu `Organization`. Data utama dibatasi berdasarkan `organizationId`. Tamu menerima undangan personal melalui token unik di `/i/[token]`, dan setiap tamu memiliki satu RSVP.

Entitas utama: `Organization`, `User`, `Event`, `Guest`, dan `Rsvp`. Autentikasi menggunakan JWT dengan payload `{ sub, orgId, role }`; registrasi membuat organisasi dan pengguna owner.

## Teknologi

- Monorepo dengan pnpm
- Web: Next.js, TypeScript, Tailwind CSS, shadcn/ui (`apps/web`)
- API: NestJS REST dengan ESM (`apps/api`)
- Database: PostgreSQL dengan Prisma 7

## Status MVP

Setup web dan API, skema database, serta modul autentikasi sudah tersedia. Berikutnya: CRUD event, pengelolaan tamu termasuk impor CSV, halaman undangan publik, dan RSVP.

Rencana lanjutan mencakup Redis, Cloudflare R2, pemindaian QR melalui kamera atau perangkat USB/Bluetooth, dan integrasi WhatsApp. MVP ditujukan untuk web tanpa aplikasi native.

## Menjalankan Lokal

Prasyarat: Node.js, pnpm, dan PostgreSQL lokal. Buat database bernama `meriva`, lalu siapkan `apps/api/.env` dengan `DATABASE_URL`, `APPKEY`, dan `APPSECRET`.

```powershell
pnpm install
pnpm --filter api exec prisma migrate dev
```

Jalankan API dan web di terminal terpisah:

```powershell
pnpm --filter api start:dev
pnpm --filter web dev
```

Web tersedia di `http://localhost:3000` dan API di `http://localhost:4000`. Untuk menjalankan perintah Prisma lain, gunakan `pnpm --filter api exec prisma ...` (bukan `pnpm dlx`). API menggunakan ESM, jadi import relatif di TypeScript harus menyertakan ekstensi `.js`.