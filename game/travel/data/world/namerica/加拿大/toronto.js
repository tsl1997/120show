/* ============ 加拿大·多伦多 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'toronto',
    name: '多伦多',
    country: '加拿大',
    cc: 'CA',
    flag: '🇨🇦',
    region: '加拿大·东部',
    hero: '🍁',
    desc: '枫叶国的多元之都：CN塔上俯瞰安大略湖，百个民族的美食挤在一条街，秋天枫红时整座城都在燃烧。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7800 }],
    visa: { cost: 750, note: '加拿大访客签证' },
    spots: [
      { id: 'toronto_cntower', name: 'CN塔', icon: '🗼', price: 250, desc: '553米的国家地标，玻璃地板让人腿软。边缘漫步（EdgeWalk）绕塔顶走一圈，"全球最高外沿漫步"。' },
      { id: 'toronto_islands', name: '湖心岛', icon: '⛴️', price: 60, desc: '渡轮十五分钟到无车小岛，沙滩与野餐草坪。回头望是多伦多天际线，"最美的城市合影点"。' },
      { id: 'toronto_ripley', name: '瑞普利水族馆', icon: '🦈', price: 220, desc: '北美最大室内水族馆之一，鲨鱼隧道里"头顶游过鲨鱼"。与CN塔相连，雨天备选方案的一流选项。' },
      { id: 'toronto_casa_loma', name: '卡萨罗马城堡', icon: '🏰', price: 180, desc: '北美唯一的完整城堡，秘密通道与塔楼可以爬。X战警拍摄地，花园玫瑰开满夏天。' },
      { id: 'toronto_stlawrence', name: '圣劳伦斯市场', icon: '🛒', price: 0, desc: '两百年的老市场，"世界最佳食品市场"榜常客。培根三明治"Peameal"是招牌，摊主都让你先尝。' },
      { id: 'toronto_kenington', name: '肯辛顿市场', icon: '🎨', price: 0, desc: '波西米亚街区，古着店、香料铺、咖啡馆挤满巷子。秋天的"行人星期天"，整条街变成街头音乐节。' },
      { id: 'toronto_niagara', name: '尼亚加拉大瀑布一日', icon: '🌊', price: 300, desc: '一个半小时车程外的世界奇观，水雾冲天百米。"雾中少女"号游船开进瀑布心脏，雨衣也挡不住震撼。' },
    ],
    souvenirs: [
      { id: 'toronto_peameal', name: '培根三明治', icon: '🥪', tag: '食', type: '美食', price: 45, desc: '裹玉米面的"多伦多培根"煎香夹面包。市场里的 Carousel 老摊，一口下去全是肉。' },
      { id: 'toronto_poutine', name: '普丁（肉汁奶酪薯条）', icon: '🍟', tag: '食', type: '美食', price: 60, desc: '薯条浇肉汁铺奶酪凝块，"加拿大卡路里炸弹"。深夜的一碗，暖到灵魂。' },
      { id: 'toronto_maple', name: '枫糖浆·枫糖饼', icon: '🍁', tag: '食', type: '特产', price: 80, desc: '纯枫糖浆浇在热煎饼上，"枫叶国液体黄金"。雪地枫糖棒棒糖是冬季限定。' },
      { id: 'toronto_beaver', name: '海狸尾巴甜饼', icon: '🦫', tag: '食', type: '美食', price: 40, desc: '形状像海狸尾巴的油炸面饼，撒肉桂糖或枫糖。国民吉祥物变成了甜点，"好吃又爱国"。' },
      { id: 'toronto_maple_tea', name: '枫糖拿铁', icon: '☕', tag: '食', type: '饮品', price: 50, desc: '枫糖浆入咖啡是加拿大秋冬标配。咖啡馆里的"枫叶拉花"，甜度自己调。' },
      { id: 'toronto_ice_wine', name: '冰酒', icon: '🍷', tag: '食', type: '特产', price: 250, desc: '零下八度采摘冰冻葡萄酿的甜酒，"液体黄金"。尼亚加拉酒庄参观，一小瓶价值不菲。' },
      { id: 'toronto_jersey', name: '枫叶队冰球周边', icon: '🏒', tag: '衣', type: '文创', price: 350, desc: '加拿大国球冰球的队服与冰球杆。Scotiabank 球馆看一场比赛，"全国都会停下来的运动"。' },
      { id: 'toronto_maple_cookie', name: '枫叶饼干·枫糖奶油', icon: '🍪', tag: '衣', type: '文创', price: 60, desc: '枫叶形状的枫糖夹心饼干，机场手信区第一名。红枫叶包装，"加拿大"两个字直接印在饼干上。' },
      { id: 'toronto_subway', name: '地铁与街车体验', icon: '🚋', tag: '行', type: '体验', price: 25, desc: '红色长街车是城市名片，一张票两小时自由换乘。地铁广播英语法语轮播，"双语国家的日常"。' },
      { id: 'toronto_kayak', name: '湖上皮划艇', icon: '🛶', tag: '玩', type: '体验', price: 180, desc: '安大略湖上划皮划艇，从湖面看CN塔。傍晚出发，追着日落划回码头。' },
      { id: 'toronto_skating', name: '市政厅前冰场', icon: '⛸️', tag: '玩', type: '体验', price: 40, desc: '冬天市政厅广场免费滑冰，"多伦多的冬日社交场"。租双冰鞋就能加入，摔了也是风景。' },
      { id: 'toronto_hotel', name: '湖景酒店', icon: '🏨', tag: '住', type: '住宿', price: 800, desc: '安大略湖景房，窗外CN塔亮灯。加拿大酒店空间大，泡杯枫糖茶看湖面落日。' },
    ],
    stories: [
      { id: 'toronto_story_multicultural', name: '全球最多元的城市', icon: '🌍', desc: '多伦多一半居民出生在外国，140多种语言在街头流通。唐人街、小意大利、希腊城……"世界在这里排队入境"。' },
      { id: 'toronto_story_maple', name: '枫糖浆的"国家战略"', icon: '🍁', desc: '加拿大供应全球七成枫糖浆，魁北克有"全球枫糖战略储备库"。枫糖浆在加拿大地位堪比石油。' },
      { id: 'toronto_story_beaver', name: '海狸是"国家工程师"', icon: '🦫', desc: '海狸出现在加拿大硬币上，是勤奋与建设的象征。游客举着海狸尾巴甜饼合影，"甜点的爱国方式"。' },
      { id: 'toronto_story_hockey', name: '冰球不只是运动', icon: '🏒', desc: '加拿大孩子学会走路就上冰场，冰球是"国民信仰"。国家队赢美国那天，全国酒吧都在唱歌。' },
      { id: 'toronto_story_niagara', name: '瀑布的"蜜月之城"', icon: '💍', desc: '尼亚加拉瀑布城曾被称为"世界蜜月之都"，婚礼产业一百多年。水雾里常有彩虹，"天然的婚纱背景"。' },
      { id: 'toronto_story_winter', name: '-20度的"户外咖啡"', icon: '❄️', desc: '多伦多冬天能到零下二十度，露天咖啡座照样有人。本地人穿短袖扛外套，"冷是天气，不是生活"。' },
    ],
  });
})();
