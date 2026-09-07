/* ============ 黑龙江·漠河 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'mohe',
    name: '漠河',
    country: '中国',
    cc: 'CN',
    province: '黑龙江',
    flag: '🇨🇳',
    region: '东北',
    hero: '🌌',
    desc: '中国最北的城市：北极村的"找北"之旅，零下50度的极寒体验，白夜的星空与可能的极光，"去漠河，找到北"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1900 }, { name: '火车', icon: '🚂', cost: 900 }],
    visa: null,
    spots: [
      { id: 'mohe_beijicun', name: '北极村', icon: '🏠', price: 68, desc: '中国最北的村庄，"我找到北了"石碑排队合影。最北邮局寄一张明信片，盖上"中国最北"邮戳。' },
      { id: 'mohe_beihong', name: '北红村', icon: '🏘️', price: 60, desc: '比北极村更北的原生态村落， 俄式木刻楞。江对岸就是俄罗斯，冬夜星空银河肉眼可见。' },
      { id: 'mohe_jiulong', name: '九曲十八弯', icon: '🌅', price: 50, desc: '额木尔河在湿地画出九曲十八弯。观景台看日出，晨雾中河道如银色绸带。' },
      { id: 'mohe_baiye', name: '白桦林·观音山', icon: '🌲', price: 40, desc: '万亩白桦林"每一棵都出片"。观音山"北极林海观音"圣像高10.8米，与海南南山观音南北呼应。' },
      { id: 'mohe_568', name: '最北邮局·最北哨所', icon: '📮', price: 0, desc: '在中国最北哨所向执勤士兵致敬。最北邮局寄出的信要"走最久的路"。' },
      { id: 'mohe_xianshan', name: '圣诞村·驯鹿园', icon: '🦌', price: 50, desc: '芬兰圣诞老人常驻的"中国圣诞村"。驯鹿园喂驯鹿苔藓，鄂温克族最后的驯鹿部落。' },
      { id: 'mohe_jiguang', name: '极光观测·白夜', icon: '🌌', price: 0, desc: '夏至前后"白夜"天不黑，极光概率全年最高。零下30度的冬夜星空，银河清晰到震撼。' },
    ],
    souvenirs: [
      { id: 'mohe_dongbei_cai', name: '小鸡炖蘑菇·杀猪菜', icon: '🍲', tag: '食', type: '美食', price: 60, desc: '东北菜在漠河格外香，铁锅炖江鱼配贴饼子。零下30度屋里20多度，"屋里穿短袖吃锅"。' },
      { id: 'mohe_lengmian', name: '冷水鱼·江鱼宴', icon: '🐟', tag: '食', type: '美食', price: 120, desc: '黑龙江冷水鱼肉紧味鲜，"炖江鱼"是待客硬菜。鱼籽酱蘸饼，北国江鲜。' },
      { id: 'mohe_lie', name: '蓝莓·红豆制品', icon: '🫐', tag: '食', type: '特产', price: 50, desc: '大兴安岭野生蓝莓与北国红豆。蓝莓酒、蓝莓干，"极地浆果"。' },
      { id: 'mohe_mogu', name: '榛蘑·灵芝', icon: '🍄', tag: '食', type: '特产', price: 80, desc: '大兴安岭野生榛蘑炖小鸡是"东北名菜之源"。灵芝与黑木耳，山货 hardened。' },
      { id: 'mohe_xunlu', name: '驯鹿周边·鄂温克文创', icon: '🦌', tag: '衣', type: '文创', price: 60, desc: '驯鹿角（合法工艺制品）钥匙扣、鄂温克桦树皮画。最后的驯鹿部落手作。' },
      { id: 'mohe_beiji', name: '"找北"文创', icon: '🧭', tag: '衣', type: '文创', price: 35, desc: '最北邮局明信片、"我找到北了"T恤。北极村限定，"北"字冰箱贴全家桶。' },
      { id: 'mohe_guang', name: '极光主题文创', icon: '🌠', tag: '衣', type: '文创', price: 40, desc: '极光配色围巾、星空星空瓶。"没看到极光？把极光戴走"。' },
      { id: 'mohe_bingxue', name: '泼水成冰体验', icon: '❄️', tag: '玩', type: '体验', price: 30, desc: '零下40度泼热水成冰雾，"东北魔法"。视频一定要慢动作，"泼水成冰教学现场"。' },
      { id: 'mohe_xuexiang', name: '马拉爬犁·雪地摩托', icon: '🛷', tag: '玩', type: '体验', price: 150, desc: '马拉爬犁穿林海，铃铛叮当。雪地摩托冲雪原，"北国雪原拉力赛"。' },
      { id: 'mohe_yuzhuo', name: '凿冰捕鱼体验', icon: '🎣', tag: '玩', type: '体验', price: 100, desc: '黑龙江冰面凿洞下网，"冬捕"。拉网出水鱼瞬间冻住，"最北的渔猎"。' },
      { id: 'mohe_hong', name: '圣诞村滑雪', icon: '🎿', tag: '玩', type: '体验', price: 180, desc: '最北滑雪场雪期长达8个月。圣诞老人陪你滑雪，"极地滑雪初体验"。' },
      { id: 'mohe_minsu', name: '东北火炕民宿', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '火炕烧得热热乎乎，"上炕唠嗑"。窗外零下40度，屋里睡得香甜。' },
    ],
    stories: [
      { id: 'mohe_story_bei', name: '"找到北"的仪式感', icon: '🧭', desc: '北极村"我找到北了"石碑前拍照要排队。人生方向迷茫时，网友说："去漠河，先找到北。"' },
      { id: 'mohe_story_wen', name: '零下50度的日常', icon: '🥶', desc: '漠河曾测得零下52.3度极寒。泼水成冰、睫毛结霜、手机自动关机，"寒冷是这里的特产"。' },
      { id: 'mohe_story_baiye', name: '白夜：太阳不下班', icon: '🌞', desc: '夏至前后漠河白夜，晚上11点天还亮。夏至节篝火晚会通宵，"中国最北的不眠夜"。' },
      { id: 'mohe_story_xunlu2', name: '最后的驯鹿部落', icon: '🦌', desc: '鄂温克使鹿部落养驯鹿上千年，拒绝下山定居的老猎人与驯鹿留守山林。《额尔古纳河右岸》写的他们。' },
      { id: 'mohe_story_jiguang2', name: '极光不用去北欧', icon: '🌌', desc: '漠河是中国唯一可能出现极光的城市，概率虽小但有。摄影老手说："冬天晴夜蹲守，缘分会来。"' },
      { id: 'mohe_story_songmo', name: '《漠河舞厅》的动人故事', icon: '🎵', desc: '歌手柳爽在漠河遇到独舞老人，其妻殁于1987年大火。《漠河舞厅》唱哭全网，"一座城的记忆"。' },
    ],
  });
})();
