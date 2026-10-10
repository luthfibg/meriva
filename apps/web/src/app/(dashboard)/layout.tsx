"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { api } from "@/lib/api";
import { clearToken, useAuthStatus } from "@/lib/auth";
import type { Me } from "@/lib/types";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const status = useAuthStatus();
  const [me, setMe] = useState<Me | null>(null);

  // Belum login (atau sesi dibersihkan karena 401) -> ke halaman login
  useEffect(() => {
    if (status === "out") router.replace("/login");
  }, [status, router]);

  useEffect(() => {
    if (status !== "in") return;
    let cancelled = false;
    api<Me>("/auth/me")
      .then((data) => {
        if (!cancelled) setMe(data);
      })
      .catch(() => {
        // 401 sudah ditangani di api(); error lain tidak menghalangi halaman
      });
    return () => {
      cancelled = true;
    };
  }, [status]);

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader
        orgName={me?.organization.name}
        userName={me?.name}
        onLogout={() => clearToken()}
      />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        {children}
      </main>
    </div>
  );
}
