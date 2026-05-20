import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con AlmaGatuna · Enciclopedia Felina. Envíanos tus dudas, sugerencias o historias sobre tu compañero felino.",
  openGraph: {
    title: "Contacto · AlmaGatuna · Enciclopedia Felina",
    description: "Contáctanos para compartir tus historias y dudas sobre gatos.",
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
