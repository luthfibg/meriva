import { useSyncExternalStore } from "react";

// Satu-satunya tempat yang menyentuh penyimpanan token.
// Starter memakai localStorage; untuk produksi, ganti isi file ini
// (mis. cookie httpOnly) tanpa mengubah pemanggilnya.

const TOKEN_KEY = "meriva.token";
const AUTH_EVENT = "meriva:auth";

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

function notify() {
  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function setToken(token: string) {
  try {
    window.localStorage.setItem(TOKEN_KEY, token);
  } catch {
    // penyimpanan tidak tersedia (mis. mode privat tertentu)
  }
  notify();
}

export function clearToken() {
  try {
    window.localStorage.removeItem(TOKEN_KEY);
  } catch {
    // diabaikan
  }
  notify();
}

function subscribe(callback: () => void) {
  window.addEventListener(AUTH_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(AUTH_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

// "unknown" dipakai saat render di server / sebelum hidrasi selesai,
// supaya redirect ke login tidak terpicu secara keliru.
export type AuthStatus = "unknown" | "in" | "out";

export function useAuthStatus(): AuthStatus {
  return useSyncExternalStore<AuthStatus>(
    subscribe,
    () => (getToken() ? "in" : "out"),
    () => "unknown"
  );
}
