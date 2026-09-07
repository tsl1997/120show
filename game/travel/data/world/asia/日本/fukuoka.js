/* ============ 日本·福冈 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'fukuoka',
    name: '福冈',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·九州',
    hero: '🍜',
    desc: '九州门户·屋台之都：中洲屋台的小拉面摊飘着热气，豚骨拉面的故乡，太宰府的梅香与稻荷神社，九州美食的心脏。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2400 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'fukuoka_yatai', name: '中洲屋台街', icon: '🏮', price: 60, desc: '福冈有全国最多的路边摊，傍晚推车出摊。坐在帘子边喝一杯，"拉面爷爷"的深夜温柔。' },
      { id: 'fukuoka_dazaifu', name: '太宰府天满宫', icon: '⛩️', price: 0, desc: '学问之神菅原道真的总本社，考生必拜。梅枝饼与飞梅传说，表参道 shops 飘着甜香。' },
      { id: 'fukuoka_ohori', name: '大濠公园·福冈城迹', icon: '⛲', price: 0, desc: '仿西湖而建的水池公园，划船慢悠悠。福冈城"舞鹤城"石垣，樱花季夜樱点灯。' },
      { id: 'fukuoka_canal', name: '博多运河城', icon: '🛍️', price: 0, desc: '"运河中的商业城"，喷泉秀每小时上演。拉面竞技场里有全国名店，"拉面的宇宙中心"。' },
      { id: 'fukuoka_yanagawa', name: '柳川游船', icon: '🛶', price: 100, desc: '"水都柳川"的川下舟游，船夫唱歌撑篙。蒸笼鳗鱼饭是柳川名物，"水乡的下午"。' },
      { id: 'fukuoka_mojiko', name: '门司港怀旧区', icon: '🚉', price: 0, desc: '大正风红砖火车站，"九州铁道纪念馆"。关门海峡对岸就是本州，蓝翼吊桥开合。' },
      { id: 'fukuoka_tower', name: '福冈塔·Fukuoka PayPay Dome', icon: '🗼', price: 40, desc: '镜面玻璃塔映着博多湾。 PayPay Dome 软银鹰主场，棒球夜一片黄。' },
    ],
    souvenirs: [
      { id: 'fukuoka_tonkotsu', name: '博多豚骨拉面', icon: '🍜', tag: '食', type: '美食', price: 45, desc: '乳白豚骨汤一泽如丝，"替玉"免费加面。一兰总本店、豚骨拉面の発祥地，"博多的灵魂"。' },
      { id: 'fukuoka_motsunabe', name: 'もつ锅（牛杂锅）', icon: '🍲', tag: '食', type: '美食', price: 100, desc: '牛杂与韭菜在酱油汤里翻滚。最后加乌冬面"收尾"，博多冬天的仪式。' },
      { id: 'fukuoka_mentaiko', name: '明太子', icon: '🌶️', tag: '食', type: '特产', price: 60, desc: '辣味鳕鱼子是福冈代名词。明太子意面、饭团、煎蛋，"带回国的手信之王"。' },
      { id: 'fukuoka_umegae', name: '梅枝饼', icon: '🥮', tag: '食', type: '美食', price: 8, desc: '太宰府表参道现烤红豆饼，印着梅枝纹。烫手也忍不住，"学问之神的甜点"。' },
      { id: 'fukuoka_hakataori', name: '博多织', icon: '🧣', tag: '衣', type: '服饰', price: 120, desc: '770年历史的细密织带，"献上柄"纹样。腰带与领带，九州传统工艺。' },
      { id: 'fukuoka_hakata', name: '博多人形', icon: '🧑‍🎨', tag: '衣', type: '文创', price: 150, desc: '素陶彩绘人形细腻如真。舞伎、能剧人形，"九州工艺品之王"。' },
      { id: 'fukuoka_rou', name: '防府天满宫·吉野里文创', icon: '🏛️', tag: '衣', type: '文创', price: 45, desc: '吉野里遗迹弥生时代文创、门司港复古杂货。九州历史的小件收藏。' },
      { id: 'fukuoka_ramen_tie', name: '拉面工场体验', icon: '👨‍🍳', tag: '玩', type: '体验', price: 100, desc: '亲手做一碗豚骨拉面，擀面调汤。自己做的"博多流"，带配方回家。' },
      { id: 'fukuoka_baseball', name: 'PayPay Dome 棒球观赛', icon: '⚾', tag: '玩', type: '体验', price: 250, desc: '软银鹰主场比赛，"应援歌+气球雨"。福冈的夜晚从球场的欢呼声开始。' },
      { id: 'fukuoka_yanagawa2', name: '柳川蒸笼鳗鱼饭', icon: '🍱', tag: '玩', type: '体验', price: 150, desc: '蒸笼鳗鱼饭"三段吃法"。坐船+鳗鱼饭套餐，"柳川的标准下午"。' },
      { id: 'fukuoka_tower_night', name: '福冈塔夜景+百道海滨', icon: '🌃', tag: '行', type: '体验', price: 40, desc: '海滨公园夜跑，塔上俯瞰博多湾。"福冈的现代海岸线"。' },
      { id: 'fukuoka_minsu', name: '天神商圈酒店', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '天神地下街直达的酒店，购物拉面两不误。深夜屋台步行可达。' },
    ],
    stories: [
      { id: 'fukuoka_story_yatai', name: '屋台的"深夜温柔"', icon: '🏮', desc: '福冈屋台高峰期上千摊，如今约百摊。拉面爷爷记得熟客口味，"一个摊就是一个江湖"。' },
      { id: 'fukuoka_story_mentaiko', name: '明太子不是日本原产', icon: '🌶️', desc: '明太子源自朝鲜半岛"明太"（黄线狭鳕）。福冈人腌渍成辣味明太子，如今是博多手信之王。' },
      { id: 'fukuoka_story_tobei', name: '太宰府的"飞梅传说"', icon: '🌸', desc: '菅原道真被贬太宰府，爱梅从京都"飞来"相随。"飞梅"神木至今开花，考试季人山人海。' },
      { id: 'fukuoka_story_kawa', name: '运河城的"水与商业"', icon: '🛍️', desc: '运河城把真实运河搬进商场，喷泉秀配合音乐。"逛街像游船"，建筑师的奇思。' },
      { id: 'fukuoka_story_lamen', name: '拉面竞技场的"全国大乱斗"', icon: '🍜', desc: '博多运河城的拉面竞技场集合全国名店。"一周吃遍日本"的拉面梦想，在福冈就能实现。' },
      { id: 'fukuoka_story_mojiko', name: '门司港的"香蕉梦"', icon: '🍌', desc: '大正时代门司港是亚洲香蕉进口第一港。"香蕉喊价"如今是怀旧表演，成交价便宜到笑。' },
    ],
  });
})();
