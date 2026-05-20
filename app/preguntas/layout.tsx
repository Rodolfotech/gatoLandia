import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description: "Respuestas a las preguntas más frecuentes sobre gatos: alimentación, salud, comportamiento, adopción, vacunación y más.",
  openGraph: {
    title: "Preguntas Frecuentes · AlmaGatuna · Enciclopedia Felina",
    description: "Todas las respuestas a tus dudas sobre el cuidado felino.",
  },
};

export default function PreguntasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
