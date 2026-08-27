(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  function I(opt) {
    return Object.assign({ weight: 1, volume: 1, legality: "legal", ticket: "none", antique: false, rarity: 3, era: "both" }, opt);
  }

  const items = [
    I({ id: "rice", name: "大米(斤)", cat: "food_staple", tier: 1, pModern: 2.5, pOld: 0.15, ticket: "粮票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "flour", name: "面粉(斤)", cat: "food_staple", tier: 1, pModern: 2.0, pOld: 0.19, ticket: "粮票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "noodle", name: "挂面(斤)", cat: "food_staple", tier: 1, pModern: 4.8, pOld: 0.30, ticket: "粮票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "corn", name: "玉米(斤)", cat: "food_staple", tier: 1, pModern: 1.5, pOld: 0.10, ticket: "粮票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "soybean", name: "大豆(斤)", cat: "food_staple", tier: 1, pModern: 3.5, pOld: 0.17, ticket: "粮票", tags: ["食材", "农资"], weight: 0.5, volume: 1 }),
    I({ id: "pork", name: "猪肉(斤)", cat: "food_fresh", tier: 1, pModern: 22, pOld: 0.90, ticket: "肉票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "beef", name: "牛肉(斤)", cat: "food_fresh", tier: 2, pModern: 45, pOld: 0.95, ticket: "肉票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "egg", name: "鸡蛋(斤)", cat: "food_fresh", tier: 1, pModern: 6, pOld: 0.85, ticket: "副食票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "cabbage", name: "大白菜(斤)", cat: "food_fresh", tier: 1, pModern: 1.5, pOld: 0.04, ticket: "副食票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "potato", name: "土豆(斤)", cat: "food_fresh", tier: 1, pModern: 2, pOld: 0.06, ticket: "副食票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "tomato", name: "番茄(斤)", cat: "food_fresh", tier: 1, pModern: 3, pOld: 0.10, ticket: "副食票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "apple", name: "苹果(斤)", cat: "food_fresh", tier: 1, pModern: 5, pOld: 0.35, ticket: "副食票", tags: ["食材", "水果"], weight: 0.5, volume: 1 }),
    I({ id: "banana", name: "香蕉(斤)", cat: "food_fresh", tier: 2, pModern: 4, pOld: 0.60, ticket: "none", tags: ["食材", "水果"], weight: 0.5, volume: 1, era: "modern", desc: "80年代北方厂区工人为孩子尝鲜疯狂抢购。" }),
    I({ id: "lychee_dried", name: "荔枝干(斤)", cat: "food_fresh", tier: 2, pModern: 30, pOld: 8, ticket: "none", tags: ["食材", "水果"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "hairtail", name: "带鱼(斤)", cat: "food_fresh", tier: 1, pModern: 25, pOld: 0.70, ticket: "副食票", tags: ["食材", "水产"], weight: 0.5, volume: 1 }),
    I({ id: "sugar", name: "白糖(斤)", cat: "food_processed", tier: 1, pModern: 5, pOld: 0.78, ticket: "副食票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "salt", name: "食盐(袋)", cat: "food_processed", tier: 1, pModern: 2, pOld: 0.14, ticket: "none", tags: ["食材"], weight: 0.5, volume: 0.5 }),
    I({ id: "soy_sauce", name: "酱油(瓶)", cat: "food_processed", tier: 1, pModern: 8, pOld: 0.30, ticket: "none", tags: ["食材"], weight: 0.5, volume: 0.6 }),
    I({ id: "cooking_oil", name: "食用油(斤)", cat: "food_staple", tier: 1, pModern: 12, pOld: 0.80, ticket: "油票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "luncheon_meat", name: "午餐肉罐头", cat: "food_processed", tier: 2, pModern: 15, pOld: 3, ticket: "none", tags: ["食材"], weight: 0.4, volume: 0.6, era: "modern", desc: "运到苏联就是换钢材的神物。" }),
    I({ id: "candy_rabbit", name: "大白兔奶糖(斤)", cat: "food_processed", tier: 2, pModern: 18, pOld: 1.2, ticket: "副食票", tags: ["食材", "零食"], weight: 0.5, volume: 1 }),
    I({ id: "malt_extract", name: "麦乳精(罐)", cat: "food_processed", tier: 2, pModern: 20, pOld: 2.5, ticket: "副食票", tags: ["食材", "礼品"], weight: 0.5, volume: 1 }),
    I({ id: "milk_powder", name: "奶粉(袋)", cat: "food_processed", tier: 2, pModern: 40, pOld: 2, ticket: "副食票", tags: ["食材", "儿童"], weight: 0.5, volume: 1 }),
    I({ id: "beibingyang", name: "北冰洋汽水(瓶)", cat: "food_processed", tier: 1, pModern: 4, pOld: 0.15, ticket: "none", tags: ["零食"], weight: 0.5, volume: 0.4 }),
    I({ id: "coca_cola", name: "可口可乐(瓶)", cat: "food_processed", tier: 2, pModern: 3.5, pOld: 3, ticket: "none", tags: ["零食", "洋货"], weight: 0.5, volume: 0.4, era: "modern", desc: "友谊商店外汇券专供的稀罕货。" }),
    I({ id: "daqianmen", name: "大前门香烟(盒)", cat: "tobacco", tier: 1, pModern: 15, pOld: 0.35, ticket: "烟票", tags: ["烟", "男"], weight: 0.03, volume: 0.1 }),
    I({ id: "maotai", name: "茅台酒(瓶)", cat: "tobacco", tier: 5, pModern: 3000, pOld: 8, ticket: "特供票", tags: ["酒", "男", "奢侈品", "礼品"], weight: 1, volume: 1.2, antique: true, desc: "80年代几元一瓶，现代飞天茅台天价。" }),
    I({ id: "wuliangye", name: "五粮液(瓶)", cat: "tobacco", tier: 4, pModern: 1300, pOld: 5, ticket: "特供票", tags: ["酒", "男", "礼品"], weight: 1, volume: 1.2 }),
    I({ id: "erguotou", name: "二锅头(瓶)", cat: "tobacco", tier: 1, pModern: 15, pOld: 0.8, ticket: "none", tags: ["酒", "男"], weight: 0.5, volume: 0.5 }),
    I({ id: "qingdao_beer", name: "青岛啤酒(瓶)", cat: "tobacco", tier: 1, pModern: 8, pOld: 0.6, ticket: "none", tags: ["酒", "男"], weight: 0.6, volume: 0.6 }),
    I({ id: "longjing_tea", name: "西湖龙井(斤)", cat: "food_processed", tier: 4, pModern: 300, pOld: 5, ticket: "none", tags: ["茶", "礼品"], weight: 0.5, volume: 1 }),
    I({ id: "jasmine_tea", name: "茉莉花茶(斤)", cat: "food_processed", tier: 2, pModern: 60, pOld: 2, ticket: "none", tags: ["茶"], weight: 0.5, volume: 1 }),
    I({ id: "instant_noodle", name: "方便面(包)", cat: "food_processed", tier: 2, pModern: 4, pOld: 6, ticket: "none", tags: ["食材", "零食"], weight: 0.1, volume: 0.2, era: "modern", desc: "90年代初期运到莫斯科换军工手稿。" })
  ];

  R.register("items_consumable", { items, map: items.reduce((m, i) => (m[i.id] = i, m), {}) });
})();
