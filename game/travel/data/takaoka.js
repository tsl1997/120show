/* ============ 日本·高冈 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'takaoka',
    name: '高冈',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·北陆',
    hero: '🔔',
    desc: '哆啦A梦之父的故乡：加贺藩二代前田利长开城，铜器与漆器之乡，大佛与瑞龙寺，雨天的富山湾配一杯冰见寒鰤。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2400 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'takaoka_doraemon', name: '哆啦A梦散步道', icon: '🐱', price: 0, desc: '藤子·F·不二雄故乡的铜像巡礼：任意门、哆啦A梦、大雄等12座铜像散布市内。"从高冈，通往童年"。' },
      { id: 'takaoka_daibutsu', name: '高冈大佛', icon: '🛕', price: 0, desc: '"日本三大佛"之一，铜铸阿弥陀如来。室生寺式慈悲面容，铸铜工艺巅峰。' },
      { id: 'takaoka_zuiryuji', name: '瑞龙寺', icon: '🛕', price: 50, desc: '国宝禅寺，前田利长菩提寺。禅宗伽蓝布局严谨，"加贺藩的气派"。' },
      { id: 'takaoka_kanaya', name: '金屋町·铸物师之街', icon: '⚒️', price: 0, desc: '400年铸物老街，"千本格子"与鋳物师小路。铜器工坊可参观，风铃声挂满街。' },
      { id: 'takaoka_kojyo', name: '高冈古城公园', icon: '🌸', price: 0, desc: '日本百选名城遗址，护城河环绕。春天2000株樱花"夜樱点灯"。' },
      { id: 'takaoka_amaharashi', name: '雨晴海岸', icon: '🌊', price: 0, desc: '"雨晴"名字来自雨后初晴：立山连峰隔富山湾遥遥可见。SNS 爆红机位，"山与海的奇迹构图"。' },
      { id: 'takaoka_takaokamachi', name: '山町筋·金屋横丁', icon: '🏮', price: 0, desc: '老茶屋街，格子窗里飘出咖啡香。夜景灯笼，"加贺藩的余韵"。' },
    ],
    souvenirs: [
      { id: 'takaoka_himirui', name: '冰见寒鰤鱼', icon: '🐟', tag: '食', type: '美食', price: 150, desc: '"鰤鱼之王"冰见寒鰤，冬季定置网捕获。寒鰤刺身与鰤鱼涮涮锅，"富山湾的钻石"。' },
      { id: 'takaoka_doubutsu', name: '白えび（白虾）', icon: '🦐', tag: '食', type: '美食', price: 90, desc: '"富山湾的宝石"白虾粉红透明。白虾刺身与天妇罗，只有富山湾能捕。' },
      { id: 'takaoka_hotei', name: '高冈铜器', icon: '🔔', tag: '衣', type: '文创', price: 150, desc: '400年铸物传统，"日本铜器之王"。风铃、佛具、花瓶，加贺藩的遗产。' },
      { id: 'takaoka_takaoka_lac', name: '高冈漆器', icon: '🪵', tag: '衣', type: '文创', price: 100, desc: '青贝涂螺钿漆器，"高冈百年手艺"。茶盘与首饰盒，低调奢华。' },
      { id: 'takaoka_dora', name: '哆啦A梦周边', icon: '🐱', tag: '衣', type: '文创', price: 50, desc: '高冈限定哆啦A梦铜像模型、任意门书立。藤子·F·不二雄故乡的"蓝胖子宇宙"。' },
      { id: 'takaoka_ohi', name: '大感触染·井波彫刻', icon: '🖌️', tag: '衣', type: '文创', price: 80, desc: '越中井波彫刻"木雕佛坛"为国宝级。富山手工纸与砚台，"北陆手艺"。' },
      { id: 'takaoka_kura', name: '冰见乌冬·鳟鱼寿司', icon: '🍥', tag: '食', type: '特产', price: 45, desc: '冰见乌冬细滑，鳟鱼寿司是"富山 omega"。Airport 限定鳟鱼寿司卷。' },
      { id: 'takaoka_dora_tour', name: '哆啦A梦铜像巡礼打卡', icon: '🗺️', tag: '玩', type: '体验', price: 0, desc: '12座铜像地图打卡，"任意门"在 JR 高冈站。集齐合影发"高冈蓝"朋友圈。' },
      { id: 'takaoka_casting', name: '铸物工坊体验', icon: '⚒️', tag: '玩', type: '体验', price: 120, desc: '金屋町铸物师指导浇铸小风铃。自己的铜器带回家，"400年的工艺一小时的体验"。' },
      { id: 'takaoka_amaharashi2', name: '雨晴海岸日出打卡', icon: '🌄', tag: '玩', type: '体验', price: 0, desc: '清晨雨后看立山连峰"漂浮"在海面。"雨晴"名字的由来就在此刻。' },
      { id: 'takaoka_ferry', name: '富山湾海鲜丼巡游', icon: '🍚', tag: '玩', type: '体验', price: 100, desc: '冰见与高冈的海鲜丼店巡吃。白虾、寒鰤、萤乌贼，"富山湾胃"。' },
      { id: 'takaoka_minsu', name: '古街町屋民宿', icon: '🏨', tag: '住', type: '住宿', price: 260, desc: '山町筋町屋民宿，格子窗里听雨。清晨铸物师敲铜声远传。' },
    ],
    stories: [
      { id: 'takaoka_story_fujiko', name: '哆啦A梦从高冈出发', icon: '🐱', desc: '藤本弘（藤子·F·不二雄）出生于高冈，小学与安孙子素雄（藤子不二雄A）同班。任意门铜像立在JR站前。' },
      { id: 'takaoka_story_casting2', name: '400年的"铜器之街"', icon: '🔔', desc: '加贺藩二代藩主利长招铸物师建城。高冈铜器占日本佛具大半市场，"京都的钟，高冈铸"。' },
      { id: 'takaoka_story_amaharashi2', name: '雨晴海岸的"奇迹构图"', icon: '🌊', desc: '相隔150公里的立山连峰"漂浮"在海面上。物理上是大气折射，感上是"神迹"。' },
      { id: 'takaoka_story_himirui2', name: '寒鰤鱼的"冬天仪式"', icon: '🐟', desc: '冰见渔民冬季定置网捕寒鰤，"鰤 Saudade"。只有冬天的冰见鰤才叫"寒鰤"。' },
      { id: 'takaoka_story_zuiryuji2', name: '瑞龙寺的"禅意几何"', icon: '🛕', desc: '国宝伽蓝对称完美，"禅宗数学"。前田利长墓所安放于此，加贺藩的静静一角。' },
      { id: 'takaoka_story_shiawase', name: '"北陆的雨"，也浪漫', icon: '🌧️', desc: '北陆多雨，高冈人却把雨天做成浪漫：雨具店、雨中古城、雨晴海岸。"雨是北陆的仪式感"。' },
    ],
  });
})();
