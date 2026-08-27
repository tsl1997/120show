(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  function I(opt) {
    return Object.assign({ weight: 1, volume: 1, legality: "legal", ticket: "none", antique: false, rarity: 3, era: "both" }, opt);
  }

  const cloth = [
    I({ id: "cotton_cloth", name: "白市布(尺)", cat: "clothing", tier: 1, pModern: 10, pOld: 0.3, ticket: "布票", tags: ["服饰", "纺织"], weight: 0.2, volume: 1 }),
    I({ id: "flower_cloth", name: "花布(尺)", cat: "clothing", tier: 1, pModern: 15, pOld: 0.5, ticket: "布票", tags: ["女", "服饰", "纺织"], weight: 0.2, volume: 1 }),
    I({ id: "dacron_fabric", name: "的确良面料(米)", cat: "clothing", tier: 2, pModern: 20, pOld: 2.5, ticket: "布票", tags: ["男", "女", "服饰", "纺织"], weight: 0.3, volume: 2, desc: "80年代最时髦的化纤面料。" }),
    I({ id: "card_brocade", name: "的卡面料(米)", cat: "clothing", tier: 2, pModern: 30, pOld: 3.5, ticket: "布票", tags: ["男", "服饰"], weight: 0.3, volume: 2 }),
    I({ id: "denim_cloth", name: "劳动布(米)", cat: "clothing", tier: 2, pModern: 40, pOld: 1.8, ticket: "布票", tags: ["男", "服饰"], weight: 0.4, volume: 2 }),
    I({ id: "wool_yarn", name: "毛线(斤)", cat: "clothing", tier: 3, pModern: 120, pOld: 15, ticket: "布票", tags: ["女", "主妇", "服饰"], weight: 0.5, volume: 2 }),
    I({ id: "towel", name: "毛巾(条)", cat: "daily", tier: 1, pModern: 10, pOld: 0.8, ticket: "布票", tags: ["日用"], weight: 0.1, volume: 0.5 }),
    I({ id: "pillow_towel", name: "枕巾(条)", cat: "daily", tier: 1, pModern: 12, pOld: 1.5, ticket: "布票", tags: ["日用"], weight: 0.1, volume: 0.5 }),
    I({ id: "bed_sheet", name: "床单(条)", cat: "daily", tier: 2, pModern: 60, pOld: 6, ticket: "布票", tags: ["日用"], weight: 0.6, volume: 2 }),
    I({ id: "handkerchief", name: "手绢(条)", cat: "daily", tier: 1, pModern: 5, pOld: 0.2, ticket: "布票", tags: ["日用"], weight: 0.02, volume: 0.1 }),
    I({ id: "cotton_socks", name: "棉袜(双)", cat: "clothing", tier: 1, pModern: 8, pOld: 0.8, ticket: "布票", tags: ["男", "女", "服饰"], weight: 0.05, volume: 0.2 }),
    I({ id: "jiefang_shoes", name: "解放鞋(双)", cat: "clothing", tier: 1, pModern: 50, pOld: 4, ticket: "布票", tags: ["男", "服饰"], weight: 0.8, volume: 2 }),
    I({ id: "cloth_shoes", name: "布鞋(双)", cat: "clothing", tier: 1, pModern: 40, pOld: 3.5, ticket: "布票", tags: ["男", "女", "服饰"], weight: 0.5, volume: 2 }),
    I({ id: "leather_shoes", name: "皮鞋(双)", cat: "clothing", tier: 3, pModern: 300, pOld: 20, ticket: "工业券", tags: ["男", "工作人士", "服饰"], weight: 1, volume: 3 }),
    I({ id: "army_cap", name: "军帽(顶)", cat: "clothing", tier: 1, pModern: 30, pOld: 2.5, ticket: "布票", tags: ["男", "服饰"], weight: 0.1, volume: 0.5 }),
    I({ id: "scarf_wool", name: "毛线围脖(条)", cat: "clothing", tier: 2, pModern: 60, pOld: 3, ticket: "布票", tags: ["男", "女", "服饰", "防寒"], weight: 0.2, volume: 0.8 })
  ];

  const daily = [
    I({ id: "enamel_basin", name: "搪瓷脸盆", cat: "daily", tier: 1, pModern: 25, pOld: 3.5, ticket: "工业券", tags: ["主妇", "日用"], weight: 0.6, volume: 4 }),
    I({ id: "enamel_cup", name: "搪瓷口杯", cat: "daily", tier: 1, pModern: 15, pOld: 1.2, ticket: "工业券", tags: ["日用"], weight: 0.2, volume: 0.5 }),
    I({ id: "aluminum_pot", name: "铝锅", cat: "daily", tier: 2, pModern: 60, pOld: 8, ticket: "工业券", tags: ["主妇", "日用"], weight: 1, volume: 4 }),
    I({ id: "iron_wok", name: "铁锅", cat: "daily", tier: 2, pModern: 80, pOld: 5, ticket: "工业券", tags: ["主妇", "日用"], weight: 1.5, volume: 5 }),
    I({ id: "kitchen_knife", name: "菜刀", cat: "daily", tier: 2, pModern: 40, pOld: 2.5, ticket: "工业券", tags: ["主妇", "日用"], weight: 0.4, volume: 1 }),
    I({ id: "scissors", name: "剪刀", cat: "daily", tier: 1, pModern: 15, pOld: 1.8, ticket: "工业券", tags: ["日用"], weight: 0.15, volume: 0.3 }),
    I({ id: "mirror_small", name: "小镜子", cat: "daily", tier: 1, pModern: 8, pOld: 1.5, ticket: "工业券", tags: ["女", "日用"], weight: 0.1, volume: 0.2 }),
    I({ id: "comb", name: "梳子", cat: "daily", tier: 1, pModern: 5, pOld: 0.5, ticket: "工业券", tags: ["女", "日用"], weight: 0.05, volume: 0.1 }),
    I({ id: "toothpaste", name: "牙膏", cat: "daily", tier: 1, pModern: 12, pOld: 0.4, ticket: "工业券", tags: ["日用"], weight: 0.1, volume: 0.2 }),
    I({ id: "toothbrush", name: "牙刷", cat: "daily", tier: 1, pModern: 8, pOld: 0.3, ticket: "工业券", tags: ["日用"], weight: 0.03, volume: 0.1 }),
    I({ id: "perfumed_soap", name: "香皂", cat: "daily", tier: 1, pModern: 8, pOld: 0.5, ticket: "工业券", tags: ["日用"], weight: 0.1, volume: 0.2 }),
    I({ id: "detergent", name: "洗衣粉(袋)", cat: "daily", tier: 1, pModern: 15, pOld: 0.8, ticket: "工业券", tags: ["主妇", "日用"], weight: 0.5, volume: 1 }),
    I({ id: "battery", name: "电池(节)", cat: "daily", tier: 1, pModern: 3, pOld: 0.2, ticket: "工业券", tags: ["日用", "电子"], weight: 0.05, volume: 0.1 }),
    I({ id: "bulb", name: "灯泡(只)", cat: "daily", tier: 1, pModern: 5, pOld: 0.4, ticket: "工业券", tags: ["日用"], weight: 0.05, volume: 0.1 }),
    I({ id: "flashlight", name: "手电筒", cat: "daily", tier: 2, pModern: 20, pOld: 2.5, ticket: "工业券", tags: ["男", "日用"], weight: 0.3, volume: 0.5 }),
    I({ id: "kerosene_lamp", name: "煤油灯", cat: "daily", tier: 1, pModern: 40, pOld: 1.5, ticket: "工业券", tags: ["日用"], weight: 0.5, volume: 1 }),
    I({ id: "plastic_bucket", name: "塑料水桶", cat: "daily", tier: 1, pModern: 20, pOld: 2, ticket: "工业券", tags: ["日用"], weight: 0.5, volume: 6 }),
    I({ id: "padlock", name: "挂锁", cat: "daily", tier: 1, pModern: 12, pOld: 1.2, ticket: "工业券", tags: ["日用"], weight: 0.3, volume: 0.3 }),
    I({ id: "broom", name: "笤帚", cat: "daily", tier: 1, pModern: 12, pOld: 0.8, ticket: "none", tags: ["日用"], weight: 0.4, volume: 3 })
  ];

  const food = [
    I({ id: "tofu", name: "豆腐(块)", cat: "food_fresh", tier: 1, pModern: 3, pOld: 0.05, ticket: "副食票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "dried_tofu", name: "豆腐干(块)", cat: "food_fresh", tier: 1, pModern: 4, pOld: 0.08, ticket: "副食票", tags: ["食材"], weight: 0.2, volume: 0.3 }),
    I({ id: "vermicelli", name: "粉丝(斤)", cat: "food_processed", tier: 1, pModern: 15, pOld: 0.6, ticket: "副食票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "peanut", name: "花生(斤)", cat: "food_fresh", tier: 1, pModern: 12, pOld: 0.9, ticket: "副食票", tags: ["食材"], weight: 0.5, volume: 1 }),
    I({ id: "melon_seeds", name: "瓜子(斤)", cat: "food_processed", tier: 1, pModern: 15, pOld: 1.2, ticket: "副食票", tags: ["零食"], weight: 0.5, volume: 1 }),
    I({ id: "fruit_candy", name: "水果糖(斤)", cat: "food_processed", tier: 1, pModern: 20, pOld: 1.5, ticket: "副食票", tags: ["零食", "儿童"], weight: 0.5, volume: 1 }),
    I({ id: "milk_candy", name: "奶糖(斤)", cat: "food_processed", tier: 2, pModern: 30, pOld: 2.2, ticket: "副食票", tags: ["零食", "儿童"], weight: 0.5, volume: 1 }),
    I({ id: "taosu", name: "桃酥(斤)", cat: "food_processed", tier: 1, pModern: 18, pOld: 0.9, ticket: "副食票", tags: ["零食"], weight: 0.5, volume: 1 }),
    I({ id: "cake", name: "蛋糕(斤)", cat: "food_processed", tier: 2, pModern: 25, pOld: 1.3, ticket: "副食票", tags: ["零食"], weight: 0.5, volume: 1 }),
    I({ id: "mooncake", name: "月饼(斤)", cat: "food_processed", tier: 2, pModern: 40, pOld: 1.5, ticket: "副食票", tags: ["零食", "礼品"], weight: 0.5, volume: 1 }),
    I({ id: "canned_fruit", name: "水果罐头(瓶)", cat: "food_processed", tier: 2, pModern: 12, pOld: 1.5, ticket: "副食票", tags: ["零食", "礼品"], weight: 0.5, volume: 0.6 }),
    I({ id: "canned_fish", name: "鱼罐头(瓶)", cat: "food_processed", tier: 2, pModern: 15, pOld: 1.8, ticket: "副食票", tags: ["食材"], weight: 0.4, volume: 0.5 }),
    I({ id: "vinegar", name: "醋(瓶)", cat: "food_processed", tier: 1, pModern: 8, pOld: 0.3, ticket: "none", tags: ["食材"], weight: 0.6, volume: 0.6 }),
    I({ id: "msg", name: "味精(包)", cat: "food_processed", tier: 1, pModern: 6, pOld: 0.5, ticket: "none", tags: ["食材"], weight: 0.2, volume: 0.3 }),
    I({ id: "pepper_corn", name: "花椒(两)", cat: "food_processed", tier: 1, pModern: 8, pOld: 0.3, ticket: "none", tags: ["食材"], weight: 0.05, volume: 0.1 }),
    I({ id: "dried_chili", name: "干辣椒(两)", cat: "food_processed", tier: 1, pModern: 6, pOld: 0.4, ticket: "none", tags: ["食材"], weight: 0.05, volume: 0.1 }),
    I({ id: "dried_shrimp", name: "虾皮(两)", cat: "food_fresh", tier: 2, pModern: 15, pOld: 0.8, ticket: "副食票", tags: ["食材", "水产"], weight: 0.05, volume: 0.1 })
  ];

  const tobacco = [
    I({ id: "cig_hengda", name: "恒大烟(盒)", cat: "tobacco", tier: 1, pModern: 20, pOld: 0.28, ticket: "烟票", tags: ["烟", "男"], weight: 0.03, volume: 0.1 }),
    I({ id: "cig_guangrong", name: "光荣烟(盒)", cat: "tobacco", tier: 1, pModern: 15, pOld: 0.2, ticket: "烟票", tags: ["烟", "男"], weight: 0.03, volume: 0.1 }),
    I({ id: "cig_dashengchan", name: "大生产烟(盒)", cat: "tobacco", tier: 1, pModern: 18, pOld: 0.25, ticket: "烟票", tags: ["烟", "男"], weight: 0.03, volume: 0.1 }),
    I({ id: "cig_hongtashan", name: "红塔山(盒)", cat: "tobacco", tier: 2, pModern: 50, pOld: 0.6, ticket: "烟票", tags: ["烟", "男"], weight: 0.03, volume: 0.1 }),
    I({ id: "cig_zhonghua", name: "中华烟(盒)", cat: "tobacco", tier: 4, pModern: 70, pOld: 1.3, ticket: "特供票", tags: ["烟", "男", "礼品"], weight: 0.03, volume: 0.1 }),
    I({ id: "bulk_liquor", name: "散装白酒(斤)", cat: "tobacco", tier: 1, pModern: 25, pOld: 1.2, ticket: "none", tags: ["酒", "男"], weight: 0.5, volume: 0.6 }),
    I({ id: "juice_syrup", name: "果汁露(瓶)", cat: "food_processed", tier: 1, pModern: 8, pOld: 0.5, ticket: "none", tags: ["零食"], weight: 0.5, volume: 0.5 })
  ];

  const stationery = [
    I({ id: "pencil", name: "铅笔(支)", cat: "book_edu", tier: 1, pModern: 1, pOld: 0.05, ticket: "none", tags: ["文教"], weight: 0.01, volume: 0.05 }),
    I({ id: "pen_hero", name: "英雄钢笔(支)", cat: "book_edu", tier: 2, pModern: 50, pOld: 2.5, ticket: "工业券", tags: ["文教"], weight: 0.03, volume: 0.1 }),
    I({ id: "ink", name: "墨水(瓶)", cat: "book_edu", tier: 1, pModern: 8, pOld: 0.4, ticket: "none", tags: ["文教"], weight: 0.2, volume: 0.3 }),
    I({ id: "notebook", name: "作业本(本)", cat: "book_edu", tier: 1, pModern: 3, pOld: 0.1, ticket: "none", tags: ["文教"], weight: 0.05, volume: 0.2 }),
    I({ id: "eraser", name: "橡皮(块)", cat: "book_edu", tier: 1, pModern: 2, pOld: 0.05, ticket: "none", tags: ["文教"], weight: 0.01, volume: 0.05 }),
    I({ id: "ruler", name: "尺子(把)", cat: "book_edu", tier: 1, pModern: 3, pOld: 0.2, ticket: "none", tags: ["文教"], weight: 0.03, volume: 0.1 }),
    I({ id: "schoolbag", name: "书包(个)", cat: "book_edu", tier: 2, pModern: 60, pOld: 4, ticket: "布票", tags: ["文教", "儿童"], weight: 0.5, volume: 5 }),
    I({ id: "picture_book", name: "小人书(本)", cat: "book_edu", tier: 1, pModern: 10, pOld: 0.15, ticket: "none", tags: ["文教", "儿童", "收藏"], weight: 0.1, volume: 0.2 }),
    I({ id: "novel_book", name: "小说(本)", cat: "book_edu", tier: 2, pModern: 40, pOld: 1.2, ticket: "none", tags: ["文教"], weight: 0.4, volume: 0.8 }),
    I({ id: "pictorial", name: "画报(本)", cat: "book_edu", tier: 1, pModern: 15, pOld: 0.3, ticket: "none", tags: ["文教"], weight: 0.3, volume: 0.5 }),
    I({ id: "newyear_painting", name: "年画(张)", cat: "book_edu", tier: 1, pModern: 20, pOld: 0.2, ticket: "none", tags: ["文教", "收藏"], weight: 0.05, volume: 0.2 })
  ];

  const medicine = [
    I({ id: "painkiller", name: "去痛片(盒)", cat: "medicine", tier: 1, pModern: 10, pOld: 0.5, ticket: "none", tags: ["医药"], weight: 0.05, volume: 0.1 }),
    I({ id: "ganmaoling", name: "感冒灵(盒)", cat: "medicine", tier: 1, pModern: 15, pOld: 0.8, ticket: "none", tags: ["医药"], weight: 0.05, volume: 0.1 }),
    I({ id: "vitamin", name: "维生素(瓶)", cat: "medicine", tier: 2, pModern: 30, pOld: 1.2, ticket: "none", tags: ["医药"], weight: 0.1, volume: 0.2 }),
    I({ id: "iodine_tincture", name: "碘酒(瓶)", cat: "medicine", tier: 1, pModern: 8, pOld: 0.4, ticket: "none", tags: ["医药"], weight: 0.1, volume: 0.15 }),
    I({ id: "gauze", name: "纱布(卷)", cat: "medicine", tier: 1, pModern: 6, pOld: 0.5, ticket: "none", tags: ["医药"], weight: 0.05, volume: 0.1 }),
    I({ id: "rendan", name: "人丹(袋)", cat: "medicine", tier: 1, pModern: 5, pOld: 0.2, ticket: "none", tags: ["医药"], weight: 0.02, volume: 0.05 }),
    I({ id: "fengyoujing", name: "风油精(瓶)", cat: "medicine", tier: 1, pModern: 8, pOld: 0.3, ticket: "none", tags: ["医药"], weight: 0.03, volume: 0.05 }),
    I({ id: "shidishui", name: "十滴水(瓶)", cat: "medicine", tier: 1, pModern: 6, pOld: 0.2, ticket: "none", tags: ["医药"], weight: 0.05, volume: 0.1 })
  ];

  const modernFood = [
    I({ id: "chicken_breast", name: "鸡胸肉(斤)", cat: "food_fresh", tier: 1, pModern: 15, pOld: 1.8, tags: ["食材"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "mutton", name: "羊肉(斤)", cat: "food_fresh", tier: 2, pModern: 50, pOld: 1.5, tags: ["食材"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "grass_carp", name: "草鱼(斤)", cat: "food_fresh", tier: 1, pModern: 12, pOld: 1, tags: ["食材", "水产"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "shrimp_fresh", name: "鲜虾(斤)", cat: "food_fresh", tier: 3, pModern: 45, pOld: 5, tags: ["食材", "水产"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "milk_box", name: "牛奶(盒)", cat: "food_processed", tier: 1, pModern: 3.5, pOld: 2, tags: ["食材", "饮品"], weight: 0.25, volume: 0.3, era: "modern" }),
    I({ id: "yogurt", name: "酸奶(杯)", cat: "food_processed", tier: 1, pModern: 5, pOld: 2, tags: ["零食", "饮品"], weight: 0.2, volume: 0.2, era: "modern" }),
    I({ id: "bread", name: "面包(个)", cat: "food_processed", tier: 1, pModern: 8, pOld: 2, tags: ["零食"], weight: 0.3, volume: 0.5, era: "modern" }),
    I({ id: "chips", name: "薯片(袋)", cat: "food_processed", tier: 1, pModern: 8, pOld: 2, tags: ["零食"], weight: 0.1, volume: 0.3, era: "modern" }),
    I({ id: "chocolate", name: "巧克力(盒)", cat: "food_processed", tier: 2, pModern: 40, pOld: 8, tags: ["零食", "礼品"], weight: 0.3, volume: 0.4, era: "modern" }),
    I({ id: "coffee", name: "咖啡(盒)", cat: "food_processed", tier: 2, pModern: 50, pOld: 10, tags: ["饮品"], weight: 0.3, volume: 0.5, era: "modern" }),
    I({ id: "mineral_water", name: "矿泉水(瓶)", cat: "food_processed", tier: 1, pModern: 2, pOld: 1, tags: ["饮品"], weight: 0.6, volume: 0.6, era: "modern" }),
    I({ id: "cucumber", name: "黄瓜(斤)", cat: "food_fresh", tier: 1, pModern: 3.5, pOld: 0.3, tags: ["食材"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "eggplant", name: "茄子(斤)", cat: "food_fresh", tier: 1, pModern: 4, pOld: 0.4, tags: ["食材"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "green_pepper", name: "青椒(斤)", cat: "food_fresh", tier: 1, pModern: 5, pOld: 0.5, tags: ["食材"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "watermelon", name: "西瓜(个)", cat: "food_fresh", tier: 1, pModern: 20, pOld: 3, tags: ["食材", "水果"], weight: 5, volume: 8, era: "modern" }),
    I({ id: "grape", name: "葡萄(斤)", cat: "food_fresh", tier: 2, pModern: 12, pOld: 1.5, tags: ["食材", "水果"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "orange", name: "橙子(斤)", cat: "food_fresh", tier: 1, pModern: 8, pOld: 1, tags: ["食材", "水果"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "strawberry", name: "草莓(斤)", cat: "food_fresh", tier: 2, pModern: 25, pOld: 3, tags: ["食材", "水果"], weight: 0.5, volume: 1, era: "modern" })
  ];

  const modernDaily = [
    I({ id: "laundry_liquid", name: "洗衣液(瓶)", cat: "daily", tier: 1, pModern: 30, pOld: 8, tags: ["主妇", "日用"], weight: 1, volume: 1, era: "modern" }),
    I({ id: "shampoo", name: "洗发水(瓶)", cat: "daily", tier: 1, pModern: 40, pOld: 10, tags: ["日用"], weight: 0.5, volume: 0.5, era: "modern" }),
    I({ id: "body_wash", name: "沐浴露(瓶)", cat: "daily", tier: 1, pModern: 35, pOld: 8, tags: ["日用"], weight: 0.5, volume: 0.5, era: "modern" }),
    I({ id: "tissue_paper", name: "抽纸(提)", cat: "daily", tier: 1, pModern: 15, pOld: 4, tags: ["日用"], weight: 0.8, volume: 2, era: "modern" }),
    I({ id: "trash_bag", name: "垃圾袋(卷)", cat: "daily", tier: 1, pModern: 8, pOld: 2, tags: ["日用"], weight: 0.2, volume: 0.5, era: "modern" }),
    I({ id: "socket", name: "插线板", cat: "daily", tier: 2, pModern: 40, pOld: 15, tags: ["日用", "电子"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "screwdriver", name: "螺丝刀(套)", cat: "industrial", tier: 2, pModern: 30, pOld: 6, tags: ["机械", "男"], weight: 0.5, volume: 1, era: "modern" }),
    I({ id: "tape", name: "胶带(卷)", cat: "daily", tier: 1, pModern: 6, pOld: 1.5, tags: ["日用"], weight: 0.3, volume: 0.5, era: "modern" }),
    I({ id: "ibuprofen", name: "布洛芬(盒)", cat: "medicine", tier: 2, pModern: 20, pOld: 40, tags: ["医药"], weight: 0.05, volume: 0.1, era: "modern" }),
    I({ id: "cold_granule", name: "感冒冲剂(盒)", cat: "medicine", tier: 1, pModern: 25, pOld: 30, tags: ["医药"], weight: 0.1, volume: 0.2, era: "modern" }),
    I({ id: "bandaid", name: "创可贴(盒)", cat: "medicine", tier: 1, pModern: 10, pOld: 20, tags: ["医药"], weight: 0.05, volume: 0.1, era: "modern" }),
    I({ id: "thermometer", name: "体温计(支)", cat: "medicine", tier: 1, pModern: 8, pOld: 15, tags: ["医药"], weight: 0.03, volume: 0.1, era: "modern" }),
    I({ id: "mask_n95", name: "口罩(盒)", cat: "medicine", tier: 2, pModern: 30, pOld: 100, tags: ["医药"], weight: 0.2, volume: 0.5, era: "modern" }),
    I({ id: "disinfectant", name: "消毒液(瓶)", cat: "medicine", tier: 1, pModern: 15, pOld: 50, tags: ["医药"], weight: 0.5, volume: 0.5, era: "modern" })
  ];

  const modernElectronics = [
    I({ id: "earphone", name: "蓝牙耳机", cat: "electronics", tier: 3, pModern: 200, pOld: 300, tags: ["男", "女", "青年", "电子"], weight: 0.05, volume: 0.1, era: "modern" }),
    I({ id: "powerbank", name: "充电宝", cat: "electronics", tier: 2, pModern: 100, pOld: 250, tags: ["电子"], weight: 0.3, volume: 0.4, era: "modern" }),
    I({ id: "bt_speaker", name: "蓝牙音箱", cat: "electronics", tier: 2, pModern: 150, pOld: 300, tags: ["音乐", "电子"], weight: 0.6, volume: 1, era: "modern" }),
    I({ id: "tablet", name: "平板电脑", cat: "electronics", tier: 5, pModern: 3000, pOld: 15000, tags: ["男", "女", "工作人士", "电子"], weight: 0.6, volume: 1.2, era: "modern" }),
    I({ id: "smart_watch", name: "智能手表", cat: "electronics", tier: 4, pModern: 1500, pOld: 8000, tags: ["男", "女", "青年", "电子"], weight: 0.1, volume: 0.2, era: "modern" }),
    I({ id: "router", name: "无线路由器", cat: "electronics", tier: 3, pModern: 200, pOld: 500, tags: ["电子"], weight: 0.3, volume: 0.6, era: "modern" }),
    I({ id: "microwave", name: "微波炉", cat: "appliance", tier: 3, pModern: 500, pOld: 1000, tags: ["主妇", "电器"], weight: 12, volume: 40, era: "modern" }),
    I({ id: "rice_cooker", name: "电饭煲", cat: "appliance", tier: 3, pModern: 300, pOld: 600, tags: ["主妇", "电器"], weight: 3, volume: 10, era: "modern" }),
    I({ id: "induction_cooker", name: "电磁炉", cat: "appliance", tier: 3, pModern: 250, pOld: 500, tags: ["主妇", "电器"], weight: 2.5, volume: 8, era: "modern" }),
    I({ id: "air_fryer", name: "空气炸锅", cat: "appliance", tier: 3, pModern: 400, pOld: 800, tags: ["主妇", "电器"], weight: 4, volume: 15, era: "modern" }),
    I({ id: "air_con", name: "空调", cat: "appliance", tier: 4, pModern: 3000, pOld: 6000, tags: ["家庭", "电器"], weight: 30, volume: 120, era: "modern" }),
    I({ id: "printer", name: "打印机", cat: "electronics", tier: 3, pModern: 800, pOld: 2000, tags: ["文教", "电子"], weight: 5, volume: 15, era: "modern" }),
    I({ id: "drone", name: "无人机", cat: "electronics", tier: 4, pModern: 4000, pOld: 20000, tags: ["男", "电子"], weight: 1, volume: 3, era: "modern" }),
    I({ id: "walkie_talkie", name: "大功率对讲机(对)", cat: "electronics", tier: 3, pModern: 300, pOld: 1500, tags: ["男", "电子", "机械"], weight: 0.5, volume: 1, era: "modern", desc: "80年代走私船长蛇头强的梦中神物。" }),
    I({ id: "gps_handheld", name: "手持GPS导航仪", cat: "electronics", tier: 4, pModern: 800, pOld: 4000, tags: ["男", "电子"], weight: 0.3, volume: 0.5, era: "modern" }),
    I({ id: "night_vision", name: "夜视仪", cat: "electronics", tier: 5, pModern: 5000, pOld: 30000, tags: ["男", "电子"], weight: 0.8, volume: 1.5, era: "modern", legality: "restricted" })
  ];

  const all = [].concat(cloth, daily, food, tobacco, stationery, medicine, modernFood, modernDaily, modernElectronics);
  R.register("items_daily", { items: all, map: all.reduce((m, i) => (m[i.id] = i, m), {}) });
})();
