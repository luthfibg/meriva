import { EVENT_STATUS_LABEL } from "@/lib/format";
import type { EventStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const STYLES: Record<EventStatus, string> = {
  DRAFT: "bg-secondary text-secondary-foreground",
  PUBLISHED: "bg-success/15 text-success",
  COMPLETED: "bg-primary/10 text-primary",
  CANCELLED: "bg-destructive/10 text-destructive",
};

export function StatusBadge({
  status,
  className,
}: {
  status: EventStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        STYLES[status],
        className
      )}
    >
      {EVENT_STATUS_LABEL[status]}
    </span>
  );
}
