import Link from "next/link";
import { useId } from "react";
import { EMERGENCY_HREF } from "../lib/routes";

/** Tarjeta de urgencia: aparece en los artículos y en la portada. */
export default function EmergencyCard() {
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      style={{ background: "#B42318", color: "#fff", borderRadius: 16, padding: "1.25rem" }}
    >
      <h2 id={titleId} style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700 }}>
        ¿Tu gato está mal ahora?
      </h2>
      <p style={{ margin: "0.5rem 0 1rem", fontSize: "0.875rem", lineHeight: 1.5 }}>
        Revisa las señales de urgencia y qué hacer mientras llegas al veterinario.
      </p>
      <Link
        href={EMERGENCY_HREF}
        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        style={{ display: "inline-flex", alignItems: "center", minHeight: 44, padding: "0 0.85rem", borderRadius: 999, background: "#fff", color: "#B42318", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}
      >
        Ver guía de emergencia
      </Link>
    </section>
  );
}
