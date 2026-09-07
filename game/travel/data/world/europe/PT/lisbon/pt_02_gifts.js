/* 里斯本 分册02：特色周边（贝伦蛋挞/鳕鱼/青花瓷砖/软木/法朵/葡萄美酒） */
window.PT_GIFTS = window.PT_GIFTS || [];
window.PT_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'lisbon_pastel', name: '贝伦蛋挞（Pastel de Nata）', icon: '🥧', tag: '食', type: '美食', price: 8, desc: '1837年老店秘方：酥皮千层+焦糖蛋心。撒肉桂粉趁热吃，"一天卖两万个"。' },
  { id: 'lisbon_bacalhau', name: '鳕鱼料理（Bacalhau）', icon: '🐟', tag: '食', type: '美食', price: 30, desc: '葡萄牙人说有365种鳕鱼做法。"Bacalhau à Brás"蛋丝鳕鱼最经典。' },
  { id: 'lisbon_ovo', name: '阿威罗软蛋', icon: '🥚', tag: '食', type: '特产', price: 18, desc: '蛋黄丝拉成贝壳形状的甜点，"修道院甜品艺术"。' },
  { id: 'lisbon_azulejo', name: '青花瓷砖（Azulejo）', icon: '🔵', tag: '衣', type: '文创', price: 30, desc: '葡萄牙蓝白瓷砖画，全城墙面都是画布。瓷砖博物馆与手作小件，"墙上的五百年"。' },
  { id: 'lisbon_cork', name: '软木制品', icon: '🪵', tag: '衣', type: '特产', price: 35, desc: '葡萄牙产全球一半软木。软木钱包、帽子和高跟鞋，"环保的葡国骄傲"。' },
  { id: 'lisbon_fado_cd', name: '法朵唱片·沙丁鱼罐头', icon: '🎵', tag: '衣', type: '文创', price: 20, desc: 'Fado 女伶 Amália 的黑胶。彩色沙丁鱼罐头是里斯本"最潮伴手礼"。' },
  { id: 'lisbon_tuktuk', name: 'Tuk-Tuk 巡游七丘', icon: '🛺', tag: '行', type: '体验', price: 80, desc: '电动 Tuk-Tuk 穿老城坡道，司机讲历史。省腿神器，"里斯本的敞篷车"。' },
  { id: 'lisbon_sintra2', name: '辛特拉宫殿一日', icon: '🏰', tag: '玩', type: '体验', price: 70, desc: '佩纳宫+摩尔城堡+雷加莱拉庄园。火车40分钟+巴士上山，"童话的一天"。' },
  { id: 'lisbon_fado_night', name: '法朵之夜（Fado Show）', icon: '🎶', tag: '玩', type: '体验', price: 120, desc: '小酒馆里听 Saudite（乡愁）之声。熄灯后歌手开嗓，"听不懂也会流泪"。' },
  { id: 'lisbon_miradouro', name: '观景台日落巡礼', icon: '🌄', tag: '玩', type: '体验', price: 0, desc: '圣露西亚、恩宠观景台一杯酒看日落。Alfama 红瓦连到河边，"七丘的金色黄昏"。' },
  { id: 'lisbon_minsu', name: '老城瓷砖民宿', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: 'Alfama 瓷砖墙民宿，阳台晾着衣服。楼下面包房蛋挞香叫早。' },
  /* ---- 葡萄牙其他菜 ---- */
  { id: 'ptg_francesinha', name: 'Francesinha 三明治', icon: '🥪', tag: '食', type: '美食', price: 35, desc: '波尔图发明的"芝士火锅三明治"，辣番茄酱浇下，配啤酒一只，"葡国版的法国吐司"。' },
  { id: 'ptg_caldo', name: 'Caldo Verde 蔬菜汤', icon: '🥬', tag: '食', type: '美食', price: 18, desc: '羽衣甘蓝+土豆泥+蒜肠，"葡国国汤"。每家饭馆都喝得出来"奶奶的味道"。' },
  { id: 'ptg_porco', name: 'Rojoes 葡式烤乳猪', icon: '🐷', tag: '食', type: '美食', price: 70, desc: '葡式烤乳猪配土豆与橘片，皮脆肉嫩。中部巴塔利亚的"国民烤菜"。' },
  { id: 'ptg_pastel_nata', name: '葡式蛋挞礼盒', icon: '🥧', tag: '食', type: '特产', price: 60, desc: 'Pastéis de Belém 礼盒装 6 枚蛋挞，冷链包装可带回家。"里斯本最甜的伴手礼"。' },
  { id: 'ptg_port_wine', name: '波特酒（Port Wine）', icon: '🍷', tag: '食', type: '饮品', price: 120, desc: '杜罗河谷产的加强酒，宝石红与茶色两款经典。酒窖参观在波尔图，"葡萄牙的国酒"。' },
  { id: 'ptg_green_wine', name: 'Vinho Verde 绿酒', icon: '🍷', tag: '食', type: '饮品', price: 50, desc: '葡萄牙西北的微气泡白葡萄酒，清爽微酸。"夏季餐桌标配"。' },
  /* ---- 文创与服饰 ---- */
  { id: 'ptg_galo', name: '巴塞罗那只公鸡（O Galo de Barcelos）', icon: '🐓', tag: '衣', type: '文创', price: 30, desc: '葡萄牙国家象征的彩绘公鸡，盘、玩偶、徽章。"葡国版的国家吉祥物"。' },
  { id: 'ptg_pasteis', name: '软木零钱包', icon: '👛', tag: '衣', type: '服饰', price: 80, desc: '葡萄牙软木做的零钱包与卡包，轻便防水可持续。"环保与时尚兼得"。' },
  /* ---- 体验课 ---- */
  { id: 'ptg_fado_dinner', name: '法朵晚餐秀', icon: '🎵', tag: '食', type: '体验', price: 200, desc: '老城法朵酒馆三道菜晚餐，配法朵表演。熄灯后开嗓，"葡萄牙灵魂之歌的现场"。' },
  { id: 'ptg_pasteis_class', name: '蛋挞制作课', icon: '🥧', tag: '玩', type: '体验', price: 100, desc: 'Pastéis de Belém 教您千层酥皮的折叠与蛋液配比。出炉自己做的 6 枚带走，"葡国厨房的入门课"。' },
  /* ---- 住宿 ---- */
  { id: 'ptg_bairro', name: 'Bairro Alto 精品酒店', icon: '🏨', tag: '住', type: '住宿', price: 650, desc: '上城区的老楼改精品酒店，青花瓷砖装饰。天台看七丘日落，"住在法朵的故乡"。' },
  { id: 'ptg_cascais', name: '卡斯凯什海滨酒店', icon: '🏖️', tag: '住', type: '住宿', price: 500, desc: '里斯本西郊海滨小镇，沙滩与海鲜饭店。火车 40 分钟到市中心，"海与城的中间站"。' }
);
