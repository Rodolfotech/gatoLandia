"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Image from "next/image";
import { activateOnKey } from "@/app/lib/keyboardNav";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  aspectRatio?: string;
  interval?: number;
  onImageClick?: (src: string) => void;
}

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(REDUCED_MOTION).matches;
}

export default function ImageCarousel({ images, aspectRatio = "16/9", interval = 3000, onImageClick }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  // Quien pide menos movimiento en su sistema no ve el carrusel animarse.
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);
  const paused = userPaused || reducedMotion;

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval, paused]);

  if (images.length === 0) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div
        role={onImageClick ? "button" : undefined}
        tabIndex={onImageClick ? 0 : undefined}
        aria-label={onImageClick ? "Ampliar imagen" : undefined}
        onKeyDown={onImageClick ? activateOnKey(() => onImageClick(images[current].src)) : undefined}
        onClick={() => onImageClick?.(images[current].src)}
        style={{
          width: "100%",
          aspectRatio,
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
          cursor: onImageClick ? "pointer" : undefined,
        }}
      >
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        {images.length > 1 && (
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={paused ? "Reanudar carrusel" : "Pausar carrusel"}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 2,
              minWidth: 44,
              minHeight: 44,
              borderRadius: 999,
              border: "none",
              background: "rgba(0,0,0,0.55)",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <span aria-hidden="true">{paused ? "▶" : "❚❚"}</span>
          </button>
        )}
        {images.length > 1 && (
          <>
            <button
              aria-label="Imagen anterior"
              onClick={prev}
              style={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              ‹
            </button>
            <button
              aria-label="Imagen siguiente"
              onClick={next}
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              ›
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.4rem",
            marginTop: "0.75rem",
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Ver imagen ${i + 1} de ${images.length}`}
              aria-current={i === current}
              onClick={() => setCurrent(i)}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                border: "none",
                background: i === current ? "#d4853a" : "rgba(0,0,0,0.15)",
                cursor: "pointer",
                padding: 0,
                transition: "background 0.2s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
