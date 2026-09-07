/* 冲绳县 分册02：特色周边（琉球美食/南国手信/海岛体验/离岛住宿） */
window.OKN_GIFTS = window.OKN_GIFTS || [];
window.OKN_GIFTS.push(
  /* ---- 琉球美食（沿用原条目） ---- */
  { id: 'okinawa_soba', name: '冲绳荞麦面', icon: '🍜', tag: '食', type: '美食', price: 40, desc: '其实不是荞麦面，是小麦面配软糯五花肉与鱼板。汤头鲣鱼香浓，桌上一罐岛辣椒是隐藏挑战。' },
  { id: 'okinawa_goya', name: '苦瓜炒杂烩', icon: '🥒', tag: '食', type: '美食', price: 50, desc: '岛苦瓜与午餐肉、鸡蛋同炒，微苦回甘。冲绳人长寿饮食的代表菜，配白饭能吃两碗。' },
  { id: 'okinawa_taco_rice', name: '塔可饭', icon: '🍚', tag: '食', type: '美食', price: 45, desc: '塔可碎肉浇在白饭上加番茄生菜，美式墨西哥混血快餐。美军基地文化的"意外遗产"，吃了都说香。' },
  { id: 'okinawa_pork', name: '拉法帖·猪蹄料理', icon: '🍖', tag: '食', type: '美食', price: 60, desc: '冲绳人"除叫声外全吃"的猪文化代表。猪蹄炖到胶质黏唇，配泡盛酒是本地大爷的最爱。' },
  { id: 'okinawa_souki', name: '香檬汁', icon: '🍋', tag: '食', type: '饮品', price: 25, desc: '岛香檬（シークヮーサー）酸得清爽，兑水或入泡盛。长寿之岛的"维C炸弹"，一喝上头。' },
  { id: 'okinawa_awamori', name: '泡盛', icon: '🍶', tag: '食', type: '饮品', price: 80, desc: '琉球古法蒸馏米酒，度数高但口感圆润。兑香檬加冰是"冲绳标配"，酒瓶上的岁月标记是"古酒"。' },
  { id: 'okinawa_benimo', name: '红芋挞·雪姬盐', icon: '🍠', tag: '食', type: '特产', price: 30, desc: '紫薯做的红芋挞紫色控必买，"雪盐"饼干用冲绳盐微甜带咸。机场手信区的"紫色风暴"。' },
  { id: 'okinawa_shisa', name: '风狮爷（Shisa）', icon: '🦁', tag: '衣', type: '文创', price: 70, desc: '屋顶与门口张口的狮子陶偶，一只张嘴一只闭嘴，驱邪纳福。买一对摆家里，琉球门神上岗。' },
  { id: 'okinawa_bingata', name: '红型染布艺', icon: '🎨', tag: '衣', type: '文创', price: 110, desc: '琉球王族的"红型"染布，热带花鸟配色大胆。做成杯垫、手机壳，一秒入南国。' },
  { id: 'okinawa_snorkel', name: '浮潜·青之洞窟', icon: '🤿', tag: '玩', type: '体验', price: 200, desc: '真荣田岬的海蚀洞里，阳光穿透水面反射出神秘蓝光。不会游泳也能全程教练带着，鱼群就在脸旁边。' },
  { id: 'okinawa_diving', name: '潜水看海龟', icon: '🐢', tag: '玩', type: '体验', price: 350, desc: '持证潜水员去庆良间群岛，与海龟同框概率极高。海底的蓝色静谧，上来后话都变少——震撼的。' },
  { id: 'okinawa_parasail', name: '海上拖伞', icon: '🪂', tag: '玩', type: '体验', price: 250, desc: '快艇把你和降落伞送上五十米高空，俯瞰珊瑚礁分层蓝。海风很大、视野无敌，尖叫会被吹回嘴里。' },
  { id: 'okinawa_eisa', name: '太鼓EISA表演', icon: '🥁', tag: '玩', type: '体验', price: 60, desc: '琉球传统EISA舞配上太鼓与三线，节奏一响手脚自动打拍。游客也能跟着围圈跳，气氛拉满。' },
  { id: 'okinawa_hotel', name: '海边度假酒店', icon: '🏨', tag: '住', type: '住宿', price: 550, desc: '恩纳村悬崖边的度假酒店，泳池连着大海。躺在床上听浪，阳台上喝香檬气泡水看日落。' },
  /* ---- 新增·琉球美食与饮品 ---- */
  { id: 'okng_umibudo', name: '海葡萄', icon: '🍇', tag: '食', type: '美食', price: 35, desc: '一串串圆润得像迷你葡萄，蘸酱油醋咬下去“啵啵”爆汁。海水味带甜回甘，是冲绳居酒屋里最抢手的一口绿。' },
  { id: 'okng_sataandagi', name: '炸糖球·萨塔安达基', icon: '🍩', tag: '食', type: '美食', price: 15, desc: '黑糖面糊炸出的冲绳版甜甜圈，外壳脆、内里软。路边小摊现炸最香，热乎乎咬一口，糖浆顺着嘴角流，是庶民甜味。' },
  { id: 'okng_juicy', name: '冲绳蒸饭（ジューシー）', icon: '🍚', tag: '食', type: '美食', price: 30, desc: '猪肉、香菇与胡萝卜同米蒸透的乡土炊饭，鲜味渗进每粒米。路边食堂一碗配汤，落胃程度直追妈妈的手艺。' },
  { id: 'okng_sanpin', name: '香片茶', icon: '🍵', tag: '食', type: '饮品', price: 18, desc: '冲绳人饭桌上的茉莉花茶，几乎家家常备。清爽花香解腻回甘，配金楚糕或冲绳荞麦面，就是最地道的岛上组合。' },
  { id: 'okng_orion', name: '猎户座啤酒（Orion）', icon: '🍺', tag: '食', type: '饮品', price: 45, desc: '冲绳人自己的啤酒品牌，麦香清冽像海风过喉。傍晚屋顶开一瓶冰镇生啤，配苦瓜炒蛋，是这座岛公认的快乐公式。' },
  { id: 'okng_chinsuko', name: '金楚糕', icon: '🍪', tag: '食', type: '特产', price: 20, desc: '琉球王朝就有的传统点心，猪油砂糖烤到沙沙化口。原味、黑糖与盐味各有拥趸，配一杯香片茶能吃出王朝下午茶。' },
  { id: 'okng_shiosai', name: '雪盐（盐屋）', icon: '🧂', tag: '食', type: '特产', price: 30, desc: '宫古岛深海海水晾晒出的盐，细白如雪，咸里带矿物回甘。撒在烤肉、沙拉或甜点上，一小罐就能撑起半间厨房的调味。' },
  { id: 'okng_mozuku', name: '水云醋·海蕴', icon: '🥗', tag: '食', type: '特产', price: 25, desc: '冲绳近海的水云藻加醋腌渍，滑溜溜、酸溜溜，最是开胃。当地人当小菜配塔可饭，被称为海里长出的“长寿前菜”。' },
  /* ---- 新增·南国手信文创 ---- */
  { id: 'okng_ryukyuglass', name: '琉球玻璃杯', icon: '🎐', tag: '衣', type: '文创', price: 90, desc: '回收玻璃手工吹出的杯碗，气泡与渐层每一件都不同。对着光看，杯壁里像封存着一小片冲绳的海与天空。' },
  { id: 'okng_yachimun', name: '壶屋烧陶器', icon: '🏺', tag: '衣', type: '文创', price: 80, desc: '那霸壶屋窑的粗陶杯碗，土釉烧出温润的颗粒手感。装香片茶或泡盛都合适，杯沿的窑变落灰，带着冲绳泥土的温度。' },
  { id: 'okng_sanshin', name: '三线（迷你版）', icon: '🪕', tag: '玩', type: '文创', price: 150, desc: '琉球三弦的迷你摆件，蛇皮琴面配牛角拨片，摆在架子上也有南国气场。真品能学两指扫弦，一拨就是“安里屋”的调子。' },
  { id: 'okng_kariyushi', name: '花衬衫·かりゆし', icon: '👕', tag: '衣', type: '服饰', price: 120, desc: '冲绳男性连上班、喝喜酒都穿的花衬衫，正式感与度假感兼得。图案从扶桑花到泡盛瓶，套上它，肩膀自动就松了下来。' },
  /* ---- 新增·海岛体验与离岛住宿 ---- */
  { id: 'okng_sanshin_taiken', name: '三线弹奏体验', icon: '🎵', tag: '玩', type: '体验', price: 100, desc: '老师手把手教你按弦，十分钟就能弹出“安里屋小调”。椰影下指法其实不难，难的是忍住不跟着歌词哼出声音。' },
  { id: 'okng_glass_taiken', name: '琉球玻璃吹制体验', icon: '🥃', tag: '玩', type: '体验', price: 130, desc: '匠人握着你的手，把烧红的玻璃泡吹成专属杯盏。歪斜与气泡都是手作的证据，冷却后刻上名字，第二天就能带回纪念。' },
  { id: 'okng_minpaku', name: '离岛民宿之夜', icon: '🏡', tag: '住', type: '住宿', price: 300, desc: '在座间味或渡嘉敷的岛民家住一晚，含早晚餐和房东的真心话。夜里安静到只剩虫鸣与银河，清晨被鸡叫而非闹钟叫醒。' }
);
