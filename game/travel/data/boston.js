/* ============ 美国·波士顿 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'boston',
    name: '波士顿',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·东北部',
    hero: '🎓',
    desc: '美国的精神古城：哈佛与 MIT 的学霸之城，自由之路串起独立战争，龙虾卷与蛤蜊浓汤，查尔斯河畔的赛艇清晨。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7400 }, { name: '高铁', icon: '🚄', cost: 7600 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'boston_harvard', name: '哈佛大学', icon: '🎓', price: 0, desc: '1636年建校的"美国思想摇篮"，约翰哈佛铜像摸鞋祈福。图书馆系统全球最大，红砖校园四季皆画。' },
      { id: 'boston_mit', name: 'MIT 麻省理工学院', icon: '🔬', price: 0, desc: '穹顶大厅与"极客大楼"7号楼。Stata 中心歪歪扭扭像"建筑在思考"， hacker 文化的家。' },
      { id: 'boston_freedom', name: '自由之路', icon: '🧱', price: 0, desc: '4公里红砖线串起16处独立战争遗址。从公园到邦克山，"美国历史的步行教学"。' },
      { id: 'boston_harbor', name: '波士顿海港·茶叶党船', icon: '⛵', price: 50, desc: '1773年"波士顿倾茶事件"现场。可以"扔茶叶"互动，出海观鲸船夏季出发。' },
      { id: 'boston_fenway', name: '芬威球场', icon: '⚾', price: 60, desc: '1912年的"棒球圣殿"，红袜队主场。"绿色怪物"左外野墙，美国最老球场。' },
      { id: 'boston_public', name: '波士顿公共花园·公园', icon: '🌿', price: 0, desc: '美国第一座公共植物园，天鹅船百年运营。《爱情故事》取景地，四季皆景。' },
      { id: 'boston_northend', name: '北岸意大利区', icon: '🍝', price: 0, desc: 'Paul Revere 故居与老北教堂。意式咖啡馆与 Cannoli 甜卷，"小意大利"的烟火。' },
    ],
    souvenirs: [
      { id: 'boston_lobster', name: '龙虾卷', icon: '🦞', tag: '食', type: '美食', price: 180, desc: '黄油冷拌龙虾肉塞满黄油烤面包，"新英格兰之魂"。Quincy Market 排队王。' },
      { id: 'boston_clam', name: '蛤蜊浓汤', icon: '🍲', tag: '食', type: '美食', price: 70, desc: '奶油蛤蜊浓汤装在面包碗里。"Chowder"的祖师爷版本，暖到骨头。' },
      { id: 'boston_oyster', name: '牡蛎生蚝拼盘', icon: '🦪', tag: '食', type: '美食', price: 150, desc: '波士顿生蚝吧文化，"半打起配香槟"。Union Oyster House 1826年开业，美国最老餐厅。' },
      { id: 'boston_cream', name: '波士顿奶油派', icon: '🍰', tag: '食', type: '美食', price: 45, desc: '海绵蛋糕+卡仕达+巧克力淋面，"马萨诸塞官方甜点"。Omni Parker House 发明。' },
      { id: 'boston_beans', name: '烘豆·豆汤面包', icon: '🫘', tag: '食', type: '特产', price: 40, desc: '"Bean Town"豆城的糖蜜烘豆。老派新英格兰味道，"波士顿的昵称由来"。' },
      { id: 'boston_harvard_wen', name: '哈佛/MIT 文创', icon: '🎓', tag: '衣', type: '文创', price: 60, desc: '哈佛红卫衣、MIT 铜鼠钥匙扣。"学霸周边"，书店里全都有。' },
      { id: 'boston_redsox', name: '红袜队周边', icon: '🧢', tag: '衣', type: '服饰', price: 120, desc: '红袜队帽"波士顿默认配置"。芬威球场限定款，"Bean Town 的信仰"。' },
      { id: 'boston_tea_wen', name: '茶叶党文创', icon: '🍵', tag: '衣', type: '文创', price: 35, desc: '波士顿倾茶事件茶罐、自由之路印章册。"反抗精神"的纪念。' },
      { id: 'boston_walk', name: '自由之路全程徒步', icon: '🥾', tag: '玩', type: '体验', price: 0, desc: '跟着红砖线走完16站，"2.5小时的美国史"。中文导览 App 可用。' },
      { id: 'boston_whale', name: '出海观鲸', icon: '🐋', tag: '玩', type: '体验', price: 300, desc: '夏季座头鲸与长须鲸出没。船长保证"看到鲸鱼"，"大西洋的震撼"。' },
      { id: 'boston_rowing', name: '查尔斯河皮划艇', icon: '🛶', tag: '玩', type: '体验', price: 120, desc: '划过哈佛桥与大学划船队中间。"The Charles"是波士顿人的生活方式。' },
      { id: 'boston_minsu', name: 'Back Bay 褐石民宿', icon: '🏨', tag: '住', type: '住宿', price: 900, desc: '19世纪褐石联排里的民宿，壁炉与旋转楼梯。"波士顿的优雅"。' },
    ],
    stories: [
      { id: 'boston_story_harvard2', name: '哈佛铜像的"三个谎言"', icon: '🎓', desc: '约翰哈佛铜像刻着：创立者约翰哈佛、1638年——全错。摸鞋祈福导致金鞋被摸亮，"摸的不是历史是迷信"。' },
      { id: 'boston_story_tea2', name: '倾茶事件的"深夜行动"', icon: '🍵', desc: '1773年12月16日，"自由之子"假扮印第安人扔掉342箱茶叶。独立战争的导火索，"最昂贵的茶话会"。' },
      { id: 'boston_story_fenway2', name: '芬威的"绿色怪物"', icon: '⚾', desc: '左外野11米高绿墙，全棒球最难的击球。"站在怪物脚下看球"，百年传统。' },
      { id: 'boston_story_t', name: '美国第一条地铁', icon: '🚇', desc: '1897年波士顿开通美国第一条地铁"T"。"绿线"穿城百年，波士顿人的日常。' },
      { id: 'boston_story_irish', name: '爱尔兰人的波士顿', icon: '🍀', desc: '19世纪爱尔兰大饥荒移民改变波士顿。肯尼迪家族从这里起航，"爱尔兰的美国首都"。' },
      { id: 'boston_story_cream2', name: '奶油派的"官方认证"', icon: '🍰', desc: '1996年马萨诸塞立法：波士顿奶油派为官方甜点。一位立法者说："这不难选，好吃就行。"' },
    ],
  });
})();
