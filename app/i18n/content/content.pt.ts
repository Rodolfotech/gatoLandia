import { Category } from '../../data/cats';

export const categories: Category[] = [
  {
    slug: "salud",
    label: "Saúde",
    emoji: "",
    color: "#7a9e7e",
    bg: "#eef4ef",
    description: "Prevenção, doenças e cuidados médicos",
    subcategories: [
      {
        slug: "prevencion",
        label: "Prevenção",
        topics: [
          {
            slug: "vacunacion",
            title: "Vacinação felina",
            intro: "A vacinação é a ferramenta mais eficaz para proteger o teu gato de doenças graves. Conhecer o calendário e as vacinas obrigatórias faz a diferença entre uma vida longa e uma cheia de complicações.",
            sections: [
              { heading: "Vacinas obrigatórias", body: "A vacina tríplice felina (Rinotraqueíte, Calicivírus e Panleucopenia) é a base de qualquer protocolo. Administra-se às 8, 12 e 16 semanas de vida, com reforços anuais ou a cada 3 anos." },
              { heading: "Vacinas opcionais recomendadas", body: "A vacina contra a Leucemia Felina (FeLV) é muito recomendável para gatos que saem ao exterior. A antirrábica é obrigatória em muitos países." },
              { heading: "E se saltar uma dose?", body: "Se o gato adulto levar mais de 3 anos sem vacinar-se, recomenda-se repetir a série inicial. Consulta sempre o teu veterinário." },
            ],
          },
          {
            slug: "desparasitacion",
            title: "Desparasitação interna e externa",
            intro: "Os parasitas são um dos problemas mais comuns e facilmente preveníveis em gatos.",
            sections: [
              { heading: "Parasitas internos", body: "Os mais frequentes são áscaris, ténias e Toxoplasma. Tratam-se com antiparasitários orais a cada 3-6 meses em adultos." },
              { heading: "Parasitas externos", body: "Pulgas, carraças e ácaros do ouvido são os mais comuns. As pipetas spot-on mensais são a solução mais prática." },
              { heading: "Gatos de interior vs. exterior", body: "Gatos de interior têm menor risco, mas não estão isentos. Recomenda-se desparasitação interna 2 vezes ao ano e externa 4 vezes." },
            ],
          },
          {
            slug: "primeros-auxilios",
            title: "Primeiros socorros felinos",
            intro: "Saber agir numa emergência pode salvar a vida do teu gato.",
            sections: [
              { heading: "O kit básico", body: "Solução salina, gazes estéreis, anti-séptico sem álcool, termómetro digital e o número de uma clínica veterinária de urgências." },
              { heading: "Sinais de emergência", body: "Leva o teu gato ao veterinário de urgências se apresentar: dificuldade em respirar, perda de consciência, convulsões ou sangramento que não cessa." },
              { heading: "O que NUNCA deves fazer", body: "Não administres ibuprofeno, paracetamol ou aspirina: são mortais. Não provoques o vómito sem indicação veterinária." },
            ],
          },
        ],
      },
      {
        slug: "enfermedades",
        label: "Doenças comuns",
        topics: [
          {
            slug: "enfermedad-renal",
            title: "Doença renal crónica",
            intro: "A insuficiência renal crónica é a principal causa de morte em gatos com mais de 7 anos.",
            sections: [
              { heading: "Sinais de alerta", body: "Beber muita água, urinar com maior frequência, perda de peso progressiva e pelo opaco são os sinais mais comuns." },
              { heading: "Diagnóstico e acompanhamento", body: "Uma análise ao sangue e urina anual a partir dos 7 anos é a melhor ferramenta de deteção." },
              { heading: "Gestão e tratamento", body: "Não tem cura, mas pode ser gerida com dieta renal, hidratação e suplementos." },
            ],
          },
          {
            slug: "diabetes-felina",
            title: "Diabetes felina",
            intro: "A diabetes em gatos é mais comum do que se pensa, especialmente em machos castrados com excesso de peso.",
            sections: [
              { heading: "Fatores de risco", body: "Obesidade, idade avançada, sexo masculino e dietas ricas em hidratos de carbono." },
              { heading: "Sintomas", body: "Muita sede, muita urina, perda de peso e fraqueza nas patas traseiras." },
              { heading: "Tratamento e remissão", body: "Insulina diária, dieta baixa em hidratos de carbono e monitorização da glicose em casa." },
            ],
          },
        ],
      },
      {
        slug: "dental",
        label: "Saúde bucal",
        topics: [
          {
            slug: "sarro-gingivitis",
            title: "Tártaro e gengivite",
            intro: "A doença periodontal afeta 70% dos gatos com mais de 3 anos.",
            sections: [
              { heading: "Por que é importante", body: "As bactérias da boca entram na corrente sanguínea e podem danificar rins, coração e fígado." },
              { heading: "Prevenção em casa", body: "Escovar os dentes 3 vezes por semana com pasta dental felina é o método mais eficaz." },
              { heading: "Limpeza profissional", body: "A limpeza dental veterinária sob anestesia recomenda-se anualmente a partir dos 3 anos." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "comportamiento",
    label: "Comportamento",
    emoji: "",
    color: "#b85c38",
    bg: "#faefeb",
    description: "Comportamento",
    subcategories: [
      {
        slug: "interio-exterior",
        label: "Gato de Interior ou Exterior?",
        topics: [
          {
            slug: "guia para entender y cuidar",
            title: "Comportamento Felino: Como entender e cuidar melhor do teu gato",
            intro: "Os gatos são hoje um dos animais de estimação mais populares do mundo.",
            sections: [
              { heading: "1. Interior ou Exterior? Tomar a decisão correta", body: "Gatos de exterior têm mais liberdade mas mais riscos. Gatos de interior estão mais protegidos mas dependem de nós para estimulação." },
              { heading: "2. O Instinto de Raspar: Não é vandalismo, é comunicação", body: "Raspar é um comportamento natural. Oferece um raspador estável, alto e de sisal." },
              { heading: "3. O Jogo: Exercício físico e mental", body: "Dedica pelo menos 15 minutos por dia a jogar ativamente com ele." },
              { heading: "4. Higiene e Areiros: A regra de ouro", body: "Regra do 'N+1': uma caixa de areia por gato, mais uma extra. Remove os dejetos diariamente." },
              { heading: "5. A Marcação com Urina: Entender a mensagem", body: "A marcação vertical com urina é um comportamento comunicativo, geralmente por stress." },
              { heading: "Conclusão: Convivência baseada no respeito", body: "Entender o teu gato é a melhor ferramenta para o amar melhor." },
            ],
          },
        ],
      },
      {
        slug: "lenguaje",
        label: "Linguagem felina",
        topics: [
          {
            slug: "comunicacion-corporal",
            title: "Comunicação corporal",
            intro: "Os gatos têm uma linguagem corporal sofisticada e precisa.",
            sections: [
              { heading: "A cauda como barómetro emocional", body: "Alta e reta indica confiança; baixa ou entre as patas expressa medo; movendo-se rapidamente revela irritação." },
              { heading: "As orelhas não mentem", body: "Para a frente indica atenção; para trás sinaliza medo ou agressão; de lado ('modo avião') é irritação crescente." },
              { heading: "Os olhos e o piscar", body: "Pupilas dilatadas indicam medo ou excitação. Um olhar relaxado ou piscar lento é sinal de confiança." },
              { heading: "Os bigodes e o rosto", body: "Bigodes para a frente indicam curiosidade; colados ao rosto sinalizam medo." },
              { heading: "Postura corporal geral", body: "Relaxado significa que se sente seguro; encolhido indica medo; arqueado mostra que está assustado." },
              { heading: "Ideia principal", body: "Não olhes apenas um sinal isolado, mas o conjunto de todas as partes do corpo." },
            ],
          },
          {
            slug: "vocalizaciones",
            title: "Vocalizações e seu significado",
            intro: "Os gatos adultos quase não miam entre si: o miau é uma linguagem para humanos.",
            sections: [
              { heading: "O miau", body: "Um miau curto e agudo é uma saudação. Um longo e sustentado, uma exigência." },
              { heading: "O ronronar", body: "Nem sempre indica felicidade: os gatos também ronronam quando estão stressados ou doentes." },
              { heading: "Outros sons", body: "O trilo é uma saudação calorosa. O bater de dentes aparece ao ver presas. O assobio e o cuspir são avisos." },
            ],
          },
          {
            slug: "parpadeo-lento",
            title: "O piscar lento: o beijo felino",
            intro: "O piscar lento é um dos sinais mais estudados do repertório felino.",
            sections: [
              { heading: "O que significa", body: "Quando um gato te olha e pisca lentamente, está a dizer que se sente seguro na tua presença." },
              { heading: "Como fazer", body: "Olha para o gato com expressão relaxada. Aperta lentamente os olhos até quase fechar e abre novamente." },
              { heading: "Com gatos desconhecidos", body: "Funciona mesmo com gatos que não conheces. Em abrigos, o piscar lento pode ser a diferença entre um gato que se aproxima e um que foge." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "alimentacion",
    label: "Alimentação",
    emoji: "",
    color: "#d4853a",
    bg: "#fff3e6",
    description: "Nutrição, dietas e o que não podem comer",
    subcategories: [
      {
        slug: "dietas",
        label: "Tipos de dieta",
        topics: [
          {
            slug: "comida-humeda-vs-seca",
            title: "Comida húmida vs. ração seca",
            intro: "Os gatos têm uma relação particular com a água que faz com que o tipo de alimento impacte diretamente a saúde renal.",
            sections: [
              { heading: "A natureza do gato e a água", body: "Os gatos obtêm a maior parte da água das suas presas. A ração seca tem apenas 10% de humidade." },
              { heading: "Vantagens da comida húmida", body: "Maior hidratação, maior saciedade e mais parecida com a dieta natural." },
              { heading: "O papel da ração seca", body: "Não é má, mas não deve ser o único alimento. Escolha rações com alta proteína animal." },
            ],
          },
          {
            slug: "dieta-barf",
            title: "Dieta BARF para gatos",
            intro: "A dieta BARF baseia-se em alimentar o gato com carne crua, ossos carnudos e vísceras.",
            sections: [
              { heading: "Fundamentos da BARF", body: "Aproximadamente 70% carne magra, 10% ossos carnosos (nunca cozidos), 10% vísceras e 10% outros tecidos." },
              { heading: "Benefícios reportados", body: "Melhoria da pelagem, menor produção de fezes, melhor hidratação e dentes mais limpos." },
              { heading: "Riscos a considerar", body: "Contaminação bacteriana, desequilíbrios nutricionais e risco de asfixia com ossos." },
            ],
          },
        ],
      },
      {
        slug: "prohibidos",
        label: "Alimentos proibidos",
        topics: [
          {
            slug: "toxicos-comunes",
            title: "Alimentos tóxicos para gatos",
            intro: "Muitos alimentos seguros para humanos são perigosos ou letais para gatos.",
            sections: [
              { heading: "Perigo extremo: tóxicos graves", body: "Cebola, alho e cebolinho destroem glóbulos vermelhos. Chocolate e café podem causar convulsões. Uvas e passas causam insuficiência renal." },
              { heading: "Perigo moderado", body: "Leite de vaca causa diarreia na maioria dos gatos adultos. O abacate contém persina. O álcool é perigoso." },
              { heading: "O que podem comer como prémio", body: "Pequenas quantidades de frango ou peru cozido sem osso, salmão cozido, cenoura, abóbora e mirtilos." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "juego",
    label: "Jogo",
    emoji: "",
    color: "#9b6bb5",
    bg: "#f3eef8",
    description: "Estimulação, brinquedos e enriquecimento",
    subcategories: [
      {
        slug: "importancia",
        label: "Por que é vital",
        topics: [
          {
            slug: "juego-cachorros",
            title: "O jogo em gatinhos: a base de tudo",
            intro: "Os primeiros seis meses de vida de um gato são um período crítico de desenvolvimento.",
            sections: [
              { heading: "A janela de socialização", body: "Entre as 2 e 9 semanas, o gato aprende o que é normal no seu mundo." },
              { heading: "O erro mais comum: as mãos como brinquedo", body: "Usar as mãos ensina que a pele humana é uma presa válida." },
              { heading: "Jogo como prevenção de problemas", body: "2 sessões de 15 minutos por dia são o melhor antídoto." },
            ],
          },
        ],
      },
      {
        slug: "juguetes",
        label: "Brinquedos",
        topics: [
          {
            slug: "canas-y-plumas",
            title: "Varas e brinquedos de presa",
            intro: "Varas com penas são os brinquedos mais eficazes porque simulam a sequência de caça completa.",
            sections: [
              { heading: "Por que funcionam tão bem", body: "Ativam o instinto de caça na totalidade: espreitar, perseguir, apanhar e 'matar'." },
              { heading: "Como movê-las corretamente", body: "As presas reais param, escondem-se, movem-se em ângulos imprevisíveis." },
              { heading: "Terminar bem a sessão", body: "Sempre permite que o gato 'apanhe' o brinquedo no final. Um snack pequeno completa o ciclo." },
            ],
          },
          {
            slug: "puzzles-de-comida",
            title: "Puzzles de comida e inteligência",
            intro: "Os puzzles alimentares são um dos enriquecimentos mais subvalorizados.",
            sections: [
              { heading: "Benefícios comprovados", body: "Reduzem a ansiedade e o aborrecimento, retardam a ingestão e estimulam cognitivamente." },
              { heading: "Como começar", body: "Começa com puzzles muito fáceis. Aumenta a dificuldade progressivamente." },
              { heading: "Puzzles caseiros", body: "Uma caixa de cartão com furos, um tabuleiro de gelo com ração ou esconder prémios sob copos." },
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
    description: "Gatinho, adulto, sénior e as suas necessidades",
    subcategories: [
      {
        slug: "gatito",
        label: "Gatinho (0-6 meses)",
        topics: [
          {
            slug: "primeras-semanas",
            title: "As primeiras semanas de vida",
            intro: "Os primeiros dois meses de vida de um gato são extraordinariamente intensos.",
            sections: [
              { heading: "0-2 semanas: período neonatal", body: "Os gatinhos nascem cegos, surdos e incapazes de regular a temperatura." },
              { heading: "2-7 semanas: socialização primária", body: "Os olhos abrem entre 10 e 16 dias. O sistema nervoso desenvolve-se a velocidade máxima." },
              { heading: "7-12 semanas: independência progressiva", body: "O desmame completa-se por volta das 8 semanas. É o momento ideal para a adoção." },
            ],
          },
        ],
      },
      {
        slug: "senior",
        label: "Sénior (+10 anos)",
        topics: [
          {
            slug: "cuidados-senior",
            title: "Cuidados do gato sénior",
            intro: "Um gato de 10 anos equivale aproximadamente a uma pessoa de 56 anos.",
            sections: [
              { heading: "Mudanças físicas esperadas", body: "Menor flexibilidade articular, pelo menos brilhante, possível perda de massa muscular." },
              { heading: "Adaptações do ambiente", body: "Rampas ou degraus, caixa de areia com entrada baixa, recipientes elevados." },
              { heading: "Acompanhamento médico intensificado", body: "A partir dos 10 anos, as revisões devem ser semestrais com análises completas." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "historia",
    label: "História, Origem e expansão",
    emoji: "",
    color: "#9b6bb5",
    bg: "#f3eef8",
    description: "Estimulação, brinquedos e enriquecimento",
    subcategories: [
      {
        slug: "historia-felina",
        label: "O Coração da Origem",
        topics: [
          {
            slug: "origen-encuentro-nilo",
            title: "Egito, no Nilo",
            intro: "A história do gato doméstico começou há cerca de 9.000 anos no vale do Nilo, Egito.",
            sections: [
              { heading: "O problema, a solução e o pacto", body: "Os gatos aproximaram-se das aldeias atraídos por roedores. Os humanos aceitaram este 'controlo de pragas'." },
              { heading: "De Caçadores a Deuses", body: "Os egípcios deificaram os gatos, relacionando-os com a deusa Bastet." },
              { heading: "A Conquista do Mundo: Roma e os Vikings", body: "Os romanos adotaram gatos para os seus campos. Os Vikings levaram-nos nos seus barcos." },
              { heading: "O Gato Moderno", body: "O gato moderno mantém o instinto de caçador independente do seu ancestral do deserto." },
            ],
          },
          {
            slug: "corazon-origen-egipto",
            title: "Expansão pelo Mundo",
            intro: "O gato doméstico não apareceu por acaso no Nilo.",
            sections: [
              { heading: "A Transformação Religiosa", body: "A deusa Bastet simbolizava o lar, a fertilidade e a proteção." },
              { heading: "A Grande Expansão", body: "Através de rotas comerciais marítimas: Fenícios, Romanos, Rota da Seda e exploradores europeus." },
              { heading: "Conclusão", body: "Esse pequeno gato do Nilo está presente em todos os continentes exceto a Antártida." },
            ],
          },
        ],
      },
    ],
  },
];
