// app/razas/page.jsx
import Image from 'next/image';
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Guía de Razas de Gatos",
  description: "Explora nuestra guía completa de razas de gatos: origen, características, peso, tiempo de vida y más. Encuentra la raza perfecta para ti.",
  openGraph: {
    title: "Guía de Razas de Gatos · AlmaGatuna · Enciclopedia Felina",
    description: "Explora nuestra guía completa de razas de gatos con fotos, origen y características.",
  },
};
const PAGE_SIZE = 9;

async function getCats() {
  try {
    const res = await fetch("https://api-cats-mauve.vercel.app/api/cats", { 
      cache: 'no-store'
    });
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Error:", err);
    return [];
  }
}

export default async function RazasPage({ searchParams }) {
  const cats = await getCats();
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
  const totalPages = Math.ceil(displayCats.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const current = displayCats.slice(start, start + PAGE_SIZE);

  if (cats.length === 0) {
    return (
      <div style={{ maxWidth: 1100, margin: "2rem auto", padding: "2rem", textAlign: "center" }}>
        <h1>Guía de Razas de Gatos</h1>
        <p style={{ color: "#c0392b" }}>Error al cargar las razas. Intenta más tarde.</p>
      </div>
    );
  }

  return (
    <main style={{ maxWidth: 1100, margin: "2rem auto", padding: "0 clamp(0.75rem, 3vw, 1.5rem)" }}>
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

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            var input = document.getElementById('razas-search');
            if (input) {
              input.addEventListener('input', function() {
                if (this.value === '') {
                  window.location.href = '/razas';
                }
              });
            }

            var lightbox = document.createElement('div');
            lightbox.id = 'razas-lightbox';
            lightbox.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);display:none;align-items:center;justify-content:center;z-index:9999;cursor:zoom-out;';
            lightbox.addEventListener('click', function() { this.style.display = 'none'; });
            var lbImg = document.createElement('img');
            lbImg.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,0.5);';
            lightbox.appendChild(lbImg);
            document.body.appendChild(lightbox);

            document.querySelectorAll('.razas-img-wrap').forEach(function(el) {
              el.addEventListener('click', function(e) {
                lbImg.src = this.dataset.src;
                lightbox.style.display = 'flex';
              });
            });
          });
        `,
      }} />

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
            <div
              className="razas-img-wrap"
              data-src={cat.imagen}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={cat.imagen}
                alt={cat.raza}
                width={400}
                height={200}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ width: "100%", height: 200, objectFit: "cover", pointerEvents: "none" }}
              />
            </div>
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
            <a href={`/razas?q=${search}&page=${page - 1}`} style={{
              padding: "0.4rem 0.8rem", borderRadius: 6, border: "1px solid rgba(201,180,154,0.5)",
              background: "#fff", textDecoration: "none", color: "#2c2416"
            }}>«</a>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <a
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
            </a>
          ))}
          {page < totalPages && (
            <a href={`/razas?q=${search}&page=${page + 1}`} style={{
              padding: "0.4rem 0.8rem", borderRadius: 6, border: "1px solid rgba(201,180,154,0.5)",
              background: "#fff", textDecoration: "none", color: "#2c2416"
            }}>»</a>
          )}
        </div>
      )}
    </main>
  );
}
