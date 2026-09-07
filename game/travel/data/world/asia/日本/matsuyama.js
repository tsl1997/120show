/* ============ 日本·松山 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'matsuyama',
    name: '松山',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·四国',
    hero: '♨️',
    desc: '"坊ちゃん"的故乡：道后温泉本馆3000年历史，松山城天守看濑户内海，正冈子规与夏目漱石的文学之城，柑橘之岛爱媛。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2600 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'matsuyama_dogo', name: '道后温泉本馆', icon: '♨️', price: 60, desc: '3000年历史的国民温泉，"神之汤"浴场。木造三层的"坊ちゃん风吕"，宫崎骏《千与千寻》油屋灵感来源之一。' },
      { id: 'matsuyama_castle', name: '松山城', icon: '🏯', price: 52, desc: '江户现存十二天守之一，"日本百名城"。缆车登城俯瞰濑户内海，天守阁"登梁御殿"。' },
      { id: 'matsuyama_bocchan', name: '坊ちゃん列车·文学小径', icon: '🚂', price: 30, desc: '夏目漱石小说《坊ちゃん》的蒸汽小火车复刻版。文学小径石碑一路，"漱石与子规的城"。' },
      { id: 'matsuyama_isaniwa', name: '伊佐尔波神社·odge·一对石', icon: '⛩️', price: 0, desc: '八坂造神社，"神社的婚礼殿堂"。温泉寺与汤神社，"温泉的守护"。' },
      { id: 'matsuyama_kaigan', name: '濑户内海岛波海道', icon: '🚲', price: 0, desc: '自行车"圣杯"：跨海大桥串起六岛。"しまなみ海道"骑行一日，"海上蓝桥"。' },
      { id: 'matsuyama_kado', name: '柑橘王国·Mikimoto岛', icon: '🍊', price: 0, desc: '爱媛是柑橘王国，"蜜柑之乡"。果汁与甜品店，"橙色的城市"。' },
      { id: 'matsuyama_dogopark', name: '道后公园·椿神社', icon: '🌸', price: 0, desc: '道后公园是汤筑城迹，春樱名所。椿神社"恋爱成就"红椿花。' },
    ],
    souvenirs: [
      { id: 'matsuyama_tai', name: '鲷鱼饭', icon: '🐟', tag: '食', type: '美食', price: 80, desc: '宇和岛鲷鱼饭"生鲷蘸蛋液"。爱媛名物，"濑户内的鲜"。' },
      { id: 'matsuyama_zaru', name: '五色饺子·皿鉁料理', icon: '🥟', tag: '食', type: '美食', price: 60, desc: '爱媛五色饺子五彩缤纷。皿鉁料理是"南予的宴席艺术"。' },
      { id: 'matsuyama_tangerine', name: '蜜柑甜品宇宙', icon: '🍊', tag: '食', type: '特产', price: 40, desc: '蜜柑冰淇淋、蜜柑大福、蜜柑汁。"爱媛=蜜柑"，甜品全家桶。' },
      { id: 'matsuyama_dogocider', name: '道后啤酒·坊ちゃん团子', icon: '🍡', tag: '食', type: '特产', price: 30, desc: '"坊ちゃん团子"三色团子串（漱石小说同款）。道后温泉的"文学甜点"。' },
      { id: 'matsuyama_botchan', name: '坊ちゃん·漱石文创', icon: '📚', tag: '衣', type: '文创', price: 50, desc: '《坊ちゃん》书籍与列车模型。正冈子规野球球具，"文学之城"的周边。' },
      { id: 'matsuyama_towel', name: '今治毛巾', icon: '🧺', tag: '衣', type: '服饰', price: 100, desc: '今治毛巾"世界级认证"，吸水之王。毛巾蛋糕卷（真的像蛋糕），爱媛工艺。' },
      { id: 'matsuyama_dogo_wen', name: '道后温泉文创', icon: '♨️', tag: '衣', type: '文创', price: 40, desc: '道后温泉"汤壶"摆件、手巾。"千与千寻油屋"联想的纪念。' },
      { id: 'matsuyama_dogo2', name: '道后温泉本馆泡汤', icon: '♨️', tag: '玩', type: '体验', price: 100, desc: '"神之汤"+"灵之汤"两种浴场。飞凤阁休息室喝茶，"3000年的泡汤"。' },
      { id: 'matsuyama_shikoku', name: '四国遍路体验', icon: '🎋', tag: '玩', type: '体验', price: 150, desc: '四国八十八所遍路穿白衣持金刚杖。松山周边石手寺、円明寺，"遍路者的白衣"。' },
      { id: 'matsuyama_cycling2', name: '岛波海道骑行', icon: '🚲', tag: '玩', type: '体验', price: 250, desc: '今治→尾道70公里跨海骑行。"世界最美自行车道"，岛与桥的连续。' },
      { id: 'matsuyama_kido', name: '文学小径散步', icon: '📖', tag: '玩', type: '体验', price: 0, desc: '城山公园到道后的文学碑小径。漱石、子规、晋作的诗句石碑，"边走边读"。' },
      { id: 'matsuyama_minsu', name: '道后温泉旅馆', icon: '🏨', tag: '住', type: '住宿', price: 450, desc: '道后温泉街旅馆，浴衣木屐逛夜街。夜里"坊ちゃん列车"灯光驶过。' },
    ],
    stories: [
      { id: 'matsuyama_story_dogo2', name: '道后温泉3000年', icon: '♨️', desc: '《古事记》就记载道后温泉，"日本最古温泉"。历代天皇与诗人泡过，本馆1994年百年修复。' },
      { id: 'matsuyama_story_bocchan2', name: '漱石的"坊ちゃん"，子规的野球', icon: '⚾', desc: '夏目漱石在松山教过书，小说《坊ちゃん》主角坐的就是这列车。正冈子规把棒球带到松山，"野球之父"。' },
      { id: 'matsuyama_story_chirico', name: '《千与千寻》的"油屋原型"', icon: '🎬', desc: '道后温泉本馆是"油屋"灵感来源之一（官方未承认但形似）。游客到本馆都喊"千寻！"' },
      { id: 'matsuyama_story_shimanami', name: '岛波海道的"骑婚纱"', icon: '🚲', desc: '岛波海道被称为"自行车圣杯"，有人骑婚纱照。大桥串六岛，"海上的骑行梦"。' },
      { id: 'matsuyama_story_tai2', name: '鲷鱼饭的"宇和岛流"', icon: '🐟', desc: '宇和岛鲷鱼饭用生鲷蘸蛋液，"激鲜吃法"。别处是蒸鲷鱼饭，两种流派。' },
      { id: 'matsuyama_story_towel2', name: '今治毛巾的"品质执念"', icon: '🧺', desc: '今治毛巾认证要"滴水5秒沉底"吸水测试。不达标不许挂牌，"毛巾界的爱马仕"。' },
    ],
  });
})();
