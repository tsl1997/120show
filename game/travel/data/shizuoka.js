/* ============ 日本·静冈 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'shizuoka',
    name: '静冈',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·中部',
    hero: '🗻',
    desc: '富士之国·小丸子的故乡：清水港的金枪鱼与樱虾，骏府城的家康，三保松地的羽衣传说，茶田与富士山同框。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2300 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'shizuoka_chibimaruko', name: '樱桃小丸子主题馆', icon: '👧', price: 15, desc: '小丸子故乡清水市的"丸繁商社"场景重现。教室与客厅原样复刻，"爷爷的味道"。' },
      { id: 'shizuoka_miho', name: '三保松原（羽衣松）', icon: '🌊', price: 0, desc: '世界遗产，"天女羽衣"传说的松林。海滩上富士山与三保松原同框，"浮岛绘"实景。' },
      { id: 'shizuoka_sumpu', name: '骏府城公园', icon: '🏯', price: 40, desc: '德川家康"大御所时代"的居城。家康手植柑橘树后裔仍在，红叶季夜灯。' },
      { id: 'shizuoka_shimizu', name: '清水港·樱桃小丸子乐园', icon: '🚢', price: 0, desc: '"清水金枪鱼"与樱虾渔港。S-Pulse Dream Plaza 的商场，海风与小丸子同在。' },
      { id: 'shizuoka_kunozan', name: '久能山东照宫', icon: '⛩️', price: 40, desc: '德川家康长眠之地，彩色雕刻"东照权现"。罗生门与楼门工艺精绝。' },
      { id: 'shizuoka_atami', name: '热海温泉·MOA美术馆', icon: '♨️', price: 50, desc: '"热海七汤"千年温泉街。MOA美术馆的"红白梅图屏风"，海景露台咖啡。' },
      { id: 'shizuoka_kakegawa', name: '挂川城·二之丸御殿', icon: '🏯', price: 50, desc: '东海名城，"御殿+天守"组合罕见。茶室体验与庭园，"城下町的优雅"。' },
    ],
    souvenirs: [
      { id: 'shizuoka_unagi', name: '清水金枪鱼饭', icon: '🍣', tag: '食', type: '美食', price: 60, desc: '清水港直供金枪鱼盖饭与煮金枪鱼。"鲔鱼之乡"的骄傲，樱虾天妇罗同吃。' },
      { id: 'shizuoka_sakuraebi', name: '由比樱虾', icon: '🍤', tag: '食', type: '特产', price: 50, desc: '樱虾"海之樱花"，生食甜如虾糖。樱虾釜饭与天妇罗，由比港限定。' },
      { id: 'shizuoka_unagi_pie', name: '鳗鱼派', icon: '🥧', tag: '食', type: '特产', price: 35, desc: '"夜里的鳗鱼派"国民点心，加鳗鱼粉的甜酥饼。静冈手信之王。' },
      { id: 'shizuoka_tea', name: '静冈茶', icon: '🍵', tag: '食', type: '特产', price: 80, desc: '日本最大产茶县，"深蒸し茶"浓香。茶田与富士山同框的产地，茶园民宿可体验采摘。' },
      { id: 'shizuoka_oden', name: '静冈关东煮（黑关东煮）', icon: '🍢', tag: '食', type: '美食', price: 25, desc: '墨鱼汁染黑的串串，"黑关东煮"。青叶关东煮横丁，本地夜宵。' },
      { id: 'shizuoka_wasanbon', name: '安倍川饼', icon: '🍡', tag: '食', type: '美食', price: 15, desc: '烤麻糬裹黄豆粉红糖，安倍川畔茶屋名物。"东海道的味道"。' },
      { id: 'shizuoka_chibi', name: '小丸子周边', icon: '👧', tag: '衣', type: '文创', price: 40, desc: '小丸子玩偶、花轮同学徽章、野口笔袋。清水限定，"童年杀"。' },
      { id: 'shizuoka_fuji', name: '富士山文创', icon: '🗻', tag: '衣', type: '文创', price: 45, desc: '富士山杯（倒酒成山）、赤富士挂画。"静冈看到的富士山"文创。' },
      { id: 'shizuoka_tea_ride', name: '茶园采摘体验', icon: '🌱', tag: '玩', type: '体验', price: 100, desc: '茶田摘一芽两叶，炒茶品尝。坐着看富士山喝茶，"茶农的一天"。' },
      { id: 'shizuoka_onsen2', name: '热海温泉街巡汤', icon: '♨️', tag: '玩', type: '体验', price: 90, desc: '热海七汤巡礼，"来宫神社+温泉馒头"。海景温泉旅馆看日出。' },
      { id: 'shizuoka_ferry', name: '骏河湾渡轮', icon: '⛴️', tag: '行', type: '体验', price: 80, desc: '清水→土肥的海上航线，船上望富士山。"海上富士"的经典视角。' },
      { id: 'shizuoka_minsu', name: '茶田民宿', icon: '🏨', tag: '住', type: '住宿', price: 300, desc: '茶园环绕的民宿，露台正对富士山。清晨采茶人已在田间。' },
    ],
    stories: [
      { id: 'shizuoka_story_chibimaruko2', name: '小丸子的"清水记忆"', icon: '👧', desc: '樱桃子笔下的清水市：爷爷的任性、花轮的贵气。她故乡的樱桃小丸子主题馆，全是最真实的场景。' },
      { id: 'shizuoka_story_hagoromo', name: '天女羽衣的传说', icon: '🧚', desc: '渔民拾得羽衣，天女无法回天。三保松原的"羽衣之松"传了千年，能剧《羽衣》的舞台。' },
            { id: 'shizuoka_story_ieyasu', name: '家康的"第二次人生"', icon: '🏯', desc: '德川家康把将军位让给秀忠后定居骏府，"大御所政治"。骏府城是他的"退休俱乐部"。' },
      { id: 'shizuoka_story_tea2', name: '静冈茶的"山地魔法"', icon: '🍵', desc: '静冈产茶面积日本第一，山地雾气是秘诀。"深蒸し"工艺让茶汤更浓绿。' },
      { id: 'shizuoka_story_fuji_view', name: '看富士山最好的地方', icon: '🗻', desc: '静冈人说："富士山是我们的"。三保松原、岩本山公园、茶田，"三面富士"各有美法。' },
      { id: 'shizuoka_story_blackoden', name: '黑关东煮的"墨汁秘密"', icon: '🍢', desc: '静冈关东煮用墨鱼汁染黑汤底，"黑色的深夜美食"。老铺几十年不换汤，"越黑越醇"。' },
    ],
  });
})();
