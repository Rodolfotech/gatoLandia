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
    description: "Comportamiento",
    subcategories: [
      {
  slug: "interio-exterior",
  label: "Gato ¿Interio o Exterior?",
  topics: [
    {
      slug: "guia para entender y cuidar",
      title: "Comportamiento Felino: Cómo entender y cuidar mejor a tu gato",
      intro: "Los gatos son hoy una de las mascotas más populares del mundo. Aunque históricamente no se les veía como compañeros de vida tal como los conocemos ahora, la realidad es que, al igual que los perros, necesitan interacción, atención y cariño. La diferencia radica en cómo expresan esas necesidades. Para convivir en armonía con tu felino, es fundamental entender su naturaleza y adaptar su entorno a sus instintos.",
      sections: [
        {
          heading: "**1. ¿Interior o Exterior? Tomando la decisión correcta**",
          body: "Una de las primeras decisiones al adoptar es si el gato vivirá solo dentro de casa o tendrá acceso al exterior. Ambas opciones tienen implicaciones importantes: Gatos de exterior: Tienen más libertad y estimulación natural, pero corren mayores riesgos: atropellos, peleas con otros animales, enfermedades infecciosas y parásitos (pulgas, gusanos). Su esperanza de vida suele ser menor. Gatos de interior: Están mucho más protegidos y viven más años, pero dependen totalmente de nosotros para su estimulación. El aburrimiento es su mayor enemigo. Si eliges esta opción, debes comprometerte a enriquecer su entorno con juegos, rascadores y tiempo de calidad. Consejo: Sea cual sea tu elección, la clave está en la seguridad y la estimulación mental.",
        },
        {
          heading: "**2. El Instinto de Rascar: No es vandalismo, es comunicación**",
          body: "Arañar es un comportamiento natural e imprescindible que comienza alrededor de las 5 semanas de vida. Para un gato, rascar no es solo afilar uñas; es una forma de comunicación visual y olfativa (marcan territorio con las glándulas de sus patas) y una manera de estirar su musculatura. El conflicto surge cuando eligen nuestros muebles. La solución no es castigar, sino ofrecer una alternativa mejor. ¿Cómo elegir el rascador perfecto? Estabilidad: Debe ser firme y no tambalearse. Si se mueve, el gato no lo usará por inseguridad. Altura: Debe ser lo suficientemente alto para que el gato pueda estirarse completamente de pie. Material: El sisal, la madera natural o la cuerda suelen ser los más atractivos. Ubicación: Colócalo en zonas visibles y de paso (no escondido en un sótano). A los gatos les gusta marcar donde ocurre la 'vida' de la casa. Paciencia: Una vez que elija un rascador, no lo cambies de sitio. Además, cuanto más usado esté, más le gustará, porque estará impregnado de su olor.",
        },
        {
          heading: "**3. El Juego: Ejercicio físico y mental**",
          body: "Jugar no es solo entretenimiento; es la forma en que el gato ejercita su instinto de caza. Un gato que no juega puede desarrollar problemas de comportamiento por acumulación de energía o estrés. Claves para un juego exitoso: Imita a una presa: Usa juguetes que se muevan, se escondan, salten o vibren. Las cañas con plumas o cuerdas son ideales porque te permiten interactuar a distancia. Seguridad ante todo: Evita hilos largos sin supervisión o piezas pequeñas que pueda tragar. Rutina diaria: Dedica al menos 15 minutos al día a jugar activamente con él. Esto fortalece vuestro vínculo y mantiene su mente ágil. Variedad: Rotar los juguetes evita que se aburra de los mismos objetos.",
        },
        {
          heading: "**4. Higiene y Areneros: La regla de oro**",
          body: "Los gatos son extremadamente limpios y exigentes con su baño. Un arenero sucio o mal ubicado es la causa número uno de problemas de eliminación inadecuada. Recomendaciones básicas: La regla del 'N+1': Debes tener una caja de arena por cada gato, más una extra. (Ejemplo: 1 gato = 2 cajas; 2 gatos = 3 cajas). Algunos gatos prefieren incluso usar una caja solo para orinar y otra para defecar. Tipo de arena: La mayoría prefiere arenas sin perfume y de textura fina y suave. Ubicación: Lugares tranquilos, privados y lejos de ruidos fuertes (lavadoras, secadoras) o de su zona de comida. Limpieza: Retira los desechos a diario y lava las cajas regularmente con agua y jabón neutro (evita lejías o amoniaco, cuyos olores pueden atraerles a orinar fuera). Alerta: Si tu gato empieza a orinar o defecar fuera de la caja, acude al veterinario. A menudo es el primer síntoma de dolor o enfermedad urinaria, no un acto de venganza.",
        },
        {
          heading: "**5. El Marcaje con Orina: Entendiendo el mensaje**",
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
      slug: "presentacion entre gatos",
      title: "Cómo lograr que dos gatos se acepten y convivan tranquilos",
      intro: "Introducir un nuevo gato en casa es emocionante, pero puede ser estresante para tu gato residente. Los gatos son territoriales por naturaleza, así que la clave del éxito no es la rapidez, sino la paciencia. Si lo haces bien desde el principio, evitarás conflictos futuros y fomentarás una amistad (o al menos, una tolerancia respetuosa) duradera. Olvida la idea de 'presentarlos de golpe'. Sigue este proceso gradual.",
      sections: [
        {
          heading: "Paso 1: La Cuarentena Inicial (Días 1-4)",
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
          body: "Detén el proceso y vuelve atrás si ves: Silbidos intensos y repetidos, gruñidos profundos, pelo erizado y posturas rígidas. En el gato residente: Deja de comer, usa mal el arenero o se esconde todo el día. En el nuevo gato: Se lame compulsivamente, no come o parece aterrorizado. Consejo: Si el estrés es alto, consulta a tu veterinario o a un etólogo. A veces, usar feromonas sintéticas (difusores) puede ayudar a calmar el ambiente.",
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
          heading: "**1. El secreto: Usa su instinto, no la fuerza**",
          body: "Los gatos no responden bien a las órdenes secas ni a los castigos. Responden al refuerzo positivo. La regla de oro: Si hace algo bien, recibe un premio (una chuchería rica, un poco de atún o muchas caricias). Nunca forces: Si tiras de él o le gritas, se cerrará en banda. El entrenamiento debe ser siempre voluntario y divertido. Sesiones cortas: 5 o 10 minutos son suficientes. Si ves que se distrae, termina la sesión con algo que ya sepa hacer bien para que acabe con buena sensación.",
        },
        {
          heading: "**2. La herramienta mágica: 'La Diana' (Targeting)**",
          body: "Antes de enseñarle trucos complicados, enséñale a seguir tu dedo o un objeto. Esto se llama targeting y es la base de todo. Acerca tu dedo (o un palito con una punta brillante) a la nariz del gato. Por curiosidad, lo olerá o lo tocará. En cuanto lo toque, di '¡Bien!' (con voz alegre) y dale un premio inmediatamente. Repite esto varias veces. Pronto, seguirá tu dedo allá donde lo muevas porque sabe que tocarlo le trae cosas buenas. ¡Ya tienes el control suave de su movimiento!",
        },
        {
          heading: "**3. Trucos fáciles para empezar**",
          body: "'Ven aquí' (La orden más importante): Es vital por seguridad. Llámalo por su nombre o chasquea la lengua. Cuando venga hacia ti, celebra mucho y dale un premio espectacular. Importante: Nunca le riñas cuando venga, aunque haya tardado mucho. Tiene que asociar 'venir' con 'fiesta'. 'Sentado': Los gatos se sientan naturalmente cuando miran hacia arriba. Con el gato de pie, pon una chuchería justo encima de su cabeza. Mueve la mano lentamente hacia atrás (hacia su cola). Para seguir la comida con la mirada, bajará el trasero automáticamente. En cuanto el culo toque el suelo, di 'Sentado' y dale el premio. 'Al regazo' o 'Sube': Ideal para que venga a dormir contigo o suba a sitios permitidos. Siéntate en una silla o sofá. Golpea suavemente tu pierna o el asiento y di 'Sube'. Guíalo con la chuchería si hace falta. Cuando suba, ¡premio inmediato! Pronto saltará solo para estar contigo.",
        },
        {
          heading: "**4. Retos un poco más avanzados**",
          body: "'Quieto': Pídele que se siente. Pon la palma de tu mano frente a su cara (como un semáforo en rojo) y di 'Quieto'. Espera solo 1 segundo al principio. Si no se mueve, premio. Ve aumentando el tiempo poco a poco (2 segundos, 5 segundos...). Paciencia, esto cuesta más. 'Échate' (Tumbado): Es difícil porque es una posición vulnerable para ellos. Desde la posición de sentado, baja la chuchería al suelo, entre sus patas delanteras. Aléjala despacio hacia adelante. Si baja el pecho y se estira, ¡premio gordo! No esperes que se quede así mucho tiempo al principio.",
        },
        {
          heading: "**5. ¿Pasear con correa? Sí, es posible**",
          body: "A muchos gatos les encanta explorar el exterior, pero debe ser seguro. El Arnés: Compra uno tipo chaleco (más cómodo y seguro que los de cuerda fina). Déjaselo puesto en casa unos minutos al día mientras juega, para que se acostumbre. La Correa: Añádela cuando ya ignore el arnés. Deja que la arrastre bajo tu supervisión. La Salida: Sal al pasillo o jardín. No tires de la correa. Deja que él explore y tú le sigues. Si se asusta, vuelve dentro. Sin prisas.",
        },
        {
          heading: "**6. Solucionando problemas con juego**",
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
          heading: "**1. Pistas sutiles de dolor**",
          body: "Olvida los llantos o cojeras; el dolor felino se esconde en cambios de comportamiento: se esconde más (bajo la cama o armarios), cambia su humor volviéndose irritable o inusualmente 'pegajoso', y deja de acicalarse (pelo opaco o con nudos). También puede lamerse en exceso una zona específica, adoptar una postura tensa de 'pan de molde' con la cabeza baja, o dejar de saltar a lugares que antes frecuentaba por dolor articular.",
        },
        {
          heading: "**2. Los dolores más comunes**",
          body: "Identificar el tipo ayuda al diagnóstico: la Artrosis es común en mayores de 7 años (dejan de jugar o subir a sitios altos); el dolor de boca (gingivoestomatitis o dientes rotos) causa babeo, mal olor o dejar de comer; el dolor interno (cistitis, riñón o pancreatitis) genera un malestar profundo y depresión; y el dolor nervioso (como en la diabetes) puede causar dolor al simple roce de la piel.",
        },
        {
          heading: "**3. Tratamiento Veterinario Multimodal**",
          body: "El tratamiento moderno usa varias herramientas: medicamentos seguros como antiinflamatorios específicos, analgésicos (buprenorfina) o moduladores nerviosos (gabapentina). Se complementa con terapias como acupuntura, láser terapéutico o rehabilitación física. En cirugías, se usan bloqueos locales. ADVERTENCIA: ¡Nunca uses ibuprofeno o paracetamol humanos, son mortales para los gatos!",
        },
        {
          heading: "**4. Tu papel en casa: Manejo Ambiental**",
          body: "Adapta el entorno: instala rampas o escalones para subir a sofás, usa areneros con bordes bajos y camas ortopédicas. El control de peso es crucial para no sobrecargar articulaciones. Además, reduce el estrés manteniendo rutinas tranquilas y usando feromonas si es necesario, ya que el estrés empeora la percepción del dolor.",
        },
        {
          heading: "**5. Casos Especiales: Edad y Estado**",
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
          heading: "**1. ¿Qué es realmente el estrés?**",
          body: "El estrés no es siempre 'malo'. Es una reacción natural del cuerpo que prepara al gato para adaptarse a cambios (una mudanza, un viaje, la llegada de un bebé). Estrés positivo: Le ayuda a reaccionar y adaptarse. Estrés negativo: Ocurre cuando la situación es demasiado intensa o dura demasiado tiempo. Si el gato no logra adaptarse, el estrés se cronifica y puede derivar en ansiedad. Diferencia clave: Miedo vs. Ansiedad. Miedo: Reacción inmediata ante un peligro real. El corazón se acelera y el gato está listo para huir o defenderse. Es útil para sobrevivir. Ansiedad: El gato siente miedo ante algo que no es peligroso o que no puede controlar. No sabe cómo resolver la situación, así que vive en tensión constante.",
        },
        {
          heading: "**2. ¿Por qué algunos gatos son más sensibles?**",
          body: "No todos los gatos reaccionan igual. Su nivel de tolerancia al estrés depende de dos factores principales: A. Genética y Carácter: Algunos gatos son naturalmente más seguros; otros, más tímidos. Factores como la raza, el sexo y la herencia genética influyen. Un gato inseguro necesitará siempre un entorno más tranquilo y predecible. B. La Socialización Temprana (La ventana crítica): Las primeras 2 a 7 semanas de vida son decisivas. Si hubo contacto humano cariñoso: El gatito aprenderá que las personas son seguras. Será más sociable y resistente al estrés. Si faltó contacto o hubo experiencias negativas: Es muy probable que desarrolle desconfianza y miedo hacia los humanos o nuevos estímulos cuando sea adulto. El entorno importa: Los gatitos criados en ambientes ricos en estímulos (sonidos, texturas, juegos) suelen ser adultos más adaptables.",
        },
        {
          heading: "**3. ¿Qué causa estrés en mi gato?**",
          body: "Los gatos necesitan sentir que tienen el control de su entorno. Cuando pierden ese control, aparece el estrés. Factores Sociales: Cambios en la rutina diaria. Llegada de nuevas personas, bebés u otras mascotas. Discusiones o gritos en casa. Castigos o atención irregular (a veces mucha, a veces nada). Factores Físicos: Mudanzas o reformas. Espacio insuficiente o mala organización (ej. arenero cerca de la comida). Competencia por recursos (si hay varios gatos y pocos platos o areneros).",
        },
        {
          heading: "**4. Señales de Alerta: ¿Cómo sé si mi gato está estresado?**",
          body: "Los gatos son expertos en ocultar el dolor y el malestar. Debes ser un detective. Síntomas Físicos Inmediatos: Respiración acelerada o jadeo. Pupilas muy dilatadas. Temblores o salivación excesiva. Vómitos o diarrea puntual (ej. antes de viajar). Cambios de Comportamiento: Postura: Orejas hacia atrás, cola baja, cuerpo tenso. Escondite: Pasa mucho tiempo oculto o bajo los muebles. Agresividad: Gruñe, bufa o ataca sin motivo aparente. Vigilancia extrema: No se relaja, está siempre 'en guardia'. Signos de Estrés Crónico (A largo plazo): Si el estrés no se trata, aparecen problemas más graves: Aseo compulsivo: Se lame tanto que se queda sin pelo (alopecia psicógena). Problemas de eliminación: Ora o defeca fuera del arenero (marcado territorial o ansiedad). Cambios en el sueño: Duerme poco, mal, o siempre en posiciones tensas (no boca arriba ni de lado relajado). Cambios alimenticios: Come en exceso (ansiedad) o deja de comer. Conductas repetitivas: Persigue su cola, maúlla constantemente o camina sin rumbo.",
        },
        {
          heading: "**5. El impacto en la Salud Física**",
          body: "El estrés no es solo 'cosa de la mente'; enferma el cuerpo. Cistitis Idiopática Felina: Inflamación de la vejiga sin infección bacteriana, directamente ligada al estrés. Problemas digestivos: Gastritis, vómitos crónicos o diarreas. Problemas de piel: Heridas por lamido excesivo. Obesidad y Diabetes: A veces, los dueños dan comida para 'consolar' al gato, lo que lleva al sobrepeso. Bajada de defensas: Los gatitos o gatos mayores estresados se enferman más fácilmente (gripes, infecciones). Importante: Antes de asumir que es estrés, acude al veterinario. Problemas como hipertiroidismo, dolor articular o tumores pueden imitar síntomas de estrés o ansiedad.",
        },
        {
          heading: "**6. ¿Cómo ayudar a tu gato? (Tratamiento y Manejo)**",
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
          heading: "**1. Desmontando el mito de Darwin**",
          body: "Durante mucho tiempo se creyó que la domesticación 'creaba' nuevas variedades por sí misma, pero esto es falso. Los humanos no creamos los genes, sino que los seleccionamos. En la naturaleza, las mutaciones extrañas suelen eliminarse si no ayudan a sobrevivir, pero en casa protegemos variaciones como el pelo largo o ciertos colores por estética. Toda la variedad actual ya existía potencialmente en los ancestros salvajes; nosotros solo hemos acelerado su aparición mediante la cría selectiva.",
        },
        {
          heading: "**2. ¿Cómo funcionan los colores? (Lo básico)**",
          body: "Los caracteres dependen de los genes y sus versiones llamadas 'alelos'. Usando el ejemplo del Negro (D) y el Azul/Gris (d): DD (Homocigoto Dominante) resulta en un gato Negro; Dd (Heterocigoto) resulta en un gato Negro visualmente pero 'portador' del gen azul; dd (Homocigoto Recesivo) resulta en un gato Azul. La regla de oro es que el negro domina sobre el azul: si hay al menos una 'D', el gato será negro. Para ser azul, debe recibir el gen 'd' de ambos padres.",
        },
        {
          heading: "**3. Importancia de la selección responsable**",
          body: "A diferencia de los perros, la genética del color en gatos es extremadamente especializada y distintiva entre razas. Los jueces internacionales y genetistas recomiendan seguir normas estrictas de cruza para evitar resultados inesperados o problemas de salud. No todos los cruces de colores son recomendables, ya que algunos pueden dar lugar a patrones no deseados por el estándar de la raza.",
        },
        {
          heading: "**4. Guía rápida de Cruces Recomendados (FIFE)**",
          body: "La Federación Internacional Felina (FIFE) sugiere evitar cruces aleatorios entre variedades de color muy distintas. Los principios básicos son: 1. Cruzar dentro de la misma raza (ej. Persas con Persas). 2. Respetar la longitud del pelo (e para pelo corto, l para pelo largo). 3. Evitar cruces 'prohibidos': si en las tablas oficiales no aparece una letra para una combinación específica, es mejor abstenerse por resultados impredecibles o insatisfactorios.",
        },
        {
          heading: "**5. Curiosidad: ¿Ven los colores los gatos?**",
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
          heading: "**1. Calma y Seguridad**",
          body: "Tu seguridad es lo primero; un gatito con dolor puede morder o arañar. Mantén tu rostro alejado de sus garras y boca. No uses bozal, pues está contraindicado en gatos con problemas respiratorios o vómitos. La técnica de la 'manta' es ideal: envuélvelo suavemente en una toalla dejando solo la cabeza fuera para calmarlo y manejarlo con seguridad.",
        },
        {
          heading: "**2. Evaluación Rápida (Regla ABCDE)**",
          body: "Antes de moverlo, revisa: A (Vías aéreas): Que no haya bloqueos en nariz o boca. B (Respiración): Observar si el pecho se mueve. C (Circulación): Presionar hemorragias con gasas limpias. D (Dolor/Inmovilización): No mover bruscamente si sospechas de fracturas. E (Exposición): Proteger heridas abiertas con paños limpios.",
        },
        {
          heading: "**3. Emergencias en Cachorros**",
          body: "Los bebés son muy frágiles ante dos peligros: 1. Hipoglucemia (Bajón de azúcar): Si presenta debilidad extrema o encías pálidas, aplica miel o azúcar bajo su lengua o en encías. 2. Hipotermia: Si el gatito está frío al tacto, abrígalo con tu calor corporal (bajo tu ropa) o una botella de agua tibia envuelta en una toalla (nunca directa).",
        },
        {
          heading: "**4. Traslado Seguro**",
          body: "Usa siempre una transportadora o caja resistente con ventilación. Si sospechas de huesos rotos, minimiza el movimiento usando una tabla o toalla rígida como camilla improvisada. Durante el viaje, habla suavemente y mantén el vehículo estable para reducir su estrés.",
        },
        {
          heading: "**5. Kit de Emergencia Felino**",
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
    {
    slug: "adopción",
    label: "Adopción",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Como adoptar a un gato",
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
          heading: "**1. Los Primeros Días: Vigilancia y Adaptación**",
          body: "El cambio de entorno genera estrés, lo que puede bajar las defensas del gato. Visita al veterinario: Lleva a tu gato a su nueva clínica de confianza cuanto antes. Entrega toda la documentación médica previa (vacunas, desparasitaciones) y sigue sus indicaciones. Qué observar: Que coma y beba con normalidad, que tenga energía acorde a su edad, que las heces sean consistentes (algunas blandas iniciales por el cambio de dieta son normales, pero no debe haber diarrea persistente) y ausencia de síntomas como tos, vómitos, mocos o legañas. Ante cualquier duda, consulta a tu veterinario.",
        },
        {
          heading: "**2. Salud Preventiva: Vacunas, Parásitos y Esterilización**",
          body: "Vacunación: Las vacunas protegen contra enfermedades graves (como la panleucopenia, el complejo respiratorio felino o la leucemia). Sigue el calendario que te indique tu veterinario. La vacuna de la rabia, aunque no siempre es obligatoria legalmente para gatos (depende de la región), está muy recomendada.  Desparasitación: Es fundamental para la salud del gato y de tu familia (zoonosis). Interna: se recomienda cada 3 meses. Externa: vital si el gato sale o tiene acceso a balcones/terrazas. Esterilización: Es la decisión más responsable y saludable. Beneficios: evita camadas no deseadas, reduce el marcaje, disminuye peleas y previene enfermedades graves (tumores de mama, piometras). Mitos: No cambia su personalidad ni los vuelve 'vagos'. Esteriliza a tu gato, sea macho o hembra, interior o exterior.",
        },
        {
          heading: "**3. Alimentación e Hidratación**",
          body: "Alimento adecuado: Usa pienso seco de calidad adaptado a su edad y condición física. Evita darle comida casera o sobras humanas. Premios: Úsalos con moderación para no causar obesidad. Agua fresca: Fundamental, coloca varios bebederos por casa, lejos de la comida y del arenero. Algunos gatos prefieren fuentes en movimiento. Incorporar comida húmeda ayuda a la hidratación. Prohibido: La leche de vaca (la mayoría de los gatos adultos son intolerantes a la lactosa). El yogur natural o queso sin sal pueden darse como premio puntual, pero no son necesarios.",
        },
        {
          heading: "**4. Higiene y Cuidado Físico**",
          body: "Los gatos necesitan tu ayuda en ciertos aspectos. Cepillado: Pelo corto una vez por semana (diario en muda); pelo largo diario para evitar nudos y bolas de pelo. Si expulsa bolas de pelo con dificultad, consulta sobre pastas de malta. Uñas: Corta solo la punta transparente, evitando la parte rosada (vascularizada). Baños: Generalmente no son necesarios, solo si está muy sucio o por indicación médica.",
        },
        {
          heading: "**5. El Arenero: Reglas de Oro**",
          body: "Un gato que no usa el arenero suele expresar un problema médico o de estrés. Cantidad: Regla N+1 (número de gatos + 1 caja). Ubicación: Lugares tranquilos, accesibles, lejos de ruidos (lavadoras) y de su comida. Tipo: A muchos no les gustan los cerrados; prueba con uno abierto y grande. Limpieza: Retira los desechos a diario y lava la caja regularmente con agua y jabón neutro (evita lejía o amoniaco). Arena: Prefieren arenas sin perfume y de textura fina.",
        },
        {
          heading: "**6. Comportamiento y Enriquecimiento Ambiental**",
          body: "Lenguaje: Cola erguida es saludo amistoso; cola moviéndose rápido es irritación; orejas hacia atrás indican miedo. Ronroneo puede ser bienestar, dolor o estrés. Juego: Dedica 15-20 minutos diarios a caza simulada (cañas, pelotas). Evita usar tus manos o pies. Rascadores: Proporciona rascadores estables, altos y de materiales atractivos (sisal, madera). Nunca castigues por rascar muebles; redirige y premia. Verticalidad: Necesitan lugares altos para observar y refugios seguros para esconderse. Respeta su soledad.",
        },
        {
          heading: "**7. Consejos Específicos según la Edad**",
          body: "CACHORRO: Socialización (2-8 semanas) es la etapa clave para aceptar el contacto humano y visitas al veterinario. Enséñale qué se puede morder. Acostúmbralo al transportín dejándolo abierto en casa. Protege cables y ventanas. ADULTO: Paciencia, la adaptación puede tardar semanas. Usa una habitación de aclimatación al llegar con todos sus recursos. Haz presentaciones con otros animales muy gradualmente. Mantén horarios fijos de comida y juego.",
        },
        {
          heading: "**8. Aspectos Legales y Seguridad**",
          body: "Microchip: Es obligatorio y debe tener los datos actualizados (RIAC en Madrid). Prevención de Accidentes: El Síndrome del Gato Paracaidista. Instala redes mosquiteras resistentes en ventanas y balcones. Una caída desde altura puede ser mortal; no confíes en su 'habilidad' para caer de pie. Cada gato es un mundo. Observa, respeta sus tiempos y consulta siempre a tu veterinario ante cambios bruscos.",
        }
      ],
    },
  ],
}


      ]
    },
    {
    slug: "razas",
    label: "Razas",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Razas de gatos",
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
          heading: "**1. Los Clásicos Históricos**",
          body: "Razas antiguas con personalidades definidas: Abisinio (Etiopía/Egipto): Activo, curioso, 'perro-gato', necesita mucho juego mental. Siamés (Tailandia): Extremadamente vocal, inteligente, demanda atención constante. Persa (Irán): Tranquilo, dulce, silencioso; requiere cepillado y limpieza facial diaria. Maine Coon (EE.UU.): El 'gigante amable', sociable, ideal para familias con niños; requiere espacio. Bengala (EE.UU.): Energía alta, atlético, parece un leopardo en miniatura; necesita estimulación diaria intensa.",
        },
        {
          heading: "**2. Gigantes Gentiles y Adaptables al Frío**",
          body: "Gatos robustos con pelajes densos. Maine Coon: Uno de los más grandes, destaca por sus 'lynx tips' y maullidos suaves. Bosque de Noruega (Skogkatt): Escalador nato con pelaje impermeable, independiente pero cariñoso. Siberiano: Famoso por ser hipoalergénico (produce menos Fel d 1), ágil y afectuoso. Ragdoll: Grande y musculoso, de temperamento dócil; se 'desploma' como un muñeco de trapo al cargarlo.",
        },
        {
          heading: "**3. Elegancia de Pelo Corto y Cuerpo Atlético**",
          body: "Poco mantenimiento de pelaje con mucha interacción. British Shorthair: Cara redonda, compacto y tranquilo; no le gusta que lo carguen mucho. Ruso Azul: Pelaje plateado y ojos verdes, tímido con extraños pero leal. Burmés: Musculoso y pesado, muy orientado a las personas. Bombay: Parece una pantera negra en miniatura, le encanta el calor y los regazos. Chartreux: Raza francesa antigua, silencioso y cazador experto con pelaje repelente al agua.",
        },
        {
          heading: "**4. Mutaciones Únicas: Orejas, Colas y Texturas**",
          body: "Características genéticas exóticas. Scottish Fold: Orejas dobladas hacia adelante, posición de 'Buda'; requiere revisión articular. Munchkin: Patas cortas, extrovertido y curioso. Sphynx: Sin pelo, sociable y busca calor; requiere baños semanales. Devon Rex & Cornish Rex: Pelaje rizado u ondulado, traviesos y apegados. American Curl: Orejas hacia atrás. Manx & Japanese Bobtail: El primero sin cola y robusto; el segundo con cola de pompón, símbolo de buena suerte.",
        },
        {
          heading: "**5. Exóticos y Pocas Unidades**",
          body: "Razas menos comunes. Ocicat: Parece un ocelote salvaje, entrenable y sociable. Toyger: Imitación de un tigre, inteligente. Lykoi: El 'gato lobo', apariencia de hombre lobo, curioso y juguetón. Singapura: Una de las razas más pequeñas, travieso y amante de las alturas. Korat: Tailandés gris plateado con corazón en la frente, sensible al ruido y amuleto de buena suerte.",
        },
        {
          heading: "📝 Consejos para Elegir tu Raza",
          body: "Nivel de Actividad: ¿Compañero de sofá (Persa) o atleta (Bengala)? Tiempo de Aseo: ¿Cepillado diario (Maine Coon) o bajo mantenimiento (Ruso Azul)? Vocalización: Si prefieres el silencio, evita Siameses y opta por Ragdolls. Niños y mascotas: Maine Coon y Birmanos son más tolerantes. Alergias: Ninguno es 100% hipoalergénico, pero el Siberiano y el Ruso Azul suelen ser mejor tolerados.",
        }
      ],
    },
  ],
}

      ]
    },
    {
    slug: "adquisicion responsable",
    label: "Adquisicion responsabe",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Razas de gatos",
    subcategories: [
{
  slug: "adquisición chile",
  label: "🇨🇱 Chile",
  topics: [
    {
      slug: "guia-adquisicion-responsable-chile",
      title: "Adquisición Responsable en Chile: Guía Legal y Ética",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Chile, la compra de animales está regulada por la Ley 21.020 (Ley Cholito), que protege el bienestar animal y exige tenencia responsable. Comprar un gato no es como comprar un objeto; es adquirir un ser vivo con necesidades complejas.",
      sections: [
        {
          heading: "**1. ¿Por qué elegir un Criadero Registrado?**",
          body: "Los criaderos éticos preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar que estén inscritos en RENAGACH (Registro Nacional de Gatos de Chile), representante de federaciones como WCF y TICA. Ventajas de comprar con pedigree: Certificación Genética (garantiza la raza), Salud (tests genéticos para descartar enfermedades como PKD en Persas o HCM en Maine Coons) y Socialización (crecen en ambiente familiar, no en jaulas).",
        },
        {
          heading: "Directorio de Referencia (Criaderos Éticos en Chile)",
          body: "Listado orientativo (siempre verifica registros): Maine Coon: Colitas Arriba, Nahuelhuén (Santiago/La Reina). Persa / Himalayo: GatyKey Cattery, Viestmaden Cattery (La Florida). Ragdoll: Reflejo de Luna (temperamento dócil). Somalí: Per-Bast Cattery (único especializado). Sphynx: Ti Voglio Bene, The Kittens House. British Shorthair: Von & Von Cattery (estructura robusta).",
        },
        {
          heading: "**2. Marco Legal: Tus Derechos y Deberes (Ley 21.020)**",
          body: "Para que la transacción sea legal, el criadero debe cumplir con: Microchip Obligatorio (implantado y registrado) y Contrato de Compraventa. El contrato debe detallar garantías de salud (exámenes negativos a FeLV/FIV), compromiso de esterilización y cláusula de devolución. Tu Responsabilidad: Una vez realizada la compra, tú debes inscribir al animal en el Registro Nacional de Mascotas si los datos no fueron actualizados inmediatamente.",
        },
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criadero Ético?**",
          body: "Antes de pagar, verifica: ¿Permiten visitas? Deben estar limpios y en contacto humano. ¿Edad de entrega? NUNCA aceptes un gatito de menos de 12 semanas (3 meses). ¿Documentación completa? Debes recibir Certificado de nacimiento/Pedigree preliminar, carnet de vacunas al día (firmado por veterinario colegiado) y certificado de desparasitación. ¿Transparencia sanitaria? Un buen criador preguntará por tu situación para asegurar un buen hogar.",
        },
        {
          heading: "**4. Importación Legal de Razas Exóticas**",
          body: "Si buscas razas como Lykoi, Toyger o Bengala de líneas específicas, el proceso es estricto: cumplir requisitos del SAG (Servicio Agrícola y Ganadero), certificados sanitarios del país de origen y posibles cuarentenas. Se recomienda asesorarse con una agencia de transporte de mascotas especializada para evitar retenciones en aduana.",
        },
        {
          heading: "¡Cuidado con las 'Fábricas de Gatos'!",
          body: "Evita comprar en ferias libres, mercados informales o anuncios en redes sociales sin dirección física visible. Desconfía de lugares con múltiples razas disponibles inmediatamente. Estos lugares priorizan el lucro sobre el bienestar, resultando en animales con problemas de salud crónicos y vidas cortas. Tu elección consciente ayuda a erradicar este maltrato.",
        }
      ],
    },
  ],
},

{
  slug: "adquisición argentina",
  label: "🇦🇷 Argentina",
  topics: [
    {
      slug: "guia-adquisicion-responsable-argentina",
      title: "Adquisición Responsable en Argentina: Guía Legal y Ética",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Argentina, la tenencia de animales está protegida por la Ley Nacional 27.592 (Ley Alica) y diversas ordenanzas (como la Ley 4040 en CABA), que reconocen a los animales como seres sintientes. Comprar un gato no es una transacción comercial cualquiera; es incorporar un miembro a la familia.",
      sections: [
        {
          heading: "**1. ¿Por qué elegir un Criadero Registrado?**",
          body: "Los criaderos éticos en Argentina preservan la raza, cuidan la salud genética y socializan a los gatitos. Las principales entidades son FAAC (Federación Argentina de Aficionados al Gato), afiliada a la WCF, y clubes locales de TICA o FIFe. Ventajas de comprar con pedigree: Certificación Genética (garantiza ancestros registrados), Salud Preventiva (tests genéticos para PKD o HCM) y Socialización Temprana (estímulos humanos que evitan problemas de conducta).",
        },
        {
          heading: "**2. Marco Legal: Tus Derechos y Deberes**",
          body: "Para que la transacción sea legal en Argentina, el criadero debe cumplir con: Identificación (Microchip), obligatorio en CABA, Córdoba y Santa Fe entre otros. Contrato de Compraventa con datos del animal, garantías de salud, cláusula de devolución y compromiso de esterilización. Carnet de Vacunación: Debe estar firmado por un Médico Veterinario matriculado, con las vacunas triples felinas (y quíntuple si corresponde) al día según la edad.",
        },
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criadero Ético en Argentina?**",
          body: "Antes de pagar, verifica:  ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre; desconfía de entregas en shoppings. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). ¿Documentación completa? Debes recibir Certificado de Nacimiento/Pedigree, carnet de vacunas y factura o recibo. ¿Entrevista al comprador? Un buen criador te preguntará sobre redes en ventanas y tu experiencia previa.",
        },
        {
          heading: "**4. Importación Legal de Razas Exóticas**",
          body: "Si buscas razas no criadas habitualmente (Lykoi, Toyger), el proceso es regulado por el SENASA (Servicio Nacional de Sanidad y Calidad Agroalimentaria). Requisitos: Certificado zoosanitario de origen, vacunación antirrábica y posibles cuarentenas. Se recomienda contratar una agencia de transporte de mascotas especializada; traer un gato por cuenta propia puede resultar en retenciones o multas severas.",
        },
        {
          heading: "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
          body: "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; usa videollamadas en tiempo real). Venden en ferias o plazas: animales sin control sanitario suelen morir pronto ('gato de la semana'). Tienen 'stock' infinito de múltiples razas disponibles inmediatamente. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y alimentación premium que un precio bajo no cubre.",
        },
        {
          heading: "Conclusión",
          body: "Adquirir un gato de raza en Argentina es una responsabilidad legal y moral. Al elegir un criadero registrado en FAAC o federaciones internacionales, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas.",
        }
      ],
    },
  ],
},

