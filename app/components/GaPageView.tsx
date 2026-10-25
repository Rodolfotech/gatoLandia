"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Envía una visita a Google Analytics cada vez que cambia la página sin recargar el navegador. */
export default function GaPageView() {
  const pathname = usePathname();
  const firstPath = useRef(pathname);

  useEffect(() => {
    // La primera carga ya la registra la configuración de gtag: aquí solo van los cambios posteriores.
    if (pathname === firstPath.current) return;
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
    });
  }, [pathname]);

  return null;
}
