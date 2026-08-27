(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  function I(opt) {
    return Object.assign({ weight: 1, volume: 1, legality: "legal", ticket: "none", antique: false, rarity: 3, era: "both" }, opt);
  }

  const items = [
    I({ id: "wild_ginseng", name: "百年野山参", cat: "medicine", tier: 5, pModern: 500000, pOld: 200, tags: ["药材", "礼品", "收藏"], weight: 0.1, volume: 0.2, antique: true, era: "old" }),
    I({ id: "deer_antler", name: "鹿茸", cat: "medicine", tier: 4, pModern: 8000, pOld: 80, tags: ["药材", "礼品"], weight: 0.5, volume: 1 }),
    I({ id: "mink_fur", name: "貂皮", cat: "clothing", tier: 4, pModern: 30000, pOld: 300, tags: ["女", "服饰", "奢侈品"], weight: 1, volume: 3 }),
    I({ id: "black_fungus", name: "东北黑木耳(斤)", cat: "food_fresh", tier: 2, pModern: 60, pOld: 3, tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "hazel_mushroom", name: "榛蘑(斤)", cat: "food_fresh", tier: 3, pModern: 200, pOld: 8, tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "pine_nut", name: "大兴安岭松子(斤)", cat: "food_fresh", tier: 2, pModern: 40, pOld: 2, tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "linwa_oil", name: "林蛙油", cat: "medicine", tier: 4, pModern: 5000, pOld: 60, tags: ["药材"], weight: 0.3, volume: 0.5 }),
    I({ id: "gaoliang_wine", name: "东北高粱酒(瓶)", cat: "tobacco", tier: 2, pModern: 30, pOld: 1, tags: ["酒", "男"], weight: 0.6, volume: 0.6 }),
    I({ id: "soybean_oil", name: "东北大豆油(斤)", cat: "food_staple", tier: 1, pModern: 8, pOld: 0.9, tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "long_staple_cotton", name: "新疆长绒棉(斤)", cat: "textile", tier: 2, pModern: 20, pOld: 4, tags: ["纺织", "农资"], weight: 0.5, volume: 1 }),
    I({ id: "fine_wool", name: "新疆细羊毛(斤)", cat: "textile", tier: 2, pModern: 40, pOld: 6, tags: ["纺织"], weight: 0.5, volume: 1 }),
    I({ id: "raisin", name: "吐鲁番葡萄干(斤)", cat: "food_fresh", tier: 2, pModern: 25, pOld: 1.5, tags: ["食材", "水果"], weight: 0.5, volume: 1 }),
    I({ id: "hami_melon", name: "哈密瓜(个)", cat: "food_fresh", tier: 2, pModern: 30, pOld: 2, tags: ["食材", "水果"], weight: 2, volume: 4 }),
    I({ id: "cistanche", name: "肉苁蓉", cat: "medicine", tier: 4, pModern: 3000, pOld: 50, tags: ["药材"], weight: 0.3, volume: 0.5 }),
    I({ id: "snow_lotus", name: "天山雪莲", cat: "medicine", tier: 4, pModern: 8000, pOld: 100, tags: ["药材", "收藏"], weight: 0.1, volume: 0.2 }),
    I({ id: "lychee", name: "岭南荔枝(斤)", cat: "food_fresh", tier: 2, pModern: 15, pOld: 1.2, tags: ["食材", "水果"], weight: 0.5, volume: 1 }),
    I({ id: "longan", name: "龙眼(斤)", cat: "food_fresh", tier: 2, pModern: 12, pOld: 1, tags: ["食材", "水果"], weight: 0.5, volume: 1 }),
    I({ id: "mango", name: "芒果(斤)", cat: "food_fresh", tier: 2, pModern: 10, pOld: 1.5, tags: ["食材", "水果"], weight: 0.5, volume: 1 }),
    I({ id: "teresa_tape", name: "邓丽君磁带", cat: "electronics", tier: 2, pModern: 80, pOld: 8, tags: ["音乐", "洋货", "收藏"], weight: 0.1, volume: 0.2, era: "old" }),
    I({ id: "lotus_root", name: "莲藕(斤)", cat: "food_fresh", tier: 1, pModern: 6, pOld: 0.2, tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "wuchang_fish", name: "武昌鱼(斤)", cat: "food_fresh", tier: 2, pModern: 30, pOld: 1, tags: ["食材", "水产"], weight: 0.5, volume: 1 }),
    I({ id: "hongsan_caitai", name: "洪山菜薹(斤)", cat: "food_fresh", tier: 2, pModern: 20, pOld: 0.5, tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "silk_fabric", name: "杭纺真丝绸缎(米)", cat: "textile", tier: 3, pModern: 150, pOld: 8, tags: ["纺织", "服饰", "礼品"], weight: 0.3, volume: 1 }),
    I({ id: "shaoxing_wine", name: "绍兴黄酒(瓶)", cat: "tobacco", tier: 2, pModern: 30, pOld: 1.5, tags: ["酒"], weight: 0.6, volume: 0.7 }),
    I({ id: "hairy_crab", name: "太湖大闸蟹(对)", cat: "food_fresh", tier: 4, pModern: 200, pOld: 8, tags: ["食材", "水产"], weight: 0.5, volume: 1 }),
    I({ id: "danggui", name: "当归", cat: "medicine", tier: 3, pModern: 150, pOld: 6, tags: ["药材"], weight: 0.5, volume: 1 }),
    I({ id: "huanglian", name: "黄连", cat: "medicine", tier: 3, pModern: 200, pOld: 8, tags: ["药材"], weight: 0.5, volume: 1 }),
    I({ id: "tianma", name: "天麻", cat: "medicine", tier: 3, pModern: 300, pOld: 10, tags: ["药材"], weight: 0.5, volume: 1 }),
    I({ id: "shuxiu", name: "蜀绣(件)", cat: "antique", tier: 4, pModern: 3000, pOld: 30, tags: ["收藏", "书画", "服饰"], weight: 0.5, volume: 1, antique: true }),
    I({ id: "wild_fungus", name: "川西野生菌(斤)", cat: "food_fresh", tier: 3, pModern: 300, pOld: 5, tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "luzhou_laojiao", name: "泸州老窖(瓶)", cat: "tobacco", tier: 4, pModern: 600, pOld: 4, tags: ["酒", "礼品"], weight: 1, volume: 1.2 }),
    I({ id: "jinyinhua_lu", name: "金银花露(箱)", cat: "medicine", tier: 2, pModern: 60, pOld: 6, tags: ["医药", "饮品"], weight: 3, volume: 6, era: "modern" }),
    I({ id: "duojiao", name: "湖南剁椒(瓶)", cat: "food_processed", tier: 1, pModern: 12, pOld: 1, tags: ["食材"], weight: 0.5, volume: 0.6 }),
    I({ id: "pixian_douban", name: "郫县豆瓣(瓶)", cat: "food_processed", tier: 1, pModern: 15, pOld: 1.2, tags: ["食材"], weight: 0.5, volume: 0.6 }),
    I({ id: "laoganma", name: "老干妈辣椒酱(瓶)", cat: "food_processed", tier: 1, pModern: 12, pOld: 1.5, tags: ["食材"], weight: 0.4, volume: 0.5, era: "modern" }),
    I({ id: "puer_tea", name: "云南普洱(饼)", cat: "food_processed", tier: 4, pModern: 300, pOld: 8, tags: ["茶", "收藏"], weight: 0.4, volume: 0.5 }),
    I({ id: "tieguanyin", name: "福建铁观音(斤)", cat: "food_processed", tier: 3, pModern: 200, pOld: 6, tags: ["茶"], weight: 0.5, volume: 1 }),
    I({ id: "luosifen", name: "柳州螺蛳粉(箱)", cat: "food_processed", tier: 2, pModern: 50, pOld: 5, tags: ["食材"], weight: 2, volume: 4, era: "modern" }),
    I({ id: "beef_jerky", name: "内蒙牛肉干(斤)", cat: "food_processed", tier: 2, pModern: 120, pOld: 8, tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "goji", name: "宁夏枸杞(斤)", cat: "medicine", tier: 2, pModern: 60, pOld: 5, tags: ["药材"], weight: 0.5, volume: 1 }),
    I({ id: "shanxi_vinegar", name: "山西陈醋(瓶)", cat: "food_processed", tier: 1, pModern: 10, pOld: 0.5, tags: ["食材"], weight: 0.6, volume: 0.7 }),
    I({ id: "xuan_paper", name: "安徽宣纸(刀)", cat: "book_edu", tier: 3, pModern: 300, pOld: 15, tags: ["文教", "书画"], weight: 1, volume: 2 }),
    I({ id: "jingde_porcelain", name: "景德镇瓷器(件)", cat: "antique", tier: 3, pModern: 500, pOld: 20, tags: ["收藏", "古董"], weight: 1, volume: 2, antique: true }),
    I({ id: "jinhua_ham", name: "金华火腿(只)", cat: "food_processed", tier: 3, pModern: 300, pOld: 15, tags: ["食材"], weight: 2, volume: 3 }),
    I({ id: "guangdong_sausage", name: "广式腊肠(斤)", cat: "food_processed", tier: 2, pModern: 50, pOld: 4, tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "nenjiang_rice", name: "五常大米(袋)", cat: "food_staple", tier: 2, pModern: 100, pOld: 6, tags: ["食材"], weight: 5, volume: 6 }),
    I({ id: "sake", name: "日本清酒(瓶)", cat: "tobacco", tier: 3, pModern: 200, pOld: 100, tags: ["酒", "洋货"], weight: 0.8, volume: 1, era: "old" }),
    I({ id: "vodka", name: "苏联伏特加(瓶)", cat: "tobacco", tier: 2, pModern: 150, pOld: 80, tags: ["酒", "洋货"], weight: 0.8, volume: 1, era: "old" }),
    I({ id: "marlboro", name: "万宝路香烟(条)", cat: "tobacco", tier: 3, pModern: 200, pOld: 60, tags: ["烟", "洋货"], weight: 0.3, volume: 0.5, era: "old" }),
    I({ id: "jeans", name: "美国牛仔裤(条)", cat: "clothing", tier: 3, pModern: 500, pOld: 200, tags: ["男", "女", "服饰", "洋货"], weight: 0.8, volume: 2, era: "old" }),
    I({ id: "toyota_crown", name: "丰田皇冠轿车", cat: "vehicle", tier: 5, pModern: 300000, pOld: 80000, tags: ["汽车", "富豪"], weight: 1400, volume: 10000, era: "old", legality: "restricted" })
  ];

  R.register("items_province", { items, map: items.reduce((m, i) => (m[i.id] = i, m), {}) });
})();