{
  slug: "adquisición uruguay",
  label: "🇺🇾  Uruguay",
  topics: [
    {
      slug: "guia-adquisicion-responsable-uruguay",
      title: "Adquisición Responsable en Uruguay: Guía Legal y Ética",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Uruguay, la tenencia de animales está protegida por la Ley Nacional 18.471 (Protección de los Animales) y regulada localmente por decretos como el 319/011 en Montevideo. Comprar un gato no es una transacción comercial cualquiera; es incorporar un miembro sensible a la familia.",
      sections: [
        {
          heading: "**1. ¿Por qué elegir un Criadero Registrado?**",
          body: "Los criaderos éticos en Uruguay preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a la AFU (Asociación Felina Uruguaya), representante de la WCF y, en ocasiones, TICA o FIFe. Ventajas: Certificación Genética (ancestros registrados), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de problemas de conducta).",
        },
        {
          heading: "**2. Marco Legal: Tus Derechos y Deberes**",
          body: "Para una transacción segura en Uruguay, el criadero debe cumplir con: Identificación (Microchip) según ordenanzas municipales (especialmente en Montevideo y Canelones) e inscripción en registros correspondientes. Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (prohibido el abandono) y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario matriculado en el MVZ, con la triple felina al día.",
        },
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criadero Ético en Uruguay?**",
          body: "Antes de pagar, verifica: ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre; desconfía de entregas en shoppings. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). ¿Documentación completa? Debes recibir Certificado de Nacimiento/Pedigree de la AFU, carnet de vacunas y factura o recibo. ¿Entrevista al comprador? Un buen criador querrá saber sobre tus protecciones en ventanas y balcones.",
        },
        {
          heading: "**4. Importación Legal de Razas Exóticas**",
          body: "El proceso es regulado por el MGAP-DIGEGA (Dirección General de Servicios Agrícolas). Requisitos: Certificado zoosanitario internacional, vacunación antirrábica vigente y protocolos de ingreso. Se recomienda contratar una agencia de transporte de mascotas especializada ('Pet Relocation') para gestionar trámites aduaneros y evitar la retención del animal en frontera.",
        },
        {
          heading: "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
          body: "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (panleucopenia). Tienen 'stock' infinito: indica una fábrica donde las hembras son usadas indiscriminadamente. Precios sospechosamente bajos: la crianza ética tiene costos altos en salud y registros que un precio bajo no puede cubrir.",
        },
        {
          heading: "Conclusión",
          body: "Adquirir un gato de raza en Uruguay es una responsabilidad legal y moral. Al elegir un criadero registrado en la AFU, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas.",
        }
      ],
    },
  ],
},

