/* ============ 湖南·长沙 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'changsha',
    name: '长沙',
    country: '中国',
    cc: 'CN',
    province: '湖南',
    flag: '🇨🇳',
    region: '华中',
    hero: '🌶️',
    desc: '娱乐之都、快乐星城：橘子洲头的焰火，文和友的市井江湖，茶颜悦色排长队，凌晨三点的解放西路依然人声鼎沸。',
    travel: [{ name: '高铁', icon: '🚄', cost: 160 }, { name: '飞机', icon: '✈️', cost: 600 }],
    visa: null,
    spots: [
      { id: 'changsha_juzizhou', name: '橘子洲头', icon: '🍊', price: 0, desc: '湘江中的长岛，青年毛泽东雕像凝望远方。"独立寒秋，湘江北去，橘子洲头"，周六晚焰火照亮江面。' },
      { id: 'changsha_yuelu', name: '岳麓山·岳麓书院', icon: '⛰️', price: 0, desc: '"千年学府"岳麓书院"惟楚有材，于斯为盛"。爱晚亭"停车坐爱枫林晚"，秋天红枫满山。' },
      { id: 'changsha_wenheyou', name: '超级文和友', icon: '🏙️', price: 0, desc: '把80年代老长沙社区"搬"进商场七层。排队三小时，拍照两小时，"市井沉浸式游乐场"。' },
      { id: 'changsha_bo', name: '湖南博物院', icon: '🏺', price: 0, desc: '马王堆汉墓：辛追夫人两千年不腐，素纱襌衣仅49克。"一票难求"的顶级博物馆，提前一周抢约。' },
      { id: 'changsha_jiefangxi', name: '解放西路·太平老街', icon: '🏮', price: 0, desc: '长沙夜生活的心脏，凌晨三点还堵车。太平街贾谊故居与臭豆腐老铺，"古老与嗨混在一起"。' },
      { id: 'changsha_tianxin', name: '天心阁·杜甫江阁', icon: '🏯', price: 32, desc: '天心阁是古城墙遗存，"潇湘古阁"。杜甫江阁看湘江焰火最佳机位，周六晚人山人海。' },
      { id: 'changsha_meixihu', name: '梅溪湖·谢子龙影像馆', icon: '📷', price: 0, desc: '梅溪湖城市岛双螺旋观景台出片。谢子龙影像艺术馆的清水混凝土建筑，文艺打卡顶流。' },
    ],
    souvenirs: [
      { id: 'changsha_chayan', name: '茶颜悦色', icon: '🧋', tag: '食', type: '饮品', price: 20, desc: '"幽兰拿铁"奶油顶碧根果碎，中式奶茶开创者。全国独一份的"长沙限定"，离长沙就想它。' },
      { id: 'changsha_choudoufu', name: '黑色经典臭豆腐', icon: '🧆', tag: '食', type: '美食', price: 12, desc: '黑得发亮、灌汤爆汁的长沙臭豆腐。浇蒜水辣椒萝卜丁，"闻着臭吃着上头"。' },
      { id: 'changsha_xiaolongxia', name: '文和友小龙虾', icon: '🦞', tag: '食', type: '美食', price: 128, desc: '口味虾麻辣鲜香，吮指程度五颗星。配紫苏与冰啤酒，长沙夜宵的"三件套"。' },
      { id: 'changsha_dabing', name: '糖油粑粑·大香肠', icon: '🍡', tag: '食', type: '美食', price: 10, desc: '糖油粑粑糯米炸得金黄流糖。老长沙大香肠"比手臂短比脸长"，李公庙排队三十年。' },
      { id: 'changsha_xiangcai', name: '湘菜：剁椒鱼头', icon: '🌶️', tag: '食', type: '美食', price: 88, desc: '红剁椒铺满大鱼头，蒸出鲜辣。配一份"金汤"拌面，"湘菜之魂"。' },
      { id: 'changsha_zhou', name: '长沙周记凉面', icon: '🍜', tag: '食', type: '美食', price: 15, desc: '长沙凉面麻酱香浓，嗦一碗"透心凉"。夏天的老街必备，配糖水铺的绿豆沙。' },
      { id: 'changsha_shouwang', name: '守艺人湘绣', icon: '🪡', tag: '衣', type: '文创', price: 150, desc: '湘绣"绣鸟能听声，绣虎能奔跑"。鬅毛针法绣狮虎，四大名绣的"动态派"。' },
      { id: 'changsha_wenwan', name: '浏阳花炮·菊花石', icon: '🎆', tag: '衣', type: '文创', price: 60, desc: '浏阳花炮"世界花炮之乡"。菊花石天然开花纹理，"石头里的菊花"。' },
      { id: 'changsha_mao', name: '毛主席纪念文创', icon: '🟥', tag: '衣', type: '文创', price: 40, desc: '橘子洲头青年艺术雕像徽章、红书签。红色旅游城市的纪念品，"恰同学少年"。' },
      { id: 'changsha_juhua', name: '橘子洲焰火观赏', icon: '🎆', tag: '玩', type: '体验', price: 0, desc: '每周六晚焰火在湘江上空绽放十五分钟。杜甫江阁与风帆广场是最佳机位，人潮与浪漫齐飞。' },
      { id: 'changsha_yeyu', name: '解放西夜生活之旅', icon: '🍻', tag: '玩', type: '体验', price: 100, desc: '清吧、livehouse、夜宵摊一晚串完。长沙人"越夜越精神"，凌晨三点还在嗦粉。' },
      { id: 'changsha_guibu', name: '嗦粉晨间之旅', icon: '🍜', tag: '玩', type: '体验', price: 25, desc: '长沙米粉"圆的扁的"任选，码子盖码现炒。原味粉配剁辣椒，"长沙的早晨从嗦粉开始"。' },
      { id: 'changsha_minsu', name: '五一广场民宿', icon: '🏨', tag: '住', type: '住宿', price: 300, desc: '五一商圈高空民宿，落地窗看摩天楼霓虹。楼下就是太平街，夜宵下楼即达。' },
    ],
    stories: [
      { id: 'changsha_story_chayan', name: '茶颜悦色为什么不出省', icon: '🧋', desc: '茶颜悦色十年坚守长沙，"供应链配不上野心"曾上热搜。如今出了省，长沙人还是最爱"家门口的"。' },
      { id: 'changsha_story_ye', name: '不夜城的基因', icon: '🌃', desc: '长沙夜经济全国第一梯队，解放西凌晨仍堵车。"娱乐之都"的底气：夜宵、酒吧、洗脚城一条龙。' },
      { id: 'changsha_story_xinzhu', name: '辛追夫人的"时间胶囊"', icon: '🏺', desc: '马王堆辛追夫人出土时皮肤有弹性、血管可见。素纱襌衣49克，"叠十层还能看报纸"。' },
      { id: 'changsha_story_juzi', name: '橘子洲的焰火情', icon: '🎆', desc: '橘子洲焰火每周六燃放，"长沙的浪漫周更"。湘江两岸大桥上站满人，"全城抬头"。' },
      { id: 'changsha_story_yuelu', name: '岳麓书院的千年讲堂', icon: '📜', desc: '岳麓书院创办于976年，至今仍在办学。"惟楚有材，于斯为盛"的对联，是中国书院的天花板。' },
      { id: 'changsha_story_wenheyou', name: '文和友的"怀旧生意"', icon: '🏙️', desc: '超级文和友复刻80年代长沙社区，老物件真从拆迁房收来。年轻人排队拍照，"贩卖回忆"的门道。' },
    ],
  });
})();
