"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  aspectRatio?: string;
  interval?: number;
  onImageClick?: (src: string) => void;
}

export default function ImageCarousel({ images, aspectRatio = "16/9", interval = 3000, onImageClick }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div
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
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        {images.length > 1 && (
          <>
            <button
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
