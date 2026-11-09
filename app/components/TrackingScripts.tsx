"use client";

import GoogleTagManager from "./GoogleTagManager";
import GaPageView from "./GaPageView";
import MicrosoftClarity from "./MicrosoftClarity";
import { useConsent } from "../lib/consentStore";

/** Solo carga medición y publicidad después de que el visitante acepta las cookies. Google Analytics va dentro de GTM. */
export default function TrackingScripts() {
  const consent = useConsent();
  if (consent !== "accepted") return null;

  return (
    <>
      <GoogleTagManager />
      <GaPageView />
      <MicrosoftClarity />
    </>
  );
}
