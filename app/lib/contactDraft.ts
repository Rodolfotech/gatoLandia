import { useSyncExternalStore } from "react";

// Borrador del formulario de contacto: sobrevive a recargas y a cambios de página en este navegador.
// No guarda la casilla de privacidad: el consentimiento se marca cada vez.
export interface ContactDraft {
  nombre: string;
  correo: string;
  mensaje: string;
}

const KEY = "almagatuna-contacto-borrador";
const EMPTY: ContactDraft = { nombre: "", correo: "", mensaje: "" };
const listeners = new Set<() => void>();

let lastRaw: string | null = null;
let lastDraft: ContactDraft = EMPTY;

function read(): ContactDraft {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw === lastRaw) return lastDraft;
    lastRaw = raw;
    lastDraft = raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY;
    return lastDraft;
  } catch {
    return EMPTY;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function notify() {
  listeners.forEach((listener) => listener());
}

export function saveContactDraft(draft: ContactDraft) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(draft));
  } catch {
    // Sin almacenamiento disponible, el texto se conserva solo mientras la página siga abierta.
  }
  notify();
}

export function clearContactDraft() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    // Nada que borrar si el almacenamiento no está disponible.
  }
  notify();
}

export function useContactDraft(): ContactDraft {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}
