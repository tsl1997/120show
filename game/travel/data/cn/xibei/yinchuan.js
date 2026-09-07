/* ============ 宁夏·银川 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'yinchuan',
    name: '银川',
    country: '中国',
    cc: 'CN',
    province: '宁夏',
    flag: '🇨🇳',
    region: '西北',
    hero: '🏜️',
    desc: '"塞上江南"：贺兰山下西夏王陵神秘矗立，沙湖一半沙漠一半湖水，葡萄酒庄与枸杞田让黄河灌出的绿洲格外甜美。',
    travel: [{ name: '高铁', icon: '🚄', cost: 800 }, { name: '飞机', icon: '✈️', cost: 1000 }],
    visa: null,
    spots: [
      { id: 'yinchuan_xixia', name: '西夏王陵', icon: '🏛️', price: 85, desc: '"东方金字塔"，九座帝陵黄土夯塔矗立戈壁。党项王朝的神秘文字与陵寝布局，谜团至今未解。' },
      { id: 'yinchuan_shahu', name: '沙湖', icon: '🐦', price: 120, desc: '一半沙漠一半湖，骆驼队与芦苇荡同框。滑沙、观鸟、乘船，"塞上明珠"的混搭奇观。' },
      { id: 'yinchuan_helanshan', name: '贺兰山岩画', icon: '🗿', price: 70, desc: '岩壁上千幅史前岩画，"太阳神"最有名。远古先民的涂鸦，韩美林艺术馆就建在旁边。' },
      { id: 'yinchuan_zhenbeipu', name: '镇北堡西部影城', icon: '🎬', price: 80, desc: '《大话西游》《红高粱》拍摄地。"至尊宝与紫霞"的城墙还在，"中国电影从这里走向世界"。' },
      { id: 'yinchuan_nanguan', name: '南关清真大寺·承天寺塔', icon: '🕌', price: 0, desc: '绿色穹顶的清真寺是银川地标。承天寺塔"古塔凌霄"，西夏佛塔千年不倒。' },
      { id: 'yinchuan_putaoyuan', name: '贺兰山东麓酒庄', icon: '🍇', price: 100, desc: '中国最好的葡萄酒产区，"紫色名片"。志辉源石酒庄品酒三杯，戈壁滩酿出的国际大奖酒。' },
      { id: 'yinchuan_huaibo', name: '怀远夜市', icon: '🏮', price: 0, desc: '全国网红夜市：辣糊糊、烤羊蹄、牛肉饼。人山人海端着碗找位置，银川夜宵的顶流。' },
    ],
    souvenirs: [
      { id: 'yinchuan_shouzhua', name: '滩羊手抓', icon: '🍖', tag: '食', type: '美食', price: 90, desc: '盐池滩羊"吃着中草药喝着矿泉水"，无膻味天花板。清水煮蘸盐，鲜到词穷。' },
      { id: 'yinchuan_lahuhu', name: '辣糊糊', icon: '🍲', tag: '食', type: '美食', price: 30, desc: '银川人的"麻辣烫plus"，浓稠辣糊裹满串串。夜市人手一碗，越糊越香。' },
      { id: 'yinchuan_gouqi', name: '中宁枸杞', icon: '🔴', tag: '食', type: '特产', price: 60, desc: '"中国枸杞之乡"，粒大色红泡水上浮。干嚼一把回甘，原浆与枸杞糕是新潮吃法。' },
      { id: 'yinchuan_hongjiu', name: '贺兰红葡萄酒', icon: '🍷', tag: '食', type: '特产', price: 150, desc: '贺兰山东麓斩获国际大奖无数。酒庄直购一瓶一百多，"中国的波尔多"。' },
      { id: 'yinchuan_bagua', name: '羊肉老夹馍·羊杂碎', icon: '🍲', tag: '食', type: '美食', price: 20, desc: '银川羊杂碎配茴香饼，辣油红汤奶白汤。清晨一碗，"塞上人的元气"。' },
      { id: 'yinchuan_mianpian', name: '烩羊杂·手撕土鸡', icon: '🍗', tag: '食', type: '美食', price: 60, desc: '黄渠桥羊羔肉爆炒辣香，手撕鸡配油饼。宁夏菜"重油重辣"的实在劲儿。' },
      { id: 'yinchuan_xixia_wenxue', name: '西夏文创', icon: '📜', tag: '衣', type: '文创', price: 45, desc: '西夏文字翻成的"你的名字"书签，神秘方块字。党项文明文创，冷知识拉满。' },
      { id: 'yinchuan_yanhua', name: '贺兰石砚', icon: '🪨', tag: '衣', type: '文创', price: 180, desc: '贺兰石"紫底绿彩"雕成砚台，中国名砚之一。文房收藏级手信，"塞上瑰宝"。' },
      { id: 'yinchuan_shaomo', name: '沙画与枸杞文创', icon: '🎨', tag: '衣', type: '文创', price: 35, desc: '沙湖细沙做成沙画瓶，枸杞红了做香囊。宁夏的颜色：红黄蓝三原色。' },
      { id: 'yinchuan_huaxue', name: '沙湖滑沙·骆驼', icon: '🐪', tag: '玩', type: '体验', price: 80, desc: '沙丘滑沙俯冲入芦苇荡，骑驼穿沙丘。一半水一半沙的"魔幻切换"。' },
      { id: 'yinchuan_jiucai', name: '酒庄品酒之旅', icon: '🍷', tag: '玩', type: '体验', price: 150, desc: '地下酒窖品三款干红，讲解员讲风土。亲手灌一瓶签名的酒带走，"贺兰山东麓的仪式感"。' },
      { id: 'yinchuan_dianying', name: '影城换装体验', icon: '🎞️', tag: '玩', type: '体验', price: 100, desc: '在镇北堡穿《大话西游》戏服拍照，紫霞仙子同款。"分分钟拍出电影海报"。' },
      { id: 'yinchuan_minsu', name: '酒庄民宿', icon: '🏨', tag: '住', type: '住宿', price: 350, desc: '贺兰山下的酒庄民宿，阳台看日出照在山脊。夜里开一瓶本庄红酒，"紫色之夜"。' },
    ],
    stories: [
      { id: 'yinchuan_story_xixia', name: '西夏文字的"死亡与复活"', icon: '📜', desc: '西夏文五千年笔画却随王朝湮灭成"死文字"。如今靠《番汉合时掌中珠》词典破译，王陵里还在发现新线索。' },
      { id: 'yinchuan_story_tan', name: '滩羊为什么没膻味', icon: '🐑', desc: '盐池滩羊喝弱碱水、吃甘草苦豆子。科学家检测：脂肪酸比例特殊。食客结论：好水好草出好羊。' },
      { id: 'yinchuan_story_dahua', name: '《大话西游》的城墙', icon: '🎬', desc: '"他好像一条狗"的经典结尾就拍在镇北堡。城墙下无数影迷模仿至尊宝紫霞，一守就是三十年。' },
      { id: 'yinchuan_story_jiu', name: '戈壁滩上的"紫色奇迹"', icon: '🍇', desc: '贺兰山东麓昼夜温差大、砾石土壤，被评"世界葡萄酒明星产区"。三十年前还是飞沙走石的荒滩。' },
      { id: 'yinchuan_story_sha', name: '沙湖的"一半哲学"', icon: '🌤️', desc: '沙湖景区一半是4.5万亩沙漠、一半是湖泊湿地。设计师说：不用选，沙与水在宁夏可以共存。' },
      { id: 'yinchuan_story_yan', name: '贺兰山的"岩石日记"', icon: '🗿', desc: '贺兰山岩画记录了三千年前游牧民族的狩猎与祭祀。"太阳神"圆眼放射光芒，是远古人的宇宙观。' },
    ],
  });
})();
