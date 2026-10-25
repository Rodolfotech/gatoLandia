"use client";

import GoogleAnalytics from "./GoogleAnalytics";
import MicrosoftClarity from "./MicrosoftClarity";
import { useConsent } from "../lib/consentStore";

/** Solo carga medición y publicidad después de que el visitante acepta las cookies. */
export default function TrackingScripts() {
  const consent = useConsent();
  if (consent !== "accepted") return null;

  return (
    <>
      <GoogleAnalytics />
      <MicrosoftClarity />
    </>
  );
}
