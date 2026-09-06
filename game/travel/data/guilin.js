/* ============ 广西·桂林 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'guilin',
    name: '桂林',
    country: '中国',
    cc: 'CN',
    province: '广西',
    flag: '🇨🇳',
    region: '华南',
    hero: '🏞️',
    desc: '"桂林山水甲天下"：漓江竹筏穿行喀斯特峰林，二十元人民币背面的风景就在眼前，阳朔西街的啤酒鱼香飘四季。',
    travel: [{ name: '高铁', icon: '🚄', cost: 350 }, { name: '飞机', icon: '✈️', cost: 750 }],
    visa: null,
    spots: [
      { id: 'guilin_lijiang', name: '漓江竹筏（兴坪-九马画山）', icon: '🛶', price: 216, desc: '"江作青罗带，山如碧玉簪"。竹筏过黄布倒影——20元人民币背面取景地，掏出纸币对照拍照是仪式。' },
      { id: 'guilin_yangshuo', name: '阳朔西街·遇龙河', icon: '🏘️', price: 0, desc: '1400年历史的西街，"地球村"酒吧美食云集。遇龙河竹筏是最温柔的漂流，两岸稻田如画。' },
      { id: 'guilin_xiangbishan', name: '象鼻山', icon: '🐘', price: 55, desc: '桂林城徽，山形如巨象饮水。水月洞倒影成"象山水月"，夜景灯光下更梦幻。' },
      { id: 'guilin_ludiyan', name: '芦笛岩', icon: '💎', price: 90, desc: '"大自然艺术之宫"，溶洞钟乳石五彩斑斓。狮岭朝霞与水晶宫，"国宾洞"接待过无数元首。' },
      { id: 'guilin_longji', name: '龙脊梯田', icon: '🌾', price: 80, desc: '龙脊山上的"天梯"，壮瑶族人耕种650年。五月灌水如镜、九月金浪翻滚，云雾天如登天梯。' },
      { id: 'guilin_liangjiang', name: '两江四湖夜游', icon: '⛴️', price: 185, desc: '夜游串联漓江、桃花江与四湖，日月双塔金光倒影。榕湖桥底的水下灯光，"桂林夜色封神"。' },
      { id: 'guilin_yinzi', name: '银子岩', icon: '🕳️', price: 85, desc: '"游了银子岩，一世不缺钱"。雪松般的钟乳石银光闪闪，三层溶洞迷宫。' },
    ],
    souvenirs: [
      { id: 'guilin_mifen', name: '桂林米粉', icon: '🍜', tag: '食', type: '美食', price: 10, desc: '卤水米粉先干拌后加汤，锅烧脆皮是灵魂。"桂林人的一天从二两米粉开始"。' },
      { id: 'guilin_pijiuyu', name: '阳朔啤酒鱼', icon: '🐟', tag: '食', type: '美食', price: 88, desc: '漓江鱼配啤酒焖烧，鱼鳞都炸得酥脆。西街每家店都有"秘方"，剑骨鱼最贵最嫩。' },
      { id: 'guilin_suancai', name: '桂林酸品', icon: '🥒', tag: '食', type: '美食', price: 10, desc: '"英雄难过美人关，美人难过酸摊关"。酸萝卜、酸芒果蘸辣椒盐，桂北人的解馋神器。' },
      { id: 'guilin_luohan', name: '罗汉果', icon: '🍈', tag: '食', type: '特产', price: 40, desc: '"东方神果"甜度是蔗糖300倍且零热量。罗汉果茶润嗓，桂林人的"随身药箱"。' },
      { id: 'guilin_sanyu', name: '三花酒·豆腐乳', icon: '🍶', tag: '食', type: '特产', price: 40, desc: '桂林三宝：三花酒、豆腐乳、辣椒酱。三花酒斟酒起花三层，"米香型白酒之王"。' },
      { id: 'guilin_huashan', name: '壮锦·扎染', icon: '🧶', tag: '衣', type: '服饰', price: 90, desc: '壮锦团龙纹围巾、蓝染布包。龙脊红瑶长发姐姐的手作，"山里的颜色"。' },
      { id: 'guilin_shanshui', name: '山水文创·人民币打卡框', icon: '💵', tag: '衣', type: '文创', price: 25, desc: '20元人民币同款画框、漓江山水冰箱贴。在兴坪举着画框对齐真山，"全民仪式感"。' },
      { id: 'guilin_yurehe', name: '遇龙河竹筏漂流', icon: '🚣', tag: '玩', type: '体验', price: 200, desc: '人工撑筏慢漂4小时，过堤坝"小刺激"。水牛在岸边吃草，"最温柔的漂流"。' },
      { id: 'guilin_feiji', name: '热气球看峰林', icon: '🎈', tag: '玩', type: '体验', price: 300, desc: '阳朔热气球升空，俯瞰万座喀斯特小山包。"桂林山水的上帝视角"。' },
      { id: 'guilin_panye', name: '印象刘三姐演出', icon: '🎭', tag: '玩', type: '体验', price: 238, desc: '张艺谋导演，漓江水面为舞台。600名演员渔火点点，"山水实景演出鼻祖"。' },
      { id: 'guilin_panxi', name: '攀岩·骑行十里画廊', icon: '🚲', tag: '玩', type: '体验', price: 120, desc: '阳朔是全球著名攀岩地，月亮山岩壁经典。骑行十里画廊，"人车共游山水间"。' },
      { id: 'guilin_minsu', name: '漓江边民宿', icon: '🏨', tag: '住', type: '住宿', price: 350, desc: '兴坪江畔民宿，阳台正对黄布倒影。清晨渔翁带鸬鹚从窗前划过，"20元画面实景"。' },
    ],
    stories: [
      { id: 'guilin_story_20', name: '20元人民币的取景地', icon: '💵', desc: '兴坪漓江段的元宝山就是纸币背面风景。游客人手一张20元对镜拍照，"最接地气的打卡"。' },
      { id: 'guilin_story_suan', name: '"英雄难过美人关"的下半句', icon: '🥒', desc: '桂林酸摊全国独一份，酸嘢文化源自湿热气候。本地谚语：英雄难过美人关，美人难过酸摊关。' },
      { id: 'guilin_story_luohan', name: '罗汉果的"神果"之路', icon: '🍈', desc: '罗汉果原是瑶族秘药，如今甜味剂出口全球。"零卡甜"的东方智慧，桂北山地的财富。' },
      { id: 'guilin_story_longji', name: '龙脊梯田的"六百年接力"', icon: '🌾', desc: '壮瑶先民从元朝开始凿山造田，最大坡度50度。一根扁担养活一族人，"挂在山上的史诗"。' },
      { id: 'guilin_story_laojie', name: '西街的"地球村"', icon: '🌍', desc: '80年代背包客发现阳朔，西街成了"洋人街"。咖啡馆招牌中英双语三十年，"最早的国际化小镇"。' },
      { id: 'guilin_story_lusan', name: '刘三姐的歌仙传说', icon: '🎵', desc: '刘三姐用山歌斗败三个秀才的传说家喻户晓。如今桂林人吵架都自带山歌韵脚，"歌仙故里"。' },
    ],
  });
})();
