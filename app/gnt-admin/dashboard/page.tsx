"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { getStoredToken, clearStoredToken, verifyToken } from "../../lib/auth";

interface SeoEntry {
  title: string;
  description: string;
  keywords?: string;
  isOverridden?: boolean;
}

type GroupKey = "nav" | "categorias";

const GROUP_LABELS: Record<GroupKey, string> = {
  nav: "Páginas del Nav",
  categorias: "Artículos del Submenú",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [data, setData] = useState<Record<string, SeoEntry>>({});
  const [overrides, setOverrides] = useState<Record<string, SeoEntry>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [form, setForm] = useState<SeoEntry>({ title: "", description: "" });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [groups, setGroups] = useState<Record<GroupKey, string[]>>({ nav: [], categorias: [] });

  const load = useCallback(async () => {
    const token = getStoredToken();
    if (!token || !verifyToken(token)) {
      clearStoredToken();
      router.replace("/gnt-admin");
      return;
    }

    try {
      const res = await fetch("/api/admin/seo", {
        headers: { authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Unauthorized");

      const { data: d, overrides: o } = await res.json();
      setData(d);
      setOverrides(o);

      const nav: string[] = [];
      const cat: string[] = [];
      for (const key of Object.keys(d)) {
        if (key === "/" || key.startsWith("/sobre") || key.startsWith("/contacto") || key.startsWith("/razas") || key.startsWith("/preguntas") || key.startsWith("/privacidad") || key.startsWith("/terminos")) {
          nav.push(key);
        } else {
          cat.push(key);
        }
      }
      setGroups({ nav, categorias: cat });
    } catch {
      clearStoredToken();
      router.replace("/gnt-admin");
    }
  }, [router]);

  useEffect(() => { load(); }, [load]);

  function select(key: string) {
    setSelected(key);
    setForm({ ...data[key] });
    setSaved(false);
  }

  async function handleSave() {
    if (!selected) return;
    setSaving(true);
    const token = getStoredToken();
    try {
      await fetch("/api/admin/seo", {
        method: "PUT",
        headers: { "Content-Type": "application/json", authorization: `Bearer ${token}` },
        body: JSON.stringify({ [selected]: form }),
      });
      setSaved(true);
      setData((prev) => ({ ...prev, [selected]: { ...form, isOverridden: true } }));
    } catch {
      alert("Error al guardar");
    } finally {
      setSaving(false);
    }
  }

  function handleLogout() {
    clearStoredToken();
    router.push("/gnt-admin");
  }

  const selectedEntry = selected ? data[selected] : null;

  return (
    <div className="dashboard-page" style={{ display: "flex", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", background: "#f5f0ea" }}>
      <style>{`.dashboard-page, .dashboard-page * { user-select: auto !important; -webkit-user-select: auto !important; }`}</style>
      {/* Sidebar */}
      <aside style={{
        width: 300, flexShrink: 0, background: "#2c2416", color: "#fdf6ec",
        display: "flex", flexDirection: "column",
      }}>
        <div style={{ padding: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "1.1rem",
            margin: 0, color: "#fdf6ec",
          }}>
            Gestión SEO
          </h2>
          <p style={{ fontSize: "0.75rem", color: "#c9b49a", margin: "0.25rem 0 0" }}>
            Panel de administración
          </p>
        </div>

        <nav style={{ flex: 1, overflowY: "auto", padding: "0.75rem 0" }}>
          {(Object.keys(GROUP_LABELS) as GroupKey[]).map((group) => (
            <div key={group}>
              <div style={{
                padding: "0.5rem 1.25rem", fontSize: "0.65rem",
                textTransform: "uppercase", letterSpacing: "0.1em",
                color: "#8a7560", fontWeight: 600,
              }}>
                {GROUP_LABELS[group]}
              </div>
              {groups[group]?.map((key) => {
                const entry = data[key];
                const isOverridden = overrides[key];
                const isActive = selected === key;
                return (
                  <button
                    key={key}
                    onClick={() => select(key)}
                    style={{
                      width: "100%", textAlign: "left", background: isActive ? "rgba(212,133,58,0.15)" : "none",
                      border: "none", borderLeft: isActive ? "3px solid #d4853a" : "3px solid transparent",
                      padding: "0.55rem 1.25rem", cursor: "pointer",
                      transition: "background 0.15s",
                    }}
                  >
                    <span style={{
                      display: "block", fontSize: "0.82rem", fontWeight: isActive ? 600 : 400,
                      color: isActive ? "#fff" : "#c9b49a",
                    }}>
                      {isOverridden && <span style={{ color: "#d4853a", marginRight: 4 }}>●</span>}
                      {entry?.title || key}
                    </span>
                    <span style={{ fontSize: "0.65rem", color: "#8a7560", marginTop: 2, display: "block" }}>
                      {key}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        <div style={{ padding: "1rem 1.25rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <button onClick={handleLogout} style={{
            width: "100%", padding: "0.5rem", borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.2)", background: "transparent",
            color: "#c9b49a", cursor: "pointer", fontSize: "0.78rem",
          }}>
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: "2.5rem 3rem", overflowY: "auto" }}>
        {!selectedEntry ? (
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            height: "60vh", color: "#8a7560", fontSize: "0.95rem",
          }}>
            Selecciona una página del panel izquierdo para editar su SEO
          </div>
        ) : (
          <div style={{ maxWidth: 600 }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif", fontSize: "1.5rem",
              color: "#2c2416", marginBottom: "0.25rem",
            }}>
              {selectedEntry.title}
            </h1>
            <p style={{ fontSize: "0.8rem", color: "#8a7560", marginBottom: "2rem" }}>
              {selected}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "#2c2416", marginBottom: "0.4rem" }}>
                  Title (meta título)
                </label>
                <input
                  value={form.title}
                  onChange={(e) => { setForm((f) => ({ ...f, title: e.target.value })); setSaved(false); }}
                  style={{
                    width: "100%", padding: "0.65rem 0.85rem", borderRadius: 8,
                    border: "1px solid rgba(201,180,154,0.4)", fontSize: "0.9rem",
                    background: "#fff", boxSizing: "border-box",
                  }}
                />
                <p style={{ fontSize: "0.72rem", color: "#8a7560", margin: "0.3rem 0 0" }}>
                  {form.title.length} caracteres
                </p>
              </div>

              <div>
                <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "#2c2416", marginBottom: "0.4rem" }}>
                  Description (meta descripción)
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => { setForm((f) => ({ ...f, description: e.target.value })); setSaved(false); }}
                  rows={4}
                  style={{
                    width: "100%", padding: "0.65rem 0.85rem", borderRadius: 8,
                    border: "1px solid rgba(201,180,154,0.4)", fontSize: "0.9rem",
                    background: "#fff", resize: "vertical", boxSizing: "border-box",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
                <p style={{ fontSize: "0.72rem", color: form.description.length > 160 ? "#c0392b" : "#8a7560", margin: "0.3rem 0 0" }}>
                  {form.description.length} caracteres{form.description.length > 160 ? " (recomendado máximo 160)" : ""}
                </p>
              </div>

              <div>
                <label style={{ display: "block", fontWeight: 600, fontSize: "0.85rem", color: "#2c2416", marginBottom: "0.4rem" }}>
                  Keywords (opcional)
                </label>
                <input
                  value={form.keywords || ""}
                  onChange={(e) => { setForm((f) => ({ ...f, keywords: e.target.value })); setSaved(false); }}
                  placeholder="gatos, cuidado felino, ..."
                  style={{
                    width: "100%", padding: "0.65rem 0.85rem", borderRadius: 8,
                    border: "1px solid rgba(201,180,154,0.4)", fontSize: "0.9rem",
                    background: "#fff", boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.5rem" }}>
                <button onClick={handleSave} disabled={saving} style={{
                  padding: "0.65rem 2rem", borderRadius: 8,
                  background: saving ? "#c9b49a" : "#d4853a", color: "#fff",
                  border: "none", fontSize: "0.9rem", fontWeight: 600,
                  cursor: saving ? "default" : "pointer",
                }}>
                  {saving ? "Guardando..." : "Guardar cambios"}
                </button>
                {saved && (
                  <span style={{ color: "#27ae60", fontSize: "0.85rem", fontWeight: 500 }}>
                    ✓ Cambios guardados
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
