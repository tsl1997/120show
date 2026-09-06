/* ============ 新西兰·奥克兰 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'auckland',
    name: '奥克兰',
    country: '新西兰',
    cc: 'NZ',
    flag: '🇳🇿',
    region: '大洋洲',
    hero: '⛵',
    desc: '"千帆之城"：五十多座死火山锥长满绿草，天空塔俯瞰两个海湾，霍比屯的圆门木屋与萤火虫洞，中土世界就在隔壁。',
    travel: [{ name: '飞机', icon: '✈️', cost: 4500 }],
    visa: { cost: 950, note: '新西兰访客签证' },
    spots: [
      { id: 'auckland_skytower', name: '天空塔', icon: '🗼', price: 200, desc: '南半球最高建筑328米，旋转餐厅转一圈看两湾。胆大的玩 SkyWalk 高空漫步与 SkyJump 速降。' },
      { id: 'auckland_volcano', name: '伊甸山火山锥', icon: '🌋', price: 0, desc: '六百年前的死火山口现在长满青草。半小时登顶看毛利梯田遗迹，"城市中央的大碗"。' },
      { id: 'auckland_hobbiton', name: '霍比屯一日游', icon: '🚪', price: 700, desc: '《指环王》霍比屯村庄的44个圆门木屋，绿龙酒馆喝姜汁啤酒。向导讲"每个花箱都是真花"，中土世界是真的。' },
      { id: 'auckland_waitomo', name: '萤火虫洞', icon: '✨', price: 450, desc: '乘小船漂进蓝光星河，百万萤光虫"挂"在洞顶。安静得只剩水滴声，"现实版的银河"。' },
      { id: 'auckland_waiheke', name: '怀赫科岛酒庄', icon: '🍇', price: 250, desc: '渡轮四十分钟到" wine 岛"，沙滩与葡萄园共存。山顶品酒配生蚝，"千帆之岛的周末"。' },
      { id: 'auckland_museum', name: '奥克兰博物馆', icon: '🏛️', price: 150, desc: '毛利文化馆藏品全球最全，独木舟与雕刻会堂。每天下午毛利战舞表演，"哈卡舞近距离"。' },
      { id: 'auckland_piha', name: '皮哈黑沙滩', icon: '🖤', price: 0, desc: '火山黑沙滩配狮子石，浪大沙烫。冲浪者的圣地，徒步到瀑布的路上遇见雨林。' },
    ],
    souvenirs: [
      { id: 'auckland_hangi', name: '杭吉石烤宴', icon: '🍖', tag: '食', type: '美食', price: 180, desc: '毛利传统地窑烤肉：羊肉、红薯埋石下焖数小时。"泥土的香"，配卡瓦卡瓦生沙拉。' },
      { id: 'auckland_fish_chips', name: '鱼薯配白葡萄酒', icon: '🍟', tag: '食', type: '美食', price: 70, desc: '新西兰鱼薯用蓝鳕鱼（Hoki）更鲜甜。海堤上坐着吃，海鸥会来"讨税"。' },
      { id: 'auckland_pavlova', name: '帕夫洛娃蛋糕', icon: '🍰', tag: '食', type: '美食', price: 60, desc: '蛋白酥配奶油与奇异果，与澳洲"争 ownership"的国甜。"新西兰版"用奇异果，有理有据。' },
      { id: 'auckland_hokey', name: 'Hokey Pokey 冰淇淋', icon: '🍦', tag: '食', type: '美食', price: 40, desc: '蜂窝糖碎香草冰淇淋，"国民口味"。街角 Scoop 半球起售，"kiwi 的童年"。' },
      { id: 'auckland_sauvignon', name: '马尔堡长相思', icon: '🍷', tag: '食', type: '特产', price: 220, desc: '世界级长相思的青草百香果香，"白葡萄酒教科书"。酒庄直邮太贵，机场免税拎一瓶。' },
      { id: 'auckland_manuka', name: '麦卢卡蜂蜜', icon: '🍯', tag: '食', type: '特产', price: 350, desc: 'UMF 等级的麦卢卡蜂蜜"液体黄金"，一勺二十美元。 antibiotic 活性等级越高越贵，回国送礼之王。' },
      { id: 'auckland_merino', name: '美丽诺羊毛制品', icon: '🧣', tag: '衣', type: '服饰', price: 400, desc: '美丽诺羊毛"贴肤不扎"过冬神器。 Allbirds 与 Icebreaker 的老家，一条围巾能穿十年。' },
      { id: 'auckland_jade', name: '新西兰玉（Pounamu）', icon: '🟩', tag: '衣', type: '文创', price: 450, desc: '毛利圣玉，"Koru 螺旋"象征新生。传统上不可买只可赠——店家用"交换"仪式出售。' },
      { id: 'auckland_kiwi', name: '几维鸟周边', icon: '🥝', tag: '衣', type: '文创', price: 90, desc: '不会飞的国鸟几维鸟玩偶与"Kiwi"标签。新西兰人自称 Kiwi，"鸟的名字是国家昵称"。' },
      { id: 'auckland_skyjump', name: '天空塔速降', icon: '🪂', tag: '玩', type: '体验', price: 500, desc: '192米钢丝缓降，15秒"跳楼"体验。全程睁眼看两湾风景，"胆量课结业"。' },
      { id: 'auckland_sail', name: '帆船出海', icon: '⛵', tag: '玩', type: '体验', price: 350, desc: '美洲杯帆船赛的故乡，游客可登比赛级帆船。亲手拉帆操舵，"千帆之城"的正确打开方式。' },
      { id: 'auckland_hotel', name: '海湾景酒店', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '王子码头的酒店，窗见渡轮与火山岛。清晨海面薄雾，"帆影里的早晨"。' },
    ],
    stories: [
      { id: 'auckland_story_volcano', name: '50座火山的城市', icon: '🌋', desc: '奥克兰建在50多座死火山上，学校、公园都在火山锥里。人们说"住在这，你永远在爬山"。' },
      { id: 'auckland_story_kiwi', name: '"Kiwi"的三重身份', icon: '🥝', desc: '几维鸟、猕猴桃、新西兰人，都叫 Kiwi。本地人自我介绍："我是 Kiwi，但不是水果。"' },
      { id: 'auckland_story_hobbit', name: '羊场变中土世界', icon: '🚪', desc: '霍比屯本是亚历山大家族羊场，《魔戒》取景后保留成景点。粉刷圆门每天"开窗"，花是真的。' },
      { id: 'auckland_story_haka', name: '哈卡舞不止是"吓唬人"', icon: '💪', desc: '全黑队赛前哈卡舞全球闻名，毛利婚礼迎宾也跳。"哈卡是生命的致敬"，游客学着跳不标准但快乐。' },
      { id: 'auckland_story_no_snake', name: '没有蛇的国家', icon: '🐍', desc: '新西兰没有野生蛇类，鸟类在地面上安全生活。生态保护严格：入境靴子都要洗干净。' },
      { id: 'auckland_story_left', name: '靠左行驶的"右舵日常"', icon: '🚗', desc: '新西兰右舵左行，游客自驾"雨刮器当转向灯"。环岛礼让规则简单：右边车先走。' },
    ],
  });
})();
