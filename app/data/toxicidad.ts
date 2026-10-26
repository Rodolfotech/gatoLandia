/**
 * Semáforo de alimentos y plantas para gatos.
 * verde: puede comerlo en pequeñas cantidades, sin sal, azúcar ni condimentos.
 * amarillo: consulta al veterinario antes de dárselo.
 * rojo: no se lo des; si lo ha comido, llama al veterinario cuanto antes.
 *
 * Los casos de los grupos "alimento" y "planta" vienen de guías veterinarias. Las entradas marcadas con
 * "(revisar)" son de criterio general y deben confirmarse con un veterinario antes de publicar cambios.
 */

export type Nivel = "verde" | "amarillo" | "rojo";

export interface Elemento {
  nombre: string;
  /** Otros nombres con los que la gente lo busca (nombre común, científico, variantes). */
  alias: string[];
  tipo: "alimento" | "planta";
  nivel: Nivel;
  nota: string;
}

export const ELEMENTOS: Elemento[] = [
  // Alimentos de uso humano
  { nombre: "Chocolate", alias: ["cacao", "bombones", "cocoa"], tipo: "alimento", nivel: "rojo", nota: "Contiene teobromina y cafeína. Puede causar aceleración del corazón, temblores, vómitos y diarrea, e incluso la muerte." },
  { nombre: "Cebolla", alias: ["cebollin", "cebolleta", "cebollino"], tipo: "alimento", nivel: "rojo", nota: "Daña los glóbulos rojos y puede causar anemia. Es peligrosa cruda, cocida o en polvo." },
  { nombre: "Ajo", alias: ["ajos"], tipo: "alimento", nivel: "rojo", nota: "Pertenece a la familia de la cebolla y daña los glóbulos rojos, incluso en pequeñas cantidades." },
  { nombre: "Puerro", alias: ["puerros"], tipo: "alimento", nivel: "rojo", nota: "Pertenece a la familia de la cebolla y daña los glóbulos rojos." },
  { nombre: "Uvas y pasas", alias: ["uva", "pasas", "pasa"], tipo: "alimento", nivel: "rojo", nota: "Pueden causar insuficiencia renal aguda, incluso en cantidades muy pequeñas." },
  { nombre: "Café, té, bebidas energéticas y refrescos", alias: ["cafe", "café", "té", "te", "cafeina", "cafeína", "energética", "refresco", "bebida energética"], tipo: "alimento", nivel: "rojo", nota: "La cafeína afecta al sistema nervioso y al corazón." },
  { nombre: "Alcohol", alias: ["cerveza", "vino", "licor", "trago"], tipo: "alimento", nivel: "rojo", nota: "El hígado del gato no puede procesarlo. Puede causar desorientación, coma o paro respiratorio." },
  { nombre: "Aguacate", alias: ["palta", "avocado"], tipo: "alimento", nivel: "rojo", nota: "Contiene persina y mucha grasa. Puede causar pancreatitis y problemas digestivos." },
  { nombre: "Huesos cocidos", alias: ["hueso", "hueso de pollo", "huesos de pollo", "espinas"], tipo: "alimento", nivel: "rojo", nota: "Se astillan con facilidad y pueden perforar el esófago, el estómago o los intestinos." },
  { nombre: "Pepitas y huesos de frutas", alias: ["pepita", "semillas de manzana", "carozo", "hueso de cereza", "hueso de durazno", "hueso de melocotón", "hueso de ciruela"], tipo: "alimento", nivel: "rojo", nota: "Liberan cianuro al digerirse y pueden causar asfixia u obstrucción." },
  { nombre: "Masa de pan con levadura cruda", alias: ["masa", "masa de pan", "levadura"], tipo: "alimento", nivel: "rojo", nota: "Sigue fermentando en el estómago, genera gas y alcohol, y causa dolor abdominal intenso." },
  { nombre: "Nuez de macadamia", alias: ["macadamia", "macadamias", "nuez macadamia"], tipo: "alimento", nivel: "rojo", nota: "Muy tóxica para gatos. Causa debilidad muscular, temblores, fiebre, vómitos y dificultad para caminar." },
  { nombre: "Frutos secos", alias: ["nueces", "almendras", "maní", "mani", "cacahuates", "avellanas", "pistachos"], tipo: "alimento", nivel: "rojo", nota: "Su alto contenido de grasa puede causar pancreatitis, y existe riesgo de asfixia y obstrucción intestinal. Pueden contener micotoxinas que dañan el hígado. Están prohibidos." },
  { nombre: "Leche y derivados", alias: ["leche", "queso", "yogur", "yogurt", "crema"], tipo: "alimento", nivel: "rojo", nota: "No es tóxica, pero la mayoría de los gatos adultos son intolerantes a la lactosa: provoca gases, cólicos y diarrea severa, que puede deshidratar. Solo se acepta leche felina específica (KMR) o lácteos deslactosados veterinarios, como premio esporádico." },
  { nombre: "Manzana sin pepitas", alias: ["manzana"], tipo: "alimento", nivel: "verde", nota: "La pulpa, sin semillas ni corazón, puede darse en pequeñas cantidades (revisar)." },
  { nombre: "Zapallo", alias: ["calabaza", "zapallo cocido", "calabacín"], tipo: "alimento", nivel: "verde", nota: "Cocido, sin sal ni condimentos y en pequeñas cantidades, puede ser parte de la dieta (revisar)." },
  { nombre: "Zanahoria cocida", alias: ["zanahoria"], tipo: "alimento", nivel: "verde", nota: "Cocida y en trozos pequeños, en pequeñas cantidades (revisar)." },
  { nombre: "Pollo cocido sin hueso", alias: ["pollo", "pollo cocido"], tipo: "alimento", nivel: "verde", nota: "Cocido, sin hueso, piel ni condimentos y en pequeñas cantidades (revisar)." },
  { nombre: "Avena, trigo o cebada (germinados)", alias: ["avena", "trigo", "cebada", "germinado", "pasto para gatos"], tipo: "alimento", nivel: "verde", nota: "Los brotes tiernos de estos cereales son útiles para que el gato regurgite pelo." },
  { nombre: "Manzanilla", alias: ["camomila", "chamomila"], tipo: "planta", nivel: "rojo", nota: "Contiene cumarinas, que pueden causar vómitos, diarrea, falta de apetito y, con uso continuo, problemas de sangrado. No darla por vía oral ni aplicar infusiones en ojos o piel sin indicación veterinaria." },
  { nombre: "Jengibre", alias: [], tipo: "planta", nivel: "amarillo", nota: "No es tóxico en cantidades mínimas, pero no es necesario en casa. Crudo, irrita la boca y causa babeo, vómitos o ardor. Solo con indicación veterinaria." },

  // Plantas tóxicas
  { nombre: "Lirio o azucena", alias: ["lirio", "azucena", "lilium", "hemerocallis", "lilia"], tipo: "planta", nivel: "rojo", nota: "Extremadamente mortal. Todas sus partes, incluido el agua del florero, pueden causar falla renal aguda en pocas horas." },
  { nombre: "Potus", alias: ["pothos", "epipremnum", "potus aureum"], tipo: "planta", nivel: "rojo", nota: "Tiene cristales de oxalato de calcio. Causa babeo, inflamación de la boca y dolor." },
  { nombre: "Costilla de Adán o monstera", alias: ["monstera", "costilla de adan", "monstera deliciosa"], tipo: "planta", nivel: "rojo", nota: "Causa irritación intensa en la boca, babeo, dificultad para tragar y vómitos." },
  { nombre: "Dieffenbachia", alias: ["difenbaquia", "difenbaquia", "dieffenbaquia"], tipo: "planta", nivel: "rojo", nota: "Su savia causa inflamación severa en la boca y la garganta, y puede afectar la respiración." },
  { nombre: "Eucalipto", alias: ["eucaliptus", "eucalyptus"], tipo: "planta", nivel: "rojo", nota: "Sus aceites no los procesa el hígado del gato. Causa salivación, vómitos y debilidad." },
  { nombre: "Adelfa", alias: ["adelfa", "oleandro", "nerium oleander", "laurel rosa"], tipo: "planta", nivel: "rojo", nota: "Contiene glucósidos cardíacos que alteran el ritmo del corazón y pueden causar la muerte." },
  { nombre: "Hiedra", alias: ["hiedra", "hedera"], tipo: "planta", nivel: "rojo", nota: "Causa irritación digestiva, diarrea, úlceras por contacto y baja la frecuencia cardíaca." },
  { nombre: "Flor de Navidad o pascua", alias: ["poinsettia", "flor de navidad", "flor de pascua", "euphorbia"], tipo: "planta", nivel: "rojo", nota: "Su savia irrita la piel y las mucosas, y causa babeo o vómitos." },
  { nombre: "Espatifilo o cuna de Moisés", alias: ["espatifilo", "cuna de moises", "cuna de moisés", "spathiphyllum"], tipo: "planta", nivel: "rojo", nota: "Causa irritación en la boca, ardor y malestar estomacal." },
  { nombre: "Lengua de suegra o sansevieria", alias: ["sansevieria", "lengua de suegra", "sanseviera"], tipo: "planta", nivel: "rojo", nota: "Puede causar náuseas, vómitos y diarrea si el gato come sus hojas." },
  { nombre: "Marihuana", alias: ["cannabis", "marihuana"], tipo: "planta", nivel: "rojo", nota: "Puede causar depresión del sistema nervioso, temblores y pérdida de coordinación." },
  { nombre: "Tulipán", alias: ["tulipan", "tulipanes"], tipo: "planta", nivel: "rojo", nota: "Sus bulbos y flores causan irritación digestiva, babeo y vómitos." },
  { nombre: "Azalea", alias: ["azalea", "azaleas", "rododendro"], tipo: "planta", nivel: "rojo", nota: "Causa vómitos, babeo, debilidad y en casos graves afecta al corazón." },
  { nombre: "Hortensia", alias: ["hortensia", "hortensias"], tipo: "planta", nivel: "rojo", nota: "Causa vómitos, diarrea y malestar digestivo." },
  { nombre: "Jacinto", alias: ["jacinto", "jacintos"], tipo: "planta", nivel: "rojo", nota: "Causa irritación de la boca, vómitos y diarrea." },
  { nombre: "Laurel", alias: ["laurel", "laurel de jardin"], tipo: "planta", nivel: "rojo", nota: "Causa vómitos, diarrea y alteraciones del sistema nervioso." },
  { nombre: "Hierba gatera o nébeda", alias: ["nepeta", "nepeta cataria", "nebeda", "nébeda", "hierba gatera", "catnip"], tipo: "planta", nivel: "verde", nota: "Su olor atrae a la mayoría de los gatos. Puede causar excitación pasajera y no es para todos." },
];
