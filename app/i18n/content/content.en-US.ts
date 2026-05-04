import { Category } from '../../data/cats';

export const categories: Category[] = [
  {
    "slug": "salud",
    "label": "Good health",
    "emoji": "",
    "color": "#7a9e7e",
    "bg": "#eef4ef",
    "description": "Prevention, diseases, and medical care",
    "subcategories": [
      {
        "slug": "prevencion",
        "label": "Prevention",
        "topics": [
          {
            "slug": "vacunacion",
            "title": "Feline vaccination",
            "intro": "Vaccination is the most effective tool to protect your cat from serious diseases. Knowing the schedule and mandatory vaccines makes a difference between a long and a complicated life.",
            "sections": [
              {
                "heading": "Mandatory vaccines",
                "body": "The triple cat vaccine (Rhinotracheitis, Calicivirus, and Panleucopenia) is the base of any protocol. It is administered at 8, 12, and 16 weeks of life, with annual boosters or every 3 years depending on the product."
              },
              {
                "heading": "Recommended optional vaccines",
                "body": "The vaccine against Feline Leukemia (FeLV) is highly recommended for cats that go outside or live with other cats. The rabies vaccine is mandatory in many countries and recommended in Chile."
              },
              {
                "heading": "What happens if I miss a dose?",
                "body": "If the adult cat has not been vaccinated for more than 3 years, it is recommended to repeat the initial series. Always consult with your veterinarian before administering any vaccine."
              }
            ]
          },
          {
            "slug": "desparasitacion",
            "title": "Internal and external deworming",
            "intro": "Parasites are one of the most common and easily preventable problems in cats. A regular deworming plan protects both the cat and the people in the household.",
            "sections": [
              {
                "heading": "Internal parasites",
                "body": "The most common ones are roundworms (ascarids), tapeworms, and Toxoplasma. They are treated with oral antiparasitic medications every 3-6 months in adults, and monthly in kittens until 6 months old."
              },
              {
                "heading": "External parasites",
                "body": "Fleas, ticks, and ear mites are the most common ones. Monthly spot-on pipettes are the most practical solution. Antiparasitic collars offer prolonged protection but require proper adjustment."
              },
              {
                "heading": "Indoor vs. outdoor cats",
                "body": "Indoor cats have a lower risk, but are not exempt: fleas can enter on clothing and shoes. It is recommended to deworm internally 2 times a year and externally 4 times a year at a minimum."
              }
            ]
          },
          {
            "slug": "primeros-auxilios",
            "title": "Feline first aid",
            "intro": "Acting quickly in an emergency can save your cat's life. These basic knowledge prepare you for the most critical moments until you reach the veterinarian.",
            "sections": [
              {
                "heading": "Basic First Aid Kit",
                "body": "Every home with cats should have: saline solution, sterile gauze, non-alcoholic antiseptic (such as diluted chlorhexidine), digital thermometer, and the phone number of an emergency veterinary clinic."
              },
              {
                "heading": "Emergency Signs",
                "body": "Take your cat to an emergency veterinarian if it shows: difficulty breathing, loss of consciousness, convulsions, inability to urinate for more than 12 hours, uncontrolled bleeding, or possible poisoning."
              },
              {
                "heading": "What You Should Never Do",
                "body": "Never administer ibuprofen, acetaminophen, or aspirin to a cat: they are fatal to them. Never try to induce vomiting without a veterinarian's instruction. Never put alcohol on open wounds."
              }
            ]
          }
        ]
      },
      {
        "slug": "enfermedades",
        "label": "Common Diseases",
        "topics": [
          {
            "slug": "enfermedad-renal",
            "title": "Chronic Kidney Disease",
            "intro": "Chronic kidney insufficiency is the main cause of death in cats over 7 years old. Detecting it in time can add years of quality of life to your companion.",
            "sections": [
              {
                "heading": "Warning Signs",
                "body": "Drinking a lot of water, urinating more frequently, progressive weight loss, dull coat, and loss of appetite are the most common signs. Many cats do not show symptoms until they lose 75% of their kidney function."
              },
              {
                "heading": "Diagnosis and Monitoring",
                "body": "An annual blood and urine test starting at 7 years old is the best detection tool. The SDMA biomarker allows for the detection of kidney damage months before traditional markers."
              },
              {
                "heading": "Management and Treatment",
                "body": "There is no cure, but it can be managed with a low-phosphorus, low-protein renal diet, hydration (wet food or subcutaneous fluids at home), supplements, and frequent check-ups."
              }
            ]
          },
          {
            "slug": "diabetes-felina",
            "title": "Feline Diabetes",
            "intro": "Feline diabetes is more common than people think, especially in overweight, neutered male cats. The good news: with proper management, many cats can go into remission.",
            "sections": [
              {
                "heading": "Risk Factors",
                "body": "Obesity, advanced age, male sex, and high-carbohydrate diets are the main factors. Burmese cats have a genetic predisposition."
              },
              {
                "heading": "Symptoms",
                "body": "Signs include excessive thirst, excessive urination, weight loss despite eating well, and weakness in the hind legs (diabetic neuropathy)."
              },
              {
                "heading": "Treatment and Remission",
                "body": "Daily insulin, a low-carb diet (high-quality wet food) and home glucose monitoring are the foundation. Up to 90% of cats can achieve remission with early and strict treatment."
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
            "title": "Gingivitis",
            "intro": "Periodontal disease affects 70% of cats over 3 years old and is one of the most overlooked causes of chronic pain and overall health decline.",
            "sections": [
              {
                "heading": "Why It's Important",
                "body": "Bacteria in the mouth enter the bloodstream and can damage kidneys, heart, and liver. A cat with dental pain eats less, is more irritable, and its quality of life is severely affected."
              },
              {
                "heading": "Prevention at Home",
                "body": "Brush your cat's teeth 3 times a week with feline toothpaste (never human) is the most effective method. Dental snacks and chew toys are a useful complement but not enough on their own."
              },
              {
                "heading": "Professional cleaning",
                "body": "Veterinary dental cleaning under anesthesia is recommended annually from age 3. Cats with a predisposition (Persians, Siamese) may need it earlier."
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
            "title": "Cat allergy: A practical guide to cohabiting",
            "intro": "Allergies to pets affect between 15% and 30% of people. Being allergic to cats is twice as common as to dogs, but with proper management, cohabiting is possible.",
            "sections": [
              {
                "heading": "The cause: Protein Fel d 1",
                "body": "Allergy is not caused by the hair, but by the Fel d 1 protein produced in the skin, saliva, and urine. It spreads when the cat licks and the protein disperses in the air through dander (dead skin). Males produce more than females, and neutering reduces these levels."
              },
              {
                "heading": "Symptoms and Diagnosis",
                "body": "Reactions vary from hives and itching to sneezing, runny eyes, and asthma attacks. It's vital to see an allergist to perform skin tests, blood tests, or spirometry, as the culprit could be dust or pollen and not the cat."
              },
              {
                "heading": "Home and Allergy-Free Zones",
                "body": "Create a \"sanctuary\" by keeping the bedroom closed to the cat. Remove carpets or use only those that can be washed with hot water. It's essential to use HEPA-filter vacuum cleaners and air purifiers for at least 4 hours a day."
              },
              {
                "heading": "Direct Care and Products",
                "body": "Bathing should be done by someone not allergic outside the home. Weekly baths and the use of neutralizing products (such as Vetriderm) on the coat help eliminate saliva residue. Castration and regular haircuts for long-haired cats are also effective strategies."
              },
              {
                "heading": "Advanced Treatments",
                "body": "Consult about immunotherapy (desensitization vaccines), which are effective in the long term. If, despite all cleaning measures and medical treatment, health is severely affected, the most responsible decision may be to seek a new home for the cat."
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
            "intro": "Diabetes in cats is a complex condition, but with proper management, your cat can live a long and happy life. Unlike dogs, cats have unique characteristics that we must know to avoid common mistakes.",
            "sections": [
              {
                "heading": "Step 1: Causes and Risk Factors",
                "body": "Feline diabetes is usually a combination of factors: obesity and age (common in cats over 9 years old), sex and breed (more common in males 4:1 and in Siamese breed). Amyloid deposits that damage the pancreas and the use of medications such as progestins or corticosteroids also play a role. It is essential to note that pancreatitis is often closely associated with this disease and, in many cases, can be the triggering cause of diabetes."
              },
              {
                "heading": "Step 2: Identifying symptoms",
                "body": "Pay attention to an increase in thirst and urination (drinking a lot of water or urinating outside the litter box) and changes in appetite or weight. A distinctive sign is diabetic neuropathy: the cat walks with the entire heel on the ground. Also, observe neglected fur (dry or with dandruff). Unlike dogs, cataracts are very rare in cats."
              },
              {
                "heading": "Step 3: Correct Diagnosis",
                "body": "Stress in the clinic generates the \"White Coat\" effect, temporarily raising blood sugar. For a certain diagnosis, the veterinarian must confirm glucose in both blood and urine. Complete analyses are required to rule out other conditions such as urinary tract infections, liver problems, or pancreatitis, which often accompany diabetes."
              },
              {
                "heading": "Step 4: Treatment and Regulation",
                "body": "It is based on three pillars: 1. Insulin: Intermediate or long-acting insulin (NPH or PZI) is used, usually twice a day with meals. 2. Diet: Strictly carnivorous, high in protein and low in carbohydrates with fixed schedules. 3. Monitoring: It is ideal to measure blood glucose (pinch in the ear) at \"peak\" moments to adjust the dose with precision."
              },
              {
                "heading": "Step 5: Emergency of Ketoacidosis",
                "body": "If not treated, it can lead to ketoacidosis, a life-threatening emergency with symptoms such as vomiting, extreme lethargy, dehydration, and breath with a fruity or acetone odor. It requires immediate hospitalization for intravenous fluids, rapid-acting insulin, and correction of electrolytes (potassium, phosphorus)."
              },
              {
                "heading": "Step 6: Complications and Expectations",
                "body": "Possible remission (stopping insulin needs) if weight is controlled and diagnosed early. The biggest risk is hypoglycemia: if the cat trembles or convulses, apply honey or sugar to its gums and rush to the vet. Also, regularly check for urinary tract infections (blood or straining to urinate)."
              },
              {
                "heading": "Key tips for the owner",
                "body": "Never adjust insulin on your own. Keep a strict record of doses, meal times, and behavior. Controlling weight is the best preventive tool and observing any change in gait is crucial to report to the specialist."
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
            "title": "Feline Obesity: How to Protect Your Cat's Health and Life",
            "intro": "Obesity is not just a cosmetic issue; it's a disease that reduces your cat's life expectancy and increases the risk of diabetes, joint problems, and surgical complications. With patience and strategy, you can help your cat regain its ideal weight.",
            "sections": [
              {
                "heading": "Step 1: Identifying Overweight",
                "body": "Don't rely on the scale alone. In the \"Rib Test,\" you should be able to feel them easily without pressing hard; if not, there's excess fat. Looking at it from above, there should be a waistline behind the ribs; if it's rectangular or barrel-shaped, there's overweight. From the side, its abdomen shouldn't sag or touch the floor. It's considered overweight if it's 10-19% above its ideal weight, and obese if it's 20% or more above."
              },
              {
                "heading": "Step 2: Causes and Factors",
                "body": "It's a combination of factors: after spaying/neutering, metabolism drops and appetite increases; from 6-8 years old, cats burn fewer calories; sedentary indoor cats without stimulation; and inadequate diets (food always available, excessive rewards, or too many carbohydrates). Breeds like the Siamese or Burmese may have a greater genetic predisposition."
              },
              {
                "heading": "Step 3: Safe Action Plan",
                "body": "Weight loss should be slow. Golden rule: a cat should not lose more than 1% or 2% of its weight per week (example: an 8 kg cat should not lose more than 160 grams per week). Losing weight too quickly is dangerous and can cause hepatic lipidosis, a potentially fatal liver disease."
              },
              {
                "heading": "Step 4: Strategic Dietary Management",
                "body": "Ask your veterinarian to calculate calories for the ideal weight, not the current weight. Generally, this is between 60% and 75% of the cat's current maintenance calories. Look for high-protein diets (to maintain muscle and provide satiety) and low-carbohydrate diets. Divide the ration into 3 or 4 feedings to keep the metabolism active and use part of the ration as a reward instead of calorie-rich snacks."
              },
              {
                "heading": "Step 5: Physical Activity and Enrichment",
                "body": "Exercise should be gradual. Spend 10 minutes a day on interactive games (sticks, lasers, balls). Use environmental enrichment: hide food in different locations, use interactive feeders or puzzles, and install shelves or trees that force the cat to jump and climb to get its food."
              },
              {
                "heading": "Step 6: Commitment and Monitoring",
                "body": "Success depends on the whole family following the rules without sneaking food to the cat. Weigh the cat every 2 weeks: if it doesn't lose weight, adjust the ration; if it loses weight too quickly, increase it a bit. The human factor is essential; accepting that the cat needs to lose weight is not 'cruel', but an act of love to care for its long-term health."
              },
              {
                "heading": "Warning Signs: When to See a Veterinarian",
                "body": "Before starting any diet, visit the specialist to rule out medical causes such as hypothyroidism (although rare in cats) or diabetes, and to set a realistic weight goal. The veterinarian should help choose the right commercial diet or formulate a balanced homemade diet. Remember that prevention is better than cure to ensure your cat stays with you for many more years, healthy and active."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "comportamiento",
    "label": "Behavior",
    "emoji": "",
    "color": "#b85c38",
    "bg": "#faefeb",
    "description": "Behavior",
    "subcategories": [
      {
        "slug": "interio-exterior",
        "label": "Cat: Interior or Exterior?",
        "topics": [
          {
            "slug": "guia para entender y cuidar",
            "title": "Feline Behavior: How to Understand and Better Care for Your Cat",
            "intro": "Today, cats are one of the most popular pets in the world. Although historically they were not seen as companions of life as we know them now, the reality is that, like dogs, they need interaction, attention, and affection. The difference lies in how they express those needs. To live in harmony with your feline, it's essential to understand its nature and adapt its environment to its instincts.",
            "sections": [
              {
                "heading": "**1. Interior or Exterior? Making the Right Deci**sion",
                "body": "One of the first decisions when adopting is whether the cat will live alone inside the house or have access to the outside. Both options have important implications: Outdoor cats: They have more freedom and natural stimulation, but face greater risks: accidents, fights with other animals, infectious diseases, and parasites (fleas, worms). Their life expectancy is usually shorter. Indoor cats: They are much more protected and live longer, but depend entirely on us for their stimulation. Boredom is their greatest enemy. If you choose this option, you must commit to enriching their environment with games, scratching posts, and quality time. Advice: Regardless of your choice, the key is safety and mental stimulation."
              },
              {
                "heading": "**2. The Instinct to Scratch: It's Not Vandalism, It's Communic**ation",
                "body": "Scratching is a natural and essential behavior that begins around 5 weeks of life. For a cat, scratching is not just sharpening claws; it's a form of visual and olfactory communication (marking territory with the glands on their paws) and a way to stretch their muscles. The conflict arises when they choose our furniture. The solution is not to punish, but to offer a better alternative. How to choose the perfect scratching post? Stability: It must be firm and not wobbly. If it moves, the cat won't use it due to insecurity. Height: It should be high enough for the cat to stretch completely upright. Material: Sisal, natural wood, or rope are usually the most attractive. Location: Place it in visible and traffic areas (not hidden in a basement). Cats like to mark where the 'life' of the house happens. Patience: Once the cat chooses a scratching post, don't move it. Also, the more it's used, the more it will like it, because it will be impregnated with its scent."
              },
              {
                "heading": "**3. Play: Physical and Mental Exer**cise",
                "body": "Jogging is not just entertainment; it's the way a cat exercises its hunting instinct. A cat that doesn't play can develop behavioral problems due to energy buildup or stress. Keys to a successful game: Imitate a prey: Use toys that move, hide, jump, or vibrate. Feather or string wands are ideal because they allow you to interact at a distance. Safety first: Avoid long strings without supervision or small pieces that can be swallowed. Daily routine: Spend at least 15 minutes a day actively playing with him. This strengthens your bond and keeps his mind agile. Variety: Rotating toys prevents him from getting bored with the same objects."
              },
              {
                "heading": "**Hygiene and Litter Boxes: The Golden **Rule",
                "body": "Cats are extremely clean and demanding when it comes to their bathroom. A dirty or poorly located litter box is the number one cause of improper elimination. Basic recommendations: The \"N+1\" rule: You should have one litter box per cat, plus one extra. (Example: 1 cat = 2 boxes; 2 cats = 3 boxes). Some cats even prefer to use one box for urination and another for defecation. Type of litter: Most prefer unscented litters with a fine and smooth texture. Location: Quiet, private places away from strong noises (washers, dryers) or their food zone. Cleaning: Remove waste daily and wash the boxes regularly with water and neutral soap (avoid bleach or ammonia, whose smells can attract them to urinate outside). Alert: If your cat starts urinating or defecating outside the box, see a veterinarian. It's often the first sign of urinary pain or disease, not an act of revenge."
              },
              {
                "heading": "**The Urine Marking: Understanding the Mes**sage",
                "body": "Urine marking on vertical surfaces (spraying walls or furniture) is different from urinating on the floor. It's a communicative behavior, not necessarily hygienic. Who does it? It can happen in neutered cats, although it's more common in non-neutered ones (about 10% of males and 5% of spayed females may do it occasionally). Why do they do it? It usually responds to stress or insecurity: arrival of new pets, changes in routine, conflicts with other cats (even seeing street cats through the window) or changes in the home. Solution: Punishing them worsens the problem. It's best to identify the source of stress, clean the area with specific enzymes (to completely eliminate the smell) and consult a veterinarian or animal behaviorist to evaluate if they need behavioral or medical help."
              },
              {
                "heading": "Conclusion: Living Together Based on Respect",
                "body": "Feline behavior is not capricious; it has a deep biological logic. They need security (routines, high places). They need stimulation (play, simulated hunting). They need cleanliness (immaculate litter boxes). They need communication (scratching, marking, meowing). When you respect these basic needs, you stop seeing \"problems\" and start seeing a balanced, loving, and happy companion. Understanding your cat is the best tool to love them better."
              }
            ]
          }
        ]
      },
      {
        "slug": "comportamiento-felino",
        "label": "Introducing Cats to Each Other",
        "topics": [
          {
            "slug": "presentacion entre gatos",
            "title": "How to Get Two Cats to Accept and Live Together Peacefully",
            "intro": "Introducing a new cat to the home is exciting, but it can be stressful for your resident cat. Cats are naturally territorial, so the key to success is not speed, but patience. If you do it right from the start, you'll avoid future conflicts and foster a lasting friendship (or at least a respectful tolerance). Forget the idea of \"presenting them suddenly.\" Follow this gradual process.",
            "sections": [
              {
                "heading": "Paso 1: La Cuarentena Inicial (Días 1-4)",
                "body": "El nuevo gato necesita sentirse seguro antes de conocer a nadie. Habitación propia: Prepara una habitación tranquila (que no sea la zona principal de tu gato actual) con su cama, comida, agua, juguetes y arenero. Refugio seguro: Deja su transportín abierto con una manta dentro para que tenga un escondite donde sentirse protegido. Cero contacto visual: Durante estos primeros días, no deben verse. Sin embargo, está bien que se huelan bajo la puerta. Esto les permite investigarse sin la presión del cara a cara."
              },
              {
                "heading": "Paso 2: Intercambio de Olores (El 'Dating' Olfativo)",
                "body": "Los gatos se conocen por el olfato, no por la vista. Intercambia objetos: Frota suavemente una toalla o calcetín en las mejillas de un gato (donde tienen glándulas de olor) y dáselo al otro, y viceversa. También puedes intercambiar sus mantas. Asociación positiva: Mientras huelen el objeto del otro, dales premios ricos o juega con ellos. Queremos que asocien el olor del 'otro' con cosas buenas (comida/juego). Atención equilibrada: Pasa tiempo de calidad con cada gato por separado, acariciándolos y jugando cerca de la puerta que los separa. Esto reduce la ansiedad y los celos."
              },
              {
                "heading": "Paso 3: Contacto Visual Controlado",
                "body": "Cuando ambos gatos estén relajados oliéndose bajo la puerta y no haya silbidos graves ni gruñidos constantes: La rendija: Abre la puerta solo una pulgada (unos 2-3 cm) o usa una barrera de rejilla para bebés. Deben poder verse, pero no tocarse. Observa: Si hay silbidos leves, es normal. Si hay agresión intensa (silbidos fuertes, boca abierta, orejas muy bajas), cierra la puerta y vuelve al Paso 2 durante unos días más. Premia la calma: Si se miran sin atacarse, dales premios inmediatamente."
              },
              {
                "heading": "Paso 4: Las Primeras Interacciones Supervisadas",
                "body": "Si el contacto visual va bien, es hora de dejarles compartir espacio, pero con reglas estrictas. Salida voluntaria: Abre la puerta y deja que el nuevo gato salga si quiere. Nunca lo forces. Si se queda escondido, respétalo. Sesiones cortas: Permíteles estar juntos 15-30 minutos máximo. Luego, sepáralos de nuevo en sus habitaciones. Repite esto varias veces al día. Distracción positiva: Juega con ellos usando juguetes de caña o lanza premios, pero mantén una distancia segura (al menos 1 metro entre ellos) para evitar que compitan por el juguete. El objetivo: Que aprendan que la presencia del otro no es una amenaza, sino algo neutro o incluso divertido."
              },
              {
                "heading": "Paso 5: Aumento Gradual del Tiempo",
                "body": "Poco a poco, ve aumentando el tiempo que pasan juntos si las interacciones son tranquilas. Separa siempre al final: Termina la sesión antes de que haya algún conflicto. Es mejor dejarlos con ganas de más que con una pelea. Tiempo a solas: Después de cada sesión, déjales tiempo a solas en sus respectivas zonas para procesar la experiencia y recuperar su confianza territorial."
              },
              {
                "heading": "Warning Signs and Stress",
                "body": "Stop the process and go back if you see: Loud and repeated meows, deep growls, fur standing on end, and stiff postures. In a resident cat: Stop eating, use the litter box poorly, or hide all day. In a new cat: Compulsive licking, not eating, or appears terrified. Advice: If stress is high, consult your veterinarian or a behaviorist. Sometimes, using synthetic pheromones (diffusers) can help calm the environment."
              },
              {
                "heading": "What You Should Never Do",
                "body": "Never punish: Yelling or punishing a cat for meowing or showing aggression only increases its stress and associates the other cat with something negative (the punishment). Correct reaction: If there's tension, separate the cats calmly, without drama. Use a soft voice or simply interpose a physical barrier. Don't leave them alone: Until you're 100% sure they tolerate each other (they may take weeks or months), never leave them unsupervised."
              },
              {
                "heading": "Special Cases: The Timid Cat",
                "body": "If your new cat is very fearful, the process will be slower. Don't rush. A timid cat needs more time to trust its environment before trusting another cat. Reinforce your individual bond with him. Contact sessions can be shorter (10 minutes) but more frequent. Conclusion: Patience is Love. Each cat pair is unique. Some accept each other in a week; others take months. Don't compare. Your goal is long-term peaceful coexistence, not an immediate movie-style friendship. Going slow is the fastest way to achieve success. Your patience will be worth it!"
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
            "title": "Body Language",
            "intro": "Cats have a sophisticated and precise body language. Learning to read it transforms your relationship with your cat and allows you to anticipate its needs and emotional states.",
            "sections": [
              {
                "heading": "The Tail as Emotional Barometer",
                "body": "The tail is one of the clearest signals: High and straight indicates confidence, friendly greeting, or happiness (if the tip is curved, it's maximum happiness). Low or between the legs expresses fear, insecurity, or submission. Moving quickly from side to side or with slow movement reveals irritation, annoyance, or concentration. If it's puffed up, bristled, or arched, the cat feels threatened or terrified."
              },
              {
                "heading": "Ears don't lie",
                "body": "Ears show a lot about the mood: Forward indicates it's attentive, curious, on alert, or interested. Back, pressed, or flat signals fear, annoyance, or defensive aggression. If they're turned to the sides ('airplane mode'), it's a sign of growing irritation and the cat needs space. Constant movement indicates it's alert or nervous."
              },
              {
                "heading": "Eyes and blinking",
                "body": "Eyes convey deep emotions: Open with large/dilated pupils indicate fear, surprise, excitement, or play. A fixed stare can be a sign of challenge or intense attention. On the other hand, a relaxed look or slow blinking is an active sign of confidence, calmness, and affection."
              },
              {
                "heading": "Whiskers and face",
                "body": "Whiskers also speak: If they're pointing forward, they indicate curiosity or excitement about something they're exploring. If they're pressed against the face or retracted, they signal the cat feels fear or is trying to appear less threatening in a tense situation."
              },
              {
                "heading": "General body posture",
                "body": "The body indicates the general state: Relaxed means it feels secure. Crouched or tense indicates fear. Arched with the back raised shows it's scared and trying to appear bigger to defend itself. The cat combines all these signals (tail, ears, eyes) at the same time; for example, a high tail with relaxed eyes is a happy cat, while ears back with a strong-moving tail is an angry cat."
              },
              {
                "heading": "Main idea",
                "body": "You should not look at just one isolated signal, but the whole set of all body parts. Learning to observe these details will help you understand your companion better and respect their space when needed."
              }
            ]
          },
          {
            "slug": "vocalizaciones",
            "title": "Vocalizations and their meaning",
            "intro": "Adult cats almost never meow at each other: the meow is a language they developed specifically to communicate with humans. Each cat has its own vocabulary.",
            "sections": [
              {
                "heading": "The meow",
                "body": "A short and sharp meow usually is a greeting. A long and sustained meow, a demand (food, attention). Repeated meows can indicate pain, disorientation (especially in older cats) or distress."
              },
              {
                "heading": "The purr",
                "body": "It doesn't always indicate happiness: cats also purr when they are stressed, sick or in the process of recovery. The purr has demonstrated therapeutic properties between 25 and 50 Hz, a frequency that favors bone regeneration."
              },
              {
                "heading": "Other sounds",
                "body": "The trill or chirp is a warm greeting or response to what you're saying. The chatter (teeth chattering) appears when seeing birds or prey: it's frustration and hunting excitement. The hiss and spitting are clear warnings that the cat feels threatened."
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
                "body": "When a cat looks at you and blinks slowly, it's telling you that it feels safe and comfortable in your presence. It's the feline equivalent of a relaxed smile and a full gesture of trust."
              },
              {
                "heading": "How to do it",
                "body": "Look at the cat with a relaxed expression. When you have eye contact, slowly close your eyes almost all the way and then open them again. Wait. If the cat responds with the same gesture, the communication channel is open."
              },
              {
                "heading": "With unknown cats",
                "body": "It works even with cats you don't know. In shelters and colonies, the slow blink can be the difference between a cat that approaches voluntarily and one that runs away. It's a powerful tool for gaining trust."
              }
            ]
          }
        ]
      },
      {
        "slug": "conducta",
        "label": "Common behaviors",
        "topics": [
          {
            "slug": "arañar-muebles",
            "title": "Why they scratch furniture",
            "intro": "Scratching isn't bad behavior or destructiveness: it's a fundamental biological need. Understanding why they do it is the first step to redirecting it to appropriate places.",
            "sections": [
              {
                "heading": "The Three Reasons for Scratching",
                "body": "Cats scratch to visually mark their territory with claw secretions and to stretch their muscles and tendons in a healthy way, and to remove dead layers of their nails. It's an instinctual behavior that can't be eliminated, only redirected."
              },
              {
                "heading": "Protecting Furniture",
                "body": "Place scratching posts in areas where your cat already likes to scratch. Use synthetic pheromones (Feliway) on surfaces you want to protect. Temporarily cover furniture with fabrics or non-stick adhesive protectors to redirect the behavior."
              },
              {
                "heading": "What Type of Scratching Post Works Best",
                "body": "Each cat has its own preference: some need tall vertical scratching posts (to stretch fully), while others prefer horizontal ones. Sisal is often the favorite material, although some prefer cardboard or carpet. Offer variety at first."
              }
            ]
          },
          {
            "slug": "amasar",
            "title": "Kneading: Paws That Make Bread",
            "intro": "Kneading, that rhythmic movement of pressing alternately with paws on soft surfaces, is one of the sweetest and most meaningful behaviors in the feline repertoire.",
            "sections": [
              {
                "heading": "The Origin of the Behavior",
                "body": "Kittens knead their mother's belly to stimulate milk production. In adults, it's a comforting behavior that persists from childhood: they do it when they feel safe, happy, and relaxed."
              },
              {
                "heading": "What does it indicate when they knead on you?",
                "body": "It's one of the greatest expressions of affection and trust. Your cat is treating you like its mother and telling you that it feels completely safe in your presence. It's a feline honor."
              },
              {
                "heading": "Variations of kneading",
                "body": "Some cats knead blankets, stuffed animals, or even the air. Other cats only knead on specific people. There are cats that knead with all four paws, while others only use their front paws. All the variations are completely normal."
              }
            ]
          }
        ]
      },
      {
        "slug": "entrenamiento",
        "label": "Training",
        "topics": [
          {
            "slug": "guia-entrenamiento-casa",
            "title": "Your cat also wants to learn: Fun guide to training at home",
            "intro": "Do you think cats are independent and don't need training? Nothing could be further from the reality! Cats are intelligent, curious, and above all, they love to have 'things to do.' In nature, they would spend the day hunting and exploring; at home, if they only sleep and eat, they get bored. And a bored cat is a cat that scratches the couch or meows at night. Training your cat isn't making it obey like a militarized dog. It's playing with a purpose. It's an incredible way to connect with it, stimulate its mind, and strengthen your friendship. And the best part? You only need 10 minutes a day.",
            "sections": [
              {
                "heading": "**1. The secret: Use its instinct, not f**orce",
                "body": "Cats don't respond well to dry orders or punishments. They respond to positive reinforcement. The golden rule: If it does something right, receive a reward (a rich treat, a little tuna, or many hugs). Never force it: If you pull it or yell at it, it will shut down. The training must always be voluntary and fun. Short sessions: 5 or 10 minutes are enough. If you see it getting distracted, end the session with something it already knows well so it ends on a good note."
              },
              {
                "heading": "**2. The magic tool: 'The Diana' (Target**ing)",
                "body": "Before teaching him complicated tricks, teach him to follow your finger or an object. This is called targeting and it's the base of everything. Bring your finger (or a stick with a shiny tip) close to the cat's nose. Out of curiosity, it will sniff or touch it. As soon as it touches it, say 'Good!' (with a cheerful voice) and give it a reward immediately. Repeat this several times. Soon, it will follow your finger wherever you move it because it knows that touching it brings good things. You already have the smooth control of its movement!"
              },
              {
                "heading": "**Easy Tricks to Start W**ith",
                "body": "'Come here' (The most important command): It's vital for safety. Call it by its name or snap your tongue. When it comes to you, celebrate a lot and give it a spectacular reward. Important: Never scold it when it comes, even if it takes a long time. It has to associate 'coming' with 'party'. 'Sit': Cats naturally sit when they look up. With the cat standing, place a treat just above its head. Move your hand slowly backward (toward its tail). To follow the food with its eyes, it will automatically lower its back end. As soon as its butt touches the floor, say 'Sit' and give the reward. 'On your lap' or 'Up': Ideal for it to come sleep with you or go up to allowed places. Sit in a chair or sofa. Gently tap your leg or the seat and say 'Up'. Guide it with the treat if necessary. When it goes up, immediate reward! Soon it will jump to be with you."
              },
              {
                "heading": "**Challenging Tri**cks",
                "body": "'Quiet': Ask it to sit. Place the palm of your hand in front of its face (like a red stop sign) and say 'Quiet'. Wait only 1 second at first. If it doesn't move, reward. Gradually increase the time (2 seconds, 5 seconds...). Be patient, this takes longer. 'Down' (Lying down): It's difficult because it's a vulnerable position for them. From the sitting position, lower the treat to the floor, between its front paws. Slowly move it forward. If it lowers its chest and stretches, big reward! Don't expect it to stay like that for a long time at first."
              },
              {
                "heading": "**Walking on a Lea**sh",
                "body": "Some cats love exploring the outdoors, but it has to be safe. The Harness: Buy a vest-type harness (more comfortable and safer than thin rope leashes). Leave it on at home for a few minutes a day while it plays, so it gets used to it. The Leash: Add it when it ignores the harness. Let it drag it under your supervision. The Outing: Go to the hallway or garden. Don't pull the leash. Let it explore and you follow. If it gets scared, go back inside. No rush."
              },
              {
                "heading": "**Solving Problems with P**lay",
                "body": "Does it scratch the sofa? Don't yell at it. Place a scratching post right next to the sofa. Use the 'target' trick to guide its paws to the scratching post and reward it a lot when it uses it. Make the scratching post more interesting than the sofa (put catnip on it, for example). Is it bored? Training IS the game. Dedicate those 10 minutes a day to reviewing tricks. You'll see how it stops looking for negative attention (meowing, destruction) because it already has your positive attention."
              },
              {
                "heading": "Final Advice: Enjoy the Process",
                "body": "Don't seek perfection. Seek connection. You'll see how your cat starts to look for you to \"work\" (play), how they look at you in the eyes waiting for instructions, and how their personality shines. A trained cat is a confident, happy, and much more affectionate cat. Get excited! Your \"sofa tiger\" has a lot of hidden potential."
              }
            ]
          },
          {
            "slug": "guia-paseos-correa",
            "title": "Feline Walks: How to Teach Your Cat to Walk on a Leash (Stress-Free)",
            "intro": "Taking your cat for a walk may sound strange, but it's a fantastic way for them to enjoy the fresh air safely. Plus, it helps them stay calmer during vet visits or trips. The key isn't force, but patience and treats.",
            "sections": [
              {
                "heading": "Before You Start",
                "body": "Make sure your cat has all their vaccinations up to date and is microchipped. Safety comes first."
              },
              {
                "heading": "Step 1: Positive Introduction (The Harness is a Friend)",
                "body": "Don't just slap the harness on. We want them to associate it with good things. Scent phase: Leave the harness and leash near their bed or food bowl for a few days. Get them used to seeing and smelling them while eating or sleeping. Positive association: Hold the harness in your hand, let them sniff it, and give them a rich treat. Gently bring it close to their body without putting it on, keep giving rewards."
              },
              {
                "heading": "Step 2: The First Adjustment (Inside the House)",
                "body": "Now let's see how it fits. Place the harness gently over their shoulders and chest. Give them constant rewards while they sniff and touch it. Quickly fasten the harness. Golden rule: There should be two fingers between the harness and the cat's body (not too tight, not too loose). Leave it on for 1-2 minutes at first. Play with them or give them wet food to distract them. Take it off before they get annoyed or try to remove it. Repeat daily, gradually increasing the time if they seem relaxed."
              },
              {
                "heading": "Step 3: The Phantom Leash",
                "body": "Once the cat tolerates the harness, we add the leash. Connect the leash to the harness inside the house. Let the leash drag on the floor while your cat plays or explores. Watch that it doesn't get tangled in furniture or chair legs. Do this for several days until it completely ignores the weight of the dragging leash."
              },
              {
                "heading": "Step 4: You take the lead (No jerks)",
                "body": "Now it's your turn to hold the leash. Take the leash gently and follow your cat around the house. Keep the leash loose. Don't pull on it. Just accompany it. If it stops, wait. If it comes towards you, reward and praise! The goal is for it to understand that the leash doesn't hurt or restrict, but is a link to you."
              },
              {
                "heading": "Step 5: Gentle guidance and direction",
                "body": "When it walks calmly with the leash in your hand, start guiding it. Use a sweet and gentle voice to invite it to follow you. Throw a treat a few steps ahead. While it eats, move forward too. If it pulls in another direction, don't jerk the leash. Keep a very gentle and constant tension on the leash. As soon as the cat gives in and looks at you or takes a step in your direction, immediately loosen the leash and reward. It will learn that 'giving in to pressure = freedom and reward'."
              },
              {
                "heading": "Step 6: The big outing (Outside)",
                "body": "Cats can be very scared of the noises and smells outside. Start in a quiet and enclosed place (a secure patio or garden). Sit on the floor with it. Let it explore at its own pace. At first, just follow it. Don't try to mark a route. If you see it's scared (crouches, tries to escape), go back home. Don't force it. The walk should be fun, not a nightmare."
              },
              {
                "heading": "Important Safety Rules",
                "body": "Never leave it alone: Never tie the leash to something and leave. It could get tangled, hurt itself, or be left defenseless in front of a dog or other danger. The door is a high-risk area: Put the harness away from the exit door. Carry it out in your arms. If you do it near the door, it will learn to try to escape every time you open it. Ignore tantrums: If it meows or complains to be let out, ignore it. Just put the harness on and go out when it's calm. This way it will learn that calmness is the key to going out. Respect its boundaries: If your cat is very scared, don't insist. There are many ways to enrich its life indoors (toys, scratching posts, window perches). With love and consistency, your cat could end up enjoying its walks as much as you do. Enjoy the adventure!"
              }
            ]
          },
          {
            "slug": "clicker-training",
            "title": "Clicker training for cats",
            "intro": "Unlike the popular myth, cats are perfectly trainable with positive reinforcement. Clicker training teaches tricks, strengthens the bond, mentally stimulates, and reduces behavioral problems.",
            "sections": [
              {
                "heading": "How clicker training works",
                "body": "The click marks the exact moment of the correct behavior, and is always followed by a reward. The cat learns that specific sound predicts a reward, motivating it to repeat the behavior. The precision of the moment is key."
              },
              {
                "heading": "Where to start",
                "body": "First, \"charge\" the clicker: click and reward 10 times in a row without asking for anything. Then start with simple behaviors that the cat already does naturally: sitting, touching your hand with its nose. Sessions of 2-5 minutes, 2-3 times a day."
              },
              {
                "heading": "More advanced tricks",
                "body": "Once you've mastered the basics, you can teach: shaking paws, rolling over, jumping obstacles, entering the carrier voluntarily, or even using communication buttons. There's no limit if the sessions are short and positive."
              }
            ]
          }
        ]
      },
      {
        "slug": "bienestar-felino",
        "label": "Well-being",
        "topics": [
          {
            "slug": "guia-dolor-silencioso",
            "title": "The Silent Pain: How to know if your cat is suffering and how to help",
            "intro": "Cats are masters of disguise and hide their pain by instinct to appear vulnerable. Learning to read their subtle signals is crucial to being their best ally and preventing their health from deteriorating without realizing it.",
            "sections": [
              {
                "heading": "**Subtle signs of p**ain",
                "body": "Forget about the crying or whining; the feline pain hides in changes of behavior: it hides more (under the bed or in closets), changes its mood becoming irritable or unusually \"sticky,\" and stops grooming (dull or matted fur). It may also lick an area excessively, adopt a tense posture with its head low, or stop jumping to places it used to frequent due to joint pain."
              },
              {
                "heading": "**Common pai**ns",
                "body": "Identifying the type helps with diagnosis: arthritis is common in cats over 7 years old (they stop playing or climbing); mouth pain (gingivostomatitis or broken teeth) causes drooling, bad breath, or a loss of appetite; internal pain (cystitis, kidney, or pancreatitis) generates deep discomfort and depression; and nerve pain (like in diabetes) can cause pain from even light skin contact."
              },
              {
                "heading": "**Multimodal Veterinary Treat**ment",
                "body": "Modern treatment uses various tools: safe medications like specific anti-inflammatory drugs, painkillers (buprenorphine), or nerve modulators (gabapentin). It's complemented with therapies like acupuncture, therapeutic laser, or physical rehabilitation. In surgeries, local blocks are used. WARNING: Never use human ibuprofen or paracetamol, they're deadly to cats!"
              },
              {
                "heading": "**Your role at home: Environmental Manag**ement",
                "body": "Adapt the environment: install ramps or stairs to climb onto sofas, use litter boxes with low sides and orthopedic beds. Weight control is crucial to not overloading joints. Also, reduce stress by maintaining calm routines and using pheromones if necessary, as stress worsens pain perception."
              },
              {
                "heading": "**Special Cases: Age and Condi**tion",
                "body": "In kitten puppies, be very careful with doses due to their maturing organs. In older cats with kidney or liver problems, doses must be adjusted precisely. In pregnant or lactating cats, only the veterinarian should decide on treatment, as many painkillers pass to the fetuses or into the milk."
              },
              {
                "heading": "Don't wait until it complains",
                "body": "A cat that doesn't complain doesn't mean it's not suffering. Untreated chronic pain worsens the quality of life and accelerates aging. If you notice any changes in its routine, appetite, or personality, consult a veterinarian. With your loving observation and medical help, your cat can live without suffering even with chronic illnesses."
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
            "title": "Stress in Cats: A Complete Guide to Understanding and Helping",
            "intro": "We know more about feline behavior every time, and one of the main keys is stress. Many health and behavioral problems we see at home have their roots here. Understanding what's going on with your cat is the first step to improving its quality of life.",
            "sections": [
              {
                "heading": "**1. What is stress real**ly?",
                "body": "Stress isn't always 'bad.' It's a natural bodily reaction that prepares the cat to adapt to changes (a move, a trip, the arrival of a baby). Positive stress: It helps the cat react and adapt. Negative stress: It occurs when the situation is too intense or lasts too long. If the cat can't adapt, stress becomes chronic and can lead to anxiety. Key difference: Fear vs. Anxiety. Fear: An immediate reaction to a real danger. The heart beats faster and the cat is ready to flee or defend itself. It's useful for survival. Anxiety: The cat feels fear about something that's not dangerous or can't be controlled. It doesn't know how to resolve the situation, so it lives in constant tension."
              },
              {
                "heading": "**2. Why are some cats more sensiti**ve?",
                "body": "Not all cats react the same way. Their stress tolerance level depends on two main factors: A. Genetics and Character: Some cats are naturally more secure; others, more timid. Factors like breed, sex, and genetic heritage influence it. A nervous cat will always need a more peaceful and predictable environment. B. Early Socialization (The critical window): The first 2 to 7 weeks of life are decisive. If there was loving human contact: The kitten will learn that people are safe. It will be more sociable and resistant to stress. If there was a lack of contact or negative experiences: It's very likely to develop distrust and fear towards humans or new stimuli when it's an adult. The environment matters: Kittens raised in environments rich in stimuli (sounds, textures, games) tend to be more adaptable adults."
              },
              {
                "heading": "**3. What causes stress in my **cat?",
                "body": "Cats need to feel like they have control over their environment. When they lose that control, stress appears. Social Factors: Changes in daily routine. Arrival of new people, babies, or other pets. Arguments or yelling at home. Punishments or irregular attention (sometimes a lot, sometimes none). Physical Factors: Moves or renovations. Insufficient space or poor organization (e.g., litter box near food). Competition for resources (if there are multiple cats and few plates or litter boxes)."
              },
              {
                "heading": "**How do I know if my cat is stress**ed?",
                "body": "Cats are experts at hiding pain and discomfort. You need to be a detective. Immediate Physical Symptoms: Rapid breathing or panting. Very dilated pupils. Tremors or excessive salivation. Vomiting or diarrhea (e.g., before traveling). Changes in Behavior: Posture: Ears back, low tail, tense body. Hiding: Spends a lot of time hidden or under furniture. Aggression: Growls, hisses, or attacks without apparent reason. Extreme vigilance: Never relaxes, always \"on guard.\" Chronic Stress Signs (Long-term): If stress is not treated, more serious problems appear: Compulsive grooming: Licks so much that loses hair (psychogenic alopecia). Elimination problems: Urinates or defecates outside the litter box (marked territory or anxiety). Sleep changes: Sleeps little, poorly, or always in tense positions (not on back or side). Eating changes: Eats excessively (anxiety) or stops eating. Repetitive behaviors: Chases tail, meows constantly, or walks aimlessly."
              },
              {
                "heading": "**The impact on Physical He**alth",
                "body": "Stress is not just \"in the mind\"; it makes the body sick. Feline Idiopathic Cystitis: Inflammation of the bladder without bacterial infection, directly linked to stress. Digestive problems: Gastritis, chronic vomiting, or diarrhea. Skin problems: Wounds from excessive licking. Obesity and Diabetes: Sometimes, owners give food to \"console\" the cat, leading to weight gain. Weakened immune system: Stressed kittens or older cats get sick more easily (grippe, infections). Important: Before assuming it's stress, see a veterinarian. Problems like hyperthyroidism, joint pain, or tumors can mimic stress or anxiety symptoms."
              },
              {
                "heading": "**How to help your cat? (Treatment and Managem**ent)",
                "body": "The goal is to give them a sense of security and control. A. Behavioral Therapy (Most important): Identify the cause of stress and modify the environment. Respect their routines. Provide safe high places and hiding spots. Play with them daily to release tension. B. Environmental Aids: Pheromones: Chemical substances (like Feliway) that mimic facial pheromones of cats, transmitting a \"calm\" and \"familiarity\" message. Help reduce marking and anxiety. Environmental enrichment: Scratching posts, interactive toys, and safe access to windows. C. Anti-Stress Nutrition: There are specific diets or supplements that help: Tryptophan: An amino acid precursor to serotonin (the happiness hormone). Milk derivatives: Proteins that have a natural calming effect. These nutrients help regulate mood, improve digestion, and care for the skin. D. Medication: In severe cases of anxiety, a veterinarian behaviorist may prescribe medication. Never medicate your cat on your own. Medications should always be a complement to behavioral therapy, not the only solution."
              },
              {
                "heading": "Conclusion",
                "body": "Stress in cats is invisible but powerful. A calm cat is a healthy cat. Observe their small changes, respect their need for control, and if you see alarm signs, seek professional help. Your understanding can totally change their well-being."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "alimentacion",
    "label": "Food",
    "emoji": "",
    "color": "#d4853a",
    "bg": "#fff3e6",
    "description": "Nutrition, diets, and what they can't eat",
    "subcategories": [
      {
        "slug": "dietas",
        "label": "Types of diets",
        "topics": [
          {
            "slug": "comida-humeda-vs-seca",
            "title": "Wet food vs. dry food",
            "intro": "This is one of the most frequent and debated questions among cat owners. The answer is important because cats have a particular relationship with water that makes the type of food directly impact their renal health.",
            "sections": [
              {
                "heading": "The nature of the cat and water",
                "body": "Cats evolved in arid environments and obtain most of their water from their prey. Their thirst is 'calibrated' for food with 70% moisture. Dry food has only a 10% moisture level, which can lead to chronic dehydration and renal and urinary problems."
              },
              {
                "heading": "Advantages of wet food",
                "body": "Greater hydration, greater satiety with fewer calories, more similar to a natural diet, better for cats with a tendency to urinary or renal problems. Most veterinarians recommend it as a main food."
              },
              {
                "heading": "The role of dry food",
                "body": "It's not bad, but it shouldn't be the only food. It can be useful as a supplement, for puzzle toys or as a snack. Choose feed with a high percentage of animal protein (not vegetable) and no grains as the first ingredient."
              }
            ]
          },
          {
            "slug": "dieta-barf",
            "title": "Raw Diet for Cats",
            "intro": "The BARF diet (Biologically Appropriate Raw Food) is based on feeding the cat raw meat, meaty bones, and organs, imitating the diet of its wild ancestors. It has passionate defenders and detractors with solid arguments.",
            "sections": [
              {
                "heading": "Principles of BARF",
                "body": "The ideal diet for a BARF cat includes approximately 70% lean meat, 10% meaty bones (never cooked), 10% organs (liver, heart), and the remaining 10% of other tissues. It requires careful supplementation with taurine, calcium, and vitamins."
              },
              {
                "heading": "Reported Benefits",
                "body": "Improved coat, reduced stool production, better hydration, cleaner teeth, and increased energy are the most cited benefits by those who practice it. Some studies suggest a lower risk of obesity."
              },
              {
                "heading": "Risks to Consider",
                "body": "Bacterial contamination (Salmonella, Listeria), nutritional imbalances if not formulated correctly, and the risk of choking on bones. It's not recommended for immunocompromised cats, those undergoing cancer treatment, or older cats with compromised digestive systems."
              }
            ]
          }
        ]
      },
      {
        "slug": "prohibidos",
        "label": "Forbidden Foods",
        "topics": [
          {
            "slug": "toxicos-comunes",
            "title": "Toxic Foods for Cats",
            "intro": "Many foods completely safe for humans are hazardous or lethal to cats. Knowing this list can save your companion's life.",
            "sections": [
              {
                "heading": "Extreme Danger: Severe Toxins",
                "body": "Onion, garlic, leek, and chives (in all forms: raw, cooked, or powdered) destroy red blood cells. Chocolate and coffee contain theobromine and caffeine that can cause seizures and death. Grapes and raisins cause acute kidney failure for unknown reasons."
              },
              {
                "heading": "Moderate Danger",
                "body": "Cow's milk causes diarrhea in most adult cats, which are lactose intolerant. Avocado contains persin, toxic to many animals. Any amount of alcohol is hazardous. Macadamia nuts can cause weakness and fever."
              },
              {
                "heading": "What They Can Eat as a Treat",
                "body": "Small amounts of cooked chicken or turkey without bones, cooked salmon or tuna (not canned in oil with salt), cooked carrot, cooked pumpkin, blueberries, and cucumber are safe options as an occasional snack."
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
                "heading": "The window of socialization",
                "body": "Between two and nine weeks of life, the cat learns what is normal in its world. A kitten that interacts with people, other cats, household noises and varied experiences during this period will be a more secure and adaptable adult."
              },
              {
                "heading": "The most common mistake: hands as toys",
                "body": "Using hands or feet to play with a kitten seems harmless, but teaches that human skin is a valid prey. When that kitten weighs 11 pounds, the bites and scratches will be painful and the behavior difficult to correct. Always use toys with distance."
              },
              {
                "heading": "Play as prevention of problems",
                "body": "A cat that doesn't play enough channels its hunting energy into problematic behaviors: attacking ankles, destroying objects, redirected aggression. 2 play sessions of 15 minutes a day, especially before bed, are the best antidote."
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
            "title": "Poles and prey toys",
            "intro": "Poles with feathers, mice, or worms dangling are the most effective toys because they allow you to simulate the complete hunting sequence. They're indispensable in any cat's repertoire.",
            "sections": [
              {
                "heading": "Why they work so well",
                "body": "They activate the hunting instinct in its entirety: the irregular movement imitates that of a real prey. The cat can stalk, chase, catch, and 'kill'. This complete sequence releases endorphins and deeply satisfies."
              },
              {
                "heading": "How to move them correctly",
                "body": "The most common mistake is moving them too fast and without stopping. Real prey stops, hides, moves in unpredictable angles. Simulate that: pause, hide it behind a cushion, make it pop out suddenly, let it move slowly."
              },
              {
                "heading": "Finishing the session well",
                "body": "Always end by allowing the cat to 'catch' and 'kill' the toy several times at the end. A cat that never catches the prey gets frustrated. After playtime, a small snack completes the natural cycle: hunt → eat → groom → sleep."
              }
            ]
          },
          {
            "slug": "puzzles-de-comida",
            "title": "Food puzzles and intelligence",
            "intro": "Food puzzles are one of the most underappreciated enrichment activities. In nature, a cat spends between 6 and 8 hours hunting. A conventional feeder resolves that need in 30 seconds, leaving the cat without mental stimulation.",
            "sections": [
              {
                "heading": "Proven benefits",
                "body": "They reduce anxiety and boredom, slow down eating (preventing vomiting from eating too quickly), stimulate cognitively, encourage movement, and may reduce obesity."
              },
              {
                "heading": "How to start",
                "body": "Begin with very easy puzzles: a tray with compartments, a simple ball dispenser. If the puzzle is too difficult from the start, the cat will get frustrated and reject it. Gradually increase the difficulty over weeks."
              },
              {
                "heading": "Homemade puzzles",
                "body": "You don't need to buy anything: a cardboard box with holes, an ice tray with treats, a plastic bottle with small openings, or hiding rewards under cups are effective and free puzzles."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "etapas",
    "label": "Life Stages",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "Dog, Adult, Senior, and Their Needs",
    "subcategories": [
      {
        "slug": "genetica-felina",
        "label": "Genetics and Heredity",
        "topics": [
          {
            "slug": "guia-genetica-colores",
            "title": "Feline Genetics: Understanding Colors and Inheritance (Without Complications)",
            "intro": "The Genetics of Cats Isn't Magic, It's Science. Understanding the Basics Will Help You Understand Why Your Cat Has That Specific Color and How Inheritance Works on Their Coat, Leaving Behind Old Myths and Focusing on Current Science.",
            "sections": [
              {
                "heading": "**1. Debunking the Darwin **Myth",
                "body": "For a long time, it was believed that domestication 'created' new varieties on its own, but this is false. Humans don't create genes, we just select them. In nature, unusual mutations usually get eliminated if they don't help survive, but at home we protect variations like long hair or certain colors for aesthetics. All the current variety already existed potentially in wild ancestors; we've just accelerated their appearance through selective breeding."
              },
              {
                "heading": "**2. How Do Colors Work? (The Basi**cs)",
                "body": "Characters depend on genes and their versions called 'alleles'. Using the example of Black (D) and Blue/Gray (d): DD (Homozygous Dominant) results in a black cat; Dd (Heterozygous) results in a black cat visually but 'carries' the blue gene; dd (Homozygous Recessive) results in a blue cat. The golden rule is that black dominates over blue: if there's at least one 'D', the cat will be black. To be blue, it must receive the 'd' gene from both parents."
              },
              {
                "heading": "**3. Importance of Responsible Selec**tion",
                "body": "A diferencia de los perros, la genética del color en gatos es extremadamente especializada y distintiva entre razas. Los jueces internacionales y genetistas recomiendan seguir normas estrictas de cruza para evitar resultados inesperados o problemas de salud. No todos los cruces de colores son recomendables, ya que algunos pueden dar lugar a patrones no deseados por el estándar de la raza."
              },
              {
                "heading": "**4. Guía rápida de Cruces Recomendados (F**IFE)",
                "body": "La Federación Internacional Felina (FIFE) sugiere evitar cruces aleatorios entre variedades de color muy distintas. Los principios básicos son: 1. Cruzar dentro de la misma raza (ej. Persas con Persas). 2. Respetar la longitud del pelo (e para pelo corto, l para pelo largo). 3. Evitar cruces 'prohibidos': si en las tablas oficiales no aparece una letra para una combinación específica, es mejor abstenerse por resultados impredecibles o insatisfactorios."
              },
              {
                "heading": "**5. Curiosidad: ¿Ven los colores los ga**tos?",
                "body": "Sí, pero no como nosotros. Tienen mejor visión cromática de lo que se creía, pero distinguen menos matices que los humanos. Es irónico que, aunque ellos ven menos colores, los humanos hayamos creado una variedad de pigmentos y distribuciones en su pelaje mucho más rica y compleja de lo que ellos mismos pueden apreciar."
              },
              {
                "heading": "Conclusión para el Criador o Dueño",
                "body": "La genética es probabilidad: si cruzas dos negros portadores de azul (Dd x Dd), tendrás hijos negros y algunos azules. Si cruzas dos azules (dd x dd), todos serán azules. Si cruzas un negro puro (DD) con un azul (dd), todos serán negros pero portadores. Conocer estas bases permite predecir camadas y criar de forma ética, responsable y respetando los estándares de salud."
              }
            ]
          }
        ]
      },
      {
        "slug": "reproduccion-felina",
        "label": "Reproducción Felina",
        "topics": [
          {
            "slug": "guia-gestacion-gatas",
            "title": "La gestación en gatas: Explicación sencilla y natural",
            "intro": "La gestación felina es un baile preciso entre señales físicas, hormonas y desarrollo embrionario. Entender cada etapa nos ayuda a respetar y cuidar mejor a nuestras gatas durante este proceso natural.",
            "sections": [
              {
                "heading": "How does a cat's reproductive cycle work?",
                "body": "The cat is like a seasonal \"clock\" that goes into heat when there are more hours of daylight (spring-summer). Mating is the key: the cat does not ovulate alone, but needs physical stimulation from mating to release the LH hormone and have its eggs come out of the ovaries between 24 and 50 hours later. If there is no fertile mating, it can have a \"pseudopregnancy,\" where its body acts as if it were pregnant for about 45 days, even though there are no kittens."
              },
              {
                "heading": "The Journey of Pregnancy, Step by Step",
                "body": "Timeline after mating: From 0 to 50 hours, mating stimulates ovulation. At +30 hours, the eggs are fertilized in the fallopian tubes. At 5-6 days, the embryos (morulas) arrive at the uterus. Between 8-10 days, they become blastocysts. At 12-13 days, implantation occurs in the uterine wall (the embryos travel between the horns to divide evenly). At 28-30 days, the fetal stage begins with the formation of organs. Finally, between 64 and 67 days, the kittens are born."
              },
              {
                "heading": "The Hormones: The Conductors",
                "body": "The body uses key messengers: LH (triggers ovulation at the start); Progesterone P4 (keeps the uterus calm, rises at the start and falls slowly after day 30); Prolactin (helps maintain the corpus luteum, increases from day 25-30 and is crucial in the second half); Relaxin (softens pelvic tissues and helps maintain pregnancy, rises from day 20-30 only in pregnant cats); and Estradiol (prepares the uterus and breasts, rising at the end)."
              },
              {
                "heading": "Who Produces Progesterone at the End?",
                "body": "There is a scientific debate: Theory A says the ovaries are essential until the end, while Theory B indicates that the placenta takes over in the second half. The fact is that if surgery is performed before day 45-50, the pregnancy is interrupted, but after day 50 it can continue, demonstrating that the feline placenta has the capacity to produce progesterone in the last weeks. It's a team effort with prolactin as the coordinator."
              },
              {
                "heading": "Quick Facts to Remember",
                "body": "Duration of pregnancy: 64-67 days (≈9 weeks). Litter size: 1 to 5 kittens (average 3-4). Birth weight: 85-105 grams. The placenta is of the \"zonal\" (belt-like) and \"endoteliocorial\" (very invasive) type, which explains why cats cannot easily donate blood."
              },
              {
                "heading": "Why does it matter to know this?",
                "body": "For responsible breeders, it allows for better prenatal care. For veterinarians, knowing the hormones allows for diagnosing problems or interrupting pregnancies in an ethical manner. For owners, it's vital to know that stress or sudden changes can directly affect hormones and, consequently, the success of the pregnancy."
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
            "title": "The first weeks of life",
            "intro": "The first two months of a cat's life are incredibly intense. In that time, a completely dependent and defenseless being becomes an agile and curious animal. Understanding this stage is essential for any breeder or adopter.",
            "sections": [
              {
                "heading": "0–2 weeks: neonatal period",
                "body": "Kittens are born blind, deaf, and unable to regulate their temperature. They completely depend on their mother to eat (every 2 hours), warm up, and stimulate urination and defecation. Their only functional sense at birth is smell."
              },
              {
                "heading": "2–7 weeks: primary socialization",
                "body": "Eyes open between 10 and 16 days. During this period, the nervous system develops at maximum speed. Positive experiences with people, sounds, and varied environments during these weeks determine the adult personality."
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
    "description": "Dog, adult, senior, and their needs",
    "subcategories": [
      {
        "slug": "emergencias-felinas",
        "label": "First Aid",
        "topics": [
          {
            "slug": "guia-primeros-auxilios-gatitos",
            "title": "First Aid for Kittens: What to Do in an Emergency",
            "intro": "First aid does not replace the veterinarian, but it can save your kitten's life while you get to the clinic. The goal is to prevent it from getting worse, stabilize it, and transport it safely.",
            "sections": [
              {
                "heading": "**1. Calm and Saf**ety",
                "body": "Your safety comes first; a kitten in pain can bite or scratch. Keep your face away from its claws and mouth. Don't use a muzzle, as it's contraindicated in cats with respiratory problems or vomiting. The \"blanket\" technique is ideal: wrap it gently in a towel, leaving only its head exposed to calm it and handle it safely."
              },
              {
                "heading": "**2. Rapid Evaluation (ABCDE R**ule)",
                "body": "Before moving it, check: A (Airways): Make sure there are no blockages in the nose or mouth. B (Breathing): Observe if the chest is moving. C (Circulation): Press bleeding wounds with clean gauze. D (Pain/Immobilization): Don't move it abruptly if you suspect fractures. E (Exposure): Protect open wounds with clean cloths."
              },
              {
                "heading": "**3. Emergencies in Pup**pies",
                "body": "The babies are very fragile to two dangers: 1. Hypoglycemia (Low blood sugar): If it presents extreme weakness or pale gums, apply honey or sugar under its tongue or on its gums. 2. Hypothermia: If the kitten is cold to the touch, warm it up with your body heat (under your clothes) or a warm water bottle wrapped in a towel (never directly)."
              },
              {
                "heading": "**Safe Transp**ort",
                "body": "Always use a sturdy carrier or box with ventilation. If you suspect broken bones, minimize movement by using a board or rigid towel as an improvised stretcher. During the trip, speak softly and keep the vehicle stable to reduce its stress."
              },
              {
                "heading": "**Feline Emergency **Kit",
                "body": "Have on hand: veterinary emergency phone numbers, clean towels or blankets, sterile gauze, honey or glucose, medical adhesive tape, and a ready carrier. Being prepared makes all the difference in a critical situation."
              },
              {
                "heading": "Final Warnings",
                "body": "Call the vet while driving to the clinic so they can wait for you. NEVER medicate with human pharmaceuticals (acetaminophen or ibuprofen), as they are deadly. Act fast: in an emergency, every minute counts to save its life."
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
            "intro": "Congratulations on the Adoption! Adopting a cat is a wonderful experience, but it also involves responsibility. The first few days are crucial for their adaptation. Here's everything you need to know to ensure their health, well-being, and a happy coexistence.",
            "sections": [
              {
                "heading": "**1. The First Days: Vigilance and Adapta**tion",
                "body": "The change of environment generates stress, which can lower the cat's defenses. Visit the vet: Take your cat to their new trusted clinic as soon as possible. Bring all previous medical records (vaccinations, deworming) and follow their instructions. What to observe: That they eat and drink normally, have energy according to their age, have consistent stools (some initial softness due to diet change is normal, but persistent diarrhea is not) and absence of symptoms like coughing, vomiting, sneezing, or discharge. If you have any doubts, consult your vet."
              },
              {
                "heading": "**2. Preventive Health: Vaccines, Parasites, and Steriliza**tion",
                "body": "Vaccination: Vaccines protect against serious diseases (like panleukopenia, feline respiratory complex, or leukemia). Follow the schedule recommended by your vet. The rabies vaccine, although not always mandatory by law for cats (depending on the region), is highly recommended. Deworming: It's essential for the cat's health and your family's (zoonosis). Internal: Recommended every 3 months. External: Vital if the cat goes outside or has access to balconies/terraces. Sterilization: It's the most responsible and healthy decision. Benefits: Prevents unwanted litters, reduces marking, decreases fights, and prevents serious diseases (breast tumors, pyometras). Myths: It doesn't change their personality or make them 'lazy'. Sterilize your cat, whether male or female, indoor or outdoor."
              },
              {
                "heading": "**3. Nutrition and Hydra**tion",
                "body": "Proper Food: Use high-quality dry food adapted to your cat's age and physical condition. Avoid giving homemade or human leftovers. Rewards: Use them in moderation to avoid obesity. Fresh Water: Essential, place multiple water fountains around the house, away from food and litter. Some cats prefer moving water sources. Adding wet food helps with hydration. Forbidden: Cow's milk (most adult cats are lactose intolerant). Natural yogurt or unsalted cheese can be given as an occasional reward, but are not necessary."
              },
              {
                "heading": "**Hygiene and Physical **Care",
                "body": "Cats need your help in certain areas. Grooming: Short hair once a week (daily during shedding); long hair daily to prevent knots and hairballs. If they have trouble expelling hairballs, consult about oatmeal pastes. Nails: Cut only the transparent tip, avoiding the pink (vascularized) part. Baths: Generally not necessary, only if they're extremely dirty or a doctor recommends it."
              },
              {
                "heading": "**The Litter Box: Golden R**ules",
                "body": "A cat that doesn't use the litter box usually expresses a medical or stress problem. Quantity: Rule N+1 (number of cats + 1 box). Location: Quiet, accessible places, away from noise (washers) and food. Type: Many don't like enclosed ones; try an open and large one. Cleaning: Remove waste daily and regularly wash the box with water and neutral soap (avoid bleach or ammonia). Sand: They prefer unscented and fine-textured sand."
              },
              {
                "heading": "**Behavior and Environmental Enrich**ment",
                "body": "Language: Ears up is a friendly greeting; ears back indicate fear. Tail movement can be irritation or excitement. Purring can be happiness, pain, or stress. Play: Spend 15-20 minutes daily on simulated hunting (sticks, balls). Avoid using your hands or feet. Scratching Posts: Provide stable, tall, and attractive materials (sisal, wood). Never punish for scratching furniture; redirect and reward. Verticality: They need high places to observe and safe hiding spots. Respect their solitude."
              },
              {
                "heading": "**Age-Specific Ti**ps",
                "body": "PUPPY: Socialization (2-8 weeks) is key to accepting human contact and vet visits. Teach them what's okay to bite. Get them accustomed to the carrier by leaving it open at home. Protect cables and windows. ADULT: Be patient, adaptation can take weeks. Use a separate room for acclimation when bringing them home with all their resources. Introduce other animals gradually. Maintain fixed feeding and play schedules."
              },
              {
                "heading": "**Legal and Safety Aspe**cts",
                "body": "Microchip: It is mandatory and must be up to date (RIAC in Madrid). Accident Prevention: Cat Parachute Syndrome. Install mosquito nets resistant to windows and balconies. A fall from a height can be fatal; don't rely on their 'ability' to land on their feet. Every cat is a world. Observe, respect their times and always consult your veterinarian in case of sudden changes."
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
        "label": "Cat Breeds",
        "topics": [
          {
            "slug": "guia-completa-razas",
            "title": "Complete Guide to Cat Breeds",
            "intro": "The feline world is vast and fascinating. Although all cats share basic instincts, each breed has a unique personality, care needs, and physical characteristics. This guide integrates historical records with modern classifications from organizations like TICA, CFA, and FIFe, organized to help you understand which type of cat fits best in your home. Note: Beyond breed, individual personality and early socialization play a fundamental role.",
            "sections": [
              {
                "heading": "**1. The Classic Histori**cals",
                "body": "Ancient breeds with defined personalities: Abyssinian (Ethiopia/Egypt): Active, curious, 'dog-cat,' needs a lot of mental stimulation. Siamese (Thailand): Extremely vocal, intelligent, demands constant attention. Persian (Iran): Calm, sweet, quiet; requires daily brushing and facial cleaning. Maine Coon (USA): The 'gentle giant,' sociable, ideal for families with children; requires space. Bengal (USA): High energy, athletic, looks like a miniature leopard; needs intense daily stimulation."
              },
              {
                "heading": "**2. Gentle Giants and Cold-Adaptable Br**eeds",
                "body": "Robust cats with dense coats. Maine Coon: One of the largest, stands out with its 'lynx tips' and soft meows. Norwegian Forest Cat (Skogkatt): Natural climber with waterproof coat, independent but affectionate. Siberian: Famous for being hypoallergenic (produces less Fel d 1), agile, and affectionate. Ragdoll: Large and muscular, has a gentle temperament; 'collapses' like a rag doll when picked up."
              },
              {
                "heading": "**3. Elegance of Short Hair and Athletic **Body",
                "body": "Low-maintenance coat with lots of interaction. British Shorthair: Round face, compact, and calm; doesn't like to be carried around much. Russian Blue: Silver coat and green eyes, shy with strangers but loyal. Burmese: Muscular and heavy, very people-oriented. Bombay: Looks like a miniature black panther, loves heat and cuddles. Chartreux: Old French breed, silent and expert hunter with water-repellent coat."
              },
              {
                "heading": "**4. Unique Mutations: Ears, Tails, and Text**ures",
                "body": "Exotic genetic characteristics. Scottish Fold: Ears folded forward, \"Buddha\" position; requires joint review. Munchkin: Short legs, outgoing, and curious. Sphynx: Hairless, sociable, and seeks heat; requires weekly baths. Devon Rex & Cornish Rex: Wavy or curly coat, mischievous, and attached. American Curl: Ears curled back. Manx & Japanese Bobtail: The first is tailless and robust; the second has a pom-pom tail, symbol of good luck."
              },
              {
                "heading": "**5. Exotics and Few Un**its",
                "body": "Less common breeds. Ocicat: Looks like a wild ocelot, trainable, and sociable. Toyger: Tiger imitation, intelligent. Lykoi: The \"werewolf cat,\" man-like appearance, curious, and playful. Singapura: One of the smallest breeds, mischievous, and loves heights. Korat: Thai gray plate with heart-shaped marking, sensitive to noise, and good luck charm."
              },
              {
                "heading": "Write Your Breed",
                "body": "Level of Activity: Sofa companion (Persian) or athlete (Bengal)? Grooming Time: Daily brushing (Maine Coon) or low maintenance (Russian Blue)? Vocalization: If you prefer silence, avoid Siameses and opt for Ragdolls. Children and pets: Maine Coon and Birman are more tolerant. Allergies: None are 100% hypoallergenic, but the Siberian and Russian Blue are usually better tolerated."
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
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to acquire it responsibly. In Chile, the purchase of animals is regulated by Law 21.020 (Cholito Law), which protects animal welfare and requires responsible ownership. Buying a cat is not like buying an object; it is acquiring a living being with complex needs.",
            "sections": [
              {
                "heading": "**1. Why Choose a Registered Bree**der?",
                "body": "Ethical breeders preserve the breed, care for genetic health, and socialize the kittens. The safest way to identify them is to verify that they are registered with RENAGACH (Chilean National Cat Registry), representing federations like WCF and TICA. Advantages of buying with pedigree: Genetic Certification (guarantees the breed), Health (genetic tests to rule out diseases like PKD in Persians or HCM in Maine Coons), and Socialization (grow up in a family environment, not in cages)."
              },
              {
                "heading": "Directory of Reference (Ethical Breeders in Chile)",
                "body": "Guideline list (always verify records): Maine Coon: Colitas Arriba, Nahuelhuén (Santiago/La Reina). Persian / Himalayan: GatyKey Cattery, Viestmaden Cattery (La Florida). Ragdoll: Reflejo de Luna (docile temperament). Somali: Per-Bast Cattery (unique specialized). Sphynx: Ti Voglio Bene, The Kittens House. British Shorthair: Von & Von Cattery (robust structure)."
              },
              {
                "heading": "**2. Legal Framework: Your Rights and Obligations (Law 21**.020)",
                "body": "To ensure the transaction is legal, the breeder must comply with: Mandatory Microchip (implanted and registered) and Sales Contract. The contract must detail health guarantees (negative tests for FeLV/FIV), sterilization commitment, and return clause. Your Responsibility: Once the purchase is made, you must register the animal in the National Pet Registry if the information was not updated immediately."
              },
              {
                "heading": "**How to Detect an Ethical Breed**er?",
                "body": "Before paying, check: Do they allow visits? They should be clean and in human contact. Age of delivery? NEVER accept a kitten less than 12 weeks (3 months) old. Complete documentation? You should receive a birth certificate/Preliminary Pedigree, up-to-date vaccination card (signed by a licensed veterinarian), and parasite control certificate. Transparency in health? A good breeder will ask about your situation to ensure a good home."
              },
              {
                "heading": "**Legal Importation of Exotic Br**eeds",
                "body": "If you're looking for breeds like Lykoi, Toyger, or Bengal from specific lines, the process is strict: comply with SAG (Agricultural and Livestock Service) requirements, health certificates from the country of origin, and possible quarantines. It's recommended to consult with a specialized pet transportation agency to avoid customs retention."
              },
              {
                "heading": "Beware of \"Cat Factories\"!",
                "body": "Avoid buying from free fairs, informal markets, or social media ads without a visible physical address. Be suspicious of places with multiple breeds available immediately. These places prioritize profit over welfare, resulting in animals with chronic health problems and short lives. Your conscious choice helps to eradicate this abuse."
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
            "intro": "If you've decided that a specific breed fits your lifestyle, it's essential to acquire it responsibly. In Argentina, animal ownership is protected by the National Law 27,592 (Alica Law) and various ordinances (such as Law 4040 in CABA), which recognize animals as sentient beings. Buying a cat is not a regular commercial transaction; it's incorporating a family member.",
            "sections": [
              {
                "heading": "**Why Choose a Registered Breed**er?",
                "body": "The ethical breeders in Argentina preserve the breed, care for the genetic and social health of the kittens, and socialize them. The main entities are FAAC (Argentine Federation of Cat Lovers), affiliated with the WCF, and local TICA or FIFe clubs. Advantages of buying with pedigree: Genetic Certification (guarantees registered ancestors), Preventive Health (genetic tests for PKD or HCM), and Early Socialization (human stimuli that prevent behavioral problems)."
              },
              {
                "heading": "**Legal Framework: Your Rights and Obliga**tions",
                "body": "For a transaction to be legal in Argentina, the breeder must comply with: Identification (Microchip), mandatory in CABA, Córdoba, and Santa Fe, among others. Sales Contract with animal data, health guarantees, return clause, and sterilization commitment. Vaccination Card: Must be signed by a registered Veterinarian, with triple feline vaccines (and quintuple if necessary) up to date according to the age."
              },
              {
                "heading": "**Checklist: How to Detect an Ethical Breeder in Argent**ina?",
                "body": "Before paying, verify: Do they allow in-person visits? You should know the cattery and see the mother; be suspicious of deliveries in shopping malls. Age of delivery? NEVER before 12 weeks (3 months). Complete documentation? You should receive a Birth Certificate/Pedigree, vaccination card, and invoice or receipt. Buyer interview? A good breeder will ask about window screens and your previous experience."
              },
              {
                "heading": "**Legal Importation of Exotic Br**eeds",
                "body": "If you're looking for breeds not commonly raised (Lykoi, Toyger), the process is regulated by SENASA (National Service of Sanitary and Food Quality). Requirements: Sanitary certificate of origin, rabies vaccination, and possible quarantines. It's recommended to hire a specialized pet transportation agency; bringing a cat on your own can result in severe retention or fines."
              },
              {
                "heading": "Beware of \"Cat Factories\" and Scams!",
                "body": "DON'T BUY IF: They ask for advance payment without showing the animal (common scam; use real-time video calls). They sell at fairs or plazas: animals without sanitary control usually die soon (\"cat of the week\"). They have an infinite \"stock\" of multiple breeds available immediately. Suspiciously low prices: ethical breeding involves high costs in health and premium food that a low price does not cover."
              },
              {
                "heading": "Conclusion",
                "body": "Acquiring a purebred cat in Argentina is a legal and moral responsibility. When choosing a breeder registered with FAAC or international federations, you are financing the preservation of the breed and animal welfare, and saying \"no\" to the mistreatment of clandestine factory farms."
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
            "title": "Responsible Acquisition in Uruguay: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to acquire it in a responsible manner. In Uruguay, animal ownership is protected by the National Law 18.471 (Animal Protection) and regulated locally by decrees such as 319/011 in Montevideo. Buying a cat is not a commercial transaction; it is incorporating a sensitive family member.",
            "sections": [
              {
                "heading": "**1. Why Choose a Registered Bree**der?",
                "body": "Ethical breeders in Uruguay preserve the breed, care for genetic health, and socialize kittens. The safest way to identify them is to verify their affiliation with the AFU (Uruguayan Feline Association), representative of the WCF, and sometimes TICA or FIFe. Advantages: Genetic Certification (registered ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of behavioral problems)."
              },
              {
                "heading": "**2. Legal Framework: Your Rights and Obliga**tions",
                "body": "For a secure transaction in Uruguay, the breeder must comply with: Identification (Microchip) according to municipal ordinances (especially in Montevideo and Canelones) and registration in corresponding records. Sales Contract with party data, health guarantees (FeLV/FIV), return clause (abandonment prohibited), and sterilization commitment. Vaccination Card: Signed by a registered Veterinarian, with triple feline vaccination on the same day."
              },
              {
                "heading": "**3. Checklist: How to Detect an Ethical Breeder in Urug**uay?",
                "body": "Before paying, check: Do they allow in-person visits? You need to know the cattery and see the mother; be wary of deliveries to shopping malls. What's the delivery age? NEVER before 12 weeks (3 months). Is the documentation complete? You should receive a Birth Certificate/Pedigree from the AFU, vaccination card, and receipt. Does the seller conduct a buyer interview? A good breeder will want to know about your window and balcony protections."
              },
              {
                "heading": "**4. Legal Importation of Exotic Br**eeds",
                "body": "The process is regulated by the MGAP-DIGEGA (General Directorate of Agricultural Services). Requirements: International zoosanitary certificate, current rabies vaccination, and entry protocols. It's recommended to hire a specialized pet relocation agency ('Pet Relocation') to handle customs procedures and avoid animal retention at the border."
              },
              {
                "heading": "Be Careful with 'Cat Factories' and Scams!",
                "body": "DON'T BUY IF: They ask for advance payment without showing the animal (common scam; demand a real-time video call). They sell at street fairs or plazas: high mortality rate due to lack of hygiene (panleucopenia). They have an infinite 'stock': indicates a factory where females are used indiscriminately. Suspiciously low prices: ethical breeding has high costs in health and records that a low price can't cover."
              },
              {
                "heading": "Conclusion",
                "body": "Acquiring a purebred cat in Uruguay is a legal and moral responsibility. By choosing a registered breeder in the AFU, you're financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories."
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
            "intro": "If you've decided that a specific breed fits your lifestyle, it's essential to acquire it responsibly. In Peru, animal ownership is protected by Law No. 30407 (Animal Protection and Welfare Law) and technically regulated by SENASA under MIDAGRI. This law recognizes animals as sentient beings and prohibits their mistreatment, abandonment, and illegal trade.",
            "sections": [
              {
                "heading": "**Why Choose a Registered Breed**er?",
                "body": "Ethical breeders in Peru preserve the breed, care for genetic and social health, and socialize kittens. The safest way to identify them is to verify their affiliation with FEPERU (Peruvian Federation of Felines), representing WCF and, in some cases, TICA or FIFe. Advantages: Genetic Certification (official ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of behavioral problems such as fears or aggression)."
              },
              {
                "heading": "**Legal Framework: Your Rights and Obliga**tions",
                "body": "For a transaction to be legal in Peru, the breeder must comply with: Identification (Microchip) required by many municipalities (such as Lima Metropolitan, Miraflores, San Isidro) for municipal registration. Sales Contract with party data, health guarantees (FeLV/FIV), return clause (abandonment prohibited), and sterilization commitment. Vaccination Card: Signed by a registered Veterinarian, with triple feline (and quintuple if applicable) vaccination up to date."
              },
              {
                "heading": "**Checklist: How to Detect an Ethical Breeder in P**eru?",
                "body": "Before paying, verify: Do they allow in-person visits? You should know the cattery and see the mother; be wary of deliveries in malls or parks. Age of delivery? NEVER before 12 weeks (3 months). Do you receive a complete documentation package? You should receive a FEPERU birth certificate/pedigree, vaccination card, and invoice or receipt. Do they conduct a buyer interview? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Lima."
              },
              {
                "heading": "**Legal Importation of Exotic Br**eeds",
                "body": "The process is strictly regulated by SENASA. Requirements: International zoosanitary certificate, current rabies vaccination, and entry protocols. It is recommended to hire a specialized pet relocation agency ('Pet Relocation') to handle SENASA procedures and avoid airport retention or severe fines."
              },
              {
                "heading": "Beware of 'Cat Factories' and Scams!",
                "body": "DO NOT BUY IF: They ask for advance payment without showing the animal (common scam; demand a real-time video call). They sell at street fairs or plazas: high mortality due to lack of hygiene (miliary fever/panleucopenia). They have an infinite 'stock' of multiple breeds: probable exploitation factory. Suspiciously low prices: ethical breeding involves high costs in health and premium food that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Acquiring a purebred cat in Peru is a legal and moral responsibility. When choosing a registered breeder from FEPERU, you are financing the preservation of the breed and animal welfare, and saying no to the abuse of clandestine factories. Remember: Before buying, also consider adoption."
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
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to acquire it responsibly. In Bolivia, animal ownership and welfare are fundamental, and the trade of breeds must be carried out under ethical and legal standards that recognize animals as sentient beings, prohibiting their abuse and illegal trade.",
            "sections": [
              {
                "heading": "**3. Checklist: How to Detect an Ethical Breeder in Boli**via?",
                "body": "Before making any transfer or payment, verify these points. If the answer is \"no\" to any of them, be suspicious. Do they allow in-person visits? An ethical breeder will invite you to visit their home or cattery. You should be able to see the mother and a clean and safe environment. Be suspicious of those who only make deliveries at shopping malls, parks, or other public places. What is the age of delivery? NEVER before 12 weeks (3 months). It is crucial for emotional and immunological weaning. Is there complete documentation? You should receive a Birth Certificate/Pedigree (or pre-pedigree issued by the corresponding feline association), Vaccination and deworming card, and Sales invoice or receipt. Will they interview you? A good breeder will ask you questions about your home, if you have window or balcony protections (vital in high-rise buildings in La Paz or Santa Cruz), and your experience."
              },
              {
                "heading": "**4. Legal Importation of Exotic Br**eeds",
                "body": "If you are looking for breeds that are not commonly raised in Bolivia (such as Lykoi, Toyger, or specific Bengal lines), the process is strictly regulated by the SENASAG (National Service of Agricultural Health and Food Safety). Requirements: International zoosanitary certificate from the country of origin, current rabies vaccination, and compliance with entry protocols. Quarantine: Depending on the country of origin and health status, additional quarantine or inspections may be required. Recommendation: Always hire a specialized pet relocation agency (\"Pet Relocation\") that will handle the paperwork with the SENASAG to avoid airport detentions (El Alto, Viru Viru, etc.) or severe fines."
              },
              {
                "heading": "Be Careful with \"Cat Factories\" and Scams!",
                "body": "In Bolivia, illegal trade is common on online platforms and informal fairs. NO BUY IF: They ask for signs in advance without showing the animal (common scam; requires a real-time video call). They sell at street fairs or plazas: exposed kittens without hygiene usually are sick (panleucopenia, leukemia) and have high mortality. They have an \"infinite\" stock: probable factory of exploitation where females are used indiscriminately. Suspiciously low prices: ethical breeding involves high costs in health and records that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Acquiring a purebred cat in Bolivia is a legal and moral responsibility. When choosing a registered breeder in the AFUBO or recognized associations, you are financing the preservation of the breed and animal welfare, and saying \"no\" to the mistreatment of clandestine factories. Remember: Before buying, also consider adoption. Many organizations rescue beautiful purebred or mixed-breed cats looking for a loving home all over the country."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición colombia",
        "label": "Colombia",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-colombia",
            "title": "Responsible Acquisition in Colombia: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to acquire it in a responsible manner. In Colombia, animal ownership is protected by Law 1774 of 2016, which recognizes animals as sentient beings not susceptible to being things, and prohibits their mistreatment and abandonment. Additionally, there are local regulations in cities such as Bogotá, Medellín, and Cali.",
            "sections": [
              {
                "heading": "**1. Why Choose a Registered Bree**der?",
                "body": "Ethical breeders in Colombia preserve the breed, care for genetic health, and socialize kittens. The safest way to identify them is to verify their affiliation to ASOFELGA (Colombian Association of Cat Breeders), representative of the WCF, and in some cases, TICA or FIFe. Advantages: Genetic Certification (official ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of fears and aggression)."
              },
              {
                "heading": "**2. Legal Framework: Your Rights and Obligations (Alica** Law)",
                "body": "For a secure transaction in Colombia, the breeder must comply with: Identification (Microchip) required by municipalities (such as Bogotá with Decree 319 of 2019) for municipal registration. Sales Contract with data from the parties, health guarantees (FeLV/FIV), clause of return (prohibited abandonment), and commitment to sterilization. Vaccination Card: Signed by a Veterinarian Zootechnician with a valid professional card."
              },
              {
                "heading": "**How to Detect an Ethical Breeder in Colomb**ia?",
                "body": "Before paying, check:  You must allow visits in person; you need to know the cattery and see the mother; be wary of deliveries in shopping centers or parks.  You must receive kittens at no younger than 12 weeks (3 months); it's crucial for emotional and immunological weaning.  You must receive complete documentation; you should receive a birth certificate/Pedigree from ASOFELGA, vaccination card, and invoice or receipt.  The breeder should interview you; a good breeder wants to know about your window and balcony protections, vital in high-rise buildings in Bogotá or Medellín."
              },
              {
                "heading": "**Legal Importation of Exotic Br**eeds",
                "body": "The process is strictly regulated by the ICA (Colombian Agricultural and Livestock Institute).  Requirements: International zoosanitary certificate, current rabies vaccination, and compliance with entry protocols (ICA Resolution).  It's recommended to hire a specialized pet relocation agency ('Pet Relocation') to handle ICA procedures and avoid airport detentions or severe fines."
              },
              {
                "heading": "Beware of 'Cat Factories' and Scams!",
                "body": "Don't buy if:  They ask for payment in advance without showing the animal (common scam; demand a real-time video call).  They sell at street fairs or plazas: high mortality due to lack of hygiene (upper respiratory infection/panleukopenia).  They have an infinite 'stock' of multiple breeds: probable exploitation factory.  Suspiciously low prices: ethical breeding involves high costs in health and records that a low price can't cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Colombia is a legal and moral responsibility.  By choosing a breeder registered with ASOFELGA, you're financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición ecuador",
        "label": "Ecuador",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-ecuador",
            "title": "Responsible Acquisition in Ecuador: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed is suitable for your lifestyle, it is essential to acquire it in a responsible manner. In Ecuador, animal ownership is protected by the Organic Animal Welfare Code (COBA), enacted in 2022. This law recognizes animals as sentient beings, prohibits their mistreatment, abandonment, and strictly regulates breeding and commercialization.",
            "sections": [
              {
                "heading": "**Why choose a Registered Breed**er?",
                "body": "Ethical breeders in Ecuador preserve the breed, care for genetic health, and socialize kittens. The safest way to identify them is to verify their affiliation with recognized feline associations (WCF, TICA) and that they have the necessary municipal permits. Advantages: Genetic Certification (official ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of fears and aggression)."
              },
              {
                "heading": "**Legal Framework: Your Rights and Obligations (**COBA)",
                "body": "For a transaction to be legal in Ecuador, the breeder must comply with: Identification (Microchip) required by COBA and municipal ordinances (Quito, Guayaquil, Cuenca) for municipal registration. Municipal Functioning Permit issued by the Municipal GAD of your canton. Sales Contract with data from the parties, health guarantees (FeLV/FIV), return clause (abandonment prohibited), and sterilization commitment. Vaccination Card: Signed by a registered Veterinary Zootechnician."
              },
              {
                "heading": "**Checklist: How to Detect an Ethical Breeder in Ecua**dor?",
                "body": "Before paying, verify: Do they allow in-person visits? You must know the cattery and see the mother; be suspicious of deliveries in shopping centers or parks. Age of delivery? NEVER before 12 weeks (3 months). It is crucial for emotional and immunological weaning. Complete documentation? You should receive an official Birth Certificate / Pedigree, up-to-date vaccination card, and invoice or receipt (tax compliance). Buyer interview? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Quito or Guayaquil."
              },
              {
                "heading": "**Legal Importation of Exotic Br**eeds",
                "body": "The process is strictly regulated by AGROCALIDAD (Agency for Regulation and Zoosanitary Control). Requirements: International zoosanitary certificate, current rabies vaccination, and entry protocols. It is recommended to hire a specialized pet relocation agency ('Pet Relocation') to manage procedures and avoid airport detentions (Mariscal Sucre, José Joaquín de Olmedo, etc.) or severe fines."
              },
              {
                "heading": "Beware of 'Cat Factories' and Scams!",
                "body": "Don't Buy If: They ask you for signs in advance without showing the animal (common scam; requires real-time video call). They sell at street fairs or plazas: high mortality rate due to lack of hygiene (panleucopenia, leukemia). They have an infinite \"stock\" of multiple breeds: probable factory farm. Suspiciously low prices: ethical breeding involves high costs in health and records that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Acquiring a purebred cat in Ecuador is a legal and moral responsibility under the COBA. By choosing a registered breeder with municipal permits, you are financing the preservation of the breed and animal welfare, and saying \"no\" to the mistreatment of clandestine factories. Remember: Before buying, also consider adoption."
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
            "title": "Responsible Acquisition in Venezuela: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to acquire it in a responsible manner. In Venezuela, animal ownership is protected by the Law of Protection of Free and Domesticated Fauna and various municipal ordinances that promote responsible ownership, prohibit mistreatment, and abandonment.",
            "sections": [
              {
                "heading": "**1. Why Choose a Registered Bree**der?",
                "body": "Ethical breeders in Venezuela preserve the breed, care for genetic health, and socialize kittens. The safest way to identify them is to verify their affiliation with the Venezuelan Canine Federation (FCV) in its feline division, or with associations like ASOVEFEL (Venezuelan Association of Felines), linked to WCF or TICA. Advantages: Genetic Certification (official ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of fears and aggression)."
              },
              {
                "heading": "**2. Legal Framework: Your Rights and Obliga**tions",
                "body": "For the transaction to be legal in Venezuela, the breeder must comply with: Identification (Microchip) required or recommended in municipalities like Chacao, Baruta, El Hatillo (Caracas), Valencia, and Maracaibo for municipal registration. Sales Contract with data from the parties, health guarantees (FeLV/FIV), return clause, and sterilization commitment. Vaccination Card: Signed by a registered Veterinarian (CVZ), with triple feline vaccinations up to date according to age."
              },
              {
                "heading": "**How to Detect an Ethical Breeder in Venezue**la?",
                "body": "Before paying, check: Do they allow in-person visits? You should know the cattery and see the mother; be wary of deliveries at metro stations or shopping centers. What's the age of delivery? NEVER before 12 weeks (3 months). It's crucial for emotional and immunological weaning. Do you receive complete documentation? You should get an official Birth Certificate/Pedigree, up-to-date vaccination card, and receipt. Will the seller interview you? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Caracas or Valencia."
              },
              {
                "heading": "**Legal Importation of Exotic Br**eeds",
                "body": "The process is strictly regulated by the INSAI (National Institute of Integral Agricultural Health). Requirements: International zoosanitary certificate, current rabies vaccination, and entry protocols. It's recommended to hire a specialized pet relocation agency ('Pet Relocation') to handle INSAI procedures and avoid airport retention or severe fines at the Simón Bolívar International Airport."
              },
              {
                "heading": "Beware of 'Cat Factories' and Scams!",
                "body": "DON'T BUY IF: They ask for advance payment without showing the animal (common scam; don't transfer funds or bolívares without a real-time video call). They sell at street fairs or plazas: high mortality due to lack of hygiene (panleucopenia, leukemia). They have an infinite 'stock' of multiple breeds: probable exploitation factory. Suspiciously low prices: ethical breeding involves high costs for imported/premium food that a low price can't cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Venezuela is a legal and moral responsibility. By choosing a registered breeder in ASOVEFEL or affiliated with international federations, you're financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories. Remember: Before buying, also consider adoption."
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
            "intro": "If you've decided that a specific breed fits your lifestyle, it's essential to get one responsibly. In Paraguay, animal ownership is protected by Law No. 483/95 of Animal Protection and by Law No. 6541/20 of Animal Welfare, which recognizes animals as sentient beings, prohibits their mistreatment and abandonment, and regulates responsible ownership.",
            "sections": [
              {
                "heading": "**Why Choose a Registered Breed**er?",
                "body": "Ethical breeders in Paraguay preserve the breed, care for genetic and social health, and socialize kittens. The safest way to identify them is to check their affiliation with FELPAR (Paraguay Feline Federation), which represents the WCF or TICA. Benefits: Genetic Certification (officially registered ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of behavioral problems such as fears or aggression)."
              },
              {
                "heading": "**Your Rights and Obligations: Legal Fram**ework",
                "body": "For a secure transaction in Paraguay, the breeder must comply with: Identification (microchip) implemented in municipalities such as Asunción, Luque, San Lorenzo, Lambaré, etc. Sales Contract with party data, health guarantees (FeLV/FIV), return clause (prohibited abandonment), and sterilization commitment. Vaccination Card: Signed by a registered veterinarian in the CONAMEVET (National Council of Veterinary Medicine), with triple cat vaccinations up to date."
              },
              {
                "heading": "**How to Detect an Ethical Breeder in Paraguay: Check**list",
                "body": "Before paying, verify: Do they allow in-person visits? You must know the cattery and see the mother; be wary of deliveries in shopping centers or parks. Age of delivery? NEVER before 12 weeks (3 months). It's crucial for emotional and immunological weaning. Complete documentation? You should receive a birth certificate/Pedigree from FELPAR, vaccination card, and invoice or receipt. Do they interview the buyer? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Asunción."
              },
              {
                "heading": "**Importing Exotic Breeds Lega**lly",
                "body": "The process is strictly regulated by SENACSA (National Service of Animal Quality and Health). Requirements: International zoosanitary certificate, current rabies vaccination, and entry protocols. It's recommended to hire a specialized pet relocation agency ('Pet Relocation') to handle SENACSA procedures and avoid airport retentions or severe fines."
              },
              {
                "heading": "Beware of \"Cat Factories\" and Scams!",
                "body": "NO SELL IF: They ask you for signs in advance without showing the animal (common scam; don't transfer money or wire transfers without a real-time video call). They sell at street fairs or plazas: high mortality rate due to lack of hygiene (panleucopenia, leukemia). They have an 'infinite stock': probable factory farm. Low suspicious prices: ethical breeding involves high costs in health and premium food that a low price does not cover."
              },
              {
                "heading": "Conclusion",
                "body": "Acquiring a purebred cat in Paraguay is a legal and moral responsibility under the Animal Welfare Law. When choosing a registered breeder in FELPAR, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factory farms. Remember: Before buying, also consider adoption."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición brasil",
        "label": "Brazil",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-brasil",
            "title": "Responsible Acquisition in Brazil: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to acquire it in a responsible manner. In Brazil, animal ownership is protected by Federal Law No. 14,064/2020 (Sansão Law) and Arouca Law (Law No. 11,794/2008). Buying a cat is not a regular commercial transaction; it is incorporating a sensitive family member.",
            "sections": [
              {
                "heading": "**Why Choose a Registered Breed**er?",
                "body": "Ethical breeders in Brazil preserve the breed, care for genetic health, and socialize kittens. The safest way to identify them is to verify their affiliation with GATOS do BRASIL (official representative of the WCF), or TICA or FIFe clubs. Advantages: Genetic Certification (official ancestors), Preventive Health (PKD or HCM tests), and Early Socialization ('home raised') to prevent behavioral problems."
              },
              {
                "heading": "**Legal Framework: Your Rights and Obliga**tions",
                "body": "For the transaction to be legal in Brazil, the breeder must comply with: Identification (Microchip) required in cities like São Paulo, Rio de Janeiro, and Curitiba for municipal registration (RAA). Sales Contract with party data, health guarantees (FeLV/FIV), return clause (abandonment is a crime), and sterilization commitment. Vaccination Card: Signed by a Registered Veterinarian in the CRMV, with V3/V4/V5 vaccinations up to date according to age."
              },
              {
                "heading": "**How to Detect an Ethical Breeder in Braz**il?",
                "body": "Before making any transfer (PIX), verify: Do they allow in-person visits? You must know the cattery and see the mother; be wary of deliveries in parks or shopping malls. What is the delivery age? NEVER before 12 weeks (3 months). Is the documentation complete? You should receive a Certificate of Birth/Pedigree from CATS of BRAZIL/WCF, vaccination card, and invoice or receipt. Did the seller interview you? A good breeder will want to know about your 'protection screens' (essential in high-rise buildings in Brazil)."
              },
              {
                "heading": "**Legal Importation of Exotic Br**eeds",
                "body": "The process is strictly regulated by the MAPA (Ministry of Agriculture, Livestock, and Supply) through the Vigiagro system. Requirements: International zoosanitary certificate, current rabies vaccination, and entry protocols. It is recommended to hire a specialized pet relocation agency ('Pet Relocation') to avoid animal retention at airports like Guarulhos or Galeão."
              },
              {
                "heading": "Beware of 'Cat Factories' and Scams!",
                "body": "DON'T BUY IF: They ask for PIX in advance without showing the animal (common scam; demand a real-time video call). They sell at street fairs or plazas: high mortality rate due to lack of hygiene. They have an infinite 'stock' of multiple breeds: probable exploitation factory. Prices suspiciously low: ethical breeding involves high costs in health and records that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Brazil is a legal and moral responsibility under the Sansão Law and the Arouca Law. By choosing a breeder registered with CATS of BRAZIL, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories. Remember: Before buying, also consider adoption."
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
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to acquire it in a responsible manner. In Spain, the regulations have changed drastically with the entry into force of the new Animal Welfare Law (Law 7/2023). This law prohibits the sale of dogs, cats, and ferrets in commercial establishments and requires that all acquisitions be made through registered breeders or animal protection entities.",
            "sections": [
              {
                "heading": "**Why choose a Registered Breeder (Hobbyis**t)?",
                "body": "In Spain, ethical breeders must be registered as 'Zoological Nucleus' or 'Hobbyist Breeder' in their Autonomous Community. The safest way to identify them is to verify that they are affiliated with the AFEC (Spanish Feline Association), representative of the WCF in the country, or other recognized federations such as FIFe. Advantages: Guaranteed Legality (only registered breeders can sell under the new law), Genetic Health (PKD or HCM tests) and Socialization (guarantees a balanced temperament)."
              },
              {
                "heading": "**Your Rights and Obligations (Law 7/20**23)",
                "body": "For the transaction to be legal in Spain, the breeder must comply with: Mandatory Microchip (registered in the RIAC of their Autonomous Community before delivery). Health Documentation: European passport or vaccination card (Trivalent) and daily deworming. Mandatory Sales Contract with the zoological nucleus number, health guarantees, and return clause. Prohibition of Sales in Pet Stores: Selling in pet stores is illegal; it can only be done directly by the breeder or through adoption."
              },
              {
                "heading": "**How to Detect an Ethical Breeder in Spa**in?",
                "body": "Before paying, verify: Do they allow visits? You must know their home or cattery and see the mother; be suspicious of deliveries in parking lots. Age of delivery? NEVER before 12 weeks (3 months). Complete documentation? Official pedigree of AFEC/WCF or similar, microchip already registered, and signed veterinary card. Transparency? A good breeder will ask about your home (window screens on high floors) and will not be in a hurry to sell quickly."
              },
              {
                "heading": "**Importation of Animals from the EU and Third Count**ries",
                "body": "From the EU: European passport, ISO microchip, and rabies vaccine (minimum 21 days old). From outside the EU (United Kingdom, USA): Official Zoosanitary Certificate, antibody titration (if applicable), and compliance with requirements of the Ministry of Agriculture, Fisheries and Food (MAPA). It is recommended to use specialized transportation agencies to avoid quarantines or returns to the origin."
              },
              {
                "heading": "Be Careful with Scams and Illegal Trafficking!",
                "body": "Don't pay if: They ask for money upfront without seeing the cat (require live video call). No visible zoo nucleus number: it's mandatory to display it in all ads. They deliver kittens under 3 months: it's illegal and cruel. Suspiciously low prices: usually indicate 'kitten farms' illegally imported from Eastern Europe without health or ethical guarantees."
              },
              {
                "heading": "Conclusion",
                "body": "Acquiring a purebred cat in Spain is a regulated and protected act. When choosing a breeder affiliated with the AFEC and with a zoo nucleus, you are complying with the Animal Welfare Law, financing the preservation of the breed and avoiding animal suffering. Remember: Before buying, consider adoption from specific shelters like the Persian Rescue or Maine Coon Rescue."
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
            "title": "Responsible Cat Ownership in Mexico: A Legal and Ethical Guide to Acquiring a Cat",
            "intro": "If you've decided that a specific breed fits your lifestyle, it's essential to acquire it responsibly. In Mexico, animal protection is governed by the Federal Animal Protection Law and state and local laws (such as the CDMX or Jalisco laws), which recognize animals as sentient beings, prohibit abuse, and regulate responsible ownership.",
            "sections": [
              {
                "heading": "**Why Choose a Registered Breed**er?",
                "body": "Ethical breeders in Mexico preserve the breed, care for genetic health, and socialize kittens in a family environment. The safest way to identify them is to verify their affiliation with the AMFE (Mexican Felin Association), which represents the WCF and TICA. Advantages: Genetic Certification (registered ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of fears and aggression)."
              },
              {
                "heading": "**Your Rights and Obligations: Legal Fram**ework",
                "body": "For a transaction to be legal in Mexico, the breeder must comply with: Mandatory identification (microchip) in entities like CDMX (RECAN registration), Edomex, Jalisco, and Nuevo León. Sales Contract with party data, health guarantees (FeLV/FIV), return clause (abandonment is a crime), and sterilization commitment. Vaccination Record: Signed by a Licensed Veterinarian with a valid professional ID, with all three feline vaccinations up to date."
              },
              {
                "heading": "**How to Detect an Ethical Breeder in Mexi**co?",
                "body": "Before you pay, check: Do they allow in-person visits? You need to know the cattery and see the mother; be wary of deliveries at commercial plazas or metro stations. What's the age of delivery? NEVER before 12 weeks (3 months). Is the documentation complete? Birth certificate/Pedigree (AMFE/WCF or TICA), vaccination records, and receipt or invoice.  Do they conduct a buyer interview? A good breeder will want to know about your window and balcony protections, especially in Mexico City, Monterrey, or Guadalajara apartments."
              },
              {
                "heading": "**Legal Importation of Exotic Br**eeds",
                "body": "The process is strictly regulated by the SENASICA (National Service of Health, Safety, and Agri-Food Quality) under the SADER. Requirements: International zoosanitary certificate, current rabies vaccination, and entry protocols. It's recommended to hire a specialized pet relocation agency ('Pet Relocation') to avoid airport detentions in Mexico City or Cancun."
              },
              {
                "heading": "Beware of Cat Factories and Scams!",
                "body": "DON'T BUY IF: They ask for deposits in advance without showing the animal (common scam; demand a live video call). They sell at markets or streets: high mortality rate due to poor hygiene (Upper Respiratory Infection/Leukopenia). They have an \"infinite\" stock: probable exploitation factory. Prices suspiciously low: ethical breeding involves high costs in health and records that a low price can't cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Mexico is a legal and moral responsibility. By choosing a breeder registered with the AMFE, you're financing the preservation of the breed and animal welfare, and saying no to the abuse of clandestine factories."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "historia",
    "label": "History, Origin and Expansion",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "Stimulation, Toys and Enrichment",
    "subcategories": [
      {
        "slug": "historia-felina",
        "label": "The Heart of Origin",
        "topics": [
          {
            "slug": "origen-encuentro-nilo",
            "title": "Egypt, on the Nile",
            "intro": "The history of the domestic cat began about 9,000 years ago in the Nile Valley, Egypt. Although there are many species of felines, all our current cats (including exotics) come from a single subspecies: the North African wildcat or Felis lybica. The \"spark\" with humans was not planned, but a convenient association:",
            "sections": [
              {
                "heading": "The Problem, the Solution and the Pact",
                "body": "The Problem: The Egyptians relied on agriculture and stored grain in large silos. These warehouses attracted rodent infestations. The Solution: Cats approached the villages attracted by the abundance of rodents. The Pact: Humans gladly accepted this \"pest control\" service and thus began a mutually beneficial symbiotic relationship."
              },
              {
                "heading": "From Hunters to Gods",
                "body": "Over time, the cat passed from being a simple granary guardian to a sacred member of the family. The Egyptians came to deify them, linking them to the goddess Bastet (who represented sweetness and protection) and the sun god, Ra. Their importance was such that millions of cat mummies and luxury tombs, such as Osiris Tamat, the favorite cat of an Egyptian prince, have been found."
              },
              {
                "heading": "The Conquest of the World: Rome and the Vikings",
                "body": "Although the document focuses on the Nilotian origin, the history continued when the cat left Egypt to conquer new continents: The Cat in Rome: The Romans, seeing the effectiveness of Egyptian cats, adopted them quickly. For them, the cat was a symbol of freedom and independence. They took them with them throughout the Roman Empire (Europe, North Africa, and Great Britain), using them mainly to protect their military camps and homes from rodents. The Viking Traveling Cats: During the Middle Ages, the Vikings played a crucial role in the expansion of the cat to the north. They were excellent navigators and always took cats on their ships (especially the 'Norwegian Forest Cat') to protect their food provisions during long voyages. Thanks to the Vikings, cats reached as remote places as Scandinavia and eventually the Americas."
              },
              {
                "heading": "The Modern Cat",
                "body": "After surviving dark ages in medieval Europe —where they were unjustly persecuted—, the cat regained its status thanks to its vital role in detaining plagues that transmitted diseases like the Black Death. Today, the modern cat maintains that independent hunting instinct and self-sufficiency that makes it unique. Although there are now hundreds of breeds with different colors and coats, its DNA still beats with the heart of that small desert cat that decided, millennia ago, that living with us was a good idea."
              }
            ]
          },
          {
            "slug": "corazon-origen-egipto",
            "title": "Expansion Around the World",
            "intro": "The domestic cat did not appear by chance in the Nile. The key was sedentary agriculture. Egypt was the 'granary of the world', and the grain silos were magnets for rodents.",
            "sections": [
              {
                "heading": "The Religious Transformation",
                "body": "The cat passed from being a useful ally to a divine being. The goddess Bastet was represented with a cat's head and symbolized the home, fertility, and protection. Killing a cat in ancient Egypt was a crime punishable by death."
              },
              {
                "heading": "Luxury and Respect",
                "body": "The document highlights the case of the cat Osiris Tamat, the pet of Prince Tutmosis. It was buried with honors in a limestone sarcophagus, wrapped in fine linen and with jewelry, demonstrating that for Egyptian royalty, cats were true companions of life and the 'afterlife'."
              },
              {
                "heading": "Prohibition of Exportation",
                "body": "The Egyptians valued their cats so much that they strictly prohibited taking them out of the country. However, this did not prevent the \"secret\" of these felines from spreading."
              },
              {
                "heading": "The Great Expansion: How did they reach other continents?",
                "body": "The cat's path to the rest of the world was mainly given through maritime trade routes: 1. The Phoenicians: The first \"smugglers.\" They were the great navigators of the Mediterranean. It is said that they smuggled cats out of Egypt to sell them on their trade routes. Thanks to them, the cat reached the Greek islands, the Italian peninsula, and southern Spain much earlier than expected. 2. Rome: Cats in the legions. When the Romans conquered Egypt, they were fascinated by the cat (they preferred it to the ferret, which was the animal they used before for mice). As they expanded their Empire, legionnaires brought cats in their caravans and ships to protect supplies. Thus, the cat was introduced to Central Europe and Great Britain. 3. Asia and the Silk Road. Through land trade routes, cats reached Central Asia. In countries like China and Japan, they were received with honors similar to those in Egypt. In Japan, for example, Buddhist monks used them to protect valuable paper manuscripts from mice in temples. 4. The Conquest of America. Cats did not reach America until the time of European explorers (15th and 16th centuries). On ships like those of Christopher Columbus or later the Mayflower, cats were essential crew members. Their mission was to prevent rats from eating the sailors' food rations and spreading diseases in the confined space of the ship."
              },
              {
                "heading": "Summary of Evolution",
                "body": "Africa: Biological origin (Felis lybica). Europe: Introduced by Phoenicians and Romans; later expanded by Vikings to the north. Asia: Arrived through the Silk Road and maritime trade to India and Japan. America and Oceania: Arrived centuries later on European colonizers' ships."
              },
              {
                "heading": "Conclusion",
                "body": "Today, that small cat watching the wheat on the Nile is present on all continents (except Antarctica), demonstrating to be one of the most successful travelers in human history."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "a",
    "label": "Stimulation, toys, and enrichment",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "Why it's vital",
    "subcategories": [
      {
        "slug": "importancia",
        "label": "Play in puppies: the foundation of all",
        "topics": [
          {
            "slug": "juego-cachorros",
            "title": "The first six months of a cat's life are a critical period of development. What it learns during play in this stage will largely determine how it will relate to humans and other animals for the rest of its life.",
            "intro": "The window of socialization",
            "sections": [
              {
                "heading": "Between two and nine weeks of life, the cat learns what is normal in its world. A kitten that interacts with people, other cats, household noises, and varied experiences during this period will be a more secure and adaptable adult.",
                "body": "The most common mistake: hands as toys"
              },
              {
                "heading": "Using hands or feet to play with a kitten seems harmless, but teaches that human skin is a valid prey. When that kitten weighs 11 pounds, the bites and scratches will be painful and the behavior difficult to correct. Always use toys with distance.",
                "body": "Play as prevention of problems"
              },
              {
                "heading": "Juego como prevención de problemas",
                "body": "A cat that doesn't play enough channels its hunting energy into problematic behaviors: attacking ankles, destroying objects, redirected aggression. 2 play sessions of 15 minutes a day, especially before bed, are the best antidote."
              }
            ]
          }
        ]
      }
    ]
  }
];
