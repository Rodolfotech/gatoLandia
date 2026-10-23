// app/razas/page.jsx
import ZoomableImage from '@/app/components/ZoomableImage';
import Link from 'next/link';
import { fetchRazas, RAZAS_PAGE_SIZE } from '@/app/lib/razas';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://almagatuna.com";

const METADATA = {
  title: "Guía de Razas de Gatos",
  description: "Explora nuestra guía completa de razas de gatos: origen, características, peso, tiempo de vida y más. Encuentra la raza perfecta para ti.",
  openGraph: {
    title: "Guía de Razas de Gatos · AlmaGatuna · Enciclopedia Felina",
    description: "Explora nuestra guía completa de razas de gatos con fotos, origen y características.",
  },
};

export async function generateMetadata({ searchParams }) {
  const { q = "", page = "1" } = await searchParams;
  const pageNumber = parseInt(page) || 1;

  // Las búsquedas no deben indexarse; las páginas de listado sí, cada una con su propia URL canónica.
  if (q.trim()) {
    return { ...METADATA, robots: { index: false, follow: true }, alternates: { canonical: `${SITE_URL}/razas` } };
  }
  const canonical = pageNumber > 1 ? `${SITE_URL}/razas?page=${pageNumber}` : `${SITE_URL}/razas`;
  return { ...METADATA, alternates: { canonical } };
}

export default async function RazasPage({ searchParams }) {
  const cats = await fetchRazas();
  const search = (await searchParams)?.q || "";
  const page = parseInt((await searchParams)?.page || "1");

  const filtered = search.trim()
    ? cats.filter(c => 
        (c.raza || "").toLowerCase().includes(search.toLowerCase()) ||
        (c.origen || "").toLowerCase().includes(search.toLowerCase())
      )
    : cats;

  const noMatch = search.trim() && filtered.length === 0;
  const displayCats = noMatch ? cats : filtered;
  const totalPages = Math.ceil(displayCats.length / RAZAS_PAGE_SIZE);
  const start = (page - 1) * RAZAS_PAGE_SIZE;
  const current = displayCats.slice(start, start + RAZAS_PAGE_SIZE);

  if (cats.length === 0) {
    return (
      <div style={{ maxWidth: 1100, margin: "2rem auto", padding: "2rem", textAlign: "center" }}>
        <h1>Guía de Razas de Gatos</h1>
        <p>No hay razas disponibles por ahora.</p>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: METADATA.title,
    description: METADATA.description,
    url: `${SITE_URL}/razas`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: cats.length,
      itemListElement: cats.map((c, index) => ({ "@type": "ListItem", position: index + 1, name: c.raza })),
    },
  };

  return (
    <div style={{ maxWidth: 1100, margin: "2rem auto", padding: "0 clamp(0.75rem, 3vw, 1.5rem)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", color: "#2c2416", marginBottom: "1.5rem" }}>
        Guía de {cats.length} Razas de Gatos
      </h1>

      <form action="/razas" method="GET" style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem" }}>
          <input
            type="text"
            name="q"
            id="razas-search"
            placeholder="Buscar raza (ej: Bengal, Persian)..."
            defaultValue={search}
            style={{
            flex: 1, padding: "0.6rem 1rem", borderRadius: 8,
            border: "1px solid rgba(201,180,154,0.5)",
            fontSize: "0.9rem", boxSizing: "border-box"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.6rem 1.5rem", borderRadius: 8,
            border: "none", background: "#d4853a", color: "#fff",
            fontSize: "0.9rem", cursor: "pointer", fontWeight: 500
          }}
        >
          Buscar
        </button>
      </form>

      {noMatch && (
        <p style={{ color: "#c0392b", fontSize: "0.9rem", padding: "1rem", background: "#fee", borderRadius: 8 }}>
          La raza &quot;{search}&quot; no existe
        </p>
      )}

      <div className="razas-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
      <style>{`
        @media (max-width: 768px) {
          .razas-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
        }
        @media (max-width: 480px) {
          .razas-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        {current.map((cat, idx) => (
          <div key={idx} style={{
            border: "1px solid rgba(201,180,154,0.3)", borderRadius: 12, overflow: "hidden"
          }}>
            <ZoomableImage
              src={cat.miniatura ?? cat.imagen}
              fullSrc={cat.imagen}
              alt={cat.raza}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
            <div style={{ padding: "1.25rem" }}>
              <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.15rem", color: "#2c2416" }}>
                {cat.raza}
              </h2>
              <p style={{ margin: "0 0 0.75rem", fontSize: "0.82rem", color: "#8a7560", lineHeight: 1.5 }}>
                {cat.descripcion}
              </p>
              <div style={{ fontSize: "0.78rem", color: "#6b5c44" }}>
                <div><strong>Origen:</strong> {cat.origen}</div>
                <div><strong>Tiempo de vida:</strong> {cat.tiempo_de_vida}</div>
                <div><strong>Peso:</strong> {cat.peso}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", margin: "2rem 0", flexWrap: "wrap" }}>
          {page > 1 && (
            <Link href={`/razas?q=${search}&page=${page - 1}`} style={{
              padding: "0.4rem 0.8rem", borderRadius: 6, border: "1px solid rgba(201,180,154,0.5)",
              background: "#fff", textDecoration: "none", color: "#2c2416"
            }}>«</Link>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <Link
              key={p}
              href={`/razas?q=${search}&page=${p}`}
              style={{
                padding: "0.4rem 0.8rem", borderRadius: 6, border: "1px solid rgba(201,180,154,0.5)",
                background: p === page ? "#2c2416" : "#fff",
                color: p === page ? "#fff" : "#2c2416",
                textDecoration: "none", fontWeight: p === page ? "bold" : "normal"
              }}
            >
              {p}
            </Link>
          ))}
          {page < totalPages && (
            <Link href={`/razas?q=${search}&page=${page + 1}`} style={{
              padding: "0.4rem 0.8rem", borderRadius: 6, border: "1px solid rgba(201,180,154,0.5)",
              background: "#fff", textDecoration: "none", color: "#2c2416"
            }}>»</Link>
          )}
        </div>
      )}
    </div>
  );
}
