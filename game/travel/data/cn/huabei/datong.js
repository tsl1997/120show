/* ============ 山西·大同 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'datong',
    name: '大同',
    country: '中国',
    cc: 'CN',
    province: '山西',
    flag: '🇨🇳',
    region: '华北',
    hero: '🗿',
    desc: '北魏京华、辽金陪都：云冈石窟的大佛微笑千年，悬空寺挂在绝壁上，刀削面配黄花菜，一座厚重又好吃的煤都古城。',
    travel: [{ name: '高铁', icon: '🚄', cost: 650 }, { name: '飞机', icon: '✈️', cost: 850 }],
    visa: null,
    spots: [
      { id: 'datong_yungang', name: '云冈石窟', icon: '🗿', price: 120, desc: '世界文化遗产，五万余尊造像绵延一公里。第20窟露天大佛微笑千年，昙曜五窟的皇家气派直击人心。' },
      { id: 'datong_xuankong', name: '悬空寺', icon: '⛩️', price: 130, desc: '挂在恒山金龙峡绝壁上1500年，"悬、奇、巧"三绝。栈道贴崖而建，脚下就是深谷，腿软但震撼。' },
      { id: 'datong_hengshan', name: '北岳恒山', icon: '⛰️', price: 45, desc: '五岳之一，道教名山。登天峰岭俯瞰桑干河谷，山风里全是"人天北柱"的气魄。' },
      { id: 'datong_huayan', name: '华严寺', icon: '🛕', price: 50, desc: '辽金建筑瑰宝，大雄宝殿是现存最大的古佛殿之一。薄伽教藏殿的"东方维纳斯"合掌露齿菩萨名满天下。' },
      { id: 'datong_jiulongbi', name: '九龙壁', icon: '🐲', price: 0, desc: '中国现存最大最早的九龙壁，比故宫那座还大三倍。琉璃九龙翻腾，晨光下颜色流转。' },
      { id: 'datong_gucheng', name: '大同古城墙', icon: '🧱', price: 45, desc: '修复后的明代城墙气势恢宏，夜景灯光绝美。从永泰门登上城墙骑行一圈，四牌楼灯火尽收。' },
      { id: 'datong_shanhua', name: '善化寺·法华寺', icon: '⛩️', price: 0, desc: '善化寺是保存最完整的辽金寺院，大殿斗拱如云。免费开放却件件是国宝，古建爱好者的天堂。' },
    ],
    souvenirs: [
      { id: 'datong_daoxiao', name: '刀削面', icon: '🍜', tag: '食', type: '美食', price: 15, desc: '师傅一手托面一手飞刀，面叶如柳叶飞入滚水。大同刀削面浇头丰富，"一叶落锅一叶飘"。' },
      { id: 'datong_zayange', name: '羊杂粉汤', icon: '🍲', tag: '食', type: '美食', price: 20, desc: '羊杂熬浓汤配土豆粉，撒葱花辣椒油。大同人的冬日早晨，就靠这一碗续命。' },
      { id: 'datong_huanghua', name: '黄花菜', icon: '🌼', tag: '食', type: '特产', price: 40, desc: '大同黄花"观为花、食为菜、用为药"。云州区黄花干金黄细长，炖肉凉拌两相宜。' },
      { id: 'datong_shuanrou', name: '莜面蘸料宴', icon: '🥟', tag: '食', type: '美食', price: 30, desc: '莜面栲栳栳、鱼鱼配羊肉臊子。塞北粗粮的灵魂做法，"莜面吃个半饱饱，喝碗开水正好好"。' },
      { id: 'datong_hunjia', name: '浑源凉粉', icon: '🍧', tag: '食', type: '美食', price: 10, desc: '恒山脚下的土豆凉粉颤巍巍，配莲花豆豆腐干。一碗五块钱，酸辣爽滑，爬完悬空寺来一碗赛神仙。' },
      { id: 'datong_fenjiu', name: '山西汾酒·竹叶青', icon: '🍶', tag: '食', type: '饮品', price: 80, desc: '清香型白酒鼻祖，"借问酒家何处有"。竹叶青酒色翠绿，配刀削面是三晋标配。' },
      { id: 'datong_shiku_wenxue', name: '云冈文创', icon: '🗿', tag: '衣', type: '文创', price: 55, desc: '大佛微笑做成冰箱贴、丝巾与香薰。云冈研究院官方文创，把北魏的慈悲带回书桌。' },
      { id: 'datong_tong', name: '大同铜器', icon: '🫖', tag: '衣', type: '文创', price: 150, desc: '大同铜火锅锻打百年，"铜都"的手艺。一只铜锅冬天涮肉，热气里全是塞北豪情。' },
      { id: 'datong_mei', name: '煤雕·煤玉', icon: '🖤', tag: '衣', type: '文创', price: 80, desc: '用煤精雕成的墨黑小件，煤都特色。乌黑发亮的手串与摆件，"黑色的钻石"。' },
      { id: 'datong_chengqiang_qixing', name: '古城墙骑行·夜游', icon: '🚲', tag: '玩', type: '体验', price: 30, desc: '租自行车环明城墙一圈7.2公里，夜晚灯光最惊艳。角楼灯光亮起时，整座古城在发光。' },
      { id: 'datong_hot_spring', name: '恒山温泉', icon: '♨️', tag: '玩', type: '体验', price: 120, desc: '浑源县温泉泡汤，爬完恒山正好解乏。室内汤池配塞北夜色，惬意值拉满。' },
      { id: 'datong_gucheng_ye', name: '古城灯会夜游', icon: '🏮', tag: '玩', type: '体验', price: 60, desc: '古都灯会期间，城墙上下万盏花灯。大同夜经济的名片，穿棉袄看灯也值得。' },
      { id: 'datong_minsu', name: '四合院民宿', icon: '🏨', tag: '住', type: '住宿', price: 250, desc: '古城里的晋北四合院民宿，火炕房有特色。夜里安静，清晨豆腐脑香气飘进院来。' },
    ],
    stories: [
      { id: 'datong_story_yungang', name: '昙曜五窟的"皇帝即佛"', icon: '🗿', desc: '北魏僧人昙曜主持开凿五窟，大佛面容按五位皇帝雕成。宗教与皇权在此合体，开创"云冈模式"。' },
      { id: 'datong_story_xuankong', name: '悬空寺的"力学魔术"', icon: '⛩️', desc: '悬空寺靠27根横梁插入岩体承重，躲开洪水与日照。1500年风雨不倒，被称为"空中楼阁"。' },
      { id: 'datong_story_meidu', name: '煤都的转身', icon: '⛏️', desc: '大同曾供应全国四分之一的煤，如今转型文旅。古城墙重建、石窟焕新，"煤都"变成了"古都"。' },
      { id: 'datong_story_lulong', name: '凤凰城的传说', icon: '🕊️', desc: '大同古城布局状似凤凰单展翅，故称"凤凰城"。明代大将军徐达督建，城防坚固冠绝九边。' },
      { id: 'datong_story_daoxiao', name: '刀削面的"御赐"传说', icon: '🍜', desc: '传说明朝御厨用铁皮削面救急，从此流传民间。大同人把削面做成了手艺表演，飞刀绝技上过央视。' },
      { id: 'datong_story_dongbei', name: '"大同蓝"的逆袭', icon: '☀️', desc: '曾经的空气污染重镇，如今蓝天常驻。本地人骄傲地说："现在的大同，蓝得不输大理。"' },
    ],
  });
})();
