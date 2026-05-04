import { Category } from '../../data/cats';

export const categories: Category[] = [
  {
    "slug": "salud",
    "label": "Saúde",
    "emoji": "",
    "color": "#7a9e7e",
    "bg": "#eef4ef",
    "description": "Prevención, doenças e cuidados médicos",
    "subcategories": [
      {
        "slug": "prevencion",
        "label": "Prevención",
        "topics": [
          {
            "slug": "vacunacion",
            "title": "Vacinação felina",
            "intro": "A vacinação é a ferramenta mais eficaz para proteger seu gato de doenças graves. Conhecer o calendário e as vacinas obrigatórias marca a diferença entre uma vida longa e uma cheia de complicações.",
            "sections": [
              {
                "heading": "Vacinas obrigatórias",
                "body": "A vacina triple felina (Rinotraqueíte, Calicivirus e Panleucopenia) é a base de qualquer protocolo. Se administra às 8, 12 e 16 semanas de vida, com reforços anuais ou cada 3 anos segundo o produto."
              },
              {
                "heading": "Vacinas opcionais recomendadas",
                "body": "A vacina contra a Leucemia Felina (FeLV) é muito recomendável para gatos que saem ao exterior ou convivem com outros gatos. A antirrábica é obrigatória em muitos países e recomendável no Chile."
              },
              {
                "heading": "O que acontece se eu pular uma dose?",
                "body": "Se recomenda repetir a série inicial se o gato adulto não estiver vacinado há mais de 3 anos. Consulte sempre seu veterinário antes de administrar qualquer vacina."
              }
            ]
          },
          {
            "slug": "desparasitacion",
            "title": "Desparasitante interno e externo",
            "intro": "Os parasitas são um dos problemas mais comuns e facilmente preveníveis em gatos. Um plano de desparasitante regular protege tanto o gato quanto as pessoas da casa.",
            "sections": [
              {
                "heading": "Parasitas internos",
                "body": "Os mais frequentes são os áscaris (vermes), tenias e Toxoplasma. São tratados com antiparasitários orais a cada 3–6 meses em adultos, e mensalmente em filhotes até os 6 meses."
              },
              {
                "heading": "Parasitas externos",
                "body": "Pulgas, carrapatos e ácaros do ouvido são os mais comuns. As pipetas spot-on mensais são a solução mais prática. Os colares antiparasitários oferecem proteção prolongada, mas requerem ajuste correto."
              },
              {
                "heading": "Gatos de interior vs. exterior",
                "body": "Os gatos de interior têm menor risco, mas não estão isentos: as pulgas podem entrar na roupa e nos sapatos. Se recomenda desparasitante interno 2 vezes ao ano e externo 4 vezes ao ano, no mínimo."
              }
            ]
          },
          {
            "slug": "primeros-auxilios",
            "title": "Primeiros socorros felinos",
            "intro": "Saber agir em uma emergência pode salvar a vida do seu gato. Esses conhecimentos básicos te preparam para os momentos mais críticos até chegar ao veterinário.",
            "sections": [
              {
                "heading": "O botiquim básico",
                "body": "Todo lar com gatos deveria ter: solução salina, gazes esterilizadas, antiséptico sem álcool (como clorexidina diluída), termômetro digital e o número de uma clínica veterinária de urgência."
              },
              {
                "heading": "Sinais de emergência",
                "body": "Leve o seu gato ao veterinário de urgência se apresentar: dificuldade para respirar, perda de consciência, convulsões, incapacidade para urinar durante mais de 12 horas, sangramento que não cessa ou possível ingestão de veneno."
              },
              {
                "heading": "O que NUNCA devias fazer",
                "body": "Não administres ibuprofeno, paracetamol ou aspirina a um gato: são mortais para eles. Não tente induzir o vômito sem indicação veterinária. Não ponha álcool em feridas abertas."
              }
            ]
          }
        ]
      },
      {
        "slug": "enfermedades",
        "label": "Doenças comuns",
        "topics": [
          {
            "slug": "enfermedad-renal",
            "title": "Doença renal crônica",
            "intro": "A insuficiência renal crônica é a principal causa de morte em gatos maiores de 7 anos. Detectá-la a tempo pode acrescentar anos de qualidade de vida ao seu companheiro.",
            "sections": [
              {
                "heading": "Señais de alerta",
                "body": "Beber muito água, urinar com maior frequência, perda de peso progressiva, pelo opaco e falta de apetite são os sinais mais comuns. Muitos gatos não mostram sintomas até perder 75% da função renal."
              },
              {
                "heading": "Diagnóstico e seguimento",
                "body": "Um exame de sangue e urina anual a partir dos 7 anos é a melhor ferramenta de detecção. O biomarcador SDMA permite detectar dano renal meses antes que os marcadores tradicionais."
              },
              {
                "heading": "Manejo e tratamento",
                "body": "Não há cura, mas pode ser gerenciado com dieta renal baixa em fósforo e proteína, hidratação (comida húmida ou fluidos subcutâneos em casa), suplementos e revisões frequentes."
              }
            ]
          },
          {
            "slug": "diabetes-felina",
            "title": "Diabetes felina",
            "intro": "A diabetes em gatos é mais comum do que se pensa, especialmente em machos castrados com sobrepeso. A boa notícia: com manejo adequado, muitos gatos podem entrar em remissão.",
            "sections": [
              {
                "heading": "Fatores de risco",
                "body": "Obesidade, idade avançada, sexo masculino e dietas altas em carboidratos são os principais fatores. Os gatos Burmeses têm predisposição genética."
              },
              {
                "heading": "Sintomas",
                "body": "Muita sede, muita urina, perda de peso apesar de comer bem e fraqueza nas patas traseiras (neuropatia diabetica) são as sinalizacoes mais caracteristicas."
              },
              {
                "heading": "Tratamento e remissao",
                "body": "Insulina diaria, dieta baixa em carboidratos (comida humeda de qualidade) e monitoramento de glicose em casa sao a base. Até 90% dos gatos podem lograr remissao com tratamento precoce e rigoroso."
              }
            ]
          }
        ]
      },
      {
        "slug": "dental",
        "label": "Saude bucal",
        "topics": [
          {
            "slug": "sarro-gingivitis",
            "title": "Sarro e gingivite",
            "intro": "A doenca periodontal afeta 70% dos gatos maiores de 3 anos e e uma das causas mais ignoradas de dor cronica e deterioro da saude geral.",
            "sections": [
              {
                "heading": "Por que e importante",
                "body": "As bacterias da boca entram no torrente sanguineo e podem danificar rins, coracao e figado. Um gato com dor dental come menos, esta mais irritavel e sua qualidade de vida se resente enormemente."
              },
              {
                "heading": "Prevencao em casa",
                "body": "Cepilar os dentes 3 vezes por semana com pasta dental felina (nunca humana) é o método mais eficaz. Os snacks dentais e os brinquedos mastigáveis são um complemento útil, mas não suficiente por si só."
              },
              {
                "heading": "Limpieza profissional",
                "body": "A limpeza dental veterinária sob anestesia é recomendada anualmente a partir dos 3 anos. Os gatos com predisposição (Persas, Siameses) podem precisar dela antes."
              }
            ]
          }
        ]
      },
      {
        "slug": "alergia",
        "label": "Alergias",
        "topics": [
          {
            "slug": "guia-alergia-gatos",
            "title": "Alergia a gatos: Guia prática para conviver",
            "intro": "As alergias às mascotas afetam entre 15% e 30% das pessoas. Ser alérgico a gatos é duas vezes mais frequente que a perros, mas com manejo adequado a convivência é possível.",
            "sections": [
              {
                "heading": "A causa: Proteína Fel d 1",
                "body": "A alergia não é causada pelo pelo, mas sim pela proteína Fel d 1 produzida na pele, saliva e urina. Ela se propaga quando o gato se lambe e a proteína se dispersa no ar através da caspa (pele morta). Os machos produzem mais que as fêmeas, e a castração reduz esses níveis."
              },
              {
                "heading": "Sintomas e Diagnóstico",
                "body": "As reações variam desde urticária e coceira até espirros, olhos lacrimosos e ataques de asma. É vital procurar um alergólogo para realizar provas cutâneas, de sangue ou espirometrias, pois o culpado poderia ser o pó ou o pólen e não o gato."
              },
              {
                "heading": "Hogar e Zonas Livres",
                "body": "Cria um 'santuário' mantendo o quarto fechado ao gato. Elimina tapetes ou use apenas os que se possam lavar com água quente. É fundamental usar aspiradoras com filtro HEPA e purificadores de ar pelo menos 4 horas por dia."
              },
              {
                "heading": "Cuidado Direto e Produtos",
                "body": "O corte do pelo deve ser feito por alguém não alérgico fora de casa. Os banhos semanais e o uso de produtos neutralizantes (como Vetriderm) sobre o pelo ajudam a eliminar resíduos de saliva. A castração e o corte de pelo periódico em gatos de pelo longo também são estratégias eficazes."
              },
              {
                "heading": "Tratamentos Avançados",
                "body": "Consulta sobre a imunoterapia (vacinas de desensibilização), que são eficazes a longo prazo. Se, apesar de todas as medidas de limpeza e tratamento médico, a saúde se resente gravemente, a decisão mais responsável poderia ser buscar um novo lar para o felino."
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
            "title": "Diabetes Felina: Guia completa para entender e manejar",
            "intro": "A diabetes nos gatos é uma condição complexa, mas com o manejo adequado, seu gato pode levar uma vida longa e feliz. Diferente dos cães, os gatos têm particularidades únicas que devemos conhecer para evitar erros comuns.",
            "sections": [
              {
                "heading": "Paso 1: Causas e fatores de risco",
                "body": "A diabetes felina geralmente é uma combinação de fatores: obesidade e idade (comum em gatos maiores de 9 anos), sexo e raça (mais comum em machos 4:1 e em raça Siamês). Além disso, os depósitos de amiloide que danificam o pâncreas e o uso de medicamentos como progestágenos ou corticosteroides também influenciam. É fundamental destacar que a pancreatite geralmente está estreitamente associada a essa doença e, em muitos casos, pode ser a causa desencadeante da diabetes."
              },
              {
                "heading": "Paso 2: Identificação de sintomas",
                "body": "Presta atenção ao aumento de sede e urina (beber muito água ou urinar fora do arejador) e mudanças no apetite ou peso. Um sinal distintivo é a neuropatia diabética: o gato caminha apoiando todo o tarso (o \"talão\") no chão. Além disso, é observado pelo menos descuidado (seco ou com caspa). Em contraste com os cães, as cataratas são muito raras em gatos."
              },
              {
                "heading": "Paso 3: O Diagnóstico Correcto",
                "body": "O estresse na clínica gera o efeito \"Bata Branca\", elevando o açúcar temporariamente. Para um diagnóstico certo, o veterinário deve confirmar glicose tanto no sangue como na urina. São necessários exames completos para descartar outras condições como infecções urinárias, problemas hepáticos ou pancreatite, que geralmente acompanham a diabetes."
              },
              {
                "heading": "Paso 4: Tratamento e Regulamentação",
                "body": "Se baseia em três pilares: 1. Insulina: Usam-se de ação intermédia ou longa (NPH ou PZI), geralmente duas vezes ao dia com as refeições. 2. Dieta: Carnívora estricta, alta em proteínas e baixa em carboidratos com horários fixos. 3. Monitoramento: É ideal medir a glicose no sangue (pinceladas na orelha) nos momentos de \"pico\" para ajustar a dose com precisão."
              },
              {
                "heading": "Paso 5: Emergência de Cetoacidose",
                "body": "Se não for tratado, pode derivar em cetoacidose, uma emergência vital com sintomas como vômitos, letargia extrema, desidratação e alento com odor a frutas ou a acetona. Requer hospitalização imediata para fluidos intravenosos, insulina de ação rápida e correção de eletrólitos (potássio, fósforo)."
              },
              {
                "heading": "Paso 6: Complicações e Expectativas",
                "body": "Es possível a remissão (deixar de precisar insulina) se controla o peso e se diagnostica cedo. O maior risco é a hipoglicemia: se o gato treme ou convulsiona, aplique mel ou açúcar em suas gengivas e corra para o veterinário. Além disso, revise regularmente se há infecções urinárias (sangue ou esforço ao urinar)."
              },
              {
                "heading": "Conselhos-chave para o dono",
                "body": "Nunca ajuste a insulina por sua conta. Mantenha um registro estrito de doses, horários de comida e comportamento. Controlar o peso é a melhor ferramenta preventiva e observar qualquer mudança na forma de caminhar é fundamental para relatar ao especialista."
              }
            ]
          }
        ]
      },
      {
        "slug": "obesidad-felina",
        "label": "Obesidade",
        "topics": [
          {
            "slug": "guia-obesidad-prevencion",
            "title": "Obesidade Felina: Como proteger a saúde e vida do seu gato",
            "intro": "A obesidade não é apenas um problema estético; é uma doença que reduz a esperança de vida do seu gato e aumenta o risco de sofrer diabetes, problemas articulares e complicações cirúrgicas. Com paciência e estratégia, pode ajudá-lo a recuperar seu peso ideal.",
            "sections": [
              {
                "heading": "Paso 1: Identificação do sobrepeso",
                "body": "Não se fie apenas da balança. Na 'Prova das costelas', você deve sentir facilmente sem pressionar forte; se não, há excesso de gordura. Ao olhar para ele desde cima, deve marcar uma cintura atrás das costelas; se for retangular ou tiver forma de barril, há sobrepeso. De perfil, seu abdômen não deve colar ou tocar o chão. É considerado sobrepeso se superar 10-19% seu peso ideal, e obeso se superar 20%."
              },
              {
                "heading": "Paso 2: Causas e Fatores",
                "body": "É uma combinação de fatores: após a esterilização o metabolismo diminui e o apetite aumenta; a partir dos 6-8 anos os gatos queimam menos calorias; o sedentarismo em gatos de interior sem estímulos; e dietas inadequadas (comida sempre disponível, prêmios excessivos ou muitos carboidratos). Raças como o Siamesês ou Burmês podem ter maior predisposição genética."
              },
              {
                "heading": "Paso 3: O Plano de Ação Seguro",
                "body": "A perda de peso deve ser lenta. Regra de ouro: um gato não deve perder mais do que 1% ou 2% de seu peso por semana (exemplo: um gato de 8 kg não deve perder mais de 160 gramas semanais). Perder peso muito rápido é perigoso pois pode causar lipidose hepática, uma doença do fígado potencialmente mortal."
              },
              {
                "heading": "Paso 4: Manejo Dietético Estratégico",
                "body": "Peça ao veterinário calcular as calorias para o peso ideal, não o atual. Geralmente se oferece entre 60% e 75% das calorias de manutenção atuais. Busque dietas altas em proteína (para manter músculo e dar saciedade) e baixas em carboidratos. Fracione a ração em 3 ou 4 tomadas para manter o metabolismo ativo e use parte da ração como premio em vez de snacks calóricos."
              },
              {
                "heading": "Paso 5: Atividade Física e Enriquecimento",
                "body": "O exercício deve ser gradual. Dedique 10 minutos por dia a jogos interativos (cañas, laser, bolas). Use o enriquecimento ambiental: esconda a comida em diferentes lugares, use comedouros interativos ou puzzles, e instale prateleiras ou árvores para gatos que obriguem a saltar e trepar para obter seu alimento."
              },
              {
                "heading": "Paso 6: Compromisso e Monitoramento",
                "body": "O sucesso depende de que toda a família siga as regras sem dar comida escondida. Pese o gato a cada 2 semanas: se não perder peso, ajuste a ração; se perder peso muito rápido, aumente um pouco. O fator humano é essencial; aceitar que o gato precisa emagrecer não é 'cruel', mas um ato de amor para cuidar sua saúde a longo prazo."
              },
              {
                "heading": "Señales de Alerta: Quando acudir ao veterinário",
                "body": "Antes de iniciar qualquer dieta, visite o especialista para descartar causas médicas como hipotireoidismo (embora raro em gatos) ou diabetes, e para estabelecer um peso objetivo realista. O veterinário deve ajudar a escolher a dieta comercial adequada ou formular uma caseira equilibrada. Lembre-se de que prevenir é melhor que curar para garantir que seu gato o acompanhe por muitos anos mais, saudável e ativo."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "comportamiento",
    "label": "Comportamento",
    "emoji": "",
    "color": "#b85c38",
    "bg": "#faefeb",
    "description": "Comportamento",
    "subcategories": [
      {
        "slug": "interio-exterior",
        "label": "Gato: Interior ou Exterior?",
        "topics": [
          {
            "slug": "guia para entender y cuidar",
            "title": "Comportamento Felino: Como entender e cuidar melhor seu gato",
            "intro": "Os gatos são hoje uma das mascotas mais populares do mundo. Apesar de historicamente não se lhes ver como companheiros de vida tal como os conhecemos agora, a realidade é que, ao igual que os cães, precisam de interação, atenção e carinho. A diferença radica em como expressam essas necessidades. Para conviver em harmonia com seu felino, é fundamental entender sua natureza e adaptar seu ambiente a seus instintos.",
            "sections": [
              {
                "heading": "**1. **Interior ou Exterior? Tomando a decisão certa",
                "body": "Uma das primeiras decisões ao adotar é se o gato viverá sozinho dentro de casa ou terá acesso ao exterior. Ambas as opções têm implicações importantes: Gatos de exterior: Têm mais liberdade e estimulação natural, mas correm maiores riscos: atropelos, brigas com outros animais, doenças infecciosas e parasitas (pulgas, gusanos). Sua esperança de vida costuma ser menor. Gatos de interior: Estão muito mais protegidos e vivem mais anos, mas dependem totalmente de nós para sua estimulação. O aborrecimento é seu maior inimigo. Se você escolher essa opção, deve se comprometer a enriquecer seu ambiente com jogos, rascadores e tempo de qualidade. Conselho: Qualquer seja sua escolha, a chave está na segurança e na estimulação mental."
              },
              {
                "heading": "**2. **O Instinto de Rascar: Não é vandalismo, é comunicação",
                "body": "Arañar é um comportamento natural e imprescindível que começa ao redor das 5 semanas de vida. Para um gato, rascar não é apenas afiar unhas; é uma forma de comunicação visual e olfativa (marcam território com as glândulas de suas patas) e uma maneira de esticar sua musculatura. O conflito surge quando escolhem nossos móveis. A solução não é castigar, mas oferecer uma alternativa melhor. Como escolher o rascador perfeito? Estabilidade: Deve ser firme e não balançar. Se se mover, o gato não o usará por insegurança. Altura: Deve ser o suficiente alto para que o gato possa esticar-se completamente de pé. Material: O sisal, a madeira natural ou a corda costumam ser os mais atraentes. Localização: Coloque-o em zonas visíveis e de passagem (não escondido em um porão). Os gatos gostam de marcar onde ocorre a 'vida' da casa. Paciência: Uma vez que escolha um rascador, não o mude de lugar. Além disso, quanto mais usado estiver, mais lhe agradará, porque estará impregnado de seu cheiro."
              },
              {
                "heading": "**3. **O Jogo: Exercício físico e mental",
                "body": "Jogar não é apenas entretenimento; é a forma como o gato exerce seu instinto de caça. Um gato que não joga pode desenvolver problemas de comportamento por acumulação de energia ou estresse. Claves para um jogo exitoso: Imita a uma presa: Usa joguetes que se movam, se escondam, saltem ou vibrem. As varas com penas ou cordas são ideais porque te permitem interagir a distância. Segurança ante tudo: Evita fios longos sem supervisão ou peças pequenas que possa engolir. Rotina diária: Dedica pelo menos 15 minutos por dia a jogar ativamente com ele. Isso fortalece seu vínculo e manteve sua mente ágil. Variedade: Rotar os joguetes evita que se aborre de os mesmos objetos."
              },
              {
                "heading": "Higiene e Areneros: A regra de ouro",
                "body": "Os gatos são extremamente limpos e exigentes com seu banho. Um arenero sujo ou mal localizado é a causa número um de problemas de eliminação inadequada. Recomendações básicas: A regra do 'N+1': Deves ter uma caixa de areia por cada gato, mais uma extra. (Exemplo: 1 gato = 2 caixas; 2 gatos = 3 caixas). Alguns gatos preferem mesmo usar uma caixa apenas para urinar e outra para defecar. Tipo de areia: A maioria prefere areias sem perfume e de textura fina e suave. Localização: Lugares tranquilos, privados e longe de ruídos fortes (lavadoras, secadoras) ou de sua zona de comida. Limpeza: Retira os resíduos a diário e lava as caixas regularmente com água e sabão neutro (evita lejias ou amoníaco, cujos odores podem atraí-los a urinar fora). Alerta: Se seu gato começar a urinar ou defecar fora da caixa, vá ao veterinário. Muitas vezes é o primeiro sintoma de dor ou doença urinária, não um ato de vingança."
              },
              {
                "heading": "O Marcaje com Orina: Entendendo o mensagem",
                "body": "O marcaje vertical com orina (rociar paredes ou móveis) é diferente de evacuar a bexiga no chão. É um comportamento comunicativo, não necessariamente higiênico. Quem o faz? Pode ocorrer em gatos esterilizados, embora seja mais comum em não esterilizados (aproximadamente 10% de machos e 5% de fêmeas castradas podem fazê-lo ocasionalmente). Por que o fazem? Geralmente responde a estresse ou insegurança: chegada de novas mascotas, mudanças na rotina, conflitos com outros gatos (mesmo vendo gatos de rua pela janela) ou mudanças no lar. Solução: O castigo piora o problema. O ideal é identificar a fonte de estresse, limpar a zona com enzimas específicas (para eliminar o cheiro por completo) e consultar com um veterinário ou etólogo para avaliar se precisa de ajuda comportamental ou médica."
              },
              {
                "heading": "Conclusão: Convivência baseada no respeito",
                "body": "O comportamento felino não é caprichoso; tem uma lógica biológica profunda. Precisam de segurança (rotinas, lugares altos). Precisam de estimulação (jogo, caça simulada). Precisam de limpeza (areneros impecáveis). Precisam de comunicação (rascar, marcar, miar). Quando respeitas essas necessidades básicas, deixa de ver 'problemas' e começa a ver a um companheiro equilibrado, carinhoso e feliz. Entender seu gato é a melhor ferramenta para amá-lo melhor."
              }
            ]
          }
        ]
      },
      {
        "slug": "comportamiento-felino",
        "label": "Introdução entre gatos",
        "topics": [
          {
            "slug": "presentacion entre gatos",
            "title": "Como lograr que dois gatos se aceitem e convivam tranquilos",
            "intro": "Introduzir um novo gato em casa é emocionante, mas pode ser estressante para seu gato residente. Os gatos são territoriais por natureza, então a chave do sucesso não é a rapidez, mas a paciência. Se você faz bem desde o início, evitará conflitos futuros e fomentará uma amiz",
            "sections": [
              {
                "heading": "Paso 1: A Quarentena Inicial (Dias 1-4)",
                "body": "O novo gato precisa se sentir seguro antes de conhecer alguém. Sua própria sala: Prepara uma sala tranquila (que não seja a zona principal do seu gato atual) com sua cama, comida, água, brinquedos e arejador. Refúgio seguro: Deixe seu transportin aberto com uma manta dentro para que tenha um esconderijo onde se sentir protegido. Sem contato visual: Durante esses primeiros dias, eles não devem se ver. No entanto, está bem que se cheirem sob a porta. Isso lhes permite investigar-se sem a pressão do rosto a rosto."
              },
              {
                "heading": "Paso 2: Intercambio de Olores (O 'Dating' Olfativo)",
                "body": "Os gatos se conhecem pelo olfato, não pela vista. Intercambia objetos: Frote suavemente uma toalha ou meia em as faces de um gato (onde têm glândulas de olor) e dê-lo ao outro, e vice-versa. Você também pode intercambiar suas mantas. Associação positiva: Enquanto eles cheiram o objeto do outro, dê-lhes prêmios ricos ou jogue com eles. Queremos que associem o cheiro do 'outro' com coisas boas (comida/jogo). Atenção equilibrada: Passe tempo de qualidade com cada gato por separado, acariciando-os e jogando perto da porta que os separa. Isso reduz a ansiedade e os ciúmes."
              },
              {
                "heading": "Paso 3: Contato Visual Controlado",
                "body": "Quando ambos gatos estiverem relaxados se cheirando sob a porta e não houver silvos graves ou grunhidos constantes: A rendija: Abra a porta apenas uma polegada (uns 2-3 cm) ou use uma barreira de grade para bebês. Eles devem poder se ver, mas não se tocar. Observe: Se houver silvos leves, é normal. Se houver agressão intensa (silvos fortes, boca aberta, orelhas muito baixas), feche a porta e volte ao Paso 2 por alguns dias mais. Premie a calma: Se eles se olharem sem atacarem, dê-lhes prêmios imediatamente."
              },
              {
                "heading": "Paso 4: As Primeiras Interações Supervisadas",
                "body": "Se o contato visual for bem, é hora de deixá-los compartilhar espaço, mas com regras estrictas. Saída voluntária: Abra a porta e deixe que o novo gato saia se quiser. Nunca o force. Se ele se esconder, respeite-o. Sessões curtas: Permita que eles estejam juntos 15-30 minutos máximo. Em seguida, separe-os novamente em suas salas. Distracção positiva: Jogue com eles usando brinquedos de cana ou lance prêmios, mas mantenha uma distância segura (ao menos 1 metro entre eles) para evitar que competam pelo brinquedo. O objetivo: Que aprendam que a presença do outro não é uma ameaça, mas algo neutro ou até divertido."
              },
              {
                "heading": "Paso 5: Aumento Gradual do Tempo",
                "body": "Pouco a pouco, veja aumentar o tempo que eles passam juntos se as interações forem tranquilas. Separe sempre ao final: Termine a sessão antes de que haja algum conflito. É melhor deixá-los com vontade de mais do que com uma briga. Tempo sozinhos: Depois de cada sessão, deixe-os tempo sozinhos em suas respectivas zonas para processar a experiência e recuperar sua confiança territorial."
              },
              {
                "heading": "Señais de Alerta e Estresse",
                "body": "Detém o processo e volte para trás se você ver: Silvos intensos e repetidos, rugidos profundos, pelo eriçado e posturas rígidas. No gato residente: Pare de comer, use mal o arejador ou se esconda todo o dia. No gato novo: Se lama compulsivamente, não come ou parece aterrorizado. Conselho: Se o estresse for alto, consulte seu veterinário ou um etólogo. Às vezes, usar feromonas sintéticas (difusores) pode ajudar a calmar o ambiente."
              },
              {
                "heading": "O que NUNCA devias fazer",
                "body": "Nunca castigues: Gritar ou castigar um gato por silbar ou mostrar agressividade só aumenta seu estresse e associa o outro gato com algo negativo (o castigo). Reação correta: Se houver tensão, separe os gatos com calma, sem drama. Use uma voz suave ou simplesmente interponha uma barreira física. Não os deixe sozinhos: Até que não estejas 100% seguro de que se toleram (podem levar semanas ou meses), nunca os deixe sem supervisão."
              },
              {
                "heading": "Casos Especiais: O Gato Timido",
                "body": "Se seu novo gato for muito medroso, o processo será mais lento. Não tenha pressa. Um gato tímido precisa de mais tempo para confiar no seu entorno antes de confiar em outro gato. Reforça seu vínculo individual com ele. As sessões de contato podem ser mais curtas (10 minutos) mas mais frequentes. Conclusão: Paciência é Amor. Cada par de gatos é único. Alguns se aceitam em uma semana; outros levam meses. Não compara. Seu objetivo é uma convivência pacífica a longo prazo, não uma amizade imediata de filme. Ir devagar é a forma mais rápida de alcançar o sucesso. Sua paciência valerá a pena!"
              }
            ]
          }
        ]
      },
      {
        "slug": "lenguaje",
        "label": "Linguagem Felina",
        "topics": [
          {
            "slug": "comunicacion-corporal",
            "title": "Comunicação corporal",
            "intro": "Os gatos têm um linguagem corporal sofisticada e precisa. Aprender a lê-la transforma a relação com seu gato e permite antecipar suas necessidades e estados emocionais.",
            "sections": [
              {
                "heading": "A cauda como barômetro emocional",
                "body": "A cauda é uma das sinalizações mais claras: alta e reta indica confiança, saudação afetuosa ou felicidade (se a ponta estiver curvada é felicidade máxima). Baixa ou entre as pernas expressa medo, insegurança ou submissão. Moviendo-se de lado a lado rapidamente ou com movimento lento revela irritação, moleza ou concentração. Se estiver esponjada, eriçada ou arqueada, o gato sente ameaça ou terror."
              },
              {
                "heading": "As orelhas não mentem",
                "body": "As orelhas mostram muito sobre o humor: para frente indica que está atento, curioso, em alerta ou com interesse. Para trás, coladas ou planas indicam medo, moleza ou agressão defensiva. Se estiverem giradas para os lados ('modo avião'), é uma sinalização de irritação crescente e o gato precisa de espaço. O movimento constante indica que está alerta ou nervoso."
              },
              {
                "heading": "Os olhos e o piscar",
                "body": "Os olhos comunicam emoções profundas: abertos com pupilas grandes/dilatadas indicam medo, surpresa, excitação ou jogo. Uma olhar fixo pode ser sinal de desafio ou atenção intensa. Por outro lado, uma olhar relaxada ou o piscar lento é uma sinalização ativa de confiança, tranquilidade e afeto."
              },
              {
                "heading": "Os bigodes e o rosto",
                "body": "Os bigodes também falam: se estiverem orientados para frente, indicam curiosidade ou excitação por algo que estão explorando. Se estiverem colados na cara ou retraídos, indicam que o gato sente medo ou está tentando parecer menos ameaçante ante uma situação tensa."
              },
              {
                "heading": "Postura corporal geral",
                "body": "O corpo indica o estado geral: relaxado significa que se sente seguro. Encolhido ou tenso indica medo. Arqueado com a espalda levantada mostra que está assustado e tentando parecer mais grande para se defender. O gato combina todas essas sinalizações (cauda, orelhas, olhos) ao mesmo tempo; por exemplo, cauda alta com olhos relaxados é um gato feliz, enquanto orelhas para trás com cauda se movendo forte é um gato enojado."
              },
              {
                "heading": "Idea principal",
                "body": "Não se deve olhar apenas uma sinal isolada, mas sim o conjunto de todas as partes do corpo. Aprender a observar esses detalhes te ajudará a compreender melhor seu companheiro e a respeitar seu espaço quando precisar."
              }
            ]
          },
          {
            "slug": "vocalizaciones",
            "title": "Vocalizações e seu significado",
            "intro": "Os gatos adultos quase não se maúlam entre si: o maúlam é um linguagem que desenvolveram especificamente para se comunicar com humanos. Cada gato tem seu vocabulário próprio.",
            "sections": [
              {
                "heading": "O maúlam",
                "body": "Um maúlam curto e agudo geralmente é um cumprimento. Um longo e sustentado, uma demanda (comida, atenção). Os maúlams repetitivos podem indicar dor, desorientação (especialmente em gatos maiores) ou angústia."
              },
              {
                "heading": "O ronronar",
                "body": "Não sempre indica felicidade: os gatos também ronronam quando estão estressados, doentes ou em processo de recuperação. O ronronar tem propriedades terapêuticas demonstradas entre 25 e 50 Hz, frequência que favorece a regeneração óssea."
              },
              {
                "heading": "Outros sons",
                "body": "O trinado ou chilrear é um cumprimento caloroso ou resposta a o que você fala. O chatter (castanho de dentes) aparece ao ver pássaros ou presas: é frustração e excitação de caça. O bufido e o escupir são avisos claros de que o gato se sente ameaçado."
              }
            ]
          },
          {
            "slug": "parpadeo-lento",
            "title": "O parpalejo lento: o beijo felino",
            "intro": "O parpalejo lento é uma das sinalizações mais estudadas e bonitas do repertório felino. Um estudo de 2020 na Universidade de Sussex demonstrou experimentalmente que os humanos podemos iniciar essa comunicação com qualquer gato.",
            "sections": [
              {
                "heading": "O que significa",
                "body": "Quando um gato te olha e parpaleja lentamente, ele está dizendo que se sente seguro e à vontade em sua presença. É o equivalente felino de uma sorriso relaxado e um gesto de confiança plena."
              },
              {
                "heading": "Como fazer",
                "body": "Olhe para o gato com uma expressão relaxada. Quando tiver contato visual, entrecerre lentamente os olhos até quase fechá-los e depois abra-os novamente. Espere. Se o gato responder com o mesmo gesto, o canal de comunicação está aberto."
              },
              {
                "heading": "Com gatos desconhecidos",
                "body": "Funciona até mesmo com gatos que não o conhecem. Em abrigos e colônias, o parpalejo lento pode ser a diferença entre um gato que se aproxima voluntariamente e um que foge. É uma ferramenta poderosa para ganhar confiança."
              }
            ]
          }
        ]
      },
      {
        "slug": "conducta",
        "label": "Conductas comuns",
        "topics": [
          {
            "slug": "arañar-muebles",
            "title": "Por que arranham os móveis",
            "intro": "Arranhar não é má conduta nem destrutividade: é uma necessidade biológica fundamental. Entender por que eles fazem é o primeiro passo para redirecioná-lo para lugares apropriados.",
            "sections": [
              {
                "heading": "As três razões do aranhasado",
                "body": "Os gatos aranham para marcar territorialmente visualmente e com feromonas das almofadas, para esticar músculos e tendões de forma saudável, e para eliminar as camadas mortas das unhas. É um comportamento instintivo que não pode ser eliminado, apenas redirecionado."
              },
              {
                "heading": "Como proteger o móvel",
                "body": "Coloca rascadores nos lugares que o gato já frequenta para aranhar. Usa feromonas sintéticas (Feliway) nas superfícies que você quer proteger. Cubra temporariamente os móveis com telas ou protectores adesivos não pegajosos para redirecionar a conduta."
              },
              {
                "heading": "Qual tipo de rascador funciona melhor",
                "body": "Cada gato tem sua preferência: alguns precisam de rascadores verticais altos (que lhes permitam esticar completamente), outros preferem horizontais. A sisal costuma ser o material favorito, embora alguns preferam cartão ou tapete. Ofereça variedade no início."
              }
            ]
          },
          {
            "slug": "amasar",
            "title": "O amasado: patas que fazem pão",
            "intro": "O amasado, esse movimento rítmico de pressionar alternadamente com as patas sobre superfícies macias, é um dos comportamentos mais ternos e carregados de significado do repertório felino.",
            "sections": [
              {
                "heading": "O origem do comportamento",
                "body": "Os gatinhos amasam o ventre da mãe para estimular a produção de leite. Em adultos, é um comportamento de conforto que persiste da infância: eles o fazem quando se sentem seguros, felizes e relaxados."
              },
              {
                "heading": "¿O que indica quando amassam sobre ti?",
                "body": "É uma das maiores expressões de afeto e confiança. Seu gato está tratando você como sua mãe e dizendo que se sente completamente seguro em sua presença. É um honor felino."
              },
              {
                "heading": "Variações do amassado",
                "body": "Alguns gatos amassam manta, peluches ou até o ar. Outros só amassam sobre pessoas específicas. Há gatos que amassam com as quatro patas, outros só com as dianteiras. Todas as variantes são completamente normais."
              }
            ]
          }
        ]
      },
      {
        "slug": "entrenamiento",
        "label": "Adiestramento",
        "topics": [
          {
            "slug": "guia-entrenamiento-casa",
            "title": "Seu gato também quer aprender: Guia divertida para treinar em casa",
            "intro": "Cres que os gatos são independentes e passam do adiestramento? Nada mais longe da realidade! Os gatos são inteligentes, curiosos e, sobretudo, lhes encanta ter 'coisas para fazer'. Na natureza, passariam o dia caçando e explorando; em casa, se aborrecem. E um gato aborrecido é um gato que arranha o sofá ou miúla à noite. Treinar seu gato não é fazê-lo obeder como um cão militarizado. É brincar com propósito. É uma forma incrível de se conectar com ele, estimular sua mente e fortalecer sua amizade. E o melhor? Basta 10 minutos por dia.",
            "sections": [
              {
                "heading": "**1. **O segredo: Usa seu instinto, não a força",
                "body": "Os gatos não respondem bem a ordens secas nem a castigos. Respondem ao reforço positivo. A regra de ouro: Se faz algo bem, receba um prêmio (uma guloseima rica, um pouco de atum ou muitas carícias). Nunca force: Se puxa ele ou grita, se fecha em banda. O treinamento deve ser sempre voluntário e divertido. Sessões curtas: 5 ou 10 minutos são suficientes. Se vê que se distrai, termine a sessão com algo que já saiba fazer bem para que acabe com boa sensação."
              },
              {
                "heading": "**2. **A ferramenta mágica: 'A Diana' (Targeting)",
                "body": "Antes de ensinar truques complicados, ensine a seguir seu dedo ou um objeto. Isso se chama targeting e é a base de tudo. Aproxime seu dedo (ou um palito com uma ponta brilhante) à nariz do gato. Por curiosidade, ele o cheirá ou o tocará. Em quanto o tocar, diga 'Bem!' (com voz alegre) e dê um prêmio imediatamente. Repita isso várias vezes. Logo, seguirá seu dedo para onde você o mover, porque sabe que tocá-lo traz coisas boas. Já tem o controle suave de seu movimento!"
              },
              {
                "heading": "**3. **Truques fáceis para começar",
                "body": "'Ven aqui' (A ordem mais importante): É vital por segurança. Chame-o pelo nome ou chasque a língua. Quando vier para você, celebre muito e dê um prêmio espetacular. Importante: Nunca lhe riña quando vier, mesmo que tenha demorado muito. Ele precisa associar 'vir' com 'festa'. 'Sentado': Os gatos se sentam naturalmente quando olham para cima. Com o gato de pé, pon uma brinquedoteca justo acima de sua cabeça. Mova a mão lentamente para trás (para sua cauda). Para seguir a comida com a vista, ele baixará o rabo automaticamente. Em quanto o rabo tocar o chão, diga 'Sentado' e dê o prêmio. 'No colo' ou 'Suba': Ideal para que venha dormir com você ou suba para lugares permitidos. Sente-se em uma cadeira ou sofá. Bata suavemente sua perna ou o assento e diga 'Suba'. Guie-o com a brinquedoteca se precisar. Quando subir, prêmio imediato! Logo, saltará sozinho para estar com você."
              },
              {
                "heading": "**4. **Retos um pouco mais avançados",
                "body": "'Quieto': Peça que se sente. Pon a palma de sua mão frente à sua cara (como um semáforo vermelho) e diga 'Quieto'. Espere apenas 1 segundo no início. Se não se mover, prêmio. Veja aumentando o tempo pouco a pouco (2 segundos, 5 segundos...). Paciência, isso custa mais. 'Deite-se' (Deitado): É difícil porque é uma posição vulnerável para eles. Desde a posição sentada, baixe a brinquedoteca ao chão, entre suas patas dianteiras. Aleje-a devagar para frente. Se abaixar o peito e se alongar, prêmio pesado! Não espere que fique assim por muito tempo no início."
              },
              {
                "heading": "**5. **Passear com coleira? Sim, é possível",
                "body": "A muitos gatos encanta explorar o exterior, mas deve ser seguro. O Colete: Compre um tipo de chaleco (mais confortável e seguro que os de corda fina). Deixe-o posto em casa alguns minutos por dia enquanto brinca, para que se acostume. A Coleira: Adicione-a quando já ignorar o colete. Deixe que a arraste sob sua supervisão. A Saída: Saia para o corredor ou jardim. Não puxe a coleira. Deixe que ele explore e você o siga. Se se assustar, volte para dentro. Sem pressa."
              },
              {
                "heading": "**6. **Solucionando problemas com brincadeira",
                "body": "Araña o sofá? Não lhe grite. Pon um rascador justo ao lado do sofá. Use o truque de 'a diana' para guiar suas patas ao rascador e prêmio muito quando o usar. Faça que o rascador seja mais interessante que o sofá (ponha catnip, por exemplo). Se se aburre? O treinamento É a brincadeira. Dedique esses 10 minutos diários a repassar truques. Verá como deixa de buscar atenção negativa (maus-padrões, destruições) porque já tem sua atenção positiva."
              },
              {
                "heading": "Conselho final: Desfrute do processo",
                "body": "Não busques a perfeição. Busca a conexão. Verás como o seu gato começa a buscarte para 'trabalhar' (jogar), como ele te olha nos olhos esperando instruções e como sua personalidade brilha. Um gato treinado é um gato confiante, feliz e muito mais carinhoso. Anima-te! Seu 'tigre de sofá' tem muito potencial oculto."
              }
            ]
          },
          {
            "slug": "guia-paseos-correa",
            "title": "Paseos Felinos: Como ensinar o seu gato a caminhar com coleira (sem estresse)",
            "intro": "Sacar o seu gato para passear pode parecer estranho, mas é uma forma fantástica de que ele desfrute do ar livre de maneira segura. Além disso, ajuda a que ele esteja mais tranquilo durante as visitas ao veterinário ou os viajes. A chave não é a força, mas a paciência e as guloseimas.",
            "sections": [
              {
                "heading": "Antes de começar",
                "body": "Asegura-te de que o seu gato tenha todas as suas vacinas em dia e leve microchip. A segurança é o primeiro."
              },
              {
                "heading": "Paso 1: Presentação positiva (O arnês é amigo)",
                "body": "Não lhe ponhas o arnês de golpe. Queremos que o associe com coisas boas. Fase de olor: Deixa o arnês e a coleira perto de sua cama ou seu prato de comida durante alguns dias. Que se acostume a vê-los e oler os enquanto come ou dorme. Associação positiva: Sostém o arnês em sua mão, deixa que ele o huela e dê uma guloseima rica. Acércalo suavemente a seu corpo sem ponê-lo, segue dando premios."
              },
              {
                "heading": "Paso 2: O primeiro ajuste (Dentro de casa)",
                "body": "Agora vamos a provar como ele lhe fica. Coloca o arnês suavemente sobre seus ombros e peito. Dê premios constantemente enquanto ele o huela e o toca. Abrocha o arnês rapidamente. Regra de ouro: Devem caber dois dedos entre o arnês e o corpo do gato (nem muito apertado, nem muito holgado). Deixas-lo posto apenas 1 ou 2 minutos no início. Jogue com ele ou dê comida húmida para distraí-lo. Quitas-o antes que ele se moleste ou tente quitá-lo. Repete isso diariamente, aumentando o tempo pouco a pouco se ele se mostra relaxado."
              },
              {
                "heading": "Paso 3: A coleira 'fantasma'",
                "body": "Una vez que tolera o arnês, adicionamos a corrente. Conecta a corrente ao arnês dentro de casa. Deixa que a corrente arraste pelo chão enquanto seu gato joga ou explora. Vigia que não se encontre em móveis ou pernas de cadeiras. Faça isso durante vários dias até que ignore completamente o peso da corrente arrastando-se."
              },
              {
                "heading": "Passo 4: Você toma o comando (Sem puxões)",
                "body": "Agora é sua vez de segurar a corrente. Toma a corrente suavemente e segue seu gato pela casa. Mantenha a corrente floja. Não puxe ela. Só o acompanhe. Se parar, espere. Se vier em sua direção, recompense e elogie! O objetivo é que entenda que a corrente não dói nem restringe, mas sim é um vínculo com você."
              },
              {
                "heading": "Passo 5: Guia suave e direção",
                "body": "Quando já caminhar tranquilo com a corrente na mão, comece a guiá-lo. Use uma voz doce e suave para convidá-lo a seguir. Lança uma guloseima alguns passos à frente. Enquanto come, avance também. Se puxar para outro lado, não des puxões. Mantenha uma tensão muito suave e constante na corrente. Em quanto o gato ceder e olhar para você ou dar um passo em sua direção, afloje a corrente imediatamente e recompense. Aprenderá que 'ceder à pressão = liberdade e recompensa'."
              },
              {
                "heading": "Passo 6: A grande saída (O exterior)",
                "body": "Os gatos podem se assustar muito com os ruídos e odores de fora. Comece em um lugar tranquilo e fechado (um pátio interno ou jardim seguro). Sente-se no chão com ele. Deixe que explore a seu ritmo. No início, só siga-o você. Não tente marcar uma rota. Se vir que tem medo (se agacha, tenta escapar), volte para casa. Não o force. O passeio deve ser divertido, não uma pesadilla."
              },
              {
                "heading": "Regras de Segurança Importantes",
                "body": "Nunca o deixe sozinho: Jamais atasse a corrente a algo e vá embora. Podia se enredar, se machucar ou ficar indefeso diante de um cachorro ou outro perigo. A porta é zona de risco: Ponha o arnês longe da porta de saída. Saia com ele nos braços até fora. Se fizer isso perto da porta, aprenderá a tentar escapar cada vez que abrir."
              }
            ]
          },
          {
            "slug": "clicker-training",
            "title": "Ignora as rabietas: Se maúlla ou se queixa para que o saia, ignore-o. Só ponha o arnês e saiam quando estiver tranquilo. Assim aprende que a calma é a chave para sair.",
            "intro": "Contrário ao mito popular, os gatos são perfeitamente treináveis com reforço positivo. O treinamento com clicker não só ensina truques: fortalece o vínculo, estimula mentalmente e reduz problemas de comportamento.",
            "sections": [
              {
                "heading": "Como funciona o clicker",
                "body": "O clique marca o momento exato do comportamento correto, e vai sempre seguido de um prêmio. O gato aprende que esse som específico prediz uma recompensa, o que o motiva a repetir a conduta. A precisão do momento é chave."
              },
              {
                "heading": "Por onde começar",
                "body": "Primeiro 'carrega' o clicker: faça clique e dê prêmio 10 vezes seguidas sem pedir nada. Em seguida, comece com condutas simples que o gato já faz naturalmente: sentar-se, tocar a mão com a nariz. Sessões de 2-5 minutos, 2-3 vezes ao dia."
              },
              {
                "heading": "Truques mais avançados",
                "body": "Uma vez dominado o básico, pode ensinar: dar a patinha, dar a volta, saltar obstáculos, entrar voluntariamente no transportin, ou mesmo usar botões de comunicação. Não há limite se as sessões são curtas e positivas."
              }
            ]
          }
        ]
      },
      {
        "slug": "bienestar-felino",
        "label": "Bem-estar",
        "topics": [
          {
            "slug": "guia-dolor-silencioso",
            "title": "O Dolor Silencioso: Como saber se seu gato sofre e como ajudá-lo",
            "intro": "Os gatos são mestres do disfarce e ocultam seu dor por instinto para não parecer vulneráveis. Aprender a ler suas sinais sutis é fundamental para ser seu melhor aliado e evitar que sua saúde se deteriore sem que nos demos conta.",
            "sections": [
              {
                "heading": "**1. **Pistas sutis de dor",
                "body": "2. Olvida os choros ou coices; o dor felino se esconde em mudanças de comportamento: se esconde mais (sob a cama ou armários), muda de humor tornando-se irritadiço ou inusitadamente 'pegajoso', e deixa de se acicalar (pelo opaco ou com nós). Também pode lamber-se em excesso em uma zona específica, adotar uma postura tensa de 'pão de ló' com a cabeça baixa, ou deixar de pular em lugares que antes frequentava por dor articular."
              },
              {
                "heading": "**3. **Os dores mais comuns",
                "body": "4. Identificar o tipo ajuda no diagnóstico: a Artrose é comum em maiores de 7 anos (deixam de brincar ou subir em lugares altos); o dor de boca (gingivoestomatite ou dentes quebrados) causa babar, mau cheiro ou deixar de comer; o dor interno (cistite, rim ou pancreatite) gera um desconforto profundo e depressão; e o dor nervoso (como na diabetes) pode causar dor ao simples roçar da pele."
              },
              {
                "heading": "**5. **Tratamento Veterinário Multimodal",
                "body": "6. O tratamento moderno usa várias ferramentas: medicamentos seguros como anti-inflamatórios específicos, analgésicos (buprenorfina) ou moduladores nerviosos (gabapentina). Se complementa com terapias como acupuntura, laser terapêutico ou reabilitação física. Em cirurgias, se usam bloqueios locais. Aviso: Nunca use ibuprofeno ou paracetamol humanos, são mortais para os gatos!"
              },
              {
                "heading": "**7. **4. Seu papel em casa: Manejo Ambiental",
                "body": "8. Adapte o ambiente: instale rampas ou degraus para subir em sofás, use areários com bordos baixos e camas ortopédicas. O controle de peso é crucial para não sobrecarregar articulações. Além disso, reduza o estresse mantendo rotinas tranquilas e usando feromonas se necessário, pois o estresse piora a percepção do dor."
              },
              {
                "heading": "**9. **5. Casos Especiais: Idade e Estado",
                "body": "10. Em gatinhos cachorros, é preciso ter muito cuidado com as doses devido aos órgãos em maturação. Em gatos maiores com problemas de rim ou fígado, as doses devem ser ajustadas minuciosamente. Em gatas grávidas ou amamentando, apenas o veterinário deve decidir o tratamento, pois muitos analgésicos passam para os fetos ou para a leite."
              },
              {
                "heading": "Não esperes a que se queje",
                "body": "Um gato que não se queja não significa que não sofra. O dor crônico não tratado empeora a qualidade de vida e acelera o envelhecimento. Ante qualquer mudança na rotina, apetite ou caráter, consulte o veterinário. Com sua observação amorosa e ajuda médica, seu gato pode viver sem sofrimento, mesmo com doenças crônicas."
              }
            ]
          }
        ]
      },
      {
        "slug": "estrés",
        "label": "Estrés",
        "topics": [
          {
            "slug": "guia-estres-ansiedad",
            "title": "O Estrés no Gato: Guia completa para entender e ajudar",
            "intro": "Cada vez sabemos mais sobre o comportamento felino, e uma das chaves principais é o estresse. Muitos problemas de saúde e comportamento que vemos em casa têm sua raiz aqui. Entender o que acontece com seu gato é o primeiro passo para melhorar sua qualidade de vida.",
            "sections": [
              {
                "heading": "**1. **O que é realmente o estresse?",
                "body": "O estresse não é sempre 'malo'. É uma reação natural do corpo que prepara o gato para se adaptar a mudanças (uma mudança, um viaje, a chegada de um bebê). Estresse positivo: Ajuda a reagir e se adaptar. Estresse negativo: Ocorre quando a situação é demasiado intensa ou dura demais. Se o gato não consegue se adaptar, o estresse se cronifica e pode derivar em ansiedade. Diferença-chave: Medo vs. Ansiedade. Medo: Reação imediata ante um perigo real. O coração se acelera e o gato está pronto para fugir ou se defender. É útil para sobreviver. Ansiedade: O gato sente medo ante algo que não é perigoso ou que não pode controlar. Não sabe como resolver a situação, então vive em tensão constante."
              },
              {
                "heading": "**2. **Por que alguns gatos são mais sensíveis?",
                "body": "Não todos os gatos reagem igual. Seu nível de tolerância ao estresse depende de dois fatores principais: A. Genética e Caráter: Alguns gatos são naturalmente mais seguros; outros, mais tímidos. Fatores como a raça, o sexo e a herança genética influem. Um gato inseguro precisará sempre de um ambiente mais tranquilo e previsível. B. A Socialização Temprana (A janela crítica): As primeiras 2 a 7 semanas de vida são decisivas. Se houve contato humano carinhoso: O gatinho aprenderá que as pessoas são seguras. Será mais sociável e resistente ao estresse. Se faltou contato ou houve experiências negativas: É muito provável que desenvolva desconfiança e medo para com os humanos ou novos estímulos quando for adulto. O ambiente importa: Os gatinhos criados em ambientes ricos em estímulos (sonidos, texturas, jogos) tendem a ser adultos mais adaptáveis."
              },
              {
                "heading": "**3. **O que causa estresse em meu gato?",
                "body": "Los gatos necessitam sentir que têm o controle do seu ambiente. Quando perdem esse controle, aparece o estresse. Fatores Sociais: Mudanças na rotina diária. Chegada de novas pessoas, bebês ou outras mascotas. Discussões ou gritos em casa. Castigos ou atenção irregular (às vezes muito, às vezes nada). Fatores Físicos: Mudanças ou reformas. Espaço insuficiente ou má organização (exemplo: arejador perto da comida). Competição por recursos (se houver vários gatos e poucos pratos ou arejadores)."
              },
              {
                "heading": "Señais de Alerta: Como sei se meu gato está estressado?",
                "body": "Os gatos são expertos em ocultar o dor e o desconfort. Você deve ser um detetive. Sintomas Físicos Inmediatos: Respiração acelerada ou jadeo. Pupilas muito dilatadas. Tremores ou salivação excessiva. Vômitos ou diarreia pontual (exemplo: antes de viajar). Mudanças de Comportamento: Postura: Orelhas para trás, cauda baixa, corpo tenso. Escondite: Passe muito tempo escondido ou debaixo dos móveis. Agresividade: Gruña, bufa ou ataca sem motivo aparente. Vigilância extrema: Não se relaxa, está sempre 'em guarda'. Signos de Estrés Crônico (A longo prazo): Se o estresse não for tratado, aparecem problemas mais graves: Aseo compulsivo: Se lama tanto que fica sem pelo (alopecia psicógena). Problemas de eliminação: Ora ou defeca fora do arejador (marcado territorial ou ansiedade). Mudanças no sono: Dói pouco, mal, ou sempre em posições tensas (não deitado de costas nem de lado relaxado). Mudanças alimentares: Coma em excesso (ansiedade) ou deixa de comer. Comportamentos repetitivos: Persiga sua cauda, meie constantemente ou caminhe sem rumo."
              },
              {
                "heading": "**5. **O impacto na Saúde Física",
                "body": "O estresse não é só 'coisa da mente'; enferma o corpo. Cistite Idiopática Felina: Inflamação da bexiga sem infecção bacteriana, diretamente ligada ao estresse. Problemas digestivos: Gastrite, vômitos crônicos ou diarreias. Problemas de pele: Feridas por lamido excessivo. Obesidade e Diabetes: Às vezes, os donos dão comida para 'consolar' o gato, o que leva ao sobrepeso. Bajada de defesas: Os gatinhos ou gatos maiores estressados se enfermam mais facilmente (gripes, infeções). Importante: Antes de assumir que é estresse, vá ao veterinário. Problemas como hipertiroidismo, dor articular ou tumores podem imitar sintomas de estresse ou ansiedade."
              },
              {
                "heading": "**6. **Como ajudar ao seu gato? (Tratamento e Manejo)",
                "body": "O objetivo é devolver-lhe a sensação de segurança e controle. A. Terapia de Conduta (O mais importante): Identifique a causa do estresse e modifique o ambiente. Respeite suas rotinas. Proporcione lugares altos e escondites seguros. Jogue com ele diariamente para liberar tensão. B. Ajuda Ambiental: Feromonas: São substâncias químicas (como Feliway) que imitam as feromonas faciais dos gatos, transmitindo mensagem de 'calma' e 'familiaridade'. Ajuda a reduzir o marcado e a ansiedade. Enriquecimento ambiental: Rascadores, joguetes interativos e acesso a janelas seguras. C. Alimentação Anti-Estrés: Existem dietas específicas ou suplementos que ajudam: Triptofano: Um aminoácido precursor da serotonina (a hormona da felicidade). Derivados da leite: Proteínas hidrolizadas com efeito calmante natural. Esses nutrientes ajudam a regular o estado de ânimo, melhorar a digestão e cuidar a pele. D. Medicamento: Em casos graves de ansiedade, o veterinário pode prescrever fármacos. Nunca medique ao seu gato por"
              },
              {
                "heading": "Conclusión",
                "body": "El estrés en los gatos es invisible pero poderoso. Un gato tranquilo es un gato sano. Observa sus pequeños cambios, respeta su necesidad de control y, si ves señales de alarma, busca ayuda profesional. Tu comprensión puede cambiar totalmente su bienestar."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "alimentacion",
    "label": "Alimentação",
    "emoji": "",
    "color": "#d4853a",
    "bg": "#fff3e6",
    "description": "Nutrição, dietas e o que não podem comer",
    "subcategories": [
      {
        "slug": "dietas",
        "label": "Tipos de dieta",
        "topics": [
          {
            "slug": "comida-humeda-vs-seca",
            "title": "Comida húmida vs. ração seca",
            "intro": "Esta é uma das perguntas mais frequentes e debatidas entre donos de gatos. A resposta importa porque os gatos têm uma relação particular com a água que faz que o tipo de alimento impacte diretamente sua saúde renal.",
            "sections": [
              {
                "heading": "A natureza do gato e a água",
                "body": "Os gatos evoluíram em ambientes áridos e obtêm a maior parte da água de suas presas. Sua sede está 'calibrada' para comida com 70% de umidade. A ração seca tem apenas um 10%, o que pode levar a desidratação crônica e problemas renais e urinários."
              },
              {
                "heading": "Vantagens da comida húmida",
                "body": "Maior hidratação, maior saciedade com menos calorias, mais semelhante à dieta natural, melhor para gatos com tendência a problemas urinários ou renais. A maioria dos veterinários a recomenda como alimento principal."
              },
              {
                "heading": "O papel da ração seca",
                "body": "Não é ruim, mas não deveria ser o único alimento. Pode ser útil como complemento, para joguete dispensador ou como lanche. Escolha ração com alto porcentagem de proteína animal (não vegetal) e sem cereais como primeiro ingrediente."
              }
            ]
          },
          {
            "slug": "dieta-barf",
            "title": "Dieta BARF para gatos",
            "intro": "A dieta BARF (Alimento Bioticamente Apropriado e Raro) se baseia em alimentar o gato com carne crua, ossos carnudos e vísceras, imitando a dieta de seus ancestrais selvagens. Tem defensores apaixonados e detratores com argumentos sólidos.",
            "sections": [
              {
                "heading": "Fundamentos da BARF",
                "body": "A dieta ideal para um gato BARF inclui aproximadamente 70% de carne magra, 10% de ossos carnudos (nunca cozidos), 10% de vísceras (fígado, coração) e o 10% restante de outros tecidos. Requer suplementação cuidadosa com taurina, cálcio e vitaminas."
              },
              {
                "heading": "Benefícios reportados",
                "body": "Melhora do pêlo, menor produção de fezes, melhor hidratação, dentes mais limpos e maior energia são os benefícios mais citados por quem a pratica. Alguns estudos sugerem menor risco de obesidade."
              },
              {
                "heading": "Riscos a considerar",
                "body": "Contaminação bacteriana (Salmonela, Listeria), desequilíbrios nutricionais se não for formulada corretamente, e risco de asfixia com ossos. Não se recomenda para gatos imunodeprimidos, em tratamento oncológico ou maiores com sistemas digestivos comprometidos."
              }
            ]
          }
        ]
      },
      {
        "slug": "prohibidos",
        "label": "Alimentos proibidos",
        "topics": [
          {
            "slug": "toxicos-comunes",
            "title": "Alimentos tóxicos para gatos",
            "intro": "Muitos alimentos completamente seguros para humanos são perigosos ou letais para os gatos. Conhecer esta lista pode salvar a vida de seu companheiro.",
            "sections": [
              {
                "heading": "Peligro extremo: tóxicos graves",
                "body": "Cebola, alho, pereiro e cebolinha (em todas as suas formas: crus, cozidos ou em pó) destruem os glóbulos vermelhos. Chocolate e café contêm teobromina e cafeína que podem causar convulsões e morte. Uvas e passas causam insuficiência renal aguda por razões ainda desconhecidas."
              },
              {
                "heading": "Peligro moderado",
                "body": "A leite de vaca causa diarreia na maioria dos gatos adultos, que são intolerantes à lactose. O abacate contém persina, tóxica para muitos animais. O álcool em qualquer quantidade é perigoso. As nozes de macadâmia podem causar fraqueza e febre."
              },
              {
                "heading": "O que sim podem comer como premio",
                "body": "Pequenas quantidades de frango ou peru cozido sem osso, salmão ou atum cozido (não enlatado em óleo com sal), cenoura cozida, abobrinha, mirtilo e pepino são opções seguras como lanche ocasional."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "juego",
    "label": "Jogo",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "Estimulação, brinquedos e enriquecimento",
    "subcategories": [
      {
        "slug": "importancia",
        "label": "Por que é vital",
        "topics": [
          {
            "slug": "juego-cachorros",
            "title": "O jogo nos cães: a base de tudo",
            "intro": "Os primeiros seis meses de vida de um gato são um período crítico de desenvolvimento. O que aprender durante o jogo nessa etapa determinará em grande medida como se relacionará com humanos e outros animais o resto de sua vida.",
            "sections": [
              {
                "heading": "A janela de socialização",
                "body": "Entre as 2 e 9 semanas de vida, o gato aprende o que é normal em seu mundo. Um cachorro que interaja com pessoas, outros gatos, ruídos domésticos e experiências variadas durante esse período será um adulto mais seguro e adaptável."
              },
              {
                "heading": "O erro mais comum: as mãos como brinquedo",
                "body": "Usar as mãos ou os pés para jogar com um cachorro parece inofensivo, mas ensina que a pele humana é uma presa válida. Quando esse gatinho pesar 5 kg, os mordiscos e arranhões serão dolorosos e o comportamento difícil de corrigir. Usa sempre brinquedos com distância."
              },
              {
                "heading": "Jogo como prevenção de problemas",
                "body": "Um gato que não joga o suficiente canaliza sua energia de caça em comportamentos problemáticos: atacar tornozelos, destruir objetos, agressão redirecionada. 2 sessões de jogo de 15 minutos por dia, especialmente antes de dormir, são o melhor antídoto."
              }
            ]
          }
        ]
      },
      {
        "slug": "juguetes",
        "label": "Joguetes",
        "topics": [
          {
            "slug": "canas-y-plumas",
            "title": "Cañas e joguetes de presa",
            "intro": "As cañas com plumas, ratos ou gusanos colgantes são os joguetes mais eficazes porque permitem simular a sequência de caça completa. São insubstituíveis no repertório de qualquer gato.",
            "sections": [
              {
                "heading": "Por que funcionam tão bem",
                "body": "Ativam o instinto de caça em sua totalidade: o movimento irregular imita o de uma presa real. O gato pode caçar, perseguir, capturar e 'matar'. Essa sequência completa libera endorfinas e satisfaz profundamente."
              },
              {
                "heading": "Como mover as presas corretamente",
                "body": "O erro mais comum é mover as presas muito rápido e sem parar. As presas reais param, se escondem, se movem em ângulos imprevisíveis. Simule isso: pause, esconda-a por trás de um travesseiro, faça-a surgir de repente, deixe-a se mover devagar."
              },
              {
                "heading": "Terminar a sessão bem",
                "body": "Sempre termine permitindo que o gato 'caça' e 'mata' o joguete várias vezes no final. Um gato que nunca captura a presa se frustra. Depois do jogo, um lanche pequeno completa o ciclo natural: caçar → comer → se asear → dormir."
              }
            ]
          },
          {
            "slug": "puzzles-de-comida",
            "title": "Puzzles de comida e inteligência",
            "intro": "Os puzzles alimentários são um dos enriquecimentos mais subestimados. Na natureza, um gato passa entre 6 e 8 horas caçando. Um comedouro convencional resolve essa necessidade em 30 segundos, deixando o gato sem estimulação mental.",
            "sections": [
              {
                "heading": "Benefícios comprovados",
                "body": "Reduzem a ansiedade e o aborrecimento, ralentizam a ingestão (prevenindo vômitos por comer muito rápido), estimulam cognitivamente, fomentam o movimento e podem reduzir a obesidade."
              },
              {
                "heading": "Como começar",
                "body": "Comece com puzzles muito fáceis: uma bandeja com compartimentos, uma pelota dispensadora simples. Se o puzzle for muito difícil desde o início, o gato se frustrará e o rejeitará. Aumente a dificuldade progressivamente durante semanas."
              },
              {
                "heading": "Puzzles caseiros",
                "body": "Não precisas comprar nada: uma caixa de cartão com furos, uma bandeja de hielos com croquetas, uma garrafa de plástico com pequenos orifícios, ou esconder prêmios sob vasos são puzzles eficazes e gratuitos."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "etapas",
    "label": "Etapas de vida",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "Cachorro, adulto, senior e suas necessidades",
    "subcategories": [
      {
        "slug": "genetica-felina",
        "label": "Genética e Herança",
        "topics": [
          {
            "slug": "guia-genetica-colores",
            "title": "Genética Felina: Entendendo os cores e a herança (sem complicaciones)",
            "intro": "A genética dos gatos não é magia, é ciência. Entender as bases te ajudará a compreender por que seu gato tem aquele cor específico e como funciona a herança em seu pelaje, deixando de lado os mitos antigos para se concentrar na ciência atual.",
            "sections": [
              {
                "heading": "**1. **Desmontando o mito de Darwin",
                "body": "Durante muito tempo se acreditou que a domesticação 'criava' novas variedades por si mesma, mas isso é falso. Os humanos não criamos os genes, mas sim os selecionamos. Na natureza, as mutações estranhas costumam ser eliminadas se não ajudam a sobreviver, mas em casa protegemos variações como o pelo longo ou certos cores por estética. Toda a variedade atual já existia potencialmente nos ancestrais selvagens; nós apenas aceleramos sua aparência mediante a criação seletiva."
              },
              {
                "heading": "**2. **Como funcionam os cores? (O básico)",
                "body": "Os caracteres dependem dos genes e suas versões chamadas 'alelos'. Usando o exemplo do Preto (D) e do Azul/Prateado (d): DD (Homocigoto Dominante) resulta em um gato Preto; Dd (Heterocigoto) resulta em um gato Preto visualmente mas 'portador' do gene azul; dd (Homocigoto Recesivo) resulta em um gato Azul. A regra de ouro é que o preto domina sobre o azul: se houver ao menos uma 'D', o gato será preto. Para ser azul, deve receber o gene 'd' de ambos os pais."
              },
              {
                "heading": "**3. **Importância da seleção responsável",
                "body": "A diferença dos cães, a genética da cor nos gatos é extremamente especializada e distintiva entre raças. Os juízes internacionais e genetistas recomendam seguir normas estrictas de cruzamento para evitar resultados inesperados ou problemas de saúde. Não todos os cruzamentos de cores são recomendáveis, pois alguns podem dar lugar a padrões não desejados pelo padrão da raça."
              },
              {
                "heading": "**4. **Guia rápida de Cruzamentos Recomendados (FIFE)",
                "body": "A Federação Internacional Felina (FIFE) sugere evitar cruzamentos aleatórios entre variedades de cor muito distintas. Os princípios básicos são: 1. Cruzar dentro da mesma raça (exemplo: Persas com Persas). 2. Respeitar a longitude do pelo (e para pelo curto, l para pelo longo). 3. Evitar cruzamentos 'proibidos': se nas tabelas oficiais não aparece uma letra para uma combinação específica, é melhor abster-se por resultados imprevisíveis ou insatisfatórios."
              },
              {
                "heading": "**5. **Curiosidade: Você vê os cores os gatos?",
                "body": "Sim, mas não como nós. Têm melhor visão cromática do que se acreditava, mas distinguem menos matizes que os humanos. É irônico que, embora eles vejam menos cores, os humanos tenham criado uma variedade de pigmentos e distribuições em seu pelaje muito mais rica e complexa do que eles mesmos podem apreciar."
              },
              {
                "heading": "Conclusão para o Criador ou Dono",
                "body": "A genética é probabilidade: se cruzar dois negros portadores de azul (Dd x Dd), terá filhotes negros e alguns azuis. Se cruzar dois azuis (dd x dd), todos serão azuis. Se cruzar um negro puro (DD) com um azul (dd), todos serão negros mas portadores. Conhecer essas bases permite prever ninhadas e criar de forma ética, responsável e respeitando os padrões de saúde."
              }
            ]
          }
        ]
      },
      {
        "slug": "reproduccion-felina",
        "label": "Reprodução Felina",
        "topics": [
          {
            "slug": "guia-gestacion-gatas",
            "title": "A gestação em gatas: Explicação simples e natural",
            "intro": "A gestação felina é um baile preciso entre sinais físicos, hormônios e desenvolvimento embrionário. Entender cada etapa nos ajuda a respeitar e cuidar melhor às nossas gatas durante esse processo natural.",
            "sections": [
              {
                "heading": "Como funciona o ciclo de uma gata?",
                "body": "A gata é como um 'reloj estacional' que entra em celo quando há mais horas de luz (primavera-verão). O aparecimento é a chave: a gata não ovula sozinha, mas sim precisa do estímulo físico da monta para liberar a hormona LH e que seus óvulos saiam dos ovários entre 24 e 50 horas depois. Se não houver monta fértil, pode ter uma 'pseudogestação', onde seu corpo atua como se estivesse prenha por aproximadamente 45 dias, embora não haja gatitos."
              },
              {
                "heading": "O viaje do embarazo, passo a passo",
                "body": "Cronologia após o aparecimento: De 0 a 50 horas a monta estimula a ovulação. Aos +30 horas os óvulos são fecundados nas trompas. Aos 5-6 dias os embriões (mórulas) chegam ao útero. Entre os 8-10 dias se convertem em blastocistos. Aos 12-13 dias ocorre a implantação na parede do útero (os embriões viajam entre os cuernos para se repartir equitativamente). Aos 28-30 dias inicia a etapa fetal com formação de órgãos. Finalmente, entre os 64 e 67 dias, nascem os gatitos."
              },
              {
                "heading": "As hormonas: As diretoras da orquestra",
                "body": "O corpo usa mensageiras-chave: LH (desencadeia a ovulação no início); Progesterona P4 (mantém o útero tranquilo, sobe no início e diminui lentamente após o dia 30); Prolactina (ajuda a manter os corpos lúteos, aumenta desde o dia 25-30 sendo fundamental na segunda metade); Relaxina (ablanda tecidos pélvicos e ajuda a manter o embarazo, sobe do dia 20-30 apenas em prenhas); e Estradiol (prepara útero e mamas, sobe no final)."
              },
              {
                "heading": "Quem produz a progesterona no final?",
                "body": "Existe um debate científico: a Teoria A diz que os ovários são essenciais até o final, enquanto a Teoria B indica que a placenta assume o relevo na segunda metade. O certo é que se operar antes do dia 45-50 o embarazo é interrompido, mas após o dia 50 pode continuar, o que demonstra que a placenta felina tem capacidade de produzir progesterona nas últimas semanas. É um trabalho em equipe com a prolactina como coordenadora."
              },
              {
                "heading": "Dados rápidos para lembrar",
                "body": "Duração do embarazo: 64-67 dias (≈9 semanas). Tamanho da ninhada: 1 a 5 gatitos (média 3-4). Peso ao nascer: 85-105 gramas. A placenta é do tipo 'zonária' (forma de cinturão) e 'endoteliocorial' (muito invasiva), o que explica por que as gatas não podem doar sangue facilmente."
              },
              {
                "heading": "Por que importa saber isso?",
                "body": "Para criadores responsáveis permite dar melhores cuidados pré-natais. Para veterinários, conhecer as hormonas permite diagnosticar problemas ou interromper embarazos de forma ética. Para os donos, é vital saber que o estresse ou mudanças bruscas podem afetar diretamente as hormonas e, por consequência, o sucesso da gestação."
              }
            ]
          }
        ]
      },
      {
        "slug": "gatito",
        "label": "Gatinho (0–6 meses)",
        "topics": [
          {
            "slug": "primeras-semanas",
            "title": "As primeiras semanas de vida",
            "intro": "Os primeiros dois meses de vida de um gato são extraordinariamente intensos. Nesse tempo, um ser completamente dependente e indefeso se convierte em um animal ágil e curioso. Entender essa etapa é fundamental para qualquer criador ou adotante.",
            "sections": [
              {
                "heading": "0–2 semanas: período neonatal",
                "body": "Os gatinhos nascem cegos, sordos e sem capacidade de regular sua temperatura. Dependem completamente da mãe para alimentar-se (cada 2 horas), se aquecer e estimular a micção e defecação. Seu único sentido funcional ao nascer é o olfato."
              },
              {
                "heading": "2–7 semanas: socialização primária",
                "body": "Os olhos se abrem entre os 10 e 16 dias. Nesse período o sistema nervoso se desenvolve a máxima velocidade. As experiências positivas com pessoas, sons e ambientes variados durante essas semanas determinam a personalidade adulta."
              },
              {
                "heading": "7–12 semanas: independência progressiva",
                "body": "O destete se completa ao redor de 8 semanas. É o momento ideal para a adoção: suficientemente maduro para se separar da mãe, mas em plena janela de socialização com humanos. Separar antes de 8 semanas aumenta o risco de problemas de conduta."
              }
            ]
          }
        ]
      },
      {
        "slug": "senior",
        "label": "Senior (+10 anos)",
        "topics": [
          {
            "slug": "cuidados-senior",
            "title": "Cuidados do gato mais velho",
            "intro": "Um gato de 10 anos equivale aproximadamente a uma pessoa de 56 anos. A partir de 15 anos, a um humano de mais de 76. Suas necessidades mudam significativamente e merece adaptações em seu ambiente e rotina médica.",
            "sections": [
              {
                "heading": "Cambios físicos esperados",
                "body": "Menor flexibilidade articular, pelagem menos brilhante, possível perda de massa muscular, mudanças nos padrões de sono, redução da agudeza sensorial e maior vulnerabilidade a doenças crônicas. Não todos os mudanças são patológicas: algumas são simplesmente o envelhecimento normal."
              },
              {
                "heading": "Adaptações do ambiente",
                "body": "Rampas ou degraus para acessar lugares altos, caixa de areia com entrada baixa, recipientes de comida e água elevados para reduzir a tensão cervical, zonas de descanso cálidas e acessíveis. As mudanças sutis no ambiente marcam uma grande diferença em sua qualidade de vida."
              },
              {
                "heading": "Seguimento médico intensificado",
                "body": "A partir de 10 anos, as revisões devem ser semestrais e incluir sempre análise de sangue completo e perfil de tireóide. A detecção precoce de hipertiroidismo, doença renal ou diabetes pode acrescentar anos de qualidade de vida."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "emergencia",
    "label": "Emergência",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "Cachorro, adulto, senil e suas necessidades",
    "subcategories": [
      {
        "slug": "emergencias-felinas",
        "label": "Primeiros Socorros",
        "topics": [
          {
            "slug": "guia-primeros-auxilios-gatitos",
            "title": "Primeiros Socorros para Gatinhos: O que fazer em uma emergência",
            "intro": "Os primeiros socorros não substituem o veterinário, mas podem salvar a vida do seu gatinho enquanto você chega à clínica. O objetivo é evitar que pior, estabilizá-lo e transportá-lo com segurança.",
            "sections": [
              {
                "heading": "**1. **Calma e Segurança",
                "body": "Sua segurança é a primeira coisa; um gatinho com dor pode morder ou arranhar. Mantenha seu rosto afastado de suas garras e boca. Não use bozal, pois está contraindicado em gatos com problemas respiratórios ou vômitos. A técnica da 'manta' é ideal: envolva-o suavemente em uma toalha deixando apenas a cabeça para fora para calá-lo e manipulá-lo com segurança."
              },
              {
                "heading": "**2. **Avaliação Rápida (Regra ABCDE)",
                "body": "Antes de mover, verifique: A (Vias aéreas): Que não haja bloqueios na narina ou boca. B (Respiração): Observe se o peito se move. C (Circulação): Aplicar pressão em hemorragias com gaze limpa. D (Dor/Inmovilização): Não mova bruscamente se suspeitar de fraturas. E (Exposição): Proteger feridas abertas com gaze limpa."
              },
              {
                "heading": "**3. **Emergências em Cachorros",
                "body": "Os bebês são muito frágeis ante dois perigos: 1. Hipoglicemia (baixão de açúcar): Se apresentar debilidade extrema ou gengivas pálidas, aplique mel ou açúcar sob sua língua ou em gengivas. 2. Hipotermia: Se o gatinho está frio ao toque, abrigue-o com seu calor corporal (sob sua roupa) ou uma garrafa de água morna envolvida em uma toalha (nunca direta)."
              },
              {
                "heading": "Traslado Seguro",
                "body": "Usa sempre uma transportadora ou caixa resistente com ventilação. Se suspeitas de ossos quebrados, minimiza o movimento usando uma tábua ou toalha rígida como maca improvisada. Durante o transporte, fale suavemente e mantenha o veículo estável para reduzir seu estresse."
              },
              {
                "heading": "Kit de Emergência Felino",
                "body": "Ten a mão: Telefones de emergência veterinária, toalhas ou mantas limpas, gaze estéril, mel de cana ou glicose, fita adesiva médica e uma transportadora pronta. Estar preparado marca a diferença em uma situação crítica."
              },
              {
                "heading": "Advertências Finais",
                "body": "Ligue para o veterinário enquanto se dirige à clínica para que o esperem. NUNCA faça medicamentos por conta própria com fármacos humanos (paracetamol ou ibuprofeno), pois são mortais. Aja rápido: em uma emergência, cada minuto conta para salvar sua vida."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "adopción",
    "label": "Adoção",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "Como adotar um gato",
    "subcategories": [
      {
        "slug": "bienvenida",
        "label": "Bem-vinda",
        "topics": [
          {
            "slug": "guia-bienvenida-cuidados",
            "title": "Bem-vindo à casa: como cuidar do seu novo gato desde o primeiro dia",
            "intro": "Parabéns pela adoção! Acolher um gato é uma experiência maravillosa, mas também implica responsabilidade. Os primeiros dias são cruciais para sua adaptação. Aqui você tem tudo o que precisa saber para garantir sua saúde, bem-estar e uma convivência feliz.",
            "sections": [
              {
                "heading": "**1. **Os Primeiros Dias: Vigilância e Adaptação",
                "body": "O mudança de ambiente gera estresse, o que pode baixar as defesas do gato. Visite ao veterinário: Leve seu gato à sua nova clínica de confiança o quanto antes. Entregue toda a documentação médica prévia (vacinas, desparasitantes) e siga suas indicações. O que observar: Que coma e beba com normalidade, que tenha energia acorde à sua idade, que as fezes sejam consistentes (algumas blandas iniciais pelo mudança de dieta são normais, mas não deve haver diarreia persistente) e ausência de sintomas como tosse, vômitos, muco ou leite. Ante qualquer dúvida, consulte seu veterinário."
              },
              {
                "heading": "**2. **Saúde Preventiva: Vacinas, Parásitos e Esterilização",
                "body": "Vacinação: As vacinas protegem contra doenças graves (como a panleucopenia, o complexo respiratório felino ou a leucemia). Siga o calendário que você indicar seu veterinário. A vacina da raiva, embora não seja sempre obrigatória legalmente para gatos (depende da região), está muito recomendada.  Desparasitante: É fundamental para a saúde do gato e da sua família (zoonoses). Interna: é recomendada a cada 3 meses. Externa: vital se o gato sai ou tem acesso a varandas/terraços. Esterilização: É a decisão mais responsável e saudável. Benefícios: evita ninhadas não desejadas, reduz o marcação, diminui brigas e previne doenças graves (tumores de mama, piometras). Mitos: Não muda sua personalidade nem os torna 'vagos'. Esterilize seu gato, seja macho ou fêmea, interior ou exterior."
              },
              {
                "heading": "**3. **Alimentação e Hidratação",
                "body": "Alimento adequado: Usa ração seca de qualidade adaptada à sua idade e condição física. Evita dar comida caseira ou sobras humanas. Prêmios: Úsalos com moderação para não causar obesidade. Água fresca: Fundamental, coloca vários bebedores por casa, longe da comida e do arejador. Alguns gatos preferem fontes em movimento. Incorporar comida húmida ajuda à hidratação. Proibido: A leite de vaca (a maioria dos gatos adultos são intolerantes à lactose). O iogurte natural ou queijo sem sal podem ser dados como prêmio pontual, mas não são necessários."
              },
              {
                "heading": "Higiene e Cuidado Físico",
                "body": "Os gatos precisam da sua ajuda em certos aspectos. Cepilho: Pelo curto uma vez por semana (diário em muda); pelo longo diário para evitar nós e bolas de pelo. Se expulsar bolas de pelo com dificuldade, consulte sobre pastas de malta. Unhas: Corte apenas a ponta transparente, evitando a parte rosada (vascularizada). Banhos: Geralmente não são necessários, apenas se estiver muito sujo ou por indicação médica."
              },
              {
                "heading": "O arenero: Regras de Ouro",
                "body": "Um gato que não usa o arenero costuma expressar um problema médico ou de estresse. Quantidade: Regra N+1 (número de gatos + 1 caixa). Localização: Lugares tranquilos, acessíveis, longe de ruídos (lavadoras) e da comida. Tipo: A muitos não gostam dos fechados; tente com um aberto e grande. Limpeza: Retire os desechos a diário e lave a caixa regularmente com água e sabão neutro (evite lejia ou amoníaco). Areia: Preferem areias sem perfume e de textura fina."
              },
              {
                "heading": "Comportamento e Enriquecimento Ambiental",
                "body": "Linguagem: Cauda erguida é saudação amigável; cauda movendo-se rápido é irritação; orelhas para trás indicam medo. Rronronar pode ser bem-estar, dor ou estresse. Jogo: Dedique 15-20 minutos diários a caça simulada (canas, bolas). Evite usar as mãos ou pés. Rascadores: Proporcione rascadores estáveis, altos e de materiais atraentes (sisal, madeira). Nunca castigue por rascar móveis; redirecione e premie. Verticalidade: Precisam de lugares altos para observar e refúgios seguros para se esconder. Respeite sua solidão."
              },
              {
                "heading": "Conselhos Específicos segundo a Idade",
                "body": "CACHORRO: Socialização (2-8 semanas) é a etapa-chave para aceitar o contato humano e visitas ao veterinário. Ensine-o o que pode morder. Acostume-o ao transportin deixando-o aberto em casa. Proteja fios e janelas. ADULTO: Paciência, a adaptação pode levar semanas. Use uma sala de aclimatação ao chegar com todos os recursos. Faça apresentações com outros animais muito gradualmente. Mantenha horários fixos de comida e jogo."
              },
              {
                "heading": "Aspectos Legais e Segurança",
                "body": "Microchip: É obrigatório e deve ter os dados atualizados (RIAC em Madrid). Prevenção de Acidentes: O Síndrome do Gato Paracaidista. Instale redes mosquiteiras resistentes em janelas e varandas. Uma queda de altura pode ser mortal; não confie em sua 'habilidade' para cair de pé. Cada gato é um mundo. Observe, respeite seus tempos e consulte sempre ao seu veterinário ante mudanças bruscas."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "razas",
    "label": "Racas",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "Racas de gatos",
    "subcategories": [
      {
        "slug": "razas-felinas",
        "label": "Racas de Gatos",
        "topics": [
          {
            "slug": "guia-completa-razas",
            "title": "Guía Completa de Razas de Gatos",
            "intro": "O mundo felino é vasto e fascinante. Apesar de todos os gatos compartilharem instintos básicos, cada raça tem uma personalidade, necessidades de cuidado e características físicas únicas. Esta guia integra o registro histórico com as classificações modernas de associações como TICA, CFA e FIFe, organizadas para ajudar a entender qual tipo de gato se encaixa melhor em sua casa. Nota: Além da raça, a personalidade individual e a socialização precoce desempenham um papel fundamental.",
            "sections": [
              {
                "heading": "**1. **Os Clássicos Históricos",
                "body": "Racas antigas com personalidades definidas: Abisinio (Etiópia/Egito): Ativo, curioso, 'cachorro-gato', precisa de muito jogo mental. Siamês (Tailândia): Muito vocal, inteligente, exige atenção constante. Persa (Irã): Tranquilo, doce, silencioso; requer escovação e limpeza facial diária. Maine Coon (EUA): O 'gigante amável', sociável, ideal para famílias com crianças; requer espaço. Bengala (EUA): Energia alta, atlético, parece um leopardo em miniatura; precisa de estimulação diária intensa."
              },
              {
                "heading": "**2. **Gigantes Gentis e Adaptables ao Frio",
                "body": "Gatos robustos com pelagens densas. Maine Coon: Um dos maiores, destaca-se por seus 'tips de lince' e miados suaves. Bosque de Noruega (Skogkatt): Escalador natural com pelagem impermeável, independente mas carinhoso. Siberiano: Famoso por ser hipoalergênico (produz menos Fel d 1), ágil e afetuoso. Ragdoll: Grande e musculoso, de temperamento dócil; se 'desfaz' como um boneco de pano ao carregá-lo."
              },
              {
                "heading": "**3. **Elegância de Pelo Curto e Corpo Atlético",
                "body": "Mantenimento de pelagem mínimo com muita interação. British Shorthair: Cara redonda, compacto e tranquilo; não gosta de ser carregado muito. Ruso Azul: Pelagem prateada e olhos verdes, tímido com estranhos mas leal. Burmés: Musculoso e pesado, muito orientado para as pessoas. Bombay: Parece uma pantera negra em miniatura, adora calor e regaços. Chartreux: Raça francesa antiga, silencioso e caçador experiente com pelagem repelente à água."
              },
              {
                "heading": "**4. **Mutações Únicas: Orelhas, Caudas e Texturas",
                "body": "Características genéticas exóticas. Scottish Fold: Orelhas dobradas para frente, posição de 'Buda'; requer revisão articular. Munchkin: Pernas curtas, extrovertido e curioso. Sphynx: Sem pelo, sociável e busca calor; requer banhos semanais. Devon Rex & Cornish Rex: Pelagem rizada ou ondulada, travesso e apegado. American Curl: Orelhas para trás. Manx & Japanese Bobtail: O primeiro sem cauda e robusto; o segundo com cauda de pompom, símbolo de boa sorte."
              },
              {
                "heading": "**5. **Exóticos e Poucas Unidades",
                "body": "Razas menos comuns. Ocicat: Parece um ocelote selvagem, treinável e sociável. Toyger: Imitação de um tigre, inteligente. Lykoi: O 'gato lobo', aparência de homem lobo, curioso e brincalhão. Singapura: Uma das raças mais pequenas, travesso e amante de alturas. Korat: Tailandês gris prateado com coração na frente, sensível ao barulho e amuleto de boa sorte."
              },
              {
                "heading": "Consejos para Escolher sua Raça",
                "body": "Nível de Atividade: Companheiro de sofá (Persa) ou atleta (Bengala)? Tempo de Aseo: Cepillado diário (Maine Coon) ou baixo manutenção (Ruso Azul)? Vocalização: Se preferir o silêncio, evite Siameses e opte por Ragdolls. Crianças e mascotas: Maine Coon e Birmanos são mais tolerantes. Alergias: Nenhum é 100% hipoalergênico, mas o Siberiano e o Ruso Azul costumam ser melhor tolerados."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "adquisicion responsable",
    "label": "Adquisição responsável",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "Razas de gatos",
    "subcategories": [
      {
        "slug": "adquisición chile",
        "label": "🇨🇱 Chile",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-chile",
            "title": "Adquisição Responsável em Chile: Guia Legal e Ética",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de forma responsável. No Chile, a compra de animais está regulada pela Lei 21.020 (Lei Cholito), que protege o bem-estar animal e exige tenência responsável. Comprar um gato não é como comprar um objeto; é adquirir um ser vivo com necessidades complexas.",
            "sections": [
              {
                "heading": "**1. **Por que escolher um Criatório Registrado?",
                "body": "Os criatórios éticos preservam a raça, cuidam da saúde genética e socializam os gatitos. A forma mais segura de identificá-los é verificar que estejam inscritos no RENAGACH (Registro Nacional de Gatos do Chile), representante de federações como WCF e TICA. Vantagens de comprar com pedigree: Certificação Genética (garantiza a raça), Saúde (testes genéticos para descartar doenças como PKD em Persas ou HCM em Maine Coons) e Socialização (crescem em ambiente familiar, não em jaulas)."
              },
              {
                "heading": "Diretório de Referência (Criatórios Éticos no Chile)",
                "body": "Listado orientativo (sempre verifique registros): Maine Coon: Colitas Arriba, Nahuelhuén (Santiago/La Reina). Persa / Himalayo: GatyKey Cattery, Viestmaden Cattery (La Florida). Ragdoll: Reflejo de Luna (temperamento dócil). Somalí: Per-Bast Cattery (único especializado). Sphynx: Ti Voglio Bene, The Kittens House. British Shorthair: Von & Von Cattery (estrutura robusta)."
              },
              {
                "heading": "**2. **Marco Legal: Seus Direitos e Deveres (Lei 21.020)",
                "body": "Para que a transação seja legal, o criador deve cumprir com: Microchip Obrigatório (implantado e registrado) e Contrato de Compra e Venda. O contrato deve detalhar garantias de saúde (exames negativos a FeLV/FIV), compromisso de esterilização e cláusula de devolução. Sua Responsabilidade: Uma vez realizada a compra, você deve inscrever o animal no Registro Nacional de Animais de Companhia se os dados não foram atualizados imediatamente."
              },
              {
                "heading": "**3. **Checklist: Como detectar um Criador Ético?",
                "body": "Antes de pagar, verifique: Permite visitas? Deve estar limpo e em contato humano. Idade de entrega? NUNCA aceite um gatinho de menos de 12 semanas (3 meses). Documentação completa? Você deve receber Certificado de nascimento/Pedigree preliminar, carnet de vacinas ao dia (assinado por veterinário colegiado) e certificado de desparasitização. Transparência sanitária? Um bom criador perguntará sobre sua situação para garantir um bom lar."
              },
              {
                "heading": "**4. **Importação Legal de Raças Exóticas",
                "body": "Se você busca raças como Lykoi, Toyger ou Bengala de linhas específicas, o processo é estrito: cumprir requisitos do SAG (Serviço Agrícola e Ganadero), certificados sanitários do país de origem e possíveis quarentenas. É recomendável consultar uma agência de transporte de animais especializada para evitar retencões na alfândega."
              },
              {
                "heading": "Cuidado com as 'Fábricas de Gatos'!",
                "body": "Evite comprar em feiras livres, mercados informais ou anúncios em redes sociais sem endereço físico visível. Desconfie de lugares com múltiplas raças disponíveis imediatamente. Esses lugares priorizam o lucro sobre o bem-estar, resultando em animais com problemas de saúde crônicos e vidas curtas. Sua escolha consciente ajuda a erradicar esse maltrato."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición argentina",
        "label": "🇦🇷 Argentina",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-argentina",
            "title": "Adquisição Responsável em Argentina: Guia Legal e Ética",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de maneira responsável. Na Argentina, a posse de animais está protegida pela Lei Nacional 27.592 (Lei Alica) e diversas ordenanças (como a Lei 4040 em CABA), que reconhecem os animais como seres sencientes. Comprar um gato não é uma transação comercial qualquer; é incorporar um membro à família.",
            "sections": [
              {
                "heading": "**1. **Por que escolher um Criador Registrado?",
                "body": "2. Marco Legal: Seus Direitos e Deveres"
              },
              {
                "heading": "**3. **Para que a transação seja legal na Argentina, o criador deve cumprir com: Identificação (Microchip), obrigatório em CABA, Córdoba e Santa Fe entre outros. Contrato de Compra e Venda com dados do animal, garantias de saúde, cláusula de devolução e compromisso de esterilização. Carnê de Vacinação: Deve estar assinado por um Médico Veterinário matriculado, com as vacinas tríplices felinas (e quíntupla se necessário) ao dia segundo a idade.",
                "body": "4. Checklist: Como detectar um Criador Ético na Argentina?"
              },
              {
                "heading": "**5. **Antes de pagar, verifique:  Permite visitas presenciais? Você deve conhecer o cattery e ver a mãe; desconfie de entregas em shoppings.  Idade de entrega? NUNCA antes de 12 semanas (3 meses).  Documentação completa? Você deve receber Certificado de Nascimento/Pedigree, carnet de vacinas e fatura ou recibo.  Entrevista ao comprador? Um bom criador perguntará sobre redes em janelas e sua experiência prévia.",
                "body": "6. 4. Importação Legal de Raças Exóticas"
              },
              {
                "heading": "**7. **Se você busca raças não criadas habitualmente (Lykoi, Toyger), o processo é regulado pelo SENASA (Serviço Nacional de Sanidade e Qualidade Agroalimentar). Requisitos: Certificado zoosanitário de origem, vacinação antirrábica e possíveis quarentenas. É recomendável contratar uma agência de transporte de animais de estimação especializada; trazer um gato por conta própria pode resultar em retencões ou multas severas.",
                "body": "8.  ¡Cuidado com as 'Fábricas de Gatos' e Estafas!"
              },
              {
                "heading": "**9. **NÃO COMPRA SE: Eles pedem dinheiro por adiantado sem mostrar o animal (estafa comum; use videollamadas em tempo real). Vendem em feiras ou praças: animais sem controle sanitário tendem a morrer logo ('gato da semana'). Eles têm 'estoque' infinito de múltiplas raças disponíveis imediatamente. Preços suspeitosamente baixos: a criação ética implica custos altos em saúde e alimentação premium que um preço baixo não cobre.",
                "body": "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; usa videollamadas en tiempo real). Venden en ferias o plazas: animales sin control sanitario suelen morir pronto ('gato de la semana'). Tienen 'stock' infinito de múltiples razas disponibles inmediatamente. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y alimentación premium que un precio bajo no cubre."
              },
              {
                "heading": "Conclusão",
                "body": "Adquirir um gato de raça na Argentina é uma responsabilidade legal e moral. Ao escolher um criadouro registrado na FAAC ou federações internacionais, você está financiando a preservação da raça e o bem-estar animal, e dizendo \"não\" ao maltrato das fábricas clandestinas."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición uruguay",
        "label": "🇺🇾  Uruguai",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-uruguay",
            "title": "Adquisição Responsável no Uruguai: Guia Legal e Ética",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de forma responsável. No Uruguai, a posse de animais está protegida pela Lei Nacional 18.471 (Proteção dos Animais) e regulada localmente por decretos como o 319/011 em Montevidéu. Comprar um gato não é uma transação comercial qualquer; é incorporar um membro sensível à família.",
            "sections": [
              {
                "heading": "**1. **Por que escolher um Criadouro Registrado?",
                "body": "Os criadouros éticos no Uruguai preservam a raça, cuidam da saúde genética e socializam os gatinhos. A forma mais segura de identificá-los é verificar sua afiliação à AFU (Associação Felina Uruguaia), representante da WCF e, às vezes, TICA ou FIFe. Vantagens: Certificação Genética (ancestros registrados), Saúde Preventiva (testes de PKD ou HCM) e Socialização Temprana (prevenção de problemas de conduta)."
              },
              {
                "heading": "**2. **Marco Legal: Seus Direitos e Deveres",
                "body": "Para uma transação segura no Uruguai, o criadouro deve cumprir com: Identificação (Microchip) de acordo com as ordens municipais (especialmente em Montevidéu e Canelones) e inscrição em registros correspondentes. Contrato de Compra e Venda com dados das partes, garantias de saúde (FeLV/FIV), cláusula de devolução (proibido o abandono) e compromisso de esterilização. Carnê de Vacinação: Assinado por um Médico Veterinário matriculado no MVZ, com a tríplice felina ao dia."
              },
              {
                "heading": "**3. **Checklist: Como detectar um Criadouro Ético no Uruguai?",
                "body": "Antes de pagar, verifica: Permitem visitas presenciais? Deves conhecer o cattery e ver a mãe; desconfia de entregas em shoppings. Edad de entrega? NUNCA antes de 12 semanas (3 meses). Documentação completa? Deves receber Certificado de Nascimento/Pedigree da AFU, carnet de vacinas e factura ou recibo. Entrevista ao comprador? Um bom criador querrá saber sobre suas proteções em janelas e varandas."
              },
              {
                "heading": "Importação Legal de Razas Exóticas",
                "body": "O processo é regulado pelo MGAP-DIGEGA (Direção Geral de Serviços Agrícolas). Requisitos: Certificado zoosanitário internacional, vacinação antirrábica vigente e protocolos de ingresso. Se recomenda contratar uma agência de transporte de mascotas especializada ('Pet Relocation') para gerenciar trâmites aduaneiros e evitar a retenção do animal na fronteira."
              },
              {
                "heading": "Cuidado com as 'Fábricas de Gatos' e Estafas!",
                "body": "NO COMPRES SE: Te pedem sinais por adiantado sem mostrar o animal (estafa comum; exige videollamada em tempo real). Vendem em feiras callejeras ou praças: alta mortalidade por falta de higiene (panleucopenia). Têm 'estoque' infinito: indica uma fábrica onde as fêmeas são usadas indiscriminadamente. Preços sospechosamente baixos: a criação ética tem custos altos em saúde e registros que um preço baixo não pode cobrir."
              },
              {
                "heading": "Conclusão",
                "body": "Adquirir um gato de raça no Uruguai é uma responsabilidade legal e moral. Ao escolher um criatório registrado na AFU, estás financiando a preservação da raça e o bem-estar animal, e dizendo 'não' ao maltrato das fábricas clandestinas."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición peru",
        "label": "Perú",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-peru",
            "title": "Adquisición Responsable en Perú: Guía Legal y Ética",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de maneira responsável. No Peru, a posse de animais está protegida pela Lei N° 30407 (Lei de Proteção e Bem-Estar Animal) e regulada tecnicamente pelo SENASA sob o MIDAGRI. Essa lei reconhece os animais como seres sencientes e proíbe seu maltrato, abandono e comércio ilegal.",
            "sections": [
              {
                "heading": "**1. **Por que escolher um Criatório Registrado?",
                "body": "2. Marco Legal: Seus Direitos e Deveres"
              },
              {
                "heading": "**3. **Para que a transação seja legal no Peru, o criatório deve cumprir com: Identificação (Microchip) exigido por muitas municipalidades (como Lima Metropolitana, Miraflores, San Isidro) para o registro municipal. Contrato de Compra e Venda com dados das partes, garantias de saúde (FeLV/FIV), cláusula de devolução (proibido o abandono) e compromisso de esterilização. Cartão de Vacinação: Assinado por um Médico Veterinário colegiado, com a tríplice felina (e quintupla se necessário) por dia.",
                "body": "4. Checklist: Como detectar um Criatório Ético no Peru?"
              },
              {
                "heading": "**5. **Antes de pagar, verifique: Permite visitas presenciais? Você deve conhecer o cattery e ver a mãe; desconfie de entregas em shoppings ou parques. Idade de entrega? NUNCA antes de 12 semanas (3 meses). Permite visitas presenciais? Você deve receber Certificado de Nascimento/Pedigree da FEPERU, cartão de vacinas e fatura ou recibo. Permite entrevista ao comprador? Um bom criador quer saber sobre suas proteções em janelas e varandas, essenciais em edifícios altos de Lima.",
                "body": "6. 4. Importação Legal de Raças Exóticas"
              },
              {
                "heading": "**7. **O processo é regulado estritamente pelo SENASA. Requisitos: Certificado zoosanitário internacional, vacinação antirrábica vigente e protocolos de entrada. É recomendável contratar uma agência de transporte de animais especializada ('Pet Relocation') para gerenciar trâmites ante o SENASA e evitar retencões no aeroporto Jorge Chávez ou multas severas.",
                "body": "8. Cuidado com as 'Fábricas de Gatos' e Estafas!"
              },
              {
                "heading": "**9. **NÃO COMPRA SE: Pedem dinheiro adiantado sem mostrar o animal (estafa comum; exija videollamada em tempo real). Vende em feiras ou plazas: alta mortalidade por falta de higiene (moquillo/panleucopenia). Têm 'estoque' infinito de múltiplas raças: provável fábrica de exploração. Preços suspeitosamente baixos: a criação ética implica custos altos em saúde e alimentação premium que um preço baixo não cobre.",
                "body": "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (moquillo/panleucopenia). Tienen 'stock' infinito de múltiples razas: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y alimentación premium que un precio bajo no cubre."
              },
              {
                "heading": "Conclusão",
                "body": "Adquirir um gato de raça no Peru é uma responsabilidade legal e moral. Ao escolher um criador registrado na FEPERU, você está financiando a preservação da raça e o bem-estar animal, e dizendo \"não\" ao maltrato das fábricas clandestinas. Lembre-se: Antes de comprar, considere também a adoção."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición bolivia",
        "label": "Bolívia",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-bolivia",
            "title": "Adquisição Responsável em Bolívia: Guia Legal e Ética",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de maneira responsável. Na Bolívia, a tenência de animais e seu bem-estar são fundamentais, e o comércio de raças deve ser realizado sob padrões éticos e legais que reconheçam os animais como seres sencientes, proibindo seu maltrato e comércio ilegal.",
            "sections": [
              {
                "heading": "**3. **Checklist: Como detectar um Criador Ético em Bolívia?",
                "body": "Antes de realizar qualquer transferência ou pagamento, verifique esses pontos. Se a resposta for \"não\" a algum, desconfie. Permite visitas presenciais? Um criador ético o convidará a conhecer seu domicílio ou cattery. Você deve poder ver a mãe e o ambiente limpo e seguro. Desconfie de quem só faz entregas em pontos médios, shoppings ou parques. Idade de entrega? NUNCA antes de 12 semanas (3 meses). É crucial para o destete emocional e imunológico. Documentação completa? Você deve receber Certificado de Nascimento / Pedigree (ou pre-pedigree emitido pela associação felina correspondente), Carnet de vacinas e desparasitantes ao dia, e Fatura ou recibo de compra. Entrevista ao comprador? Um bom criador o fará perguntas sobre seu lar, se você tem proteções em janelas/balcones (vital em edifícios altos de La Paz ou Santa Cruz) e sua experiência."
              },
              {
                "heading": "**4. **Importação Legal de Razas Exóticas",
                "body": "Se você busca raças que não são criadas habitualmente na Bolívia (como Lykoi, Toyger ou linhas específicas de Bengalás), o processo é regulado estrictamente pelo SENASAG (Serviço Nacional de Sanidade Agropecuária e Inocuidade Alimentaria). Requisitos: Certificado zoosanitário internacional do país de origem, vacinação antirrábica vigente, e cumprimento dos protocolos de entrada. Quarentena: Dependendo do país de origem e o estado sanitário, pode ser necessário quarentena ou inspeções adicionais. Recomendação: Contrate sempre uma agência de transporte de mascotas especializada ('Pet Relocation') que gerencie os trâmites ante o SENASAG para evitar retencões em aeroportos internacionais (El Alto, Viru Viru, etc.) ou multas severas."
              },
              {
                "heading": "Cuidado com as 'Fábricas de Gatos' e Estafas!",
                "body": "Em Bolívia, o comércio ilegal é frequente em plataformas online e feiras informais. 🚩 NO COMPRA SE: Te pedem sinais por adiantado sem mostrar o animal (estafa comum; exige videollamada em tempo real). Vendem em feiras de rua ou praças: os gatinhos expostos sem higiene geralmente estão doentes (panleucopenia, leucemia) e têm alta mortalidade. Têm 'estoque' infinito: provável fábrica de exploração onde as fêmeas são usadas indiscriminadamente. Preços suspeitosamente baixos: a criação ética implica custos altos em saúde e registros que um preço baixo não pode cobrir."
              },
              {
                "heading": "Conclusão",
                "body": "Adquirir um gato de raça em Bolívia é uma responsabilidade legal e moral. Ao escolher um criadouro registrado na AFUBO ou associações reconhecidas, estás financiando a preservação da raça e o bem-estar animal, e dizendo 'não' ao maltrato das fábricas clandestinas. Lembre-se: Antes de comprar, considere também a adoção. Muitas organizações resgatam gatos de raça ou mestizos bonitos que buscam um lar cheio de amor em todo o país."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición colombia",
        "label": "🇨🇴  Colômbia",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-colombia",
            "title": "Adquisição Responsável em Colômbia: Guia Legal e Ética",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de maneira responsável. Na Colômbia, a posse de animais está protegida pela Lei 1774 de 2016, que reconhece os animais como seres sencientes não susceptíveis de ser coisas, e proíbe seu maltrato e abandono. Além disso, existem normativas locais em cidades como Bogotá, Medellín e Cali.",
            "sections": [
              {
                "heading": "**1. **Por que escolher um Criadouro Registrado?",
                "body": "Os criadouros éticos na Colômbia preservam a raça, cuidam da saúde genética e socializam os gatinhos. A forma mais segura de identificá-los é verificar sua afiliação à ASOFELGA (Associação Colombiana de Criadores de Gatos), representante da WCF e, em alguns casos, TICA ou FIFe. Vantagens: Certificação Genética (ancestros oficiais), Saúde Preventiva (testes de PKD ou HCM) e Socialização Temprana (prevenção de medos e agressividade)."
              },
              {
                "heading": "**2. **Marco Legal: Seus Direitos e Deveres (Ley Alica)",
                "body": "Para uma transação segura na Colômbia, o criadouro deve cumprir com: Identificação (Microchip) exigido pelas alcaldias (como Bogotá com o Decreto 319 de 2019) para o registro municipal. Contrato de Compra e Venda com dados das partes, garantias de saúde (FeLV/FIV), cláusula de devolução (proibido o abandono) e compromisso de esterilização. Carnê de Vacinação: Assinado por um Médico Veterinário Zootecnista com carteira profissional vigente."
              },
              {
                "heading": "0: Checklist: Como detectar um Criatório Ético na Colômbia?",
                "body": "1: Antes de pagar, verifique: ✅ Permitem visitas presenciais? Você deve conhecer o criatório e ver a mãe; desconfie de entregas em centros comerciais ou parques. ✅ Idade de entrega? NUNCA antes de 12 semanas (3 meses). É crucial para o destete emocional e imunológico. ✅ Documentação completa? Você deve receber Certificado de Nascimento / Pedigree da ASOFELGA, cartão de vacinas e nota fiscal ou recibo. ✅ Entrevista ao comprador? Um bom criador quer saber sobre suas proteções em janelas e varandas, vital em edifícios altos de Bogotá ou Medellín."
              },
              {
                "heading": "2: 4. Importação Legal de Raças Exóticas",
                "body": "3: O processo é regulado estrictamente pelo ICA (Instituto Colombiano Agropecuário). Requisitos: Certificado zoosanitário internacional, vacinação antirrábica vigente e cumprimento de protocolos de ingresso (Resolução ICA). É recomendado contratar uma agência de transporte de mascotas especializada ('Pet Relocation') para gerenciar trâmites perante o ICA e evitar retencões em aeroportos (El Dorado, José María Córdova, etc.) ou multas severas."
              },
              {
                "heading": "4: ⚠️ Cuidado com as 'Fábricas de Gatos' e Estafas!",
                "body": "5: 🚩 NÃO COMPRA SE: Pedem sinais por adiantado sem mostrar o animal (estafa comum; exija videollamada em tempo real). Vendem em feiras callejeras ou praças: alta mortalidade por falta de higiene (moquillo/panleucopenia). Têm 'estoque' infinito de múltiplas raças: provável fábrica de exploração. Preços suspeitosamente baixos: a criação ética implica custos altos em saúde e registros que um preço baixo não pode cobrir."
              },
              {
                "heading": "6: Conclusão",
                "body": "7: Adquirir um gato de raça na Colômbia é uma responsabilidade legal e moral. Ao escolher um criatório registrado na ASOFELGA, você está financiando a preservação da raça e o bem-estar animal, e dizendo 'não' ao maltrato das fábricas clandestinas."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición ecuador",
        "label": "8: 🇪🇨 Equador",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-ecuador",
            "title": "9: Adquisição Responsável no Equador: Guia Legal e Ética",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de maneira responsável. No Equador, a posse de animais está protegida pelo Código Orgânico de Bem-Estar Animal (COBA), promulgado em 2022. Esta lei reconhece os animais como seres sencientes, proíbe seu maltrato, abandono e regula estrictamente a criação e comercialização.",
            "sections": [
              {
                "heading": "Por que escolher um Criatório Registrado?",
                "body": "Os criatórios éticos no Equador preservam a raça, cuidam da saúde genética e socializam os gatinhos. A forma mais segura de identificá-los é verificar sua afiliação a associações felinas reconhecidas (WCF, TICA) e que contem com os permisso municipais correspondentes. Vantagens: Certificação Genética (ancestros oficiais), Saúde Preventiva (testes de PKD ou HCM) e Socialização Temprana (prevenção de medos e agressividade)."
              },
              {
                "heading": "**2. **Marco Legal: Seus Direitos e Deveres (COBA)",
                "body": "Para que a transação seja legal no Equador, o criatório deve cumprir com: Identificação (Microchip) exigido pelo COBA e ordenanças municipais (Quito, Guayaquil, Cuenca) para o registro municipal. Permissão de Funcionamento emitida pelo GAD Municipal de seu cantão. Contrato de Compra e Venda com dados das partes, garantias de saúde (FeLV/FIV), cláusula de devolução (proibido o abandono) e compromisso de esterilização. Carne de Vacinação: Firmado por um Médico Veterinário Zootecnista registrado."
              },
              {
                "heading": "**3. **Checklist: Como detectar um Criatório Ético no Equador?",
                "body": "Antes de pagar, verifique: Permite visitas presenciais? Você deve conhecer o cattery e ver a mãe; desconfie de entregas em centros comerciais ou parques. Idade de entrega? NUNCA antes de 12 semanas (3 meses). É crucial para o destete emocional e imunológico. Documentação completa? Você deve receber Certificado de Nascimento / Pedigree oficial, carnet de vacinas ao dia e fatura ou recibo (cumprimento tributário). Entrevista ao comprador? Um bom criador quer saber sobre suas proteções em janelas e balcões, vital em edifícios altos de Quito ou Guayaquil."
              },
              {
                "heading": "**4. **Importação Legal de Raças Exóticas",
                "body": "O processo é regulado estrictamente pela AGROCALIDAD (Agência de Regulação e Controle Fitossanitário e Zoossanitário). Requisitos: Certificado zoossanitário internacional, vacinação antirrábica vigente e protocolos de entrada. É recomendável contratar uma agência de transporte de mascotas especializada ('Pet Relocation') para gerenciar trâmites e evitar retencões em aeroportos (Mariscal Sucre, José Joaquín de Olmedo, etc.) ou multas severas."
              },
              {
                "heading": "Cuidado com as 'Fábricas de Gatos' e Estafas!",
                "body": "NO COMPRES SI: Te põem a vender sem mostrar o animal (estafa comum; exige videollamada em tempo real). Vendem em feiras de rua ou praças: alta mortalidade por falta de higiene (panleucopenia, leucemia). Têm 'estoque' infinito de múltiplas raças: provável fábrica de exploração. Preços suspeitosamente baixos: a criação ética implica custos altos em saúde e registros que um preço baixo não pode cobrir."
              },
              {
                "heading": "Conclusão",
                "body": "Adquirir um gato de raça no Equador é uma responsabilidade legal e moral sob o COBA. Ao escolher um criatório registrado e com permissões municipais, você está financiando a preservação da raça e o bem-estar animal, e dizendo 'não' ao maltrato das fábricas clandestinas. Lembre-se: Antes de comprar, considere também a adoção."
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
            "title": "Adquisição Responsável na Venezuela: Guia Legal e Ética",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de maneira responsável. Na Venezuela, a posse de animais está protegida pela Lei de Proteção à Fauna Doméstica Livre e em Cativeiro e diversas ordenanças municipais que promovem a posse responsável, proíbem o maltrato e o abandono.",
            "sections": [
              {
                "heading": "**1. **Por que escolher um Criatório Registrado?",
                "body": "Os criatórios éticos na Venezuela preservam a raça, cuidam da saúde genética e socializam os gatinhos. A forma mais segura de identificá-los é verificar sua afiliação à Federação Canina da Venezuela (FCV) em sua divisão felina, ou a associações como ASOVEFEL (Associação Venezuelana de Felinos), vinculadas à WCF ou TICA. Vantagens: Certificação Genética (ancestros oficiais), Saúde Preventiva (testes de PKD ou HCM) e Socialização Temprana (prevenção de medos e agressividade)."
              },
              {
                "heading": "**2. **Marco Legal: Seus Direitos e Deveres",
                "body": "Para que a transação seja legal na Venezuela, o criatório deve cumprir com: Identificação (Microchip) exigido ou recomendado em municípios como Chacao, Baruta, El Hatillo (Caracas), Valencia e Maracaibo para o registro municipal. Contrato de Compra e Venda com dados das partes, garantias de saúde (FeLV/FIV), cláusula de devolução e compromisso de esterilização. Cartão de Vacinação: Assinado por um Médico Veterinário colegiado (CVZ), com as vacinas triples felinas ao dia de acordo com a idade."
              },
              {
                "heading": "**1. **Checklist: Como detectar um Criatório Ético na Venezuela?",
                "body": "2. Antes de pagar, verifique: Permite visitas presenciais? Você deve conhecer o criatório e ver a mãe; desconfie de entregas em metrôs ou centros comerciais. Idade de entrega? NUNCA antes de 12 semanas (3 meses). É crucial para o destete emocional e imunológico. Documentação completa? Você deve receber Certificado de Nascimento / Pedigree oficial, carnet de vacinas ao dia e fatura ou recibo. Entrevista ao comprador? Um bom criador quer saber sobre suas proteções em janelas e varandas, vital em edifícios altos de Caracas ou Valencia."
              },
              {
                "heading": "**3. **4. Importação Legal de Raças Exóticas",
                "body": "4. O processo é regulado estrictamente pelo INSAI (Instituto Nacional de Saúde Agrícola Integral). Requisitos: Certificado zoosanitário internacional, vacinação antirrábica vigente e protocolos de entrada. É recomendável contratar uma agência de transporte de animais especializada ('Pet Relocation') para gerenciar trâmites perante o INSAI e evitar retencões no Aeroporto Internacional Simón Bolívar ou multas severas."
              },
              {
                "heading": "**5. **¡Cuidado com as 'Fábricas de Gatos' e Estafas!",
                "body": "6. NÃO COMPRA SE: Pedem sinais por adiantado sem mostrar o animal (estafa comum; não transfira divisas ou bolívares sem videollamada em tempo real). Vendem em feiras callejeras ou praças: alta mortalidade por falta de higiene (panleucopenia, leucemia). Têm 'estoque' infinito de múltiplas raças: probabilidade de fábrica de exploração. Preços suspeitosamente baixos: a criação ética implica custos altos em alimentação importada/premium que um preço baixo não cobre."
              },
              {
                "heading": "**7. **Conclusão",
                "body": "8. Adquirir um gato de raça na Venezuela é uma responsabilidade legal e moral. Ao escolher um criatório registrado na ASOVEFEL ou afiliado a federações internacionais, você está financiando a preservação da raça e o bem-estar animal, e dizendo 'não' ao maltrato das fábricas clandestinas. Lembre-se: Antes de comprar, considere também a adoção."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición paraguay",
        "label": "9. 🇵🇾  Paraguai",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-paraguay",
            "title": "10. Adquisição Responsável no Paraguai: Guia Legal e Ética",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de maneira responsável. Em Paraguai, a posse de animais está protegida pela Lei N° 483/95 de Proteção aos Animais e pela Lei N° 6541/20 de Bem-Estar Animal, que reconhece os animais como seres sencientes, proíbe seu maltrato e abandono, e regula a posse responsável.",
            "sections": [
              {
                "heading": "Por que escolher um Criatório Registrado?",
                "body": "Os criatórios éticos em Paraguai preservam a raça, cuidam da saúde genética e socializam os gatinhos. A forma mais segura de os identificar é verificar sua afiliação à FELPAR (Federación Felina do Paraguai), representante da WCF ou TICA. Vantagens: Certificação Genética (ancestros registrados oficialmente), Saúde Preventiva (testes de PKD ou HCM) e Socialização Temprana (prevenção de problemas de conduta como medos ou agressividade)."
              },
              {
                "heading": "**2. **Marco Legal: Seus Direitos e Deveres",
                "body": "Para uma transação segura em Paraguai, o criatório deve cumprir com: Identificação (Microchip) implementada nas municipalidades como Assunção, Luque, San Lorenzo, Lambaré, etc. Contrato de Compra e Venda com dados das partes, garantias de saúde (FeLV/FIV), cláusula de devolução (proibido abandonar) e compromisso de esterilização. Carnê de Vacinação: Assinado por um Médico Veterinário registrado no CONAMEVET (Conselho Nacional de Medicina Veterinária), com as vacinas triples felinas ao dia."
              },
              {
                "heading": "**3. **Checklist: Como detectar um Criatório Ético em Paraguai?",
                "body": "Antes de pagar, verifique: Permite visitas presenciais? Você deve conhecer o cattery e ver a mãe; desconfie de entregas em shoppings ou parques. Idade de entrega? NUNCA antes de 12 semanas (3 meses). É crucial para o destete emocional e imunológico. Documentação completa? Você deve receber Certificado de Nascimento / Pedigree da FELPAR, carnet de vacinas e fatura ou recibo.  Você deve receber Certificado de Nascimento / Pedigree da FELPAR, carnet de vacinas e fatura ou recibo. ✅ Entrevista ao comprador? Um bom criador quer saber sobre suas proteções em janelas e varandas, vital em edifícios altos de Assunção."
              },
              {
                "heading": "**4. **Importação Legal de Raças Exóticas",
                "body": "O processo é regulado estrictamente pelo SENACSA (Serviço Nacional de Qualidade e Saúde Animal). Requisitos: Certificado zoosanitário internacional, vacinação antirrábica vigente e protocolos de ingresso. É recomendável contratar uma agência de transporte de mascotas especializada ('Pet Relocation') para gerenciar trâmites ante o SENACSA e evitar retencões no Aeroporto Silvio Pettirossi ou multas severas."
              },
              {
                "heading": "Cuidado com as 'Fábricas de Gatos' e Estafas!",
                "body": "NO COMPRES SI: Te piden señas por adelantado sem mostrar o animal (estafa comum; não transfieras dinheiro nem giros sem videollamada em tempo real). Vendem em feiras de rua ou praças: alta mortalidade por falta de higiene (panleucopenia, leucemia). Têm 'estoque' infinito: probabilidade de fábrica de exploração. Preços sospechosamente baixos: a criação ética implica custos altos em saúde e alimentação premium que um preço baixo não cobre."
              },
              {
                "heading": "Conclusão",
                "body": "Adquirir um gato de raça no Paraguai é uma responsabilidade legal e moral sob a Lei de Bem-Estar Animal. Ao escolher um criadouro registrado na FELPAR, estás financiando a preservação da raça e o bem-estar animal, e dizendo 'não' ao maltrato das fábricas clandestinas. Lembre-se: Antes de comprar, considere também a adoção."
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
            "title": "Adquisição Responsável no Brasil: Guia Legal e Ética",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de maneira responsável. No Brasil, a posse de animais está protegida pela Lei Federal nº 14.064/2020 (Lei Sansão) e pela Lei Arouca (Lei nº 11.794/2008). Comprar um gato não é uma transação comercial qualquer; é incorporar um membro sensível à família.",
            "sections": [
              {
                "heading": "**1. **Por que escolher um Criadouro Registrado?",
                "body": "Os criadouros éticos no Brasil preservam a raça, cuidam da saúde genética e socializam os gatinhos. A forma mais segura de identificá-los é verificar sua afiliação a GATOS do BRASIL (representante oficial da WCF), ou a clubes de TICA ou FIFe. Vantagens: Certificação Genética (ancestros oficiais), Saúde Preventiva (testes de PKD ou HCM) e Socialização Temprana ('criado em casa') para prevenir problemas de comportamento."
              },
              {
                "heading": "**2. **Marco Legal: Seus Direitos e Deveres",
                "body": "Para que a transação seja legal no Brasil, o criadouro deve cumprir com: Identificação (Microchip) exigido em cidades como São Paulo, Rio de Janeiro e Curitiba para o registro municipal (RAA). Contrato de Compra e Venda com dados das partes, garantias de saúde (FeLV/FIV), cláusula de devolução (abandono é crime) e compromisso de esterilização. Carnê de Vacinação: Firmado por um Médico Veterinário registrado no CRMV, com as vacinas V3/V4/V5 ao dia segundo a idade."
              },
              {
                "heading": "0: Checklist: Como detectar um Criatório Ético no Brasil?",
                "body": "1: Antes de realizar qualquer transferência (PIX), verifique: Permitem visitas presenciais? Você deve conhecer o criatório e ver a mãe; desconfie de entregas em parques ou shoppings. Idade de entrega? NUNCA antes de 12 semanas (3 meses). Documentação completa? Você deve receber Certificado de Nascimento / Pedigree de GATOS do BRASIL/WCF, carteira de vacinas e Nota Fiscal ou recibo. Entrevista ao comprador? Um bom criador quer saber sobre suas 'telas de proteção' (essenciais em edifícios altos do Brasil)."
              },
              {
                "heading": "2: 4. Importação Legal de Raças Exóticas",
                "body": "3: O processo é regulado estrictamente pelo MAPA (Ministério da Agricultura, Pecuária e Abastecimento) através do sistema Vigiagro. Requisitos: Certificado zoosanitário internacional, vacinação antirrábica vigente e protocolos de entrada. É recomendável contratar uma agência de transporte de mascotas especializada ('Pet Relocation') para evitar a retenção do animal em aeroportos como Guarulhos ou Galeão."
              },
              {
                "heading": "4: Cuidado com as 'Fábricas de Gatos' e Estafas!",
                "body": "5: NÃO COMPRA SE: Eles pedem PIX por adiantado sem mostrar o animal (estafa comum; exige videollamada em tempo real). Vendem em feiras de rua ou praças: alta mortalidade por falta de higiene. Têm 'estoque' infinito de múltiplas raças: provável fábrica de exploração. Preços suspeitosamente baixos: a criação ética implica custos altos em saúde e registros que um preço baixo não pode cobrir."
              },
              {
                "heading": "6: Conclusão",
                "body": "7: Adquirir um gato de raça no Brasil é uma responsabilidade legal e moral sob a Lei Sansão e a Lei Arouca. Ao escolher um criatório registrado em GATOS do BRASIL, você está financiando a preservação da raça e o bem-estar animal, e dizendo 'não' ao maus-tratos das fábricas clandestinas. Lembre-se: Antes de comprar, considere também a adoção."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición españa",
        "label": "8: 🇪🇸 Espanha",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-espana",
            "title": "9: Adquisição Responsável na Espanha: Guia Legal e Ética",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de maneira responsável. Em Espanha, a normativa mudou drasticamente com a entrada em vigor da nova Lei de Bem-Estar Animal (Lei 7/2023). Esta lei proíbe a venda de cães, gatos e hámsters em estabelecimentos comerciais e exige que toda aquisição seja realizada através de criadores registrados ou entidades de proteção animal.",
            "sections": [
              {
                "heading": "**1. **Por que escolher um Criador Registrado (Amador)?",
                "body": "Em Espanha, os criadores éticos devem estar inscritos como 'Núcleo Zoológico' ou 'Criador Amador' em sua Comunidade Autônoma. A forma mais segura de identificá-los é verificar se estão filiados à AFEC (Associação Felina Espanhola), representante da WCF no país, ou a outras federações reconhecidas como FIFe. Vantagens: Legalidade Garantida (somente criadores registrados podem vender sob a nova lei), Saúde Genética (testes de PKD ou HCM) e Socialização (garantiza um temperamento equilibrado)."
              },
              {
                "heading": "**2. **Marco Legal: Seus Direitos e Deveres (Lei 7/2023)",
                "body": "Para que a transação seja legal em Espanha, o criador deve cumprir com: Microchip Obrigatório (registrado no RIAC de sua Comunidade Autônoma antes da entrega). Documentação Sanitária: Passaporte europeu ou cartilha com vacinas (Trivalente) e desparasitações ao dia. Contrato de Compra-Venda obrigatório com número de núcleo zoológico, garantias de saúde e cláusula de devolução. Proibição de Venda em Lojas: A venda em lojas de animais é ilegal; somente pode ser feita diretamente pelo criador ou por meio de adoção."
              },
              {
                "heading": "**3. **Checklist: Como detectar um Criador Ético em Espanha?",
                "body": "Antes de pagar, verifique: Permite visitas? Você deve conhecer seu domicílio ou cattery e ver a mãe; desconfie de entregas em estacionamentos. Idade de entrega? NUNCA antes de 12 semanas (3 meses). Documentação completa? Pedigree oficial de AFEC/WCF ou similar, microchip já registrado e cartilha assinada por veterinário colegiado. Transparência? Um bom criador perguntará sobre sua residência (redes em janelas em andares altos) e não terá pressa para vender rápido."
              },
              {
                "heading": "**4. **Importação Legal desde a UE e Terceiros Países",
                "body": "Desde a UE: Passaporte Europeu, microchip ISO e vacina antirrábica (mínimo 21 dias de antigüedad). Desde fora da UE (Reino Unido, EUA): Certificado Zoosanitário oficial, titulación de anticuerpos (se aplica) e cumprimento de requisitos do Ministério de Agricultura, Pesca e Alimentação (MAPA). É recomendável usar agências de transporte especializadas para evitar cuarentenas ou devoluções ao local de origem."
              },
              {
                "heading": "**5. **Cuidado com as Estafas e o Tráfico Ilegal!",
                "body": "NO COMPRES SI: Te piden dinheiro por adiantado sem ver o gato (exige videollamada em tempo real). Não têm número de Núcleo Zoológico visível: é obrigatório exibi-lo em todo anúncio. Entregam gatinhos menores de 3 meses: é ilegal e cruel. Preços suspeitosamente baixos: costumam indicar 'granjas de gatinhos' importadas ilegalmente da Europa do Leste sem garantias de saúde ou ética."
              },
              {
                "heading": "Conclusão",
                "body": "Adquirir um gato de raça na Espanha é um ato regulado e protegido. Ao escolher um criador afiliado à AFEC e com Núcleo Zoológico, estás cumprendo a Lei de Bem-Estar Animal, financiando a preservação da raça e evitando o sofrimento animal. Lembre-se: Antes de comprar, considere a adoção em proteções específicas como Resgate Persa ou Maine Coon Rescue."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición mexico",
        "label": "México",
        "topics": [
          {
            "slug": "guia-tenencia-responsable-mexico",
            "title": "Tenencia Responsável em México: Guia Legal e Ética para Adquirir um Gato",
            "intro": "Se você decidiu que uma raça específica se adapta ao seu estilo de vida, é fundamental adquiri-la de maneira responsável. No México, a proteção animal é regulada pela Lei Federal de Proteção Animal e por leis estaduais e locais (como a de CDMX ou Jalisco), que reconhecem os animais como seres sintientes, proíbem o maltrato e regulam a tenencia responsável.",
            "sections": [
              {
                "heading": "**1. **Por que escolher um Criador Registrado?",
                "body": "Os criadores éticos no México preservam a raça, cuidam da saúde genética e socializam os gatinhos em ambiente familiar. A forma mais segura de identificá-los é verificar sua afiliação à AMFE (Associação Mexicana Felina), representante da WCF e TICA. Vantagens: Certificação Genética (ancestros registrados), Saúde Preventiva (testes de PKD ou HCM) e Socialização Temprana (prevenção de medos e agressividade)."
              },
              {
                "heading": "**2. **Marco Legal: Seus Direitos e Deveres",
                "body": "Para que a transação seja legal no México, o criador deve cumprir com: Identificação (Microchip) obrigatório em entidades como CDMX (registro RECAN), Edomex, Jalisco e Nuevo León. Contrato de Compra e Venda com dados das partes, garantias de saúde (FeLV/FIV), cláusula de devolução (o abandono é crime) e compromisso de esterilização. Cartilha de Vacinação: Assinada por um Médico Veterinário Zootecnista com cédula profissional em vigor, com as três vacinas felinas em dia."
              },
              {
                "heading": "0: Checklist: Como detectar um Criatório Ético no México?",
                "body": "1: Antes de pagar, verifica: Permitem visitas presenciais? Deves conhecer o cattery e ver a mãe; desconfia de entregas em praças comerciais ou metrôs. Idade de entrega? NUNCA antes de 12 semanas (3 meses). Documentação completa? Certificado de Nascimento / Pedigree (AMFE/WCF ou TICA), cartilha de vacinas e factura ou recibo. ✅ Entrevista ao comprador? Um bom criador quer saber sobre suas proteções em janelas e varandas, vital em apartamentos de CDMX, Monterrey ou Guadalajara."
              },
              {
                "heading": "2: 4. Importação Legal de Raças Exóticas",
                "body": "3: O processo é regulado estritamente pelo SENASICA (Serviço Nacional de Sanidade, Inocuidade e Qualidade Agroalimentar) sob a SADER. Requisitos: Certificado zoosanitário internacional, vacinação antirrábica vigente e protocolos de ingresso. Recomenda-se contratar uma agência de transporte de mascotas especializada ('Pet Relocation') para evitar retencões em aeroportos como o da CDMX ou Cancún."
              },
              {
                "heading": "4: ¡Cuidado com as 'Fábricas de Gatos' e Estafas!",
                "body": "5: NÃO COMPRA SE: Te pedem depósitos por adiantado sem mostrar o animal (estafa comum; exija videollamada em tempo real). Vendem em tianguis ou ruas: alta mortalidade por falta de higiene (moquillo/panleucopenia). Têm 'estoque' infinito: provável fábrica de exploração. Preços suspeitosamente baixos: a criação ética implica custos altos em saúde e registros que um preço baixo não pode cobrir."
              },
              {
                "heading": "6: Conclusão",
                "body": "7: Adquirir um gato de raça no México é uma responsabilidade legal e moral. Ao escolher um criatório registrado na AMFE, estás financiando a preservação da raça e o bem-estar animal, e dizendo 'não' ao maltrato das fábricas clandestinas."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "historia",
    "label": "História, Origem e expansão",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "Estimulação, brinquedos e enriquecimento",
    "subcategories": [
      {
        "slug": "historia-felina",
        "label": "O Coração do Origem",
        "topics": [
          {
            "slug": "origen-encuentro-nilo",
            "title": "Egito, no Nilo",
            "intro": "A história do gato doméstico começou há cerca de 9.000 anos no vale do Nilo, Egito. Embora existam muitas espécies de felinos, todos os nossos gatos atuais (inclusive os exóticos) provêm de uma única subespécie: o gato silvestre norte-africano ou Felis lybica. O 'flechazo' com os humanos não foi planejado, mas uma associação de conveniência:",
            "sections": [
              {
                "heading": "O problema, a solução e o pacto",
                "body": "O problema: Os egípcios dependiam da agricultura e guardavam o grão em grandes silos. Esses armazéns atraíam pragas de ratos e ratões. A solução: Os gatos se aproximaram das aldeas atraídos pela abundância de roedores. O pacto: Os humanos aceitaram encantados esse serviço de 'controle de pragas' e assim começou uma relação simbiótica de benefício mútuo."
              },
              {
                "heading": "De Caçadores a Deuses",
                "body": "Com o tempo, o gato passou de ser um simples guardião do celeiro a um membro sagrado da família. Os egípcios chegaram a deificar os gatos, relacionando-os com a deusa Bastet (que representava a doçura e a proteção) e com o deus sol, Ra. Era tal sua importância que se encontraram milhões de mumias de gatos e túmulos de luxo, como o de Osiris Tamat, o gato favorito de um príncipe egípcio."
              },
              {
                "heading": "A Conquista do Mundo: Roma e os Vikingos",
                "body": "Aunque o documento se centra no origem niloica, a história continuou quando o gato saiu do Egito para conquistar novos continentes: O Gato em Roma: Os romanos, ao ver a eficácia dos gatos egípcios, os adotaram rapidamente. Para eles, o gato era um símbolo de liberdade e independência. Levaram-no consigo por todo o Império Romano (Europa, o norte da África e a Grã-Bretanha), utilizando-os principalmente para proteger seus acampamentos militares e casas dos roedores. Os Gatos Viajantes dos Vikingos: Durante a Idade Média, os vikings jogaram um papel crucial na expansão do gato em direção ao norte. Eram excelentes navegantes e sempre levavam gatos em seus barcos (especialmente o 'Gato da Floresta da Noruega') para proteger as provisões de comida durante as longas travessias. Graças aos vikings, os gatos chegaram a lugares tão remotos como a Escandinávia e, eventualmente, às Américas."
              },
              {
                "heading": "O Gato Moderno",
                "body": "Tras sobreviver a épocas escuras na Idade Média europeia —onde foram injustamente perseguidos—, o gato recuperou seu estatuto graças a seu papel vital detendo pragas que transmitiam doenças como a Peste Negra. Hoje em dia, o gato moderno manteve esse instinto de caçador independente e autosuficiência que o torna único. Aunque agora existem centenas de raças com diferentes cores e pelagens, em seu DNA segue latejando o coração de aquele pequeno felino do deserto que decidiu, há milênios, que viver conosco era uma boa ideia."
              }
            ]
          },
          {
            "slug": "corazon-origen-egipto",
            "title": "Expansão por o Mundo",
            "intro": "O gato doméstico não apareceu por acaso no Nilo. A chave foi a agricultura sedentária. O Egito era o 'grande celeiro do mundo', e os silos de cereais eram ímanes para os roedores.",
            "sections": [
              {
                "heading": "A Transformação Religiosa",
                "body": "O gato passou de ser um aliado útil a um ser divino. A deusa Bastet se representava com cabeça de gata e simbolizava o lar, a fertilidade e a proteção. Matar um gato no antigo Egito era um crime castigado com a morte."
              },
              {
                "heading": "Lujo e Respeito",
                "body": "O documento destaca o caso do gato Osiris Tamat, mascote do príncipe Tutmosis. Foi enterrado com honras em um sarcófago de pedra calcária, envolto em linho fino e com joias, demonstrando que para a realeza egípcia, os gatos eram verdadeiros companheiros de vida e do 'más além'."
              },
              {
                "heading": "Proibição de Exportação",
                "body": "Los egipcios valoravam tanto seus gatos que proibiram estrictamente sacá-los do país. No entanto, isso não impediu que o 'segredo' desses felinos se espalhasse."
              },
              {
                "heading": "A Grande Expansão: Como chegaram a outros continentes?",
                "body": "O caminho do gato para o resto do mundo deu-se principalmente através das rotas comerciais marítimas: 1. Os Fenícios: Os primeiros 'contrabandistas'. Foram os grandes navegantes do Mediterrâneo. Diz-se que sacaram gatos do Egito de contrabando para vendê-los em suas rotas comerciais. Graças a eles, o gato chegou às ilhas gregas, à península itálica e ao sul da Espanha muito antes do previsto. 2. Roma: Os gatos nas legiões. Quando os romanos conquistaram o Egito, ficaram fascinados pelo gato (o preferiam ao hurão, que era o animal que usavam antes para os ratos). Ao expandir seu Império, os legionários levavam gatos em suas caravanas e barcos para proteger os suprimentos. Assim, o gato se introduziu na Europa Central e na Grã-Bretanha. 3. Ásia e a Rota da Seda. Através das rotas terrestres comerciais, os gatos chegaram à Ásia Central. Em países como China e Japão, foram recebidos com honras semelhantes às do Egito. No Japão, por exemplo, os monges budistas os usavam para proteger os valiosos manuscritos de papel dos ratos nos templos. 4. A Conquista da América. Os gatos não chegaram à América até a época dos exploradores europeus (séculos XV e XVI). Em barcos como os de Cristóvão Colombo ou mais tarde o Mayflower, os gatos eram tripulantes essenciais. Sua missão era evitar que as ratas comessem as rações de comida dos marinheiros e que propagassem doenças no espaço confinado do barco."
              },
              {
                "heading": "Resumo da Evolução",
                "body": "África: Origem biológica (Felis lybica). Europa: Introduzidos por fenícios e romanos; depois expandidos por vikings para o norte. Ásia: Chegaram através da Rota da Seda e do comércio marítimo para a Índia e o Japão. América e Oceania: Chegaram séculos depois nos barcos dos colonizadores europeus."
              },
              {
                "heading": "Conclusão",
                "body": "Hoje, aquele pequeno gato que vigiava o trigo no Nilo está presente em todos os continentes (exceto a Antártida), demonstrando ser um dos viajantes mais exitosos da história da humanidade."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "a",
    "label": "Não há texto para traduzir.",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "Estimulação, brinquedos e enriquecimento",
    "subcategories": [
      {
        "slug": "importancia",
        "label": "Por que é vital",
        "topics": [
          {
            "slug": "juego-cachorros",
            "title": "O jogo nos cães: a base de tudo",
            "intro": "Os primeiros seis meses de vida de um gato são um período crítico de desenvolvimento. O que aprender durante o jogo nessa etapa determinará em grande medida como se relacionará com humanos e outros animais pelo resto da vida.",
            "sections": [
              {
                "heading": "A janela de socialização",
                "body": "Entre as 2 e 9 semanas de vida, o gato aprende o que é normal em seu mundo. Um cachorro que interaja com pessoas, outros gatos, ruídos domésticos e experiências variadas durante esse período será um adulto mais seguro e adaptável."
              },
              {
                "heading": "O erro mais comum: as mãos como brinquedo",
                "body": "Usar as mãos ou os pés para jogar com um cachorro parece inofensivo, mas ensina que a pele humana é uma presa válida. Quando esse gatinho pesar 5 kg, os mordiscos e arranhões serão dolorosos e o comportamento difícil de corrigir. Usa sempre brinquedos com distância."
              },
              {
                "heading": "Jogo como prevenção de problemas",
                "body": "Um gato que não joga o suficiente canaliza sua energia de caça em comportamentos problemáticos: atacar panturrilhas, destruir objetos, agressão redirecionada. 2 sessões de jogo de 15 minutos por dia, especialmente antes de dormir, são o melhor antídoto."
              }
            ]
          }
        ]
      }
    ]
  }
];
