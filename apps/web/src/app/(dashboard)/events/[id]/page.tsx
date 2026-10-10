import { Suspense } from "react";
import { EventCockpit } from "@/components/event-cockpit";

// Suspense dibutuhkan karena route dinamis + cacheComponents aktif.
export default function EventPage() {
  return (
    <Suspense fallback={<div className="h-40 animate-pulse rounded-2xl bg-muted" />}>
      <EventCockpit />
    </Suspense>
  );
}
