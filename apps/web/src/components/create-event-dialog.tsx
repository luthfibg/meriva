"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ApiError, api } from "@/lib/api";
import { EVENT_TYPE_LABEL, wibLocalToIso } from "@/lib/format";
import type { Event, EventType } from "@/lib/types";

const TYPES = Object.keys(EVENT_TYPE_LABEL) as EventType[];

const selectClass =
  "h-9 w-full rounded-4xl border border-input bg-input/30 px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50";

export function CreateEventDialog({
  open,
  onOpenChange,
  onCreated,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated: (event: Event) => void;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const venue = String(fd.get("venue") ?? "").trim();
    setError(null);
    setBusy(true);
    try {
      const created = await api<Event>("/events", {
        method: "POST",
        json: {
          title: fd.get("title"),
          type: fd.get("type"),
          startsAt: wibLocalToIso(String(fd.get("startsAt"))),
          venue: venue || undefined,
        },
      });
      onCreated(created);
      onOpenChange(false);
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Tidak dapat terhubung ke server"
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={(next) => onOpenChange(next)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Buat acara</DialogTitle>
          <DialogDescription>
            Data lain seperti tamu dan undangan bisa dilengkapi setelahnya.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Nama acara</Label>
            <Input id="title" name="title" required minLength={2} maxLength={150} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Jenis acara</Label>
            <select id="type" name="type" defaultValue="WEDDING" className={selectClass}>
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {EVENT_TYPE_LABEL[t]}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="startsAt">Waktu mulai (WIB)</Label>
            <Input id="startsAt" name="startsAt" type="datetime-local" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="venue">Lokasi</Label>
            <Input id="venue" name="venue" maxLength={255} />
          </div>

          {error && (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Batal
            </Button>
            <Button type="submit" disabled={busy}>
              {busy ? "Menyimpan…" : "Buat acara"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
