"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setStoredToken } from "../lib/auth";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Contraseña incorrecta");
        return;
      }

      const { token } = await res.json();
      setStoredToken(token);
      router.push("/gnt-admin/dashboard");
    } catch {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "#fdf6ec", fontFamily: "'DM Sans', sans-serif",
    }}>
      <form onSubmit={handleSubmit} style={{
        background: "#fff", padding: "3rem", borderRadius: 16,
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)", width: "100%", maxWidth: 400,
      }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "1.5rem",
          color: "#2c2416", marginBottom: "0.5rem", textAlign: "center",
        }}>
          Acceso Admin
        </h1>
        <p style={{ fontSize: "0.85rem", color: "#8a7560", textAlign: "center", marginBottom: "2rem" }}>
          Ingresa la contraseña de administrador
        </p>

        <div style={{ position: "relative", marginBottom: "1rem" }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            autoFocus
            style={{
              width: "100%", padding: "0.75rem 1rem", borderRadius: 8,
              border: "1px solid rgba(201,180,154,0.4)", fontSize: "0.95rem",
              boxSizing: "border-box", paddingRight: "2.5rem",
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            style={{
              position: "absolute", right: "0.5rem", top: "50%",
              transform: "translateY(-50%)", background: "none",
              border: "none", cursor: "pointer", padding: "0.25rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#8a7560",
            }}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
        </div>

        {error && (
          <p style={{ color: "#c0392b", fontSize: "0.85rem", marginBottom: "1rem" }}>{error}</p>
        )}

        <button type="submit" disabled={loading} style={{
          width: "100%", padding: "0.75rem", borderRadius: 8,
          background: loading ? "#c9b49a" : "#d4853a", color: "#fff",
          border: "none", fontSize: "0.95rem", fontWeight: 600,
          cursor: loading ? "default" : "pointer",
        }}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
