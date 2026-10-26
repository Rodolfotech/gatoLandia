/** Fuentes bibliográficas en las que se basan los artículos. Los datos vienen de cada documento original. */
export interface Source {
  id: string;
  authors: string;
  title: string;
  publisher?: string;
  year?: string;
}

export const sources: Record<string, Source> = {
  sanchezSilva: {
    id: "sanchezSilva",
    authors: "Sánchez, A. E. y Silva, M. E.",
    title: "Biología de la gestación en la gata doméstica (Felis catus)",
    publisher: "Archivos de Medicina Veterinaria, 34(2)",
    year: "2002",
  },
  stornelli: {
    id: "stornelli",
    authors: "Stornelli, M. A.",
    title: "Particularidades fisiológicas de la reproducción en felinos",
    publisher: "Revista Brasileira de Reprodução Animal, 31(1), 71-76",
    year: "2007",
  },
  hardy: {
    id: "hardy",
    authors: "Hardy, R. M.",
    title: "Diabetes mellitus felina: un reto diagnóstico y terapéutico",
    publisher: "V Jornadas de AMVAC, Madrid",
    year: "1988",
  },
  sagrero: {
    id: "sagrero",
    authors: "Sagrero-del Moral, M. y Castañeda-Ortega, J. C.",
    title: "La obesidad en gatos, un problema recurrente",
    publisher: "Facultad de Medicina Veterinaria y Zootecnia, Universidad Popular Autónoma de Veracruz",
  },
  dessal: {
    id: "dessal",
    authors: "Dessal Marino, F. y Callealta Rodríguez, I.",
    title: "Manejo del dolor en el gato",
  },
  baciero: {
    id: "baciero",
    authors: "Baciero, G.",
    title: "El estrés en el gato",
    publisher: "Comunicación Científica, Royal Canin Ibérica",
  },
  campsGenetica: {
    id: "campsGenetica",
    authors: "Camps, J.",
    title: "Genética en gatos y normas de color del pelo",
  },
  campsOrigen: {
    id: "campsOrigen",
    authors: "Camps i Rabadà, J.",
    title: "Origen nilótico y único del gato",
  },
  arroyo: {
    id: "arroyo",
    authors: "Arroyo Solera, P.",
    title: "Métodos de esterilización en gatos",
  },
  irusta: {
    id: "irusta",
    authors: "Irusta, M.",
    title: "Razas de gatos",
    publisher: "El Mundo",
  },
  trillo: {
    id: "trillo",
    authors: "Trillo, L.",
    title: "Guía para entender al gato",
    publisher: "Terapia Felina (texto cedido)",
  },
  lenguajeGatos: {
    id: "lenguajeGatos",
    authors: "Autor no identificado",
    title: "El lenguaje de los gatos",
    publisher: "Página Feliz de Vainilla y Canela, Comfenalco Quindío. Datos de El Tiempo, 17 de febrero de 2020",
    year: "2020",
  },
  frank: {
    id: "frank",
    authors: "Frank, D.",
    title: "Comportamiento felino",
  },
  schondube: {
    id: "schondube",
    authors: "Schondube, J. E. y Orduña-Villaseñor, M.",
    title: "La vida secreta de nuestros gatos",
    publisher: "Universidad Michoacana de San Nicolás de Hidalgo, año 7, n.º 37",
  },
  marquez: {
    id: "marquez",
    authors: "Márquez Peña, Y.",
    title: "Primeros auxilios para perros y gatos",
    publisher: "Seminario Evacuación de animales y simulacros, CDMX",
    year: "2017",
  },
  upv: {
    id: "upv",
    authors: "Universitat Politècnica de València",
    title: "Alergia a los gatos. Qué hacer",
    publisher: "Universitat Politècnica de València",
  },
  spcaPresentar: {
    id: "spcaPresentar",
    authors: "San Francisco SPCA",
    title: "Gatos: cómo presentar a dos gatos",
    publisher: "San Francisco SPCA",
  },
  spcaCorrea: {
    id: "spcaCorrea",
    authors: "San Francisco SPCA",
    title: "Gatos: entrenamiento para caminar con correa",
    publisher: "San Francisco SPCA",
  },
  paidotribo: {
    id: "paidotribo",
    authors: "Editorial Paidotribo",
    title: "Adiestramiento para gatos",
    publisher: "Paidotribo",
  },
  proteccionFelina: {
    id: "proteccionFelina",
    authors: "Protección Felina",
    title: "Guía para el cuidado del gatito desde los cero días de vida",
    publisher: "proteccionfelina.org",
  },
  affinity: {
    id: "affinity",
    authors: "Affinity Petcare",
    title: "Guía Advance del cuidado del gatito",
    publisher: "Affinity Petcare",
  },
  covm: {
    id: "covm",
    authors: "Colegio Oficial de Veterinarios de Madrid",
    title: "Recomendaciones al adoptante",
    publisher: "Colegio Oficial de Veterinarios de Madrid",
  },
  avepa: {
    id: "avepa",
    authors: "AVEPA y FVE",
    title: "Preguntas y respuestas relativas a los gatos",
    publisher: "Asociación Veterinaria Española de Pequeños Animales",
  },
  pfi: {
    id: "pfi",
    authors: "Pet Food Institute",
    title: "Enciclopedia felina",
    publisher: "Pet Food Institute",
  },
  sietevidas: {
    id: "sietevidas",
    authors: "Siete Vidas",
    title: "Manual de tenencia responsable de gatos",
    publisher: "Siete Vidas, Santiago de Chile",
  },
};

