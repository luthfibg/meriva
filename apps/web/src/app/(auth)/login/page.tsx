"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wordmark } from "@/components/wordmark";
import { ApiError, api } from "@/lib/api";
import { setToken, useAuthStatus } from "@/lib/auth";
import type { AuthResponse } from "@/lib/types";
import { cn } from "@/lib/utils";

type Mode = "login" | "register";

export default function LoginPage() {
  const router = useRouter();
  const status = useAuthStatus();
  const [mode, setMode] = useState<Mode>("login");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "in") router.replace("/events");
  }, [status, router]);

  function switchMode(next: Mode) {
    setMode(next);
    setError(null);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setError(null);
    setBusy(true);
    try {
      const res =
        mode === "login"
          ? await api<AuthResponse>("/auth/login", {
              method: "POST",
              json: { email: fd.get("email"), password: fd.get("password") },
            })
          : await api<AuthResponse>("/auth/register", {
              method: "POST",
              json: {
                organizationName: fd.get("organizationName"),
                name: fd.get("name"),
                email: fd.get("email"),
                password: fd.get("password"),
              },
            });
      setToken(res.accessToken);
      router.replace("/events");
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Tidak dapat terhubung ke server"
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <Wordmark className="text-2xl" />
          <p className="text-sm text-muted-foreground">
            Setiap momen, terorganisir.
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="grid grid-cols-2 gap-1 rounded-full bg-secondary p-1 text-sm">
              {(["login", "register"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => switchMode(m)}
                  className={cn(
                    "rounded-full py-1.5 font-medium transition-colors",
                    mode === m
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {m === "login" ? "Masuk" : "Daftar"}
                </button>
              ))}
            </div>
            <CardTitle className="pt-2 text-lg">
              {mode === "login" ? "Selamat datang kembali" : "Buat akun organisasi"}
            </CardTitle>
            <CardDescription>
              {mode === "login"
                ? "Masuk untuk melanjutkan persiapan acara Anda."
                : "Daftarkan WO/EO Anda dan mulai kelola acara."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              {mode === "register" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="organizationName">Nama WO / EO</Label>
                    <Input id="organizationName" name="organizationName" required minLength={2} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Anda</Label>
                    <Input id="name" name="name" required minLength={2} autoComplete="name" />
                  </div>
                </>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Kata sandi</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={mode === "register" ? 8 : undefined}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                />
                {mode === "register" && (
                  <p className="text-xs text-muted-foreground">Minimal 8 karakter.</p>
                )}
              </div>

              {error && (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              )}

              <Button type="submit" className="w-full" size="lg" disabled={busy}>
                {busy ? "Memproses…" : mode === "login" ? "Masuk" : "Daftar"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
