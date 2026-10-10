"use client";

import { useEffect, useState } from "react";
import { CreateEventDialog } from "@/components/create-event-dialog";
import { EventCard } from "@/components/event-card";
import { Button } from "@/components/ui/button";
import { ApiError, api } from "@/lib/api";
import type { Event, Paginated } from "@/lib/types";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    api<Paginated<Event>>("/events?limit=50")
      .then((res) => {
        if (cancelled) return;
        setEvents(res.data);
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof ApiError ? err.message : "Gagal memuat acara");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [reloadKey]);

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground">
          RUANG KERJA ANDA
        </p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Setiap momen, terorganisir.
        </h1>
        <p className="max-w-xl text-muted-foreground">
          Selamat datang kembali. Mari lanjutkan persiapan acara Anda.
        </p>
        <Button size="lg" onClick={() => setDialogOpen(true)}>
          Buat acara
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-xl font-semibold">Acara Anda</h2>

        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-32 animate-pulse rounded-2xl bg-muted" />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="space-y-3 rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setLoading(true);
                setReloadKey((k) => k + 1);
              }}
            >
              Coba lagi
            </Button>
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <div className="rounded-2xl bg-card p-8 text-center ring-1 ring-foreground/10">
            <p className="font-heading font-medium">Belum ada acara</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Buat acara pertama Anda untuk mulai mengundang tamu.
            </p>
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>

      <CreateEventDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onCreated={(created) => setEvents((prev) => [created, ...prev])}
      />
    </div>
  );
}