{
  slug: "adquisición peru",
  label: "🇵🇪 Perú",
  topics: [
    {
      slug: "guia-adquisicion-responsable-peru",
      title: "Adquisición Responsable en Perú: Guía Legal y Ética",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Perú, la tenencia de animales está protegida por la Ley N° 30407 (Ley de Protección y Bienestar Animal) y regulada técnicamente por el SENASA bajo el MIDAGRI. Esta ley reconoce a los animales como seres sintientes y prohíbe su maltrato, abandono y comercio ilegal.",
      sections: [
        {
          heading: "**1. ¿Por qué elegir un Criadero Registrado?**",
          body: "Los criaderos éticos en Perú preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a la FEPERU (Federación Peruana de Felinos), representante de WCF y, en algunos casos, TICA o FIFe. Ventajas: Certificación Genética (ancestros oficiales), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de problemas de conducta como miedos o agresividad).",
        },
        {
          heading: "**2. Marco Legal: Tus Derechos y Deberes**",
          body: "Para que la transacción sea legal en Perú, el criadero debe cumplir con: Identificación (Microchip) exigido por muchas municipalidades (como Lima Metropolitana, Miraflores, San Isidro) para el registro municipal. Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (prohibido el abandono) y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario colegiado, con la triple felina (y quíntuple si corresponde) al día.",
        },
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criadero Ético en Perú?**",
          body: "Antes de pagar, verifica: ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre; desconfía de entregas en malls o parques. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). ✅ ¿Documentación completa? Debes recibir Certificado de Nacimiento/Pedigree de la FEPERU, carnet de vacunas y factura o recibo. ✅ ¿Entrevista al comprador? Un buen criador querrá saber sobre tus protecciones en ventanas y balcones, vital en edificios altos de Lima.",
        },
        {
          heading: "**4. Importación Legal de Razas Exóticas**",
          body: "El proceso es regulado estrictamente por el SENASA. Requisitos: Certificado zoosanitario internacional, vacunación antirrábica vigente y protocolos de ingreso. Se recomienda contratar una agencia de transporte de mascotas especializada ('Pet Relocation') para gestionar trámites ante el SENASA y evitar retenciones en el aeropuerto Jorge Chávez o multas severas.",
        },
        {
          heading: "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
          body: "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (moquillo/panleucopenia). Tienen 'stock' infinito de múltiples razas: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y alimentación premium que un precio bajo no cubre.",
        },
        {
          heading: "Conclusión",
          body: "Adquirir un gato de raza en Perú es una responsabilidad legal y moral. Al elegir un criadero registrado en la FEPERU, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas. Recuerda: Antes de comprar, considera también la adopción.",
        }
      ],
    },
  ],
},

