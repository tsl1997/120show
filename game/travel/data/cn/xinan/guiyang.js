/* ============ 贵州·贵阳 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'guiyang',
    name: '贵阳',
    country: '中国',
    cc: 'CN',
    province: '贵州',
    flag: '🇨🇳',
    region: '西南',
    hero: '🌉',
    desc: '"爽爽的贵阳"：高原凉都夏天20度，酸汤鱼开胃醒神，黄果树瀑布与千户苗寨从这里出发，大数据之城也有最辣的烟火。',
    travel: [{ name: '高铁', icon: '🚄', cost: 400 }, { name: '飞机', icon: '✈️', cost: 700 }],
    visa: null,
    spots: [
      { id: 'guiyang_qianling', name: '黔灵山公园', icon: '🐒', price: 5, desc: '市中心的"天然动物园"，猕猴成群下山"抢镜"。弘福寺香火与麒麟洞历史，五块钱的快乐。' },
      { id: 'guiyang_jiaxiu', name: '甲秀楼·文昌阁', icon: '🏮', price: 0, desc: '南明河上的甲秀楼"科甲挺秀"四百年。夜里灯光倒映，贵阳的"城市封面"。' },
      { id: 'guiyang_qingyan', name: '青岩古镇', icon: '🏘️', price: 60, desc: '明代军事古镇，石头城墙与背街教堂同框。状元蹄与玫瑰糖，"贵州最有味道的古镇"。' },
      { id: 'guiyang_tianhetan', name: '天河潭', icon: '🏞️', price: 65, desc: '溶洞、瀑布、峡谷合一的"黔中一绝"。坐船钻溶洞，出洞见瀑布，"山水盲盒"。' },
      { id: 'guiyang_huaxi', name: '花溪十里河滩', icon: '🌿', price: 0, desc: '花溪河蜿蜒十里，骑行绿道穿行湿地。巴金与萧珊在此度蜜月，"花溪的时间很慢"。' },
      { id: 'guiyang_shuweizhai', name: '阿哈湖·观山湖夜跑', icon: '🌙', price: 0, desc: '观山湖公园夜跑与湖畔灯光，"贵阳的新城绿肺"。大数据城的年轻人在这里撸串夜聊。' },
      { id: 'guiyang_huangguoshu', name: '黄果树瀑布一日游', icon: '🌊', price: 320, desc: '亚洲最大瀑布，水帘洞能"穿越"到瀑布背后。86版《西游记》取景地，水雾扑面如雨。' },
    ],
    souvenirs: [
      { id: 'guiyang_suantangyu', name: '酸汤鱼', icon: '🐟', tag: '食', type: '美食', price: 88, desc: '红酸汤发酵番茄熬底，酸辣开胃。"三天不吃酸，走路打蹿蹿"，配折耳根蘸水正宗。' },
      { id: 'guiyang_laozao', name: '肠旺面·丝娃娃', icon: '🍜', tag: '食', type: '美食', price: 20, desc: '肠旺面"肥肠+血旺"红油喷香。丝娃娃是"贵州春卷"：薄皮卷十几种素菜，蘸水是灵魂。' },
      { id: 'guiyang_laozhigan', name: '折耳根宇宙', icon: '🌿', tag: '食', type: '美食', price: 15, desc: '折耳根炒腊肉、蘸水、凉拌全套。"贵州人的乡愁密码"，外地人挑战失败率90%。' },
      { id: 'guiyang_lada', name: '老干妈', icon: '🌶️', tag: '食', type: '特产', price: 25, desc: '风靡全球的"国民辣酱"老家就在贵阳。辣子鸡油辣椒拌饭，"一瓶顶半桌"。' },
      { id: 'guiyang_baodu', name: '恋爱豆腐果·烤洋芋', icon: '🥟', tag: '食', type: '美食', price: 8, desc: '豆腐果烤到爆浆夹折耳根辣椒。街边烤洋芋蘸辣椒面，"贵阳的恋爱味道"。' },
      { id: 'guiyang_maojian', name: '都匀毛尖·湄潭翠芽', icon: '🍵', tag: '食', type: '特产', price: 80, desc: '贵州高山绿茶"三绿透黄底"。茶香清幽，"云雾出好茶"。' },
      { id: 'guiyang_yinhe', name: '苗银·蜡染', icon: '🧵', tag: '衣', type: '文创', price: 120, desc: '苗族银饰叮当，蜡染蓝白纹样如青花。苗家手工围巾与画布，"穿在身上的史书"。' },
      { id: 'guiyang_zhima', name: '刺梨制品', icon: '🍐', tag: '食', type: '特产', price: 45, desc: '贵州刺梨维C之王，果汁与刺梨干酸甜。,"维C炸弹"的健康伴手礼。' },
      { id: 'guiyang_hudie', name: '夜市烙锅之旅', icon: '🍢', tag: '玩', type: '体验', price: 60, desc: '贵州烙锅"什么都能烙"，蘸五香辣椒面。二七路小吃街走一圈，"夜宵江湖"酸辣鲜香。' },
      { id: 'guiyang_shuikuai', name: '漂流·清水河峡谷', icon: '🚣', tag: '玩', type: '体验', price: 180, desc: '贵州是"漂流大省"，开阳清水河刺激段。皮筏冲滩尖叫连连，夏天避暑首选。' },
      { id: 'guiyang_miao', name: '西江千户苗寨一日', icon: '🏘️', tag: '玩', type: '体验', price: 250, desc: '全球最大苗寨，千户灯夜景如星河。拦门酒、长桌宴、芦笙场，"苗族文化全景"。' },
      { id: 'guiyang_minsu', name: '青岩古镇民宿', icon: '🏨', tag: '住', type: '住宿', price: 250, desc: '石头古镇里的院落民宿，夏夜凉风盖被。清晨被鸡鸣与豆浆香叫醒。' },
    ],
    stories: [
      { id: 'guiyang_story_shuang', name: '"爽爽的贵阳"有多爽', icon: '🌡️', desc: '贵阳夏均气温23度，"中国避暑之都"。七月重庆40度时，贵阳人盖被子睡觉。' },
      { id: 'guiyang_story_suan', name: '酸汤的"发酵哲学"', icon: '🍲', desc: '贵州山高缺盐，苗家人用发酵酸汤代替盐味。一锅酸汤鱼，藏着民族迁徙史。' },
      { id: 'guiyang_story_da', name: '大数据为什么选贵阳', icon: '💻', desc: '气候凉、电力足、地质稳，贵阳成了"中国数谷"。苹果、腾讯的数据中心藏在山洞里。' },
      { id: 'guiyang_story_zhe', name: '折耳根的"爱恨情仇"', icon: '🌿', desc: '鱼腥草是贵州人的"本命菜"，外地人闻风丧胆。本地人：不吃折耳根，不算到贵州。' },
      { id: 'guiyang_story_qiao', name: '世界桥梁看贵州', icon: '🌉', desc: '世界前100座高桥近半在贵州，"桥梁博物馆"。坝陵河大桥可以蹦极，370米"亚洲第一"。' },
      { id: 'guiyang_story_jiu', name: '茅台镇的酒香', icon: '🍶', desc: '贵州茅台镇赤水河畔酱香酒飘香千年。"离开茅台镇酿不出茅台酒"——微生物群的魔法。' },
    ],
  });
})();
