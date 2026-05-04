import { Category } from '../../data/cats';

export const categories: Category[] = [
  {
    slug: "salud",
    label: "Health",
    emoji: "",
    color: "#7a9e7e",
    bg: "#eef4ef",
    description: "Prevention, diseases and medical care",
    subcategories: [
      {
        slug: "prevencion",
        label: "Prevention",
        topics: [
          {
            slug: "vacunacion",
            title: "Feline vaccination",
            intro: "Vaccination is the most effective tool to protect your cat from serious diseases. Knowing the schedule and mandatory vaccines makes the difference between a long life and one full of complications.",
            sections: [
              {
                heading: "Mandatory vaccines",
                body: "The feline triple vaccine (Rhinotracheitis, Calicivirus and Panleukopenia) is the basis of any protocol. It is administered at 8, 12 and 16 weeks of age, with annual or 3-year boosters depending on the product.",
              },
              {
                heading: "Recommended optional vaccines",
                body: "The Feline Leukemia (FeLV) vaccine is highly recommended for cats that go outdoors or live with other cats. The rabies vaccine is mandatory in many countries and recommended in Chile.",
              },
              {
                heading: "What happens if I miss a dose?",
                body: "If the adult cat has gone more than 3 years without vaccination, it is recommended to repeat the initial series. Always consult your veterinarian before administering any vaccine.",
              },
            ],
          },
          {
            slug: "desparasitacion",
            title: "Internal and external deworming",
            intro: "Parasites are one of the most common and easily preventable problems in cats. A regular deworming plan protects both the cat and the people in the household.",
            sections: [
              {
                heading: "Internal parasites",
                body: "The most common are ascarids (worms), tapeworms and Toxoplasma. They are treated with oral antiparasitics every 3-6 months in adults, and monthly in kittens up to 6 months.",
              },
              {
                heading: "External parasites",
                body: "Fleas, ticks and ear mites are the most common. Monthly spot-on pipettes are the most practical solution. Antiparasitic collars offer prolonged protection but require correct adjustment.",
              },
              {
                heading: "Indoor vs. outdoor cats",
                body: "Indoor cats have lower risk, but are not exempt: fleas can enter on clothes and shoes. Internal deworming 2 times a year and external 4 times a year minimum is recommended.",
              },
            ],
          },
          {
            slug: "primeros-auxilios",
            title: "Feline first aid",
            intro: "Knowing how to act in an emergency can save your cat's life. This basic knowledge prepares you for the most critical moments until you reach the veterinarian.",
            sections: [
              {
                heading: "The basic first aid kit",
                body: "Every home with cats should have: saline solution, sterile gauze, alcohol-free antiseptic (such as diluted chlorhexidine), digital thermometer and the number of an emergency veterinary clinic.",
              },
              {
                heading: "Emergency signs",
                body: "Take your cat to an emergency vet if it presents: difficulty breathing, loss of consciousness, seizures, inability to urinate for more than 12 hours, bleeding that does not stop or possible poison ingestion.",
              },
              {
                heading: "What you should NEVER do",
                body: "Do not give ibuprofen, paracetamol or aspirin to a cat: they are lethal to them. Do not try to induce vomiting without veterinary guidance. Do not put alcohol on open wounds.",
              },
            ],
          },
        ],
      },
      {
        slug: "enfermedades",
        label: "Common diseases",
        topics: [
          {
            slug: "enfermedad-renal",
            title: "Chronic kidney disease",
            intro: "Chronic renal failure is the leading cause of death in cats over 7 years old. Detecting it in time can add years of quality life to your companion.",
            sections: [
              {
                heading: "Warning signs",
                body: "Drinking a lot of water, urinating more frequently, progressive weight loss, dull coat and lack of appetite are the most common signs. Many cats do not show symptoms until losing 75% of kidney function.",
              },
              {
                heading: "Diagnosis and monitoring",
                body: "An annual blood and urine test from 7 years of age is the best detection tool. The SDMA biomarker allows detecting kidney damage months before traditional markers.",
              },
              {
                heading: "Management and treatment",
                body: "There is no cure, but it can be managed with a low-phosphorus and low-protein renal diet, hydration (wet food or subcutaneous fluids at home), supplements and frequent check-ups.",
              },
            ],
          },
          {
            slug: "diabetes-felina",
            title: "Feline diabetes",
            intro: "Diabetes in cats is more common than you might think, especially in neutered overweight males. The good news: with proper management, many cats can go into remission.",
            sections: [
              {
                heading: "Risk factors",
                body: "Obesity, advanced age, male sex and high-carbohydrate diets are the main factors. Burmese cats have genetic predisposition.",
              },
              {
                heading: "Symptoms",
                body: "Excessive thirst, excessive urination, weight loss despite eating well and hind leg weakness (diabetic neuropathy) are the most characteristic signs.",
              },
              {
                heading: "Treatment and remission",
                body: "Daily insulin, low-carbohydrate diet (quality wet food) and blood glucose monitoring at home are the foundation. Up to 90% of cats can achieve remission with early and rigorous treatment.",
              },
            ],
          },
        ],
      },
      {
        slug: "dental",
        label: "Oral health",
        topics: [
          {
            slug: "sarro-gingivitis",
            title: "Tartar and gingivitis",
            intro: "Periodontal disease affects 70% of cats over 3 years old and is one of the most ignored causes of chronic pain and general health deterioration.",
            sections: [
              {
                heading: "Why it is important",
                body: "Bacteria from the mouth enter the bloodstream and can damage kidneys, heart and liver. A cat with dental pain eats less, is more irritable and its quality of life suffers enormously.",
              },
              {
                heading: "Home prevention",
                body: "Brushing teeth 3 times a week with feline dental paste (never human) is the most effective method. Dental snacks and chew toys are a useful complement but not sufficient on their own.",
              },
              {
                heading: "Professional cleaning",
                body: "Veterinary dental cleaning under anesthesia is recommended annually from 3 years of age. Cats with predisposition (Persians, Siamese) may need it earlier.",
              },
            ],
          },
        ],
      },
      {
        slug: "alergia",
        label: "Allergies",
        topics: [
          {
            slug: "guia-alergia-gatos",
            title: "Cat allergy: Practical guide for coexistence",
            intro: "Pet allergies affect between 15% and 30% of people. Being allergic to cats is twice as common as to dogs, but with proper management coexistence is possible.",
            sections: [
              {
                heading: "The cause: Fel d 1 Protein",
                body: "The allergy is not caused by hair, but by the Fel d 1 protein produced in the skin, saliva and urine. It spreads when the cat licks itself and the protein disperses in the air through dander (dead skin). Males produce more than females, and neutering reduces these levels.",
              },
              {
                heading: "Symptoms and Diagnosis",
                body: "Reactions range from hives and itching to sneezing, watery eyes and asthma attacks. It is vital to see an allergist for skin tests, blood tests or spirometry, as the culprit could be dust or pollen and not the cat.",
              },
              {
                heading: "Home and Free Zones",
                body: "Create a 'sanctuary' by keeping the bedroom closed to the cat. Remove carpets or use only those that can be washed with hot water. It is essential to use HEPA filter vacuums and air purifiers at least 4 hours a day.",
              },
              {
                heading: "Direct Care and Products",
                body: "Brushing should be done by a non-allergic person outside the home. Weekly baths and the use of neutralizing products (such as Vetriderm) on the coat help remove saliva residue. Neutering and periodic haircuts for long-haired cats are also effective strategies.",
              },
              {
                heading: "Advanced Treatments",
                body: "Ask about immunotherapy (desensitization vaccines), which are effective long-term. If despite all cleaning measures and medical treatment health seriously declines, the most responsible decision may be to find a new home for the feline.",
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
            title: "Feline Diabetes: Complete guide to understanding and managing it",
            intro: "Diabetes in cats is a complex condition, but with proper management, your cat can live a long and happy life. Unlike dogs, cats have unique particularities we must know to avoid common mistakes.",
            sections: [
              {
                heading: "Step 1: Causes and risk factors",
                body: "Feline diabetes is usually a combination of factors: obesity and age (common in those over 9), sex and breed (more common in males 4:1 and in Siamese). Amyloid deposits that damage the pancreas and the use of drugs such as progestogens or corticosteroids also play a role. It is important to note that pancreatitis is often closely associated with this disease and, in many cases, may be the triggering cause.",
              },
              {
                heading: "Step 2: Identifying symptoms",
                body: "Pay attention to increased thirst and urination (drinking a lot of water or urinating outside the litter box) and changes in appetite or weight. A distinctive sign is diabetic neuropathy: the cat walks supporting its entire hock on the floor. Also note unkempt coat (dry or with dandruff). Unlike dogs, cataracts are very rare in cats.",
              },
              {
                heading: "Step 3: The Correct Diagnosis",
                body: "Stress at the clinic generates the 'White Coat' effect, temporarily raising blood sugar. For an accurate diagnosis, the veterinarian must confirm glucose in both blood and urine. Complete tests are required to rule out other conditions such as urinary infections, liver problems or pancreatitis, which often accompany diabetes.",
              },
              {
                heading: "Step 4: Treatment and Regulation",
                body: "It is based on three pillars: 1. Insulin: Intermediate or long-acting (NPH or PZI) is used, generally twice a day with meals. 2. Diet: Strictly carnivorous, high in protein and low in carbohydrates with fixed schedules. 3. Monitoring: Ideally measure blood glucose (ear pricks) at 'peak' times to adjust the dose accurately.",
              },
              {
                heading: "Step 5: Ketoacidosis Emergency",
                body: "If untreated, it can lead to ketoacidosis, a vital emergency with symptoms such as vomiting, extreme lethargy, dehydration and fruity or acetone-smelling breath. Requires immediate hospitalization for intravenous fluids, rapid-acting insulin and electrolyte correction (potassium, phosphorus).",
              },
              {
                heading: "Step 6: Complications and Expectations",
                body: "Remission (no longer needing insulin) is possible if weight is controlled and diagnosis is early. The greatest risk is hypoglycemia: if the cat trembles or has seizures, apply honey or sugar to its gums and run to the vet. Also regularly check for urinary infections (blood or straining to urinate).",
              },
              {
                heading: "Key tips for the owner",
                body: "Never adjust insulin on your own. Keep a strict record of doses, meal times and behavior. Weight control is the best preventive tool and observing any change in the way of walking is fundamental to report to the specialist.",
              },
            ],
          },
        ],
      },
      {
        slug: "obesidad-felina",
        label: "Obesity",
        topics: [
          {
            slug: "guia-obesidad-prevencion",
            title: "Feline Obesity: How to protect your cat's health and life",
            intro: "Obesity is not just an aesthetic problem; it is a disease that reduces your cat's life expectancy and increases the risk of diabetes, joint problems and surgical complications. With patience and strategy, you can help them recover their ideal weight.",
            sections: [
              {
                heading: "Step 1: Identifying overweight",
                body: "Don't rely only on the scale. In the 'rib test', you should feel them easily without pressing hard; if not, there is excess fat. Looking from above, a waist should be marked behind the ribs; if rectangular or barrel-shaped, there is overweight. From the side, the abdomen should not hang or touch the floor. Overweight is considered 10-19% above ideal weight, and obese if over 20%.",
              },
              {
                heading: "Step 2: Causes and Factors",
                body: "It is a combination of factors: after neutering metabolism drops and appetite increases; from 6-8 years cats burn fewer calories; sedentary lifestyle in indoor cats without stimuli; and inadequate diets (food always available, excessive treats or too many carbohydrates). Breeds such as Siamese or Burmese may have greater genetic predisposition.",
              },
              {
                heading: "Step 3: The Safe Action Plan",
                body: "Weight loss must be slow. Golden rule: a cat should not lose more than 1% or 2% of its weight per week (example: an 8 kg cat should not lose more than 160 grams weekly). Losing weight too fast is dangerous as it can cause hepatic lipidosis, a potentially fatal liver disease.",
              },
              {
                heading: "Step 4: Strategic Dietary Management",
                body: "Ask the vet to calculate calories for ideal weight, not current. Generally offer between 60% and 75% of current maintenance calories. Look for diets high in protein (to maintain muscle and give satiety) and low in carbohydrates. Divide the portion into 3 or 4 meals to keep metabolism active and use part of the ration as a treat instead of caloric snacks.",
              },
              {
                heading: "Step 5: Physical Activity and Enrichment",
                body: "Exercise must be gradual. Dedicate 10 minutes a day to interactive games (wands, laser, balls). Use environmental enrichment: hide food in different places, use interactive feeders or puzzles, and install shelves or cat trees that force them to jump and climb for their food.",
              },
              {
                heading: "Step 6: Commitment and Monitoring",
                body: "Success depends on the whole family following the rules without giving food behind the scenes. Weigh the cat every 2 weeks: if it doesn't lose, adjust the portion; if it loses too fast, increase a bit. The human factor is essential; accepting that the cat needs to lose weight is not 'cruel', but an act of love to care for their long-term health.",
              },
              {
                heading: "Warning Signs: When to go to the vet",
                body: "Before starting any diet, visit the specialist to rule out medical causes such as hypothyroidism (although rare in cats) or diabetes, and to establish a realistic target weight. The vet should help choose the appropriate commercial diet or formulate a balanced home one. Remember that prevention is better than cure to ensure your cat stays with you for many more years, healthy and active.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "comportamiento",
    label: "Behavior",
    emoji: "",
    color: "#b85c38",
    bg: "#faefeb",
    description: "Behavior",
    subcategories: [
      {
        slug: "interio-exterior",
        label: "Indoor or Outdoor Cat?",
        topics: [
          {
            slug: "guia para entender y cuidar",
            title: "Feline Behavior: How to better understand and care for your cat",
            intro: "Cats are now one of the most popular pets in the world. Although historically they were not seen as life companions as we know them now, the reality is that, like dogs, they need interaction, attention and affection. The difference lies in how they express those needs. To live in harmony with your feline, it is essential to understand their nature and adapt their environment to their instincts.",
            sections: [
              {
                heading: "1. Indoor or Outdoor? Making the right decision",
                body: "One of the first decisions when adopting is whether the cat will live only inside the house or have access to the outdoors. Both options have important implications: Outdoor cats: They have more freedom and natural stimulation, but face greater risks: hit by cars, fights with other animals, infectious diseases and parasites (fleas, worms). Their life expectancy is usually shorter. Indoor cats: They are much more protected and live longer, but depend entirely on us for their stimulation. Boredom is their greatest enemy. If you choose this option, you must commit to enriching their environment with games, scratching posts and quality time. Advice: Whatever your choice, the key is safety and mental stimulation.",
              },
              {
                heading: "2. The Scratching Instinct: It's not vandalism, it's communication",
                body: "Scratching is a natural and essential behavior that begins around 5 weeks of age. For a cat, scratching is not just sharpening claws; it is a form of visual and olfactory communication (they mark territory with the glands in their paws) and a way to stretch their muscles. The conflict arises when they choose our furniture. The solution is not to punish, but to offer a better alternative. How to choose the perfect scratching post? Stability: It must be firm and not wobble. If it moves, the cat won't use it due to insecurity. Height: It must be tall enough for the cat to fully stretch standing up. Material: Sisal, natural wood or rope are usually the most attractive. Location: Place it in visible and high-traffic areas (not hidden in a basement). Cats like to mark where the 'life' of the house happens. Patience: Once they choose a scratching post, don't move it. Also, the more used it is, the more they'll like it, because it will be impregnated with their scent.",
              },
              {
                heading: "3. Play: Physical and mental exercise",
                body: "Playing is not just entertainment; it is the way the cat exercises its hunting instinct. A cat that doesn't play can develop behavioral problems from accumulated energy or stress. Keys to successful play: Imitate prey: Use toys that move, hide, jump or vibrate. Wand toys with feathers or strings are ideal because they allow you to interact at a distance. Safety first: Avoid long strings without supervision or small pieces that could be swallowed. Daily routine: Dedicate at least 15 minutes a day to actively playing with them. This strengthens your bond and keeps their mind sharp. Variety: Rotate toys to prevent boredom with the same objects.",
              },
              {
                heading: "4. Hygiene and Litter Boxes: The golden rule",
                body: "Cats are extremely clean and demanding about their bathroom. A dirty or poorly located litter box is the number one cause of inappropriate elimination problems. Basic recommendations: The 'N+1' rule: You should have one litter box per cat, plus one extra. (Example: 1 cat = 2 boxes; 2 cats = 3 boxes). Some cats even prefer to use one box only for urinating and another for defecating. Type of litter: Most prefer unscented litter with a fine, soft texture. Location: Quiet, private places away from loud noises (washing machines, dryers) or their food area. Cleaning: Remove waste daily and wash boxes regularly with water and neutral soap (avoid bleach or ammonia, whose odors can attract them to urinate outside). Alert: If your cat starts urinating or defecating outside the box, go to the vet. It is often the first symptom of pain or urinary disease, not an act of revenge.",
              },
              {
                heading: "5. Urine Marking: Understanding the message",
                body: "Vertical urine marking (spraying walls or furniture) is different from emptying the bladder on the floor. It is a communicative behavior, not necessarily hygienic. Who does it? It can occur in neutered cats, although it is more common in unneutered ones (approximately 10% of males and 5% of neutered females may do it occasionally). Why do they do it? It generally responds to stress or insecurity: arrival of new pets, changes in routine, conflicts with other cats (even seeing stray cats through the window) or changes in the home. Solution: Punishment makes the problem worse. The ideal is to identify the source of stress, clean the area with specific enzymes (to completely eliminate the odor) and consult a veterinarian or behaviorist to assess whether they need behavioral or medical help.",
              },
              {
                heading: "Conclusion: Coexistence based on respect",
                body: "Feline behavior is not capricious; it has a deep biological logic. They need security (routines, high places). They need stimulation (play, simulated hunting). They need cleanliness (impeccable litter boxes). They need communication (scratching, marking, meowing). When you respect these basic needs, you stop seeing 'problems' and start seeing a balanced, affectionate and happy companion. Understanding your cat is the best tool to love them better.",
              }
            ],
          },
        ],
      },
      {
        slug: "comportamiento-felino",
        label: "Introduction between cats",
        topics: [
          {
            slug: "presentacion entre gatos",
            title: "How to get two cats to accept each other and live together peacefully",
            intro: "Introducing a new cat at home is exciting, but it can be stressful for your resident cat. Cats are territorial by nature, so the key to success is not speed, but patience. If you do it right from the beginning, you will avoid future conflicts and foster a lasting friendship (or at least, respectful tolerance). Forget the idea of 'introducing them all at once'. Follow this gradual process.",
            sections: [
              {
                heading: "Step 1: Initial Quarantine (Days 1-4)",
                body: "The new cat needs to feel safe before meeting anyone. Own room: Prepare a quiet room (not your current cat's main area) with their bed, food, water, toys and litter box. Safe refuge: Leave their carrier open with a blanket inside so they have a hiding place where they feel protected. Zero visual contact: During these first days, they should not see each other. However, it's fine for them to smell each other under the door. This allows them to investigate without the pressure of face-to-face.",
              },
              {
                heading: "Step 2: Scent Exchange (The Olfactory 'Dating')",
                body: "Cats get to know each other by smell, not by sight. Exchange objects: Gently rub a towel or sock on one cat's cheeks (where they have scent glands) and give it to the other, and vice versa. You can also exchange their blankets. Positive association: While they smell the other's object, give them rich treats or play with them. We want them to associate the 'other's' smell with good things (food/play). Balanced attention: Spend quality time with each cat separately, petting and playing near the door that separates them. This reduces anxiety and jealousy.",
              },
              {
                heading: "Step 3: Controlled Visual Contact",
                body: "When both cats are relaxed smelling each other under the door and there are no serious hisses or constant growling: The crack: Open the door just an inch (about 2-3 cm) or use a baby gate barrier. They should be able to see each other, but not touch. Observe: If there are mild hisses, it's normal. If there is intense aggression (loud hisses, open mouth, very low ears), close the door and go back to Step 2 for a few more days. Reward calmness: If they look at each other without attacking, give them treats immediately.",
              },
              {
                heading: "Step 4: First Supervised Interactions",
                body: "If visual contact goes well, it's time to let them share space, but with strict rules. Voluntary exit: Open the door and let the new cat come out if they want. Never force them. If they stay hidden, respect it. Short sessions: Allow them to be together for 15-30 minutes maximum. Then, separate them again in their rooms. Repeat this several times a day. Positive distraction: Play with them using wand toys or throw treats, but keep a safe distance (at least 1 meter between them) to avoid competing for the toy. The goal: That they learn that the other's presence is not a threat, but something neutral or even fun.",
              },
              {
                heading: "Step 5: Gradual Increase in Time",
                body: "Little by little, increase the time they spend together if interactions are calm. Always separate at the end: End the session before there is any conflict. It's better to leave them wanting more than with a fight. Alone time: After each session, give them time alone in their respective areas to process the experience and regain their territorial confidence.",
              },
              {
                heading: "Warning Signs and Stress",
                body: "Stop the process and go back if you see: Intense and repeated hisses, deep growls, bristled fur and rigid postures. In the resident cat: Stops eating, misuses the litter box or hides all day. In the new cat: Compulsively licks, doesn't eat or seems terrified. Advice: If stress is high, consult your vet or a behaviorist. Sometimes, using synthetic pheromones (diffusers) can help calm the environment.",
              },
              {
                heading: "What you should NEVER do",
                body: "Never punish: Yelling at or punishing a cat for hissing or showing aggression only increases their stress and associates the other cat with something negative (the punishment). Correct reaction: If there is tension, separate the cats calmly, without drama. Use a soft voice or simply interpose a physical barrier. Don't leave them alone: Until you are 100% sure they tolerate each other (they can take weeks or months), never leave them unsupervised.",
              },
              {
                heading: "Special Cases: The Shy Cat",
                body: "If your new cat is very timid, the process will be slower. Don't rush. A shy cat needs more time to trust their environment before trusting another cat. Reinforce your individual bond with them. Contact sessions can be shorter (10 minutes) but more frequent. Conclusion: Patience is Love. Each pair of cats is unique. Some accept each other in a week; others take months. Don't compare. Your goal is long-term peaceful coexistence, not an immediate movie friendship. Going slow is the fastest way to achieve success. Your patience will be worth it!",
              }
            ],
          },
        ],
      },
      {
        slug: "lenguaje",
        label: "Feline language",
        topics: [
          {
            slug: "comunicacion-corporal",
            title: "Body communication",
            intro: "Cats have a sophisticated and precise body language. Learning to read it transforms the relationship with your cat and allows you to anticipate their needs and emotional states.",
            sections: [
              {
                heading: "The tail as an emotional barometer",
                body: "The tail is one of the clearest signals: High and straight indicates confidence, affectionate greeting or happiness (if it has a curved tip it is maximum happiness). Low or between the legs expresses fear, insecurity or submission. Moving side to side quickly or with slow movement reveals irritation, annoyance or concentration. If it is puffed up, bristled or arched, the cat feels threatened or terrified.",
              },
              {
                heading: "The ears don't lie",
                body: "The ears show a lot about mood: Forward indicates they are attentive, curious, alert or interested. Backward, flattened or flat signal fear, annoyance or defensive aggression. If they are turned to the sides ('airplane mode'), it is a sign of growing irritation and the cat needs space. Constant movement indicates they are alert or nervous.",
              },
              {
                heading: "The eyes and blinking",
                body: "The eyes communicate deep emotions: Open with large/dilated pupils indicate fear, surprise, excitement or play. A fixed stare can be a sign of challenge or intense attention. Conversely, a relaxed gaze or slow blinking is an active signal of trust, calmness and affection.",
              },
              {
                heading: "The whiskers and face",
                body: "Whiskers also speak: if they are oriented forward, they indicate curiosity or excitement about something they are exploring. If they are pressed against the face or retracted, they signal that the cat feels fear or is trying to appear less threatening in a tense situation.",
              },
              {
                heading: "General body posture",
                body: "The body indicates the general state: Relaxed means they feel safe. Crouched or tense indicates fear. Arched with raised back shows they are scared and trying to appear bigger to defend themselves. The cat combines all these signals (tail, ears, eyes) at the same time; for example, high tail with relaxed eyes is a happy cat, while ears back with tail moving strongly is an angry cat.",
              },
              {
                heading: "Main idea",
                body: "You should not look at just one isolated signal, but the combination of all body parts. Learning to observe these details will help you better understand your companion and respect their space when they need it.",
              }
            ],
          },
          {
            slug: "vocalizaciones",
            title: "Vocalizations and their meaning",
            intro: "Adult cats rarely meow at each other: meowing is a language they developed specifically to communicate with humans. Each cat has its own vocabulary.",
            sections: [
              {
                heading: "The meow",
                body: "A short, high-pitched meow is usually a greeting. A long, sustained one, a demand (food, attention). Repetitive meows can indicate pain, disorientation (especially in older cats) or distress.",
              },
              {
                heading: "Purring",
                body: "It does not always indicate happiness: cats also purr when they are stressed, sick or recovering. Purring has proven therapeutic properties between 25 and 50 Hz, a frequency that favors bone regeneration.",
              },
              {
                heading: "Other sounds",
                body: "The trill or chirp is a warm greeting or response to what you say to them. Chattering (teeth chattering) appears when seeing birds or prey: it is frustration and hunting excitement. Hissing and spitting are clear warnings that the cat feels threatened.",
              },
            ],
          },
          {
            slug: "parpadeo-lento",
            title: "The slow blink: the feline kiss",
            intro: "The slow blink is one of the most studied and beautiful signals in the feline repertoire. A 2020 study at the University of Sussex experimentally demonstrated that humans can initiate this communication with any cat.",
            sections: [
              {
                heading: "What it means",
                body: "When a cat looks at you and blinks slowly, they are telling you they feel safe and comfortable in your presence. It is the feline equivalent of a relaxed smile and a gesture of full trust.",
              },
              {
                heading: "How to do it",
                body: "Look at the cat with a relaxed expression. When you have eye contact, slowly narrow your eyes until they are almost closed and then open them again. Wait. If the cat responds with the same gesture, the communication channel is open.",
              },
              {
                heading: "With unfamiliar cats",
                body: "It works even with cats you don't know. In shelters and colonies, the slow blink can be the difference between a cat that approaches voluntarily and one that runs away. It is a powerful tool to gain trust.",
              },
            ],
          },
        ],
      },
      {
        slug: "conducta",
        label: "Common behaviors",
        topics: [
          {
            slug: "arañar-muebles",
            title: "Why they scratch furniture",
            intro: "Scratching is not bad behavior or destructiveness: it is a fundamental biological need. Understanding why they do it is the first step to redirecting it to appropriate places.",
            sections: [
              {
                heading: "The three reasons for scratching",
                body: "Cats scratch to mark territory visually and with pheromones from their pads, to stretch muscles and tendons in a healthy way, and to remove dead layers from their claws. It is an instinctive behavior that cannot be eliminated, only redirected.",
              },
              {
                heading: "How to protect furniture",
                body: "Place scratching posts in the places the cat already frequents to scratch. Use synthetic pheromones (Feliway) on the surfaces you want to protect. Temporarily cover furniture with fabrics or non-sticky adhesive protectors to redirect the behavior.",
              },
              {
                heading: "What type of scratching post works best",
                body: "Each cat has their preference: some need tall vertical scratching posts (that allow them to fully stretch), others prefer horizontal ones. Sisal is usually the favorite material, although some prefer cardboard or carpet. Offer variety at first.",
              },
            ],
          },
          {
            slug: "amasar",
            title: "Kneading: paws that make bread",
            intro: "Kneading, that rhythmic movement of alternately pressing with paws on soft surfaces, is one of the most endearing and meaningful behaviors in the feline repertoire.",
            sections: [
              {
                heading: "The origin of the behavior",
                body: "Kittens knead their mother's belly to stimulate milk production. In adults, it is a comfort behavior that persists from infancy: they do it when they feel safe, happy and relaxed.",
              },
              {
                heading: "What it indicates when they knead on you",
                body: "It is one of the greatest expressions of affection and trust. Your cat is treating you like their mother and telling you they feel completely safe in your presence. It is a feline honor.",
              },
              {
                heading: "Variations of kneading",
                body: "Some cats knead blankets, stuffed animals or even the air. Others only knead on specific people. There are cats that knead with all four paws, others only with the front ones. All variants are completely normal.",
              },
            ],
          },
        ],
      },
      {
        slug: "entrenamiento",
        label: "Training",
        topics: [
          {
            slug: "guia-entrenamiento-casa",
            title: "Your cat also wants to learn: Fun guide for training at home",
            intro: "Do you think cats are independent and ignore training? Nothing could be further from reality! Cats are intelligent, curious and, above all, they love having 'things to do'. In nature, they would spend the day hunting and exploring; at home, if they only sleep and eat, they get bored. And a bored cat is one that scratches the sofa or meows at night. Training your cat is not making them obey like a militarized dog. It is playing with purpose. It is an incredible way to connect with them, stimulate their mind and strengthen your friendship. And the best part? You only need 10 minutes a day.",
            sections: [
              {
                heading: "1. The secret: Use their instinct, not force",
                body: "Cats don't respond well to dry orders or punishments. They respond to positive reinforcement. The golden rule: If they do something right, they get a reward (a rich treat, a bit of tuna or lots of pets). Never force: If you pull them or yell at them, they will shut down completely. Training should always be voluntary and fun. Short sessions: 5 or 10 minutes are enough. If you see them getting distracted, end the session with something they already know how to do well so they finish with a good feeling.",
              },
              {
                heading: "2. The magic tool: 'The Target' (Targeting)",
                body: "Before teaching them complicated tricks, teach them to follow your finger or an object. This is called targeting and it is the basis of everything. Bring your finger (or a stick with a bright tip) close to the cat's nose. Out of curiosity, they will smell or touch it. As soon as they touch it, say 'Good!' (in a cheerful voice) and give them a treat immediately. Repeat this several times. Soon, they will follow your finger wherever you move it because they know touching it brings good things. You already have soft control of their movement!",
              },
              {
                heading: "3. Easy tricks to start",
                body: "'Come here' (The most important command): It is vital for safety. Call them by their name or click your tongue. When they come to you, celebrate a lot and give them a spectacular treat. Important: Never scold them when they come, even if it took them a long time. They must associate 'coming' with 'party'. 'Sit': Cats naturally sit when they look up. With the cat standing, put a treat right above their head. Move your hand slowly backward (towards their tail). To follow the food with their gaze, they will automatically lower their bottom. As soon as the bottom touches the floor, say 'Sit' and give them the treat. 'On lap' or 'Get up': Ideal for them to come sleep with you or get on permitted places. Sit on a chair or sofa. Gently tap your leg or the seat and say 'Get up'. Guide them with the treat if needed. When they get up, immediate reward! Soon they will jump on their own to be with you.",
              },
              {
                heading: "4. Slightly more advanced challenges",
                body: "'Stay': Ask them to sit. Put your palm in front of their face (like a red traffic light) and say 'Stay'. Wait only 1 second at first. If they don't move, reward. Gradually increase the time (2 seconds, 5 seconds...). Patience, this takes more work. 'Lie down': It's difficult because it's a vulnerable position for them. From the sitting position, lower the treat to the floor, between their front paws. Move it slowly forward. If they lower their chest and stretch, big reward! Don't expect them to stay like that for long at first.",
              },
              {
                heading: "5. Walking on a leash? Yes, it's possible",
                body: "Many cats love exploring outdoors, but it must be safe. The Harness: Buy a vest-type harness (more comfortable and safer than thin string ones). Leave it on at home for a few minutes a day while they play, so they get used to it. The Leash: Add it when they already ignore the harness. Let them drag it under your supervision. The Exit: Go out to the hallway or garden. Don't pull the leash. Let them explore and you follow them. If they get scared, go back inside. No rush.",
              },
              {
                heading: "6. Solving problems with play",
                body: "Scratching the sofa? Don't yell at them. Put a scratching post right next to the sofa. Use the 'target' trick to guide their paws to the post and reward them a lot when they use it. Make the post more interesting than the sofa (put catnip on it, for example). Bored? Training IS play. Dedicate those 10 minutes a day to reviewing tricks. You'll see how they stop seeking negative attention (meowing, destruction) because they already have your positive attention.",
              },
              {
                heading: "Final tip: Enjoy the process",
                body: "Don't seek perfection. Seek connection. You'll see how your cat starts looking for you to 'work' (play), how they look you in the eyes waiting for instructions and how their personality shines. A trained cat is a confident, happy and much more affectionate cat. Go for it! Your 'sofa tiger' has a lot of hidden potential.",
              }
            ],
          },
          {
            slug: "guia-paseos-correa",
            title: "Feline Walks: How to teach your cat to walk on a leash (without stress)",
            intro: "Taking your cat for a walk may sound strange, but it's a fantastic way for them to enjoy the outdoors safely. It also helps them stay calmer during vet visits or trips. The key is not force, but patience and treats.",
            sections: [
              {
                heading: "Before starting",
                body: "Make sure your cat has all their vaccines up to date and carries a microchip. Safety comes first.",
              },
              {
                heading: "Step 1: Positive presentation (The harness is a friend)",
                body: "Don't put the harness on all at once. We want them to associate it with good things. Scent phase: Leave the harness and leash near their bed or food bowl for a few days. Let them get used to seeing and smelling them while they eat or sleep. Positive association: Hold the harness in your hand, let them smell it and give them a rich treat. Gently bring it close to their body without putting it on, keep giving treats.",
              },
              {
                heading: "Step 2: First fitting (Inside the house)",
                body: "Now let's try how it fits. Gently place the harness over their shoulders and chest. Give treats constantly while they smell and touch it. Quickly fasten the harness. Golden rule: Two fingers should fit between the harness and the cat's body (not too tight, not too loose). Leave it on for only 1 or 2 minutes at first. Play with them or give them wet food to distract them. Take it off before they get annoyed or try to remove it. Repeat this daily, increasing the time little by little if they seem relaxed.",
              },
              {
                heading: "Step 3: The 'ghost' leash",
                body: "Once they tolerate the harness, we add the leash. Connect the leash to the harness inside the house. Let the leash drag on the floor while your cat plays or explores. Watch that it doesn't get caught on furniture or chair legs. Do this for several days until they completely ignore the weight of the dragging leash.",
              },
              {
                heading: "Step 4: You take charge (No pulling)",
                body: "Now it's your turn to hold the leash. Gently take the leash and follow your cat around the house. Keep the leash loose. Don't pull it. Just accompany them. If they stop, wait. If they come to you, reward and praise! The goal is for them to understand that the leash doesn't hurt or restrict, but is a bond with you.",
              },
              {
                heading: "Step 5: Gentle guidance and direction",
                body: "When they already walk calmly with the leash in hand, start guiding them. Use a sweet, soft voice to invite them to follow you. Throw a treat a few steps ahead. While they eat it, you also move forward. If they pull in another direction, don't jerk. Maintain a very gentle and constant tension on the leash. As soon as the cat yields and looks at you or takes a step in your direction, immediately loosen the leash and reward. They will learn that 'yielding to pressure = freedom and reward'.",
              },
              {
                heading: "Step 6: The great exit (Outdoors)",
                body: "Cats can be very frightened by outdoor noises and smells. Start in a quiet, enclosed place (an inner courtyard or safe garden). Sit on the ground with them. Let them explore at their own pace. At first, just follow them. Don't try to set a route. If you see they are afraid (crouching, trying to escape), go back home. Don't force them. The walk should be fun, not a nightmare.",
              },
              {
                heading: "Important Safety Rules",
                body: "Never leave them alone: Never tie the leash to something and walk away. They could get tangled, hurt themselves or be defenseless against a dog or other danger. The door is a risk zone: Put the harness on away from the exit door. Take them out in your arms until outside. If you do it near the door, they will learn to try to escape every time you open it. Ignore tantrums: If they meow or complain to go out, ignore them. Only put the harness on and go out when they are calm. This teaches them that calm is the key to going out. Respect their limits: If your cat is very scared, don't insist. There are many ways to enrich their life inside the house (toys, scratching posts, window perches). With love and consistency, your cat might come to enjoy their walks as much as you do. Enjoy the adventure!",
              }
            ],
          },
          {
            slug: "clicker-training",
            title: "Clicker training for cats",
            intro: "Contrary to popular myth, cats are perfectly trainable with positive reinforcement. Clicker training not only teaches tricks: it strengthens the bond, stimulates mentally and reduces behavioral problems.",
            sections: [
              {
                heading: "How the clicker works",
                body: "The click marks the exact moment of the correct behavior, and is always followed by a reward. The cat learns that that specific sound predicts a reward, which motivates them to repeat the behavior. Timing precision is key.",
              },
              {
                heading: "Where to start",
                body: "First 'charge' the clicker: click and give reward 10 times in a row without asking for anything. Then start with simple behaviors the cat already does naturally: sitting, touching your hand with their nose. Sessions of 2-5 minutes, 2-3 times a day.",
              },
              {
                heading: "More advanced tricks",
                body: "Once the basics are mastered, you can teach: give paw, spin, jump obstacles, voluntarily enter the carrier, or even use communication buttons. There is no limit if sessions are short and positive.",
              },
            ],
          },
        ],
      },
      {
        slug: "bienestar-felino",
        label: "Wellness",
        topics: [
          {
            slug: "guia-dolor-silencioso",
            title: "The Silent Pain: How to know if your cat is suffering and how to help",
            intro: "Cats are masters of disguise and hide their pain by instinct to not appear vulnerable. Learning to read their subtle signals is fundamental to being their best ally and preventing their health from deteriorating without us noticing.",
            sections: [
              {
                heading: "1. Subtle clues of pain",
                body: "Forget crying or limping; feline pain hides in behavioral changes: they hide more (under the bed or in closets), change their mood becoming irritable or unusually 'clingy', and stop grooming (dull or matted coat). They may also excessively lick a specific area, adopt a tense 'loaf' posture with their head low, or stop jumping to places they used to frequent due to joint pain.",
              },
              {
                heading: "2. The most common pains",
                body: "Identifying the type helps with diagnosis: Arthritis is common in those over 7 years old (they stop playing or climbing to high places); mouth pain (gingivostomatitis or broken teeth) causes drooling, bad odor or stopping eating; internal pain (cystitis, kidney or pancreatitis) generates deep malaise and depression; and nerve pain (as in diabetes) can cause pain from simple skin touch.",
              },
              {
                heading: "3. Multimodal Veterinary Treatment",
                body: "Modern treatment uses several tools: safe medications such as specific anti-inflammatories, analgesics (buprenorphine) or nerve modulators (gabapentin). It is complemented with therapies such as acupuncture, therapeutic laser or physical rehabilitation. In surgeries, local blocks are used. WARNING: Never use human ibuprofen or paracetamol, they are lethal to cats!",
              },
              {
                heading: "4. Your role at home: Environmental Management",
                body: "Adapt the environment: install ramps or steps to get on sofas, use low-sided litter boxes and orthopedic beds. Weight control is crucial to not overload joints. Also, reduce stress by maintaining quiet routines and using pheromones if necessary, as stress worsens pain perception.",
              },
              {
                heading: "5. Special Cases: Age and Status",
                body: "In kittens, be very careful with doses due to their maturing organs. In older cats with kidney or liver problems, doses must be carefully adjusted. In pregnant or nursing queens, only the vet should decide the treatment, as many analgesics pass to fetuses or milk.",
              },
              {
                heading: "Don't wait for them to complain",
                body: "A cat that doesn't complain doesn't mean it isn't suffering. Untreated chronic pain worsens quality of life and accelerates aging. Before any change in routine, appetite or character, consult the vet. With your loving observation and medical help, your cat can live without suffering even with chronic diseases.",
              },
            ],
          },
        ],
      },
      {
        slug: "estres",
        label: "Stress",
        topics: [
          {
            slug: "guia-estres-ansiedad",
            title: "Stress in Cats: Complete guide to understanding and helping them",
            intro: "We know more and more about feline behavior, and one of the main keys is stress. Many health and behavior problems we see at home have their root here. Understanding what your cat is going through is the first step to improving their quality of life.",
            sections: [
              {
                heading: "1. What is stress really?",
                body: "Stress is not always 'bad'. It is a natural body reaction that prepares the cat to adapt to changes (a move, a trip, the arrival of a baby). Positive stress: Helps them react and adapt. Negative stress: Occurs when the situation is too intense or lasts too long. If the cat cannot adapt, stress becomes chronic and can lead to anxiety. Key difference: Fear vs. Anxiety. Fear: Immediate reaction to a real danger. The heart accelerates and the cat is ready to flee or defend. It is useful for survival. Anxiety: The cat feels fear about something that is not dangerous or that they cannot control. They don't know how to resolve the situation, so they live in constant tension.",
              },
              {
                heading: "2. Why are some cats more sensitive?",
                body: "Not all cats react the same. Their stress tolerance level depends on two main factors: A. Genetics and Character: Some cats are naturally more confident; others, more timid. Factors such as breed, sex and genetic heritage influence. An insecure cat will always need a quieter and more predictable environment. B. Early Socialization (The critical window): The first 2 to 7 weeks of life are decisive. If there was loving human contact: The kitten will learn that people are safe. They will be more sociable and resilient to stress. If contact was lacking or there were negative experiences: It is very likely they will develop distrust and fear of humans or new stimuli when they are adults. The environment matters: Kittens raised in environments rich in stimuli (sounds, textures, games) are usually more adaptable adults.",
              },
              {
                heading: "3. What causes stress in my cat?",
                body: "Cats need to feel they have control of their environment. When they lose that control, stress appears. Social factors: Changes in daily routine. Arrival of new people, babies or other pets. Arguments or shouting at home. Punishments or irregular attention (sometimes a lot, sometimes nothing). Physical factors: Moves or renovations. Insufficient space or poor organization (e.g. litter box near food). Competition for resources (if there are multiple cats and few bowls or litter boxes).",
              },
              {
                heading: "4. Warning Signs: How do I know if my cat is stressed?",
                body: "Cats are experts at hiding pain and discomfort. You must be a detective. Immediate Physical Symptoms: Accelerated breathing or panting. Very dilated pupils. Tremors or excessive salivation. Occasional vomiting or diarrhea (e.g. before traveling). Behavior Changes: Posture: Ears back, tail low, tense body. Hiding: Spends a lot of time hidden or under furniture. Aggressiveness: Growls, hisses or attacks without apparent reason. Extreme vigilance: Doesn't relax, always 'on guard'. Signs of Chronic Stress (Long-term): If stress is not treated, more serious problems appear: Compulsive grooming: Licks so much they become hairless (psychogenic alopecia). Elimination problems: Urinates or defecates outside the litter box (territorial marking or anxiety). Sleep changes: Sleeps little, badly, or always in tense positions (not on their back or relaxed on their side). Eating changes: Eats excessively (anxiety) or stops eating. Repetitive behaviors: Chases their tail, meows constantly or walks aimlessly.",
              },
              {
                heading: "5. The impact on Physical Health",
                body: "Stress is not just 'in the mind'; it sickens the body. Feline Idiopathic Cystitis: Bladder inflammation without bacterial infection, directly linked to stress. Digestive problems: Gastritis, chronic vomiting or diarrhea. Skin problems: Wounds from excessive licking. Obesity and Diabetes: Sometimes, owners give food to 'comfort' the cat, which leads to overweight. Lowered defenses: Stressed kittens or older cats get sick more easily (flu, infections). Important: Before assuming it's stress, go to the vet. Problems like hyperthyroidism, joint pain or tumors can mimic stress or anxiety symptoms.",
              },
              {
                heading: "6. How to help your cat? (Treatment and Management)",
                body: "The goal is to return the feeling of safety and control. A. Behavior Therapy (The most important): Identify the cause of stress and modify the environment. Respect their routines. Provide high places and safe hiding spots. Play with them daily to release tension. B. Environmental Aids: Pheromones: Chemical substances (like Feliway) that mimic feline facial pheromones, transmitting a 'calm' and 'familiarity' message. They help reduce marking and anxiety. Environmental enrichment: Scratching posts, interactive toys and access to safe windows. C. Anti-Stress Diet: There are specific diets or supplements that help: Tryptophan: An amino acid precursor of serotonin (the happiness hormone). Milk derivatives: Hydrolyzed proteins with a natural calming effect. These nutrients help regulate mood, improve digestion and care for the skin. D. Medication: In severe cases of anxiety, the behavioral vet may prescribe drugs. Never medicate your cat on your own. Medications should always be a complement to behavior therapy, not the only solution.",
              },
              {
                heading: "Conclusion",
                body: "Stress in cats is invisible but powerful. A calm cat is a healthy cat. Observe their small changes, respect their need for control and, if you see warning signs, seek professional help. Your understanding can completely change their well-being.",
              }
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "alimentacion",
    label: "Nutrition",
    emoji: "",
    color: "#d4853a",
    bg: "#fff3e6",
    description: "Nutrition, diets and what they cannot eat",
    subcategories: [
      {
        slug: "dietas",
        label: "Types of diet",
        topics: [
          {
            slug: "comida-humeda-vs-seca",
            title: "Wet food vs. dry kibble",
            intro: "This is one of the most frequent and debated questions among cat owners. The answer matters because cats have a particular relationship with water that makes the type of food directly impact their kidney health.",
            sections: [
              {
                heading: "The cat's nature and water",
                body: "Cats evolved in arid environments and get most of their water from their prey. Their thirst is 'calibrated' for food with 70% humidity. Dry kibble has only 10%, which can lead to chronic dehydration and kidney and urinary problems.",
              },
              {
                heading: "Advantages of wet food",
                body: "Greater hydration, greater satiety with fewer calories, more similar to the natural diet, better for cats with a tendency to urinary or kidney problems. Most veterinarians recommend it as the main food.",
              },
              {
                heading: "The role of dry kibble",
                body: "It's not bad, but it shouldn't be the only food. It can be useful as a complement, for dispenser toys or as a snack. Choose kibble with a high percentage of animal protein (not vegetable) and without cereals as the first ingredient.",
              },
            ],
          },
          {
            slug: "dieta-barf",
            title: "BARF diet for cats",
            intro: "The BARF diet (Biologically Appropriate Raw Food) is based on feeding the cat with raw meat, meaty bones and organs, imitating the diet of their wild ancestors. It has passionate defenders and detractors with solid arguments.",
            sections: [
              {
                heading: "BARF fundamentals",
                body: "The ideal BARF diet for a cat includes approximately 70% lean meat, 10% meaty bones (never cooked), 10% organs (liver, heart) and the remaining 10% other tissues. Requires careful supplementation with taurine, calcium and vitamins.",
              },
              {
                heading: "Reported benefits",
                body: "Improved coat, less feces production, better hydration, cleaner teeth and more energy are the most cited benefits by those who practice it. Some studies suggest a lower risk of obesity.",
              },
              {
                heading: "Risks to consider",
                body: "Bacterial contamination (Salmonella, Listeria), nutritional imbalances if not formulated correctly, and choking risk with bones. Not recommended for immunocompromised cats, those in cancer treatment or older cats with compromised digestive systems.",
              },
            ],
          },
        ],
      },
      {
        slug: "prohibidos",
        label: "Forbidden foods",
        topics: [
          {
            slug: "toxicos-comunes",
            title: "Toxic foods for cats",
            intro: "Many foods completely safe for humans are dangerous or lethal to cats. Knowing this list can save your companion's life.",
            sections: [
              {
                heading: "Extreme danger: severe toxins",
                body: "Onion, garlic, leek and chives (in all forms: raw, cooked or powdered) destroy red blood cells. Chocolate and coffee contain theobromine and caffeine that can cause seizures and death. Grapes and raisins cause acute kidney failure for reasons still unknown.",
              },
              {
                heading: "Moderate danger",
                body: "Cow's milk causes diarrhea in most adult cats, which are lactose intolerant. Avocado contains persin, toxic to many animals. Alcohol in any amount is dangerous. Macadamia nuts can cause weakness and fever.",
              },
              {
                heading: "What they can eat as a treat",
                body: "Small amounts of cooked boneless chicken or turkey, cooked salmon or tuna (not canned in oil with salt), cooked carrot, pumpkin, blueberries and cucumber are safe options as an occasional snack.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "juego",
    label: "Play",
    emoji: "",
    color: "#9b6bb5",
    bg: "#f3eef8",
    description: "Stimulation, toys and enrichment",
    subcategories: [
      {
        slug: "importancia",
        label: "Why it is vital",
        topics: [
          {
            slug: "juego-cachorros",
            title: "Play in kittens: the foundation of everything",
            intro: "The first six months of a cat's life are a critical development period. What they learn during play at this stage will largely determine how they relate to humans and other animals for the rest of their life.",
            sections: [
              {
                heading: "The socialization window",
                body: "Between 2 and 9 weeks of age, the cat learns what is normal in their world. A kitten that interacts with people, other cats, household noises and varied experiences during this period will be a more confident and adaptable adult.",
              },
              {
                heading: "The most common mistake: hands as toys",
                body: "Using hands or feet to play with a kitten seems harmless, but teaches that human skin is valid prey. When that kitten weighs 5 kg, the bites and scratches will be painful and the behavior difficult to correct. Always use toys with distance.",
              },
              {
                heading: "Play as problem prevention",
                body: "A cat that doesn't play enough channels their hunting energy into problematic behaviors: attacking ankles, destroying objects, redirected aggression. 2 play sessions of 15 minutes a day, especially before sleeping, are the best antidote.",
              },
            ],
          },
        ],
      },
      {
        slug: "juguetes",
        label: "Toys",
        topics: [
          {
            slug: "canas-y-plumas",
            title: "Wands and prey toys",
            intro: "Wands with feathers, mice or hanging worms are the most effective toys because they allow simulating the complete hunting sequence. They are irreplaceable in any cat's repertoire.",
            sections: [
              {
                heading: "Why they work so well",
                body: "They activate the hunting instinct in its entirety: the irregular movement mimics that of real prey. The cat can stalk, chase, catch and 'kill'. This complete sequence releases endorphins and is deeply satisfying.",
              },
              {
                heading: "How to move them correctly",
                body: "The most common mistake is moving them too fast and without stopping. Real prey stops, hides, moves at unpredictable angles. Simulate that: pause, hide it behind a cushion, make it emerge suddenly, let it move slowly.",
              },
              {
                heading: "Ending the session well",
                body: "Always end by allowing the cat to 'catch' and 'kill' the toy several times at the end. A cat that never catches the prey gets frustrated. After playing, a small snack completes the natural cycle: hunt -> eat -> groom -> sleep.",
              },
            ],
          },
          {
            slug: "puzzles-de-comida",
            title: "Food puzzles and intelligence",
            intro: "Food puzzles are one of the most undervalued enrichments. In nature, a cat spends between 6 and 8 hours hunting. A conventional feeder resolves that need in 30 seconds, leaving the cat without mental stimulation.",
            sections: [
              {
                heading: "Proven benefits",
                body: "They reduce anxiety and boredom, slow down intake (preventing vomiting from eating too fast), stimulate cognitively, encourage movement and can reduce obesity.",
              },
              {
                heading: "How to start",
                body: "Start with very easy puzzles: a tray with compartments, a simple dispenser ball. If the puzzle is too difficult from the start, the cat will get frustrated and reject it. Increase difficulty progressively over weeks.",
              },
              {
                heading: "Homemade puzzles",
                body: "You don't need to buy anything: a cardboard box with holes, an ice cube tray with kibble, a plastic bottle with small holes, or hiding treats under cups are effective and free puzzles.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "etapas",
    label: "Life stages",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Kitten, adult, senior and their needs",
    subcategories: [
      {
        slug: "genetica-felina",
        label: "Genetics and Heritage",
        topics: [
          {
            slug: "guia-genetica-colores",
            title: "Feline Genetics: Understanding colors and inheritance (without complications)",
            intro: "Cat genetics is not magic, it's science. Understanding the basics will help you understand why your cat has that specific color and how inheritance works in their coat, leaving aside ancient myths to focus on current science.",
            sections: [
              {
                heading: "1. Debunking Darwin's myth",
                body: "For a long time it was believed that domestication 'created' new varieties by itself, but this is false. Humans don't create genes, we select them. In nature, strange mutations are usually eliminated if they don't help survival, but at home we protect variations like long hair or certain colors for aesthetics. All current variety already potentially existed in wild ancestors; we have only accelerated their appearance through selective breeding.",
              },
              {
                heading: "2. How do colors work? (The basics)",
                body: "Characters depend on genes and their versions called 'alleles'. Using the example of Black (D) and Blue/Grey (d): DD (Homozygous Dominant) results in a Black cat; Dd (Heterozygous) results in a Black cat visually but 'carrier' of the blue gene; dd (Homozygous Recessive) results in a Blue cat. The golden rule is that black dominates over blue: if there is at least one 'D', the cat will be black. To be blue, they must receive the 'd' gene from both parents.",
              },
              {
                heading: "3. Importance of responsible selection",
                body: "Unlike dogs, color genetics in cats is extremely specialized and distinctive among breeds. International judges and geneticists recommend following strict breeding rules to avoid unexpected results or health problems. Not all color crosses are advisable, as some can lead to unwanted patterns or breed standard issues.",
              },
              {
                heading: "4. Quick guide to Recommended Crosses (FIFE)",
                body: "The International Feline Federation (FIFE) suggests avoiding random crosses between very different color varieties. The basic principles are: 1. Cross within the same breed (e.g. Persians with Persians). 2. Respect hair length (e for short hair, l for long hair). 3. Avoid 'forbidden' crosses: if in the official tables a letter does not appear for a specific combination, it is better to abstain due to unpredictable or unsatisfactory results.",
              },
              {
                heading: "5. Curiosity: Do cats see colors?",
                body: "Yes, but not like us. They have better color vision than previously believed, but distinguish fewer shades than humans. It is ironic that, although they see fewer colors, humans have created a variety of pigments and distributions in their coat much richer and more complex than they themselves can appreciate.",
              },
              {
                heading: "Conclusion for the Breeder or Owner",
                body: "Genetics is probability: if you cross two black carriers of blue (Dd x Dd), you will have black and some blue offspring. If you cross two blues (dd x dd), all will be blue. If you cross a pure black (DD) with a blue (dd), all will be black but carriers. Knowing these basics allows predicting litters and breeding ethically, responsibly and respecting health standards.",
              }
            ],
          },
        ],
      },
      {
        slug: "reproduccion-felina",
        label: "Feline Reproduction",
        topics: [
          {
            slug: "guia-gestacion-gatas",
            title: "Pregnancy in queens: Simple and natural explanation",
            intro: "Feline gestation is a precise dance between physical signals, hormones and embryonic development. Understanding each stage helps us better respect and care for our queens during this natural process.",
            sections: [
              {
                heading: "How does a queen's cycle work?",
                body: "The queen is like a 'seasonal clock' that goes into heat when there are more hours of daylight (spring-summer). Mating is the key: the queen does not ovulate on her own, but needs the physical stimulus of mounting to release the LH hormone and for her eggs to leave the ovaries between 24 and 50 hours later. If there is no fertile mating, she may have a 'pseudogestation', where her body acts as if she were pregnant for approximately 45 days, even though there are no kittens.",
              },
              {
                heading: "The pregnancy journey, step by step",
                body: "Chronology after mating: From 0 to 50 hours mounting stimulates ovulation. At +30 hours eggs are fertilized in the tubes. At 5-6 days embryos (morulae) reach the uterus. At 8-10 days they become blastocysts. At 12-13 days implantation occurs in the uterine wall (embryos travel between the horns to distribute evenly). At 28-30 days the fetal stage begins with organ formation. Finally, between 64 and 67 days, kittens are born.",
              },
              {
                heading: "Hormones: The conductors",
                body: "The body uses key messengers: LH (triggers ovulation at the start); Progesterone P4 (keeps the uterus calm, rises at the start and slowly drops after day 30); Prolactin (helps maintain corpus luteum, increases from day 25-30 being key in the second half); Relaxin (softens pelvic tissues and helps maintain pregnancy, rises from day 20-30 only in pregnant ones); and Estradiol (prepares uterus and mammary glands, rising at the end).",
              },
              {
                heading: "Who produces progesterone at the end?",
                body: "There is a scientific debate: Theory A says ovaries are essential until the end, while Theory B indicates the placenta takes over in the second half. What is certain is that if surgery is performed before day 45-50 the pregnancy is interrupted, but after day 50 it can continue, which demonstrates that the feline placenta has the capacity to produce progesterone in the last weeks. It is teamwork with prolactin as coordinator.",
              },
              {
                heading: "Quick facts to remember",
                body: "Pregnancy duration: 64-67 days (approx. 9 weeks). Litter size: 1 to 5 kittens (average 3-4). Weight at birth: 85-105 grams. The placenta is 'zonary' (belt-shaped) and 'endotheliochorial' (very invasive), which explains why queens cannot easily donate blood.",
              },
              {
                heading: "Why does it matter to know this?",
                body: "For responsible breeders it allows giving better prenatal care. For veterinarians, knowing hormones allows diagnosing problems or ethically interrupting pregnancies. For owners, it is vital to know that stress or sudden changes can directly affect hormones and, consequently, gestation success.",
              }
            ],
          },
        ],
      },
      {
        slug: "gatito",
        label: "Kitten (0-6 months)",
        topics: [
          {
            slug: "primeras-semanas",
            title: "The first weeks of life",
            intro: "The first two months of a cat's life are extraordinarily intense. In that time, a completely dependent and defenseless being becomes an agile and curious animal. Understanding this stage is fundamental for any breeder or adopter.",
            sections: [
              {
                heading: "0-2 weeks: neonatal period",
                body: "Kittens are born blind, deaf and unable to regulate their temperature. They depend completely on the mother for feeding (every 2 hours), warming and stimulating urination and defecation. Their only functional sense at birth is smell.",
              },
              {
                heading: "2-7 weeks: primary socialization",
                body: "Eyes open between 10 and 16 days. In this period the nervous system develops at maximum speed. Positive experiences with people, sounds and varied environments during these weeks determine adult personality.",
              },
              {
                heading: "7-12 weeks: progressive independence",
                body: "Weaning is completed around 8 weeks. It is the ideal time for adoption: mature enough to separate from the mother, but in the full window of socialization with humans. Separating before 8 weeks increases the risk of behavioral problems.",
              },
            ],
          },
        ],
      },
      {
        slug: "senior",
        label: "Senior (10+ years)",
        topics: [
          {
            slug: "cuidados-senior",
            title: "Senior cat care",
            intro: "A 10-year-old cat is approximately equivalent to a 56-year-old person. From 15 years old, to a person over 76. Their needs change significantly and deserve adaptations in their environment and medical routine.",
            sections: [
              {
                heading: "Expected physical changes",
                body: "Less joint flexibility, less shiny coat, possible loss of muscle mass, changes in sleep patterns, reduced sensory acuity and greater vulnerability to chronic diseases. Not all changes are pathological: some are simply normal aging.",
              },
              {
                heading: "Environment adaptations",
                body: "Ramps or steps to access high places, low-entry litter box, elevated food and water bowls to reduce cervical tension, warm and accessible rest areas. Subtle changes in the environment make a big difference in their quality of life.",
              },
              {
                heading: "Intensified medical monitoring",
                body: "From 10 years old, check-ups should be semiannual and always include complete blood tests and thyroid profile. Early detection of hyperthyroidism, kidney disease or diabetes can add years of quality life.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "emergencia",
    label: "Emergency",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Kitten, adult, senior and their needs",
    subcategories: [
      {
        slug: "emergencias-felinas",
        label: "First Aid",
        topics: [
          {
            slug: "guia-primeros-auxilios-gatitos",
            title: "First Aid for Kittens: What to do in an emergency",
            intro: "First aid does not replace the veterinarian, but it can save your kitten's life while you get to the clinic. The goal is to prevent them from getting worse, stabilize them and transport them safely.",
            sections: [
              {
                heading: "1. Calm and Safety",
                body: "Your safety comes first; a kitten in pain can bite or scratch. Keep your face away from their claws and mouth. Do not use a muzzle, as it is contraindicated in cats with breathing problems or vomiting. The 'blanket' technique is ideal: gently wrap them in a towel leaving only the head out to calm and handle them safely.",
              },
              {
                heading: "2. Quick Assessment (ABCDE Rule)",
                body: "Before moving them, check: A (Airways): That there are no blockages in nose or mouth. B (Breathing): Observe if the chest moves. C (Circulation): Press bleeding with clean gauze. D (Pain/Immobilization): Do not move abruptly if you suspect fractures. E (Exposure): Protect open wounds with clean cloths.",
              },
              {
                heading: "3. Emergencies in Kittens",
                body: "Babies are very fragile against two dangers: 1. Hypoglycemia (Sugar drop): If they present extreme weakness or pale gums, apply honey or sugar under their tongue or on gums. 2. Hypothermia: If the kitten is cold to the touch, wrap them with your body heat (under your clothes) or a warm water bottle wrapped in a towel (never direct).",
              },
              {
                heading: "4. Safe Transport",
                body: "Always use a carrier or sturdy box with ventilation. If you suspect broken bones, minimize movement using a board or stiff towel as an improvised stretcher. During the trip, speak softly and keep the vehicle stable to reduce their stress.",
              },
              {
                heading: "5. Feline Emergency Kit",
                body: "Keep on hand: Emergency veterinary phone numbers, clean towels or blankets, sterile gauze, cane honey or glucose, medical adhesive tape and a ready carrier. Being prepared makes the difference in a critical situation.",
              },
              {
                heading: "Final Warnings",
                body: "Call the vet while heading to the clinic so they wait for you. NEVER medicate on your own with human drugs (paracetamol or ibuprofen), as they are lethal. Act fast: in an emergency, every minute counts to save their life.",
              },
            ],
          },
        ],
      }
    ],
  },
  {
    slug: "adopcion",
    label: "Adoption",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "How to adopt a cat",
    subcategories: [
      {
        slug: "bienvenida",
        label: "Welcome",
        topics: [
          {
            slug: "guia-bienvenida-cuidados",
            title: "Welcome home: how to care for your new cat from day one",
            intro: "Congratulations on the adoption! Welcoming a cat is a wonderful experience, but it also involves responsibility. The first days are crucial for their adaptation. Here you have everything you need to ensure their health, well-being and a happy coexistence.",
            sections: [
              {
                heading: "1. The First Days: Surveillance and Adaptation",
                body: "The change of environment generates stress, which can lower the cat's defenses. Vet visit: Take your cat to their new trusted clinic as soon as possible. Hand over all previous medical documentation (vaccines, deworming) and follow their instructions. What to observe: That they eat and drink normally, that they have energy according to their age, that stools are consistent (some initial soft stools due to diet change are normal, but there should be no persistent diarrhea) and absence of symptoms such as coughing, vomiting, mucus or eye discharge. If in doubt, consult your vet.",
              },
              {
                heading: "2. Preventive Health: Vaccines, Parasites and Sterilization",
                body: "Vaccination: Vaccines protect against serious diseases (such as panleukopenia, feline respiratory complex or leukemia). Follow the schedule indicated by your vet. The rabies vaccine, although not always legally mandatory for cats (depends on the region), is highly recommended. Deworming: It is fundamental for the cat's and your family's health (zoonosis). Internal: recommended every 3 months. External: vital if the cat goes out or has access to balconies/terraces. Sterilization: It is the most responsible and healthy decision. Benefits: avoids unwanted litters, reduces marking, decreases fights and prevents serious diseases (mammary tumors, pyometra). Myths: It doesn't change their personality or make them 'lazy'. Sterilize your cat, whether male or female, indoor or outdoor.",
              },
              {
                heading: "3. Nutrition and Hydration",
                body: "Appropriate food: Use quality dry kibble adapted to their age and physical condition. Avoid giving them homemade food or human scraps. Treats: Use them in moderation to avoid obesity. Fresh water: Fundamental, place several waterers around the house, away from food and litter box. Some cats prefer moving fountains. Incorporating wet food helps hydration. Forbidden: Cow's milk (most adult cats are lactose intolerant). Natural yogurt or unsalted cheese can be given as an occasional treat, but are not necessary.",
              },
              {
                heading: "4. Hygiene and Physical Care",
                body: "Cats need your help in certain aspects. Brushing: Short hair once a week (daily during shedding); long hair daily to prevent tangles and hairballs. If they expel hairballs with difficulty, consult about malt pastes. Nails: Cut only the transparent tip, avoiding the pink part (vascularized). Baths: Generally not necessary, only if very dirty or by medical indication.",
              },
              {
                heading: "5. The Litter Box: Golden Rules",
                body: "A cat that doesn't use the litter box usually expresses a medical or stress problem. Quantity: N+1 rule (number of cats + 1 box). Location: Quiet, accessible places, away from noises (washing machines) and their food. Type: Many don't like closed ones; try with an open and large one. Cleaning: Remove waste daily and wash the box regularly with water and neutral soap (avoid bleach or ammonia). Litter: They prefer unscented litter with fine texture.",
              },
              {
                heading: "6. Behavior and Environmental Enrichment",
                body: "Language: Erect tail is friendly greeting; tail moving fast is irritation; ears back indicate fear. Purring can be well-being, pain or stress. Play: Dedicate 15-20 minutes daily to simulated hunting (wands, balls). Avoid using your hands or feet. Scratching posts: Provide stable, tall scratching posts of attractive materials (sisal, wood). Never punish for scratching furniture; redirect and reward. Verticality: They need high places to observe and safe refuges to hide. Respect their solitude.",
              },
              {
                heading: "7. Specific Tips by Age",
                body: "KITTEN: Socialization (2-8 weeks) is the key stage for accepting human contact and vet visits. Teach them what can be bitten. Get them used to the carrier by leaving it open at home. Protect cables and windows. ADULT: Patience, adaptation can take weeks. Use an acclimatization room upon arrival with all their resources. Introduce other animals very gradually. Keep fixed meal and play schedules.",
              },
              {
                heading: "8. Legal Aspects and Safety",
                body: "Microchip: It is mandatory and must have updated data (RIAC in Madrid). Accident Prevention: High-Rise Cat Syndrome. Install resistant mosquito nets on windows and balconies. A fall from height can be fatal; don't trust their 'ability' to land on their feet. Each cat is a world. Observe, respect their times and always consult your vet about sudden changes.",
              }
            ],
          },
        ],
      }
    ],
  },
  {
    slug: "razas",
    label: "Breeds",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Cat breeds",
    subcategories: [
      {
        slug: "razas-felinas",
        label: "Cat Breeds",
        topics: [
          {
            slug: "guia-completa-razas",
            title: "Complete Guide to Cat Breeds",
            intro: "The feline world is vast and fascinating. Although all cats share basic instincts, each breed has a unique personality, care needs and physical characteristics. This guide integrates historical registration with modern classifications from associations like TICA, CFA and FIFe, organized to help you understand what type of cat best fits your home. Note: Beyond breed, individual personality and early socialization play a fundamental role.",
            sections: [
              {
                heading: "1. The Historical Classics",
                body: "Ancient breeds with defined personalities: Abyssinian (Ethiopia/Egypt): Active, curious, 'dog-cat', needs lots of mental play. Siamese (Thailand): Extremely vocal, intelligent, demands constant attention. Persian (Iran): Calm, sweet, quiet; requires daily brushing and facial cleaning. Maine Coon (USA): The 'gentle giant', sociable, ideal for families with children; requires space. Bengal (USA): High energy, athletic, looks like a miniature leopard; needs intense daily stimulation.",
              },
              {
                heading: "2. Gentle Giants and Cold-Adapted",
                body: "Robust cats with dense coats. Maine Coon: One of the largest, stands out for its 'lynx tips' and soft meows. Norwegian Forest (Skogkatt): Natural climber with waterproof coat, independent but affectionate. Siberian: Famous for being hypoallergenic (produces less Fel d 1), agile and affectionate. Ragdoll: Large and muscular, docile temperament; 'collapses' like a ragdoll when picked up.",
              },
              {
                heading: "3. Short-haired Elegance and Athletic Body",
                body: "Low coat maintenance with lots of interaction. British Shorthair: Round face, compact and calm; doesn't like being carried much. Russian Blue: Silver coat and green eyes, shy with strangers but loyal. Burmese: Muscular and heavy, very people-oriented. Bombay: Looks like a miniature black panther, loves warmth and laps. Chartreux: Ancient French breed, silent and expert hunter with water-repellent coat.",
              },
              {
                heading: "4. Unique Mutations: Ears, Tails and Textures",
                body: "Exotic genetic characteristics. Scottish Fold: Ears folded forward, 'Buddha' position; requires joint review. Munchkin: Short legs, extroverted and curious. Sphynx: Hairless, sociable and seeks warmth; requires weekly baths. Devon Rex & Cornish Rex: Curly or wavy coat, mischievous and attached. American Curl: Ears backward. Manx & Japanese Bobtail: The first tailless and robust; the second with pompom tail, symbol of good luck.",
              },
              {
                heading: "5. Exotics and Few Units",
                body: "Less common breeds. Ocicat: Looks like a wild ocelot, trainable and sociable. Toyger: Tiger imitation, intelligent. Lykoi: The 'werewolf cat', werewolf appearance, curious and playful. Singapura: One of the smallest breeds, mischievous and loves heights. Korat: Thai silver-gray with heart on forehead, sensitive to noise and good luck charm.",
              },
              {
                heading: "Tips for Choosing Your Breed",
                body: "Activity Level: Couch companion (Persian) or athlete (Bengal)? Grooming Time: Daily brushing (Maine Coon) or low maintenance (Russian Blue)? Vocalization: If you prefer silence, avoid Siamese and opt for Ragdolls. Children and pets: Maine Coon and Birman are more tolerant. Allergies: None is 100% hypoallergenic, but Siberian and Russian Blue are usually better tolerated.",
              }
            ],
          },
        ],
      }
    ],
  },
  {
    slug: "adquisicion responsable",
    label: "Responsible acquisition",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "Cat breeds",
    subcategories: [
      {
        slug: "adquisicion chile",
        label: "Chile",
        topics: [
          {
            slug: "guia-adquisicion-responsable-chile",
            title: "Responsible Acquisition in Chile: Legal and Ethical Guide",
            intro: "If you have decided that a specific breed fits your lifestyle, it is fundamental to acquire it responsibly. In Chile, animal purchase is regulated by Law 21.020 (Ley Cholito), which protects animal welfare and requires responsible ownership. Buying a cat is not like buying an object; it is acquiring a living being with complex needs.",
            sections: [
              {
                heading: "1. Why choose a Registered Cattery?",
                body: "Ethical catteries preserve the breed, care for genetic health and socialize kittens. The safest way to identify them is to verify that they are registered in RENAGACH (National Cat Registry of Chile), representative of federations like WCF and TICA. Advantages of buying with pedigree: Genetic Certification (guarantees the breed), Health (genetic tests to rule out diseases like PKD in Persians or HCM in Maine Coons) and Socialization (they grow in a family environment, not in cages).",
              },
              {
                heading: "Reference Directory (Ethical Catteries in Chile)",
                body: "Reference list (always verify records): Maine Coon: Colitas Arriba, Nahuelhuen (Santiago/La Reina). Persian / Himalayan: GatyKey Cattery, Viestmaden Cattery (La Florida). Ragdoll: Reflejo de Luna (docile temperament). Somali: Per-Bast Cattery (only specialized one). Sphynx: Ti Voglio Bene, The Kittens House. British Shorthair: Von & Von Cattery (robust structure).",
              },
              {
                heading: "2. Legal Framework: Your Rights and Duties (Law 21.020)",
                body: "For the transaction to be legal, the cattery must comply with: Mandatory Microchip (implanted and registered) and Purchase Agreement. The contract must detail health guarantees (negative FeLV/FIV tests), sterilization commitment and return clause. Your Responsibility: Once the purchase is made, you must register the animal in the National Pet Registry if the data were not updated immediately.",
              },
              {
                heading: "3. Checklist: How to detect an Ethical Cattery?",
                body: "Before paying, verify: Do they allow visits? They must be clean and in human contact. Delivery age? NEVER accept a kitten under 12 weeks (3 months). Complete documentation? You must receive Birth Certificate/Preliminary Pedigree, up-to-date vaccine card (signed by a licensed vet) and deworming certificate. Health transparency? A good breeder will ask about your situation to ensure a good home.",
              },
              {
                heading: "4. Legal Import of Exotic Breeds",
                body: "If you are looking for breeds like Lykoi, Toyger or Bengal with specific lines, the process is strict: meet SAG (Agricultural and Livestock Service) requirements, health certificates from the country of origin and possible quarantines. It is recommended to get advice from a specialized pet transport agency to avoid customs retention.",
              },
              {
                heading: "Beware of 'Cat Factories'!",
                body: "Avoid buying at street fairs, informal markets or social media ads without a visible physical address. Be wary of places with multiple breeds available immediately. These places prioritize profit over welfare, resulting in animals with chronic health problems and short lives. Your conscious choice helps eradicate this mistreatment.",
              }
            ],
          },
        ],
      },
      {
        slug: "adquisicion argentina",
        label: "Argentina",
        topics: [
          {
            slug: "guia-adquisicion-responsable-argentina",
            title: "Responsible Acquisition in Argentina: Legal and Ethical Guide",
            intro: "If you have decided that a specific breed fits your lifestyle, it is fundamental to acquire it responsibly. In Argentina, animal ownership is protected by National Law 27.592 (Ley Alica) and various ordinances (such as Law 4040 in CABA), which recognize animals as sentient beings. Buying a cat is not just any commercial transaction; it is incorporating a family member.",
            sections: [
              {
                heading: "1. Why choose a Registered Cattery?",
                body: "Ethical catteries in Argentina preserve the breed, care for genetic health and socialize kittens. The main entities are FAAC (Argentine Federation of Cat Enthusiasts), affiliated with WCF, and local TICA or FIFe clubs. Advantages of buying with pedigree: Genetic Certification (guarantees registered ancestors), Preventive Health (genetic tests for PKD or HCM) and Early Socialization (human stimuli that prevent behavioral problems).",
              },
              {
                heading: "2. Legal Framework: Your Rights and Duties",
                body: "For the transaction to be legal in Argentina, the cattery must comply with: Identification (Microchip), mandatory in CABA, Cordoba and Santa Fe among others. Purchase Agreement with animal data, health guarantees, return clause and sterilization commitment. Vaccination Card: Must be signed by a licensed Medical Veterinarian, with up-to-date feline triple vaccines (and quintuple if applicable) according to age.",
              },
              {
                heading: "3. Checklist: How to detect an Ethical Cattery in Argentina?",
                body: "Before paying, verify: Do they allow in-person visits? You must know the cattery and see the mother; be wary of deliveries at shopping centers. Delivery age? NEVER before 12 weeks (3 months). Complete documentation? You must receive Birth Certificate/Pedigree, vaccine card and invoice or receipt. Buyer interview? A good breeder will ask about window nets and your previous experience.",
              },
              {
                heading: "4. Legal Import of Exotic Breeds",
                body: "If you are looking for breeds not usually bred (Lykoi, Toyger), the process is regulated by SENASA (National Service for Agrifood Health and Quality). Requirements: Zoosanitary certificate of origin, rabies vaccination and possible quarantines. It is recommended to hire a specialized pet transport agency; bringing a cat on your own can result in retention or severe fines.",
              },
              {
                heading: "Beware of 'Cat Factories' and Scams!",
                body: "DON'T BUY IF: They ask for deposits in advance without showing the animal (common scam; use real-time video calls). They sell at fairs or squares: animals without health control usually die soon ('week cat'). They have 'infinite stock' of multiple breeds immediately available. Suspiciously low prices: ethical breeding involves high costs in health and premium food that a low price cannot cover.",
              },
              {
                heading: "Conclusion",
                body: "Acquiring a breed cat in Argentina is a legal and moral responsibility. By choosing a cattery registered with FAAC or international federations, you are financing breed preservation and animal welfare, and saying 'no' to the mistreatment of clandestine factories.",
              }
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "historia",
    label: "History, Origin and expansion",
    emoji: "",
    color: "#9b6bb5",
    bg: "#f3eef8",
    description: "Stimulation, toys and enrichment",
    subcategories: [
      {
        slug: "historia-felina",
        label: "The Heart of Origin",
        topics: [
          {
            slug: "origen-encuentro-nilo",
            title: "Egypt, on the Nile",
            intro: "The history of the domestic cat began about 9,000 years ago in the Nile Valley, Egypt. Although there are many species of felines, all our current cats (even the exotic ones) come from a single subspecies: the North African wild cat or Felis lybica. The 'spark' with humans was not planned, but an association of convenience:",
            sections: [
              {
                heading: "The problem, the solution and the pact",
                body: "The problem: Egyptians depended on agriculture and stored grain in large silos. These warehouses attracted rats and mice. The solution: Cats approached villages attracted by the abundance of rodents. The pact: Humans gladly accepted this 'pest control' service and thus began a symbiotic relationship of mutual benefit.",
              },
              {
                heading: "From Hunters to Gods",
                body: "Over time, the cat went from being a simple granary guardian to a sacred member of the family. The Egyptians even deified them, relating them to the goddess Bastet (which represented sweetness and protection) and the sun god, Ra. Their importance was such that millions of cat mummies and luxury tombs have been found, such as that of Osiris Tamat, the favorite cat of an Egyptian prince.",
              },
              {
                heading: "The World Conquest: Rome and the Vikings",
                body: "Although the document focuses on the Nilotic origin, the story continued when the cat left Egypt to conquer new continents: The Cat in Rome: The Romans, seeing the effectiveness of Egyptian cats, quickly adopted them. For them, the cat was a symbol of freedom and independence. They took them with them throughout the Roman Empire (Europe, North Africa and Great Britain), using them mainly to protect their military camps and homes from rodents. The Viking Traveling Cats: During the Middle Ages, Vikings played a crucial role in expanding the cat to the north. They were excellent navigators and always carried cats on their ships (especially the 'Norwegian Forest Cat') to protect food supplies during long voyages. Thanks to the Vikings, cats reached places as remote as Scandinavia and, eventually, the Americas.",
              },
              {
                heading: "The Modern Cat",
                body: "After surviving dark times in the European Middle Ages - where they were unjustly persecuted - the cat regained its status thanks to its vital role stopping plagues that transmitted diseases like the Black Death. Today, the modern cat maintains that independent hunter instinct and self-sufficiency that makes it unique. Although there are now hundreds of breeds with different colors and coats, in their DNA still beats the heart of that small desert feline that decided, millennia ago, that living with us was a good idea.",
              }
            ],
          },
          {
            slug: "corazon-origen-egipto",
            title: "World Expansion",
            intro: "The domestic cat did not appear by chance on the Nile. The key was sedentary agriculture. Egypt was the 'granary of the world', and cereal silos were magnets for rodents.",
            sections: [
              {
                heading: "The Religious Transformation",
                body: "The cat went from being a useful ally to a divine being. The goddess Bastet was represented with a cat's head and symbolized home, fertility and protection. Killing a cat in ancient Egypt was a crime punishable by death.",
              },
              {
                heading: "Luxury and Respect",
                body: "The document highlights the case of Osiris Tamat, pet of Prince Thutmose. He was buried with honors in a limestone sarcophagus, wrapped in fine linen and with jewelry, demonstrating that for Egyptian royalty, cats were true companions of life and the 'afterlife'.",
              },
              {
                heading: "Export Prohibition",
                body: "The Egyptians valued their cats so much that they strictly prohibited taking them out of the country. However, this did not prevent the 'secret' of these felines from spreading.",
              },
              {
                heading: "The Great Expansion: How did they reach other continents?",
                body: "The cat's path to the rest of the world occurred mainly through maritime trade routes: 1. The Phoenicians: The first 'smugglers'. They were the great Mediterranean navigators. It is said that they smuggled cats out of Egypt to sell them on their trade routes. Thanks to them, the cat reached the Greek islands, the Italian peninsula and southern Spain much earlier than expected. 2. Rome: Cats in the legions. When the Romans conquered Egypt, they were fascinated by the cat (they preferred it to the ferret, which was the animal they used before for rats). As they expanded their Empire, legionaries carried cats in their caravans and ships to protect supplies. Thus, the cat was introduced to Central Europe and Great Britain. 3. Asia and the Silk Road. Through overland trade routes, cats reached Central Asia. In countries like China and Japan, they were received with honors similar to those in Egypt. In Japan, for example, Buddhist monks used them to protect valuable paper manuscripts from rats in temples. 4. The Conquest of America. Cats did not reach America until the time of European explorers (15th and 16th centuries). On ships like those of Christopher Columbus or later the Mayflower, cats were essential crew members. Their mission was to prevent rats from eating sailors' rations and spreading diseases in the confined space of the ship.",
              },
              {
                heading: "Summary of Evolution",
                body: "Africa: Biological origin (Felis lybica). Europe: Introduced by Phoenicians and Romans; then expanded by Vikings to the north. Asia: Arrived through the Silk Road and maritime trade to India and Japan. America and Oceania: Arrived centuries later on European colonizers' ships.",
              },
              {
                heading: "Conclusion",
                body: "Today, that small cat that watched over wheat on the Nile is present on all continents (except Antarctica), proving to be one of the most successful travelers in human history.",
              }
            ],
          },
        ],
      },
    ],
  },
];
