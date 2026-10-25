import { useSyncExternalStore } from "react";

// "pending": aún no se sabe (antes de montar en el navegador). "none": nunca eligió.
export type Consent = "pending" | "none" | "accepted" | "rejected";

const KEY = "almagatuna-cookies";
const listeners = new Set<() => void>();

function read(): Consent {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === "accepted" || value === "rejected" ? value : "none";
  } catch {
    return "none";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

type AdsWindow = Window & { adsbygoogle?: unknown[] & { pauseAdRequests?: number } };

// Google AdSense no pide anuncios mientras pauseAdRequests es 1 (ni los automáticos).
function setAdsPaused(paused: boolean) {
  const w = window as AdsWindow;
  w.adsbygoogle = w.adsbygoogle || [];
  w.adsbygoogle.pauseAdRequests = paused ? 1 : 0;
}

export function setConsent(value: "accepted" | "rejected" | null) {
  setAdsPaused(value !== "accepted");
  try {
    if (value) window.localStorage.setItem(KEY, value);
    else window.localStorage.removeItem(KEY);
  } catch {
    // Sin almacenamiento (navegación privada, por ejemplo): la elección dura solo esta visita.
  }
  listeners.forEach((listener) => listener());
}

export function useConsent(): Consent {
  return useSyncExternalStore(subscribe, read, () => "pending");
}
