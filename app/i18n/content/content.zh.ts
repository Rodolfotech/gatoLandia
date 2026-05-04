import { Category } from '../../data/cats';

export const categories: Category[] = [
  {
    slug: "salud",
    label: "健康",
    emoji: "",
    color: "#7a9e7e",
    bg: "#eef4ef",
    description: "预防、疾病和医疗护理",
    subcategories: [
      {
        slug: "prevencion",
        label: "预防",
        topics: [
          {
            slug: "vacunacion",
            title: "猫咪疫苗接种",
            intro: "疫苗接种是保护猫咪免受严重疾病的最有效工具。",
            sections: [
              { heading: " mandatory 疫苗", body: "猫三联疫苗（猫鼻气管炎、杯状病毒和猫瘟）是任何方案的基础。在8、12和16周龄时接种。" },
              { heading: "推荐的可选疫苗", body: "猫白血病(FeLV)疫苗非常推荐给外出猫。狂犬疫苗在许多国家是强制性的。" },
              { heading: "如果错过剂量怎么办？", body: "如果成年猫超过3年未接种，建议重复初始系列。接种疫苗前请务必咨询兽医。" },
            ],
          },
          {
            slug: "desparasitacion",
            title: "体内和体外驱虫",
            intro: "寄生虫是猫咪最常见且最容易预防的问题之一。",
            sections: [
              { heading: "体内寄生虫", body: "最常见的是蛔虫、绦虫和弓形虫。成年猫每3-6个月口服驱虫药。" },
              { heading: "体外寄生虫", body: "跳蚤、蜱虫和耳螨最常见。每月滴剂是最实用的解决方案。" },
              { heading: "室内猫 vs 室外猫", body: "室内猫风险较低，但并非免疫。建议每年体内驱虫2次，体外4次。" },
            ],
          },
          {
            slug: "primeros-auxilios",
            title: "猫咪急救",
            intro: "知道如何在紧急情况下行动可以挽救猫咪的生命。",
            sections: [
              { heading: "基本急救包", body: "每个养猫家庭都应备有：生理盐水、无菌纱布、无酒精消毒剂、数字体温计和急诊兽医电话。" },
              { heading: "紧急信号", body: "如果猫咪出现以下情况请立即就医：呼吸困难、失去意识、抽搐、超过12小时无法排尿。" },
              { heading: "绝对不要做的事", body: "不要给猫服用布洛芬、对乙酰氨基酚或阿司匹林：它们是致命的。不要在没有兽医指导的情况下催吐。" },
            ],
          },
        ],
      },
      {
        slug: "enfermedades",
        label: "常见疾病",
        topics: [
          {
            slug: "enfermedad-renal",
            title: "慢性肾病",
            intro: "慢性肾衰竭是7岁以上猫咪的主要死因。",
            sections: [
              { heading: "警示信号", body: "大量饮水、频繁排尿、逐渐消瘦、毛发暗淡和食欲不振是最常见的症状。" },
              { heading: "诊断和随访", body: "从7岁起每年进行血液和尿液检查是最好的检测工具。" },
              { heading: "管理和治疗", body: "无法治愈，但可以通过肾脏饮食、补水和补充剂来管理。" },
            ],
          },
          {
            slug: "diabetes-felina",
            title: "猫糖尿病",
            intro: "猫糖尿病比你想象的更常见，尤其是超重的绝育公猫。",
            sections: [
              { heading: "风险因素", body: "肥胖、高龄、雄性和高碳水化合物饮食是主要因素。" },
              { heading: "症状", body: "极度口渴、频繁排尿、体重下降和后腿无力。" },
              { heading: "治疗和缓解", body: "每日胰岛素、低碳水化合物饮食和在家监测血糖。" },
            ],
          },
        ],
      },
      {
        slug: "dental",
        label: "口腔健康",
        topics: [
          {
            slug: "sarro-gingivitis",
            title: "牙结石和牙龈炎",
            intro: "牙周病影响70%以上3岁的猫咪。",
            sections: [
              { heading: "为什么重要", body: "口腔细菌进入血液可能损害肾脏、心脏和肝脏。" },
              { heading: "家庭预防", body: "每周用猫用牙膏刷牙3次是最有效的方法。" },
              { heading: "专业清洁", body: "建议从3岁起每年在麻醉下进行兽医洁牙。" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "comportamiento",
    label: "行为",
    emoji: "",
    color: "#b85c38",
    bg: "#faefeb",
    description: "行为",
    subcategories: [
      {
        slug: "interio-exterior",
        label: "室内猫还是室外猫？",
        topics: [
          {
            slug: "guia para entender y cuidar",
            title: "猫咪行为：如何更好地理解和照顾你的猫",
            intro: "猫如今是世界上最受欢迎的宠物之一。",
            sections: [
              { heading: "1. 室内还是室外？做出正确决定", body: "室外猫有更多自由但也有更多风险。室内猫受到更多保护但依赖我们提供刺激。" },
              { heading: "2. 抓挠本能：这不是破坏，是交流", body: "抓挠是自然行为。提供稳定、高大的剑麻猫抓板。" },
              { heading: "3. 游戏：身体和心理锻炼", body: "每天至少花15分钟与猫咪积极互动游戏。" },
              { heading: "4. 卫生和猫砂盆：黄金法则", body: "'N+1'法则：每只猫一个猫砂盆，再加一个额外的。每天清理排泄物。" },
              { heading: "5. 尿液标记：理解信息", body: "垂直尿液标记是一种交流行为，通常由压力引起。" },
              { heading: "结论：基于尊重的共处", body: "理解你的猫是更好地爱它的最佳工具。" },
            ],
          },
        ],
      },
      {
        slug: "lenguaje",
        label: "猫咪语言",
        topics: [
          {
            slug: "comunicacion-corporal",
            title: "肢体语言",
            intro: "猫咪有精密准确的肢体语言。",
            sections: [
              { heading: "尾巴是情绪的晴雨表", body: "高而直表示自信；低或夹在两腿之间表示恐惧；快速摆动表示恼怒。" },
              { heading: "耳朵不会说谎", body: "向前表示注意；向后表示恐惧或攻击；向两侧('飞机耳')表示逐渐恼怒。" },
              { heading: "眼睛和眨眼", body: "瞳孔放大表示恐惧或兴奋。放松的目光或缓慢眨眼表示信任。" },
              { heading: "胡须和面部", body: "胡须向前表示好奇；贴着脸表示恐惧。" },
              { heading: "整体身体姿态", body: "放松表示安全感；蜷缩表示恐惧；弓背表示害怕。" },
              { heading: "主要想法", body: "不要只看一个孤立的信号，而要看身体各部分的综合表现。" },
            ],
          },
          {
            slug: "vocalizaciones",
            title: "叫声及其含义",
            intro: "成年猫之间几乎不喵喵叫：喵喵叫是专门与人类交流的语言。",
            sections: [
              { heading: "喵喵叫", body: "短而尖的叫声通常是问候。长而持续的是要求。重复的叫声可能表示疼痛。" },
              { heading: "呼噜声", body: "并不总是表示幸福：猫在压力或生病时也会呼噜。" },
              { heading: "其他声音", body: "颤音是热情的问候。看到猎物时会发出咯咯声。嘶嘶声和喷气声是警告。" },
            ],
          },
          {
            slug: "parpadeo-lento",
            title: "缓慢眨眼：猫咪的吻",
            intro: "缓慢眨眼是猫咪 repertoire 中被研究最多的信号之一。",
            sections: [
              { heading: "是什么意思", body: "当猫看着你并缓慢眨眼时，它在告诉你它感到安全。" },
              { heading: "怎么做", body: "用放松的表情看着猫。慢慢眯起眼睛直到几乎闭合，然后再次睁开。" },
              { heading: "与不熟悉的猫", body: "即使对不认识的猫也有效。在收容所，缓慢眨眼可能决定猫是靠近还是逃跑。" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "alimentacion",
    label: "饮食",
    emoji: "",
    color: "#d4853a",
    bg: "#fff3e6",
    description: "营养、饮食和禁忌食物",
    subcategories: [
      {
        slug: "dietas",
        label: "饮食类型",
        topics: [
          {
            slug: "comida-humeda-vs-seca",
            title: "湿粮 vs 干粮",
            intro: "猫与水有特殊的关系，食物类型直接影响肾脏健康。",
            sections: [
              { heading: "猫的天性和水", body: "猫从猎物中获取大部分水分。干粮只含有10%的水分。" },
              { heading: "湿粮的优势", body: "更多水分、更多饱腹感、更接近自然饮食。" },
              { heading: "干粮的作用", body: "不坏，但不应是唯一食物。选择高动物蛋白的干粮。" },
            ],
          },
          {
            slug: "dieta-barf",
            title: "猫咪BARF饮食",
            intro: "BARF饮食基于生肉、肉骨和内脏。",
            sections: [
              { heading: "BARF基础", body: "约70%瘦肉、10%肉骨（永远不要煮熟）、10%内脏。" },
              { heading: "报告的益处", body: "改善毛发、减少粪便、更好的水合和更清洁的牙齿。" },
              { heading: "需考虑的风险", body: "细菌污染、营养失衡和骨头窒息风险。" },
            ],
          },
        ],
      },
      {
        slug: "prohibidos",
        label: "禁忌食物",
        topics: [
          {
            slug: "toxicos-comunes",
            title: "对猫有毒的食物",
            intro: "许多对人类安全的食物对猫是危险或致命的。",
            sections: [
              { heading: "极度危险", body: "洋葱、大蒜破坏红细胞。巧克力和咖啡可能导致抽搐。葡萄和葡萄干导致肾衰竭。" },
              { heading: "中度危险", body: "牛奶导致大多数成年猫腹泻。牛油果含有persin。任何量的酒精都是危险的。" },
              { heading: "可以作为零食吃的", body: "少量去骨熟鸡肉或火鸡肉、熟三文鱼、胡萝卜、南瓜和蓝莓。" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "juego",
    label: "游戏",
    emoji: "",
    color: "#9b6bb5",
    bg: "#f3eef8",
    description: "刺激、玩具和环境丰富化",
    subcategories: [
      {
        slug: "importancia",
        label: "为什么重要",
        topics: [
          {
            slug: "juego-cachorros",
            title: "小猫的游戏：一切的基础",
            intro: "猫生命的前六个月是关键的发育期。",
            sections: [
              { heading: "社会化窗口", body: "在2到9周龄之间，小猫学习世界上什么是正常的。" },
              { heading: "最常见的错误：用手当玩具", body: "用手玩耍教会猫人的皮肤是合法的猎物。" },
              { heading: "游戏作为问题预防", body: "每天2次15分钟的游戏是最佳预防措施。" },
            ],
          },
        ],
      },
      {
        slug: "juguetes",
        label: "玩具",
        topics: [
          {
            slug: "canas-y-plumas",
            title: "逗猫棒和猎物玩具",
            intro: "带羽毛的逗猫棒是最有效的玩具。",
            sections: [
              { heading: "为什么这么有效", body: "激活狩猎本能：潜伏、追逐、捕捉和'杀死'。" },
              { heading: "如何正确移动", body: "真正的猎物会停止、躲藏、以不可预测的角度移动。" },
              { heading: "好好结束游戏", body: "始终让猫在最后'捕捉'到玩具。" },
            ],
          },
          {
            slug: "puzzles-de-comida",
            title: "食物益智玩具",
            intro: "食物益智玩具是最被低估的环境丰富化方式之一。",
            sections: [
              { heading: "已证实的益处", body: "减少焦虑和无聊，减缓进食速度。" },
              { heading: "如何开始", body: "从非常简单的益智玩具开始。逐渐增加难度。" },
              { heading: "自制益智玩具", body: "带孔的纸板箱、装猫粮的冰块托盘。" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "etapas",
    label: "生命阶段",
    emoji: "",
    color: "#5b8db8",
    bg: "#eef3f8",
    description: "幼猫、成年猫、老年猫及其需求",
    subcategories: [
      {
        slug: "gatito",
        label: "幼猫（0-6个月）",
        topics: [
          {
            slug: "primeras-semanas",
            title: "生命的最初几周",
            intro: "猫生命的前两个月极其紧张。",
            sections: [
              { heading: "0-2周：新生儿期", body: "小猫出生时失明、失聪且无法调节体温。" },
              { heading: "2-7周：初级社会化", body: "眼睛在10到16天之间睁开。" },
              { heading: "7-12周：逐渐独立", body: "断奶在8周左右完成。这是领养的理想时机。" },
            ],
          },
        ],
      },
      {
        slug: "senior",
        label: "老年猫（10岁以上）",
        topics: [
          {
            slug: "cuidados-senior",
            title: "老年猫护理",
            intro: "10岁的猫大约相当于56岁的人。",
            sections: [
              { heading: "预期的身体变化", body: "关节灵活性降低、毛发光泽减少、可能肌肉流失。" },
              { heading: "环境适应", body: "斜坡或台阶、低入口猫砂盆、抬高的食碗。" },
              { heading: "加强医疗监测", body: "从10岁起，检查应为每半年一次，包括全面血液检查。" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "historia",
    label: "历史、起源和传播",
    emoji: "",
    color: "#9b6bb5",
    bg: "#f3eef8",
    description: "刺激、玩具和环境丰富化",
    subcategories: [
      {
        slug: "historia-felina",
        label: "起源之心",
        topics: [
          {
            slug: "origen-encuentro-nilo",
            title: "埃及，在尼罗河",
            intro: "家猫的历史始于约9000年前尼罗河谷。",
            sections: [
              { heading: "问题、解决方案和契约", body: "猫被啮齿动物吸引靠近村庄。人类接受了这种'害虫控制'服务。" },
              { heading: "从猎人到神灵", body: "埃及人神化了猫，将它们与巴斯泰特女神联系在一起。" },
              { heading: "征服世界：罗马和维京人", body: "罗马人为营地接纳了猫。维京人在船上携带猫。" },
              { heading: "现代猫", body: "现代猫保持着其沙漠祖先的独立猎人本能。" },
            ],
          },
          {
            slug: "corazon-origen-egipto",
            title: "世界传播",
            intro: "家猫并非偶然出现在尼罗河。",
            sections: [
              { heading: "宗教转变", body: "巴斯泰特女神象征着家庭、生育和保护。" },
              { heading: "大传播", body: "通过海上贸易路线：腓尼基人、罗马人、丝绸之路。" },
              { heading: "结论", body: "那只尼罗河畔的小猫如今存在于除南极洲外的所有大陆。" },
            ],
          },
        ],
      },
    ],
  },
];
