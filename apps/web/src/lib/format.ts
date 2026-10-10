import type { EventStatus, EventType } from "./types";

export const EVENT_TYPE_LABEL: Record<EventType, string> = {
  WEDDING: "Pernikahan",
  BIRTHDAY: "Ulang tahun",
  CORPORATE: "Korporat",
  GATHERING: "Gathering",
  OTHER: "Lainnya",
};

export const EVENT_STATUS_LABEL: Record<EventStatus, string> = {
  DRAFT: "Draf",
  PUBLISHED: "Aktif",
  COMPLETED: "Selesai",
  CANCELLED: "Dibatalkan",
};

export function formatDate(iso: string, timeZone: string) {
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "long", timeZone }).format(
    new Date(iso)
  );
}

export function formatDateTime(iso: string, timeZone: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone,
  }).format(new Date(iso));
}

// Untuk lencana tanggal pada kartu: { day: "08", month: "NOV" }
export function dateParts(iso: string, timeZone: string) {
  const parts = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    timeZone,
  }).formatToParts(new Date(iso));
  const pick = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return { day: pick("day"), month: pick("month").toUpperCase() };
}

// Input datetime-local ("2026-12-12T10:00") -> ISO dengan offset WIB.
// Starter mengasumsikan zona waktu acara Asia/Jakarta (default backend).
export function wibLocalToIso(local: string) {
  return `${local.length === 16 ? `${local}:00` : local}+07:00`;
}
