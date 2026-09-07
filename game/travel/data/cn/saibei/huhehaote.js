/* ============ 内蒙古·呼和浩特 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'huhehaote',
    name: '呼和浩特',
    country: '中国',
    cc: 'CN',
    province: '内蒙古',
    flag: '🇨🇳',
    region: '塞北',
    hero: '🐎',
    desc: '"青城"：召城苍穹下烧麦飘香，大青山下的马头琴声悠扬，这里是最容易触达草原生活的省会，连空气都自带奶香。',
    travel: [{ name: '高铁', icon: '🚄', cost: 700 }, { name: '飞机', icon: '✈️', cost: 900 }],
    visa: null,
    spots: [
      { id: 'huhehaote_dazhao', name: '大召寺', icon: '🛕', price: 35, desc: '四百年藏传佛教名刹，银佛、龙雕、壁画"三绝"。塞外召城的心脏，香火与酥油灯味交织。' },
      { id: 'huhehaote_saihan', name: '塞上老街·宽巷子', icon: '🏮', price: 0, desc: '明清风格老街，古玩、皮画、奶食铺子连排。隔壁宽巷子是本地美食宇宙：烧麦、焙子、羊杂一路吃。' },
      { id: 'huhehaote_caoyuan', name: '希拉穆仁草原', icon: '🌾', price: 100, desc: '距市区最近的草原，两小时车程。骑马、住蒙古包、篝火晚会一条龙，草原初体验首选。' },
      { id: 'huhehaote_shaanxi', name: '内蒙古博物院', icon: '🦕', price: 0, desc: '查干诺尔龙骨架震撼，恐龙化石与航天展厅同馆。"飞天神舟"从这里升空，草原与宇宙的奇妙组合。' },
      { id: 'huhehaote_qingshan', name: '大青山·敕勒川草原', icon: '🌿', price: 0, desc: '"敕勒川，阴山下，天似穹庐"，修复后的敕勒川草原花开成海。城市北郊的绿色屏障，骑行走栈道皆宜。' },
      { id: 'huhehaote_zhaojun', name: '昭君博物院', icon: '🏛️', price: 65, desc: '王昭君青冢所在地，"青冢拥黛"为呼市八景之一。汉匈和亲的历史现场，单于大帐与匈奴文化馆可逛。' },
      { id: 'huhehaote_mengniu', name: '蒙牛/伊利工业游', icon: '🐄', price: 0, desc: '免费参观全球顶级乳业工厂，机械臂挤奶看得目瞪口呆。喝一杯刚下线的牛奶，"最新鲜的一口"。' },
    ],
    souvenirs: [
      { id: 'huhehaote_shaomai', name: '烧麦', icon: '🥟', tag: '食', type: '美食', price: 25, desc: '呼市烧麦按"两"卖，羊肉大葱馅皮薄如纸。配砖茶解腻，"一两烧麦一壶茶"是本地早茶仪式。' },
      { id: 'huhehaote_beizi', name: '焙子', icon: '🫓', tag: '食', type: '美食', price: 5, desc: '呼市人的"汉堡胚"：白焙子夹烧麦夹咸菜。刚出炉的酥脆，两三块钱扛饿一上午。' },
      { id: 'huhehaote_naiyu', name: '奶皮子·奶豆腐', icon: '🧈', tag: '食', type: '特产', price: 45, desc: '鲜奶凝成的奶皮子蘸白糖，奶豆腐咸香耐嚼。牧区零食"三剑客"，配奶茶绝了。' },
      { id: 'huhehaote_nacha', name: '锅茶', icon: '🥛', tag: '食', type: '美食', price: 35, desc: '咸奶茶锅里煮着奶皮炒米牛肉干。一锅茶就是一顿早午餐，蒙式早茶的灵魂。' },
      { id: 'huhehaote_niurou', name: '牛肉干·风干肉', icon: '🥩', tag: '食', type: '特产', price: 70, desc: '草原黄牛肉自然风干，越嚼越香。呼市超市价更实在，成袋往回拎。' },
      { id: 'huhehaote_maodeng', name: '马头琴文创', icon: '🎻', tag: '衣', type: '文创', price: 120, desc: '马头琴造型摆件、皮画与蒙古刀钥匙扣。蒙古族音乐与工艺的浓缩，琴声仿佛在耳边。' },
      { id: 'huhehaote_menggu_pao', name: '蒙古袍配饰', icon: '👘', tag: '衣', type: '服饰', price: 150, desc: '腰带、帽子、蒙古靴小件，颜色艳丽。穿去草原拍照，"游牧风"直接拉满。' },
      { id: 'huhehaote_naijiu', name: '马奶酒·奶啤酒', icon: '🍾', tag: '食', type: '饮品', price: 40, desc: '马奶酒微酸带甜，奶啤酒是本地新潮。牧区待客的"液体哈达"，微醺刚刚好。' },
      { id: 'huhehaote_qima', name: '草原骑马体验', icon: '🐎', tag: '玩', type: '体验', price: 150, desc: '希拉穆仁草原马倌带路，从小圈到草原深处。颠簸两小时，骑到牧民家喝奶茶。' },
      { id: 'huhehaote_menggubao', name: '蒙古包住宿', icon: '⛺', tag: '住', type: '住宿', price: 300, desc: '草原腹地的现代化蒙古包，夜里看银河。清晨牛马从帐篷边走过，"牧民的一天"开始了。' },
      { id: 'huhehaote_gouhuo', name: '篝火晚会', icon: '🔥', tag: '玩', type: '体验', price: 60, desc: '草原营地的篝火夜，安代舞围圈跳。陌生人手拉手，火光把笑声送上夜空。' },
      { id: 'huhehaote_sheying', name: '蒙服旅拍', icon: '📸', tag: '玩', type: '体验', price: 200, desc: '草原穿蒙古袍拍写真，蓝天白云做背景。摄影师蹲点教"骑马蹲裆式"站姿，成片大气。' },
    ],
    stories: [
      { id: 'huhehaote_story_shaomai', name: '烧麦按"两"卖的玄机', icon: '⚖️', desc: '呼市烧麦论皮重：一两八个，壮汉吃三两就扶墙。外地人点一斤，老板会好心劝住："你吃不完。"' },
      { id: 'huhehaote_story_zhaocheng', name: '"召城"的由来', icon: '🛕', desc: '明清时期呼和浩特寺庙林立，"七大召、八小召、七十二个绵绵召"。召城之名由此而来。' },
      { id: 'huhehaote_story_zhaojun', name: '昭君为何葬在呼市', icon: '🏯', desc: '传说王昭君出塞途经此地，逝后葬于大黑河南岸。青冢四季常青，"青冢拥黛"成为八景之首。' },
      { id: 'huhehaote_story_nai', name: '全球乳都', icon: '🐄', desc: '呼和浩特被称为"中国乳都"，伊利蒙牛总部都在这里。奶牛数量比市区人口还悠闲。' },
      { id: 'huhehaote_story_hangtian', name: '神舟着陆的"草原摇篮"', icon: '🚀', desc: '神舟飞船多在内蒙古四子王旗着陆。博物院里航天展区与草原文化同馆，"从马背到飞船"的跨越。' },
      { id: 'huhehaote_story_kangnaier', name: '敕勒歌不是诗是"歌"', icon: '🎵', desc: '"天苍苍野茫茫"原是敕勒人的牧歌。修复后的敕勒川草原上，这首歌有了实景版。' },
    ],
  });
})();
