(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  function I(opt) {
    return Object.assign({ weight: 1, volume: 1, legality: "legal", ticket: "none", antique: false, rarity: 3, era: "both" }, opt);
  }

  const bulk = [
    I({ id: "steel_ton", name: "钢材(吨)", cat: "industrial", tier: 3, pModern: 4000, pOld: 700, ticket: "none", tags: ["工业", "机械"], weight: 1000, volume: 300, desc: "计划经济统配物资，走批文。" }),
    I({ id: "coal_ton", name: "煤炭(吨)", cat: "energy", tier: 2, pModern: 800, pOld: 40, ticket: "none", tags: ["能源", "工业"], weight: 1000, volume: 700 }),
    I({ id: "cement_ton", name: "水泥(吨)", cat: "industrial", tier: 2, pModern: 400, pOld: 60, ticket: "none", tags: ["工业"], weight: 1000, volume: 600 }),
    I({ id: "timber_m3", name: "木材(方)", cat: "industrial", tier: 2, pModern: 1500, pOld: 150, ticket: "none", tags: ["工业"], weight: 600, volume: 1000 }),
    I({ id: "crude_oil_ton", name: "原油(吨)", cat: "energy", tier: 3, pModern: 5000, pOld: 110, ticket: "none", tags: ["能源", "工业"], weight: 1000, volume: 1100 }),
    I({ id: "gasoline_l", name: "汽油(升)", cat: "energy", tier: 1, pModern: 7.5, pOld: 0.6, ticket: "油票", tags: ["能源"], weight: 0.75, volume: 1 }),
    I({ id: "machine_tool", name: "普通车床(台)", cat: "industrial", tier: 4, pModern: 80000, pOld: 5000, ticket: "none", tags: ["工业", "机械"], weight: 1500, volume: 4000, legality: "restricted", desc: "产业升级利器，日本淘汰货国内乡镇抢着要。" }),
    I({ id: "titanium_alloy", name: "钛合金棒材(kg)", cat: "industrial", tier: 4, pModern: 200, pOld: 300, ticket: "none", tags: ["工业", "机械"], weight: 1, volume: 1, legality: "restricted", era: "old", desc: "苏联军工白菜价。" }),
    I({ id: "copper_ton", name: "铜(吨)", cat: "industrial", tier: 3, pModern: 70000, pOld: 5000, ticket: "none", tags: ["工业"], weight: 1000, volume: 110 }),
    I({ id: "corn_ton", name: "美国玉米(吨)", cat: "food_staple", tier: 2, pModern: 2000, pOld: 600, ticket: "none", tags: ["食材", "农资"], weight: 1000, volume: 1400, era: "old", desc: "美国廉价农产品，货轮发回中国日本。" }),
    I({ id: "soybean_ton", name: "美国大豆(吨)", cat: "food_staple", tier: 2, pModern: 4000, pOld: 1200, ticket: "none", tags: ["食材", "农资"], weight: 1000, volume: 1400, era: "old" })
  ];

  const antiques = [
    I({ id: "monkey_stamp", name: "庚申年猴票(枚)", cat: "antique", tier: 5, pModern: 12000, pOld: 0.08, ticket: "none", tags: ["收藏", "邮票", "礼品"], weight: 0.001, volume: 0.01, antique: true, era: "old", desc: "1980年发行价8分，现代单枚上万。" }),
    I({ id: "grain_ticket_sheet", name: "全国粮票(整版)", cat: "antique", tier: 4, pModern: 3000, pOld: 2, ticket: "none", tags: ["收藏", "邮票"], weight: 0.05, volume: 0.1, antique: true, era: "old" }),
    I({ id: "yuan_datou", name: "民国袁大头银元", cat: "antique", tier: 4, pModern: 1500, pOld: 6, ticket: "none", tags: ["收藏", "古董"], weight: 0.03, volume: 0.02, antique: true, era: "old" }),
    I({ id: "qing_porcelain", name: "清代民窑青花瓷", cat: "antique", tier: 5, pModern: 80000, pOld: 80, ticket: "none", tags: ["收藏", "古董"], weight: 1, volume: 2, antique: true, era: "old" }),
    I({ id: "guan_yao", name: "清代官窑瓷器", cat: "antique", tier: 5, pModern: 3000000, pOld: 800, ticket: "none", tags: ["收藏", "古董", "奢侈品"], weight: 1.5, volume: 3, antique: true, era: "old" }),
    I({ id: "zisha_pot", name: "顾景舟紫砂壶", cat: "antique", tier: 5, pModern: 3000000, pOld: 60, ticket: "none", tags: ["收藏", "茶", "古董"], weight: 0.5, volume: 1, antique: true, era: "old" }),
    I({ id: "tangbohu", name: "唐伯虎真迹字画", cat: "antique", tier: 5, pModern: 50000000, pOld: 500, ticket: "none", tags: ["收藏", "书画", "古董", "奢侈品"], weight: 0.5, volume: 2, antique: true, era: "old" }),
    I({ id: "qibaishi", name: "齐白石画作", cat: "antique", tier: 5, pModern: 40000000, pOld: 200, ticket: "none", tags: ["收藏", "书画", "古董", "奢侈品"], weight: 0.5, volume: 2, antique: true, era: "old" }),
    I({ id: "old_maotai", name: "80年代老茅台", cat: "antique", tier: 5, pModern: 200000, pOld: 8, ticket: "特供票", tags: ["收藏", "酒", "古董", "奢侈品"], weight: 1, volume: 1.2, antique: true, era: "old" }),
    I({ id: "rosewood_furniture", name: "老红木家具(件)", cat: "antique", tier: 5, pModern: 300000, pOld: 300, ticket: "none", tags: ["收藏", "古董"], weight: 80, volume: 400, antique: true, era: "old" }),
    I({ id: "jade_hetian", name: "和田羊脂玉籽料", cat: "antique", tier: 5, pModern: 500000, pOld: 200, ticket: "none", tags: ["收藏", "珠宝", "古董", "奢侈品"], weight: 0.3, volume: 0.2, antique: true, era: "old" }),
    I({ id: "gold_bar", name: "金条(100克)", cat: "antique", tier: 5, pModern: 50000, pOld: 1200, ticket: "none", tags: ["珠宝", "收藏"], weight: 0.1, volume: 0.05, era: "both" })
  ];

  const all = bulk.concat(antiques);
  R.register("items_commodity", { items: all, map: all.reduce((m, i) => (m[i.id] = i, m), {}) });
})();
