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
 {
  slug: "alergia",
  label: "Alergias",
  topics: [
 
    {
      slug: "guia-alergia-gatos",
      title: "Alergia a los gatos: Guía práctica para convivir",
      intro: "Las alergias a las mascotas afectan entre el 15% y el 30% de las personas. Ser alérgico a los gatos es dos veces más frecuente que a los perros, pero con manejo adecuado la convivencia es posible.",
      sections: [
        {
          heading: "La causa: Proteína Fel d 1",
          body: "La alergia no es causada por el pelo, sino por la proteína Fel d 1 producida en la piel, saliva y orina. Se propaga cuando el gato se lame y la proteína se dispersa en el aire a través de la caspa (piel muerta). Los machos producen más que las hembras, y la castración reduce estos niveles.",
        },
        {
          heading: "Síntomas y Diagnóstico",
          body: "Las reacciones varían desde urticaria y picazón hasta estornudos, ojos llorosos y ataques de asma. Es vital acudir a un alergólogo para realizar pruebas cutáneas, de sangre o espirometrías, ya que el culpable podría ser el polvo o el polen y no el gato.",
        },
        {
          heading: "Hogar y Zonas Libres",
          body: "Crea un 'santuario' manteniendo el dormitorio cerrado al gato. Elimina alfombras o usa solo las que se puedan lavar con agua caliente. Es fundamental usar aspiradoras con filtro HEPA y purificadores de aire al menos 4 horas al día.",
        },
        {
          heading: "Cuidado Directo y Productos",
          body: "El cepillado debe hacerlo alguien no alérgico fuera de casa. Los baños semanales y el uso de productos neutralizantes (como Vetriderm) sobre el pelaje ayudan a eliminar restos de saliva. La castración y el corte de pelo periódico en gatos de pelo largo también son estrategias efectivas.",
        },
        {
          heading: "Tratamientos Avanzados",
          body: "Consulta sobre la inmunoterapia (vacunas de desensibilización), que son eficaces a largo plazo. Si a pesar de todas las medidas de limpieza y tratamiento médico la salud se resiente gravemente, la decisión más responsable podría ser buscar un nuevo hogar para el felino.",
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
          body: "Nunca ajustes la insulina por tu cuenta. Mantén un registro estricto de dosis, horarios de comida y comportamiento. Controlar el peso es la mejor herramienta preventiva y observar cualquier cambio en la forma de caminar es fundamental para reportarlo al especialista.",
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
          body: "Pide al veterinario calcular las calorías para el peso ideal, no el actual. Generalmente se ofrece entre el 60% y 75% de las calorías de mantenimiento actuales. Busca dietas altas en proteína (para mantener músculo y dar saciedad) y bajas en carbohidratos. Fracciona la ración en 3 o 4 tomas para mantener el metabolismo activo y usa parte de su ración como premio en lugar de snacks calóricos.",
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
          body: "La cola es una de las señales más claras: Alta y recta indica confianza, saludo afectuoso o felicidad (si tiene la punta curvada es felicidad máxima). Baja o entre las patas expresa miedo, inseguridad o sumisión. Moviéndose de lado a lado rápidamente o con movimiento lento revela irritación, molestia o concentración. Si está esponjada, erizada o arqueada, el gato siente amenaza o terror.",
        },
        {
          heading: "Las orejas no mienten",
          body: "Las orejas muestran mucho sobre el ánimo: Hacia adelante indica que está atento, curioso, en alerta o con interés. Hacia atrás, pegadas o planas señalan miedo, molestia o agresión defensiva. Si están giradas hacia los lados ('modo avión'), es una señal de irritación creciente y el gato necesita espacio. El movimiento constante indica que está alerta o nervioso.",
        },
        {
          heading: "Los ojos y el parpadeo",
          body: "Los ojos comunican emociones profundas: Abiertos con pupilas grandes/dilatadas indican miedo, sorpresa, excitación o juego. Una mirada fija puede ser señal de desafío o atención intensa. Por el contrario, una mirada relajada o el parpadeo lento es una señal activa de confianza, tranquilidad y afecto.",
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
        label: "Adiestramiento",
        topics: [
          {
      slug: "guia-entrenamiento-casa",
      title: "Tu gato también quiere aprender: Guía divertida para entrenar en casa",
      intro: "¿Crees que los gatos son independientes y pasan del adiestramiento? ¡Nada más lejos de la realidad! Los gatos son inteligentes, curiosos y, sobre todo, les encanta tener 'cosas que hacer'. En la naturaleza, pasarían el día cazando y explorando; en casa, si solo duermen y comen, se aburren. Y un gato aburrido es un gato que araña el sofá o maúlla por la noche. Entrenar a tu gato no es hacerlo obedecer como a un perro militarizado. Es jugar con propósito. Es una forma increíble de conectar con él, estimular su mente y fortalecer vuestra amistad. ¡Y lo mejor? Solo necesitas 10 minutos al día.",
      sections: [
        {
          heading: "1. El secreto: Usa su instinto, no la fuerza",
          body: "Los gatos no responden bien a las órdenes secas ni a los castigos. Responden al refuerzo positivo. La regla de oro: Si hace algo bien, recibe un premio (una chuchería rica, un poco de atún o muchas caricias). Nunca forces: Si tiras de él o le gritas, se cerrará en banda. El entrenamiento debe ser siempre voluntario y divertido. Sesiones cortas: 5 o 10 minutos son suficientes. Si ves que se distrae, termina la sesión con algo que ya sepa hacer bien para que acabe con buena sensación.",
        },
        {
          heading: "2. La herramienta mágica: 'La Diana' (Targeting)",
          body: "Antes de enseñarle trucos complicados, enséñale a seguir tu dedo o un objeto. Esto se llama targeting y es la base de todo. Acerca tu dedo (o un palito con una punta brillante) a la nariz del gato. Por curiosidad, lo olerá o lo tocará. En cuanto lo toque, di '¡Bien!' (con voz alegre) y dale un premio inmediatamente. Repite esto varias veces. Pronto, seguirá tu dedo allá donde lo muevas porque sabe que tocarlo le trae cosas buenas. ¡Ya tienes el control suave de su movimiento!",
        },
        {
          heading: "3. Trucos fáciles para empezar",
          body: "'Ven aquí' (La orden más importante): Es vital por seguridad. Llámalo por su nombre o chasquea la lengua. Cuando venga hacia ti, celebra mucho y dale un premio espectacular. Importante: Nunca le riñas cuando venga, aunque haya tardado mucho. Tiene que asociar 'venir' con 'fiesta'. 'Sentado': Los gatos se sientan naturalmente cuando miran hacia arriba. Con el gato de pie, pon una chuchería justo encima de su cabeza. Mueve la mano lentamente hacia atrás (hacia su cola). Para seguir la comida con la mirada, bajará el trasero automáticamente. En cuanto el culo toque el suelo, di 'Sentado' y dale el premio. 'Al regazo' o 'Sube': Ideal para que venga a dormir contigo o suba a sitios permitidos. Siéntate en una silla o sofá. Golpea suavemente tu pierna o el asiento y di 'Sube'. Guíalo con la chuchería si hace falta. Cuando suba, ¡premio inmediato! Pronto saltará solo para estar contigo.",
        },
        {
          heading: "4. Retos un poco más avanzados",
          body: "'Quieto': Pídele que se siente. Pon la palma de tu mano frente a su cara (como un semáforo en rojo) y di 'Quieto'. Espera solo 1 segundo al principio. Si no se mueve, premio. Ve aumentando el tiempo poco a poco (2 segundos, 5 segundos...). Paciencia, esto cuesta más. 'Échate' (Tumbado): Es difícil porque es una posición vulnerable para ellos. Desde la posición de sentado, baja la chuchería al suelo, entre sus patas delanteras. Aléjala despacio hacia adelante. Si baja el pecho y se estira, ¡premio gordo! No esperes que se quede así mucho tiempo al principio.",
        },
        {
          heading: "5. ¿Pasear con correa? Sí, es posible",
          body: "A muchos gatos les encanta explorar el exterior, pero debe ser seguro. El Arnés: Compra uno tipo chaleco (más cómodo y seguro que los de cuerda fina). Déjaselo puesto en casa unos minutos al día mientras juega, para que se acostumbre. La Correa: Añádela cuando ya ignore el arnés. Deja que la arrastre bajo tu supervisión. La Salida: Sal al pasillo o jardín. No tires de la correa. Deja que él explore y tú le sigues. Si se asusta, vuelve dentro. Sin prisas.",
        },
        {
          heading: "6. Solucionando problemas con juego",
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
          body: "Nunca lo dejes solo: Jamás ates la correa a algo y te vayas. Podría enredarse, lastimarse o quedar indefenso ante un perro u otro peligro. La puerta es zona de riesgo: Ponle el arnés lejos de la puerta de salida. Sácalo en brazos hasta fuera. Si lo haces cerca de la puerta, aprenderá a intentar escaparse cada vez que abras. Ignora las rabietas: Si maúlla o se queja para que lo saques, ignóralo. Solo ponle el arnés y salgan cuando esté tranquilo. Así aprende que la calma es la llave para salir. Respeta sus límites: Si tu gato tiene mucho miedo, no insistas. Hay muchas formas de enriquecer su vida dentro de casa (juguetes, rascadores, ventanas mirador). Con amor y constancia, tu gato podría llegar a disfrutar de sus paseos tanto como tú. ¡Disfrutad de la aventura! 🐾🌳",
        }
      ],
},
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
          heading: "1. Pistas sutiles de dolor",
          body: "Olvida los llantos o cojeras; el dolor felino se esconde en cambios de comportamiento: se esconde más (bajo la cama o armarios), cambia su humor volviéndose irritable o inusualmente 'pegajoso', y deja de acicalarse (pelo opaco o con nudos). También puede lamerse en exceso una zona específica, adoptar una postura tensa de 'pan de molde' con la cabeza baja, o dejar de saltar a lugares que antes frecuentaba por dolor articular.",
        },
        {
          heading: "2. Los dolores más comunes",
          body: "Identificar el tipo ayuda al diagnóstico: la Artrosis es común en mayores de 7 años (dejan de jugar o subir a sitios altos); el dolor de boca (gingivoestomatitis o dientes rotos) causa babeo, mal olor o dejar de comer; el dolor interno (cistitis, riñón o pancreatitis) genera un malestar profundo y depresión; y el dolor nervioso (como en la diabetes) puede causar dolor al simple roce de la piel.",
        },
        {
          heading: "3. Tratamiento Veterinario Multimodal",
          body: "El tratamiento moderno usa varias herramientas: medicamentos seguros como antiinflamatorios específicos, analgésicos (buprenorfina) o moduladores nerviosos (gabapentina). Se complementa con terapias como acupuntura, láser terapéutico o rehabilitación física. En cirugías, se usan bloqueos locales. ADVERTENCIA: ¡Nunca uses ibuprofeno o paracetamol humanos, son mortales para los gatos!",
        },
        {
          heading: "4. Tu papel en casa: Manejo Ambiental",
          body: "Adapta el entorno: instala rampas o escalones para subir a sofás, usa areneros con bordes bajos y camas ortopédicas. El control de peso es crucial para no sobrecargar articulaciones. Además, reduce el estrés manteniendo rutinas tranquilas y usando feromonas si es necesario, ya que el estrés empeora la percepción del dolor.",
        },
        {
          heading: "5. Casos Especiales: Edad y Estado",
          body: "En gatitos cachorros, hay que tener mucho cuidado con las dosis por sus órganos en maduración. En gatos mayores con problemas de riñón o hígado, las dosis deben ajustarse minuciosamente. En gatas gestantes o lactantes, solo el veterinario debe decidir el tratamiento, ya que muchos analgésicos pasan a los fetos o a la leche.",
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
          heading: "1. ¿Qué es realmente el estrés?",
          body: "El estrés no es siempre 'malo'. Es una reacción natural del cuerpo que prepara al gato para adaptarse a cambios (una mudanza, un viaje, la llegada de un bebé). Estrés positivo: Le ayuda a reaccionar y adaptarse. Estrés negativo: Ocurre cuando la situación es demasiado intensa o dura demasiado tiempo. Si el gato no logra adaptarse, el estrés se cronifica y puede derivar en ansiedad. Diferencia clave: Miedo vs. Ansiedad. Miedo: Reacción inmediata ante un peligro real. El corazón se acelera y el gato está listo para huir o defenderse. Es útil para sobrevivir. Ansiedad: El gato siente miedo ante algo que no es peligroso o que no puede controlar. No sabe cómo resolver la situación, así que vive en tensión constante.",
        },
        {
          heading: "2. ¿Por qué algunos gatos son más sensibles?",
          body: "No todos los gatos reaccionan igual. Su nivel de tolerancia al estrés depende de dos factores principales: A. Genética y Carácter: Algunos gatos son naturalmente más seguros; otros, más tímidos. Factores como la raza, el sexo y la herencia genética influyen. Un gato inseguro necesitará siempre un entorno más tranquilo y predecible. B. La Socialización Temprana (La ventana crítica): Las primeras 2 a 7 semanas de vida son decisivas. Si hubo contacto humano cariñoso: El gatito aprenderá que las personas son seguras. Será más sociable y resistente al estrés. Si faltó contacto o hubo experiencias negativas: Es muy probable que desarrolle desconfianza y miedo hacia los humanos o nuevos estímulos cuando sea adulto. El entorno importa: Los gatitos criados en ambientes ricos en estímulos (sonidos, texturas, juegos) suelen ser adultos más adaptables.",
        },
        {
          heading: "3. ¿Qué causa estrés en mi gato?",
          body: "Los gatos necesitan sentir que tienen el control de su entorno. Cuando pierden ese control, aparece el estrés. Factores Sociales: Cambios en la rutina diaria. Llegada de nuevas personas, bebés u otras mascotas. Discusiones o gritos en casa. Castigos o atención irregular (a veces mucha, a veces nada). Factores Físicos: Mudanzas o reformas. Espacio insuficiente o mala organización (ej. arenero cerca de la comida). Competencia por recursos (si hay varios gatos y pocos platos o areneros).",
        },
        {
          heading: "4. Señales de Alerta: ¿Cómo sé si mi gato está estresado?",
          body: "Los gatos son expertos en ocultar el dolor y el malestar. Debes ser un detective. Síntomas Físicos Inmediatos: Respiración acelerada o jadeo. Pupilas muy dilatadas. Temblores o salivación excesiva. Vómitos o diarrea puntual (ej. antes de viajar). Cambios de Comportamiento: Postura: Orejas hacia atrás, cola baja, cuerpo tenso. Escondite: Pasa mucho tiempo oculto o bajo los muebles. Agresividad: Gruñe, bufa o ataca sin motivo aparente. Vigilancia extrema: No se relaja, está siempre 'en guardia'. Signos de Estrés Crónico (A largo plazo): Si el estrés no se trata, aparecen problemas más graves: Aseo compulsivo: Se lame tanto que se queda sin pelo (alopecia psicógena). Problemas de eliminación: Ora o defeca fuera del arenero (marcado territorial o ansiedad). Cambios en el sueño: Duerme poco, mal, o siempre en posiciones tensas (no boca arriba ni de lado relajado). Cambios alimenticios: Come en exceso (ansiedad) o deja de comer. Conductas repetitivas: Persigue su cola, maúlla constantemente o camina sin rumbo.",
        },
        {
          heading: "5. El impacto en la Salud Física",
          body: "El estrés no es solo 'cosa de la mente'; enferma el cuerpo. Cistitis Idiopática Felina: Inflamación de la vejiga sin infección bacteriana, directamente ligada al estrés. Problemas digestivos: Gastritis, vómitos crónicos o diarreas. Problemas de piel: Heridas por lamido excesivo. Obesidad y Diabetes: A veces, los dueños dan comida para 'consolar' al gato, lo que lleva al sobrepeso. Bajada de defensas: Los gatitos o gatos mayores estresados se enferman más fácilmente (gripes, infecciones). Importante: Antes de asumir que es estrés, acude al veterinario. Problemas como hipertiroidismo, dolor articular o tumores pueden imitar síntomas de estrés o ansiedad.",
        },
        {
          heading: "6. ¿Cómo ayudar a tu gato? (Tratamiento y Manejo)",
          body: "El objetivo es devolverle la sensación de seguridad y control. A. Terapia de Conducta (Lo más importante): Identifica la causa del estrés y modifica el entorno. Respeta sus rutinas. Proporciona lugares altos y escondites seguros. Juega con él diariamente para liberar tensión. B. Ayudas Ambientales: Feromonas: Son sustancias químicas (como Feliway) que imitan las feromonas faciales de los gatos, transmitiendo mensaje de 'calma' y 'familiaridad'. Ayudan a reducir el marcado y la ansiedad. Enriquecimiento ambiental: Rascadores, juguetes interactivos y acceso a ventanas seguras. C. Alimentación Anti-Estrés: Existen dietas específicas o suplementos que ayudan: Triptófano: Un aminoácido precursor de la serotonina (la hormona de la felicidad). Derivados de la leche: Proteínas hidrolizadas con efecto calmante natural. Estos nutrientes ayudan a regular el estado de ánimo, mejorar la digestión y cuidar la piel. D. Medicación: En casos severos de ansiedad, el veterinario conductista puede recetar fármacos. Nunca mediques a tu gato por tu cuenta. Los medicamentos deben ser siempre el complemento de una terapia de conducta, no la única solución.",
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
  slug: "genetica-felina",
  label: "Genética y Herencia",
  topics: [
    {
      slug: "guia-genetica-colores",
      title: "Genética Felina: Entendiendo los colores y la herencia (sin complicaciones)",
      intro: "La genética de los gatos no es magia, es ciencia. Entender las bases te ayudará a comprender por qué tu gato tiene ese color específico y cómo funciona la herencia en su pelaje, dejando de lado los mitos antiguos para centrarse en la ciencia actual.",
      sections: [
        {
          heading: "1. Desmontando el mito de Darwin",
          body: "Durante mucho tiempo se creyó que la domesticación 'creaba' nuevas variedades por sí misma, pero esto es falso. Los humanos no creamos los genes, sino que los seleccionamos. En la naturaleza, las mutaciones extrañas suelen eliminarse si no ayudan a sobrevivir, pero en casa protegemos variaciones como el pelo largo o ciertos colores por estética. Toda la variedad actual ya existía potencialmente en los ancestros salvajes; nosotros solo hemos acelerado su aparición mediante la cría selectiva.",
        },
        {
          heading: "2. ¿Cómo funcionan los colores? (Lo básico)",
          body: "Los caracteres dependen de los genes y sus versiones llamadas 'alelos'. Usando el ejemplo del Negro (D) y el Azul/Gris (d): DD (Homocigoto Dominante) resulta en un gato Negro; Dd (Heterocigoto) resulta en un gato Negro visualmente pero 'portador' del gen azul; dd (Homocigoto Recesivo) resulta en un gato Azul. La regla de oro es que el negro domina sobre el azul: si hay al menos una 'D', el gato será negro. Para ser azul, debe recibir el gen 'd' de ambos padres.",
        },
        {
          heading: "3. Importancia de la selección responsable",
          body: "A diferencia de los perros, la genética del color en gatos es extremadamente especializada y distintiva entre razas. Los jueces internacionales y genetistas recomiendan seguir normas estrictas de cruza para evitar resultados inesperados o problemas de salud. No todos los cruces de colores son recomendables, ya que algunos pueden dar lugar a patrones no deseados por el estándar de la raza.",
        },
        {
          heading: "4. Guía rápida de Cruces Recomendados (FIFE)",
          body: "La Federación Internacional Felina (FIFE) sugiere evitar cruces aleatorios entre variedades de color muy distintas. Los principios básicos son: 1. Cruzar dentro de la misma raza (ej. Persas con Persas). 2. Respetar la longitud del pelo (e para pelo corto, l para pelo largo). 3. Evitar cruces 'prohibidos': si en las tablas oficiales no aparece una letra para una combinación específica, es mejor abstenerse por resultados impredecibles o insatisfactorios.",
        },
        {
          heading: "5. Curiosidad: ¿Ven los colores los gatos?",
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
          body: "Duración del embarazo: 64-67 días (≈9 semanas). Tamaño de camada: 1 a 5 gatitos (promedio 3-4). Peso al nacer: 85-105 gramos. La placenta es de tipo 'zonaria' (forma de cinturón) y 'endoteliocorial' (muy invasiva), lo cual explica por qué las gatas no pueden donar sangre fácilmente.",
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
    {
    slug: "emergencia",
    label: "Emergencia",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Cachorro, adulto, senior y sus necesidades",
    subcategories: [
      {
  slug: "emergencias-felinas",
  label: "Primeros Auxilios",
  topics: [
    {
      slug: "guia-primeros-auxilios-gatitos",
      title: "Primeros Auxilios para Gatitos: Qué hacer en una emergencia",
      intro: "Los primeros auxilios no sustituyen al veterinario, pero pueden salvar la vida de tu gatito mientras llegas a la clínica. El objetivo es evitar que empeore, estabilizarlo y trasladarlo con seguridad.",
      sections: [
        {
          heading: "1. Calma y Seguridad",
          body: "Tu seguridad es lo primero; un gatito con dolor puede morder o arañar. Mantén tu rostro alejado de sus garras y boca. No uses bozal, pues está contraindicado en gatos con problemas respiratorios o vómitos. La técnica de la 'manta' es ideal: envuélvelo suavemente en una toalla dejando solo la cabeza fuera para calmarlo y manejarlo con seguridad.",
        },
        {
          heading: "2. Evaluación Rápida (Regla ABCDE)",
          body: "Antes de moverlo, revisa: A (Vías aéreas): Que no haya bloqueos en nariz o boca. B (Respiración): Observar si el pecho se mueve. C (Circulación): Presionar hemorragias con gasas limpias. D (Dolor/Inmovilización): No mover bruscamente si sospechas de fracturas. E (Exposición): Proteger heridas abiertas con paños limpios.",
        },
        {
          heading: "3. Emergencias en Cachorros",
          body: "Los bebés son muy frágiles ante dos peligros: 1. Hipoglucemia (Bajón de azúcar): Si presenta debilidad extrema o encías pálidas, aplica miel o azúcar bajo su lengua o en encías. 2. Hipotermia: Si el gatito está frío al tacto, abrígalo con tu calor corporal (bajo tu ropa) o una botella de agua tibia envuelta en una toalla (nunca directa).",
        },
        {
          heading: "4. Traslado Seguro",
          body: "Usa siempre una transportadora o caja resistente con ventilación. Si sospechas de huesos rotos, minimiza el movimiento usando una tabla o toalla rígida como camilla improvisada. Durante el viaje, habla suavemente y mantén el vehículo estable para reducir su estrés.",
        },
        {
          heading: "5. Kit de Emergencia Felino",
          body: "Ten a mano: Teléfonos de urgencia veterinaria, toallas o mantas limpias, gasas estériles, miel de caña o glucosa, cinta adhesiva médica y una transportadora lista. Estar preparado marca la diferencia en una situación crítica.",
        },
        {
          heading: "Advertencias Finales",
          body: "Llama al veterinario mientras te diriges a la clínica para que te esperen. NUNCA mediques por tu cuenta con fármacos humanos (paracetamol o ibuprofeno), ya que son mortales. Actúa rápido: en una emergencia, cada minuto cuenta para salvar su vida.",
        },
      ],
    },
  ],
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