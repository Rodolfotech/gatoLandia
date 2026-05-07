"use client";

import Image from "next/image";

interface FeaturedItem {
  title: string;
  desc: string;
  img: string;
}

interface Props {
  items: FeaturedItem[];
  title?: string;
}

export default function FeaturedContent({ items, title = "Contenido destacado" }: Props) {
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

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
      }}>
        {items.map((item) => (
          <div
            key={item.title}
            style={{
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
            <Image
              src={`/${item.img}`}
              alt={item.title}
              width={60}
              height={60}
              style={{
                objectFit: "contain",
                marginBottom: "1rem",
                borderRadius: 12,
              }}
            />
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
          </div>
        ))}
      </div>
    </section>
  );
}
