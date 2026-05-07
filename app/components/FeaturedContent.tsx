"use client";

import { useState } from "react";
import Image from "next/image";

interface FeaturedItem {
  id: number;
  title: string;
  desc: string;
  img: string;
}

interface Props {
  items: FeaturedItem[];
  title?: string;
}

export default function FeaturedContent({ items, title = "Contenido destacado" }: Props) {
  const [index, setIndex] = useState(0);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const maxIndex = Math.max(0, items.length - 2);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section style={{
      padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto",
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
        fontWeight: 700, color: "#2c2416",
        textAlign: "center", marginBottom: "3rem",
      }}>
        {title}
      </h2>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <button
          onClick={prev}
          disabled={index === 0}
          style={{
            position: "absolute", left: 0, top: "50%", translate: "0 -50%",
            zIndex: 2, width: 44, height: 44, borderRadius: "50%",
            border: "1px solid rgba(201,180,154,0.3)",
            background: "#fdf6ec", color: "#2c2416", cursor: index === 0 ? "default" : "pointer",
            fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center",
            opacity: index === 0 ? 0.3 : 1, transition: "opacity 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div style={{
          display: "flex",
          gap: "1.5rem",
          transform: `translateX(calc(-${index} * (50% - 0.75rem)))`,
          transition: "transform 0.4s ease",
        }}>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                flex: "0 0 calc(50% - 0.75rem)",
                padding: "2rem", borderRadius: 16,
                background: "rgba(253,246,236,0.8)",
                border: "1px solid rgba(201,180,154,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: "100%",
                height: 180,
                position: "relative",
                overflow: "hidden",
                borderRadius: 12,
                marginBottom: "1rem",
              }}>
                <Image
                  src={`/${item.img}`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 500px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.2rem", fontWeight: 700, color: "#2c2416",
                marginBottom: "0.75rem",
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#6b5c44", lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
              <button
                onClick={() => setModalImg(item.img)}
                style={{
                  marginTop: "1rem", padding: "0.5rem 1.2rem",
                  borderRadius: 8, border: "1px solid #d4853a",
                  background: "transparent", color: "#d4853a",
                  cursor: "pointer", fontSize: "0.85rem",
                  fontWeight: 600, transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#d4853a";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#d4853a";
                }}
              >
                Ver más
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={next}
          disabled={index >= maxIndex}
          style={{
            position: "absolute", right: 0, top: "50%", translate: "0 -50%",
            zIndex: 2, width: 44, height: 44, borderRadius: "50%",
            border: "1px solid rgba(201,180,154,0.3)",
            background: "#fdf6ec", color: "#2c2416", cursor: index >= maxIndex ? "default" : "pointer",
            fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center",
            opacity: index >= maxIndex ? 0.3 : 1, transition: "opacity 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      {modalImg && (
        <div
          onClick={() => setModalImg(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", padding: "2rem",
          }}
        >
          <button
            onClick={() => setModalImg(null)}
            style={{
              position: "absolute", top: "1.5rem", right: "2rem",
              background: "none", border: "none", color: "#fff",
              fontSize: "2rem", cursor: "pointer", lineHeight: 1,
            }}
            aria-label="Cerrar"
          >
            ✕
          </button>
          <div style={{
            position: "relative", width: "90%", maxWidth: 900,
            height: "80vh", borderRadius: 16, overflow: "hidden",
          }}>
            <Image
              src={`/${modalImg}`}
              alt=""
              fill
              sizes="90vw"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
