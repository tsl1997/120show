/* ============ 印度·新德里 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'newdelhi',
    name: '新德里',
    country: '印度',
    cc: 'IN',
    flag: '🇮🇳',
    region: '南亚',
    hero: '🕌',
    desc: '七城叠加的首都：莫卧儿红堡与英式大道相邻，香料市场的色彩浓得化不开，一座把信仰、混乱与灿烂揉在一起的城市。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 400, note: '电子旅游签证（E-Visa）' },
    spots: [
      { id: 'newdelhi_redfort', name: '德里红堡', icon: '🏰', price: 40, desc: '莫卧儿王朝的红色砂岩宫殿，"沙贾汗的第二天堂"。城门上的绿色圆顶与白玉亭，历经三百年仍是国家象征。' },
      { id: 'newdelhi_jama', name: '贾玛清真寺', icon: '🕌', price: 20, desc: '印度最大的清真寺之一，红色砂岩与白色大理石条纹相间。登上南塔俯瞰老德里的集市迷宫，喇叭声与祷告声一起回响。' },
      { id: 'newdelhi_qutub', name: '顾特卜塔', icon: '🗼', price: 30, desc: '世界最高的砖砌宣礼塔，73米高塔身上刻满古兰经文。塔下的铁柱一千六百年不锈，是"德里铁"的传说现场。' },
      { id: 'newdelhi_humayun', name: '胡马雍陵', icon: '⚔️', price: 35, desc: '泰姬陵的"前身"，白色穹顶与对称花园是莫卧儿园林模板。世界文化遗产，红砂岩与大理石的配色教科书。' },
      { id: 'newdelhi_india_gate', name: '印度门', icon: '🗿', price: 0, desc: '纪念一战阵亡将士的凯旋门，长明火焰日夜燃烧。傍晚草坪上全家野餐、放风筝，是德里的"人民广场"。' },
      { id: 'newdelhi_chandni', name: '月光集市', icon: '🛍️', price: 0, desc: '沙贾汗为女儿建的月光集市，如今是亚洲最密的市集之一。香料、纱丽、金银首饰挤在一起，气味都是浓烈的。' },
      { id: 'newdelhi_lotus', name: '莲花寺', icon: '🪷', price: 0, desc: '27片大理石花瓣拼成白莲花，巴哈伊信仰的"众教之殿"。走进去只有安静，任何信仰都能在这里静坐。' },
    ],
    souvenirs: [
      { id: 'newdelhi_curry', name: '黄油鸡与咖喱', icon: '🍛', tag: '食', type: '美食', price: 60, desc: '番茄黄油酱炖烤鸡，配馕饼或长米。印度菜的灵魂是玛萨拉香料，"微辣"也会让外地人冒汗。' },
      { id: 'newdelhi_thali', name: '塔利套餐', icon: '🍽️', tag: '食', type: '美食', price: 40, desc: '一个铁盘装六七个小碗：咖喱、豆糊、酸奶、甜点。印度人的"套餐哲学"，每一口都是不同味觉区。' },
      { id: 'newdelhi_chaats', name: '街头小吃合集', icon: '🥟', tag: '食', type: '美食', price: 20, desc: 'Pani Puri空心球灌酸辣水、萨莫萨炸三角、帕夫巴吉。一次吃遍"酸辣甜脆"，肠胃勇士的试炼场。' },
      { id: 'newdelhi_chai', name: '马萨拉奶茶', icon: '☕', tag: '食', type: '饮品', price: 8, desc: '生姜、豆蔻、肉桂与红茶同煮，加奶加糖。街边陶杯一捧五块钱，喝完暖到指尖。' },
      { id: 'newdelhi_lassi', name: '拉西酸奶', icon: '🥛', tag: '食', type: '饮品', price: 15, desc: '浓稠酸奶加芒果或藏红花，陶罐装盖着豆腐皮。饭后一杯助消化，甜口的"印度营养快线"。' },
      { id: 'newdelhi_spice', name: '香料市场采购', icon: '🌶️', tag: '食', type: '特产', price: 50, desc: '月光集市的香料街，辣椒红黄绿堆成小山。玛萨拉、姜黄、孜然按两称，带一包回家厨房秒变印度。' },
      { id: 'newdelhi_kurtas', name: '库尔塔·纱丽', icon: '🧥', tag: '衣', type: '服饰', price: 150, desc: '传统长衫库尔塔男女皆可穿，纱丽一披就是六米布的学问。手工刺绣的亮片在灯光下闪成星河。' },
      { id: 'newdelhi_silver', name: '银饰·宝石', icon: '💎', tag: '衣', type: '文创', price: 200, desc: '拉贾斯坦风格的银手镯、绿松石戒指。月光集市"砍价从三折开始"，砍完老板还请你喝茶。' },
      { id: 'newdelhi_tuktuk', name: '突突车巡游', icon: '🛺', tag: '行', type: '体验', price: 25, desc: '三轮突突车在牛、行人、摩托之间"见缝插针"。司机超车时喊"主角来了"，车内装饰比庙还花哨。' },
      { id: 'newdelhi_yoga', name: '瑜伽晨课', icon: '🧘', tag: '玩', type: '体验', price: 50, desc: '瑜伽发源地的一小时晨课，导师纠正到你怀疑人生。印度街头瑜伽馆一个月学费，国内上一节课的价。' },
      { id: 'newdelhi_meena', name: '手绘海娜', icon: '🖌️', tag: '玩', type: '体验', price: 40, desc: '海娜颜料在手背画出孔雀与藤蔓，一周不掉色。婚礼上新娘全身画满，平时游客画一小朵就够发朋友圈。' },
      { id: 'newdelhi_hotel', name: '康诺特广场酒店', icon: '🏨', tag: '住', type: '住宿', price: 250, desc: '殖民风环形广场旁的精品酒店，天台餐厅看鸽子飞过印度门。旅行预算友好，服务超出预期。' },
    ],
    stories: [
      { id: 'newdelhi_story_iron', name: '千年不锈的铁柱', icon: '🧲', desc: '顾特卜塔旁的铁柱竖立一千六百年不生锈，现代科学解释为高磷"自愈"涂层。古代工艺至今仍是谜。' },
      { id: 'newdelhi_story_cows', name: '牛是"马路主角"', icon: '🐄', desc: '新德里街头牛可以随意横穿马路，车辆自觉绕行。牛在印度教中神圣，堵车时最先让路的一定是牛。' },
      { id: 'newdelhi_story_bollywood', name: '宝莱坞的歌舞宇宙', icon: '🎬', desc: '印度电影年均产量世界第一，主角动不动就唱歌跳舞三分钟。电影院里观众会跟着合唱，掌声与口哨齐飞。' },
      { id: 'newdelhi_story_holi', name: '洒红节的"彩色战争"', icon: '🎨', desc: '胡里节当天全城互扔彩粉，白色衣服出门、彩色衣服回家。陌生人也会往你脸上抹一抹："祝你快乐！"' },
      { id: 'newdelhi_story_chai', name: '街头的"Chai! Chai!"', icon: '☕', desc: '卖茶小哥穿行火车与街头，陶杯用完即摔（一次性）。一声"Chai"是印度的国民唤醒服务。' },
      { id: 'newdelhi_story_train', name: '火车顶上的"乘客"', icon: '🚂', desc: '老电影里"挂火车"画面如今基本消失，但乡村慢车顶仍有"搭车客"。印度的火车系统是世界第四大铁路网。' },
    ],
  });
})();
