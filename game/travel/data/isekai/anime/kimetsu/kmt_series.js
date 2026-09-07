/* 异世界·鬼灭之刃 势力系列收藏 */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  window.TRAVEL_SERIES.push({ id: 'sr_kmt_team', cat: 'isekai', name: '灶门小队·主角团', color: '#d4a017',
    years: '2016-至今', author: '吾峠呼世晴', theme: '炭治郎与伙伴们的斩鬼之志',
    background: '卖炭少年竈门炭治郎因家人遇害、妹妹异变为鬼而踏上斩鬼之路，与善逸、伊之助、香奈乎等伙伴从藤袭山一路并肩杀到无限城。',
    story: '少年们以羸弱之躯对抗千年恶鬼，把守护二字烧进自己的呼吸，誓要寻回祢豆子的人性。',
    protagonist: '竈门炭治郎', slogan: '我会变强，让妹妹变回人类！',
    cities: ['isekai_kimetsu'],
    items: [
      { id: 'kmtc_tanjiro', name: '竈门炭治郎', icon: '🗡️', type: '主角卡', city: 'isekai_kimetsu', price: 340, desc: '额有灼印的卖炭少年，心性温柔而意志如铁，以敏锐嗅觉辨鬼，挥舞日轮刀一路斩向鬼舞辻无惨。' },
      { id: 'kmtc_nezuko', name: '竈门祢豆子', icon: '🌸', type: '主角卡', city: 'isekai_kimetsu', price: 320, desc: '化为鬼仍守着兄长的少女，咬住竹筒立誓不食人，沉睡中练就血鬼术与不惧阳光之躯。' },
      { id: 'kmtc_zenitsu', name: '我妻善逸', icon: '⚡', type: '主角卡', city: 'isekai_kimetsu', price: 260, desc: '胆小爱哭的黄发少年，昏睡时却能挥出神速的雷之呼吸，是深藏不露的拔刀天才。' },
      { id: 'kmtc_inosuke', name: '嘴平伊之助', icon: '🐗', type: '主角卡', city: 'isekai_kimetsu', price: 260, desc: '顶着山猪头套的野性少年，自幼与山猪为伍，双刀流加野兽直觉，撕咬一切拦路的鬼。' },
      { id: 'kmtc_kanao', name: '栗花落香奈乎', icon: '🪙', type: '主角卡', city: 'isekai_kimetsu', price: 240, desc: '以掷铜钱决定行动的沉默少女，被香奈惠收养后学会为自己而战，花之呼吸的温柔传人。' },
      { id: 'kmtc_genya', name: '不死川玄弥', icon: '🩸', type: '主角卡', city: 'isekai_kimetsu', price: 200, desc: '无法运用呼吸法却执意斩鬼的少年，靠吞食鬼肉换取短暂鬼化之力，赌命守护所爱之人。' },
      { id: 'kmtc_sabito', name: '锖兔', icon: '🦊', type: '主角卡', city: 'isekai_kimetsu', price: 160, desc: '戴着狐狸面具的鳞泷弟子，于藤袭山死于手鬼，其身影却在修行中一次次唤醒炭治郎。' },
      { id: 'kmtc_makomo', name: '真菰', icon: '🎏', type: '主角卡', city: 'isekai_kimetsu', price: 150, desc: '同样戴狐面、早逝的鳞泷弟子，温柔地指点迷途的炭治郎，是狭雾山上的一缕清影。' }
    ]
  });
  window.TRAVEL_SERIES.push({ id: 'sr_kmt_hashira', cat: 'isekai', name: '鬼杀队九柱', color: '#e67e22',
    years: '2016-至今', author: '吾峠呼世晴', theme: '守护人间的九道呼吸',
    background: '背负各式呼吸法名号的九位顶级剑士，是人类对抗十二鬼月的最强防线，各自怀抱着伤痛与执念。',
    story: '从柱合会议上的倾轧与和解，到无限城中的悲壮陨落，他们以性命为新人铺出通往黎明的路。',
    protagonist: '九柱', slogan: '此身化为人间的盾与剑',
    cities: ['isekai_kimetsu'],
    items: [
      { id: 'kmtc_giyu', name: '富冈义勇', icon: '💧', type: '柱卡', city: 'isekai_kimetsu', price: 320, desc: '当代水柱，沉默寡言却总在关键时刻出手，那田蜘蛛山前为灶门兄妹挡下致命一刀。' },
      { id: 'kmtc_shinobu', name: '蝴蝶忍', icon: '🦋', type: '柱卡', city: 'isekai_kimetsu', price: 320, desc: '虫柱，以毒代斩的纤细剑士，姐姐亡故后戴起温柔笑脸，誓要亲手清算恶鬼之仇。' },
      { id: 'kmtc_rengoku', name: '炼狱杏寿郎', icon: '🔥', type: '柱卡', city: 'isekai_kimetsu', price: 330, desc: '炎柱，烈火般爽朗豪迈的兄长，无限列车上独撑至黎明，燃烧吧心之火焰的绝响。' },
      { id: 'kmtc_tokito', name: '时透无一郎', icon: '🌫️', type: '柱卡', city: 'isekai_kimetsu', price: 330, desc: '霞柱，七岁握剑的天才少年，在失忆与重逢间找回自我，无限城中燃尽性命斩出绝响。' },
      { id: 'kmtc_kanroji', name: '甘露寺蜜璃', icon: '💗', type: '柱卡', city: 'isekai_kimetsu', price: 330, desc: '恋柱，怪力惊人的粉发少女，为寻得如意郎君加入鬼杀队，以柔韧的恋之呼吸舞上战场。' },
      { id: 'kmtc_iguro', name: '伊黑小芭内', icon: '🐍', type: '柱卡', city: 'isekai_kimetsu', price: 320, desc: '蛇柱，异色瞳与嘴罩的冷面剑士，出身凄苦却默默守护着心底那一点微光与牵挂。' },
      { id: 'kmtc_shinazugawa', name: '不死川实弥', icon: '🌀', type: '柱卡', city: 'isekai_kimetsu', price: 320, desc: '风柱，伤痕累累的暴烈剑士，以血与痛追猎恶鬼，对弟弟玄弥藏着说不出口的牵挂。' },
      { id: 'kmtc_gyomei', name: '悲鸣屿行冥', icon: '🪨', type: '柱卡', city: 'isekai_kimetsu', price: 340, desc: '岩柱，盲眼巨汉却泪流不止的僧侣剑士，手持流星锤与阔斧，是九柱中当之无愧的战力之首。' },
      { id: 'kmtc_uzui', name: '宇髄天元', icon: '🎆', type: '柱卡', city: 'isekai_kimetsu', price: 330, desc: '音之呼吸的音柱，忍者出身的华丽男人，吉原游郭一战失去一臂一目后仍飒爽而退。' },
      { id: 'kmtc_kanae', name: '蝴蝶香奈惠', icon: '🕊️', type: '柱卡', city: 'isekai_kimetsu', price: 330, desc: '前花柱，温柔如春风的姐姐剑士，为守护他人而凋零，将未完的祈愿留给了妹妹忍。' },
      { id: 'kmtc_rengoku_father', name: '炼狱槇寿郎', icon: '🍶', type: '柱卡', city: 'isekai_kimetsu', price: 300, desc: '前炎柱、杏寿郎之父，沉溺酒中辜负家传剑名，却始终把儿子的炽热遗志悄悄收进心底。' }
    ]
  });
  window.TRAVEL_SERIES.push({ id: 'sr_kmt_upper', cat: 'isekai', name: '上弦之月·十二鬼月', color: '#8e44ad',
    years: '2016-至今', author: '吾峠呼世晴', theme: '无惨麾下最强的上位恶鬼',
    background: '由黑死牟、童磨、猗窝座等绝世之鬼把持的六席上位，数百年来以血肉为阶梯登上顶点的恐怖之名。',
    story: '堕姬与妓夫太郎同坠、玉壶与半天狗接连败亡，上弦黄昏的序曲昭示鬼之时代的终焉。',
    protagonist: '黑死牟', slogan: '弦月高悬，恶鬼不灭',
    cities: ['isekai_kimetsu'],
    items: [
      { id: 'kmtc_kokushibo', name: '黑死牟', icon: '🌙', type: '上弦卡', city: 'isekai_kimetsu', price: 350, desc: '上弦之壹，继国缘壹之兄，为追逐剑道极致甘愿堕为恶鬼，月之呼吸的始祖与千年孤独。' },
      { id: 'kmtc_douma', name: '童磨', icon: '❄️', type: '上弦卡', city: 'isekai_kimetsu', price: 350, desc: '上弦之贰，万世极乐教主的俊美邪教徒，无法共情人类却以爱为名行恶的无垢之鬼。' },
      { id: 'kmtc_akaza', name: '猗窝座', icon: '🔷', type: '上弦卡', city: 'isekai_kimetsu', price: 340, desc: '上弦之叁，为求武道极致而战的战士之鬼，敬奉强者鄙夷弱者，唯独对恋雪保留一丝执念。' },
      { id: 'kmtc_hantengu', name: '半天狗', icon: '👺', type: '上弦卡', city: 'isekai_kimetsu', price: 330, desc: '上弦之肆，怯懦老者模样却能分裂出憎、乐、怒诸相，锻刀村中让霞柱与恋柱苦战不休。' },
      { id: 'kmtc_gyokko', name: '玉壶', icon: '🏺', type: '上弦卡', city: 'isekai_kimetsu', price: 330, desc: '上弦之伍，藏身壶中的异形之鬼，以水与陶艺自诩艺术家，扭曲审美下藏着杀人不眨眼的凶残。' },
      { id: 'kmtc_daki', name: '堕姬', icon: '🎀', type: '上弦卡', city: 'isekai_kimetsu', price: 340, desc: '上弦之陆，吉原游郭的绝世花魁，骄矜任性却与兄长妓夫太郎共享性命、同心共战。' },
      { id: 'kmtc_gyutaro', name: '妓夫太郎', icon: '⛓️', type: '上弦卡', city: 'isekai_kimetsu', price: 340, desc: '堕姬之兄，以锁镰起舞的丑陋恶鬼，嘴上刻薄却将唯一的温柔尽数留给相依为命的妹妹。' },
      { id: 'kmtc_kaigaku', name: '獪岳', icon: '🟡', type: '上弦卡', city: 'isekai_kimetsu', price: 300, desc: '善逸的师兄，为求力量叛出师门堕为鬼，继承上弦之陆之位，终被师门雷光劈落。' }
    ]
  });
  window.TRAVEL_SERIES.push({ id: 'sr_kmt_demon_side', cat: 'isekai', name: '恶鬼与无惨方', color: '#5b2c6f',
    years: '2016-至今', author: '吾峠呼世晴', theme: '鬼之始祖的谱系与异端',
    background: '鬼之始祖鬼舞辻无惨以血液奴役千万恶鬼，同族中亦有珠世、愈史郎这般叛离暴君、追寻救赎的异端。',
    story: '无惨以细胞与恐惧编织不朽的牢笼，珠世则用数百年孤独钻研解药，正邪之争在鬼族内部同样惨烈。',
    protagonist: '鬼舞辻无惨', slogan: '不朽的诅咒与救赎之药',
    cities: ['isekai_kimetsu'],
    items: [
      { id: 'kmtc_muzan', name: '鬼舞辻无惨', icon: '🧛', type: '恶鬼卡', city: 'isekai_kimetsu', price: 400, desc: '鬼之始祖，千年不死的暴君，以俊美容貌行走人间，畏惧阳光而穷尽手段追逐永生与支配。' },
      { id: 'kmtc_tamayo', name: '珠世', icon: '🌹', type: '异端卡', city: 'isekai_kimetsu', price: 280, desc: '化为鬼却从未放弃救人的医者，历经数百年钻研逆转之药，赌上一切助炭治郎讨伐无惨。' },
      { id: 'kmtc_yushiro', name: '愈史郎', icon: '🎨', type: '异端卡', city: 'isekai_kimetsu', price: 220, desc: '珠世亲手挽救的鬼，画技超群且忠心耿耿，以血鬼术藏匿行踪，为决战织就隐蔽的助力。' },
      { id: 'kmtc_nakime', name: '鸣女', icon: '🎼', type: '恶鬼卡', city: 'isekai_kimetsu', price: 220, desc: '以血鬼术编织无限城机关的琵琶鬼，弦声一响和室翻涌，是无惨最忠实沉默的守门者。' },
      { id: 'kmtc_rui', name: '累', icon: '🕸️', type: '恶鬼卡', city: 'isekai_kimetsu', price: 200, desc: '原下弦之伍，渴望亲情而扭曲结网的蜘蛛之鬼，那田蜘蛛山上与炭治郎了断毕生恩怨。' },
      { id: 'kmtc_susamaru', name: '朱纱丸', icon: '🧶', type: '恶鬼卡', city: 'isekai_kimetsu', price: 180, desc: '舞动手毬的血鬼术之鬼，天真残暴，与矢琶羽搭档在浅草夜巷中追杀灶门兄妹。' },
      { id: 'kmtc_yahaba', name: '矢琶羽', icon: '🏹', type: '恶鬼卡', city: 'isekai_kimetsu', price: 180, desc: '以红洁之箭布下无形箭网的恶鬼，目之所及皆为射程，是浅草追袭战中的冷血猎手。' },
      { id: 'kmtc_hand_demon', name: '手鬼', icon: '👹', type: '恶鬼卡', city: 'isekai_kimetsu', price: 170, desc: '畸形长臂、被囚藤袭山的古鬼，鳞泷七名弟子的仇敌，最终在最终选拔中被炭治郎斩落。' }
    ]
  });
  window.TRAVEL_SERIES.push({ id: 'sr_kmt_support', cat: 'isekai', name: '培育师与产屋敷', color: '#16a085',
    years: '2016-至今', author: '吾峠呼世晴', theme: '托举剑士的师长与灯',
    background: '训练孤儿的育手、执掌鬼杀队命运的主公一族、打制日轮刀的刀匠与隐部队，是黎明背后无名的光。',
    story: '从鳞泷的瀑布到产屋敷的棋盘，前辈们以牺牲与筹谋，为少年们照亮通往黎明的漫漫长路。',
    protagonist: '产屋敷耀哉与鳞泷左近次', slogan: '愿孩子们迎来无需斩鬼的明天',
    cities: ['isekai_kimetsu'],
    items: [
      { id: 'kmtc_urokodaki', name: '鳞泷左近次', icon: '🎭', type: '育手卡', city: 'isekai_kimetsu', price: 260, desc: '戴天狗面具的前水柱育手，隐居狭雾山教导孤儿斩鬼，将炭治郎与祢豆子视如己出。' },
      { id: 'kmtc_jigoro', name: '桑岛慈悟郎', icon: '👴', type: '育手卡', city: 'isekai_kimetsu', price: 240, desc: '前鸣柱、善逸与獪岳的师父，收留孤苦少年倾囊相授雷之呼吸，慈爱与严苛并存的老人。' },
      { id: 'kmtc_kagaya', name: '产屋敷耀哉', icon: '🕯️', type: '主公卡', city: 'isekai_kimetsu', price: 280, desc: '鬼杀队当主，病弱而睿智的掌灯人，以千年一族之血运与谋略，布下讨伐无惨的终局棋局。' },
      { id: 'kmtc_tenin', name: '产屋敷天音', icon: '🪷', type: '主公卡', city: 'isekai_kimetsu', price: 200, desc: '耀哉之妻，白发的温柔女性，与丈夫一同守候鬼杀队的未来，直至献身于最后的棋局。' },
      { id: 'kmtc_haganezuka', name: '钢铁冢萤', icon: '🔨', type: '刀匠卡', city: 'isekai_kimetsu', price: 220, desc: '脾气火爆的铸刀大师，以心血打磨日轮刀，最恨旁人糟蹋他的作品，嘴硬心软的匠人。' },
      { id: 'kmtc_kakushi', name: '隐部队', icon: '🎒', type: '后勤卡', city: 'isekai_kimetsu', price: 160, desc: '穿梭战场的后勤忍者，负责善后、传讯与伤员救治，是鬼杀队最容易被忽略的生命线。' },
      { id: 'kmtc_murata', name: '村田', icon: '🧍', type: '队士卡', city: 'isekai_kimetsu', price: 140, desc: '资质平平却屡屡幸存的普通队士，那田蜘蛛山与无限城中都留下他努力活着的身影。' },
      { id: 'kmtc_tanjuro', name: '竈门炭十郎', icon: '🌄', type: '配角卡', city: 'isekai_kimetsu', price: 180, desc: '炭治郎与祢豆子之父，卧病在床却通晓火之神神乐，临终前将日之呼吸的舞姿传给长子。' }
    ]
  });
})();
