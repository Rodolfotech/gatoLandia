"use client";

import { useEffect, useRef, useState } from "react";

interface ChipRowProps {
  label: string;
  children: React.ReactNode;
}

/**
 * Fila de chips. En escritorio baja a otra línea cuando no caben, así ninguno queda oculto.
 * En móvil se desplaza en horizontal y un degradado al borde indica que hay más opciones.
 */
export default function ChipRow({ label, children }: ChipRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [hasMore, setHasMore] = useState(false);

  function updateHasMore() {
    const el = rowRef.current;
    if (!el) return;
    setHasMore(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }

  useEffect(() => {
    updateHasMore();
    window.addEventListener("resize", updateHasMore);
    return () => window.removeEventListener("resize", updateHasMore);
  }, []);

  // El degradado es una máscara, así funciona sobre cualquier fondo de la página.
  const fade = "linear-gradient(to right, black calc(100% - 3rem), transparent)";

  return (
    <div
      ref={rowRef}
      onScroll={updateHasMore}
      role="group"
      aria-label={label}
      style={hasMore ? { maskImage: fade, WebkitMaskImage: fade } : undefined}
      className="flex gap-2 overflow-x-auto py-1 [scrollbar-width:none] md:flex-wrap md:overflow-visible [&::-webkit-scrollbar]:hidden"
    >
      {children}
    </div>
  );
}
