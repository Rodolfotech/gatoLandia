"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", pais: "", correo: "", telefono: "", mensaje: "" });
  const [archivos, setArchivos] = useState<File[]>([]);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    try {
      const fd = new FormData();
      fd.append("nombre", form.nombre);
      fd.append("pais", form.pais);
      fd.append("correo", form.correo);
      fd.append("telefono", form.telefono);
      fd.append("mensaje", form.mensaje);
      archivos.forEach((f) => fd.append("imagenes", f));

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: fd,
      });
      if (!res.ok) throw new Error();
      setEnviado(true);
    } catch {
      setError(true);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: "4rem auto", padding: "0 2rem", color: "#2c2416" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: "2rem" }}>
        Contacto
      </h1>

      {enviado ? (
        <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#d4853a", fontWeight: 600 }}>
          ¡Gracias por contactarnos! Te responderemos pronto.
        </p>
      ) : error ? (
        <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#c00", fontWeight: 600 }}>
          Hubo un error al enviar el mensaje. Intenta de nuevo o escríbenos directamente a{" "}
          <a href="mailto:correoalmagatuna@gmail.com" style={{ color: "#d4853a" }}>correoalmagatuna@gmail.com</a>.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>
              Nombre *
            </label>
            <input
              name="nombre"
              type="text"
              required
              value={form.nombre}
              onChange={handleChange}
              style={{
                width: "100%", padding: "0.6rem 0.8rem", borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.9rem",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>
              País *
            </label>
            <input
              name="pais"
              type="text"
              required
              value={form.pais}
              onChange={handleChange}
              style={{
                width: "100%", padding: "0.6rem 0.8rem", borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.9rem",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>
              Correo Electrónico *
            </label>
            <input
              name="correo"
              type="email"
              required
              value={form.correo}
              onChange={handleChange}
              style={{
                width: "100%", padding: "0.6rem 0.8rem", borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.9rem",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>
              Teléfono *
            </label>
            <input
              name="telefono"
              type="tel"
              required
              value={form.telefono}
              onChange={handleChange}
              style={{
                width: "100%", padding: "0.6rem 0.8rem", borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.9rem",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>
              Mensaje *
            </label>
            <textarea
              name="mensaje"
              required
              rows={5}
              value={form.mensaje}
              onChange={handleChange}
              style={{
                width: "100%", padding: "0.6rem 0.8rem", borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.9rem",
                resize: "vertical", fontFamily: "inherit",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>
              Imágenes (opcional)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setArchivos(Array.from(e.target.files || []))}
              style={{ fontSize: "0.85rem", color: "#666" }}
            />
            {archivos.length > 0 && (
              <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "0.3rem" }}>
                {archivos.length} archivo(s) seleccionado(s)
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              marginTop: "0.5rem", padding: "0.7rem 1.5rem", borderRadius: 8,
              background: "#d4853a", color: "#fff", border: "none",
              fontSize: "0.9rem", fontWeight: 600, cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#c17432"}
            onMouseLeave={e => e.currentTarget.style.background = "#d4853a"}
          >
            Enviar
          </button>
        </form>
      )}

      <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#666" }}>
          ¿Tienes alguna duda, sugerencia o simplemente quieres compartir una historia sobre tu compañero felino? ¡Nos encantaría escucharte!
        </p>
        <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#666", marginTop: "1rem" }}>
          Puedes ponerte en contacto con nosotros escribiendo al siguiente correo electrónico:{" "}
          <a href="mailto:correoalmagatuna@gmail.com" style={{ color: "#d4853a", textDecoration: "none" }}>
            correoalmagatuna@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
