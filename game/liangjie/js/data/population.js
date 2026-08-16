/* 两界搬运工 · 城市人口 / 阶层 / 市场容量
 * 人口决定市场"消化深度"：人口越多，日常物资越不容易砸价；
 * 阶层决定需求偏好与溢价：平民买粮油日用，中产买的确良可乐，权贵高价收稀罕货。
 * 出售只能在"对口"的场所进行；黑市（旧）/典当行（新）是兜底收购渠道。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});

  // 类别 → 主要消费阶层（可被城市覆盖）
  LJ.DEFAULT_AFFINITY = {
    food: 'low', produce: 'low', daily: 'low', wholesale: 'low', fashion: 'low',
    drink: 'mid', book: 'mid', seed: 'mid', industrial: 'mid', ticket: 'mid',
    electronic: 'mid', special: 'high', antique: 'high', stamp: 'high', tech: 'high'
  };
  LJ.CLASS_MARGIN = { low: 1.0, mid: 1.25, high: 1.8 };   // 卖给对应阶层时的售价加成
  LJ.CLASS_NAME = { low: '平民', mid: '中产', high: '权贵' };
  LJ.CLASS_NOTE = {
    low: '需要粮食、日用品、布匹成衣，量大但价稳。',
    mid: '有些积蓄，会买的确良、可乐、手表收音机，一次一两件。',
    high: '官员、大院子弟、富商与外国客商，愿意高价收稀罕货，能权钱交易。'
  };

  // 出售场所能收购的类别（null = 什么都收）
  // 兜底：旧时"黑市"什么都收（有风险）；现代"典当行/回收站"什么都收（压价）。
  LJ.BUY_CATS = {
    market: ['food', 'produce', 'daily', 'wholesale', 'seed', 'drink', 'book', 'fashion', 'industrial', 'special', 'tech'],
    wholesale: ['food', 'produce', 'daily', 'wholesale', 'fashion', 'industrial', 'tech'],
    street: ['food', 'produce', 'daily', 'wholesale', 'fashion', 'book', 'drink', 'seed', 'special', 'electronic', 'industrial', 'tech'],
    blackmarket: null,                 // 什么都收（兜底，涨治安风险）
    pawn: null,                        // 现代典当行/回收站：什么都收（兜底，压价）
    friendship: ['drink', 'special', 'electronic', 'fashion', 'antique'],
    antique: ['antique', 'stamp', 'special'],
    auction: ['antique', 'stamp'],
    warehouse: ['wholesale', 'industrial'],
    home: [], gear: [], property: [], hotel: [], restaurant: [], station: [], airport: [],
    bank: [], stock: [], training: [], office: [], service: [], culture: [], park: []
  };

  // 城市人口档案：classes 三档人数（低/中/高），affinity 为类别→阶层覆盖
  LJ.CITY_PROFILE = {
    old: {
      beijing: { pop: 3000000, classes: { low: 2900000, mid: 90000, high: 10000 }, lean: '共和国首都，全国批文与古董交易的中心。', affinity: {} },
      guangzhou: { pop: 2800000, classes: { low: 2650000, mid: 140000, high: 10000 }, lean: '南大门，走私与个体户的天堂。', affinity: { electronic: 'mid', drink: 'mid', fashion: 'low' } },
      wuhan: { pop: 2500000, classes: { low: 2400000, mid: 95000, high: 5000 }, lean: '九省通衢，全国货物的中转站。', affinity: { wholesale: 'low', industrial: 'mid' } },
      harbin: { pop: 1800000, classes: { low: 1720000, mid: 75000, high: 5000 }, lean: '共和国长子，重工业与黑土山货。', affinity: { food: 'low', produce: 'low', daily: 'low' } },
      urumqi: { pop: 1200000, classes: { low: 1150000, mid: 46000, high: 4000 }, lean: '丝路绿洲，棉海与干果之乡。', affinity: { fashion: 'mid', daily: 'low', food: 'low' } },
      hangzhou: { pop: 1100000, classes: { low: 1040000, mid: 55000, high: 5000 }, lean: '江南文脉，丝绸茶叶之乡。', affinity: { book: 'mid', special: 'high', antique: 'high' } },
      hongkong: { pop: 5000000, classes: { low: 4000000, mid: 900000, high: 100000 }, lean: '国际自由港，西方资本进入内地唯一跳板。', affinity: { special: 'high', antique: 'high', electronic: 'mid', drink: 'mid' } },
      tokyo: { pop: 11000000, classes: { low: 8000000, mid: 2900000, high: 100000 }, lean: '泡沫前夜的霓虹帝都，富豪与收藏家遍地。', affinity: { antique: 'high', tech: 'high', book: 'mid' } }
    },
    modern: {
      beijing: { pop: 21000000, classes: { low: 17000000, mid: 3500000, high: 500000 }, lean: '2026年的首都，物质过剩的超级城市。', affinity: {} },
      shanghai: { pop: 24000000, classes: { low: 19000000, mid: 4300000, high: 700000 }, lean: '2026年的上海，国际消费与时尚中心。', affinity: { fashion: 'mid', electronic: 'mid' } },
      hongkong: { pop: 7400000, classes: { low: 4800000, mid: 2200000, high: 400000 }, lean: '东方之珠，资本与奢侈品的中转站。', affinity: { special: 'high', antique: 'high' } },
      tokyo: { pop: 13000000, classes: { low: 8000000, mid: 4400000, high: 600000 }, lean: '霓虹帝都，电子与收藏品圣殿。', affinity: { antique: 'high', tech: 'high' } },
      sanfrancisco: { pop: 4700000, classes: { low: 3000000, mid: 1500000, high: 200000 }, lean: '湾区，技术与农产品的源头。', affinity: { industrial: 'mid', seed: 'mid', tech: 'high' } },
      london: { pop: 9000000, classes: { low: 5600000, mid: 3000000, high: 400000 }, lean: '泰晤士河畔，艺术与古董的老牌中心。', affinity: { antique: 'high', special: 'mid', book: 'mid' } },
      nairobi: { pop: 4000000, classes: { low: 3400000, mid: 560000, high: 40000 }, lean: '东非之门，矿产、咖啡与木雕的源头。', affinity: { industrial: 'mid', food: 'low', daily: 'low' } }
    }
  };

  // 工具函数
  function profile(world, city) {
    const p = (LJ.CITY_PROFILE[world] || {})[city];
    return p || { pop: 100000, classes: { low: 95000, mid: 4900, high: 100 }, lean: '', affinity: {} };
  }
  function affinity(city, cat) {
    const p = profile(LJ.Sys.state.world, city);
    return p.affinity[cat] || LJ.DEFAULT_AFFINITY[cat] || 'low';
  }
  function classMargin(city, cat) {
    return LJ.CLASS_MARGIN[affinity(city, cat)] || 1;
  }
  // 市场消化深度：人口 × 单位吸收 × 世界系数；现代生产力恐怖，系数极小
  function marketDepth(world, city, cat) {
    const p = profile(world, city);
    const cls = affinity(city, cat);
    const count = (p.classes[cls] || 1000);
    const absorb = { low: 0.05, mid: 0.02, high: 0.06 }[cls];
    let depth = Math.max(50, count * absorb);
    if (world === 'modern') depth = Math.max(8000, count * absorb * 0.0005); // 现代：数百上千件才影响价格
    return depth;
  }

  LJ.Pop = {
    profile, affinity, classMargin, marketDepth,
    fmt: (n) => (n >= 10000 ? (n / 10000).toFixed(n >= 1000000 ? 0 : 1) + '万' : n)
  };
})();
