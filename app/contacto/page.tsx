"use client";

import { useState } from "react";
import { clearContactDraft, saveContactDraft, useContactDraft } from "../lib/contactDraft";
import Modal from "../components/Modal";
import Link from "next/link";
import { countLetters, isValidEmail, isValidMessage, MESSAGE_MIN_LENGTH, normalizeName, NAME_MAX_LENGTH, NAME_MIN_LETTERS } from "../lib/validation";

export default function ContactoPage() {
  const form = useContactDraft();
  const [enviado, setEnviado] = useState(false);
  const [acepta, setAcepta] = useState(false);
  const [intentoAcepta, setIntentoAcepta] = useState(false);
  const mostrarErrorAcepta = intentoAcepta && !acepta;
  const correoInvalido = form.correo !== "" && !isValidEmail(form.correo);
  // El aviso del correo aparece solo después de pulsar «Enviar».
  const [intentoEnvio, setIntentoEnvio] = useState(false);
  const mostrarErrorCorreo = intentoEnvio && correoInvalido;
  const nombreCorto = countLetters(form.nombre.trim()) < NAME_MIN_LETTERS;
  const mostrarErrorNombre = intentoEnvio && nombreCorto;
  const mensajeCorto = !isValidMessage(form.mensaje);
  const mostrarErrorMensaje = intentoEnvio && mensajeCorto;
  const [error, setError] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    // El correo siempre se muestra y se envía en minúsculas.
    let value = e.target.value;
    if (e.target.name === "correo") value = value.toLowerCase();
    if (e.target.name === "nombre") value = normalizeName(value);
    saveContactDraft({ ...form, [e.target.name]: value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Con un correo inválido no se envía: se muestra el aviso y el foco vuelve al campo.
    if (nombreCorto || correoInvalido || mensajeCorto) {
      setIntentoEnvio(true);
      const campo = nombreCorto ? 'input[name="nombre"]' : correoInvalido ? 'input[name="correo"]' : 'textarea[name="mensaje"]';
      document.querySelector<HTMLElement>(campo)?.focus();
      return;
    }
    if (!acepta) {
      setIntentoAcepta(true);
      document.querySelector<HTMLInputElement>('input[type="checkbox"]')?.focus();
      return;
    }
    setError(false);
    try {
      const fd = new FormData();
      fd.append("nombre", form.nombre);
      fd.append("correo", form.correo);
      fd.append("mensaje", form.mensaje);
      fd.append("acepta", acepta ? "si" : "no");

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: fd,
      });
      if (!res.ok) throw new Error();
      clearContactDraft();
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

      <Modal open={enviado} onClose={() => setEnviado(false)}>
        <p style={{ margin: 0, textAlign: "center" }}>
          <span style={{ display: "block", fontWeight: 700 }}>¡Gracias por contactarnos!</span>
          <span style={{ display: "block" }}>Te responderemos pronto.</span>
        </p>
      </Modal>

      {error ? (
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
              maxLength={NAME_MAX_LENGTH}
              autoComplete="name"
              value={form.nombre}
              onChange={handleChange}
              aria-invalid={mostrarErrorNombre}
              aria-describedby={mostrarErrorNombre ? "nombre-error" : undefined}
              style={{
                width: "100%", padding: "0.6rem 0.8rem", borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.9rem",
              }}
            />
            {mostrarErrorNombre && (
              <p id="nombre-error" role="alert" style={{ color: "#b42318", fontSize: "0.8rem", margin: "0.3rem 0 0" }}>
                Ingrese al menos {NAME_MIN_LETTERS} letras.
              </p>
            )}
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
              aria-invalid={mostrarErrorCorreo}
              aria-describedby={mostrarErrorCorreo ? "correo-error" : undefined}
              style={{
                width: "100%", padding: "0.6rem 0.8rem", borderRadius: 8,
                border: `1px solid ${mostrarErrorCorreo ? "#b42318" : "rgba(0,0,0,0.12)"}`, fontSize: "0.9rem",
              }}
            />
            {mostrarErrorCorreo && (
              <p id="correo-error" role="alert" style={{ color: "#b42318", fontSize: "0.8rem", margin: "0.3rem 0 0" }}>
                Ingrese un correo válido.
              </p>
            )}
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 600, fontSize: "0.9rem" }}>
              Mensaje *
            </label>
            <textarea
              name="mensaje"
              required
              rows={5}
              maxLength={2000}
              value={form.mensaje}
              onChange={handleChange}
              aria-invalid={mostrarErrorMensaje}
              aria-describedby={mostrarErrorMensaje ? "mensaje-error" : "mensaje-limite"}
              style={{
                width: "100%", padding: "0.6rem 0.8rem", borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.12)", fontSize: "0.9rem",
                resize: "vertical", fontFamily: "inherit",
              }}
            />
            {mostrarErrorMensaje && (
              <p id="mensaje-error" role="alert" style={{ color: "#b42318", fontSize: "0.8rem", margin: "0.3rem 0 0" }}>
                El mensaje debe tener al menos {MESSAGE_MIN_LENGTH} caracteres.
              </p>
            )}
            <p id="mensaje-limite" style={{ textAlign: "right", fontSize: "0.8rem", color: "#666", margin: "0.3rem 0 0" }}>
              Límite 2000 caracteres
            </p>
          </div>

          <div style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
            <label style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", cursor: "pointer" }}>
              <input
                type="checkbox"
                required
                checked={acepta}
                onChange={(e) => setAcepta(e.target.checked)}
                aria-invalid={mostrarErrorAcepta}
                aria-describedby={mostrarErrorAcepta ? "acepta-error" : undefined}
                style={{ marginTop: "0.25rem", width: 18, height: 18, flexShrink: 0 }}
              />
              <span>
                He leído y acepto la{" "}
                <Link href="/privacidad" style={{ textDecoration: "underline" }}>Política de Privacidad</Link> y los{" "}
                <Link href="/terminos" style={{ textDecoration: "underline" }}>Términos y Condiciones</Link>. *
              </span>
            </label>
            {mostrarErrorAcepta && (
              <p id="acepta-error" role="alert" style={{ color: "#b42318", margin: "0.3rem 0 0 1.6rem" }}>
                Este campo es obligatorio.
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
