// Títulos y descripciones SEO por tema, cuando el texto original no cumple los límites
// (título ≤ 47 caracteres antes del sufijo "· AlmaGatuna"; descripción de 120 a 160).
// Clave: ruta del tema, sin dominio.
export interface SeoOverride {
  title?: string;
  description?: string;
}

export const topicSeoOverrides: Record<string, SeoOverride> = {
  "/categoria/adopcion/bienvenida/guia-bienvenida-cuidados": { title: "Bienvenido a casa: primer día con tu gato" },
  "/categoria/adquisicion-responsable/guia-adquisicion-responsable/adquisicion-responsable-global": { title: "Adquisición responsable: guía legal y ética" },
  "/categoria/alimentacion/dietas/comida-humeda-vs-seca": { title: "Comida húmeda vs. pienso seco para gatos" },
  "/categoria/alimentacion/dietas/dieta-barf": { title: "Dieta BARF para gatos: pros y contras" },
  "/categoria/alimentacion/prohibidos/toxicos-comunes": { title: "Alimentos tóxicos para gatos: qué evitar" },
  "/categoria/castracion/guia-infantil/por-que-castrar": { description: "Por qué castrar a los gatitos: beneficios para su salud y su comportamiento, y cuándo conviene hacerlo según el veterinario." },
  "/categoria/comportamiento/bienestar-felino/guia-dolor-silencioso": { title: "Dolor en gatos: señales y cómo ayudarle" },
  "/categoria/comportamiento/comportamiento-felino/presentacion-entre-gatos": { title: "Cómo presentar dos gatos y que convivan" },
  "/categoria/comportamiento/conducta/arañar-muebles": { title: "Por qué los gatos arañan los muebles" },
  "/categoria/comportamiento/entrenamiento/clicker-training": { title: "Clicker training para gatos paso a paso" },
  "/categoria/comportamiento/entrenamiento/guia-entrenamiento-casa": { title: "Entrenar a tu gato en casa: guía divertida" },
  "/categoria/comportamiento/entrenamiento/guia-paseos-correa": { title: "Enseñar a tu gato a caminar con correa" },
  "/categoria/comportamiento/estrés/guia-estres-ansiedad": { title: "Estrés en gatos: señales y cómo ayudar" },
  "/categoria/comportamiento/interio-exterior/guia-para-entender-y-cuidar": { title: "Comportamiento felino: entender a tu gato" },
  "/categoria/comportamiento/lenguaje/comunicacion-corporal": { title: "Comunicación corporal de los gatos" },
  "/categoria/cuidado-gatito/principios-fundamentales/guia-principios": { title: "Principios básicos de cuidado del gatito", description: "Principios básicos para la supervivencia y el cuidado de un gatito: alimentación, calor, higiene y señales de alerta que requieren atención veterinaria." },
  "/categoria/emergencia/emergencias-felinas/guia-primeros-auxilios-gatitos": { title: "Primeros auxilios para gatitos: qué hacer" },
  "/categoria/etapas/gatito/primeras-semanas": { title: "Las primeras semanas de vida del gatito" },
  "/categoria/etapas/genetica-felina/guia-genetica-colores": { title: "Genética felina: colores y herencia" },
  "/categoria/etapas/reproduccion-felina/guia-gestacion-gatas": { title: "Gestación en gatas: explicación sencilla" },
  "/categoria/etapas/senior/cuidados-senior": { title: "Cuidados del gato mayor: guía práctica" },
  "/categoria/historia/historia-felina/corazon-origen-egipto": { title: "Expansión del gato por el mundo" },
  "/categoria/historia/historia-felina/origen-encuentro-nilo": { title: "El gato y el Nilo: origen antiguo" },
  "/categoria/juego/juguetes/canas-y-plumas": { title: "Cañas y juguetes de presa para gatos" },
  "/categoria/salud/alergia/guia-alergia-gatos": { title: "Alergia a los gatos: cómo convivir" },
  "/categoria/salud/dental/sarro-gingivitis": { title: "Sarro y gingivitis en gatos: prevención" },
  "/categoria/salud/diabetes-felina/diabetes-guia-completa": { title: "Diabetes felina: guía completa y manejo" },
  "/categoria/salud/enfermedades/diabetes-felina": { title: "Diabetes felina: síntomas y tratamiento" },
  "/categoria/salud/enfermedades/enfermedad-renal": { title: "Enfermedad renal crónica en gatos" },
  "/categoria/salud/obesidad-felina/guia-obesidad-prevencion": { title: "Obesidad felina: prevención y cuidado" },
  "/categoria/salud/prevencion/primeros-auxilios": { title: "Primeros auxilios felinos: qué hacer" },
  "/categoria/salud/prevencion/vacunacion": { title: "Vacunación felina: calendario y vacunas" },
  "/categoria/tenencia-responsable/enriquecimiento-ambiental/5-pilares-ambientales": { title: "Enriquecimiento ambiental para gatos", description: "Enriquecimiento ambiental para gatos: los cinco pilares del entorno que favorecen su bienestar, reducen el estrés y previenen conductas problemáticas." },
  "/categoria/tenencia-responsable/gestion-reproductiva/esterilizacion-evidencia": { title: "Esterilización felina y control ético", description: "Esterilización felina y control poblacional: qué dice la evidencia científica sobre salud, comportamiento y responsabilidad con los gatos de la comunidad." },
  "/categoria/tenencia-responsable/marco-etico-legal/marco-etico-legal": { title: "Marco ético y legal de la tenencia felina", description: "Marco ético y legal de la tenencia de gatos: responsabilidades del cuidador, bienestar animal, esterilización y normas vigentes en cada país." },
  "/categoria/tenencia-responsable/nutricion-cientifica/nutricion-etapas": { description: "Nutrición felina por etapas de vida: qué necesita un gatito, un adulto y un senior, y cómo elegir un alimento completo y balanceado para cada una." },
  "/categoria/tenencia-responsable/principios-universales/guia-tenencia-responsable": { title: "Tenencia responsable de gatos: guía básica" },
  "/categoria/tenencia-responsable/salud-preventiva/salud-preventiva-global": { description: "Salud preventiva felina: vacunas, desparasitación, controles veterinarios periódicos y detección temprana de enfermedades." },
  "/categoria/tenencia-responsable/vinculo-largo-plazo/vinculo-humano-felino": { title: "Vínculo humano-felino a largo plazo", description: "El vínculo entre humanos y gatos y el compromiso a largo plazo: tiempo, costos, cuidados y acompañamiento durante toda la vida del felino." },
};
