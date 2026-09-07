/* 雅典 分册02：特色周边（Souvlaki与Moussaka/橄榄与蜂蜜/海岛体验/恶魔眼/住宿） */
window.GR_GIFTS = window.GR_GIFTS || [];
window.GR_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'athens_souvlaki', name: 'Souvlaki 烤肉卷', icon: '🌯', tag: '食', type: '美食', price: 20, desc: '希腊"国民快餐"：烤猪肉/鸡肉卷皮塔饼。配 Tzatziki 黄瓜酸奶酱，"雅典的深夜食堂"。' },
  { id: 'athens_moussaka', name: 'Moussaka 茄子千层', icon: '🍆', tag: '食', type: '美食', price: 40, desc: '茄子肉酱白酱千层焗烤。"希腊的国菜"，配一杯茴香酒。' },
  { id: 'athens_gyros', name: 'Gyros 烤肉', icon: '🌯', tag: '食', type: '美食', price: 18, desc: '竖烤肉柱削下来卷饼，"希腊版沙威玛"。配炸薯条塞进去，本地吃法。' },
  { id: 'athens_olive', name: '卡拉马塔橄榄·橄榄油', icon: '🫒', tag: '食', type: '特产', price: 40, desc: '"液体黄金"希腊橄榄油。橄榄皂与橄榄木碗，"希腊的三宝"。' },
  { id: 'athens_honey', name: '希俄斯乳香脂·百里香蜜', icon: '🍯', tag: '食', type: '特产', price: 60, desc: '乳香脂（Mastiha）是世界独有树脂糖。配酸奶与蜂巢，"雅典酸奶碗"。' },
  { id: 'athens_evil', name: '恶魔眼（Mati）饰品', icon: '🧿', tag: '衣', type: '文创', price: 20, desc: '蓝眼睛护身符"挡走厄运"。门上、车上、身上都挂，"希腊的守护符"。' },
  { id: 'athens_colosseum', name: '卫城日出+日落双打卡', icon: '🌄', tag: '玩', type: '体验', price: 0, desc: '日出从 Philopappos 山看，日落去 Areopagus 岩石。避开人潮的卫城美学。' },
  { id: 'athens_island2', name: '三岛跳岛游', icon: '⛵', tag: '玩', type: '体验', price: 220, desc: '埃伊纳+波罗斯+伊兹拉一日船游。海鸥追船，"爱琴海的快闪"。' },
  { id: 'athens_ferry', name: '圣托里尼快线', icon: '🏝️', tag: '行', type: '体验', price: 380, desc: '快船5小时到圣托里尼看蓝顶教堂与伊亚日落。世界最美日落，"希腊的终极浪漫"。' },
  { id: 'athens_bar', name: '屋顶酒吧看卫城', icon: '🍸', tag: '玩', type: '体验', price: 100, desc: 'A for Athens 等天台酒吧，灯火中的帕特农。"卫城的鸡尾酒时刻"。' },
  { id: 'athens_minsu', name: '普拉卡民宿', icon: '🏨', tag: '住', type: '住宿', price: 380, desc: '老城白墙民宿，露台正对卫城。夜里帕特农亮灯如神迹。' },
  /* ---- 希腊其他菜 ---- */
  { id: 'grg_tzatziki', name: 'Tzatziki 黄瓜酸奶酱', icon: '🥒', tag: '食', type: '美食', price: 15, desc: '希腊酸奶+黄瓜+蒜+橄榄油，' +
  '配皮塔饼或烤肉。' +
  '"希腊的国民蘸酱"。' },
  { id: 'grg_spanakopita', name: 'Spanakopita 菠菜派', icon: '🥧', tag: '食', type: '美食', price: 12, desc: '千层酥皮包菠菜羊奶酪菲达，' +
  '烤到金黄。' +
  '希腊面包房最经典，' +
  '"咸味千层派"。' },
  { id: 'grg_fasolada', name: 'Fasolada 白豆汤', icon: '🍲', tag: '食', type: '美食', price: 25, desc: '白豆番茄胡萝卜橄榄油慢炖。' +
  '"希腊的国汤"，' +
  '冬天家家户户的"周日晚饭"。' },
  { id: 'grg_ouzo', name: 'Ouzo 茴香酒', icon: '🥃', tag: '食', type: '饮品', price: 50, desc: '希腊的国酒，' +
  '加了茴香与八角。' +
  '兑水变乳白，' +
  '"希腊版的 Pastis"。' },
  { id: 'grg_retsina', name: 'Retsina 松脂酒', icon: '🍷', tag: '食', type: '饮品', price: 50, desc: '古希腊三千年的酒，' +
  '加了阿勒颇松树脂。' +
  '独特的松香是"希腊的味道"。' },
  { id: 'grg_filo', name: 'Filo 千层酥皮', icon: '🥮', tag: '食', type: '特产', price: 30, desc: '希腊甜品 Baklava 千层酥的原料，' +
  '蜂蜜+坚果。' +
  '从塞萨洛尼基到雅典的"甜品之王"。' },
  /* ---- 美食与体验 ---- */
  { id: 'grg_mezze', name: 'Mezze 小碟拼盘', icon: '🫒', tag: '食', type: '美食', price: 80, desc: '一桌小碟：橄榄、羊奶酪、炸茄子、' +
  '鱼子酱、章鱼沙拉。' +
  '希腊的"Tapas 文化"。' },
  { id: 'grg_taverna', name: '普拉卡 Taverna 晚餐', icon: '🍽️', tag: '食', type: '美食', price: 100, desc: '普拉卡老城区的家族小酒馆，' +
  '希腊沙拉、烤章鱼、' +
  '一壶 Retsina 配兹巴拉。' +
  '"希腊版的妈妈菜"。' },
  { id: 'grg_cretan', name: '克里特岛食谱', icon: '🥗', tag: '食', type: '美食', price: 50, desc: '希腊"地中海饮食"金标准，' +
  '橄榄油+全麦+蔬果+鱼+酸奶。' +
  '世界遗产级饮食模式。' },
  /* ---- 文创与服饰 ---- */
  { id: 'grg_kalamari', name: '希腊帆布凉鞋', icon: '🥿', tag: '衣', type: '服饰', price: 80, desc: '希腊人夏天人手一双的皮凉鞋，' +
  '手工皮底。' +
  '"雅典的国民鞋"。' },
  { id: 'grg_evzone', name: 'Evzone 卫兵周边', icon: '🎖️', tag: '衣', type: '文创', price: 50, desc: '宪法广场换岗卫兵的红帽与' +
  '百褶裙迷你好物。' +
  '"希腊的近卫军"。' },
  { id: 'grg_byz_icon', name: '拜占庭圣像', icon: '🖼️', tag: '衣', type: '文创', price: 150, desc: '蒙纳斯提拉奇店里的圣像复制品，' +
  '圣母与基督的金箔手绘。' +
  '"希腊东正教的视觉名片"。' },
  { id: 'grg_pezoulas', name: '希腊橄榄皂', icon: '🧼', tag: '衣', type: '特产', price: 30, desc: '克里特岛橄榄油皂，' +
  '天然不刺激。' +
  '希腊家庭百年使用，' +
  '"橄榄油的下游"。' },
  /* ---- 体验课 ---- */
  { id: 'grg_cooking', name: '希腊料理课', icon: '👨‍🍳', tag: '玩', type: '体验', price: 150, desc: '跟雅典奶奶学 Moussaka、Souvlaki、Baklava，' +
  '三小时出师。' +
  '配 Ouzo 边做边喝。' },
  { id: 'grg_olive', name: '橄榄油品鉴工作坊', icon: '🫒', tag: '玩', type: '体验', price: 80, desc: '专业品油师教你闻、尝、' +
  '鉴别 5 种希腊特级初榨橄榄油。' +
  '"液体黄金的等级课"。' },
  /* ---- 住宿 ---- */
  { id: 'grg_acropolis', name: '卫城景观酒店', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '普拉卡老城的精品酒店，' +
  '天台酒吧对卫城。' +
  '夜里帕特农亮灯如神迹。' },
  { id: 'grg_athinais', name: '海滨公寓民宿', icon: '🏖️', tag: '住', type: '住宿', price: 280, desc: '雅典南郊 Glyfada 海滨公寓，' +
  '走路到沙滩。' +
  '阳台看爱琴海，' +
  '"雅典人的周末屋"。' }
);
