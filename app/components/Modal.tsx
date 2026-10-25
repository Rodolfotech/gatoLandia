"use client";

import { useEffect, useId, useRef } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  closeLabel?: string;
  children: React.ReactNode;
}

/**
 * Ventana modal reutilizable. Se cierra con la X, con el botón, con Escape o con un clic fuera.
 * Al abrirse, el foco va al botón cerrar; al cerrarse, vuelve al elemento que la abrió.
 */
export default function Modal({ open, onClose, title, closeLabel = "Cerrar", children }: ModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;
    const trigger = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onCloseRef.current();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={() => onCloseRef.current()}
      className="fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
      >
        <button
          type="button"
          onClick={() => onCloseRef.current()}
          aria-label="Cerrar"
          className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full text-(--mid) hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
        >
          <span aria-hidden="true" className="text-2xl leading-none">×</span>
        </button>

        {title && (
          <h2
            id={titleId}
            className="pr-10 text-xl text-(--charcoal)"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            {title}
          </h2>
        )}

        <div className="mt-3 text-base leading-relaxed text-(--charcoal)">{children}</div>

        <div className="mt-6 flex justify-center">
          <button
            ref={closeRef}
            type="button"
            onClick={() => onCloseRef.current()}
            className="min-h-11 rounded-lg bg-(--amber-dark) px-5 text-sm font-semibold text-white hover:bg-[#8a5222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark)"
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
