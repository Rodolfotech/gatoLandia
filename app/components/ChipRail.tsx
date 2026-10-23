"use client";

import { useEffect, useRef, useState } from "react";

interface ChipRailProps {
  label: string;
  children: React.ReactNode;
}

/**
 * Fila de chips en una sola línea, desplazable con flechas a los lados (fuera de la fila).
 * Las flechas aparecen solo cuando hay chips escondidos en esa dirección.
 */
export default function ChipRail({ label, children }: ChipRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  function updateEdges() {
    const el = railRef.current;
    if (!el) return;
    setEdges({
      left: el.scrollLeft > 0,
      right: el.scrollLeft < el.scrollWidth - el.clientWidth - 1,
    });
  }

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  function scrollRail(direction: 1 | -1) {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={railRef}
        onScroll={updateEdges}
        role="group"
        aria-label={label}
        className="flex items-center gap-2 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <RailButton direction={-1} disabled={!edges.left} onClick={() => scrollRail(-1)} />
      <RailButton direction={1} disabled={!edges.right} onClick={() => scrollRail(1)} />
    </div>
  );
}

function RailButton({
  direction,
  disabled,
  onClick,
}: {
  direction: 1 | -1;
  disabled: boolean;
  onClick: () => void;
}) {
  const isLeft = direction === -1;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? "Ver categorías anteriores" : "Ver más categorías"}
      className={`absolute top-1/2 z-10 hidden h-11 w-11 md:flex -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-(--charcoal) shadow-md transition-all hover:scale-105 hover:border-(--amber) hover:bg-(--amber)/10 hover:text-(--amber-dark) disabled:pointer-events-none disabled:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--amber-dark) ${
        isLeft ? "left-0" : "right-0"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {isLeft ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
      </svg>
    </button>
  );
}
