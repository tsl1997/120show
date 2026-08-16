/* 两界搬运工 · 金融 / 职业 / NPC / AI 数据 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});

  /* ================= AI 接入配置（可在设置中修改） ================= */
  LJ.AI_DEFAULTS = {
    baseUrl: 'https://api.siliconflow.cn',
    apiKey: 'sk-ugfucoamcdqueicunqhqugynccatnllxksdmmsfucbatpdbt',
    model: 'deepseek-ai/DeepSeek-V4-Flash'
  };

  /* ================= 股票池 ================= */
  LJ.Stocks = [
    { id: 'gzmt', name: '茅台股份', sector: '白酒', base: 1450 },
    { id: 'hxjj', name: '华夏机电', sector: '高端制造', base: 28 },
    { id: 'hyjd', name: '海雁电器', sector: '家电', base: 42 },
    { id: 'dfny', name: '东方农业', sector: '农业', base: 18 },
    { id: 'hykj', name: '华阳科技', sector: '半导体', base: 86 }
  ];

  LJ.BankRates = { modern: { depositAnnual: 0.0175, loanAnnual: 0.045 }, old: { depositAnnual: 0.054, loanAnnual: 0.07 } };

  /* ================= 外汇（现代） ================= */
  LJ.FX = {
    CNY: { USD: 7.2, HKD: 0.93, JPY: 0.052, EUR: 7.8, GBP: 9.1 },
    USD: { CNY: 7.2, HKD: 7.8, JPY: 154, EUR: 0.92, GBP: 0.79 },
    HKD: { CNY: 1.08, USD: 0.128, JPY: 19.8, EUR: 0.118, GBP: 0.102 },
    JPY: { CNY: 0.052, USD: 0.0065, HKD: 0.0505, EUR: 0.00595, GBP: 0.00514 },
    EUR: { CNY: 7.8, USD: 1.09, HKD: 8.48, JPY: 168, GBP: 0.86 },
    GBP: { CNY: 9.1, USD: 1.27, HKD: 9.8, JPY: 194, EUR: 1.16 }
  };
  LJ.FX_OLD = { USD_CNY: 1.5, USD_CNY_BLACK: 4.8, USD_FEC: 1.28, FEC_CNY: 1.28, FEC_CNY_BLACK: 1.7 };

  /* ================= 现代职业培训 ================= */
  LJ.Courses = [
    { id: 'english', name: '实用英语培训（含考试）', cost: 6800, days: 14, skill: 'english', unlock: ['翻译员'] },
    { id: 'japanese', name: '日语培训（含考试）', cost: 7800, days: 21, skill: 'japanese', unlock: ['日方随行翻译'] },
    { id: 'appraisal', name: '文物鉴定培训班', cost: 5200, days: 10, skill: 'appraisal', unlock: [] },
    { id: 'machinery', name: '农机技术培训', cost: 4800, days: 8, skill: 'machinery', unlock: ['国营厂采购员'] }
  ];

  /* ================= 旧时职业（工资 + 每月票证） ================= */
  // tickets: 每月随工资发放的票证 {ticketId: 数量}
  LJ.Jobs = [
    {
      id: 'translator', name: '翻译员', need: ['english'],
      desc: '外语翻译，可出入涉外机构，解锁港澳通行证与公派出国。',
      salary: 56,
      tickets: { foodTicket: 12, clothTicket: 4, oilTicket: 2 },
      unlocks: ['travel_foreign']
    },
    {
      id: 'jp_rep', name: '日方随行翻译', need: ['japanese', 'english'],
      desc: '随行日本考察团，可乘机赴东京，接触日本商界。',
      salary: 85,
      tickets: { foodTicket: 15, meatTicket: 3, oilTicket: 2, sugarTicket: 1 },
      unlocks: ['tokyo_old']
    },
    {
      id: 'buyer', name: '国营厂采购员', need: ['machinery'],
      desc: '可开具介绍信，跨省采购，单位报销部分差旅。',
      salary: 62,
      tickets: { foodTicket: 15, meatTicket: 2, oilTicket: 2, cigaretteTicket: 1 },
      unlocks: []
    }
  ];

  /* ================= 静态 NPC（有固定身份与好感度） ================= */
  // persona/backstory 供 AI 深谈
  LJ.Npcs = [
    { id: 'liu', name: '刘桂兰', city: 'beijing', era: 'old', role: '纺织厂女工', likes: ['nylonStocking', 'soap', 'scarf', 'whiteCandy'],
      persona: '纺织厂三班倒的女工，快人快语，爱美也务实。', lines: ['"咱们厂的的确良好看是好看，就是贵。"', '"大妹子你打哪儿弄来的尼龙袜？稀罕得很！"'] },
    { id: 'zhao', name: '赵建国', city: 'beijing', era: 'old', role: '邮局职员', likes: ['monkey', 'landscape', 'cigaretteTicket'],
      persona: '邮局小职员，痴迷集邮，知道哪张票子以后值钱。', lines: ['"这猴票一版才八分，可我觉得以后准涨。"', '"集邮是个学问，隔山买老牛可不行。"'] },
    { id: 'sun', name: '孙师傅', city: 'beijing', era: 'old', role: '国营饭店厨师', likes: ['canned', 'chocolate', 'teaJasmine'],
      persona: '饭店掌勺的，嘴馋手艺好，最讲究吃。', lines: ['"铁罐头里的肉，搁我们这儿是稀罕物。"', '"茶要喝得浓，才够味。"'] },
    { id: 'zhou', name: '周老师', city: 'beijing', era: 'old', role: '中学教师', likes: ['classics', 'dictionary', 'englishBook'],
      persona: '中学英文老师，理想主义，渴望外面的世界。', lines: ['"知识就是力量，外语更是门窗。"', '"你手里这字典，比我们图书馆的还新。"'] },
    { id: 'he', name: '何大爷', city: 'beijing', era: 'old', role: '退休文物修复员', likes: ['mystery_jar', 'mystery_scroll', 'teaJasmine'],
      persona: '文物店退休的老先生，一眼能断真假，最爱给年轻人讲古。', lines: ['"这罐子上的包浆，不是一天两天养出来的。"', '"看瓷先看胎，看画先看墨。"'] },
    { id: 'wang', name: '王科长', city: 'beijing', era: 'old', role: '机关干部', likes: ['maotai', 'xifengJiu', 'hongtashan'],
      persona: '机关里管事的干部，见多识广，讲究排场。', lines: ['"茅台这东西，凭票都买不着几瓶。"', '"办事要懂规矩，也要懂人情。"'] },
    { id: 'chen', name: '陈研究员', city: 'beijing', era: 'old', role: '科学院农学家', likes: ['wheatseed', 'riceseed', 'seedManual'],
      persona: '科学院搞育种的专家，看到好种子眼睛发光。', lines: ['"这稻种的穗子，比我试验田里的还壮！"', '"你要是能弄来高产良种，那是帮了国家大忙。"'] },
    { id: 'qian', name: '钱老板', city: 'beijing', era: 'old', role: '个体户', likes: ['nylonRope', 'plasticBasin', 'flashlight', 'notebook'],
      persona: '最早一批个体户，消息灵通，算盘打得精。', lines: ['"政策一活，咱这生意就有得做。"', '"尼龙绳这玩意儿，下乡能换不少好东西。"'] },
    { id: 'fage', name: '发哥', city: 'guangzhou', era: 'old', role: '高第街档口老板', likes: ['watch', 'cassette', 'nylonStocking', 'jeans'],
      persona: '高第街倒腾港货的老板，穿着花衬衫，满嘴生意经。', lines: ['"靓仔，呢批电子表平到你唔信！"', '"北方佬就钟意呢啲香港货。"'] },
    { id: 'hange', name: '汉哥', city: 'wuhan', era: 'old', role: '汉正街扁担帮头儿', likes: ['flashlight', 'nylonRope', 'matches', 'workglove'],
      persona: '汉正街扛扁担起家的头儿，讲义气，码头规矩门清。', lines: ['"汉口这地方，船到车到，货到人欢。"', '"跟我汉哥做生意，规矩是秤平斗满。"'] },
    { id: 'duoduozi', name: '老独垛子', city: 'harbin', era: 'old', role: '长白山赶山人', likes: ['flashlight', 'maotai', 'baijiu', 'downcoat'],
      persona: '在大兴安岭抓参打猎的老把式，认死理，讲究缘分。', lines: ['"山货这东西，讲的是缘分，不是钱。"', '"你这手电，夜里进山可顶大用。"'] },
    { id: 'maimaiti', name: '买买提', city: 'urumqi', era: 'old', role: '和田玉采玉人', likes: ['flashlight', 'sneaker', 'towel', 'soap'],
      persona: '骑毛驴在玉龙喀什河淘玉的维族汉子，豪爽耿直。', lines: ['"石头里有没有玉，得看老天爷赏不赏。"', '"好玉配知己，价钱好商量。"'] },
    { id: 'luye', name: '陆老爷子', city: 'hangzhou', era: 'old', role: '龙井村隐世藏家', likes: ['mystery_scroll', 'longjing', 'silkBolt', 'classics'],
      persona: '龙井村守着一座老宅和一片茶园的老人，腹有诗书，深藏不露。', lines: ['"茶叶的滋味，跟人的心境一样。"', '"你且说说，这字是哪个大家的手笔？"'] }
  ];

  /* ================= 恋爱对象 ================= */
  LJ.Romances = [
    {
      id: 'meixiu', name: '佐藤美绪', city: 'tokyo', era: 'old',
      desc: '早稻田大学的汉学研究生，外务省高官之女，痴迷中国古典诗词。',
      needs: ['japanese'], likes: ['longjing', 'silkBolt', 'classics', 'mystery_scroll'],
      persona: '知书达理，温柔却藏着一双锐利的眼睛；她既欣赏诗词，也在揣度你的底细。',
      tips: '帮她翻译文献，带龙井与她品茶，可解锁日本商界人脉。'
    },
    {
      id: 'naijin', name: '中野奈津美', city: 'hongkong', era: 'old',
      desc: '日本商社驻港女代表，冷艳精干，考察中国市场。',
      needs: ['english'], likes: ['silkBolt', 'dacron', 'chocolate', 'agedMaotai'],
      persona: '东京大学商学院毕业的商社精英，谈生意如谈情，步步为营。',
      tips: '以海外买办身份接近她，可拿到日本彩电显像管的进口批文。'
    },
    {
      id: 'alisa', name: '艾丽莎', city: 'sanfrancisco', era: 'modern',
      desc: '湾区极客女工程师，崇拜强者与超前思维。',
      needs: [], likes: ['camera', 'icsManual', 'coffee', 'silkBolt'],
      persona: '车库创业的工程师，相信技术改变世界，对循规蹈矩毫无耐心。',
      tips: '展现出超越时代的技术眼光，她愿做你在美国的白手套。'
    }
  ];

  /* ================= 动态路人池（热闹街区/街头随机生成） ================= */
  LJ.Passerby = {
    first: ['老', '小', '阿', '大', '二', '陈', '李', '王', '张', '赵', '孙', '周', '吴', '郑', '钱', '刘', '罗', '杨', '马', '何'],
    last: ['柱', '根', '贵', '生', '发', '财', '富', '强', '顺', '平', '安', '福', '寿', '宝', '兴', '旺', '全', '和', '德', '英', '兰', '珍', '梅', '芳', '秀', '花'],
    roles: ['赶集的农民', '供销社的售货员', '大厂的工人', '下乡知青', '退休干部', '过路的司机', '码头工人', '教师', '医生', '邮递员', '理发匠', '修自行车的', '讨生活的二流子', '探亲的军人', '赶车的骡夫'],
    intros: [
      '"同志，有粮票吗？家里揭不开锅了……"',
      '"你手里这货不错，出个价？"',
      '"最近城里都在传，南边的东西可俏了。"',
      '"嘿，巧了，正想找点稀罕货。"',
      '"家里娃儿想吃点甜的，你有糖票不？"'
    ]
  };
})();
