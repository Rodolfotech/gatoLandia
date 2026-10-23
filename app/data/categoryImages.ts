// Imagen principal de cada categoría (home y página de categoría).
export const categoryImages: Record<string, string> = {
            salud: "https://i.postimg.cc/rdZmhvQd/salud-gatitos.webp",
            comportamiento: "https://i.postimg.cc/G8Bp6q5z/comportamiento-gatuno.webp",
            alimentacion: "https://i.postimg.cc/ph9d3q60/alimentacion-gatitos.webp",
            juego: "https://i.postimg.cc/PLVx6B2Z/juegos-gatitos.webp",
            etapas: "https://i.postimg.cc/7GCLjmW0/etapas-de-vida.webp",
            emergencia: "https://i.postimg.cc/9R4fsJnt/emergencia-gatuna.webp",
            adopcion: "https://i.postimg.cc/2bP5Yhs9/adopcion.webp",
            razas: "https://i.postimg.cc/GBg2MZqG/razas-gatos.webp",
            "adquisicion-responsable": "https://i.postimg.cc/nj6LxByR/adquisicion-responsable.webp",
            historia: "https://i.postimg.cc/8JFCxt0L/historia-origen-expansion.webp",
            "cuidado-gatito": "https://i.postimg.cc/jwWjBZFc/cuidado-gatuno.webp",
            "tenencia-responsable": "https://i.postimg.cc/f3qLH6Bd/tenencia-responsable.webp",
            castracion: "https://i.postimg.cc/WFD4xXHW/castracion.webp",
            "impacto-conciencia": "https://i.postimg.cc/VrSN2DVt/impacto-conciencia.webp",
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
