"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Avisa a Google Tag Manager cada vez que cambia la página sin recargar el navegador.
 * En GTM hay que crear un disparador de "Evento personalizado" con el nombre `pageview`.
 */
export default function GaPageView() {
  const pathname = usePathname();
  const firstPath = useRef(pathname);

  useEffect(() => {
    // La primera carga la registra GTM al cargarse: aquí solo van los cambios posteriores.
    if (pathname === firstPath.current) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page_path: pathname,
      page_location: window.location.href,
    });
  }, [pathname]);

  return null;
}
