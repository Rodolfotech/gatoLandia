import { Category } from '../../data/cats';

export const categories: Category[] = [
  {
    "slug": "salud",
    "label": "Health",
    "emoji": "",
    "color": "#7a9e7e",
    "bg": "#eef4ef",
    "description": "Prevention, illnesses and medical care",
    "subcategories": [
      {
        "slug": "prevencion",
        "label": "Prevention",
        "topics": [
          {
            "slug": "vacunacion",
            "title": "Feline vaccination",
            "intro": "Vaccination is the most effective tool to protect your cat from serious illnesses. Knowing the schedule and compulsory vaccinations makes all the difference between a long and complication-free life.",
            "sections": [
              {
                "heading": "Compulsory vaccinations",
                "body": "The triple feline vaccine (Rhinotracheitis, Calicivirus and Panleucopenia) is the base of any protocol. It is administered at 8, 12 and 16 weeks of age, with annual boosters or every three years depending on the product."
              },
              {
                "heading": "Recommended optional vaccinations",
                "body": "The vaccine against Feline Leukaemia (FeLV) is highly recommended for cats that go outside or live with other cats. The anti-rabies vaccine is compulsory in many countries and recommended in Chile."
              },
              {
                "heading": "What happens if I miss a dose?",
                "body": "If the adult cat has not been vaccinated for more than 3 years, it is recommended to repeat the initial course. Always consult your vet before administering any vaccine."
              }
            ]
          },
          {
            "slug": "desparasitacion",
            "title": "Internal and external de-worming",
            "intro": "Parasites are one of the most common and easily preventable problems in cats. A regular de-worming plan protects both the cat and the people in the household.",
            "sections": [
              {
                "heading": "Internal parasites",
                "body": "The most common ones are roundworms (ascarids), tapeworms and Toxoplasma. They are treated with oral anti-parasitic medication every 3–6 months in adults, and monthly in kittens until they are 6 months old."
              },
              {
                "heading": "External parasites",
                "body": "Fleas, ticks and ear mites are the most common ones. Monthly spot-on pipettes are the most practical solution. Anti-parasitic collars offer prolonged protection but require correct fitting."
              },
              {
                "heading": "Indoor vs. outdoor cats",
                "body": "Indoor cats have a lower risk, but are not exempt: fleas can enter on clothing and shoes. It is recommended to de-worm internally twice a year and externally at least four times a year."
              }
            ]
          },
          {
            "slug": "primeros-auxilios",
            "title": "Feline first aid",
            "intro": "Acting in an emergency can save your cat's life. These basic knowledge prepare you for the most critical moments until you reach the vet.",
            "sections": [
              {
                "heading": "The basic first-aid kit",
                "body": "Every home with cats should have: saline solution, sterile gauze, alcohol-free antiseptic (such as diluted chlorhexidine), digital thermometer and the number of an emergency veterinary clinic."
              },
              {
                "heading": "Signs of emergency",
                "body": "Take your cat to the emergency vet if it shows: difficulty breathing, loss of consciousness, convulsions, inability to urinate for more than 12 hours, uncontrolled bleeding or possible poisoning."
              },
              {
                "heading": "What you MUST NEVER do",
                "body": "Do not administer ibuprofen, paracetamol or aspirin to a cat: they are fatal to them. Do not attempt to induce vomiting without veterinary instruction. Do not put alcohol on open wounds."
              }
            ]
          }
        ]
      },
      {
        "slug": "enfermedades",
        "label": "Common illnesses",
        "topics": [
          {
            "slug": "enfermedad-renal",
            "title": "Chronic kidney disease",
            "intro": "Chronic kidney insufficiency is the main cause of death in cats over 7 years old. Detecting it in time can add years of quality of life to your companion.",
            "sections": [
              {
                "heading": "Warning signs",
                "body": "Drinking a lot of water, urinating more frequently, progressive weight loss, dull fur and loss of appetite are the most common signs. Many cats do not show symptoms until they have lost 75% of their renal function."
              },
              {
                "heading": "Diagnosis and monitoring",
                "body": "An annual blood and urine test from the age of 7 is the best detection tool. The SDMA biomarker allows renal damage to be detected months before traditional markers."
              },
              {
                "heading": "Management and treatment",
                "body": "There is no cure, but it can be managed with a low-phosphorus, low-protein renal diet, hydration (wet food or subcutaneous fluids at home), supplements and regular check-ups."
              }
            ]
          },
          {
            "slug": "diabetes-felina",
            "title": "Feline diabetes",
            "intro": "Diabetes in cats is more common than people think, especially in neutered male cats with obesity. The good news: with proper management, many cats can go into remission.",
            "sections": [
              {
                "heading": "Risk factors",
                "body": "Obesity, advanced age, male sex and high-carbohydrate diets are the main risk factors. Burmese cats have a genetic predisposition."
              },
              {
                "heading": "Symptoms",
                "body": "Much thirst, much urine, weight loss despite eating well and weakness in the hind legs (diabetic neuropathy) are the most characteristic signs."
              },
              {
                "heading": "Treatment and Remission",
                "body": "Daily insulin, a low-carbohydrate diet (high-quality wet food) and monitoring of blood glucose at home form the basis. Up to 90% of cats can achieve remission with early and rigorous treatment."
              }
            ]
          }
        ]
      },
      {
        "slug": "dental",
        "label": "Oral Health",
        "topics": [
          {
            "slug": "sarro-gingivitis",
            "title": "Tartar and gingivitis",
            "intro": "Periodontal disease affects 70% of cats over 3 years old and is one of the most overlooked causes of chronic pain and general health deterioration.",
            "sections": [
              {
                "heading": "Why it is Important",
                "body": "Bacteria from the mouth enter the bloodstream and can damage kidneys, heart and liver. A cat with dental pain eats less, is more irritable and its quality of life is severely affected."
              },
              {
                "heading": "Prevention at Home",
                "body": "Cepillar los dientes 3 veces por semana con pasta dental felina (nunca humana) es el método más efectivo. Los snacks dentales y los juguetes masticables son un complemento útil pero no suficiente por sí solos."
              },
              {
                "heading": "Professional Cleaning",
                "body": "The annual dental veterinary cleaning under anaesthesia is recommended from the age of 3 years. Cats with a predisposition (Persians, Siamese) may need it earlier."
              }
            ]
          }
        ]
      },
      {
        "slug": "alergia",
        "label": "Allergies",
        "topics": [
          {
            "slug": "guia-alergia-gatos",
            "title": "Cat Allergy: A Practical Guide to Living Together",
            "intro": "Allergies to pets affect between 15% and 30% of people. Being allergic to cats is twice as common as to dogs, but with proper management, cohabitation is possible.",
            "sections": [
              {
                "heading": "The cause: Fel d 1 Protein",
                "body": "Allergy is not caused by the hair, but by the Fel d 1 protein produced in the skin, saliva and urine. It spreads when the cat licks itself and the protein disperses in the air through dander (dead skin). Males produce more than females, and castration reduces these levels."
              },
              {
                "heading": "Symptoms and Diagnosis",
                "body": "Reactions vary from urticaria and itching to sneezing, runny eyes and asthma attacks. It is vital to visit an allergist to perform skin tests, blood tests or spirometry, as the culprit could be dust or pollen and not the cat."
              },
              {
                "heading": "Hogar and Free Zones",
                "body": "Create a 'sanctuary' by keeping the bedroom closed to the cat. Remove carpets or use only those that can be washed with hot water. It is essential to use HEPA-filter vacuum cleaners and air purifiers for at least 4 hours a day."
              },
              {
                "heading": "Direct Care and Products",
                "body": "The grooming should be done by someone who is not allergic outside the house. Weekly baths and the use of neutralising products (such as Vetriderm) on the coat help to eliminate saliva residue. Castration and regular clipping of long-haired cats are also effective strategies."
              },
              {
                "heading": "Advanced Treatments",
                "body": "Consult about immunotherapy (desensitisation vaccines), which are effective in the long term. If, despite all the cleaning measures and medical treatment, the health is severely affected, the most responsible decision may be to seek a new home for the feline."
              }
            ]
          }
        ]
      },
      {
        "slug": "diabetes-felina",
        "label": "Diabetes",
        "topics": [
          {
            "slug": "diabetes-guia-completa",
            "title": "Feline Diabetes: A Complete Guide to Understanding and Managing It",
            "intro": "Diabetes in cats is a complex condition, but with the right management, your cat can lead a long and happy life. Unlike dogs, cats have unique characteristics that we must know to avoid common mistakes.",
            "sections": [
              {
                "heading": "Step 1: Causes and Risk Factors",
                "body": "Feline diabetes is usually a combination of factors: obesity and age (common in cats over 9 years old), sex and breed (more common in males 4:1 and in Siamese breed). Amyloid deposits that damage the pancreas and the use of drugs such as progestagens or corticosteroids also influence it. It is essential to highlight that pancreatitis is usually closely associated with this disease and, in many cases, can be the triggering cause of diabetes."
              },
              {
                "heading": "Step 2: Identification of symptoms",
                "body": "Pay attention to an increase in thirst and urination (drinking a lot of water or urinating outside the litter tray) and changes in appetite or weight. A distinctive sign is diabetic neuropathy: the cat walks with the whole heel on the floor. Also, observe neglected coat (dry or with dandruff). Unlike dogs, cataracts are very rare in cats."
              },
              {
                "heading": "Step 3: The Correct Diagnosis",
                "body": "Stress in the clinic generates the 'White Coat' effect, temporarily raising blood sugar. For a certain diagnosis, the veterinarian must confirm glucose in both blood and urine. Complete analyses are required to rule out other conditions such as urinary tract infections, liver problems or pancreatitis, which often accompany diabetes."
              },
              {
                "heading": "Step 4: Treatment and Regulation",
                "body": "It is based on three pillars: 1. Insulin: Intermediate or long-acting (NPH or PZI) is used, usually twice a day with meals. 2. Diet: Strictly carnivorous, high in protein and low in carbohydrates with fixed hours. 3. Monitoring: It is ideal to measure blood glucose (pinpricks in the ear) at 'peak' moments to adjust the dose with precision."
              },
              {
                "heading": "Step 5: Emergency of Ketoacidosis",
                "body": "If left untreated, it can lead to ketoacidosis, a life-threatening emergency with symptoms such as vomiting, extreme lethargy, dehydration and breath with a fruity or acetone smell. It requires immediate hospitalisation for intravenous fluids, rapid-acting insulin and correction of electrolytes (potassium, phosphate)."
              },
              {
                "heading": "Step 6: Complications and Expectations",
                "body": "Remission is possible (stopping the need for insulin) if weight is controlled and diagnosed early. The greatest risk is hypoglycaemia: if the cat trembles or convulses, apply honey or sugar to its gums and rush to the vet. Also, regularly check for urinary tract infections (blood or straining to urinate)."
              },
              {
                "heading": "Key advice for the owner",
                "body": "Never adjust the insulin yourself. Keep a strict record of doses, meal times and behaviour. Controlling weight is the best preventative tool and observing any change in gait is fundamental to reporting it to the specialist."
              }
            ]
          }
        ]
      },
      {
        "slug": "obesidad-felina",
        "label": "Obesity",
        "topics": [
          {
            "slug": "guia-obesidad-prevencion",
            "title": "Feline Obesity: How to Protect the Health and Life of Your Cat",
            "intro": "Obesity is not just an aesthetic problem; it is a disease that reduces the life expectancy of your cat and increases the risk of suffering from diabetes, joint problems and surgical complications. With patience and strategy, you can help it regain its ideal weight.",
            "sections": [
              {
                "heading": "Step 1: Identifying Overweight",
                "body": "Don't just rely on the scales. In the 'Rib Test', you should be able to feel them easily without pressing hard; if not, there is excess fat. When looking at it from above, there should be a waistline behind the ribs; if it is rectangular or barrel-shaped, there is overweight. From the side, its abdomen should not sag or touch the floor. It is considered overweight if it is more than 10-19% over its ideal weight, and obese if it is more than 20%."
              },
              {
                "heading": "Step 2: Causes and Factors",
                "body": "It is a combination of factors: after sterilisation the metabolism slows down and the appetite increases; from the age of 6-8 years cats burn fewer calories; sedentary cats indoors without stimulation; and inadequate diets (food always available, excessive rewards or many carbohydrates). Breeds such as the Siamese or Burmese may have a greater genetic predisposition."
              },
              {
                "heading": "Paso 3: El Plan de Acción Seguro",
                "body": "La pérdida de peso debe ser lenta. Regla de oro: un gato no debe perder más del 1% o 2% de su peso por semana (ejemplo: un gato de 8 kg no debe bajar más de 160 gramos semanales). Bajar de peso muy rápido es peligroso ya que puede causar lipidosis hepática, una enfermedad del hígado potencialmente mortal."
              },
              {
                "heading": "Paso 4: Manejo Dietético Estratégico",
                "body": "Pide al veterinario calcular las calorías para el peso ideal, no el actual. Generalmente se ofrece entre el 60% y 75% de las calorías de mantenimiento actuales. Busca dietas altas en proteína (para mantener músculo y dar saciedad) y bajas en carbohidratos. Fracciona la ración en 3 o 4 tomas para mantener el metabolismo activo y usa parte de su ración como premio en lugar de snacks calóricos."
              },
              {
                "heading": "Paso 5: Actividad Física y Enriquecimiento",
                "body": "El ejercicio debe ser gradual. Dedica 10 minutos al día a juegos interactivos (cañas, láser, pelotas). Usa el enriquecimiento ambiental: esconde la comida en diferentes lugares, usa comederos interactivos o puzzles, e instala repisas o árboles para gatos que le obliguen a saltar y trepar para obtener su alimento."
              },
              {
                "heading": "Paso 6: Compromiso y Monitoreo",
                "body": "El éxito depende de que toda la familia siga las reglas sin dar comida a escondidas. Pesa al gato cada 2 semanas: si no baja, ajusta la ración; si baja muy rápido, aumenta un poco. El factor humano es esencial; aceptar que el gato necesita adelgazar no es 'cruel', sino un acto de amor para cuidar su salud a largo plazo."
              },
              {
                "heading": "Señales de Alerta: Cuándo acudir al veterinario",
                "body": "Antes de empezar cualquier dieta, visita al especialista para descartar causas médicas como hipotiroidismo (aunque raro en gatos) o diabetes, y para establecer un peso objetivo realista. El veterinario debe ayudar a elegir la dieta comercial adecuada o formular una casera equilibrada. Recuerda que prevenir es mejor que curar para asegurar que tu gato te acompañe muchos años más, sano y activo."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "comportamiento",
    "label": "Comportment",
    "emoji": "",
    "color": "#b85c38",
    "bg": "#faefeb",
    "description": "Comportment",
    "subcategories": [
      {
        "slug": "interio-exterior",
        "label": "Cat Interior or Exterior?",
        "topics": [
          {
            "slug": "guia para entender y cuidar",
            "title": "Feline Behaviour: How to Understand and Care Better for Your Cat",
            "intro": "Cats are now one of the most popular pets in the world. Although historically they were not seen as companions of life as we know them now, the reality is that, like dogs, they need interaction, attention and affection. The difference lies in how they express those needs. To live in harmony with your feline, it is essential to understand its nature and adapt its environment to its instincts.",
            "sections": [
              {
                "heading": "**1. **Interior or Exterior? Taking the Right Decision",
                "body": "2. The Instinct to Scratch: It's Not Vandalism, It's Communication"
              },
              {
                "heading": "**3. **The Game: Physical and Mental Exercise",
                "body": "Arañar es un comportamiento natural e imprescindible que comienza alrededor de las 5 semanas de vida. Para un gato, rascar no es solo afilar uñas; es una forma de comunicación visual y olfativa (marcan territorio con las glándulas de sus patas) y una manera de estirar su musculatura. El conflicto surge cuando eligen nuestros muebles. La solución no es castigar, sino ofrecer una alternativa mejor. ¿Cómo elegir el rascador perfecto? Estabilidad: Debe ser firme y no tambalearse. Si se mueve, el gato no lo usará por inseguridad. Altura: Debe ser lo suficientemente alto para que el gato pueda estirarse completamente de pie. Material: El sisal, la madera natural o la cuerda suelen ser los más atractivos. Ubicación: Colócalo en zonas visibles y de paso (no escondido en un sótano). A los gatos les gusta marcar donde ocurre la 'vida' de la casa. Paciencia: Una vez que elija un rascador, no lo cambies de sitio. Además, cuanto más usado esté, más le gustará, porque estará impregnado de su olor."
              },
              {
                "heading": "**3. **El Juego: Ejercicio físico y mental",
                "body": "Jugar no es solo entretenimiento; es la forma en que el gato ejercita su instinto de caza. Un gato que no juega puede desarrollar problemas de comportamiento por acumulación de energía o estrés. Claves para un juego exitoso: Imita a una presa: Usa juguetes que se muevan, se escondan, salten o vibren. Las cañas con plumas o cuerdas son ideales porque te permiten interactuar a distancia. Seguridad ante todo: Evita hilos largos sin supervisión o piezas pequeñas que pueda tragar. Rutina diaria: Dedica al menos 15 minutos al día a jugar activamente con él. Esto fortalece vuestro vínculo y mantiene su mente ágil. Variedad: Rotar los juguetes evita que se aburra de los mismos objetos."
              },
              {
                "heading": "Higiene y Areneros: La regla de oro",
                "body": "Los gatos son extremadamente limpios y exigentes con su baño. Un arenero sucio o mal ubicado es la causa número uno de problemas de eliminación inadecuada. Recomendaciones básicas: La regla del 'N+1': Debes tener una caja de arena por cada gato, más una extra. (Ejemplo: 1 gato = 2 cajas; 2 gatos = 3 cajas). Algunos gatos prefieren incluso usar una caja solo para orinar y otra para defecar. Tipo de arena: La mayoría prefiere arenas sin perfume y de textura fina y suave. Ubicación: Lugares tranquilos, privados y lejos de ruidos fuertes (lavadoras, secadoras) o de su zona de comida. Limpieza: Retira los desechos a diario y lava las cajas regularmente con agua y jabón neutro (evita lejías o amoniaco, cuyos olores pueden atraerles a orinar fuera). Alerta: Si tu gato empieza a orinar o defecar fuera de la caja, acude al veterinario. A menudo es el primer síntoma de dolor o enfermedad urinaria, no un acto de venganza."
              },
              {
                "heading": "El Marcaje con Orina: Entendiendo el mensaje",
                "body": "El marcaje vertical con orina (rociar paredes o muebles) es diferente a vaciar la vejiga en el suelo. Es un comportamiento comunicativo, no necesariamente higiénico. ¿Quiénes lo hacen? Puede ocurrir en gatos esterilizados, aunque es más común en no esterilizados (aprox. 10% de machos y 5% de hembras castradas pueden hacerlo ocasionalmente). ¿Por qué lo hacen? Generalmente responde a estrés o inseguridad: llegada de nuevas mascotas, cambios en la rutina, conflictos con otros gatos (incluso viendo gatos callejeros por la ventana) o cambios en el hogar. Solución: El castigo empeora el problema. Lo ideal es identificar la fuente de estrés, limpiar la zona con enzimas específicas (para eliminar el olor por completo) y consultar con un veterinario o etólogo para evaluar si necesita ayuda conductual o médica."
              },
              {
                "heading": "Conclusión: Convivencia basada en el respeto",
                "body": "El comportamiento felino no es caprichoso; tiene una lógica biológica profunda. Necesitan seguridad (rutinas, lugares altos). Necesitan estimulación (juego, caza simulada). Necesitan limpieza (areneros impecables). Necesitan comunicación (rascar, marcar, maullar). Cuando respetas estas necesidades básicas, dejas de ver 'problemas' y empiezas a ver a un compañero equilibrado, cariñoso y feliz. Entender a tu gato es la mejor herramienta para amarlo mejor."
              }
            ]
          }
        ]
      },
      {
        "slug": "comportamiento-felino",
        "label": "presentacion entre gatos",
        "topics": [
          {
            "slug": "presentacion entre gatos",
            "title": "Cómo lograr que dos gatos se acepten y convivan tranquilos",
            "intro": "Introducir un nuevo gato en casa es emocionante, pero puede ser estresante para tu gato residente. Los gatos son territoriales por naturaleza, así que la clave del éxito no es la rapidez, sino la paciencia. Si lo haces bien desde el principio, evitarás conflictos futuros y fomentarás una amistad (o al menos, una tolerancia",
            "sections": [
              {
                "heading": "Paso 1: The Initial Quarantine (Days 1-4)",
                "body": "El nuevo gato necesita sentirse seguro antes de conocer a nadie. Habitación propia: Prepara una habitación tranquila (que no sea la zona principal de tu gato actual) con su cama, comida, agua, juguetes y arenero. Refugio seguro: Deja su transportín abierto con una manta dentro para que tenga un escondite donde sentirse protegido. Cero contacto visual: Durante estos primeros días, no deben verse. Sin embargo, está bien que se huelan bajo la puerta. Esto les permite investigarse sin la presión del cara a cara."
              },
              {
                "heading": "Paso 2: The Scent Exchange (The 'Dating' Olfactory)",
                "body": "Los gatos se conocen por el olfato, no por la vista. Intercambia objetos: Frota suavemente una toalla o calcetín en las mejillas de un gato (donde tienen glándulas de olor) y dáselo al otro, y viceversa. También puedes intercambiar sus mantas. Asociación positiva: Mientras huelen el objeto del otro, dales premios ricos o juega con ellos. Queremos que asocien el olor del 'otro' con cosas buenas (comida/juego). Atención equilibrada: Pasa tiempo de calidad con cada gato por separado, acariciándolos y jugando cerca de la puerta que los separa. Esto reduce la ansiedad y los celos."
              },
              {
                "heading": "Paso 3: Controlled Visual Contact",
                "body": "Cuando ambos gatos estén relajados oliéndose bajo la puerta y no haya silbidos graves ni gruñidos constantes: La rendija: Abre la puerta solo una pulgada (unos 2-3 cm) o usa una barrera de rejilla para bebés. Deben poder verse, pero no tocarse. Observa: Si hay silbidos leves, es normal. Si hay agresión intensa (silbidos fuertes, boca abierta, orejas muy bajas), cierra la puerta y vuelve al Paso 2 durante unos días más. Premia la calma: Si se miran sin atacarse, dales premios inmediatamente."
              },
              {
                "heading": "Paso 4: The First Supervised Interactions",
                "body": "Si el contacto visual va bien, es hora de dejarles compartir espacio, pero con reglas estrictas. Salida voluntaria: Abre la puerta y deja que el nuevo gato salga si quiere. Nunca lo forces. Si se queda escondido, respétalo. Sesiones cortas: Permíteles estar juntos 15-30 minutos máximo. Luego, sepáralos de nuevo en sus habitaciones. Repite esto varias veces al día. Distracción positiva: Juega con ellos usando juguetes de caña o lanza premios, pero mantén una distancia segura (al menos 1 metro entre ellos) para evitar que compitan por el juguete. El objetivo: Que aprendan que la presencia del otro no es una amenaza, sino algo neutro o incluso divertido."
              },
              {
                "heading": "Paso 5: Gradual Increase in Time",
                "body": "Poco a poco, ve aumentando el tiempo que pasan juntos si las interacciones son tranquilas. Separa siempre al final: Termina la sesión antes de que haya algún conflicto. Es mejor dejarlos con ganas de más que con una pelea. Tiempo a solas: Después de cada sesión, déjales tiempo a solas en sus respectivas zonas para procesar la experiencia y recuperar su confianza territorial."
              },
              {
                "heading": "Warning Signs and Stress",
                "body": "Detén el proceso y vuelve atrás si ves: Silbidos intensos y repetidos, gruñidos profundos, pelo erizado y posturas rígidas. En el gato residente: Deja de comer, usa mal el arenero o se esconde todo el día. En el nuevo gato: Se lame compulsivamente, no come o parece aterrorizado. Consejo: Si el estrés es alto, consulta a tu veterinario o a un etólogo. A veces, usar feromonas sintéticas (difusores) puede ayudar a calmar el ambiente."
              },
              {
                "heading": "What You Should Never Do",
                "body": "Nunca castigues: Gritar o castigar a un gato por silbar o mostrar agresividad solo aumenta su estrés y asocia al otro gato con algo negativo (el castigo). Reacción correcta: Si hay tensión, separa a los gatos con calma, sin drama. Usa una voz suave o simplemente interpon una barrera física. No los dejes solos: Hasta que no estés 100% seguro de que se toleran (pueden tardar semanas o meses), nunca los dejes sin supervisión."
              },
              {
                "heading": "Special Cases: The Timid Cat",
                "body": "Si tu nuevo gato es muy miedoso, el proceso será más lento. No tengas prisa. Un gato tímido necesita más tiempo para confiar en su entorno antes de confiar en otro gato. Refuerza tu vínculo individual con él. Las sesiones de contacto pueden ser más cortas (10 minutos) pero más frecuentes. Conclusión: Paciencia es Amor. Cada pareja de gatos es única. Algunos se aceptan en una semana; otros tardan meses. No compares. Tu objetivo es una convivencia pacífica a largo plazo, no una amistad inmediata de película. Ir despacio es la forma más rápida de lograr el éxito. ¡Tu paciencia valdrá la pena!"
              }
            ]
          }
        ]
      },
      {
        "slug": "lenguaje",
        "label": "Feline Language",
        "topics": [
          {
            "slug": "comunicacion-corporal",
            "title": "Comunicación corporal",
            "intro": "Los gatos tienen un lenguaje corporal sofisticado y preciso. Aprender a leerlo transforma la relación con tu gato y te permite anticipar sus necesidades y estados emocionales.",
            "sections": [
              {
                "heading": "The Tail as an Emotional Barometer",
                "body": "The tail is one of the clearest signals: High and straight indicates confidence, affectionate greeting or happiness (if the tip is curved it is maximum happiness). Low or between the legs expresses fear, insecurity or submission. Moving quickly from side to side or with slow movement reveals irritation, annoyance or concentration. If it is puffed up, bristled or arched, the cat feels threatened or terrified."
              },
              {
                "heading": "Ears do not lie",
                "body": "Ears reveal a lot about the mood: Forward indicates that it is attentive, curious, alert or interested. Backwards, pressed or flat signals fear, annoyance or defensive aggression. If they are turned to the sides ('airplane mode'), it is a sign of increasing irritation and the cat needs space. Constant movement indicates that it is alert or nervous."
              },
              {
                "heading": "The eyes and blinking",
                "body": "The eyes convey deep emotions: Open with large/dilated pupils indicate fear, surprise, excitement or play. A fixed gaze may be a sign of challenge or intense attention. On the other hand, a relaxed gaze or slow blinking is an active sign of confidence, calmness and affection."
              },
              {
                "heading": "The whiskers and face",
                "body": "The whiskers also speak: If they are oriented forward, they indicate curiosity or excitement about something they are exploring. If they are stuck to the face or retracted, they signal that the cat feels fear or is trying to appear less threatening in a tense situation."
              },
              {
                "heading": "General body posture",
                "body": "The body indicates the general state: Relaxed means it feels secure. Crouched or tense indicates fear. Arched with the back raised shows that it is scared and trying to appear bigger to defend itself. The cat combines all these signals (tail, ears, eyes) at the same time; for example, a high tail with relaxed eyes is a happy cat, while ears back with a strong-moving tail is an angry cat."
              },
              {
                "heading": "Main idea",
                "body": "No se debe mirar solo una señal aislada, sino el conjunto de todas las partes del cuerpo. Aprender a observar estos detalles te ayudará a comprender mejor a tu compañero y a respetar su espacio cuando lo necesite."
              }
            ]
          },
          {
            "slug": "vocalizaciones",
            "title": "Vocalisations and their meaning",
            "intro": "Los gatos adultos casi no se maúllan entre sí: el maullido es un lenguaje que desarrollaron específicamente para comunicarse con humanos. Cada gato tiene su vocabulario propio.",
            "sections": [
              {
                "heading": "The meow",
                "body": "Un maullido corto y agudo suele ser un saludo. Uno largo y sostenido, una demanda (comida, atención). Los maullidos repetitivos pueden indicar dolor, desorientación (especialmente en gatos mayores) o angustia."
              },
              {
                "heading": "The purr",
                "body": "No siempre indica felicidad: los gatos también ronronean cuando están estresados, enfermos o en proceso de recuperación. El ronroneo tiene propiedades terapéuticas demostradas entre 25 y 50 Hz, frecuencia que favorece la regeneración ósea."
              },
              {
                "heading": "Other sounds",
                "body": "El trino o chirrido es un saludo cálido o respuesta a lo que les hablas. El chatter (castañeo de dientes) aparece al ver pájaros o presas: es frustración y excitación de caza. El bufido y el escupido son avisos claros de que el gato se siente amenazado."
              }
            ]
          },
          {
            "slug": "parpadeo-lento",
            "title": "The slow blink: the feline kiss",
            "intro": "The slow blink is one of the most studied and beautiful signals in the feline repertoire. A 2020 study at the University of Sussex demonstrated experimentally that humans can initiate this communication with any cat.",
            "sections": [
              {
                "heading": "What it means",
                "body": "When a cat looks at you and blinks slowly, it is telling you that it feels safe and at ease in your presence. It is the feline equivalent of a relaxed smile and a full gesture of trust."
              },
              {
                "heading": "How to do it",
                "body": "Look at the cat with a relaxed expression. When you have eye contact, slowly narrow your eyes almost shut and then open them again. Wait. If the cat responds with the same gesture, the communication channel is open."
              },
              {
                "heading": "With unknown cats",
                "body": "It works even with cats you don't know. In shelters and colonies, the slow blink can be the difference between a cat that approaches voluntarily and one that runs away. It is a powerful tool for gaining trust."
              }
            ]
          }
        ]
      },
      {
        "slug": "conducta",
        "label": "Common behaviour",
        "topics": [
          {
            "slug": "arañar-muebles",
            "title": "Why they scratch the furniture",
            "intro": "Scratching is not bad behaviour or destructiveness: it is a fundamental biological need. Understanding why they do it is the first step to redirecting it to suitable places.",
            "sections": [
              {
                "heading": "The Three Reasons for Scratching",
                "body": "Cats scratch to visually mark their territory and with pheromones from their paw pads, to stretch their muscles and tendons in a healthy way, and to eliminate dead layers of their nails. It is an instinctive behaviour that cannot be eliminated, only redirected."
              },
              {
                "heading": "How to Protect Furniture",
                "body": "Place scratching posts in the places where your cat already frequents to scratch. Use synthetic pheromones (Feliway) on the surfaces you want to protect. Temporarily cover the furniture with cloths or non-sticky adhesive protectors to redirect the behaviour."
              },
              {
                "heading": "What Type of Scratching Post Works Best",
                "body": "Each cat has its own preference: some need tall vertical scratching posts (that allow them to stretch completely), while others prefer horizontal ones. Sisal is usually the favourite material, although some prefer cardboard or carpet. Offer a variety at first."
              }
            ]
          },
          {
            "slug": "amasar",
            "title": "Kneading: Paws that Make Bread",
            "intro": "Kneading, that rhythmic movement of pressing alternately with the paws on soft surfaces, is one of the most tender and meaningful behaviours in the feline repertoire.",
            "sections": [
              {
                "heading": "The Origin of the Behaviour",
                "body": "Kittens knead their mother's belly to stimulate milk production. In adults, it is a comfort behaviour that persists from childhood: they do it when they feel secure, happy and relaxed."
              },
              {
                "heading": "¿Qué indica cuando amasan sobre ti?",
                "body": "It indicates when they knead on you."
              },
              {
                "heading": "Es una de las mayores expresiones de afecto y confianza. Tu gato te está tratando como a su madre y diciéndote que se siente completamente seguro en tu presencia. Es un honor felino.",
                "body": "This is one of the greatest expressions of affection and trust. Your cat is treating you like its mother and telling you that it feels completely safe in your presence. It's a feline honour."
              }
            ]
          }
        ]
      },
      {
        "slug": "entrenamiento",
        "label": "Variaciones del amasado",
        "topics": [
          {
            "slug": "guia-entrenamiento-casa",
            "title": "Variations of kneading.",
            "intro": "Algunos gatos amasan mantas, peluches o incluso el aire. Otros solo amasan sobre personas específicas. Hay gatos que amasan con las cuatro patas, otros solo con las delanteras. Todas las variantes son completamente normales.",
            "sections": [
              {
                "heading": "Some cats knead blankets, toys or even the air. Others only knead on specific people. There are cats that knead with all four paws, others only with their front paws. All the variations are completely normal.",
                "body": "Tu gato también quiere aprender: Guía divertida para entrenar en casa"
              },
              {
                "heading": "Your cat also wants to learn: Fun guide to training at home.",
                "body": "Antes de enseñarle trucos complicados, enséñale a seguir tu dedo o un objeto. Esto se llama targeting y es la base de todo. Acerca tu dedo (o un palito con una punta brillante) a la nariz del gato. Por curiosidad, lo olerá o lo tocará. En cuanto lo toque, di '¡Bien!' (con voz alegre) y dale un premio inmediatamente. Repite esto varias veces. Pronto, seguirá tu dedo allá donde lo muevas porque sabe que tocarlo le trae cosas buenas. ¡Ya tienes el control suave de su movimiento!"
              },
              {
                "heading": "**3. **Trucos fáciles para empezar",
                "body": "'Ven aquí' (La orden más importante): Es vital por seguridad. Llámalo por su nombre o chasquea la lengua. Cuando venga hacia ti, celebra mucho y dale un premio espectacular. Importante: Nunca le riñas cuando venga, aunque haya tardado mucho. Tiene que asociar 'venir' con 'fiesta'. 'Sentado': Los gatos se sientan naturalmente cuando miran hacia arriba. Con el gato de pie, pon una chuchería justo encima de su cabeza. Mueve la mano lentamente hacia atrás (hacia su cola). Para seguir la comida con la mirada, bajará el trasero automáticamente. En cuanto el culo toque el suelo, di 'Sentado' y dale el premio. 'Al regazo' o 'Sube': Ideal para que venga a dormir contigo o suba a sitios permitidos. Siéntate en una silla o sofá. Golpea suavemente tu pierna o el asiento y di 'Sube'. Guíalo con la chuchería si hace falta. Cuando suba, ¡premio inmediato! Pronto saltará solo para estar contigo."
              },
              {
                "heading": "**4. **Retos un poco más avanzados",
                "body": "'Quieto': Pídele que se siente. Pon la palma de tu mano frente a su cara (como un semáforo en rojo) y di 'Quieto'. Espera solo 1 segundo al principio. Si no se mueve, premio. Ve aumentando el tiempo poco a poco (2 segundos, 5 segundos...). Paciencia, esto cuesta más. 'Échate' (Tumbado): Es difícil porque es una posición vulnerable para ellos. Desde la posición de sentado, baja la chuchería al suelo, entre sus patas delanteras. Aléjala despacio hacia adelante. Si baja el pecho y se estira, ¡premio gordo! No esperes que se quede así mucho tiempo al principio."
              },
              {
                "heading": "**5. **¿Pasear con correa? Sí, es posible",
                "body": "A muchos gatos les encanta explorar el exterior, pero debe ser seguro. El Arnés: Compra uno tipo chaleco (más cómodo y seguro que los de cuerda fina). Déjaselo puesto en casa unos minutos al día mientras juega, para que se acostumbre. La Correa: Añádela cuando ya ignore el arnés. Deja que la arrastre bajo tu supervisión. La Salida: Sal al pasillo o jardín. No tires de la correa. Deja que él explore y tú le sigues. Si se asusta, vuelve dentro. Sin prisas."
              },
              {
                "heading": "**6. **Solucionando problemas con juego",
                "body": "¿Araña el sofá? No le grites. Pon un rascador justo al lado del sofá. Usa el truco de 'la diana' para guiar sus patas al rascador y prémiale mucho cuando lo use. Haz que el rascador sea más interesante que el sofá (ponle catnip, por ejemplo). ¿Se aburre? El entrenamiento ES el juego. Dedica esos 10 minutos diarios a repasar trucos. Verás cómo deja de buscar atención negativa (maullidos, destrozos) porque ya tiene tu atención positiva."
              },
              {
                "heading": "Consejo final: Disfruta del proceso",
                "body": "Don't seek perfection. Seek connection. You'll see how your cat starts to look for you to 'work' (play), how they look at you with their eyes waiting for instructions and how their personality shines. A trained cat is a confident, happy and much more affectionate cat. Cheer up! Your 'sofa tiger' has a lot of hidden potential."
              }
            ]
          },
          {
            "slug": "guia-paseos-correa",
            "title": "Feline Walks: How to Teach Your Cat to Walk on a Lead (without Stress)",
            "intro": "Taking your cat for a walk may sound strange, but it's a fantastic way for them to enjoy the fresh air safely. It also helps them to be calmer during visits to the vet or when travelling. The key is not force, but patience and treats.",
            "sections": [
              {
                "heading": "Before You Start",
                "body": "Make sure your cat is up to date with all their vaccinations and has a microchip. Safety comes first."
              },
              {
                "heading": "Step 1: Positive Introduction (The Harness is a Friend)",
                "body": "Don't just slap the harness on. We want them to associate it with good things. Scent phase: Leave the harness and lead near their bed or food bowl for a few days. Get them used to seeing and smelling them while they eat or sleep. Positive association: Hold the harness in your hand, let them sniff it and give them a tasty treat. Gently bring it close to their body without putting it on, keep giving rewards."
              },
              {
                "heading": "Step 2: The First Fitting (Inside the House)",
                "body": "Now let's see how it fits. Place the harness gently over their shoulders and chest. Give them constant rewards while they sniff and touch it. Quickly fasten the harness. Golden rule: There should be two fingers' width between the harness and the cat's body (not too tight, not too loose). Leave it on for just 1 or 2 minutes at first. Play with them or give them wet food to distract them. Take it off before they get annoyed or try to remove it. Repeat this daily, gradually increasing the time if they seem relaxed."
              },
              {
                "heading": "Step 3: The Ghost Lead",
                "body": "Once the cat tolerates the harness, we add the lead. Connect the lead to the harness indoors. Allow the lead to drag on the floor while your cat plays or explores. Watch out for it getting caught on furniture or chair legs. Do this for several days until it completely ignores the weight of the lead dragging."
              },
              {
                "heading": "You take control (No jerks)",
                "body": "Now it's your turn to hold the lead. Take the lead gently and follow your cat around the house. Keep the lead loose. Don't pull on it. Just accompany it. If it stops, wait. If it comes towards you, praise and reward! The aim is for it to understand that the lead doesn't hurt or restrict, but is a link to you."
              },
              {
                "heading": "Smooth guidance and direction",
                "body": "When it walks calmly with the lead in hand, start guiding it. Use a sweet and gentle voice to invite it to follow you. Throw a treat a few steps ahead. While it eats, move forward yourself. If it pulls in another direction, don't give any jerks. Keep a very gentle and constant tension in the lead. As soon as the cat gives in and looks at you or takes a step in your direction, immediately slacken the lead and reward. It will learn that 'giving in to pressure = freedom and reward'."
              },
              {
                "heading": "The big outing (Outside)",
                "body": "Cats can be very scared of the noises and smells outside. Start in a quiet and enclosed place (an indoor patio or safe garden). Sit on the floor with it. Let it explore at its own pace. At first, just follow it. Don't try to mark a route. If you see it's scared (crouches, tries to escape), go back home. Don't force it. The walk should be fun, not a nightmare."
              },
              {
                "heading": "Important Safety Rules",
                "body": "Never leave it alone: Never clip the lead to something and leave. It could get tangled, hurt itself or be left vulnerable to a dog or other danger. The door is a risk zone: Put the harness away from the exit door. Carry it out in your arms. If you do it near the door, it will learn to try to escape every time you open it. Ignore tantrums: If it meows or complains to be taken out, ignore it. Just put the harness on and go out when it's calm. This way it learns that calmness is the key to going out. Respect its boundaries: If your cat is very scared, don't insist. There are many ways to enrich its life indoors (toys, scratching posts, window perches). With love and patience, your cat could learn to enjoy its walks as much as you do. Enjoy the adventure!"
              }
            ]
          },
          {
            "slug": "clicker-training",
            "title": "Clicker training for cats",
            "intro": "Contrary to popular myth, cats are perfectly trainable with positive reinforcement. Clicker training not only teaches tricks: it strengthens the bond, mentally stimulates and reduces behavioural problems.",
            "sections": [
              {
                "heading": "How clicker training works",
                "body": "The click marks the exact moment of correct behaviour, and is always followed by a reward. The cat learns that that specific sound predicts a reward, which motivates it to repeat the behaviour. The precision of the moment is key."
              },
              {
                "heading": "Where to start",
                "body": "First 'charge' the clicker: click and give a reward 10 times in a row without asking for anything. Then start with simple behaviours that the cat already does naturally: sitting, touching your hand with its nose. Sessions of 2-5 minutes, 2-3 times a day."
              },
              {
                "heading": "Advanced tricks",
                "body": "Once the basics are mastered, you can teach: pawing, turning round, jumping over obstacles, voluntarily getting into a carrier, or even using communication buttons. There's no limit if the sessions are short and positive."
              }
            ]
          }
        ]
      },
      {
        "slug": "bienestar-felino",
        "label": "Welfare",
        "topics": [
          {
            "slug": "guia-dolor-silencioso",
            "title": "The Silent Pain: How to know if your cat is suffering and how to help it",
            "intro": "Cats are masters of disguise and hide their pain by instinct to appear vulnerable. Learning to read their subtle signals is essential to be their best ally and avoid their health deteriorating without realising it.",
            "sections": [
              {
                "heading": "Painful little habits",
                "body": "Forget the whining or whimpering; the feline pain hides in changes of behaviour: it hides more (under the bed or wardrobes), changes its mood becoming irritable or unusually 'sticky', and stops grooming (dull or matted fur). It may also lick an area excessively, adopt a tense posture of 'bread loaf' with its head low, or stop jumping to places it used to frequent due to joint pain."
              },
              {
                "heading": "Common pains",
                "body": "Identifying the type helps with the diagnosis: arthritis is common in cats over 7 years old (they stop playing or climbing high places); mouth pain (gingivoestomatitis or broken teeth) causes drooling, bad smell or refusing to eat; internal pain (cystitis, kidney or pancreatitis) generates a deep sense of unease and depression; and nerve pain (like in diabetes) can cause pain from the slightest touch of the skin."
              },
              {
                "heading": "Veterinary Multimodal Treatment",
                "body": "Modern treatment uses various tools: safe medicines such as specific anti-inflammatories, analgesics (buprenorphine) or nerve modulators (gabapentin). It is complemented with therapies such as acupuncture, therapeutic laser or physical rehabilitation. In surgeries, local blocks are used. WARNING: Never use human ibuprofen or paracetamol, they are fatal to cats!"
              },
              {
                "heading": "Your role at home: Environmental Management",
                "body": "Adapt the environment: install ramps or steps to get on sofas, use litter trays with low sides and orthopaedic beds. Weight control is crucial to not overloading joints. Also, reduce stress by maintaining calm routines and using pheromones if necessary, as stress worsens the perception of pain."
              },
              {
                "heading": "Special Cases: Age and Condition",
                "body": "In kitten puppies, be very careful with dosages due to their maturing organs. In older cats with kidney or liver problems, dosages must be adjusted meticulously. In pregnant or lactating cats, only the vet should decide on treatment, as many analgesics pass to the foetus or milk."
              },
              {
                "heading": "No expects to wait until they complain",
                "body": "A cat that does not complain does not mean they are not suffering. Untreated chronic pain worsens the quality of life and accelerates ageing. If you notice any change in routine, appetite or character, consult the vet. With your loving observation and medical help, your cat can live without suffering even with chronic illnesses."
              }
            ]
          }
        ]
      },
      {
        "slug": "estrés",
        "label": "Stress",
        "topics": [
          {
            "slug": "guia-estres-ansiedad",
            "title": "Stress in Cats: A Complete Guide to Understanding and Helping Them",
            "intro": "We now know more about feline behaviour, and one of the main keys is stress. Many health and behaviour problems we see at home have their roots here. Understanding what is happening to your cat is the first step to improving their quality of life.",
            "sections": [
              {
                "heading": "**1. **What is stress really?",
                "body": "Stress is not always 'bad'. It is a natural bodily reaction that prepares the cat to adapt to changes (a move, a journey, the arrival of a baby). Positive stress: It helps them react and adapt. Negative stress: It occurs when the situation is too intense or lasts too long. If the cat cannot adapt, the stress becomes chronic and can lead to anxiety. Key difference: Fear vs. Anxiety. Fear: An immediate reaction to a real danger. The heart beats faster and the cat is ready to flee or defend itself. It is useful for survival. Anxiety: The cat feels fear about something that is not dangerous or that they cannot control. They do not know how to resolve the situation, so they live in constant tension."
              },
              {
                "heading": "**2. **Why are some cats more sensitive?",
                "body": "Not all cats react the same way. Their level of tolerance to stress depends on two main factors: A. Genetics and Character: Some cats are naturally more secure; others, more timid. Factors such as breed, sex and genetic heritage influence. An insecure cat will always need a more tranquil and predictable environment. B. Early Socialisation (The Critical Window): The first two to seven weeks of life are decisive. If there was loving human contact: The kitten will learn that people are safe. They will be more sociable and resistant to stress. If there was no contact or negative experiences: It is very likely that they will develop distrust and fear towards humans or new stimuli when they are an adult. The environment matters: Kittens raised in environments rich in stimuli (sounds, textures, games) tend to be more adaptable adults."
              },
              {
                "heading": "**3. **What causes stress in my cat?",
                "body": "Los gatos necesitan sentir que tienen el control de su entorno. Cuando pierden ese control, aparece el estrés. Factores Sociales: Cambios en la rutina diaria. Llegada de nuevas personas, bebés u otras mascotas. Discusiones o gritos en casa. Castigos o atención irregular (a veces mucha, a veces nada). Factores Físicos: Mudanzas o reformas. Espacio insuficiente o mala organización (ej. arenero cerca de la comida). Competencia por recursos (si hay varios gatos y pocos platos o areneros)."
              },
              {
                "heading": "¿Cómo sé si mi gato está estresado?",
                "body": "Los gatos son expertos en ocultar el dolor y el malestar. Debes ser un detective. Síntomas Físicos Inmediatos: Respiración acelerada o jadeo. Pupilas muy dilatadas. Temblores o salivación excesiva. Vómitos o diarrea puntual (ej. antes de viajar). Cambios de Comportamiento: Postura: Orejas hacia atrás, cola baja, cuerpo tenso. Escondite: Pasa mucho tiempo oculto o bajo los muebles. Agresividad: Gruñe, bufa o ataca sin motivo aparente. Vigilancia extrema: No se relaja, está siempre 'en guardia'. Signos de Estrés Crónico (A largo plazo): Si el estrés no se trata, aparecen problemas más graves: Aseo compulsivo: Se lame tanto que se queda sin pelo (alopecia psicógena). Problemas de eliminación: Ora o defeca fuera del arenero (marcado territorial o ansiedad). Cambios en el sueño: Duerme poco, mal, o siempre en posiciones tensas (no boca arriba ni de lado relajado). Cambios alimenticios: Come en exceso (ansiedad) o deja de comer. Conductas repetitivas: Persigue su cola, maúlla constantemente o camina sin rumbo."
              },
              {
                "heading": "El impacto en la Salud Física",
                "body": "El estrés no es solo 'cosa de la mente'; enferma el cuerpo. Cistitis Idiopática Felina: Inflamación de la vejiga sin infección bacteriana, directamente ligada al estrés. Problemas digestivos: Gastritis, vómitos crónicos o diarreas. Problemas de piel: Heridas por lamido excesivo. Obesidad y Diabetes: A veces, los dueños dan comida para 'consolar' al gato, lo que lleva al sobrepeso. Bajada de defensas: Los gatitos o gatos mayores estresados se enferman más fácilmente (gripes, infecciones). Importante: Antes de asumir que es estrés, acude al veterinario. Problemas como hipertiroidismo, dolor articular o tumores pueden imitar síntomas de estrés o ansiedad."
              },
              {
                "heading": "¿Cómo ayudar a tu gato? (Tratamiento y Manejo)",
                "body": "El objetivo es devolverle la sensación de seguridad y control. A. Terapia de Conducta (Lo más importante): Identifica la causa del estrés y modifica el entorno. Respeta sus rutinas. Proporciona lugares altos y escondites seguros. Juega con él diariamente para liberar tensión. B. Ayudas Ambientales: Feromonas: Son sustancias químicas (como Feliway) que imitan las feromonas faciales de los gatos, transmitiendo mensaje de 'calma' y 'familiaridad'. Ayudan a reducir el marcado y la ansiedad. Enriquecimiento ambiental: Rascadores, juguetes interactivos y acceso a ventanas seguras. C. Alimentación Anti-Estrés: Existen dietas específicas o suplementos que ayudan: Triptófano: Un aminoácido precursor de la serotonina (la hormona de la felicidad). Derivados de la leche: Proteínas hidrolizadas con efecto calmante natural. Estos nutrientes ayudan a regular el estado de ánimo, mejorar la digestión y cuidar la piel. D. Medicación: En casos severos de ansiedad, el veterinario conductista puede recetar fármacos. Nunca mediques a tu gato por tu cuenta. Los medicamentos deben ser siempre el complemento de una terapia de conducta, no la única solución."
              },
              {
                "heading": "Conclusión",
                "body": "El"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "alimentacion",
    "label": "Alimentation",
    "emoji": "",
    "color": "#d4853a",
    "bg": "#fff3e6",
    "description": "Nutrition, diets and what they cannot eat",
    "subcategories": [
      {
        "slug": "dietas",
        "label": "Types of diet",
        "topics": [
          {
            "slug": "comida-humeda-vs-seca",
            "title": "Wet food vs dry food",
            "intro": "This is one of the most frequently asked and debated questions among cat owners. The answer matters because cats have a particular relationship with water that means the type of food directly impacts their renal health.",
            "sections": [
              {
                "heading": "The nature of the cat and water",
                "body": "Cats evolved in arid environments and obtain most of their water from their prey. Their thirst is 'calibrated' for food with 70% moisture. Dry food has only a 10% moisture content, which can lead to chronic dehydration and renal and urinary problems."
              },
              {
                "heading": "Advantages of wet food",
                "body": "Greater hydration, greater satiety with fewer calories, more similar to a natural diet, better for cats with a tendency to urinary or renal problems. Most veterinarians recommend it as the main food."
              },
              {
                "heading": "The role of dry food",
                "body": "It's not bad, but it shouldn't be the only food. It can be useful as a supplement, for treat-dispensing toys or as a snack. Choose pellets with a high percentage of animal protein (not vegetable) and without cereals as the first ingredient."
              }
            ]
          },
          {
            "slug": "dieta-barf",
            "title": "BARF diet for cats",
            "intro": "The BARF (Biologically Appropriate Raw Food) diet is based on feeding the cat with raw meat, marrow bones and offal, imitating the diet of its wild ancestors. It has passionate defenders and detractors with solid arguments.",
            "sections": [
              {
                "heading": "Principles of BARF",
                "body": "The ideal diet for a BARF cat includes approximately 70% lean meat, 10% marrow bones (never cooked), 10% offal (liver, heart) and the remaining 10% of other tissues. It requires careful supplementation with taurine, calcium and vitamins."
              },
              {
                "heading": "Benefits reported",
                "body": "Improved coat, reduced stool production, better hydration, cleaner teeth and increased energy are the most cited benefits by those who practice it. Some studies suggest a lower risk of obesity."
              },
              {
                "heading": "Risks to consider",
                "body": "Bacterial contamination (Salmonella, Listeria), nutritional imbalances if not formulated correctly, and the risk of asphyxiation with bones. It is not recommended for immunocompromised cats, those undergoing oncological treatment or older cats with compromised digestive systems."
              }
            ]
          }
        ]
      },
      {
        "slug": "prohibidos",
        "label": "Foods to avoid",
        "topics": [
          {
            "slug": "toxicos-comunes",
            "title": "Toxic foods for cats",
            "intro": "Many foods completely safe for humans are hazardous or lethal to cats. Knowing this list may save the life of your companion.",
            "sections": [
              {
                "heading": "Extreme danger: severe toxins",
                "body": "Onion, garlic, leek and chives (in all their forms: raw, cooked or powdered) destroy red blood cells. Chocolate and coffee contain theobromine and caffeine which can cause convulsions and death. Grapes and raisins cause acute kidney failure for reasons yet unknown."
              },
              {
                "heading": "Moderate danger",
                "body": "Cow's milk causes diarrhoea in most adult cats, which are lactose intolerant. Avocado contains persin, toxic to many animals. Any amount of alcohol is hazardous. Macadamia nuts can cause weakness and fever."
              },
              {
                "heading": "What they can have as a treat",
                "body": "Small amounts of cooked chicken or turkey without bone, cooked salmon or tuna (not in oil with salt), cooked carrot, butternut squash, raspberries and cucumber are safe options as an occasional snack."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "juego",
    "label": "Play",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "Stimulation, toys and enrichment",
    "subcategories": [
      {
        "slug": "importancia",
        "label": "Why it's vital",
        "topics": [
          {
            "slug": "juego-cachorros",
            "title": "Play in puppies: the foundation of everything",
            "intro": "The first six months of a cat's life are a critical period of development. What it learns during play at this stage will largely determine how it will relate to humans and other animals for the rest of its life.",
            "sections": [
              {
                "heading": "The window of socialisation",
                "body": "Between two and nine weeks of life, the cat learns what is normal in its world. A kitten that interacts with people, other cats, domestic noises and varied experiences during this period will be a more secure and adaptable adult."
              },
              {
                "heading": "The most common mistake: hands as a toy",
                "body": "Using hands or feet to play with a kitten seems harmless, but teaches that human skin is a valid prey. When that kitten weighs five kilograms, the bites and scratches will be painful and the behaviour difficult to correct. Always use toys with distance."
              },
              {
                "heading": "Play as a preventative measure against problems",
                "body": "A cat that does not play enough channels its hunting energy into problematic behaviour: attacking ankles, destroying objects, redirected aggression. 2 play sessions of 15 minutes a day, especially before bed, are the best antidote."
              }
            ]
          }
        ]
      },
      {
        "slug": "juguetes",
        "label": "Toys",
        "topics": [
          {
            "slug": "canas-y-plumas",
            "title": "Rods and prey toys",
            "intro": "Rods with feathers, mice or worm attachments are the most effective toys because they allow you to simulate a complete hunting sequence. They are indispensable in the repertoire of any cat.",
            "sections": [
              {
                "heading": "Why they work so well",
                "body": "They activate the hunting instinct in its entirety: the irregular movement imitates that of a real prey. The cat can stalk, pursue, catch and 'kill'. This complete sequence releases endorphins and deeply satisfies."
              },
              {
                "heading": "How to move them correctly",
                "body": "The most common mistake is to move them too quickly and without stopping. Real prey stops, hides, moves in unpredictable angles. Simulate that: pause, hide it behind a cushion, make it appear suddenly, let it move slowly."
              },
              {
                "heading": "How to end the session well",
                "body": "Always end by allowing the cat to 'catch' and 'kill' the toy several times at the end. A cat that never catches the prey becomes frustrated. After play, a small snack completes the natural cycle: hunt → eat → groom → sleep."
              }
            ]
          },
          {
            "slug": "puzzles-de-comida",
            "title": "Puzzles of food and intelligence",
            "intro": "Food puzzles are one of the most under-valued enrichment methods. In the wild, a cat spends between 6 and 8 hours hunting. A conventional feeder resolves that need in 30 seconds, leaving the cat without mental stimulation.",
            "sections": [
              {
                "heading": "Proven benefits",
                "body": "Reduce anxiety and boredom, slow down eating (preventing vomiting from eating too quickly), stimulate cognitively, encourage movement and may reduce obesity."
              },
              {
                "heading": "How to start",
                "body": "Begin with very easy puzzles: a tray with compartments, a simple ball dispenser. If the puzzle is too difficult from the start, the cat will become frustrated and reject it. Gradually increase the difficulty over weeks."
              },
              {
                "heading": "Homemade puzzles",
                "body": "You don't need to buy anything: a cardboard box with holes, a tray of ice with treats, a plastic bottle with small openings, or hiding rewards under cups are all effective and free puzzles."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "etapas",
    "label": "Stages of life",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "Puppy, adult, senior and their needs",
    "subcategories": [
      {
        "slug": "genetica-felina",
        "label": "Genetics and Heredity",
        "topics": [
          {
            "slug": "guia-genetica-colores",
            "title": "Feline Genetics: Understanding Colours and Inheritance (without complications)",
            "intro": "The genetics of cats is not magic, it's science. Understanding the basics will help you comprehend why your cat has that specific colour and how inheritance works on their coat, leaving aside old myths to focus on current science.",
            "sections": [
              {
                "heading": "**1. **Debunking the Darwin myth",
                "body": "For a long time, it was believed that domestication 'created' new varieties by itself, but this is false. Humans do not create genes, but rather select them. In nature, unusual mutations are usually eliminated if they do not help to survive, but at home we protect variations like long hair or certain colours for aesthetic reasons. All the current variety already existed potentially in the wild ancestors; we have only accelerated their appearance through selective breeding."
              },
              {
                "heading": "**2. **How do colours work? (The basics)",
                "body": "Characters depend on genes and their versions called 'alleles'. Using the example of Black (D) and Blue/Gray (d): DD (Homozygous Dominant) results in a black cat; Dd (Heterozygous) results in a black cat visually but 'carrier' of the blue gene; dd (Homozygous Recessive) results in a blue cat. The golden rule is that black dominates over blue: if there is at least one 'D', the cat will be black. To be blue, it must receive the 'd' gene from both parents."
              },
              {
                "heading": "**3. **Importance of responsible selection",
                "body": "A difference between dogs and cats is that the genetics of colour in cats is extremely specialised and distinctive between breeds. International judges and geneticists recommend following strict breeding guidelines to avoid unexpected results or health problems. Not all colour crosses are recommended, as some can lead to unwanted patterns by the breed standard."
              },
              {
                "heading": "**4. **Quick Guide to Recommended Crosses (FIFE)",
                "body": "The International Cat Federation (FIFE) suggests avoiding random crosses between very distinct colour varieties. The basic principles are: 1. Breeding within the same breed (e.g. Persians with Persians). 2. Respecting coat length (e.g. for short-haired, l for long-haired). 3. Avoiding 'prohibited' crosses: if there is no letter in the official tables for a specific combination, it is best to avoid it for unpredictable or unsatisfactory results."
              },
              {
                "heading": "**5. **Curiosity: Do Cats See Colours?",
                "body": "Yes, but not like us. They have better colour vision than was thought, but distinguish fewer nuances than humans. It is ironic that, although they see fewer colours, humans have created a much richer and more complex variety of pigments and distributions in their coat than they themselves can appreciate."
              },
              {
                "heading": "Conclusion for the Breeder or Owner",
                "body": "Genetics is probability: if you cross two black carriers of blue (Dd x Dd), you will have black offspring and some blues. If you cross two blues (dd x dd), they will all be blue. If you cross a pure black (DD) with a blue (dd), they will all be black but carriers. Knowing these basics allows you to predict litters and breed in an ethical, responsible and health-conscious way, respecting breed standards."
              }
            ]
          }
        ]
      },
      {
        "slug": "reproduccion-felina",
        "label": "Reproduction in Cats",
        "topics": [
          {
            "slug": "guia-gestacion-gatas",
            "title": "The gestation in cats: A simple and natural explanation",
            "intro": "The feline gestation is a precise dance between physical signals, hormones and embryonic development. Understanding each stage helps us to respect and care better for our cats during this natural process.",
            "sections": [
              {
                "heading": "How does a cat's cycle work?",
                "body": "The cat is like a 'seasonal clock' that enters heat when there are more hours of daylight (spring-summer). Mating is the key: the cat does not ovulate alone, but needs the physical stimulation of mating to release the LH hormone and for her eggs to come out of the ovaries between 24 and 50 hours later. If there is no fertile mating, she may have a 'pseudogestation', where her body acts as if she is pregnant for approximately 45 days, although there are no kittens."
              },
              {
                "heading": "The journey of pregnancy, step by step",
                "body": "Chronology after mating: From 0 to 50 hours the mating stimulates ovulation. At +30 hours the eggs are fertilised in the fallopian tubes. At 5-6 days the embryos (morulae) arrive at the uterus. Between 8-10 days they become blastocysts. At 12-13 days implantation occurs in the wall of the uterus (the embryos travel between the horns to distribute themselves evenly). At 28-30 days the fetal stage begins with the formation of organs. Finally, between 64 and 67 days, the kittens are born."
              },
              {
                "heading": "The hormones: The conductors of the orchestra",
                "body": "The body uses key messengers: LH (triggers ovulation at the start); Progesterone P4 (keeps the uterus calm, rises at the start and falls slowly after day 30); Prolactin (helps to maintain the corpus luteum, increases from day 25-30 and is crucial in the second half); Relaxin (softens pelvic tissues and helps to maintain pregnancy, rises from day 20-30 only in pregnant cats); and Estradiol (prepares the uterus and breasts, rising at the end)."
              },
              {
                "heading": "Who produces progesterone at the end?",
                "body": "There is a scientific debate: Theory A says that the ovaries are essential until the end, while Theory B indicates that the placenta takes over in the second half. The fact is that if surgery is performed before day 45-50 the pregnancy is interrupted, but after day 50 it can continue, which shows that the feline placenta has the capacity to produce progesterone in the last weeks. It is a team effort with prolactin as the coordinator."
              },
              {
                "heading": "Quick facts to remember",
                "body": "Duration of pregnancy: 64-67 days (≈9 weeks). Litter size: 1 to 5 kittens (average 3-4). Birth weight: 85-105 grams. The placenta is of the 'zonal' (belt-like) and 'endoteliocorial' (very invasive) type, which explains why cats cannot donate blood easily."
              },
              {
                "heading": "Why is it important to know this?",
                "body": "This allows responsible breeders to provide better prenatal care. For veterinarians, knowing the hormones enables them to diagnose problems or interrupt pregnancies in an ethical manner. For owners, it is vital to know that stress or sudden changes can directly affect the hormones and, consequently, the success of the pregnancy."
              }
            ]
          }
        ]
      },
      {
        "slug": "gatito",
        "label": "Kitten (0–6 months)",
        "topics": [
          {
            "slug": "primeras-semanas",
            "title": "The first few weeks of life",
            "intro": "The first two months of a cat's life are extraordinarily intense. At this time, a completely dependent and defenceless creature becomes an agile and curious animal. Understanding this stage is fundamental for any breeder or adopter.",
            "sections": [
              {
                "heading": "0–2 weeks: neonatal period",
                "body": "Kittens are born blind, deaf and unable to regulate their temperature. They depend completely on their mother to feed (every 2 hours), warm themselves and stimulate urination and defecation. Their only functional sense at birth is smell."
              },
              {
                "heading": "2–7 weeks: primary socialisation",
                "body": "The eyes open between 10 and 16 days. At this period the nervous system develops at maximum speed. Positive experiences with people, sounds and varied environments during these weeks determine the adult personality."
              },
              {
                "heading": "7–12 weeks: progressive independence",
                "body": "El destete se completa alrededor de las 8 semanas. Es el momento ideal para la adopción: suficientemente maduro para separarse de la madre, pero en plena ventana de socialización con humanos. Separar antes de las 8 semanas aumenta el riesgo de problemas de conducta."
              }
            ]
          }
        ]
      },
      {
        "slug": "senior",
        "label": "Senior (+10 años)",
        "topics": [
          {
            "slug": "cuidados-senior",
            "title": "Cuidados del gato mayor",
            "intro": "Un gato de 10 años equivale aproximadamente a una persona de 56 años. A partir de los 15 años, a un humano de más de 76. Sus necesidades cambian significativamente y merece adaptaciones en su entorno y rutina médica.",
            "sections": [
              {
                "heading": "Cambios físicos esperados",
                "body": "Menor flexibilidad articular, pelaje menos brillante, posible pérdida de masa muscular, cambios en los patrones de sueño, reducción de la agudeza sensorial y mayor vulnerabilidad a enfermedades crónicas. No todos los cambios son patológicos: algunos son simplemente el envejecimiento normal."
              },
              {
                "heading": "Adaptaciones del entorno",
                "body": "Rampas o escalones para acceder a lugares altos, caja de arena con entrada baja, recipientes de comida y agua elevados para reducir la tensión cervical, zonas de descanso cálidas y accesibles. Los cambios sutiles en el entorno marcan una gran diferencia en su calidad de vida."
              },
              {
                "heading": "Seguimiento médico intensificado",
                "body": "A partir de los 10 años, las revisiones deben ser semestrales e incluir siempre análisis de sangre completo y perfil de tiroides. La detección temprana de hipertiroidismo, enfermedad renal o diabetes puede añadir años de calidad de vida."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "emergencia",
    "label": "Emergency",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "Dog, adult, senior and their needs",
    "subcategories": [
      {
        "slug": "emergencias-felinas",
        "label": "First Aid",
        "topics": [
          {
            "slug": "guia-primeros-auxilios-gatitos",
            "title": "First Aid for Kittens: What to do in an emergency",
            "intro": "First aid does not replace the vet, but it can save your kitten's life while you get to the clinic. The aim is to prevent it getting worse, stabilise it and transport it safely.",
            "sections": [
              {
                "heading": "**1. **Calm and Safety",
                "body": "Your safety is paramount; a kitten in pain may bite or scratch. Keep your face away from its claws and mouth. Do not use a muzzle, as it is contraindicated in cats with respiratory problems or vomiting. The 'blanket' technique is ideal: wrap it gently in a towel, leaving only its head exposed to calm it and handle it safely."
              },
              {
                "heading": "**2. **Rapid Assessment (ABCDE Rule)",
                "body": "Before moving it, check: A (Airways): Ensure there are no obstructions in the nose or mouth. B (Breathing): Observe if the chest is moving. C (Circulation): Press bleeding wounds with clean gauze. D (Pain/Immobilisation): Do not move it suddenly if you suspect fractures. E (Exposure): Protect open wounds with clean cloths."
              },
              {
                "heading": "**3. **Emergencies in Puppies",
                "body": "Babies are very fragile in the face of two dangers: 1. Hypoglycaemia (Low blood sugar): If they present extreme weakness or pale gums, apply honey or sugar under their tongue or on their gums. 2. Hypothermia: If the kitten is cold to the touch, warm it up with your body heat (under your clothing) or a warm water bottle wrapped in a towel (never directly)."
              },
              {
                "heading": "Safe Transfer",
                "body": "Always use a sturdy carrier or box with ventilation. If you suspect broken bones, minimise movement using a board or rigid towel as an improvised stretcher. During the journey, speak softly and keep the vehicle stable to reduce their stress."
              },
              {
                "heading": "Kitten Emergency Kit",
                "body": "Have to hand: veterinary emergency phones, clean towels or blankets, sterile gauze, cane sugar or glucose, medical adhesive tape and a ready carrier. Being prepared makes all the difference in a critical situation."
              },
              {
                "heading": "Final Warnings",
                "body": "Call the vet while you are on your way to the clinic so they can expect you. NEVER medicate with human drugs (paracetamol or ibuprofen) as they are lethal. Act quickly: in an emergency, every minute counts to save their life."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "adopción",
    "label": "Adoption",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "How to Adopt a Cat",
    "subcategories": [
      {
        "slug": "bienvenida",
        "label": "Welcome",
        "topics": [
          {
            "slug": "guia-bienvenida-cuidados",
            "title": "Welcome Home: How to Care for Your New Cat from Day One",
            "intro": "Congratulations on the Adoption! Adopting a cat is a wonderful experience, but it also involves responsibility. The first few days are crucial for its adaptation. Here's everything you need to know to ensure its health, wellbeing and a happy coexistence.",
            "sections": [
              {
                "heading": "**1. **The First Few Days: Vigilance and Adaptation",
                "body": "A change of environment generates stress, which can lower the cat's defences. Visit the vet: Take your cat to its new trusted clinic as soon as possible. Hand over all previous medical documentation (vaccinations, de-worming) and follow their instructions. What to look out for: Whether it eats and drinks normally, has energy in line with its age, has consistent stools (some initial softness due to diet change is normal, but persistent diarrhoea is not) and absence of symptoms like coughing, vomiting, sneezing or discharge. If in doubt, consult your vet."
              },
              {
                "heading": "**2. **Preventative Health: Vaccinations, Parasites and Sterilisation",
                "body": "Vaccination: Vaccines protect against serious diseases (such as panleucopenia, feline respiratory complex or leukaemia). Follow the schedule recommended by your vet. The rabies vaccine, although not always legally compulsory for cats (depending on the region), is highly recommended. De-worming: Essential for the cat's health and your family's (zoonosis). Internal: Recommended every 3 months. External: Vital if the cat goes out or has access to balconies/terraces. Sterilisation: The most responsible and healthy decision. Benefits: Prevents unwanted litters, reduces marking, decreases fights and prevents serious diseases (breast tumours, pyometras). Myths: Does not change its personality or make it 'lazy'. Sterilise your cat, whether male or female, indoor or outdoor."
              },
              {
                "heading": "**3. **Nutrition and Hydration",
                "body": "Alimento adecuado: Usa pienso seco de calidad adaptado a su edad y condición física. Evita darle comida casera o sobras humanas. Premios: Úsalos con moderación para no causar obesidad. Agua fresca: Fundamental, coloca varios bebederos por casa, lejos de la comida y del arenero. Algunos gatos prefieren fuentes en movimiento. Incorporar comida húmeda ayuda a la hidratación. Prohibido: La leche de vaca (la mayoría de los gatos adultos son intolerantes a la lactosa). El yogur natural o queso sin sal pueden darse como premio puntual, pero no son necesarios."
              },
              {
                "heading": "Higiene y Cuidado Físico",
                "body": "Los gatos necesitan tu ayuda en ciertos aspectos. Cepillado: Pelo corto una vez por semana (diario en muda); pelo largo diario para evitar nudos y bolas de pelo. Si expulsa bolas de pelo con dificultad, consulta sobre pastas de malta. Uñas: Corta solo la punta transparente, evitando la parte rosada (vascularizada). Baños: Generalmente no son necesarios, solo si está muy sucio o por indicación médica."
              },
              {
                "heading": "El Arenero: Reglas de Oro",
                "body": "Un gato que no usa el arenero suele expresar un problema médico o de estrés. Cantidad: Regla N+1 (número de gatos + 1 caja). Ubicación: Lugares tranquilos, accesibles, lejos de ruidos (lavadoras) y de su comida. Tipo: A muchos no les gustan los cerrados; prueba con uno abierto y grande. Limpieza: Retira los desechos a diario y lava la caja regularmente con agua y jabón neutro (evita lejía o amoniaco). Arena: Prefieren arenas sin perfume y de textura fina."
              },
              {
                "heading": "Comportamiento y Enriquecimiento Ambiental",
                "body": "Lenguaje: Cola erguida es saludo amistoso; cola moviéndose rápido es irritación; orejas hacia atrás indican miedo. Ronroneo puede ser bienestar, dolor o estrés. Juego: Dedica 15-20 minutos diarios a caza simulada (cañas, pelotas). Evita usar tus manos o pies. Rascadores: Proporciona rascadores estables, altos y de materiales atractivos (sisal, madera). Nunca castigues por rascar muebles; redirige y premia. Verticalidad: Necesitan lugares altos para observar y refugios seguros para esconderse. Respeta su soledad."
              },
              {
                "heading": "Consejos Específicos según la Edad",
                "body": "CACHORRO: Socialización (2-8 semanas) es la etapa clave para aceptar el contacto humano y visitas al veterinario. Enséñale qué se puede morder. Acostúmbralo al transportín dejándolo abierto en casa. Protege cables y ventanas. ADULTO: Paciencia, la adaptación puede tardar semanas. Usa una habitación de aclimatación al llegar con todos sus recursos. Haz presentaciones con otros animales muy gradualmente. Mantén horarios fijos de comida y juego."
              },
              {
                "heading": "Aspectos Legales y Seguridad",
                "body": "Microchip: It is compulsory and must be kept up to date (RIAC in Madrid). Accident Prevention: Cat Parachute Syndrome. Install mosquito nets resistant to windows and balconies. A fall from height can be fatal; do not rely on their 'ability' to land on their feet. Every cat is a world. Observe, respect their times and consult your vet at all times in the event of sudden changes."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "razas",
    "label": "Breeds",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "Cat Breeds",
    "subcategories": [
      {
        "slug": "razas-felinas",
        "label": "A Complete Guide to Cat Breeds",
        "topics": [
          {
            "slug": "guia-completa-razas",
            "title": "The feline world is vast and fascinating. Although all cats share basic instincts, each breed has a unique personality, care needs and physical characteristics. This guide combines historical records with modern classifications from organisations such as TICA, CFA and FIFe, organised to help you understand which type of cat will best suit your home. Note: Beyond breed, individual personality and early socialisation play a fundamental role.",
            "intro": "1. The Classic Historical Breeds",
            "sections": [
              {
                "heading": "Ancient breeds with defined personalities: Abyssinian (Ethiopia/Egypt): Active, curious, 'dog-cat', needs a lot of mental stimulation. Siamese (Thailand): Extremely vocal, intelligent, demands constant attention. Persian (Iran): Calm, sweet, silent; requires daily brushing and facial cleaning. Maine Coon (USA): The 'gentle giant', sociable, ideal for families with children; requires space. Bengal (USA): High energy, athletic, appears like a miniature leopard; needs intense daily stimulation.",
                "body": "2. Gentle Giants and Cold-Adaptable Breeds"
              },
              {
                "heading": "Robust cats with dense coats. Maine Coon: One of the largest, stands out for its 'lynx tips' and soft meows. Norwegian Forest Cat (Skogkatt): Natural climber with waterproof coat, independent but affectionate. Siberian: Famous for being hypoallergenic (produces less Fel d 1), agile and affectionate. Ragdoll: Large and muscular, with a docile temperament; 'collapses' like a rag doll when picked up.",
                "body": "3. Elegance of Short Coat and Athletic Body"
              },
              {
                "heading": "**3. **Elegancia de Pelo Corto y Cuerpo Atlético",
                "body": "Poco mantenimiento de pelo con mucha interacción."
              },
              {
                "heading": "British Shorthair: Cara redonda, compacto y tranquilo; no le gusta que lo carguen mucho. Ruso Azul: Pelo plateado y ojos verdes, tímido con extraños pero leal. Burmés: Musculoso y pesado, muy orientado a las personas. Bombay: Parece una pantera negra en miniatura, le encanta el calor y los regazos. Chartreux: Raza francesa antigua, silencioso y cazador experto con pelo repelente al agua.",
                "body": "4. Mutaciones Únicas: Orejas, Colas y Texturas"
              },
              {
                "heading": "Características genéticas exóticas. Scottish Fold: Orejas dobladas hacia adelante, posición de 'Buda'; requiere revisión articular. Munchkin: Patas cortas, extrovertido y curioso. Sphynx: Sin pelo, sociable y busca calor; requiere baños semanales. Devon Rex & Cornish Rex: Pelo rizado u ondulado, traviesos y apegados. American Curl: Orejas hacia atrás. Manx & Japanese Bobtail: El primero sin cola y robusto; el segundo con cola de pompón, símbolo de buena suerte.",
                "body": "5. Exóticos y Pocas Unidades"
              },
              {
                "heading": "Razas menos comunes. Ocicat: Parece un ocelote salvaje, entrenable y sociable. Toyger: Imitación de un tigre, inteligente. Lykoi: El 'gato lobo', apariencia de hombre lobo, curioso y juguetón. Singapura: Una de las razas más pequeñas, travieso y amante de las alturas. Korat: Tailandés gris plateado con corazón en la frente, sensible al ruido y amuleto de buena suerte.",
                "body": "Consejos para Elegir tu Raza"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "adquisicion responsable",
    "label": "Responsible Acquisition",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "Cat Breeds",
    "subcategories": [
      {
        "slug": "adquisición chile",
        "label": "🇨🇱 Chile",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-chile",
            "title": "Responsible Acquisition in Chile: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed is suited to your lifestyle, it is essential to acquire it responsibly. In Chile, the purchase of animals is regulated by Law 21.020 (Cholito Law), which protects animal welfare and requires responsible ownership. Buying a cat is not like buying an object; it is acquiring a living being with complex needs.",
            "sections": [
              {
                "heading": "**1. **Why choose a Registered Breeder?",
                "body": "Ethical breeders preserve the breed, care for genetic health, and socialise the kittens. The safest way to identify them is to check if they are registered with RENAGACH (Chilean National Cat Registry), which represents federations such as WCF and TICA. Advantages of buying from a breeder with a pedigree: Genetic Certification (guarantees the breed), Health (genetic tests to rule out diseases such as PKD in Persians or HCM in Maine Coons), and Socialisation (they grow up in a family environment, not in cages)."
              },
              {
                "heading": "Directory of Reference (Ethical Breeders in Chile)",
                "body": "Indicative List (always verify records): Maine Coon: Colitas Arriba, Nahuelhuén (Santiago/La Reina). Persian / Himalayan: GatyKey Cattery, Viestmaden Cattery (La Florida). Ragdoll: Reflejo de Luna (docile temperament). Somali: Per-Bast Cattery (unique specialist). Sphynx: Ti Voglio Bene, The Kittens House. British Shorthair: Von & Von Cattery (robust structure)."
              },
              {
                "heading": "**2. **Legal Framework: Your Rights and Responsibilities (Law 21.020)",
                "body": "Para que la transaction be legal, the breeder must comply with: Microchip Obligatory (implanted and registered) and Sales Contract. The contract must detail health guarantees (negative tests for FeLV/FIV), commitment to sterilisation and a clause for return. Your Responsibility: Once the purchase has been made, you must register the animal on the National Pet Register if the details were not updated immediately."
              },
              {
                "heading": "**3. **Checklist: How to detect an Ethical Breeder?",
                "body": "Before paying, check: Do they allow visits? They should be clean and in human contact. Age of delivery? NEVER accept a kitten of less than 12 weeks (3 months). Complete documentation? You should receive a birth certificate/Preliminary Pedigree, a vaccination card up to date (signed by a registered veterinarian) and a parasite control certificate. Transparency of health? A good breeder will ask about your situation to ensure a good home."
              },
              {
                "heading": "**4. **Legal Importation of Exotic Breeds",
                "body": "If you are looking for breeds such as Lykoi, Toyger or Bengal from specific lines, the process is strict: comply with the requirements of the SAG (Agricultural and Livestock Service), health certificates from the country of origin and possible quarantines. It is recommended to consult with a specialised pet transport agency to avoid customs retention."
              },
              {
                "heading": "Be Careful of the 'Cat Factories'!",
                "body": "Avoid buying at free fairs, informal markets or social media ads without a visible physical address. Be suspicious of places with multiple breeds available immediately. These places prioritise profit over welfare, resulting in animals with chronic health problems and short lives. Your conscious choice helps to eradicate this abuse."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición argentina",
        "label": "Argentina",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-argentina",
            "title": "Responsible Acquisition in Argentina: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed suits your lifestyle, it is essential to acquire it in a responsible manner. In Argentina, animal ownership is protected by the National Law 27.592 (Alica Law) and various ordinances (such as Law 4040 in CABA), which recognise animals as sentient beings. Buying a cat is not a commercial transaction; it is incorporating a family member.",
            "sections": [
              {
                "heading": "Por qué elegir un Criadero Registrado?",
                "body": "The criaderos éticos in Argentina preserve the breed, look after the genetic and social health, and socialise the kittens. The main organisations are FAAC (Federación Argentina de Aficionados al Gato), affiliated to the WCF, and local clubs of TICA or FIFe. Advantages of buying with pedigree: Genetic Certification (guarantees registered ancestors), Preventative Health (genetic tests for PKD or HCM) and Early Socialisation (human stimuli that prevent behaviour problems)."
              },
              {
                "heading": "Marco Legal: Tus Derechos y Deberes",
                "body": "For the transaction to be legal in Argentina, the criadero must comply with: Identification (Microchip), obligatory in CABA, Córdoba and Santa Fe among others. Sales Contract with animal data, health guarantees, return clause and commitment to sterilisation. Vaccination Card: It must be signed by a registered Veterinary Doctor, with the triple feline vaccinations (and quintuple if applicable) up to date according to the age."
              },
              {
                "heading": "Checklist: ¿Cómo detectar un Criadero Ético en Argentina?",
                "body": "Before paying, check: Do they allow in-person visits? You must know the cattery and see the mother; be suspicious of deliveries in shopping centres. Age of delivery? NEVER before 12 weeks (3 months). Complete documentation? You should receive a Birth Certificate/Pedigree, vaccination card and invoice or receipt. Interview with the buyer? A good breeder will ask about window netting and your previous experience."
              },
              {
                "heading": "Importación Legal de Razas Exóticas",
                "body": "If you are looking for breeds not commonly bred (Lykoi, Toyger), the process is regulated by the SENASA (Servicio Nacional de Sanidad y Calidad Agroalimentaria). Requirements: Zoosanitary certificate of origin, rabies vaccination and possible quarantines. It is recommended to hire a specialised pet transport agency; bringing a cat on your own account can result in severe detentions or fines."
              },
              {
                "heading": "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
                "body": "DO NOT BUY IF: They ask for advance payment without showing the animal (common scam; use real-time video calls). They sell at fairs or plazas: animals without sanitary control usually die soon ('cat of the week'). They have an infinite stock of multiple breeds available immediately. Suspiciously low prices: ethical breeding involves high costs in health and premium food that a low price does not cover."
              },
              {
                "heading": "Conclusion",
                "body": "Acquiring a pedigree cat in Argentina is a legal and moral responsibility. By choosing a registered breeder with FAAC or international federations, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factory farms."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición uruguay",
        "label": "Uruguay",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-uruguay",
            "title": "Responsible Acquisition in Uruguay: A Legal and Ethical Guide",
            "intro": "If you have decided that a particular breed suits your lifestyle, it is essential to acquire it in a responsible manner. In Uruguay, the keeping of animals is protected by the National Law 18.471 (Animal Protection) and regulated locally by decrees such as 319/011 in Montevideo. Buying a cat is not a routine commercial transaction; it is incorporating a sensitive family member.",
            "sections": [
              {
                "heading": "**1. **Why Choose a Registered Breeder?",
                "body": "Ethical breeders in Uruguay preserve the breed, care for the genetic and social health of the kittens, and socialise them. The safest way to identify them is to verify their affiliation with the AFU (Uruguayan Cat Association), which represents the WCF, and occasionally TICA or FIFe. Advantages: Genetic Certification (registered ancestors), Preventive Health (PKD or HCM tests), and Early Socialisation (prevention of behaviour problems)."
              },
              {
                "heading": "**2. **Legal Framework: Your Rights and Obligations",
                "body": "For a secure transaction in Uruguay, the breeder must comply with: Identification (Microchip) according to municipal ordinances (particularly in Montevideo and Canelones) and registration in corresponding records. Sales Contract with data on the parties, guarantees of health (FeLV/FIV), a clause for return (prohibited abandonment) and a commitment to sterilisation. Vaccination Card: Signed by a registered Veterinarian with the triple feline vaccine."
              },
              {
                "heading": "**3. **Checklist: How to Identify an Ethical Breeder in Uruguay?",
                "body": "Before paying, check: Do they allow in-person visits? You must know the cattery and see the mother; be wary of deliveries to shopping centres. What is the delivery age? NEVER before 12 weeks (3 months). Is the documentation complete? You should receive a Birth Certificate/Pedigree from the AFU, vaccination card and invoice or receipt. Is there an interview with the buyer? A good breeder will want to know about your window and balcony protections."
              },
              {
                "heading": "**4. **Legal Importation of Exotic Breeds",
                "body": "The process is regulated by the MGAP-DIGEGA (General Directorate of Agricultural Services). Requirements: International zoosanitary certificate, current rabies vaccination and entry protocols. It is recommended to hire a specialist pet relocation agency ('Pet Relocation') to handle customs formalities and avoid the animal being retained at the border."
              },
              {
                "heading": "Beware of 'Cat Factories' and Scams!",
                "body": "DO NOT BUY IF: They ask for advance payment without showing the animal (common scam; demand a real-time video call). They sell at street fairs or squares: high mortality rate due to poor hygiene (panleucopenia). They have an 'infinite' stock: indicates a factory where females are used indiscriminately. Suspiciously low prices: ethical breeding has high costs in health and records that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a pedigree cat in Uruguay is a legal and moral responsibility. By choosing a registered breeder with the AFU, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición peru",
        "label": "Peru",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-peru",
            "title": "Responsible Acquisition in Peru: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed suits your lifestyle, it is essential to acquire it in a responsible manner. In Peru, animal ownership is protected by Law No. 30407 (Animal Protection and Welfare Law) and technically regulated by SENASA under MIDAGRI. This law recognises animals as sentient beings and prohibits their mistreatment, abandonment, and illegal trade.",
            "sections": [
              {
                "heading": "Por qué elegir un Criadero Registrado?",
                "body": "Los criaderos éticos en Perú preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a la FEPERU (Federación Peruana de Felinos), representante de WCF y, en algunos casos, TICA o FIFe. Ventajas: Certificación Genética (ancestros oficiales), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de problemas de conducta como miedos o agresividad)."
              },
              {
                "heading": "**2. **Marco Legal: Tus Derechos y Deberes",
                "body": "Para que la transacción sea legal en Perú, el criadero debe cumplir con: Identificación (Microchip) exigido por muchas municipalidades (como Lima Metropolitana, Miraflores, San Isidro) para el registro municipal. Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (prohibido el abandono) y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario colegiado, con la triple felina (y quíntuple si corresponde) al día."
              },
              {
                "heading": "**3. **Checklist: ¿Cómo detectar un Criadero Ético en Perú?",
                "body": "Antes de pagar, verifica: ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre; desconfía de entregas en malls o parques. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). ¿Documentación completa? Debes recibir Certificado de Nacimiento/Pedigree de la FEPERU, carnet de vacunas y factura o recibo. ¿Entrevista al comprador? Un buen criador querrá saber sobre tus protecciones en ventanas y balcones, vital en edificios altos de Lima."
              },
              {
                "heading": "**4. **Importación Legal de Razas Exóticas",
                "body": "El proceso es regulado estrictamente por el SENASA. Requisitos: Certificado zoosanitario internacional, vacunación antirrábica vigente y protocolos de ingreso. Se recomienda contratar una agencia de transporte de mascotas especializada ('Pet Relocation') para gestionar trámites ante el SENASA y evitar retenciones en el aeropuerto Jorge Chávez o multas severas."
              },
              {
                "heading": "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
                "body": "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (moquillo/panleucopenia). Tienen 'stock' infinito de múltiples razas: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y alimentación premium que un precio bajo no cubre."
              },
              {
                "heading": "Conclusion",
                "body": "Acquiring a pedigree cat in Peru is a legal and moral responsibility. By choosing a registered breeder with the FEPERU, you are supporting the preservation of the breed and animal welfare, and saying no to the mistreatment of factory farms. Remember: Before you buy, also consider adoption."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición bolivia",
        "label": "Bolivia",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-bolivia",
            "title": "Responsible Acquisition in Bolivia: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed suits your lifestyle, it is essential to acquire it responsibly. In Bolivia, animal ownership and welfare are fundamental, and the trade in breeds must be carried out under ethical and legal standards that recognise animals as sentient beings, prohibiting their mistreatment and illegal trade.",
            "sections": [
              {
                "heading": "**3. **Checklist: How to Detect an Ethical Breeder in Bolivia?",
                "body": "Before making any transfer or payment, check these points. If the answer is 'no' to any of them, be suspicious. Do they allow on-site visits? An ethical breeder will invite you to visit their home or cattery. You should be able to see the mother and a clean and safe environment. Be wary of those who only make deliveries at shopping malls, bus stations or parks. What is the age of delivery? NEVER before 12 weeks (3 months). This is crucial for emotional and immunological development. Is there complete documentation? You should receive a Birth Certificate/Pedigree (or pre-pedigree issued by the relevant cat association), Vaccination and De-worming Certificate, and a Sales Invoice or Receipt. Will they interview you? A good breeder will ask you questions about your home, whether you have window or balcony protections (essential in high-rise buildings in La Paz or Santa Cruz), and your experience."
              },
              {
                "heading": "**4. **Legal Importation of Exotic Breeds",
                "body": "If you are looking for breeds that are not commonly bred in Bolivia (such as Lykoi, Toyger or specific Bengal lines), the process is strictly regulated by the SENASAG (National Service of Agricultural Health and Food Safety). Requirements: an international zoosanitary certificate from the country of origin, current rabies vaccination, and compliance with entry protocols. Quarantine: Depending on the country of origin and health status, additional quarantine or inspections may be required. Recommendation: Always hire a specialist pet relocation agency ('Pet Relocation') to handle the formalities with the SENASAG to avoid airport retention or severe fines."
              },
              {
                "heading": "Be Careful of 'Cat Factories' and Scams!",
                "body": "En Bolivia, the illegal trade is frequent on online platforms and informal fairs."
              },
              {
                "heading": "NO BUY IF: They ask for signs in advance without showing the animal (common scam; demands a real-time video call).",
                "body": "They sell on street fairs or squares: the exposed kittens without hygiene are usually ill (panleucopenia, leukaemia) and have high mortality rates. They have an 'infinite stock': probable factory of exploitation where the females are used indiscriminately. Suspiciously low prices: ethical breeding involves high costs in health and records that a low price cannot cover."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición colombia",
        "label": "Conclusion",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-colombia",
            "title": "Acquiring a pedigree cat in Bolivia is a legal and moral responsibility. When choosing a registered breeder in the AFUBO or recognised associations, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories. Remember: Before buying, also consider adoption. Many organisations rescue beautiful pedigree or mixed-breed cats looking for a loving home across the country.",
            "intro": "Colombia",
            "sections": [
              {
                "heading": "Responsible Acquisition in Colombia: Legal and Ethical Guide",
                "body": "If you have decided that a specific breed suits your lifestyle, it is essential to acquire it in a responsible manner. In Colombia, animal ownership is protected by Law 1774 of 2016, which recognises animals as sentient beings not susceptible to being things, and prohibits their mistreatment and abandonment. Additionally, there are local regulations in cities such as Bogotá, Medellín, and Cali."
              },
              {
                "heading": "Why Choose a Registered Breeder?",
                "body": "Ethical breeders in Colombia preserve the breed, care for genetic health, and socialise the kittens. The safest way to identify them is to verify their affiliation to ASOFELGA (Colombian Association of Cat Breeders), representative of the WCF, and, in some cases, TICA or FIFe. Advantages: Genetic Certification (official ancestors), Preventive Health (PKD or HCM tests), and Early Socialisation (prevention of fears and aggression)."
              },
              {
                "heading": "¿Cómo detectar un Criadero Ético en Colombia?",
                "body": "Before paying, check: ✅ Do they allow in-person visits? You must get to know the cattery and see the mother; be wary of deliveries at shopping centres or parks. ✅ What age of delivery? NEVER before 12 weeks (3 months). It is crucial for emotional and immunological weaning. ✅ Is the documentation complete? You should receive a Birth Certificate / Pedigree from ASOFELGA, vaccination card and invoice or receipt. ✅ Interview with the buyer? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Bogotá or Medellín."
              },
              {
                "heading": "Importación Legal de Razas Exóticas",
                "body": "The process is strictly regulated by the ICA (Colombian Agricultural and Livestock Institute). Requirements: International zoosanitary certificate, current anti-rabies vaccination and compliance with entry protocols (ICA Resolution). It is recommended to hire a pet relocation agency ('Pet Relocation') to manage procedures with the ICA and avoid airport detentions (El Dorado, José María Córdova, etc.) or severe fines."
              },
              {
                "heading": "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
                "body": "⚠️ Beware of 'Cat Factories' and Scams!"
              },
              {
                "heading": "🚩 DO NOT BUY IF: They ask for advance payment without showing the animal (common scam; demand a live video call). They sell at street fairs or plazas: high mortality rate due to lack of hygiene (viral diseases). They have an 'infinite' stock of multiple breeds: probable factory of exploitation. Suspiciously low prices: ethical breeding involves high costs in health and records that a low price cannot cover.",
                "body": "Conclusión"
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición ecuador",
        "label": "Acquiring a pedigree cat in Colombia is a legal and moral responsibility. By choosing a registered breeder with ASOFELGA, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories.",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-ecuador",
            "title": "Ecuador",
            "intro": "If you have decided that a specific breed is suited to your lifestyle, it is essential to acquire it in a responsible manner. In Ecuador, the keeping of animals is protected by the Organic Code of Animal Welfare (COBA), promulgated in 2022. This law recognises animals as sentient beings, prohibits their mistreatment, abandonment and strictly regulates breeding and commercialisation.",
            "sections": [
              {
                "heading": "Why choose a Registered Breeder?",
                "body": "Ethical breeders in Ecuador preserve the breed, care for the genetic health and socialise the kittens. The safest way to identify them is to verify their affiliation to recognised feline associations (WCF, TICA) and that they have the necessary municipal permits. Advantages: Genetic Certification (official ancestors), Preventative Health (PKD or HCM tests) and Early Socialisation (prevention of fears and aggression)."
              },
              {
                "heading": "**2. **Legal Framework: Your Rights and Obligations (COBA)",
                "body": "For a transaction to be legal in Ecuador, the breeder must comply with: Identification (Microchip) required by the COBA and municipal ordinances (Quito, Guayaquil, Cuenca) for municipal registration. Municipal Functioning Permit issued by the Municipal GAD of your canton. Sales Contract with details of the parties, health guarantees (FeLV/FIV), clause for return (abandonment prohibited) and commitment to sterilisation. Vaccination Card: Signed by a registered Veterinary Zootechnician."
              },
              {
                "heading": "**3. **Checklist: How to detect an Ethical Breeder in Ecuador?",
                "body": "Before paying, check: Do they allow on-site visits? You must know the cattery and see the mother; be wary of deliveries at shopping centres or parks. Age of delivery? NEVER before 12 weeks (3 months). It is crucial for emotional and immunological weaning. Is the documentation complete? You should receive an official Birth Certificate/Pedigree, up-to-date vaccination card and invoice or receipt (tax compliance). Will they interview you? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Quito or Guayaquil."
              },
              {
                "heading": "**4. **Legal Importation of Exotic Breeds",
                "body": "The process is strictly regulated by AGROCALIDAD (Agency for Regulation and Zoosanitary Control). Requirements: International zoosanitary certificate, current rabies vaccination and entry protocols. It is recommended to hire a specialist pet relocation agency ('Pet Relocation') to handle procedures and avoid airport detentions (Mariscal Sucre, José Joaquín de Olmedo, etc.) or severe fines."
              },
              {
                "heading": "Be careful of 'Cat Factories' and Scams!",
                "body": "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (panleucopenia, leucemia). Tienen 'stock' infinito de múltiples razas: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y registros que un precio bajo no puede cubrir."
              },
              {
                "heading": "Conclusion",
                "body": "Adquirir un gato de raza en Ecuador es una responsabilidad legal y moral bajo el COBA. Al elegir un criadero registrado y con permisos municipales, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas. Recuerda: Antes de comprar, considera también la adopción."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición venezuela",
        "label": "Venezuela",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-venezuela",
            "title": "Adquisición Responsable en Venezuela: Guía Legal y Ética",
            "intro": "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Venezuela, la tenencia de animales está protegida por la Ley de Protección a la Fauna Doméstica Libre y en Cautiverio y diversas ordenanzas municipales que promueven la tenencia responsable, prohíben el maltrato y el abandono.",
            "sections": [
              {
                "heading": "**1. **¿Por qué elegir un Criadero Registrado?",
                "body": "Los criaderos éticos en Venezuela preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a la Federación Canina de Venezuela (FCV) en su división felina, o a asociaciones como ASOVEFEL (Asociación Venezolana de Felinos), vinculadas a la WCF o TICA. Ventajas: Certificación Genética (ancestros oficiales), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de miedos y agresividad)."
              },
              {
                "heading": "**2. **Marco Legal: Tus Derechos y Deberes",
                "body": "Para que la transacción sea legal en Venezuela, el criadero debe cumplir con: Identificación (Microchip) exigido o recomendado en alcaldías como Chacao, Baruta, El Hatillo (Caracas), Valencia y Maracaibo para el registro municipal. Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario colegiado (CVZ), con las vacunas triples felinas al día según la edad."
              },
              {
                "heading": "¿Cómo detectar un Criadero Ético en Venezuela?",
                "body": "Before paying, check: Do they allow in-person visits? You must know the cattery and see the mother; be wary of deliveries in metres or shopping centres. What is the age of delivery? NEVER before 12 weeks (3 months). It is crucial for emotional and immunological weaning. Do you receive complete documentation? You should receive a Birth Certificate / Official Pedigree, up-to-date vaccination card and invoice or receipt. Do you have an interview with the buyer? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Caracas or Valencia."
              },
              {
                "heading": "**4. **Importation of Exotic Breeds",
                "body": "The process is strictly regulated by the INSAI (National Institute of Integral Agricultural Health). Requirements: International zoosanitary certificate, current rabies vaccination and entry protocols. It is recommended to hire a specialist pet relocation agency ('Pet Relocation') to manage procedures with the INSAI and avoid delays at Simón Bolívar International Airport or severe fines."
              },
              {
                "heading": "Be Careful with 'Cat Factories' and Scams!",
                "body": "DO NOT BUY IF: They ask for advance payment without showing the animal (common scam; do not transfer funds or bolívares without a real-time video call). They sell at street markets or plazas: high mortality rate due to lack of hygiene (panleucopenia, leukaemia). They have an 'infinite' stock of multiple breeds: probable factory of exploitation. Suspiciously low prices: ethical breeding involves high costs in imported/premium food that a low price does not cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a pedigree cat in Venezuela is a legal and moral responsibility. By choosing a registered breeder in ASOVEFEL or affiliated to international federations, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories. Remember: Before buying, also consider adoption."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición paraguay",
        "label": "Paraguay",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-paraguay",
            "title": "Responsible Acquisition in Paraguay: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed is suited to your lifestyle, it is essential to acquire it in a responsible manner. In Paraguay, the ownership of animals is protected by Law No. 483/95 for the Protection of Animals and by Law No. 6541/20 for Animal Welfare, which recognises animals as sentient beings, prohibits their mistreatment and abandonment, and regulates responsible ownership.",
            "sections": [
              {
                "heading": "Why choose a Registered Breeder?",
                "body": "Ethical breeders in Paraguay preserve the breed, look after the genetic and social health of the cats, and socialise the kittens. The safest way to identify them is to check their affiliation to FELPAR (Paraguay Cat Federation), which represents the WCF or TICA. Advantages: Genetic Certification (officially registered ancestors), Preventative Health (PKD or HCM tests) and Early Socialisation (prevention of behaviour problems such as fears or aggression)."
              },
              {
                "heading": "Legal Framework: Your Rights and Responsibilities",
                "body": "For a secure transaction in Paraguay, the breeder must comply with: Identification (Microchip) implemented in municipalities such as Asunción, Luque, San Lorenzo, Lambaré, etc. Sales Contract with data on the parties, guarantees of health (FeLV/FIV), clause for return (prohibited abandonment) and commitment to sterilisation. Vaccination Card: Signed by a registered Veterinary Doctor in the CONAMEVET (National Council of Veterinary Medicine), with the triple feline vaccinations up to date."
              },
              {
                "heading": "Checklist: How to Identify an Ethical Breeder in Paraguay?",
                "body": "Before paying, check: Do they allow on-site visits? You must know the cattery and see the mother; be wary of deliveries in shopping centres or parks. Age of delivery? NEVER before 12 weeks (3 months). This is crucial for emotional and immunological weaning. Do you receive complete documentation? You should receive a Birth Certificate / Pedigree from FELPAR, vaccination card and invoice or receipt. Do they interview the buyer? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Asunción."
              },
              {
                "heading": "Legal Importation of Exotic Breeds",
                "body": "The process is strictly regulated by the SENACSA (National Service for Animal Quality and Health). Requirements: International zoosanitary certificate, current rabies vaccination and entry protocols. It is recommended to hire a pet relocation agency to manage procedures with the SENACSA and avoid delays at Silvio Pettirossi Airport or severe fines."
              },
              {
                "heading": "Beware of 'Cat Factories' and Scams!",
                "body": "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; no transfieras dinero ni giros sin videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (panleucopenia, leucemia). Tienen 'stock' infinito: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y alimentación premium que un precio bajo no cubre."
              },
              {
                "heading": "Conclusión",
                "body": "Adquirir un gato de raza en Paraguay es una responsabilidad legal y moral bajo la Ley de Bienestar Animal. Al elegir un criadero registrado en FELPAR, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas. Recuerda: Antes de comprar, considera también la adopción."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición brasil",
        "label": "🇧🇷  Brasil",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-brasil",
            "title": "Adquisición Responsable en Brasil: Guía Legal y Ética",
            "intro": "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Brasil, la tenencia de animales está protegida por la Ley Federal nº 14.064/2020 (Ley Sansão) y por la Ley Arouca (Ley nº 11.794/2008). Comprar un gato no es una transacción comercial cualquiera; es incorporar un miembro sensible a la familia.",
            "sections": [
              {
                "heading": "**1. **¿Por qué elegir un Criadero Registrado?",
                "body": "Los criaderos éticos en Brasil preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a GATOS do BRASIL (representante oficial de la WCF), o a clubes de TICA o FIFe. Ventajas: Certificación Genética (ancestros oficiales), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana ('home raised') para prevenir problemas de conducta."
              },
              {
                "heading": "**2. **Marco Legal: Tus Derechos y Deberes",
                "body": "Para que la transacción sea legal en Brasil, el criadero debe cumplir con: Identificación (Microchip) exigido en ciudades como São Paulo, Río de Janeiro y Curitiba para el registro municipal (RAA). Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (abandono é crime) y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario registrado en el CRMV, con las vacunas V3/V4/V5 al día según la edad."
              },
              {
                "heading": "How to detect an ethical breeder in Brazil?",
                "body": "Before making any transfer (PIX), check: Do they allow face-to-face visits? You must know the cattery and see the mother; be wary of deliveries in parks or shopping centres. What age of delivery? NEVER before 12 weeks (3 months). Is the documentation complete? You should receive a Birth Certificate / Pedigree from GATOS do BRASIL/WCF, vaccination card and invoice or receipt. Has the buyer been interviewed? A good breeder will want to know about your 'protection measures' (essential in high-rise buildings in Brazil)."
              },
              {
                "heading": "Legal Importation of Exotic Breeds",
                "body": "The process is strictly regulated by the MAPA (Ministry of Agriculture, Livestock and Supply) through the Vigiagro system. Requirements: International zoosanitary certificate, current rabies vaccination and entry protocols. It is recommended to hire a specialised pet relocation agency ('Pet Relocation') to avoid the animal being retained at airports such as Guarulhos or Galeão."
              },
              {
                "heading": "Beware of 'Cat Factories' and Scams!",
                "body": "DO NOT BUY IF: They ask for PIX in advance without showing the animal (common scam; demand a live video call). They sell at street fairs or squares: high mortality rate due to lack of hygiene. They have an infinite 'stock' of multiple breeds: probable exploitation factory. Prices suspiciously low: ethical breeding involves high costs in health and records that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a pedigree cat in Brazil is a legal and moral responsibility under the Lei Sansão and the Lei Arouca. By choosing a registered breeder with GATOS do BRASIL, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories. Remember: Before buying, also consider adoption."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición españa",
        "label": "Spain",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-espana",
            "title": "Responsible Purchase in Spain: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed is suited to your lifestyle, it is essential to acquire it in a responsible manner. In Spain, the regulations have changed dramatically with the introduction of the new Animal Welfare Act (Ley 7/2023). This law prohibits the sale of dogs, cats and ferrets in commercial premises and requires that all acquisitions be made through registered breeders or animal welfare organisations.",
            "sections": [
              {
                "heading": "Why choose a Registered Breeder (Amateur)?",
                "body": "In Spain, ethical breeders must be registered as a 'Zoological Nucleus' or 'Amateur Breeder' in their Autonomous Community. The safest way to identify them is to check if they are affiliated to the AFEC (Spanish Cat Association), representative of the WCF in the country, or to other recognised federations such as FIFe. Advantages: Guaranteed Legality (only registered breeders can sell under the new law), Genetic Health (PKD or HCM tests) and Socialisation (guarantees a balanced temperament)."
              },
              {
                "heading": "**2. **Legal Framework: Your Rights and Obligations (Ley 7/2023)",
                "body": "For the transaction to be legal in Spain, the breeder must comply with: Mandatory Microchip (registered in the RIAC of their Autonomous Community before delivery). Health Documentation: European passport or vaccination booklet (Trivalent) and daily deworming. Mandatory Sales Contract with the breeder's zoological nucleus number, health guarantees and a clause for return. Prohibition on Sales in Pet Stores: Selling in pet stores is illegal; it can only be done directly by the breeder or through adoption."
              },
              {
                "heading": "**3. **Checklist: How to Detect an Ethical Breeder in Spain?",
                "body": "Before paying, check: Do they allow visits? You must know their address or cattery and see the mother; be wary of deliveries in car parks. Age of delivery? NEVER before 12 weeks (3 months). Complete documentation? Official pedigree from AFEC/WCF or similar, microchip already registered and veterinary certificate signed by a registered vet. Transparency? A good breeder will ask about your home (window netting on high floors) and will not be in a hurry to sell quickly."
              },
              {
                "heading": "**4. **Legal Importation from the EU and Third Countries",
                "body": "From the EU: European passport, ISO microchip and rabies vaccination (at least 21 days old). From outside the EU (UK, USA): Official zoosanitary certificate, antibody titre (if applicable) and compliance with requirements from the Ministry of Agriculture, Fisheries and Food (MAPA). It is recommended to use specialised transportation agencies to avoid quarantines or returns to the origin."
              },
              {
                "heading": "Beware of Scams and Illegal Trafficking!",
                "body": "NO COMPRES SI: Te piden dinero por adelantado sin ver al gato (exige videollamada en tiempo real). No tienen número de Zoológico visible: es obligatorio exhibirlo en todo anuncio. Entregan cachorros menores de 3 meses: es ilegal y cruel. Precios sospechosamente bajos: suelen indicar 'granjas de cachorros' importadas ilegalmente de Europa del Este sin garantías de salud ni ética."
              },
              {
                "heading": "Conclusion",
                "body": "Adquirir un gato de raza en España es un acto regulado y protegido. Al elegir un criador afiliado a la AFEC y con Zoológico, estás cumpliendo la Ley de Bienestar Animal, financiando la preservación de la raza y evitando el sufrimiento animal. Recuerda: Antes de comprar, considera la adopción en protectoras específicas como Rescate Persa o Maine Coon Rescue."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición mexico",
        "label": "Mexico",
        "topics": [
          {
            "slug": "guia-tenencia-responsable-mexico",
            "title": "Tenencia Responsable en Mexico: Guía Legal y Ética para Adquirir un Gato",
            "intro": "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Mexico, la protección animal se rige por la Ley Federal de Protección Animal y por leyes estatales y locales (como la de CDMX o Jalisco), que reconocen a los animales como seres sintientes, prohíben el maltrato y regulan la tenencia responsable.",
            "sections": [
              {
                "heading": "**1. **¿Por qué elegir un Criadero Registrado?",
                "body": "Los criaderos éticos en Mexico preservan la raza, cuidan la salud genética y socializan a los gatitos en entorno familiar. La forma más segura de identificarlos es verificar su afiliación a la AMFE (Asociación Mexicana Felina), representante de la WCF y TICA. Ventajas: Certificación Genética (ancestros registrados), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de miedos y agresividad)."
              },
              {
                "heading": "**2. **Marco Legal: Tus Derechos y Deberes",
                "body": "Para que la transacción sea legal en Mexico, el criadero debe cumplir con: Identificación (Microchip) obligatorio en entidades como CDMX (registro RECAN), Edomex, Jalisco y Nuevo León. Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (el abandono es delito) y compromiso de esterilización. Cartilla de Vacunación: Firmada por un Médico Veterinario Zootecnista con cédula profesional vigente, con las triples felinas al día."
              },
              {
                "heading": "Checklist: How to detect an Ethical Breeder in Mexico?",
                "body": "Before paying, check: Do they allow on-site visits? You need to know the cattery and see the mother; be wary of deliveries to commercial plazas or metro stations. What age of delivery? NEVER before 12 weeks (3 months). Is the documentation complete? Birth certificate/Pedigree (AMFE/WCF or TICA), vaccination card and receipt or invoice.  Do they conduct a buyer interview? A good breeder will want to know about your window and balcony protections, vital in Mexico City, Monterrey or Guadalajara apartments."
              },
              {
                "heading": "**4. **Legal Importation of Exotic Breeds",
                "body": "The process is strictly regulated by the SENASICA (National Service of Public Health, Safety and Agri-Food Quality) under the SADER. Requirements: International zoosanitary certificate, current rabies vaccination and entry protocols. It is recommended to hire a specialised pet transport agency ('Pet Relocation') to avoid airport delays such as those at Mexico City or Cancun airports."
              },
              {
                "heading": "Be Careful of Cat Factories and Scams!",
                "body": "DO NOT BUY IF: They ask for deposits in advance without showing the animal (common scam; demand a real-time video call). They sell in markets or streets: high mortality rate due to lack of hygiene (feline leukaemia/panleucopenia). They have an infinite 'stock': probable factory farm. Prices suspiciously low: ethical breeding involves high costs in health and registration that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a pedigree cat in Mexico is a legal and moral responsibility. By choosing a breeder registered with the AMFE, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factory farms."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "historia",
    "label": "history, Origin and expansion",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "Stimulation, toys and enrichment",
    "subcategories": [
      {
        "slug": "historia-felina",
        "label": "The Heart of Origin",
        "topics": [
          {
            "slug": "origen-encuentro-nilo",
            "title": "Egypt, on the Nile",
            "intro": "The history of the domestic cat began around 9,000 years ago in the Nile valley, Egypt. Although there are many species of felines, all our current cats (including the exotic ones) come from a single subspecies: the North African wildcat or Felis lybica. The 'romance' with humans was not planned, but a convenient association:",
            "sections": [
              {
                "heading": "The problem, the solution and the pact",
                "body": "The problem: The Egyptians relied on agriculture and stored grain in large silos. These stores attracted infestations of rats and mice. The solution: The cats came to the villages attracted by the abundance of rodents. The pact: The humans were delighted with this 'pest control' service and so began a symbiotic relationship of mutual benefit."
              },
              {
                "heading": "From Hunters to Gods",
                "body": "Over time, the cat passed from being a simple granary guardian to a sacred member of the family. The Egyptians came to deify them, linking them with the goddess Bastet (who represented sweetness and protection) and the sun god, Ra. It was such their importance that millions of cat mummies and luxurious tombs, such as that of Osiris Tamat, the favourite cat of an Egyptian prince, have been found."
              },
              {
                "heading": "The Conquest of the World: Rome and the Vikings",
                "body": "Although the document centres on the Nilotian origin, the history continued when the cat left Egypt to conquer new continents: The Cat in Rome: The Romans, on seeing the efficacy of Egyptian cats, adopted them quickly. For them, the cat was a symbol of freedom and independence. They took them with them all over the Roman Empire (Europe, North Africa and Great Britain), using them mainly to protect their military camps and homes from rodents. The Viking Cat Travelers: During the Middle Ages, the Vikings played a crucial role in the expansion of the cat to the north. They were excellent navigators and always took cats on their ships (especially the 'Norwegian Forest Cat') to protect their food supplies during long voyages. Thanks to the Vikings, cats reached as remote places as Scandinavia and eventually the Americas."
              },
              {
                "heading": "The Modern Cat",
                "body": "After surviving dark ages in medieval Europe - where they were unjustly persecuted - the cat regained its status thanks to its vital role in detaining plagues that transmitted diseases such as the Black Death. Today, the modern cat maintains that independent hunting instinct and self-sufficiency that makes it unique. Although there are now hundreds of breeds with different colours and coats, its DNA still beats with the heart of that small desert cat that decided, millennia ago, that living with us was a good idea."
              }
            ]
          },
          {
            "slug": "corazon-origen-egipto",
            "title": "Expansion Across the World",
            "intro": "The domestic cat did not appear by chance in the Nile. The key was sedentary agriculture. Egypt was the 'granary of the world', and the grain silos were magnets for rodents.",
            "sections": [
              {
                "heading": "The Religious Transformation",
                "body": "The cat passed from being a useful ally to a divine being. The goddess Bastet was represented with a cat's head and symbolised the home, fertility and protection. Killing a cat in ancient Egypt was a crime punishable by death."
              },
              {
                "heading": "Luxury and Respect",
                "body": "The document highlights the case of the cat Osiris Tamat, the pet of Prince Tutmosis. It was buried with honours in a limestone sarcophagus, wrapped in fine linen and with jewels, demonstrating that for the Egyptian royal family, cats were true companions of life and the 'afterlife'."
              },
              {
                "heading": "Prohibition on Exportation",
                "body": "Los egipcios valoraban tanto a sus gatos que prohibieron estrictamente sacarlos del país. Sin embargo, esto no impidió que el 'secreto' de estos felinos se extendiera."
              },
              {
                "heading": "La Gran Expansión: ¿Cómo llegaron a otros continentes?",
                "body": "El camino del gato hacia el resto del mundo se dio principalmente a través de las rutas comerciales marítimas: 1. Los Fenicios: Los primeros 'contrabandistas'. Fueron los grandes navegantes del Mediterráneo. Se dice que sacaron gatos de Egipto de contrabando para venderlos en sus rutas comerciales. Gracias a ellos, el gato llegó a las islas griegas, a la península itálica y al sur de España mucho antes de lo previsto. 2. Roma: Los gatos en las legiones. Cuando los romanos conquistaron Egipto, quedaron fascinados por el gato (lo preferían al hurón, que era el animal que usaban antes para los ratones). Al expandir su Imperio, los legionarios llevaban gatos en sus caravanas y barcos para proteger los suministros. Así, el gato se introdujo en Europa Central y Gran Bretaña. 3. Asia y la Ruta de la Seda. A través de las rutas terrestres comerciales, los gatos llegaron a Asia Central. En países como China y Japón, fueron recibidos con honores similares a los de Egipto. En Japón, por ejemplo, los monjes budistas los usaban para proteger los valiosos manuscritos de papel de los ratones en los templos. 4. La Conquista de América. Los gatos no llegaron a América hasta la época de los exploradores europeos (siglos XV y XVI). En barcos como los de Cristóbal Colón o más tarde el Mayflower, los gatos eran tripulantes esenciales. Su misión era evitar que las ratas se comieran las raciones de comida de los marineros y que propagaran enfermedades en el espacio confinado del barco."
              },
              {
                "heading": "Resumen de la Evolución",
                "body": "África: Origen biológico (Felis lybica). Europa: Introducidos por fenicios y romanos; luego expandidos por vikingos hacia el norte. Asia: Llegaron a través de la Ruta de la Seda y el comercio marítimo hacia India y Japón. América y Oceanía: Llegaron siglos después en los barcos de los colonizadores europeos."
              },
              {
                "heading": "Conclusión",
                "body": "Hoy, ese pequeño gato que vigilaba el trigo en el Nilo está presente en todos los continentes (excepto la Antártida), demostrando ser uno de los viajeros más exitosos de la historia de la humanidad."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "a",
    "label": "No information",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "Stimulation, toys and enrichment",
    "subcategories": [
      {
        "slug": "importancia",
        "label": "Why it is vital",
        "topics": [
          {
            "slug": "juego-cachorros",
            "title": "Play in puppies: the foundation of everything",
            "intro": "The first six months of a cat's life are a critical period of development. What it learns during play at this stage will largely determine how it will relate to humans and other animals for the rest of its life.",
            "sections": [
              {
                "heading": "The window of socialisation",
                "body": "Between two and nine weeks of life, the cat learns what is normal in its world. A kitten that interacts with people, other cats, domestic noises and varied experiences during this period will be a more secure and adaptable adult."
              },
              {
                "heading": "The most common mistake: hands as toys",
                "body": "Using hands or feet to play with a kitten seems harmless, but teaches that human skin is a valid prey. When that kitten weighs 5 kg, the bites and scratches will be painful and the behaviour difficult to correct. Always use toys at a distance."
              },
              {
                "heading": "Play as prevention of problems",
                "body": "A cat that does not play enough channels its hunting energy into problematic behaviour: attacking ankles, destroying objects, redirected aggression. 2 play sessions of 15 minutes a day, especially before bedtime, are the best antidote."
              }
            ]
          }
        ]
      }
    ]
  }
];
