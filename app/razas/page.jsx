// app/razas/page.jsx
import Image from 'next/image';
export const dynamic = 'force-dynamic';
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

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const current = filtered.slice(start, start + PAGE_SIZE);

  if (cats.length === 0) {
    return (
      <div style={{ maxWidth: 1100, margin: "2rem auto", padding: "2rem", textAlign: "center" }}>
        <h1>Guía de Razas de Gatos</h1>
        <p style={{ color: "#c0392b" }}>Error al cargar las razas. Intenta más tarde.</p>
      </div>
    );
  }

  return (
    <main style={{ maxWidth: 1100, margin: "2rem auto", padding: "0 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", color: "#2c2416", marginBottom: "1.5rem" }}>
        Guía de Razas de Gatos ({cats.length} razas)
      </h1>

      <form action="/razas" method="GET" style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          name="q"
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

      {filtered.length === 0 && search.trim() && (
        <p style={{ color: "#c0392b", fontSize: "0.9rem", padding: "1rem", background: "#fee", borderRadius: 8 }}>
          La raza &quot;{search}&quot; no está disponible en estos momentos
        </p>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
        {current.map((cat, idx) => (
          <div key={idx} style={{
            border: "1px solid rgba(201,180,154,0.3)", borderRadius: 12, overflow: "hidden"
          }}>
            <Image
              src={cat.imagen}
              alt={cat.raza}
              width={400}
              height={200}
              style={{ width: "100%", height: 200, objectFit: "cover" }}
              unoptimized
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
