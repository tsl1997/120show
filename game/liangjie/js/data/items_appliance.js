(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  function I(opt) {
    return Object.assign({ weight: 1, volume: 1, legality: "legal", ticket: "none", antique: false, rarity: 3, era: "both" }, opt);
  }

  const items = [
    I({ id: "bike_forever", name: "永久牌自行车", cat: "appliance", tier: 3, pModern: 500, pOld: 160, ticket: "自行车票", tags: ["男", "女", "机械", "交通"], weight: 18, volume: 60, desc: "80年代结婚「三转一响」硬通货。" }),
    I({ id: "bike_phoenix", name: "凤凰牌自行车", cat: "appliance", tier: 3, pModern: 500, pOld: 160, ticket: "自行车票", tags: ["男", "女", "机械"], weight: 18, volume: 60 }),
    I({ id: "sewing_machine", name: "燕牌缝纫机", cat: "appliance", tier: 3, pModern: 600, pOld: 140, ticket: "缝纫机票", tags: ["女", "主妇", "机械"], weight: 22, volume: 80 }),
    I({ id: "watch_shanghai", name: "上海牌手表", cat: "appliance", tier: 3, pModern: 800, pOld: 120, ticket: "手表票", tags: ["男", "女", "工作人士", "服饰"], weight: 0.1, volume: 0.1 }),
    I({ id: "tv_daodao", name: "牡丹牌黑白电视机", cat: "appliance", tier: 3, pModern: 800, pOld: 500, ticket: "彩电票", tags: ["男", "女", "家庭", "电子"], weight: 15, volume: 80 }),
    I({ id: "tv_color", name: "彩色电视机", cat: "appliance", tier: 4, pModern: 2500, pOld: 1300, ticket: "彩电票", tags: ["家庭", "电子", "奢侈品"], weight: 25, volume: 120, desc: "80年代有钱无票也买不到的高科技奢侈品。" }),
    I({ id: "radio", name: "红灯牌收音机", cat: "electronics", tier: 2, pModern: 150, pOld: 60, ticket: "工业券", tags: ["家庭", "电子"], weight: 1.5, volume: 4 }),
    I({ id: "recorder", name: "收录机(录音机)", cat: "electronics", tier: 3, pModern: 400, pOld: 300, ticket: "工业券", tags: ["家庭", "电子", "音乐"], weight: 5, volume: 20, desc: "跳迪斯科、放邓丽君的标配。" }),
    I({ id: "walkman", name: "索尼Walkman随身听", cat: "electronics", tier: 4, pModern: 900, pOld: 400, ticket: "none", tags: ["青年", "电子", "音乐", "洋货", "奢侈品"], weight: 0.3, volume: 0.6, era: "both", desc: "80年代日本年轻人奢侈品，中国走私暴利货。" }),
    I({ id: "electric_fan", name: "电风扇", cat: "appliance", tier: 2, pModern: 150, pOld: 150, ticket: "工业券", tags: ["家庭", "电器"], weight: 6, volume: 25 }),
    I({ id: "washing_machine", name: "洗衣机", cat: "appliance", tier: 3, pModern: 1500, pOld: 300, ticket: "工业券", tags: ["家庭", "主妇", "电器"], weight: 30, volume: 120 }),
    I({ id: "refrigerator", name: "电冰箱", cat: "appliance", tier: 4, pModern: 2500, pOld: 700, ticket: "工业券", tags: ["家庭", "电器"], weight: 40, volume: 180 }),
    I({ id: "famicom", name: "任天堂红白机(FC)", cat: "electronics", tier: 4, pModern: 800, pOld: 600, ticket: "none", tags: ["青年", "少年", "电子", "游戏", "洋货"], weight: 1.5, volume: 5, era: "both", desc: "1983年发售，游戏卡带是地下暴利。" }),
    I({ id: "game_cart", name: "游戏卡带", cat: "electronics", tier: 3, pModern: 100, pOld: 150, ticket: "none", tags: ["青年", "少年", "电子", "游戏"], weight: 0.2, volume: 0.4 }),
    I({ id: "camera_seagull", name: "海鸥照相机", cat: "electronics", tier: 3, pModern: 400, pOld: 220, ticket: "工业券", tags: ["摄影", "电子"], weight: 1, volume: 2 }),
    I({ id: "typewriter", name: "打字机", cat: "book_edu", tier: 3, pModern: 500, pOld: 300, ticket: "工业券", tags: ["文教", "工作人士"], weight: 8, volume: 20 })
  ];

  R.register("items_appliance", { items, map: items.reduce((m, i) => (m[i.id] = i, m), {}) });
})();
