(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  const items = [];
  const seen = {};

  function add(id, name, cat, tier, price, tags, opt) {
    if (seen[id]) return;
    seen[id] = 1;
    items.push(Object.assign({
      id, name, cat, tier, pModern: price, pOld: Math.round(price / 12), ticket: "none",
      weight: 0.5, volume: 1, legality: "legal", antique: false, rarity: 4, era: "modern",
      tags: tags
    }, opt || {}));
  }

  const SEX_M = ["男", "工作人士"];
  const SEX_F = ["女", "少妇"];
  const NEUTRAL = ["男", "女", "工作人士"];

  const bagBrands = [
    ["lv", "路易威登 LV", 5, 18000], ["hermes", "爱马仕 Hermès", 5, 90000], ["chanel", "香奈儿 Chanel", 5, 42000],
    ["gucci", "古驰 Gucci", 4, 15000], ["prada", "普拉达 Prada", 4, 12000], ["dior", "迪奥 Dior", 4, 20000],
    ["fendi", "芬迪 Fendi", 4, 15000], ["burberry", "博柏利 Burberry", 4, 12000], ["coach", "蔻驰 Coach", 3, 3000],
    ["mk", "Michael Kors", 3, 2500], ["celine", "赛琳 Celine", 4, 20000], ["ysl", "圣罗兰 YSL", 4, 18000],
    ["bottega", "葆蝶家 Bottega Veneta", 5, 26000], ["loewe", "罗意威 Loewe", 4, 16000], ["goyard", "戈雅 Goyard", 5, 24000]
  ];
  const bagTypes = [["tote", "手提包", 1.0, 2], ["shoulder", "肩背包", 1.1, 2], ["trolley", "旅行箱", 1.5, 20], ["wallet", "钱包", 0.4, 0.5], ["backpack", "双肩包", 1.2, 8]];
  bagBrands.forEach(([bid, bname, tier, price]) => {
    bagTypes.forEach(([tid, tname, mul, vol]) => {
      add("lux_" + bid + "_" + tid, bname + " " + tname, "luxury", tier, Math.round(price * mul), (tid === "wallet" ? NEUTRAL : (bname.includes("爱马仕") ? SEX_F : NEUTRAL)).concat(["服饰", "箱包"]), { weight: 0.5 * mul, volume: vol });
    });
  });

  const perfumeLines = [
    ["chanel5", "香奈儿五号", 5, 1200, SEX_F], ["jador", "迪奥真我", 4, 900, SEX_F], ["shalimar", "娇兰一千零一夜", 5, 1100, SEX_F],
    ["4711", "德国4711古龙水", 3, 350, SEX_M], ["ysl_libre", "YSL自由之水", 4, 850, SEX_F], ["estee", "雅诗兰黛欢沁", 4, 800, SEX_F],
    ["lancome", "兰蔻奇迹", 4, 750, SEX_F], ["armani", "阿玛尼寄情", 4, 850, SEX_M], ["hermes_jardin", "爱马仕花园系列", 5, 1100, NEUTRAL],
    ["jomalone", "祖·玛珑", 4, 900, SEX_F], ["bvlgari", "宝格丽大吉岭茶", 4, 850, SEX_M], ["tomford", "汤姆·福特乌木", 5, 1800, SEX_M],
    ["creed", "信仰香水 Aventus", 5, 2600, SEX_M], ["dior_homme", "迪奥旷野", 4, 900, SEX_M], ["versace", "范思哲爱神", 4, 700, SEX_M],
    ["chanel_bleu", "香奈儿蔚蓝", 5, 1200, SEX_M], ["givenchy", "纪梵希禁忌", 4, 750, SEX_F], ["burberry_her", "博柏利Her", 4, 700, SEX_F],
    ["marcjacobs", "Marc Jacobs雏菊", 4, 680, SEX_F], ["ck", "卡尔文·克莱恩 CK One", 3, 400, NEUTRAL]
  ];
  const perfumeNotes = [["floral", "花香调"], ["woody", "木质调"], ["oriental", "东方调"], ["citrus", "柑橘调"], ["aquatic", "水生调"]];
  perfumeLines.forEach(([bid, bname, tier, price, tags]) => {
    perfumeNotes.forEach(([nid, nname]) => {
      add("lux_perfume_" + bid + "_" + nid, bname + "香水·" + nname, "cosmetics", tier, Math.round(price * (0.9 + nid.charCodeAt(0) % 10 * 0.02)), tags.concat(["香水"]), { volume: 0.4 });
    });
  });

  const cosLines = [
    ["la_mer", "海蓝之谜", 5, 2500], ["skii", "SK-II", 5, 1500], ["estee", "雅诗兰黛", 4, 800], ["lancome", "兰蔻", 4, 750],
    ["dior", "迪奥", 4, 800], ["chanel", "香奈儿", 5, 1000], ["ysl", "YSL", 4, 700], ["armani", "阿玛尼", 4, 750],
    ["shiseido", "资生堂", 4, 600], ["guerlain", "娇兰", 5, 900], ["clinique", "倩碧", 3, 450], ["sulwhasoo", "雪花秀", 4, 550],
    ["whoo", "后", 4, 600], ["helena", "赫莲娜", 5, 1200], ["cpb", "肌肤之钥 CPB", 5, 1100]
  ];
  const cosTypes = [["cream", "面霜"], ["serum", "精华"], ["lipstick", "口红"], ["foundation", "粉底液"], ["eyegel", "眼霜"]];
  cosLines.forEach(([bid, bname, tier, price]) => {
    cosTypes.forEach(([tid, tname]) => {
      add("lux_cos_" + bid + "_" + tid, bname + " " + tname, "cosmetics", tier, Math.round(price * (tid === "lipstick" ? 0.6 : 1)), SEX_F.concat(["化妆品"]), { volume: 0.3 });
    });
  });

  const watchBrands = [
    ["rolex", "劳力士", 5, 80000], ["patek", "百达翡丽", 5, 500000], ["omega", "欧米茄", 4, 40000], ["cartier", "卡地亚", 5, 60000],
    ["jaeger", "积家", 5, 70000], ["ap", "爱彼", 5, 180000], ["vc", "江诗丹顿", 5, 200000], ["longines", "浪琴", 4, 15000],
    ["tissot", "天梭", 3, 4000], ["seiko", "精工", 3, 3000], ["citizen", "西铁城", 3, 2500], ["blancpain", "宝珀", 5, 120000]
  ];
  const watchSex = [["m", "男士", SEX_M], ["f", "女士", SEX_F]];
  watchBrands.forEach(([bid, bname, tier, price]) => {
    watchSex.forEach(([sid, sname, tags]) => {
      add("lux_watch_" + bid + "_" + sid, bname + " " + sname + "腕表", "luxury", tier, Math.round(price * (sid === "f" ? 0.8 : 1)), tags.concat(["珠宝"]), { weight: 0.2, volume: 0.3 });
    });
  });

  const jewelryBrands = [
    ["tiffany", "蒂芙尼", 5, 20000], ["cartier", "卡地亚", 5, 35000], ["bvlgari", "宝格丽", 5, 30000], ["vca", "梵克雅宝", 5, 40000],
    ["chowtaifook", "周大福", 4, 8000], ["chowsangsang", "周生生", 4, 7000], ["laofengxiang", "老凤祥", 4, 6000], ["debeers", "戴比尔斯", 5, 50000]
  ];
  const jewelryTypes = [["necklace", "项链"], ["ring", "戒指"], ["bracelet", "手镯"], ["earrings", "耳环"]];
  jewelryBrands.forEach(([bid, bname, tier, price]) => {
    jewelryTypes.forEach(([tid, tname]) => {
      add("lux_jwl_" + bid + "_" + tid, bname + " " + tname, "luxury", tier, Math.round(price * (tid === "earrings" ? 0.6 : 1)), SEX_F.concat(["珠宝", "奢侈品"]), { weight: 0.05, volume: 0.1 });
    });
  });

  const fashionLines = [
    ["hermes_scarf", "爱马仕真丝丝巾", "clothing", 5, 3500, SEX_F], ["burberry_trench", "博柏利经典风衣", "clothing", 4, 12000, NEUTRAL],
    ["chanel_tweed", "香奈儿粗花呢套装", "clothing", 5, 45000, SEX_F], ["maxmara", "MaxMara大衣", "clothing", 4, 15000, SEX_F],
    ["armani_suit", "阿玛尼西装", "clothing", 4, 12000, SEX_M], ["zegna", "杰尼亚西装", "clothing", 4, 15000, SEX_M],
    ["versace", "范思哲连衣裙", "clothing", 4, 8000, SEX_F], ["dg", "杜嘉班纳印花裙", "clothing", 4, 7000, SEX_F],
    ["valentino", "华伦天奴礼服", "clothing", 5, 25000, SEX_F], ["burberry_scarf", "博柏利羊绒围巾", "clothing", 4, 3000, NEUTRAL],
    ["gucci_scarf", "古驰羊毛围巾", "clothing", 4, 2800, NEUTRAL], ["moncler", "盟可睐羽绒服", "clothing", 5, 12000, NEUTRAL]
  ];
  fashionLines.forEach(([id, name, cat, tier, price, tags]) => add("lux_" + id, name, cat, tier, price, tags, { volume: 3 }));

  const toyLines = [
    ["pokemon_1st", "初版宝可梦卡(闪卡)", 5, 20000, ["男", "女", "少年", "收藏"]], ["superman_doll", "超人玩偶(原版)", 4, 3000, ["男", "少年", "收藏"]],
    ["transformers_g1", "变形金刚G1擎天柱", 4, 5000, ["男", "少年", "收藏"]], ["gundam_pg", "万代高达PG模型", 4, 4000, ["男", "青年", "收藏"]],
    ["lego_millennium", "乐高千年隼", 5, 6000, ["男", "女", "收藏"]], ["barbie", "芭比娃娃(限量)", 4, 2000, ["女", "少女", "收藏"]],
    ["starwars_figure", "星球大战手办", 4, 3500, ["男", "收藏"]], ["marvel_figure", "漫威钢铁侠手办", 4, 3000, ["男", "青年", "收藏"]],
    ["disney_mickey", "迪士尼米奇(古早款)", 4, 1500, ["女", "少女", "收藏"]], ["ultraman", "奥特曼初代软胶", 3, 1200, ["男", "少年", "收藏"]],
    ["saintseiya", "圣斗士星矢黄金圣衣", 4, 2500, ["男", "青年", "收藏"]], ["dragonball", "龙珠孙悟空手办", 4, 2500, ["男", "青年", "收藏"]],
    ["beaniebaby", "Beanie Baby绝版布偶", 3, 1800, ["女", "少女", "收藏"]], ["teddy_steiff", "史泰福泰迪熊", 4, 3000, ["女", "少女", "收藏"]],
    ["hotwheels", "风火轮绝版小车", 3, 800, ["男", "少年", "收藏"]], ["legorare", "乐高绝版街景", 5, 8000, ["男", "女", "收藏"]]
  ];
  toyLines.forEach(([id, name, tier, price, tags]) => add("lux_" + id, name, "luxury", tier, price, tags, { volume: 2, cat: "luxury" }));

  const liquorLines = [
    ["hennessy_xo", "轩尼诗XO干邑", 4, 2500], ["louis_xiii", "路易十三干邑", 5, 30000], ["remy_xo", "人头马XO", 4, 2000],
    ["martell", "马爹利蓝带", 4, 1500], ["johnnie_blue", "尊尼获加蓝牌", 4, 2200], ["macallan_18", "麦卡伦18年威士忌", 5, 4000],
    ["lafite", "拉菲古堡红酒", 5, 12000], ["romanee", "罗曼尼·康帝", 5, 300000], ["dom_perignon", "唐·培里侬香槟王", 5, 3000],
    ["cohoba", "高希霸古巴雪茄(盒)", 5, 8000], ["montecristo", "蒙特克里斯托雪茄(盒)", 4, 5000], ["davidoff", "大卫杜夫雪茄(盒)", 4, 4000],
    ["krug", "库克香槟", 5, 4000], ["penfolds", "奔富葛兰许红酒", 4, 6000], ["sassicaia", "西施佳雅红酒", 5, 8000]
  ];
  liquorLines.forEach(([id, name, tier, price]) => add("lux_" + id, name, "tobacco", tier, price, ["男", "工作人士", "酒"], { volume: 2, cat: "tobacco" }));

  const penLines = [
    ["montblanc", "万宝龙钢笔", 5, 5000], ["parker", "派克钢笔", 4, 800], ["hermes_belt", "爱马仕皮带", 5, 6000],
    ["gucci_sunglass", "古驰墨镜", 4, 2500], ["cartier_lighter", "卡地亚打火机", 5, 9000], ["dunhill", "登喜路打火机", 4, 4000],
    ["montblanc_belt", "万宝龙皮带", 4, 3000], ["louis_wallet", "LV短款钱包", 5, 6000], ["bvlgari_keyring", "宝格丽钥匙扣", 4, 2000],
    ["tiffany_pen", "蒂芙尼钢笔", 5, 4000]
  ];
  penLines.forEach(([id, name, tier, price]) => add("lux_" + id, name, "luxury", tier, price, ["男", "工作人士", "商务"], { weight: 0.2, volume: 0.4 }));

  const shoeLines = [
    ["cl_heels", "Christian Louboutin红底鞋", 5, 8000, SEX_F], ["chanel_sling", "香奈儿Slingback", 5, 7000, SEX_F],
    ["gucci_ace", "古驰Ace小白鞋", 4, 4500, NEUTRAL], ["ferragamo", "菲拉格慕皮鞋", 4, 4000, SEX_M],
    ["prada_loafer", "普拉达乐福鞋", 4, 5000, SEX_M], ["hermes_oran", "爱马仕Oran凉鞋", 5, 6000, SEX_F],
    ["nike_aj1", "Air Jordan 1限量", 4, 3000, ["男", "青年"]], ["yeezy", "Yeezy限量球鞋", 4, 3500, ["男", "青年"]],
    ["jimmy_choo", "Jimmy Choo高跟鞋", 4, 5000, SEX_F], ["berluti", "Berluti皮鞋", 5, 12000, SEX_M]
  ];
  shoeLines.forEach(([id, name, tier, price, tags]) => add("lux_" + id, name, "clothing", tier, price, tags, { volume: 3 }));

  const carLines = [
    ["rolls", "劳斯莱斯幻影", 5, 9000000], ["bentley", "宾利慕尚", 5, 5000000], ["benz_s600", "奔驰S600", 5, 2000000],
    ["bmw_7", "宝马7系", 4, 1000000], ["porsche_911", "保时捷911", 5, 1500000], ["ferrari", "法拉利488", 5, 3000000],
    ["lamborghini", "兰博基尼Huracán", 5, 2800000], ["maybach", "迈巴赫S级", 5, 2500000], ["aston", "阿斯顿马丁DB11", 5, 2200000],
    ["range_rover", "路虎揽胜", 4, 1300000]
  ];
  carLines.forEach(([id, name, tier, price]) => add("lux_car_" + id, name, "vehicle", tier, price, ["男", "女", "富豪", "汽车"], { weight: 1800, volume: 12000, rarity: 5, legality: "legal" }));

  const digitalLines = [
    ["iphone_pro", "iPhone Pro(顶配)", 5, 12000, ["男", "女", "工作人士", "电子"]], ["macbook_pro", "MacBook Pro", 5, 20000, ["工作人士", "电子"]],
    ["leica", "徕卡相机", 5, 60000, ["摄影", "电子"]], ["hasselblad", "哈苏中画幅相机", 5, 90000, ["摄影", "电子"]],
    ["dyson", "戴森吹风机", 4, 3000, SEX_F], ["bo_speaker", "B&O音响", 5, 20000, ["音乐", "电子"]],
    ["apple_watch", "Apple Watch(爱马仕款)", 5, 12000, NEUTRAL], ["ps5_pro", "PS5 Pro(限量)", 4, 4000, ["男", "青年", "游戏"]]
  ];
  digitalLines.forEach(([id, name, tier, price, tags]) => add("lux_" + id, name, "electronics", tier, price, tags, { weight: 2, volume: 4 }));

  [["miumiu", "缪缪 Miu Miu", 4, 12000], ["givenchy_bag", "纪梵希", 4, 14000], ["delvaux", "德尔沃 Delvaux", 5, 35000], ["moynat", "摩奈 Moynat", 5, 30000], ["longchamp", "珑骧 Longchamp", 3, 1500]].forEach(([bid, bname, tier, price]) => {
    bagTypes.forEach(([tid, tname, mul, vol]) => {
      add("lux_" + bid + "_" + tid, bname + " " + tname, "luxury", tier, Math.round(price * mul), (tid === "wallet" ? NEUTRAL : SEX_F).concat(["服饰", "箱包"]), { volume: vol });
    });
  });

  [["missdior", "迪奥花漾甜心", 4, 850, SEX_F], ["myburberry", "博柏利Mr.Burberry", 4, 750, SEX_M], ["narciso", "纳西索For Her", 4, 700, SEX_F], ["flowerbomb", "维克多与罗夫鲜花炸弹", 4, 900, SEX_F], ["gucci_bloom", "古驰绽放", 4, 850, SEX_F], ["prada_candy", "普拉达糖果", 4, 700, SEX_F], ["lalique", "莱俪水晶之恋", 5, 1200, SEX_F], ["penhaligons", "潘海利根牧羊少年", 5, 1300, SEX_M], ["byredo", "百瑞德无人区玫瑰", 5, 1400, SEX_F], ["frederic", "德瑞克·马尔一轮玫瑰", 5, 2000, SEX_F], ["hermes_terre", "爱马仕大地", 5, 1100, SEX_M], ["chanel_coco", "香奈儿可可小姐", 5, 1200, SEX_F]].forEach(([bid, bname, tier, price, tags]) => {
    perfumeNotes.forEach(([nid, nname]) => {
      add("lux_perfume_" + bid + "_" + nid, bname + "香水·" + nname, "cosmetics", tier, Math.round(price * (0.9 + nid.charCodeAt(0) % 10 * 0.02)), tags.concat(["香水"]), { volume: 0.4 });
    });
  });

  [["sisley", "希思黎", 5, 1100], ["givenchy", "纪梵希", 4, 750], ["origins", "悦木之源", 3, 400], ["kiehls", "科颜氏", 4, 500], ["clarins", "娇韵诗", 4, 600]].forEach(([bid, bname, tier, price]) => {
    cosTypes.forEach(([tid, tname]) => {
      add("lux_cos_" + bid + "_" + tid, bname + " " + tname, "cosmetics", tier, Math.round(price * (tid === "lipstick" ? 0.6 : 1)), SEX_F.concat(["化妆品"]), { volume: 0.3 });
    });
  });

  [["iwc", "万国", 4, 45000], ["panerai", "沛纳海", 4, 50000], ["breitling", "百年灵", 4, 40000], ["tagheuer", "泰格豪雅", 4, 20000], ["hublot", "宇舶", 5, 120000], ["richardmille", "理查德米勒", 5, 1500000]].forEach(([bid, bname, tier, price]) => {
    watchSex.forEach(([sid, sname, tags]) => {
      add("lux_watch_" + bid + "_" + sid, bname + " " + sname + "腕表", "luxury", tier, Math.round(price * (sid === "f" ? 0.8 : 1)), tags.concat(["珠宝"]), { weight: 0.2, volume: 0.3 });
    });
  });

  [["jadeite", "帝王绿翡翠手镯", 5, 5000000, SEX_F], ["jadeite_pendant", "翡翠吊坠", 5, 800000, SEX_F], ["diamond_ring", "钻石戒指(1克拉)", 5, 150000, SEX_F], ["diamond_necklace", "钻石项链", 5, 400000, SEX_F], ["pearl_necklace", "南洋珍珠项链", 5, 80000, SEX_F], ["gold_necklace", "足金项链", 4, 30000, SEX_F], ["colored_gem", "缅甸红宝石戒指", 5, 200000, SEX_F], ["sapphire", "斯里兰卡蓝宝石吊坠", 5, 120000, SEX_F]].forEach(([id, name, tier, price, tags]) => add("lux_" + id, name, "luxury", tier, price, tags, { weight: 0.05, volume: 0.1 }));

  [["hermes_tie", "爱马仕领带", 5, 2500, SEX_M], ["gucci_tie", "古驰领带", 4, 1800, SEX_M], ["montblanc_cuff", "万宝龙袖扣", 5, 3500, SEX_M], ["cartier_cuff", "卡地亚袖扣", 5, 6000, SEX_M], ["bvlgari_tie", "宝格丽领带", 4, 2200, SEX_M], ["hermes_scarf90", "爱马仕90cm丝巾", 5, 4000, SEX_F], ["louis_scarf", "LV Monogram丝巾", 5, 3500, SEX_F], ["gucci_scarf2", "古驰印花丝巾", 4, 2200, SEX_F], ["burberry_silk", "博柏利真丝围巾", 4, 2600, SEX_F], ["chanel_scarf", "香奈儿山茶花丝巾", 5, 3000, SEX_F]].forEach(([id, name, tier, price, tags]) => add("lux_" + id, name, "luxury", tier, price, tags, { weight: 0.1, volume: 0.3 }));

  [["hotwheels_set", "风火轮绝版套装", 3, 2000, ["男", "少年", "收藏"]], ["kaws_figure", "KAWS联名公仔", 5, 15000, ["男", "女", "收藏"]], ["bearbrick", "BE@RBRICK积木熊", 4, 8000, ["男", "女", "收藏"]], ["lego_taj", "乐高泰姬陵", 4, 3500, ["男", "女", "收藏"]], ["tomica_set", "多美卡绝版小车", 3, 1500, ["男", "少年", "收藏"]], ["gundam_metal", "高达金属魂", 4, 5000, ["男", "青年", "收藏"]], ["sideshow", "Sideshow雕像", 5, 12000, ["男", "收藏"]], ["ht_ironman", "HotToys钢铁侠", 5, 6000, ["男", "收藏"]], ["nerf_rare", "绝版玩具枪", 3, 1200, ["男", "少年", "收藏"]], ["vintage_slot", "复古街机摇杆", 4, 3000, ["男", "游戏", "收藏"]]].forEach(([id, name, tier, price, tags]) => add("lux_" + id, name, "luxury", tier, price, tags, { volume: 2 }));

  [["glenfiddich", "格兰菲迪威士忌", 4, 800], ["laphroaig", "拉弗格威士忌", 4, 900], ["singleton", "苏格登威士忌", 4, 700], ["chivas_25", "芝华士25年", 5, 3000], ["ballantine", "百龄坛威士忌", 4, 600], ["mouton", "木桐酒庄红酒", 5, 9000], ["margaux", "玛歌酒庄红酒", 5, 8000], ["champagne_cristal", "路易王妃水晶香槟", 5, 5000]].forEach(([id, name, tier, price]) => add("lux_" + id, name, "tobacco", tier, price, ["男", "工作人士", "酒"], { volume: 2, cat: "tobacco" }));

  [["golf_set", "泰勒梅高尔夫球杆", 5, 30000, ["男", "运动"]], ["ski_set", "迪桑特滑雪服", 4, 8000, ["男", "运动"]], ["rower", "Concept2划船机", 4, 12000, ["男", "女", "运动"]], ["paddle", "HEAD网球拍", 3, 3000, ["男", "运动"]], ["e_bike_lux", "保时捷电动自行车", 5, 50000, ["男", "运动"]], ["diving_watch", "沛纳海潜水表", 4, 40000, ["男", "运动"]]].forEach(([id, name, tier, price, tags]) => add("lux_" + id, name, "luxury", tier, price, tags, { weight: 3, volume: 8 }));

  const itemsObj = { items, map: items.reduce((m, i) => (m[i.id] = i, m), {}) };
  R.register("items_luxury", itemsObj);
  window.LJ.__luxuryCount = items.length;
})();