/** Fuentes por tema. Clave: slug del tema. Solo aparecen los temas cuyo contenido se basa en una fuente identificada. */
export const topicSources: Record<string, string[]> = {
  "guia-bienvenida-cuidados": ["covm"],
  "adquisicion-responsable-global": ["avepa", "covm"],
  "comida-humeda-vs-seca": ["pfi"],
  "dieta-barf": ["pfi"],
  "por-que-castrar": ["arroyo"],
  "esterilizacion-evidencia": ["arroyo"],
  "guia-para-entender-y-cuidar": ["frank", "trillo"],
  "presentacion-entre-gatos": ["spcaPresentar"],
  "arañar-muebles": ["frank"],
  "comunicacion-corporal": ["lenguajeGatos"],
  "parpadeo-lento": ["lenguajeGatos"],
  "guia-entrenamiento-casa": ["paidotribo"],
  "clicker-training": ["paidotribo"],
  "guia-paseos-correa": ["spcaCorrea"],
  "guia-dolor-silencioso": ["dessal"],
  "guia-estres-ansiedad": ["baciero"],
  "guia-neonatos": ["proteccionFelina"],
  "guia-principios": ["proteccionFelina"],
  "guia-destete": ["affinity"],
  "primeras-semanas": ["affinity"],
  "guia-primeros-auxilios-gatitos": ["marquez"],
  "primeros-auxilios": ["marquez"],
  "guia-genetica-colores": ["campsGenetica"],
  "guia-gestacion-gatas": ["sanchezSilva", "stornelli"],
  "origen-encuentro-nilo": ["campsOrigen"],
  "vida-secreta-gatos": ["schondube"],
  "guia-completa-razas": ["irusta", "pfi"],
  "vacunacion": ["pfi"],
  "desparasitacion": ["pfi"],
  "guia-alergia-gatos": ["upv"],
  "diabetes-guia-completa": ["hardy"],
  "diabetes-felina": ["hardy"],
  "guia-obesidad-prevencion": ["sagrero"],
  "guia-tenencia-responsable": ["sietevidas"],
  "marco-etico-legal": ["sietevidas"],
};

/** Devuelve las fuentes de un tema, en el orden en que están declaradas. */
export function getTopicSources(topicSlug: string): Source[] {
  return (topicSources[topicSlug] ?? []).map((id) => sources[id]);
}

/** Cita en texto plano, por ejemplo: "Hardy, R. M. (1988). Título. Editorial." */
export function formatCitation({ authors, title, publisher, year }: Source): string {
  return [`${authors} (${year ?? "s. f."}). ${title}.`, publisher && `${publisher}.`].filter(Boolean).join(" ");
}
