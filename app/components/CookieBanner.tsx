"use client";

import Link from "next/link";
import { setConsent, useConsent } from "../lib/consentStore";

/** Aviso de cookies: «Aceptar» y «Rechazar» tienen el mismo peso visual. */
export default function CookieBanner() {
  const consent = useConsent();
  if (consent !== "none") return null;

  const button =
    "min-h-11 rounded-lg px-5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)";

  return (
    <section
      aria-labelledby="aviso-cookies"
      className="fixed inset-x-0 bottom-0 z-[500] border-t border-black/10 bg-white p-4 shadow-2xl md:p-5"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="aviso-cookies" className="text-base font-semibold text-(--charcoal)">
            Cookies y publicidad
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-(--mid)">
            Usamos cookies para medir las visitas y mostrar anuncios de Google. Solo las activamos si las aceptas. Puedes
            cambiar tu decisión cuando quieras en{" "}
            <Link href="/privacidad" className="underline underline-offset-4">
              la política de privacidad
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className={`${button} border border-black/20 bg-white text-(--charcoal) hover:border-(--amber)`}
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className={`${button} bg-(--amber-dark) text-white hover:bg-[#8a5222]`}
          >
            Aceptar
          </button>
        </div>
      </div>
    </section>
  );
}
