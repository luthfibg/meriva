"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { StatusBadge } from "@/components/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiError, api } from "@/lib/api";
import { EVENT_TYPE_LABEL, formatDate, formatDateTime } from "@/lib/format";
import type { Event } from "@/lib/types";
import { cn } from "@/lib/utils";

// Hanya "Ringkasan" yang aktif di starter; sisanya menyusul bersama modul backend-nya.
const TABS = ["Ringkasan", "Undangan", "Tamu", "RSVP", "Check-in", "Laporan"];

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-2 py-2 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="min-w-0 break-words">{value}</dd>
    </div>
  );
}

function CheckItem({ done, label }: { done: boolean; label: string }) {
  return (
    <li className="flex items-center gap-3 text-sm">
      <span
        aria-hidden
        className={cn(
          "grid size-5 shrink-0 place-items-center rounded-full text-xs",
          done
            ? "bg-success text-success-foreground"
            : "bg-secondary text-transparent ring-1 ring-border"
        )}
      >
        ✓
      </span>
      <span className={done ? "" : "text-muted-foreground"}>{label}</span>
      <span className="sr-only">{done ? "(selesai)" : "(belum)"}</span>
    </li>
  );
}

export function EventCockpit() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    api<Event>(`/events/${id}`)
      .then((data) => {
        if (!cancelled) setEvent(data);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(
          err instanceof ApiError
            ? err.status === 404
              ? "Acara tidak ditemukan"
              : err.message
            : "Gagal memuat acara"
        );
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (error) {
    return (
      <div className="space-y-4">
        <Link href="/events" className="text-sm text-muted-foreground hover:text-foreground">
          ← Semua acara
        </Link>
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      </div>
    );
  }

  if (!event) {
    return <div className="h-40 animate-pulse rounded-2xl bg-muted" />;
  }

  const invitations = event._count?.invitations ?? 0;

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Link href="/events" className="text-sm text-muted-foreground hover:text-foreground">
          ← Semua acara
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-heading text-3xl font-semibold tracking-tight">
            {event.title}
          </h1>
          <StatusBadge status={event.status} />
        </div>
        <p className="text-muted-foreground">
          {formatDate(event.startsAt, event.timezone)}
          {event.venue ? ` · ${event.venue}` : ""} · {EVENT_TYPE_LABEL[event.type]}
        </p>
      </div>

      <nav aria-label="Bagian acara" className="-mx-4 overflow-x-auto border-b px-4 sm:mx-0 sm:px-0">
        <ul className="flex min-w-max gap-6">
          {TABS.map((tab, i) => (
            <li key={tab}>
              <button
                type="button"
                disabled={i !== 0}
                aria-current={i === 0 ? "page" : undefined}
                title={i === 0 ? undefined : "Segera hadir"}
                className={cn(
                  "-mb-px border-b-2 pb-3 text-sm font-medium transition-colors",
                  i === 0
                    ? "border-primary text-foreground"
                    : "cursor-not-allowed border-transparent text-muted-foreground/60"
                )}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Detail acara</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="divide-y">
              <Row label="Mulai" value={formatDateTime(event.startsAt, event.timezone)} />
              <Row
                label="Selesai"
                value={event.endsAt ? formatDateTime(event.endsAt, event.timezone) : "-"}
              />
              <Row label="Zona waktu" value={event.timezone} />
              <Row label="Lokasi" value={event.venue ?? "-"} />
              <Row label="Deskripsi" value={event.description ?? "-"} />
            </dl>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Persiapan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <CheckItem done={!!event.venue} label="Lokasi acara terisi" />
                <CheckItem
                  done={event.status !== "DRAFT"}
                  label="Acara dipublikasikan"
                />
                <CheckItem done={invitations > 0} label="Tamu sudah diundang" />
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <p className="font-heading text-4xl font-semibold">{invitations}</p>
              <p className="text-sm text-muted-foreground">Undangan dibuat</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
