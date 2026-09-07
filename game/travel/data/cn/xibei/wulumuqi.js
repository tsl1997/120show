/* ============ 新疆·乌鲁木齐 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'wulumuqi',
    name: '乌鲁木齐',
    country: '中国',
    cc: 'CN',
    province: '新疆',
    flag: '🇨🇳',
    region: '西北',
    hero: '🏔️',
    desc: '亚洲大陆地理中心：大巴扎的烤包子香飘满街，天山天池雪峰倒映博格达，离海最远的大城市却有最甜的瓜果。',
    travel: [{ name: '高铁', icon: '🚄', cost: 1200 }, { name: '飞机', icon: '✈️', cost: 1800 }],
    visa: null,
    spots: [
      { id: 'wulumuqi_dabazha', name: '新疆国际大巴扎', icon: '🏮', price: 0, desc: '世界规模最大巴扎之一，伊斯兰风格塔楼亮眼。干果、艾德莱斯绸、乐器琳琅满目，夜市烤肉香飘三条街。' },
      { id: 'wulumuqi_tianshanchi', name: '天山天池', icon: '🏔️', price: 155, desc: '博格达峰雪水汇成的高山湖泊，"天山明珠"。传说西王母宴请周穆王于此，雪峰、云杉、碧湖同框。' },
      { id: 'wulumuqi_hongshan', name: '红山公园', icon: '⛰️', price: 0, desc: '市区制高点，红山塔立崖巅。登顶看城市全景与博格达雪峰同框，日落时分最壮观。' },
      { id: 'wulumuqi_bowuguan', name: '新疆维吾尔自治区博物馆', icon: '🏺', price: 0, desc: '"楼兰美女"干尸与五星出东方利中国锦护膊。丝路文明荟萃，镇馆之宝件件传奇。' },
      { id: 'wulumuqi_nanshan', name: '南山风景区', icon: '🌲', price: 45, desc: '天山北坡的雪岭云杉牧场。夏天哈萨克牧民的毡房炊烟，骑马走菊花台，冬天滑雪场开板。' },
      { id: 'wulumuqi_shuimogou', name: '水磨沟公园·红光山', icon: '⛲', price: 0, desc: '市区里的清泉峡谷，水磨河冬天不冻。大佛寺香火与温泉，本地人的休闲地。' },
      { id: 'wulumuqi_yelvwenti', name: '国际大巴扎夜市之旅', icon: '🍢', price: 0, desc: '晚上十点太阳才落山的"新疆时间"。烤全羊、缸子肉、卡瓦斯一路吃，夜生活刚开始。' },
    ],
    souvenirs: [
      { id: 'wulumuqi_dapanji', name: '大盘鸡', icon: '🍗', tag: '食', type: '美食', price: 88, desc: '鸡块土豆辣皮子炖到酥烂，皮带面拌进汤汁。"新疆名菜之王"，两人一盘中盘都嫌大。' },
      { id: 'wulumuqi_shaobaozi', name: '烤包子·馕坑肉', icon: '🥟', tag: '食', type: '美食', price: 10, desc: '馕坑贴烤的包子咔嚓爆汁，馕坑肉串比手臂粗。配一瓣生洋葱，维族吃法的豪迈。' },
      { id: 'wulumuqi_shouzhuafan', name: '手抓饭', icon: '🍚', tag: '食', type: '美食', price: 30, desc: '黄萝卜、羊腿肉与大米焖出的金黄抓饭。葡萄干点缀，油润喷香，"新疆的国民饭"。' },
      { id: 'wulumuqi_nang', name: '馕', icon: '🫓', tag: '食', type: '特产', price: 8, desc: '馕坑烤出的"新疆面包"，芝麻洋葱香。馕坑肉、辣皮子馕、玫瑰花酱馕几十种。' },
      { id: 'wulumuqi_kawa', name: '卡瓦斯·酸奶刨冰', icon: '🥤', tag: '食', type: '饮品', price: 10, desc: '蜂蜜发酵的"新疆啤儿"微甜气泡。酸奶刨冰堆成小山，巴扎解暑神器。' },
      { id: 'wulumuqi_guogan', name: '吐鲁番葡萄干·和田大枣', icon: '🍇', tag: '食', type: '特产', price: 50, desc: '绿香妃王葡萄干无核大粒，和田骏枣肉厚甜糯。巴扎干果区砍价乐趣无穷。' },
      { id: 'wulumuqi_baba', name: '切糕（玛仁糖）', icon: '🍬', tag: '食', type: '特产', price: 40, desc: '核桃、葡萄干、玉米饴压制的能量块。按两称重，"实诚又顶饿"的丝路干粮。' },
      { id: 'wulumuqi_aiDeLeiSi', name: '艾德莱斯绸', icon: '🌈', tag: '衣', type: '服饰', price: 120, desc: '扎经染色的"彩虹丝绸"，维族姑娘的裙装面料。围巾与裙子色彩灵动，"丝绸之路上的活化石"。' },
      { id: 'wulumuqi_yingji', name: '英吉沙小刀·铜器', icon: '🗡️', tag: '衣', type: '文创', price: 130, desc: '四百年历史的英吉沙弯刀（工艺摆件）与手工铜壶。巴扎匠人现场錾花，"手艺在刀刃上"。' },
      { id: 'wulumuqi_dongbula', name: '都塔尔·手鼓', icon: '🪕', tag: '衣', type: '文创', price: 150, desc: '维族乐器都塔尔与达甫（手鼓）小件。巴扎琴行里师傅即兴弹一段，音乐就融进血液。' },
      { id: 'wulumuqi_tianshan_hike', name: '天池环湖徒步', icon: '🥾', tag: '玩', type: '体验', price: 100, desc: '天池环湖栈道徒步两小时，云杉倒影随光变化。马队可选上山，"西王母的瑶池"步行巡礼。' },
      { id: 'wulumuqi_nanshan_ride', name: '南山骑马', icon: '🐎', tag: '玩', type: '体验', price: 120, desc: '哈萨克族牧民带骑走菊花台草原。毡房里喝一碗马奶酒，"做半天哈萨克客人"。' },
      { id: 'wulumuji_hotel', name: '大巴扎旁民宿', icon: '🏨', tag: '住', type: '住宿', price: 300, desc: '巴扎步行圈内的民族风情民宿。夜里听着都塔尔琴声入睡，清晨被馕香唤醒。' },
    ],
    stories: [
      { id: 'wulumuqi_story_lihai', name: '离海最远的大城市', icon: '🌍', desc: '乌鲁木齐是亚洲大陆地理中心，距海2500公里。但乌鲁木齐人吃海鲜一样在行，"距离不是问题，馕才是"。' },
      { id: 'wulumuqi_story_shijian', name: '新疆的"北京时间"作息', icon: '🕰️', desc: '新疆用北京时间，但太阳十点才升起。晚上十点吃晚饭是常态，"时差"让游客直呼神奇。' },
      { id: 'wulumuqi_story_wangmu', name: '天池与西王母', icon: '🏔️', desc: '《穆天子传》记载周穆王与西王母宴于瑶池。天池传说即瑶池，博格达峰就是"王母的宫阙"。' },
      { id: 'wulumuqi_story_bazha', name: '巴扎的砍价文化', icon: '💰', desc: '巴扎买东西从三分之一开始砍，老板笑着还价。"不砍价等于白来"，砍完还请你吃葡萄干。' },
      { id: 'wulumuqi_story_nangkeng', name: '馕是"新疆的胃"', icon: '🫓', desc: '新疆人一年吃掉上亿个馕，馕坑一开全街飘香。谚语："可以一日无菜，不可一日无馕。"' },
      { id: 'wulumuqi_story_wuxing', name: '"五星出东方"的传奇', icon: '🧵', desc: '尼雅出土的汉代织锦写着"五星出东方利中国"。2000年前的预言式织锦，被视为国宝中的国宝。' },
    ],
  });
})();
