(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  const categories = [
    { id: "food_staple", name: "粮油主食", elModern: 0.02, elOld: 0.35, modernElastic: false, oldElastic: true },
    { id: "food_fresh", name: "生鲜副食", elModern: 0.03, elOld: 0.5, modernElastic: false, oldElastic: true },
    { id: "food_processed", name: "加工食品", elModern: 0.03, elOld: 0.4, modernElastic: false, oldElastic: true },
    { id: "tobacco", name: "烟酒", elModern: 0.02, elOld: 0.45, modernElastic: false, oldElastic: true },
    { id: "clothing", name: "服饰鞋帽", elModern: 0.03, elOld: 0.4, modernElastic: false, oldElastic: true },
    { id: "textile", name: "纺织原料", elModern: 0.05, elOld: 0.4, modernElastic: false, oldElastic: true },
    { id: "electronics", name: "消费电子", elModern: 0.02, elOld: 0.6, modernElastic: false, oldElastic: true },
    { id: "appliance", name: "家用电器", elModern: 0.02, elOld: 0.55, modernElastic: false, oldElastic: true },
    { id: "daily", name: "日用百货", elModern: 0.02, elOld: 0.4, modernElastic: false, oldElastic: true },
    { id: "cosmetics", name: "化妆香水", elModern: 0.03, elOld: 0.5, modernElastic: false, oldElastic: true },
    { id: "luxury", name: "奢侈品", elModern: 0.05, elOld: 0.6, modernElastic: false, oldElastic: true },
    { id: "antique", name: "古董收藏", elModern: 0.1, elOld: 0.2, modernElastic: false, oldElastic: false },
    { id: "medicine", name: "医药保健", elModern: 0.02, elOld: 0.4, modernElastic: false, oldElastic: true },
    { id: "book_edu", name: "文教用品", elModern: 0.02, elOld: 0.3, modernElastic: false, oldElastic: true },
    { id: "agri_input", name: "农资", elModern: 0.04, elOld: 0.4, modernElastic: false, oldElastic: true },
    { id: "industrial", name: "工业原料", elModern: 0.05, elOld: 0.5, modernElastic: false, oldElastic: true },
    { id: "energy", name: "能源", elModern: 0.06, elOld: 0.5, modernElastic: false, oldElastic: true },
    { id: "vehicle", name: "载具交通", elModern: 0.05, elOld: 0.5, modernElastic: false, oldElastic: true },
    { id: "special", name: "地方特产", elModern: 0.05, elOld: 0.45, modernElastic: false, oldElastic: true }
  ];

  function I(opt) {
    return Object.assign({
      weight: 1, volume: 1, legality: "legal", ticket: "none",
      antique: false, rarity: 3, era: "both"
    }, opt);
  }

  const core = [
    I({ id: "electronic_watch", name: "电子表", cat: "electronics", tier: 2, pModern: 25, pOld: 15, ticket: "none", tags: ["男", "女", "青年", "电子", "洋货"], weight: 0.05, volume: 0.1, era: "modern", desc: "现代论斤卖的电子垃圾，在1980年黑市是时髦高科技。" }),
    I({ id: "solar_panel_small", name: "小型太阳能充电板", cat: "electronics", tier: 3, pModern: 80, pOld: 400, ticket: "none", tags: ["电子", "农资"], weight: 0.5, volume: 2, era: "modern", desc: "牧区没电的神物。" }),
    I({ id: "led_flashlight", name: "强光LED手电", cat: "daily", tier: 2, pModern: 40, pOld: 60, ticket: "none", tags: ["男", "户外", "电子"], weight: 0.3, volume: 0.6, era: "modern", desc: "80年代赶山人、倒爷的心头好。" }),
    I({ id: "plastic_basin", name: "塑料盆", cat: "daily", tier: 1, pModern: 12, pOld: 8, ticket: "工业券", tags: ["主妇", "日用"], weight: 0.4, volume: 3, era: "modern" }),
    I({ id: "nylon_rope", name: "尼龙绳", cat: "daily", tier: 1, pModern: 6, pOld: 5, ticket: "none", tags: ["日用", "农资"], weight: 0.5, volume: 1, era: "modern", desc: "现代工业边角料，1980年换鸡蛋粮票的神物。" }),
    I({ id: "soap", name: "肥皂", cat: "daily", tier: 1, pModern: 5, pOld: 0.4, ticket: "工业券", tags: ["主妇", "日用"], weight: 0.2, volume: 0.3 }),
    I({ id: "matches", name: "火柴", cat: "daily", tier: 1, pModern: 2, pOld: 0.02, ticket: "none", tags: ["日用"], weight: 0.05, volume: 0.1 }),
    I({ id: "antibiotic", name: "广谱抗生素(盒)", cat: "medicine", tier: 3, pModern: 20, pOld: 150, ticket: "none", tags: ["医药"], weight: 0.1, volume: 0.2, era: "modern", desc: "1980年匮乏年代的救命药。" }),
    I({ id: "iodine_pill", name: "碘片", cat: "medicine", tier: 3, pModern: 30, pOld: 200, ticket: "none", tags: ["医药"], weight: 0.1, volume: 0.2, era: "modern", desc: "核事故预警与防护的关键物资。" }),
    I({ id: "seed_hybrid_rice", name: "高产杂交水稻种子(kg)", cat: "agri_input", tier: 3, pModern: 30, pOld: 300, ticket: "none", tags: ["农资", "食材"], weight: 1, volume: 2, era: "modern", desc: "能提前改写80年代农业的降维种子。" }),
    I({ id: "greenhouse_film", name: "塑料大棚薄膜(卷)", cat: "agri_input", tier: 3, pModern: 50, pOld: 500, ticket: "none", tags: ["农资"], weight: 5, volume: 20, era: "modern", desc: "东北反季节蔬菜神话的钥匙。" }),
    I({ id: "fertilizer_urea", name: "尿素化肥(袋)", cat: "agri_input", tier: 3, pModern: 120, pOld: 80, ticket: "none", tags: ["农资", "工业"], weight: 50, volume: 60, era: "both", desc: "高产农业的刚需。" }),
    I({ id: "calculator", name: "电子计算器", cat: "electronics", tier: 2, pModern: 15, pOld: 80, ticket: "none", tags: ["电子", "文教"], weight: 0.2, volume: 0.3, era: "modern" }),
    I({ id: "thermos", name: "保温瓶", cat: "daily", tier: 2, pModern: 30, pOld: 4, ticket: "工业券", tags: ["日用"], weight: 1.2, volume: 3 }),
    I({ id: "reading_glasses", name: "老花镜", cat: "daily", tier: 2, pModern: 15, pOld: 10, ticket: "none", tags: ["老年", "日用"], weight: 0.1, volume: 0.3 }),
    I({ id: "red_candle", name: "红蜡烛(包)", cat: "daily", tier: 1, pModern: 8, pOld: 0.5, ticket: "none", tags: ["日用"], weight: 0.4, volume: 0.5 }),
    I({ id: "safety_helmet", name: "安全帽", cat: "industrial", tier: 2, pModern: 25, pOld: 30, ticket: "none", tags: ["工业"], weight: 0.4, volume: 2 }),
    I({ id: "wrench_set", name: "五金扳手组", cat: "industrial", tier: 2, pModern: 60, pOld: 40, ticket: "工业券", tags: ["机械", "男"], weight: 2, volume: 3 }),
    I({ id: "condom_box", name: "安全套(盒)", cat: "medicine", tier: 2, pModern: 30, pOld: 50, ticket: "none", tags: ["日用"], weight: 0.1, volume: 0.2, era: "modern" }),
    I({ id: "sunglasses", name: "蛤蟆镜", cat: "clothing", tier: 2, pModern: 30, pOld: 25, ticket: "none", tags: ["男", "女", "青年", "服饰", "洋货"], weight: 0.1, volume: 0.2, era: "modern", desc: "80年代广州走私最抢手的时髦货。" }),
    I({ id: "nylon_stockings", name: "尼龙丝袜(双)", cat: "clothing", tier: 1, pModern: 8, pOld: 6, ticket: "none", tags: ["女", "服饰"], weight: 0.05, volume: 0.1, era: "modern", desc: "80年代女性眼中的洋气奢侈品。" }),
    I({ id: "down_jacket", name: "羽绒服", cat: "clothing", tier: 3, pModern: 300, pOld: 200, ticket: "布票", tags: ["男", "女", "服饰", "防寒"], weight: 1, volume: 4, era: "modern" }),
    I({ id: "mead_jacket", name: "军大衣", cat: "clothing", tier: 2, pModern: 180, pOld: 60, ticket: "布票", tags: ["男", "服饰", "防寒"], weight: 2, volume: 8 }),
    I({ id: "mobile_phone", name: "智能手机", cat: "electronics", tier: 5, pModern: 4500, pOld: 20000, ticket: "none", tags: ["男", "女", "青年", "工作人士", "电子", "奢侈品"], weight: 0.3, volume: 0.5, era: "modern", desc: "带回1980年就是降维神物，但会被科研机构疯抢。" }),
    I({ id: "laptop", name: "笔记本电脑", cat: "electronics", tier: 5, pModern: 6000, pOld: 30000, ticket: "none", tags: ["男", "女", "工作人士", "电子"], weight: 1.5, volume: 3, era: "modern" }),
    I({ id: "microscope", name: "便携显微镜", cat: "book_edu", tier: 3, pModern: 200, pOld: 600, ticket: "none", tags: ["文教", "医药"], weight: 1, volume: 2, era: "modern" })
  ];

  R.register("categories", { items: categories, map: categories.reduce((m, c) => (m[c.id] = c, m), {}) });
  R.register("items_core", { items: core, map: core.reduce((m, i) => (m[i.id] = i, m), {}) });
})();
