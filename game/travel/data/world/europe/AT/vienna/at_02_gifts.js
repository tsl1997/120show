/* 维也纳 分册02：特色周边（炸猪排与萨赫蛋糕/咖啡馆/巧克力/瓷器/音乐文创/住宿） */
window.AT_GIFTS = window.AT_GIFTS || [];
window.AT_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'vienna_schnitzel', name: '维也纳炸猪排', icon: '🍖', tag: '食', type: '美食', price: 60, desc: '比脸大的小牛肉排，配土豆沙拉与柠檬。"Figlmüller"百年老店。' },
  { id: 'vienna_sacher', name: '萨赫蛋糕', icon: '🍰', tag: '食', type: '美食', price: 40, desc: '1832年发明的巧克力杏子酱蛋糕。Hotel Sacher 原版配无奶咖啡，"维也纳的甜"。' },
  { id: 'vienna_coffee2', name: '维也纳咖啡·阿尔滕贝格', icon: '☕', tag: '食', type: '饮品', price: 30, desc: 'Einspänner 双份奶油黑咖啡。老咖啡馆大理石桌，"慢报纸时代"。' },
  { id: 'vienna_wurst', name: '香肠摊 Käsekrainer', icon: '🌭', tag: '食', type: '美食', price: 15, desc: '芝士香肠配芥末，站在街头吃。"Würstelstand"文化，深夜的救赎。' },
  { id: 'vienna_mozart', name: '莫扎特巧克力', icon: '🍫', tag: '食', type: '特产', price: 25, desc: 'Mozartkugel：杏仁糖+牛轧糖+巧克力。"音乐天才的甜味"。' },
  { id: 'vienna_music_wen', name: '音乐文创', icon: '🎼', tag: '衣', type: '文创', price: 30, desc: '莫扎特/贝多芬乐谱手稿复刻、金色大厅模型。"古典音乐之都"的纪念。' },
  { id: 'vienna_porzellan', name: '奥格滕瓷器', icon: '🏺', tag: '衣', type: '文创', price: 120, desc: 'Augarten 皇家瓷器厂手工瓷。蓝柄剑标记，"维也纳白"。' },
  { id: 'vienna_concert', name: '金色大厅听一场', icon: '🎻', tag: '玩', type: '体验', price: 180, desc: '莫扎特音乐会着古装演出。或者站票听爱乐，"音乐之都必须听一场"。' },
  { id: 'vienna_ball', name: '维也纳舞会体验（冬季）', icon: '💃', tag: '玩', type: '体验', price: 350, desc: '1-2月舞会季：歌剧院舞会、咖啡师舞会。白裙燕尾服，"昨日世界的回响"。' },
  { id: 'vienna_nasch', name: '纳旭市场觅食', icon: '🧺', tag: '玩', type: '体验', price: 30, desc: '400年历史露天市场，Omni 餐馆与咸乳酪。周六跳蚤市场。' },
  { id: 'vienna_minsu', name: '内城民宿', icon: '🏨', tag: '住', type: '住宿', price: 480, desc: '老城公寓民宿，步行到大教堂。清晨教堂钟声+马蹄声。' },
  /* ---- 维也纳其他菜 ---- */
  { id: 'atg_tafelspitz', name: 'Tafelspitz 煮牛肉', icon: '🥩', tag: '食', type: '美食', price: 70, desc: '慢炖清汤牛腩切片，配苹果辣根与烤土豆。' +
  '弗朗茨·约瑟夫一世的"国民主菜"。' },
  { id: 'atg_kaiserschmarrn', name: 'Kaiserschmarrn 皇帝煎饼', icon: '🥞', tag: '食', type: '美食', price: 25, desc: '焦糖松软煎饼撕成块，撒糖粉配果酱。' +
  '皇帝弗朗茨一世的"加冕甜品"。' },
  { id: 'atg_strudel', name: '苹果卷（Apfelstrudel）', icon: '🍎', tag: '食', type: '美食', price: 25, desc: '薄如蝉翼的面皮包苹果葡萄干肉桂。' +
  '配香草酱与咖啡，"维也纳的祖母厨房"。' },
  { id: 'atg_gulasch', name: '维也纳牛肉炖汤', icon: '🍲', tag: '食', type: '美食', price: 50, desc: '匈牙利传入的辣椒炖牛肉，' +
  '维也纳版浓稠。' +
  '冬天配面包，"中欧灵魂汤"。' },
  { id: 'atg_wine', name: '维也纳白葡萄酒', icon: '🍷', tag: '食', type: '饮品', price: 60, desc: '维也纳森林脚下的绿维特林纳白葡萄酒，' +
  'Heuriger 酒馆里喝春天新酒，' +
  '"维也纳的乡野味"。' },
  /* ---- 咖啡馆与甜品 ---- */
  { id: 'atg_central', name: '中央咖啡馆', icon: '☕', tag: '食', type: '饮品', price: 35, desc: '弗洛伊德、托洛茨基、列宁都来过的咖啡馆。' +
  '皮沙发与报纸架保留百年。' },
  { id: 'atg_sachertorte', name: '萨赫蛋糕原版', icon: '🍰', tag: '食', type: '特产', price: 80, desc: 'Hotel Sacher 的原版蛋糕，' +
  '配无奶咖啡。' +
  '机场免税店有迷你装，"维也纳的甜心"。' },
  { id: 'atg_manner', name: 'Manner 紫罗兰华夫饼', icon: '🟪', tag: '食', type: '特产', price: 20, desc: '维也纳紫红包装的华夫饼五层夹心。' +
  '"Manner Schnitten" 是奥地利人的童年。' },
  /* ---- 文创与服饰 ---- */
  { id: 'atg_klimt', name: '克里姆特《吻》明信片', icon: '💋', tag: '衣', type: '文创', price: 30, desc: '维也纳分离派的"金色之吻"复刻。' +
  '维也纳咖啡馆里最常见的明信片。' },
  { id: 'atg_sisi', name: '茜茜公主周边', icon: '👑', tag: '衣', type: '文创', price: 60, desc: '茜茜的画像、手帕、笔记本、刺绣小钱包。' +
  '"奥地利最被爱的皇后"。' },
  { id: 'atg_swarovski', name: '施华洛世奇水晶', icon: '💎', tag: '衣', type: '服饰', price: 200, desc: '1895 年在瓦腾斯小镇创立，' +
  '总部在维也纳周边。' +
  '水晶小天鹅是"奥地利名片"。' },
  { id: 'atg_augarten', name: '奥格腾瓷盘·奥地利国徽', icon: '🏺', tag: '衣', type: '文创', price: 180, desc: '皇家瓷器厂手工绘制的国徽盘，' +
  '鹰与锤子。' +
  '维也纳的"白瓷外交"。' },
  /* ---- 体验课 ---- */
  { id: 'atg_kugle', name: '维也纳苹果卷工作坊', icon: '🍎', tag: '玩', type: '体验', price: 90, desc: '学擀那张薄到透光的面皮，' +
  '包苹果肉桂葡萄干。' +
  '烤出来跟 Café Central 一样，"维也纳版烘焙课"。' },
  { id: 'atg_opera_tour', name: '维也纳歌剧院导览', icon: '🎭', tag: '玩', type: '体验', price: 50, desc: '后台化妆间、舞台机关、' +
  '贵宾席包厢。' +
  '"全球歌剧院的祖庭"。' },
  { id: 'atg_sisi_burgring', name: '皇家马术学校西班牙骑术', icon: '🐎', tag: '玩', type: '体验', price: 80, desc: '霍夫堡宫旁的白色骑术学校，' +
  '利皮扎马与骑士表演。' +
  '"哈布斯堡活遗产"。' },
  /* ---- 住宿 ---- */
  { id: 'atg_sacher', name: '萨赫酒店', icon: '🏨', tag: '住', type: '住宿', price: 1200, desc: '维也纳最传奇的酒店，' +
  '茜茜公主住过、' +
  '可可·香奈儿住过。"老维也纳的全部奢华"。' },
  { id: 'atg_palais', name: '内城老建筑民宿', icon: '🏛️', tag: '住', type: '住宿', price: 380, desc: '环城大道旁老楼改的公寓，' +
  '挑高 4 米与水晶吊灯。' +
  '住在哈布斯堡留下的空间里。' }
);
