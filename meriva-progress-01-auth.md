# Meriva — Progress Note #01

**Tanggal:** 10 Oktober 2026
**Fase:** Fondasi + Auth selesai
**Proyek:** Digital Invitation Platform untuk WO/EO

---

## Stack

| Layer | Teknologi |
|---|---|
| Frontend | Next.js + TypeScript, Tailwind, shadcn/ui (`apps/web`) |
| Backend | NestJS, REST (`apps/api`) |
| Database | PostgreSQL lokal (tanpa Docker), Prisma 7 |
| Monorepo | pnpm |
| Dev env | Windows / PowerShell |

## Sudah selesai

- [x] `apps/web` berjalan di `localhost:3000`, shadcn/ui terpasang
- [x] `apps/api` berjalan di `localhost:4000`
  - CORS ke `localhost:3000`
  - `ValidationPipe` global
  - Terhubung ke Nest Observer
- [x] Database `meriva` + migrasi Prisma: `Organization`, `User`, `Event`, `Guest`, `Rsvp`
  - `organizationId` di tabel utama (fondasi multi-tenant)
  - `Guest.token` unik
  - `Rsvp` unik per guest
- [x] `PrismaService` / `PrismaModule` global di `src/prisma`, client di `src/generated/prisma`
- [x] Modul Auth
  - `POST /auth/register` (membuat Organization + User owner)
  - `POST /auth/login`
  - `GET /auth/me`
  - JWT via `@nestjs/jwt` (tanpa Passport), `bcryptjs`
  - `AuthGuard` dengan payload `{ sub, orgId, role }`
  - Email duplikat → 409
- [x] Semua tes auth lolos dan sudah di-commit

## Catatan teknis

- API memakai ESM (`"type": "module"`), semua import relatif berakhiran `.js`
- Perintah Prisma lewat `pnpm exec prisma ...` (jangan `dlx`, karena akan mengambil versi RC)
- Prisma 7 dipin

## Riwayat commit

1. Init web (Next.js + shadcn/ui)
2. `init api`
3. `add prisma schema`
4. `add auth module`

## Berikutnya

1. **Modul Event (CRUD)** — filter tenant memakai `orgId` dari token
2. **Guest management** — termasuk import CSV
3. **Halaman invitation publik** `/i/[token]`
4. **RSVP**

Setelahnya (belum dijadwalkan): QR check-in, guest book, analytics, WhatsApp.
