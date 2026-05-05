'use client';

import { useState } from "react";

const preguntas = [
  {
    pregunta: "¿Qué considerar antes de conseguirlo?",
    respuesta: "Un gato puede vivir 15 años o más. Debes evaluar si puedes cuidarlo a diario, si tienes el entorno adecuado, las implicaciones económicas (alimento y veterinario), qué harás en vacaciones y la compatibilidad con otras mascotas."
  },
  {
    pregunta: "¿Dónde buscar?",
    respuesta: "Se recomienda acudir a protectoras o centros de acogida profesionales donde puedan asesorarte según tus necesidades. También se pueden adquirir de criadores con pedigrí o conocidos. Se debe evitar comprar por Internet."
  },
  {
    pregunta: "¿Gato o gatito?",
    respuesta: "Los gatitos son adorables pero requieren más trabajo y su personalidad final es difícil de predecir. Los gatos adultos son más sensatos, predecibles y a menudo son ignorados en las adopciones."
  },
  {
    pregunta: "Vida en interiores",
    respuesta: "Los gatos pueden adaptarse a vivir sin jardín siempre que tengan espacio, estímulos, rascadores y lugares para escalar. Los gatos de interior tienen menos riesgo de enfermedades infecciosas pero tienden a ganar peso con facilidad."
  },
  {
    pregunta: "Costes",
    respuesta: "Mantener un gato conlleva gastos mensuales en comida (10-20 €) y arena (5-10 €), además de gastos veterinarios regulares y equipamiento inicial."
  },
  {
    pregunta: "Integración en el hogar",
    respuesta: "Es vital permitir que el gato se acostumbre lentamente. Se recomienda confinarlo en unas pocas habitaciones inicialmente y mantener su comida y ropa de cama habitual para facilitar la transición."
  },
  {
    pregunta: "Niños",
    respuesta: "Se debe enseñar a los niños que el gato es un ser vivo que siente dolor y miedo, no un juguete. El contacto inicial debe ser supervisado y nunca hay que dejar a niños pequeños solos con el animal."
  },
  {
    pregunta: "Lenguaje corporal",
    respuesta: "Los gatos se comunican mediante la cola, postura, cara y vocalizaciones.\n• Cola vertical y vibrante: Muy contento de verte.\n• Cola dando golpes: Excitado, enfadado o irritable.\n• Pelos de punta: Enfado o agresividad defensiva."
  },
  {
    pregunta: "Alimentación",
    respuesta: "Son carnívoros obligados. Deben comer alimento específico para gatos de alta calidad. Se debe evitar la leche de vaca, ya que causa diarrea."
  },
  {
    pregunta: "Descanso y juguetes",
    respuesta: "Prefieren lugares elevados, tranquilos y limpios. No necesitan juguetes caros; cajas de cartón o bolas de papel pueden ser suficientes para evitar el aburrimiento."
  },
  {
    pregunta: "Frecuencia veterinaria",
    respuesta: "Se recomiendan revisiones anuales para adultos y al menos dos veces al año para gatos mayores de 10 años. Los gatos suelen disimular muy bien sus signos de enfermedad."
  },
  {
    pregunta: "Vacunación",
    respuesta: "Los gatitos deben empezar a vacunarse entre las 6 y 9 semanas de vida. Las vacunas esenciales incluyen panleucopenia, rinotraqueítis y calicivirus."
  },
  {
    pregunta: "Identificación",
    respuesta: "El microchip es el sistema más fiable y permanente para recuperar a un gato perdido. Se inyecta bajo la piel y dura toda la vida."
  },
  {
    pregunta: "Tóxicos",
    respuesta: "Cuidado con las plantas (como los lirios) y nunca utilices productos antipulgas diseñados para perros en un gato, ya que pueden ser mortales."
  },
  {
    pregunta: "Esterilización",
    respuesta: "Se recomienda realizarla alrededor de los 4 meses de edad para prevenir camadas no deseadas, comportamientos molestos y ciertas enfermedades."
  },
  {
    pregunta: "Zoonosis y embarazo",
    respuesta: "Algunas enfermedades pueden pasar de gatos a humanos, pero con higiene básica (lavarse las manos, limpiar la bandeja de arena a diario) el riesgo es mínimo. No es necesario deshacerse del gato durante el embarazo; basta con que otra persona limpie la arena o usar guantes."
  }
];

export default function PreguntasPage() {
  const [abierto, setAbierto] = useState(null);

  const toggle = (idx) => {
    setAbierto(abierto === idx ? null : idx);
  };

  return (
    <main style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", color: "#2c2416", marginBottom: "2rem" }}>
        Preguntas Frecuentes sobre Gatos
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {preguntas.map((item, idx) => (
          <div key={idx} style={{
            border: "1px solid rgba(201,180,154,0.3)",
            borderRadius: 8, overflow: "hidden"
          }}>
            <button
              onClick={() => toggle(idx)}
              style={{
                width: "100%", textAlign: "left", padding: "1rem 1.25rem",
                background: abierto === idx ? "rgba(212,133,58,0.08)" : "#fff",
                border: "none", cursor: "pointer", fontSize: "0.95rem",
                fontWeight: 600, color: "#2c2416",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              {item.pregunta}
              <span style={{
                fontSize: "0.75rem", color: "#c9b49a",
                transform: abierto === idx ? "rotate(180deg)" : "none",
                transition: "transform 0.2s"
              }}>▼</span>
            </button>
            {abierto === idx && (
              <div style={{
                padding: "0 1.25rem 1rem", fontSize: "0.9rem",
                color: "#6b5c44", lineHeight: 1.6, whiteSpace: "pre-line"
              }}>
                {item.respuesta}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