{
  slug: "adquisición bolivia",
  label: "🇧🇴 Bolivia",
  topics: [
    {
      slug: "guia-adquisicion-responsable-bolivia",
      title: "Adquisición Responsable en Bolivia: Guía Legal y Ética",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Bolivia, la tenencia de animales y su bienestar son fundamentales, y el comercio de razas debe realizarse bajo estándares éticos y legales que reconozcan a los animales como seres sintientes, prohibiendo su maltrato y comercio ilegal.",
      sections: [
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criadero Ético en Bolivia?**",
          body: "Antes de realizar cualquier transferencia o pago, verifica estos puntos. Si la respuesta es 'no' a alguna, desconfía. ¿Permiten visitas presenciales? Un criador ético te invitará a conocer su domicilio o cattery. Debes poder ver a la madre y el entorno limpio y seguro. Desconfía de quienes solo hacen entregas en puntos medios, malls o parques. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). Es crucial para el destete emocional e inmunológico. ¿Documentación completa? Debes recibir Certificado de Nacimiento / Pedigree (o pre-pedigree emitido por la asociación felina correspondiente), Carnet de vacunas y desparasitaciones al día, y Factura o recibo de compra. ¿Entrevista al comprador? Un buen criador te hará preguntas sobre tu hogar, si tienes protecciones en ventanas/balcones (vital en edificios altos de La Paz o Santa Cruz) y tu experiencia.",
        },
        {
          heading: "**4. Importación Legal de Razas Exóticas**",
          body: "Si buscas razas que no se crían habitualmente en Bolivia (como Lykoi, Toyger o líneas específicas de Bengalás), el proceso es regulado estrictamente por el SENASAG (Servicio Nacional de Sanidad Agropecuaria e Inocuidad Alimentaria). Requisitos: Certificado zoosanitario internacional del país de origen, vacunación antirrábica vigente, y cumplimiento de los protocolos de ingreso. Cuarentena: Dependiendo del país de origen y el estado sanitario, puede requerirse cuarentena o inspecciones adicionales. Recomendación: Contrata siempre una agencia de transporte de mascotas especializada ('Pet Relocation') que gestione los trámites ante el SENASAG para evitar retenciones en aeropuertos internacionales (El Alto, Viru Viru, etc.) o multas severas.",
        },
        {
          heading: " ¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
          body: "En Bolivia, el comercio ilegal es frecuente en plataformas online y ferias informales. 🚩 NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: los gatitos expuestos sin higiene suelen estar enfermos (panleucopenia, leucemia) y tienen alta mortalidad. Tienen 'stock' infinito: probable fábrica de explotación donde las hembras son usadas indiscriminadamente. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y registros que un precio bajo no puede cubrir.",
        },
        {
          heading: "Conclusión",
          body: "Adquirir un gato de raza en Bolivia es una responsabilidad legal y moral. Al elegir un criadero registrado en la AFUBO o asociaciones reconocidas, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas. Recuerda: Antes de comprar, considera también la adopción. Muchas organizaciones rescatan gatos de raza o mestizos hermosos que buscan un hogar lleno de amor en todo el país.",
        }
      ],
    },
  ],
},
{
  slug: "adquisición colombia",
  label: "🇨🇴  Colombia",
  topics: [
    {
      slug: "guia-adquisicion-responsable-colombia",
      title: "Adquisición Responsable en Colombia: Guía Legal y Ética",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Colombia, la tenencia de animales está protegida por la Ley 1774 de 2016, que reconoce a los animales como seres sintientes no susceptibles de ser cosas, y prohíbe su maltrato y abandono. Además, existen normativas locales en ciudades como Bogotá, Medellín y Cali.",
      sections: [
        {
          heading: "**1. ¿Por qué elegir un Criadero Registrado?**",
          body: "Los criaderos éticos en Colombia preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a ASOFELGA (Asociación Colombiana de Criadores de Gatos), representante de la WCF y, en algunos casos, TICA o FIFe. Ventajas: Certificación Genética (ancestros oficiales), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de miedos y agresividad).",
        },
        {
          heading: "**2. Marco Legal: Tus Derechos y Deberes (Ley Alica)**",
          body: "Para una transacción segura en Colombia, el criadero debe cumplir con: Identificación (Microchip) exigido por alcaldías (como Bogotá con el Decreto 319 de 2019) para el registro municipal. Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (prohibido el abandono) y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario Zootecnista con tarjeta profesional vigente.",
        },
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criadero Ético en Colombia?**",
          body: "Antes de pagar, verifica: ✅ ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre; desconfía de entregas en centros comerciales o parques. ✅ ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). Es crucial para el destete emocional e inmunológico. ✅ ¿Documentación completa? Debes recibir Certificado de Nacimiento / Pedigree de ASOFELGA, carnet de vacunas y factura o recibo. ✅ ¿Entrevista al comprador? Un buen criador querrá saber sobre tus protecciones en ventanas y balcones, vital en edificios altos de Bogotá o Medellín.",
        },
        {
          heading: "**4. Importación Legal de Razas Exóticas**",
          body: "El proceso es regulado estrictamente por el ICA (Instituto Colombiano Agropecuario). Requisitos: Certificado zoosanitario internacional, vacunación antirrábica vigente y cumplimiento de protocolos de ingreso (Resolución ICA). Se recomienda contratar una agencia de transporte de mascotas especializada ('Pet Relocation') para gestionar trámites ante el ICA y evitar retenciones en aeropuertos (El Dorado, José María Córdova, etc.) o multas severas.",
        },
        {
          heading: "⚠️ ¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
          body: "🚩 NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (moquillo/panleucopenia). Tienen 'stock' infinito de múltiples razas: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y registros que un precio bajo no puede cubrir.",
        },
        {
          heading: "Conclusión",
          body: "Adquirir un gato de raza en Colombia es una responsabilidad legal y moral. Al elegir un criadero registrado en ASOFELGA, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas.",
        }
      ],
    },
  ],
},
{
  slug: "adquisición ecuador",
  label: "🇪🇨 Ecuador",
  topics: [
    {
      slug: "guia-adquisicion-responsable-ecuador",
      title: "Adquisición Responsable en Ecuador: Guía Legal y Ética",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Ecuador, la tenencia de animales está protegida por el Código Orgánico de Bienestar Animal (COBA), promulgado en 2022. Esta ley reconoce a los animales como seres sintientes, prohíbe su maltrato, abandono y regula estrictamente la crianza y comercialización.",
      sections: [
        {
          heading: "**1. ¿Por qué elegir un Criadero Registrado?**",
          body: "Los criaderos éticos en Ecuador preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a asociaciones felinas reconocidas (WCF, TICA) y que cuenten con los permisos municipales correspondientes. Ventajas: Certificación Genética (ancestros oficiales), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de miedos y agresividad).",
        },
        {
          heading: "**2. Marco Legal: Tus Derechos y Deberes (COBA)**",
          body: "Para que la transacción sea legal en Ecuador, el criadero debe cumplir con: Identificación (Microchip) exigido por el COBA y ordenanzas municipales (Quito, Guayaquil, Cuenca) para el registro municipal. Permiso de Funcionamiento emitido por el GAD Municipal de su cantón. Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (prohibido el abandono) y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario Zootecnista registrado.",
        },
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criadero Ético en Ecuador?**",
          body: "Antes de pagar, verifica: ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre; desconfía de entregas en centros comerciales o parques. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). Es crucial para el destete emocional e inmunológico. ¿Documentación completa? Debes recibir Certificado de Nacimiento / Pedigree oficial, carnet de vacunas al día y factura o recibo (cumplimiento tributario). ¿Entrevista al comprador? Un buen criador querrá saber sobre tus protecciones en ventanas y balcones, vital en edificios altos de Quito o Guayaquil.",
        },
        {
          heading: "**4. Importación Legal de Razas Exóticas**",
          body: "El proceso es regulado estrictamente por AGROCALIDAD (Agencia de Regulación y Control Fito y Zoosanitario). Requisitos: Certificado zoosanitario internacional, vacunación antirrábica vigente y protocolos de ingreso. Se recomienda contratar una agencia de transporte de mascotas especializada ('Pet Relocation') para gestionar trámites y evitar retenciones en aeropuertos (Mariscal Sucre, José Joaquín de Olmedo, etc.) o multas severas.",
        },
        {
          heading: "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
          body: "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (panleucopenia, leucemia). Tienen 'stock' infinito de múltiples razas: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y registros que un precio bajo no puede cubrir.",
        },
        {
          heading: "Conclusión",
          body: "Adquirir un gato de raza en Ecuador es una responsabilidad legal y moral bajo el COBA. Al elegir un criadero registrado y con permisos municipales, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas. Recuerda: Antes de comprar, considera también la adopción.",
        }
      ],
    },
  ],
},

{
  slug: "adquisición venezuela",
  label: "🇻🇪 Venezuela",
  topics: [
    {
      slug: "guia-adquisicion-responsable-venezuela",
      title: "Adquisición Responsable en Venezuela: Guía Legal y Ética",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Venezuela, la tenencia de animales está protegida por la Ley de Protección a la Fauna Doméstica Libre y en Cautiverio y diversas ordenanzas municipales que promueven la tenencia responsable, prohíben el maltrato y el abandono.",
      sections: [
        {
          heading: "**1. ¿Por qué elegir un Criadero Registrado?**",
          body: "Los criaderos éticos en Venezuela preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a la Federación Canina de Venezuela (FCV) en su división felina, o a asociaciones como ASOVEFEL (Asociación Venezolana de Felinos), vinculadas a la WCF o TICA. Ventajas: Certificación Genética (ancestros oficiales), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de miedos y agresividad).",
        },
        {
          heading: "**2. Marco Legal: Tus Derechos y Deberes**",
          body: "Para que la transacción sea legal en Venezuela, el criadero debe cumplir con: Identificación (Microchip) exigido o recomendado en alcaldías como Chacao, Baruta, El Hatillo (Caracas), Valencia y Maracaibo para el registro municipal. Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario colegiado (CVZ), con las vacunas triples felinas al día según la edad.",
        },
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criadero Ético en Venezuela?**",
          body: "Antes de pagar, verifica: ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre; desconfía de entregas en metros o centros comerciales. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). Es crucial para el destete emocional e inmunológico. ¿Documentación completa? Debes recibir Certificado de Nacimiento / Pedigree oficial, carnet de vacunas al día y factura o recibo. ¿Entrevista al comprador? Un buen criador querrá saber sobre tus protecciones en ventanas y balcones, vital en edificios altos de Caracas o Valencia.",
        },
        {
          heading: "**4. Importación Legal de Razas Exóticas**",
          body: "El proceso es regulado estrictamente por el INSAI (Instituto Nacional de Salud Agrícola Integral). Requisitos: Certificado zoosanitario internacional, vacunación antirrábica vigente y protocolos de ingreso. Se recomienda contratar una agencia de transporte de mascotas especializada ('Pet Relocation') para gestionar trámites ante el INSAI y evitar retenciones en el Aeropuerto Internacional Simón Bolívar o multas severas.",
        },
        {
          heading: "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
          body: "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; no transfieras divisas ni bolívares sin videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (panleucopenia, leucemia). Tienen 'stock' infinito de múltiples razas: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en alimentación importada/premium que un precio bajo no cubre.",
        },
        {
          heading: "Conclusión",
          body: "Adquirir un gato de raza en Venezuela es una responsabilidad legal y moral. Al elegir un criadero registrado en ASOVEFEL o afiliado a federaciones internacionales, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas. Recuerda: Antes de comprar, considera también la adopción.",
        }
      ],
    },
  ],
},
{
  slug: "adquisición paraguay",
  label: "🇵🇾  Paraguay",
  topics: [
    {
      slug: "guia-adquisicion-responsable-paraguay",
      title: "Adquisición Responsable en Paraguay: Guía Legal y Ética",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Paraguay, la tenencia de animales está protegida por la Ley N° 483/95 de Protección a los Animales y por la Ley N° 6541/20 de Bienestar Animal, que reconoce a los animales como seres sintientes, prohíbe su maltrato y abandono, y regula la tenencia responsable.",
      sections: [
        {
          heading: "**1. ¿Por qué elegir un Criadero Registrado?**",
          body: "Los criaderos éticos en Paraguay preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a FELPAR (Federación Felina del Paraguay), representante de la WCF o TICA. Ventajas: Certificación Genética (ancestros registrados oficialmente), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de problemas de conducta como miedos o agresividad).",
        },
        {
          heading: "**2. Marco Legal: Tus Derechos y Deberes**",
          body: "Para una transacción segura en Paraguay, el criadero debe cumplir con: Identificación (Microchip) implementada en municipalidades como Asunción, Luque, San Lorenzo, Lambaré, etc. Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (prohibido abandonar) y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario registrado en el CONAMEVET (Consejo Nacional de Medicina Veterinaria), con las vacunas triples felinas al día.",
        },
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criadero Ético en Paraguay?**",
          body: "Antes de pagar, verifica: ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre; desconfía de entregas en shoppings o parques. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). Es crucial para el destete emocional e inmunológico. ¿Documentación completa? Debes recibir Certificado de Nacimiento / Pedigree de FELPAR, carnet de vacunas y factura o recibo. ✅ ¿Entrevista al comprador? Un buen criador querrá saber sobre tus protecciones en ventanas y balcones, vital en edificios altos de Asunción.",
        },
        {
          heading: "**4. Importación Legal de Razas Exóticas**",
          body: "El proceso es regulado estrictamente por el SENACSA (Servicio Nacional de Calidad y Salud Animal). Requisitos: Certificado zoosanitario internacional, vacunación antirrábica vigente y protocolos de ingreso. Se recomienda contratar una agencia de transporte de mascotas especializada ('Pet Relocation') para gestionar trámites ante el SENACSA y evitar retenciones en el Aeropuerto Silvio Pettirossi o multas severas.",
        },
        {
          heading: "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
          body: "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; no transfieras dinero ni giros sin videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (panleucopenia, leucemia). Tienen 'stock' infinito: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y alimentación premium que un precio bajo no cubre.",
        },
        {
          heading: "Conclusión",
          body: "Adquirir un gato de raza en Paraguay es una responsabilidad legal y moral bajo la Ley de Bienestar Animal. Al elegir un criadero registrado en FELPAR, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas. Recuerda: Antes de comprar, considera también la adopción.",
        }
      ],
    },
  ],
},

