/* ============ 美国·旧金山 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'sanfrancisco',
    name: '旧金山',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·西部',
    hero: '🌉',
    desc: '金门大桥与丘陵之城：叮当车爬上陡坡，渔人码头晒海狮，硅谷就在南边，雾中的红色大桥是西海岸的门面。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6900 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'sanfrancisco_goldengate', name: '金门大桥', icon: '🌉', price: 0, desc: '1937年通车的"国际橙"大桥，雾中若隐若现。骑行或步行过桥，"西海岸的地标"。' },
      { id: 'sanfrancisco_cablecar', name: '叮当车（Cable Car）', icon: '🚋', price: 60, desc: '1873年运营的手动缆车，爬坡时"铛铛"响。挂在车尾站在踏板是经典姿势，Powell 线最陡。' },
      { id: 'sanfrancisco_wharf', name: '渔人码头·39号码头', icon: '🦭', price: 0, desc: '海狮成群躺在浮码头上晒太阳打闹。酸面包蛤蜊浓汤，"海港的下午"。' },
      { id: 'sanfrancisco_alcatraz', name: '恶魔岛监狱', icon: '🏝️', price: 300, desc: '"不可能越狱"的联邦监狱，渡轮登岛。语音导览是狱警录音，"美国最著名的监狱"。' },
      { id: 'sanfrancisco_lombard', name: '九曲花街', icon: '🌹', price: 0, desc: '世界上最弯曲的街道，八个急转弯种满绣球。开车下来要排队，"花街 S 形"。' },
      { id: 'sanfrancisco_chinatown', name: '旧金山唐人街', icon: '🏮', price: 0, desc: '北美最古老的唐人街（1848年）。牌楼、中药铺与点心铺，" Dragon Gate 进门就穿越"。' },
      { id: 'sanfrancisco_painted', name: '彩绘女士·九曲坡', icon: '🏠', price: 0, desc: 'Alamo Square 的维多利亚彩绘屋排排坐。背后是市中心天际线，"明信片机位"。' },
    ],
    souvenirs: [
      { id: 'sanfrancisco_clamchowder', name: '酸面包蛤蜊汤', icon: '🍞', tag: '食', type: '美食', price: 70, desc: '圆酸面包挖空装蛤蜊奶油汤。"Boudin"1849年老店，先吃汤后吃碗。' },
      { id: 'sanfrancisco_crab', name: '邓杰内斯蟹', icon: '🦀', tag: '食', type: '美食', price: 150, desc: '码头水煮蟹直接开吃，配蒜蓉面。"旧金山的蟹季"冬季最肥。' },
      { id: 'sanfrancisco_mission', name: 'Mission Burrito 墨西哥卷', icon: '🌯', tag: '食', type: '美食', price: 60, desc: '旧金山发明的"大版墨西哥卷"：饭豆肉酱酪梨全塞。"La Taqueria"是米其林必比登。' },
      { id: 'sanfrancisco_coffee', name: '精品咖啡 Origin', icon: '☕', tag: '食', type: '饮品', price: 45, desc: 'Blue Bottle 蓝瓶咖啡发源于湾区。"第三波咖啡浪潮"的源头之一。' },
      { id: 'sanfrancisco_cable_wen', name: '叮当车周边', icon: '🚋', tag: '衣', type: '文创', price: 40, desc: '叮当车模型、铛铛车铃铛。"Cable Car"是旧金山城市符号。' },
      { id: 'sanfrancisco_bridge_wen', name: '金门大桥文创', icon: '🌉', tag: '衣', type: '文创', price: 45, desc: '"国际橙"大桥模型、雾中大桥摄影集。"金门大桥纪念品"，送人都有面。' },
      { id: 'sanfrancisco_sourdough', name: '酸面包 starter', icon: '🍞', tag: '食', type: '特产', price: 50, desc: 'Boudin 酸面团 starter 1849年传承至今。"买一块面包，带一段历史"。' },
      { id: 'sanfrancisco_cable_ride', name: '叮当车全程体验', icon: '🚋', tag: '行', type: '体验', price: 60, desc: 'Powell-Hyde 线全程挂车尾。爬坡看海景，"最老的过山车"。' },
      { id: 'sanfrancisco_kayak', name: '海湾皮划艇看大桥', icon: '🛶', tag: '玩', type: '体验', price: 150, desc: '从海上划到金门桥下。风大浪冷，"视角最震撼"。' },
      { id: 'sanfrancisco_muir', name: '缪尔红木森林一日', icon: '🌲', tag: '玩', type: '体验', price: 150, desc: '世界最高红杉林一日游。树高80米，"森林的巨人"。' },
      { id: 'sanfrancisco_silicon', name: '硅谷科技朝圣', icon: '💻', tag: '玩', type: '体验', price: 200, desc: '苹果总部游客中心、谷歌园区、Meta 标志。"科技粉的麦加"。' },
      { id: 'sanfrancisco_minsu', name: '彩绘屋民宿', icon: '🏨', tag: '住', type: '住宿', price: 900, desc: '维多利亚彩绘屋民宿，海湾窗景。清晨雾气爬上山坡，"旧金山的冷与美"。' },
    ],
    stories: [
      { id: 'sanfrancisco_story_cable2', name: '叮当车曾差点消失', icon: '🚋', desc: '1947年市政府想拆除叮当车，市民"拯救叮当车"运动胜利。如今是"移动的国家历史地标"。' },
      { id: 'sanfrancisco_story_alcatraz2', name: '恶魔岛的"越狱传说"', icon: '🏝️', desc: '1962年三人用勺子挖墙越狱，至今下落不明。官方认定溺亡，民间相信他们活着。' },
      { id: 'sanfrancisco_story_sealion', name: '海狮的"占领码头"', icon: '🦭', desc: '1989年地震后海狮占领39号码头浮台。商人索性设了观景台，"最成功的意外"。' },
      { id: 'sanfrancisco_story_fog', name: '旧金山的雾有名字', icon: '🌫️', desc: '湾区人给雾起名 Karl the Fog，还有自己的 Twitter。"雾是旧金山的居民"。' },
      { id: 'sanfrancisco_story_gold', name: '淘金热与"酸面包"', icon: '🍞', desc: '1849年淘金者带的 sourdough starter 是"传家宝"。Boudin 的 starter 从淘金热活到今天。' },
      { id: 'sanfrancisco_story_lombard2', name: '九曲花街是"为了安全"', icon: '🌹', desc: '27%的坡度太陡，1922年改成八个弯道。"最弯街道"其实是为了减速。' },
    ],
  });
})();
