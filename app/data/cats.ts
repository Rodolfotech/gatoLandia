// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface Section {
  heading: string;
  body: string;
  image?: string;
  adSlot?: string;
}

export interface Topic {
  slug: string;
  title: string;
  intro: string;
  sections: Section[];
}

export interface Subcategory {
  slug: string;
  label: string;
  topics: Topic[];
}

export interface Category {
  slug: string;
  label: string;
  seoTitle: string;
  emoji: string;
  color: string;
  bg: string;
  description: string;
  intro: string;
  subcategories: Subcategory[];
}

// ─── Datos ────────────────────────────────────────────────────────────────────

export const categories: Category[] = [
    {
    slug: "adopcion",
    label: "Adopción",
    seoTitle: "Adopción de gatos: guía responsable",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Cómo adoptar un gato con responsabilidad: qué revisar antes de llevarlo a casa, cómo preparar el hogar y cómo cuidarlo durante sus primeros días.",
    intro: "Adoptar un gato es darle un hogar a un animal que depende de ti para todo. Antes de llevarlo a casa conviene pensar en el tiempo que podrás dedicarle, en el presupuesto para su cuidado durante muchos años y en si todas las personas que viven contigo están de acuerdo.\n\nEn esta sección encontrarás qué revisar antes de elegir un gato, cómo preparar el espacio para su llegada y qué hacer durante los primeros días, que son los más delicados para su adaptación. También verás cómo acompañar la convivencia con otros animales y cómo organizar la llegada de un gato adulto.\n\nCada gato tiene su propio carácter, y uno que encaje con tu forma de vivir suele dar mejores resultados que elegir solo por su apariencia. Lee los temas con calma y vuelve a ellos cuando tengas dudas. Muchos refugios acompañan la adopción durante las primeras semanas, así que no dudes en preguntar.",
    subcategories: [
     {
  slug: "bienvenida",
  label: "Bienvenida",
  topics: [
    {
      slug: "guia-bienvenida-cuidados",
      title: "Bienvenido a casa: cómo cuidar a tu nuevo gato desde el primer día",
      intro: "¡Felicidades por la adopción! Acoger a un gato es una experiencia maravillosa, pero también implica responsabilidad. Los primeros días son cruciales para su adaptación. Aquí tienes todo lo que necesitas saber para asegurar su salud, bienestar y una convivencia feliz.",
      sections: [
        {
          heading: "Los Primeros Días: Vigilancia y Adaptación",
          image: "/images/bienvenidos-gatitos.webp",
          body: "El cambio de entorno genera estrés, lo que puede bajar las defensas del gato. Visita al veterinario: Lleva a tu gato a su nueva clínica de confianza cuanto antes. Entrega toda la documentación médica previa (vacunas, desparasitaciones) y sigue sus indicaciones. Qué observar: Que coma y beba con normalidad, que tenga energía acorde a su edad, que las heces sean consistentes (algunas blandas iniciales por el cambio de dieta son normales, pero no debe haber diarrea persistente) y ausencia de síntomas como tos, vómitos, mocos o legañas. Ante cualquier duda, consulta a tu veterinario.",
        },
        {
          heading: "Salud Preventiva: Vacunas, Parásitos y Esterilización",
          body: "Vacunación: Las vacunas protegen contra enfermedades graves (como la panleucopenia, el complejo respiratorio felino o la leucemia). Sigue el calendario que te indique tu veterinario. La vacuna de la rabia, aunque no siempre es obligatoria legalmente para gatos (depende de la región), está muy recomendada.  Desparasitación: Es fundamental para la salud del gato y de tu familia (zoonosis). Interna: se recomienda cada 3 meses. Externa: vital si el gato sale o tiene acceso a balcones/terrazas. Esterilización: Es la decisión más responsable y saludable. Beneficios: evita camadas no deseadas, reduce el marcaje, disminuye peleas y previene enfermedades graves (tumores de mama, piometras). Mitos: No cambia su personalidad ni los vuelve 'vagos'. Esteriliza a tu gato, sea macho o hembra, interior o exterior.",
        },
        {
          heading: "Alimentación e Hidratación",
          body: "Alimento adecuado: Usa pienso seco de calidad adaptado a su edad y condición física. Evita darle comida casera o sobras humanas. Premios: Úsalos con moderación para no causar obesidad. Agua fresca: Fundamental, coloca varios bebederos por casa, lejos de la comida y del arenero. Algunos gatos prefieren fuentes en movimiento. Incorporar comida húmeda ayuda a la hidratación. Prohibido: La leche de vaca (la mayoría de los gatos adultos son intolerantes a la lactosa). El yogur natural o queso sin sal pueden darse como premio puntual, pero no son necesarios.",
        },
        {
          heading: "Higiene y Cuidado Físico",
          body: "Los gatos necesitan tu ayuda en ciertos aspectos. Cepillado: Pelo corto una vez por semana (diario en muda); pelo largo diario para evitar nudos y bolas de pelo. Si expulsa bolas de pelo con dificultad, consulta sobre pastas de malta. Uñas: Corta solo la punta transparente, evitando la parte rosada (vascularizada). Baños: Generalmente no son necesarios, solo si está muy sucio o por indicación médica.",
        },
        {
          heading: "El Arenero: Reglas de Oro",
          body: "Un gato que no usa el arenero suele expresar un problema médico o de estrés. Cantidad: Regla N+1 (número de gatos + 1 caja). Ubicación: Lugares tranquilos, accesibles, lejos de ruidos (lavadoras) y de su comida. Tipo: A muchos no les gustan los cerrados; prueba con uno abierto y grande. Limpieza: Retira los desechos a diario y lava la caja regularmente con agua y jabón neutro (evita lejía o amoniaco). Arena: Prefieren arenas sin perfume y de textura fina.\n\nSi quieres profundizar en la higiene del arenero y en otros comportamientos del día a día, lee [Comportamiento Felino: Cómo entender y cuidar mejor a tu gato](/categoria/comportamiento/interio-exterior/guia-para-entender-y-cuidar).",
        },
        {
          heading: "Comportamiento y Enriquecimiento Ambiental",
          body: "Lenguaje: Cola erguida es saludo amistoso; cola moviéndose rápido es irritación; orejas hacia atrás indican miedo. Ronroneo puede ser bienestar, dolor o estrés. Juego: Dedica 15-20 minutos diarios a caza simulada (cañas, pelotas). Evita usar tus manos o pies. Rascadores: Proporciona rascadores estables, altos y de materiales atractivos (sisal, madera). Nunca castigues por rascar muebles; redirige y premia. Verticalidad: Necesitan lugares altos para observar y refugios seguros para esconderse. Respeta su soledad.",
        },
        {
          heading: "Consejos Específicos según la Edad",
          body: "CACHORRO: Socialización (2-8 semanas) es la etapa clave para aceptar el contacto humano y visitas al veterinario. Enséñale qué se puede morder. Acostúmbralo al transportín dejándolo abierto en casa. Protege cables y ventanas. ADULTO: Paciencia, la adaptación puede tardar semanas. Usa una habitación de aclimatación al llegar con todos sus recursos. Haz presentaciones con otros animales muy gradualmente. Mantén horarios fijos de comida y juego.",
        },
        {
          heading: "Aspectos Legales y Seguridad",
          body: "Microchip: Es obligatorio y debe tener los datos actualizados (según la normativa de tu país). Prevención de Accidentes: El Síndrome del Gato Paracaidista. Instala redes mosquiteras resistentes en ventanas y balcones. Una caída desde altura puede ser mortal; no confíes en su 'habilidad' para caer de pie. Cada gato es un mundo. Observa, respeta sus tiempos y consulta siempre a tu veterinario ante cambios bruscos.",
        }
      ],
    },
  ],
},
  ],
},
    {
    slug: "adquisicion-responsable",
    label: "Adquisición responsable",
    seoTitle: "Adquisición responsable de gatos: guía ética",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Cómo conseguir un gato de forma responsable: criaderos y refugios éticos, señales de alerta, documentación y los principios legales y éticos de la tenencia.",
    intro: "Conseguir un gato es el primer paso de una relación que puede durar más de quince años. Por eso importa de dónde viene y en qué condiciones llega a casa. Aquí encontrarás cómo distinguir a un criadero o un refugio responsable de uno que no lo es, qué documentación conviene pedir y qué señales de alerta deben hacerte dudar.\n\nTambién hablamos de los principios éticos y legales de la tenencia, como el compromiso de cuidar al gato toda su vida, atender sus necesidades de salud y bienestar, y no abandonarlo cuando cambian las circunstancias. Son temas que conviene conocer antes de decidir, no después.\n\nSi ya tienes un gato o estás pensando en uno, estas lecturas te ayudarán a tomar una decisión informada: elegir con el corazón, pero también con la cabeza.\n\nUna pregunta útil antes de elegir es si el lugar te deja visitar a los gatos, conocer a sus cuidadores y recibir información clara sobre su salud y su historia. Quien tiene nada que ocultar suele estar dispuesto a responder.",
    subcategories: [
      {
        slug: "guia-adquisicion-responsable",
        label: "Guía General",
        topics: [
          {
            slug: "adquisicion-responsable-global",
            title: "Adquisición Responsable: Guía Legal y Ética Universal",
            intro: "Adquirir un gato de raza es una decisión importante que conlleva responsabilidades legales y éticas. Cada vez más países reconocen a los animales como seres sintientes y regulan su comercio para proteger su bienestar. Esta guía cubre los principios universales para una adquisición responsable, independientemente de tu ubicación.",
            sections: [
              {
                heading: "¿Por qué elegir un Criadero Registrado?",
                image: "/images/adquisicion-responsable.webp",
                body: "Los criaderos éticos preservan la raza, cuidan la salud genética y socializan a los gatitos en ambiente familiar. La forma más segura de identificarlos es verificar su afiliación a federaciones felinas internacionales como WCF, TICA o FIFe, que exigen estándares de crianza. Ventajas de comprar con pedigree: Certificación Genética (garantiza la raza y ancestros registrados), Salud Preventiva (tests genéticos para descartar enfermedades como PKD en Persas o HCM en Maine Coons) y Socialización Temprana (crecen en hogar, no en jaulas, previniendo problemas de conducta).",
              },
              {
                heading: "Marco Legal: Derechos y Deberes",
                body: "Aunque las leyes varían por país, la mayoría exige: Microchip obligatorio (implantado y registrado antes de la entrega), Contrato de Compraventa con datos del animal, garantías de salud (FeLV/FIV), compromiso de esterilización y cláusula de devolución. Vacunaciones al día firmadas por veterinario colegiado. Infórmate siempre de la legislación local de tu país o región.\n\nPara conocer con más detalle las responsabilidades de quien cuida a un gato, lee [Marco Ético y Legal Global](/categoria/tenencia-responsable/marco-etico-legal/marco-etico-legal).",
              },
              {
                heading: "Checklist: Cómo detectar un Criadero Ético",
                body: "Antes de pagar, verifica: ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre y el entorno. Desconfía de entregas en puntos públicos. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). Es crucial para el destete emocional e inmunológico. ¿Documentación completa? Certificado de Nacimiento/Pedigree, carnet de vacunas firmado y factura o recibo. ¿Entrevista al comprador? Un buen criador preguntará por tu hogar, protecciones en ventanas y experiencia previa.",
              },
              {
                heading: "Importación Legal de Razas Exóticas",
                body: "Si buscas razas no criadas localmente (Lykoi, Toyger, Bengala), el proceso es regulado por la autoridad sanitaria de cada país. Requisitos comunes: Certificado zoosanitario internacional, vacunación antirrábica vigente y posibles cuarentenas. Se recomienda contratar una agencia de transporte de mascotas especializada para gestionar trámites aduaneros y evitar retenciones.",
              },
              {
                heading: "Cuidado con Fábricas de Gatos y Estafas",
                body: "NO COMPRES SI: Te piden dinero por adelantado sin mostrar el animal (exige videollamada en tiempo real). Venden en ferias, mercados o plazas: alta mortalidad por falta de higiene. Tienen stock infinito de múltiples razas: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud, alimentación y registros.",
              },
              {
                heading: "Conclusión",
                body: "Adquirir un gato de raza es una responsabilidad legal y moral. Al elegir un criadero registrado en federaciones internacionales, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas. Recuerda: Antes de comprar, considera también la adopción.",
              }
            ],
          },
        ],
      },
      ],
    },
  {
    slug: "alimentacion",
    label: "Alimentación",
    seoTitle: "Alimentación felina: dietas y alimentos",
    emoji: "",
    color: "#d4853a",
    bg: "#fff3e6",
    description: "Nutrición felina, dietas y alimentos: qué comen los gatos según su etapa de vida, cómo elegir una dieta completa y qué alimentos debes evitar.",
    intro: "Un gato necesita una dieta completa y equilibrada, adaptada a su etapa de vida. Por ser un carnívoro estricto, depende de proteína animal de calidad, y algunos nutrientes que para nosotros son opcionales, como la taurina, son imprescindibles para él. En esta sección verás qué come un gato según su edad, cómo elegir un alimento completo y cómo leer la etiqueta sin dejarte llevar por el marketing.\n\nTambién encontrarás las diferencias entre la comida húmeda y el pienso seco, y por qué la hidratación importa tanto. Los temas sobre alimentos prohibidos explican qué productos de la casa pueden resultar peligrosos, y las pautas para cambiar de dieta muestran cómo hacer la transición sin provocar problemas digestivos.\n\nCualquier cambio importante en la alimentación de un gato con problemas de salud debe consultarse con el veterinario. La información de esta sección te ayuda a preguntar mejor y a entender lo que te recomiende.",
    subcategories: [
      {
        slug: "dietas",
        label: "Tipos de dieta",
        topics: [
          {
            slug: "comida-humeda-vs-seca",
            title: "Comida húmeda vs. pienso seco",
            intro: "No hay un alimento que sea “el mejor” para todos los gatos. Lo importante es que sea completo, equilibrado y adecuado para la edad de tu gato, y que tome agua suficiente. La comida húmeda suele ayudar más con la hidratación, porque aporta mucha más agua en cada ración.",
            sections: [
              {
                heading: "Por qué importa el agua",
                image: "/images/comida-humeda.webp",
                body: "Los gatos descienden de animales de zonas secas. Por eso tienden a conservar agua concentrando la orina, en lugar de beber mucho más. En la naturaleza, sus presas tienen más del 60 % de agua, así que gran parte de los líquidos llega con la comida.\n\nLa comida húmeda tiene normalmente entre 70 y 80 % de agua. El pienso seco, según la clasificación de la FEDIAF, tiene alrededor del 14 % o menos. Por eso un gato que come solo pienso suele recibir menos agua en total, aunque beba de su bebedero.",
              },
              {
                heading: "Comida húmeda o pienso seco",
                body: "| **Aspecto** | **Comida húmeda** | **Pienso seco** |\n| Agua en cada ración | Mucha, entre 70 y 80 %. | Poca, alrededor del 14 % o menos. |\n| Hidratación | Ayuda a que tome más agua y a que su orina esté más diluida. | Depende de que beba suficiente por su cuenta. |\n| Salud urinaria | Puede ayudar en gatos propensos a cistitis o cálculos. No previene todos los casos. | Requiere cuidar mucho el agua. |\n| Gatos con enfermedad renal | Ayuda a mantener la hidratación, parte del manejo. | Puede usarse, pero la dieta la elige el veterinario. |\n| Control de peso | Tiene menos calorías por bocado y ayuda a sentirse saciado. Hay que calcular bien la ración. | Es fácil de medir, pero se come con facilidad. |\n| Practicidad | Se estropea antes una vez abierta y necesita refrigeración. | Se conserva bien y sirve para comederos dispensadores o juegos. |\n\nNinguno es malo por definición. Lo ideal depende de tu gato, su salud y lo que acepta comer. Por eso, antes de cambiar su dieta, conviene hablarlo con tu veterinario.",
              },
              {
                heading: "Cómo elegir un buen alimento",
                body: "• Busca un alimento completo y equilibrado, no un snack ni un complemento.\n• Mira que la proteína sea de buena calidad y que esté pensado para la edad y la condición de tu gato.\n• No elijas solo por una etiqueta como “sin cereales”. Los cereales no son necesariamente dañinos. Lo que importa es la calidad de la fórmula en conjunto.\n• Si tu gato tiene problemas renales, no improvises. La dieta renal, húmeda o seca, debe elegirla un veterinario según sus análisis y la etapa de la enfermedad.\n\nSi además quieres saber qué alimentos no debes ofrecerle, lee [Alimentos tóxicos para gatos](/categoria/alimentacion/prohibidos/toxicos-comunes).",
              },
              {
                heading: "Una combinación práctica",
                body: "En muchos gatos sanos funciona bien combinar: comida húmeda como base o como parte importante de la ración, y una cantidad controlada de pienso. Así se consigue hidratación, comodidad y variedad.\n\nEn cualquier caso, debe haber agua fresca disponible todo el tiempo, sea cual sea el alimento.\n\nCuando cambies de dieta, hazlo poco a poco, durante varios días. Así evitas que rechace la comida o tenga molestias digestivas.",
              },
            ]
          },
          {
            slug: "dieta-barf",
            title: "Dieta BARF para gatos",
            intro: "La dieta BARF consiste en ofrecer carne cruda, huesos carnosos y vísceras. Algunas personas notan mejoras, como un pelaje más bonito o heces más firmes. Sin embargo, las principales organizaciones veterinarias advierten que no hay pruebas sólidas de que sea mejor que una dieta comercial completa y equilibrada, y sí hay riesgos bien documentados.",
            sections: [
              {
                heading: "Qué es y en qué se basa",
                image: "/images/dieta-barf-gatos.webp",
                body: "La propuesta suele usar proporciones aproximadas de 70 % de carne muscular, 10 % de hueso carnoso, 5 % de hígado y 5 % de otras vísceras. Las recetas varían mucho según quien la promueva.\n\nLa idea es imitar la alimentación de los felinos como cazadores. Pero que algo sea natural no significa que sea seguro ni completo.\n\nLos gatos son carnívoros estrictos. Necesitan nutrientes como la taurina, la arginina, ciertas grasas, las vitaminas liposolubles y el calcio. Una receta casera mal preparada puede causar carencias o excesos graves. En gatitos, un desequilibrio entre calcio y fósforo puede causar dolor en los huesos y fracturas.",
              },
              {
                heading: "Beneficios que suelen mencionarse",
                body: "Quienes la prueban suelen notar:\n\n• Mejor aspecto del pelaje.\n• Heces de menor volumen.\n• Más hidratación y más interés por la comida.\n\nParte de estos efectos puede venir de la humedad y la proteína de la dieta, no necesariamente de la carne cruda. Una dieta húmeda cocinada y equilibrada también puede dar resultados parecidos.\n\nSegún la WSAVA, no hay pruebas bien documentadas de que las dietas crudas tengan más beneficios de salud que una dieta comercial completa o una casera cocinada y bien formulada.",
              },
              {
                heading: "Riesgos que conviene conocer",
                body: "| **Riesgo** | **Qué significa** |\n| Bacterias | La carne cruda puede traer Salmonella, Listeria, Campylobacter o E. coli. Congelar, deshidratar o liofilizar no elimina todas. |\n| Contagio a las personas | El gato puede no enfermar y, aun así, eliminar bacterias en sus heces durante semanas. Así puede contaminar la casa. |\n| Huesos | Incluso los crudos pueden romper dientes, causar estreñimiento u obstruir el esófago o el intestino. En casos graves, pueden perforarlo. |\n| Desequilibrio nutricional | Las recetas caseras suelen tener carencias o excesos. Añadir suplementos “a ojo” no lo corrige. |\n| Parásitos | La carne cruda puede traer parásitos, como el toxoplasma. |\n| Tiroides | Un exceso de tejido tiroideo puede contribuir al hipertiroidismo. |\n\nLa AVMA desaconseja la carne cruda o poco cocida para perros y gatos, y los CDC tampoco recomiendan alimentos crudos para mascotas.",
              },
              {
                heading: "Cuándo es mejor evitarla",
                body: "| **Situación** | **Recomendación** |\n| Gatitos, gatas gestantes o en lactancia | No se recomienda la BARF casera. |\n| Gatos con defensas bajas | No se recomienda. |\n| Gatos con enfermedad renal, hepática o digestiva | No se recomienda sin indicación veterinaria. |\n| Hogar con niños pequeños, personas mayores, embarazadas o con defensas bajas | Evita este tipo de alimentación. El riesgo para ellas es mayor. |\n\nSi aun así quieres intentarlo, hazlo solo con la supervisión de un veterinario o de un nutricionista veterinario. Usa una receta hecha para tu gato y, si es posible, un producto comercial que declare ser completo y equilibrado. Además, la higiene debe ser muy estricta: refrigeración, utensilios separados, lavado de manos y limpieza inmediata de superficies y platos.",
              },
              {
                heading: "Una alternativa más segura",
                body: "Una opción con mejor respaldo es una dieta comercial húmeda, completa y equilibrada. También puede funcionar una dieta casera cocinada, diseñada por un nutricionista veterinario. Ambas ofrecen humedad y buena aceptación sin el riesgo bacteriano de la carne cruda.\n\nPara elegir una dieta que funcione en tu caso, revisa [Comida húmeda vs. pienso seco](/categoria/alimentacion/dietas/comida-humeda-vs-seca).",
              },
            ]
          },
        ],
      },
      {
        slug: "prohibidos",
        label: "Alimentos prohibidos",
        topics: [
          {
            slug: "toxicos-comunes",
            title: "Alimentos tóxicos para gatos",
            intro: "Muchos alimentos que para nosotros son normales pueden hacer daño a un gato, e incluso ser graves. Si tu gato come algo que sospechas que es tóxico, no le provoques el vómito por tu cuenta. Llama de inmediato a tu veterinario o a un centro de toxicología.",
            sections: [
              {
                heading: "Alimentos de alto riesgo: evítalos siempre",
                image: "/images/alimentos-toxicos-gatos.webp",
                body: "Estos alimentos pueden causar daños graves, así que nunca deben formar parte de su dieta ni de sus premios:\n\n| **Alimento** | **Por qué es peligroso** |\n| Cebolla, ajo, puerro y cebollín | Dañan los glóbulos rojos y pueden causar anemia. Los gatos son muy sensibles. Son peligrosos crudos, cocidos, en polvo o en caldos y salsas. |\n| Chocolate, café, té y cafeína | Pueden causar vómitos, hiperactividad, latidos acelerados, temblores y convulsiones. El chocolate negro y el de repostería son los más peligrosos. |\n| Alcohol | Incluso en pequeñas cantidades puede causar descoordinación, vómitos, dificultad para respirar y, en casos graves, coma. La masa cruda con levadura también puede producirlo. |\n| Uvas, pasas y grosellas | Se asocian a daño en los riñones. En gatos hay menos evidencia que en perros, pero lo mejor es evitarlas por completo. |\n| Xilitol | Edulcorante que aparece en chicles, caramelos y productos “sin azúcar”. Puede causar bajadas de azúcar, convulsiones y daño en el hígado. |",
              },
              {
                heading: "Alimentos de riesgo moderado",
                body: "Estos no son veneno en sentido estricto, pero conviene tenerlos fuera de su alcance:\n\n| **Alimento** | **Qué puede pasar** |\n| Leche y lácteos | Muchos gatos adultos no toleran la lactosa. Pueden tener gases, diarrea o vómitos. El agua fresca es la mejor bebida. |\n| Aguacate | Puede causar molestias digestivas. Organismos como la FDA y la AVMA lo incluyen entre los alimentos que conviene mantener fuera del alcance. |\n| Nueces de macadamia | Pueden provocar debilidad, temblores y fiebre. Además, son muy grasas y pueden causar vómitos o diarrea. |\n| Sal, comida grasa o frita | El exceso de sal es peligroso. La comida grasa puede causar problemas digestivos e incluso pancreatitis. |\n| Pescado enlatado para personas | Puede tener demasiada sal. En algunos casos se han descrito problemas neurológicos graves. Mejor evitarlo como premio habitual. |",
              },
              {
                heading: "Premios más seguros",
                body: "Si quieres darle algo de vez en cuando, que sean porciones pequeñas, sin sal, sin condimentos, sin huesos y sin cebolla ni ajo:\n\n| **Premio** | **Cómo prepararlo** |\n| Pollo o pavo | Cocido, sin piel ni hueso. |\n| Pescado | Cocido y natural, sin aceite, sal ni especias. |\n| Huevo | Cocido, en pequeñas cantidades. |\n| Verduras | Zanahoria, calabaza o judías verdes, cocidas. |\n| Frutas | Arándanos o pepino, en trocitos pequeños. |\n\nLos premios no deberían superar alrededor del 10 al 15 % de sus calorías diarias. El resto debe venir de su alimento completo.\n\nComo los premios suman calorías, conviene revisar también [Obesidad Felina: Cómo proteger la salud y vida de tu gato](/categoria/salud/obesidad-felina/guia-obesidad-prevencion).",
              },
              {
                heading: "Qué hacer si cree que se intoxicó",
                body: "Si sospechas que tu gato comió chocolate, cebolla, ajo, uvas, alcohol, xilitol u otro producto peligroso:\n\n• Guarda el envase o una muestra.\n• Anota la cantidad aproximada y la hora.\n• Llama de inmediato al veterinario o a un centro de toxicología veterinaria.\n\nNo esperes a que aparezcan síntomas. Y recuerda: no le provoques el vómito sin indicación profesional.",
              },
            ]
          },
        ],
      },
    ],
  },
  {
    slug: "castracion",
    label: "Castración",
    seoTitle: "Castración felina: guía familiar",
    emoji: "",
    color: "#3498db",
    bg: "#eaf2f8",
    description: "Guía familiar sobre la castración de gatos: por qué conviene, a qué edad, qué esperar de la cirugía y cómo cuidar al gato durante la recuperación.",
    intro: "La castración es una de las decisiones más importantes en la vida de un gato, y también una de las que más dudas generan. Esta sección explica por qué se recomienda, a qué edad suele realizarse y qué cambios puedes esperar en su conducta y en su salud después de la cirugía.\n\nAquí encontrarás qué esperar del procedimiento y de la recuperación, cómo cuidar al gato en casa durante los primeros días y qué señales deben alertarte. También se aborda el control de la reproducción en gatos callejeros, donde la esterilización de colonias es una de las medidas que mejor se han estudiado.\n\nLa información de estos temas es general. Tu veterinario puede indicarte el mejor momento y la técnica más adecuada para tu gato, según su edad, su tamaño y su estado de salud.\n\nSi tienes dudas sobre el procedimiento o sobre cómo afrontar el costo, pregúntalo con calma en la consulta. Un veterinario puede explicarte las opciones y ayudarte a planificar la recuperación en casa.",
    subcategories: [
      {
        slug: "guia-infantil",
        label: "Guía para Niños y Familias",
        topics: [
          {
            slug: "por-que-castrar",
            title: "¿Por qué castrar a los gatitos?",
            intro: "Castrar o esterilizar a un gato es una cirugía sencilla que impide que tenga crías y reduce conductas ligadas a las hormonas sexuales. También previene enfermedades graves y ayuda a evitar que haya demasiados gatos sin hogar.",
            sections: [
              {
                heading: "Qué implica la cirugía",
                image: "/images/castrar-gatitos.webp",
                body: "En las gatas, la intervención habitual es la ovariohisterectomía: se retiran los ovarios y el útero. Así se acaban los celos y los embarazos, y se elimina el riesgo de una infección uterina.\n\nEn los machos se hace una orquiectomía, es decir, se retiran los dos testículos. Así se elimina la fertilidad y baja la producción de las hormonas que causan conductas como vagar, pelear y marcar con orina.",
              },
              {
                heading: "¿Duele?",
                body: "El gato recibe anestesia general, así que no siente dolor durante la cirugía. El equipo también le da analgésicos antes, durante y después.\n\nLa recuperación suele ser rápida. Muchos gatitos vuelven a moverse y a jugar en pocas horas. Durante los días que indique el veterinario, conviene mantenerlos tranquilos y usar el collar o la protección que recomiende.",
              },
              {
                heading: "Beneficios principales",
                body: "| **Beneficio** | **Qué implica** |\n| Evitar embarazos no deseados | Previene camadas accidentales y ayuda a frenar la sobrepoblación. |\n| Menos enfermedades reproductivas | En las gatas, evita una infección uterina grave y reduce el riesgo de tumores mamarios. |\n| Menos riesgos en los machos | Elimina el riesgo de cáncer testicular y reduce las peleas, los escapes y el marcado con orina. |\n| Menos conductas de celo | Las gatas dejan de maullar intensamente en celo. Los machos sienten menos impulso de buscar pareja. |\n| Menos contagios | Al haber menos peleas y menos contacto sexual, baja el riesgo de virus como FIV y FeLV. |\n| Vida más larga | Según la AVMA, los estudios asocian la castración con una vida más larga, probablemente por sus beneficios de salud y de conducta. |",
              },
              {
                heading: "¿A qué edad conviene?",
                body: "Las organizaciones veterinarias, como la AVMA, la AAHA y la AAFP, recomiendan castrar antes de los 5 meses, alrededor de los 4 meses, si el gatito está sano y el veterinario lo considera adecuado.\n\nLas gatas pueden tener celo desde los 4 o 5 meses, así que esperar hasta los 6 meses puede llevar a un embarazo no planeado. En refugios, la cirugía puede hacerse con seguridad desde las 8 semanas, siempre con protocolos veterinarios.\n\nUn mito que conviene aclarar: no hace falta que una gata tenga una camada antes de castrarse. La AVMA indica que no hay beneficio conocido en esperar al primer celo.",
              },
              {
                heading: "Preguntas frecuentes",
                body: "**¿Engordará?** Puede ganar peso porque necesita menos energía después de la cirugía, pero no engorda de forma automática. Lo que ayuda es controlar las raciones, dar una dieta completa y jugar todos los días.\n\n**¿Cambiará su personalidad?** Sigue siendo el mismo en cariño, juego y vínculo contigo. Lo que suele disminuir son las conductas impulsadas por las hormonas: escapadas, peleas, marcado y maullidos de celo.\n\nNo se puede prometer que será “más cariñoso” o “más feliz”, porque cada gato es distinto. Sí es razonable esperar menos estrés por celo, territorio y búsqueda de pareja.",
              },
              {
                heading: "Qué pasa si no se castra",
                body: "| **Quién** | **Qué puede pasar** |\n| Gatas | Pueden quedar preñadas desde edades tempranas, tener camadas repetidas y desarrollar infección uterina o tumores mamarios. |\n| Machos | Tienden a alejarse más, pelear, marcar con un olor muy fuerte y tener más riesgo de accidentes y enfermedades infecciosas. |\n| Hogar y comunidad | Aumentan las camadas no deseadas, el abandono y el número de gatos sin hogar. |",
              },
              {
                heading: "Gatos de la calle: el programa TNR",
                body: "El programa TNR (captura, esterilización y retorno, en inglés Trap–Neuter–Return) consiste en atrapar a los gatos de la calle de forma humanitaria, esterilizarlos, vacunarlos cuando corresponde y devolverlos a su territorio.\n\nPara reconocer a los gatos ya esterilizados, se corta la punta de una oreja mientras el animal está anestesiado. No es un castigo: es una marca visible, segura y estándar en los programas de manejo de colonias.\n\nSobre el número de descendientes: las cifras muy grandes que se usan en campañas son cálculos teóricos. Dependen de supuestos sobre supervivencia, fertilidad y acceso a pareja, y en la vida real la mayoría de los gatitos no llega a reproducirse. Lo que sí es cierto es que una gata puede tener varias camadas al año, y que los gatitos pueden madurar muy jóvenes. Por eso una población sin control crece rápido. La esterilización corta ese ciclo.\n\nPara ampliar sobre el control de las colonias de gatos, lee [Gestión Reproductiva y Control Poblacional Ético](/categoria/tenencia-responsable/gestion-reproductiva/esterilizacion-evidencia).",
              },
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "comportamiento",
    label: "Comportamiento",
    seoTitle: "Comportamiento felino: entender a tu gato",
    emoji: "",
    color: "#b85c38",
    bg: "#faefeb",
    description: "Comportamiento felino: cómo se comunica tu gato, por qué hace lo que hace, y cómo prevenir y manejar problemas como el arañado o el estrés.",
    intro: "Entender a un gato es aprender a leer su lenguaje. Muchas conductas que parecen caprichosas, como arañar, maullar, esconderse o amasar, tienen una explicación natural. Esta sección te ayuda a interpretar esas señales y a responder de forma que tu gato se sienta seguro.\n\nAquí encontrarás cómo se comunican los gatos con el cuerpo, la voz y el parpadeo; por qué arañan los muebles y cómo redirigir esa necesidad; cómo presentar a dos gatos que deben convivir; y cómo reconocer el estrés, que muchas veces se manifiesta en cambios pequeños antes de convertirse en un problema.\n\nAntes de corregir una conducta, conviene preguntarse qué necesita el gato. Muchos problemas de comportamiento mejoran cuando se ajustan el espacio, las rutinas y el juego. Si la conducta cambia de forma repentina, consulta también con el veterinario, porque a veces el origen es físico.\n\nCada gato aprende de su propia experiencia, por eso un mismo método no funciona igual con todos. Observar qué hace, cuándo lo hace y qué lo provoca es el primer paso para entenderlo.",
    subcategories: [
      {
  slug: "interio-exterior",
  label: "Gato ¿Interio o Exterior?",
  topics: [
    {
      slug: "guia-para-entender-y-cuidar",
      title: "Comportamiento Felino: Cómo entender y cuidar mejor a tu gato",
      intro: "Los gatos son hoy una de las mascotas más populares del mundo. Aunque históricamente no se les veía como compañeros de vida tal como los conocemos ahora, la realidad es que, al igual que los perros, necesitan interacción, atención y cariño. La diferencia radica en cómo expresan esas necesidades. Para convivir en armonía con tu felino, es fundamental entender su naturaleza y adaptar su entorno a sus instintos.",
      sections: [
        {
          heading: "¿Interior o Exterior? Tomando la decisión correcta",
          image: "/images/comportamiento-gatitos.webp",
          body: "Una de las primeras decisiones al adoptar es si el gato vivirá solo dentro de casa o tendrá acceso al exterior. Ambas opciones tienen implicaciones importantes: Gatos de exterior: Tienen más libertad y estimulación natural, pero corren mayores riesgos: atropellos, peleas con otros animales, enfermedades infecciosas y parásitos (pulgas, gusanos). Su esperanza de vida suele ser menor. Gatos de interior: Están mucho más protegidos y viven más años, pero dependen totalmente de nosotros para su estimulación. El aburrimiento es su mayor enemigo. Si eliges esta opción, debes comprometerte a enriquecer su entorno con juegos, rascadores y tiempo de calidad. Consejo: Sea cual sea tu elección, la clave está en la seguridad y la estimulación mental.",
        },
        {
          heading: "El Instinto de Rascar: No es vandalismo, es comunicación",
          body: "Arañar es un comportamiento natural e imprescindible que comienza alrededor de las 5 semanas de vida. Para un gato, rascar no es solo afilar uñas; es una forma de comunicación visual y olfativa (marcan territorio con las glándulas de sus patas) y una manera de estirar su musculatura. El conflicto surge cuando eligen nuestros muebles. La solución no es castigar, sino ofrecer una alternativa mejor. ¿Cómo elegir el rascador perfecto? Estabilidad: Debe ser firme y no tambalearse. Si se mueve, el gato no lo usará por inseguridad. Altura: Debe ser lo suficientemente alto para que el gato pueda estirarse completamente de pie. Material: El sisal, la madera natural o la cuerda suelen ser los más atractivos. Ubicación: Colócalo en zonas visibles y de paso (no escondido en un sótano). A los gatos les gusta marcar donde ocurre la 'vida' de la casa. Paciencia: Una vez que elija un rascador, no lo cambies de sitio. Además, cuanto más usado esté, más le gustará, porque estará impregnado de su olor.\n\nPara saber más sobre el arañado y cómo redirigirlo a un rascador, lee [Por qué arañan los muebles](/categoria/comportamiento/conducta/arañar-muebles).",
        },
        {
          heading: "El Juego: Ejercicio físico y mental",
          body: "Jugar no es solo entretenimiento; es la forma en que el gato ejercita su instinto de caza. Un gato que no juega puede desarrollar problemas de comportamiento por acumulación de energía o estrés. Claves para un juego exitoso: Imita a una presa: Usa juguetes que se muevan, se escondan, salten o vibren. Las cañas con plumas o cuerdas son ideales porque te permiten interactuar a distancia. Seguridad ante todo: Evita hilos largos sin supervisión o piezas pequeñas que pueda tragar. Rutina diaria: Dedica al menos 15 minutos al día a jugar activamente con él. Esto fortalece vuestro vínculo y mantiene su mente ágil. Variedad: Rotar los juguetes evita que se aburra de los mismos objetos.",
        },
        {
          heading: "Higiene y Areneros: La regla de oro",
          body: "Los gatos son extremadamente limpios y exigentes con su baño. Un arenero sucio o mal ubicado es la causa número uno de problemas de eliminación inadecuada. Recomendaciones básicas: La regla del 'N+1': Debes tener una caja de arena por cada gato, más una extra. (Ejemplo: 1 gato = 2 cajas; 2 gatos = 3 cajas). Algunos gatos prefieren incluso usar una caja solo para orinar y otra para defecar. Tipo de arena: La mayoría prefiere arenas sin perfume y de textura fina y suave. Ubicación: Lugares tranquilos, privados y lejos de ruidos fuertes (lavadoras, secadoras) o de su zona de comida. Limpieza: Retira los desechos a diario y lava las cajas regularmente con agua y jabón neutro (evita lejías o amoniaco, cuyos olores pueden atraerles a orinar fuera). Alerta: Si tu gato empieza a orinar o defecar fuera de la caja, acude al veterinario. A menudo es el primer síntoma de dolor o enfermedad urinaria, no un acto de venganza.",
        },
        {
          heading: "El Marcaje con Orina: Entendiendo el mensaje",
          body: "El marcaje vertical con orina (rociar paredes o muebles) es diferente a vaciar la vejiga en el suelo. Es un comportamiento comunicativo, no necesariamente higiénico. ¿Quiénes lo hacen? Puede ocurrir en gatos esterilizados, aunque es más común en no esterilizados (aprox. 10% de machos y 5% de hembras castradas pueden hacerlo ocasionalmente). ¿Por qué lo hacen? Generalmente responde a estrés o inseguridad: llegada de nuevas mascotas, cambios en la rutina, conflictos con otros gatos (incluso viendo gatos callejeros por la ventana) o cambios en el hogar. Solución: El castigo empeora el problema. Lo ideal es identificar la fuente de estrés, limpiar la zona con enzimas específicas (para eliminar el olor por completo) y consultar con un veterinario o etólogo para evaluar si necesita ayuda conductual o médica.",
        },
        {
          heading: "Conclusión: Convivencia basada en el respeto",
          body: "El comportamiento felino no es caprichoso; tiene una lógica biológica profunda. Necesitan seguridad (rutinas, lugares altos). Necesitan estimulación (juego, caza simulada). Necesitan limpieza (areneros impecables). Necesitan comunicación (rascar, marcar, maullar). Cuando respetas estas necesidades básicas, dejas de ver 'problemas' y empiezas a ver a un compañero equilibrado, cariñoso y feliz. Entender a tu gato es la mejor herramienta para amarlo mejor.",
        }
      ],
    },
  ],
},


 {
  slug: "comportamiento-felino",
  label: "presentacion entre gatos",
  topics: [
    {
      slug: "presentacion-entre-gatos",
      title: "Cómo lograr que dos gatos se acepten y convivan tranquilos",
      intro: "Introducir un nuevo gato en casa es emocionante, pero puede ser estresante para tu gato residente. Los gatos son territoriales por naturaleza, así que la clave del éxito no es la rapidez, sino la paciencia. Si lo haces bien desde el principio, evitarás conflictos futuros y fomentarás una amistad (o al menos, una tolerancia respetuosa) duradera. Olvida la idea de 'presentarlos de golpe'. Sigue este proceso gradual.",
      sections: [
        {
          heading: "Paso 1: La Cuarentena Inicial (Días 1-4)",
          image: "/images/convivencia-gatitos.webp",
          body: "El nuevo gato necesita sentirse seguro antes de conocer a nadie. Habitación propia: Prepara una habitación tranquila (que no sea la zona principal de tu gato actual) con su cama, comida, agua, juguetes y arenero. Refugio seguro: Deja su transportín abierto con una manta dentro para que tenga un escondite donde sentirse protegido. Cero contacto visual: Durante estos primeros días, no deben verse. Sin embargo, está bien que se huelan bajo la puerta. Esto les permite investigarse sin la presión del cara a cara.",
        },
        {
          heading: "Paso 2: Intercambio de Olores (El 'Dating' Olfativo)",
          body: "Los gatos se conocen por el olfato, no por la vista. Intercambia objetos: Frota suavemente una toalla o calcetín en las mejillas de un gato (donde tienen glándulas de olor) y dáselo al otro, y viceversa. También puedes intercambiar sus mantas. Asociación positiva: Mientras huelen el objeto del otro, dales premios ricos o juega con ellos. Queremos que asocien el olor del 'otro' con cosas buenas (comida/juego). Atención equilibrada: Pasa tiempo de calidad con cada gato por separado, acariciándolos y jugando cerca de la puerta que los separa. Esto reduce la ansiedad y los celos.",
        },
        {
          heading: "Paso 3: Contacto Visual Controlado",
          body: "Cuando ambos gatos estén relajados oliéndose bajo la puerta y no haya silbidos graves ni gruñidos constantes: La rendija: Abre la puerta solo una pulgada (unos 2-3 cm) o usa una barrera de rejilla para bebés. Deben poder verse, pero no tocarse. Observa: Si hay silbidos leves, es normal. Si hay agresión intensa (silbidos fuertes, boca abierta, orejas muy bajas), cierra la puerta y vuelve al Paso 2 durante unos días más. Premia la calma: Si se miran sin atacarse, dales premios inmediatamente.",
        },
        {
          heading: "Paso 4: Las Primeras Interacciones Supervisadas",
          body: "Si el contacto visual va bien, es hora de dejarles compartir espacio, pero con reglas estrictas. Salida voluntaria: Abre la puerta y deja que el nuevo gato salga si quiere. Nunca lo forces. Si se queda escondido, respétalo. Sesiones cortas: Permíteles estar juntos 15-30 minutos máximo. Luego, sepáralos de nuevo en sus habitaciones. Repite esto varias veces al día. Distracción positiva: Juega con ellos usando juguetes de caña o lanza premios, pero mantén una distancia segura (al menos 1 metro entre ellos) para evitar que compitan por el juguete. El objetivo: Que aprendan que la presencia del otro no es una amenaza, sino algo neutro o incluso divertido.",
        },
        {
          heading: "Paso 5: Aumento Gradual del Tiempo",
          body: "Poco a poco, ve aumentando el tiempo que pasan juntos si las interacciones son tranquilas. Separa siempre al final: Termina la sesión antes de que haya algún conflicto. Es mejor dejarlos con ganas de más que con una pelea. Tiempo a solas: Después de cada sesión, déjales tiempo a solas en sus respectivas zonas para procesar la experiencia y recuperar su confianza territorial.",
        },
        {
          heading: "Señales de Alerta y Estrés",
          body: "Detén el proceso y vuelve atrás si ves: Silbidos intensos y repetidos, gruñidos profundos, pelo erizado y posturas rígidas. En el gato residente: Deja de comer, usa mal el arenero o se esconde todo el día. En el nuevo gato: Se lame compulsivamente, no come o parece aterrorizado. Consejo: Si el estrés es alto, consulta a tu veterinario o a un etólogo. A veces, usar feromonas sintéticas (difusores) puede ayudar a calmar el ambiente.\n\nSi el estrés aparece durante la convivencia, revisa [El Estrés en el Gato: Guía completa para entenderlo y ayudarlo](/categoria/comportamiento/estrés/guia-estres-ansiedad).",
        },
        {
          heading: "Lo que NUNCA debes hacer",
          body: "Nunca castigues: Gritar o castigar a un gato por silbar o mostrar agresividad solo aumenta su estrés y asocia al otro gato con algo negativo (el castigo). Reacción correcta: Si hay tensión, separa a los gatos con calma, sin drama. Usa una voz suave o simplemente interpon una barrera física. No los dejes solos: Hasta que no estés 100% seguro de que se toleran (pueden tardar semanas o meses), nunca los dejes sin supervisión.",
        },
        {
          heading: "Casos Especiales: El Gato Tímido",
          body: "Si tu nuevo gato es muy miedoso, el proceso será más lento. No tengas prisa. Un gato tímido necesita más tiempo para confiar en su entorno antes de confiar en otro gato. Refuerza tu vínculo individual con él. Las sesiones de contacto pueden ser más cortas (10 minutos) pero más frecuentes. Conclusión: Paciencia es Amor. Cada pareja de gatos es única. Algunos se aceptan en una semana; otros tardan meses. No compares. Tu objetivo es una convivencia pacífica a largo plazo, no una amistad inmediata de película. Ir despacio es la forma más rápida de lograr el éxito. ¡Tu paciencia valdrá la pena!",
        }
      ],
    },
  ],
},

      {
        slug: "lenguaje",
        label: "Lenguaje felino",
        topics: [
          {
            slug: "comunicacion-corporal",
            title: "Comunicación corporal",
            intro: "Los gatos tienen un lenguaje corporal sofisticado y preciso. Aprender a leerlo transforma la relación con tu gato y te permite anticipar sus necesidades y estados emocionales.",
            sections: [
           {
          heading: "La cola como barómetro emocional",
          image: "/images/comunicacion-corporal-gatitos.webp",
          body: "La cola es una de las señales más claras: Alta y recta indica confianza, saludo afectuoso o felicidad (si tiene la punta curvada es felicidad máxima). Baja o entre las patas expresa miedo, inseguridad o sumisión. Moviéndose de lado a lado rápidamente o con movimiento lento revela irritación, molestia o concentración. Si está esponjada, erizada o arqueada, el gato siente amenaza o terror.",
        },
        {
          heading: "Las orejas no mienten",
          body: "Las orejas muestran mucho sobre el ánimo: Hacia adelante indica que está atento, curioso, en alerta o con interés. Hacia atrás, pegadas o planas señalan miedo, molestia o agresión defensiva. Si están giradas hacia los lados ('modo avión'), es una señal de irritación creciente y el gato necesita espacio. El movimiento constante indica que está alerta o nervioso.",
        },
        {
          heading: "Los ojos y el parpadeo",
          body: "Los ojos comunican emociones profundas: Abiertos con pupilas grandes/dilatadas indican miedo, sorpresa, excitación o juego. Una mirada fija puede ser señal de desafío o atención intensa. Por el contrario, una mirada relajada o el parpadeo lento es una señal activa de confianza, tranquilidad y afecto.\n\nSi te interesa el parpadeo en particular, lee [El parpadeo lento: el beso felino](/categoria/comportamiento/lenguaje/parpadeo-lento).",
        },
        {
          heading: "Los bigotes y el rostro",
          body: "Los bigotes también hablan: si están orientados hacia adelante, indican curiosidad o excitación por algo que están explorando. Si están pegados a la cara o retraídos, señalan que el gato siente miedo o está tratando de parecer menos amenazante ante una situación tensa.",
        },
        {
          heading: "Postura corporal general",
          body: "El cuerpo indica el estado general: Relajado significa que se siente seguro. Encogido o tenso indica miedo. Arqueado con la espalda levantada muestra que está asustado y tratando de parecer más grande para defenderse. El gato combina todas estas señales (cola, orejas, ojos) al mismo tiempo; por ejemplo, cola alta con ojos relajados es un gato feliz, mientras que orejas atrás con cola moviéndose fuerte es un gato enojado.",
        },
        {
          heading: "Idea principal",
          body: "No se debe mirar solo una señal aislada, sino el conjunto de todas las partes del cuerpo. Aprender a observar estos detalles te ayudará a comprender mejor a tu compañero y a respetar su espacio cuando lo necesite.",
        }
            ],
          },
          {
            slug: "vocalizaciones",
            title: "Vocalizaciones y su significado",
            intro: "Los gatos se comunican con muchos sonidos. El maullido, sobre todo, es una forma de hablar con las personas: los gatos adultos casi nunca se maúllan entre sí. Cada gato tiene su propio repertorio, y el significado depende del sonido, del contexto y de su lenguaje corporal.",
            sections: [
              {
                heading: "El maullido",
                image: "/images/vocalizacion-gatitos.webp",
                body: "Es el sonido que más usan los gatos con nosotros. Sirve para pedir atención, comida, acceso a un lugar, juego o cariño, pero también puede mostrar molestia, estrés, soledad o malestar.\n\nUn maullido corto suele ser un saludo o una petición breve. Uno largo y sostenido puede ser más insistente.\n\nOjo con los cambios. Si tu gato empieza a maullar más de lo normal, de noche o con un tono distinto, conviene observarlo. En gatos mayores, puede estar relacionado con dolor, problemas de tiroides, pérdida de visión o desorientación.\n\nNo siempre es posible saber el motivo solo por el tono. Lo más útil es fijarte en lo que pasó justo antes y después del sonido.",
              },
              {
                heading: "El ronroneo",
                body: "El ronroneo suele indicar comodidad, cercanía o una forma de calmarse. Pero no siempre significa felicidad: los gatos también ronronean cuando tienen miedo, dolor o están enfermos, e incluso durante una visita al veterinario.\n\nHay investigadores que estudian si el ronroneo podría tener efectos reparadores, porque sus frecuencias son parecidas a las de algunas terapias de vibración. Por ahora es una línea de investigación interesante, no una certeza. No debe usarse como tratamiento.",
              },
              {
                heading: "Otros sonidos y lo que suelen significar",
                body: "| **Sonido** | **Qué suele significar** |\n| Trino o chirrido | Es suave, corto y ascendente, parecido a un “brrr”. Suele ser un saludo amistoso o una forma de pedir atención. Las madres también lo usan para llamar a sus crías. |\n| Castañeo o chatter | Aparece cuando observa aves o insectos que no puede alcanzar. Mezcla emoción de caza y frustración. |\n| Bufido o siseo | Es una señal de defensa. Indica miedo o malestar. Lo mejor es no forzar el contacto y quitar la fuente de estrés. |\n| Gruñido, aullido o maullido grave | Puede indicar dolor, conflicto, miedo, celo o una petición muy insistente. Si cambia de repente, consulta al veterinario. |",
              },
              {
                heading: "Cuándo consultar al veterinario",
                body: "Pide una revisión si tu gato:\n\n• Maúlla mucho más de lo habitual, o cambia la forma de hacerlo.\n• Maúlla de noche sin un motivo claro.\n• Parece desorientado, deja de comer o se esconde.\n• Muestra signos de dolor.\n\nEl sonido es información, pero se entiende mejor junto con su postura, su apetito, su uso de la caja de arena y su comportamiento general.\n\nComo los cambios en la voz también se ven en el cuerpo, conviene revisar [Comunicación corporal](/categoria/comportamiento/lenguaje/comunicacion-corporal).",
              },
            ]
          },
          {
            slug: "parpadeo-lento",
            title: "El parpadeo lento: el beso felino",
            intro: "El parpadeo lento es cuando el gato cierra los ojos despacio, casi del todo, y los vuelve a abrir. Se le llama “beso felino”. Algunos estudios sugieren que es una señal amable: los gatos responden mejor y se acercan más cuando una persona se la hace.",
            sections: [
              {
                heading: "Qué significa",
                image: "/images/parpadeo-gatitos.webp",
                body: "Cuando un gato te mira y parpadea lento, suele estar relajado y tranquilo. No percibe amenaza. No es exactamente una sonrisa como la nuestra, pero sí transmite calma.\n\nTambién ayuda a bajar la tensión. Una mirada fija y prolongada puede resultar intimidante para un gato, y el parpadeo rompe esa mirada. En gatos nerviosos puede ser una forma de decir “no soy un peligro”.",
              },
              {
                heading: "Cómo hacerlo",
                body: "| **Paso** | **Qué hacer** |\n| 1. Mantén distancia | Ponte a una distancia cómoda para él. No te acerques demasiado. |\n| 2. Busca el contacto visual | Mírale un momento, sin fijar la mirada. |\n| 3. Entrecierra los ojos | Cierra casi del todo los ojos, despacio, y ábrelos de nuevo. |\n| 4. Espera | Deja que él decida si responde, se acerca o se aleja. |",
              },
              {
                heading: "Un estudio con gatos",
                body: "Un estudio publicado en 2020 en la revista Scientific Reports, de Humphrey y colaboradores, observó que los gatos hacían más movimientos de los ojos cuando sus propios tutores les hacían parpadeos lentos, comparado con cuando la persona estaba presente sin hacer el gesto.\n\nEl mismo estudio probó el gesto con personas desconocidas para el gato. Los gatos tuvieron más probabilidades de parpadear de vuelta y de acercarse a la mano extendida después de recibir un parpadeo lento, que ante una expresión neutra.\n\nEsto no garantiza que cualquier gato se acerque ni que acepte caricias. Es una invitación amable, no un permiso para tocarlo. La decisión siempre es suya.",
              },
              {
                heading: "En refugios y adopciones",
                body: "Algunas investigaciones posteriores en refugios encontraron que los gatos que respondían con más parpadeos ante personas tendían a ser adoptados antes. Por eso el gesto puede ayudar a voluntarios, veterinarios y tutores a reducir la tensión y a generar confianza.\n\nAun así, conviene combinarlo con otras señales de respeto: no perseguir al gato, dejarle un lugar para esconderse y ofrecerle la mano para que se acerque por su cuenta.",
              },
              {
                heading: "Señales de que prefiere no interactuar",
                body: "Si notas alguna de estas señales, deja de insistir y aléjate poco a poco:\n\n| **Señal** | **Qué hacer** |\n| Orejas hacia atrás | Dale espacio. |\n| Cola erizada o movimientos bruscos | No te acerques más. |\n| Bufido o gruñido | Retírate con calma. |\n| Intento de huir o esconderse | Deja que se vaya. No lo busques. |\n\nPara entender mejor el lenguaje del cuerpo de tu gato, lee [Comunicación corporal](/categoria/comportamiento/lenguaje/comunicacion-corporal).",
              },
            ]
          },
        ],
      },
      {
        slug: "conducta",
        label: "Conductas comunes",
        topics: [
          {
            slug: "arañar-muebles",
            title: "Por qué arañan los muebles",
            intro: "Arañar no es destruir por capricho. Es algo natural y necesario: mantiene sus uñas sanas, le permite estirar el cuerpo y deja marcas que comunican. No se puede quitar, pero sí se puede desviar hacia rascadores atractivos y bien colocados.",
            sections: [
              {
                heading: "Por qué lo hace",
                image: "/images/aranando-sillon-gatitos.webp",
                body: "Principalmente, para cuidar sus uñas. Al arañar, se quita la capa externa y muerta de la uña y deja al descubierto una nueva. Arañar también le ayuda a estirar músculos, tendones y la espalda, sobre todo al despertar.\n\nAdemás, es una forma de marcar su territorio. Las glándulas entre sus almohadillas dejan un olor, y las marcas visibles y las capas de uña que se desprenden dicen algo a otros gatos.\n\nTambién puede aparecer al jugar, al explorar o como forma de calmarse. Si el gato está estresado o en conflicto, puede arañar más.",
              },
              {
                heading: "Cómo proteger tus muebles",
                body: "La clave es que el rascador sea más atractivo que el mueble. No se trata de impedirle arañar, sino de darle una alternativa que le guste.\n\n| **Qué hacer** | **Cómo** |\n| Poner un rascador estable junto a la zona que ya araña | Cuando lo use con constancia, puedes alejarlo poco a poco. |\n| Ofrecer varios tipos | Verticales, horizontales e inclinados. |\n| Hacerlo atractivo | Con hierba gatera, juguetes, premios o un producto con feromonas para el arañado. |\n| Premiarlo | Con comida o juego cada vez que lo use. |\n| Cubrir temporalmente el mueble | Con una tela gruesa, plástico o un protector, para que resulte menos atractivo. |\n\nLas feromonas sintéticas pueden ayudar, pero no sirven para todos. En un estudio, un difusor de Feliway Classic redujo el arañado no deseado en el 83,5 % de los gatos tratados, frente al 68,5 % del grupo placebo, tras 28 días. Es una mejora, pero no garantiza resultados.\n\nEvita los castigos, los gritos y rociarlo con agua. No le enseñan qué hacer en su lugar y pueden aumentar el miedo. Tampoco conviene la cirugía para quitarle las uñas: es dolorosa y puede causarle problemas de por vida.",
              },
              {
                heading: "Qué rascador le conviene",
                body: "No hay un rascador que sirva para todos. Cada gato tiene sus preferencias de posición, textura, altura y lugar. Algunos quieren estirarse hacia arriba; otros prefieren superficies horizontales, como alfombras, escaleras o cajas de cartón.\n\n| **Tipo** | **Para quién suele funcionar mejor** |\n| Vertical alto y estable | Gatos que se estiran hacia arriba y arañan patas de sofá o cortinas. |\n| Horizontal de cartón | Gatos que arañan alfombras, escaleras o superficies bajas. |\n| Inclinado | Gatos que combinan las dos posturas o prefieren un ángulo intermedio. |\n| Sisal, madera o fibra | Gatos que buscan una superficie rugosa y resistente. |\n\nUn rascador vertical debe ser lo bastante alto para que se estire del todo, y lo bastante estable para que no se mueva. Se recomiendan alturas de casi un metro y bases amplias para que no vuelque.",
              },
              {
                heading: "Dónde colocarlo",
                body: "Ponlos cerca de los lugares donde duerme, descansa o araña ya. También son útiles junto a puertas, ventanas y pasillos, porque son puntos donde los gatos suelen marcar su territorio.\n\nSi tienes varios gatos, ofrece más de un rascador y repártelos por distintas zonas para evitar peleas por el espacio. La variedad y la ubicación importan tanto como el material.\n\nPara más ideas de juego y enriquecimiento en casa, lee [Enriquecimiento Ambiental y Bienestar Conductual](/categoria/tenencia-responsable/enriquecimiento-ambiental/5-pilares-ambientales).",
              },
            ],
          },
          {
            slug: "amasar",
            title: "El amasado: patas que hacen pan",
            intro: "El amasado es ese movimiento rítmico en el que el gato presiona una y otra vez sus patas delanteras sobre una superficie blanda. En los gatitos empieza como un gesto de la lactancia. En los adultos, suele mostrar comodidad, calma y confianza.",
            sections: [
              {
                heading: "De dónde viene",
                image: "/images/amasando-gatito.webp",
                body: "Los gatitos amasan de forma instintiva el pecho de su madre mientras maman. Ese movimiento ayuda a estimular la producción de leche y favorece la liberación de oxitocina, una hormona relacionada con el vínculo.\n\nMuchos gatos conservan ese gesto de adultos. La explicación más aceptada es que lo asocian con la sensación de seguridad y bienestar de la lactancia. Por eso suele aparecer antes de dormir, sobre mantas, cojines o personas de confianza.",
              },
              {
                heading: "Qué significa cuando te amasa",
                body: "Si tu gato te amasa, lo más probable es que se sienta tranquilo, cómodo y seguro contigo. Es una forma de mostrar afecto: los gatos suelen amasar a personas o lugares que les resultan agradables y familiares.\n\nNo significa que te confunda con su madre ni que espere leche de ti. Lo más preciso es que relaciona tu presencia, tu calor o una textura suave con la comodidad de cuando era un cachorro.\n\nOtras explicaciones posibles, que no siempre se confirman:\n\n| **Posible función** | **Qué puede estar pasando** |\n| Dejar su olor | Tiene glándulas en las almohadillas. Al amasar, puede dejar un olor que hace el lugar o la persona más familiar. |\n| Preparar el descanso | Una teoría dice que ayuda a acomodar y suavizar el lugar donde va a dormir, un gesto heredado de sus antepasados. |\n| Estirarse | Ayuda a estirar los músculos y las articulaciones de las patas delanteras. |\n| Calmarse | A veces, un gato amasa y ronronea para tranquilizarse, incluso cuando no se siente del todo bien. |",
              },
              {
                heading: "Formas normales de amasar",
                body: "Cada gato lo hace a su manera. Algunos usan solo las patas delanteras y otros las cuatro. Algunos amasan una manta, un peluche o el aire, y otros prefieren hacerlo sobre una persona concreta. Todas estas formas son normales.\n\nEs común que lo acompañe el ronroneo, los ojos entrecerrados, los bostezos o incluso un poco de baba y succión sobre la manta. Esas señales suelen indicar relajación.\n\nPara entender otros gestos de tu gato, lee [Comunicación corporal](/categoria/comportamiento/lenguaje/comunicacion-corporal).",
              },
              {
                heading: "Si sus uñas molestan",
                body: "No castigues el amasado. Puede dañar la confianza y el vínculo con tu gato. Estas son algunas formas de hacerlo más cómodo:\n\n| **Qué puedes hacer** | **Cómo ayuda** |\n| Poner una manta gruesa sobre tu regazo | Protege la piel mientras tu gato amasa. |\n| Recortarle las uñas con regularidad | Reduce los arañazos sin dejar de permitir el gesto. |\n| Redirigirlo con suavidad | Ofrécele un cojín o una manta destinada a amasar. Si lo consigue, celébralo con caricias. |",
              },
            ]
          },
        ],
      },
      {
        slug: "entrenamiento",
        label: "Adiestramiento",
        topics: [
          {
      slug: "guia-entrenamiento-casa",
      title: "Tu gato también quiere aprender: Guía divertida para entrenar en casa",
      intro: "¿Crees que los gatos son independientes y pasan del adiestramiento? ¡Nada más lejos de la realidad! Los gatos son inteligentes, curiosos y, sobre todo, les encanta tener 'cosas que hacer'. En la naturaleza, pasarían el día cazando y explorando; en casa, si solo duermen y comen, se aburren. Y un gato aburrido es un gato que araña el sofá o maúlla por la noche. Entrenar a tu gato no es hacerlo obedecer como a un perro militarizado. Es jugar con propósito. Es una forma increíble de conectar con él, estimular su mente y fortalecer vuestra amistad. ¡Y lo mejor? Solo necesitas 10 minutos al día.",
      sections: [
        {
          heading: "El secreto: Usa su instinto, no la fuerza",
          image: "/images/aprender-gatito.webp",
          body: "Los gatos no responden bien a las órdenes secas ni a los castigos. Responden al refuerzo positivo. La regla de oro: Si hace algo bien, recibe un premio (una chuchería rica, un poco de atún o muchas caricias). Nunca forces: Si tiras de él o le gritas, se cerrará en banda. El entrenamiento debe ser siempre voluntario y divertido. Sesiones cortas: 5 o 10 minutos son suficientes. Si ves que se distrae, termina la sesión con algo que ya sepa hacer bien para que acabe con buena sensación.",
        },
        {
          heading: "La herramienta mágica: 'La Diana' (Targeting)",
          body: "Antes de enseñarle trucos complicados, enséñale a seguir tu dedo o un objeto. Esto se llama targeting y es la base de todo. Acerca tu dedo (o un palito con una punta brillante) a la nariz del gato. Por curiosidad, lo olerá o lo tocará. En cuanto lo toque, di '¡Bien!' (con voz alegre) y dale un premio inmediatamente. Repite esto varias veces. Pronto, seguirá tu dedo allá donde lo muevas porque sabe que tocarlo le trae cosas buenas. ¡Ya tienes el control suave de su movimiento!",
        },
        {
          heading: "Trucos fáciles para empezar",
          body: "'Ven aquí' (La orden más importante): Es vital por seguridad. Llámalo por su nombre o chasquea la lengua. Cuando venga hacia ti, celebra mucho y dale un premio espectacular. Importante: Nunca le riñas cuando venga, aunque haya tardado mucho. Tiene que asociar 'venir' con 'fiesta'. 'Sentado': Los gatos se sientan naturalmente cuando miran hacia arriba. Con el gato de pie, pon una chuchería justo encima de su cabeza. Mueve la mano lentamente hacia atrás (hacia su cola). Para seguir la comida con la mirada, bajará el trasero automáticamente. En cuanto el culo toque el suelo, di 'Sentado' y dale el premio. 'Al regazo' o 'Sube': Ideal para que venga a dormir contigo o suba a sitios permitidos. Siéntate en una silla o sofá. Golpea suavemente tu pierna o el asiento y di 'Sube'. Guíalo con la chuchería si hace falta. Cuando suba, ¡premio inmediato! Pronto saltará solo para estar contigo.\n\nSi quieres un método más detallado con premios, lee [Clicker training para gatos](/categoria/comportamiento/entrenamiento/clicker-training).",
        },
        {
          heading: "Retos un poco más avanzados",
          body: "'Quieto': Pídele que se siente. Pon la palma de tu mano frente a su cara (como un semáforo en rojo) y di 'Quieto'. Espera solo 1 segundo al principio. Si no se mueve, premio. Ve aumentando el tiempo poco a poco (2 segundos, 5 segundos...). Paciencia, esto cuesta más. 'Échate' (Tumbado): Es difícil porque es una posición vulnerable para ellos. Desde la posición de sentado, baja la chuchería al suelo, entre sus patas delanteras. Aléjala despacio hacia adelante. Si baja el pecho y se estira, ¡premio gordo! No esperes que se quede así mucho tiempo al principio.",
        },
        {
          heading: "¿Pasear con correa? Sí, es posible",
          body: "A muchos gatos les encanta explorar el exterior, pero debe ser seguro. El Arnés: Compra uno tipo chaleco (más cómodo y seguro que los de cuerda fina). Déjaselo puesto en casa unos minutos al día mientras juega, para que se acostumbre. La Correa: Añádela cuando ya ignore el arnés. Deja que la arrastre bajo tu supervisión. La Salida: Sal al pasillo o jardín. No tires de la correa. Deja que él explore y tú le sigues. Si se asusta, vuelve dentro. Sin prisas.",
        },
        {
          heading: "Solucionando problemas con juego",
          body: "¿Araña el sofá? No le grites. Pon un rascador justo al lado del sofá. Usa el truco de 'la diana' para guiar sus patas al rascador y prémiale mucho cuando lo use. Haz que el rascador sea más interesante que el sofá (ponle catnip, por ejemplo). ¿Se aburre? El entrenamiento ES el juego. Dedica esos 10 minutos diarios a repasar trucos. Verás cómo deja de buscar atención negativa (maullidos, destrozos) porque ya tiene tu atención positiva.",
        },
        {
          heading: "Consejo final: Disfruta del proceso",
          body: "No busques la perfección. Busca la conexión. Verás cómo tu gato empieza a buscarte para 'trabajar' (jugar), cómo te mira a los ojos esperando instrucciones y cómo su personalidad brilla. Un gato entrenado es un gato confiado, feliz y mucho más cariñoso. ¡Anímate! Tu 'tigre de sofá' tiene mucho potencial oculto.",
        }
      ]
    },
    {

      slug: "guia-paseos-correa",
      title: "Paseos Felinos: Cómo enseñar a tu gato a caminar con correa (sin estrés)",
      intro: "Sacar a pasear a tu gato puede sonar extraño, pero es una forma fantástica de que disfrute del aire libre de manera segura. Además, ayuda a que esté más tranquilo durante las visitas al veterinario o los viajes. La clave no es la fuerza, sino la paciencia y las golosinas.",
      sections: [
        {
          heading: "Antes de empezar",
          image: "/images/paseo-gatitos.webp",
          body: "Asegúrate de que tu gato tenga todas sus vacunas al día y lleve microchip. La seguridad es lo primero.",
        },
        {
          heading: "Paso 1: Presentación positiva (El arnés es amigo)",
          body: "No le pongas el arnés de golpe. Queremos que lo asocie con cosas buenas. Fase de olor: Deja el arnés y la correa cerca de su cama o su plato de comida durante unos días. Que se acostumbre a verlos y olerlos mientras come o duerme. Asociación positiva: Sostén el arnés en tu mano, deja que lo huela y dale una chuchería rica. Acércalo suavemente a su cuerpo sin ponérselo, sigue dando premios.",
        },
        {
          heading: "Paso 2: El primer ajuste (Dentro de casa)",
          body: "Ahora vamos a probar cómo le queda. Coloca el arnés suavemente sobre sus hombros y pecho. Dale premios constantemente mientras lo huele y lo toca. Abrocha el arnés rápidamente. Regla de oro: Deben caber dos dedos entre el arnés y el cuerpo del gato (ni muy apretado, ni muy holgado). Déjaselo puesto solo 1 o 2 minutos al principio. Juega con él o dale comida húmeda para distraerlo. Quítaselo antes de que se moleste o intente quitárselo. Repite esto diariamente, aumentando el tiempo poco a poco si se muestra relajado.",
        },
        {
          heading: "Paso 3: La correa 'fantasma'",
          body: "Una vez que tolera el arnés, añadimos la correa. Conecta la correa al arnés dentro de casa. Deja que la correa arrastre por el suelo mientras tu gato juega o explora. Vigila que no se enganche en muebles o patas de sillas. Haz esto durante varios días hasta que ignore completamente el peso de la correa arrastrándose.",
        },
        {
          heading: "Paso 4: Tú tomas el mando (Sin tirones)",
          body: "Ahora es tu turno de sostener la correa. Toma la correa suavemente y sigue a tu gato por la casa. Mantén la correa floja. No tires de ella. Solo acompáñalo. Si se detiene, espera. Si viene hacia ti, ¡premio y halagos! El objetivo es que entienda que la correa no duele ni restringe, sino que es un vínculo contigo.",
        },
        {
          heading: "Paso 5: Guía suave y dirección",
          body: "Cuando ya camine tranquilo con la correa en mano, empieza a guiarlo. Usa una voz dulce y suave para invitarlo a seguirte. Lanza una golosina unos pasos más adelante. Mientras la come, avanza tú también. Si tira hacia otro lado, no des tirones. Mantén una tensión muy suave y constante en la correa. En cuanto el gato ceda y mire hacia ti o dé un paso en tu dirección, afloja la correa inmediatamente y premia. Aprenderá que 'ceder a la presión = libertad y premio'.",
        },
        {
          heading: "Paso 6: La gran salida (El exterior)",
          body: "Los gatos pueden asustarse mucho con los ruidos y olores de fuera. Empieza en un lugar tranquilo y cerrado (un patio interior o jardín seguro). Siéntate en el suelo con él. Deja que explore a su ritmo. Al principio, solo síguele tú a él. No intentes marcar una ruta. Si ves que tiene miedo (se agacha, intenta escapar), vuelve a casa. No lo fuerces. El paseo debe ser divertido, no una pesadilla.",
        },
        {
          heading: "Reglas de Seguridad Importantes",
          body: "Nunca lo dejes solo: Jamás ates la correa a algo y te vayas. Podría enredarse, lastimarse o quedar indefenso ante un perro u otro peligro. La puerta es zona de riesgo: Ponle el arnés lejos de la puerta de salida. Sácalo en brazos hasta fuera. Si lo haces cerca de la puerta, aprenderá a intentar escaparse cada vez que abras. Ignora las rabietas: Si maúlla o se queja para que lo saques, ignóralo. Solo ponle el arnés y salgan cuando esté tranquilo. Así aprende que la calma es la llave para salir. Respeta sus límites: Si tu gato tiene mucho miedo, no insistas. Hay muchas formas de enriquecer su vida dentro de casa (juguetes, rascadores, ventanas mirador). Con amor y constancia, tu gato podría llegar a disfrutar de sus paseos tanto como tú. ¡Disfrutad de la aventura! 🐾🌳\n\nSi el paseo le produce miedo o estrés, revisa [El Estrés en el Gato: Guía completa para entenderlo y ayudarlo](/categoria/comportamiento/estrés/guia-estres-ansiedad).",
        }
      ],
},
          {
            slug: "clicker-training",
            title: "Clicker training para gatos",
            intro: "Los gatos sí pueden aprender con refuerzo positivo, y el clicker es una herramienta útil porque marca el instante exacto en que hacen lo que quieres. Sirve para enseñar trucos, para que se acostumbre al transportín y para colaborar en los cuidados veterinarios. No es una solución mágica ni funciona igual con todos los gatos.",
            sections: [
              {
                heading: "Cómo funciona",
                image: "/images/clicker-gatitos.webp",
                body: "El clicker emite un sonido breve y siempre igual. Se asocia a un premio que tu gato valore mucho, normalmente comida. El clic marca la conducta correcta, y el premio llega en uno o dos segundos.\n\nEl clic no es el premio: es una señal que avisa de que el premio viene. Por eso, si haces clic por error, entrega igualmente el premio. Si no, puede dejar de confiar en la señal.",
              },
              {
                heading: "Un poco de evidencia",
                body: "En gatos de refugio se ha visto que pueden aprender conductas como tocar un objetivo, sentarse, girar o dar la pata con sesiones cortas de clicker training.\n\nEn un estudio con 100 gatos, tras 15 sesiones de cinco minutos, el 79 % aprendió a tocar un objetivo con la nariz, el 60 % a girar, el 31 % a dar la pata y el 27 % a sentarse. Son estudios prometedores, pero pequeños, así que conviene no esperar resultados iguales en todos los gatos.",
              },
              {
                heading: "Por dónde empezar",
                body: "| **Paso** | **Qué hacer** |\n| 1. Carga el clicker | Haz clic y dale un premio pequeño, sin pedir nada. Repite hasta que tu gato reaccione al sonido esperando comida. |\n| 2. Elige un premio que le encante | Trocitos muy pequeños de comida húmeda o de pollo cocido sin sal. Que sean pequeños para no sobrealimentarlo. |\n| 3. Empieza por algo fácil | El ejercicio más útil suele ser el “target”: que toque con la nariz la punta de un dedo, un palito o una cuchara. Cuando lo haga, haz clic y premia. |\n| 4. Añade la orden | Cuando lo haga siempre, di una palabra, como “toca”, justo antes del gesto. |\n| 5. Sesiones cortas | De 2 a 5 minutos, una o varias veces al día. Termina antes de que se aburra o se frustre. |",
              },
              {
                heading: "Trucos y conductas útiles",
                body: "Cuando domine el target, puedes enseñarle:\n\n• Sentarse.\n• Dar la pata o chocar la pata.\n• Girar.\n• Subir o bajar de un lugar.\n• Entrar al transportín por voluntad propia.\n• Tocar una diana, para que las revisiones veterinarias sean más fáciles.\n\nEl entrenamiento para el transportín es especialmente útil. La AAFP y la ISFM recomiendan dejarlo accesible en casa, con una cama cómoda y premios, para que lo asocie con cosas buenas. El clicker también puede servir como señal para que entre.\n\nUn estudio encontró que los gatos entrenados con refuerzo positivo para usar el transportín mostraron menos señales de estrés durante el viaje, y las revisiones veterinarias fueron más cortas.\n\nPara aprender a entrenar sin castigos ni presión, revisa también [Tu gato también quiere aprender: Guía divertida para entrenar en casa](/categoria/comportamiento/entrenamiento/guia-entrenamiento-casa).",
              },
              {
                heading: "Los botones de comunicación",
                body: "Los botones que dicen palabras pueden entrenarse con refuerzo positivo. Un gato puede aprender que pulsar un botón tiene una consecuencia concreta, por ejemplo, que pulsar “comida” trae comida.\n\nPero no está demostrado que los gatos “hablen” con un significado humano complejo. Interpretar cada pulsación como una frase o un pensamiento sería exagerar lo que sabemos.",
              },
              {
                heading: "Qué evitar",
                body: "| **Qué evitar** | **Por qué** |\n| Castigos físicos, gritos o rociarlo con agua | Aumentan el miedo y el estrés, y no enseñan nada útil. |\n| Entrenar con hambre extrema, enfermo o asustado | Puede que no quiera participar, y eso no es un fallo suyo. |\n| Forzarlo a hacer el truco | Si se aleja, termina con algo fácil que ya domina. |\n| Convertirlo en una obligación diaria | Debe ser breve, voluntario y agradable.",
              },
              {
                heading: "Qué esperar de verdad",
                body: "El clicker training puede mejorar la comunicación, dar estímulo mental y hacer más fáciles cuidados como las visitas al veterinario o la medicación. Los estudios son prometedores, pero muchos son pequeños o se hicieron en refugios.\n\nPor eso conviene evitar promesas absolutas, como reducir el estrés o arreglar cualquier problema de conducta. Es una herramienta más, que funciona mejor cuando se combina con un buen entorno y paciencia.",
              },
            ],
          },
        ],
      },
      {
  slug: "bienestar-felino",
  label: "Bienestar",
  topics: [
    {
      slug: "guia-dolor-silencioso",
      title: "El Dolor Silencioso: Cómo saber si tu gato sufre y cómo ayudarle",
      intro: "Los gatos son maestros del disimulo y ocultan su dolor por instinto para no parecer vulnerables. Aprender a leer sus señales sutiles es fundamental para ser su mejor aliado y evitar que su salud se deteriore sin que nos demos cuenta.",
      sections: [
        {
          heading: "Pistas sutiles de dolor",
          image: "/images/silencio-gatitos.webp",
          body: "Olvida los llantos o cojeras; el dolor felino se esconde en cambios de comportamiento: se esconde más (bajo la cama o armarios), cambia su humor volviéndose irritable o inusualmente 'pegajoso', y deja de acicalarse (pelo opaco o con nudos). También puede lamerse en exceso una zona específica, adoptar una postura tensa de 'pan de molde' con la cabeza baja, o dejar de saltar a lugares que antes frecuentaba por dolor articular.",
        },
        {
          heading: "Los dolores más comunes",
          body: "Identificar el tipo ayuda al diagnóstico: la Artrosis es común en mayores de 7 años (dejan de jugar o subir a sitios altos); el dolor de boca (gingivoestomatitis o dientes rotos) causa babeo, mal olor o dejar de comer; el dolor interno (cistitis, riñón o pancreatitis) genera un malestar profundo y depresión; y el dolor nervioso (como en la diabetes) puede causar dolor al simple roce de la piel.",
        },
        {
          heading: "Tratamiento Veterinario Multimodal",
          body: "El tratamiento moderno usa varias herramientas: medicamentos seguros como antiinflamatorios específicos, analgésicos (buprenorfina) o moduladores nerviosos (gabapentina). Se complementa con terapias como acupuntura, láser terapéutico o rehabilitación física. En cirugías, se usan bloqueos locales. ADVERTENCIA: ¡Nunca uses ibuprofeno o paracetamol humanos, son mortales para los gatos!",
        },
        {
          heading: "Tu papel en casa: Manejo Ambiental",
          body: "Adapta el entorno: instala rampas o escalones para subir a sofás, usa areneros con bordes bajos y camas ortopédicas. El control de peso es crucial para no sobrecargar articulaciones. Además, reduce el estrés manteniendo rutinas tranquilas y usando feromonas si es necesario, ya que el estrés empeora la percepción del dolor.",
        },
        {
          heading: "Casos Especiales: Edad y Estado",
          body: "En gatitos cachorros, hay que tener mucho cuidado con las dosis por sus órganos en maduración. En gatos mayores con problemas de riñón o hígado, las dosis deben ajustarse minuciosamente. En gatas gestantes o lactantes, solo el veterinario debe decidir el tratamiento, ya que muchos analgésicos pasan a los fetos o a la leche.\n\nEn gatos mayores, muchos signos de dolor se confunden con la vejez: lee [Cuidados del gato mayor](/categoria/etapas/senior/cuidados-senior).",
        },
        {
          heading: "No esperes a que se queje",
          body: "Un gato que no se queja no significa que no sufra. El dolor crónico no tratado empeora la calidad de vida y acelera el envejecimiento. Ante cualquier cambio en la rutina, apetito o carácter, consulta al veterinario. Con tu observación amorosa y ayuda médica, tu gato puede vivir sin sufrimiento incluso con enfermedades crónicas.",
        },
      ],
    },
  ],
},
{
  slug: "estrés",
  label: "Estrés",
  topics: [
    {
      slug: "guia-estres-ansiedad",
      title: "El Estrés en el Gato: Guía completa para entenderlo y ayudarlo",
      intro: "Cada vez sabemos más sobre el comportamiento felino, y una de las claves principales es el estrés. Muchos problemas de salud y conducta que vemos en casa tienen su raíz aquí. Entender qué le pasa a tu gato es el primer paso para mejorar su calidad de vida.",
      sections: [
        {
          heading: "¿Qué es realmente el estrés?",
          image: "/images/estres-gatito-v2.webp",
          body: "El estrés no es siempre 'malo'. Es una reacción natural del cuerpo que prepara al gato para adaptarse a cambios (una mudanza, un viaje, la llegada de un bebé). Estrés positivo: Le ayuda a reaccionar y adaptarse. Estrés negativo: Ocurre cuando la situación es demasiado intensa o dura demasiado tiempo. Si el gato no logra adaptarse, el estrés se cronifica y puede derivar en ansiedad. Diferencia clave: Miedo vs. Ansiedad. Miedo: Reacción inmediata ante un peligro real. El corazón se acelera y el gato está listo para huir o defenderse. Es útil para sobrevivir. Ansiedad: El gato siente miedo ante algo que no es peligroso o que no puede controlar. No sabe cómo resolver la situación, así que vive en tensión constante.",
        },
        {
          heading: "¿Por qué algunos gatos son más sensibles?",
          body: "No todos los gatos reaccionan igual. Su nivel de tolerancia al estrés depende de dos factores principales:\n\nA. Genética y Carácter: Algunos gatos son naturalmente más seguros; otros, más tímidos. Factores como la raza, el sexo y la herencia genética influyen. Un gato inseguro necesitará siempre un entorno más tranquilo y predecible.\n\nB. La Socialización Temprana (La ventana crítica): Las primeras 2 a 7 semanas de vida son decisivas. Si hubo contacto humano cariñoso: El gatito aprenderá que las personas son seguras. Será más sociable y resistente al estrés. Si faltó contacto o hubo experiencias negativas: Es muy probable que desarrolle desconfianza y miedo hacia los humanos o nuevos estímulos cuando sea adulto. El entorno importa: Los gatitos criados en ambientes ricos en estímulos (sonidos, texturas, juegos) suelen ser adultos más adaptables.",
        },
        {
          heading: "¿Qué causa estrés en mi gato?",
          body: "Los gatos necesitan sentir que tienen el control de su entorno. Cuando pierden ese control, aparece el estrés. Factores Sociales: Cambios en la rutina diaria. Llegada de nuevas personas, bebés u otras mascotas. Discusiones o gritos en casa. Castigos o atención irregular (a veces mucha, a veces nada). Factores Físicos: Mudanzas o reformas. Espacio insuficiente o mala organización (ej. arenero cerca de la comida). Competencia por recursos (si hay varios gatos y pocos platos o areneros).",
        },
        {
          heading: "Señales de Alerta: ¿Cómo sé si mi gato está estresado?",
          body: "Los gatos son expertos en ocultar el dolor y el malestar. Debes ser un detective. Síntomas Físicos Inmediatos: Respiración acelerada o jadeo. Pupilas muy dilatadas. Temblores o salivación excesiva. Vómitos o diarrea puntual (ej. antes de viajar). Cambios de Comportamiento: Postura: Orejas hacia atrás, cola baja, cuerpo tenso. Escondite: Pasa mucho tiempo oculto o bajo los muebles. Agresividad: Gruñe, bufa o ataca sin motivo aparente. Vigilancia extrema: No se relaja, está siempre 'en guardia'. Signos de Estrés Crónico (A largo plazo): Si el estrés no se trata, aparecen problemas más graves: Aseo compulsivo: Se lame tanto que se queda sin pelo (alopecia psicógena). Problemas de eliminación: Ora o defeca fuera del arenero (marcado territorial o ansiedad). Cambios en el sueño: Duerme poco, mal, o siempre en posiciones tensas (no boca arriba ni de lado relajado). Cambios alimenticios: Come en exceso (ansiedad) o deja de comer. Conductas repetitivas: Persigue su cola, maúlla constantemente o camina sin rumbo.",
        },
        {
          heading: "El impacto en la Salud Física",
          body: "El estrés no es solo 'cosa de la mente'; enferma el cuerpo. Cistitis Idiopática Felina: Inflamación de la vejiga sin infección bacteriana, directamente ligada al estrés. Problemas digestivos: Gastritis, vómitos crónicos o diarreas. Problemas de piel: Heridas por lamido excesivo. Obesidad y Diabetes: A veces, los dueños dan comida para 'consolar' al gato, lo que lleva al sobrepeso. Bajada de defensas: Los gatitos o gatos mayores estresados se enferman más fácilmente (gripes, infecciones). Importante: Antes de asumir que es estrés, acude al veterinario. Problemas como hipertiroidismo, dolor articular o tumores pueden imitar síntomas de estrés o ansiedad.\n\nPara reconocer otras señales de malestar, lee [El Dolor Silencioso: Cómo saber si tu gato sufre y cómo ayudarle](/categoria/comportamiento/bienestar-felino/guia-dolor-silencioso).",
        },
        {
          heading: "¿Cómo ayudar a tu gato? (Tratamiento y Manejo)",
          body: "El objetivo es devolverle la sensación de seguridad y control.\n\nA. Terapia de Conducta (Lo más importante): Identifica la causa del estrés y modifica el entorno. Respeta sus rutinas. Proporciona lugares altos y escondites seguros. Juega con él diariamente para liberar tensión.\n\nB. Ayudas Ambientales: Feromonas: Son sustancias químicas (como Feliway) que imitan las feromonas faciales de los gatos, transmitiendo mensaje de 'calma' y 'familiaridad'. Ayudan a reducir el marcado y la ansiedad. Enriquecimiento ambiental: Rascadores, juguetes interactivos y acceso a ventanas seguras.\n\nC. Alimentación Anti-Estrés: Existen dietas específicas o suplementos que ayudan: Triptófano: Un aminoácido precursor de la serotonina (la hormona de la felicidad). Derivados de la leche: Proteínas hidrolizadas con efecto calmante natural. Estos nutrientes ayudan a regular el estado de ánimo, mejorar la digestión y cuidar la piel.\n\nD. Medicación: En casos severos de ansiedad, el veterinario conductista puede recetar fármacos. Nunca mediques a tu gato por tu cuenta. Los medicamentos deben ser siempre el complemento de una terapia de conducta, no la única solución.",
        },
        {
          heading: "Conclusión",
          body: "El estrés en los gatos es invisible pero poderoso. Un gato tranquilo es un gato sano. Observa sus pequeños cambios, respeta su necesidad de control y, si ves señales de alarma, busca ayuda profesional. Tu comprensión puede cambiar totalmente su bienestar.",
        }
      ],
    },
  ],
}

    ],
  },
  {
    slug: "cuidado-gatito",
    label: "Cuidado del Gatito",
    seoTitle: "Cuidado de gatitos: guía desde el nacimiento",
    emoji: "",
    color: "#e67e22",
    bg: "#fef3e2",
    description: "Guía integral para cuidar a un gatito desde el nacimiento hasta la edad adulta: temperatura, alimentación, socialización y primeros controles.",
    intro: "Un gatito recién nacido depende por completo de su madre o de ti para sobrevivir. Durante las primeras semanas necesita calor, alimentación frecuente y una higiene cuidadosa, y cualquier descuido puede tener consecuencias serias. Esta sección reúne la información básica para cuidar a un gatito desde el nacimiento hasta la edad adulta.\n\nEncontrarás cómo mantener la temperatura adecuada, cómo alimentar a un gatito que no puede tomar leche de su madre, cuándo empezar el destete y qué esperar de su crecimiento. También se explica la socialización, un periodo clave para que aprenda a relacionarse con personas y con otros animales de forma tranquila.\n\nSi encuentras un gatito que parece necesitar ayuda, revisa primero los temas de primeros auxilios. Ante cualquier duda, o si el gatito es muy pequeño, lo más seguro es acudir cuanto antes a un veterinario o a un centro de rescate con experiencia.\n\nLos gatitos se desarrollan rápido, y cada semana trae cambios nuevos. Llevar un registro sencillo de su peso, su alimentación y sus deposiciones te ayudará a notar a tiempo cualquier desviación y a comentarlo con el veterinario.",
    subcategories: [
      {
        slug: "neonatos",
        label: "Neonatos (0-20 días)",
        topics: [
          {
            slug: "guia-neonatos",
            title: "Guía integral para el cuidado del gatito",
            intro: "Cuidar a un gatito recién nacido sin su madre exige estar pendiente de cuatro cosas: la temperatura, la hidratación, la alimentación con un sustituto de leche felino y la eliminación. Nunca lo alimentes si está frío, y no le pongas enemas, laxantes ni remedios caseros sin indicación veterinaria: pueden ser peligrosos o incluso mortales.",
            sections: [
              {
                heading: "Cómo es un gato, y cómo se comunica",
                image: "/images/cuidado-gatito.webp",
                body: "El gato no es un perro pequeño ni un bebé humano. Tiene sentidos hechos para cazar: ve bien con poca luz, oye sonidos muy agudos, sus bigotes detectan movimientos y cambios de presión, y tiene un órgano que le permite analizar olores complejos.\n\nEl ronroneo no siempre significa que está feliz. También puede aparecer cuando está estresado, con dolor o enfermo. Por eso, tómalo siempre junto con la temperatura, el apetito, la actividad y la respiración.",
              },
              {
                heading: "Primeros pasos: qué hacer al encontrarlo",
                body: "Antes de nada, comprueba que no esté solo escondido mientras su madre busca comida. Si está frío, débil o en peligro, caliéntalo poco a poco y comunícate con un veterinario o un refugio con experiencia en neonatos.\n\nMientras tanto:\n\n• Ponlo en una caja oscura, ventilada y forrada con mantas limpias.\n• No lo separes de sus hermanos si están sanos, sin necesidad.\n• Evita manipularlo mucho y los ruidos fuertes.\n• Pésalo con una balanza de cocina para seguir su evolución.",
              },
              {
                heading: "Cuánto tiempo tiene, según sus señales",
                body: "Estas edades son aproximadas y te ayudan a calcular cuántos días tiene:\n\n| **Señal** | **Edad aproximada** |\n| El cordón umbilical se seca | Primeros días |\n| Ojos cerrados | Primeros 7 a 10 días |\n| Ojos abiertos | Alrededor de 7 a 14 días |\n| Salen los dientes de leche | 2 a 3 semanas |\n| Camina con más coordinación | 3 a 4 semanas |\n| Empieza a comer sólidos | 3 a 5 semanas |",
              },
              {
                heading: "Temperatura y ambiente",
                body: "Los gatitos menores de 4 semanas no regulan bien su temperatura. Durante la primera semana, la zona donde descansa debe estar entre 29 y 32 °C, aproximadamente, y después puede bajar poco a poco.\n\nUsa botellas con agua tibia envueltas en toallas, o almohadillas térmicas para mascotas. Ponlas siempre tapadas y solo en un extremo del nido, para que pueda alejarse si tiene calor. Evita las quemaduras y no uses mantas eléctricas sin control.\n\nSi está frío, nunca le des de comer. Caliéntalo de forma gradual, idealmente durante una a cuatro horas según la gravedad, y busca atención veterinaria. Calentarlo demasiado rápido puede provocarle un colapso cardiovascular.",
              },
              {
                heading: "Alimentación",
                body: "Usa solo sustituto de leche felino comercial, preparado según las indicaciones del envase y del veterinario. No le des leche de vaca, leche humana, leche de cabra ni mezclas caseras con huevo crudo. No cubren sus necesidades y pueden causarle diarrea, deshidratación o infecciones.\n\nDale la comida boca abajo, con el vientre apoyado y la cabeza un poco elevada. Nunca boca arriba: puede aspirar la leche. Usa una tetina adecuada, y comprueba que la leche salga despacio.\n\nSi no mama, está débil o no gana peso, consulta cuanto antes con el veterinario.\n\n| **Edad** | **Cada cuánto come** |\n| 0 a 1 semana | Cada 2 horas, también de noche. |\n| 1 a 2 semanas | Cada 2 o 3 horas. |\n| 2 a 3 semanas | Cada 3 o 4 horas. |\n| 3 a 4 semanas | Cada 4 o 5 horas, y empieza el destete poco a poco. |\n\nLas cantidades exactas dependen del peso, de la marca de la fórmula y de su estado de salud. No sigas tablas genéricas sin pesarlo y consultar con el veterinario.\n\nPara ver la alimentación por etapas, lee [Nutrición Científica por Etapas](/categoria/tenencia-responsable/nutricion-cientifica/nutricion-etapas).",
              },
              {
                heading: "Higiene y eliminación",
                body: "Los gatitos menores de 3 o 4 semanas suelen necesitar ayuda para orinar y defecar. Después de cada toma, frota suavemente la zona de la cola y la barriga con un algodón o una gasa tibia y húmeda. Así imitas el lamido de su madre.\n\nDespués, sécalo bien para que no se enfríe. La orina suele aparecer pronto. La caca puede tardar más, pero si no hay deposición en 24 a 48 horas o hace esfuerzo, consulta con el veterinario.\n\n**Nunca le pongas enemas caseros, aceite de parafina, aceite de oliva ni laxantes humanos.** Los enemas pueden dañarle el colon, y el aceite puede causarle neumonía si lo inhala. Estos tratamientos solo los debe hacer un veterinario.",
              },
              {
                heading: "Señales de alarma",
                body: "Busca atención veterinaria urgente si el gatito:\n\n| **Señal** | **Qué hacer** |\n| Está frío, débil, no se mueve o no mama | Consulta de inmediato. |\n| No gana peso o pierde peso | Consulta de inmediato. |\n| No orina ni defeca en 24 a 48 horas | Consulta de inmediato. |\n| Tiene diarrea, vómitos, barriga hinchada o le cuesta respirar | Consulta de inmediato. |\n| Tiene temperatura alta o baja, convulsiones o se desploma | Acude a urgencias. |\n\nLa diarrea y los vómitos pueden deshidratarlo muy rápido. Si está húmedo, pegajoso o frío, sécalo y caliéntalo poco a poco, pero no retrases la consulta.",
              },
              {
                heading: "Una regla importante",
                body: "Si fallan a la vez la temperatura y la alimentación, el riesgo es inmediato. No esperes a ver si mejora: contacta con un veterinario, un refugio especializado o un centro de rescate con experiencia en gatitos recién nacidos.",
              },
            ]
          }
        ]
      },
      {
        slug: "destete-crecimiento",
        label: "Desde el Crecimiento (20 días - 12 meses)",
        topics: [
          {
            slug: "guia-destete",
            title: "Destete, crecimiento y transición a vida adulta",
            intro: "El destete suele empezar alrededor de las 3 o 4 semanas y termina entre las 8 y las 10. Durante el crecimiento, el gatito necesita un alimento completo para cachorros de gato, revisiones veterinarias, vacunas, desparasitación, juego y contacto positivo con las personas.",
            sections: [
              {
                heading: "Cómo empieza el destete",
                image: "/images/vida-adulta-gatitos.webp",
                body: "Hacia las 3 o 4 semanas, los gatitos empiezan a mirar la comida sólida: les salen los dientes de leche y empiezan a lamer. El destete debe ser gradual, sin forzar nada. La madre puede seguir amamantando varias semanas mientras aprenden a comer.\n\nLa primera comida suele ser una papilla de alimento húmedo completo para gatitos, mezclada con un sustituto de leche felina y servida en un plato bajo. Nunca uses leche de vaca: puede causar diarrea y no cubre sus necesidades.\n\n| **Paso** | **Qué hacer** |\n| Ofrece poco y con frecuencia | Pequeñas cantidades varias veces al día. |\n| Cambia la proporción | Aumenta la comida poco a poco y reduce el sustituto de leche. |\n| Hacia las 6 u 8 semanas | Muchos ya aceptan alimento húmedo o pienso para gatitos, sin agregar líquido. |\n| Agua fresca | Déjala disponible desde que empieza a comer sólidos. |\n\nNo le des pollo crudo ni caldos caseros. La carne cruda implica riesgo de bacterias, y el caldo puede tener sal, cebolla o ajo, que son peligrosos. Si cuidas a un gatito que no tiene madre, consulta a un veterinario sobre su alimentación.",
              },
              {
                heading: "Alimentación durante el crecimiento",
                body: "Los gatitos necesitan más energía y proteína por kilo que los adultos. Como referencia de la AAHA, un gatito de 10 semanas puede necesitar alrededor de 200 kcal por kilo al día, y a los 10 meses la necesidad baja a unas 80 kcal por kilo.\n\nNo hay una cantidad única para todos. Lo más seguro es usar un alimento completo para crecimiento, seguir la guía del envase como punto de partida y ajustar según el peso, la condición corporal y lo que diga el veterinario.\n\n| **Qué hacer** | **Por qué** |\n| Varias comidas pequeñas al día | Se adapta mejor a su energía y a su tamaño. |\n| Pesarlo con regularidad | Vigila que crezca de forma constante. |\n| Cambiar de alimento poco a poco, en unos 7 días | Evita molestias digestivas y rechazo. |\n| Evitar comida humana, huesos cocidos, leche de vaca y snacks en exceso | Son poco adecuados o pueden causar problemas. |",
              },
              {
                heading: "Socialización y aprendizaje",
                body: "El período más sensible para socializar ocurre sobre todo entre las 2 y las 7 semanas. Las experiencias tranquilas con personas, sonidos cotidianos, manipulación suave, transportes y otros animales ayudan a que, de adulto, sea más seguro y adaptable.\n\nHazlo poco a poco y sin abrumarlo. Deja que se aleje si quiere, usa premios y juego, y evita los ruidos fuertes o el manejo excesivo. Si está con su madre, tenerla cerca durante el destete le da seguridad.\n\nPara enseñarle dónde rascar, pon rascadores cerca de los lugares que ya usa, y anímalo con hierba gatera o premios. Si hace algo que no quieres, redirígelo con un juguete o un rascador. Evita gritos, palmadas y castigos: generan miedo y no enseñan qué hacer en su lugar.\n\nPara revisar las semanas previas al destete, lee [Las primeras semanas de vida](/categoria/etapas/gatito/primeras-semanas).",
              },
              {
                heading: "Salud y prevención",
                body: "La primera visita veterinaria incluye un examen general, el control de peso, la revisión de parásitos y un plan de vacunas hecho a su medida. Las vacunas esenciales suelen empezar hacia las 6 semanas, con dosis cada 3 o 4 semanas hasta las 16 o 20 semanas, según el producto y su situación.\n\nLa desparasitación interna puede empezar desde las 3 semanas. Las guías de la AAFP y la AAHA recomiendan tratarlo cada 2 semanas entre las 3 y las 9 semanas, y luego una vez al mes hasta los 6 meses. Para pulgas y garrapatas, elige el producto con tu veterinario: muchos productos para perros son tóxicos para los gatos.\n\n**Nunca lo medique por su cuenta.** El paracetamol es muy tóxico para los gatos y puede dañar gravemente la sangre y el hígado. La aspirina y otros medicamentos humanos también pueden ser peligrosos. Consulta antes de dar cualquier medicamento.\n\nBusca atención veterinaria urgente si no come, está decaído, tiene diarrea o vómitos que no paran, le cuesta respirar, no sube de peso o muestra signos de deshidratación.",
              },
              {
                heading: "Madurez sexual y esterilización",
                body: "Las gatas pueden entrar en celo desde los 4 o 5 meses, antes de lo que mucha gente cree. Los machos también pueden madurar pronto. Por eso, las organizaciones como la AVMA y la AAHA recomiendan esterilizar a los gatos que no van a criar antes de los 5 meses, alrededor de los 4 meses.\n\nLa esterilización evita las camadas no deseadas, reduce el vagabundeo, las peleas y el marcado con orina, y baja el riesgo de algunas enfermedades en las gatas, como la infección uterina y los tumores de mama. No cambia su personalidad y no garantiza que no engorde: el peso depende de la dieta, las raciones y la actividad.\n\nLa cifra de “65.500 descendientes en cinco años” que se usa en campañas es un cálculo teórico, no una predicción exacta. El mensaje sólido es este: una población sin control crece rápido, porque las gatas pueden tener varias camadas al año y los gatitos maduran pronto.",
              },
              {
                heading: "Etapas de crecimiento",
                body: "| **Edad aproximada** | **Qué ocurre** | **Qué hacer** |\n| 0 a 4 semanas | Depende de la leche materna o del sustituto. Si no tiene madre, puede necesitar ayuda para orinar y defecar. | Alimentación con sustituto adecuado y control veterinario. |\n| 3 a 8 semanas | Destete gradual, exploración, juego y socialización. | Papillas, agua fresca y contacto positivo. |\n| 2 a 6 meses | Crecimiento rápido y mucha energía. | Vacunas, desparasitación y alimento para gatitos. |\n| 4 a 5 meses | Puede madurar sexualmente. | Valorar la esterilización con el veterinario. |\n| 10 a 12 meses | La mayoría pasa al alimento de adulto. Algunas razas grandes pueden tardar más. | Cambio gradual en unos 7 días y revisiones periódicas. |",
              },
            ]
          }
        ]
      },
      {
        slug: "principios-fundamentales",
        label: "Principios Fundamentales",
        topics: [
          {
            slug: "guia-principios",
            title: "Principios fundamentales de supervivencia y cuidado",
            intro: "Cuidar a un gatito recién nacido sin su madre exige estar atento sobre todo a la temperatura, la comida, el peso y la eliminación. Si está frío, no le des de comer hasta que se caliente, porque podría atragantarse o no digerir bien. Ante debilidad, mucho frío, falta de peso o si no orina ni defeca, necesita atención veterinaria urgente.",
            sections: [
              {
                heading: "La temperatura, lo primero",
                image: "/images/supervivencia-gatitos.webp",
                body: "Los gatitos menores de cuatro semanas no regulan bien su temperatura. Durante la primera semana, la zona donde descansa debe estar entre 29 y 32 °C aproximadamente. Después, la temperatura puede bajar poco a poco hasta la del ambiente.\n\nPon la fuente de calor solo en una parte del nido, para que pueda alejarse si tiene demasiado calor. Puedes usar mantas, almohadillas térmicas para mascotas o discos de calor envueltos en toallas. Evita el contacto directo con fuentes calientes, y no dependas solo de tu propio calor corporal.\n\nNunca le des de comer si está frío. La hipotermia reduce la digestión y aumenta el riesgo de vomitar y aspirar. Caliéntalo poco a poco y consulta al veterinario antes de darle alimento.",
              },
              {
                heading: "Con qué frecuencia comer",
                body: "La frecuencia depende de su edad, su peso y cómo esté de salud. Como referencia:\n\n| **Edad** | **Cada cuánto come** |\n| 0 a 1 semana | Aproximadamente cada 2 horas, también de noche. |\n| 1 a 2 semanas | Cada 2 o 3 horas. |\n| 2 a 3 semanas | Cada 3 o 4 horas. |\n| 3 a 4 semanas | Cada 4 o 5 horas, y empieza el destete poco a poco. |\n\nUsa solo sustituto de leche felina, preparado según las indicaciones del envase y del veterinario. Nunca le des leche de vaca, fórmula humana ni remedios caseros. No cubren sus necesidades y pueden causarle diarrea y deshidratación.\n\nDale la comida boca abajo, con el vientre apoyado y la cabeza un poco elevada, como cuando mama de su madre. Si lo alimentas boca arriba, puede aspirar la leche, algo que pone la vida en riesgo.",
              },
              {
                heading: "Ayudarlo a orinar y defecar",
                body: "Los gatitos menores de 3 o 4 semanas suelen necesitar ayuda. Después de cada toma, frota suavemente la zona de la cola y la barriga con un algodón o un paño tibio y húmedo. Así imitas el lamido de su madre.\n\nDespués sécalo bien, para que no se enfríe. Si no orina ni defeca en 24 horas, consulta con urgencia: puede tener deshidratación, estreñimiento u otro problema grave.",
              },
              {
                heading: "Llevar un registro diario",
                body: "Anota cada día lo siguiente. Te ayudará a ver si todo va bien y a explicárselo al veterinario:\n\n• Peso, idealmente antes y después de cada toma.\n• Cuánta fórmula acepta.\n• Temperatura y aspecto general.\n• Orina y heces: cuántas veces, de qué color y qué consistencia.\n• Actividad, cómo succiona, cuánto duerme y si parece incómodo.\n\nEl peso es uno de los indicadores más útiles. Un gatito sano gana peso de forma constante. Si pierde peso, no gana o come menos, son señales tempranas de alarma.",
              },
              {
                heading: "Descanso y contacto",
                body: "Los recién nacidos duermen casi todo el día, y eso les ayuda a crecer. El contacto debe ser breve y tranquilo, y para alimentarlo, limpiarlo, ayudarlo a hacer sus necesidades o pesarlo. Evita manipularlo sin parar, los ruidos fuertes, los cambios bruscos y las corrientes de aire.\n\nCuando esté estable, puedes empezar a socializarlo poco a poco, con voz suave, manejo breve y experiencias agradables. Pero si está débil, lo primero es que su temperatura, su hidratación y su alimentación estén bien.",
              },
              {
                heading: "Respetar cómo es un gato",
                body: "Los gatos no son perros pequeños ni bebés humanos. Tienen necesidades propias de temperatura, alimentación, olfato, territorio y descanso. Su independencia, su limpieza y su sensibilidad son adaptaciones que conviene respetar desde el principio.\n\nSi es huérfano, eso significa ofrecerle un nido seguro, rutinas previsibles, calor adecuado, un alimento específico y contacto tranquilo. La idea es cubrir sus necesidades sin cargarlo de estímulos.",
              },
              {
                heading: "Señales de alarma",
                body: "Consulta de inmediato si el gatito:\n\n| **Qué observas** | **Qué hacer** |\n| Frío al tacto, sin fuerzas o sin ganas de mamar | Consulta de inmediato. |\n| Sube de peso muy despacio o adelgaza | Consulta pronto. |\n| Lleva de 24 a 48 horas sin orinar ni hacer caca | Consulta con urgencia. |\n| Diarrea, vómitos, abdomen hinchado o dificultad para respirar | Consulta de inmediato. |\n| Temperatura muy alta o muy baja, convulsiones o desmayo | Acude a urgencias veterinarias. |\n\nSi el gatito tiene problemas para respirar o convulsiona, lee primero [Primeros Auxilios para Gatitos: Qué hacer en una emergencia](/categoria/emergencia/emergencias-felinas/guia-primeros-auxilios-gatitos).",
              },
              {
                heading: "Una nota final",
                body: "Sacar adelante a un gatito recién nacido sin madre exige dedicación, conocimientos y apoyo veterinario. Aun con buenos cuidados, su fragilidad puede poner límites. Eso no significa que hayas fallado.\n\nPara el seguimiento de su alimentación, la dosis de fórmula o cualquier caso clínico, consulta siempre con un veterinario o con un centro de rescate con experiencia en gatitos recién nacidos.",
              },
            ]
          }
        ]
      }
    ]
  },
    {
    slug: "emergencia",
    label: "Emergencia",
    seoTitle: "Emergencias felinas: primeros auxilios",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Primeros auxilios para gatos: qué hacer ante una emergencia, cuándo acudir de inmediato al veterinario y qué tener preparado en casa.",
    intro: "En una emergencia, los primeros minutos pueden marcar la diferencia. Esta sección reúne información de primeros auxilios para gatos, pensada para que sepas qué hacer mientras llegas al veterinario. Estas pautas no reemplazan nunca su atención profesional.\n\nAquí verás qué signos indican que un gato necesita atención inmediata, como dificultad para respirar, sangrado, convulsiones o ingestión de sustancias peligrosas. También encontrarás pautas para mantener la calma, inmovilizar con cuidado a un gato lesionado y preparar un pequeño botiquín en casa.\n\nAnte la duda, consulta con un veterinario lo antes posible. Es mejor llamar y preguntar que esperar a que el cuadro empeore.\n\nTener a mano el número de tu veterinario y de una clínica de urgencias evita perder tiempo en un momento de estrés. Anota también los datos básicos de tu gato, como su peso, su edad y los medicamentos que toma.\n\nMantente tranquilo al atender a tu gato. Un animal asustado puede morder o arañar aunque lo quieras, así que actúa con calma, con gestos suaves y con la ayuda de alguien más si es posible.",
    subcategories: [
      {
  slug: "emergencias-felinas",
  label: "Primeros Auxilios",
  topics: [
    {
      slug: "guia-primeros-auxilios-gatitos",
      title: "Primeros Auxilios para Gatitos: Qué hacer en una emergencia",
      intro: "Los primeros auxilios no reemplazan al veterinario. Sirven para cuidar al gatito, frenar un sangrado o un enfriamiento, y llevarlo con seguridad a la clínica. Si tiene dificultad para respirar, se desploma, convulsiona, sufrió un golpe fuerte, sangra mucho o no puede orinar, llama a urgencias y ve de inmediato.",
      sections: [
        {
          heading: "Primero, la calma y tu seguridad",
          image: "/images/auxilio-gatito.webp",
          body: "Un gatito con dolor puede morder o arañar, aunque normalmente sea tranquilo. Acércate despacio, háblale en voz baja y evita movimientos bruscos. Si hace falta, envuélvelo suavemente en una toalla gruesa, dejando la cabeza libre.\n\nNo le pongas bozal. Puede dificultarle la respiración y le impide vomitar con seguridad.\n\nSi sospechas una lesión en la cabeza, el cuello o la espalda, mueve lo menos posible esa zona y trasládalo sobre una superficie firme.",
        },
        {
          heading: "Revisión rápida antes de moverlo",
          body: "Antes de trasladarlo, mira estas cuatro cosas en menos de un minuto:\n\n| **Qué revisar** | **Qué significa** |\n| Vías respiratorias | ¿Hay algo que tape la boca o la nariz? ¿Se oyen ruidos raros al respirar? |\n| Respiración | Si respira rápido, con esfuerzo o con la boca abierta, es una urgencia. |\n| Sangrado | Presiona la herida con una gasa o tela limpia. Si se empapa, pon más encima sin quitar la primera. |\n| Color y estado | Encías pálidas o azuladas, debilidad, desmayo, convulsiones o inconsciencia son urgencias. |\n\nSi sospechas una fractura, no le hagas un vendaje casero. Muévelo con cuidado y llévalo al veterinario.",
        },
        {
          heading: "Si el gatito está muy pequeño o débil",
          body: "Los gatitos muy pequeños, que no comen, vomitan o tienen diarrea, pueden bajar mucho su azúcar. Señales frecuentes: debilidad, tambaleo, desorientación, temblores o colapso.\n\n| **Situación** | **Qué hacer** |\n| Azúcar bajo, pero está consciente y puede tragar | Coloca un poco de glucosa, jarabe de maíz o miel en la encía, entre la mejilla y los dientes. |\n| Inconsciente, convulsionando o no puede tragar | No le des nada por la boca: podría atragantarse. Lleva a urgencias de inmediato. |\n\nEl azúcar solo gana tiempo. No retrases el traslado, aunque parezca mejorar.",
        },
        {
          heading: "Si está frío",
          body: "Si el gatito está frío, débil o muy quieto, sécalo si está mojado y envuélvelo en mantas secas. Puedes poner botellas con agua tibia, nunca caliente, envueltas en una toalla y junto a su cuerpo. Cámbialas de vez en cuando para evitar quemaduras.\n\nNo uses secadores muy calientes, agua caliente ni frotes con fuerza. El frío puede acompañar a infecciones, shock o traumatismos, así que debe verlo un veterinario, aunque parezca recuperarse.",
        },
        {
          heading: "Si tuvo demasiado calor",
          body: "Si estuvo expuesto a mucho calor y jadea, babea, está débil, vomita o tiene diarrea, llévalo a un lugar fresco y ventilado. Puedes mojar suavemente su pelo con agua fresca, sin que esté helada, sobre todo en la barriga. Y ve de inmediato a urgencias.\n\nNo lo sumerjas en agua helada ni pongas hielo directamente sobre su cuerpo. Enfriarlo demasiado rápido también puede ser peligroso.",
        },
        {
          heading: "Cómo trasladarlo con seguridad",
          body: "| **Opción** | **Cómo hacerlo** |\n| Transportadora rígida | Con ventilación y una manta o toalla dentro. |\n| Caja de cartón resistente | Solo de forma temporal, con agujeros para que respire. |\n| Sospecha de fractura o lesión de la espalda | Muévelo sobre una tabla, cartón grueso o manta extendida. Evita doblarlo o torcerlo. |\n\nMientras viajas, llama a la clínica para que se preparen cuando llegues.",
        },
        {
          heading: "Qué tener preparado",
          body: "Guarda este kit en un lugar fácil de encontrar:\n\n• El teléfono y la dirección de una clínica de urgencias que atienda las 24 horas.\n• Una transportadora o caja ventilada.\n• Toallas y mantas limpias.\n• Gasas estériles, vendas y cinta médica.\n• Tijeras de punta redondeada.\n• Glucosa, jarabe de maíz o miel.\n• Solución salina estéril para limpiar heridas superficiales.\n• Guantes desechables y una lista de medicamentos o alergias del gatito.\n\nSi el gatito es muy pequeño, consulta también [Guía integral para el cuidado del gatito](/categoria/cuidado-gatito/neonatos/guia-neonatos).",
        },
        {
          heading: "Lo que nunca debes hacer",
          body: "**Nunca le des paracetamol, ibuprofeno, aspirina ni ningún otro medicamento humano.** El paracetamol es especialmente tóxico para los gatos y puede causar daño grave o la muerte.\n\n• No le provoques el vómito, salvo que lo indique un veterinario o un centro de toxicología.\n• No le des leche, alcohol, comida humana ni remedios caseros.\n• No esperes a ver si mejora. Ante dificultad para respirar, convulsiones, golpes fuertes, sangrado abundante, colapso o dificultad para orinar, ve a urgencias de inmediato.",
        },
      ]
    },
  ],
      },
    ],
  },
  {
    slug: "etapas",
    label: "Etapas de vida",
    seoTitle: "Etapas de vida del gato: de cachorro a senior",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Las etapas de vida de un gato, de cachorro a senior: cómo cambian sus necesidades de alimentación, salud, actividad y cuidado a lo largo de los años.",
    intro: "Un gato cambia mucho a lo largo de su vida. Un cachorro necesita energía, juego y mucho aprendizaje; un adulto busca rutinas estables, y un gato senior empieza a necesitar más atención a su salud, su alimentación y su comodidad. Esta sección recorre esas etapas para que sepas qué esperar en cada una.\n\nVerás cómo crece un gatito, qué cambia en la alimentación y el juego a medida que madura, y qué señales conviene vigilar cuando envejece, como cambios de peso, de apetito o de movilidad. Cada etapa tiene necesidades propias, y adaptar el cuidado a ellas ayuda a que el gato se mantenga sano y cómodo.\n\nLas edades son orientativas, porque cada gato envejece a su ritmo. Si tienes dudas sobre la etapa en la que se encuentra el tuyo, pregunta a tu veterinario: puede ajustar las recomendaciones a su caso.\n\nLos cambios entre etapas no siempre son claros. Algunos gatos envejecen antes que otros, y algunos adultos jóvenes conservan mucha energía. Observa a tu gato como es hoy, no como era en otra época.",
    subcategories: [  
      {
  slug: "genetica-felina",
  label: "Genética y Herencia",
  topics: [
    {
      slug: "guia-genetica-colores",
      title: "Genética Felina: Entendiendo los colores y la herencia (sin complicaciones)",
      intro: "La genética de los gatos no es magia, es ciencia. Entender las bases te ayudará a comprender por qué tu gato tiene ese color específico y cómo funciona la herencia en su pelaje, dejando de lado los mitos antiguos para centrarse en la ciencia actual.",
      sections: [
        {
          heading: "Desmontando el mito de Darwin",
          image: "/images/genetica-felina.webp",
          body: "Durante mucho tiempo se creyó que la domesticación 'creaba' nuevas variedades por sí misma, pero esto es falso. Los humanos no creamos los genes, sino que los seleccionamos. En la naturaleza, las mutaciones extrañas suelen eliminarse si no ayudan a sobrevivir, pero en casa protegemos variaciones como el pelo largo o ciertos colores por estética. Toda la variedad actual ya existía potencialmente en los ancestros salvajes; nosotros solo hemos acelerado su aparición mediante la cría selectiva.",
        },
        {
          heading: "¿Cómo funcionan los colores? (Lo básico)",
          body: "Los caracteres dependen de los genes y sus versiones llamadas 'alelos'. Usando el ejemplo del Negro (D) y el Azul/Gris (d): DD (Homocigoto Dominante) resulta en un gato Negro; Dd (Heterocigoto) resulta en un gato Negro visualmente pero 'portador' del gen azul; dd (Homocigoto Recesivo) resulta en un gato Azul. La regla de oro es que el negro domina sobre el azul: si hay al menos una 'D', el gato será negro. Para ser azul, debe recibir el gen 'd' de ambos padres.",
        },
        {
          heading: "Importancia de la selección responsable",
          body: "A diferencia de los perros, la genética del color en gatos es extremadamente especializada y distintiva entre razas. Los jueces internacionales y genetistas recomiendan seguir normas estrictas de cruza para evitar resultados inesperados o problemas de salud. No todos los cruces de colores son recomendables, ya que algunos pueden dar lugar a patrones no deseados por el estándar de la raza.\n\nPara conocer las razas y sus características, lee [Guía Completa de Razas de Gatos](/categoria/razas/razas-felinas/guia-completa-razas).",
        },
        {
          heading: "Guía rápida de Cruces Recomendados (FIFE)",
          body: "La Federación Internacional Felina (FIFE) sugiere evitar cruces aleatorios entre variedades de color muy distintas. Los principios básicos son: 1. Cruzar dentro de la misma raza (ej. Persas con Persas). 2. Respetar la longitud del pelo (e para pelo corto, l para pelo largo). 3. Evitar cruces 'prohibidos': si en las tablas oficiales no aparece una letra para una combinación específica, es mejor abstenerse por resultados impredecibles o insatisfactorios.",
        },
        {
          heading: "Curiosidad: ¿Ven los colores los gatos?",
          body: "Sí, pero no como nosotros. Tienen mejor visión cromática de lo que se creía, pero distinguen menos matices que los humanos. Es irónico que, aunque ellos ven menos colores, los humanos hayamos creado una variedad de pigmentos y distribuciones en su pelaje mucho más rica y compleja de lo que ellos mismos pueden apreciar.",
        },
        {
          heading: "Conclusión para el Criador o Dueño",
          body: "La genética es probabilidad: si cruzas dos negros portadores de azul (Dd x Dd), tendrás hijos negros y algunos azules. Si cruzas dos azules (dd x dd), todos serán azules. Si cruzas un negro puro (DD) con un azul (dd), todos serán negros pero portadores. Conocer estas bases permite predecir camadas y criar de forma ética, responsable y respetando los estándares de salud.",
        }
      ],
    },
  ],
},
      {
  slug: "reproduccion-felina",
  label: "Reproducción Felina",
  topics: [
    
    {
      slug: "guia-gestacion-gatas",
      title: "La gestación en gatas: Explicación sencilla y natural",
      intro: "La gestación felina es un baile preciso entre señales físicas, hormonas y desarrollo embrionario. Entender cada etapa nos ayuda a respetar y cuidar mejor a nuestras gatas durante este proceso natural.",
      sections: [
        {
          heading: "¿Cómo funciona el ciclo de una gata?",
          image: "/images/gestacion-felina.webp",
          body: "La gata es como un 'reloj estacional' que entra en celo cuando hay más horas de luz (primavera-verano). El apareamiento es la llave: la gata no ovula sola, sino que necesita el estímulo físico de la monta para liberar la hormona LH y que sus óvulos salgan de los ovarios entre 24 y 50 horas después. Si no hay monta fértil, puede tener una 'pseudogestación', donde su cuerpo actúa como si estuviera preñada por aproximadamente 45 días, aunque no haya gatitos.",
        },
        {
          heading: "El viaje del embarazo, paso a paso",
          body: "Cronología tras el apareamiento: De 0 a 50 horas la monta estimula la ovulación. A las +30 horas los óvulos son fecundados en las trompas. A los 5-6 días los embriones (mórulas) llegan al útero. Entre los 8-10 días se convierten en blastocistos. A los 12-13 días ocurre la implantación en la pared del útero (los embriones viajan entre los cuernos para repartirse equitativamente). A los 28-30 días inicia la etapa fetal con formación de órganos. Finalmente, entre los 64 y 67 días, nacen los gatitos.",
        },
        {
          heading: "Las hormonas: Las directoras de orquesta",
          body: "El cuerpo usa mensajeras clave: LH (desencadena la ovulación al inicio); Progesterona P4 (mantiene el útero tranquilo, sube al inicio y baja lentamente tras el día 30); Prolactina (ayuda a mantener los cuerpos lúteos, aumenta desde el día 25-30 siendo clave en la segunda mitad); Relaxina (ablanda tejidos pélvicos y ayuda a mantener el embarazo, sube del día 20-30 solo en preñadas); y Estradiol (prepara útero y mamas, subiendo al final).",
        },
        {
          heading: "¿Quién produce la progesterona al final?",
          body: "Existe un debate científico: la Teoría A dice que los ovarios son esenciales hasta el final, mientras la Teoría B indica que la placenta toma el relevo en la segunda mitad. Lo cierto es que si se opera antes del día 45-50 el embarazo se interrumpe, pero después del día 50 puede continuar, lo que demuestra que la placenta felina tiene capacidad de producir progesterona en las últimas semanas. Es un trabajo en equipo con la prolactina como coordinadora.",
        },
        {
          heading: "Datos rápidos para recordar",
          body: "Duración del embarazo: 64-67 días (≈9 semanas). Tamaño de camada: 1 a 5 gatitos (promedio 3-4). Peso al nacer: 85-105 gramos. La placenta es de tipo 'zonaria' (forma de cinturón) y 'endoteliocorial' (muy invasiva), lo cual explica por qué las gatas no pueden donar sangre fácilmente.\n\nPara entender el desarrollo de las crías después del nacimiento, lee [Las primeras semanas de vida](/categoria/etapas/gatito/primeras-semanas).",
        },
        {
          heading: "¿Por qué importa saber esto?",
          body: "Para criadores responsables permite dar mejores cuidados prenatales. Para veterinarios, conocer las hormonas permite diagnosticar problemas o interrumpir embarazos de forma ética. Para los dueños, es vital saber que el estrés o cambios bruscos pueden afectar directamente las hormonas y, por consecuencia, el éxito de la gestación.",
        }
      ],
    },
  ],
},
      {
        slug: "gatito",
        label: "Gatito (0–6 meses)",
        topics: [
          {
            slug: "primeras-semanas",
            title: "Las primeras semanas de vida",
            intro: "En sus primeras ocho semanas, un gatito pasa de depender por completo de su madre a caminar, jugar, relacionarse y comer alimento sólido. La etapa más sensible para socializar va aproximadamente de las 2 a las 7 semanas, y separarlo de su madre y de sus hermanos no conviene antes de las 8 semanas.",
            sections: [
              {
                heading: "Primeras dos semanas: la etapa del nido",
                image: "/images/semanas-gatitos.webp",
                body: "Los gatitos nacen con los ojos cerrados, los oídos cerrados y sin capacidad para regular bien su temperatura. Dependen por completo de su madre para comer, mantenerse calientes y hacer sus necesidades.\n\nEn esta etapa se orientan con el olfato, el tacto y el calor. Se arrastran con pequeños movimientos hacia el calor y las mamas de su madre.\n\n| **Qué pasa** | **Cuándo** |\n| Se abren los ojos | Entre los 8 y los 14 días, aunque puede ser entre los 2 y los 16. |\n| Se abren los oídos | Entre los 5 y los 8 días. |\n| Toman leche con frecuencia | Desde el primer día. Si son huérfanos, la frecuencia depende de su peso y de lo que indique el veterinario. |\n\nEl calostro, la primera leche de la madre, trae anticuerpos que lo protegen mientras crea su propia defensa.",
              },
              {
                heading: "Entre las 2 y las 7 semanas: la ventana de socialización",
                body: "Es el momento en que los gatitos están más abiertos a conocer personas, otros animales, sonidos, texturas y cosas nuevas. Las experiencias positivas en esta etapa marcan mucho su comportamiento de adulto.\n\nLa socialización debe ser gradual y nunca abrumadora:\n\n• Manipulación suave y breve, alargándola poco a poco.\n• Contacto con personas distintas, sin forzarlo.\n• Sonidos de casa, superficies diferentes y rutinas tranquilas.\n• Juego con juguetes, nunca con manos o pies.\n\nLos gatitos que no tienen experiencias positivas en esta etapa pueden tener más miedo, ansiedad, agresividad por miedo o problemas al jugar.",
              },
              {
                heading: "De las 7 a las 12 semanas: cada vez más independiente",
                body: "El destete empieza hacia las 3 o 4 semanas, cuando el gatito se interesa por la comida sólida, y suele terminar entre las 6 y las 8 semanas.\n\nDesde las 4 semanas puedes ofrecerle alimento húmedo para gatitos en forma de papilla. Después, puedes darle pienso para gatitos, al principio humedecido si hace falta. Debe ser un alimento completo, pensado para el crecimiento.\n\nLa mayoría de las guías recomienda que se quede con su madre y sus hermanos hasta las 8 semanas como mínimo. Muchas organizaciones prefieren 12 semanas, porque ayuda a su desarrollo social y emocional. Separarlo antes puede favorecer el miedo, la agresividad o un juego demasiado brusco.",
              },
              {
                heading: "Hitos clave del desarrollo",
                body: "| **Edad** | **Qué se espera** |\n| 0 a 2 semanas | Ojos cerrados al principio, depende por completo de su madre y se mueve poco. |\n| 2 a 3 semanas | Ojos abiertos, oídos funcionando y primeros pasos tambaleantes. |\n| 3 a 4 semanas | Empieza el destete y se interesa por la comida sólida. |\n| 4 a 7 semanas | Juega con otros, explora y coordina mejor sus movimientos. |\n| 6 a 8 semanas | El destete está casi completo y es más independiente. |\n| 8 a 12 semanas | Es la edad habitual para la adopción. Sigue socializando y recibe sus primeras vacunas. |",
              },
              {
                heading: "Qué vigilar",
                body: "Un gatito sano gana peso de forma constante, mama o come con ganas, está cálido y activo cuando está despierto, y hace sus necesidades de forma adecuada para su edad.\n\nConsulta con urgencia si está frío, débil, no mama, no gana peso, tiene diarrea o vómitos, le cuesta respirar o no hace sus necesidades.\n\nSi el gatito ya está en casa, revisa [Bienvenido a casa: cómo cuidar a tu nuevo gato desde el primer día](/categoria/adopcion/bienvenida/guia-bienvenida-cuidados).",
              },
            ],
          },
        ],
      },
      {
        slug: "senior",
        label: "Senior (+10 años)",
        topics: [
          {
            slug: "cuidados-senior",
            title: "Cuidados del gato mayor",
            intro: "A partir de los 10 años, un gato se considera senior, y conviene revisarlo cada 6 meses. Los cambios en la forma de moverse, comer, pesar, dormir o usar la bandeja no deben atribuirse solo a la edad: pueden ser señales de dolor o de una enfermedad que sí tiene tratamiento.",
            sections: [
              {
                heading: "Cambios que son normales... y los que no",
                image: "/images/gatitos-mayores.webp",
                body: "Con la edad es normal que se vuelva menos flexible, pierda masa muscular, tenga el pelo menos brillante y se canse antes. También puede dormir distinto o tolerar peor el frío.\n\nPero muchos síntomas que parecen “cosas de la edad” son, en realidad, enfermedades que se pueden tratar. La artrosis es muy frecuente y suele pasar desapercibida, porque los gatos no cojean de forma evidente. Fíjate si salta menos, duda antes de subir, usa menos la bandeja, se acicala menos o se irrita al tocarlo.",
              },
              {
                heading: "Cómo adaptar la casa",
                body: "| **Qué cambiar** | **Cómo** |\n| Bandeja accesible | Una caja grande, con entrada baja y sin tapa, en una zona tranquila. Evita que tenga que subir escaleras para llegar. |\n| Comida y agua | En varios puntos accesibles. Los recipientes un poco elevados pueden aliviar a los gatos con artrosis. Mantén la comida y el agua separadas. |\n| Rampas o escalones | Para llegar al sofá, la cama, la ventana o los lugares altos. Que sean antideslizantes. |\n| Descanso | Camas cálidas y blandas, sin corrientes, en zonas tranquilas y fáciles de alcanzar. |\n| Rascadores | Mejor horizontales o bajos, si le cuesta estirarse hacia arriba. |\n| Suelos resbaladizos | Alfombrillas o tapetes antideslizantes para que camine con seguridad. |",
              },
              {
                heading: "Revisiones médicas más frecuentes",
                body: "La AAHA y la AAFP recomiendan revisar a los gatos mayores de 10 años al menos cada 6 meses, aunque parezcan sanos. Así se detectan enfermedades antes de que den síntomas claros.\n\n| **Estudio** | **Para qué sirve** |\n| Hemograma completo | Revisa la sangre en general. |\n| Perfil bioquímico | Mide la función de los riñones y el hígado, la glucosa y los electrolitos. |\n| Análisis de orina | Incluye la densidad y el sedimento. |\n| T4 | Descarta el hipertiroidismo. |\n| Presión arterial | Detecta la hipertensión. |\n\nLas enfermedades renales, el hipertiroidismo, la diabetes, la hipertensión y la artrosis son frecuentes en los gatos mayores. Detectarlas pronto permite ajustar la dieta, los medicamentos y el entorno para que vivan mejor.\n\nLas enfermedades de los riñones son muy comunes en esta etapa: lee [Enfermedad renal crónica](/categoria/salud/enfermedades/enfermedad-renal).",
              },
              {
                heading: "Señales para consultar",
                body: "| **Señal** | **Qué hacer** |\n| Pierde peso, come más o menos | Consulta pronto. |\n| Bebe más agua u orina más de lo habitual | Consulta pronto. Puede ser diabetes o un problema renal. |\n| Vómitos, diarrea o estreñimiento que se repiten | Consulta pronto. |\n| Le cuesta saltar, subir escaleras o usar la bandeja | Consulta. Puede ser artrosis u otro dolor. |\n| Cambios en el sueño, desorientación, maullidos de noche o irritabilidad | Consulta. |\n| Mal aliento, le cuesta masticar o babea mucho | Consulta. Puede ser un problema dental. |",
              },
              {
                heading: "Alimentación y bienestar",
                body: "No hay una dieta única para todos los gatos mayores. Lo que conviene depende de su peso, de sus riñones, de sus dientes, de su movilidad y de otras enfermedades. Por ejemplo, si tiene un problema renal, puede necesitar una dieta veterinaria específica.\n\nMantén el juego suave, los rascadores a su alcance y las rutinas tranquilas. El objetivo no es que viva más a cualquier precio, sino que viva con comodidad, dignidad y el menor dolor posible.",
              },
            ],
          },
        ],
      },
      
    ],
  },
    {
    slug: "historia",
    label: "historia, Origen y expansión",
    seoTitle: "Historia del gato: origen y convivencia",
    emoji: "",
    color: "#9b6bb5",
    bg: "#f3eef8",
    description: "La historia del gato: su origen, su relación con las personas a lo largo de los siglos y cómo llegó a estar presente en casi todo el mundo.",
    intro: "La relación entre los gatos y las personas tiene miles de años. Durante ese tiempo, el gato pasó de ser un cazador de roedores cerca de los graneros a un compañero querido en casi todo el mundo. Esta sección recorre esa historia con un tono cercano y con los datos que los estudios han podido confirmar.\n\nAquí encontrarás cómo llegó el gato a la antigüedad, qué papel tuvo en distintas culturas y cómo se extendió con el comercio y los viajes por mar. También verás cómo cambió la forma en que las personas lo miraban, desde la veneración hasta la desconfianza y, después, el cariño que hoy conocemos.\n\nAlgunos relatos mezclan historia y leyenda, y conviene distinguirlos. La historia del gato es, en el fondo, la historia de una convivencia que todavía sigue escribiéndose.\n\nLos hallazgos arqueológicos y los textos antiguos permiten seguir buena parte de esa historia, aunque siempre quedan huecos. Por eso conviene leer con cuidado las afirmaciones muy rotundas sobre su origen.",
    subcategories: [
      {
  slug: "historia-felina",
  label: "El Corazón del Origen",
  topics: [
    {
      slug: "origen-encuentro-nilo",
      title: "Junto al Nilo: el origen del gato",
      intro: "La historia del gato doméstico comenzó hace unos 9.000 años en el valle del Nilo. Aunque existen muchas especies de felinos, todos nuestros gatos actuales (incluso los exóticos) provienen de una única subespecie: el gato silvestre norteafricano o Felis lybica. El 'flechazo' con los humanos no fue planeado, sino una asociación de conveniencia:",
      sections: [
        {
          heading: "El problema, la solución y el pacto",
          image: "/images/nilo-gatitos.webp",
          body: "El problema: Los pueblos del Nilo dependían de la agricultura y guardaban el grano en grandes silos. Estos almacenes atraían plagas de ratas y ratones. La solución: Los gatos se acercaron a las aldeas atraídos por la abundancia de roedores. El pacto: Los humanos aceptaron encantados este servicio de 'control de plagas' y así comenzó una relación simbiótica de beneficio mutuo.",
        },
        {
          heading: "De Cazadores a Dioses",
          body: "Con el tiempo, el gato pasó de ser un simple guardián del granero a un miembro sagrado de la familia. Los pueblos del Nilo llegaron a deificarlos, relacionándolos con la diosa Bastet (que representaba la dulzura y la protección) y con el dios sol, Ra. Era tal su importancia que se han hallado millones de momias de gatos y tumbas de lujo, como la de Osiris Tamat, el gato favorito de un príncipe de la antigüedad.",
        },
        {
          heading: "La Conquista del Mundo: Roma y los Vikingos",
          body: "Aunque el documento se centra en el origen nilótico, la historia continuó cuando el gato salió del valle del Nilo para conquistar nuevos continentes: El Gato en Roma: Los romanos, al ver la eficacia de los gatos del Nilo, los adoptaron rápidamente. Para ellos, el gato era un símbolo de libertad e independencia. Lo llevaron consigo por todo el Imperio Romano (Europa, el norte de África y Gran Bretaña), utilizándolos principalmente para proteger sus campamentos militares y hogares de los roedores. Los Gatos Viajeros de los Vikingos: Durante la Edad Media, los vikingos jugaron un papel crucial en la expansión del gato hacia el norte. Eran excelentes navegantes y siempre llevaban gatos en sus barcos (especialmente el 'Gato del Bosque de Noruega') para proteger las provisiones de comida durante las largas travesías. Gracias a los vikingos, los gatos llegaron a lugares tan remotos como Escandinavia y, eventualmente, a las Américas.\n\nPara ver cómo llegó a otros continentes, lee [Expansión por el Mundo](/categoria/historia/historia-felina/corazon-origen-egipto).",
        },
        {
          heading: "El Gato Moderno",
          body: "Tras sobrevivir a épocas oscuras en el Medievo europeo —donde fueron injustamente perseguidos—, el gato recuperó su estatus gracias a su papel vital deteniendo plagas que transmitían enfermedades como la Peste Negra. Hoy en día, el gato moderno mantiene ese instinto de cazador independiente y autosuficiencia que lo hace único. Aunque ahora existen cientos de razas con diferentes colores y pelajes, en su ADN sigue latiendo el corazón de aquel pequeño felino del desierto que decidió, hace milenios, que vivir con nosotros era una buena idea.",
        }
      ],
 
    

    },


    {
      slug: "corazon-origen-egipto",
      title: "Expansión por el Mundo",
      intro: "El gato doméstico no apareció por casualidad en el Nilo. La clave fue la agricultura sedentaria. El valle del Nilo era el 'granero' de la región, y los silos de cereales eran imanes para los roedores.",
      sections: [
        {
          heading: "La Transformación Religiosa",
          image: "/images/mundo-gatitos.webp",
          body: "El gato pasó de ser un aliado útil a un ser divino. La diosa Bastet se representaba con cabeza de gata y simbolizaba el hogar, la fertilidad y la protección. Matar a un gato en la antigüedad del Nilo era un crimen castigado con la muerte.",
        },
        {
          heading: "Lujo y Respeto",
          body: "El documento destaca el caso del gato Osiris Tamat, mascota del príncipe Tutmosis. Fue enterrado con honores en un sarcófago de piedra caliza, envuelto en lino fino y con joyas, demostrando que para la realeza de la antigüedad, los gatos eran verdaderos compañeros de vida y del 'más allá'.\n\nPara volver a los orígenes de esta relación, lee [Junto al Nilo: el origen del gato](/categoria/historia/historia-felina/origen-encuentro-nilo).",
        },
        {
          heading: "Prohibición de Exportación",
          body: "Los pueblos del Nilo valoraban tanto a sus gatos que prohibieron estrictamente sacarlos del país. Sin embargo, esto no impidió que el 'secreto' de estos felinos se extendiera.",
        },
        {
          heading: "La Gran Expansión: ¿Cómo llegaron a otros continentes?",
          body: "El camino del gato hacia el resto del mundo se dio principalmente a través de las rutas comerciales marítimas:\n\n1. Los Fenicios: Los primeros 'contrabandistas'. Fueron los grandes navegantes del Mediterráneo. Se dice que sacaron gatos del valle del Nilo de contrabando para venderlos en sus rutas comerciales. Gracias a ellos, el gato llegó a las islas griegas, a la península itálica y al sur de Europa mucho antes de lo previsto.\n\n2. Roma: Los gatos en las legiones. Cuando los romanos conquistaron esa región, quedaron fascinados por el gato (lo preferían al hurón, que era el animal que usaban antes para los ratones). Al expandir su Imperio, los legionarios llevaban gatos en sus caravanas y barcos para proteger los suministros. Así, el gato se introdujo en Europa Central y Gran Bretaña.\n\n3. Asia y la Ruta de la Seda. A través de las rutas terrestres comerciales, los gatos llegaron a Asia Central. En las culturas de Asia Oriental, fueron recibidos con honores similares a los del Nilo. Por ejemplo, en algunos templos de Asia Oriental, los monjes budistas los usaban para proteger los valiosos manuscritos de papel de los ratones en los templos.\n\n4. La Conquista de América. Los gatos no llegaron a América hasta la época de los exploradores europeos (siglos XV y XVI). En barcos como los de Cristóbal Colón o más tarde el Mayflower, los gatos eran tripulantes esenciales. Su misión era evitar que las ratas se comieran las raciones de comida de los marineros y que propagaran enfermedades en el espacio confinado del barco.",
        },
        {
          heading: "Resumen de la Evolución",
          body: "África: Origen biológico (Felis lybica). Europa: Introducidos por fenicios y romanos; luego expandidos por vikingos hacia el norte. Asia: Llegaron a través de la Ruta de la Seda y el comercio marítimo hacia el sur de Asia y el Lejano Oriente. América y Oceanía: Llegaron siglos después en los barcos de los colonizadores europeos.",
        },
        {
          heading: "Conclusión",
          body: "Hoy, ese pequeño gato que vigilaba el trigo en el Nilo está presente en todos los continentes (excepto la Antártida), demostrando ser uno de los viajeros más exitosos de la historia de la humanidad.",
        }
      ],
    },

    
    
  ],
  
},


    ],
  },
  {
    slug: "impacto-conciencia",
    label: "Impacto y Conciencia",
    seoTitle: "Impacto felino: conciencia y responsabilidad",
    emoji: "",
    color: "#8e44ad",
    bg: "#f4ecf7",
    description: "El impacto de los gatos en el entorno: su papel en la fauna y el ecosistema, y la responsabilidad de sus cuidadores para convivir de forma consciente.",
    intro: "Los gatos forman parte de los ecosistemas y también de la vida de las personas que los cuidan. Esta sección trata de ambas cosas: qué efecto tienen los gatos en la fauna y en el entorno, y qué responsabilidad tienen quienes conviven con ellos.\n\nVerás cómo la caza de los gatos afecta a aves y pequeños mamíferos, sobre todo cuando salen sin control, y qué medidas ayudan a reducir ese impacto sin renunciar a su bienestar, como el enriquecimiento en interiores o la supervisión en exteriores. También se habla de la sobrepoblación y de cómo la esterilización y la adopción responsable pueden disminuirla.\n\nConciencia significa elegir con información. Cuidar al gato es también cuidar lo que lo rodea, y cada decisión, desde la identificación hasta el control de la reproducción, cuenta.\n\nSer responsable también significa mirar con honestidad el lugar donde vive el gato: qué ve, por dónde sale y qué riesgos existen. Pequeñas decisiones, como el horario de salida o un cercado, cambian mucho el resultado.",
    subcategories: [
      {
        slug: "vida-secreta",
        label: "La Vida Secreta del Gato",
        topics: [
          {
            slug: "vida-secreta-gatos",
            title: "La Vida Secreta de Nuestros Gatos",
            intro: "¿Sabías que tu gato es un superhéroe... y un poco villano? Descubre la verdad sobre sus superpoderes, su vida nocturna y su impacto en el planeta.",
            sections: [
              {
                heading: "Los superpoderes del gato (sí, en serio)",
                image: "/images/secreto-gatitos.webp",
                body: "Visión nocturna nivel PRO: Sus ojos ven 7 veces mejor que los humanos en la oscuridad gracias al tapetum lucidum. ¡Es como tener faros integrados! Pero con mucha luz, ven menos detalles. Su pupila vertical se cierra como una rendija para regular.\n\n Oídos de radar: Escuchan frecuencias ultrasónicas que nosotros ni imaginamos. Sus orejas se mueven independientemente como antenas parabólicas. En oscuridad total, pueden localizar una presa solo por el sonido de sus pasos.\n\n Bigotes sensores = GPS táctil: No son solo pelos bonitos, son sensores que detectan corrientes de aire, obstáculos y movimientos. También tienen en mejillas, sobre los ojos y en las patas delanteras. NUNCA los cortes.\n\n Equilibrio de ninja: Su reflejo de enderezamiento les permite caer de pie (casi siempre). Extienden los pliegues de su piel como un paracaídas natural. Mito: 'Los gatos siempre caen bien'. Realidad: Pueden lastimarse en caídas altas. ¡Protégelos con mallas!\n\n Cuerpo de atleta olímpico: Músculos que les permiten correr a 48 km/h y cambiar de dirección en pleno salto. Garras retráctiles para trepar, sujetar presas y... afilar en tu sofá favorito"
              },
              {
                heading: "El lado oscuro (sí, hay uno)",
                body: "Tu gato es una especie invasora: Aunque lo veas como una bolita de amor, globalmente los gatos domésticos están en la lista de las 100 especies invasoras más dañinas del planeta.\n\n DATOS QUE IMPACTAN:\n• 1 de cada 3 gatos bien alimentados caza 2-3 animales por semana\n• Un gato cazador mata entre 100 y 150 animales al año\n• En algunas zonas con muchos gatos, se estima que los gatos domésticos cazan millones de animales silvestres al año\n• En islas, han contribuido a extinguir al menos 30 especies de aves\n• En algunas islas, ayudaron a extinguir 28 especies de marsupiales \n\n¿Qué cazan realmente? Un estudio realizado en una ciudad reveló que los gatos urbanos matan 43 especies de vertebrados:\n•  Pájaros (los más afectados)\n•  Roedores\n•  Lagartijas y serpientes\n•  Murciélagos\n•  Conejos silvestres\n\n Reflexión juvenil: Amar a tu gato no significa ignorar su impacto. Podemos quererlo Y proteger la biodiversidad."
              },
              {
                heading: "¿Hasta dónde llega tu gato cuando sale?",
                body: "El experimento del GPS: Científicos pusieron collares con GPS a gatos domésticos y descubrieron:\n\nLo normal:\n• Se quedan a 1-2 manzanas de casa la mayor parte del tiempo\n\n Pero... ¡sorpresa!\n• 1-2 veces por semana, algunos recorren HASTA 20 KM en una noche\n• Cruzan ciudades, llegan al campo, entran a bosques... y regresan al amanecer\n\n Traducción: Tu 'gato de interior' podría estar de aventura nocturna sin que lo sepas.\n\nRiesgos de dejarlo libre:\n| Para tu gato | Para la fauna | Para ti |\n\n|  Atropellos |  Disminución de aves hasta 40% en algunas zonas |  Enfermedades zoonóticas |\n|  Envenenamientos |  Extinción de especies endémicas |  Parásitos traídos de la calle |\n|  Estrés y desorientación |  Alteración de ecosistemas |  Excrementos en espacios públicos |\n\n Dato clave: Se han encontrado restos de pañales desechables en heces de gatos callejeros. Sí, los comen. Antes de que te lama la cara... piensa en dónde ha estado"
              },
              {
                heading: "El problema de la sobrepoblación (y cómo ayudar)",
                body: "Matemáticas que asustan: Una pareja de gatos + su descendencia puede generar:\n• 🔹 400,000 gatos en solo 7 años\n• Hasta 3 camadas/año por gata\n• 4-6 gatitos por camada en promedio\n\n Haz la cuenta: 1 gata → 4 gatitos → esos 4 se reproducen → y así sucesivamente... ¡Es una explosión demográfica felina!\n\nEn números reales (ejemplo: una ciudad mediana):\n• 15% de hogares tiene gatos (promedio 3 por casa)\n• En una ciudad de 150,000 viviendas → ~67,500 gatos domésticos (sin contar callejeros)\n• Resultado: Más de 2 millones de animales silvestres cazados al año solo en esa ciudad\n\nPara entender cómo controlar las colonias sin recurrir al sacrificio, lee [Gestión Reproductiva y Control Poblacional Ético](/categoria/tenencia-responsable/gestion-reproductiva/esterilizacion-evidencia)."
              },
              {
                heading: "Ser joven y responsable: Tu poder de cambio",
                body: "Lo que SÍ puedes hacer (y marca la diferencia):\n\n Mantén a tu gato indoor (o en espacios seguros):\n• Catio: Jaulas o cerramientos tipo 'jardín para gatos' en balcones/ventanas\n• Mallas de seguridad: Evitan caídas y fugas\n• Enriquecimiento indoor: Rascadores, juguetes interactivos, repisas, escondites\n\n Esteriliza a tiempo:\n• Hembras: Desde los 4 meses (antes del primer celo)\n• Machos: Desde los 5-6 meses\n• Beneficios:  Reduce escapadas y peleas  Previene cánceres  Disminuye marcaje  Controla la sobrepoblación\n\n Cuida su salud preventiva:\n• Vacunas al día (Triple Felina + Antirrábica según zona)\n• Desparasitación interna/externa regular\n• Chequeos veterinarios anuales\n\n Alimentación consciente:\n• Dieta balanceada específica (son carnívoros estrictos)\n• Evita dar comida humana: chocolate, cebolla, uvas, etc. son tóxicos\n• Agua fresca siempre disponible"
              },
              {
                heading: "MITOS vs. REALIDAD (Quiz rápido)",
                body: "| Mito | Realidad científica |\n\n|'Si lo alimento bien, no caza' | 1 de cada 3 gatos bien alimentados caza igual. El instinto no se apaga con el pienso. |\n| 'Los gatos siempre caen de pie' | Tienen reflejo de enderezamiento, pero caídas altas pueden ser mortales. |\n| 'Esterilizarlos es cruel' |  Es más cruel permitir nacimientos que terminan en abandono, sufrimiento o eutanasia. |\n|  'Mi gato no se aleja de casa' |  Estudios con GPS muestran que pueden recorrer hasta 20 km en una noche. |\n|  'Los gatos ferales pueden adoptarse' |  Los gatos ferales (sin socialización humana) no son candidatos a adopción. Requieren manejo TNR. |"
              },
              {
                heading: "Tu checklist de acción (Para imprimir o guardar)",
                body: "Si ya tienes un gato:\n• Microchip + registro en base de datos local\n• Esterilización programada (si aún no lo está)\n• Mallas de seguridad en ventanas/balcones\n• Enriquecimiento indoor: rascador, juguetes, repisas\n• Chequeo veterinario anual\n\n Si quieres adoptar:\n• Evaluar compromiso a largo plazo (15-20 años de vida)\n• Preparar hogar antes de la llegada\n• Elegir protectora con protocolo de adopción responsable\n• Considerar gatos adultos: ¡son increíbles y a veces pasan desapercibidos!\n\n Si quieres ayudar sin adoptar:\n• Voluntariado en refugios locales\n• Difundir información verificada en redes\n• Apoyar campañas de esterilización comunitaria\n• Reportar colonias ferales a autoridades para activar TNR"
              },
              {
                heading: "Conclusión: Amar con conciencia",
                body: "Los gatos nos han acompañado por milenios: guardaron nuestros graneros, nos hicieron compañía en noches solas y nos regalan ronroneos que bajan el estrés.\n\nPero hoy, con ciudades más densas y ecosistemas más frágiles, amarlos responsablemente significa equilibrar su bienestar con el del planeta.\n\n Tu gato no es 'malo' por cazar. Es un felino, y esa es su naturaleza.\n Tú no eres 'malo' por querer proteger la biodiversidad. Es tu responsabilidad como ciudadano global.\n\n La solución no está en elegir uno u otro, sino en encontrar el punto medio: cuidar a tu gato y al mundo que compartimos.\n\nEl futuro de la convivencia humano-felino-fauna silvestre está en tus manos. ¿Listo para ser parte del cambio?"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "juego",
    label: "Juego",
    seoTitle: "Juego para gatos: juguetes y enriquecimiento",
    emoji: "",
    color: "#9b6bb5",
    bg: "#f3eef8",
    description: "Juego y enriquecimiento para gatos: juguetes, rutinas y actividades que estimulan su mente y su cuerpo, tanto en interiores como en exteriores.",
    intro: "El juego es una necesidad, no un capricho. Un gato que caza, trepa y explora en casa está más tranquilo, duerme mejor y tiene menos problemas de conducta. Esta sección reúne ideas para jugar con el gato, tanto en interiores como en exteriores, según su edad y su carácter.\n\nEncontrarás juguetes que imitan una presa, como las cañas y las plumas, puzzles de comida que estimulan su mente y consejos para organizar el juego en sesiones cortas a lo largo del día. También se explica cómo enriquecer el espacio con alturas, escondites y rascadores.\n\nUn buen juego termina antes de que el gato se canse del todo y siempre deja una sensación de éxito. Si notas que pierde interés o se frustra, cambia el juguete o el ritmo: la clave es que la actividad le resulte divertida.\n\nLos gatos mayores y los gatos con poca energía también disfrutan del juego. Solo hay que adaptar el tamaño de las sesiones, la altura de los juguetes y la intensidad del movimiento.",
    subcategories: [
      {
        slug: "importancia",
        label: "Por qué es vital",
        topics: [
          {
            slug: "juego-cachorros",
            title: "El juego en cachorros: la base de todo",
            intro: "El juego es clave para que un gatito crezca sano, física y emocionalmente. Le ayuda a practicar la caza, a controlarse, a explorar el mundo y a crear vínculos. Eso sí: el juego se hace con juguetes, nunca con las manos ni los pies.",
            sections: [
              {
                heading: "La etapa más importante para socializar",
                image: "/images/juego-gatitos.webp",
                body: "Entre las 2 y las 7 semanas, aproximadamente, es el período en el que el gatito aprende con más facilidad a sentirse seguro con personas, otros animales, sonidos, olores y manipulación. Algunas guías lo amplían hasta las 9 o 10 semanas.\n\nLo importante no es solo cuántas experiencias tenga, sino cómo las vive. Deben ser suaves, agradables y sin miedo. La AAHA recomienda que tenga contacto agradable con personas durante 30 a 60 minutos al día, con ruidos, transportes y manipulación siempre acompañados de premios y juego.\n\nNo lo satures. Si se esconde, intenta escapar, deja de jugar o no acepta premios, es que está sobrepasado. Baja la intensidad y déjalo descansar.",
              },
              {
                heading: "El error más común: manos y pies como juguete",
                body: "Mover los dedos, las manos o los pies para que el gatito los persiga parece divertido, pero le enseña que la piel humana es algo para jugar. De adulto, sus mordiscos y arañazos serán más fuertes, y corregir el hábito será mucho más difícil.\n\nLo mejor es no usar nunca el cuerpo como juguete. Elige cañas con plumas, ratones de tela, pelotas o juguetes que rueden o se muevan de forma impredecible, y mantén distancia entre el juguete y tu cuerpo.\n\nSi ataca tus manos o tus tobillos, retira el acceso de inmediato, no grites ni lo golpees, y ofrécele un juguete adecuado. Lo más eficaz es que todas las personas de la casa hagan lo mismo.",
              },
              {
                heading: "Jugar para prevenir problemas",
                body: "El juego no sirve solo para “gastar energía”. Le permite practicar la secuencia de caza: acechar, perseguir, atrapar y “capturar”. Esa secuencia le da satisfacción y reduce la frustración, sobre todo en gatos que viven solo dentro de casa.\n\nUn gatito con pocas oportunidades de jugar puede dirigir su impulso de caza hacia tus tobillos, tus manos, las cortinas o los otros gatos. Por eso conviene ofrecer varias sesiones cortas al día, cambiar de juguete de vez en cuando y, al final, dejar que atrape el juguete. Después puede recibir un premio pequeño para completar la secuencia.\n\nComo referencia, la AAHA sugiere 2 o 3 sesiones de 10 a 15 minutos al día. Los gatitos suelen necesitar tandas aún más cortas repartidas a lo largo del día. Ajusta el tiempo a su edad, su salud y su interés.",
              },
              {
                heading: "Cómo organizar el juego",
                body: "| **Qué hacer** | **Por qué ayuda** |\n| Usar juguetes que imitan presas | Plumas que vuelan, ratones que se deslizan y pelotas que ruedan despiertan su instinto. |\n| Mover el juguete de forma variable | Detenerse, esconderlo y hacerlo correr mantiene el interés. Déjalo alcanzarlo de vez en cuando. |\n| Alternar juego contigo y juego solo | Combina juguetes interactivos con rompecabezas o peluches seguros. |\n| Evitar piezas pequeñas | Juguetes pequeños, hilos, lazos o piezas sueltas pueden tragarse. |\n| Supervisar si hay varios gatitos | Así el juego no se vuelve demasiado intenso. |\n\nPara más juguetes que imitan presas, lee [Cañas y juguetes de presa](/categoria/juego/juguetes/canas-y-plumas).",
              },
              {
                heading: "Si el juego se vuelve brusco",
                body: "Interrumpe en cuanto aparezca un mordisco fuerte, un arañazo, una emboscada a los tobillos o un maullido de frustración. Retira la mano, ofrece un juguete a distancia o sal de la habitación unos minutos.\n\nNo castigues con gritos ni palmadas, y tampoco lo sujetes por la piel del cuello. Puede generar miedo, empeorar la reacción o hacer que asocie tus manos con algo negativo.\n\nSi la agresividad continúa, es muy intensa o aparece de repente, consulta con el veterinario. Así descartas dolor, una enfermedad o un problema de conducta.",
              },
            ],
          },
        ],
      },
      {
        slug: "juguetes",
        label: "Juguetes",
        topics: [
          {
            slug: "canas-y-plumas",
            title: "Cañas y juguetes de presa",
            intro: "Las cañas con plumas, los ratones de tela o los gusanos colgantes son muy útiles: permiten que tu gato haga casi toda la secuencia de caza. Busca, acecha, persigue, salta, atrapa y manipula el juguete. Son ideales para gatos de interior, siempre que muevas el juguete con irregularidad, con pausas y terminando con una captura.",
            sections: [
              {
                heading: "Por qué le gustan tanto",
                image: "/images/cañas-gatitos.webp",
                body: "Los gatos no juegan solo para “gastar energía”. Cuando juegan con un objeto que se parece a una presa, están practicando la caza. Según estudios citados por International Cat Care, los gatos juegan con más intensidad y durante más tiempo con juguetes que se parecen a presas reales.\n\nLa caza natural tiene varios pasos: buscar, localizar, acercarse, atrapar, matar, manipular y comer. La caña te permite guiar el movimiento y dar oportunidades de acechar, perseguir, saltar y atrapar, sin necesidad de una presa de verdad.",
              },
              {
                heading: "Cómo moverla bien",
                body: "El error más común es mover el juguete sin parar y demasiado rápido. Las presas reales no se mueven en círculos constantes: se paran, se esconden, cambian de dirección, desaparecen y vuelven a aparecer.\n\n| **Qué hacer** | **Por qué ayuda** |\n| Empieza lento y cerca del suelo | Así lo ve como una presa que intenta escapar. |\n| Haz pausas | Le da tiempo para agacharse y planear el ataque. |\n| Aleja el juguete de su cara | Lo mueves lejos, no hacia él, para que no le dé miedo. |\n| Escóndelo detrás de un mueble o un cojín y déjalo reaparecer | Imita a una presa que aparece y desaparece. |\n| Déjalo atrapar el juguete de vez en cuando | Le da satisfacción durante la sesión, no solo al final. |\n\nCada gato tiene sus preferencias. Algunos prefieren presas que vuelan, otros ratones que se deslizan por el suelo, y otros presas que salen de detrás de un mueble. Cambiar de estilo mantiene su interés.",
              },
              {
                heading: "Cómo terminar la sesión",
                body: "Termina siempre con una captura real: que pueda pisar, morder y patear el juguete. Si nunca lo atrapa, puede quedar frustrado o demasiado excitado.\n\nDespués de esa captura final, ofrécele una pequeña porción de comida o un premio. Así completa la secuencia de cazar, comer, asearse y descansar, y se calma.\n\nNo hace falta que la sesión sea larga. Suelen funcionar mejor varias tandas cortas de 5 a 15 minutos. Ajusta el tiempo a su edad, su salud y sus ganas de jugar.",
              },
              {
                heading: "Seguridad",
                body: "| **Riesgo** | **Qué hacer** |\n| Hilos, plumas o piezas pequeñas que se tragan | Guarda la caña después de jugar. Pueden causar una obstrucción intestinal. |\n| Cuerdas, lazos o partes que se desprenden | No los dejes a su alcance sin supervisión. |\n| Mover el juguete hacia la cara o el cuerpo | Evítalo: puede asustarlo o hacerle daño. |\n| Se agita, jadea, maúlla con frustración o no logra calmarse | Termina la sesión con calma. |",
              },
              {
                heading: "Sobre el láser",
                body: "El láser puede ser un complemento, pero no le permite atrapar la “presa”. Para reducir la frustración, dirige el punto hacia un juguete físico o un premio, y termina siempre con una captura real.\n\nHay indicios de que el uso frecuente del láser se asocia con conductas repetitivas, como perseguir luces o sombras. Sin embargo, no está demostrado que lo cause. Por eso, la caña con una presa física sigue siendo la opción más completa y segura para jugar.\n\nPara más ideas de juego con comida, lee [Puzzles de comida e inteligencia](/categoria/juego/juguetes/puzzles-de-comida).",
              },
            ],
          },
          {
            slug: "puzzles-de-comida",
            title: "Puzzles de comida e inteligencia",
            intro: "Los puzzles de comida son una de las formas más sencillas de dar a tu gato algo que hacer. Le permiten buscar, explorar y resolver pequeños retos para conseguir su comida, como lo haría en la naturaleza.",
            sections: [
              {
                heading: "Por qué le hacen bien",
                image: "/images/puzzles-gatitos.webp",
                body: "En la naturaleza, un gato pasa buena parte del día buscando, persiguiendo y atrapando su comida. Cuando todo su alimento está en un bol, a veces termina en pocos minutos y se queda sin nada que hacer.\n\nLos puzzles devuelven esa parte natural de la vida del gato. Estos son sus beneficios más comunes:\n\n| **Beneficio** | **Qué significa en la práctica** |\n| Estimulación mental | Usa el olfato, la coordinación y la lógica para resolver el reto. |\n| Más movimiento | Empuja, persigue o manipula el objeto para obtener la comida. |\n| Comer más despacio | Ayuda a los gatos que devoran la comida muy rápido. Si vomita con frecuencia, consulta con el veterinario. |\n| Apoyo para el peso | Al requerir esfuerzo, pueden sumarse a un plan de control de peso. |\n| Menos aburrimiento | Le da una actividad organizada durante el día. |\n| Mejor bienestar | Algunos estudios reportan menos ansiedad y conductas problemáticas. Los resultados varían de un gato a otro. |\n\nLos puzzles son un complemento, no un reemplazo de una buena alimentación ni de la atención veterinaria.",
              },
              {
                heading: "Cómo empezar",
                body: "Lo más importante es que la primera experiencia sea fácil y agradable. Si el reto es demasiado difícil, tu gato puede frustrarse y dejar de usarlo.\n\n| **Paso** | **Qué hacer** |\n| 1. Empieza fácil | Pon croquetas visibles en una bandeja con compartimentos o en una caja de huevos abierta. |\n| 2. Usa su ración diaria | No añadas comida extra. Si tiene sobrepeso, consulta antes con tu veterinario. |\n| 3. Muéstrale cómo funciona | Mueve una croqueta o inclina un poco el objeto para que entienda que hay comida dentro. |\n| 4. Celebra el intento | Si se acerca, olfatea o empuja el puzzle, deja que consiga una recompensa fácil. |\n| 5. Sube la dificultad poco a poco | Tapa algunos compartimentos, añade papel arrugado o usa menos aberturas. |\n| 6. Cambia de juego | Alterna dos o tres opciones para que no pierda el interés. |\n\nCada gato tiene su ritmo. Algunos aprenden en una sesión; otros necesitan días o semanas.\n\nSi el juego le resulta difícil, prueba también [Cañas y juguetes de presa](/categoria/juego/juguetes/canas-y-plumas).",
              },
              {
                heading: "Puzzles caseros",
                body: "No necesitas comprar nada para empezar. Usa materiales limpios, sin bordes cortantes, pinturas tóxicas ni piezas que pueda tragar.\n\n| **Puzzle** | **Cómo hacerlo** | **Nivel** |\n| Caja de huevos de cartón | Pon croquetas en cada compartimento. Al principio déjalas a la vista; luego cúbrelas con papel arrugado. | Fácil |\n| Bandeja de muffins o de cubos de hielo | Reparte croquetas en los huecos y cubre algunas con pelotas ligeras o papel. | Fácil |\n| Caja de cartón con agujeros | Pon croquetas dentro y haz agujeros lo bastante grandes para que pueda sacarlas con la pata. | Medio |\n| Tubo de cartón | Cierra los extremos a medias, pon croquetas dentro y deja que lo empuje para sacarlas. | Medio |\n| Vasos invertidos | Esconde premios pequeños bajo vasos ligeros y deja uno o dos a la vista al principio. | Fácil |\n| Búsqueda por la casa | Reparte pequeñas porciones de su ración en lugares seguros para que las encuentre. | Medio |\n\nSi usas una botella dispensadora, que sea de material seguro, sin tapa ni piezas que se desprendan, y con orificios amplios. Revísala siempre antes de dársela.",
              },
              {
                heading: "Seguridad",
                body: "• Supervisa los primeros usos, sobre todo con materiales caseros.\n• Evita plásticos frágiles, clips, cuerdas, gomas, cintas, tapas pequeñas y bordes afilados.\n• No uses la comida como único recurso si tu gato está estresado, enfermo o ha dejado de comer.\n• Si tu gato necesita una dieta específica o tiene problemas dentales, renales, digestivos o de peso, consulta con tu veterinario antes de cambiar su forma de comer.\n• Lava los puzzles con frecuencia, sobre todo si tienen comida húmeda o premios.\n• Detén el juego si aparece frustración, agresividad, jadeo o respiración con la boca abierta, o si pierde el interés una y otra vez.",
              },
              {
                heading: "Cuándo consultar al veterinario",
                body: "Consulta si tu gato vomita con frecuencia, pierde peso, deja de comer, cambia de conducta de forma brusca, se queja al moverse o no logra usar ningún tipo de puzzle. Los puzzles son una buena herramienta, pero no reemplazan el diagnóstico ni un plan de alimentación adaptado a tu gato.",
              },
            ],
          },
        ],
      },
    ],
  },
    {
    slug: "razas",
    label: "Razas",
    seoTitle: "Razas de gatos: guía para elegir",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Razas de gatos: características, personalidad y cuidados de las razas más conocidas, para ayudarte a elegir el gato que mejor se adapta a tu vida.",
    intro: "Cada raza de gato tiene rasgos propios de tamaño, pelo, carácter y necesidades de cuidado. Elegir la adecuada depende tanto de lo que buscas en un compañero como de lo que puedes ofrecerle en tu día a día. Esta sección te ayuda a comparar razas con información clara.\n\nVerás las características de las razas más conocidas, qué personalidad suelen tener y qué cuidados requieren, como el cepillado o las revisiones de salud. También encontrarás qué problemas hereditarios conviene conocer antes de adoptar.\n\nRecuerda que el carácter de cada gato depende de su historia y de su entorno tanto como de su raza. Un gato mestizo puede ser un compañero excelente, y una buena adopción empieza por conocer al animal concreto.\n\nAntes de decidir por una raza, piensa en tu espacio, en tu tiempo y en tu presupuesto. Algunos gatos necesitan más cepillado o más estimulación, y esas necesidades importan tanto como su aspecto.",
    subcategories: [
    {
  slug: "razas-felinas",
  label: "Razas de Gatos",
  topics: [
    {
      slug: "guia-completa-razas",
      title: "Guía Completa de Razas de Gatos",
      intro: "El mundo felino es vasto y fascinante. Aunque todos los gatos comparten instintos básicos, cada raza tiene una personalidad, necesidades de cuidado y características físicas únicas. Esta guía integra el registro histórico con las clasificaciones modernas de asociaciones como TICA, CFA y FIFe, organizadas para ayudarte a entender qué tipo de gato encaja mejor en tu hogar. Nota: Más allá de la raza, la personalidad individual y la socialización temprana juegan un papel fundamental.",
      sections: [
        {
          heading: "Los Clásicos Históricos",
          image: "/images/razas-gatitos.webp",
          body: "Razas antiguas con personalidades definidas: Abisinio (origen africano): Activo, curioso, 'perro-gato', necesita mucho juego mental. Siamés (Tailandia): Extremadamente vocal, inteligente, demanda atención constante. Persa (Irán): Tranquilo, dulce, silencioso; requiere cepillado y limpieza facial diaria. Maine Coon: El 'gigante amable', sociable, ideal para familias con niños; requiere espacio. Bengala: Energía alta, atlético, parece un leopardo en miniatura; necesita estimulación diaria intensa.",
        },
        {
          heading: "Gigantes Gentiles y Adaptables al Frío",
          body: "Gatos robustos con pelajes densos. Maine Coon: Uno de los más grandes, destaca por sus 'lynx tips' y maullidos suaves. Bosque de Noruega (Skogkatt): Escalador nato con pelaje impermeable, independiente pero cariñoso. Siberiano: Famoso por ser hipoalergénico (produce menos Fel d 1), ágil y afectuoso. Ragdoll: Grande y musculoso, de temperamento dócil; se 'desploma' como un muñeco de trapo al cargarlo.",
        },
        {
          heading: "Elegancia de Pelo Corto y Cuerpo Atlético",
          body: "Poco mantenimiento de pelaje con mucha interacción. British Shorthair: Cara redonda, compacto y tranquilo; no le gusta que lo carguen mucho. Ruso Azul: Pelaje plateado y ojos verdes, tímido con extraños pero leal. Burmés: Musculoso y pesado, muy orientado a las personas. Bombay: Parece una pantera negra en miniatura, le encanta el calor y los regazos. Chartreux: Raza francesa antigua, silencioso y cazador experto con pelaje repelente al agua.",
        },
        {
          heading: "Mutaciones Únicas: Orejas, Colas y Texturas",
          body: "Características genéticas exóticas. Scottish Fold: Orejas dobladas hacia adelante, posición de 'Buda'; requiere revisión articular. Munchkin: Patas cortas, extrovertido y curioso. Sphynx: Sin pelo, sociable y busca calor; requiere baños semanales. Devon Rex & Cornish Rex: Pelaje rizado u ondulado, traviesos y apegados. American Curl: Orejas hacia atrás. Manx & Japanese Bobtail: El primero sin cola y robusto; el segundo con cola de pompón, símbolo de buena suerte.",
        },
        {
          heading: "Exóticos y Pocas Unidades",
          body: "Razas menos comunes. Ocicat: Parece un ocelote salvaje, entrenable y sociable. Toyger: Imitación de un tigre, inteligente. Lykoi: El 'gato lobo', apariencia de hombre lobo, curioso y juguetón. Singapura: Una de las razas más pequeñas, travieso y amante de las alturas. Korat: Tailandés gris plateado con corazón en la frente, sensible al ruido y amuleto de buena suerte.",
        },
        {
          heading: "Consejos para Elegir tu Raza",
          body: "Nivel de Actividad: ¿Compañero de sofá (Persa) o atleta (Bengala)? Tiempo de Aseo: ¿Cepillado diario (Maine Coon) o bajo mantenimiento (Ruso Azul)? Vocalización: Si prefieres el silencio, evita Siameses y opta por Ragdolls. Niños y mascotas: Maine Coon y Birmanos son más tolerantes. Alergias: Ninguno es 100% hipoalergénico, pero el Siberiano y el Ruso Azul suelen ser mejor tolerados.\n\nAntes de adoptar, revisa [Adquisición Responsable: Guía Legal y Ética Universal](/categoria/adquisicion-responsable/guia-adquisicion-responsable/adquisicion-responsable-global).",
        }
      ],
    },
  ],
}

      ]
    },
  {
    slug: "salud",
    label: "Salud",
    seoTitle: "Salud felina: guía completa",
    emoji: "",
    color: "#7a9e7e",
    bg: "#eef4ef",
    description: "Salud felina: prevención, enfermedades frecuentes, vacunación, desparasitación y cuidados médicos para mantener a tu gato sano durante toda su vida.",
    intro: "La salud de un gato se cuida sobre todo con prevención: revisiones periódicas, vacunas y desparasitación al día, una dieta adecuada y atención a los cambios pequeños. Muchas enfermedades avanzan sin que el gato muestre síntomas claros, así que conocer las señales de alerta es parte del cuidado.\n\nEn esta sección encontrarás información sobre las enfermedades más frecuentes, desde los problemas dentales y de los riñones hasta la diabetes y las alergias, con los síntomas que conviene observar y qué esperar del tratamiento. También se explica el calendario preventivo y por qué no conviene automedicarse.\n\nEsta información ayuda a entender lo que sucede, pero no sustituye la consulta veterinaria. Ante cualquier cambio en el apetito, el peso, la forma de beber, de orinar o de moverse, consulta cuanto antes con tu veterinario.\n\nLlevar un registro de las visitas, las vacunas y los tratamientos te ayuda a seguir la evolución de tu gato y a dar al veterinario una historia clara. Si cambias de clínica, esa documentación facilita la continuidad.",
    subcategories: [
      {
        slug: "prevencion",
        label: "Prevención",
        topics: [
          {
            slug: "vacunacion",
            title: "Vacunación felina",
            intro: "Las vacunas son una de las formas más efectivas de proteger a tu gato de enfermedades graves y contagiosas. El calendario lo define tu veterinario según la edad, el estilo de vida de tu gato y las normas de tu país.",
            sections: [
              {
                heading: "Vacunas esenciales",
                image: "/images/vacuna-gatitos.webp",
                body: "La vacuna triple felina, también llamada FVRCP, es la base de la prevención. Protege contra tres enfermedades:\n\n| **Enfermedad** | **Qué provoca** |\n| Rinotraqueítis viral felina | Infección de las vías respiratorias, causada por un herpesvirus. |\n| Calicivirus felino | Problemas respiratorios y úlceras en la boca. |\n| Panleucopenia felina | Enfermedad muy contagiosa y grave, sobre todo en gatitos. |\n\nEn gatitos, la vacunación suele empezar entre las 6 y las 8 semanas, con una dosis cada 3 o 4 semanas hasta cumplir 16 semanas o más. No hay un calendario único: tu veterinario lo ajustará según la edad de inicio.\n\nDespués de la serie inicial, se hace un refuerzo al año. Luego, la revacunación suele ser cada 1 a 3 años, según la vacuna y el riesgo de contagio de tu gato.",
              },
              {
                heading: "La vacuna antirrábica y la normativa",
                body: "En muchos lugares, la vacuna antirrábica es obligatoria para perros y gatos. Debe estar vigente, y tu veterinario puede emitir un certificado que lo acredite.\n\nEstas son las pautas generales:\n\n• La primera dosis se aplica a partir de los dos meses de edad.\n• Luego, un refuerzo al año.\n• Después, la frecuencia depende del producto y de la indicación veterinaria.\n\nAunque tu gato viva solo en casa, en muchos lugares la vacuna sigue siendo obligatoria. La rabia puede pasar a las personas, así que vacunarlo también protege a tu familia.",
              },
              {
                heading: "Leucemia felina (FeLV)",
                body: "La vacuna contra la leucemia felina es especialmente recomendable para gatitos y para gatos que tienen contacto con otros gatos: los que salen al exterior, viven con otros felinos o van a pensiones, guarderías o exposiciones.\n\nLa pauta habitual son dos dosis, separadas por 3 o 4 semanas, desde las 8 semanas de edad. Luego hay refuerzos según el producto y el riesgo de tu gato.\n\nSi tu gato es adulto, tu veterinario puede pedir una prueba antes de vacunarlo, para saber si ya está infectado.",
              },
              {
                heading: "¿Y si se salta una dosis?",
                body: "No des por hecho que tu gato sigue protegido solo porque ya recibió vacunas antes. Lo que conviene hacer depende de varias cosas:\n\n| **Situación** | **Qué suele hacerse** |\n| Retraso leve | Se aplica una dosis de refuerzo y se reprograma el calendario. |\n| Historial desconocido o vacunas muy antiguas | Puede ser necesario empezar la serie de nuevo, sobre todo en gatitos o gatos con mucho riesgo. |\n| Gato adulto con vacunas documentadas | A veces basta un refuerzo. Lo decide el veterinario. |\n| Gato enfermo o con defensas bajas | La vacuna suele posponerse hasta que su salud esté estable. |\n\nTampoco hay una regla fija de “si pasaron más de 3 años, empieza de nuevo”. Eso depende de la vacuna y de la evaluación de tu veterinario.",
              },
              {
                heading: "Efectos secundarios",
                body: "La mayoría de los gatos tolera bien las vacunas. Lo más común es que notes algo leve durante uno o dos días:\n\n| **Lo que puedes notar** | **Qué hacer** |\n| Sensibilidad o un pequeño bulto donde se aplicó | Normalmente pasa solo. Puedes observarlo. |\n| Cansancio o menos apetito durante 24 a 48 horas | Es esperable. Asegúrate de que tome agua. |\n| Hinchazón de la cara, dificultad para respirar o vómitos | Acude al veterinario de inmediato. |\n| Colapso, decaimiento intenso o un bulto que no desaparece | Consulta lo antes posible. |",
              },
              {
                heading: "Consejos prácticos",
                body: "• Guarda el carné o el historial de vacunas al día.\n• Sigue el calendario que indique tu veterinario, y no interrumpas la serie sin consultarlo.\n• Mantén la vacuna antirrábica vigente si tu zona la exige.\n• Haz un chequeo anual para revisar las vacunas, el peso, los dientes, la desparasitación y su salud general.\n\nPara ver el cuidado preventivo completo, lee [Salud Preventiva y Atención Veterinaria](/categoria/tenencia-responsable/salud-preventiva/salud-preventiva-global).",
              },
            ],
          },
          {
            slug: "desparasitacion",
            title: "Desparasitación interna y externa",
            intro: "Los parásitos son de los problemas de salud más comunes en los gatos, y también de los más fáciles de prevenir. Un plan adaptado a tu gato, con controles veterinarios y análisis de heces, protege a tu gato y a las personas de tu hogar, sobre todo a niños, embarazadas y personas con defensas bajas.",
            sections: [
              {
                heading: "Parásitos internos",
                image: "/images/desparasitacion-gatitos.webp",
                body: "Estos son los parásitos intestinales más frecuentes y cómo suelen llegar al gato:\n\n| **Parásito** | **Cómo se contagia** | **Señales posibles** |\n| Lombrices redondas (áscaris) | De la madre a los gatitos durante la lactancia, o por huevos del ambiente y presas infectadas. | Diarrea, pelo opaco, abdomen hinchado o, a veces, lombrices en el vómito. |\n| Tenias | Al comer pulgas infectadas o presas como ratones. | Segmentos parecidos a granos de arroz cerca de la cola o en las heces. |\n| Anquilostomas | Por la piel o al ingerir larvas del ambiente. | Anemia, sobre todo en gatitos. |\n| Giardia y coccidios | Por agua o heces contaminadas. | Diarrea, sobre todo en gatitos o gatos con defensas bajas. |\n| Toxoplasma | Al comer carne cruda o presas, o por contacto con arena contaminada. | Generalmente no da síntomas. Se previene evitando la carne cruda y limpiando la arena cada día. |\n\nEl toxoplasma no es una lombriz y no se controla con las desparasitaciones habituales. Lávate las manos después de limpiar la arena, sobre todo si estás embarazada.",
              },
              {
                heading: "Cuándo desparasitar",
                body: "La frecuencia depende de la edad y del estilo de vida de tu gato:\n\n| **Caso** | **Desparasitación interna** | **Análisis de heces** |\n| Gatitos | Desde las 2 semanas, cada 2 semanas hasta las 8 semanas. Luego, cada mes hasta los 6 meses. | Varias veces durante el primer año. |\n| Adulto de bajo riesgo | Una o dos veces al año, según el veterinario. | Una o dos veces al año. |\n| Adulto con acceso al exterior o que convive con otros animales | Al menos cada tres meses, o según su riesgo. | Según el riesgo y lo que indique el veterinario. |\n\nSi no sabes con certeza el riesgo de tu gato, pregunta a tu veterinario. Como referencia general, se recomienda un tratamiento de amplio espectro al menos cuatro veces al año.\n\nImportante: nunca uses productos para perros ni “medio comprimido” sin indicación veterinaria. La dosis se calcula según el peso actual de tu gato.",
              },
              {
                heading: "Parásitos externos",
                body: "Los más comunes son estos:\n\n• Pulgas: causan picazón y alergias en la piel. En gatitos pueden provocar anemia, y transmiten tenias.\n• Garrapatas: transmiten enfermedades. Suelen pegarse en la cabeza, el cuello, las orejas y entre los dedos.\n• Ácaros del oído: causan picazón intensa, sacudidas de cabeza y una secreción oscura parecida al café molido. Se tratan con productos veterinarios específicos.\n• Ácaros de la piel: son menos frecuentes, pero pueden causar costras y picazón.",
              },
              {
                heading: "Opciones para prevenir parásitos externos",
                body: "| **Método** | **Ventajas** | **Precauciones** |\n| Pipetas (spot-on) | Fáciles de aplicar. Muy eficaces contra pulgas y, según el producto, garrapatas o ácaros. | Usa solo productos hechos para gatos. Algunos productos para perros contienen permetrina y pueden ser mortales para ellos. |\n| Collares antiparasitarios | Protección prolongada, a menudo durante varios meses. | Ajústalo bien, revisa la piel debajo y quítalo si aparece irritación. |\n| Sprays o champús | Útiles para una infestación puntual o como complemento. | Suelen durar menos y no siempre cubren todos los parásitos. |\n| Tratamiento del ambiente | Es clave con pulgas, porque gran parte de su ciclo ocurre en alfombras, camas y grietas. | Aspira con frecuencia, lava mantas y camas, y usa productos seguros para gatos. |\n\nLa frecuencia la define tu veterinario según el clima, las pulgas o garrapatas de la zona, si hay otros animales en casa y si tu gato sale al exterior. En épocas o zonas de alto riesgo, suele recomendarse protección mensual o continua.",
              },
              {
                heading: "Gato de interior o de exterior",
                body: "Un gato que vive solo en casa tiene menos exposición, pero no está libre de riesgo: las pulgas pueden entrar en zapatos, ropa o en otras mascotas.\n\n| **Tipo de gato** | **Plan general** |\n| Solo de interior, bajo riesgo | Desparasitación interna una o dos veces al año, idealmente con análisis de heces. |\n| Con acceso al exterior, cazador o con otros animales | Desparasitación interna al menos cada tres meses, o según su riesgo. |\n| Protección externa | Durante todo el año o en las temporadas de mayor riesgo, según tu zona y el veterinario. |",
              },
              {
                heading: "Señales de que tu gato puede tener parásitos",
                body: "• Diarrea, vómitos, o heces con moco o sangre.\n• Pérdida de peso o crecimiento lento en los gatitos.\n• Abdomen hinchado.\n• Pelo opaco o aspecto descuidado.\n• Rascado intenso, costras o caída de pelo.\n• Sacudidas frecuentes de cabeza o suciedad oscura en las orejas.\n• Segmentos blancos parecidos a granos de arroz en las heces, la cama o alrededor del ano.",
              },
              {
                heading: "Consejos para un plan que funcione",
                body: "• Haz un plan a la medida de tu gato: su edad, peso, si está embarazada o amamantando, otras enfermedades y si hay niños en casa.\n• Pésalo antes de cada tratamiento para evitar dosis excesivas o insuficientes.\n• Si hay pulgas, trata a todas las mascotas de la casa. Si no, es muy probable que vuelvan.\n• Combina la desparasitación con una buena higiene de la arena, el control de pulgas y evitar que cace o coma presas.\n\nPara conocer las señales que requieren consulta, lee [Salud Preventiva y Atención Veterinaria](/categoria/tenencia-responsable/salud-preventiva/salud-preventiva-global).",
              },
            ],
          },
          {
            slug: "primeros-auxilios",
            title: "Primeros auxilios felinos",
            intro: "Saber actuar con calma puede hacer una gran diferencia en una emergencia. Estos conocimientos básicos te ayudan a estabilizar la situación y a reducir riesgos mientras llegas al veterinario. No reemplazan la consulta ni el tratamiento profesional.",
            sections: [
              {
                heading: "Tu botiquín de emergencia",
                image: "/images/primeros-auxilios-gatitos.webp",
                body: "Ten un botiquín a la mano, cerrado y en un lugar de fácil acceso. Revísalo cada cierto tiempo para que todo esté en buen estado:\n\n• Solución salina estéril, para limpiar los ojos o retirar suciedad.\n• Gasas estériles y vendas, para cubrir heridas y frenar sangrados.\n• Cinta adhesiva médica y tijeras de punta redondeada.\n• Antiséptico de uso veterinario, como clorhexidina diluida. Evita el alcohol, el agua oxigenada y los productos irritantes sobre heridas abiertas.\n• Termómetro digital para uso rectal. La temperatura normal de un gato suele estar entre 38,0 y 39,2 °C.\n• Jeringa sin aguja, solo para dar líquidos si el veterinario lo indica.\n• Una manta o toalla para sujetarlo y trasladarlo con seguridad.\n• Una transportadora rígida, lista y accesible.\n• El teléfono de tu veterinario, de urgencias y de una clínica para la noche o los fines de semana.\n• Una foto o lista de sus medicamentos, alergias y enfermedades previas.\n\nImportante: no uses medicamentos humanos “por si acaso”. Muchos son tóxicos para los gatos, incluso en dosis pequeñas.",
              },
              {
                heading: "Señales de emergencia",
                body: "Si notas alguna de estas señales, ve a urgencias veterinarias de inmediato:\n\n| **Señal** | **Qué puede estar pasando** |\n| Respira rápido, con esfuerzo, con la boca abierta o las encías azuladas o pálidas | Puede tener problemas respiratorios. En gatos, respirar por la boca es especialmente grave. |\n| Se desploma, pierde el conocimiento o está muy débil | Requiere atención inmediata. |\n| Convulsiones que duran más de cinco minutos, se repiten o no recupera la conciencia | Es una emergencia neurológica. |\n| Intenta orinar sin lograrlo, o se esfuerza una y otra vez | Puede tener una obstrucción urinaria. Sobre todo en machos, no esperes ni 12 horas. |\n| Sangrado abundante que no para en unos cinco minutos, o sangre en vómito, heces u orina | Necesita valoración urgente. |\n| Posible intoxicación: plantas, medicamentos, limpiadores, anticongelante, raticidas, chocolate, cebolla, ajo o lirios | Llama al veterinario o al centro de intoxicaciones mientras vas a la clínica. |\n| Caída fuerte, atropello, mordida, quemadura o golpe fuerte | Aunque parezca estar bien, puede tener lesiones internas. |\n| Dolor abdominal intenso, abdomen hinchado o vómitos repetidos | Requiere revisión urgente. |\n| Gata que no logra dar a luz o tiene contracciones sin nacimiento | Es una urgencia obstétrica. |",
              },
              {
                heading: "Qué hacer mientras llegas",
                body: "• Mantén la calma. Primero protégete: un gato dolorido o asustado puede morder o arañar.\n• Llama a la clínica antes de salir. Te dirán los primeros pasos y prepararán la recepción.\n• Trasládalo en la transportadora, o envuelto con cuidado en una toalla. Evita presionar heridas, el abdomen o el pecho.\n• Si sangra por fuera, presiona con una gasa limpia durante varios minutos. No retires la gasa cada momento para ver si paró. No uses torniquetes.\n• Si sospechas un envenenamiento, guarda el envase, la planta o una foto del producto. Anota la cantidad aproximada y la hora.\n• Si tiene una convulsión, aleja los objetos con los que pueda golpearse, no le metas nada en la boca y anota cuánto dura.",
              },
              {
                heading: "Lo que nunca debes hacer",
                body: "**No le des paracetamol, acetaminofén, ibuprofeno ni aspirina.** Los gatos son muy sensibles a estos medicamentos: pueden causar daño al hígado, anemia, dificultad para respirar e incluso la muerte.\n\n• No le provoques el vómito sin indicación del veterinario. Algunas sustancias hacen más daño al volver por el esófago.\n• No uses alcohol, agua oxigenada ni desinfectantes fuertes en heridas abiertas. Irritan los tejidos y retrasan la curación.\n• No le des leche, aceite, sal, carbón activado ni remedios caseros como “antídotos”.\n• No intentes sacar objetos atrapados en la garganta, los ojos o una herida profunda. Podrías empeorar la lesión.\n• No le fuerces comida ni agua si tiene dificultad para respirar, vómitos, convulsiones o está inconsciente.\n• No esperes a ver si mejora cuando hay problemas para respirar, convulsiones, obstrucción urinaria, sangrado abundante o sospecha de envenenamiento.",
              },
              {
                heading: "Cómo prevenir las emergencias",
                body: "La mayoría de las emergencias se evitan con un poco de prevención:\n\n• Guarda medicamentos, productos de limpieza, plantas tóxicas y químicos fuera de su alcance.\n• Revisa que no haya hilos, ligas, agujas u objetos pequeños a su alcance.\n• Antes de llevar una planta o un alimento a casa, confirma que no sea tóxico para los gatos.\n• Ten a mano la ficha veterinaria y el teléfono de urgencias.\n• Haz revisiones periódicas, sobre todo si tu gato es adulto o mayor.\n\nSi quieres una guía específica para gatitos, lee [Primeros Auxilios para Gatitos: Qué hacer en una emergencia](/categoria/emergencia/emergencias-felinas/guia-primeros-auxilios-gatitos).",
              },
            ],
          },
        ],
      },
      {
        slug: "enfermedades",
        label: "Enfermedades comunes",
        topics: [
          {
            slug: "enfermedad-renal",
            title: "Enfermedad renal crónica",
            intro: "La enfermedad renal crónica es muy frecuente en gatos mayores. Puede afectar a cerca de 4 de cada 10 gatos mayores de 10 años, y a casi 8 de cada 10 mayores de 15. No tiene cura, pero detectarla a tiempo y cuidarla bien puede retrasar su avance y ayudar a que tu gato viva mejor y más tiempo.",
            sections: [
              {
                heading: "Señales que conviene conocer",
                image: "/images/enfermedad-gatitos-v2.webp",
                body: "Muchos gatos no muestran nada al principio. Los signos suelen aparecer cuando el riñón ya ha perdido una parte importante de su función. Estos son los más comunes:\n\n| **Lo que puedes notar** | **Qué puede significar** |\n| Bebe más agua y orina más veces o en más cantidad | El riñón no concentra bien la orina. |\n| Pierde peso o come menos | El cuerpo se desgasta y pierde apetito. |\n| Vomita con frecuencia | Puede deberse a sustancias que el riñón no logra eliminar. |\n| Se ve decaído o con poca energía | Puede indicar deshidratación o malestar general. |\n| Pelo sin brillo o descuidado | Suele acompañar al malestar general. |\n| Mal aliento, llagas en la boca o encías pálidas | Pueden aparecer con la enfermedad. |\n| Cambios repentinos en la vista | Puede deberse a presión arterial alta. Es urgente. |\n\nOjo: la creatinina, un análisis de sangre común, suele subir solo cuando se ha perdido cerca del 75 % de la función renal. Por eso conviene revisar a tiempo.",
              },
              {
                heading: "Cómo se detecta",
                body: "Te recomendamos una revisión al año a partir de los 7 años, o antes si tu gato ya tiene signos, enfermedades previas o antecedentes en los riñones. Cada revisión suele incluir:\n\n| **Revisión** | **Para qué sirve** |\n| Análisis de sangre | Mide la creatinina y otros valores del riñón. |\n| Análisis de orina | Muestra si el riñón concentra bien la orina y si hay proteínas. |\n| Presión arterial | Detecta la hipertensión, que puede afectar a los ojos y al cerebro. |\n| SDMA | Un análisis que puede subir antes que la creatinina y ayuda a detectar problemas más temprano. |\n\nUn solo resultado alterado no basta para diagnosticarla. El veterinario confirma la enfermedad cuando los valores se mantienen alterados en el tiempo. Por ejemplo, un SDMA por encima de 14 µg/dL se repite al menos dos semanas después para confirmarlo.\n\nPara clasificar la enfermedad, muchos veterinarios usan el sistema IRIS, que tiene en cuenta el SDMA o la creatinina, la presión arterial y las proteínas en la orina. Así el tratamiento se ajusta a cada etapa.",
              },
              {
                heading: "Cómo cuidarlo",
                body: "No existe una cura, pero sí formas de cuidarlo y frenar el desgaste. El objetivo es que esté bien hidratado y bien alimentado, y que los valores como el fósforo, la presión y la anemia se mantengan controlados.\n\n| **Qué hacer** | **Cómo** |\n| Dieta renal | En las etapas 2 a 4 suele recomendarse una dieta especial, con menos fósforo y proteína de buena calidad. Limitar el fósforo es una de las medidas más importantes. |\n| Hidratación | Ofrece comida húmeda y agua fresca todo el día. Si está deshidratado, el veterinario puede indicar líquidos bajo la piel. |\n| Revisiones | Permiten ajustar la dieta, los medicamentos y los suplementos según los análisis. |\n| Otras complicaciones | Según el caso, pueden usarse medicamentos para el fósforo, la presión, la anemia o las náuseas. |\n\nImportante: no cambies la dieta ni le des suplementos por tu cuenta. Algunos gatos enfermos dejan de comer si se les cambia el alimento de golpe, así que el cambio debe hacerse poco a poco y con el veterinario.\n\nLa alimentación es parte clave del manejo, así que conviene revisar [Nutrición Científica por Etapas](/categoria/tenencia-responsable/nutricion-cientifica/nutricion-etapas).",
              },
            ]
          },
          {
            slug: "diabetes-felina",
            title: "Diabetes felina",
            intro: "La diabetes en gatos es frecuente, sobre todo en adultos y mayores con sobrepeso. Aparece cuando el cuerpo tiene dificultades para controlar el azúcar en la sangre. Con un diagnóstico temprano y un buen plan veterinario, muchos gatos llegan a la remisión: vuelven a tener glucosa normal sin insulina. No es una cura definitiva, así que el seguimiento es clave.",
            sections: [
              {
                heading: "¿Qué es la diabetes en gatos?",
                image: "/images/diabetes-gatitos.webp",
                body: "La diabetes es una enfermedad hormonal que afecta cómo el cuerpo maneja el azúcar (glucosa) de la sangre. El páncreas produce insulina, la hormona que ayuda a que la glucosa entre a las células. Cuando el cuerpo responde menos a la insulina, o el páncreas produce cada vez menos, el azúcar se acumula en la sangre.\n\nPor eso es más frecuente en gatos adultos o mayores, y sobre todo en los que tienen sobrepeso.",
              },
              {
                heading: "¿Quiénes tienen más riesgo?",
                body: "Estos son los factores que más se asocian a la diabetes:\n\n• Sobrepeso u obesidad: es uno de los factores más importantes.\n• Edad: es más frecuente en gatos de mediana edad o mayores.\n• Sexo: los machos, sobre todo si están castrados, tienen mayor riesgo.\n• Poca actividad: el sedentarismo favorece el sobrepeso.\n• Medicamentos: los corticoides, como los que se usan para el asma felina, pueden subir el azúcar.\n• Otras enfermedades: pancreatitis, problemas dentales o infecciones pueden dificultar el control.\n• Raza: en algunas poblaciones, el gato Burmés tiene más riesgo. Esto no se observa igual en todas partes.",
              },
              {
                heading: "Señales que conviene vigilar",
                body: "Los signos más comunes aparecen cuando el azúcar sube tanto que los riñones la eliminan por la orina, arrastrando agua con ella:\n\n| **Señal** | **Qué puede significar** |\n| Mucha sed | El cuerpo intenta compensar la pérdida de agua. |\n| Orina abundante y frecuente | Los riñones eliminan azúcar y agua. |\n| Pérdida de peso, aunque coma bien | El cuerpo no aprovecha la glucosa como debería. |\n| Mucho apetito | Las células no reciben la energía que necesitan. |\n| Patas traseras débiles | Puede deberse a daño en los nervios. Algunos gatos caminan apoyados en los talones. |\n| Pelaje sin brillo, cansancio o menos actividad | Pueden acompañar a la enfermedad. |\n\nSi notas estas señales, consulta con tu veterinario. Los síntomas solos no bastan para confirmar la diabetes.",
              },
              {
                heading: "Cómo se confirma",
                body: "El veterinario suele confirmarla con varios análisis:\n\n• Glucosa en sangre, en ayunas o con varias mediciones a lo largo del día.\n• Glucosa en la orina, que se repite para confirmarla.\n• Fructosamina, un análisis que refleja el promedio de glucosa de las últimas semanas. Ayuda a distinguir el estrés de una diabetes real.\n• Examen físico, y análisis de sangre y orina completos para descartar infecciones, pancreatitis u otras enfermedades.",
              },
              {
                heading: "Tratamiento y seguimiento",
                body: "El objetivo es que tu gato se sienta bien, evitar que el azúcar baje demasiado y prevenir complicaciones.\n\n• Insulina: en muchos gatos es la base del tratamiento. El veterinario define el tipo, la dosis y la frecuencia. Nunca cambies la dosis por tu cuenta.\n• Alimentación: las dietas altas en proteína y bajas en carbohidratos, muchas veces húmedas, suelen ayudar a estabilizar el azúcar y dan más saciedad.\n• Peso: si tu gato tiene sobrepeso, bajarlo de forma gradual mejora cómo responde a la insulina. Hazlo con el veterinario, sin dietas bruscas ni ayunos.\n• Seguimiento en casa: un glucómetro veterinario o tiras para orina permiten vigilar el azúcar. En algunos casos se usa un monitor continuo.\n• Revisiones periódicas: el veterinario revisa el peso, el apetito y las mediciones de azúcar.\n• Otros medicamentos: si tu gato toma corticoides u otros fármacos que suben el azúcar, habla con el veterinario sobre alternativas.\n\nSi quieres una guía más completa sobre la enfermedad, lee [Diabetes Felina: Guía completa para entenderla y manejarla](/categoria/salud/diabetes-felina/diabetes-guia-completa).",
              },
              {
                heading: "¿Es posible la remisión?",
                body: "Sí, en algunos gatos. La remisión significa que el azúcar vuelve a valores normales sin necesidad de insulina. Los resultados varían mucho entre estudios, desde casos poco frecuentes hasta la mayoría de los gatos bien controlados.\n\nTiene más probabilidades de ocurrir cuando:\n\n• El tratamiento empieza pronto después del diagnóstico.\n• El azúcar se controla bien en los primeros seis meses.\n• La dieta es baja en carbohidratos y alta en proteína.\n• Se vigila el azúcar con frecuencia.\n• Se controla el peso y se tratan otras enfermedades.\n\nAun así, no es una cura definitiva: la diabetes puede volver. Si después de seis meses no hay remisión, es probable que necesite insulina de por vida. Su veterinario lo irá reevaluando.",
              },
              {
                heading: "Cuándo acudir de inmediato",
                body: "Algunas señales son una urgencia. Acude al veterinario sin esperar:\n\n| **Señal** | **Por qué es urgente** |\n| Vómitos que no paran o rechazo total de la comida | Puede haber deshidratación o una complicación. |\n| Debilidad marcada, temblores o convulsiones | Pueden indicar un azúcar muy bajo, por ejemplo por exceso de insulina. |\n| Desorientación o colapso | Requiere atención inmediata. |\n| Respiración rápida o con dificultad, u olor inusual en el aliento | Pueden ser signos de cetoacidosis diabética. |\n\nSi tu gato recibe insulina y presenta alguna de estas señales, contacta al veterinario o a una clínica de urgencia de inmediato.",
              },
            ],
          },
        ],
      },
      {
        slug: "dental",
        label: "Salud bucal",
        topics: [
          {
            slug: "sarro-gingivitis",
            title: "Sarro y gingivitis",
            intro: "Los problemas dentales son muy comunes en los gatos: alrededor de 7 de cada 10 presentan algún grado de problema de encías o dientes hacia los 3 años. El sarro no es solo un tema de estética: puede doler, dificultar la comida y afectar su bienestar general.",
            sections: [
              {
                heading: "Por qué importa tanto la boca",
                image: "/images/sarro.webp",
                body: "El sarro empieza con la placa bacteriana, una capa blanda que se forma sobre los dientes. Si no se retira, se endurece y se convierte en sarro. Ese sarro irrita las encías y puede provocar gingivitis: encías rojas, inflamadas o que sangran.\n\nCon el tiempo, la inflamación puede llegar a los tejidos que sostienen el diente, y eso provoca dolor, dientes flojos y pérdida de piezas.\n\nMuchos gatos no muestran el dolor de forma evidente. Fíjate si notas alguno de estos cambios:\n\n| **Lo que puedes notar** | **Qué puede significar** |\n| Mastica solo de un lado | Le duele un lado de la boca. |\n| Deja caer comida o rechaza las croquetas secas | Masticar le resulta doloroso. |\n| Come más despacio o babea más | Puede tener molestias al comer. |\n| Mal aliento persistente | Suele indicar acumulación de placa o infección. |\n| Encías rojas, hinchadas o con sangre | Hay inflamación de las encías. |\n| Está irritable, se asea menos o se aísla | Puede estar sintiendo dolor. |\n| Come menos o pierde peso | Necesita revisión veterinaria pronto. |\n\nTambién se ha documentado una relación entre la enfermedad de las encías y problemas en riñones, corazón o hígado. No en todos los gatos, sino sobre todo en quienes ya tienen otras enfermedades.",
              },
              {
                heading: "Cómo cuidar los dientes en casa",
                body: "Lo que más ayuda es cepillar los dientes a diario con pasta específica para gatos. Si no es posible cada día, cepillar varias veces por semana también reduce la placa.\n\nPara que tu gato lo acepte poco a poco:\n\n| **Paso** | **Qué hacer** |\n| 1. Empieza sin cepillo | Deja que pruebe un poco de pasta dental felina. Elige un sabor que le guste. |\n| 2. Toca su hocico | Hazlo con suavidad y, cada vez, relaciónalo con un premio o una caricia. |\n| 3. Usa el material adecuado | Un cepillo de cerdas suaves para gatos o un dedil de silicona. |\n| 4. Empieza con poco tiempo | Unos pocos segundos, sobre todo en la cara externa de los dientes. |\n| 5. Aumenta despacio | Ve alargando el cepillado sin forzar la boca ni causar dolor. |\n| 6. Para si hay dolor | Si sangra mucho, se queja o rechaza el cepillo de forma persistente, consulta al veterinario. |\n\nNunca uses pasta dental humana. Puede contener flúor o edulcorantes como el xilitol, que son peligrosos para los gatos.\n\nLos snacks dentales, las dietas específicas, los aditivos para el agua y los juguetes para masticar pueden ayudar, pero no reemplazan el cepillado ni la limpieza profesional. Si puedes, busca productos con respaldo veterinario o sello VOHC.",
              },
              {
                heading: "Limpieza dental profesional",
                body: "La limpieza veterinaria se hace bajo anestesia general, con monitoreo constante. Así el veterinario puede revisar toda la boca con calma, limpiar por encima y por debajo de la línea de la encía, tomar radiografías y tratar o retirar dientes enfermos sin dolor para el gato.\n\nNo hay una frecuencia que sirva para todos. Muchos gatos necesitan una revisión al año. Quienes ya tienen gingivitis o sarro importante pueden necesitar controles y limpiezas más seguidas.\n\nAntes de la anestesia, el veterinario hace un examen y análisis para evaluar el riesgo. Durante el procedimiento vigila la respiración, la temperatura y el ritmo cardiaco.",
              },
              {
                heading: "Qué aumenta el riesgo",
                body: "Cualquier gato puede tener problemas dentales. Estos factores hacen que sea más probable:\n\n• Edad avanzada.\n• Acumulación rápida de placa y sarro.\n• Dientes apretados o mal alineados.\n• Enfermedades como la diabetes o algunas infecciones virales.\n• Poca higiene bucal.\n• Dieta solo blanda, en algunos casos.\n• Gingivitis crónica.\n\nLos gatos persas y otras razas de cara aplastada pueden tener más problemas bucales por la forma de su mandíbula y sus dientes apretados. Cada gato es distinto, así que lo mejor es que lo evalúe tu veterinario.",
              },
              {
                heading: "Señales de alarma",
                body: "Pide cita con el veterinario si notas:\n\n• Mal aliento intenso o que aparece de repente.\n• Encías rojas, inflamadas, con sangre o retraídas.\n• Sarro visible, sobre todo marrón o amarillo.\n• Dientes flojos, rotos o que faltan.\n• Babeo excesivo o sangre en la saliva.\n• Rechazo de la comida, pérdida de peso o dificultad para masticar.\n• Se toca la cara con la pata, se rasca el hocico o muestra signos de dolor.",
              },
              {
                heading: "Consejos prácticos",
                body: "• Mira la boca de tu gato de vez en cuando, sin forzarlo.\n• Cepíllalo lo más seguido que puedas, idealmente a diario.\n• Usa solo productos pensados para gatos.\n• Pide una revisión dental al año, o antes si notas dolor o sarro.\n• No intentes quitar el sarro en casa: puedes dañar el esmalte y las encías.\n\nPrevenir es más fácil, más barato y mucho más cómodo para tu gato que tratar una enfermedad avanzada.\n\nPara una visión general de la salud preventiva, lee [Salud Preventiva y Atención Veterinaria](/categoria/tenencia-responsable/salud-preventiva/salud-preventiva-global).",
              },
            ],
          },
        ],
      },
 {
  slug: "alergia",
  label: "Alergias",
  topics: [
 
    {
      slug: "guia-alergia-gatos",
      title: "Alergia a los gatos: Guía práctica para convivir",
      intro: "La alergia al gato es una reacción del sistema de defensa a unas proteínas del gato, sobre todo la llamada Fel d 1. Se puede controlar con diagnóstico médico, cambios en casa y tratamiento, pero no hay una solución garantizada. Si el asma está mal controlada o las reacciones son graves, convivir con un gato puede no ser seguro.",
      sections: [
        {
          heading: "Qué lo causa",
          image: "/images/alergia-a-gatitos.webp",
          body: "No es el pelo en sí, sino las proteínas que hay en la caspa, la saliva y la orina. La principal es la Fel d 1, que se produce sobre todo en las glándulas de la saliva y de la piel. El gato la reparte por su pelo cuando se acicala, y se dispersa con la caspa.\n\nEs una proteína muy pequeña y muy estable. Se pega fácilmente a la ropa, los muebles y las alfombras, y puede quedarse en la casa mucho después de que el gato se haya ido.",
        },
        {
          heading: "Síntomas y diagnóstico",
          body: "Los síntomas más comunes son los estornudos, la congestión, la picazón en la nariz, los ojos rojos o llorosos, la urticaria, la picazón en la piel y la tos. En personas con asma, puede provocar silbidos al respirar, falta de aire o crisis.\n\nEl diagnóstico lo hace un alergólogo o un inmunólogo, con la historia clínica y pruebas como el prick test o un análisis de sangre. No conviene hacer un “test casero” ni dar por hecho que el gato es el único causante: el polvo, los ácaros, el polen o el moho también pueden contribuir.",
        },
        {
          heading: "Medidas para la casa",
          body: "La medida más eficaz es reducir la exposición, sobre todo en el dormitorio. Estas son algunas formas de hacerlo:\n\n| **Medida** | **Cómo** |\n| Dormitorio libre de gato | Mantén la puerta cerrada y evita que suba a la cama. |\n| Aspirar con filtro HEPA | Al menos una vez por semana, en alfombras y tapizados. |\n| Purificador con filtro HEPA | En el dormitorio y la sala. Para resultados, la AAFA sugiere usarlo al menos cuatro horas al día. |\n| Menos textiles acumuladores | Reduce alfombras, cortinas pesadas y tapizados, o lávalos con frecuencia. |\n| Higiene después de tocarlo | Lávate las manos, la cara y la ropa. |\n| Ventilar la casa | Con cuidado si el polen de fuera empeora tus síntomas. |",
        },
        {
          heading: "Cuidados del gato",
          body: "Si puedes, pide que lo cepille alguien que no sea alérgico, mejor al aire libre o en una zona bien ventilada. Después, lávate las manos y evita tocarte los ojos y la cara.\n\nEl baño semanal puede bajar la Fel d 1 del pelo, pero el efecto dura poco, pocos días. No está demostrado que mejore de forma constante los síntomas de la persona alérgica.\n\nSi te preocupa la convivencia en casa, revisa [Enriquecimiento Ambiental y Bienestar Conductual](/categoria/tenencia-responsable/enriquecimiento-ambiental/5-pilares-ambientales).",
        },
        {
          heading: "Mitos y realidades",
          body: "| **Mito** | **Realidad** |\n| “Hay gatos hipoalergénicos.” | No existe. Todos los gatos producen Fel d 1, incluso los que tienen poco pelo. Lo que cambia es la cantidad de cada gato y la respuesta de cada persona. |\n| “El pelo largo da más alergia.” | Las guías de la AAAAI indican que la longitud del pelo no se asocia de forma consistente con el nivel de Fel d 1 en casa. |\n| “Castrarlo lo elimina.” | En los machos enteros, la castración puede reducir la producción de Fel d 1. Pero no la elimina ni garantiza alivio. |\n| “Es dos veces más frecuente que la alergia al perro.” | No es una regla universal. Depende del estudio y de la población. |",
        },
        {
          heading: "Tratamientos médicos",
          body: "El tratamiento lo debe personalizar un médico. Puede incluir antihistamínicos, corticoides nasales, colirios, broncodilatadores y el control del asma, según los síntomas.\n\nEn algunos casos seleccionados, la inmunoterapia con alérgenos, es decir, las vacunas de desensibilización, puede ser una opción a largo plazo. La debe indicar y supervisar un alergólogo. No es un tratamiento casero ni garantiza la curación.",
        },
        {
          heading: "Cuándo replantearse la convivencia",
          body: "Si el asma está mal controlada, hay crisis repetidas, síntomas graves o el tratamiento no funciona, la opción más segura puede ser buscarle un hogar responsable al gato. La AAAAI indica que quitar al animal es la medida más eficaz para reducir la exposición, aunque los alérgenos pueden quedarse en la casa durante meses.\n\nEsta decisión debe tomarla la persona con su médico, poniendo la salud de quien tiene la alergia en primer lugar. No es un fracaso ni una falta de cariño: es una decisión de salud y de bienestar para todos.",
        },
      ],
    },
  ],
},
{
  slug: "diabetes-felina",
  label: "Diabetes",
  topics: [
    {
      slug: "diabetes-guia-completa",
      title: "Diabetes Felina: Guía completa para entenderla y manejarla",
      intro: "La diabetes en los gatos es una condición compleja, pero con el manejo adecuado, tu gato puede llevar una vida larga y feliz. A diferencia de los perros, los gatos tienen particularidades únicas que debemos conocer para evitar errores comunes.",
      sections: [
        {
          heading: "Paso 1: Causas y factores de riesgo",
          image: "/images/entender-gatitos.webp",
          body: "La diabetes felina suele ser una combinación de factores: obesidad y edad (común en mayores de 9 años), sexo y raza (más común en machos 4:1 y en raza Siamés). También influyen los depósitos de amiloide que dañan el páncreas y el uso de fármacos como progestágenos o corticoides. Es fundamental destacar que la pancreatitis suele estar estrechamente asociada a esta enfermedad y, en muchos casos, puede ser la causa desencadenante de la diabetes.",
        },
        {
          heading: "Paso 2: Identificación de síntomas",
          body: "Presta atención al aumento de sed y orina (beber mucha agua u orinar fuera del arenero) y cambios en el apetito o peso. Un signo distintivo es la neuropatía diabética: el gato camina apoyando todo el tarso (el 'talón') en el suelo. También se observa pelaje descuidado (seco o con caspa). A diferencia de los perros, las cataratas son muy raras en gatos.",
        },
        {
          heading: "Paso 3: El Diagnóstico Correcto",
          body: "El estrés en la clínica genera el efecto 'Bata Blanca', elevando el azúcar temporalmente. Para un diagnóstico certero, el veterinario debe confirmar glucosa tanto en sangre como en orina. Se requieren análisis completos para descartar otras condiciones como infecciones urinarias, problemas hepáticos o pancreatitis, los cuales suelen acompañar a la diabetes.",
        },
        {
          heading: "Paso 4: Tratamiento y Regulación",
          body: "Se basa en tres pilares: 1. Insulina: Se usan de acción intermedia o larga (NPH o PZI), generalmente dos veces al día con las comidas. 2. Dieta: Carnívora estricta, alta en proteínas y baja en carbohidratos con horarios fijos. 3. Monitoreo: Es ideal medir la glucosa en sangre (pinchazos en la oreja) en los momentos de 'pico' para ajustar la dosis con precisión.",
        },
        {
          heading: "Paso 5: Emergencia de Cetoacidosis",
          body: "Si no se trata, puede derivar en cetoacidosis, una emergencia vital con síntomas como vómitos, letargo extremo, deshidratación y aliento con olor afrutado o a acetona. Requiere hospitalización inmediata para fluidos intravenosos, insulina de acción rápida y corrección de electrolitos (potasio, fósforo).",
        },
        {
          heading: "Paso 6: Complicaciones y Expectativas",
          body: "Es posible la remisión (dejar de necesitar insulina) si se controla el peso y se diagnostica pronto. El mayor riesgo es la hipoglucemia: si el gato tiembla o convulsiona, aplica miel o azúcar en sus encías y corre al veterinario. Además, revisa regularmente si hay infecciones urinarias (sangre o esfuerzo al orinar).",
        },
        {
          heading: "Consejos clave para el dueño",
          body: "Nunca ajustes la insulina por tu cuenta. Mantén un registro estricto de dosis, horarios de comida y comportamiento. Controlar el peso es la mejor herramienta preventiva y observar cualquier cambio en la forma de caminar es fundamental para reportarlo al especialista.\n\nEl peso influye mucho en esta enfermedad, así que conviene leer [Obesidad Felina: Cómo proteger la salud y vida de tu gato](/categoria/salud/obesidad-felina/guia-obesidad-prevencion).",
        },
      ],
    },
  ],
},
{
  slug: "obesidad-felina",
  label: "Obesidad",
  topics: [
    {
      slug: "guia-obesidad-prevencion",
      title: "Obesidad Felina: Cómo proteger la salud y vida de tu gato",
      intro: "La obesidad no es solo un problema estético; es una enfermedad que reduce la esperanza de vida de tu gato y aumenta el riesgo de sufrir diabetes, problemas articulares y complicaciones quirúrgicas. Con paciencia y estrategia, puedes ayudarle a recuperar su peso ideal.",
      sections: [
        {
          heading: "Paso 1: Identificación del sobrepeso",
          image: "/images/obesidad-gatitos.webp",
          body: "No te fíes solo de la báscula. En la 'Prueba de las costillas', deberías sentirlas fácilmente sin presionar fuerte; si no, hay exceso de grasa. Al mirarlo desde arriba, debe marcarse una cintura detrás de las costillas; si es rectangular o tiene forma de barril, hay sobrepeso. De perfil, su abdomen no debe colgar ni tocar el suelo. Se considera sobrepeso si supera un 10-19% su peso ideal, y obeso si supera el 20%.",
        },
        {
          heading: "Paso 2: Causas y Factores",
          body: "Es una combinación de factores: tras la esterilización el metabolismo baja y el apetito aumenta; a partir de los 6-8 años los gatos queman menos calorías; el sedentarismo en gatos de interior sin estímulos; y dietas inadecuadas (comida siempre disponible, premios excesivos o muchos carbohidratos). Razas como el Siamés o Burmés pueden tener mayor predisposición genética.",
        },
        {
          heading: "Paso 3: El Plan de Acción Seguro",
          body: "La pérdida de peso debe ser lenta. Regla de oro: un gato no debe perder más del 1% o 2% de su peso por semana (ejemplo: un gato de 8 kg no debe bajar más de 160 gramos semanales). Bajar de peso muy rápido es peligroso ya que puede causar lipidosis hepática, una enfermedad del hígado potencialmente mortal.",
        },
        {
          heading: "Paso 4: Manejo Dietético Estratégico",
          body: "Pide al veterinario calcular las calorías para el peso ideal, no el actual. Generalmente se ofrece entre el 60% y 75% de las calorías de mantenimiento actuales. Busca dietas altas en proteína (para mantener músculo y dar saciedad) y bajas en carbohidratos. Fracciona la ración en 3 o 4 tomas para mantener el metabolismo activo y usa parte de su ración como premio en lugar de snacks calóricos.\n\nPara elegir el tipo de alimento, lee [Comida húmeda vs. pienso seco](/categoria/alimentacion/dietas/comida-humeda-vs-seca).",
        },
        {
          heading: "Paso 5: Actividad Física y Enriquecimiento",
          body: "El ejercicio debe ser gradual. Dedica 10 minutos al día a juegos interactivos (cañas, láser, pelotas). Usa el enriquecimiento ambiental: esconde la comida en diferentes lugares, usa comederos interactivos o puzzles, e instala repisas o árboles para gatos que le obliguen a saltar y trepar para obtener su alimento.",
        },
        {
          heading: "Paso 6: Compromiso y Monitoreo",
          body: "El éxito depende de que toda la familia siga las reglas sin dar comida a escondidas. Pesa al gato cada 2 semanas: si no baja, ajusta la ración; si baja muy rápido, aumenta un poco. El factor humano es esencial; aceptar que el gato necesita adelgazar no es 'cruel', sino un acto de amor para cuidar su salud a largo plazo.",
        },
        {
          heading: "Señales de Alerta: Cuándo acudir al veterinario",
          body: "Antes de empezar cualquier dieta, visita al especialista para descartar causas médicas como hipotiroidismo (aunque raro en gatos) o diabetes, y para establecer un peso objetivo realista. El veterinario debe ayudar a elegir la dieta comercial adecuada o formular una casera equilibrada. Recuerda que prevenir es mejor que curar para asegurar que tu gato te acompañe muchos años más, sano y activo.",
        },
      ],
    },
  ],
},
],
  },
  {
    slug: "tenencia-responsable",
    label: "Tenencia Responsable",
    seoTitle: "Tenencia responsable de gatos: guía completa",
    emoji: "",
    color: "#2ecc71",
    bg: "#e8f8f0",
    description: "Guía sobre la tenencia responsable de gatos: bienestar, salud preventiva, esterilización, enriquecimiento y compromiso a largo plazo con tu compañero felino.",
    intro: "Tener un gato es un compromiso de muchos años. Significa cuidar su salud, su alimentación y su bienestar, prevenir la reproducción no deseada y estar dispuesto a acompañarlo en cada etapa de la vida, incluida la vejez y las decisiones difíciles al final.\n\nEsta sección reúne los temas que hacen posible esa convivencia: el marco ético y legal, la esterilización como herramienta de bienestar y de control poblacional, el enriquecimiento del hogar para que el gato esté activo y tranquilo, la nutrición por etapas y las medidas de salud preventiva.\n\nUn buen cuidador no busca la perfección, sino la constancia. Pequeños hábitos repetidos cada día, como una rutina, un espacio seguro y una visita al veterinario a tiempo, marcan la diferencia en la vida de un gato.\n\nUna tenencia responsable también incluye prever qué pasará si tu situación cambia, como una mudanza o un viaje. Piensa desde el principio en quién podría cuidar a tu gato si tú no puedes hacerlo.",
    subcategories: [
      {
        slug: "principios-universales",
        label: "Principios y Naturaleza Felina",
        topics: [
          {
            slug: "guia-tenencia-responsable",
            title: "Tenencia Responsable de Gatos",
            intro: "Tener un gato es un compromiso que dura muchos años: puede acompañarte entre 13 y 17 años, y algunos llegan a más de 20 con buenos cuidados. Aquí te contamos qué necesita para vivir bien.",
            sections: [
              {
                heading: "Un compromiso para toda la vida",
                image: "/images/tenencia-responsable-gatitos.webp",
                body: "Tener un gato es una decisión para muchos años. Con buenos cuidados, un gato doméstico puede vivir entre 13 y 17 años, y algunos superan los 20.\n\nUn gato no es un objeto ni un accesorio pasajero. Es un ser que siente y que necesita buena alimentación, atención veterinaria, un espacio seguro, juego, compañía y cariño constante durante toda su vida.\n\nEste compromiso no depende del lugar donde vivas. Las leyes cambian de un país a otro, pero la base es la misma en todas partes: cuidar bien a tu gato.",
              },
              {
                heading: "Cómo es la naturaleza del gato",
                body: "Los gatos no son animales de manada como los perros. Valoran su independencia, no buscan un líder y crean vínculos según su experiencia, su carácter y su entorno.\n\nSus sentidos están hechos para cazar, sobre todo de noche:\n\n| **Sentido** | **Qué significa para ti** |\n| Vista | Tiene una capa reflectante detrás de la retina (tapetum lucidum) que le ayuda a ver con poca luz. |\n| Oído | Percibe sonidos muy agudos, hasta unos 64 kHz, mucho más de lo que oímos las personas. |\n| Olfato | Huele muy bien y usa el órgano de Jacobson para detectar feromonas. |\n| Bigotes | Son muy sensibles al aire y al espacio; le ayudan a moverse en lugares estrechos. |\n| Equilibrio | Se endereza al caer, pero eso no lo protege de golpes ni de caídas graves. |\n\nEl ronroneo suele expresar calma, pero también puede aparecer con dolor, estrés o hambre. Mira siempre el contexto antes de interpretarlo.",
              },
              {
                heading: "Cómo crece un gatito",
                body: "Cada etapa tiene sus propias necesidades. Estas son las edades aproximadas:\n\n| **Etapa** | **Edad aproximada** | **Qué ocurre** |\n| Gestación | 63 a 66 días | Dura unas 9 semanas. |\n| Nacimiento | Día 0 | Nace con los ojos cerrados, oye poco y depende de su madre para el calor y la comida. |\n| Ojos abiertos | 7 a 14 días | Empieza a abrir los ojos. |\n| Primeros pasos y juego | 3 a 4 semanas | Se mueve con más coordinación y juega con sus hermanos. |\n| Socialización | 2 a 7 semanas | Es la etapa clave para aprender que las personas, los sonidos y el manejo diario son seguros. |\n| Destete | 4 a 8 semanas | Se hace poco a poco. Nunca conviene separarlo de golpe de su madre. |\n| Adopción ideal | 10 a 12 semanas | Puede comer solo desde las 8 semanas, pero esperar hasta las 10 o 12 favorece su desarrollo emocional. |\n| Madurez sexual | Hembras: 4 a 6 meses. Machos: 5 a 7 meses | Varía según la raza y la alimentación. La esterilización se decide con el veterinario. |\n| Adulto | Desde los 12 meses | La mayoría llega a su tamaño adulto hacia el año. Algunas razas grandes siguen creciendo hasta los 18 o 24 meses. |\n| Adulto maduro | 7 a 10 años | Conviene revisarlo con más frecuencia: peso, articulaciones y dientes. |\n| Senior | Desde los 10 años | Muchas guías veterinarias lo consideran senior a partir de esta edad. |\n\nPara ver las etapas con más detalle, lee [Las primeras semanas de vida](/categoria/etapas/gatito/primeras-semanas).",
              },
              {
                heading: "Línea de tiempo",
                body: "El diagrama resume las etapas más importantes. La ventana de socialización, entre la segunda y la séptima semana, es la más determinante para su carácter. Las edades son orientativas: cada gato tiene su propio ritmo.",
                image: "/articles/tenencia-cronologia.svg",
              },
            ]
          }
        ]
      },
      {
        slug: "marco-etico-legal",
        label: "Marco Ético y Legal",
        topics: [
          {
            slug: "marco-etico-legal",
            title: "Marco Ético y Legal Global",
            intro: "No hay una única ley para todo el mundo, pero sí hay principios que se repiten en casi todas partes: cuidar el bienestar del gato, evitar el sufrimiento que se puede prevenir, no abandonarlo y manejar las poblaciones de gatos de forma humana y responsable. Las reglas concretas, como el microchip, las vacunas o las sanciones, cambian según el lugar.",
            sections: [
              {
                heading: "Cinco principios de bienestar",
                image: "/images/etico-gatitos.webp",
                body: "La Organización Mundial de Sanidad Animal (WOAH) usa como referencia las llamadas Cinco Libertades. Para un gato, significan:\n\n| **Libertad** | **Qué implica para tu gato** |\n| Sin hambre, sed ni mala alimentación | Agua fresca y comida completa, en las cantidades correctas. |\n| Sin miedo ni angustia | Un entorno tranquilo, con lugares seguros para esconderse. |\n| Sin incomodidad física ni térmica | Un lugar cómodo, ni demasiado frío ni demasiado caluroso. |\n| Sin dolor, lesión ni enfermedad | Revisiones veterinarias y tratamiento a tiempo. |\n| Poder expresar su conducta natural | Rascar, trepar, esconderse y jugar. |\n\nEs mucho más que darle comida y techo.",
              },
              {
                heading: "Responsabilidades de quien lo cuida",
                body: "Antes de adoptar, conviene pensar con honestidad en tu tiempo, tu economía, la estabilidad de tu vivienda y tu compromiso a largo plazo. La AVMA destaca que informarse sobre la elección del gato, su salud, su conducta y la esterilización ayuda a evitar abandonos.\n\nDurante todo su tiempo contigo, estas son las responsabilidades principales:\n\n| **Responsabilidad** | **Qué implica** |\n| Identificación | Microchip y registro en tu municipio, si lo exige tu zona. |\n| Salud preventiva | Revisiones, vacunas según el riesgo y control de parásitos. |\n| Cuidado diario | Comida completa, agua fresca, bandeja limpia, refugios y juego. |\n| Esterilización | Si no piensas criarlo, para evitar camadas no deseadas. |\n| Problemas de conducta | Atenderlos con refuerzo positivo y, si hace falta, con ayuda profesional. |",
              },
              {
                heading: "Abandono y entrega responsable",
                body: "El abandono es una forma grave de maltrato y una de las causas principales de gatos sin hogar. Si no puedes seguir con tu gato, busca alternativas responsables: apoyo para conservarlo, reubicarlo con alguien de confianza, o llevarlo a un refugio o a una organización de rescate.\n\nEntregarlo sin asegurarte de que tenga un nuevo hogar puede no ser ilegal en todos los lugares, pero sí puede dejarlo expuesto a sufrimiento o a reproducción sin control. Lo mínimo es asegurar que quede bajo cuidado responsable.\n\nPara elegir de forma responsable un gato nuevo, lee [Adquisición Responsable: Guía Legal y Ética Universal](/categoria/adquisicion-responsable/guia-adquisicion-responsable/adquisicion-responsable-global).",
              },
              {
                heading: "Controlar la población de gatos",
                body: "La esterilización es la herramienta más importante para evitar camadas no deseadas y reducir la llegada de gatos a los refugios. La AVMA recomienda esterilizar antes de los 5 meses cuando corresponde, aunque la edad ideal la decide el veterinario según cada gato.\n\nEn gatos de la calle, el programa TNR (captura, esterilización y retorno) consiste en atraparlos de forma humanitaria, esterilizarlos, vacunarlos cuando corresponde, marcarlos con un corte en la punta de una oreja y devolverlos a su territorio. La ASPCA lo llama TNRM cuando incluye seguimiento y cuidado continuo.\n\nEl TNR no resuelve el problema por sí solo. Para que funcione, hay que esterilizar a una parte alta y constante de la colonia, y combinarlo con la esterilización de los gatos que tienen hogar, la adopción y la educación de la comunidad.",
              },
              {
                heading: "El sacrificio no es la solución",
                body: "El control ético de las poblaciones no se basa en el sacrificio masivo. Según las guías de la ISFM, la esterilización es el pilar para controlar la reproducción. Si el sacrificio fuera inevitable, debe hacerse con métodos humanos. El envenenamiento y el ahogamiento no son aceptables.\n\nLa AVMA recomienda empezar con estrategias sin sacrificio para los gatos libres o abandonados: adopción, esterilización y manejo de colonias.",
              },
              {
                heading: "Cómo denunciar el maltrato",
                body: "En muchos lugares hay formas de denunciar el maltrato, el abandono, la venta ilegal o las condiciones de encierro inadecuadas. Puedes acudir a la policía, a la autoridad sanitaria, a la oficina de bienestar animal, a una protectora o a los servicios de tu municipio.\n\nAntes de denunciar, anota con calma la fecha, el lugar y lo que observas. Si es legal y seguro, toma fotos o videos. Nunca pongas en riesgo tu seguridad ni intervengas de forma violenta.",
              },
              {
                heading: "Más allá de lo que exige la ley",
                body: "Una ley puede exigir solo lo básico. El bienestar real requiere anticiparse a lo que necesita el gato: planear mudanzas o crisis familiares, asegurar su identificación, cuidar su salud, prevenir el aburrimiento y el estrés, y tomar decisiones de final de vida pensando en su calidad de vida.\n\nLa regla práctica es sencilla: cumplir la ley de tu lugar y, además, ofrecer a tu gato una vida con seguridad, salud, rutina y respeto por su forma de ser.",
              },
            ]
          }
        ]
      },
      {
        slug: "salud-preventiva",
        label: "Salud Preventiva",
        topics: [
          {
            slug: "salud-preventiva-global",
            title: "Salud Preventiva y Atención Veterinaria",
            intro: "La prevención se basa en una buena revisión veterinaria al llegar el gato a casa, en desparasitarlo, en vacunarlo según su edad y su riesgo, en hacer pruebas de retrovirus cuando corresponda y en esterilizarlo y revisarlo con regularidad. Las vacunas no evitan todo, pero reducen mucho la gravedad y el contagio de enfermedades como la panleucopenia, el calicivirus y el herpesvirus felino.",
            sections: [
              {
                heading: "Enfermedades que conviene conocer",
                image: "/images/preventivo-gatitos.webp",
                body: "Estas son las principales enfermedades infecciosas, cómo se contagian y cómo prevenirlas:\n\n| **Enfermedad** | **Cómo se contagia** | **Qué puede causar** | **Cómo prevenirla** |\n| Panleucopenia (moquillo felino) | Por heces, orina, saliva y objetos contaminados, como bandejas o comederos. | Fiebre, vómitos, diarrea y deshidratación. Puede ser mortal en gatitos. | Vacuna, esencial para todos los gatos. |\n| Rinotraqueítis y calicivirus | Por saliva, secreciones y gotitas al estornudar. | Estornudos, mucosidad en la nariz o los ojos, llagas en la boca y falta de apetito. Algunos quedan como portadores. | Vacunas FVRCP. No evitan siempre el contagio, pero reducen la gravedad. |\n| Leucemia felina (FeLV) | Por contacto estrecho y prolongado: saliva, mordeduras, acicalarse mutuamente o la leche materna. | Anemia, defensas bajas y, en algunos casos, cáncer. | Vacuna en gatitos menores de un año y según riesgo en adultos. Antes, una prueba recomendable. |\n| Inmunodeficiencia felina (FIV) | Sobre todo por mordeduras profundas. | Defensas bajas. Es más frecuente en machos sin castrar que pelean. | Esterilizar, controlar el acceso al exterior y evitar peleas. No hay una vacuna de uso general. |\n| Rabia | Por la saliva de un animal infectado, normalmente mediante mordedura. | Enfermedad mortal, que también puede pasar a las personas. | Vacuna. Puede ser obligatoria según la normativa local. |\n| Peritonitis infecciosa felina (PIF) | Un virus intestinal común, que en algunos gatos muta y provoca una forma grave. | Fiebre persistente, pérdida de peso, barriga hinchada o dificultad para respirar. | No hay vacuna de uso general. Reducir el hacinamiento, mantener limpias las bandejas y evitar el estrés. |\n| Toxoplasmosis | Al comer presas o carne cruda contaminada. | La mayoría de los gatos no tiene síntomas, pero puede eliminar parásitos en las heces. | Cocinar bien la carne, no darle carne cruda, limpiar la bandeja a diario y lavarse las manos. |\n\nSi estás embarazada o tienes defensas bajas, extrema las precauciones y consulta con tu médico.",
              },
              {
                heading: "Protocolo sanitario básico",
                body: "| **Momento** | **Qué hacer** |\n| Al llegar a casa | Una revisión veterinaria completa: peso, temperatura, piel, oídos, boca y descarte de parásitos. |\n| Desparasitación | Los gatitos necesitan un plan propio. Las guías de la AAFP y la AAHA recomiendan tratar cada 2 semanas entre las 3 y 9 semanas, y luego cada mes hasta los 6 meses. |\n| Pruebas de retrovirus | Pruebas de FeLV y FIV en gatos nuevos, sobre todo si hay otros gatos en casa o hay antecedentes de riesgo. En gatitos muy pequeños, pueden repetirse según indique el veterinario. |\n| Vacunas | Empiezan hacia las 6 u 8 semanas, con dosis cada 3 o 4 semanas hasta las 16 o 20 semanas. |\n| Esterilización | Conviene planificarla antes de los 5 meses en gatos que no van a criar. |\n| Revisiones | Al menos una vez al año. En gatos mayores de 7 años o con enfermedades crónicas, cada 6 meses puede ser mejor. |",
              },
              {
                heading: "Señales de alarma",
                body: "No todas las señales tienen la misma urgencia. Esta tabla te ayuda a decidir:\n\n| **Nivel** | **Señal** | **Qué hacer** |\n| Urgencia inmediata | Dificultad para respirar o respiración con la boca abierta | Ve a urgencias. |\n| Urgencia inmediata | Encías pálidas, azuladas o muy oscuras | Ve a urgencias. |\n| Urgencia inmediata | Esfuerzo para orinar, poca orina o no puede orinar | Ve a urgencias. Es especialmente grave en machos. |\n| Urgencia inmediata | Convulsiones, colapso o pérdida de conciencia | Ve a urgencias. |\n| Urgencia inmediata | Golpe fuerte, sangrado abundante o sospecha de intoxicación | Ve a urgencias. |\n| En menos de 24 horas | Vómitos o diarrea que no paran | Consulta pronto. |\n| En menos de 24 horas | No come ni bebe durante más de 24 horas | Consulta pronto. |\n| En menos de 24 horas | Muy decaído, se esconde constantemente o está débil | Consulta pronto. |\n| En menos de 24 horas | Sangre en la orina, las heces o el vómito | Consulta pronto. |\n| En menos de 24 horas | Fiebre, dolor o cambios bruscos de conducta | Consulta pronto. |\n| Vigilar y consultar | Cambios en el uso de la bandeja | Anota qué ves y consulta en la próxima revisión. |\n| Vigilar y consultar | Pérdida de peso o de apetito | Anota qué ves y consulta en la próxima revisión. |\n| Vigilar y consultar | Rascado excesivo, caspa o caída de pelo | Anota qué ves y consulta en la próxima revisión. |\n| Vigilar y consultar | Mal aliento, le cuesta masticar o babea mucho | Anota qué ves y consulta en la próxima revisión. |",
              },
              {
                heading: "Nunca te automediques",
                body: "**El paracetamol es muy tóxico para los gatos**: puede dañar gravemente los glóbulos rojos y el hígado. El ibuprofeno, la aspirina y otros antiinflamatorios humanos también pueden ser peligrosos, incluso en dosis pequeñas.\n\nSi sospechas una intoxicación, guarda el envase, anota la cantidad y la hora, y contacta de inmediato con un veterinario o un centro de toxicología. No le provoques el vómito sin indicación profesional.\n\nSi notas signos de intoxicación, lee [Alimentos tóxicos para gatos](/categoria/alimentacion/prohibidos/toxicos-comunes).",
              },
            ]
          }
        ]
      },
      {
        slug: "nutricion-cientifica",
        label: "Nutrición Científica",
        topics: [
          {
            slug: "nutricion-etapas",
            title: "Nutrición Científica por Etapas",
            intro: "La mejor dieta para un gato es la que es completa y equilibrada para su etapa de vida, con proteína de buena calidad y nutrientes que necesita sí o sí, como la taurina, la arginina y la vitamina A. Lo que necesita cambia mucho con la edad, el peso, la esterilización, la actividad y la salud. Las cifras generales son orientativas: tu veterinario debe ajustarlas.",
            sections: [
              {
                heading: "Lo que su cuerpo necesita",
                image: "/images/nutricion-gatitos-v2.webp",
                body: "Los gatos son carnívoros estrictos. Necesitan nutrientes que vienen sobre todo de la carne. A diferencia de los perros, tienen que obtener de su comida la taurina, la arginina, la vitamina A ya preparada y el ácido araquidónico.\n\nLa taurina es esencial. Si le falta, puede dañar el corazón y la retina. Los gatos también convierten mal el betacaroteno en vitamina A, así que necesitan vitamina A directamente en su alimento.\n\nEn la naturaleza, los gatos comen varias veces al día en pequeñas cantidades. En casa, repartir la ración en varias tomas, o usar comederos interactivos, se parece más a ese ritmo natural y ayuda a controlar el peso.",
              },
              {
                heading: "Qué necesita en cada etapa",
                body: "Estas cifras son orientativas. La mejor guía es la etiqueta de un alimento completo y la valoración de tu veterinario sobre su peso y su condición corporal.\n\n| **Etapa** | **Energía orientativa** | **Qué conviene darle** |\n| Lactante (0 a 2 meses) | Muy variable según peso y edad. Necesita leche materna o un sustituto felino. | Nunca leche de vaca. Usa una fórmula específica para gatitos. |\n| Crecimiento (2 a 12 meses) | Alrededor de 200 kcal por kilo al día a las 10 semanas, y cerca de 80 kcal por kilo a los 10 meses. | Alimento completo para gatitos, con más energía y nutrientes para crecer. |\n| Adulto joven (1 a 7 años) | Depende del peso, la actividad y si está esterilizado. Punto de partida: RER = 30 × peso en kg + 70 kcal al día. | Alimento completo para adultos. Ajusta la ración según su condición corporal. |\n| Adulto maduro (7 a 10 años) | Puede acercarse al RER, con ajustes individuales. | Vigila el peso, la masa muscular y las enfermedades crónicas. |\n| Senior (más de 10 años) | Puede necesitar entre 10 y 20 % más que el RER, a veces hasta un 25 %. | Revisa con el veterinario el peso, el apetito, los riñones y la digestión. |\n| Esterilizado | Suele necesitar menos energía que un adulto entero y activo. | Controla las porciones para evitar el sobrepeso. No hay una cifra única. |\n\nSobre la proteína: las guías de la AAFCO establecen un mínimo de 65 g por cada 1.000 kcal para adultos, y 75 g por cada 1.000 kcal para crecimiento y reproducción.",
              },
              {
                heading: "Alimentos y sustancias que no debe comer",
                body: "| **Qué evitar** | **Por qué** |\n| Chocolate, café, té y otras fuentes de cafeína | Pueden causar temblores, latidos acelerados y convulsiones. |\n| Cebolla, ajo, puerro y cebollín, en cualquier forma | Dañan los glóbulos rojos y pueden causar anemia. |\n| Uvas, pasas y grosellas | Se asocian a daño en los riñones. |\n| Alcohol y masa cruda con levadura | La masa puede expandirse en el estómago y producir alcohol. |\n| Xilitol y productos “sin azúcar” | Es muy peligroso para los gatos. Puede causar bajadas de azúcar y daño en el hígado. |\n| Medicamentos humanos, sobre todo paracetamol, ibuprofeno y aspirina | Pueden ser muy tóxicos, incluso en dosis pequeñas. |",
              },
              {
                heading: "Plantas peligrosas",
                body: "Los lirios (género Lilium), como el lirio de Pascua, son especialmente peligrosos para los gatos. Incluso una pequeña cantidad de flores, hojas, polen o agua del jarrón puede causar insuficiencia renal aguda.\n\nOtras plantas de riesgo son las azaleas, los rododendros, el tejo, la digital, el oleandro, el eucalipto, la palma de sagú y la poinsettia. La toxicidad depende de la especie y de la cantidad. Ante cualquier sospecha, retira la planta de su alcance, guarda una muestra y llama de inmediato al veterinario o a un centro de toxicología.",
              },
              {
                heading: "Mantenerlo bien hidratado",
                body: "Los gatos beben poco y consiguen buena parte del agua de sus presas. Por eso la comida húmeda ayuda a que beba más agua en total y a que su orina esté más diluida.\n\n| **Qué hacer** | **Cómo** |\n| Agua fresca todos los días | Cámbiala con frecuencia. |\n| Varios recipientes | Si acepta una fuente de agua, también puede servir. |\n| Bebederos lejos de la bandeja | Así no los asocia con un sitio sucio ni con ruido. |\n| Comida húmeda | Sobre todo si come mayormente pienso. |\n| Varias estaciones de recursos | Aplica la regla de un recurso por gato, más uno extra. |\n\nPara decidir entre comida húmeda y seca, lee [Comida húmeda vs. pienso seco](/categoria/alimentacion/dietas/comida-humeda-vs-seca).",
              },
              {
                heading: "Cómo elegir su alimento",
                body: "Busca un producto con la etiqueta de completo y equilibrado, adecuado para su etapa: crecimiento, adulto o senior. No le des suplementos de vitaminas, minerales ni taurina por tu cuenta. Un exceso también puede hacer daño.\n\nSi tu gato tiene enfermedad renal, diabetes, obesidad, alergias o problemas urinarios, la dieta debe elegirla un veterinario o un nutricionista veterinario. En estos casos, una dieta terapéutica comercial suele ser más segura que improvisar una receta casera.",
              },
            ]
          }
        ]
      },
      {
        slug: "enriquecimiento-ambiental",
        label: "Enriquecimiento Ambiental",
        topics: [
          {
            slug: "5-pilares-ambientales",
            title: "Enriquecimiento Ambiental y Bienestar Conductual",
            intro: "Un gato se siente bien cuando tiene un lugar seguro, varios recursos, ocasiones para jugar como lo haría en la naturaleza, un trato predecible y un entorno que respeta su olfato. Estas no son cosas extra: son necesidades que ayudan a prevenir el estrés y los problemas de conducta.",
            sections: [
              {
                heading: "Los cinco pilares",
                image: "/images/bienestar-gatitos.webp",
                body: "Las guías de la AAFP y la ISFM resumen el bienestar felino en cinco pilares:\n\n| **Pilar** | **Qué significa en casa** |\n| 1. Espacio seguro y en altura | Lugares para esconderse, descansar y observar sin sentirse atrapado. |\n| 2. Recursos repartidos | Un recurso por gato, más uno extra, en lugares separados. |\n| 3. Juego que imita la caza | Acechar, perseguir, atrapar y “consumir”. |\n| 4. Interacción positiva y predecible | Trato tranquilo, respeto a sus señales y refuerzo positivo. |\n| 5. Respeto por el olfato | Evitar olores fuertes y cambios bruscos. |",
              },
              {
                heading: "1. Un espacio seguro y en altura",
                body: "Los gatos necesitan sitios para esconderse, descansar y mirar el mundo sin sentirse atrapados. Repisas, torres, cajas, túneles y camas cerradas les dan control y una salida si hay ruidos, visitas u otros gatos.\n\nLa altura ayuda, pero solo si el gato puede subir y bajar sin obstáculos ni lugares donde lo puedan sorprender. Si hay varios gatos en casa, ofrece al menos un refugio por gato, más uno adicional, en distintas zonas.\n\nPara entender el comportamiento detrás de estas necesidades, lee [Comportamiento Felino: Cómo entender y cuidar mejor a tu gato](/categoria/comportamiento/interio-exterior/guia-para-entender-y-cuidar).",
              },
              {
                heading: "2. Recursos repartidos (la regla n+1)",
                body: "La regla práctica es tener un recurso por gato, más uno extra, y ponerlos en lugares separados.\n\n| **Recurso** | **Cómo organizarlo** |\n| Bandejas | Una por gato, más una extra, en zonas tranquilas y lejos de la comida. No las pongas todas juntas. |\n| Comida y agua | En recipientes separados entre sí y lejos de la bandeja. Así se reduce la competencia. |\n| Rascadores | Verticales y horizontales, de sisal, cartón o madera, cerca de las zonas de descanso. |\n| Camas y escondites | Varios, con más de una salida, para que pueda elegir y retirarse sin sentirse acorralado. |",
              },
              {
                heading: "3. Juego que imita la caza",
                body: "El juego debe seguir la secuencia de la caza: acechar, perseguir, atrapar y “comer”. Las cañas con plumas, los ratones de tela, los juguetes que se mueven de forma impredecible y los comederos con rompecabezas funcionan mejor que un juguete quieto.\n\nSi usas un puntero láser, ten cuidado: el gato nunca lo atrapa, y eso puede frustrarlo. Termina la sesión con un juguete o un premio que pueda tocar.\n\nNo hay una dosis universal. Suelen ser mejores varias sesiones cortas al día que una sola larga. Adapta la intensidad a la edad, la salud y los gustos de tu gato. Los gatos mayores también necesitan exploración y actividad suave.",
              },
              {
                heading: "4. Trato positivo y predecible",
                body: "Deja que el gato se acerque cuando quiera, y respeta sus señales de “no”: orejas hacia atrás, cola tensa, alejarse, bufar o esconderse.\n\nUsa refuerzo positivo: premios, juego y caricias solo si él las busca, con una voz tranquila. Evita los gritos, los castigos, rociarlo con agua o encerrarlo. No le enseñan nada útil y pueden aumentar el miedo.\n\nEl parpadeo lento puede ser una señal amable. Pero no reemplaza su permiso: si se aleja, no lo persigas.",
              },
              {
                heading: "5. Respeto por el olfato",
                body: "El olfato es una de las formas más importantes en que se comunican los gatos. Se frotan para dejar señales y reconocer personas, lugares y objetos. Si se limpia en exceso o se usan perfumes fuertes, esas señales se borran y el gato puede sentirse inseguro.\n\nEvita los ambientadores fuertes y los cambios bruscos de muebles o de sitio de los recursos. Después de una mudanza, una visita al veterinario o la llegada de otra mascota, ofrécele objetos con olores conocidos y haz los cambios poco a poco.\n\nLas feromonas sintéticas, como Feliway®, pueden ayudar en algunos gatos durante momentos de estrés. No son una solución para todo: funcionan mejor junto con un entorno seguro y un buen manejo.",
              },
              {
                heading: "Cuándo sospechar algo más que conducta",
                body: "Si tu gato se esconde mucho, deja de usar la bandeja, muestra agresividad o cambia de repente, consulta primero con el veterinario. Puede haber dolor o una enfermedad detrás, y no conviene asumir que es solo un problema de conducta.",
              },
            ]
          }
        ]
      },
      {
        slug: "gestion-reproductiva",
        label: "Gestión Reproductiva y TNR",
        topics: [
          {
            slug: "esterilizacion-evidencia",
            title: "Gestión Reproductiva y Control Poblacional Ético",
            intro: "Esterilizar es la forma más eficaz de evitar camadas no deseadas, reducir enfermedades reproductivas y disminuir conductas ligadas a las hormonas. En los gatos de la calle, el enfoque más ético combina el programa TNR, la adopción de gatos sociables y cuidados constantes.",
            sections: [
              {
                heading: "Qué es la esterilización",
                image: "/images/control-poblacional-gatitos-v2.webp",
                body: "En las gatas, la cirugía habitual es la ovariohisterectomía: se retiran los ovarios y el útero. En los machos, la castración consiste en retirar los dos testículos. Las dos eliminan la capacidad de tener crías.\n\nLas organizaciones veterinarias como la AVMA, la AAHA, la AAFP y la ASV recomiendan esterilizar a los gatos que no van a criar antes de los 5 meses, alrededor de los 4 meses. En refugios y programas bien organizados puede hacerse con seguridad desde las 6 u 8 semanas.",
              },
              {
                heading: "Beneficios con respaldo",
                body: "| **Beneficio** | **Qué significa** |\n| Evita embarazos no deseados | Las gatas pueden entrar en celo desde los 4 o 5 meses. Esperar aumenta el riesgo de camadas accidentales. |\n| Previene la piómetra | Quitar el útero y los ovarios elimina el riesgo de esta infección uterina grave. |\n| Reduce los tumores de mama | Cuanto antes se esteriliza, sobre todo antes del primer celo, menor es el riesgo de cáncer mamario. La reducción depende de la edad; no es un porcentaje fijo para todos los casos. |\n| Elimina el cáncer de testículos | Al retirar los testículos, desaparece el riesgo de estos tumores. |\n| Reduce las conductas hormonales | Disminuyen las escapadas, las peleas, los maullidos de celo y el marcado con orina. |\n| Ayuda al control de la población | Una esterilización temprana y generalizada reduce las entradas y los sacrificios en refugios. |\n\nPara decidir la edad de la cirugía, lee [¿Por qué castrar a los gatitos?](/categoria/castracion/guia-infantil/por-que-castrar).",
              },
              {
                heading: "Mitos y realidades",
                body: "| **Mito** | **Realidad** |\n| “Es bueno que tenga una camada antes.” | No hay beneficio médico ni de conducta conocido en esperar a un celo o a una camada. |\n| “Los castrados engordan sí o sí.” | Pueden necesitar menos energía después de la cirugía. El peso depende de la ración, la dieta, la actividad y el seguimiento. |\n| “Cambia su personalidad.” | Sigue siendo el mismo gato. Lo que suele disminuir son las conductas impulsadas por las hormonas. |\n| “Operar a un gatito joven es cruel.” | Con anestesia, analgesia y protocolos veterinarios, la cirugía temprana es segura. Suele ser rápida y la recuperación, ágil. |",
              },
              {
                heading: "El programa TNR, paso a paso",
                body: "El TNR (captura, esterilización y retorno, en inglés Trap–Neuter–Return) se aplica a los gatos de la calle que no son sociables y viven al aire libre. La idea es atraparlos con cuidado, esterilizarlos, vacunarlos cuando corresponde y devolverlos a su territorio.\n\n| **Paso** | **Qué implica** |\n| 1. Captura humanitaria | Trampas con cebo, cubiertas para reducir el estrés y un seguimiento constante. |\n| 2. Atención veterinaria | Esterilización, analgesia antes, durante y después de la cirugía, vacunas según el protocolo y revisión de salud. |\n| 3. Marcaje | Se corta la punta de una oreja, normalmente la izquierda, mientras el gato está anestesiado. Es una marca visible y permanente, para no volver a capturarlo sin necesidad. |\n| 4. Retorno | El gato vuelve a su territorio, donde las personas que lo cuidan pueden ofrecerle comida, agua y refugio. |\n\nEl TNR por sí solo no reduce la población. Para que funcione, tiene que abarcar una parte alta de la colonia, mantenerse en el tiempo y combinarse con la esterilización de los gatos que tienen hogar y con la adopción de gatitos o gatos sociables.",
              },
              {
                heading: "Tipos de gato en la calle",
                body: "| **Tipo** | **Cómo se le ayuda** |\n| Feral | Nació y creció sin contacto con personas. Suele evitar a la gente y huir. Lo mejor es el TNR, cuidarlo a distancia y respetar su territorio. |\n| Callejero sociable | Tuvo hogar o fue socializado. Busca contacto y acepta caricias. Puede ser candidato a rescate y adopción responsable. |\n| Gatito nacido en la calle | Sus posibilidades de adopción dependen mucho de su edad y de su socialización temprana. Cuanto antes reciba contacto humano positivo, mejor. |",
              },
              {
                heading: "Un control ético",
                body: "El control ético de las poblaciones no se basa en sacrificios masivos. Según las guías de la ISFM, si el retorno no es posible y no hay una alternativa adecuada, conviene considerar la eutanasia humanitaria antes que un encierro prolongado. El envenenamiento y otros métodos crueles no son aceptables.\n\nLo más eficaz es prevenir: esterilizar a tiempo, adoptar de forma responsable y cuidar a los gatos de la comunidad. Así se reducen los gatitos sin hogar y el sufrimiento que los acompaña.",
              },
            ]
          }
        ]
      },
      {
        slug: "vinculo-largo-plazo",
        label: "Vínculo y Compromiso a Largo Plazo",
        topics: [
          {
            slug: "vinculo-humano-felino",
            title: "El Vínculo Humano-Felino y el Compromiso a Largo Plazo",
            intro: "Vivir con un gato puede dar compañía, rutina y afecto. También es un compromiso que puede durar de 15 a 20 años, con cuidados preventivos, un hogar seguro y decisiones difíciles al final de su vida. No es una terapia garantizada ni reemplaza un tratamiento médico.",
            sections: [
              {
                heading: "Lo que la convivencia sí aporta",
                image: "/images/vinculo-humano-gatitos-v2.webp",
                body: "Los beneficios más claros son emocionales y sociales: compañía, menos sensación de soledad, rutinas y mucho afecto.\n\nEn la salud, la evidencia es más modesta. Algunos estudios de seguimiento han encontrado menor riesgo de infarto en personas con gatos, pero no es posible afirmar una relación de causa y efecto. Otros análisis no encuentran una asociación clara.\n\nTampoco hay pruebas sólidas de que el ronroneo baje la presión o cure enfermedades. Un gato puede ronronear cuando está cómodo, pero también cuando tiene dolor o estrés.\n\nEn niños, la relación con las alergias y el asma es compleja. Algunos estudios sugieren efectos distintos según el caso. Por eso no conviene adoptar un gato “para prevenir alergias”.",
              },
              {
                heading: "Prepararse para el final de su vida",
                body: "Algunas señales indican que el gato se está deteriorando: pierde interés por la comida o el agua, se aísla, le cuesta moverse, tiene dolor que no se controla, se orina sin querer, baja de peso poco a poco o tiene más días malos que buenos.\n\nNinguna señal aislada basta para decidir. Lo mejor es valorar el conjunto con el veterinario. Una herramienta útil es la escala HHHHHMM, que mira siete aspectos:\n\n| **Aspecto** | **Qué mirar** |\n| Hurt (dolor) | ¿Está bien controlado? |\n| Hunger (apetito) | ¿Come con ganas? |\n| Hydration (hidratación) | ¿Bebe lo suficiente? |\n| Hygiene (higiene) | ¿Se asea o está descuidado? |\n| Happiness (ánimo) | ¿Disfruta de sus cosas? |\n| Mobility (movilidad) | ¿Puede moverse con comodidad? |\n| More good days than bad (días buenos) | ¿Tiene más días buenos que malos? |\n\nEs una ayuda para pensar, no una fórmula que decida por ti.\n\nHay opciones como los cuidados paliativos, el control del dolor y los ajustes en casa. Cuando el sufrimiento no se puede aliviar, la eutanasia humanitaria puede ser la decisión más amable. Debe centrarse en su bienestar, con apoyo del veterinario. Sentir pena es normal, y acompañarlo con calma hasta el final también es una forma de cuidarlo.",
              },
              {
                heading: "Antes de adoptar",
                body: "| **Qué revisar** | **Por qué importa** |\n| Tiempo y presupuesto | Un gato puede vivir muchos años. Piensa en consultas, vacunas, comida, arena y emergencias. |\n| Entorno seguro | Protege ventanas y balcones con mallas, y ten escondites, rascadores y espacios en altura. |\n| Bandejas | Una por gato, más una extra. |\n| Veterinario | Elige a uno con experiencia en gatos. |\n| Acuerdo en casa | Todos los que viven contigo deben estar de acuerdo. Revisa también alergias y las normas de tu vivienda. |",
              },
              {
                heading: "Los primeros 30 días",
                body: "| **Qué hacer** | **Cómo** |\n| Primera revisión | Pide una consulta inicial, un microchip y un plan de vacunas y desparasitación. |\n| Cambios de comida | Hazlos poco a poco, con horarios fijos para comer, jugar y descansar. |\n| Espacio tranquilo | Al principio, dale una habitación tranquila para que explore a su ritmo. |\n| Confianza | No lo fuerces a tocarte. Usa juego, premios y rutinas predecibles. |\n\nSi acabas de adoptar, revisa [Bienvenido a casa: cómo cuidar a tu nuevo gato desde el primer día](/categoria/adopcion/bienvenida/guia-bienvenida-cuidados).",
              },
              {
                heading: "Mantenimiento de cada año",
                body: "Haz al menos una revisión preventiva al año. Si es mayor o tiene una enfermedad crónica, puede necesitar controles cada seis meses.\n\nRevisa su peso, su condición corporal, sus dientes, su dieta y su entorno. Mantén al día las vacunas y la prevención de parásitos según tu veterinario y el estilo de vida del gato.",
              },
              {
                heading: "Señales de alarma",
                body: "Pide atención urgente si tu gato:\n\n| **Señal** | **Qué hacer** |\n| No come ni bebe durante más de 24 horas | Consulta de inmediato. |\n| Vomita o tiene diarrea que no para, con sangre o con debilidad | Consulta de inmediato. |\n| Hace esfuerzos para orinar, orina muy poco o no orina | Es una urgencia. En los machos puede ser una obstrucción, que pone la vida en riesgo. |\n| Está muy decaído, respira con dificultad, tiene convulsiones o dolor fuerte | Acude a urgencias veterinarias. |\n| Tiene una temperatura fuera de lo normal | En gatos, lo normal suele estar entre 37,5 y 39,2 °C. Si se sale de ese rango, consulta. |",
              },
              {
                heading: "Un compromiso para toda la vida",
                body: "Un gato no es un adorno ni una solución temporal. Es un ser sensible, con necesidades físicas, emocionales y de salud durante toda su vida.\n\nEl vínculo se construye respetando su lenguaje corporal, con cuidados preventivos, juego y un ambiente enriquecido. Y también con una planificación honesta del tiempo y de los recursos que necesita.",
              },
            ]
          }
        ]
      }
    ]
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getSubcategory = (catSlug: string, subSlug: string) =>
  getCategory(catSlug)?.subcategories.find((s) => s.slug === subSlug);

export const getTopic = (catSlug: string, subSlug: string, topicSlug: string) =>
  getSubcategory(catSlug, subSlug)?.topics.find((t) => t.slug === topicSlug);