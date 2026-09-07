/* ============ 日本·镰仓 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kamakura',
    name: '镰仓',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关东',
    hero: '🌊',
    desc: '灌篮高手的圣地：镰仓高校前平交道口的海景，镰仓大佛的慈悲，江之电车摇过紫阳花，《灌篮高手》青春的海岸线。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2300 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'kamakura_koukou', name: '镰仓高校前平交道', icon: '🚉', price: 0, desc: '《灌篮高手》OP神场景：电车道口+碧海+少年。江之电经过瞬间，"樱木花道的夏天"具象化。' },
      { id: 'kamakura_daibutsu', name: '镰仓大佛', icon: '🛕', price: 20, desc: '13世纪青铜阿弥陀佛坐像高11.4米，内部可进入。"室内的佛"，抬头看佛的头发纹理。' },
      { id: 'kamakura_tsurugaoka', name: '鹤冈八幡宫', icon: '⛩️', price: 0, desc: '源赖朝建立的武家守护神社，源氏池与舞殿。"镰仓幕府"的心脏，表参道小吃一路。' },
      { id: 'kamakura_hase', name: '长谷寺·紫阳花', icon: '🌸', price: 40, desc: '"紫阳花寺"，六月2500株紫阳花开满山坡。眺望台看相模湾，"镰仓的花寺"。' },
      { id: 'kamakura_enoden', name: '江之电沿线巡礼', icon: '🚃', price: 0, desc: '江之电"极乐寺站""七里滨"都是动漫取景地。车窗里全是海景，"日本最浪漫的铁路"。' },
      { id: 'kamakura_komachi', name: '小町通商店街', icon: '🏮', price: 0, desc: '镰仓名物小吃街：吻仔鱼饭、鸽曲奇、大三巴蛋挞。人形烧"鸠サブレー"是百年伴手礼。' },
      { id: 'kamakura_beach', name: '由比滨·材木座海滩', icon: '🏄', price: 0, desc: '夏季冲浪少年聚集，《灌篮高手》的"海边"就在这。夕阳下沙滩排球，青春气息扑面。' },
    ],
    souvenirs: [
      { id: 'kamakura_shirasu', name: '生吻仔鱼饭', icon: '🍚', tag: '食', type: '美食', price: 40, desc: '镰仓湾现捞银色小鱼盖饭，"在嘴里跳舞的鲜"。配黄油与酱油，早市限定。' },
      { id: 'kamakura_hato', name: '鸠サブレー（鸽曲奇）', icon: '🕊️', tag: '食', type: '特产', price: 30, desc: '1894年创世的鸽子形黄油酥饼。百年老铺丰岛屋，"镰仓的手信代名词"。' },
      { id: 'kamakura_cham', name: '镰仓抹茶·茶房', icon: '🍵', tag: '食', type: '美食', price: 40, desc: '古都茶房的抹茶白玉与"镰仓雪"芭菲。庭院里喝茶，紫阳花季最热。' },
      { id: 'kamakura_youkan', name: '镰仓葬送茶屋"海景蛋糕"', icon: '🍰', tag: '食', type: '美食', price: 35, desc: '海景咖啡店的"紫阳花甜点"。看海吃蛋糕，"镰仓的下午"。' },
      { id: 'kamakura_slamdunk', name: '灌篮高手圣地文创', icon: '🏀', tag: '衣', type: '文创', price: 50, desc: '"镰仓高校前"明信片、湘北队徽章。灌篮迷的 pilgrimage 纪念品，"青春回来了"。' },
      { id: 'kamakura_lion', name: '狮子舞·镰仓彫', icon: '🦁', tag: '衣', type: '文创', price: 120, desc: '镰仓彫漆雕木器与狮子舞面具小件。镰仓传统漆工艺，"古都的手温"。' },
      { id: 'kamakura_glass', name: '江之电玻璃杯·紫阳花杂货', icon: '🥛', tag: '衣', type: '文创', price: 45, desc: '江之电沿线站限定玻璃杯。紫阳花押花书签，"镰仓的蓝紫色"。' },
      { id: 'kamakura_enoden2', name: '江之电一日券巡游', icon: '🚃', tag: '行', type: '体验', price: 50, desc: '800日元一日券随上随下。"藤泽→镰仓"全程海景，动漫巡礼标配。' },
      { id: 'kamakura_surf', name: '冲浪体验', icon: '🏄', tag: '玩', type: '体验', price: 300, desc: '湘南海岸冲浪课，"樱木花道的海边"。初学者浪区友好，教练全日语+比划。' },
      { id: 'kamakura_daibutsu2', name: '大佛内部参观', icon: '🕳️', tag: '玩', type: '体验', price: 5, desc: '从佛像背后钻进佛肚内部。抬头看千年前的铸造痕迹，"历史的震撼"。' },
      { id: 'kamakura_senbei', name: '仙贝烧制体验', icon: '🫓', tag: '玩', type: '体验', price: 40, desc: '自己烤仙贝画脸。出炉"咔嚓"声，配绿茶。' },
      { id: 'kamakura_minsu', name: '古都民宿', icon: '🏨', tag: '住', type: '住宿', price: 400, desc: '镰山巷子里的民宿，庭院一棵大柚子树。清晨江之电的铃声叫早。' },
    ],
    stories: [
      { id: 'kamakura_story_slamdunk', name: 'OP里那"15秒"的平交道', icon: '🏀', desc: '《灌篮高手》片头曲"好想大声说爱你"的道口镜头，让镰仓高校前成为全球灌篮迷 pilgrimage。井上雄彦：没想过它会这么火。' },
      { id: 'kamakura_story_daibutsu', name: '大佛曾"没房子住"', icon: '🛕', desc: '大佛原本在佛殿内，1498年海啸冲毁佛殿。此后五百多年，大佛"露天冥想"。' },
      { id: 'kamakura_story_genji', name: '镰仓幕府的起点', icon: '🏯', desc: '1192年源赖朝开创镰仓幕府，武士时代开始。鹤冈八幡宫的"段葛"参道是为源赖朝妻子政子所修。' },
      { id: 'kamakura_story_ajisai', name: '紫阳花季的"人山人海"', icon: '🌸', desc: '六月长谷寺紫阳花道要排队两小时。镰仓人自嘲："紫阳花开，全城卖伞。"' },
      { id: 'kamakura_story_enoden', name: '江之电的"百年浪漫"', icon: '🚃', desc: '1902年通车，全程10公里却停靠15站。跟灌篮高手、海街日记等几十部作品同框。' },
      { id: 'kamakura_story_shonan', name: '湘南的"青春海岸"', icon: '🌊', desc: '湘南海岸是日本冲浪文化的发源地之一。《灌篮高手》《Slam Dunk》的夏天都发生在这里。' },
    ],
  });
})();
