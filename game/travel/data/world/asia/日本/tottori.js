/* ============ 日本·鸟取 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'tottori',
    name: '鸟取',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·中国地方',
    hero: '🏜️',
    desc: '柯南之父的故乡：鸟取沙丘的沙漠幻想，青山刚昌博物馆的推理宇宙，全日本人口最少的县藏着最多的"名场面"。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2600 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'tottori_sakyu', name: '鸟取沙丘', icon: '🏜️', price: 0, desc: '日本唯一大规模海岸沙丘，最大落差50米。骑骆驼、滑沙、"风纹"如波，"日本的沙漠"。' },
      { id: 'tottori_conan', name: '青山刚昌故乡馆', icon: '🔍', price: 70, desc: '柯南小镇北荣町，"柯南大道"铜像一路。作者故乡馆还原工作室，"真相只有一个"。' },
      { id: 'tottori_sakaiminato', name: '境港·水木茂之路', icon: '👻', price: 0, desc: '鬼太郎之父水木茂的家乡，800多尊妖怪铜像。妖怪神社与妖怪免税店，"日本最欢乐的妖怪街"。' },
      { id: 'tottori_uruwanko', name: '浦富海岸', icon: '🌊', price: 0, desc: '山阴海岸地质公园，游船穿洞。"砂岛洞门"清澈见底，皮划艇穿岩缝。' },
      { id: 'tottori_daisen', name: '大山', icon: '⛰️', price: 0, desc: '中国地方最高峰"伯耆富士"。夏季避暑徒步，冬季滑雪场"大山白金"。' },
      { id: 'tottori_sand_museum', name: '沙之美术馆', icon: '🏛️', price: 70, desc: '世界唯一室内沙雕美术馆，每年主题不同。巨大沙雕细节逼真，"沙子的艺术极限"。' },
      { id: 'tottori_mizuki', name: '三德山三佛寺投入堂', icon: '🛕', price: 30, desc: '悬崖绝壁上的"最危险国宝"，悬造小堂。攀山两小时一睹真容，"修行者的圣地"。' },
    ],
    souvenirs: [
      { id: 'tottori_nabe', name: '砂丘长芋·白葱锅', icon: '🍠', tag: '食', type: '美食', price: 40, desc: '砂丘长山药黏到拉丝，"山药汁配鸡蛋"。白葱与松叶蟹锅，山阴的冬天。' },
      { id: 'tottori_crab', name: '松叶蟹', icon: '🦀', tag: '食', type: '美食', price: 300, desc: '"岩蟹之王"松叶蟹冬季解禁。蟹刺身、烤蟹、蟹锅全套，"山阴的冬季仪式"。' },
      { id: 'tottori_nashi', name: '二十世纪梨', icon: '🍐', tag: '食', type: '特产', price: 40, desc: '鸟取是"二十世纪梨发源地"，甜脆多汁。梨汁苏打与梨冰淇淋，"梨县的自豪"。' },
      { id: 'tottori_wood', name: '因州和纸·后藤绘马', icon: '📜', tag: '衣', type: '文创', price: 60, desc: '因州和纸千年工艺，"最结实的手漉纸"。和纸灯笼与扇子，鸟取老铺。' },
      { id: 'tottori_conan_wen', name: '柯南周边', icon: '🔍', tag: '衣', type: '文创', price: 50, desc: '柯南大道限定徽章、蝴蝶结变声器玩具。青山刚昌故乡馆限定，"柯南迷 pilgrimage 终点"。' },
      { id: 'tottori_gegege', name: '鬼太郎周边', icon: '👻', tag: '衣', type: '文创', price: 45, desc: '鬼太郎眼球老爹玩偶、妖怪邮票。境港限定，"妖怪经济"的代表。' },
      { id: 'tottori_sandbag', name: '沙丘文创·沙漏', icon: '⏳', tag: '衣', type: '文创', price: 35, desc: '鸟取沙丘的沙装进沙漏，"一小时沙漏"。沙画明信片，"把沙漠带走"。' },
      { id: 'tottori_camel', name: '沙丘骑骆驼', icon: '🐫', tag: '玩', type: '体验', price: 30, desc: '在"日本的沙漠"骑骆驼散步。骆驼队+夕阳，"沙漠写真"全套。' },
      { id: 'tottori_parasail', name: '沙丘滑翔伞', icon: '🪂', tag: '玩', type: '体验', price: 300, desc: '从沙丘起飞看日本海与沙丘全景。"海与沙漠同框"的震撼。' },
      { id: 'tottori_fishing', name: '境港海钓', icon: '🎣', tag: '玩', type: '体验', price: 200, desc: '境水道钓真鲷与青花鱼。钓上现处理，"渔港的下午"。' },
      { id: 'tottori_onsen', name: '三朝温泉', icon: '♨️', tag: '玩', type: '体验', price: 80, desc: '世界罕见含镭温泉，"癌症之家"传说。河原风吕免费露天，"冒着热气的河滩"。' },
      { id: 'tottori_minsu', name: '砂丘旁民宿', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '砂丘步行圈民宿，清晨可看沙丘日出。老板养着两只"沙丘犬"。' },
    ],
    stories: [
      { id: 'tottori_story_sakyu2', name: '沙丘的"风纹"每天不同', icon: '🏜️', desc: '鸟取沙丘由千叶川送沙十万年形成。风一吹纹路全变，"没有两天的沙丘是一样的"。' },
      { id: 'tottori_story_conan2', name: '柯南小镇的"上万人签名"', icon: '🔍', desc: '北荣町有柯南铜像14座，"柯南大桥"也在这。青山刚昌：家乡给我全部的灵感。' },
      { id: 'tottori_story_mizuki2', name: '水木茂与"妖怪之道"', icon: '👻', desc: '水木茂少年时境港的"妖怪故事"成了《鬼太郎》。家乡把妖怪做成产业，"妖怪拯救小镇"。' },
      { id: 'tottori_story_pear', name: '二十世纪梨的"偶然"', icon: '🍐', desc: '1906年发现于鸟取，甜脆多汁成日本梨王。当地谚语："鸟取的梨，甜过初恋。"' },
      { id: 'tottori_story_crab2', name: '松叶蟹的"解禁铃"', icon: '🦀', desc: '11月6日解禁日渔船竞相出港，第一网蟹拍卖天价。"蟹王"曾拍出500万日元。' },
      { id: 'tottori_story_nageire', name: '投入堂的"建造之谜"', icon: '🛕', desc: '1300年前如何把佛堂建上绝壁，至今无解。一些建筑师说："现代技术也难复刻。"' },
    ],
  });
})();
