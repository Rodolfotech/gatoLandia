"use client";

import { setConsent } from "../lib/consentStore";

/** Vuelve a mostrar el aviso de cookies para cambiar la elección. */
export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => setConsent(null)}
      className="min-h-11 rounded-lg border border-black/20 bg-white px-5 text-sm font-semibold text-(--charcoal) hover:border-(--amber) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
    >
      Cambiar mis preferencias de cookies
    </button>
  );
}
