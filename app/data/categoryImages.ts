// Imagen principal de cada categoría (home y página de categoría).
export const categoryImages: Record<string, string> = {
            salud: "/images/salud-gatitos.webp",
            comportamiento: "/images/comportamiento-gatuno.webp",
            alimentacion: "/images/alimentacion-gatitos.webp",
            juego: "/images/juegos-gatitos.webp",
            etapas: "/images/etapas-de-vida.webp",
            emergencia: "/images/emergencia-gatuna.webp",
            adopcion: "/images/adopcion.webp",
            razas: "/images/razas-gatos.webp",
            "adquisicion-responsable": "/images/adquisicion-responsable.webp",
            historia: "/images/historia-origen-expansion.webp",
            "cuidado-gatito": "/images/cuidado-gatuno.webp",
            "tenencia-responsable": "/images/tenencia-responsable.webp",
            castracion: "/images/castracion.webp",
            "impacto-conciencia": "/images/impacto-conciencia.webp",
};

// Texto alternativo de cada imagen de categoría, según lo que muestra.
export const categoryImageAlt: Record<string, string> = {
  "adopcion": "Cuatro gatitos juntos sobre una alfombra en una casa luminosa",
  "adquisicion-responsable": "Persona con correa de gato, junto a un gato y juguetes en el suelo",
  "alimentacion": "Gatito comiendo de un cuenco junto a un ratón de juguete",
  "castracion": "Gato con collar isabelino en la consulta veterinaria",
  "comportamiento": "Gato naranja rascando un poste junto a un sofá",
  "cuidado-gatito": "Persona cepillando a un gato sobre un sofá",
  "emergencia": "Gatito gris atendido por una persona con guantes en una clínica",
  "etapas": "Gatitos de distintas edades sobre una manta",
  "historia": "Pintura antigua con gatos, de estilo egipcio",
  "impacto-conciencia": "Personas con gatos en un espacio al aire libre",
  "juego": "Gatitos jugando con juguetes junto a un rascador",
  "razas": "Cinco gatos de distintas razas sentados en fila",
  "salud": "Veterinaria revisando a un gato con un estetoscopio",
  "tenencia-responsable": "Persona cuidando a un gato con juguetes y comida en casa",
};

// Imagen para compartir (1200×630). Las categorías sin imagen propia usan la general.
export const defaultOgImage = "/featuredcontent/og-cuidadoIntegral.webp";

const categoryOgImages: Record<string, string> = {
  castracion: "/featuredcontent/og-castracion.webp",
  "impacto-conciencia": "/featuredcontent/og-impactoConciencia.webp",
  "tenencia-responsable": "/featuredcontent/og-tenenciaResponsable.webp",
};

export function ogImageFor(categorySlug?: string) {
  return (categorySlug && categoryOgImages[categorySlug]) || defaultOgImage;
}
