/* ============ 江西·景德镇 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'jingdezhen',
    name: '景德镇',
    country: '中国',
    cc: 'CN',
    province: '江西',
    flag: '🇨🇳',
    region: '华东',
    hero: '🏺',
    desc: '千年瓷都："工匠八方来，器成天下走"。御窑厂的青花瓷定义中国色，如今景漂青年把老瓷都玩成了"艺术乌托邦"。',
    travel: [{ name: '高铁', icon: '🚄', cost: 300 }, { name: '飞机', icon: '✈️', cost: 750 }],
    visa: null,
    spots: [
      { id: 'jingdezhen_taoyang', name: '陶阳里御窑景区', icon: '🏛️', price: 60, desc: '明清御窑厂遗址，"千年瓷都的心脏"。龙珠阁下埋着御用瓷器的碎片——皇帝摔碗选精品的考古现场。' },
      { id: 'jingdezhen_taoxichuan', name: '陶溪川文创街区', icon: '🎨', price: 0, desc: '老瓷厂改造的"景漂"艺术区。夜晚创意市集摆满年轻设计师的杯子，"最文艺的夜市"。' },
      { id: 'jingdezhen_guyao', name: '古窑民俗博览区', icon: '🏺', price: 95, desc: '历代瓷窑活态展示，柴窑点火是大事。看老师傅拉坯利坯画坯，"72道工序"现场版。' },
      { id: 'jingdezhen_sanbao', name: '三宝国际瓷谷', icon: '🌿', price: 0, desc: '山谷里遍布工作室，"景漂村"的心脏。国际陶艺家聚集，咖啡馆与窑炉比邻而居。' },
      { id: 'jingdezhen_fuliang', name: '浮梁古县衙', icon: '⚖️', price: 45, desc: '江南唯一保存完整的五品县衙，"浮梁歙州，万国来求"。瓷茶税重故县官高配，红塔千年矗立。' },
      { id: 'jingdezhen_yaoli', name: '瑶里古镇', icon: '🏘️', price: 98, desc: '"瓷之源"的徽派古镇，高岭土产地。程氏宗祠与狮冈胜览，雨后云雾绕山最出片。' },
      { id: 'jingdezhen_yeling', name: '雕塑瓷厂乐天市集', icon: '🎪', price: 0, desc: '周六上午的"陶艺庙会"，学生作品摊位。几十块能淘到独特手作杯，"淘瓷人的天堂"。' },
    ],
    souvenirs: [
      { id: 'jingdezhen_qinghua', name: '青花瓷杯', icon: '🍵', tag: '衣', type: '文创', price: 100, desc: '手绘青花主人杯，一笔一笔手工分水。"白釉青花一火成"，茶友的终极装备。' },
      { id: 'jingdezhen_lingshi', name: '玲珑瓷·颜色釉', icon: '💎', tag: '衣', type: '文创', price: 120, desc: '玲珑瓷"米粒镂空"透光如窗，颜色釉"入窑一色出窑万彩"。四大名瓷各领风骚。' },
      { id: 'jingdezhen_jiao', name: '饺子粑·冷粉', icon: '🥟', tag: '食', type: '美食', price: 10, desc: '景德镇米制品宇宙：饺子粑蒸得透明、冷粉拌辣橘皮。毛仔特色小吃店是老字号。' },
      { id: 'jingdezhen_leya', name: '乐平狗肉·碱水粑', icon: '🍖', tag: '食', type: '美食', price: 50, desc: '碱水粑炒蛋是景德镇"国民早餐"。油条包麻糍是"碳水炸弹"，甜咸党的和解。' },
      { id: 'jingdezhen_fuzhou', name: '浮梁红茶·瓷茶', icon: '🍵', tag: '食', type: '特产', price: 80, desc: '"浮梁歙州，万国来求"——白居易《琵琶行》里的茶。红茶配瓷杯，"瓷茶CP"。' },
      { id: 'jingdezhen_niren', name: '瓷雕·瓷铃', icon: '🔔', tag: '衣', type: '文创', price: 60, desc: '瓷风铃、瓷狗狗、瓷花瓶小件。摔不坏的都是精品，"瓷都的伴手礼超市"。' },
      { id: 'jingdezhen_zijin', name: '紫金釉茶具套装', icon: '🫖', tag: '衣', type: '文创', price: 180, desc: '整套手作茶具配木盒。陶溪川设计师款，"送人自用都长脸"。' },
      { id: 'jingdezhen_laba', name: '拉坯体验课', icon: '👨‍🎨', tag: '玩', type: '体验', price: 80, desc: '转盘上一团泥，手一歪全毁——拉坯比想象难。做出歪歪扭扭的碗也是"独一无二"。' },
      { id: 'jingdezhen_huihua', name: '青花手绘体验', icon: '🖌️', tag: '玩', type: '体验', price: 100, desc: '素坯上用青花料画葡萄纹，师傅帮你"分水"。烧好寄到家，"自己的御窑作品"。' },
      { id: 'jingdezhen_yeshi', name: '陶溪川夜市淘瓷', icon: '🛍️', tag: '玩', type: '体验', price: 50, desc: '周五周六晚的创意市集，跟摊主聊设计。捡漏手作杯，"淘瓷的乐趣大于买瓷"。' },
      { id: 'jingdezhen_minsu', name: '瓷谷民宿', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '三宝瓷谷里的工作室民宿，房间摆着主人的作品。清晨推窗见青山与窑炉炊烟。' },
    ],
    stories: [
      { id: 'jingdezhen_story_yu', name: '皇帝摔碗的御窑厂', icon: '👑', desc: '御窑烧制的瓷器皇帝只挑最好的，落选的全部打碎掩埋。如今考古挖出的碎瓷片，拼出了"皇家审美史"。' },
      { id: 'jingdezhen_story_72', name: '七十二道工序', icon: '⚙️', desc: '一件瓷器要过72道手：拉坯、利坯、画坯、施釉……"过手七十二，方克成器"，古代流水线巅峰。' },
      { id: 'jingdezhen_story_jingpiao', name: '"景漂"是什么', icon: '🎨', desc: '三万多年轻艺术家聚集景德镇创业，被称为"景漂"。老瓷都因年轻人再度年轻，"手艺人乌托邦"。' },
      { id: 'jingdezhen_story_gaoling', name: '高岭土的"世界名"', icon: '⛰️', desc: '世界陶瓷原料 Kaolin（高岭土）的名字来自景德镇高岭村。一座小山，定义了一种材料的学名。' },
      { id: 'jingdezhen_story_chaiyao', name: '柴窑开窑像"开盲盒"', icon: '🔥', desc: '松柴烧三天三夜，成品率不到一半。开窑那一刻"入窑一色，出窑万彩"，运气也是工艺。' },
      { id: 'jingdezhen_story_zhu', name: '珠山八友', icon: '🖼️', desc: '民国瓷绘天团"珠山八友"把文人画搬上瓷器。瓷板画拍卖会上千万，"瓷上的中国画"。' },
    ],
  });
})();
