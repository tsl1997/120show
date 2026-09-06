/* ============ 美国·檀香山（夏威夷） ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'honolulu',
    name: '檀香山',
    country: '美国',
    cc: 'US',
    flag: '🌺',
    region: '美国·夏威夷',
    hero: '🌋',
    desc: '太平洋明珠·夏威夷：威基基海滩的浪一年四季温柔，钻石头山看日出，花环与草裙舞把"Aloha"变成一种生活方式。',
    travel: [{ name: '飞机', icon: '✈️', cost: 5500 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'honolulu_waikiki', name: '威基基海滩', icon: '🏖️', price: 0, desc: '世界最著名的冲浪海滩，钻石头山火山锥做背景。长板初学者的天堂，浪花与酒店泳池连成一片。' },
      { id: 'honolulu_diamond_head', name: '钻石头山', icon: '🌋', price: 40, desc: '三十万年前的火山口徒步，40分钟登顶看"最贵的日出"。俯瞰威基基海岸线，火山口里的绿色草坪像外星球场。' },
      { id: 'honolulu_pearl', name: '珍珠港纪念地', icon: '⚓', price: 60, desc: '亚利桑那号战舰沉没处的水上纪念馆，油珠至今从海面冒出。历史课在海上上完，风吹过都是回响。' },
      { id: 'honolulu_hanauma', name: '恐龙湾浮潜', icon: '🐠', price: 100, desc: '火山口塌陷成的海湾，鱼群密到"贴脸游"。每天限流预约，礁石与热带鱼构成天然水族馆。' },
      { id: 'honolulu_polynesian', name: '波利尼西亚文化中心', icon: '🛶', price: 400, desc: '七个太平洋岛村一天逛遍，独木舟巡游+草裙舞教学。晚上的大型歌舞晚宴，火把与鼓点燃到高潮。' },
      { id: 'honolulu_north_shore', name: '北岸·日落海滩', icon: '🏄', price: 0, desc: '冬季巨浪冲浪圣地，十几米高浪墙让人屏息。夏天平静时是浮潜天堂，随便一个糖厂镇都有姜味冰淇淋。' },
      { id: 'honolulu_luau', name: '烤猪盛宴（Luau）', icon: '🔥', price: 350, desc: '地下石灶烤整猪、火刀舞表演、花环仪式。草裙舞老师现场教学，"Aloha精神"全套体验。' },
    ],
    souvenirs: [
      { id: 'honolulu_poke', name: '波奇生鱼饭', icon: '🍣', tag: '食', type: '美食', price: 90, desc: '金枪鱼丁拌海苔酱油芝麻油，"夏威夷寿司碗"。海滩边一盒配冰可乐，鲜到眉毛掉。' },
      { id: 'honolulu_shave_ice', name: '彩虹刨冰', icon: '🍧', tag: '食', type: '美食', price: 40, desc: 'Matsumoto 老店的刨冰堆成小山，七彩糖浆配红豆底。北岸排长队的"消暑神器"。' },
      { id: 'honolulu_plate', name: '烤猪盘餐', icon: '🍖', tag: '食', type: '美食', price: 80, desc: '两勺米饭一勺通心粉沙拉配烤猪或Kalua猪。本地快餐店的"灵魂套餐"，分量实在到感人。' },
      { id: 'honolulu_malasada', name: '葡萄牙甜甜圈', icon: '🍩', tag: '食', type: '美食', price: 25, desc: '伦纳德老店现炸糖霜泡芙球，热乎到烫手。周二也要排队，"夏威夷的快乐球"。' },
      { id: 'honolulu_mai_tai', name: '迈泰鸡尾酒', icon: '🍹', tag: '食', type: '饮品', price: 90, desc: '朗姆酒配橙汁菠萝汁与橙皮，日落时分的标配。Tiki 酒吧的"度假之杯"，微醺看夕阳。' },
      { id: 'honolulu_kona', name: '科纳咖啡', icon: '☕', tag: '食', type: '特产', price: 150, desc: '火山坡上种的稀有咖啡，全球产量不到1%。咖啡农场参观试饮，"火山味"的顺滑。' },
      { id: 'honolulu_lei', name: '花环（Lei）', icon: '🌺', tag: '衣', type: '服饰', price: 60, desc: '新鲜鸡蛋花与兰花串成的花环，接机仪式感满分。离开时把花环放回海里，"还会再来夏威夷"。' },
      { id: 'honolulu_ukulele', name: '尤克里里', icon: '🎸', tag: '衣', type: '文创', price: 300, desc: '夏威夷本土乐器，四根弦弹出阳光。琴行老师现场教弹"Somewhere Over the Rainbow"前奏。' },
      { id: 'honolulu_mac_nut', name: '夏威夷果仁巧克力', icon: '🥥', tag: '食', type: '特产', price: 120, desc: '火山种植的夏威夷果裹黑巧，Whalers 老牌礼盒。伴手礼界的"硬通货"。' },
      { id: 'honolulu_surf_board', name: '威基基冲浪课', icon: '🏄', tag: '玩', type: '体验', price: 250, desc: '长板教学浪区，教练唱着歌带你起乘。站在浪上五秒，"夏威夷式"成就感。' },
      { id: 'honolulu_outrigger', name: '传统独木舟出海', icon: '🛶', tag: '玩', type: '体验', price: 180, desc: '六人划带舷外浮木的独木舟，向浪而行。划到海面回头，威基基的楼群像积木。' },
      { id: 'honolulu_hula', name: '草裙舞体验课', icon: '💃', tag: '玩', type: '体验', price: 100, desc: '手部动作每个都有含义：海浪、云、风。一小时学一支舞，"用身体讲故事"。' },
      { id: 'honolulu_hotel', name: '海滩酒店海景房', icon: '🏨', tag: '住', type: '住宿', price: 900, desc: '威基基高层海景房，阳台看钻石头山日出。楼下就是海滩，冲浪板在房门口排队。' },
    ],
    stories: [
      { id: 'honolulu_story_aloha', name: '"Aloha"是问候也是哲学', icon: '🤙', desc: '夏威夷语的 Aloha 意为爱与和平，也指"分享生命的能量"。这里的交通堵塞都少了火气，被称为"Aloha精神"。' },
      { id: 'honolulu_story_shaka', name: '"Shaka"手势的由来', icon: '🤙', desc: '拇指小指伸出的"六"手势源自夏威夷，意为"放轻松"。冲浪、开车打招呼都用它，游客学会第一课。' },
      { id: 'honolulu_story_lei', name: '花环的告别仪式', icon: '🌺', desc: '离开夏威夷把花环扔进海里，花环漂回岸边代表"你会回来"。机场离境厅常有人对着大海挥手。' },
      { id: 'honolulu_story_volcano', name: '钻石头山的"钻石"传说', icon: '💎', desc: '水手误把方解石当钻石，火山因此得名"钻石头山"。山上没有钻石，却有全岛最好的日出。' },
      { id: 'honolulu_story_spam', name: '午餐肉寿司的国民地位', icon: '🍙', desc: '夏威夷人吃午餐肉全球第一，"Spam Musubi"是国民便利店美食。二战罐头文化长成了本地传奇。' },
      { id: 'honolulu_story_hula', name: '草裙舞曾被禁止', icon: '💃', desc: '19世纪传教士一度禁止草裙舞，如今它成了文化复兴的旗帜。每年复活节后全岛"草裙舞周"大赛。' },
    ],
  });
})();
