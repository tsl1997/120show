/* 两界搬运工 · 金融市场 / 职业 / NPC 数据
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});

  /* ================= 股票池（A股，2026 现代） =================
   * base=模拟基准价, seed=随机漫步种子
   */
  LJ.Stocks = [
    { id: 'gzmt', name: '茅台股份', sector: '白酒', base: 1450 },
    { id: 'hxjj', name: '华夏机电', sector: '高端制造', base: 28 },
    { id: 'hyjd', name: '海雁电器', sector: '家电', base: 42 },
    { id: 'dfny', name: '东方农业', sector: '农业', base: 18 },
    { id: 'hykj', name: '华阳科技', sector: '半导体', base: 86 }
  ];

  /* ================= 银行利率 ================= */
  LJ.BankRates = {
    modern: { depositAnnual: 0.0175, loanAnnual: 0.045 },
    old: { depositAnnual: 0.054, loanAnnual: 0.07 }
  };

  /* ================= 外汇（现代）官方参考价 ================= */
  LJ.FX = {
    CNY: { USD: 7.2, HKD: 0.93, JPY: 0.052, EUR: 7.8, GBP: 9.1 },
    USD: { CNY: 7.2, HKD: 7.8, JPY: 154, EUR: 0.92, GBP: 0.79 },
    HKD: { CNY: 1.08, USD: 0.128, JPY: 19.8, EUR: 0.118, GBP: 0.102 },
    JPY: { CNY: 0.052, USD: 0.0065, HKD: 0.0505, EUR: 0.00595, GBP: 0.00514 },
    EUR: { CNY: 7.8, USD: 1.09, HKD: 8.48, JPY: 168, GBP: 0.86 },
    GBP: { CNY: 9.1, USD: 1.27, HKD: 9.8, JPY: 194, EUR: 1.16 }
  };

  /* ================= 现代职业培训（解锁旧时职业） ================= */
  LJ.Courses = [
    { id: 'english', name: '实用英语培训（含考试）', cost: 6800, days: 14, skill: 'english', unlock: ['翻译员'] },
    { id: 'japanese', name: '日语培训（含考试）', cost: 7800, days: 21, skill: 'japanese', unlock: ['日方随行翻译'] },
    { id: 'appraisal', name: '文物鉴定培训班', cost: 5200, days: 10, skill: 'appraisal', unlock: [] },
    { id: 'machinery', name: '农机技术培训', cost: 4800, days: 8, skill: 'machinery', unlock: ['国营厂采购员'] }
  ];

  /* ================= 旧时职业 ================= */
  LJ.Jobs = [
    {
      id: 'translator', name: '翻译员', need: ['english'],
      desc: '外语翻译，可出入涉外机构，解锁港澳通行证与公派出国。',
      salary: 56, // 月薪（旧时元）
      unlocks: ['travel_foreign']
    },
    {
      id: 'jp_rep', name: '日方随行翻译', need: ['japanese', 'english'],
      desc: '随行日本考察团，可乘机赴东京，接触日本商界。',
      salary: 85,
      unlocks: ['tokyo_old']
    },
    {
      id: 'buyer', name: '国营厂采购员', need: ['machinery'],
      desc: '可开具介绍信，跨省采购，单位报销部分差旅。',
      salary: 62,
      unlocks: []
    }
  ];

  /* ================= 1980 介绍信规则 ================= */
  LJ.IntroLetter = {
    needJob: true, // 需要职业才能从街道办开出介绍信
    price: 2 // 工本费
  };

  /* ================= 汇率（旧时 1980） ================= */
  LJ.FX_OLD = {
    USD_CNY: 1.5,   // 官方
    USD_CNY_BLACK: 4.8, // 黑市
    USD_FEC: 1.28,  // 1美元 ≈ 1.28 外汇券
    FEC_CNY: 1.28,  // 1外汇券 兑 人民币官方价
    FEC_CNY_BLACK: 1.7 // 黑市溢价
  };

  /* ================= NPC 关系（社交 / 恋爱） ================= */
  LJ.Npcs = [
    { id: 'liu', name: '刘桂兰', city: 'beijing', role: '纺织厂女工', cat: 'daily', likes: ['nylonStocking', 'soap', 'scarf', 'whiteCandy'] },
    { id: 'zhao', name: '赵建国', city: 'beijing', role: '邮局职员', cat: 'stamp', likes: ['monkey', 'landscape', 'cigaretteTicket'] },
    { id: 'sun', name: '孙师傅', city: 'beijing', role: '国营饭店厨师', cat: 'food', likes: ['canned', 'chocolate', 'teaJasmine'] },
    { id: 'zhou', name: '周老师', city: 'beijing', role: '中学教师', cat: 'book', likes: ['classics', 'dictionary', 'englishBook'] },
    { id: 'he', name: '何大爷', city: 'beijing', role: '退休文物修复员', cat: 'antique', likes: ['mystery_jar', 'mystery_scroll', 'teaJasmine'] },
    { id: 'wang', name: '王科长', city: 'beijing', role: '机关干部', cat: 'special', likes: ['maotai', 'xifengJiu', 'hongtashan'] },
    { id: 'chen', name: '陈研究员', city: 'beijing', role: '科学院农学家', cat: 'seed', likes: ['wheatseed', 'riceseed', 'seedManual'] },
    { id: 'qian', name: '钱老板', city: 'beijing', role: '个体户', cat: 'wholesale', likes: ['nylonRope', 'plasticBasin', 'flashlight', 'notebook'] },
    { id: 'fage', name: '发哥', city: 'guangzhou', role: '高第街档口老板', likes: ['watch', 'cassette', 'nylonStocking', 'jeans'] },
    { id: 'hange', name: '汉哥', city: 'wuhan', role: '汉正街扁担帮头儿', likes: ['flashlight', 'nylonRope', 'matches', 'workglove'] },
    { id: 'duoduozi', name: '老独垛子', city: 'harbin', role: '长白山赶山人', likes: ['flashlight', 'maotai', 'baijiu', 'downcoat'] },
    { id: 'maimaiti', name: '买买提', city: 'urumqi', role: '和田玉采玉人', likes: ['flashlight', 'sneaker', 'towel', 'soap'] },
    { id: 'luye', name: '陆老爷子', city: 'hangzhou', role: '龙井村隐世藏家', likes: ['mystery_scroll', 'longjing', 'silkBolt', 'classics'] }
  ];

  // 恋爱对象（AI 式多线博弈），好感度达到阈值触发剧情
  LJ.Romances = [
    {
      id: 'meixiu', name: '佐藤美绪', city: 'tokyo', era: 'old',
      desc: '早稻田大学的汉学研究生，外务省高官之女，痴迷中国古典诗词。',
      needs: ['japanese'], likes: ['longjing', 'silkBolt', 'classics', 'mystery_scroll'],
      tips: '帮她翻译文献，带龙井与她品茶，可解锁日本商界人脉。'
    },
    {
      id: 'naijin', name: '中野奈津美', city: 'hongkong', era: 'old',
      desc: '日本商社驻港女代表，冷艳精干，考察中国市场。',
      needs: ['english'], likes: ['silkBolt', 'dacron', 'chocolate', 'agedMaotai'],
      tips: '以海外买办身份接近她，可拿到日本彩电显像管的进口批文。'
    },
    {
      id: 'alisa', name: '艾丽莎', city: 'sanfrancisco', era: 'modern',
      desc: '湾区极客女工程师，崇拜强者与超前思维。',
      needs: [], likes: ['camera', 'icsManual', 'coffee', 'silkBolt'],
      tips: '展现出超越时代的技术眼光，她愿做你在美国的白手套。'
    }
  ];
})();
