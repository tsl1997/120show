/* 异世界·宇宙战舰大和号 势力系列收藏 */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  window.TRAVEL_SERIES.push({ id: 'sr_ymt_main', cat: 'isekai', name: '大和号乘员·主角团', color: '#d4a017',
    years: '1974-至今', author: '松本零士', theme: '古代进与舰桥核心乘员收藏',
    background: '辐射笼罩地球的绝望年代，沉睡海底的大和号被改装成宇宙战舰。古代进、森雪、真田志郎等年轻人追随病弱的冲田舰长，踏上往返近三十万光年的救赎远征。',
    story: '从沉船的遗骸到全人类最后的方舟——一群少年在钢铁巨舰里学会了告别、牺牲与回家的意义。',
    protagonist: '古代进', slogan: '大和号，向伊斯坎达尔出发！',
    cities: ['isekai_yamato'],
    items: [
      { id: 'ymtc_kodai', name: '古代进', icon: '🧭', desc: '失去家园与兄长的热血青年，从操舵到指挥一路成长的舰长候补，总是第一个喊出前进号令的男人。', type: '战士卡', city: 'isekai_yamato', price: 200 },
      { id: 'ymtc_okita', name: '冲田十三', icon: '⚓', desc: '隐瞒重病的大和号舰长，坚信自己会活着看地球返青，病榻前把战舰与故乡的未来一同托付给古代进。', type: '战士卡', city: 'isekai_yamato', price: 220 },
      { id: 'ymtc_mori', name: '森雪', icon: '❄️', desc: '雷达与通信的全能担当，在宇宙基地长大的孤女，佩着星星吊坠，用温柔抚平全舰在漫长航路上的乡愁。', type: '战士卡', city: 'isekai_yamato', price: 180 },
      { id: 'ymtc_sanada', name: '真田志郎', icon: '🔬', desc: '冷静的科学班长，波动引擎与波动炮的守护者，总在舰长倒下时接过指挥，把一次次危机换算成生还机率。', type: '战士卡', city: 'isekai_yamato', price: 190 },
      { id: 'ymtc_shima', name: '岛大介', icon: '🗺️', desc: '稳重的航海长，古代进最要好的搭档，在星图上写下绕行半个宇宙的航线，也在一次次争吵后成为彼此的后背。', type: '战士卡', city: 'isekai_yamato', price: 170 },
      { id: 'ymtc_nanbu', name: '南部康雄', icon: '🎯', desc: '戴着眼镜的炮术官，负责舰炮与鱼雷的射击诸元，把对加米拉斯的怒气精准换算成每一发炮弹的落点。', type: '战士卡', city: 'isekai_yamato', price: 150 },
      { id: 'ymtc_tokugawa', name: '德川彦左卫门', icon: '⚙️', desc: '秃顶的老机关长，冲田舰长的老战友，坚信只要引擎还在轰鸣，大和号就没有输，是全舰最可靠的轮机灵魂。', type: '战士卡', city: 'isekai_yamato', price: 170 },
      { id: 'ymtc_sado', name: '佐渡酒造', icon: '🩺', desc: '爱酒如命的船医大叔，表面吊儿郎当，却在每一次手术后累到瘫倒，嘴上抱怨着仍把伤员一个个拉回人间。', type: '伙伴卡', city: 'isekai_yamato', price: 150 }
    ]
  });
  window.TRAVEL_SERIES.push({ id: 'sr_ymt_ally', cat: 'isekai', name: '伊斯坎达尔与地球同盟', color: '#16a085',
    years: '1974-至今', author: '松本零士', theme: '蓝色乐园与地球防卫军收藏',
    background: '在人类最绝望的夜晚递来救赎图纸的蓝色女王斯塔莎、漂流到乐园的雪风号舰长古代守，以及奉命断后的地球舰队与仙女座号——她们与大和号隔着星海并肩。',
    story: '伊斯坎达尔与加米拉斯本是双子星，一颗选择分享救赎，一颗走向征服——地球的幸运在于遇见了前者。',
    protagonist: '斯塔莎女王', slogan: '带着我们的祈愿回去吧',
    cities: ['isekai_yamato'],
    items: [
      { id: 'ymtc_starsha', name: '斯塔莎女王', icon: '👑', desc: '伊斯坎达尔的蓝色女王，向濒死地球送出波动引擎图纸与救赎讯息，以双子星之名守护另一个世界的生命。', type: '盟友卡', city: 'isekai_yamato', price: 240 },
      { id: 'ymtc_mamoru', name: '古代守', icon: '🌟', desc: '古代进之兄、雪风号驱逐舰长，在冥王星战线力战断后漂流星海，最终抵达蓝色乐园，寻到属于自己的归宿。', type: '战士卡', city: 'isekai_yamato', price: 190 },
      { id: 'ymtc_iscandar_people', name: '伊斯坎达尔星民', icon: '🌊', desc: '居住在蓝宝石行星上的温柔子民，崇拜生命与光，愿意把最后的救赎装置交给一个从未谋面的星球。', type: '盟友卡', city: 'isekai_yamato', price: 200 },
      { id: 'ymtc_earthhq', name: '地球防卫军总部', icon: '🎖️', desc: '深藏地底都市的最高司令部，在失去欧洲与美洲联络的绝境中拍板启用大和号，目送人类最后的远征升空。', type: '伙伴卡', city: 'isekai_yamato', price: 170 },
      { id: 'ymtc_earthfleet', name: '地球宇宙舰队', icon: '🛰️', desc: '在冥王星会战中几乎全灭的残存舰队，舰桥里只剩雪风号与大和号的名字，是一面尚未倒下的蓝色军旗。', type: '舰船卡', city: 'isekai_yamato', price: 160 },
      { id: 'ymtc_hijikata', name: '土方龙', icon: '🛡️', desc: '新式旗舰仙女座号的铁腕舰长，用天马行空的战术在土星环打碎彗星舰队，最后驾舰撞向都市帝国开出血路。', type: '战士卡', city: 'isekai_yamato', price: 220 },
      { id: 'ymtc_andromeda', name: '仙女座号', icon: '✨', desc: '地球倾力打造的超弩级战舰，主炮与装甲冠绝太阳系，曾独自挡在白色彗星帝国与大和号之间。', type: '舰船卡', city: 'isekai_yamato', price: 280 }
    ]
  });
  window.TRAVEL_SERIES.push({ id: 'sr_ymt_gamilas', cat: 'isekai', name: '加米拉斯帝国', color: '#c0392b',
    years: '1974-至今', author: '松本零士', theme: '德斯拉总帅与红色帝国收藏',
    background: '母星日渐枯竭的加米拉斯帝国，在德斯拉总帅率领下以游星炸弹灼烧地球。红色帝都、绝对防卫线、多梅尔舰队与反射卫星炮，构成横亘在大和号航路上的钢铁长城。',
    story: '为了民族的延续而毁灭另一个文明——德斯拉的执念终在七色星团与红色帝都上空迎来审判。',
    protagonist: '德斯拉总帅', slogan: '加米拉斯的荣光不可阻挡',
    cities: ['isekai_yamato'],
    items: [
      { id: 'ymtc_dessler', name: '德斯拉总帅', icon: '🗡️', desc: '加米拉斯帝国的绝对统治者，为延续濒死民族的荣光不惜将地球化作焦土，最终在自己的王座前迎来终局。', type: '敌人卡', city: 'isekai_yamato', price: 400 },
      { id: 'ymtc_domel', name: '多梅尔将军', icon: '⚔️', desc: '率多梅尔舰队驰骋星海的名将，在七色星团倾尽舰队与大和号堂堂决战，战败亦不失武人的尊严。', type: '敌人卡', city: 'isekai_yamato', price: 260 },
      { id: 'ymtc_dessler_ship', name: '德斯拉总旗舰', icon: '🛸', desc: '加米拉斯星域的主宰级巨舰，总帅德斯拉坐镇其上，舰首的超级加农曾是大和号最畏惧的阴影。', type: '舰船卡', city: 'isekai_yamato', price: 320 },
      { id: 'ymtc_gamilas_fleet', name: '加米拉斯星域舰队', icon: '🌑', desc: '自红色主星倾巢而出的钢铁舰队，散布在绝对防卫线上，以密集火力把银河航道变成大和号的坟场。', type: '敌人卡', city: 'isekai_yamato', price: 220 },
      { id: 'ymtc_planetbomb', name: '游星炸弹部队', icon: '☢️', desc: '投下放射性游星炸弹的侵略前锋，让地球地表从此寸草不生，是整场战争里最先落下的一滴毒雨。', type: '敌人卡', city: 'isekai_yamato', price: 240 },
      { id: 'ymtc_baran_fort', name: '巴兰星宇宙要塞', icon: '🏯', desc: '加米拉斯绝对防卫线的核心要塞，盘踞在坠日的红天之下，曾把无数地球舰船的残骸收进陨石带。', type: '敌人卡', city: 'isekai_yamato', price: 230 },
      { id: 'ymtc_reflect_cannon', name: '反射卫星炮', icon: '☀️', desc: '以巨型镜面折射恒星光芒的轨道兵器，光柱扫过之处连陨石都化为齑粉，是加米拉斯最阴险的守门员。', type: '敌人卡', city: 'isekai_yamato', price: 230 },
      { id: 'ymtc_guard', name: '帝国亲卫队', icon: '🪖', desc: '簇拥在德斯拉总帅身侧的近卫部队，黑色军服列阵帝都，随时准备为帝王的意志流尽最后一滴血。', type: '敌人卡', city: 'isekai_yamato', price: 200 }
    ]
  });
  window.TRAVEL_SERIES.push({ id: 'sr_ymt_comet', cat: 'isekai', name: '白色彗星帝国与黑暗势力', color: '#5b2c6f',
    years: '1974-至今', author: '松本零士', theme: '祖达尔大帝与都市帝国收藏',
    background: '地球重获蓝天之后，来自仙女座星系的白色彗星碾过银河。拖着光尾的移动都市、绿肤的征服者、善妒的萨贝拉与狡黠的巴尔泽提督，把太阳系拖入第二次存亡之战。',
    story: '白色彗星吞没行星而来，而挡住它的，是仙女座号的残躯与人类拼尽全力的黎明。',
    protagonist: '祖达尔大帝', slogan: '把整个银河都变成帝国的领土',
    cities: ['isekai_yamato'],
    items: [
      { id: 'ymtc_zworder', name: '祖达尔大帝', icon: '🌑', desc: '白色彗星帝国加特兰蒂斯的绝对帝王，乘坐都市国家踏平仙女座星系后剑指地球，为征服而生为征服而灭。', type: '敌人卡', city: 'isekai_yamato', price: 400 },
      { id: 'ymtc_gatlantis', name: '都市帝国·加特兰蒂斯', icon: '☄️', desc: '包裹在等离子护盾中的彗星形移动城市，内部叠着帝宫与母港，一路碾碎挡在航线上的一切星球。', type: '敌人卡', city: 'isekai_yamato', price: 330 },
      { id: 'ymtc_sabera', name: '萨贝拉', icon: '🎭', desc: '祖达尔大帝身边野心勃勃的绯色女子，因嫉妒德斯拉得宠而暗中作梗，反手把帝国的弱点拱手送给大和号。', type: '敌人卡', city: 'isekai_yamato', price: 260 },
      { id: 'ymtc_valsey', name: '巴尔泽提督', icon: '🪖', desc: '白色彗星帝国主力舰队的提督，率巨舰压向太阳系，却在土星环被土方龙的奇策引入绝境而全军覆没。', type: '敌人卡', city: 'isekai_yamato', price: 280 },
      { id: 'ymtc_comet_fleet', name: '彗星帝国主力舰队', icon: '🛸', desc: '环绕都市帝国出航的庞大舰群，船体如水晶般折射星光，以压倒性的数量扑向每一颗敢于抵抗的星球。', type: '敌人卡', city: 'isekai_yamato', price: 240 },
      { id: 'ymtc_comet_wings', name: '彗星黑翼突击队', icon: '🦅', desc: '从都市帝国甲板起飞的黑色突击机群，如乌鸦遮蔽日冕，是白色彗星扫荡行星时最先落下的爪牙。', type: '敌人卡', city: 'isekai_yamato', price: 200 }
    ]
  });
  window.TRAVEL_SERIES.push({ id: 'sr_ymt_crew', cat: 'isekai', name: '舰桥班与飞行员·船员伙伴', color: '#2e86c1',
    years: '1974-至今', author: '松本零士', theme: '大和号各岗位乘员与舰载机收藏',
    background: '除了舰桥上的英雄，大和号还载着雷达士、通信长、军医的猫和甲板上的少年。他们各守一岗，把一艘孤舰变成会呼吸的家，也让这场远征有了人间烟火的温度。',
    story: '零式机的引擎声、通信士的呼叫与食堂的咖喱香，才是大和号真正永不沉没的理由。',
    protagonist: '大和号全体乘员', slogan: '各就各位，全舰准备出击！',
    cities: ['isekai_yamato'],
    items: [
      { id: 'ymtc_kato', name: '加藤三郎', icon: '🛩️', desc: '大和号的王牌飞行员，驾驶黑虎式战斗机在敌阵中反复穿行，每一次俯冲都把生存的机会留给身后的战舰。', type: '战士卡', city: 'isekai_yamato', price: 170 },
      { id: 'ymtc_aihara', name: '相原义一', icon: '📻', desc: '头发蓬松的年轻通信长，守着电波望乡，也曾失控想游回地球，被同伴捞回后继续一遍遍呼叫故乡的名字。', type: '战士卡', city: 'isekai_yamato', price: 140 },
      { id: 'ymtc_ota', name: '太田健二郎', icon: '📡', desc: '胖乎乎却眼神锐利的雷达士，总在敌方导弹逼近的第一秒喊出警报，是全舰最早听见死亡脚步声的人。', type: '战士卡', city: 'isekai_yamato', price: 130 },
      { id: 'ymtc_analyzer', name: '分析机器人', icon: '🤖', desc: '从医院申请上舰的圆胖机器人，力气大到能掀翻坦克，却笨拙地单恋着森雪，是紧张战事里的开心果。', type: '伙伴卡', city: 'isekai_yamato', price: 150 },
      { id: 'ymtc_yabu', name: '薮助治', icon: '🔧', desc: '德川机关长的胖副手，因绝望一度想带着同伙在异星另建新家园，迷途知返后又默默回到轮机室流汗。', type: '伙伴卡', city: 'isekai_yamato', price: 120 },
      { id: 'ymtc_mikun', name: '猫咪咪', icon: '🐱', desc: '佐渡军医的爱猫，第一季留守地球、续篇才登舰的猫祖宗，蹲在舰桥暖气管上的身影是全舰的治愈图腾。', type: '伙伴卡', city: 'isekai_yamato', price: 90 },
      { id: 'ymtc_zeroteam', name: '零式战斗机队', icon: '✈️', desc: '大和号飞行甲板上整装待发的舰载机群，柯斯莫零式与黑虎式依次弹射升空，组成环绕战舰的钢铁之翼。', type: '机体卡', city: 'isekai_yamato', price: 180 },
      { id: 'ymtc_shimajiro', name: '岛次郎', icon: '👦', desc: '岛大介留在地底都市的小弟弟，每天仰望天空等哥哥回来，是无数守望大和号的人里最执拗的一个。', type: '伙伴卡', city: 'isekai_yamato', price: 100 }
    ]
  });
})();
