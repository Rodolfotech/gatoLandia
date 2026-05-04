import { Category } from '../../data/cats';

export const categories: Category[] = [
  {
    "slug": "salud",
    "label": "Health",
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
            "intro": "Vaccination is the most effective tool to protect your cat from serious diseases. Knowing the calendar and mandatory vaccinations makes the difference between a long and a complication-filled life.",
            "sections": [
              {
                "heading": "Required vaccinations",
                "body": "The feline triple vaccine (Rhinotracheitis, Calicivirus, and Panleucopenia) is the foundation of any protocol. It is administered at 8, 12, and 16 weeks of age, with annual boosters or every 3 years depending on the product."
              },
              {
                "heading": "Recommended optional vaccinations",
                "body": "The vaccine against Feline Leukemia (FeLV) is highly recommended for cats that go outside or live with other cats. The rabies vaccine is mandatory in many countries and recommended in Chile."
              },
              {
                "heading": "What happens if I miss a dose?",
                "body": "If the adult cat has gone more than 3 years without being vaccinated, it is recommended to repeat the initial series. Always consult with your veterinarian before administering any vaccine."
              }
            ]
          },
          {
            "slug": "desparasitacion",
            "title": "Internal and external deworming",
            "intro": "Parasites are one of the most common and easily preventable problems in cats. A regular deworming plan protects both the cat and the household members.",
            "sections": [
              {
                "heading": "Internal parasites",
                "body": "The most common ones are hookworms (ascaris), tapeworms, and Toxoplasma. They are treated with oral antiparasitics every 3–6 months in adults, and monthly in puppies until 6 months."
              },
              {
                "heading": "External parasites",
                "body": "Fleas, ticks, and ear mites are the most common ones. Monthly spot-on pipettes are the most practical solution. Tick collars offer prolonged protection but require correct adjustment."
              },
              {
                "heading": "Indoor Cats vs. Outdoor Cats",
                "body": "Indoor cats have a lower risk, but they are not exempt: fleas can enter through clothing and shoes. It is recommended to have internal deworming 2 times a year and external deworming 4 times a year as a minimum."
              }
            ]
          },
          {
            "slug": "primeros-auxilios",
            "title": "Feline first aid",
            "intro": "Knowing how to act in an emergency can save your cat's life. These basic knowledge prepares you for the most critical moments until you get to the veterinarian.",
            "sections": [
              {
                "heading": "The basic first aid kit",
                "body": "Every home with cats should have: saline solution, sterile gauze, alcohol-free antiseptic (such as diluted chlorhexidine), digital thermometer, and the number of an emergency veterinary clinic."
              },
              {
                "heading": "Emergency signals",
                "body": "Take your cat to the emergency vet if it shows: difficulty breathing, loss of consciousness, seizures, inability to urinate for more than 12 hours, uncontrolled bleeding, or possible poisoning."
              },
              {
                "heading": "What you should NEVER do",
                "body": "Don't administer ibuprofen, paracetamol, or aspirin to a cat: they're fatal to them. Don't attempt to induce vomiting without veterinary instruction. Don't put alcohol on open wounds."
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
            "intro": "Chronic kidney disease is the leading cause of death in cats over 7 years old. Detecting it in time can add years of quality of life to your companion.",
            "sections": [
              {
                "heading": "Warning signs",
                "body": "Drinking a lot of water, urinating more frequently, progressive weight loss, dull coat, and loss of appetite are the most common signs. Many cats do not show symptoms until they lose 75% of their renal function."
              },
              {
                "heading": "Diagnosis and follow-up",
                "body": "An annual blood and urine test starting at age 7 is the best detection tool. The SDMA biomarker allows detecting kidney damage months before traditional markers."
              },
              {
                "heading": "Management and treatment",
                "body": "There is no cure, but it can be managed with a low-phosphorus, low-protein renal diet, hydration (eating moist food or subcutaneous fluids at home), supplements, and frequent check-ups."
              }
            ]
          },
          {
            "slug": "diabetes-felina",
            "title": "Feline diabetes",
            "intro": "Diabetes in cats is more common than people think, especially in neutered males with obesity. The good news: with proper management, many cats can go into remission.",
            "sections": [
              {
                "heading": "Risk Factors",
                "body": "Obesity, advanced age, male sex, and high-carbohydrate diets are the main factors. Burmese cats have a genetic predisposition."
              },
              {
                "heading": "Symptoms",
                "body": "A lot of thirst, a lot of urine, weight loss despite eating well, and weakness in the hind legs (diabetic neuropathy) are the most characteristic signs."
              },
              {
                "heading": "Treatment and remission",
                "body": "Daily insulin, a low-carb diet (high-quality wet food) and home glucose monitoring are the foundation. Up to 90% of cats can achieve remission with early and strict treatment."
              }
            ]
          }
        ]
      },
      {
        "slug": "dental",
        "label": "Oral health",
        "topics": [
          {
            "slug": "sarro-gingivitis",
            "title": "Gum inflammation and gingivitis",
            "intro": "Periodontal disease affects about 70% of cats over 3 years old and is one of the most overlooked causes of chronic pain and overall health decline.",
            "sections": [
              {
                "heading": "Why it's important",
                "body": "The bacteria in the mouth enter the bloodstream and can damage kidneys, heart, and liver. A cat with dental pain eats less, is more irritable, and its quality of life is severely affected."
              },
              {
                "heading": "Home prevention",
                "body": "Brush your teeth 3 times a week with cat toothpaste (never human) is the most effective method. Dental chews and chew toys are a useful complement but not sufficient on their own."
              },
              {
                "heading": "Professional cleaning",
                "body": "Veterinary dental cleaning under anesthesia is recommended annually starting at 3 years old. Cats with predisposition (Persians, Siamese) may need it earlier."
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
            "title": "Allergy to cats: A practical guide to coexisting",
            "intro": "Allergies to pets affect between 15% and 30% of people. Being allergic to cats is twice as common as to dogs, but with proper management, cohabitation is possible.",
            "sections": [
              {
                "heading": "The cause: Protein Fel d 1",
                "body": "Allergies are not caused by the hair, but by the Fel d 1 protein produced in the skin, saliva, and urine. It spreads when the cat licks and the protein disperses in the air through dander (dead skin). Males produce more than females, and neutering reduces these levels."
              },
              {
                "heading": "Symptoms and Diagnosis",
                "body": "The reactions range from hives and itching to sneezing, tearful eyes, and asthma attacks. It is crucial to visit an allergist to perform skin tests, blood tests, or spirometry, as the culprit could be dust or pollen and not the cat."
              },
              {
                "heading": "Home and Free Zones",
                "body": "Create a \"sanctuary\" by keeping the bedroom closed off to the cat. Remove carpets or use only those that can be washed with hot water. It's essential to use HEPA-filter vacuum cleaners and air purifiers for at least 4 hours a day."
              },
              {
                "heading": "Direct Care and Products",
                "body": "Brushing should be done by someone not allergic to it outside the house. Weekly baths and the use of neutralizing products (such as Vetriderm) on the coat help to eliminate saliva residue. Castration and periodic hair cutting in long-haired cats are also effective strategies."
              },
              {
                "heading": "Advanced Treatments",
                "body": "Consultation about immunotherapy (desensitization vaccines), which are effective in the long term. If, despite all cleaning measures and medical treatment, health is severely affected, the most responsible decision may be to seek a new home for the feline."
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
                "heading": "**Step 1: Causes and Risk Factors**",
                "body": "Feline diabetes usually results from a combination of factors: obesity and age (common in cats over 9 years old), sex and breed (more common in males 4:1 and Siamese breed). Amyloid deposits that damage the pancreas and the use of medications such as progestins or corticosteroids also play a role. It is essential to note that pancreatitis is often closely associated with this disease and, in many cases, can be the triggering cause of diabetes."
              },
              {
                "heading": "**Step 2: Identification of Symptoms**",
                "body": "Pay attention to an increase in thirst and urination (drink a lot of water or urinate outside the litter box) and changes in appetite or weight. A distinctive sign is diabetic neuropathy: the cat walks with the entire heel (the \"heel\") on the ground. Also, a neglected coat (dry or with dandruff) is observed. Unlike dogs, cataracts are very rare in cats."
              },
              {
                "heading": "**Step 3: The Correct Diagnosis**",
                "body": "Stress in the clinic generates the \"Bata Blanca\" effect, temporarily raising blood sugar. For a definitive diagnosis, the veterinarian must confirm glucose in both blood and urine. Complete tests are required to rule out other conditions such as urinary tract infections, liver problems, or pancreatitis, which often accompany diabetes."
              },
              {
                "heading": "**Step 4: Treatment and Regulation**",
                "body": "Based on three pillars: 1. Insulin: Intermediate- or long-acting (NPH or PZI) is used, generally twice a day with meals. 2. Diet: Strict carnivorous diet, high in protein and low in carbohydrates with fixed schedules. 3. Monitoring: It is ideal to measure blood glucose (pinch in the ear) at 'peak' moments to adjust the dose with precision."
              },
              {
                "heading": "**Step 5: Emergency of Ketoacidosis**",
                "body": "If left untreated, it can lead to ketoacidosis, a life-threatening emergency with symptoms such as vomiting, extreme lethargy, dehydration, and breath with a fruity or acetone odor. It requires immediate hospitalization for intravenous fluids, rapid-acting insulin, and electrolyte correction (potassium, phosphate)."
              },
              {
                "heading": "**Step 6: Complications and Expectations**",
                "body": "It's possible to achieve remission (stop needing insulin) if you control your weight and get diagnosed early. The biggest risk is hypoglycemia: if your cat is shaking or convulsing, apply honey or sugar to their gums and rush to the vet. Also, regularly check for urinary tract infections (blood or straining to urinate)."
              },
              {
                "heading": "Key tips for the owner",
                "body": "Never adjust insulin on your own. Keep a strict record of dosages, meal times, and behavior. Monitoring weight is the best preventive tool and observing any change in gait is crucial to report to the specialist."
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
            "intro": "Obesity is not just a cosmetic issue; it's a disease that reduces your cat's life expectancy and increases the risk of developing diabetes, joint problems, and surgical complications. With patience and strategy, you can help him recover his ideal weight.",
            "sections": [
              {
                "heading": "**Step 1: Identification of Excess Weight**",
                "body": "Don't rely solely on the scale. In the 'Rib Test', you should be able to feel them easily without pressing hard; if not, there's excess fat. Looking from above, it should mark a waist behind the ribs; if it's rectangular or barrel-shaped, there's overweight. From the side, your abdomen shouldn't sag or touch the floor. It's considered overweight if it exceeds 10-19% of your ideal weight, and obese if it exceeds 20%."
              },
              {
                "heading": "**Step 2: Causes and Factors**",
                "body": "It's a combination of factors: after sterilization, metabolism decreases and appetite increases; from 6-8 years old, cats burn fewer calories; sedentary lifestyle in indoor cats without stimulation; and inadequate diets (food always available, excessive rewards, or many carbohydrates). Breeds like the Siamese or Burmese may have a greater genetic predisposition."
              },
              {
                "heading": "**Step 3: The Safe Action Plan**",
                "body": "Weight loss should be gradual. Golden rule: a cat should not lose more than 1% or 2% of its weight per week (example: an 8 kg cat should not lose more than 160 grams per week). Losing weight too quickly is dangerous as it can cause hepatic lipidosis, a potentially fatal liver disease."
              },
              {
                "heading": "**Step 4: Strategic Dietary Management**",
                "body": "Ask the veterinarian to calculate calories for ideal weight, not current weight. Generally, 60% to 75% of current maintenance calories are offered. Look for high-protein diets (to maintain muscle and provide satiety) and low-carb diets. Divide the ration into 3 or 4 feedings to keep the metabolism active and use part of the ration as a reward instead of high-calorie snacks."
              },
              {
                "heading": "**Step 5: Physical Activity and Enrichment**",
                "body": "The exercise should be gradual. Spend 10 minutes a day on interactive games (sticks, lasers, balls). Use environmental enrichment: hide food in different places, use interactive feeders or puzzles, and install shelves or cat trees that force him to jump and climb to get his food."
              },
              {
                "heading": "**Step 6: Commitment and Monitoring**",
                "body": "Success depends on the whole family following the rules without sneaking food. Weigh the cat every 2 weeks: if it doesn't go down, adjust the ration; if it goes down too fast, add a little. The human factor is essential; accepting that the cat needs to lose weight is not 'cruel', but an act of love to care for its long-term health."
              },
              {
                "heading": "Warning Signs: When to Visit the Veterinarian",
                "body": "Before starting any diet, visit a specialist to rule out medical causes such as hypothyroidism (although rare in cats) or diabetes, and to establish a realistic weight goal. The veterinarian should help choose the right commercial diet or formulate a balanced homemade one. Remember that prevention is better than cure to ensure your cat will accompany you for many more years, healthy and active."
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
        "label": "House interior or exterior?",
        "topics": [
          {
            "slug": "guia para entender y cuidar",
            "title": "Feline Behavior: How to Understand and Care for Your Cat Better",
            "intro": "Cats are today one of the most popular pets in the world. Although historically they were not seen as life companions like we know them now, the reality is that, just like dogs, they need interaction, attention, and affection. The difference lies in how they express those needs. To live in harmony with your feline, it is essential to understand its nature and adapt its environment to its instincts.",
            "sections": [
              {
                "heading": "**1. Interior or Exterior? Making the right decision**",
                "body": "One of the first decisions when adopting is whether the cat will live alone inside the house or have access to the outside. Both options have important implications: Outdoor cats: They have more freedom and natural stimulation, but they face greater risks: accidents, fights with other animals, infectious diseases, and parasites (fleas, worms). Their life expectancy is usually lower. Indoor cats: They are much more protected and live longer, but they depend entirely on us for their stimulation. Boredom is their greatest enemy. If you choose this option, you must commit to enriching their environment with games, scratching posts, and quality time. Advice: Regardless of your choice, the key is safety and mental stimulation."
              },
              {
                "heading": "**2. The Itch to Scratch: It's not vandalism, it's communication**",
                "body": "Scratching is a natural and essential behavior that begins around 5 weeks of life. For a cat, scratching is not just about sharpening claws; it's a form of visual and olfactory communication (marking territory with glands on their paws) and a way to stretch their muscles. The conflict arises when they choose our furniture. The solution is not to punish, but to offer a better alternative. How to choose the perfect scratching post? Stability: It should be firm and not wobbly. If it moves, the cat won't use it due to insecurity. Height: It should be high enough for the cat to stretch completely on its feet. Material: Sisal, natural wood, or rope are usually the most attractive. Location: Place it in visible and pass-through areas (not hidden in a basement). Cats like to mark where the 'life' of the house happens. Patience: Once you choose a scratching post, don't move it. Also, the more used it is, the more it will like it, because it will be impregnated with its scent."
              },
              {
                "heading": "**3. The Game: Physical and Mental Exercise**",
                "body": "Playtime isn't just about having fun; it's how the cat exercises its hunting instinct. A cat that doesn't play can develop behavioral problems due to accumulated energy or stress. Keys to a successful game: Imitate prey: Use toys that move, hide, jump, or vibrate. Feather wands or strings are ideal because they allow you to interact at a distance. Safety first: Avoid long strings without supervision or small pieces that can be swallowed. Daily routine: Dedicate at least 15 minutes a day to actively playing with him. This strengthens your bond and keeps his mind agile. Variety: Rotating toys prevents him from getting bored with the same objects."
              },
              {
                "heading": "**4. Hygiene and Ashtrays: The Golden Rule**",
                "body": "Cats are extremely clean and demanding about their litter box. A dirty or poorly located litter box is the number one cause of improper elimination. Basic recommendations: The \"N+1\" rule: You should have a litter box for each cat, plus one extra. (Example: 1 cat = 2 litter boxes; 2 cats = 3 litter boxes). Some cats even prefer to use one box for urination and another for defecation. Type of litter: Most prefer unscented litters with fine and smooth texture. Location: Quiet, private, and away from strong noises (washers, dryers) or their food area. Cleaning: Remove waste daily and clean the litter boxes regularly with water and neutral soap (avoid bleach or ammonia, whose odors may attract them to urinate outside). Alert: If your cat starts urinating or defecating outside the litter box, consult a veterinarian. Often it is the first sign of urinary pain or disease, not an act of revenge."
              },
              {
                "heading": "**5. Urine Marking: Deciphering the Message**",
                "body": "The vertical marking with urine (spraying walls or furniture) is different from emptying the bladder on the floor. It is a communicative behavior, not necessarily hygienic. Who does it? It can occur in neutered cats, although it is more common in non-neutered ones (approximately 10% of males and 5% of females can do it occasionally). Why do they do it? It generally responds to stress or insecurity: arrival of new pets, changes in routine, conflicts with other cats (even seeing street cats through the window) or changes in the home. Solution: Punishment worsens the problem. The ideal is to identify the source of stress, clean the area with specific enzymes (to eliminate the smell completely) and consult with a veterinarian or ethologist to evaluate if it needs behavioral or medical help."
              },
              {
                "heading": "Conclusion: Living together based on respect",
                "body": "The feline behavior is not capricious; it has a deep biological logic. They need security (routines, high places). They need stimulation (play, simulated hunting). They need cleanliness (spotless litter boxes). They need communication (scratching, marking, meowing). When you respect these basic needs, you stop seeing 'problems' and start seeing a balanced, affectionate, and happy companion. Understanding your cat is the best tool to love it better."
              }
            ]
          }
        ]
      },
      {
        "slug": "comportamiento-felino",
        "label": "Feline Introduction",
        "topics": [
          {
            "slug": "presentacion entre gatos",
            "title": "How to get two cats to accept and live peacefully with each other.",
            "intro": "Introducing a new cat to the house is exciting, but it can be stressful for your resident cat. Cats are territorial by nature, so the key to success is not speed, but patience. If you do it right from the start, you'll avoid future conflicts and foster a lasting friendship (or at least, a respectful tolerance). Forget the idea of \"throwing them together.\" Follow this gradual process.",
            "sections": [
              {
                "heading": "**Step 1: Initial Quarantine (Days 1-4)**",
                "body": "The new kitten needs to feel secure before meeting anyone. Private room: Prepare a quiet room (not the main area of your current cat) with its bed, food, water, toys, and litter box. Safe haven: Leave its carrier open with a blanket inside so it has a hiding place where it can feel protected. Zero eye contact: For the first few days, they shouldn't see each other. However, it's okay if they sniff each other under the door. This allows them to investigate without the pressure of face-to-face contact."
              },
              {
                "heading": "**Step 2: Smell Exchange (The 'Dating' Smell)**",
                "body": "Cats are known for their sense of smell, not their sight. Swap objects: Gently rub a towel or sock on the cheeks of a cat (where they have scent glands) and give it to the other, and vice versa. You can also exchange their blankets. Positive association: While they smell the other's object, give them rich rewards or play with them. We want them to associate the smell of the \"other\" with good things (food/play). Balanced attention: Spend quality time with each cat separately, petting and playing near the door that separates them. This reduces anxiety and jealousy."
              },
              {
                "heading": "**Step 3: Controlled Visual Contact**",
                "body": "When both cats are relaxed sniffing each other under the door and there are no loud meows or constant growls: The gap: Open the door just one inch (about 2-3 cm) or use a baby mesh barrier. They should be able to see each other, but not touch. Observe: If there are light meows, it's normal. If there is intense aggression (loud meows, open mouth, very low ears), close the door and go back to Step 2 for a few more days. Reward calmness: If they look at each other without attacking, give them rewards immediately."
              },
              {
                "heading": "**Step 4: The First Supervised Interactions**",
                "body": "If eye contact is going well, it's time to let them share space, but with strict rules. Voluntary exit: Open the door and let the new cat out if it wants to. Never force it. If it stays hidden, respect it. Short sessions: Let them be together for 15-30 minutes maximum. Then, separate them again in their rooms. Repeat this several times a day. Positive distraction: Play with them using feather toys or launch rewards, but keep a safe distance (at least 1 meter between them) to avoid them competing for the toy. The goal: For them to learn that the other's presence is not a threat, but rather something neutral or even fun."
              },
              {
                "heading": "**Step 5: Gradual Increase in Time**",
                "body": "Gradually, the time they spend together increases if the interactions are calm. Always separate at the end: End the session before there is any conflict. It's better to leave them wanting more than with a fight. Alone time: After each session, give them alone time in their respective areas to process the experience and recover their territorial confidence."
              },
              {
                "heading": "Warning Signs and Stress",
                "body": "Stop the process and go back if you see: Intense and repeated hissing, deep growling, erect fur, and rigid postures. In the resident cat: Stop eating, use the litter box incorrectly or hide all day. In the new cat: Licks compulsively, won't eat, or appears terrified. Advice: If stress is high, consult your veterinarian or a zoologist. Sometimes, using synthetic pheromones (diffusers) can help calm the environment."
              },
              {
                "heading": "What you SHOULD NEVER do",
                "body": "Never punish: Yelling or punishing a cat for meowing or showing aggression only increases its stress and associates the other cat with something negative (the punishment). Correct reaction: If there's tension, separate the cats calmly, without drama. Use a soft voice or simply interpose a physical barrier. Don't leave them alone: Until you're 100% sure they tolerate each other (they may take weeks or months), never leave them unsupervised."
              },
              {
                "heading": "Special Cases: The Timid Cat",
                "body": "If your new cat is very timid, the process will be slower. Don't rush. A shy cat needs more time to trust its environment before trusting another cat. Reinforce your individual bond with him. Contact sessions can be shorter (10 minutes) but more frequent. Conclusion: Patience is Love. Each cat pair is unique. Some accept each other in a week; others take months. Don't compare. Your goal is a long-term peaceful coexistence, not an immediate movie-style friendship. Going slow is the fastest way to achieve success. Your patience will be worth it!"
              }
            ]
          }
        ]
      },
      {
        "slug": "lenguaje",
        "label": "Feline language",
        "topics": [
          {
            "slug": "comunicacion-corporal",
            "title": "Nonverbal communication",
            "intro": "Cats have a sophisticated and precise body language. Learning to read it transforms your relationship with your cat and allows you to anticipate their needs and emotional states.",
            "sections": [
              {
                "heading": "The tail as an emotional barometer",
                "body": "The tail is one of the clearest signals: High and straight indicates confidence, friendly greeting, or happiness (if the tip is curved, it's maximum happiness). Low or between the legs expresses fear, insecurity, or submission. Moving quickly from side to side or with slow movement reveals irritation, annoyance, or concentration. If it's puffed up, bristled, or arched, the cat feels threatened or terrified."
              },
              {
                "heading": "Ears don't lie",
                "body": "The ears show a lot about the mood: Forward indicates that it is attentive, curious, on the alert, or interested. Backwards, prints, or flat indicate fear, annoyance, or defensive aggression. If they are turned to the sides ('airplane mode'), it is a sign of growing irritation and the cat needs space. Constant movement indicates that it is alert or nervous."
              },
              {
                "heading": "The eyes and the blinking",
                "body": "The eyes convey deep emotions: Open with large/dilated pupils indicate fear, surprise, excitement, or play. A fixed gaze can be a sign of challenge or intense attention. On the other hand, a relaxed gaze or slow blinking is an active sign of trust, calmness, and affection."
              },
              {
                "heading": "The mustaches and the face",
                "body": "The whiskers also speak: if they are oriented forward, they indicate curiosity or excitement about something they are exploring. If they are pressed against the face or retracted, they signal that the cat feels fear or is trying to appear less threatening in a tense situation."
              },
              {
                "heading": "General body posture",
                "body": "The body indicates the overall state: Relaxed means it feels secure. Crouched or tense indicates fear. Arched with the back raised shows that it is scared and trying to appear bigger to defend itself. The cat combines all these signals (tail, ears, eyes) at the same time; for example, high tail with relaxed eyes is a happy cat, while ears back with a strong-moving tail is an angry cat."
              },
              {
                "heading": "Main idea",
                "body": "You shouldn't look at just one isolated signal, but rather the entire set of all body parts. Learning to observe these details will help you better understand your partner and respect their space when needed."
              }
            ]
          },
          {
            "slug": "vocalizaciones",
            "title": "Expressions and their meaning",
            "intro": "Adult cats almost never meow at each other: the meow is a language they developed specifically to communicate with humans. Each cat has its own vocabulary.",
            "sections": [
              {
                "heading": "The meowing",
                "body": "A short, sharp meow is often a greeting. A long, sustained one is a demand (food, attention). Repetitive meows can indicate pain, disorientation (especially in older cats) or distress."
              },
              {
                "heading": "The rumble",
                "body": "Not always indicates happiness: cats also purr when they're stressed, sick, or in the process of recovery. Purring has demonstrated therapeutic properties between 25 and 50 Hz, a frequency that favors bone regeneration."
              },
              {
                "heading": "Other sounds",
                "body": "The trill or chirp is a warm greeting or response to what you're saying. The chatter (tapping of teeth) appears when seeing birds or prey: it's frustration and excitement of the hunt. The hissing and spitting are clear warnings that the cat feels threatened."
              }
            ]
          },
          {
            "slug": "parpadeo-lento",
            "title": "The slow blink: the feline kiss",
            "intro": "The slow blink is one of the most studied and beautiful signals in the feline repertoire. A 2020 study at the University of Sussex demonstrated experimentally that humans can initiate this communication with any cat.",
            "sections": [
              {
                "heading": "What does it mean",
                "body": "When a cat looks at you and blinks slowly, it is telling you that it feels safe and at ease in your presence. It is the feline equivalent of a relaxed smile and a full gesture of trust."
              },
              {
                "heading": "How to do it",
                "body": "Look at the cat with a relaxed expression. When you have eye contact, slowly close your eyes almost all the way and then open them again. Wait. If the cat responds with the same gesture, the communication channel is open."
              },
              {
                "heading": "With unknown cats",
                "body": "Works even with cats that don't know you. In shelters and colonies, the slow blink can be the difference between a cat that approaches voluntarily and one that runs away. It's a powerful tool for building trust."
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
            "title": "Why are they scratching the furniture",
            "intro": "Scratching isn't bad behavior or destructiveness: it's a fundamental biological need. Understanding why they do it is the first step to redirecting it to appropriate places.",
            "sections": [
              {
                "heading": "The Three Reasons of the Ripped",
                "body": "Cats scratch to visually mark their territory with claw secretions, to stretch their muscles and tendons in a healthy way, and to remove dead layers of their nails. It's an instinctual behavior that can't be eliminated, only redirected."
              },
              {
                "heading": "How to protect furniture",
                "body": "Place scratching posts in areas where the cat already frequents for scratching. Use synthetic pheromones (Feliway) on surfaces you want to protect. Temporarily cover furniture with fabrics or non-sticky adhesive protectors to redirect the behavior."
              },
              {
                "heading": "What kind of scrubber works best",
                "body": "Each cat has its preference: some need high vertical scratching posts (that allow them to stretch completely), while others prefer horizontal ones. Sisal is often the favorite material, although some prefer cardboard or carpet. Offer variety at first."
              }
            ]
          },
          {
            "slug": "amasar",
            "title": "The kneading: legs that make bread",
            "intro": "The kneading, that rhythmic movement of pressing alternately with the paws on soft surfaces, is one of the most tender and meaningful behaviors in the feline repertoire.",
            "sections": [
              {
                "heading": "The origin of behavior",
                "body": "The kittens rub the mother's belly to stimulate milk production. In adults, it is a comfort behavior that persists from childhood: they do it when they feel safe, happy, and relaxed."
              },
              {
                "heading": "What does it indicate when they massage over you?",
                "body": "It's one of the greatest expressions of affection and trust. Your cat is treating you like its mother and telling you that it feels completely safe in your presence. It's a feline honor."
              },
              {
                "heading": "Variations of the kneading process",
                "body": "Some cats knead blankets, stuffed animals, or even the air. Others only knead on specific people. There are cats that knead with all four paws, others only with their front paws. All variations are completely normal."
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
            "title": "Your cat also wants to learn: Fun guide to train at home",
            "intro": "Do you think cats are independent and don't need training? Nothing could be further from the truth! Cats are intelligent, curious, and above all, they love to have 'things to do.' In the wild, they would spend the day hunting and exploring; at home, if they just sleep and eat, they get bored. And a bored cat is one that scratches the couch or meows at night. Training your cat isn't about making it obey like a militarized dog. It's about playing with a purpose. It's an incredible way to connect with it, stimulate its mind, and strengthen your friendship. And the best part? You only need 10 minutes a day.",
            "sections": [
              {
                "heading": "**1. The Secret: Use your instinct, not force**",
                "body": "Cats don't respond well to harsh commands or punishment. They respond to positive reinforcement. The golden rule: If he does something well, he receives a reward (a tasty treat, a little tuna, or many pets). Never force: If you pull him or yell at him, he'll shut down. Training should always be voluntary and fun. Short sessions: 5 or 10 minutes are enough. If you see that he's distracted, end the session with something he already knows well so he ends with a good feeling."
              },
              {
                "heading": "**2. The Magic Tool: 'Diana' (Targeting)**",
                "body": "Before teaching him complicated tricks, teach him to follow your finger or an object. This is called targeting and is the base of everything. Bring your finger (or a stick with a shiny tip) close to the cat's nose. Out of curiosity, it will sniff or touch it. As soon as it touches it, say '¡Bien!' (with a cheerful voice) and give it a reward immediately. Repeat this several times. Soon, it will follow your finger wherever you move it because it knows that touching it brings good things. ¡You already have the soft control of its movement!"
              },
              {
                "heading": "**3. Easy Tricks to Get Started**",
                "body": "'Come here' (The most important command): It's vital for safety. Call it by its name or click your tongue. When it comes towards you, celebrate a lot and give it a spectacular reward. Important: Never scold it when it comes, even if it's taken a long time. It has to associate 'come' with 'party'. 'Sit': Cats naturally sit down when they look up. With the cat standing, put a treat just above its head. Move your hand slowly backwards (towards its tail). To keep looking at the food, it will lower its rear end automatically. As soon as the butt touches the floor, say 'Sit' and give the reward. 'On lap' or 'Up': Ideal for it to come sleep with you or go up to allowed places. Sit in a chair or couch. Gently tap your leg or the seat and say 'Up'. Guide it with the treat if necessary. When it gets up, immediate reward! It will soon jump on its own to be with you."
              },
              {
                "heading": "**4. More challenging challenges**",
                "body": "'Quieto': Ask him to sit down. Place the palm of your hand in front of his face (like a red stoplight) and say 'Quieto'. Wait only 1 second at first. If he doesn't move, reward. Gradually increase the time (2 seconds, 5 seconds...). Patience, this takes longer. 'Down' (Lying down): It's difficult because it's a vulnerable position for them. From a seated position, lower the treat to the ground, between his front legs. Slowly move it away from him forward. If he lowers his chest and stretches, big reward! Don't wait for him to stay like that for too long at first."
              },
              {
                "heading": "**5. Walking on a leash? Yes, it's possible.**",
                "body": "Many cats love to explore the outdoors, but it must be safe. The Harness: Buy a vest-style one (more comfortable and safer than thin rope ones). Leave it on at home for a few minutes a day while it plays, so it gets used to it. The Leash: Add it when it ignores the harness. Let it drag under your supervision. The Outing: Go to the hallway or garden. Don't pull on the leash. Let it explore and you follow it. If it gets scared, go back inside. No rush."
              },
              {
                "heading": "**6. Solving problems through play**",
                "body": "Does the cat scratch the couch? Don't yell at it. Put a scratching post right next to the couch. Use the \"target\" trick to guide its paws to the scratching post and reward it heavily when it uses it. Make the scratching post more interesting than the couch (add catnip, for example). Is it bored? Training IS the game. Dedicate those 10 daily minutes to reviewing tricks. You'll see how it stops seeking negative attention (meowing, destruction) because it already has your positive attention."
              },
              {
                "heading": "Final advice: Enjoy the process",
                "body": "Don't seek perfection. Seek the connection. You'll see how your cat starts to look for you to \"work\" (play), how they look at you in the eyes waiting for instructions, and how their personality shines. A trained cat is a confident, happy, and much more affectionate cat. Get motivated! Your \"sofa tiger\" has a lot of hidden potential."
              }
            ]
          },
          {
            "slug": "guia-paseos-correa",
            "title": "Feline Strolls: How to Teach Your Cat to Walk on a Leash (Stress-Free)",
            "intro": "Taking your cat for a walk may sound strange, but it's a fantastic way for it to enjoy the fresh air safely. It also helps it to be more relaxed during vet visits or trips. The key isn't force, but patience and treats.",
            "sections": [
              {
                "heading": "Before starting",
                "body": "Make sure your cat has all its vaccinations up to date and microchipped. Safety comes first."
              },
              {
                "heading": "**Step 1: Positive introduction (The harness is a friend)**",
                "body": "Don't hit him with the harness. We want him to associate it with good things. Olfactory phase: Leave the harness and leash near his bed or food bowl for a few days. Let him get used to seeing and smelling them while he eats or sleeps. Positive association: Hold the harness in your hand, let him sniff it, and give him a rich treat. Gently bring it close to his body without putting it on, continue giving rewards."
              },
              {
                "heading": "**Step 2: The first adjustment (Inside the house)**",
                "body": "Now let's try it out. Place the harness gently over his shoulders and chest. Give him treats constantly while smelling and touching him. Buckle the harness quickly. Golden rule: There should be two fingers between the harness and the cat's body (not too tight, not too loose). Leave it on for only 1 or 2 minutes at first. Play with him or give him wet food to distract him. Take it off before he gets upset or tries to remove it. Repeat this daily, gradually increasing the time if he remains relaxed."
              },
              {
                "heading": "**Step 3: The \**"ghost\" strap",
                "body": "Once the harness is tolerated, we add the leash. Attach the leash to the harness indoors. Let the leash drag on the floor while your cat plays or explores. Watch that it doesn't get caught on furniture or chair legs. Do this for several days until it completely ignores the weight of the dragging leash."
              },
              {
                "heading": "**Step 4: You take the controller (No jerks)**",
                "body": "Now it's your turn to hold the leash. Take the leash gently and follow your cat around the house. Keep the leash loose. Don't pull on it. Just accompany him. If he stops, wait. If he comes towards you, reward and praise him! The goal is for him to understand that the leash doesn't hurt or restrict, but is a bond with you."
              },
              {
                "heading": "**Step 5: Gentle guidance and direction**",
                "body": "When you're walking calmly with the leash in hand, start guiding him. Use a sweet and gentle voice to invite him to follow you. Throw a treat a few steps ahead. As he eats it, move forward too. If he pulls in another direction, don't pull back. Keep a very soft and constant tension on the leash. As soon as the cat gives in and looks at you or takes a step in your direction, immediately release the leash and reward. He'll learn that 'giving in to pressure = freedom and reward'."
              },
              {
                "heading": "**Step 6: The Big Exit (The Exterior)**",
                "body": "Cats can get scared a lot with the outside noises and smells. Start in a quiet and enclosed place (an indoor patio or safe garden). Sit on the floor with him. Let him explore at his own pace. At first, just follow him. Don't try to mark a route. If you see that he's scared (he crouches, tries to escape), go back home. Don't force him. The walk should be fun, not a nightmare."
              },
              {
                "heading": "Important Safety Rules",
                "body": "Never leave it alone: Never let it out and leave. It could get tangled, hurt, or left defenseless in front of a dog or other danger. The door is a high-risk area: Put the harness away from the exit door. Take it out in your arms until outside. If you do it near the door, it will learn to try to escape every time you open it. Ignore the tantrums: If it meows or complains to take it out, ignore it. Just put on the harness and go out when it's calm. That way, it learns that calmness is the key to going out. Respect its boundaries: If your cat is very scared, don't insist. There are many ways to enrich its life at home (toys, scratching posts, observation windows). With love and consistency, your cat could end up enjoying its walks as much as you do. Enjoy the adventure! 🐾🌳"
              }
            ]
          },
          {
            "slug": "clicker-training",
            "title": "Clicker Training for Cats",
            "intro": "Contrary to popular myth, cats are perfectly trainable with positive reinforcement. Clicker training not only teaches tricks: it strengthens the bond, mentally stimulates, and reduces behavioral problems.",
            "sections": [
              {
                "heading": "How does the clicker work",
                "body": "The click marks the exact moment of correct behavior, and it always follows a reward. The cat learns that that specific sound predicts a reward, which motivates it to repeat the behavior. The precision of the moment is key."
              },
              {
                "heading": "Where to start",
                "body": "First, \"load\" the clicker: click and give a reward 10 times in a row without asking for anything. Then start with simple behaviors that the cat already does naturally: sitting, touching your hand with its nose. Sessions of 2-5 minutes, 2-3 times a day."
              },
              {
                "heading": "Advanced Tricks",
                "body": "Once the basics are mastered, you can teach: to paw, to turn around, to jump over obstacles, to voluntarily enter the transport, or even use communication buttons. There's no limit if the sessions are short and positive."
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
            "title": "The Silent Pain: How to Know if Your Cat is Suffering and How to Help",
            "intro": "Cats are masters of disguise and instinctively hide their pain to appear non-vulnerable. Learning to read their subtle signs is crucial to being their best ally and preventing their health from deteriorating without us realizing it.",
            "sections": [
              {
                "heading": "**1. Subtle hints of pain**",
                "body": "Forget the whining or limping; the feline pain hides in behavioral changes: it hides more (under the bed or closets), changes its mood becoming irritable or unusually \"sticky\", and stops grooming (dull or knotted hair). It may also excessively lick a specific area, adopt a tense \"bread loaf\" posture with its head low, or stop jumping to places it used to frequent due to joint pain."
              },
              {
                "heading": "**2. The most common pains**",
                "body": "Identify the type of help with the diagnosis: Arthritis is common in people over 7 years old (stop playing or climbing high places); mouth pain (gingivitis or broken teeth) causes drooling, bad breath, or refusing to eat; internal pain (cystitis, kidney, or pancreatitis) generates a deep sense of unease and depression; and nerve pain (such as in diabetes) can cause pain from the simple rubbing of the skin."
              },
              {
                "heading": "**3. Multimodal Veterinary Treatment**",
                "body": "The modern treatment uses several tools: safe drugs such as specific anti-inflammatories, analgesics (buprenorphine) or nervous system modulators (gabapentin). It is complemented with therapies such as acupuncture, therapeutic laser or physical rehabilitation. In surgeries, local blocks are used. WARNING: Never use human ibuprofen or paracetamol, they are deadly for cats!"
              },
              {
                "heading": "**4. Your Role at Home: Environmental Management**",
                "body": "Adapt the environment: install ramps or steps to climb onto sofas, use low-edged litter boxes and orthopedic beds. Weight control is crucial to avoid overloading joints. Additionally, reduce stress by maintaining calm routines and using pheromones if necessary, since stress worsens the perception of pain."
              },
              {
                "heading": "**5. Special Cases: Age and Status**",
                "body": " Kitten, it's essential to be very careful with the dosages due to their developing organs. In older cats with kidney or liver problems, the dosages must be adjusted meticulously. In pregnant or nursing cats, only the veterinarian should decide on the treatment, as many analgesics pass to the fetuses or into the milk."
              },
              {
                "heading": "Don't wait until I complain.",
                "body": "A cat that doesn't complain doesn't mean it's not suffering. Untreated chronic pain worsens the quality of life and accelerates aging. If you notice any changes in routine, appetite, or temperament, consult your veterinarian. With your loving observation and medical help, your cat can live without suffering, even with chronic illnesses."
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
            "title": "Stress in the Cat: A Complete Guide to Understanding and Helping It",
            "intro": "Every time we learn more about feline behavior, and one of the main keys is stress. Many health and behavior problems we see at home have their roots here. Understanding what's going on with your cat is the first step to improving its quality of life.",
            "sections": [
              {
                "heading": "**1. What is stress really?**",
                "body": "Stress isn't always 'bad'. It's a natural bodily reaction that prepares the cat to adapt to changes (a move, a trip, the arrival of a baby). Positive stress: It helps him react and adapt. Negative stress: It occurs when the situation is too intense or lasts too long. If the cat can't adapt, stress becomes chronic and can lead to anxiety. Key difference: Fear vs. Anxiety. Fear: Immediate reaction to a real danger. The heart beats faster and the cat is ready to flee or defend itself. It's useful for survival. Anxiety: The cat feels fear about something that's not dangerous or that it can't control. It doesn't know how to resolve the situation, so it lives in constant tension."
              },
              {
                "heading": "**2. Why are some cats more sensitive?**",
                "body": "Not all cats react the same way. Their level of stress tolerance depends on two main factors: A. Genetics and Temperament: Some cats are naturally more secure; others, more timid. Factors such as breed, sex, and genetic heritage influence this. A nervous cat will always need a more tranquil and predictable environment. B. Early Socialization (The Critical Window): The first 2 to 7 weeks of life are decisive. If there was affectionate human contact: The kitten will learn that people are safe. It will be more sociable and resilient to stress. If there was a lack of contact or negative experiences: It is very likely that it will develop distrust and fear towards humans or new stimuli when it is an adult. The environment matters: Kittens raised in environments rich in stimuli (sounds, textures, games) tend to be more adaptable adults."
              },
              {
                "heading": "**3. What causes stress in my cat?**",
                "body": "Cats need to feel like they're in control of their environment. When they lose that control, stress appears. Social Factors: Changes in daily routine. Arrival of new people, babies, or other pets. Arguments or yelling at home. Punishments or irregular attention (sometimes a lot, sometimes none). Physical Factors: Moves or renovations. Insufficient space or poor organization (e.g. litter box near food). Competition for resources (if there are multiple cats and few dishes or litter boxes)."
              },
              {
                "heading": "**4. Warning Signs: How do I know if my cat is stressed?**",
                "body": "Cats are experts at hiding pain and discomfort. You must be a detective. Immediate Physical Symptoms: Rapid breathing or panting. Very dilated pupils. Trembling or excessive salivation. Vomiting or diarrhea (e.g. before traveling). Changes in Behavior: Posture: Ears back, low tail, tense body. Hiding: Spends a lot of time hidden or under furniture. Aggression: Growls, hisses, or attacks without apparent reason. Extreme vigilance: Never relaxes, always 'on guard'. Signs of Chronic Stress (Long-term): If stress is not treated, more serious problems appear: Compulsive grooming: Licks so much that loses hair (psychogenic alopecia). Elimination problems: Urinates or defecates outside the litter box (marked territory or anxiety). Sleep changes: Sleeps little, poorly, or always in tense positions (not on back or side). Changes in eating: Eats excessively (anxiety) or stops eating. Repetitive behaviors: Chases tail, meows constantly, or walks aimlessly."
              },
              {
                "heading": "**5. The Impact on Physical Health**",
                "body": "Stress isn't just 'mind stuff'; it sickens the body. Feline Idiopathic Cystitis: Inflammation of the bladder without bacterial infection, directly linked to stress. Digestive problems: Gastritis, chronic vomiting, or diarrhea. Skin problems: Excessive licking wounds. Obesity and Diabetes: Sometimes, owners give food to 'console' the cat, leading to weight gain. Weakened immune system: Stressed kittens or adult cats get sick more easily (colds, infections). Important: Before assuming it's stress, visit the vet. Conditions like hyperthyroidism, joint pain, or tumors can mimic stress or anxiety symptoms."
              },
              {
                "heading": "**6. How to Help Your Cat (Treatment and Handling)**",
                "body": "The goal is to give back a sense of security and control. A. Behavioral Therapy (Most Important): Identify the cause of stress and modify the environment. Respect his routines. Provide high places and safe hiding spots. Play with him daily to release tension. B. Environmental Aids: Pheromones: Chemical substances (such as Feliway) that mimic the facial pheromones of cats, transmitting a message of 'calm' and 'familiarity'. Help reduce marking and anxiety. Environmental enrichment: Scratching posts, interactive toys, and safe window access. C. Anti-Stress Nutrition: There are specific diets or supplements that help: Tryptophan: An amino acid precursor to serotonin (the happiness hormone). Dairy derivatives: Hydrolyzed proteins with a natural calming effect. These nutrients help regulate mood, improve digestion, and care for the skin. D. Medication: In severe cases of anxiety, a veterinarian behaviorist may prescribe medication. Never medicate your cat on your own. Medications should always be a complement to behavioral therapy, not the only solution."
              },
              {
                "heading": "Conclusion",
                "body": "Stress in cats is invisible but powerful. A calm cat is a healthy cat. Observe its small changes, respect its need for control, and if you see warning signs, seek professional help. Your understanding can totally change its well-being."
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
        "label": "Types of diet",
        "topics": [
          {
            "slug": "comida-humeda-vs-seca",
            "title": "Wet food vs. dry food",
            "intro": "This is one of the most frequently asked and debated questions among cat owners. The answer matters because cats have a particular relationship with water that makes the type of food directly impact their renal health.",
            "sections": [
              {
                "heading": "The Nature of Cats and Water",
                "body": "Cats evolved in arid environments and obtain most of their water from their prey. Their thirst is 'calibrated' for food with 70% humidity. Dry food has only a 10%, which can lead to chronic dehydration and renal and urinary problems."
              },
              {
                "heading": "Benefits of wet food",
                "body": "Higher hydration, greater satiety with fewer calories, more similar to a natural diet, better for cats with a tendency to urinary or renal problems. Most veterinarians recommend it as the main food."
              },
              {
                "heading": "The role of dry feed",
                "body": "It's not bad, but it shouldn't be the only food. It can be useful as a supplement, for puzzle toys or as a snack. Choose treats with a high percentage of animal protein (not vegetable) and without grains as the first ingredient."
              }
            ]
          },
          {
            "slug": "dieta-barf",
            "title": "BARF diet for cats",
            "intro": "The BARF diet (Biologically Appropriate Raw Food) is based on feeding the cat with raw meat, meaty bones, and organs, mimicking the diet of its wild ancestors. It has passionate defenders and detractors with solid arguments.",
            "sections": [
              {
                "heading": "Principles of the BARF Diet",
                "body": "The ideal diet for a cat on a BARF diet includes approximately 70% lean meat, 10% raw meaty bones (never cooked), 10% organs (liver, heart), and the remaining 10% of other tissues. It requires careful supplementation with taurine, calcium, and vitamins."
              },
              {
                "heading": "Reported benefits",
                "body": "Improved coat, reduced stool production, better hydration, cleaner teeth, and increased energy are the most cited benefits by those who practice it. Some studies suggest a lower risk of obesity."
              },
              {
                "heading": "Risks to consider",
                "body": "Bacterial contamination (Salmonella, Listeria), nutritional imbalances if not formulated correctly, and risk of asphyxiation with bones. Not recommended for immunocompromised cats, those undergoing oncological treatment, or seniors with compromised digestive systems."
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
            "title": "Toxic foods for cats",
            "intro": "Many completely safe foods for humans are hazardous or lethal to cats. Knowing this list can save your companion's life.",
            "sections": [
              {
                "heading": "Extreme danger: severe toxins",
                "body": "Onion, garlic, leek, and scallion (in all forms: raw, cooked, or powdered) destroy red blood cells. Chocolate and coffee contain theobromine and caffeine that can cause seizures and death. Grapes and raisins cause acute kidney failure for reasons still unknown."
              },
              {
                "heading": "Moderate danger",
                "body": "Cow's milk causes diarrhea in most adult cats, which are lactose intolerant. Avocados contain persin, toxic to many animals. Any amount of alcohol is hazardous. Macadamia nuts can cause weakness and fever."
              },
              {
                "heading": "What they can definitely eat as a prize",
                "body": "Small amounts of cooked boneless chicken or turkey, cooked salmon or tuna (not canned in oil with salt), cooked carrot, squash, cranberries, and cucumber are safe options as an occasional snack."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "juego",
    "label": "Game",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "Stimulation, toys, and enrichment",
    "subcategories": [
      {
        "slug": "importancia",
        "label": "Why it is vital",
        "topics": [
          {
            "slug": "juego-cachorros",
            "title": "The game in puppies: the base of everything",
            "intro": "The first six months of a cat's life are a critical period of development. What it learns during playtime at this stage will largely determine how it will interact with humans and other animals for the rest of its life.",
            "sections": [
              {
                "heading": "Socialization window",
                "body": "Between 2 and 9 weeks of life, the cat learns what is normal in its world. A puppy that interacts with people, other cats, household noises, and varied experiences during this period will be a more secure and adaptable adult."
              },
              {
                "heading": "The most common mistake: hands as a toy",
                "body": "Play with a puppy with your hands or feet may seem harmless, but it teaches that human skin is a valid prey. When that kitten weighs 11 pounds, bites and scratches will be painful and the behavior difficult to correct. Always use toys at a distance."
              },
              {
                "heading": "I play as a preventive measure",
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
            "title": "Cans and chew toys",
            "intro": "The wands with feathers, mice, or hanging worms are the most effective toys because they allow simulating the complete hunting sequence. They are indispensable in the repertoire of any cat.",
            "sections": [
              {
                "heading": "Why do they work so well",
                "body": "Activate the hunting instinct in its entirety: the irregular movement imitates that of a real prey. The cat can stalk, chase, catch, and 'kill'. This complete sequence releases endorphins and deeply satisfies."
              },
              {
                "heading": "How to move them correctly",
                "body": "The most common mistake is moving them too fast and without stopping. Real prey stops, hides, moves at unpredictable angles. Simulate that: pause, hide it behind a pillow, make it appear suddenly, let it move slowly."
              },
              {
                "heading": "Log out properly",
                "body": "Always allows the cat to 'catch' and 'kill' the toy several times at the end. A cat that never catches the prey gets frustrated. After the game, a small snack completes the natural cycle: hunt → eat → groom → sleep."
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
                "body": "Reduce anxiety and boredom, slow down eating (preventing vomiting from eating too quickly), stimulate cognitively, promote movement, and may reduce obesity."
              },
              {
                "heading": "How to start",
                "body": "Start with very easy puzzles: a tray with compartments, a simple ball dispenser. If the puzzle is very difficult from the start, the cat will get frustrated and reject it. Gradually increase the difficulty over the course of weeks."
              },
              {
                "heading": "Home puzzles",
                "body": "You don't need to buy anything: a cardboard box with holes, a tray of ice with meatballs, a plastic bottle with small openings, or hiding prizes under cups are effective and free puzzles."
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
    "description": "Dog, adult, senior, and their needs",
    "subcategories": [
      {
        "slug": "genetica-felina",
        "label": "Genetics and Heredity",
        "topics": [
          {
            "slug": "guia-genetica-colores",
            "title": "Feline Genetics: Understanding Colors and Inheritance (without complications)",
            "intro": "The genetics of cats isn't magic, it's science. Understanding the basics will help you understand why your cat has that specific color and how inheritance works in its coat, leaving behind old myths to focus on current science.",
            "sections": [
              {
                "heading": "**Debunking the Darwin Myth**",
                "body": "For a long time, it was believed that domestication 'created' new varieties on its own, but this is false. Humans do not create genes, but rather select them. In nature, unusual mutations are usually eliminated if they do not help to survive, but at home we protect variations such as long hair or certain colors for aesthetic reasons. All current variety already existed potentially in wild ancestors; we have only accelerated its appearance through selective breeding."
              },
              {
                "heading": "**2. How do colors work (the basics)?**",
                "body": "The characters depend on the genes and their versions called 'alleles'. Using the example of Black (D) and Blue/Gray (d): DD (Homozygous Dominant) results in a black cat; Dd (Heterozygous) results in a black cat visually but 'carrier' of the blue gene; dd (Homozygous Recessive) results in a blue cat. The golden rule is that black dominates over blue: if there is at least one 'D', the cat will be black. To be blue, it must receive the 'd' gene from both parents."
              },
              {
                "heading": "**3. The Importance of Responsible Selection**",
                "body": "Unlike dogs, feline color genetics is extremely specialized and distinctive among breeds. International judges and geneticists recommend strict breeding standards to avoid unexpected results or health problems. Not all color crosses are recommended, as some may result in unwanted patterns by breed standard."
              },
              {
                "heading": "**4. Quick Guide to Recommended Crossings (FIFE)**",
                "body": "The International Cat Federation (FIFE) suggests avoiding random crosses between very distinct color varieties. The basic principles are: 1. Breeding within the same breed (e.g. Persians with Persians). 2. Respecting the length of the hair (e for short hair, l for long hair). 3. Avoiding 'prohibited' crosses: if there is no letter in the official tables for a specific combination, it is better to abstain due to unpredictable or unsatisfactory results."
              },
              {
                "heading": "**5. Curiosity: Do cats see colors?**",
                "body": "Yes, but not like us. They have better color vision than was thought, but distinguish fewer nuances than humans. It's ironic that, although they see fewer colors, humans have created a variety of pigments and distributions in their fur much richer and more complex than they themselves can appreciate."
              },
              {
                "heading": "Conclusion for the Creator or Owner",
                "body": "Genetics is probability: if you cross two black carriers of blue (Dd x Dd), you will have black offspring and some blues. If you cross two blues (dd x dd), all will be blue. If you cross a pure black (DD) with a blue (dd), all will be black but carriers. Knowing these basics allows you to predict layers and breed in an ethical, responsible, and health-standards-respecting manner."
              }
            ]
          }
        ]
      },
      {
        "slug": "reproduccion-felina",
        "label": "Feline Reproduction",
        "topics": [
          {
            "slug": "guia-gestacion-gatas",
            "title": "Pregnancy in cats: A simple and natural explanation",
            "intro": "The feline gestation is a precise dance between physical signals, hormones, and embryonic development. Understanding each stage helps us to respect and care for our cats better during this natural process.",
            "sections": [
              {
                "heading": "How does a cat's cycle work?",
                "body": "The cat is like a \"seasonal clock\" that goes into heat when there are more hours of daylight (spring-summer). Mating is the key: the cat does not ovulate alone, but needs the physical stimulation of the mount to release the LH hormone and have its eggs come out of the ovaries between 24 and 50 hours later. If there is no fertile mount, it may have a \"pseudogestation,\" where its body acts as if it were pregnant for approximately 45 days, although there are no kittens."
              },
              {
                "heading": "The Pregnancy Journey, Step by Step",
                "body": "Timeline after mating: From 0 to 50 hours, mating stimulates ovulation. At +30 hours, the eggs are fertilized in the fallopian tubes. At 5-6 days, the embryos (morulas) arrive at the uterus. Between 8-10 days, they become blastocysts. At 12-13 days, implantation occurs in the uterine wall (the embryos travel between the horns to distribute evenly). At 28-30 days, the fetal stage begins with the formation of organs. Finally, between 64 and 67 days, the kittens are born."
              },
              {
                "heading": "The hormones: The orchestra conductors",
                "body": "The body uses key messengers: LH (triggers ovulation at the start); Progesterone P4 (keeps the uterus calm, rises at the start and falls slowly after day 30); Prolactin (helps to maintain corpus luteum, increases from day 25-30 being key in the second half); Relaxin (softens pelvic tissues and helps to maintain pregnancy, rises from day 20-30 only in pregnant women); and Estradiol (prepares uterus and breasts, rising at the end)."
              },
              {
                "heading": "Who produces progesterone in the end?",
                "body": "There is a scientific debate: Theory A says that the ovaries are essential until the end, while Theory B indicates that the placenta takes over in the second half. The truth is that if you operate before day 45-50, the pregnancy is interrupted, but after day 50 it can continue, which demonstrates that the feline placenta has the capacity to produce progesterone in the last weeks. It's a team effort with prolactin as coordinator."
              },
              {
                "heading": "Quick facts to remember",
                "body": "Duration of pregnancy: 64-67 days (≈9 weeks). Litter size: 1 to 5 kittens (average 3-4). Birth weight: 85-105 grams. The placenta is of the 'zonary' type (belt-like shape) and 'endoteliocorial' (very invasive), which explains why cats cannot donate blood easily."
              },
              {
                "heading": "Why is it important to know this?",
                "body": "For responsible breeders, it allows for better prenatal care. For veterinarians, knowing the hormones enables them to diagnose problems or ethically terminate pregnancies. For owners, it's crucial to know that stress or sudden changes can directly affect hormones and, consequently, the success of the pregnancy."
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
            "intro": "The first two months of a cat's life are extremely intense. During that time, a completely dependent and defenseless being becomes an agile and curious animal. Understanding this stage is crucial for any breeder or adopter.",
            "sections": [
              {
                "heading": "0–2 weeks: neonatal period",
                "body": "The kittens are born blind, deaf, and unable to regulate their body temperature. They completely depend on the mother to feed (every 2 hours), warm up, and stimulate urination and defecation. Their only functional sense at birth is smell."
              },
              {
                "heading": "2–7 weeks: primary socialization",
                "body": "The eyes open between 10 and 16 days. During this period, the nervous system develops at maximum speed. Positive experiences with people, sounds, and varied environments during these weeks determine the adult personality."
              },
              {
                "heading": "7–12 weeks: progressive independence",
                "body": "Weaning is complete around 8 weeks. It's the ideal time for adoption: mature enough to be separated from the mother, but still in the window of human socialization. Separating before 8 weeks increases the risk of behavioral problems."
              }
            ]
          }
        ]
      },
      {
        "slug": "senior",
        "label": "Senior (over 10 years)",
        "topics": [
          {
            "slug": "cuidados-senior",
            "title": "Care of the older cat",
            "intro": "A 10-year-old cat is approximately equivalent to a 56-year-old person. From 15 years on, to a human over 76. Their needs change significantly and deserve adaptations in their environment and medical routine.",
            "sections": [
              {
                "heading": "Physical changes expected",
                "body": "Less joint flexibility, less shiny coat, possible loss of muscle mass, changes in sleep patterns, reduced sensory acuity, and greater vulnerability to chronic diseases. Not all changes are pathological: some are simply normal aging."
              },
              {
                "heading": "Environmental Adaptations",
                "body": "Ramps or stairs to access high places, sandbox with low entrance, elevated food and water containers to reduce cervical tension, warm and accessible rest areas. Subtle changes in the environment make a big difference in their quality of life."
              },
              {
                "heading": "Intensified medical follow-up",
                "body": "Starting at age 10, check-ups should be semiannual and always include a complete blood analysis and thyroid profile. Early detection of hyperthyroidism, kidney disease, or diabetes can add years of quality of life."
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
                "heading": "**Peace and Security**",
                "body": "Your safety comes first; a hurt kitten can bite or scratch. Keep your face away from its claws and mouth. Don't use a muzzle, as it's contraindicated in cats with respiratory problems or vomiting. The \"blanket\" technique is ideal: wrap it gently in a towel, leaving only its head out to calm it and handle it safely."
              },
              {
                "heading": "**2. Rapid Assessment (Rule ABCDE)**",
                "body": "Before moving it, check: A (Airways): Make sure there are no blockages in the nose or mouth. B (Breathing): Observe if the chest is moving. C (Circulation): Apply pressure to bleeding wounds with clean gauze. D (Pain/Immobilization): Do not move abruptly if you suspect fractures. E (Exposure): Protect open wounds with clean cloths."
              },
              {
                "heading": "**3. Emergencies in Puppies**",
                "body": "The babies are very fragile to two dangers: 1. Hypoglycemia (Low Blood Sugar): If it presents extreme weakness or pale gums, apply honey or sugar under its tongue or on its gums. 2. Hypothermia: If the kitten is cold to the touch, warm it up with your body heat (under your clothes) or a warm water bottle wrapped in a towel (never direct)."
              },
              {
                "heading": "**4. Safe Transfer**",
                "body": "Always use a sturdy carrier or ventilated box. If you suspect broken bones, minimize movement using a rigid board or towel as an improvised stretcher. During the trip, speak softly and keep the vehicle stable to reduce your stress."
              },
              {
                "heading": "**Feline Emergency Kit**",
                "body": "At the ready: Veterinary emergency phone numbers, clean towels or blankets, sterile gauze, honey or glucose, medical adhesive tape, and a carrier ready. Being prepared makes a difference in a critical situation."
              },
              {
                "heading": "Final Warnings",
                "body": "Call the veterinarian while you're on your way to the clinic so they can wait for you. NEVER self-medicate with human pharmaceuticals (paracetamol or ibuprofen), as they are deadly. Act quickly: in an emergency, every minute counts to save their life."
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
    "description": "**Adopting a Cat: A Step-by-Step Guide**\n\nAre you ready to welcome a new furry friend into your family? Adopting a cat can be a incredibly rewarding experience, but it's essential to do it responsibly and with care. Here's a comprehensive guide to help you navigate the process:\n\n**Step 1: Research and Preparation**\n\nBefore bringing a cat home, it's crucial to research and prepare for the responsibilities that come with cat ownership. This includes:\n\n*   Understanding the needs and personalities of different cat breeds\n*   Learning about cat behavior, nutrition, and health\n*   Preparing your home and family for a new cat\n*   Budgeting for the costs of cat care, including food, vet bills, and supplies\n\n**Step 2: Choose a Shelter or Rescue Organization**\n\nThere are many wonderful shelters and rescue organizations that work tirelessly to find forever homes for cats in need. Some popular options include:\n\n*   Local animal shelters\n*   Humane Society chapters\n*   ASPCA affiliates\n*   Breed-specific rescue groups\n\n**Step 3: Meet Your Match**\n\nOnce you've chosen a shelter or rescue organization, it's time to meet your potential new cat. This is an exciting part of the process, as you'll get to interact with the cat and see if you're a good match.\n\n*   Spend time with the cat, observing its behavior and personality\n*   Ask the shelter staff or rescue volunteers about the cat's background and history\n*   Consider factors like age, energy level, and grooming needs\n\n**Step 4: Finalize the Adoption**\n\nIf you've found your perfect match, it's time to finalize the adoption. This typically involves:\n\n*   Filling out an adoption application\n*   Paying an adoption fee\n*   Signing an adoption contract\n*   Receiving any necessary paperwork and supplies\n\n**Step 5: Bring Your Cat Home**\n\nThe final step is to bring your new cat home and start the transition process. This may involve:\n\n*   Introducing your cat to its new environment\n*   Establishing a routine for feeding, playtime, and sleep\n*   Providing a safe and comfortable space for your cat to rest and relax\n\nBy following these steps, you'll be well on your way to creating a happy and healthy home for your new feline friend.",
    "subcategories": [
      {
        "slug": "bienvenida",
        "label": "Welcome",
        "topics": [
          {
            "slug": "guia-bienvenida-cuidados",
            "title": "Welcome Home: How to Care for Your New Cat from Day One",
            "intro": "Congratulations on the adoption! Adopting a cat is a wonderful experience, but it also involves responsibility. The first days are crucial for its adaptation. Here's everything you need to know to ensure its health, well-being, and a happy coexistence.",
            "sections": [
              {
                "heading": "**1. The First Days: Surveillance and Adaptation**",
                "body": "The change of environment generates stress, which can lower the cat's defenses. Visit the veterinarian: Take your cat to its new trusted clinic as soon as possible. Deliver all previous medical documentation (vaccinations, de-worming) and follow their instructions. What to observe: Whether it eats and drinks normally, whether it has energy consistent with its age, whether the stools are consistent (some initial softness due to diet change is normal, but there should be no persistent diarrhea) and absence of symptoms such as coughing, vomiting, mucus or discharge. In case of any doubt, consult your veterinarian."
              },
              {
                "heading": "**2. Preventive Health: Vaccines, Parasites, and Sterilization**",
                "body": "Vaccination: Vaccines protect against serious diseases (such as panleukopenia, feline respiratory complex, or leukemia). Follow the schedule indicated by your veterinarian. The rabies vaccine, although not always legally mandatory for cats (depending on the region), is highly recommended. Deworming: It is essential for the cat's health and your family's (zoonosis). Internal: recommended every 3 months. External: vital if the cat goes out or has access to balconies/terraces. Sterilization: It is the most responsible and healthy decision. Benefits: prevents unwanted litters, reduces marking, decreases fights, and prevents serious diseases (breast tumors, pyometras). Myths: It does not change their personality or make them 'lazy'. Sterilize your cat, whether male or female, indoor or outdoor."
              },
              {
                "heading": "**3. Nutrition and Hydration**",
                "body": "Proper Food: Use high-quality dry food adapted to your age and physical condition. Avoid giving homemade food or human leftovers. Rewards: Use them in moderation to avoid obesity. Fresh Water: Essential, place several water fountains around the house, away from food and litter boxes. Some cats prefer moving water sources. Adding wet food helps with hydration. Forbidden: Cow's milk (most adult cats are lactose intolerant). Natural yogurt or unsalted cheese can be given as an occasional reward, but are not necessary."
              },
              {
                "heading": "**4. Personal Hygiene and Physical Care**",
                "body": "Cats need your help in certain aspects. Brushing: Short hair once a week (daily during moulting); long hair daily to prevent knots and hairballs. If it expels hairballs with difficulty, consult about oatmeal pastes. Nails: Cut only the transparent tip, avoiding the pink (vascularized) part. Baths: Generally not necessary, only if very dirty or on medical advice."
              },
              {
                "heading": "**5. The Sand Pit: Golden Rules**",
                "body": "A cat that doesn't use the litter box often expresses a medical or stress issue. Quantity: Rule N+1 (number of cats + 1 box). Location: Quiet, accessible places, away from noise (washers) and their food. Type: Many don't like closed ones; try an open and large one. Cleaning: Remove waste daily and wash the box regularly with water and neutral soap (avoid bleach or ammonia). Sand: They prefer unscented sand with a fine texture."
              },
              {
                "heading": "**6. Environmental Enrichment and Behavior**",
                "body": "Language: A raised tail is a friendly greeting; a rapidly moving tail is irritation; ears back indicate fear. Purring can be well-being, pain, or stress. Game: Spend 15-20 minutes daily on simulated hunting (sticks, balls). Avoid using your hands or feet. Scratching posts: Provide stable, tall, and attractive material scratching posts (sisal, wood). Never punish for scratching furniture; redirect and reward. Verticality: They need high places to observe and safe hiding places. Respect their solitude."
              },
              {
                "heading": "**7. Specific Tips by Age**",
                "body": "PUPPY: Socialization (2-8 weeks) is the key stage to accept human contact and vet visits. Teach it what it can bite. Get it used to the carrier by leaving it open at home. Protect cables and windows. ADULT: Be patient, adaptation can take weeks. Use an acclimation room when arriving with all its resources. Make presentations with other animals very gradually. Keep fixed schedules for food and play."
              },
              {
                "heading": "**8. Legal Aspects and Security**",
                "body": "Microchip: It is mandatory and must be up to date (RIAC in Madrid). Accident Prevention: Cat Parachute Syndrome. Install mosquito nets resistant to windows and balconies. A fall from height can be fatal; don't rely on their 'ability' to land on their feet. Every cat is a world. Observe, respect their times and consult your veterinarian at any sudden changes."
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
    "description": "Breeds of cats",
    "subcategories": [
      {
        "slug": "razas-felinas",
        "label": "Breeds of Cats",
        "topics": [
          {
            "slug": "guia-completa-razas",
            "title": "Complete Guide to Cat Breeds",
            "intro": "The feline world is vast and fascinating. Although all cats share basic instincts, each breed has a unique personality, care needs, and physical characteristics. This guide integrates historical records with modern classifications from organizations like TICA, CFA, and FIFe, organized to help you understand which type of cat fits best in your home. Note: Beyond breed, individual personality and early socialization play a fundamental role.",
            "sections": [
              {
                "heading": "**The Historic Classics**",
                "body": "Old breeds with defined personalities: Abyssinian (Ethiopia/Egypt): Active, curious, 'dog-cat', needs a lot of mental stimulation. Siamese (Thailand): Extremely vocal, intelligent, demands constant attention. Persian (Iran): Calm, sweet, quiet; requires daily brushing and facial cleaning. Maine Coon (USA): The 'gentle giant', sociable, ideal for families with children; requires space. Bengal (USA): High energy, athletic, looks like a miniature leopard; needs intense daily stimulation."
              },
              {
                "heading": "**2. Gentle Giants and Adaptable to Cold**",
                "body": "Robust cats with thick coats. Maine Coon: One of the largest, stands out for its 'lynx tips' and soft meows. Norwegian Forest (Skogkatt): A natural climber with waterproof coat, independent but affectionate. Siberian: Famous for being hypoallergenic (produces less Fel d 1), agile and affectionate. Ragdoll: Large and muscular, with a gentle temperament; it 'collapses' like a rag doll when picked up."
              },
              {
                "heading": "**3. Elegance of Short Hair and Athletic Body**",
                "body": "Low-maintenance coat with a lot of interaction. British Shorthair: Round face, compact and calm; doesn't like to be carried around much. Russian Blue: Silver coat and green eyes, shy with strangers but loyal. Burmese: Muscular and heavy, very people-oriented. Bombay: Looks like a miniature black panther, loves heat and cuddles. Chartreux: Old French breed, silent and expert hunter with water-repellent coat."
              },
              {
                "heading": "**4. Unique Mutations: Ears, Tails, and Textures**",
                "body": "Exotic genetic characteristics. Scottish Fold: Ears folded forward, 'Buddha' position; requires joint revision. Munchkin: Short legs, outgoing and curious. Sphynx: Hairless, sociable and seeks warmth; requires weekly baths. Devon Rex & Cornish Rex: Wavy or curly coat, mischievous and attached. American Curl: Ears back. Manx & Japanese Bobtail: The first without tail and robust; the second with pom-pom tail, symbol of good luck."
              },
              {
                "heading": "**5. Exotic and Rare Species**",
                "body": "Less common breeds. Ocicat: Appears like a wild ocelot, trainable and sociable. Toyger: Imitation of a tiger, intelligent. Lykoi: The 'werewolf cat', appearance of a werewolf, curious and playful. Singapura: One of the smallest breeds, mischievous and fond of heights. Korat: Thai gray silver with heart on forehead, sensitive to noise and good luck charm."
              },
              {
                "heading": "📝 Tips for Choosing Your Breed",
                "body": "Activity Level: Sofa buddy (Persian) or athlete (Bengal)? Grooming Time: Daily brushing (Maine Coon) or low maintenance (Russian Blue)? Vocalization: If you prefer silence, avoid Siameses and opt for Ragdolls. Children and pets: Maine Coon and Birman are more tolerant. Allergies: None are 100% hypoallergenic, but Siberian and Russian Blue are usually better tolerated."
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
    "description": "Breeds of cats",
    "subcategories": [
      {
        "slug": "adquisición chile",
        "label": "Chile",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-chile",
            "title": "Responsible Acquisition in Chile: Legal and Ethical Guide",
            "intro": "If you've decided that a specific breed fits your lifestyle, it's crucial to get it responsibly. In Chile, the purchase of animals is regulated by Law 21.020 (Cholito Law), which protects animal welfare and requires responsible ownership. Buying a cat isn't like buying an object; it's acquiring a living being with complex needs.",
            "sections": [
              {
                "heading": "**1. Why choose a Registered Breeder?**",
                "body": "Ethical breeders preserve the breed, care for genetic and social health, and socialize kittens. The safest way to identify them is to check if they are registered in RENAGACH (Chilean National Cat Registry), representative of federations such as WCF and TICA. Advantages of buying with pedigree: Genetic Certification (guarantees the breed), Health (genetic tests to rule out diseases such as PKD in Persians or HCM in Maine Coons), and Socialization (they grow up in a family environment, not in cages)."
              },
              {
                "heading": "Directory of Reference (Ethical Hatcheries in Chile)",
                "body": "Recommended list (always verify records): Maine Coon: Colitas Arriba, Nahuelhuén (Santiago/La Reina). Persian / Himalayan: GatyKey Cattery, Viestmaden Cattery (La Florida). Ragdoll: Reflejo de Luna (gentle temperament). Somali: Per-Bast Cattery (only specialized). Sphynx: Ti Voglio Bene, The Kittens House. British Shorthair: Von & Von Cattery (robust structure)."
              },
              {
                "heading": "**2. Marco Legal: Your Rights and Obligations (Law 21.020)**",
                "body": "For the transaction to be legal, the breeder must comply with: Mandatory Microchip (implanted and registered) and Sales Contract. The contract must detail health guarantees (negative tests for FeLV/FIV), commitment to sterilization, and a return clause. Your Responsibility: Once the purchase is made, you must register the animal in the National Pet Registry if the data were not updated immediately."
              },
              {
                "heading": "**3. Checklist: How to Detect an Ethical Breeder**",
                "body": "Before paying, check: Do they allow visits? They should be clean and have human contact. What is the age of delivery? NEVER accept a kitten under 12 weeks (3 months). Is the documentation complete? You should receive a birth certificate/Preliminary Pedigree, up-to-date vaccination card (signed by a licensed veterinarian) and a parasite control certificate. Is there transparency in health? A good breeder will ask about your situation to ensure a good home."
              },
              {
                "heading": "**4. Legal Importation of Exotic Breeds**",
                "body": "If you're looking for breeds like Lykoi, Toyger or Bengal with specific lines, the process is strict: meet SAG (Agricultural and Livestock Service) requirements, country of origin health certificates, and possible quarantines. It's recommended to consult with a specialized pet transport agency to avoid customs holdups."
              },
              {
                "heading": "Beware of the \"Cat Factories\"!",
                "body": "Don't buy from free markets, informal markets, or social media ads without a visible physical address. Be wary of places with multiple breeds available immediately. These places prioritize profit over welfare, resulting in animals with chronic health problems and short lives. Your conscious choice helps to eradicate this abuse."
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
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to acquire it responsibly. In Argentina, animal ownership is protected by National Law 27,592 (Alica Law) and various ordinances (such as Law 4040 in CABA), which recognize animals as sentient beings. Buying a cat is not a routine commercial transaction; it is incorporating a family member.",
            "sections": [
              {
                "heading": "**1. Why choose a Registered Breeder?**",
                "body": "Ethical breeders in Argentina preserve the breed, care for genetic health, and socialize the kittens. The main entities are FAAC (Argentine Federation of Cat Enthusiasts), affiliated with WCF, and local TICA or FIFe clubs. Advantages of buying with pedigree: Genetic Certification (guarantees registered ancestors), Preventive Health (genetic tests for PKD or HCM), and Early Socialization (human stimuli that prevent behavioral problems)."
              },
              {
                "heading": "**2. Marco Legal: Your Rights and Obligations**",
                "body": "For the transaction to be legal in Argentina, the breeder must comply with: Identification (Microchip), mandatory in CABA, Córdoba, and Santa Fe among others. Sales Contract with animal data, health guarantees, return clause, and sterilization commitment. Vaccination Card: It must be signed by a registered Veterinarian, with triple feline vaccines (and quintuple if applicable) up to date according to the age."
              },
              {
                "heading": "**3. Checklist: How to detect an Ethical Breeding in Argentina?**",
                "body": "Before paying, check: Do they allow in-person visits? You need to know the cattery and see the mother; be wary of deliveries at shopping malls. What is the age of delivery? NEVER before 12 weeks (3 months). Is the documentation complete? You should receive a Birth Certificate/Pedigree, vaccination card, and invoice or receipt. Will there be a buyer interview? A good breeder will ask you about window screens and your previous experience."
              },
              {
                "heading": "**4. Legal Importation of Exotic Breeds**",
                "body": "If you're looking for breeds not commonly created (Lykoi, Toyger), the process is regulated by the SENASA (National Service of Animal Health and Food Quality). Requirements: Health certificate of origin, rabies vaccination, and possible quarantines. It is recommended to hire a specialized pet transportation agency; bringing a cat on your own may result in detentions or severe fines."
              },
              {
                "heading": "Beware of the 'Cat Factories' and Scams!",
                "body": "DON'T GET SCAMMED: They ask for signals in advance without showing the animal (common scam; use real-time video calls). They sell at fairs or plazas: animals without sanitary control usually die soon ('pet of the week'). They have an 'infinite stock' of multiple breeds available immediately. Suspiciously low prices: ethical breeding involves high costs in health and premium food that a low price does not cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Argentina is a legal and moral responsibility. By choosing a registered breeder with FAAC or international federations, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición uruguay",
        "label": " Uruguay",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-uruguay",
            "title": "Responsible Acquisition in Uruguay: Legal and Ethical Guide",
            "intro": "If you've decided that a specific breed fits your lifestyle, it's essential to acquire it responsibly. In Uruguay, animal ownership is protected by National Law 18.471 (Animal Protection) and locally regulated by decrees such as Decree 319/011 in Montevideo. Buying a cat isn't just any commercial transaction; it's incorporating a sensitive family member.",
            "sections": [
              {
                "heading": "**1. Why choose a Registered Breeder?**",
                "body": "Ethical breeders in Uruguay preserve the breed, care for genetic and social health, and socialize kittens. The safest way to identify them is to verify their affiliation with the AFU (Uruguayan Feline Association), representative of the WCF and, on occasion, TICA or FIFe. Advantages: Genetic Certification (registered ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of behavioral problems)."
              },
              {
                "heading": "**2. Marco Legal: Your Rights and Obligations**",
                "body": "For a secure transaction in Uruguay, the breeder must comply with: Identification (Microchip) according to municipal ordinances (especially in Montevideo and Canelones) and registration in corresponding records. Sales Contract with data from the parties, health guarantees (FeLV/FIV), return clause (abandonment prohibited) and commitment to sterilization. Vaccination Card: Signed by a registered Veterinarian with the triple feline vaccine on the same day."
              },
              {
                "heading": "**3. Checklist: How to detect an Ethical Breeding Farm in Uruguay?**",
                "body": "Before paying, check: Do they allow in-person visits? You need to know the cattery and see the mother; be wary of deliveries at shopping malls. What is the delivery age? NEVER before 12 weeks (3 months). Is the documentation complete? You should receive a Birth Certificate/Pedigree from the AFU, vaccination card, and invoice or receipt. Will the buyer be interviewed? A good breeder will want to know about your window and balcony protections."
              },
              {
                "heading": "**4. Legal Importation of Exotic Breeds**",
                "body": "The process is regulated by the MGAP-DIGEGA (General Directorate of Agricultural Services). Requirements: International zoosanitary certificate, current anti-rabies vaccination, and entry protocols. It is recommended to hire a specialized pet transport agency ('Pet Relocation') to manage customs procedures and avoid the retention of the animal at the border."
              },
              {
                "heading": "Beware of the \"Cat Factories\" and Scams!",
                "body": "NO BUY IF: They ask you to signal in advance without showing the animal (common scam; demands a real-time video call). They sell at street fairs or plazas: high mortality rate due to lack of hygiene (panleucopenia). They have an \"infinite\" stock: indicates a factory where females are used indiscriminately. Suspiciously low prices: ethical breeding has high costs in health and records that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Uruguay is a legal and moral responsibility. By choosing a registered breeder from the AFU, you are financing the preservation of the breed and animal welfare, and saying \"no\" to the mistreatment of clandestine factories."
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
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to acquire it responsibly. In Peru, animal ownership is protected by Law No. 30407 (Animal Protection and Welfare Law) and technically regulated by SENASA under MIDAGRI. This law recognizes animals as sentient beings and prohibits their mistreatment, abandonment, and illegal trade.",
            "sections": [
              {
                "heading": "**1. Why choose a Registered Breeder?**",
                "body": "Ethical breeders in Peru preserve the breed, care for genetic and social health, and socialize kittens. The safest way to identify them is to verify their affiliation with FEPERU (Peruvian Federation of Felines), representative of WCF and, in some cases, TICA or FIFe. Advantages: Genetic Certification (official ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of behavioral problems such as fears or aggression)."
              },
              {
                "heading": "**2. Marco Legal: Your Rights and Obligations**",
                "body": "For the transaction to be legal in Peru, the breeder must comply with: Identification (Microchip) required by many municipalities (such as Lima Metropolitan, Miraflores, San Isidro) for municipal registration. Sales Contract with data from the parties, health guarantees (FeLV/FIV), return clause (abandonment prohibited) and commitment to sterilization. Vaccination Card: Signed by a registered Veterinarian, with the triple feline (and quintuple if applicable) up to date."
              },
              {
                "heading": "**3. Checklist: How to Detect an Ethical Breeding Farm in Peru.**",
                "body": "Before paying, check: Do they allow in-person visits? You must get to know the cattery and see the mother; be wary of deliveries in malls or parks. What is the delivery age? NEVER before 12 weeks (3 months). ✅ Is the documentation complete? You should receive a Birth Certificate/Pedigree from FEPERU, vaccination card, and invoice or receipt. ✅ Will there be an interview with the buyer? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Lima."
              },
              {
                "heading": "**4. Legal Importation of Exotic Breeds**",
                "body": "The process is strictly regulated by SENASA. Requirements: International zoosanitary certificate, current anti-rabies vaccination, and entry protocols. It is recommended to hire a specialized pet transportation agency ('Pet Relocation') to handle procedures with SENASA and avoid delays at Jorge Chávez airport or severe fines."
              },
              {
                "heading": "Beware of the \"Cat Factories\" and Scams!",
                "body": "DO NOT BUY IF: They ask for signals in advance without showing the animal (common scam; demands real-time video call). They sell at street fairs or plazas: high mortality rate due to lack of hygiene (coughing/panleukopenia). They have an \"infinite\" stock of multiple breeds: probable factory of exploitation. Suspiciously low prices: ethical breeding involves high costs in health and premium food that a low price does not cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Peru is a legal and moral responsibility. When choosing a registered breeder with FEPERU, you are financing the preservation of the breed and animal welfare, and saying \"no\" to the abuse of clandestine factories. Remember: Before buying, also consider adoption."
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
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to acquire it responsibly. In Bolivia, animal ownership and their well-being are fundamental, and the trade in breeds must be carried out under ethical and legal standards that recognize animals as sentient beings, prohibiting their mistreatment and illegal trade.",
            "sections": [
              {
                "heading": "**3. Checklist: How to detect an Ethical Breeding Farm in Bolivia?**",
                "body": "Before making any transfer or payment, check these points. If the answer is 'no' to any of them, be suspicious. Do they allow in-person visits? A responsible breeder will invite you to visit their home or cattery. You should be able to see the mother and a clean and safe environment. Be suspicious of those who only make deliveries at meeting points, malls, or parks. What is the delivery age? NEVER before 12 weeks (3 months). It is crucial for emotional and immunological weaning. Is the documentation complete? You should receive a Birth Certificate / Pedigree (or pre-pedigree issued by the corresponding feline association), Vaccination Card and deworming, and a Purchase Invoice or receipt. Does the buyer conduct an interview? A good breeder will ask you questions about your home, if you have window or balcony protections (vital in high-rise buildings in La Paz or Santa Cruz) and your experience."
              },
              {
                "heading": "**4. Legal Importation of Exotic Breeds**",
                "body": "If you're looking for breeds that are not commonly raised in Bolivia (such as Lykoi, Toyger or specific lines of Bengal cats), the process is strictly regulated by the SENASAG (National Service of Agricultural Health and Food Safety). Requirements: International zoosanitary certificate from the country of origin, current rabies vaccination, and compliance with entry protocols. Quarantine: Depending on the country of origin and health status, quarantine or additional inspections may be required. Recommendation: Always hire a specialized pet transportation agency ('Pet Relocation') to handle the procedures with SENASAG to avoid airport detentions (El Alto, Viru Viru, etc.) or severe fines."
              },
              {
                "heading": "Beware of the \"Cat Factories\" and Scams!",
                "body": "In Bolivia, illegal trade is common on online platforms and informal fairs. 🚩 DON'T BUY IF: They ask for signs in advance without showing the animal (common scam; demands a real-time video call). They sell at street fairs or plazas: exposed kittens without hygiene usually are sick (panleucopenia, leukemia) and have high mortality. They have an 'infinite stock': probable factory farm where females are used indiscriminately. Suspiciously low prices: ethical breeding involves high costs in health and records that a low price can't cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Bolivia is a legal and moral responsibility. When choosing a registered breeder with the AFUBO or recognized associations, you are financing the preservation of the breed and animal welfare, and saying \"no\" to the mistreatment of clandestine factories. Remember: Before buying, also consider adoption. Many organizations rescue beautiful purebred or mixed-breed cats looking for a loving home across the country."
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
            "title": "Sustainable Acquisition in Colombia: Legal and Ethical Guide",
            "intro": "If you have decided that a specific breed is suited to your lifestyle, it is essential to obtain it in a responsible manner. In Colombia, the ownership of animals is protected by Law 1774 of 2016, which recognizes animals as sentient beings not susceptible to being objects, and prohibits their mistreatment and abandonment. Furthermore, there are local regulations in cities such as Bogotá, Medellín, and Cali.",
            "sections": [
              {
                "heading": "**1. Why choose a Registered Breeder?**",
                "body": "Ethical breeders in Colombia preserve the breed, care for genetic and social health, and socialize kittens. The safest way to identify them is to verify their affiliation with ASOFELGA (Colombian Association of Cat Breeders), representative of WCF, and in some cases, TICA or FIFe. Advantages: Genetic Certification (official ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of fears and aggression)."
              },
              {
                "heading": "**2. Marco Legal: Your Rights and Obligations (Ley Alicia)**",
                "body": "For a secure transaction in Colombia, the breeder must comply with: Identification (Microchip) required by municipalities (such as Bogotá with Decree 319 of 2019) for municipal registration. Sales Contract with data from the parties, health guarantees (FeLV/FIV), return clause (abandonment prohibited) and commitment to sterilization. Vaccination Card: Signed by a Veterinarian Zootechnician with a valid professional license."
              },
              {
                "heading": "**3. Checklist: How to detect an Ethical Breeding Farm in Colombia?**",
                "body": "Before paying, check: ✅ Do they allow in-person visits? You need to know the cattery and see the mother; be wary of deliveries at shopping centers or parks. ✅ What is the age of delivery? NEVER before 12 weeks (3 months). It is crucial for emotional and immunological weaning. ✅ Is the complete documentation provided? You should receive a Birth Certificate / Pedigree from ASOFELGA, vaccination card, and invoice or receipt. ✅ Will there be an interview with the buyer? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Bogotá or Medellín."
              },
              {
                "heading": "**4. Legal Importation of Exotic Breeds**",
                "body": "The process is strictly regulated by the ICA (Colombian Agricultural and Livestock Institute). Requirements: International zoosanitary certificate, current anti-rabies vaccination, and compliance with entry protocols (ICA Resolution). It is recommended to hire a specialized pet transportation agency ('Pet Relocation') to handle procedures with the ICA and avoid airport detentions (El Dorado, José María Córdova, etc.) or severe fines."
              },
              {
                "heading": "⚠️ Be careful with the 'Cat Factories' and Scams!",
                "body": "WARNING: They ask for signs in advance without showing the animal (common scam; demands real-time videocall). They sell at street fairs or plazas: high mortality rate due to lack of hygiene (coryza/panleucopenia). They have an \"infinite\" stock of multiple breeds: probable factory of exploitation. Suspiciously low prices: ethical breeding involves high costs in health and records that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Colombia is a legal and moral responsibility. By choosing a registered breeder in ASOFELGA, you are financing the preservation of the breed and animal welfare, and saying \"no\" to the mistreatment of clandestine factories."
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
            "intro": "If you've decided that a specific breed fits your lifestyle, it's essential to get it responsibly. In Ecuador, animal ownership is protected by the Organic Animal Welfare Code (COBA), enacted in 2022. This law recognizes animals as sentient beings, prohibits their abuse, abandonment, and strictly regulates breeding and commercialization.",
            "sections": [
              {
                "heading": "**1. Why choose a Registered Breeder?**",
                "body": "Ethical breeders in Ecuador preserve the breed, care for genetic and social health, and socialize kittens. The safest way to identify them is to verify their affiliation with recognized cat associations (WCF, TICA) and that they have the corresponding municipal permits. Advantages: Genetic Certification (official ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of fears and aggression)."
              },
              {
                "heading": "**2. Marco Legal: Your Rights and Obligations (COBA)**",
                "body": "For the transaction to be legal in Ecuador, the breeder must comply with: Identification (Microchip) required by COBA and municipal ordinances (Quito, Guayaquil, Cuenca) for municipal registration. Operating Permit issued by the Municipal GAD of their canton. Sales Contract with data from the parties, health guarantees (FeLV/FIV), return clause (abandonment prohibited) and sterilization commitment. Vaccination Card: Signed by a registered Veterinary Zootechnician."
              },
              {
                "heading": "**3. Checklist: How to detect an Ethical Breeding Farm in Ecuador?**",
                "body": "Before paying, check: Do they allow in-person visits? You need to know the cattery and see the mother; be wary of deliveries at shopping centers or parks. What is the delivery age? NEVER before 12 weeks (3 months). It's crucial for emotional and immunological weaning. Is the complete documentation? You should receive an Official Birth Certificate / Pedigree, up-to-date vaccination card, and invoice or receipt (tax compliance). Does the breeder conduct an interview with the buyer? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Quito or Guayaquil."
              },
              {
                "heading": "**4. Legal Importation of Exotic Breeds**",
                "body": "The process is strictly regulated by AGROCALIDAD (Agency for Phytosanitary and Zoosanitary Regulation and Control). Requirements: International zoosanitary certificate, current anti-rabies vaccination, and entry protocols. It is recommended to hire a specialized pet transportation agency ('Pet Relocation') to handle procedures and avoid airport delays (Mariscal Sucre, José Joaquín de Olmedo, etc.) or severe fines."
              },
              {
                "heading": "Beware of the \"Cat Factories\" and Scams!",
                "body": "DO NOT BUY IF: They ask for signs in advance without showing the animal (common scam; demands real-time video call). They sell at street fairs or plazas: high mortality rate due to lack of hygiene (panleucopenia, leukemia). They have an \"infinite\" stock of multiple breeds: probable factory farm. Suspiciously low prices: ethical breeding involves high costs in health and records that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Acquiring a purebred cat in Ecuador is a legal and moral responsibility under the COBA. When choosing a registered breeder with municipal permits, you are financing the preservation of the breed and animal welfare, and saying \"no\" to the mistreatment of clandestine factories. Remember: Before buying, also consider adoption."
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
            "intro": "If you've decided that a specific breed fits your lifestyle, it's crucial to get it responsibly. In Venezuela, animal ownership is protected by the Law for the Protection of Free and Domesticated Fauna and various municipal ordinances that promote responsible ownership, prohibit abuse, and abandonment.",
            "sections": [
              {
                "heading": "**1. Why choose a Registered Breeder?**",
                "body": "Ethical breeders in Venezuela preserve the breed, care for genetic and social health, and socialize the kittens. The safest way to identify them is to verify their affiliation with the Venezuelan Canine Federation (FCV) in its feline division, or with associations such as ASOVEFEL (Venezuelan Association of Felines), linked to WCF or TICA. Advantages: Genetic Certification (official ancestors), Preventive Health (PKD or HCM tests) and Early Socialization (prevention of fears and aggression)."
              },
              {
                "heading": "**2. Marco Legal: Your Rights and Obligations**",
                "body": "For the transaction to be legal in Venezuela, the breeder must comply with: Identification (Microchip) required or recommended in municipalities such as Chacao, Baruta, El Hatillo (Caracas), Valencia, and Maracaibo for municipal registration. Sales Contract with data from the parties, health guarantees (FeLV/FIV), return clause, and commitment to sterilization. Vaccination Card: Signed by a registered Veterinarian (CVZ), with triple cat vaccinations on the day according to the age."
              },
              {
                "heading": "**3. Checklist: How to detect an Ethical Breeder in Venezuela?**",
                "body": "Before paying, check: Do they allow in-person visits? You need to know the cattery and see the mother; be wary of deliveries at metro stations or shopping centers. What is the delivery age? NEVER before 12 weeks (3 months). It's crucial for emotional and immunological weaning. Is the documentation complete? You should receive an Official Birth Certificate / Pedigree, up-to-date vaccination card, and invoice or receipt. Will there be an interview with the buyer? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Caracas or Valencia."
              },
              {
                "heading": "**4. Legal Importation of Exotic Breeds**",
                "body": "The process is strictly regulated by the INSAI (National Institute of Integral Agricultural Health). Requirements: International zoosanitary certificate, current anti-rabies vaccination, and entry protocols. It is recommended to hire a specialized pet transportation agency ('Pet Relocation') to manage procedures with the INSAI and avoid detentions at the Simón Bolívar International Airport or severe fines."
              },
              {
                "heading": "Beware of the 'Cat Factories' and Scams!",
                "body": "DO NOT BUY: They ask for signals in advance without showing the animal (common scam; do not transfer dollars or bolivars without real-time video call). They sell at street fairs or plazas: high mortality rate due to lack of hygiene (panleucopenia, leukemia). They have an \"infinite\" stock of multiple breeds: probable factory of exploitation. Suspiciously low prices: ethical breeding implies high costs in imported/premium food that a low price does not cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Venezuela is a legal and moral responsibility. By choosing a registered breeder with ASOVEFEL or affiliated with international federations, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories. Remember: Before buying, also consider adoption."
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
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to obtain it in a responsible manner. In Paraguay, animal ownership is protected by Law No. 483/95 on Animal Protection and by Law No. 6541/20 on Animal Welfare, which recognizes animals as sentient beings, prohibits their mistreatment and abandonment, and regulates responsible ownership.",
            "sections": [
              {
                "heading": "**1. Why choose a Registered Breeder?**",
                "body": "Ethical breeders in Paraguay preserve the breed, care for genetic and social health, and socialize the kittens. The safest way to identify them is to verify their affiliation with FELPAR (Paraguay Cat Federation), representative of WCF or TICA. Advantages: Genetic Certification (officially registered ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of behavioral problems such as fears or aggression)."
              },
              {
                "heading": "**2. Marco Legal: Your Rights and Obligations**",
                "body": "For a secure transaction in Paraguay, the breeder must comply with: Identification (Microchip) implemented in municipalities such as Asunción, Luque, San Lorenzo, Lambaré, etc. Sales Contract with data from the parties, health guarantees (FeLV/FIV), clause of return (prohibited abandonment) and commitment to sterilization. Vaccination Card: Signed by a registered Veterinarian in the CONAMEVET (National Council of Veterinary Medicine), with the triple feline vaccinations on the same day."
              },
              {
                "heading": "**3. Checklist: How to detect an Ethical Breeding Farm in Paraguay?**",
                "body": "Before paying, check: Do they allow in-person visits? You need to know the cattery and see the mother; be wary of deliveries in shopping malls or parks. What is the delivery age? NEVER before 12 weeks (3 months). It is crucial for emotional and immunological weaning. Is the complete documentation provided? You should receive a Birth Certificate/Pedigree from FELPAR, vaccination card, and invoice or receipt.  Do they conduct an interview with the buyer? A good breeder will want to know about your window and balcony protections, vital in high-rise buildings in Asunción."
              },
              {
                "heading": "**4. Legal Importation of Exotic Breeds**",
                "body": "The process is strictly regulated by the SENACSA (National Service of Animal Health and Welfare). Requirements: International zoosanitary certificate, current anti-rabies vaccination, and entry protocols. It is recommended to hire a specialized pet transportation agency ('Pet Relocation') to handle SENACSA procedures and avoid delays at the Silvio Pettirossi Airport or severe fines."
              },
              {
                "heading": "Beware of the \"Cat Factories\" and Scams!",
                "body": "DO NOT COMPROMISE: They ask for signals in advance without showing the animal (common scam; do not transfer money or wire transfers without a real-time video call). They sell at street fairs or plazas: high mortality rate due to lack of hygiene (panleucopenia, leukemia). They have an 'infinite stock': probable factory farm. Low prices suspiciously: ethical breeding involves high costs in health and premium food that a low price does not cover."
              },
              {
                "heading": "Conclusion",
                "body": "Acquiring a purebred cat in Paraguay is a legal and moral responsibility under the Animal Welfare Law. By choosing a registered breeder with FELPAR, you are financing the preservation of the breed and animal welfare, and saying \"no\" to the mistreatment of clandestine factories. Remember: Before buying, also consider adoption."
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
            "intro": "If you've decided that a specific breed fits your lifestyle, it's essential to get it responsibly. In Brazil, animal ownership is protected by Federal Law No. 14,064/2020 (Sansão Law) and Arouca Law (Law No. 11,794/2008). Buying a cat isn't just any commercial transaction; it's incorporating a sensitive family member.",
            "sections": [
              {
                "heading": "**Why Choose a Registered Breeder?**",
                "body": "Ethical breeders in Brazil preserve the breed, care for genetic and social health, and socialize kittens. The safest way to identify them is to verify their affiliation with GATOS do BRASIL (official representative of the WCF), or TICA or FIFe clubs. Advantages: Genetic Certification (official ancestors), Preventive Health (PKD or HCM tests), and Early Socialization ('home raised') to prevent behavioral problems."
              },
              {
                "heading": "**2. Marco Legal: Your Rights and Obligations**",
                "body": "For the transaction to be legal in Brazil, the breeder must comply with: Identification (Microchip) required in cities such as São Paulo, Rio de Janeiro, and Curitiba for municipal registration (RAA). Sales Contract with data on the parties, health guarantees (FeLV/FIV), return clause (abandonment is a crime) and commitment to sterilization. Vaccination Card: Signed by a registered Veterinarian, with V3/V4/V5 vaccines up to date according to age."
              },
              {
                "heading": "**3. Checklist: How to detect an Ethical Breeding Farm in Brazil?**",
                "body": "Before making any transfer (PIX), check: Do they allow in-person visits? You need to know the cattery and see the mother; be wary of deliveries in parks or shopping centers. What is the delivery age? NEVER before 12 weeks (3 months). Is the documentation complete? You should receive a Birth Certificate / Pedigree from GATOS do BRASIL/WCF, vaccination card, and invoice or receipt. Will there be an interview with the buyer? A good breeder will want to know about your 'protection screens' (essential in high-rise buildings in Brazil)."
              },
              {
                "heading": "**4. Legal Importation of Exotic Breeds**",
                "body": "The process is strictly regulated by the MAPA (Ministry of Agriculture, Livestock and Supply) through the Vigiagro system. Requirements: International zoosanitary certificate, current anti-rabies vaccination, and entry protocols. It is recommended to hire a specialized pet transportation agency ('Pet Relocation') to avoid animal retention at airports such as Guarulhos or Galeão."
              },
              {
                "heading": "Be careful with the 'Cat Factories' and Scams!",
                "body": "DO NOT BUY IF: They ask for PIX in advance without showing the animal (common scam; demands a real-time video call). They sell at street fairs or plazas: high mortality rate due to lack of hygiene. They have an 'infinite' stock of multiple breeds: probable factory of exploitation. Prices suspiciously low: ethical breeding involves high costs in health and records that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Brazil is a legal and moral responsibility under Lei Sansão and Lei Arouca. When choosing a registered breeder from GATOS do BRASIL, you are financing the preservation of the breed and animal welfare, and saying \"no\" to the abuse of clandestine factories. Remember: Before buying, also consider adoption."
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
            "title": "Responsible Acquisition in Spain: Legal and Ethical Guide",
            "intro": "If you've decided that a specific breed fits your lifestyle, it's crucial to acquire it responsibly. In Spain, the regulations have changed drastically with the implementation of the new Animal Welfare Law (Law 7/2023). This law prohibits the sale of dogs, cats, and ferrets in commercial establishments and requires that all acquisitions be made through registered breeders or animal protection organizations.",
            "sections": [
              {
                "heading": "**1. Why choose a Registered Breeder (Enthusiast)?**",
                "body": "In Spain, ethical breeders must be registered as 'Zoological Nucleus' or 'Recreational Breeder' in their Autonomous Community. The safest way to identify them is to check if they are affiliated with the AFEC (Spanish Feline Association), the country's representative of the WCF, or other recognized federations such as FIFe. Advantages: Guaranteed Legality (only registered breeders can sell under the new law), Genetic Health (PKD or HCM tests) and Socialization (ensures a balanced temperament)."
              },
              {
                "heading": "**2. Marco Legal: Your Rights and Obligations (Law 7/2023)**",
                "body": "For the transaction to be legal in Spain, the breeder must comply with: Mandatory Microchip (registered in the RIAC of their Autonomous Community before delivery). Health Documentation: European passport or vaccination card (Trivalent) and deworming up to date. Mandatory Sales Contract with zoo nucleus number, health guarantees, and return clause. Prohibition of Sales in Pet Stores: Sales in pet stores are illegal; it can only be done directly by the breeder or through adoption."
              },
              {
                "heading": "**3. Checklist: How to detect an Ethical Breeder in Spain.**",
                "body": "Before paying, check: Do they allow visits? You must know their address or cattery and see the mother; be wary of deliveries in parking lots. What is the delivery age? NEVER before 12 weeks (3 months). Is the documentation complete? Official pedigree from AFEC/WCF or similar, microchip already registered and signed veterinary record. Is it transparent? A good breeder will ask about your home (window screens on high floors) and won't be in a hurry to sell quickly."
              },
              {
                "heading": "**4. Importación Legal from the EU and Third Countries**",
                "body": "From the EU: European Passport, ISO microchip, and rabies vaccine (minimum 21 days old). From outside the EU (UK, US): Official Zoosanitary Certificate, antibody certification (if applicable), and compliance with the Ministry of Agriculture, Fisheries, and Food (MAPA) requirements. It is recommended to use specialized transportation agencies to avoid quarantines or returns to origin."
              },
              {
                "heading": "Beware of Scams and Illegal Traffic!",
                "body": "DON'T BUY IF: They ask for money in advance without seeing the cat (require live video call). No visible Zoo Nucleo number: it's mandatory to display it in all ads. They deliver puppies under 3 months: it's illegal and cruel. Suspiciously low prices: they usually indicate 'puppy farms' illegally imported from Eastern Europe without health or ethics guarantees."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Spain is a regulated and protected act. By choosing a breeder affiliated with AFEC and with a Zoological Nucleus, you are complying with the Animal Welfare Law, financing the preservation of the breed, and avoiding animal suffering. Remember: Before buying, consider adoption in specific shelters such as Persian Rescue or Maine Coon Rescue."
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
            "title": "Responsible Pet Ownership in Mexico: A Legal and Ethical Guide to Acquiring a Cat",
            "intro": "If you have decided that a specific breed fits your lifestyle, it is essential to obtain it in a responsible manner. In Mexico, animal protection is governed by the Federal Law for Animal Protection and by state and local laws (such as that of CDMX or Jalisco), which recognize animals as sentient beings, prohibit abuse, and regulate responsible ownership.",
            "sections": [
              {
                "heading": "**1. Why choose a Registered Breeder?**",
                "body": "Ethical breeders in Mexico preserve the breed, care for genetic and social health, and socialize kittens in a family environment. The safest way to identify them is to verify their affiliation with the AMFE (Mexican Felin Association), representative of WCF and TICA. Advantages: Genetic Certification (registered ancestors), Preventive Health (PKD or HCM tests), and Early Socialization (prevention of fears and aggression)."
              },
              {
                "heading": "**2. Marco Legal: Your Rights and Obligations**",
                "body": "For the transaction to be legal in Mexico, the breeder must comply with: Mandatory microchip identification in entities such as CDMX (RECAN registry), Edomex, Jalisco, and Nuevo León. Sales contract with data from the parties, health guarantees (FeLV/FIV), return clause (abandonment is a crime) and commitment to sterilization. Vaccination Card: Signed by a licensed Veterinarian Zootechnician with a valid professional ID, with the triple cat vaccinations up to date."
              },
              {
                "heading": "**3. Checklist: How to detect an Ethical Breeder in Mexico?**",
                "body": "Before paying, check: Do they allow in-person visits? You need to know the cattery and see the mother; be wary of deliveries in commercial plazas or metro stations. What is the delivery age? NEVER before 12 weeks (3 months). Is the documentation complete? Birth Certificate / Pedigree (AMFE/WCF or TICA), vaccination card and invoice or receipt. ✅ Will there be an interview with the buyer? A good breeder will want to know about your window and balcony protections, vital in apartments in CDMX, Monterrey or Guadalajara."
              },
              {
                "heading": "**4. Legal Importation of Exotic Breeds**",
                "body": "The process is strictly regulated by the SENASICA (National Service of Public Health, Safety and Agrifood Quality) under the SADER. Requirements: International zoosanitary certificate, current anti-rabies vaccination, and entry protocols. It is recommended to hire a specialized pet transport agency ('Pet Relocation') to avoid airport detentions such as those in the CDMX or Cancun airports."
              },
              {
                "heading": "Beware of the \"Cat Factories\" and Scams!",
                "body": "NO SCAM: They ask for advance deposits without showing the animal (common scam; demands real-time video call). Sell in markets or streets: high mortality rate due to lack of hygiene (respiratory disease/panleucopenia). Have an \"infinite\" stock: probable factory farm. Suspiciously low prices: ethical breeding involves high costs for health and records that a low price cannot cover."
              },
              {
                "heading": "Conclusion",
                "body": "Buying a purebred cat in Mexico is a legal and moral responsibility. When you choose a registered breeder with the AMFE, you are financing the preservation of the breed and animal welfare, and saying 'no' to the mistreatment of clandestine factories."
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
    "description": "Stimulation, toys, and enrichment",
    "subcategories": [
      {
        "slug": "historia-felina",
        "label": "The Heart of Origin",
        "topics": [
          {
            "slug": "origen-encuentro-nilo",
            "title": "Egypt, on the Nile",
            "intro": "The domestic cat's history began about 9,000 years ago in the Nile Valley, Egypt. Although there are many species of felines, all our current cats (including exotic ones) come from a single subspecies: the North African wildcat or Felis lybica. The \"love at first sight\" with humans was not planned, but a convenience association:",
            "sections": [
              {
                "heading": "The problem, the solution, and the pact",
                "body": "The problem: The Egyptians relied on agriculture and stored grain in large silos. These storage facilities attracted rodent infestations. The solution: Cats approached the villages attracted by the abundance of rodents. The pact: Humans were delighted to accept this \"pest control\" service and thus began a symbiotic relationship of mutual benefit."
              },
              {
                "heading": "From Hunters to Gods",
                "body": "Over time, the cat evolved from a simple granary guardian to a sacred member of the family. The Egyptians came to deify them, linking them to the goddess Bastet (who represented sweetness and protection) and the sun god, Ra. It was such an important role that millions of cat mummies and luxury tombs, such as that of Osiris Tamat, the favorite cat of an Egyptian prince, have been found."
              },
              {
                "heading": "The Conquest of the World: Rome and the Vikings",
                "body": "Although the document focuses on the Nubian origin, the story continued when the cat left Egypt to conquer new continents: The Cat in Rome: The Romans, seeing the effectiveness of Egyptian cats, quickly adopted them. For them, the cat was a symbol of freedom and independence. They took them with them throughout the Roman Empire (Europe, North Africa, and Great Britain), using them mainly to protect their military camps and homes from rodents. The Viking Traveling Cats: During the Middle Ages, the Vikings played a crucial role in the expansion of the cat to the north. They were excellent navigators and always brought cats on their ships (especially the 'Norwegian Forest Cat') to protect the food provisions during the long voyages. Thanks to the Vikings, cats reached as remote places as Scandinavia and eventually the Americas."
              },
              {
                "heading": "The Modern Cat",
                "body": "After surviving dark ages in European medieval —where they were unfairly persecuted—, the cat recovered its status thanks to its vital role in detaining plagues that transmitted diseases such as the Black Death. Today, the modern cat maintains that independent hunting instinct and self-sufficiency that makes it unique. Although there are now hundreds of breeds with different colors and coats, in its DNA still beats the heart of that small desert cat that decided, millennia ago, that living with us was a good idea."
              }
            ]
          },
          {
            "slug": "corazon-origen-egipto",
            "title": "Expansion Across the World",
            "intro": "The domestic cat did not appear by chance in the Nile. The key was sedentary agriculture. Egypt was the \"granary of the world,\" and the grain silos were magnets for rodents.",
            "sections": [
              {
                "heading": "The Religious Transformation",
                "body": "The cat went from being a useful ally to a divine being. The goddess Bastet was depicted with a cat's head and symbolized the home, fertility, and protection. Killing a cat in ancient Egypt was a crime punishable by death."
              },
              {
                "heading": "Luxury and Respect",
                "body": "The document highlights the case of the cat Osiris Tamat, pet of Prince Tutmosis. It was buried with honors in a limestone sarcophagus, wrapped in fine linen and with jewels, demonstrating that for the Egyptian royalty, cats were true companions of life and of the 'beyond'."
              },
              {
                "heading": "Export Ban",
                "body": "The Egyptians valued their cats so much that they strictly prohibited taking them out of the country. However, this did not prevent the 'secret' of these felines from spreading."
              },
              {
                "heading": "The Great Expansion: How did they arrive on other continents?",
                "body": "The cat's path to the rest of the world was mainly through maritime trade routes: 1. The Phoenicians: The first \"smugglers\". They were the great navigators of the Mediterranean. It is said that they smuggled cats out of Egypt to sell them on their trade routes. Thanks to them, the cat reached the Greek islands, the Italian peninsula, and southern Spain much earlier than expected. 2. Rome: Cats in the legions. When the Romans conquered Egypt, they were fascinated by the cat (they preferred it to the ferret, which was the animal they used before for mice). As they expanded their Empire, legionnaires brought cats in their caravans and ships to protect supplies. Thus, the cat was introduced to Central Europe and Great Britain. 3. Asia and the Silk Road. Through land trade routes, cats reached Central Asia. In countries like China and Japan, they were received with honors similar to those in Egypt. In Japan, for example, Buddhist monks used them to protect valuable paper manuscripts from mice in temples. 4. The Conquest of America. Cats did not reach America until the time of European explorers (15th and 16th centuries). On ships like those of Christopher Columbus or later the Mayflower, cats were essential crew members. Their mission was to prevent rats from eating the sailors' food rations and spreading diseases in the confined space of the ship."
              },
              {
                "heading": "Summary of Evolution",
                "body": "Africa: Biological origin (Felis lybica). Europe: Introduced by Phoenicians and Romans; later expanded by Vikings to the north. Asia: Arrived through the Silk Road and maritime trade to India and Japan. Americas and Oceania: Arrived centuries later on the ships of European colonizers."
              },
              {
                "heading": "Conclusion",
                "body": "Today, that small cat watching the wheat on the Nile is present on all continents (except Antarctica), demonstrating itself to be one of the most successful travelers in the history of humanity."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "a",
    "label": "no",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "Stimulation, toys, and enrichment",
    "subcategories": [
      {
        "slug": "importancia",
        "label": "Why it's vital",
        "topics": [
          {
            "slug": "juego-cachorros",
            "title": "The game in puppies: the base of everything",
            "intro": "The first six months of a cat's life are a critical period of development. What it learns during play in this stage will largely determine how it will interact with humans and other animals for the rest of its life.",
            "sections": [
              {
                "heading": "The socialization window",
                "body": "Between 2 and 9 weeks of life, the cat learns what is normal in its world. A puppy that interacts with people, other cats, domestic noises, and varied experiences during this period will be a more secure and adaptable adult."
              },
              {
                "heading": "The most common mistake: hands as a toy",
                "body": "Using your hands or feet to play with a puppy may seem harmless, but it teaches that human skin is a valid target. When that kitten weighs 11 pounds, the nips and scratches will be painful and the behavior difficult to correct. Always use toys with distance."
              },
              {
                "heading": "I play as a preventative measure",
                "body": "A cat that doesn't play enough channels its hunting energy into problematic behaviors: attacking ankles, destroying objects, redirected aggression. 2 play sessions of 15 minutes a day, especially before bed, are the best antidote."
              }
            ]
          }
        ]
      }
    ]
  }
];
