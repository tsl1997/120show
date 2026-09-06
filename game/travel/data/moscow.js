/* ============ 俄罗斯·莫斯科 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'moscow',
    name: '莫斯科',
    country: '俄罗斯',
    cc: 'RU',
    flag: '🇷🇺',
    region: '欧洲',
    hero: '⛪',
    desc: '红场上的洋葱顶彩如童话，地铁宫殿深藏地下百米。零下二十度咬一口冰淇淋，战斗民族的浪漫自成一派。',
    travel: [{ name: '飞机', icon: '✈️', cost: 3500 }, { name: '火车·西伯利亚线', icon: '🚂', cost: 4200 }],
    visa: { cost: 550, note: '电子签证或旅行社邀请函' },
    spots: [
      { id: 'moscow_kremlin', name: '克里姆林宫', icon: '🏰', price: 150, desc: '红色宫墙围出俄罗斯的心脏，兵器库里皇冠与法贝热彩蛋琳琅满目。钟王与炮王"从未服役"，却是最出名的"文物"。' },
      { id: 'moscow_red_square', name: '红场', icon: '🟥', price: 0, desc: '世界文化遗产广场，圣瓦西里大教堂的洋葱顶像糖果。革命领袖墓、古姆百货、历史博物馆围成一圈，"俄罗斯的名片墙"。' },
      { id: 'moscow_st_basil', name: '圣瓦西里大教堂', icon: '⛪', price: 80, desc: '九个彩色洋葱顶没有一个是重复的，"石头上的童话"。伊凡雷帝传说弄瞎建筑师，只为不再有第二座。' },
      { id: 'moscow_metro', name: '莫斯科地铁', icon: '🚇', price: 10, desc: '"地下宫殿"：共青团站的马赛克、革命广场站的铜像。摸狗鼻子会好运，乘客在百米深处的电梯里看小说。' },
      { id: 'moscow_gum', name: '古姆百货', icon: '🛍️', price: 0, desc: '红场旁的百年玻璃顶商场，喷泉里飘着雪糕味。苏联时代的"橱窗政治"如今是冰淇淋与鱼子酱的柜台。' },
      { id: 'moscow_tretiakov', name: '特列季亚科夫画廊', icon: '🖼️', price: 90, desc: '俄罗斯艺术宝库：《三圣像》、巡回画派全景。列宾与希施金的油画前，站着安静的俄罗斯孩子。' },
      { id: 'moscow_arbat', name: '阿尔巴特街', icon: '🎭', price: 0, desc: '五百年老步行街，街头画家、诗人与套娃店。普希金故居在这条街上，"莫斯科最艺术的五公里"。' },
    ],
    souvenirs: [
      { id: 'moscow_borscht', name: '红菜汤配黑面包', icon: '🍲', tag: '食', type: '美食', price: 60, desc: '甜菜根炖出紫红色浓汤，配黑面包与酸奶油。一勺下去"战斗民族"，暖从胃升到脸。' },
      { id: 'moscow_pelmeni', name: '西伯利亚饺子', icon: '🥟', tag: '食', type: '美食', price: 50, desc: '小饺子冻成一袋，煮熟蘸黄油与酸奶油。西伯利亚猎人打包口粮的智慧，如今是国民家常菜。' },
      { id: 'moscow_beef_stroganoff', name: '斯特罗加诺夫牛肉', icon: '🥩', tag: '食', type: '美食', price: 110, desc: '牛肉条配蘑菇酸奶油酱，浇在土豆泥上。贵族姓氏命名的菜，"俄式浓汤的代表"。' },
      { id: 'moscow_blini', name: '布林饼·鱼子酱', icon: '🥞', tag: '食', type: '美食', price: 130, desc: '薄煎饼卷红鱼子酱与酸奶油，"俄式可丽饼"。谢肉节连吃一周，配一杯伏特加才是全套。' },
      { id: 'moscow_vodka', name: '伏特加', icon: '🍶', tag: '食', type: '饮品', price: 60, desc: '冰镇伏特加配腌黄瓜与黑面包，"一口闷"是待客诚意。博物馆里还展示"调香伏特加"的历史。' },
      { id: 'moscow_icecream', name: '古姆冰淇淋', icon: '🍦', tag: '食', type: '美食', price: 15, desc: '红场边百年冰淇淋配方，零下二十度照样卖。战斗民族冬天吃冰淇淋的底气，来自"身体是热的"。' },
      { id: 'moscow_matryoshka', name: '套娃', icon: '🪆', tag: '衣', type: '文创', price: 150, desc: '手工彩绘椴木套娃，从五层到二十层。老奶奶画的"家族套娃"，每层脸都不一样。' },
      { id: 'moscow_ushanka', name: '乌尚卡毛皮帽', icon: '🎩', tag: '衣', type: '服饰', price: 300, desc: '护耳毛皮帽一戴，零下三十度不慌。"军大衣+毛帽"是战斗民族的冬季制服，拍照自带气场。' },
      { id: 'moscow_amber', name: '波罗的海琥珀', icon: '🟠', tag: '衣', type: '特产', price: 250, desc: '琥珀手串与"眼泪瓶"，千年树脂的光泽。加里宁格勒产的蜜蜡，灯光下像凝固的夕阳。' },
      { id: 'moscow_sputnik', name: '航天文创', icon: '🚀', tag: '衣', type: '文创', price: 80, desc: '加加林与卫星一号的徽章、T恤。航天博物馆旁的商店，"人类第一位宇航员"的纪念品全球独一份。' },
      { id: 'moscow_ice_ride', name: '红场滑冰场', icon: '⛸️', tag: '玩', type: '体验', price: 120, desc: '冬天红场变身露天冰场，洋葱顶当背景。摔倒在"世界最美冰场"，起身都自带童话滤镜。' },
      { id: 'moscow_banya', name: '俄式桑拿', icon: '🧖', tag: '玩', type: '体验', price: 150, desc: '高温蒸汽后用桦树枝"抽打"促进循环，再跳冰窟窿。"战斗民族"的解压方式，试过的人都说上头。' },
      { id: 'moscow_hotel', name: '红场景观酒店', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '窗外就是圣瓦西里九色洋葱顶。夜里教堂灯光亮起，"明信片里的房间"。' },
    ],
    stories: [
      { id: 'moscow_story_candy', name: '洋葱顶其实是"糖霜楼"', icon: '⛪', desc: '圣瓦西里九顶各有寓意，彩釉如烘焙糖霜。传说彼得大帝曾想把它们刷成金色，被工匠们"护住"了。' },
      { id: 'moscow_story_metro2', name: '地铁是"防空洞"', icon: '🚇', desc: '莫斯科地铁深达百米，战时可作防空洞。扶梯速度比别国快，"因为大家都在赶时间"。' },
      { id: 'moscow_story_dog', name: '摸狗鼻子求好运', icon: '🐕', desc: '革命广场站有一尊边防军与军犬铜像，士兵的枪与狗鼻子被摸得发亮。据说摸狗鼻考试能过——考试季排队。' },
      { id: 'moscow_story_winter', name: '零下30度的冰淇淋', icon: '🍦', desc: '俄罗斯人冬天吃冰淇淋理直气壮：屋里暖气太足。红场雪地里啃雪糕的游客，是冬季莫斯科一景。' },
      { id: 'moscow_story_sputnik', name: '第一颗卫星的"哔哔声"', icon: '🚀', desc: '1957年卫星一号让全球无线电都在追"哔哔"声。莫斯科航天博物馆里，真品悬挂在大厅正上方。' },
      { id: 'moscow_story_teapot', name: '茶炊与"慢饮"文化', icon: '🫖', desc: '俄罗斯茶炊（Samovar）烧水壶是家庭社交中心。一杯红茶配果酱，可以聊一整个下午。' },
    ],
  });
})();
