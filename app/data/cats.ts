// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface Section {
  heading: string;
  body: string;
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
  emoji: string;
  color: string;
  bg: string;
  description: string;
  subcategories: Subcategory[];
}

// ─── Datos ────────────────────────────────────────────────────────────────────

export const categories: Category[] = [
  {
    slug: "salud",
    label: "Salud",
    emoji: "",
    color: "#7a9e7e",
    bg: "#eef4ef",
    description: "Prevención, enfermedades y cuidados médicos",
    subcategories: [
      {
        slug: "prevencion",
        label: "Prevención",
        topics: [
          {
            slug: "vacunacion",
            title: "Vacunación felina",
            intro: "La vacunación es la herramienta más efectiva para proteger a tu gato de enfermedades graves. Conocer el calendario y las vacunas obligatorias marca la diferencia entre una vida larga y una llena de complicaciones.",
            sections: [
              {
                heading: "Vacunas obligatorias",
                body: "La vacuna triple felina (Rinotraqueítis, Calicivirus y Panleucopenia) es la base de cualquier protocolo. Se administra a las 8, 12 y 16 semanas de vida, con refuerzos anuales o cada 3 años según el producto.",
              },
              {
                heading: "Vacunas opcionales recomendadas",
                body: "La vacuna contra la Leucemia Felina (FeLV) es muy recomendable para gatos que salen al exterior o conviven con otros gatos. La antirrábica es obligatoria en muchos países y recomendable en Chile.",
              },
              {
                heading: "¿Qué pasa si me salto una dosis?",
                body: "Si el gato adulto lleva más de 3 años sin vacunarse, se recomienda repetir la serie inicial. Consulta siempre con tu veterinario antes de administrar cualquier vacuna.",
              },
            ],
          },
          {
            slug: "desparasitacion",
            title: "Desparasitación interna y externa",
            intro: "Los parásitos son uno de los problemas más comunes y fácilmente prevenibles en gatos. Un plan de desparasitación regular protege tanto al gato como a las personas del hogar.",
            sections: [
              {
                heading: "Parásitos internos",
                body: "Los más frecuentes son los áscaris (lombrices), tenias y Toxoplasma. Se tratan con antiparasitarios orales cada 3–6 meses en adultos, y mensualmente en cachorros hasta los 6 meses.",
              },
              {
                heading: "Parásitos externos",
                body: "Pulgas, garrapatas y ácaros del oído son los más comunes. Las pipetas spot-on mensuales son la solución más práctica. Los collares antiparasitarios ofrecen protección prolongada pero requieren ajuste correcto.",
              },
              {
                heading: "Gatos de interior vs. exterior",
                body: "Los gatos de interior tienen menor riesgo, pero no están exentos: las pulgas pueden entrar en ropa y zapatos. Se recomienda desparasitación interna 2 veces al año y externa 4 veces al año como mínimo.",
              },
            ],
          },
          {
            slug: "primeros-auxilios",
            title: "Primeros auxilios felinos",
            intro: "Saber actuar en una emergencia puede salvar la vida de tu gato. Estos conocimientos básicos te preparan para los momentos más críticos hasta llegar al veterinario.",
            sections: [
              {
                heading: "El botiquín básico",
                body: "Todo hogar con gatos debería tener: solución salina, gasas estériles, antiséptico sin alcohol (como clorhexidina diluida), termómetro digital y el número de una clínica veterinaria de urgencias.",
              },
              {
                heading: "Señales de emergencia",
                body: "Lleva a tu gato al veterinario de urgencias si presenta: dificultad para respirar, pérdida de conocimiento, convulsiones, incapacidad para orinar durante más de 12 horas, sangrado que no cesa o posible ingestión de veneno.",
              },
              {
                heading: "Lo que NUNCA debes hacer",
                body: "No administres ibuprofeno, paracetamol ni aspirina a un gato: son mortales para ellos. No intentes inducir el vómito sin indicación veterinaria. No pongas alcohol en heridas abiertas.",
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
            intro: "La insuficiencia renal crónica es la principal causa de muerte en gatos mayores de 7 años. Detectarla a tiempo puede añadir años de calidad de vida a tu compañero.",
            sections: [
              {
                heading: "Señales de alerta",
                body: "Beber mucho agua, orinar con mayor frecuencia, pérdida de peso progresiva, pelo opaco y falta de apetito son los signos más comunes. Muchos gatos no muestran síntomas hasta perder el 75% de la función renal.",
              },
              {
                heading: "Diagnóstico y seguimiento",
                body: "Un análisis de sangre y orina anual a partir de los 7 años es la mejor herramienta de detección. El biomarcador SDMA permite detectar daño renal meses antes que los marcadores tradicionales.",
              },
              {
                heading: "Manejo y tratamiento",
                body: "No tiene cura, pero se puede gestionar con dieta renal baja en fósforo y proteína, hidratación (comida húmeda o fluidos subcutáneos en casa), suplementos y revisiones frecuentes.",
              },
            ],
          },
          {
            slug: "diabetes-felina",
            title: "Diabetes felina",
            intro: "La diabetes en gatos es más común de lo que se piensa, especialmente en machos castrados con sobrepeso. La buena noticia: con manejo adecuado, muchos gatos pueden entrar en remisión.",
            sections: [
              {
                heading: "Factores de riesgo",
                body: "Obesidad, edad avanzada, sexo masculino y dietas altas en carbohidratos son los principales factores. Los gatos Burmeses tienen predisposición genética.",
              },
              {
                heading: "Síntomas",
                body: "Mucha sed, mucha orina, pérdida de peso a pesar de comer bien y debilidad en las patas traseras (neuropatía diabética) son las señales más características.",
              },
              {
                heading: "Tratamiento y remisión",
                body: "Insulina diaria, dieta baja en carbohidratos (comida húmeda de calidad) y monitoreo de glucosa en casa son la base. Hasta el 90% de los gatos pueden lograr remisión con tratamiento precoz y riguroso.",
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
            intro: "La enfermedad periodontal afecta al 70% de los gatos mayores de 3 años y es una de las causas más ignoradas de dolor crónico y deterioro de la salud general.",
            sections: [
              {
                heading: "Por qué es importante",
                body: "Las bacterias de la boca entran al torrente sanguíneo y pueden dañar riñones, corazón e hígado. Un gato con dolor dental come menos, está más irritable y su calidad de vida se resiente enormemente.",
              },
              {
                heading: "Prevención en casa",
                body: "Cepillar los dientes 3 veces por semana con pasta dental felina (nunca humana) es el método más efectivo. Los snacks dentales y los juguetes masticables son un complemento útil pero no suficiente por sí solos.",
              },
              {
                heading: "Limpieza profesional",
                body: "La limpieza dental veterinaria bajo anestesia se recomienda anualmente a partir de los 3 años. Los gatos con predisposición (Persas, Siameses) pueden necesitarla antes.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "comportamiento",
    label: "Comportamiento",
    emoji: "",
    color: "#b85c38",
    bg: "#faefeb",
    description: "Lenguaje, conducta y psicología felina",
    subcategories: [
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
                body: "Cola en alto: confianza y saludo afectuoso. Cola en alto con punta curvada: felicidad máxima. Cola baja: miedo o sumisión. Cola erizada y arqueada: amenaza o terror. Cola en movimiento lento: concentración o irritación ligera.",
              },
              {
                heading: "Las orejas no mienten",
                body: "Orejas hacia adelante: alerta e interés. Orejas planas hacia atrás: miedo o agresión defensiva. Orejas giradas hacia los lados ('modo avión'): irritación creciente, señal de que el gato necesita espacio.",
              },
              {
                heading: "Los bigotes y los ojos",
                body: "Bigotes hacia adelante indican curiosidad o excitación. Bigotes pegados a la cara señalan miedo. Pupilas dilatadas pueden indicar excitación, miedo o juego. El parpadeo lento es una señal activa de confianza y afecto.",
              },
            ],
          },
          {
            slug: "vocalizaciones",
            title: "Vocalizaciones y su significado",
            intro: "Los gatos adultos casi no se maúllan entre sí: el maullido es un lenguaje que desarrollaron específicamente para comunicarse con humanos. Cada gato tiene su vocabulario propio.",
            sections: [
              {
                heading: "El maullido",
                body: "Un maullido corto y agudo suele ser un saludo. Uno largo y sostenido, una demanda (comida, atención). Los maullidos repetitivos pueden indicar dolor, desorientación (especialmente en gatos mayores) o angustia.",
              },
              {
                heading: "El ronroneo",
                body: "No siempre indica felicidad: los gatos también ronronean cuando están estresados, enfermos o en proceso de recuperación. El ronroneo tiene propiedades terapéuticas demostradas entre 25 y 50 Hz, frecuencia que favorece la regeneración ósea.",
              },
              {
                heading: "Otros sonidos",
                body: "El trino o chirrido es un saludo cálido o respuesta a lo que les hablas. El chatter (castañeo de dientes) aparece al ver pájaros o presas: es frustración y excitación de caza. El bufido y el escupido son avisos claros de que el gato se siente amenazado.",
              },
            ],
          },
          {
            slug: "parpadeo-lento",
            title: "El parpadeo lento: el beso felino",
            intro: "El parpadeo lento es una de las señales más estudiadas y hermosas del repertorio felino. Un estudio de 2020 en la Universidad de Sussex demostró experimentalmente que los humanos podemos iniciar esta comunicación con cualquier gato.",
            sections: [
              {
                heading: "Qué significa",
                body: "Cuando un gato te mira y parpadea lentamente, te está diciendo que se siente seguro y a gusto en tu presencia. Es el equivalente felino de una sonrisa relajada y un gesto de confianza plena.",
              },
              {
                heading: "Cómo hacerlo",
                body: "Mira al gato con una expresión relajada. Cuando tengas contacto visual, entrecierra lentamente los ojos hasta casi cerrarlos y luego ábrelos de nuevo. Espera. Si el gato responde con el mismo gesto, el canal de comunicación está abierto.",
              },
              {
                heading: "Con gatos desconocidos",
                body: "Funciona incluso con gatos que no te conocen. En refugios y colonias, el parpadeo lento puede ser la diferencia entre un gato que se acerca voluntariamente y uno que huye. Es una herramienta poderosa para ganar confianza.",
              },
            ],
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
            intro: "Arañar no es mala conducta ni destructividad: es una necesidad biológica fundamental. Entender por qué lo hacen es el primer paso para redirigirlo hacia lugares apropiados.",
            sections: [
              {
                heading: "Las tres razones del arañado",
                body: "Los gatos arañan para marcar territorio visualmente y con feromonas de las almohadillas, para estirar músculos y tendones de forma saludable, y para eliminar las capas muertas de las uñas. Es un comportamiento instintivo que no puede eliminarse, solo redirigirse.",
              },
              {
                heading: "Cómo proteger el mobiliario",
                body: "Coloca rascadores en los lugares que el gato ya frecuenta para arañar. Usa feromonas sintéticas (Feliway) en las superficies que quieres proteger. Cubre temporalmente los muebles con telas o protectores adhesivos no pegajosos para redirigir la conducta.",
              },
              {
                heading: "Qué tipo de rascador funciona mejor",
                body: "Cada gato tiene su preferencia: algunos necesitan rascadores verticales altos (que les permitan estirarse completamente), otros prefieren horizontales. La sisal suele ser el material favorito, aunque algunos prefieren cartón o alfombra. Ofrece variedad al principio.",
              },
            ],
          },
          {
            slug: "amasar",
            title: "El amasado: patas que hacen pan",
            intro: "El amasado, ese movimiento rítmico de presionar alternadamente con las patas sobre superficies blandas, es uno de los comportamientos más tiernos y cargados de significado del repertorio felino.",
            sections: [
              {
                heading: "El origen del comportamiento",
                body: "Los gatitos amasan el vientre de la madre para estimular la producción de leche. En adultos, es un comportamiento de confort que persiste de la infancia: lo hacen cuando se sienten seguros, felices y relajados.",
              },
              {
                heading: "¿Qué indica cuando amasan sobre ti?",
                body: "Es una de las mayores expresiones de afecto y confianza. Tu gato te está tratando como a su madre y diciéndote que se siente completamente seguro en tu presencia. Es un honor felino.",
              },
              {
                heading: "Variaciones del amasado",
                body: "Algunos gatos amasan mantas, peluches o incluso el aire. Otros solo amasan sobre personas específicas. Hay gatos que amasan con las cuatro patas, otros solo con las delanteras. Todas las variantes son completamente normales.",
              },
            ],
          },
        ],
      },
      {
        slug: "entrenamiento",
        label: "Entrenamiento",
        topics: [
          {
            slug: "clicker-training",
            title: "Clicker training para gatos",
            intro: "Contrario al mito popular, los gatos son perfectamente entrenables con refuerzo positivo. El clicker training no solo enseña trucos: fortalece el vínculo, estimula mentalmente y reduce problemas de conducta.",
            sections: [
              {
                heading: "Cómo funciona el clicker",
                body: "El clic marca el momento exacto del comportamiento correcto, y va siempre seguido de un premio. El gato aprende que ese sonido específico predice una recompensa, lo que lo motiva a repetir la conducta. La precisión del momento es clave.",
              },
              {
                heading: "Por dónde empezar",
                body: "Primero 'carga' el clicker: haz clic y da premio 10 veces seguidas sin pedir nada. Luego empieza con conductas simples que el gato ya hace naturalmente: sentarse, tocarte la mano con la nariz. Sesiones de 2-5 minutos, 2-3 veces al día.",
              },
              {
                heading: "Trucos más avanzados",
                body: "Una vez dominado lo básico, puedes enseñar: dar la pata, dar la vuelta, saltar obstáculos, entrar voluntariamente al transportín, o incluso usar botones de comunicación. No hay límite si las sesiones son cortas y positivas.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "alimentacion",
    label: "Alimentación",
    emoji: "",
    color: "#d4853a",
    bg: "#fff3e6",
    description: "Nutrición, dietas y lo que no pueden comer",
    subcategories: [
      {
        slug: "dietas",
        label: "Tipos de dieta",
        topics: [
          {
            slug: "comida-humeda-vs-seca",
            title: "Comida húmeda vs. pienso seco",
            intro: "Esta es una de las preguntas más frecuentes y debatidas entre dueños de gatos. La respuesta importa porque los gatos tienen una relación particular con el agua que hace que el tipo de alimento impacte directamente su salud renal.",
            sections: [
              {
                heading: "La naturaleza del gato y el agua",
                body: "Los gatos evolucionaron en ambientes áridos y obtienen la mayor parte del agua de sus presas. Su sed está 'calibrada' para comida con 70% de humedad. El pienso seco tiene solo un 10%, lo que puede llevar a deshidratación crónica y problemas renales y urinarios.",
              },
              {
                heading: "Ventajas de la comida húmeda",
                body: "Mayor hidratación, mayor saciedad con menos calorías, más parecida a la dieta natural, mejor para gatos con tendencia a problemas urinarios o renales. La mayoría de los veterinarios la recomiendan como alimento principal.",
              },
              {
                heading: "El papel del pienso seco",
                body: "No es malo, pero no debería ser el único alimento. Puede ser útil como complemento, para juguetes dispensadores o como snack. Elige piensos con alto porcentaje de proteína animal (no vegetal) y sin cereales como primer ingrediente.",
              },
            ],
          },
          {
            slug: "dieta-barf",
            title: "Dieta BARF para gatos",
            intro: "La dieta BARF (Biologically Appropriate Raw Food) se basa en alimentar al gato con carne cruda, huesos carnosos y vísceras, imitando la dieta de sus ancestros salvajes. Tiene defensores apasionados y detractores con argumentos sólidos.",
            sections: [
              {
                heading: "Fundamentos de la BARF",
                body: "La dieta ideal para un gato BARF incluye aproximadamente 70% de carne magra, 10% de huesos carnosos (nunca cocidos), 10% de vísceras (hígado, corazón) y el 10% restante de otros tejidos. Requiere suplementación cuidadosa con taurina, calcio y vitaminas.",
              },
              {
                heading: "Beneficios reportados",
                body: "Mejora del pelaje, menor producción de heces, mejor hidratación, dientes más limpios y mayor energía son los beneficios más citados por quienes la practican. Algunos estudios sugieren menor riesgo de obesidad.",
              },
              {
                heading: "Riesgos a considerar",
                body: "Contaminación bacteriana (Salmonella, Listeria), desequilibrios nutricionales si no se formula correctamente, y riesgo de asfixia con huesos. No se recomienda para gatos inmunodeprimidos, en tratamiento oncológico o mayores con sistemas digestivos comprometidos.",
              },
            ],
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
            intro: "Muchos alimentos completamente seguros para humanos son peligrosos o letales para los gatos. Conocer esta lista puede salvar la vida de tu compañero.",
            sections: [
              {
                heading: "Peligro extremo: tóxicos graves",
                body: "Cebolla, ajo, puerro y cebollín (en todas sus formas: crudos, cocinados o en polvo) destruyen los glóbulos rojos. Chocolate y café contienen teobromina y cafeína que pueden causar convulsiones y muerte. Uvas y pasas causan insuficiencia renal aguda por razones aún desconocidas.",
              },
              {
                heading: "Peligro moderado",
                body: "La leche de vaca causa diarrea en la mayoría de los gatos adultos, que son intolerantes a la lactosa. El aguacate contiene persina, tóxica para muchos animales. El alcohol en cualquier cantidad es peligroso. Las nueces de macadamia pueden causar debilidad y fiebre.",
              },
              {
                heading: "Lo que sí pueden comer como premio",
                body: "Pequeñas cantidades de pollo o pavo cocido sin hueso, salmón o atún cocido (no enlatado en aceite con sal), zanahoria cocida, calabaza, arándanos y pepino son opciones seguras como snack ocasional.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "juego",
    label: "Juego",
    emoji: "",
    color: "#9b6bb5",
    bg: "#f3eef8",
    description: "Estimulación, juguetes y enriquecimiento",
    subcategories: [
      {
        slug: "importancia",
        label: "Por qué es vital",
        topics: [
          {
            slug: "juego-cachorros",
            title: "El juego en cachorros: la base de todo",
            intro: "Los primeros seis meses de vida de un gato son un período crítico de desarrollo. Lo que aprenda durante el juego en esta etapa determinará en gran medida cómo se relacionará con humanos y otros animales el resto de su vida.",
            sections: [
              {
                heading: "La ventana de socialización",
                body: "Entre las 2 y 9 semanas de vida, el gato aprende qué es normal en su mundo. Un cachorro que interactúa con personas, otros gatos, ruidos domésticos y experiencias variadas durante este período será un adulto más seguro y adaptable.",
              },
              {
                heading: "El error más común: las manos como juguete",
                body: "Usar las manos o los pies para jugar con un cachorro parece inofensivo, pero enseña que la piel humana es una presa válida. Cuando ese gatito pese 5 kg, los mordiscos y arañazos serán dolorosos y el comportamiento difícil de corregir. Usa siempre juguetes con distancia.",
              },
              {
                heading: "Juego como prevención de problemas",
                body: "Un gato que no juega suficiente canaliza su energía de caza en conductas problemáticas: atacar tobillos, destruir objetos, agresión redirigida. 2 sesiones de juego de 15 minutos al día, especialmente antes de dormir, son el mejor antídoto.",
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
            intro: "Las cañas con plumas, ratones o gusanos colgantes son los juguetes más efectivos porque permiten simular la secuencia de caza completa. Son insustituibles en el repertorio de cualquier gato.",
            sections: [
              {
                heading: "Por qué funcionan tan bien",
                body: "Activan el instinto de caza en su totalidad: el movimiento irregular imita el de una presa real. El gato puede acechar, perseguir, atrapar y 'matar'. Esta secuencia completa libera endorfinas y satisface profundamente.",
              },
              {
                heading: "Cómo moverlas correctamente",
                body: "El error más común es moverlas demasiado rápido y sin parar. Las presas reales se detienen, se esconden, se mueven en ángulos impredecibles. Simula eso: pause, escóndela detrás de un cojín, hazla surgir de repente, déjala moverse despacio.",
              },
              {
                heading: "Terminar la sesión bien",
                body: "Siempre termina permitiendo que el gato 'atrape' y 'mate' el juguete varias veces al final. Un gato que nunca atrapa la presa se frustra. Después del juego, un snack pequeño completa el ciclo natural: cazar → comer → asearse → dormir.",
              },
            ],
          },
          {
            slug: "puzzles-de-comida",
            title: "Puzzles de comida e inteligencia",
            intro: "Los puzzles alimentarios son uno de los enriquecimientos más infravalorados. En la naturaleza, un gato pasa entre 6 y 8 horas cazando. Un comedero convencional resuelve esa necesidad en 30 segundos, dejando al gato sin estimulación mental.",
            sections: [
              {
                heading: "Beneficios comprobados",
                body: "Reducen la ansiedad y el aburrimiento, ralentizan la ingesta (previniendo vómitos por comer demasiado rápido), estimulan cognitivamente, fomentan el movimiento y pueden reducir la obesidad.",
              },
              {
                heading: "Cómo empezar",
                body: "Comienza con puzzles muy fáciles: una bandeja con compartimentos, una pelota dispensadora simple. Si el puzzle es muy difícil desde el principio, el gato se frustrará y lo rechazará. Aumenta la dificultad progresivamente durante semanas.",
              },
              {
                heading: "Puzzles caseros",
                body: "No necesitas comprar nada: una caja de cartón con agujeros, una bandeja de hielos con croquetas, una botella de plástico con pequeños orificios, o esconder premios bajo vasos son puzzles efectivos y gratuitos.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "etapas",
    label: "Etapas de vida",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Cachorro, adulto, senior y sus necesidades",
    subcategories: [
      {
        slug: "gatito",
        label: "Gatito (0–6 meses)",
        topics: [
          {
            slug: "primeras-semanas",
            title: "Las primeras semanas de vida",
            intro: "Los primeros dos meses de vida de un gato son extraordinariamente intensos. En ese tiempo, un ser completamente dependiente e indefenso se convierte en un animal ágil y curioso. Entender esta etapa es fundamental para cualquier criador o adoptante.",
            sections: [
              {
                heading: "0–2 semanas: periodo neonatal",
                body: "Los gatitos nacen ciegos, sordos y sin capacidad de regular su temperatura. Dependen completamente de la madre para alimentarse (cada 2 horas), calentarse y estimular la micción y defecación. Su único sentido funcional al nacer es el olfato.",
              },
              {
                heading: "2–7 semanas: socialización primaria",
                body: "Los ojos se abren entre los 10 y 16 días. En este período el sistema nervioso se desarrolla a máxima velocidad. Las experiencias positivas con personas, sonidos y entornos variados durante estas semanas determinan la personalidad adulta.",
              },
              {
                heading: "7–12 semanas: independencia progresiva",
                body: "El destete se completa alrededor de las 8 semanas. Es el momento ideal para la adopción: suficientemente maduro para separarse de la madre, pero en plena ventana de socialización con humanos. Separar antes de las 8 semanas aumenta el riesgo de problemas de conducta.",
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
            intro: "Un gato de 10 años equivale aproximadamente a una persona de 56 años. A partir de los 15 años, a un humano de más de 76. Sus necesidades cambian significativamente y merece adaptaciones en su entorno y rutina médica.",
            sections: [
              {
                heading: "Cambios físicos esperados",
                body: "Menor flexibilidad articular, pelaje menos brillante, posible pérdida de masa muscular, cambios en los patrones de sueño, reducción de la agudeza sensorial y mayor vulnerabilidad a enfermedades crónicas. No todos los cambios son patológicos: algunos son simplemente el envejecimiento normal.",
              },
              {
                heading: "Adaptaciones del entorno",
                body: "Rampas o escalones para acceder a lugares altos, caja de arena con entrada baja, recipientes de comida y agua elevados para reducir la tensión cervical, zonas de descanso cálidas y accesibles. Los cambios sutiles en el entorno marcan una gran diferencia en su calidad de vida.",
              },
              {
                heading: "Seguimiento médico intensificado",
                body: "A partir de los 10 años, las revisiones deben ser semestrales e incluir siempre análisis de sangre completo y perfil de tiroides. La detección temprana de hipertiroidismo, enfermedad renal o diabetes puede añadir años de calidad de vida.",
              },
            ],
          },
        ],
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getSubcategory = (catSlug: string, subSlug: string) =>
  getCategory(catSlug)?.subcategories.find((s) => s.slug === subSlug);

export const getTopic = (catSlug: string, subSlug: string, topicSlug: string) =>
  getSubcategory(catSlug, subSlug)?.topics.find((t) => t.slug === topicSlug);