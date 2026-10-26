import type { Metadata } from "next";
import HomePage from "./components/HomePage";

// Solo la descripción: el resto de metadatos (título, Open Graph, Twitter) se hereda del layout.
export const metadata: Metadata = {
  description:
    "Enciclopedia felina en español: guías sobre salud, comportamiento, alimentación, cuidados y adopción de gatos, escritas para quienes conviven con un gato.",
};

export default function Page() {
  return <HomePage />;
}
