import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader({
  orgName,
  userName,
  onLogout,
}: {
  orgName?: string;
  userName?: string;
  onLogout: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/events" aria-label="Beranda Meriva">
          <Wordmark />
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <div className="hidden text-right leading-tight sm:block">
            <p className="font-medium">{orgName ?? "\u00A0"}</p>
            <p className="text-xs text-muted-foreground">{userName ?? "\u00A0"}</p>
          </div>
          <Button variant="outline" size="sm" onClick={onLogout}>
            Keluar
          </Button>
        </div>
      </div>
    </header>
  );
}
