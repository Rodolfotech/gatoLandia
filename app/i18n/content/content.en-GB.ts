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
            intro: "Vaccination is the most effective tool to protect your cat from serious illnesses. Knowing the schedule and mandatory vaccines makes the difference between a long life and one full of complications.",
            sections: [
              { heading: "Mandatory vaccines", body: "The feline triple vaccine (Rhinotracheitis, Calicivirus and Panleukopenia) is the basis of any protocol. It is administered at 8, 12 and 16 weeks of age, with annual or 3-year boosters depending on the product." },
              { heading: "Recommended optional vaccines", body: "The Feline Leukaemia (FeLV) vaccine is highly recommended for cats that go outdoors or live with other cats. The rabies vaccine is mandatory in many countries and recommended in Chile." },
              { heading: "What happens if I miss a dose?", body: "If the adult cat has gone more than 3 years without vaccination, it is recommended to repeat the initial series. Always consult your veterinary surgeon before administering any vaccine." },
            ],
          },
          {
            slug: "desparasitacion",
            title: "Internal and external worming",
            intro: "Parasites are one of the most common and easily preventable problems in cats. A regular worming plan protects both the cat and the people in the household.",
            sections: [
              { heading: "Internal parasites", body: "The most common are ascarids (worms), tapeworms and Toxoplasma. They are treated with oral wormers every 3-6 months in adults, and monthly in kittens up to 6 months." },
              { heading: "External parasites", body: "Fleas, ticks and ear mites are the most common. Monthly spot-on pipettes are the most practical solution. Antiparasitic collars offer prolonged protection but require correct adjustment." },
              { heading: "Indoor vs. outdoor cats", body: "Indoor cats have lower risk, but are not exempt: fleas can enter on clothes and shoes. Internal worming 2 times a year and external 4 times a year minimum is recommended." },
            ],
          },
          {
            slug: "primeros-auxilios",
            title: "Feline first aid",
            intro: "Knowing how to act in an emergency can save your cat's life. This basic knowledge prepares you for the most critical moments until you reach the veterinary surgeon.",
            sections: [
              { heading: "The basic first aid kit", body: "Every home with cats should have: saline solution, sterile gauze, alcohol-free antiseptic (such as diluted chlorhexidine), digital thermometer and the number of an emergency veterinary clinic." },
              { heading: "Emergency signs", body: "Take your cat to an emergency vet if it presents: difficulty breathing, loss of consciousness, seizures, inability to urinate for more than 12 hours, bleeding that does not stop or possible poison ingestion." },
              { heading: "What you should NEVER do", body: "Do not give ibuprofen, paracetamol or aspirin to a cat: they are lethal to them. Do not try to induce vomiting without veterinary guidance. Do not put alcohol on open wounds." },
            ],
          },
        ],
      },
      {
        slug: "enfermedades",
        label: "Common illnesses",
        topics: [
          {
            slug: "enfermedad-renal",
            title: "Chronic kidney disease",
            intro: "Chronic renal failure is the leading cause of death in cats over 7 years old. Detecting it in time can add years of quality life to your companion.",
            sections: [
              { heading: "Warning signs", body: "Drinking a lot of water, urinating more frequently, progressive weight loss, dull coat and lack of appetite are the most common signs. Many cats do not show symptoms until losing 75% of kidney function." },
              { heading: "Diagnosis and monitoring", body: "An annual blood and urine test from 7 years of age is the best detection tool. The SDMA biomarker allows detecting kidney damage months before traditional markers." },
              { heading: "Management and treatment", body: "There is no cure, but it can be managed with a low-phosphorus and low-protein renal diet, hydration (wet food or subcutaneous fluids at home), supplements and frequent check-ups." },
            ],
          },
          {
            slug: "diabetes-felina",
            title: "Feline diabetes",
            intro: "Diabetes in cats is more common than you might think, especially in neutered overweight males. The good news: with proper management, many cats can go into remission.",
            sections: [
              { heading: "Risk factors", body: "Obesity, advanced age, male sex and high-carbohydrate diets are the main factors. Burmese cats have genetic predisposition." },
              { heading: "Symptoms", body: "Excessive thirst, excessive urination, weight loss despite eating well and hind leg weakness (diabetic neuropathy) are the most characteristic signs." },
              { heading: "Treatment and remission", body: "Daily insulin, low-carbohydrate diet (quality wet food) and blood glucose monitoring at home are the foundation. Up to 90% of cats can achieve remission with early and rigorous treatment." },
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
              { heading: "Why it is important", body: "Bacteria from the mouth enter the bloodstream and can damage kidneys, heart and liver. A cat with dental pain eats less, is more irritable and its quality of life suffers enormously." },
              { heading: "Home prevention", body: "Brushing teeth 3 times a week with feline dental paste (never human) is the most effective method. Dental snacks and chew toys are a useful complement but not sufficient on their own." },
              { heading: "Professional cleaning", body: "Veterinary dental cleaning under anaesthesia is recommended annually from 3 years of age. Cats with predisposition (Persians, Siamese) may need it earlier." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "comportamiento",
    label: "Behaviour",
    emoji: "",
    color: "#b85c38",
    bg: "#faefeb",
    description: "Behaviour",
    subcategories: [
      {
        slug: "interio-exterior",
        label: "Indoor or Outdoor Cat?",
        topics: [
          {
            slug: "guia para entender y cuidar",
            title: "Feline Behaviour: How to better understand and care for your cat",
            intro: "Cats are now one of the most popular pets in the world. Although historically they were not seen as life companions as we know them now, the reality is that, like dogs, they need interaction, attention and affection. The difference lies in how they express those needs.",
            sections: [
              { heading: "1. Indoor or Outdoor? Making the right decision", body: "One of the first decisions when adopting is whether the cat will live only inside the house or have access to the outdoors. Outdoor cats have more freedom and natural stimulation, but face greater risks. Indoor cats are much more protected but depend entirely on us for stimulation." },
              { heading: "2. The Scratching Instinct: It is not vandalism, it is communication", body: "Scratching is a natural and essential behaviour. For a cat, scratching is not just sharpening claws; it is visual and olfactory communication and a way to stretch muscles. The solution is not to punish, but to offer a better alternative." },
              { heading: "3. Play: Physical and mental exercise", body: "Playing is not just entertainment; it is the way the cat exercises its hunting instinct. Dedicate at least 15 minutes a day to actively playing with them." },
              { heading: "4. Hygiene and Litter Trays: The golden rule", body: "Cats are extremely clean. The 'N+1' rule: one litter tray per cat, plus one extra. Remove waste daily." },
              { heading: "5. Urine Marking: Understanding the message", body: "Vertical urine marking is a communicative behaviour, not necessarily hygienic. It generally responds to stress or insecurity." },
              { heading: "Conclusion: Coexistence based on respect", body: "Feline behaviour is not capricious; it has a deep biological logic. Understanding your cat is the best tool to love them better." },
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
            intro: "Cats have a sophisticated and precise body language. Learning to read it transforms the relationship with your cat.",
            sections: [
              { heading: "The tail as an emotional barometer", body: "The tail is one of the clearest signals: high and straight indicates confidence; low or between legs expresses fear; moving side to side reveals irritation." },
              { heading: "The ears do not lie", body: "Forward indicates attentiveness; backward signals fear or aggression; turned to the sides ('aeroplane mode') is growing irritation." },
              { heading: "The eyes and blinking", body: "Dilated pupils indicate fear or excitement. A relaxed gaze or slow blinking is a signal of trust and affection." },
              { heading: "The whiskers and face", body: "Whiskers forward indicate curiosity; pressed against the face signal fear." },
              { heading: "General body posture", body: "Relaxed means they feel safe; crouched indicates fear; arched shows they are scared and trying to appear bigger." },
              { heading: "Main idea", body: "Do not look at just one isolated signal, but the combination of all body parts." },
            ],
          },
          {
            slug: "vocalizaciones",
            title: "Vocalisations and their meaning",
            intro: "Adult cats rarely miaow at each other: miaowing is a language they developed specifically to communicate with humans.",
            sections: [
              { heading: "The miaow", body: "A short, high-pitched miaow is usually a greeting. A long, sustained one, a demand. Repetitive miaows can indicate pain or distress." },
              { heading: "Purring", body: "It does not always indicate happiness: cats also purr when stressed or ill. Purring has proven therapeutic properties between 25 and 50 Hz." },
              { heading: "Other sounds", body: "The trill is a warm greeting. Chattering appears when seeing prey. Hissing and spitting are clear warnings." },
            ],
          },
          {
            slug: "parpadeo-lento",
            title: "The slow blink: the feline kiss",
            intro: "The slow blink is one of the most studied signals in the feline repertoire.",
            sections: [
              { heading: "What it means", body: "When a cat looks at you and blinks slowly, they are telling you they feel safe. It is the feline equivalent of a relaxed smile." },
              { heading: "How to do it", body: "Look at the cat with a relaxed expression. Slowly narrow your eyes until almost closed, then open them again. Wait for a response." },
              { heading: "With unfamiliar cats", body: "It works even with cats you do not know. In shelters, the slow blink can be the difference between a cat that approaches and one that runs away." },
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
            intro: "This is one of the most frequent questions among cat owners. Cats have a particular relationship with water that makes the type of food directly impact their kidney health.",
            sections: [
              { heading: "The cat's nature and water", body: "Cats evolved in arid environments and get most water from their prey. Dry kibble has only 10% moisture, which can lead to chronic dehydration." },
              { heading: "Advantages of wet food", body: "Greater hydration, greater satiety with fewer calories, more similar to the natural diet. Most vets recommend it as the main food." },
              { heading: "The role of dry kibble", body: "It is not bad, but should not be the only food. Choose kibble with high animal protein and without cereals as the first ingredient." },
            ],
          },
          {
            slug: "dieta-barf",
            title: "BARF diet for cats",
            intro: "The BARF diet is based on feeding the cat with raw meat, meaty bones and organs, imitating the diet of their wild ancestors.",
            sections: [
              { heading: "BARF fundamentals", body: "Approximately 70% lean meat, 10% meaty bones (never cooked), 10% organs and 10% other tissues. Requires supplementation with taurine, calcium and vitamins." },
              { heading: "Reported benefits", body: "Improved coat, less faeces production, better hydration, cleaner teeth and more energy." },
              { heading: "Risks to consider", body: "Bacterial contamination, nutritional imbalances if not formulated correctly, and choking risk with bones." },
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
            intro: "Many foods safe for humans are dangerous or lethal to cats.",
            sections: [
              { heading: "Extreme danger: severe toxins", body: "Onion, garlic, leek and chives destroy red blood cells. Chocolate and coffee can cause seizures and death. Grapes and raisins cause acute kidney failure." },
              { heading: "Moderate danger", body: "Cow's milk causes diarrhoea in most adult cats. Avocado contains persin. Alcohol in any amount is dangerous." },
              { heading: "What they can eat as a treat", body: "Small amounts of cooked boneless chicken or turkey, cooked salmon, carrot, pumpkin, blueberries and cucumber are safe options." },
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
            intro: "The first six months of a cat's life are a critical development period.",
            sections: [
              { heading: "The socialisation window", body: "Between 2 and 9 weeks of age, the cat learns what is normal in their world." },
              { heading: "The most common mistake: hands as toys", body: "Using hands to play with a kitten teaches that human skin is valid prey." },
              { heading: "Play as problem prevention", body: "2 play sessions of 15 minutes a day are the best antidote against problematic behaviours." },
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
            intro: "Wands with feathers are the most effective toys because they simulate the complete hunting sequence.",
            sections: [
              { heading: "Why they work so well", body: "They activate the hunting instinct: stalk, chase, catch and 'kill'. This releases endorphins." },
              { heading: "How to move them correctly", body: "Real prey stops, hides, moves at unpredictable angles. Simulate that." },
              { heading: "Ending the session well", body: "Always end by allowing the cat to 'catch' the toy. A small snack completes the natural cycle." },
            ],
          },
          {
            slug: "puzzles-de-comida",
            title: "Food puzzles and intelligence",
            intro: "Food puzzles are one of the most undervalued enrichments.",
            sections: [
              { heading: "Proven benefits", body: "They reduce anxiety and boredom, slow down intake and stimulate cognitively." },
              { heading: "How to start", body: "Start with very easy puzzles. Increase difficulty progressively." },
              { heading: "Homemade puzzles", body: "A cardboard box with holes, an ice cube tray with kibble, or hiding treats under cups are effective." },
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
        slug: "gatito",
        label: "Kitten (0-6 months)",
        topics: [
          {
            slug: "primeras-semanas",
            title: "The first weeks of life",
            intro: "The first two months of a cat's life are extraordinarily intense.",
            sections: [
              { heading: "0-2 weeks: neonatal period", body: "Kittens are born blind, deaf and unable to regulate their temperature." },
              { heading: "2-7 weeks: primary socialisation", body: "Eyes open between 10 and 16 days. The nervous system develops at maximum speed." },
              { heading: "7-12 weeks: progressive independence", body: "Weaning is completed around 8 weeks. It is the ideal time for adoption." },
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
            intro: "A 10-year-old cat is approximately equivalent to a 56-year-old person.",
            sections: [
              { heading: "Expected physical changes", body: "Less joint flexibility, less shiny coat, possible loss of muscle mass." },
              { heading: "Environment adaptations", body: "Ramps or steps, low-entry litter tray, elevated food and water bowls." },
              { heading: "Intensified medical monitoring", body: "From 10 years old, check-ups should be semiannual with complete blood tests." },
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
            intro: "The history of the domestic cat began about 9,000 years ago in the Nile Valley, Egypt.",
            sections: [
              { heading: "The problem, the solution and the pact", body: "Cats approached villages attracted by rodents. Humans accepted this 'pest control' service." },
              { heading: "From Hunters to Gods", body: "The Egyptians deified cats, relating them to the goddess Bastet." },
              { heading: "The World Conquest: Rome and the Vikings", body: "Romans adopted cats for their camps. Vikings carried them on ships to protect provisions." },
              { heading: "The Modern Cat", body: "Today's cat maintains that independent hunter instinct from its desert ancestor." },
            ],
          },
          {
            slug: "corazon-origen-egipto",
            title: "World Expansion",
            intro: "The domestic cat did not appear by chance on the Nile.",
            sections: [
              { heading: "The Religious Transformation", body: "The goddess Bastet symbolised home, fertility and protection. Killing a cat was punishable by death." },
              { heading: "The Great Expansion", body: "Through maritime trade routes: Phoenicians, Romans, the Silk Road and European explorers." },
              { heading: "Conclusion", body: "That small cat from the Nile is present on all continents except Antarctica." },
            ],
          },
        ],
      },
    ],
  },
];
