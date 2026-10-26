"use client";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  /** Texto del botón. */
  label?: string;
  /** Destino si no hay historial de navegación. */
  fallbackHref?: string;
  /** Clases extra para ajustar la posición en el diseño donde se use. */
  className?: string;
}

/** Botón para volver a la página anterior; si no hay historial, lleva a `fallbackHref`. */
export default function BackButton({ label = "Volver", fallbackHref = "/", className = "" }: BackButtonProps) {
  const router = useRouter();

  function handleClick() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-(--amber-dark) transition hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark) ${className}`}
    >
      <span aria-hidden="true">←</span>
      {label}
    </button>
  );
}
