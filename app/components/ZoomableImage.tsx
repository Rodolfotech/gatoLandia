"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ZoomableImageProps {
  /** Imagen que se muestra en la tarjeta (puede ser una miniatura). */
  src: string;
  /** Imagen completa que se abre al ampliar. */
  fullSrc: string;
  alt: string;
  sizes?: string;
}

/** Imagen que se amplía al pulsarla. Se puede activar con teclado y se cierra con Escape. */
export default function ZoomableImage({ src, fullSrc, alt, sizes }: ZoomableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar imagen de ${alt}`}
        className="relative block h-[200px] w-full cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-(--amber-dark)"
      >
        <Image src={src} alt="" fill sizes={sizes} className="object-cover" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[9999] flex cursor-zoom-out items-center justify-center bg-black/85 p-4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fullSrc} alt={alt} className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl" />
        </div>
      )}
    </>
  );
}
