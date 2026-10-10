import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-heading text-lg font-semibold tracking-tight",
        className
      )}
    >
      <span
        aria-hidden
        className="grid size-7 place-items-center rounded-lg bg-primary text-sm text-primary-foreground"
      >
        m
      </span>
      meriva
    </span>
  );
}