{
  slug: "adquisición brasil",
  label: "🇧🇷  Brasil",
  topics: [
    {
      slug: "guia-adquisicion-responsable-brasil",
      title: "Adquisición Responsable en Brasil: Guía Legal y Ética",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Brasil, la tenencia de animales está protegida por la Lei Federal nº 14.064/2020 (Lei Sansão) y por la Lei Arouca (Lei nº 11.794/2008). Comprar un gato no es una transacción comercial cualquiera; es incorporar un miembro sensible a la familia.",
      sections: [
        {
          heading: "**1. ¿Por qué elegir un Criadero Registrado?**",
          body: "Los criaderos éticos en Brasil preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a GATOS do BRASIL (representante oficial de la WCF), o a clubes de TICA o FIFe. Ventajas: Certificación Genética (ancestros oficiales), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana ('home raised') para prevenir problemas de conducta.",
        },
        {
          heading: "**2. Marco Legal: Tus Derechos y Deberes**",
          body: "Para que la transacción sea legal en Brasil, el criadero debe cumplir con: Identificación (Microchip) exigido en ciudades como São Paulo, Río de Janeiro y Curitiba para el registro municipal (RAA). Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (abandono é crime) y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario registrado en el CRMV, con las vacunas V3/V4/V5 al día según la edad.",
        },
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criadero Ético en Brasil?**",
          body: "Antes de realizar cualquier transferencia (PIX), verifica: ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre; desconfía de entregas en parques o shoppings. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). ¿Documentación completa? Debes recibir Certificado de Nacimiento / Pedigree de GATOS do BRASIL/WCF, carnet de vacunas y Nota Fiscal o recibo. ¿Entrevista al comprador? Un buen criador querrá saber sobre tus 'telas de proteção' (esenciales en edificios altos de Brasil).",
        },
        {
          heading: "**4. Importación Legal de Razas Exóticas**",
          body: "El proceso es regulado estrictamente por el MAPA (Ministério da Agricultura, Pecuária e Abastecimento) a través del sistema Vigiagro. Requisitos: Certificado zoosanitario internacional, vacunación antirrábica vigente y protocolos de ingreso. Se recomienda contratar una agencia de transporte de mascotas especializada ('Pet Relocation') para evitar la retención del animal en aeropuertos como Guarulhos o Galeão.",
        },
        {
          heading: "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
          body: "NO COMPRES SI: Te piden PIX por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene. Tienen 'stock' infinito de múltiples razas: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y registros que un precio bajo no puede cubrir.",
        },
        {
          heading: "Conclusión",
          body: "Adquirir un gato de raza en Brasil es una responsabilidad legal y moral bajo la Lei Sansão y la Lei Arouca. Al elegir un criadero registrado en GATOS do BRASIL, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas. Recuerda: Antes de comprar, considera también la adopción.",
        }
      ],
    },
  ],
},
{
  slug: "adquisición españa",
  label: "🇪🇸 España",
  topics: [
    {
      slug: "guia-adquisicion-responsable-espana",
      title: "Adquisición Responsable en España: Guía Legal y Ética",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En España, la normativa ha cambiado drásticamente con la entrada en vigor de la nueva Ley de Bienestar Animal (Ley 7/2023). Esta ley prohíbe la venta de perros, gatos y hurones en establecimientos comerciales y exige que toda adquisición se realice a través de criadores registrados o entidades de protección animal.",
      sections: [
        {
          heading: "**1. ¿Por qué elegir un Criador Registrado (Aficionado)?**",
          body: "En España, los criadores éticos deben estar inscritos como 'Núcleo Zoológico' o 'Criador Aficionado' en su Comunidad Autónoma. La forma más segura de identificarlos es verificar que estén afiliados a la AFEC (Asociación Felina Española), representante de la WCF en el país, o a otras federaciones reconocidas como FIFe. Ventajas: Legalidad Garantizada (solo criadores registrados pueden vender bajo la nueva ley), Salud Genética (tests de PKD o HCM) y Socialización (garantiza un temperamento equilibrado).",
        },
        {
          heading: "**2. Marco Legal: Tus Derechos y Deberes (Ley 7/2023)**",
          body: "Para que la transacción sea legal en España, el criador debe cumplir con: Microchip Obligatorio (registrado en el RIAC de su Comunidad Autónoma antes de la entrega). Documentación Sanitaria: Pasaporte europeo o cartilla con vacunas (Trivalente) y desparasitaciones al día. Contrato de Compraventa obligatorio con número de núcleo zoológico, garantías de salud y cláusula de devolución. Prohibición de Venta en Tiendas: La venta en tiendas de mascotas es ilegal; solo puede hacerse directamente por el criador o mediante adopción.",
        },
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criador Ético en España?**",
          body: "Antes de pagar, verifica: ¿Permiten visitas? Debes conocer su domicilio o cattery y ver a la madre; desconfía de entregas en parkings. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). ¿Documentación completa? Pedigree oficial de AFEC/WCF o similar, microchip ya registrado y cartilla firmada por veterinario colegiado. ¿Transparencia? Un buen criador preguntará por tu vivienda (redes en ventanas en pisos altos) y no tendrá prisa por vender rápido.",
        },
        {
          heading: "**4. Importación Legal desde la UE y Terceros Países**",
          body: "Desde la UE: Pasaporte Europeo, microchip ISO y vacuna antirrábica (mínimo 21 días de antigüedad). Desde fuera de la UE (Reino Unido, EE.UU.): Certificado Zoosanitario oficial, titulación de anticuerpos (si aplica) y cumplimiento de requisitos del Ministerio de Agricultura, Pesca y Alimentación (MAPA). Se recomienda usar agencias de transporte especializadas para evitar cuarentenas o devoluciones al origen.",
        },
        {
          heading: "¡Cuidado con las Estafas y el Tráfico Ilegal!",
          body: "NO COMPRES SI: Te piden dinero por adelantado sin ver al gato (exige videollamada en tiempo real). No tienen número de Núcleo Zoológico visible: es obligatorio exhibirlo en todo anuncio. Entregan cachorros menores de 3 meses: es ilegal y cruel. Precios sospechosamente bajos: suelen indicar 'granjas de cachorros' importadas ilegalmente de Europa del Este sin garantías de salud ni ética.",
        },
        {
          heading: "Conclusión",
          body: "Adquirir un gato de raza en España es un acto regulado y protegido. Al elegir un criador afiliado a la AFEC y con Núcleo Zoológico, estás cumpliendo la Ley de Bienestar Animal, financiando la preservación de la raza y evitando el sufrimiento animal. Recuerda: Antes de comprar, considera la adopción en protectoras específicas como Rescate Persa o Maine Coon Rescue.",
        }
      ],
    },
  ],
},
{
  slug: "adquisición mexico",
  label: "🇲🇽 México",
  topics: [
    {
      slug: "guia-tenencia-responsable-mexico",
      title: "Tenencia Responsable en México: Guía Legal y Ética para Adquirir un Gato",
      intro: "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En México, la protección animal se rige por la Ley Federal de Protección Animal y por leyes estatales y locales (como la de CDMX o Jalisco), que reconocen a los animales como seres sintientes, prohíben el maltrato y regulan la tenencia responsable.",
      sections: [
        {
          heading: "**1. ¿Por qué elegir un Criadero Registrado?**",
          body: "Los criaderos éticos en México preservan la raza, cuidan la salud genética y socializan a los gatitos en entorno familiar. La forma más segura de identificarlos es verificar su afiliación a la AMFE (Asociación Mexicana Felina), representante de la WCF y TICA. Ventajas: Certificación Genética (ancestros registrados), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de miedos y agresividad).",
        },
        {
          heading: "**2. Marco Legal: Tus Derechos y Deberes**",
          body: "Para que la transacción sea legal en México, el criadero debe cumplir con: Identificación (Microchip) obligatorio en entidades como CDMX (registro RECAN), Edomex, Jalisco y Nuevo León. Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (el abandono es delito) y compromiso de esterilización. Cartilla de Vacunación: Firmada por un Médico Veterinario Zootecnista con cédula profesional vigente, con las triples felinas al día.",
        },
        {
          heading: "**3. Checklist: ¿Cómo detectar un Criadero Ético en México?**",
          body: "Antes de pagar, verifica: ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre; desconfía de entregas en plazas comerciales o metros. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). ¿Documentación completa? Certificado de Nacimiento / Pedigree (AMFE/WCF o TICA), cartilla de vacunas y factura o recibo. ✅ ¿Entrevista al comprador? Un buen criador querrá saber sobre tus protecciones en ventanas y balcones, vital en departamentos de CDMX, Monterrey o Guadalajara.",
        },
        {
          heading: "**4. Importación Legal de Razas Exóticas**",
          body: "El proceso es regulado estrictamente por el SENASICA (Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria) bajo la SADER. Requisitos: Certificado zoosanitario internacional, vacunación antirrábica vigente y protocolos de ingreso. Se recomienda contratar una agencia de transporte de mascotas especializada ('Pet Relocation') para evitar retenciones en aeropuertos como el de la CDMX o Cancún.",
        },
        {
          heading: "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
          body: "NO COMPRES SI: Te piden depósitos por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en tianguis o calles: alta mortalidad por falta de higiene (moquillo/panleucopenia). Tienen 'stock' infinito: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y registros que un precio bajo no puede cubrir.",
        },
        {
          heading: "Conclusión",
          body: "Adquirir un gato de raza en México es una responsabilidad legal y moral. Al elegir un criadero registrado en la AMFE, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas.",
        }
      ],
      
    },
  ],
},

  ]
    },
     {
    slug: "historia",
    label: "historia, Origen y expansión",
    emoji: "",
    color: "#9b6bb5",
    bg: "#f3eef8",
    description: "Estimulación, juguetes y enriquecimiento",
    subcategories: [
      {
  slug: "historia-felina",
  label: "El Corazón del Origen",
  topics: [
    {
      slug: "origen-encuentro-nilo",
      title: "Egipto, en el Nilo",
      intro: "La historia del gato doméstico comenzó hace unos 9.000 años en el valle del Nilo, Egipto. Aunque existen muchas especies de felinos, todos nuestros gatos actuales (incluso los exóticos) provienen de una única subespecie: el gato silvestre norteafricano o Felis lybica. El 'flechazo' con los humanos no fue planeado, sino una asociación de conveniencia:",
      sections: [
        {
          heading: "El problema, la solución y el pacto",
          body: "El problema: Los egipcios dependían de la agricultura y guardaban el grano en grandes silos. Estos almacenes atraían plagas de ratas y ratones. La solución: Los gatos se acercaron a las aldeas atraídos por la abundancia de roedores. El pacto: Los humanos aceptaron encantados este servicio de 'control de plagas' y así comenzó una relación simbiótica de beneficio mutuo.",
        },
        {
          heading: "De Cazadores a Dioses",
          body: "Con el tiempo, el gato pasó de ser un simple guardián del granero a un miembro sagrado de la familia. Los egipcios llegaron a deificarlos, relacionándolos con la diosa Bastet (que representaba la dulzura y la protección) y con el dios sol, Ra. Era tal su importancia que se han hallado millones de momias de gatos y tumbas de lujo, como la de Osiris Tamat, el gato favorito de un príncipe egipcio.",
        },
        {
          heading: "La Conquista del Mundo: Roma y los Vikingos",
          body: "Aunque el documento se centra en el origen nilótico, la historia continuó cuando el gato salió de Egipto para conquistar nuevos continentes: El Gato en Roma: Los romanos, al ver la eficacia de los gatos egipcios, los adoptaron rápidamente. Para ellos, el gato era un símbolo de libertad e independencia. Lo llevaron consigo por todo el Imperio Romano (Europa, el norte de África y Gran Bretaña), utilizándolos principalmente para proteger sus campamentos militares y hogares de los roedores. Los Gatos Viajeros de los Vikingos: Durante la Edad Media, los vikingos jugaron un papel crucial en la expansión del gato hacia el norte. Eran excelentes navegantes y siempre llevaban gatos en sus barcos (especialmente el 'Gato del Bosque de Noruega') para proteger las provisiones de comida durante las largas travesías. Gracias a los vikingos, los gatos llegaron a lugares tan remotos como Escandinavia y, eventualmente, a las Américas.",
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
      intro: "el gato doméstico no apareció por casualidad en el Nilo. La clave fue la agricultura sedentaria. Egipto era el 'granero del mundo', y los silos de cereales eran imanes para los roedores.",
      sections: [
        {
          heading: "La Transformación Religiosa",
          body: "El gato pasó de ser un aliado útil a un ser divino. La diosa Bastet se representaba con cabeza de gata y simbolizaba el hogar, la fertilidad y la protección. Matar a un gato en el antiguo Egipto era un crimen castigado con la muerte.",
        },
        {
          heading: "Lujo y Respeto",
          body: "El documento destaca el caso del gato Osiris Tamat, mascota del príncipe Tutmosis. Fue enterrado con honores en un sarcófago de piedra caliza, envuelto en lino fino y con joyas, demostrando que para la realeza egipcia, los gatos eran verdaderos compañeros de vida y del 'más allá'.",
        },
        {
          heading: "Prohibición de Exportación",
          body: "Los egipcios valoraban tanto a sus gatos que prohibieron estrictamente sacarlos del país. Sin embargo, esto no impidió que el 'secreto' de estos felinos se extendiera.",
        },
        {
          heading: "La Gran Expansión: ¿Cómo llegaron a otros continentes?",
          body: "El camino del gato hacia el resto del mundo se dio principalmente a través de las rutas comerciales marítimas: 1. Los Fenicios: Los primeros 'contrabandistas'. Fueron los grandes navegantes del Mediterráneo. Se dice que sacaron gatos de Egipto de contrabando para venderlos en sus rutas comerciales. Gracias a ellos, el gato llegó a las islas griegas, a la península itálica y al sur de España mucho antes de lo previsto. 2. Roma: Los gatos en las legiones. Cuando los romanos conquistaron Egipto, quedaron fascinados por el gato (lo preferían al hurón, que era el animal que usaban antes para los ratones). Al expandir su Imperio, los legionarios llevaban gatos en sus caravanas y barcos para proteger los suministros. Así, el gato se introdujo en Europa Central y Gran Bretaña. 3. Asia y la Ruta de la Seda. A través de las rutas terrestres comerciales, los gatos llegaron a Asia Central. En países como China y Japón, fueron recibidos con honores similares a los de Egipto. En Japón, por ejemplo, los monjes budistas los usaban para proteger los valiosos manuscritos de papel de los ratones en los templos. 4. La Conquista de América. Los gatos no llegaron a América hasta la época de los exploradores europeos (siglos XV y XVI). En barcos como los de Cristóbal Colón o más tarde el Mayflower, los gatos eran tripulantes esenciales. Su misión era evitar que las ratas se comieran las raciones de comida de los marineros y que propagaran enfermedades en el espacio confinado del barco.",
        },
        {
          heading: "Resumen de la Evolución",
          body: "África: Origen biológico (Felis lybica). Europa: Introducidos por fenicios y romanos; luego expandidos por vikingos hacia el norte. Asia: Llegaron a través de la Ruta de la Seda y el comercio marítimo hacia India y Japón. América y Oceanía: Llegaron siglos después en los barcos de los colonizadores europeos.",
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
    slug: "cuidado-gatito",
    label: "Cuidado del Gatito",
    emoji: "",
    color: "#e67e22",
    bg: "#fef3e2",
    description: "Guía integral desde el neonato hasta la edad adulta",
    subcategories: [
      {
        slug: "neonatos",
        label: "Neonatos (0-20 días)",
        topics: [
          {
            slug: "guia-neonatos",
            title: "Guía integral para el cuidado del gatito",
            intro: "Fundamentos biológicos, rescate, control térmico, alimentación con biberón, estimulación de esfínteres y signos de alarma en neonatos.",
            sections: [
              {
                heading: "Fundamentos biológicos y conductuales",
                body: "El gato no es un perro pequeño ni un humano en miniatura. Sentidos adaptados a la caza nocturna: vista con tapetum lucidum, oído de frecuencias agudas, bigotes sensores como radar, y órgano de Jacobson para analizar olores complejos. El ronroneo no siempre indica felicidad; puede expresar dolor o estrés."
              },
              {
                heading: "Primeros pasos: Rescate y cálculo de edad",
                body: "Al encontrar un gatito: calor inmediato con ropa seca, no separar innecesariamente de hermanos, traslado en caja oscura y ventilada. Cálculo de edad: cordón umbilical (0-4 días), ojos cerrados (4-6 días), apertura de ojos (7-9 días), dientes emergiendo (15-18 días), caminata ágil (25-30 días)."
              },
              {
                heading: "Ambiente, temperatura y humedad",
                body: "Control térmico crítico hasta las 3 semanas: usar botellas de agua caliente envueltas en toallas, colocar en un extremo para que puedan alejarse. Temperatura ideal: 38-39.5°C. Prohibido mantas eléctricas. Control de humedad: nunca dejar húmedo, secar inmediatamente con toalla."
              },
              {
                heading: "Alimentación y nutrición (0-20 días)",
                body: "Usar fórmula específica para gatitos (Royal Canin, Lactadiet). Emergencia: leche de cabra + huevo crudo. NUNCA leche humana o de vaca sola. Técnica: posición horizontal, tetina inclinada, gota previa en lengua. Frecuencia: cada 2-3h (0-5 días: 2-5ml, 5-10 días: 3-7ml, 10-15 días: 4-10ml)."
              },
              {
                heading: "Higiene, eliminación y estimulación",
                body: "Estimulación de esfínteres: frotar zona ano-genital con gasa húmeda después de cada toma. Orina aparece rápido, defecación puede tardar 24h. Estreñimiento: bastoncillo con aceite de oliva, gotas de aceite de parafina en biberón, o enema casero (agua tibia+jabón suave) si >3 días sin defecar."
              },
              {
                heading: "Signos de alarma en neonatos",
                body: "No quiere comer: verificar temperatura y heces. Se aparta de hermanos: revisar signos vitales. Diarrea/vómitos: riesgo alto deshidratación. Pegajoso/húmedo: secar inmediatamente. Dificultad respiratoria: gasa húmeda tibia en cuello/cara. Regla de oro: si alimentación + temperatura fallan simultáneamente = riesgo inminente."
              }
            ]
          }
        ]
      },
      {
        slug: "destete-crecimiento",
        label: "Destete y Crecimiento (20 días - 12 meses)",
        topics: [
          {
            slug: "guia-destete",
            title: "Destete, crecimiento y transición a vida adulta",
            intro: "Primera comida sólida, necesidades nutricionales por etapas, socialización, educación conductual, madurez sexual y esterilización.",
            sections: [
              {
                heading: "Destete y primera comida sólida (~20-60 días)",
                body: "A los 18-20 días emergen dientes. Ofrecer comida húmeda para kitten en papilla sobre toalla o con el dedo. Si rechaza: trocitos de pollo crudo/cocido o caldo de pollo sin sal. Continuar biberón al menos 2 semanas más. Mantener acceso a agua fresca y pienso kitten."
              },
              {
                heading: "Crecimiento y necesidades nutricionales (2-12 meses)",
                body: "Carnívoro estricto: requiere más proteína que el perro. Come 15-20 veces al día en pequeñas cantidades. Requerimientos: 7-8 semanas ~200 kcal/kg, 6 meses ~150 kcal/kg, adulto ~90 kcal/kg. Transición de alimento: mezclar progresivamente durante 1 semana. NUNCA acostumbrar a comer de la mesa."
              },
              {
                heading: "Socialización, contacto y educación (2-7 semanas)",
                body: "Ventana crítica para aprender pautas felinas. Primer día: silencio, sin manipulación excesiva, manta con olor materno. Los gatos aman la rutina; cambios bruscos generan estrés. Educación: detectar superficies para rascado, interrumpir acciones prohibidas con distracción (sonido seco, palmada suave en superficie). NUNCA castigo físico ni gritos."
              },
              {
                heading: "Salud, prevención y signos de alarma",
                body: "Primera visita veterinaria: examen general, temperatura, estado dental. Vacunación inicia a las 8-10 semanas. Desparasitación interna desde el 1er mes (cada 4 meses). Externa: pulgas, garrapatas, hongos. NUNCA automedicar: aspirina, paracetamol y fármacos humanos son altamente tóxicos para gatos."
              },
              {
                heading: "Madurez sexual y esterilización",
                body: "Hembras: primer celo a los 6-8 meses. Machos: madurez a los 11-12 meses. Recomendación: castración/esterilización segura (~4 meses). Reduce agresividad y marcaje con orina, elimina celos y crías no deseadas (una pareja puede generar ~65,500 descendientes en 5 años), previene tumores testiculares/prostáticos/uterinos/mamarios."
              },
              {
                heading: "Crecimiento, madurez y transición a vida adulta",
                body: "~20 días: eliminación autónoma, construir 'parque' con cajas. 1-3 meses: paso de reptar a correr, mayor gasto energético. 4-6 meses: pico de energía y juego. Escapadas: pueden regresar heridos o preñadas. Alimentación adulta: transición a fórmula para adultos (~1 año). Mantener agua fresca y pienso adecuado siempre disponible."
              }
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
            intro: "Pilares absolutos, equilibrio descanso-contacto, registro y observación, y respeto a la naturaleza felina.",
            sections: [
              {
                heading: "Pilares absolutos: Alimentación y temperatura",
                body: "Son los indicadores vitales. Controlar con rigor salva vidas. Evitar cambios bruscos en dieta, ambiente o manejo. La adaptación felina es gradual."
              },
              {
                heading: "Actuar con rapidez",
                body: "Un neonato sano puede deteriorarse y fallecer en cuestión de horas. No esperar 'a ver si mejora'. Equilibrio descanso-contacto: 2-3h entre tomas marcan el ritmo natural. Ni manipulación constante ni abandono prolongado."
              },
              {
                heading: "Registro y observación",
                body: "Anotar cantidades, heces, temperatura y comportamiento. La globalidad del día importa más que un dato aislado."
              },
              {
                heading: "Respetar su naturaleza",
                body: "No son perros ni humanos. Su independencia, limpieza, rituales de marcaje y sensibilidad sensorial son adaptaciones evolutivas que deben guiar tu manejo."
              },
              {
                heading: "Nota final",
                body: "Sacar adelante un gatito abandonado exige dedicación, paciencia y conocimiento. A veces, a pesar del esfuerzo máximo, la fragilidad neonatal impone límites. No es un fracaso personal; es la realidad biológica. Cada intento brinda una oportunidad de vida. Gracias por informarte, por actuar con responsabilidad y por ofrecer una segunda oportunidad a quienes nacen en la indefensión. Para seguimiento nutricional detallado o casos clínicos, consultar siempre a un veterinario colegiado."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "tenencia-responsable",
    label: "Tenencia Responsable",
    emoji: "",
    color: "#2ecc71",
    bg: "#e8f8f0",
    description: "Guía universal para el cuidado ético y bienestar felino",
    subcategories: [
      {
        slug: "principios-universales",
        label: "Principios y Naturaleza Felina",
        topics: [
          {
            slug: "guia-tenencia-responsable",
            title: "Tenencia Responsable de Gatos",
            intro: "Compromiso universal que trasciende fronteras: garantizar el bienestar físico, emocional y social del gato durante toda su vida (15-20 años).",
            sections: [
              {
                heading: "Introducción: Un compromiso universal",
                body: "La tenencia responsable trasciende fronteras, culturas y legislaciones. Principio rector: Un gato no es un objeto, ni un accesorio temporal. Es un ser sintiente con necesidades específicas que debemos comprender y respetar."
              },
              {
                heading: "Comprender la naturaleza felina",
                body: "Diferencias fundamentales: No son animales gregarios (no buscan un 'líder', valoran autonomía). Sentidos adaptados a la caza nocturna: vista con tapetum lucidum, oído de frecuencias ultrasónicas, olfato + órgano de Jacobson para analizar feromonas. Bigotes sensores como radar táctil. Equilibrio excepcional con reflejo de enderezamiento. El ronroneo es polivalente: indica bienestar, pero también dolor, estrés o necesidad."
              },
              {
                heading: "Cronología del desarrollo felino",
                body: "Gestación: ~9 semanas. Nacimiento: ojos cerrados, sordera, dependencia térmica total. 9-10 días: apertura de ojos. 3 semanas: primeros pasos, inicio de juego social. 4-6 semanas: inicio del destete natural. 8 semanas: destete completo, listo para adopción responsable. 2-7 meses: ventana crítica de socialización. 6-8 meses (hembras) / 11-12 meses (machos): madurez sexual. 12 meses: adultez física (algunas razas tardan hasta 18-24 meses). 7+ años: etapa senior."
              }
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
            intro: "Principios universales de protección animal y responsabilidades del tutor, independientemente del país.",
            sections: [
              {
                heading: "Principios universales de protección animal",
                body: "Aunque las leyes tienen nombres distintos (Animal Welfare Act, Ley de Tenencia Responsable, etc.), comparten ejes comunes: Prohibición del abandono (entregar sin garantizar reubicación es maltrato). Identificación permanente (microchip o tatuaje registrado). Cuidados básicos obligatorios (alimentación, albergue, atención veterinaria). Prohibición de sacrificio poblacional (el control ético se basa en esterilización). Acceso a la denuncia ciudadana."
              },
              {
                heading: "Responsabilidades del tutor",
                body: "Antes de adoptar: evaluar recursos económicos, tiempo, estabilidad residencial y compromiso a largo plazo. Durante la tenencia: registro, identificación, vacunación, desparasitación, esterilización. En caso de mudanza o crisis: planificar con anticipación el cuidado. Al final de la vida: acompañar con dignidad, considerar eutanasia humanitaria cuando el sufrimiento sea irreversible. Nota: Consultar siempre la legislación local, pero recordar que la ética del cuidado trasciende la ley mínima."
              }
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
            intro: "Enfermedades infeccontagiosas clave, protocolo sanitario básico y signos de alarma.",
            sections: [
              {
                heading: "Enfermedades infeccontagiosas clave",
                body: "Panleucopenia: transmisión por heces/orina/fómites, vacuna Triple Felina, alta mortalidad en neonatos. Rinotraqueítis/Calicivirus: secreciones/contacto directo, vacuna Triple Felina, puede cronificarse. Leucemia Felina (FeLV): saliva/sangre/gestación, vacuna + test previo. Inmunodeficiencia Felina (FIV): mordeduras, esterilización y tests. Rabia: mordedura de animal infectado, vacuna obligatoria en zonas endémicas. PIF: mutación del coronavirus entérico, higiene y evitar hacinamiento. Toxoplasmosis: ingestión de tejidos infectados, cocinar carnes y limpiar bandeja diaria."
              },
              {
                heading: "Protocolo sanitario básico",
                body: "1. Adopción/Rescate → Examen veterinario completo. 2. Desparasitación interna/externa. 3. Pruebas de FeLV/FIV si hay riesgo. 4. Inicio de esquema vacunal: 6-8 semanas (Primera Triple), 12 semanas (Refuerzo + Rabia si aplica). 5. Esterilización a los 4-6 meses. 6. Chequeos anuales (semestrales si es senior o crónico)."
              },
              {
                heading: "Signos de alarma: Cuándo acudir al veterinario",
                body: "URGENCIA INMEDIATA: Dificultad respiratoria, encías pálidas/azuladas, incapacidad para orinar, convulsiones, pérdida de conciencia, traumatismo evidente. Consulta en <24h: Vómitos/diarrea persistentes, rechazo total de comida/agua >24h, letargo extremo, sangre en orina/heces/vómito. Monitorear: cambios en hábitos de arenero, pérdida de peso, rascado excesivo, mal aliento. NUNCA automedicar: Paracetamol, Ibuprofeno y AINEs son altamente tóxicos."
              }
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
            intro: "Principios fisiológicos universales, requerimientos por etapa y alimentos tóxicos.",
            sections: [
              {
                heading: "Principios fisiológicos universales",
                body: "Carnívoros estrictos: requieren proteína animal de alta calidad, taurina, arginina, vitamina A preformada. Metabolismo hídrico: beben poco por naturaleza; la dieta húmeda es clave para salud renal. Alimentación fraccionada: en libertad cazan 10-20 presas pequeñas/día; en casa ofrecer múltiples comidas o usar comederos interactivos."
              },
              {
                heading: "Requerimientos por etapa de vida",
                body: "Lactante (0-2 meses): 200-250 kcal/kg/día, proteína mínima ≥30%, leche maternizada específica. Cachorro (2-12 meses): 150-200 kcal/kg/día, proteína ≥30%, alimento kitten. Adulto (1-7 años): 80-100 kcal/kg/día, proteína ≥26%, control de peso según estilo de vida. Senior (7+ años): 70-90 kcal/kg/día, proteína ≥28% (alta digestibilidad), dietas geriátricas. Esterilizado: 60-80 kcal/kg/día, proteína ≥30%, control estricto de porciones."
              },
              {
                heading: "Alimentos y sustancias tóxicas",
                body: "NUNCA ofrecer: Chocolate, café, té (metilxantinas), cebolla, ajo, puerro (anemia hemolítica), uvas, pasas (fallo renal), alcohol, masa cruda con levadura, xilitol (hipoglucemia), medicamentos humanos. Plantas de alto riesgo: Lirios (tóxicos renales letales), azaleas, rododendros, tejo, cicuta, digital, eucalipto, poinsettia."
              },
              {
                heading: "Estrategias prácticas de hidratación",
                body: "Fuentes de agua corriente + recipientes estáticos. Agua fresca diaria. Colocar bebederos lejos de comederos y bandejas (n+1 regla). Alimento húmedo como complemento esencial para salud renal y urinaria."
              }
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
            intro: "Los 5 Pilares del Ambiente Felino Saludable: espacio, recursos, juego, interacción y olfato.",
            sections: [
              {
                heading: "Pilar 1: Espacio seguro y vertical",
                body: "Altura = seguridad: repisas, árboles para gatos, estanterías permiten observar sin sentirse vulnerables. Refugios accesibles: cajas, túneles, camas cerradas donde poder esconderse. Rutas de escape: evitar callejones sin salida en la distribución del hogar."
              },
              {
                heading: "Pilar 2: Recursos clave distribuidos (regla n+1)",
                body: "Comederos: separados de bebederos y bandejas, múltiples ubicaciones si hay >1 gato. Bebederos: fuentes + recipientes estáticos, agua fresca diaria. Bandejas: n+1 (número de gatos +1), ubicadas en zonas tranquilas, lejos de ruido. Rascadores: verticales y horizontales, materiales sisal/cartón/madera, ubicar cerca de zonas de descanso."
              },
              {
                heading: "Pilar 3: Juego que simula la caza",
                body: "Secuencia natural: acechar → perseguir → capturar → 'comer'. Juguetes interactivos: cañas con plumas, láseres (siempre finalizar con premio físico), rompecabezas de comida. Sesiones cortas: 2-3 juegos de 10-15 min/día, preferentemente al atardecer (horario natural de actividad felina)."
              },
              {
                heading: "Pilar 4: Interacción humana predecible y positiva",
                body: "Respetar el consentimiento: dejar que el gato inicie el contacto, no forzar caricias. Comunicación suave: voz tranquila, movimientos lentos, parpadeo lento ('beso de gato'). Refuerzo positivo: premiar conductas deseadas con comida/juego/atención. NUNCA castigo físico ni gritos (generan miedo/agresividad)."
              },
              {
                heading: "Pilar 5: Respeto por el olfato felino",
                body: "El mundo es olor: identifican personas, territorios y estados emocionales por feromonas. Evitar limpieza excesiva: no lavar con frecuencia las zonas donde se frota (mejillas, cabeza). Feromonas sintéticas: Feliway® o equivalentes pueden reducir estrés en mudanzas, visitas al vet o llegada de nuevos miembros."
              }
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
            intro: "Esterilización: evidencia global, mitos desmentidos y protocolo TNR para gatos ferales.",
            sections: [
              {
                heading: "Esterilización: Evidencia Global",
                body: "¿Qué es? Hembras: Ovariohisterectomía. Machos: Orquiectomía. ¿Cuándo? Recomendación internacional: 4-6 meses (antes del primer celo). ¿Por qué? Prevención de cáncer mamario (>90% reducción si se hace antes del primer celo), eliminación de piometra (infección uterina mortal), reducción de marcaje con orina/vagabundeo/peleas, prevención de transmisión FeLV/FIV, control poblacional humanitario."
              },
              {
                heading: "Mitologicos desmentidos con evidencia",
                body: "Mito: 'Es bueno que tenga una camada antes de esterilizar' → Realidad: No aporta beneficios, solo aumenta riesgo de sobrepoblación. Mito: 'Los machos esterilizados engordan' → Realidad: El peso depende de dieta y ejercicio; la esterilización reduce un 20-30% el requerimiento energético. Mito: 'La esterilización cambia la personalidad' → Realidad: Reduce conductas por hormonas, pero no la esencia del gato. Mito: 'Es cruel operarlos tan jóvenes' → Realidad: La recuperación es más rápida en jóvenes."
              },
              {
                heading: "Protocolo TNR (Trap-Neuter-Return)",
                body: "1. CAPTURA: Jaulas trampa con cebo, monitoreo constante, protección climática, cubrir jaula. 2. INTERVENCIÓN: Esterilización por profesional experto, analgesia pre/intra/postoperatoria, vacunación, corte de oreja (ear-tip) 0.8-1cm punta izquierda para identificación. 3. RETORNO: Al mismo punto de captura, cuidador comunitario provee alimento/agua/refugio. Beneficios: Reducción progresiva de población, disminución de ruidos nocturnos, menos marcaje, convivencia más armónica."
              },
              {
                heading: "Gatos ferales vs. callejeros sociables",
                body: "Gato feral: Nacido sin contacto humano, evita interacción, NO adoptable, su bienestar está en su territorio con cuidados a distancia. Gato callejero sociable: Fue mascota, busca interacción, SÍ adoptable con paciencia. Manejo: Programas TNR para ferales, rescate y adopción responsable para sociables."
              }
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
            intro: "Beneficios de la convivencia, preparación para el final de la vida y checklist de tenencia responsable.",
            sections: [
              {
                heading: "Beneficios documentados de la convivencia",
                body: "Salud cardiovascular: menor riesgo de infarto e ictus. Salud mental: el ronroneo (25-150 Hz) reduce estrés y presión arterial, disminuye sensación de soledad. Desarrollo infantil: menor incidencia de alergias y asma. Terapia asistida: gatos en hospitales, residencias y centros educativos."
              },
              {
                heading: "Prepararse para el final de la vida",
                body: "Señales: pérdida de interés en comida/agua/interacción, dificultad para moverse, incontinencia, dolor crónico no manejable, enfermedad terminal. Decisiones éticas: consultar opciones paliativas, evaluar calidad de vida con escalas validadas (HHHHMM), considerar eutanasia humanitaria cuando el sufrimiento sea irreversible. Acompañar con dignidad: presencia, caricias, voz tranquila. Permitirse el duelo: la pérdida de un compañero es real y válida."
              },
              {
                heading: "Checklist de tenencia responsable",
                body: "ANTES DE ADOPTAR: Evaluar tiempo/recursos/compromiso a 15-20 años. Preparar hogar: protección ventanas, espacios verticales, bandeja, rascador. Investigar veterinarios con enfoque felino. PRIMEROS 30 DÍAS: Identificación (microchip), examen veterinario, desparasitación, inicio vacunal, adaptación gradual a dieta, establecer rutina. MANTENIMIENTO ANUAL: Chequeo preventivo, refuerzo vacunas, control de peso, renovación antiparasitarios, evaluación de enriquecimiento ambiental. SEÑALES DE ALARMA: No come/bebe >24h, vómitos/diarrea con sangre, dificultad para orinar, letargo extremo, temperatura >39.5°C o <37.5°C."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "castracion",
    label: "Castración",
    emoji: "",
    color: "#3498db",
    bg: "#eaf2f8",
    description: "Guía familiar: ¿Por qué, cuándo y cómo castrar a tu gato?",
    subcategories: [
      {
        slug: "guia-infantil",
        label: "Guía para Niños y Familias",
        topics: [
          {
            slug: "por-que-castrar",
            title: "¿Por qué castrar a los gatitos?",
            intro: "¡Una operación segura que hace el veterinario para que los gatos no tengan bebés y vivan más felices y sanos!",
            sections: [
              {
                heading: "¿Qué significa 'castrar' o 'esterilizar' a un gato?",
                body: "Es una operación especial que hace el veterinario para que los gatitos no puedan tener bebés.\n• A las gatas: Se llama 'esterilización' y le quitan los ovarios y el útero.\n• A los gatos machos: Se llama 'castración' y le quitan los testículos.\n¡Es como poner un 'modo tranquilo' para que vivan más felices y sanos! 😊"
              },
              {
                heading: "¿Duele la operación?",
                body: "¡No te preocupes!\n✅ El veterinario le pone una 'siesta mágica' (anestesia) para que el gatito duerma tranquilo y no sienta nada.\n✅ Después le dan medicinas especiales para que no le duela cuando despierte.\n✅ Los gatitos se recuperan muy rápido: ¡en 1 o 2 días ya están jugando como siempre! 🎾"
              },
              {
                heading: "¿Por qué es bueno castrar a los gatos?",
                body: "¡Porque les ayuda a vivir mejor! Mira estos superpoderes que ganan:\n\n| Beneficio | ¿Qué significa para tu gatito? |\n| --- | --- |\n| 🏥 Más salud | No se enferman de cosas graves como infecciones en la panza o cáncer. |\n| 😌 Más tranquilo | Los machos no pelean tanto con otros gatos y no se escapan tanto. |\n| 🏠 Más casero | Se quedan más tiempo en casa contigo, ¡y eso es genial! |\n| 🔇 Menos ruidos | Las gatas no maúllan fuerte buscando novio por las noches. |\n| 💩 Menos olores | Los machos no hacen 'pipí con olor fuerte' para marcar territorio. |\n| ❤️ Más amor | Al no estar nerviosos por el celo, ¡te dan más cariños! |"
              },
              {
                heading: "¿A qué edad se puede castrar a un gatito?",
                body: "🐱 Lo ideal: Entre los 4 y 6 meses de edad, antes de que tengan su primer 'celo'.\n🐱 También se puede: Desde los 3 meses si el veterinario lo recomienda, ¡y se recuperan aún más rápido!\n🚫 Mito importante: NO es necesario que la gata tenga una camada de gatitos antes de operarla. ¡Eso es un cuento viejo! Operarla antes es más sano para ella."
              },
              {
                heading: "¿Mi gato va a engordar después de la operación?",
                body: "¡No necesariamente!\n✅ Es verdad que algunos gatos pueden subir de peso, pero eso pasa si comen mucho y no juegan.\n✅ La solución es fácil: darle la comida justa y jugar con él todos los días.\n✅ ¡Un gato que juega es un gato feliz y delgadito! 🎣🧶"
              },
              {
                heading: "¿Mi gato va a cambiar de personalidad?",
                body: "¡Para bien, sí! Pero sigue siendo el mismo gatito que amas.\n\n🔹 Lo que SÍ cambia:\n• Ya no se escapa tanto buscando novias/novios\n• No pelea con otros gatos por territorio\n• No hace pipí en las paredes para marcar\n\n🔹 Lo que NO cambia:\n• Sigue siendo cariñoso contigo ❤️\n• Sigue jugando con sus juguetes 🎾\n• Sigue ronroneando cuando lo acaricias 😻\n¡Sigue siendo TU gatito!"
              },
              {
                heading: "¿Qué pasa si NO castro a mi gato?",
                body: "Respuesta: Pueden pasar cosas que no son tan bonitas:\n\nPara las gatas:\n• Pueden tener muchos gatitos (¡hasta 3 camadas al año!)\n• Y si no hay hogares para todos... algunos gatitos pueden quedarse sin familia 😢\n• Pueden enfermarse del útero (una infección grave llamada 'piometra')\n• Tienen más riesgo de cáncer de mama\n\n🚨 Para los gatos machos:\n• Se escapan mucho y pueden perderse o tener accidentes\n• Pelean con otros gatos y pueden lastimarse o enfermarse\n• Hacen pipí con olor muy fuerte en la casa\n• Gritan y maúllan mucho buscando gatas"
              },
              {
                heading: "¿Y los gatitos que ya viven en la calle?",
                body: "¡También hay una solución especial para ellos! Se llama TNR:\n\nT = TRAP (Atrapar con cuidado en una jaula especial)\n🔹 N = NEUTER (Operar para que no tengan más bebés)\n🔹 R = RETURN (Devolverlos a su lugar, donde un cuidador les da comida)\n\n✨ Además, les cortan un poquito la puntita de la oreja izquierda (¡no les duele! lo hacen mientras duermen con la anestesia) para saber que ya están operados.\n\n💚 Así, poco a poco, hay menos gatitos en la calle y los que están reciben mejores cuidados. ¡Todos ganan!"
              },
              {
                heading: "¿Castrar ayuda a los gatitos abandonados?",
                body: "¡Sí, muchísimo! Mira este número impresionante:\n\n📊 Una sola pareja de gatos puede tener...\n   ¡65,500 descendientes en solo 5 años! 😱\n\n🔢 ¿Cómo? \n   • Una gata puede tener 3 camadas al año\n   • Cada camada puede tener 4-6 gatitos\n   • Esos gatitos crecen y también tienen gatitos...\n   • ¡Y así se multiplica como una cadena!\n\n✅ Al castrar, rompemos esa cadena y ayudamos a que menos gatitos nazcan sin hogar. ¡Es un acto de amor! 💙"
              },
              {
                heading: "RESUMEN PARA RECORDAR (¡EN 3 FRASES!)",
                body: "🩺 Castrar es una operación segura que hace el veterinario para que los gatos no tengan bebés y vivan más sanos.\n\n❤️ Es un acto de amor: protege a tu gato de enfermedades, lo hace más tranquilo y ayuda a que menos gatitos vivan en la calle.\n\n🏠 Tu gato seguirá siendo el mismo: solo que más sano, más casero y con más ganas de darte cariños."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "impacto-conciencia",
    label: "Impacto y Conciencia",
    emoji: "",
    color: "#8e44ad",
    bg: "#f4ecf7",
    description: "El lado oculto y responsabilidad global de nuestros gatos",
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
                body: "👁️ Visión nocturna nivel PRO: Sus ojos ven 7 veces mejor que los humanos en la oscuridad gracias al tapetum lucidum. ¡Es como tener faros integrados! Pero con mucha luz, ven menos detalles. Su pupila vertical se cierra como una rendija para regular.\n\n👂 Oídos de radar: Escuchan frecuencias ultrasónicas que nosotros ni imaginamos. Sus orejas se mueven independientemente como antenas parabólicas 🛰️. En oscuridad total, pueden localizar una presa solo por el sonido de sus pasos.\n\n🤸 Bigotes sensores = GPS táctil: No son solo pelos bonitos, son sensores que detectan corrientes de aire, obstáculos y movimientos. También tienen en mejillas, sobre los ojos y en las patas delanteras. NUNCA los cortes.\n\n🤸 Equilibrio de ninja: Su reflejo de enderezamiento les permite caer de pie (casi siempre). Extienden los pliegues de su piel como un paracaídas natural. Mito: 'Los gatos siempre caen bien'. Realidad: Pueden lastimarse en caídas altas. ¡Protégelos con mallas!\n\n💪 Cuerpo de atleta olímpico: Músculos que les permiten correr a 48 km/h y cambiar de dirección en pleno salto. Garras retráctiles para trepar, sujetar presas y... afilar en tu sofá favorito 😅"
              },
              {
                heading: "El lado oscuro (sí, hay uno)",
                body: "🚨 Tu gato es una especie invasora: Aunque lo veas como una bolita de amor, globalmente los gatos domésticos están en la lista de las 100 especies invasoras más dañinas del planeta.\n\n📊 DATOS QUE IMPACTAN:\n• 1 de cada 3 gatos bien alimentados caza 2-3 animales por semana\n• Un gato cazador mata entre 100 y 150 animales al año\n• En EE.UU., gatos domésticos cazan ~3.000 MILLONES de animales silvestres al año\n• En islas, han contribuido a extinguir al menos 30 especies de aves\n• En Australia, ayudaron a extinguir 28 especies de marsupiales 😢\n\n¿Qué cazan realmente? Un estudio en Morelia, México, reveló que los gatos urbanos matan 43 especies de vertebrados:\n• 🐦 Pájaros (los más afectados)\n• 🐭 Roedores\n• 🦎 Lagartijas y serpientes\n• 🦇 Murciélagos\n• 🐰 Conejos silvestres\n\n💡 Reflexión juvenil: Amar a tu gato no significa ignorar su impacto. Podemos quererlo Y proteger la biodiversidad."
              },
              {
                heading: "¿Hasta dónde llega tu gato cuando sale?",
                body: "📱 El experimento del GPS: Científicos pusieron collares con GPS a gatos domésticos y descubrieron:\n\nLo normal:\n• Se quedan a 1-2 manzanas de casa la mayor parte del tiempo\n\n🌌 Pero... ¡sorpresa!\n• 1-2 veces por semana, algunos recorren HASTA 20 KM en una noche\n• Cruzan ciudades, llegan al campo, entran a bosques... y regresan al amanecer\n\n🤯 Traducción: Tu 'gato de interior' podría estar de aventura nocturna sin que lo sepas.\n\nRiesgos de dejarlo libre:\n| Para tu gato | Para la fauna | Para ti |\n| --- | --- | --- |\n| 🚗 Atropellos | 📉 Disminución de aves hasta 40% en algunas zonas | 🦠 Enfermedades zoonóticas |\n| 🧪 Envenenamientos | 🐦 Extinción de especies endémicas | 🤢 Parásitos traídos de la calle |\n| 😿 Estrés y desorientación | 🌱 Alteración de ecosistemas | 💩 Excrementos en espacios públicos |\n\n🎯 Dato clave: Se han encontrado restos de pañales desechables en heces de gatos callejeros. Sí, los comen. Antes de que te lama la cara... piensa en dónde ha estado 🤢"
              },
              {
                heading: "El problema de la sobrepoblación (y cómo ayudar)",
                body: "📈 Matemáticas que asustan: Una pareja de gatos + su descendencia puede generar:\n• 🔹 400,000 gatos en solo 7 años\n• Hasta 3 camadas/año por gata\n• 4-6 gatitos por camada en promedio\n\n🧮 Haz la cuenta: 1 gata → 4 gatitos → esos 4 se reproducen → y así sucesivamente... ¡Es una explosión demográfica felina!\n\nEn números reales (ejemplo: una ciudad mediana):\n• 15% de hogares tiene gatos (promedio 3 por casa)\n• En una ciudad de 150,000 viviendas → ~67,500 gatos domésticos (sin contar callejeros)\n• Resultado: Más de 2 millones de animales silvestres cazados al año solo en esa ciudad"
              },
              {
                heading: "Ser joven y responsable: Tu poder de cambio",
                body: "✅ Lo que SÍ puedes hacer (y marca la diferencia):\n\n🏠 Mantén a tu gato indoor (o en espacios seguros):\n• Catio: Jaulas o cerramientos tipo 'jardín para gatos' en balcones/ventanas\n• Mallas de seguridad: Evitan caídas y fugas\n• Enriquecimiento indoor: Rascadores, juguetes interactivos, repisas, escondites\n\n💉 Esteriliza a tiempo:\n• Hembras: Desde los 4 meses (antes del primer celo)\n• Machos: Desde los 5-6 meses\n• Beneficios: ✅ Reduce escapadas y peleas ✅ Previene cánceres ✅ Disminuye marcaje ✅ Controla la sobrepoblación\n\n🩺 Cuida su salud preventiva:\n• Vacunas al día (Triple Felina + Antirrábica según zona)\n• Desparasitación interna/externa regular\n• Chequeos veterinarios anuales\n\n🍽️ Alimentación consciente:\n• Dieta balanceada específica (son carnívoros estrictos)\n• Evita dar comida humana: chocolate, cebolla, uvas, etc. son tóxicos\n• Agua fresca siempre disponible"
              },
              {
                heading: "MITOS vs. REALIDAD (Quiz rápido)",
                body: "| Mito | Realidad científica |\n| --- | --- |\n| ❌ 'Si lo alimento bien, no caza' | ✅ 1 de cada 3 gatos bien alimentados caza igual. El instinto no se apaga con el pienso. |\n| ❌ 'Los gatos siempre caen de pie' | ✅ Tienen reflejo de enderezamiento, pero caídas altas pueden ser mortales. |\n| ❌ 'Esterilizarlos es cruel' | ✅ Es más cruel permitir nacimientos que terminan en abandono, sufrimiento o eutanasia. |\n| ❌ 'Mi gato no se aleja de casa' | ✅ Estudios con GPS muestran que pueden recorrer hasta 20 km en una noche. |\n| ❌ 'Los gatos ferales pueden adoptarse' | ✅ Los gatos ferales (sin socialización humana) no son candidatos a adopción. Requieren manejo TNR. |"
              },
              {
                heading: "Tu checklist de acción (Para imprimir o guardar)",
                body: "✅ Si ya tienes un gato:\n• Microchip + registro en base de datos local\n• Esterilización programada (si aún no lo está)\n• Mallas de seguridad en ventanas/balcones\n• Enriquecimiento indoor: rascador, juguetes, repisas\n• Chequeo veterinario anual\n\n✅ Si quieres adoptar:\n• Evaluar compromiso a largo plazo (15-20 años de vida)\n• Preparar hogar antes de la llegada\n• Elegir protectora con protocolo de adopción responsable\n• Considerar gatos adultos: ¡son increíbles y a veces pasan desapercibidos!\n\n✅ Si quieres ayudar sin adoptar:\n• Voluntariado en refugios locales\n• Difundir información verificada en redes\n• Apoyar campañas de esterilización comunitaria\n• Reportar colonias ferales a autoridades para activar TNR"
              },
              {
                heading: "Conclusión: Amar con conciencia",
                body: "Los gatos nos han acompañado por milenios: guardaron nuestros graneros, nos hicieron compañía en noches solas y nos regalan ronroneos que bajan el estrés.\n\nPero hoy, con ciudades más densas y ecosistemas más frágiles, amarlos responsablemente significa equilibrar su bienestar con el del planeta.\n\n🐱 Tu gato no es 'malo' por cazar. Es un felino, y esa es su naturaleza.\n🌍 Tú no eres 'malo' por querer proteger la biodiversidad. Es tu responsabilidad como ciudadano global.\n\n💚 La solución no está en elegir uno u otro, sino en encontrar el punto medio: cuidar a tu gato y al mundo que compartimos.\n\nEl futuro de la convivencia humano-felino-fauna silvestre está en tus manos. ¿Listo para ser parte del cambio? ✨"
              }
            ]
          }
        ]
      }
    ]
  }
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getSubcategory = (catSlug: string, subSlug: string) =>
  getCategory(catSlug)?.subcategories.find((s) => s.slug === subSlug);

export const getTopic = (catSlug: string, subSlug: string, topicSlug: string) =>
  getSubcategory(catSlug, subSlug)?.topics.find((t) => t.slug === topicSlug);