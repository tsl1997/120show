/* ============ 山西·平遥 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'pingyao',
    name: '平遥',
    country: '中国',
    cc: 'CN',
    province: '山西',
    flag: '🇨🇳',
    region: '华北',
    hero: '🏦',
    desc: '世界遗产古城：2700年的城墙围住明清街巷，日昇昌票号开中国银行之先河，一座"活着"的古代县城。',
    travel: [{ name: '高铁', icon: '🚄', cost: 560 }, { name: '飞机', icon: '✈️', cost: 800 }],
    visa: null,
    spots: [
      { id: 'pingyao_gucheng', name: '平遥古城', icon: '🏯', price: 125, desc: '世界文化遗产，中国保存最完整的明清县城。登城墙俯瞰青瓦四合院，市楼居中，龟城格局六百年未变。' },
      { id: 'pingyao_rishengchang', name: '日昇昌票号', icon: '🏦', price: 0, desc: '中国第一家票号，"汇通天下"从这里开始。密押制度防伪一绝，中国现代银行的"乡下祖父"。' },
      { id: 'pingyao_xianya', name: '平遥县衙', icon: '⚖️', price: 0, desc: '保存最完整的古县衙，"亲民堂"匾额高悬。每天有县太爷升堂表演，一路参观牢狱与粮仓。' },
      { id: 'pingyao_wenmiao', name: '文庙·城隍庙', icon: '🛕', price: 0, desc: '文庙大成殿金代原构，城隍庙琉璃瓦生辉。一文一武一庙一衙，古城的"精神配套"齐全。' },
      { id: 'pingyao_biaolü', name: '华北第一镖局', icon: '🛡️', price: 0, desc: '镖局博物馆还原走镖现场：镖车、兵器、密语。看一场镖师武术表演，武侠片照进现实。' },
      { id: 'pingyao_yamen_ye', name: '古城墙夜景', icon: '🌙', price: 0, desc: '入夜城墙灯光亮起，红灯笼挂满街巷。站在城墙上望古城灯火，明清夜色扑面而来。' },
      { id: 'pingyao_yingxiang', name: '《又见平遥》演出', icon: '🎭', price: 238, desc: '沉浸式情境剧，观众"走进"镖师 story。讲一个"镖师殉镖、血脉归来"的故事，看完眼眶发热。' },
    ],
    souvenirs: [
      { id: 'pingyao_niurou', name: '平遥牛肉', icon: '🥩', tag: '食', type: '特产', price: 60, desc: '"肥而不腻、瘦而不柴"，明清就是贡品。冠云牌真空装是手信标配，一刀切开满屋香。' },
      { id: 'pingyao_wandietuze', name: '碗托', icon: '🥣', tag: '食', type: '美食', price: 8, desc: '荞面糊蒸成的碗托，凉拌浇醋辣汁。平遥人"碗托配烧饼"的经典早餐，滑韧爽口。' },
      { id: 'pingyao_cuyuan', name: '山西老陈醋', icon: '🫙', tag: '食', type: '特产', price: 45, desc: '醋园里看"蒸酵熏淋陈"五步工艺。五年陈酿酸香绵长，"家家有醋缸"的山西味道。' },
      { id: 'pingyao_shaomai', name: '平遥牛肉面·擦圪蚪', icon: '🍜', tag: '食', type: '美食', price: 15, desc: '擦圪蚪是山西面食"面鱼"，浇牛肉臊子。古城小馆一碗，粗粮香气直往鼻子里钻。' },
      { id: 'pingyao_hongyin', name: '洪武记·长山药', icon: '🌱', tag: '食', type: '特产', price: 35, desc: '平遥长山药是贡品级食材，蜜汁山药甜糯滋补。药食同源的"平遥人参"。' },
      { id: 'pingyao_tuiqi', name: '平遥推光漆器', icon: '🖌️', tag: '衣', type: '文创', price: 180, desc: '手掌推光、描金彩绘的国家级非遗漆器。首饰盒与屏风温润如玉，"山西三宝"之一。' },
      { id: 'pingyao_chuanghua', name: '剪纸·纱阁戏人', icon: '✂️', tag: '衣', type: '文创', price: 40, desc: '窗花剪纸贴出晋中民俗，纱阁戏人是"微型戏台"。小件便宜好带，手艺全是老的。' },
      { id: 'pingyao_yinliang', name: '票号文创·银票', icon: '🧾', tag: '衣', type: '文创', price: 25, desc: '复刻日昇昌汇票做成的书签与存单。写上自己名字"存银一万两"，拍照界的理财鬼才。' },
      { id: 'pingyao_sheying', name: '古装旅拍', icon: '📸', tag: '玩', type: '体验', price: 200, desc: '穿晋商少奶奶装在古城拍写真，大红灯笼作背景。"晋商大院风"写真出片率全国前列。' },
      { id: 'pingyao_kang', name: '土炕客栈一晚', icon: '🏨', tag: '住', type: '住宿', price: 260, desc: '百年四合院客栈，睡一晚北方土炕。清晨被鸽哨叫醒，院里大爷提笼遛鸟。' },
      { id: 'pingyao_gucheng_ye2', name: '酒吧街小酌', icon: '🍺', tag: '玩', type: '体验', price: 60, desc: '古城夜里的安静酒吧，民谣配汾酒。青砖墙上爬满藤蔓，一夜古今穿越。' },
      { id: 'pingyao_zixingche', name: '城外双林寺·镇国寺包车', icon: '🚗', tag: '行', type: '体验', price: 120, desc: '包车去双林寺看"东方彩塑艺术宝库"，韦驮像天下闻名。两寺是平遥古城世界遗产的"双子星"。' },
    ],
    stories: [
      { id: 'pingyao_story_piaohao', name: '票号怎么防伪', icon: '🔐', desc: '日昇昌用一首诗做密押：每个字对应数字与日期，汇票无一差错。一百多年的"加密技术"，堪称古代区块链。' },
      { id: 'pingyao_story_guicheng', name: '龟城的讲究', icon: '🐢', desc: '平遥城墙六座城门，南门像龟头、北门像龟尾，"长寿之城"。街道如龟纹，寓意固若金汤。' },
      { id: 'pingyao_story_jinshang', name: '晋商的规矩', icon: '📜', desc: '晋商学徒三年不许回家、不许带家眷。严格的号规造就"汇通天下"五百年的商业传奇。' },
      { id: 'pingyao_story_yingzhan', name: '平遥国际摄影展', icon: '📷', desc: '2001年起每年九月全球摄影师齐聚平遥。老城墙配上当代影像，"最古典与最先锋同框"。' },
      { id: 'pingyao_story_kang', name: '土炕的智慧', icon: '🔥', desc: '晋北冬夜零下十几度，土炕连着灶台一烧全暖。客栈老板说："睡炕不腰疼，是老辈人的理疗。"' },
      { id: 'pingyao_story_xianya', name: '县衙里的"避贪碑"', icon: '⚖️', desc: '县衙里立着劝廉碑，警示官员"尔俸尔禄，民膏民脂"。古代公务员的廉政教育，比想象的严格。' },
    ],
  });
})();
