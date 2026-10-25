"use client";

import AdBanner from "./AdBanner";
import { useConsent } from "../lib/consentStore";

const CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

interface AdSlotProps {
  slot?: string;
}

/**
 * Espacio publicitario. Solo se muestra si hay ID de AdSense, el espacio está configurado
 * y el visitante aceptó las cookies. Si falta algo, no deja ninguna caja vacía.
 */
export default function AdSlot({ slot }: AdSlotProps) {
  const consent = useConsent();
  if (!CLIENT_ID || !slot || consent !== "accepted") return null;

  return (
    <aside aria-label="Publicidad" className="my-8">
      <p className="mb-1 text-center text-xs uppercase tracking-widest text-(--mid)">Publicidad</p>
      <AdBanner dataAdSlot={slot} dataAdFormat="auto" />
    </aside>
  );
}
