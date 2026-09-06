/* ============ 浙江·绍兴 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'shaoxing',
    name: '绍兴',
    country: '中国',
    cc: 'CN',
    province: '浙江',
    flag: '🇨🇳',
    region: '华东',
    hero: '🛶',
    desc: '鲁迅笔下的水乡：乌篷船摇过八字桥，孔乙己的茴香豆温两碗黄酒，书圣故里与千年古城墙，一座可以"读"的城市。',
    travel: [{ name: '高铁', icon: '🚄', cost: 400 }, { name: '飞机', icon: '✈️', cost: 730 }],
    visa: null,
    spots: [
      { id: 'shaoxing_luxun', name: '鲁迅故里', icon: '🏠', price: 0, desc: '百草园到三味书屋，课本里的场景实景重现。免费预约，乌篷船码头就在门口，"跟着课本游绍兴"。' },
      { id: 'shaoxing_shen', name: '沈园', icon: '🌸', price: 40, desc: '陆游与唐琬《钗头凤》的爱情悲剧现场。两阕词刻在壁上相对而立，"伤心桥下春波绿"。' },
      { id: 'shaoxing_bazi', name: '八字桥·书圣故里', icon: '🌉', price: 0, desc: '宋代八字桥是"最早的立交桥"。书圣故里墨香满巷，王羲之题扇桥、蔡元培故居一路串起。' },
      { id: 'shaoxing_lanting', name: '兰亭', icon: '🖌️', price: 40, desc: '王羲之《兰亭集序》诞生地，"天下第一行书"的现场。曲水流觞的溪水仍在，可以体验仿古"飞花传觞"。' },
      { id: 'shaoxing_donghu', name: '东湖', icon: '🛶', price: 50, desc: '千年采石场变成的悬崖水潭，"江南小三峡"。乌篷船钻进仙桃洞，船工脚手并划的绝技。' },
      { id: 'shaoxing_kuaizige', name: '安昌古镇', icon: '🏮', price: 0, desc: '腊肠挂满河沿的"年味古镇"。腊月风情节，扯白糖拉成丝，社戏在河对面咿呀唱。' },
      { id: 'shaoxing_wupeng', name: '仓桥直街', icon: '🏮', price: 0, desc: '联合国遗产保护奖的老街，臭豆腐与黄酒铺并存。雨后青石板发光，"最绍兴的生活切片"。' },
    ],
    souvenirs: [
      { id: 'shaoxing_huangjiu', name: '绍兴黄酒', icon: '🍶', tag: '食', type: '饮品', price: 60, desc: '女儿红、花雕、加饭酒，黄酒界的"泰山北斗"。鉴湖水酿的酒加冰或烫饮皆宜，"越陈越香"。' },
      { id: 'shaoxing_choudoufu', name: '臭豆腐', icon: '🧆', tag: '食', type: '美食', price: 10, desc: '苋菜梗卤浸的"黑色经典"，闻着臭吃着香。仓桥直街现炸现吃，配甜辣酱双拼。' },
      { id: 'shaoxing_meigancai', name: '梅干菜扣肉', icon: '🍖', tag: '食', type: '美食', price: 40, desc: '乌干菜配五花肉蒸到酥烂，"干菜黑油油"。鲁迅笔下的家乡味，真空装带回家。' },
      { id: 'shaoxing_huixiang', name: '茴香豆', icon: '🫘', tag: '食', type: '特产', price: 15, desc: '孔乙己"多乎哉不多也"的下酒豆。咸香耐嚼，配黄酒温两碗，"按孔乙己的姿势"吃。' },
      { id: 'shaoxing_xianggao', name: '奶油小攀·香糕', icon: '🍰', tag: '食', type: '美食', price: 12, desc: '绍兴老底子点心，小攀蛋香奶香。香糕干脆配茶，都是"外婆的味道"。' },
      { id: 'shaoxing_wuzhanmao', name: '乌毡帽', icon: '🎩', tag: '衣', type: '服饰', price: 40, desc: '鲁迅同款乌毡帽，绍兴农民的百年标配。戴上拍照秒变"闰土"，纪念意义拉满。' },
      { id: 'shaoxing_shuhua', name: '兰亭书法文创', icon: '🖌️', tag: '衣', type: '文创', price: 60, desc: '《兰亭集序》字帖、扇面与书签。书法爱好者必收，"天下第一行书"随身带。' },
      { id: 'shaoxing_yin', name: '铜镜·青瓷', icon: '🏺', tag: '衣', type: '文创', price: 90, desc: '绍兴越窑青瓷复刻小件，"秘色瓷"的家乡。铜镜纹样胸针，越国古都的手艺。' },
      { id: 'shaoxing_wupengchuan', name: '乌篷船游水巷', icon: '🛶', tag: '行', type: '体验', price: 85, desc: '船工脚踩橹手划桨，乌篷船钻过古桥洞。"船头看水，船尾看街"，绍兴的水上视角。' },
      { id: 'shaoxing_paojiu', name: '黄酒博物馆品酒·花雕DIY', icon: '🏺', tag: '玩', type: '体验', price: 100, desc: '看百年酒窖，亲手在花雕酒坛上题字封存。女儿红的故事现场复刻，"给未来存一坛酒"。' },
      { id: 'shaoxing_sheying', name: '安昌腊月风情节', icon: '🧨', tag: '玩', type: '体验', price: 60, desc: '腊月的安昌满街腊肠与酱鸭，扯白糖表演。社戏水上唱，"江南年味最浓的古镇"。' },
      { id: 'shaoxing_minsu', name: '水乡台门民宿', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '老台门改的民宿，天井里晒着腊味。夜里枕着水声入睡，清晨乌篷船欸乃而过。' },
    ],
    stories: [
      { id: 'shaoxing_story_kong', name: '孔乙己的茴香豆', icon: '🫘', desc: '"多乎哉？不多也"——咸亨酒店门口的孔乙己铜像成了打卡点。温两碗黄酒要一碟茴香豆，是"标准姿势"。' },
      { id: 'shaoxing_story_lu', name: '鲁迅的一天', icon: '📖', desc: '从百草园到三味书屋步行十分钟。游客按"鲁迅路线"走一圈：祖居、私塾、当铺、咸亨酒店，"课本实景版"。' },
      { id: 'shaoxing_story_nver', name: '女儿红的"十八年之约"', icon: '🍶', desc: '生女儿时埋下花雕，出嫁时挖出宴客。一坛酒藏尽父爱，"女儿红"三字值千金。' },
      { id: 'shaoxing_story_lanting', name: '曲水流觞的"文人游戏"', icon: '🍶', desc: '王羲之和41位名士溪边饮酒赋诗，微醺写下《兰亭集序》。现场重演时才明白：灵感需要酒助攻。' },
      { id: 'shaoxing_story_wupeng', name: '脚划船的绝技', icon: '🛶', desc: '乌篷船船工用脚蹬桨手扶楫，"手脚并用"全国独一份。这是绍兴人几百年练出的水上功夫。' },
      { id: 'shaoxing_story_chou', name: '绍兴人的"臭味相投"', icon: '👃', desc: '苋菜梗卤是绍兴"臭味宇宙"的中心：臭豆腐、臭千张都出自它。外地人捏鼻子尝一口，真香。' },
    ],
  });
})();
