import { Category } from '../../data/cats';

export const categories: Category[] = [
  {
    "slug": "salud",
    "label": "健康",
    "emoji": "",
    "color": "#7a9e7e",
    "bg": "#eef4ef",
    "description": "预防、疾病和医疗护理",
    "subcategories": [
      {
        "slug": "prevencion",
        "label": "预防",
        "topics": [
          {
            "slug": "vacunacion",
            "title": "猫类疫苗接种",
            "intro": "疫苗接种是保护猫免受严重疾病的最有效工具。了解疫苗接种的时间表和强制性疫苗的类型，会使猫的生活更长久，健康状况更好。",
            "sections": [
              {
                "heading": "强制性疫苗",
                "body": "猫类疫苗接种是任何疫苗接种方案的基础。它包括Rinotraqueítis、Calicivirus和Panleucopenia三种疫苗，通常在猫出生8、12和16周时接种，之后每年或每3年根据产品的不同进行一次强化。"
              },
              {
                "heading": "推荐的选项疫苗",
                "body": "对外出或与其他猫共处的猫来说，Leucemia Felina（FeLV）疫苗是非常推荐的。反流感疫苗在许多国家是强制性的，在智利是推荐的。"
              },
              {
                "heading": "如果我漏掉了一剂疫苗会怎么样？",
                "body": "如果猫已经成年超过3年没有接种疫苗，建议重新接种疫苗系列。请在给予任何疫苗之前始终与你的兽医联系。"
              }
            ]
          },
          {
            "slug": "desparasitacion",
            "title": "内外寄生虫",
            "intro": "寄生虫是猫中最常见、最容易预防的问题之一。定期的内外寄生虫控制计划可以保护猫和家庭成员。",
            "sections": [
              {
                "heading": "内寄生虫",
                "body": "最常见的内寄生虫是蛔虫、钩虫和托氏虫。成年猫每3-6个月使用口服抗寄生虫药物治疗，6个月以内的幼猫每月治疗一次。"
              },
              {
                "heading": "外寄生虫",
                "body": "最常见的外寄生虫是跳蚤、蜱虫和耳蜡虫。每月使用点滴式抗寄生虫药物是最方便的解决方案。抗寄生虫颈圈提供长期保护，但需要正确调整。"
              },
              {
                "heading": "室内猫 vs. 室外猫",
                "body": "室内猫的风险较低，但并非完全免疫：跳蚤可以通过衣服和鞋子进入。建议每年至少进行两次内寄生虫控制和四次外寄生虫控制。"
              }
            ]
          },
          {
            "slug": "primeros-auxilios",
            "title": "猫急救",
            "intro": "在紧急情况下，知道如何行动可能会挽救你的猫的生命。这些基本知识将使你在最危急的情况下准备好，直到到达宠物医院。",
            "sections": [
              {
                "heading": "基本药箱",
                "body": "每个有猫的家庭都应该有：盐水溶液、无菌纱布、无酒精抗生素（如稀释的氯己定）、数字体温计和紧急宠物医院的电话号码。"
              },
              {
                "heading": "紧急信号",
                "body": "如果你的猫出现以下症状，请带它到紧急宠物医院：呼吸困难、意识丧失、抽搐、超过12小时无法排尿、持续出血或可能摄入毒物。"
              },
              {
                "heading": "你绝对不应该做的",
                "body": "不要给猫吃布洛芬、对乙酰氨基酚或阿司匹林：它们对猫是致命的。不要尝试在没有兽医指示的情况下诱导呕吐。不要在开放伤口上使用酒精。"
              }
            ]
          }
        ]
      },
      {
        "slug": "enfermedades",
        "label": "常见疾病",
        "topics": [
          {
            "slug": "enfermedad-renal",
            "title": "慢性肾脏疾病",
            "intro": "慢性肾衰竭是7岁以上猫的主要死亡原因。及时发现可能会为你的宠物增加多年高质量的生活。",
            "sections": [
              {
                "heading": "警告信号",
                "body": "喝很多水，尿频，逐渐减轻体重，毛发变暗，食欲不振是最常见的症状。许多猫不表现出症状直到肾功能损失达到75%。"
              },
              {
                "heading": "诊断和跟踪",
                "body": "从7岁开始，每年进行一次血液和尿液检查是最好的检测工具。SDMA生物标志物可以在传统标志物之前几个月检测到肾损伤。"
              },
              {
                "heading": "治疗和管理",
                "body": "没有治愈方法，但可以通过低磷和蛋白质的肾脏饮食、水分补充（在家中喂食湿食或皮下注射液体）、补充剂和定期检查来管理。"
              }
            ]
          },
          {
            "slug": "diabetes-felina",
            "title": "猫的糖尿病",
            "intro": "猫的糖尿病比人们想象的更常见，尤其是在肥胖的雄性猫身上。好消息是：通过合适的管理，许多猫可以进入缓解状态。",
            "sections": [
              {
                "heading": "风险因素",
                "body": "肥胖、老年、男性和碳水化合物高的饮食是主要风险因素。缅甸猫有遗传性倾向。"
              },
              {
                "heading": "症状",
                "body": "饥渴，多尿，尽管进食良好仍然体重减轻，后腿无力（糖尿病神经病变）是最典型的症状。"
              },
              {
                "heading": "治疗和缓解",
                "body": "每日胰岛素，低碳水化合物饮食（高质量的湿性食物）和在家中监测血糖水平是基础。通过早期和严格的治疗，90%的猫可以实现缓解。"
              }
            ]
          }
        ]
      },
      {
        "slug": "dental",
        "label": "口腔健康",
        "topics": [
          {
            "slug": "sarro-gingivitis",
            "title": "牙菌斑和牙周炎",
            "intro": "牙周病影响3岁以上的70%的猫，是忽视的慢性疼痛和整体健康恶化的常见原因。",
            "sections": [
              {
                "heading": "为什么很重要",
                "body": "口腔中的细菌进入血液循环，可能损害肾脏、心脏和肝脏。患有牙痛的猫会吃得少，变得更易怒，生活质量会大大受损。"
              },
              {
                "heading": "在家中的预防",
                "body": "刷牙3次每周用猫科牙膏（绝对不能用人类牙膏）是最有效的方法。口香糖和可嚼玩具是有用的补充，但不是单独的解决方案。"
              },
              {
                "heading": "专业清洁",
                "body": "每年清洁宠物牙齿的建议从3岁开始。有倾向的猫（如波斯猫、暹罗猫）可能需要更早。"
              }
            ]
          }
        ]
      },
      {
        "slug": "alergia",
        "label": "过敏",
        "topics": [
          {
            "slug": "guia-alergia-gatos",
            "title": "猫过敏指南：实用指南",
            "intro": "宠物过敏会影响15%至30%的人。猫过敏比狗过敏更常见，但通过适当管理，居住在一起是可能的。",
            "sections": [
              {
                "heading": "原因：Fel d 1蛋白",
                "body": "过敏不是由毛发引起的，而是由皮肤、唾液和尿液中的Fel d 1蛋白引起的。当猫舔口水时，蛋白质会在空气中扩散，通过脱落的皮肤（皮屑）。雄性猫产生的量比雌性猫多，阉割会降低这种情况的发生率。"
              },
              {
                "heading": "症状和诊断",
                "body": "症状从荨麻疹和瘙痒到打喷嚏、流泪和哮喘发作。必须去看过敏学家进行皮肤试验、血液测试或肺功能测试，因为可能是尘埃或花粉，而不是猫。"
              },
              {
                "heading": "Hogar y Zonas Libres",
                "body": "要在家中保持一个“安全区”，可以将猫的卧室隔离起来。去掉地毯或只使用可以用热水洗的地毯。使用HEPA过滤器的吸尘器和空气净化器至少4小时每天是非常重要的。"
              },
              {
                "heading": "Cuidado Directo y Productos",
                "body": "应由非过敏者在家外进行刷毛。每周的洗澡和使用中和产品（如Vetriderm）对猫的毛发有助于去除唾液残留。对长毛猫进行绝育和定期剪毛也是有效的策略。"
              },
              {
                "heading": "Tratamientos Avanzados",
                "body": "咨询免疫疗法（耐受性疫苗），这种方法在长期内是有效的。如果尽管采取了清洁和医疗措施，猫的健康状况仍然严重恶化，那么最负责任的决定可能是寻找一个新的家园。"
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
            "title": "Diabetes Felina: Guía completa para entenderla y manejarla",
            "intro": "猫的糖尿病是一种复杂的状况，但如果得到了适当的管理，猫可以过着长久而幸福的生活。与狗不同，猫有独特的特点，我们必须了解这些特点以避免常见的错误。",
            "sections": [
              {
                "heading": "Paso 1: Causas y factores de riesgo",
                "body": "猫的糖尿病通常是由多种因素组合而成的：肥胖和年龄（9岁以上的猫较为常见）、性别和种族（雄性猫的患病率是雌性猫的4倍，尤其是在西方猫中）。还会受到淀粉样沉积物对胰腺的损害和使用类固醇或孕激素等药物的影响。值得注意的是，胰腺炎通常与糖尿病密切相关，在许多情况下，它可能是糖尿病的诱因。"
              },
              {
                "heading": "第二步：识别症状",
                "body": "注意到饮水量的增加和尿量的增加（喝很多水或在猫砂盒外排尿），以及食欲或体重的变化。一个典型的迹象是糖尿病性神经病变：猫会以整个脚掌着地行走。还会注意到毛发的不良状态（干燥或有脱屑）。与狗不同，糖尿病性猫眼症在猫中非常罕见。"
              },
              {
                "heading": "第三步：正确的诊断",
                "body": "诊所的压力会导致“白色袍”效应，暂时提高血糖水平。为了确保诊断，兽医必须在血液和尿液中检测到葡萄糖。需要进行全面检查，以排除其他条件，如尿路感染、肝脏问题或胰腺炎，这些疾病往往与糖尿病同时存在。"
              },
              {
                "heading": "第四步：治疗和调节",
                "body": "它基于三个支柱：1.胰岛素：使用中效或长效胰岛素（NPH或PZI），通常在每餐后两次注射。2.饮食：严格的肉食饮食，高蛋白质，低碳水化合物，定时摄入。3.监测：在“峰值”时刻（即血糖水平最高时）进行血糖检测（通过耳朵皮肤）以精确调整剂量。"
              },
              {
                "heading": "第五步：酮症酸中毒的紧急情况",
                "body": "如果不治疗，可能会发展成酮症酸中毒，这是一种生命威胁的紧急情况，表现为呕吐、极度嗜睡、脱水和有浓郁的水果或汽油味的呼吸。需要立即入院接受静脉注射、快速起效的胰岛素和电解质（钾、磷）的纠正。"
              },
              {
                "heading": "第六步：并发症和期望",
                "body": "可能通过控制体重和早期诊断来实现缓解（不再需要胰岛素）。最大的风险是低血糖：如果猫颤抖或抽搐，请在口腔中涂抹蜂蜜或糖，然后立即去看兽医。此外，请定期检查是否有尿路感染（血尿或排尿困难）。"
              },
              {
                "heading": "猫主人建议",
                "body": "绝不自行调整胰岛素。严格记录剂量、进食时间和行为。控制体重是预防的最佳工具，注意猫走路方式的任何变化至关重要，以便报告给专家。"
              }
            ]
          }
        ]
      },
      {
        "slug": "obesidad-felina",
        "label": "肥胖",
        "topics": [
          {
            "slug": "guia-obesidad-prevencion",
            "title": "肥胖猫：如何保护猫的健康和生命",
            "intro": "肥胖不仅仅是外观问题；它是一种疾病，会缩短猫的寿命，并增加患糖尿病、关节问题和手术并发症的风险。通过耐心和策略，你可以帮助猫恢复理想体重。",
            "sections": [
              {
                "heading": "步骤1：识别超重",
                "body": "不要仅仅依赖秤。通过“肋骨试验”，你应该能够轻松地触摸到肋骨；如果不能，则意味着有过多的脂肪。从上方看，猫的腰部应该在肋骨后方有一个明显的弧度；如果是矩形或圆柱形，则意味着超重。从侧面看，腹部不应垂下或触摸地面。超重被认为是体重超过10-19%的理想体重，而肥胖则是超过20%。"
              },
              {
                "heading": "步骤2：原因和因素",
                "body": "这是一个复杂的因素：绝育后代谢率下降，食欲增加；从6-8岁开始，猫会燃烧的热量减少；室内猫缺乏刺激；以及不合适的饮食（食物始终可用，过多的奖励或碳水化合物）。像西米猫或布玛猫这样的品种可能具有更高的遗传倾向。"
              },
              {
                "heading": "Paso 3: 安全行动计划",
                "body": "减重应该是缓慢的。黄金规则：猫不应减重超过1%或2%的体重每周（例如，8公斤的猫不应减重超过160克每周）。减重过快是危险的，因为它可能会导致肝脂肪病，这是一种潜在致命的肝脏疾病。"
              },
              {
                "heading": "Paso 4: 策略性饮食管理",
                "body": "请向兽医计算理想体重的卡路里，而不是当前体重。通常提供60%至75%的当前维持卡路里。寻找高蛋白质的饮食（以保持肌肉并提供饱足感）并低碳水化合物。将食物分成3或4次份，以保持活跃的代谢，并使用一部分食物作为奖励，而不是高卡路里零食。"
              },
              {
                "heading": "Paso 5: 运动和富裕",
                "body": "运动应该是渐进的。每天花10分钟玩互动游戏（棍子、激光、球）。使用环境富裕：将食物藏在不同的位置，使用互动喂食器或uzzle，安装猫爬架或树，迫使猫爬和跳来获得食物。"
              },
              {
                "heading": "Paso 6: 承诺和监控",
                "body": "成功取决于整个家庭遵循规则，而不给猫偷偷喂食。每两周称重猫：如果没有减轻，调整食物；如果减重太快，稍微增加一点。人类因素至关重要；接受猫需要减轻不是“残忍”，而是为了长期照顾猫的健康。"
              },
              {
                "heading": "警告信号：何时去看兽医",
                "body": "在开始任何饮食之前，去看专家排除可能的医学原因，如甲状腺功能减退（尽管在猫中很少见）或糖尿病，并为建立一个现实的目标。兽医应该帮助选择合适的商业饮食或制定一个平衡的自制饮食。记住，预防胜于治疗，以确保你的猫陪伴你多年，健康和活跃。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "comportamiento",
    "label": "行为",
    "emoji": "",
    "color": "#b85c38",
    "bg": "#faefeb",
    "description": "行为",
    "subcategories": [
      {
        "slug": "interio-exterior",
        "label": "猫：室内还是室外？",
        "topics": [
          {
            "slug": "guia para entender y cuidar",
            "title": "猫的行为：如何理解和更好地照顾你的猫",
            "intro": "猫是当今世界上最受欢迎的宠物之一。尽管历史上人们不把它们视为我们现在所知的生活伴侣，但事实是，像狗一样，猫也需要互动、关注和爱。不同之处在于它们如何表达这些需求。为了和谐地与你的猫共处，理解它们的性质并适应它们的本能是至关重要的。",
            "sections": [
              {
                "heading": "**1. **室内还是室外？做出正确的决定",
                "body": "当你决定要收养猫时，首先要考虑的是猫是否会生活在室内还是室外。两种选择都有重要的含义：室外猫：它们有更多的自由和自然刺激，但面临更大的风险：车祸、与其他动物的冲突、传染病和寄生虫（跳蚤、蛔虫）。它们的平均寿命通常较短。室内猫：它们更安全、更长寿，但完全依赖于人类来提供刺激。枯燥无味是它们的最大敌人。如果你选择这一选项，你必须承诺丰富他们的环境，提供游戏、爬架和高质量的时间。建议：无论你选择哪种方式，安全和心理刺激都是关键。"
              },
              {
                "heading": "**2. **刺激的本能：不是破坏，是沟通",
                "body": "刺激是自然和不可或缺的行为，开始于大约5周大的时候。对于猫来说，刺激不仅仅是锐利的爪子；它是一种视觉和嗅觉的沟通方式（通过脚趾上的腺体标记领地）和一种伸展肌肉的方式。冲突发生在他们选择我们的家具时。解决方案不是惩罚，而是提供更好的选择。如何选择完美的刺激器？稳定性：它应该坚固，不会摇晃。如果它移动，猫不会使用它，因为它会感到不安全。高度：它应该足够高，以便猫可以完全站立。材料：丝绸、天然木材或绳子通常是最吸引人的。位置：将其放置在可见和通行的区域（不应该藏在地下室）。猫喜欢在家中“生活”的地方标记。耐心：一旦猫选择了刺激器，不要改变它的位置。另外，越用越喜欢，因为它会被它们的气味所感染。"
              },
              {
                "heading": "**3. **游戏：身体和心理锻炼",
                "body": "Jugar no es solo entretenimiento; es la forma en que el gato ejercita su instinto de caza. Un gato que no juega puede desarrollar problemas de comportamiento por acumulación de energía o estrés. Claves para un juego exitoso: Imita a una presa: Usa juguetes que se muevan, se escondan, salten o vibren. Las cañas con plumas o cuerdas son ideales porque te permiten interactuar a distancia. Seguridad ante todo: Evita hilos largos sin supervisión o piezas pequeñas que pueda tragar. Rutina diaria: Dedica al menos 15 minutos al día a jugar activamente con él. Esto fortalece vuestro vínculo y mantiene su mente ágil. Variedad: Rotar los juguetes evita que se aburra de los mismos objetos."
              },
              {
                "heading": "**4. **Higiene y Areneros: La regla de oro",
                "body": "Los gatos son extremadamente limpios y exigentes con su baño. Un arenero sucio o mal ubicado es la causa número uno de problemas de eliminación inadecuada. Recomendaciones básicas: La regla del 'N+1': Debes tener una caja de arena por cada gato, más una extra. (Ejemplo: 1 gato = 2 cajas; 2 gatos = 3 cajas). Algunos gatos prefieren incluso usar una caja solo para orinar y otra para defecar. Tipo de arena: La mayoría prefiere arenas sin perfume y de textura fina y suave. Ubicación: Lugares tranquilos, privados y lejos de ruidos fuertes (lavadoras, secadoras) o de su zona de comida. Limpieza: Retira los desechos a diario y lava las cajas regularmente con agua y jabón neutro (evita lejías o amoniaco, cuyos olores pueden atraerles a orinar fuera). Alerta: Si tu gato empieza a orinar o defecar fuera de la caja, acude al veterinario. A menudo es el primer síntoma de dolor o enfermedad urinaria, no un acto de venganza."
              },
              {
                "heading": "**5. **El Marcaje con Orina: Entendiendo el mensaje",
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
            "intro": "Introducir un nuevo gato en casa es emocionante, pero puede ser estresante para tu gato residente. Los gatos son territoriales por naturaleza, así que la clave del éxito no es la rapidez, sino la paciencia. Si lo haces bien desde el principio, evitarás conflictos futuros y fomentarás una amistad (o al menos, una tolerancia respetuosa) duradera. Olvida la idea de 'presentarlos de golpe'. Sigue este proceso gradual.",
            "sections": [
              {
                "heading": "第一步：初期隔离期（第1-4天）",
                "body": "新猫需要在初期感到安全之前再认识任何人。单独房间：准备一个安静的房间（不是当前猫的主要区域）带上他的床、食物、水、玩具和沙箱。安全避难所：打开他的运输箱并放入一条毯子，让他有一个躲藏的地方感受到安全。零视接触：在这几天里，不要让他们见面。然而，允许他们在门下闻到对方的气味。这让他们能够调查对方而不受面对面的压力。"
              },
              {
                "heading": "第二步：交换气味（“Dating”气味）",
                "body": "猫通过嗅觉认识彼此，而不是视觉。交换物品：轻轻地在猫脸颊（有嗅觉腺）上摩擦一条毛巾或袜子，然后给另一个猫，并反之亦然。也可以交换他们的毯子。积极的联系：当他们闻到对方的气味时，给他们丰富的奖励或玩耍。我们希望他们将对方的气味联系到好的东西（食物/玩具）。平衡的注意力：花费高质量的时间与每个猫单独相处，抚摸他们并在门边玩耍。这样可以减少焦虑和嫉妒。"
              },
              {
                "heading": "第三步：控制的视觉接触",
                "body": "当两个猫都放松地闻着对方的气味，没有严重的叫声或持续的咆哮时：狭缝：只打开门一厘米（2-3厘米）或使用婴儿网屏障。他们应该能够看到对方，但不能接触。观察：如果有轻微的叫声，那是正常的。如果有强烈的攻击（大声叫嚣，张开嘴巴，耳朵很低），关闭门并在几天后返回第二步。奖励平静：如果他们互相看着没有攻击，立即给予奖励。"
              },
              {
                "heading": "第四步：监督的初次互动",
                "body": "如果视觉接触顺利，到了让他们共享空间的时刻，但要严格遵守规则。自愿离开：打开门，让新猫自由离开。如果他不出来，尊严他。短会话：让他们一起待15-30分钟最多。然后，再次将他们分开。积极分散注意力：使用竹子玩具或扔奖励，但保持安全距离（至少1米）以避免他们争夺玩具。目标：让他们了解对方的存在不是威胁，而是中性或有趣的东西。"
              },
              {
                "heading": "第五步：逐渐增加时间",
                "body": "逐渐增加他们一起待的时间，如果互动是平静的。总是分开：在互动前结束会话，以避免冲突。更好的是让他们有更多的需求而不是互相争斗。独自时间：每次会话后，让他们独自在各自区域，处理经历并恢复领土信心。"
              },
              {
                "heading": "Señales de Alerta y Estrés",
                "body": "警告信号和压力迹象"
              },
              {
                "heading": "Detén el proceso y vuelve atrás si ves: Silbidos intensos y repetidos, gruñidos profundos, pelo erizado y posturas rígidas. En el gato residente: Deja de comer, usa mal el arenero o se esconde todo el día. En el nuevo gato: Se lame compulsivamente, no come o parece aterrorizado. Consejo: Si el estrés es alto, consulta a tu veterinario o a un etólogo. A veces, usar feromonas sintéticas (difusores) puede ayudar a calmar el ambiente.",
                "body": "停止进程并返回，如果你看到：强烈、重复的叫声，低沉的咕噜声，毛发竖立和僵硬的姿势。对于家中的猫：停止进食，使用卫生间不当或整天躲起来。对于新猫：自我舔，拒绝进食或显得极度恐惧。建议：如果压力很高，请咨询你的兽医或行为学家。有时使用合成激素（释放剂）可以帮助平息环境。"
              },
              {
                "heading": "Lo que NUNCA debes hacer",
                "body": "你绝不应该做的"
              }
            ]
          }
        ]
      },
      {
        "slug": "lenguaje",
        "label": "Nunca castigues: Gritar o castigar a un gato por silbar o mostrar agresividad solo aumenta su estrés y asocia al otro gato con algo negativo (el castigo). Reacción correcta: Si hay tensión, separa a los gatos con calma, sin drama. Usa una voz suave o simplemente interpon una barrera física. No los dejes solos: Hasta que no estés 100% seguro de que se toleran (pueden tardar semanas o meses), nunca los dejes sin supervisión.",
        "topics": [
          {
            "slug": "comunicacion-corporal",
            "title": "绝不惩罚：大声喊叫或惩罚猫咪因为叫声或表现出攻击性只会增加猫咪的压力并将另一个猫咪与负面事物联系起来（惩罚）。正确反应：如果有紧张感，平静地分离猫咪，避免剧烈反应。使用柔和的声音或简单地插入物理障碍物。绝不让他们独自相处：直到你百分之百确定他们能够相处（他们可能需要几周或几个月），绝不让他们没有监督。",
            "intro": "Casos Especiales: El Gato Tímido",
            "sections": [
              {
                "heading": "特殊情况：胆怯的猫",
                "body": "尾巴是最明显的信号之一：高直立表示自信、友好或幸福（如果尾巴尖端弯曲则表示极度幸福）。低垂或藏在腿之间则表示害怕、不确定或屈从。快速左右摆动或缓慢移动则表示愤怒、不满或集中。尾巴如果是鼓起的、竖立的或弯曲的，则表示威胁或恐惧。"
              },
              {
                "heading": "耳朵不撒谎",
                "body": "耳朵表明情绪：向前指示注意、好奇、警觉或兴趣。向后、贴在身边或平坦则表示害怕、不满或防御性攻击。如果耳朵向两边倾斜（“飞行模式”），则表示愤怒加剧，猫需要空间。持续移动则表示警惕或紧张。"
              },
              {
                "heading": "眼睛和眨眼",
                "body": "眼睛传达深刻的情绪：睁开大瞳孔或扩张的眼睛表示害怕、惊讶、兴奋或游戏。凝视则可能是挑战或专注的信号。相反，放松的目光或缓慢眨眼则是信号，表明信任、平静和爱意。"
              },
              {
                "heading": "胡须和脸",
                "body": "胡须也在说话：如果胡须向前指示，则表示好奇或对正在探索的东西的兴奋。如果胡须贴在脸上或缩回去，则表明猫感到害怕或试图在紧张的情况下看起来更不威胁。"
              },
              {
                "heading": "整体姿势",
                "body": "身体表明整体状态：放松意味着感到安全。紧缩或紧张意味着害怕。背部弯曲，背部抬起，表明害怕并试图变得更大以自卫。猫同时结合所有这些信号（尾巴、耳朵、眼睛）；例如，高高的尾巴和放松的眼睛是幸福的猫，而后退的耳朵和快速移动的尾巴是愤怒的猫。"
              },
              {
                "heading": "主要思想",
                "body": "不应只看一条信号，而是要看整个身体的所有部分。学习观察这些细节会帮助你更好地理解你的伴侣，并在需要时尊重他的空间。"
              }
            ]
          },
          {
            "slug": "vocalizaciones",
            "title": "声音和意义",
            "intro": "成年猫几乎不互相叫唤：叫唤是他们专门为与人类交流而发展的语言。每个猫都有自己的词汇。",
            "sections": [
              {
                "heading": "叫唤",
                "body": "短促而尖锐的叫唤通常是问候。长而持久的叫唤则是要求（食物、关注）。重复的叫唤可能指示疼痛、混乱（尤其是在老年猫中）或焦虑。"
              },
              {
                "heading": "嗓门",
                "body": "不一定是快乐的迹象：猫也会嗓门时感到紧张、生病或恢复中。嗓门在25-50Hz频率范围内具有治疗作用，促进骨骼再生。"
              },
              {
                "heading": "其他声音",
                "body": "鸟鸣或响声是温暖的问候或对话的回应。咝咝声出现在看到鸟类或猎物时：这是捕猎的沮丧和激动。喷嚏和咳嗽是明显的警告信号，表明猫感到威胁。"
              }
            ]
          },
          {
            "slug": "parpadeo-lento",
            "title": "慢慢眨眼：猫吻",
            "intro": "慢眼睑是猫的美丽信号之一。2020年在萨塞克斯大学的一项实验研究表明，人类可以通过这种方式与任何猫建立联系。",
            "sections": [
              {
                "heading": "是什么意思",
                "body": "当猫看着你，慢慢闭上眼睛时，它在告诉你，它在你的面前感到安全和舒适。这是猫的放松笑容和完全信任的姿势。"
              },
              {
                "heading": "如何做到",
                "body": "看着猫时，保持放松的表情。当你与猫有眼神接触时，慢慢闭上眼睛，几乎闭上眼睛，然后再睁开眼睛。等待。如果猫回应同样的动作，通讯通道就打开了。"
              },
              {
                "heading": "与陌生猫",
                "body": "即使是陌生猫也能通过这种方式建立联系。在收容所和社区中，慢眼睑可能是猫愿意靠近你的关键。它是一种强大的工具，可以帮助你赢得信任。"
              }
            ]
          }
        ]
      },
      {
        "slug": "conducta",
        "label": "常见行为",
        "topics": [
          {
            "slug": "arañar-muebles",
            "title": "为什么猫会撕咬家具",
            "intro": "撕咬不是坏行为或破坏性行为：这是一个基本的生物需要。了解他们为什么这样做是改变他们行为的第一步，指引他们去合适的地方。",
            "sections": [
              {
                "heading": "Las三种原因的抓痕",
                "body": "猫抓痕是为了视觉地标记领土并使用脚垫的化学物质，为了健康地拉伸肌肉和韧带，以及为了去除死皮。这种行为是本能的，不可以消除，只可以重新引导。"
              },
              {
                "heading": "如何保护家具",
                "body": "在猫已经经常抓痕的地方放置抓痕板。使用合成的化学物质（Feliway）在想要保护的表面。暂时地用布料或不粘的保护膜覆盖家具，以重新引导行为。"
              },
              {
                "heading": "什么类型的抓痕板最有效",
                "body": "每个猫都有自己的偏好：有些猫需要高的垂直抓痕板（让他们能够完全伸展），而其他猫则喜欢水平的。sisal材料通常是最受欢迎的，但有些猫更喜欢纸板或地毯。提供多种选择。"
              }
            ]
          },
          {
            "slug": "amasar",
            "title": "揉捏：踩踏的脚步",
            "intro": "揉捏是踩踏软物体的节奏运动，是猫的行为之一。揉捏是最温柔和充满意义的行为之一。",
            "sections": [
              {
                "heading": "揉捏的起源",
                "body": "小猫揉捏母亲的肚子来刺激奶水的产生。在成年猫中，这是来自幼年时期的舒适行为：他们会揉捏当他们感到安全、快乐和放松。"
              },
              {
                "heading": "¿Qué意味着当他们在你身上摩擦？",
                "body": "这是猫对你最大的爱意和信任的体现。你猫正在对你做出母猫的行为，告诉你它在你的存在下感到非常安全。这是猫的荣誉。"
              },
              {
                "heading": "猫摩擦的变体",
                "body": "有些猫摩擦毯子，玩具或空气。有些猫只摩擦特定的个人。有些猫用四个腿摩擦，有些猫只用前腿。所有这些变体都是正常的。"
              }
            ]
          }
        ]
      },
      {
        "slug": "entrenamiento",
        "label": "训练",
        "topics": [
          {
            "slug": "guia-entrenamiento-casa",
            "title": "你的猫也想学习：在家里玩耍的有趣训练指南",
            "intro": "你认为猫是独立的，不需要训练？完全错了！猫是聪明的，好奇的，特别是他们喜欢做“有意义的事情”。在自然界中，他们会花一整天去捕食和探索；在家里，如果他们只睡觉和吃饭，他们会感到无聊。一个无聊的猫会在沙发上抓抓毛或晚上叫唤。训练你的猫不是让它像军犬一样听令，而是有目的地玩耍。这是连接他们，刺激他们的脑子并加强你们的友谊的绝妙方式。最好的地方在于，你只需要每天花10分钟。",
            "sections": [
              {
                "heading": "**1. **秘密：使用他们的本能，而不是力量",
                "body": "猫不喜欢命令或惩罚。他们喜欢积极的奖励。黄金规则：如果它做得好，给它奖励（一块美味的零食，少量的生鱼片或很多亲密的触摸）。永远不要强迫：如果你拉它或大声叫它，它会闭上心门。训练必须始终是自愿的和有趣的。短会话：5或10分钟足够了。如果你发现它分心，结束会话时让它做一些它已经会做的好事，以便它以良好的心情结束。"
              },
              {
                "heading": "**2. **魔法工具：‘Diana’（目标）",
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
                "body": "不要追求完美。寻找连接。看到你的猫开始寻找你来“工作”（玩耍），看到它盯着你的眼睛，等待指示，看到它的个性闪耀。训练的猫是有信心的、快乐的、更温柔的猫。鼓励你！你的“沙发老虎”有很多潜力。"
              }
            ]
          },
          {
            "slug": "guia-paseos-correa",
            "title": "Paseos Felinos：如何教你的猫走路（无压力）",
            "intro": "带你的猫外出可能听起来奇怪，但这是让它安全地享受户外空气的绝佳方法。此外，这有助于它在 veterinario 的访问或旅行中更放心。关键不是使用力量，而是耐心和糖果。",
            "sections": [
              {
                "heading": "开始之前",
                "body": "确保你的猫有所有的疫苗和微芯片。安全是第一位。"
              },
              {
                "heading": "步骤 1：积极的介绍（Harness 是朋友）",
                "body": "不要突然给你的猫戴上Harness。我们希望它与好事联系起来。闻气味阶段：将Harness 和链条放在它的床上或食盘旁边几天，让它习惯看到和闻到它们。积极的联系：握住Harness，给它闻闻，然后给它一个美味的糖果。轻轻地将它靠近它的身体，而不戴上它，继续给予奖励。"
              },
              {
                "heading": "步骤 2：第一次调整（在家里）",
                "body": "现在我们要试试看。轻轻地将Harness 放在它的肩膀和胸部上。给它奖励，让它闻闻和触摸它。快速上锁Harness。黄金规则：Harness 和猫的身体之间应该有两个手指的空间（既不紧，也不松）。让它戴上Harness 1 到 2 分钟。玩耍它或给它湿食来分散它的注意力。在它开始烦躁或试图脱掉Harness 之前，取下它。每天重复这个过程，逐渐增加时间，如果它表现得放心的话。"
              },
              {
                "heading": "步骤 3：“Ghost”链条",
                "body": "Una vez que tolera el arnés，添加腰带。将腰带连接到内衣内。让腰带拖在地上，让你的猫玩耍或探索。注意不要让它挂在家具或椅子腿上。做这个几天，直到它完全忽略拖着腰带的重量。"
              },
              {
                "heading": "你掌握指挥权（无拉扯）",
                "body": "现在是你的 turno 来持有腰带。轻轻地拿起腰带，跟着你的猫走。保持腰带松散。不要拉它。只跟着它。如果它停下来，等待。如果它向你走来，奖励和赞美！目标是让它理解腰带不会疼痛，也不会限制，而是与你之间的联系。"
              },
              {
                "heading": "柔和指挥和方向",
                "body": "当它已经平静地走着，腰带在手中时，开始引导它。用甜美的声音邀请它跟着你。抛出一些零食，稍微往前走。它在吃零食时，你也向前走。如果它往另一边扯，别拉它。保持腰带的轻微和持续的紧张度。只要猫屈服并看向你或向你走来，立即松开腰带并奖励它。它会学习“屈服于压力=自由和奖励”。"
              },
              {
                "heading": "大出行（外部）",
                "body": "猫可能会对外面的噪音和气味感到非常害怕。开始在一个安静的、封闭的（一个内部花园或安全的花园）地方。坐在地上与它一起。让它自由探索。最初，只跟着它。不要试图标记一条路。如果你看到它害怕（蹲下，试图逃跑），就回家。不要逼迫它。散步应该是有趣的，而不是噩梦。"
              },
              {
                "heading": "安全规则",
                "body": "从不让它独自一人：永远不要把腰带绑在什么上，然后离开。它可能会缠绕、受伤或面对狗或其他危险。门是危险区域：把内衣放在门口远处。把它抱出来。如果你把它放在门口，会每次你打开门时都试图逃跑。忽视愤怒：如果它叫或抱怨让你带它出去，忽视它。只把内衣戴上，然后出去时它安静时。这样它会学习安静是出去的钥匙。尊严地对待它：如果你的猫很害怕，不要坚持。有很多方法可以丰富它的生活（玩具、抓板、观察窗口）。用爱和耐心，你的猫可能会喜欢它的散步。一起享受冒险！"
              }
            ]
          },
          {
            "slug": "clicker-training",
            "title": "Clicker training para gatos",
            "intro": "Contrario于流行的迷思，猫是可以通过正强化训练来训练的。点击训练不仅仅是教猫做些小把戏：它加强了联系，刺激了猫的脑力，减少了行为问题。",
            "sections": [
              {
                "heading": "点击训练是如何工作的",
                "body": "点击标记了猫的正确行为的时刻，并且总是伴随着奖励。猫学着这个特定的声音预示着奖励，这使得它想要重复这个行为。准确的时刻是关键。"
              },
              {
                "heading": "如何开始",
                "body": "首先“装载”点击器：点击并奖励10次，连续不要求任何东西。然后开始使用猫已经自然地做的简单行为：坐下，轻轻地用鼻子碰你的手。每次2-5分钟，2-3次一天。"
              },
              {
                "heading": "更高级的技巧",
                "body": "一旦你掌握了基本技能，你就可以教猫：抬起脚，转身，跳过障碍，自愿进入运输箱，甚至使用通信按钮。只要训练会话短暂且积极，就没有限制。"
              }
            ]
          }
        ]
      },
      {
        "slug": "bienestar-felino",
        "label": "幸福",
        "topics": [
          {
            "slug": "guia-dolor-silencioso",
            "title": "沉默的痛苦：如何知道你的猫是否痛苦并如何帮助它",
            "intro": "猫是隐匿痛苦的高手，它们通过本能隐匿痛苦以避免显得脆弱。学习读懂它们微妙的信号对于成为它们最好的朋友并避免它们的健康恶化而不自知是至关重要的。",
            "sections": [
              {
                "heading": "**1. **微妙的疼痛信号",
                "body": "2. 忘记哭泣或呻吟；猫的疼痛会隐藏在行为变化中：它会躲起来（在床下或橱柜里），变得易怒或异常黏腻，停止美容（毛发混乱或结节）。它也可能过度舔某个特定区域，采用一种紧张的“面包”姿势（头低），或停止跳跃到之前经常去的地方，由于关节疼痛。"
              },
              {
                "heading": "**3. **最常见的疼痛",
                "body": "4. 识别类型有助于诊断：骨关节炎在7岁以上的老年猫中很常见（停止玩耍或爬高处）；口腔疼痛（口腔炎或牙齿断裂）会导致流涎、口臭或停止进食；内脏疼痛（肾脏炎、肾脏或胰腺炎）会产生深度不适和抑郁；神经疼痛（如糖尿病）可能会导致皮肤轻微摩擦时疼痛。"
              },
              {
                "heading": "**5. **多模态兽医治疗",
                "body": "6. 现代治疗使用多种工具：安全的药物，如特定的抗炎药、镇痛药（布普雷诺芬）或神经调节药物（加巴喷丁）。它还包括治疗，如针灸、治疗性激光或物理康复。手术中使用局部阻滞剂。警告：绝不使用人类的布洛芬或对乙酰氨基酚，它们对猫是致命的！"
              },
              {
                "heading": "**7. **你的角色：环境管理",
                "body": "8. 适应环境：安装坡道或阶梯让猫爬上沙发，使用低边缘的吸尘器和Orthopedic床。控制体重对于不超载关节至关重要。此外，减少压力通过保持平静的日常生活和使用必要的pheromones，因为压力会加剧疼痛的感知。"
              },
              {
                "heading": "**9. **特殊情况：年龄和状态",
                "body": "10. 对于幼猫，必须小心剂量，因为他们的器官正在成熟。对于有肾脏或肝脏问题的老年猫，剂量必须仔细调整。对于怀孕或哺乳的猫，只有兽医才能决定治疗，因为许多镇痛药会通过胎盘或乳汁传递。"
              },
              {
                "heading": "No esperes a que se queje",
                "body": "Un gato que no se queja no significa que no sufra. El dolor crónico no tratado empeora la calidad de vida y acelera el envejecimiento. Ante cualquier cambio en la rutina, apetito o carácter, consulta al veterinario. Con tu observación amorosa y ayuda médica, tu gato puede vivir sin sufrimiento incluso con enfermedades crónicas."
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
            "title": "El Estrés en el Gato: Guía completa para entenderlo y ayudarlo",
            "intro": "Cada vez sabemos más sobre el comportamiento felino, y una de las claves principales es el estrés. Muchos problemas de salud y conducta que vemos en casa tienen su raíz aquí. Entender qué le pasa a tu gato es el primer paso para mejorar su calidad de vida.",
            "sections": [
              {
                "heading": "**1. **¿Qué es realmente el estrés?",
                "body": "El estrés no es siempre 'malo'. Es una reacción natural del cuerpo que prepara al gato para adaptarse a cambios (una mudanza, un viaje, la llegada de un bebé). Estrés positivo: Le ayuda a reaccionar y adaptarse. Estrés negativo: Ocurre cuando la situación es demasiado intensa o dura demasiado tiempo. Si el gato no logra adaptarse, el estrés se cronifica y puede derivar en ansiedad. Diferencia clave: Miedo vs. Ansiedad. Miedo: Reacción inmediata ante un peligro real. El corazón se acelera y el gato está listo para huir o defenderse. Es útil para sobrevivir. Ansiedad: El gato siente miedo ante algo que no es peligroso o que no puede controlar. No sabe cómo resolver la situación, así que vive en tensión constante."
              },
              {
                "heading": "**2. **¿Por qué algunos gatos son más sensibles?",
                "body": "No todos los gatos reaccionan igual. Su nivel de tolerancia al estrés depende de dos factores principales: A. Genética y Carácter: Algunos gatos son naturalmente más seguros; otros, más tímidos. Factores como la raza, el sexo y la herencia genética influyen. Un gato inseguro necesitará siempre un entorno más tranquilo y predecible. B. La Socialización Temprana (La ventana crítica): Las primeras 2 a 7 semanas de vida son decisivas. Si hubo contacto humano cariñoso: El gatito aprenderá que las personas son seguras. Será más sociable y resistente al estrés. Si faltó contacto o hubo experiencias negativas: Es muy probable que desarrolle desconfianza y miedo hacia los humanos o nuevos estímulos cuando sea adulto. El entorno importa: Los gatitos criados en ambientes ricos en estímulos (sonidos, texturas, juegos) suelen ser adultos más adaptables."
              },
              {
                "heading": "**3. **¿Qué causa estrés en mi gato?",
                "body": "Los猫需要感受到他们控制环境的感觉。当他们失去控制时，会出现压力。社会因素：日常routine变化。新人、婴儿或其他宠物的到来。家庭的争论或吵架。惩罚或不规则的关注（有时很多，有时什么也没有）。物理因素：搬迁或装修。空间不足或不良组织（例如，沙箱靠近食物）。资源竞争（如果有多只猫和少量食物或沙箱）。"
              },
              {
                "heading": "**4. **警报信号：我如何知道我的猫在压力下？",
                "body": "猫是隐藏疼痛和不适的专家。你需要成为侦探。立即的身体症状：加快呼吸或喘息。极度扩张的瞳孔。颤抖或过度分泌唾液。暂时的呕吐或腹泻（例如，旅行前）。行为变化：姿势：耳朵向后，尾巴低，身体紧张。躲藏：花费大量时间躲藏或躲在家具下。攻击性：咆哮，咆哮或无明显原因攻击。极度警惕：不放松，总是“警戒”。慢性压力迹象（长期）：如果压力不被处理，会出现更严重的问题：强迫性清洁：如此频繁地舔到脱发（精神性脱发）。排泄问题：在沙箱外排泄（标记性或焦虑）。睡眠变化：睡眠少，睡眠差，或者总是保持紧张姿势（不躺在背上或侧边舒适）。饮食变化：过量进食（焦虑）或停止进食。重复行为：追逐尾巴，持续咆哮或漫无目的行走。"
              },
              {
                "heading": "**5. **身体健康的影响",
                "body": "压力不仅仅是“脑子里的问题”；它会损害身体。猫的自发性膀胱炎：膀胱炎症没有细菌感染，直接与压力有关。消化问题：胃炎、慢性呕吐或腹泻。皮肤问题：过度舔伤。肥胖和糖尿病：有时，主人会给猫食物“安慰”，导致肥胖。免疫力下降：压力下的猫更容易生病（感冒、感染）。重要的是：在确定是否是压力之前，应前往兽医。像甲状腺功能亢进、关节疼痛或肿瘤这样的问题可能会模仿压力或焦虑的症状。"
              },
              {
                "heading": "**6. **如何帮助你的猫？（治疗和管理）",
                "body": "目标是恢复安全感和控制感。A. 行为疗法（最重要）：确定压力的原因并改变环境。尊重他们的日常routine。提供安全的高处和躲藏处。每天与他们玩耍以释放紧张。B. 环境辅助：激素：化学物质（例如Feliway）模仿猫的面部激素，传递“安慰”和“熟悉”的信息。帮助减少标记和焦虑。环境丰富：梳子、互动玩具和安全窗户。C. 抗压力饮食：存在特定的饮食或补充剂：三氨基酸：一种前体物质，促进了血清素（幸福激素）的产生。乳制品衍生物：具有自然镇静作用的蛋白质水解物。这些营养物质有助于调节情绪，改善消化，保养皮肤。D. 药物：在严重的焦虑情况下，行为治疗师兽医可能会开处方药。不要自行给猫开药。药物应该是行为治疗的补充，而不是唯一的解决方案。"
              },
              {
                "heading": "结论",
                "body": "压力在猫身上是不可见的，但却很强大。一个平静的猫是一个健康的猫。观察他们的小变化，尊重他们控制的需求，如果你看到警报信号，寻求专业帮助。你的理解可能会完全改变他们的福祉。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "alimentacion",
    "label": "食物",
    "emoji": "",
    "color": "#d4853a",
    "bg": "#fff3e6",
    "description": "营养、饮食和不能吃的东西",
    "subcategories": [
      {
        "slug": "dietas",
        "label": "饮食类型",
        "topics": [
          {
            "slug": "comida-humeda-vs-seca",
            "title": "湿食vs干粮",
            "intro": "这是所有猫主人的最常见和争论的问题之一。答案很重要，因为猫对水有特殊的关系，这使得食物类型直接影响他们的肾脏健康。",
            "sections": [
              {
                "heading": "猫的性质和水",
                "body": "猫在干燥环境中进化，通过捕食获得大部分水分。他们的口渴程度是“调节”为70%的湿度食物。干粮只有10%，这可能导致慢性脱水和肾脏和尿路问题。"
              },
              {
                "heading": "湿食的优点",
                "body": "更好的水分补充、更少的热量、更接近自然饮食、更适合有尿路或肾脏问题的猫。大多数兽医建议作为主要食物。"
              },
              {
                "heading": "干粮的作用",
                "body": "No es malo, pero no debería ser el único alimento. Puede ser útil como complemento, para juguetes dispensadores o como snack. Elige piensos con alto porcentaje de proteína animal (no vegetal) y sin cereales como primer ingrediente."
              }
            ]
          },
          {
            "slug": "dieta-barf",
            "title": "Dieta BARF para gatos",
            "intro": "La dieta BARF (Biologically Appropriate Raw Food) se basa en alimentar al gato con carne cruda, huesos carnosos y vísceras, imitando la dieta de sus ancestros salvajes. Tiene defensores apasionados y detractores con argumentos sólidos.",
            "sections": [
              {
                "heading": "Fundamentos de la BARF",
                "body": "La dieta ideal para un gato BARF incluye aproximadamente 70% de carne magra, 10% de huesos carnosos (nunca cocidos), 10% de vísceras (hígado, corazón) y el 10% restante de otros tejidos. Requiere suplementación cuidadosa con taurina, calcio y vitaminas."
              },
              {
                "heading": "Beneficios reportados",
                "body": "Mejora del pelaje, menor producción de heces, mejor hidratación, dientes más limpios y mayor energía son los beneficios más citados por quienes la practican. Algunos estudios sugieren menor riesgo de obesidad."
              },
              {
                "heading": "Riesgos a considerar",
                "body": "Contaminación bacteriana (Salmonella, Listeria), desequilibrios nutricionales si no se formula correctamente, y riesgo de asfixia con huesos. No se recomienda para gatos inmunodeprimidos, en tratamiento oncológico o mayores con sistemas digestivos comprometidos."
              }
            ]
          }
        ]
      },
      {
        "slug": "prohibidos",
        "label": "Alimentos prohibidos",
        "topics": [
          {
            "slug": "toxicos-comunes",
            "title": "食物有毒给猫",
            "intro": "许多对人类完全安全的食物对猫来说是有害的甚至是致命的。了解这个列表可能会挽救你的宠物的生命。",
            "sections": [
              {
                "heading": "极度危险：严重有毒",
                "body": "洋葱、蒜、韭菜和青葱（无论是生、煮或粉碎）都会破坏红细胞。巧克力和咖啡含有可导致抽搐和死亡的茶碱和咖啡因。葡萄和葡萄干会引起未知原因的急性肾衰竭。"
              },
              {
                "heading": "中度危险",
                "body": "牛奶会引起大多数成年猫的腹泻，因为它们对乳糖不耐受。鳄梨含有对许多动物有毒的苯丙氨酸。任何量的酒精都是有害的。澳大利亚核桃会导致疲劳和发热。"
              },
              {
                "heading": "什么可以作为奖励",
                "body": "小量的无骨鸡肉或火鸡肉、煮熟的三文鱼或生咸肉、煮熟的胡萝卜、南瓜、蓝莓和黄瓜是偶尔的安全小食。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "juego",
    "label": "游戏",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "刺激、玩具和富有成长",
    "subcategories": [
      {
        "slug": "importancia",
        "label": "为什么是必不可少的",
        "topics": [
          {
            "slug": "juego-cachorros",
            "title": "游戏在幼犬：基础",
            "intro": "猫的前六个月是生长发育的关键时期。它在这个阶段学习到的东西将在很大程度上决定它如何与人类和其他动物相处的余生。",
            "sections": [
              {
                "heading": "社会化的窗口",
                "body": "在2到9周的生命中，猫学习什么是正常的世界。与人类、其他猫、家居噪音和各种经历相互作用的幼犬将成为更加安全和适应性的成年猫。"
              },
              {
                "heading": "最常见的错误：手作为玩具",
                "body": "用手或脚玩耍幼犬似乎无害，但会教会它人类皮肤是有效的猎物。等到它长到5公斤时，咬伤和抓伤会很疼痛，且难以纠正。始终使用距离的玩具。"
              },
              {
                "heading": "游戏预防问题",
                "body": "一个不玩够的猫会将其捕食的能量转向有问题的行为：攻击脚踝，破坏物品，转向攻击。每天2次15分钟的游戏，特别是在睡前，是最好的解药。"
              }
            ]
          }
        ]
      },
      {
        "slug": "juguetes",
        "label": "玩具",
        "topics": [
          {
            "slug": "canas-y-plumas",
            "title": "鱼竿和捕食玩具",
            "intro": "带有羽毛，老鼠或虫子吊挂的鱼竿是最有效的玩具，因为它们允许模拟完整的捕食序列。它们在任何猫的玩具库中都是不可或缺的。",
            "sections": [
              {
                "heading": "为什么它们会这么好",
                "body": "它们激活了猫的捕食本能：不规则的运动模仿了真正的猎物。猫可以潜伏，追逐，捕捉并“杀死”。这整个序列释放内啡肽并深深地满足。"
              },
              {
                "heading": "如何正确移动它们",
                "body": "最常见的错误是移动它们太快而不停。真正的猎物会停下来，躲起来，移动在不可预测的角度。模仿它：暂停，躲在一块垫子后面，让它突然出现，让它慢慢移动。"
              },
              {
                "heading": "结束会话",
                "body": "总是允许猫在结束时“捕获”和“杀死”玩具几次。一个从未捕获猎物的猫会感到沮丧。游戏后，一个小零食会完成自然循环：捕食→吃饭→清洁→睡觉。"
              }
            ]
          },
          {
            "slug": "puzzles-de-comida",
            "title": "食物和智力游戏",
            "intro": "食物游戏是最被低估的益处之一。在自然中，一只猫会在6到8小时内捕猎。一个普通的喂食器在30秒内解决了这一需求，使猫缺乏脑力刺激。",
            "sections": [
              {
                "heading": "已证实的益处",
                "body": "减少焦虑和厌倦，减慢进食（预防因进食太快而呕吐），促进认知，促进运动和减少肥胖。"
              },
              {
                "heading": "如何开始",
                "body": "从非常简单的游戏开始：一个有隔间的盘子，一个简单的球状喂食器。如果游戏太难，猫会感到沮丧并拒绝它。逐渐增加难度几周。"
              },
              {
                "heading": "自制游戏",
                "body": "你不需要购买任何东西：一盒纸板的盒子，一个冰碗，一个塑料瓶，或者在杯子下面藏东西都是有效的免费游戏。"
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
    "description": "Cachorro, adulto, senior y sus necesidades",
    "subcategories": [
      {
        "slug": "genetica-felina",
        "label": "Genética y Herencia",
        "topics": [
          {
            "slug": "guia-genetica-colores",
            "title": "Genética Felina: Entendiendo los colores y la herencia (sin complicaciones)",
            "intro": "La genética de los gatos no是魔术，是科学。理解基础会帮助你理解为什么你的猫有特定的颜色和如何在其毛发中工作遗传基因，抛开古老的神话，集中在当前的科学。",
            "sections": [
              {
                "heading": "**1. **解构达尔文的神话",
                "body": "很长时间以来，人们认为_domestication_会自己创造新的品种，但这是错误的。人类并没有创造基因，而是选择它们。在自然界中，奇怪的突变通常会被消除，如果它们不能帮助存活，但在家里，我们保护像长毛或某些颜色的变异是为了美观。目前的所有品种都已经在野生祖先中潜在存在，我们只是通过选择性繁殖加速了它们的出现。"
              },
              {
                "heading": "**2. **如何工作颜色？（基本）",
                "body": "特征取决于基因及其版本，称为“等位基因”。使用黑色（D）和蓝色/灰色（d）的例子：DD（同源基因）会导致黑色猫；Dd（杂合子）会导致黑色猫，但“携带”蓝色基因；dd（同源基因）会导致蓝色猫。黄金法则是黑色优于蓝色：如果至少有一个“D”，猫会是黑色的。要成为蓝色，必须从父母那里继承“d”基因。"
              },
              {
                "heading": "**3. **负责任的选择的重要性",
                "body": "A diferencia于狗，猫的颜色遗传学极为特殊和独特，各个品种之间有很大差异。国际评判员和遗传学家建议严格遵守交配规则，以避免意外结果或健康问题。并非所有颜色交配都是可推荐的，因为有些可能会导致不符合品种标准的图案。"
              },
              {
                "heading": "**4. **FIFE推荐的交配指南",
                "body": "国际猫协会（FIFE）建议避免不同颜色品种之间的随机交配。基本原则是：1. 在同一品种内交配（例如，波斯猫与波斯猫）。2. 遵守毛长标准（例如，短毛与短毛，长毛与长毛）。3. 避免“禁止”交配：如果官方表格中没有列出特定组合的颜色代码，建议避免交配，以避免不可预测或不满意的结果。"
              },
              {
                "heading": "**5. **好奇心：猫是否能看到颜色？",
                "body": "是的，但不是像人类一样。他们的色觉更好于人们之前认为的，但他们区分的色彩细节比人类少。有趣的是，尽管他们看到的颜色更少，我们人类却创造了他们的毛皮中更丰富和复杂的色彩和分布。"
              },
              {
                "heading": "结论：对于饲养者或主人",
                "body": "遗传学是概率：如果您将两个黑色携带蓝色基因的猫交配（Dd x Dd），将会有黑色和蓝色后代。如果您将两个蓝色猫交配（dd x dd），所有后代将是蓝色。如果您将纯黑色猫（DD）与蓝色猫（dd）交配，所有后代将是黑色但携带蓝色基因。了解这些基础知识可以预测后代和负责任地饲养，尊严地遵守健康标准。"
              }
            ]
          }
        ]
      },
      {
        "slug": "reproduccion-felina",
        "label": "猫的繁殖",
        "topics": [
          {
            "slug": "guia-gestacion-gatas",
            "title": "猫的怀孕：简单和自然的解释",
            "intro": "猫的怀孕是一个精确的舞蹈，涉及身体信号、激素和胚胎发育。了解每个阶段可以帮助我们更好地尊严地对待和照顾我们的猫，尊严地对待这个自然过程。",
            "sections": [
              {
                "heading": "¿Cómo funciona el周期的猫？",
                "body": "猫是像一个“季节的钟表”进入繁殖期，当有更多的光照时（春夏）。交配是关键：猫不单独排卵，而是需要身体上的刺激来释放LH激素和让卵子在24-50小时后从卵巢排出。如果没有生殖的交配，可能会有一个“伪妊娠”，她的身体会像怀孕一样大约45天，尽管没有小猫。"
              },
              {
                "heading": "怀孕的旅程，步步为营",
                "body": "交配后的时间表：0-50小时的交配刺激排卵。+30小时的卵子在输卵管受精。5-6天的胚胎（胚胎）到达子宫。8-10天的胚胎变成胚胎。12-13天的胚胎在子宫壁上植入（胚胎在角膜之间旅行以均匀分配）。28-30天开始胎儿阶段，器官形成。最后，64-67天出生小猫。"
              },
              {
                "heading": "激素：指挥者",
                "body": "身体使用关键的信使：LH（开始排卵）；Progesterona P4（保持子宫平静，开始上升并在第30天下降）；Prolactina（帮助保持乳腺体，自第25-30天开始，关键在第二半）；Relajina（软化盆腔组织并帮助保持妊娠，自第20-30天开始，仅在孕妇中上升）；和 Estradiol（准备子宫和乳房，自结尾上升）。"
              },
              {
                "heading": "谁在最后阶段产生Progesterona？",
                "body": "存在科学争论：理论A认为卵巢至关重要，直到最后，而理论B指出胎盘在第二半阶段接管。事实上，如果在第45-50天之前进行手术，妊娠会中断，但在第50天之后可能会继续，这表明胎盘有能力在最后几周内产生Progesterona。是一项团队工作，Prolactina作为协调员。"
              },
              {
                "heading": "快速数据以便回忆",
                "body": "妊娠期：64-67天（≈9周）。小猫数量：1到5只小猫（平均3-4只）。出生体重：85-105克。胎盘是“带状”（形状像腰带）和“内皮-间质”（非常侵入性的），这解释了为什么猫无法轻松捐献血液。"
              },
              {
                "heading": "为什么要知道这些?",
                "body": "对负责任的饲养者来说，能够提供更好的孕期照顾。对 veterinarians来说，了解激素可以诊断问题或以道德的方式终止怀孕。对于主人来说，知道压力或突然的变化会直接影响激素水平，从而影响怀孕的成功率是至关重要的。"
              }
            ]
          }
        ]
      },
      {
        "slug": "gatito",
        "label": "小猫（0–6个月）",
        "topics": [
          {
            "slug": "primeras-semanas",
            "title": "生命的早期阶段",
            "intro": "一个小猫的前两个月是非常激动人心的。这个时候，一个完全依赖的、无助的生物会变成一个灵活、好奇的动物。了解这个阶段对于任何饲养者或收养者来说都是至关重要的。",
            "sections": [
              {
                "heading": "0–2周：新生期",
                "body": "小猫出生时是盲目的、无声的，无法控制体温。它们完全依赖母亲来喂养（每2小时）、保持体温以及刺激排尿和排便。它们出生时唯一有效的感觉是嗅觉。"
              },
              {
                "heading": "2–7周：初级社会化",
                "body": "眼睛在10-16天左右睁开。在这个阶段，神经系统发展得非常快。与人、声音和各种环境的积极经历在这些周内会决定成年后的性格。"
              },
              {
                "heading": "7–12周：逐渐独立",
                "body": "El destete se完成在大约8周。是理想的时期：足够成熟以脱离母亲，但处于人类社会化的窗口期。脱离之前的8周会增加行为问题的风险。"
              }
            ]
          }
        ]
      },
      {
        "slug": "senior",
        "label": "高级（+10年）",
        "topics": [
          {
            "slug": "cuidados-senior",
            "title": "老猫的照顾",
            "intro": "10岁的猫相当于56岁的人。从15岁起，一个人类超过76岁。他们的需求会显著改变，需要在他们的环境和医疗日程中进行适应。",
            "sections": [
              {
                "heading": "预期的身体变化",
                "body": "减少关节灵活性，毛发不再光泽，可能会丢失肌肉质量，睡眠模式变化，减少感官敏锐度和更容易患上慢性疾病。并不是所有的变化都是病理性的：有些只是正常的老化。"
              },
              {
                "heading": "环境的适应",
                "body": "台阶或阶梯来到高处，砂箱入口低，食物和水碗提高以减少颈部紧张，温暖和容易进入的休息区。环境中的细微变化会对他们的生活质量产生重大影响。"
              },
              {
                "heading": "加强的医疗跟踪",
                "body": "从10岁起，检查应该每6个月进行一次，包括血液检查和甲状腺功能检查。早期发现甲状腺功能亢进、肾脏疾病或糖尿病可能会增加他们的生活质量。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "emergencia",
    "label": "紧急情况",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "狗，成年，老年和他们的需求",
    "subcategories": [
      {
        "slug": "emergencias-felinas",
        "label": "急救",
        "topics": [
          {
            "slug": "guia-primeros-auxilios-gatitos",
            "title": "急救小猫：在紧急情况下该怎么做",
            "intro": "急救不能替代兽医，但可以在到达诊所前拯救你的小猫的生命。目标是避免恶化，稳定并安全地转移。",
            "sections": [
              {
                "heading": "**1. **平静和安全",
                "body": "你的安全是第一位的；一个疼痛的猫可能会咬或抓。保持你的脸远离它的爪子和嘴巴。不要用口罩，因为它在有呼吸问题或呕吐的猫身上是不合适的。\"毯子\"技术是理想的：轻轻地包裹它在一块布上，仅留下头部，来平静它并安全地处理它。"
              },
              {
                "heading": "**2. **快速评估（ABCDE规则）",
                "body": "在移动它之前，检查：A（呼吸道）：检查鼻子和嘴巴是否有阻塞。B（呼吸）：观察胸部是否在移动。C（循环）：用干净的绷带压住出血。D（疼痛/固定）：如果怀疑骨折，不要突然移动它。E（暴露）：用干净的布料保护开放伤口。"
              },
              {
                "heading": "**3. **狗的紧急情况",
                "body": "新生儿非常脆弱，面临两个危险：1. 低血糖（糖尿病）：如果出现极度虚弱或牙龈苍白，应用蜂蜜或糖粉在舌下或牙龈上。2. hypothermia：如果小猫感到冷，使用身体热量（穿着衣服）或热水瓶包裹在毛巾中（绝对不能直接接触）。"
              },
              {
                "heading": "安全运输",
                "body": "总是使用耐压的运输箱或箱子，具有通风。怀疑骨折时，使用板条箱或硬纸板作为临时担架。整个旅行过程中，轻声说话，并保持车辆稳定，以减轻他们的压力。"
              },
              {
                "heading": "猫科急救包",
                "body": "随身携带：紧急电话，干净的毛巾或毯子，无菌绷带，蜂蜜或葡萄糖，医疗胶带，以及一个准备好的运输箱。准备好会在紧急情况下产生巨大的差异。"
              },
              {
                "heading": "最后的警告",
                "body": "在前往诊所的路上，打电话给兽医，让他们等待你。绝不使用人类药物（对乙酰氨基酚或布洛芬），因为它们是致命的。快速行动：在紧急情况下，每分钟都很重要，才能挽救生命。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "adopción",
    "label": "Adopción",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "Como adoptar a un gato",
    "subcategories": [
      {
        "slug": "bienvenida",
        "label": "Bienvenida",
        "topics": [
          {
            "slug": "guia-bienvenida-cuidados",
            "title": "Bienvenido a casa: cómo cuidar a tu nuevo gato desde el primer día",
            "intro": "¡Felicidades por la adopción! Acoger a un gato es una experiencia maravillosa, pero también implica responsabilidad. Los primeros días son cruciales para su adaptación. Aquí tienes todo lo que necesitas saber para asegurar su salud, bienestar y una convivencia feliz.",
            "sections": [
              {
                "heading": "**1. **Los Primeros Días: Vigilancia y Adaptación",
                "body": "El cambio de entorno genera estrés, lo que puede bajar las defensas del gato. Visita al veterinario: Lleva a tu gato a su nueva clínica de confianza cuanto antes. Entrega toda la documentación médica previa (vacunas, desparasitaciones) y sigue sus indicaciones. Qué observar: Que coma y beba con normalidad, que tenga energía acorde a su edad, que las heces sean consistentes (algunas blandas iniciales por el cambio de dieta son normales, pero no debe haber diarrea persistente) y ausencia de síntomas como tos, vómitos, mocos o legañas. Ante cualquier duda, consulta a tu veterinario."
              },
              {
                "heading": "**2. **Salud Preventiva: Vacunas, Parásitos y Esterilización",
                "body": "Vacunación: Las vacunas protegen contra enfermedades graves (como la panleucopenia, el complejo respiratorio felino o la leucemia). Sigue el calendario que te indique tu veterinario. La vacuna de la rabia, aunque no siempre es obligatoria legalmente para gatos (depende de la región), está muy recomendada.  Desparasitación: Es fundamental para la salud del gato y de tu familia (zoonosis). Interna: se recomienda cada 3 meses. Externa: vital si el gato sale o tiene acceso a balcones/terrazas. Esterilización: Es la decisión más responsable y saludable. Beneficios: evita camadas no deseadas, reduce el marcaje, disminuye peleas y previene enfermedades graves (tumores de mama, piometras). Mitos: No cambia su personalidad ni los vuelve 'vagos'. Esteriliza a tu gato, sea macho o hembra, interior o exterior."
              },
              {
                "heading": "**3. **Alimentación e Hidratación",
                "body": "适当的食物：使用适合其年龄和身体状况的高质量干粮。避免给予自制食物或人类剩余食物。奖励：使用适当的奖励，以避免肥胖。清水：非常重要，请在家中放置多个水源，远离食物和粪便。一些猫喜欢移动水源。食用湿粮有助于保持水分。禁止：牛奶（大多数成年猫对乳糖不耐受）。天然酸奶或无盐奶酪可以作为偶尔的奖励，但不是必需品。"
              },
              {
                "heading": "卫生和身体护理",
                "body": "猫需要你的帮助在某些方面。梳理：短毛每周一次（每天在脱毛期），长毛每天以避免结毛和毛球。若猫难以排出毛球，请咨询麦芽粉。"
              },
              {
                "heading": "指甲：只剪透明部分，避免血管部分。洗澡：通常不需要，只有在非常脏或医生建议时才需要。",
                "body": "猫砂盒：黄金规则"
              },
              {
                "heading": "如果猫不使用猫砂盒，通常表明有健康问题或压力。数量：规则N+1（猫的数量+1个猫砂盒）。位置：安静、容易到达的位置，远离噪音（洗衣机）和食物。类型：许多猫不喜欢密闭的猫砂盒；试试开放式的大猫砂盒。清洁：每天清除废物，并定期用水和中性肥皂清洗猫砂盒（避免使用漂白剂或氨）。沙子：他们喜欢没有香味和细沙的沙子。",
                "body": "行为和环境丰富"
              },
              {
                "heading": "语言：尾巴高昂表示友好；快速移动尾巴表示不满；耳朵向后表示恐惧。喵喵声可能表示舒适、疼痛或压力。游戏：每天15-20分钟进行模拟狩猎（竹竿、球）。避免使用手或脚。抓痕：提供稳固、高、材料吸引人的抓痕（sisal、木材）。从不因为抓痕惩罚；转移并奖励。垂直性：他们需要观察和躲藏的地方。尊严地对待他们的孤独。",
                "body": "根据年龄的具体建议"
              },
              {
                "heading": "幼猫：社会化（2-8周）是接受人类接触和宠物店访问的关键阶段。教会他们什么可以咬。让他们习惯运输箱，让它在家中打开。保护电缆和窗户。成年猫：耐心，适应可能需要几周时间。使用一个适应室，带着所有资源到达。逐渐进行其他动物的介绍。保持固定的食物和游戏时间表。",
                "body": "微芯片：必须且必须保持最新的数据（在马德里）。事故预防：跳伞猫综合症。安装在窗户和阳台上的抗虫网。从高处坠落可能致命；不要相信它们“能”站起来。每只猫都是一个世界。观察，尊严地对待他们的时间，并在突然变化时始终咨询你的兽医。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "razas",
    "label": "种类",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "猫种",
    "subcategories": [
      {
        "slug": "razas-felinas",
        "label": "猫种",
        "topics": [
          {
            "slug": "guia-completa-razas",
            "title": "猫种指南",
            "intro": "猫种指南",
            "sections": [
              {
                "heading": "猫的世界非常广泛和迷人。虽然所有猫都共享基本的本能，然而每种猫都有独特的性格、照顾需求和体型特征。这个指南将历史记录与现代分类如TICA、CFA和FIFe的分类结合起来，组织成一个有助于你了解哪种猫最适合你的家庭的系统。注意：除了种类之外，个体性格和早期社会化也发挥着至关重要的作用。",
                "body": "历史古典品种"
              },
              {
                "heading": "古老的品种具有明确的性格：阿比西尼亚（埃塞俄比亚/埃及）：活跃、好奇、像狗一样的猫，需要大量的脑力游戏。暹罗（泰国）：极度的叫声、聪明、要求持续的关注。波斯（伊朗）：安静、温柔、沉默；需要每日梳理和清洁脸部。缅因巨猫（美国）：巨大的“温柔巨人”，社交、适合家庭有孩子；需要空间。孟加拉（美国）：高能量、运动员、像小狮子一样；需要每日强烈的刺激。",
                "body": "2.巨型温和的和适应寒冷的品种"
              },
              {
                "heading": "巨型强壮的猫品种。缅因巨猫：其中之一最大的，注重其“林克斯尖”和柔和的叫声。挪威森林猫（Skogkatt）：天生的攀爬者，具有防水的毛皮，独立但温柔。西伯利亚：以其低过敏（产生少量Fel d 1）而闻名，灵活和温柔。拉格达尔：大而肌肉发达，温和的性格；会像一块布一样“倒塌”在你身上。",
                "body": "低保养的猫种：有很多交互。英国短毛：圆脸、紧凑、安静；不喜欢被搬运。俄罗斯蓝：银色毛发和绿色眼睛，腼腆但忠诚。缅甸猫：肌肉发达、重量级，非常人性化。孟买猫：看起来像小黑豹，热爱温暖和怀抱。夏洛特猫：法国古老品种，沉默、狩猎高手，毛发水疱。"
              },
              {
                "heading": "4.独特的变异：耳朵、尾巴和纹理",
                "body": "独特的遗传特征。苏格兰折耳猫：前倾的耳朵，像佛陀一样的姿势；需要关注关节。曼克顿：短腿，外向、好奇。无毛猫：没有毛，友好，渴望热量；需要每周的洗澡。德文雷克斯和康威尔雷克斯：卷曲或波浪状的毛发，调皮、依赖。美国卷耳：耳朵向后。曼克斯和日本尾巴：前者没有尾巴，强壮；后者有尾巴，象征着好运。"
              },
              {
                "heading": "5.少见的品种",
                "body": "少见的品种。奥西卡特：看起来像野生豹子，训练有素、友好。玩虎：模仿老虎，聪明。利科伊：“狼猫”，狼人外貌，好奇、调皮。新加坡猫：世界上最小的品种之一，调皮、爱高处。科拉特：泰国的灰色猫，心脏在额头上，敏感于噪音，象征着好运。"
              },
              {
                "heading": "📝选择你的品种",
                "body": "活动水平：是否是沙发伴侣（波斯）或运动员（孟加拉）？清洁时间：是否需要每天梳理（缅因柯恩）或低保养（俄罗斯蓝）？叫声：如果你喜欢安静，避免西米斯猫，选择拉格多猫。孩子和宠物：缅因柯恩和伯曼猫更为耐心。过敏：没有品种是100%无过敏的，但西伯利亚猫和俄罗斯蓝猫通常更耐受。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "adquisicion responsable",
    "label": "负责任的购买",
    "emoji": "",
    "color": "#5b8db8",
    "bg": "#eef3f8",
    "description": "猫的品种",
    "subcategories": [
      {
        "slug": "adquisición chile",
        "label": "🇨🇱 智利",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-chile",
            "title": "智利的负责任购买指南：法律和伦理",
            "intro": "如果你已经决定某种猫种适合你的生活方式，那么购买它时必须要负责任。智利的动物购买受到21.020法规（智利法规）保护，要求购买者负起责任。购买猫不是购买物品，而是购买一个有复杂需求的生物。",
            "sections": [
              {
                "heading": "**1. **为什么要选择注册的繁殖场?",
                "body": "负责任的繁殖场保护猫种，关注遗传健康，并让猫咪接受社会化。最安全的方法是检查它们是否在智利国家猫协会（RENAGACH）注册，这是WCF和TICA等组织的代表。购买品种纯正的猫有以下优点：遗传证书（确保猫种），健康（遗传测试排除疾病，如Persa中的PKD或Maine Coon中的HCM），以及社会化（在家庭环境中成长，而不是笼子中）。"
              },
              {
                "heading": "猫种参考目录（智利负责任的繁殖场）",
                "body": "建议列表（请检查注册）：Maine Coon：Colitas Arriba，Nahuelhuén（Santiago/La Reina）。Persa/ Himalayo：GatyKey猫舍，Viestmaden猫舍（La Florida）。Ragdoll：Reflejo de Luna（温和的性格）。Somalí：Per-Bast猫舍（唯一专门的）。Sphynx：Ti Voglio Bene，The Kittens House。British Shorthair：Von & Von猫舍（结构坚固）。"
              },
              {
                "heading": "**2. **法律框架：你的权利和责任（21.020法规）",
                "body": "为了使交易合法，繁育者必须满足：微芯片强制（植入和注册）和购买合同。合同必须详细说明健康保证（对FeLV/FIV的阴性检查），绝育承诺和退货条款。你的责任：购买后，你必须将动物注册在国家宠物登记册上，如果数据没有立即更新。"
              },
              {
                "heading": "**3. **检查清单：如何检测出道德的繁育者？",
                "body": "在支付之前，检查：是否允许参观？他们应该保持清洁并与人类接触。交付年龄？绝不接受12周（3个月）以下的猫咪。是否有完整的文档？你应该收到出生证/初级血统证书，疫苗卡（由执业兽医签署）和驱虫证书。是否有透明的卫生？一个好的繁育者会问你情况，以确保一个好的家。"
              },
              {
                "heading": "**4. **合法进口外国种",
                "body": "如果你寻找像Lykoi，Toyger或Bengal的特定血统，进口过程很严格：必须遵守SAG（农业和畜牧业服务）的要求，获得来自原产国的卫生证书和可能的隔离。建议咨询一家专门从事宠物运输的代理商，以避免海关延误。"
              },
              {
                "heading": "注意：宠物工厂！",
                "body": "避免在自由市场、非法市场或社交媒体上发布的广告中购买，尤其是没有可见的物理地址。怀疑那些提供多种品种的地点。这些地方优先考虑利润而不是动物的福祉，导致动物患有慢性疾病和短寿命。你的明智选择有助于根除这种虐待。"
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición argentina",
        "label": "🇦🇷 阿根廷",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-argentina",
            "title": "阿根廷的负责任购买：法律和道德指南",
            "intro": "如果你已经决定某种品种适合你的生活方式，购买它是非常重要的。阿根廷的动物拥有受到国家法律（Ley Nacional 27.592，Ley Alica）和多个地方法（如CABA的Ley 4040）的保护，承认动物是有感知能力的。购买猫不是一种普通的商业交易；它是将一个家庭成员纳入家庭。",
            "sections": [
              {
                "heading": "**1. **为什么要选择一个注册的猫舍？",
                "body": "2. 法律框架：你的权利和责任"
              },
              {
                "heading": "**3. **为什么在阿根廷的交易是合法的，猫舍必须遵守：身份识别（微芯片），在布宜诺斯艾利斯，科尔多瓦和圣费尔南多等地是必须的。购买合同，动物的数据，健康保证，退货条款和绝育承诺。疫苗卡：必须由注册的兽医签名，猫的三重疫苗（如果需要，五重疫苗）必须在规定的年龄内注射。",
                "body": "4. 检查清单：如何在阿根廷检测出一个道德的猫舍？"
              },
              {
                "heading": "**5. **在支付之前，检查：是否允许现场访问？你必须知道猫舍和母猫；不要相信送货在商场。送货年龄？绝对不能在12周（3个月）之前。是否有完整的文档？你必须收到出生证明/血统证书，疫苗卡和发票或收据。是否有购买者的面谈？一个好的猫舍会问你关于猫窗口的网格和你以前的经验。",
                "body": "6. 合法引进外国品种"
              },
              {
                "heading": "**7. **如果你在寻找不常见的品种（Lykoi，Toyger），那么过程由SENASA（国家动物卫生和食品质量服务）管理。要求：原产地的动物卫生证书，狂犬病疫苗和可能的隔离。建议使用专业的宠物运输公司；自己带猫可能会导致延误或严重的罚款。",
                "body": "8. 小心那些“猫舍”和诈骗！"
              },
              {
                "heading": "**9. **不要购买：他们要求你预付款项而没有展示动物（这是一个常见的诈骗；使用实时视频通话）。出售在市场或广场：没有卫生控制的动物通常会很快死亡。他们有“无限”的多种品种的库存，立即可用。价格似乎很低：道德的猫舍的健康和高质量的喂养意味着价格很高，而低价格无法覆盖。",
                "body": "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; usa videollamadas en tiempo real). Venden en ferias o plazas: animales sin control sanitario suelen morir pronto ('gato de la semana'). Tienen 'stock' infinito de múltiples razas disponibles inmediatamente. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y alimentación premium que un precio bajo no cubre."
              },
              {
                "heading": "结论",
                "body": "在阿根廷购买一只纯种猫是一种法律和道德上的责任。选择一个注册在FAAC或国际联合会的繁殖场，你是在支持猫种的保护和动物福利，并且在拒绝黑市猫的虐待。"
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición uruguay",
        "label": "乌拉圭",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-uruguay",
            "title": "乌拉圭的负责任购买指南：法律和道德指南",
            "intro": "如果你已经决定了一种特定的品种适合你的生活方式，那么购买它的方式非常重要。在乌拉圭，动物的拥有受到国家法律18.471（动物保护）的保护，并且在蒙得维的亚等地方受到地方性的法规，如319/011号法令的管理。购买一只猫并不是一种普通的商业交易；它是将一个敏感的家庭成员纳入家庭。",
            "sections": [
              {
                "heading": "**1. **为什么选择注册繁殖场？",
                "body": "在乌拉圭，道德的繁殖场保护品种，关注基因健康和社交化小猫。最安全的方法是检查他们是否与AFU（乌拉圭猫协会）相关联，代表WCF和TICA或FIFe。优点：基因认证（已注册的祖先）、预防性健康检查（PKD或HCM测试）和早期社交化（行为问题的预防）。"
              },
              {
                "heading": "**2. **法律框架：你的权利和责任",
                "body": "在乌拉圭进行安全的交易，繁殖场必须遵守：身份识别（微芯片）按照市政法令（特别是在蒙得维的亚和卡内洛斯）和相应的登记。购买合同：双方的信息、健康保证（FeLV/FIV）、退货条款（禁止弃养）和绝育承诺。疫苗卡：由注册的兽医签署，包括三联疫苗。"
              },
              {
                "heading": "**3. **检查表：如何在乌拉圭检测道德繁殖场？",
                "body": "Antes de pagar, verifica: ¿Permiten visitas presenciales? Debes conocer el cattery y ver a la madre; desconfía de entregas en shoppings. ¿Edad de entrega? NUNCA antes de las 12 semanas (3 meses). ¿Documentación completa? Debes recibir Certificado de Nacimiento/Pedigree de la AFU, carnet de vacunas y factura o recibo. ¿Entrevista al comprador? Un buen criador querrá saber sobre tus protecciones en ventanas y balcones."
              },
              {
                "heading": "在支付前，需要确认：是否允许现场视察？你需要亲自去猫舍看看猫妈妈，避免在购物中心购买。猫的交付年龄？绝对不能在12周（3个月）之前交付。是否有完整的文档？你需要收到AFU的出生证明/血统证明，疫苗卡和发票或收据。是否需要与买家进行面谈？一个好的饲养商会想知道你对窗户和阳台的安全措施。",
                "body": "El proceso es regulado por el MGAP-DIGEGA (Dirección General de Servicios Agrícolas). Requisitos: Certificado zoosanitario internacional, vacunación antirrábica vigente y protocolos de ingreso. Se recomienda contratar una agencia de transporte de mascotas especializada ('Pet Relocation') para gestionar trámites aduaneros y evitar la retención del animal en frontera."
              },
              {
                "heading": "4.异国种族的合法进口",
                "body": "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (panleucopenia). Tienen 'stock' infinito: indica una fábrica donde las hembras son usadas indiscriminadamente. Precios sospechosamente bajos: la crianza ética tiene costos altos en salud y registros que un precio bajo no puede cubrir."
              },
              {
                "heading": "进口过程由MGAP-DIGEGA（农业服务总局）管理。要求：国际动物卫生证明书，有效的狂犬病疫苗和入境协议。建议使用专业的宠物运输代理商（Pet Relocation）来处理海关手续并避免动物在边境被扣留。",
                "body": "Adquirir un gato de raza en Uruguay es una responsabilidad legal y moral. Al elegir un criadero registrado en la AFU, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas."
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición peru",
        "label": "小心那些“猫窝”和诈骗！",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-peru",
            "title": "Adquisición Responsable en Perú: Guía Legal y Ética",
            "intro": "不要购买以下情况：要求你预先支付款项而不展示动物（这是常见的诈骗；要求你进行实时视频通话）。在街头市场或广场上出售：由于卫生条件差，死亡率高（白细胞减少症）。他们有无限的“库存”：这表明他们在无限制地使用母猫。价格异常低廉：良好的育种实践需要高昂的医疗和记录成本，而低廉的价格无法覆盖。",
            "sections": [
              {
                "heading": "**1. **为什么要选择一个注册的猫舍?",
                "body": "2. 法律框架：你的权利和责任"
              },
              {
                "heading": "**3. **为了让交易在秘鲁合法，猫舍必须遵守：身份识别（微芯片）被许多市政当局（如利马大都会、米拉弗洛雷斯、圣伊西多罗）要求作为市政注册的要求。购买和销售合同，包含双方的信息，健康保证（FeLV/FIV），退货条款（禁止抛弃），和绝育承诺。疫苗卡：由执业的兽医签署，包括三联疫苗（如果需要，则为五联疫苗）。",
                "body": "4. 检查清单：如何在秘鲁检测出一个道德的猫舍?"
              },
              {
                "heading": "**5. **在付款之前，检查：是否允许现场访问？你必须见到母猫；不要相信在商场或公园进行的交付。交付年龄？绝不在12周（3个月）之前。✅ 是否有完整的文档？你应该收到FEPERU的出生证明/血统证书，疫苗卡和发票或收据。✅ 是否有与买家的谈话？一个好的猫舍主人会想知道你对窗户和阳台的保护措施，尤其是在利马的高楼建筑中。",
                "body": "6. 合法进口外国猫种"
              },
              {
                "heading": "**7. **过程由SENASA严格监管。要求：国际动物卫生证书，有效的狂犬病疫苗，和入境协议。建议与专门从事宠物运输的代理公司（Pet Relocation）合作，来处理SENASA的程序，并避免在乔治·查维斯机场的延误或严重罚款。",
                "body": "8. 小心那些“猫的工厂”和诈骗！"
              },
              {
                "heading": "**9. **不要购买：如果他们要求你提前支付钱，而没有展示猫咪（这是常见的诈骗；要求实时视频通话）。在街头市场或广场出售：由于缺乏卫生，死亡率很高（猫咪病毒/白细胞减少症）。他们有无限的多种猫种：很可能是猫的工厂。价格异常低：道德的猫舍会花费高昂的健康和高级饲料成本，而一个低价格无法覆盖。",
                "body": "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (moquillo/panleucopenia). Tienen 'stock' infinito de múltiples razas: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y alimentación premium que un precio bajo no cubre."
              },
              {
                "heading": "结论",
                "body": "在秘鲁购买一只纯种猫是一种法律和道德上的责任。选择在FEPERU注册的繁殖场，你不仅是在支持猫种的保护和动物福利，也是在拒绝黑市猫的虐待。记住：在购买之前，也要考虑领养。"
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición bolivia",
        "label": "玻利维亚",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-bolivia",
            "title": "玻利维亚的负责任购买指南：法律和道德",
            "intro": "如果你已经决定了一种适合你生活方式的猫种，那么购买它就应该是负责任的。在玻利维亚，动物的保留和福利是非常重要的，猫种的交易应该遵循道德和法律标准，承认动物的感知能力，禁止虐待和非法交易。",
            "sections": [
              {
                "heading": "**3. **检查清单：如何在玻利维亚发现一个道德的繁殖场？",
                "body": "在进行任何转账或支付之前，检查以下点。如果答案是“否”，就要小心。是否允许现场访问？一个道德的繁殖者会邀请你去他们的住所或猫舍。你应该能够看到母猫和干净安全的环境。如果他们只在商店、购物中心或公园进行交付，就要小心。交付年龄？绝不在12周（3个月）之前。对于情感和免疫系统的成熟非常重要。是否有完整的文档？你应该收到出生证明/血统证明（或由相关猫协会发出的预血统证明）、疫苗和驱虫卡，以及购买凭证或发票。是否有对买家的采访？一个好的繁殖者会问你关于你的家、窗户/阳台的保护（尤其是在高楼建筑的拉帕斯或圣克鲁斯）和你的经验。"
              },
              {
                "heading": "**4. **法律进口外国猫种",
                "body": "如果你在玻利维亚寻找不常见的猫种（如Lykoi、Toyger或Bengal特定血统），进口过程由SENASAG（国家农业卫生和食品安全服务）严格监管。要求：国际动物卫生证明书、有效的狂犬病疫苗和入境协议的遵守。隔离：根据原产国和卫生状况，可能需要隔离或额外检查。建议：总是雇用一家专业的宠物运输公司（Pet Relocation）来处理SENASAG的程序，以避免国际机场（埃尔阿尔托、维鲁维鲁等）上的延误或严重罚款。"
              },
              {
                "heading": "注意：黑市猫和骗局！",
                "body": "在玻利维亚，非法商业活动在在线平台和非正式集市上很常见。 🚩 不要购买：他们要求您提前支付标识费（这是一个常见的骗局；他们要求您进行实时视频通话）。 在街头集市或广场上出售：暴露在外的猫咪通常不卫生，容易生病（白细胞减少症、白血病），并且死亡率很高。 他们有“无限库存”：很可能是饲养场，他们无限制地使用雌性动物。 价格异常低：负责任的饲养意味着高昂的医疗费用和记录，这个低价格无法承担。"
              },
              {
                "heading": "结论",
                "body": "在玻利维亚购买一只猫是法律和道德上的责任。 选择AFUBO或受认可的协会注册的饲养场，你就支持了品种的保护和动物福利，并拒绝了非法饲养场的虐待。 记住：在购买之前，也要考虑收养。 全国各地都有许多组织救助了猫咪或混血猫咪，寻求一个充满爱的家。"
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición colombia",
        "label": "哥伦比亚",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-colombia",
            "title": "哥伦比亚",
            "intro": "负责任的购买在哥伦比亚：法律和道德指南",
            "sections": [
              {
                "heading": "如果你已经决定了一种特定品种适合你的生活方式，那么购买它的方式很重要。 在哥伦比亚，动物的保有受到2016年第1774号法律的保护，该法律将动物视为感知能力强的非物质存在，并禁止虐待和遗弃。 此外，在城市如波哥大、梅德林和卡利，还有地方性规定。",
                "body": "1. 为何选择注册饲养场？"
              },
              {
                "heading": "哥伦比亚的负责任饲养场保护品种，关注遗传健康和社交化小猫。 确认其成员资格是最可靠的方法之一，通过ASOFELGA（哥伦比亚猫主导协会）来代表WCF和TICA或FIFe。 优势：遗传证书（官方祖先）、预防性健康检查（PKD或HCM测试）和早期社交化（恐惧和攻击性预防）。",
                "body": "2. 法律框架：你的权利和义务（Alica法）"
              },
              {
                "heading": "**3. **检查清单：如何在哥伦比亚检测出一家道德的猫舍？",
                "body": "Antes de支付， verifica：✅ 是否允许现场访问？你必须亲自去猫舍，看到母猫；要警惕那些在商业中心或公园内进行交付的猫舍。✅ 交付年龄？绝不在12周（3个月）之前。对于猫的情感和免疫系统的成熟至关重要。✅ 是否有完整的文档？你应该收到ASOFELGA的出生证明/血统证明，疫苗卡和发票或收据。✅ 是否有购买者的面谈？一家好的猫舍会想知道你对窗户和阳台的保护措施，尤其是在高楼建筑的波哥大或梅德林。"
              },
              {
                "heading": "**4. **非常规品种的合法进口",
                "body": "进口过程由哥伦比亚农业和畜牧业研究所（ICA）严格监管。要求：国际动物卫生证书，有效的狂犬病疫苗和入境协议的遵守（ICA决议）。建议与专门从事宠物运输的代理公司（Pet Relocation）签约，处理ICA的程序并避免机场（埃尔多拉多，何塞玛利亚科尔多瓦等）或严厉罚款。"
              },
              {
                "heading": "⚠️ 小心那些“猫舍工厂”和诈骗！",
                "body": "🚩 不要购买以下情况：他们要求你预先支付费用而没有展示宠物（常见的诈骗；要求实时视频通话）。他们在街头市场或广场上出售：由于卫生问题（流感/白细胞减少症），高死亡率。他们有无限的多种品种“库存”：可能是猫舍的生产线。价格异常低：道德的猫舍意味着高昂的健康和记录成本，低价无法承担。"
              },
              {
                "heading": "结论",
                "body": "在哥伦比亚购买一只猫是一种法律和道德责任。选择ASOFELGA注册的猫舍，你是在支持品种的保存和动物福利，同时拒绝了黑猫舍的虐待。"
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición ecuador",
        "label": "🇪🇨 厄瓜多尔",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-ecuador",
            "title": "厄瓜多尔的负责任购买：法律和道德指南",
            "intro": "如果你已经决定要买一只特定的品种猫，购买它的方式非常重要。厄瓜多尔的动物保护法由Código Orgánico de Bienestar Animal（COBA）管理，2022年颁布。该法案承认动物的感知能力，禁止虐待、弃置和严格监管饲养和商业化。",
            "sections": [
              {
                "heading": "为什么要选择一个注册的繁殖场？",
                "body": "在厄瓜多尔，伦理的繁殖场保护品种，关注猫的健康和社会化。要确定它们是合法的繁殖场，可以检查它们是否与认可的猫协会（WCF，TICA）注册并获得了所在地的许可。优点：遗传证书（官方祖先），预防性健康检查（PKD或HCM），早期社会化（防止恐惧和攻击性）。"
              },
              {
                "heading": "你的权利和责任（COBA）",
                "body": "在厄瓜多尔，交易必须遵守以下法律要求：身份识别（微芯片）由COBA和当地法规（基多，瓜亚基尔，库恩卡）要求，必须在当地登记。获得了所在地的许可证。购买合同必须包括：交易双方的信息，健康保证（FeLV/FIV），退货条款（禁止弃置），以及绝育承诺。疫苗接种卡：由注册的兽医签署。"
              },
              {
                "heading": "如何在厄瓜多尔识别一个伦理的繁殖场？",
                "body": "在购买之前，检查以下事项：是否允许现场访问？你必须见到猫的母亲；如果不允许，那么就要警惕。交付年龄？绝对不能在12周（3个月）之前交付。对于猫的成长非常重要。是否有完整的文档？你必须收到猫的出生证明/血统证书，疫苗卡，发票或收据（税收遵守）。是否有购买者访谈？一个好的繁殖场会问你有关猫的安全问题，例如在窗户和阳台上，尤其是在基多或瓜亚基尔的高楼建筑中。"
              },
              {
                "heading": "厄瓜多尔的外国品种猫进口",
                "body": "进口过程由AGROCALIDAD（植物和动物卫生管理局）严格监管。要求：国际动物卫生证书，有效的狂犬病疫苗接种，入境协议。建议使用专业的宠物运输公司（Pet Relocation）来处理手续，避免机场延误（马塞亚尔苏克雷机场，何塞何乔金奥尔梅多机场等）或严重的罚款。"
              },
              {
                "heading": "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
                "body": "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; exige videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (panleucopenia, leucemia). Tienen 'stock' infinito de múltiples razas: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y registros que un precio bajo no puede cubrir。"
              },
              {
                "heading": "Conclusión",
                "body": "Adquirir un gato de raza en Ecuador es una responsabilidad legal y moral bajo el COBA. Al elegir un criadero registrado y con permisos municipales, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas. Recuerda: Antes de comprar, considera también la adopción。"
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición venezuela",
        "label": "🇻🇪 Venezuela",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-venezuela",
            "title": "Adquisición Responsable en Venezuela: Guía Legal y Ética",
            "intro": "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Venezuela, la tenencia de animales está protegida por la Ley de Protección a la Fauna Doméstica Libre y en Cautiverio y diversas ordenanzas municipales que promueven la tenencia responsable, prohíben el maltrato y el abandono。",
            "sections": [
              {
                "heading": "**1. **¿Por qué elegir un Criadero Registrado?",
                "body": "Los criaderos éticos en Venezuela preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a la Federación Canina de Venezuela (FCV) en su división felina, o a asociaciones como ASOVEFEL (Asociación Venezolana de Felinos), vinculadas a la WCF o TICA. Ventajas: Certificación Genética (ancestros oficiales), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de miedos y agresividad)。"
              },
              {
                "heading": "**2. **Marco Legal: Tus Derechos y Deberes",
                "body": "Para que la transacción sea legal en Venezuela, el criadero debe cumplir con: Identificación (Microchip) exigido o recomendado en alcaldías como Chacao, Baruta, El Hatillo (Caracas), Valencia y Maracaibo para el registro municipal. Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario colegiado (CVZ), con las vacunas triples felinas al día según la edad。"
              },
              {
                "heading": "**3. **检查清单：如何在委内瑞拉检测出一个合法的猫舍？",
                "body": "前付款前，请检查：是否允许现场参观？你必须亲眼看看猫舍和母猫；对送货到商店或购物中心的猫舍要警惕。送货年龄？绝对不能在12周（3个月）之前。对于猫的成长发育至关重要。是否有完整的文档？你应该收到猫的出生证明/血统证明、疫苗卡和发票。是否有对买家的采访？一个好的饲养者会想知道你对窗户和阳台的猫的保护措施，尤其是在高楼建筑的卡拉卡斯或瓦伦西亚。"
              },
              {
                "heading": "**4. **导入法律的非洲猫",
                "body": "这个过程由INSAI（国家农业卫生研究所）严格监管。要求：国际动物卫生证书、有效的狂犬病疫苗和入境协议。建议你雇用一家专业的宠物运输公司（Pet Relocation）来处理与INSAI的交易，并避免在西蒙·玻利瓦尔国际机场的延误或严厉的罚款。"
              },
              {
                "heading": "小心那些“猫舍工厂”和骗局！",
                "body": "不要购买以下情况：他们要求你提前支付猫舍费用而不让你见到猫（这是一个常见的骗局；不要转移任何钱或玻利瓦尔币，除非你通过实时视频通话）。他们在街头市场或广场上出售：由于卫生条件差，死亡率高（白细胞减少症、白血病）。他们有无限的多种品种的猫：很可能是猫舍的非法工厂。价格异常低：负责任的猫舍的成本高昂，因为它们需要进口高质量的食物，而低价根本无法覆盖。"
              },
              {
                "heading": "结论",
                "body": "在委内瑞拉购买猫是一种法律和道德责任。选择在ASOVEFEL注册或与国际联合会合作的猫舍，你是在支持猫种的保护和动物福利，同时拒绝非法猫舍的虐待。记住：在购买之前，也要考虑领养。"
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición paraguay",
        "label": "🇵🇾  巴拉圭",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-paraguay",
            "title": "巴拉圭的负责任购买：法律和道德指南",
            "intro": "你已经决定要购买一只特定的品种猫，购买时要负责任。 在巴拉圭，动物的拥有受到《动物保护法》第483/95号法案和《动物福利法》第6541/20号法案的保护，这些法案承认动物是有感知能力的，禁止虐待和遗弃，规范了负责任的拥有。",
            "sections": [
              {
                "heading": "为什么要选择注册的繁殖场？",
                "body": "道德的繁殖场在巴拉圭保护品种，关注遗传健康和社交化猫咪。要识别它们，最安全的方法是检查他们是否注册在FELPAR（巴拉圭猫协会）或WCF或TICA。优点：遗传证书（已注册的祖先）、预防性健康检查（PKD或HCM测试）和早期社交化（预防行为问题，如恐惧或攻击性）。"
              },
              {
                "heading": "巴拉圭的法律：你的权利和义务",
                "body": "在巴拉圭进行安全交易，繁殖场必须遵守："
              },
              {
                "heading": "* 在阿斯昆森、卢克、圣洛伦索、拉姆巴雷等市实施微芯片识别",
                "body": "* 购买合同，包括交易双方的信息、健康保证（FeLV/FIV）和退货条款（禁止遗弃）以及绝育承诺"
              },
              {
                "heading": "* 由注册在CONAMEVET（巴拉圭国家兽医委员会）的兽医签署的疫苗卡：三联疫苗",
                "body": "检查清单：如何在巴拉圭识别道德的繁殖场"
              },
              {
                "heading": "在支付前，检查：",
                "body": "NO COMPRES SI: Te piden señas por adelantado sin mostrar el animal (estafa común; no transfieras dinero ni giros sin videollamada en tiempo real). Venden en ferias callejeras o plazas: alta mortalidad por falta de higiene (panleucopenia, leucemia). Tienen 'stock' infinito: probable fábrica de explotación. Precios sospechosamente bajos: la crianza ética implica costos altos en salud y alimentación premium que un precio bajo no cubre。"
              },
              {
                "heading": "Conclusión",
                "body": "Adquirir un gato de raza en Paraguay es una responsabilidad legal y moral bajo la Ley de Bienestar Animal. Al elegir un criadero registrado en FELPAR, estás financiando la preservación de la raza y el bienestar animal, y diciendo 'no' al maltrato de las fábricas clandestinas. Recuerda: Antes de comprar, considera también la adopción。"
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
            "intro": "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable. En Brasil, la tenencia de animales está protegida por la Lei Federal nº 14.064/2020 (Lei Sansão) y por la Lei Arouca (Lei nº 11.794/2008). Comprar un gato no es una transacción comercial cualquiera; es incorporar un miembro sensible a la familia。",
            "sections": [
              {
                "heading": "**1. **¿Por qué elegir un Criadero Registrado?",
                "body": "Los criaderos éticos en Brasil preservan la raza, cuidan la salud genética y socializan a los gatitos. La forma más segura de identificarlos es verificar su afiliación a GATOS do BRASIL (representante oficial de la WCF), o a clubes de TICA o FIFe. Ventajas: Certificación Genética (ancestros oficiales), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana ('home raised') para prevenir problemas de conducta。"
              },
              {
                "heading": "**2. **Marco Legal: Tus Derechos y Deberes",
                "body": "Para que la transacción sea legal en Brasil, el criadero debe cumplir con: Identificación (Microchip) exigido en ciudades como São Paulo, Río de Janeiro y Curitiba para el registro municipal (RAA). Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (abandono é crime) y compromiso de esterilización. Carnet de Vacunación: Firmado por un Médico Veterinario registrado en el CRMV, con las vacunas V3/V4/V5 al día según la edad。"
              },
              {
                "heading": "**3. **检查清单：如何在巴西检测出一个道德的猫舍？",
                "body": "前提是任何转账（PIX）之前，检查：是否允许现场访问？你必须亲眼见到猫舍和母猫；要警惕那些在公园或购物中心送货的猫舍。猫的交付年龄？绝不早于12周（3个月）。是否有完整的文档？你应该收到来自巴西猫协会/WCF的出生证明/血统证书、疫苗卡和发票或收据。是否有对买家的访谈？一个好的饲养员会想知道你的“保护网”（在巴西高楼建筑中至关重要）。"
              },
              {
                "heading": "**4. **合法进口外国种",
                "body": "这个过程由MAPA（农业、畜牧业和供应部）严格监管，通过Vigiagro系统。要求：国际动物卫生证书、有效的狂犬病疫苗和入境协议。建议雇用一家专业的宠物运输公司（Pet Relocation）来避免宠物在机场如瓜鲁鲁斯或加利奥被扣留。"
              },
              {
                "heading": "注意：猫舍和诈骗！",
                "body": "不要购买："
              },
              {
                "heading": "如果他们要求你提前通过PIX支付而没有展示宠物（这是一个常见的诈骗；要求实时视频通话）。在街头市场或广场上出售：由于卫生问题，高死亡率。他们有无限的多种品种的“库存”：这是可能的猫舍。价格异常低：道德的饲养意味着高昂的健康和记录成本，低价格无法承担。",
                "body": "结论"
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición españa",
        "label": "在巴西购买一只猫是法律和道德上的责任，受Lei Sansão和Lei Arouca法规约束。选择GATOS do BRASIL注册的饲养场，你是在支持品种保护和动物福利，同时拒绝了黑猫窝的虐待。记住：在购买之前，也要考虑领养。",
        "topics": [
          {
            "slug": "guia-adquisicion-responsable-espana",
            "title": "🇪🇸 西班牙",
            "intro": "如果你已经决定某种特定的品种适合你的生活方式，那么购买它的时候一定要负责任。 在西班牙，新的动物福利法（Ley 7/2023）已经实施，这项法律严格禁止在商业场所出售狗、猫和貂，所有的购买都必须从注册的饲养商或动物保护组织处购买。",
            "sections": [
              {
                "heading": "**1. **为什么选择注册饲养商（业余爱好者）？",
                "body": "在西班牙，道德的饲养商必须在他们的自治区注册为“动物园”或“业余爱好者”。最安全的方法是检查他们是否与AFEC（西班牙猫协会）或其他被认可的联合会（如FIFe）相关联。优点：法律保障（只有注册的饲养商才能在新法律下出售），遗传健康（PKD或HCM的测试）和社会化（确保平衡的性格）。"
              },
              {
                "heading": "**2. **法律框架：你的权利和义务（Ley 7/2023）",
                "body": "为了在西班牙进行合法交易，饲养商必须遵守：微芯片强制要求（在自治区的RIAC注册之前交付）。健康文件：欧洲护照或疫苗卡（Trivalente）和定期驱虫。强制性的购买合同，包括动物园的编号，健康保证和退货条款。禁止在宠物店出售：在宠物店出售是非法的，只有饲养商或通过领养才能进行销售。"
              },
              {
                "heading": "**3. **检查表：如何在西班牙识别道德的饲养商？",
                "body": "在支付之前，检查：是否允许参观？你必须知道他们的住所或猫舍，并见到母亲；不要相信在停车场交付。交付年龄？绝对不能在12周（3个月）之前交付。是否有完整的文件？AFEC/WCF或类似的官方血统证明，已经注册的微芯片和由执业兽医签署的卡片。是否透明？一个好的饲养商会问你住所的情况（窗户网在高楼上）并不会急于出售。"
              },
              {
                "heading": "**4. **合法从欧盟和第三国进口",
                "body": "从欧盟：欧洲护照，ISO微芯片和狂犬病疫苗（至少21天的历史）。从欧盟以外（英国，美国）：官方的动物卫生证书，抗体认证（如果适用）和农业、渔业和食品部（MAPA）的要求。建议使用专门的运输代理人以避免隔离或返还。"
              },
              {
                "heading": "注意：谨防欺诈和非法交易！",
                "body": "NO COMPRES SI: Te piden dinero por adelantado sin ver al gato (exige videollamada en tiempo real). No tienen número de Núcleo Zoológico visible: es obligatorio exhibirlo en todo anuncio. Entregan cachorros menores de 3 meses: es ilegal y cruel. Precios sospechosamente bajos: suelen indicar 'granjas de cachorros' importadas ilegalmente de Europa del Este sin garantías de salud ni ética。"
              },
              {
                "heading": "Conclusión",
                "body": "Adquirir un gato de raza en España es un acto regulado y protegido。 Al elegir un criador afiliado a la AFEC y con Núcleo Zoológico, estás cumpliendo la Ley de Bienestar Animal, financiando la preservación de la raza y evitando el sufrimiento animal。 Recuerda: Antes de comprar, considera la adopción en protectoras específicas como Rescate Persa o Maine Coon Rescue。"
              }
            ]
          }
        ]
      },
      {
        "slug": "adquisición mexico",
        "label": "🇲🇽 México",
        "topics": [
          {
            "slug": "guia-tenencia-responsable-mexico",
            "title": "Tenencia Responsable en México: Guía Legal y Ética para Adquirir un Gato",
            "intro": "Si has decidido que una raza específica se adapta a tu estilo de vida, es fundamental adquirirla de manera responsable。 En México, la protección animal se rige por la Ley Federal de Protección Animal y por leyes estatales y locales (como la de CDMX o Jalisco), que reconocen a los animales como seres sintientes, prohíben el maltrato y regulan la tenencia responsable。",
            "sections": [
              {
                "heading": "**1. **¿Por qué elegir un Criadero Registrado?",
                "body": "Los criaderos éticos en México preservan la raza, cuidan la salud genética y socializan a los gatitos en entorno familiar。 La forma más segura de identificarlos es verificar su afiliación a la AMFE (Asociación Mexicana Felina), representante de la WCF y TICA。 Ventajas: Certificación Genética (ancestros registrados), Salud Preventiva (tests de PKD o HCM) y Socialización Temprana (prevención de miedos y agresividad)。"
              },
              {
                "heading": "**2. **Marco Legal: Tus Derechos y Deberes",
                "body": "Para que la transacción sea legal en México, el criadero debe cumplir con: Identificación (Microchip) obligatorio en entidades como CDMX (registro RECAN), Edomex, Jalisco y Nuevo León。 Contrato de Compraventa con datos de las partes, garantías de salud (FeLV/FIV), cláusula de devolución (el abandono es delito) y compromiso de esterilización。 Cartilla de Vacunación: Firmada por un Médico Veterinario Zootecnista con cédula profesional vigente, con las triples felinas al día。"
              },
              {
                "heading": "**3. **检查清单：如何在墨西哥检测出一个道德的猫舍？",
                "body": "Antes de支付， verifica：是否允许现场访问？你必须了解猫舍并见到母亲；要警惕商业广场或地铁的送货。送货年龄？绝对不能在12周（3个月）之前。是否有完整的文档？出生证明/血统证明（AMFE/WCF或TICA）、疫苗卡和发票或收据。✅ 是否与买家进行了谈话？一个好的饲养者会想知道你对窗户和阳台的保护措施，尤其是在墨西哥城、蒙特雷或瓜达拉哈拉的公寓中。"
              },
              {
                "heading": "**4. **导入法律的异国种族",
                "body": "该过程由SENASICA（农业部）严格监管。要求：国际动物卫生证书、有效的狂犬病疫苗和入境协议。建议与一家专门从事宠物运输的代理公司（Pet Relocation）签约，以避免在墨西哥城或坎昆机场的延误。"
              },
              {
                "heading": "¡Cuidado con las 'Fábricas de Gatos' y Estafas!",
                "body": "不购买以下情况：要求提前支付而不展示动物（常见的诈骗；要求实时视频通话）。在市场或街头出售：由于卫生条件差（感染性腹泻/白细胞减少症），死亡率很高。他们有无限的“库存”：可能是秘密的猫舍。价格异常低：道德的饲养意味着高昂的健康和记录成本，低价无法覆盖。"
              },
              {
                "heading": "结论",
                "body": "在墨西哥购买一只猫是法律和道德上的责任。选择AMFE注册的饲养者，你正在支持种族的保存和动物福利，并拒绝秘密猫舍的虐待。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "historia",
    "label": "历史起源和扩散",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "刺激、玩具和丰富",
    "subcategories": [
      {
        "slug": "historia-felina",
        "label": "起源的核心",
        "topics": [
          {
            "slug": "origen-encuentro-nilo",
            "title": "尼罗河上的埃及",
            "intro": "家猫的历史始于9,000年前在尼罗河谷的埃及。尽管有许多种类的猫科动物，但我们的现有猫（包括异国的猫）都来自一种单一的亚种：北非野猫或Felis lybica。人类和猫之间的“初恋”并不是有意为之，而是一种便利的结合：",
            "sections": [
              {
                "heading": "问题、解决方案和协议",
                "body": "问题：埃及人依赖农业，储存谷物在大仓库中。这些仓库吸引了大量的老鼠和耗子。解决方案：猫走近村庄，受到大量啮齿动物的吸引。协议：人类欣然接受了“害虫控制”的服务，开始了一种互利的共生关系。"
              },
              {
                "heading": "从猎人到神",
                "body": "随着时间的推移，猫从简单的谷物仓库守卫者变成了家庭成员的一部分。埃及人把它们神化了，联系到女神巴斯特（代表温柔和保护）和太阳神拉。它们的重要性如此之大，以至于发现了数百万只猫的棺材和豪华墓葬，如奥西里斯·塔马特，埃及王子最喜欢的猫。"
              },
              {
                "heading": "世界征服：罗马和北欧人",
                "body": "尽管文件重点关注尼罗河的起源，但历史并没有停止。当猫从埃及出发去征服新的大陆时，猫在罗马的故事就开始了：罗马人看到埃及猫的有效性后迅速采用了它们。对于他们来说，猫是自由和独立的象征。他们把猫带到了整个罗马帝国（欧洲，北非和英国），主要用于保护军营和家中的鼠害。维京人的猫旅行者：在中世纪，维京人在猫的扩散中发挥了关键作用。他们是优秀的航海家，总是带着猫在船上（尤其是“挪威森林猫”），以保护食物供应在漫长的航行中。由于维京人的努力，猫来到了像斯堪的纳维亚和美洲这样的遥远的地方。"
              },
              {
                "heading": "现代猫",
                "body": "在欧洲中世纪的黑暗时期——猫被不公正地迫害后——猫恢复了地位，因为它们在抵御传播疾病如黑死病的疾病的害虫方面发挥了关键作用。如今，现代猫仍然保持着独立的猎食者本能和自给自足的本质，使其独一无二。尽管现在有几百种不同颜色和毛色，但在它们的基因中仍然流淌着那条小沙漠猫的心脏，它决定了几千年前与人类生活在一起是好主意。"
              }
            ]
          },
          {
            "slug": "corazon-origen-egipto",
            "title": "全球扩散",
            "intro": "家猫并不是在尼罗河上偶然出现的。农业的定居是关键。埃及是世界的“粮仓”，而谷物库存是老鼠的磁铁。",
            "sections": [
              {
                "heading": "宗教转变",
                "body": "猫从有用盟友变成了神圣存在。女神巴斯特特以猫头的形象出现，象征着家庭、丰收和保护。杀死猫在古埃及是被判以死刑的罪行。"
              },
              {
                "heading": "奢华和尊严",
                "body": "文件突出了猫奥西里斯·塔马特的例子，它是图特摩西王子的一只宠物。它被葬在石灰岩的棺材里，裹在细麻布上，戴着珠宝，表明埃及王室认为猫是真正的生活伴侣和“来世”的伴侣。"
              },
              {
                "heading": "禁止出口",
                "body": "埃及人对猫的爱好如此之深，以致于他们严格禁止将猫带出国境。然而，这并没有阻止猫的“秘密”扩散。"
              },
              {
                "heading": "大扩张：如何到达其他大陆？",
                "body": "猫走向世界的主要途径是通过海上商业航线：1. 腓尼基人：第一批走私者。他们是地中海的伟大航海家。据说，他们从埃及走私猫，卖给他们的商业航线。他们的努力使猫来到希腊岛屿、意大利半岛和西班牙南部，远远早于预期。2. 罗马：猫在军团中。当罗马人征服埃及时，他们对猫着迷（他们更喜欢猫而不是之前用于捕捉老鼠的貂）。在扩张他们的帝国时，军团士兵将猫带在他们的车队和船上，以保护补给。这样，猫就进入了欧洲中部和英国。3. 亚洲和丝绸之路。通过陆上商业航线，猫来到亚洲中部。在中国和日本等国家，他们受到的尊敬与埃及一样。在日本，例如，佛教僧侣用猫来保护纸质手稿免受鼠害的侵害。4. 美洲征服。直到欧洲探险家时代（15世纪和16世纪），猫才来到美洲。在克里斯托弗·哥伦布或后来的五月花号等船上，猫是必不可少的船员。他们的任务是防止老鼠吃掉船员的食物，并在船上有限的空间中传播疾病。"
              },
              {
                "heading": "进化的总结",
                "body": "非洲：生物起源（Felis lybica）。欧洲：由腓尼基人和罗马人引入；后来由维京人向北扩散。亚洲：通过丝绸之路和海上贸易来到印度和日本。美洲和大洋洲：在欧洲殖民者的船上来到，几个世纪后。"
              },
              {
                "heading": "结论",
                "body": "如今，那个小猫守护着尼罗河上的谷物，现在出现在所有大陆上（除了南极洲），证明它是人类历史上最成功的旅行者之一。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "a",
    "label": "刺激、玩具和富有成分的生活",
    "emoji": "",
    "color": "#9b6bb5",
    "bg": "#f3eef8",
    "description": "为什么是必不可少的",
    "subcategories": [
      {
        "slug": "importancia",
        "label": "游戏在幼犬中：基础",
        "topics": [
          {
            "slug": "juego-cachorros",
            "title": "猫的前六个月是发展的关键时期。它在游戏中学习到的东西将在很大程度上决定它如何与人类和其他动物相处其余的生命。",
            "intro": "社会化的窗口",
            "sections": [
              {
                "heading": "在2到9周的生命中，猫学会了什么是正常的世界。与人类、其他猫、家居噪音和各种经历的交互会使一个幼犬成长为一个更安全和更适应的成年猫。",
                "body": "最常见的错误：手作为玩具"
              },
              {
                "heading": "用手或脚玩幼犬似乎无害，但它会教会猫咪人类皮肤是有效的猎物。当那只小猫长到5公斤时，咬和抓会很疼痛，而且难以纠正的行为。始终使用有距离的玩具。",
                "body": "游戏预防问题"
              },
              {
                "heading": "Juego como prevención de problemas",
                "body": "一个不玩够的猫会将狩猎的能量转移到问题行为中：攻击脚踝，破坏物品，转移的攻击行为。每天玩2次15分钟的游戏，尤其是在睡前，会是最好的解药。"
              }
            ]
          }
        ]
      }
    ]
  }
];
