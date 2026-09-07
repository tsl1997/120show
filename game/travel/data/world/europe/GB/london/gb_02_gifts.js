/* 伦敦 分册02：特色周边（英式早餐/下午茶/炸鱼薯条/威士忌/Burberry/西区音乐剧） */
window.GB_GIFTS = window.GB_GIFTS || [];
window.GB_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'london_fishchips', name: '炸鱼薯条', icon: '🍟', tag: '食', type: '美食', price: 40, desc: '啤酒糊炸鳕鱼配粗薯条，撒盐浇麦芽醋。传统报纸包装，海风里吃才够英伦。' },
  { id: 'london_breakfast', name: '英式早餐', icon: '🍳', tag: '食', type: '美食', price: 50, desc: '煎蛋、培根、香肠、烤番茄、焗豆、蘑菇摆满一盘。一杯英式红茶下肚，全套英式名不虚传。' },
  { id: 'london_afternoon', name: '下午茶', icon: '🫖', tag: '食', type: '美食', price: 180, desc: '三层塔点心架：黄瓜三明治、司康配凝脂奶油、甜点。百年老酒店里学"先倒茶后加奶"，礼仪小姐全程服务。' },
  { id: 'london_pie', name: '英式牛肉派', icon: '🥧', tag: '食', type: '美食', price: 35, desc: '酥皮牛肉派配肉汁与豌豆泥。酒馆里"派与啤酒"组合，暖胃又管饱。' },
  { id: 'london_tea', name: '英式红茶', icon: '🍵', tag: '食', type: '特产', price: 30, desc: 'Fortnum & Mason 的伯爵茶罐金色印花。百年茶铺的礼盒，"英伦下午"回家慢慢泡。' },
  { id: 'london_whisky', name: '苏格兰威士忌', icon: '🥃', tag: '食', type: '特产', price: 120, desc: '单一麦芽威士忌在酒馆里按杯品鉴。高地泥煤味的"液体黄金"，免税店买整瓶更划算。' },
  { id: 'london_phonebooth', name: '红电话亭·巴士文创', icon: '☎️', tag: '衣', type: '文创', price: 25, desc: '红色电话亭钥匙扣、双层巴士模型。英伦三宝"红亭、红巴、黑伞"，冰箱贴全家福。' },
  { id: 'london_umbrella', name: '绅士雨伞', icon: '☂️', tag: '衣', type: '服饰', price: 80, desc: '手工钩骨伞经百年风雨，伦敦人拿伞当配饰。黑色长柄伞配大衣，"绅士感"直接拉满。' },
  { id: 'london_tube_pass', name: '地铁 Oyster 卡', icon: '🚇', tag: '行', type: '体验', price: 20, desc: '"Mind the gap"（小心空隙）广播一百多年没换。地铁地图像彩色蜘蛛网，坐两次就熟。' },
  { id: 'london_abbey', name: '哈利波特影城', icon: '🧙', tag: '玩', type: '体验', price: 200, desc: '华纳片场的对角巷、九又四分之三站台原景。黄油啤酒是"无酒精姜汁汽水"，魔杖墙前人人会魔法。' },
  { id: 'london_punk', name: '西区音乐剧', icon: '🎭', tag: '玩', type: '体验', price: 200, desc: '《歌剧魅影》《狮子王》在西区连演几十年。当天去折扣票亭买票，伦敦之夜从大幕拉开开始。' },
  { id: 'london_hotel', name: '泰晤士景酒店', icon: '🏨', tag: '住', type: '住宿', price: 500, desc: '窗外是伦敦眼与河畔灯火。英伦酒店的"下午茶服务"直接送到房间，悠长得像老电影。' },
  /* ---- 英式其他菜 ---- */
  { id: 'gbg_shepherd', name: '牧羊人派', icon: '🥧', tag: '食', type: '美食', price: 35, desc: '羊肉馅配土豆泥焗烤，酒馆"pub"的国民菜。冬天吃配啤酒，"英式餐桌"的味道。' },
  { id: 'gbg_york', name: '约克夏布丁', icon: '🫓', tag: '食', type: '美食', price: 30, desc: '中空的金黄面团，灌入烤牛肉汁与嫩肉。周日烤肉日必备，"英国的布丁不是甜点"。' },
  { id: 'gbg_cottage', name: '康沃尔馅饼', icon: '🥟', tag: '食', type: '美食', price: 15, desc: '手掌大小的牛肉土豆馅饼，车站便利店随手买。英国火车上的"硬通货"。' },
  { id: 'gbg_eton', name: '伊顿麦斯', icon: '🍓', tag: '食', type: '美食', price: 20, desc: '草莓奶油蛋白酥，伊顿公学的"毕业甜品"。每年六月草莓节必备。' },
  { id: 'gbg_gin', name: '金酒·杜松子酒', icon: '🍸', tag: '食', type: '饮品', price: 60, desc: '英国金酒复兴的代表，Hendrick\'s 与 Tanqueray 经典。杜松子味配汤力水，"下午前的伦敦鸡尾酒"。' },
  /* ---- 茶与文化 ---- */
  { id: 'gbg_fortnum', name: 'Fortnum & Mason 茶礼盒', icon: '🎁', tag: '食', type: '特产', price: 120, desc: '百年茶铺的拼配茶礼盒，金边伯爵茶与婚礼茶。皮卡迪利总店橱窗是伦敦圣诞标志。' },
  { id: 'gbg_royal', name: '皇家认证商品', icon: '👑', tag: '食', type: '特产', price: 80, desc: '英国王室认证的茶、饼干、酱料。瓶身贴"皇家认证徽章"是品质的保证。' },
  /* ---- 文创与服饰 ---- */
  { id: 'gbg_burberry', name: 'Burberry 风衣', icon: '🧥', tag: '衣', type: '服饰', price: 1200, desc: '1856 年发明的"战壕风衣"，伦敦的标配。摄政街旗舰店的定制款"战壕文化"的活历史。' },
  { id: 'gbg_barbour', name: 'Barbour 蜡布夹克', icon: '🧥', tag: '衣', type: '服饰', price: 550, desc: '英国乡绅与皇室同款，蜡布防水经得起三十年风雨。"英伦户外文化的标志"。' },
  { id: 'gbg_bowler', name: '圆顶礼帽·洛克比帽', icon: '🎩', tag: '衣', type: '服饰', price: 180, desc: '洛克比帽 Lock & Co. 1676 年开业，戴安娜也买过。皮卡迪利街的"全英最老帽店"。' },
  { id: 'gbg_mary', name: '玛丽·简鞋', icon: '👞', tag: '衣', type: '服饰', price: 220, desc: '英国低跟系带鞋，从 1900 年代女学生穿到今天。"英伦淑女风"标配。' },
  { id: 'gbg_album', name: '披头士 Abbey Road 唱片', icon: '🎵', tag: '衣', type: '文创', price: 60, desc: '1969 年同名专辑复刻黑胶。封面的斑马线是伦敦最酷的标志。' },
  /* ---- 体验课 ---- */
  { id: 'gbg_pub_crawl', name: '酒馆探访 Pub Crawl', icon: '🍺', tag: '玩', type: '体验', price: 120, desc: '老伦敦带路逛五家百年酒馆，每家点一品脱。从 Ye Olde Cheshire Cheese 到 The French House，"酒鬼的朝圣"。' },
  { id: 'gbg_tea_class', name: '下午茶礼仪课', icon: '🫖', tag: '玩', type: '体验', price: 150, desc: '老酒店茶师教你"先倒茶后加奶"、"司康掰两半不切"、"手指饼先蘸奶油"。"英伦名媛养成课"。' },
  /* ---- 住宿 ---- */
  { id: 'gbg_savoy', name: '萨伏伊酒店', icon: '🏨', tag: '住', type: '住宿', price: 1200, desc: '1889 年开业的"伦敦最豪华酒店"。萨克斯风的装饰艺术大堂，"英伦奢靡的天花板"。' },
  { id: 'gbg_notting_home', name: '诺丁山民宿', icon: '🏠', tag: '住', type: '住宿', price: 280, desc: '彩色房子小巷里的公寓，楼下就是 Portobello 市集。"英伦电影里的家"。' }
);
