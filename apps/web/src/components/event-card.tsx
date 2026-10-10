import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/status-badge";
import { EVENT_TYPE_LABEL, dateParts } from "@/lib/format";
import type { Event } from "@/lib/types";

export function EventCard({ event }: { event: Event }) {
  const { day, month } = dateParts(event.startsAt, event.timezone);
  const invitations = event._count?.invitations ?? 0;

  return (
    <Link
      href={`/events/${event.id}`}
      className="group block rounded-2xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
    >
      <Card className="h-full transition-shadow group-hover:shadow-md">
        <CardContent className="flex gap-4">
          <div className="flex w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-secondary py-2 text-secondary-foreground">
            <span className="text-[10px] font-semibold tracking-wider">{month}</span>
            <span className="font-heading text-2xl leading-none font-semibold">{day}</span>
          </div>
          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="truncate font-heading text-base font-semibold">
                {event.title}
              </h3>
              <StatusBadge status={event.status} />
            </div>
            <p className="truncate text-sm text-muted-foreground">
              {EVENT_TYPE_LABEL[event.type]}
              {event.venue ? ` · ${event.venue}` : ""}
            </p>
            <p className="pt-2 text-xs text-muted-foreground">
              {invitations} undangan
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
