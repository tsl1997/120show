/* ============ 日本·埼玉 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'saitama',
    name: '埼玉',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关东',
    hero: '🌸',
    desc: '蜡笔小新的故乡：春日部的野原家，秩父的温泉与芝樱，铁道博物馆的火车迷天堂，东京近郊的"日常系圣地"。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2300 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'saitama_kasukabe', name: '春日部·蜡笔小新巡礼', icon: '🖍️', price: 0, desc: '野原一家"住在"春日部。车站小新涂装、双叶幼稚园原型、"小新桥"，全城都是小新。' },
      { id: 'saitama_chichibu', name: '秩父·长瀞', icon: '🏞️', price: 0, desc: '秩父夜祭（12月）与芝樱之丘（4月）。长瀞岩畳漂流，"东京人的秘境"。' },
      { id: 'saitama_tetsudo', name: '大宫铁道博物馆', icon: '🚆', price: 40, desc: '火车迷圣地：新干线驾驶模拟器。蒸汽机车转车台演示，"铁道宅的天国"。' },
      { id: 'saitama_kawagoe', name: '川越·小江户', icon: '🏮', price: 0, desc: '"小江户"藏造老街与时间之钟。喜多院五百罗汉，"穿越江户"的近郊一日。' },
      { id: 'saitama_omiya', name: '大宫盆栽村·冰川神社', icon: '🌳', price: 0, desc: '世界级盆栽美术馆，百年松柏微缩山水。冰川神社"缘结石"，风铃祭夏天限定。' },
      { id: 'saitama_hikawa2', name: '羊山公园芝樱之丘', icon: '🌸', price: 0, desc: '四月十万株芝樱铺成粉色地毯。望整片"粉海"配秩父群山，"春天限定"。' },
      { id: 'saitama_rail', name: '铁道模型咖啡·铁立食', icon: '☕', price: 30, desc: '铁道主题咖啡店，模型火车绕店穿行。立食荞麦面"新干线上同款"。' },
    ],
    souvenirs: [
      { id: 'saitama_shinkenko', name: '深谷葱·狭山茶', icon: '🧅', tag: '食', type: '特产', price: 30, desc: '深谷葱"日本葱王"甜到可以生吃。狭山茶香浓，"埼玉的绿"。' },
      { id: 'saitama_zenko', name: '草加煎饼', icon: '🫓', tag: '食', type: '特产', price: 30, desc: '草加宿驿站的酱油煎饼，"咔嚓"三百年。现烤的脆度，手信经典。' },
      { id: 'saitama_koedo', name: '川越红薯甜点', icon: '🍠', tag: '食', type: '美食', price: 35, desc: '川越"红薯街"：红薯冰淇淋、红薯条、红薯咖啡。"小江户的甜"。' },
      { id: 'saitama_crayon', name: '蜡笔小新周边', icon: '🖍️', tag: '衣', type: '文创', price: 45, desc: '小新玩偶、动感超人徽章、小白T恤。春日部限定"野原家全家福"。' },
      { id: 'saitama_densha', name: '铁道文创', icon: '🚆', tag: '衣', type: '文创', price: 40, desc: '铁道博物馆限定模型、车票书签。E7系新干线钥匙扣，"铁道宅收藏"。' },
      { id: 'saitama_bonsai', name: '盆栽文创', icon: '🪴', tag: '衣', type: '文创', price: 60, desc: '迷你盆栽摆件与盆栽明信片。大宫盆栽村的"微缩绿意"。' },
      { id: 'saitama_kasukabe2', name: '小新主题咖啡', icon: '☕', tag: '玩', type: '体验', price: 50, desc: '春日部小新咖啡店，餐点全是角色造型。动感超人拉面，"童年照进现实"。' },
      { id: 'saitama_densha2', name: '新干线驾驶模拟', icon: '🚄', tag: '玩', type: '体验', price: 60, desc: '铁道博物馆驾驶E7系模拟器。从大宫开到长冈，"当一天司机"。' },
      { id: 'saitama_kawagoe2', name: '川越和服漫步', icon: '👘', tag: '玩', type: '体验', price: 120, desc: '穿和服逛藏造老街与时间之钟。",小江户"的江户风写真。' },
      { id: 'saitama_river', name: '长瀞漂流', icon: '🚣', tag: '玩', type: '体验', price: 150, desc: '岩畳段平缓漂流，夏天地狱谷激流段。船夫撑篙讲川柳，"秩父的水上时光"。' },
      { id: 'saitama_minsu', name: '秩父温泉民宿', icon: '🏨', tag: '住', type: '住宿', price: 250, desc: '秩父山间温泉民宿，夜听溪流。清晨芝樱或红叶就在窗外。' },
    ],
    stories: [
      { id: 'saitama_story_crayon2', name: '春日部的"小新经济"', icon: '🖍️', desc: '臼井仪人把野原新之助设定在春日部，全城感恩。车站改名"小新列车"，"吉祥物经济"先驱。' },
      { id: 'saitama_story_tetsudo2', name: '大宫是"铁道首都"', icon: '🚆', desc: '大宫是新干线东北/上越/北陆三线交汇。铁道博物馆有53辆真车，"大宫人不坐第一班车"。' },
      { id: 'saitama_story_koedo', name: '川越的"时间之钟"', icon: '🕰️', desc: '钟楼400年每天敲四次，"川越的时间"。火灾后唯一幸存的藏造建筑群，"江户的记忆"。' },
      { id: 'saitama_story_chichibu2', name: '秩父夜祭的"笠与灯笼"', icon: '🏮', desc: '12月2-3日秩父夜祭，屋台与笠鉾对撞。日本"三大曳山祭"之一，花火冬季放。' },
      { id: 'saitama_story_bonsai2', name: '盆栽村的"百年耐心"', icon: '🪴', desc: '大宫盆栽村1925年开村，经手三代人。"一盆盆栽需要三代人的照料"，时间的手艺。' },
      { id: 'saitama_story_shibu', name: '芝樱的"粉色地毯"', icon: '🌸', desc: '羊山公园芝樱不是樱花，是"地上开的樱花"。四月粉色铺到山脚，"埼玉的春日限定"。' },
    ],
  });
})();
