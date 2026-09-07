/* ============ 英国·伦敦 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'london',
    name: '伦敦',
    country: '英国',
    cc: 'GB',
    flag: '🇬🇧',
    region: '欧洲',
    hero: '🎡',
    desc: '雾都变晴空：大本钟敲响泰晤士河畔，红电话亭与双层巴士穿行街巷，博物馆免费开放，英伦绅士与摇滚同台。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6200 }, { name: '高铁·欧洲之星', icon: '🚄', cost: 6800 }],
    visa: { cost: 1100, note: '英国标准访客签证' },
    spots: [
      { id: 'london_bigmuseum', name: '大英博物馆', icon: '🏛️', price: 0, desc: '八百万件藏品免费参观：罗塞塔石碑、埃及木乃伊、中国瓷器。一周都看不完，"世界文明的仓库"名不虚传。' },
      { id: 'london_bigben', name: '大本钟·议会大厦', icon: '🕰️', price: 0, desc: '泰晤士河畔的哥特式钟楼，钟声精准得像英国人的手表。威斯敏斯特桥上是最佳机位，红色双层巴士从钟下驶过。' },
      { id: 'london_tower', name: '伦敦塔·塔桥', icon: '🌉', price: 280, desc: '千年王冠珠宝藏在这里，乌鸦传说守护王国。塔桥开桥让大船通过时，全桥人都在举手机。' },
      { id: 'london_eye', name: '伦敦眼', icon: '🎡', price: 200, desc: '135米泰晤士河畔的巨型摩天轮，转一圈三十分钟。透明舱里看大本钟和金融城天际线，"城市在他脚下旋转"。' },
      { id: 'london_buckingham', name: '白金汉宫换岗', icon: '👑', price: 0, desc: '上午十一点的红衣卫兵换岗仪式，鼓乐与黑熊皮帽同框。人群举着手机等"高帽卫兵转身"，英式严谨全在这里。' },
      { id: 'london_camden', name: '卡姆登市集', icon: '🎸', price: 0, desc: '朋克文化发源地之一的市集，皮衣、黑胶、异域小吃。运河边的"彩绘门面"，随手一拍都是英伦街拍。' },
      { id: 'london_greenwich', name: '格林威治天文台', icon: '🌐', price: 130, desc: '本初子午线在这里，一脚东半球一脚西半球。天文台山顶俯瞰金丝雀码头金融城，时间从这里"出发"。' },
    ],
    souvenirs: [
      { id: 'london_fishchips', name: '炸鱼薯条', icon: '🍟', tag: '食', type: '美食', price: 70, desc: '啤酒糊炸鳕鱼配粗薯条，撒盐浇麦芽醋。传统报纸包装，海风里吃才够英伦。' },
      { id: 'london_breakfast', name: '英式早餐', icon: '🍳', tag: '食', type: '美食', price: 90, desc: '煎蛋、培根、香肠、烤番茄、焗豆、蘑菇摆满一盘。一杯英式红茶下肚，全套英式名不虚传。' },
      { id: 'london_afternoon', name: '下午茶', icon: '🫖', tag: '食', type: '美食', price: 280, desc: '三层塔点心架：黄瓜三明治、司康配凝脂奶油、甜点。百年老酒店里学"先倒茶后加奶"，礼仪小姐全程服务。' },
      { id: 'london_pie', name: '英式牛肉派', icon: '🥧', tag: '食', type: '美食', price: 60, desc: '酥皮牛肉派配肉汁与豌豆泥。酒馆里"派与啤酒"组合，暖胃又管饱。' },
      { id: 'london_tea', name: '英式红茶', icon: '🍵', tag: '食', type: '特产', price: 60, desc: 'Fortnum & Mason 的伯爵茶罐金色印花。百年茶铺的礼盒，"英伦下午"回家慢慢泡。' },
      { id: 'london_whisky', name: '苏格兰威士忌', icon: '🥃', tag: '食', type: '特产', price: 220, desc: '单一麦芽威士忌在酒馆里按杯品鉴。高地泥煤味的"液体黄金"，免税店买整瓶更划算。' },
      { id: 'london_phonebooth', name: '红电话亭·巴士文创', icon: '☎️', tag: '衣', type: '文创', price: 45, desc: '红色电话亭钥匙扣、双层巴士模型。英伦三宝"红亭、红巴、黑伞"，冰箱贴全家福。' },
      { id: 'london_umbrella', name: '绅士雨伞', icon: '☂️', tag: '衣', type: '服饰', price: 150, desc: '手工钩骨伞经百年风雨，伦敦人拿伞当配饰。黑色长柄伞配大衣，"绅士感"直接拉满。' },
      { id: 'london_tube_pass', name: '地铁Oyster卡', icon: '🚇', tag: '行', type: '体验', price: 40, desc: '"Mind the gap"（小心空隙）广播一百多年没换。地铁地图像彩色蜘蛛网，坐两次就熟。' },
      { id: 'london_abbey', name: '哈利波特影城', icon: '🧙', tag: '玩', type: '体验', price: 320, desc: '华纳片场的对角巷、九又四分之三站台原景。黄油啤酒是"无酒精姜汁汽水"，魔杖墙前人人会魔法。' },
      { id: 'london_punk', name: '西区音乐剧', icon: '🎭', tag: '玩', type: '体验', price: 350, desc: '《歌剧魅影》《狮子王》在西区连演几十年。当天去折扣票亭买票，伦敦之夜从大幕拉开开始。' },
      { id: 'london_hotel', name: '泰晤士景酒店', icon: '🏨', tag: '住', type: '住宿', price: 850, desc: '窗外是伦敦眼与河畔灯火。英伦酒店的"下午茶服务"直接送到房间，悠长得像老电影。' },
    ],
    stories: [
      { id: 'london_story_mind', name: '"Mind the Gap"的百年广播', icon: '🚇', desc: '伦敦地铁这句"小心空隙"喊了一百多年，甚至有人专门录下老伴的录音循环播放。英式浪漫藏在站台里。' },
      { id: 'london_story_crow', name: '伦敦塔的乌鸦传说', icon: '🐦‍⬛', desc: '传说乌鸦飞走王国就会倒塌，于是塔里养着六只"官方乌鸦"，有专属饲养员，翅膀还会定期修剪。' },
      { id: 'london_story_rain', name: '伦敦的"四季一天"', icon: '🌦️', desc: '伦敦一天能经历晴雨雾风，本地人出门永远带伞。"不是雨大，是伞小"成了伦敦人的自嘲。' },
      { id: 'london_story_free', name: '免费的博物馆哲学', icon: '🏛️', desc: '大英博物馆、国家美术馆全部免费，靠"建议捐赠"运营。伦敦人说：文化是公共财产，不该设门槛。' },
      { id: 'london_story_beatles', name: ' Abbey Road 的斑马线', icon: '🎸', desc: '披头士专辑封面的过马路斑马线成了朝圣地，游客排着队模仿四人行走。斑马线旁的录音棚还在营业。' },
      { id: 'london_story_queen', name: '卫兵的"扑克脸"', icon: '👑', desc: '红衣卫兵面对游客做鬼脸、挡路挑逗都纹丝不动。据说绷不住笑的卫兵会被加练，扑克脸是职业素养。' },
    ],
  });
})();
