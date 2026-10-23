import { useSyncExternalStore } from "react";

// Término de búsqueda compartido por la barra superior y el listado de artículos.
let query = "";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setSearchQuery(value: string) {
  if (value === query) return;
  query = value;
  listeners.forEach((listener) => listener());
}

export function useSearchQuery() {
  return useSyncExternalStore(subscribe, () => query, () => "");
}
