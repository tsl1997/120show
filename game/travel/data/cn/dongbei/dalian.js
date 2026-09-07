/* ============ 辽宁·大连 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'dalian',
    name: '大连',
    country: '中国',
    cc: 'CN',
    province: '辽宁',
    flag: '🇨🇳',
    region: '东北',
    hero: '🌊',
    desc: '北方的海滨浪漫之都：广场与欧式建筑铺满丘陵，星海广场看海鸥，金石滩的海蚀奇观，海鲜配啤酒才是大连的夏天。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1100 }, { name: '高铁', icon: '🚄', cost: 900 }],
    visa: null,
    spots: [
      { id: 'dalian_xinghai', name: '星海广场', icon: '🌅', price: 0, desc: '亚洲最大城市广场之一，临海而建。傍晚喂海鸥、放风筝，贝壳博物馆就在旁边，夜晚灯光如星河。' },
      { id: 'dalian_binhailu', name: '滨海路·棒棰岛', icon: '🛣️', price: 20, desc: '30公里滨海观光路，一桥一湾皆大片。木栈道徒步最爽，棒棰岛的海水清澈见底。' },
      { id: 'dalian_jinshitan', name: '金石滩', icon: '🏖️', price: 90, desc: '"神力雕塑公园"，六亿年海蚀奇观。龟裂石被称为"天下第一奇石"，沙滩细腻海水湛蓝。' },
      { id: 'dalian_hutan', name: '老虎滩海洋公园', icon: '🐬', price: 220, desc: '海洋动物馆+海兽馆+鸟语林的大合体。海豚表演掌声雷动，极地馆企鹅萌到犯规。' },
      { id: 'dalian_railway', name: '俄罗斯风情街·东关街', icon: '🏛️', price: 0, desc: '百年俄式建筑连成街，"大连的异国风"。套娃手信与咖啡小店，历史与市井混搭。' },
      { id: 'dalian_yihe', name: '旅顺口', icon: '⚓', price: 40, desc: '天然不冻军港，日俄战争遗址遍布。白玉山顶俯瞰"老虎尾"，一部近代史读半天。' },
      { id: 'dalian_laohutan_ye', name: '东港音乐喷泉', icon: '⛲', price: 0, desc: '东北最大的音乐喷泉，水柱随乐起舞。夜景配游艇码头，夏天晚风里全是欢呼声。' },
    ],
    souvenirs: [
      { id: 'dalian_haixian', name: '海胆蒸蛋·海鲜饺子', icon: '🦪', tag: '食', type: '美食', price: 120, desc: '大连海胆肥到流油，蒸蛋鲜掉眉毛。鲅鱼饺子个大馅足，"海味饺子天花板"。' },
      { id: 'dalian_shaokao', name: '铁板鱿鱼·焖子', icon: '🦑', tag: '食', type: '美食', price: 20, desc: '铁板鱿鱼刷蒜蓉辣酱，街头的"大连味"。焖子是地瓜粉煎块，蘸麻酱蒜汁，五块钱的快乐。' },
      { id: 'dalian_haidai', name: '海产品干货', icon: '🦐', tag: '食', type: '特产', price: 150, desc: '海参、鲍鱼、虾夷扇贝干货礼盒。大连海产的"浓缩行李箱"，送礼有面。' },
      { id: 'dalian_pingguo', name: '大连苹果·樱桃', icon: '🍎', tag: '食', type: '特产', price: 60, desc: '沿海丘陵日照足，苹果脆甜樱桃爆汁。六月的樱桃季，果园现摘现吃。' },
      { id: 'dalian_pijiu', name: '大连老啤酒', icon: '🍺', tag: '食', type: '饮品', price: 15, desc: '凯龙老雪配烤海鲜，本地人叫"夺命大凯龙"。海滨夜市一扎啤酒，海风都变甜。' },
      { id: 'dalian_beike', name: '贝壳文创', icon: '🐚', tag: '衣', type: '文创', price: 40, desc: '贝壳风铃、海螺灯与螺钿首饰盒。星海广场小摊挑半天，"把海的声音带回家"。' },
      { id: 'dalian_ouluo', name: '海鸥喂食体验·文创', icon: '🕊️', tag: '衣', type: '文创', price: 25, desc: '海鸥明信片、鸥鸟徽章。广场买包鸟食，海鸥会站你手臂上——大连限定合影。' },
      { id: 'dalian_yousan', name: '有轨电车之旅', icon: '🚋', tag: '行', type: '体验', price: 2, desc: '201路百年有轨电车叮叮当当穿过城区。老车木座椅，两块钱的"时光机"。' },
      { id: 'dalian_sheying', name: '滨海路徒步', icon: '🥾', tag: '玩', type: '体验', price: 0, desc: '星海广场到付家庄的木栈道徒步，海景无死角。晨跑者的天堂，随手拍都是壁纸。' },
      { id: 'dalian_qianhai', name: '赶海挖蚬子', icon: '🦀', tag: '玩', type: '体验', price: 60, desc: '退潮后拎桶下滩涂挖蚬子抓螃蟹。夏家河子海滩"挖货"圣地，收获直接找店加工。' },
      { id: 'dalian_chuanyue', name: '游艇出海', icon: '🛥️', tag: '玩', type: '体验', price: 260, desc: '星海湾登艇环游，海鸥追船飞。看滨海路全貌与跨海大桥，海风大到笑出声。' },
      { id: 'dalian_minsu', name: '海景公寓民宿', icon: '🏨', tag: '住', type: '住宿', price: 350, desc: '星海广场旁的海景公寓，落地窗看日出。夜里枕着海浪声入睡，清晨海鸥叫早。' },
    ],
    stories: [
      { id: 'dalian_story_guangchang', name: '"广场之城"的浪漫', icon: '🌳', desc: '大连有七十多个广场，中山广场周围全是百年银行老楼。城市规划师骄傲："我们的广场，比公园还多。"' },
      { id: 'dalian_story_youza', name: ' 有轨电车120年', icon: '🚋', desc: '大连有轨电车1909年通车至今，是国内运营最久的城市之一。老电车司机都是"活历史"。' },
      { id: 'dalian_story_zuqiu', name: '足球城', icon: '⚽', desc: '大连足球夺得过八座顶级联赛冠军，"足球城"名不虚传。街头巷尾的少年，脚下功夫个个了得。' },
      { id: 'dalian_story_shi', name: '"浪漫之都"的由来', icon: '🌹', desc: '大连官方旅游口号"浪漫之都"，滨海路、广场、海鸥全是注脚。网友总结：大连的浪漫，是海风给的。' },
      { id: 'dalian_story_lvshun', name: '旅顺口的百年风雷', icon: '⚓', desc: '旅顺军港见证了甲午与日俄战争。白玉山塔下的史料馆里，一页页都是不能忘的近代史。' },
      { id: 'dalian_story_yeye', name: '海蛎子味的方言', icon: '🗣️', desc: '大连话自带"海蛎子味"，又冲又亲。本地大妈吵架都像说相声，游客听得直乐。' },
    ],
  });
})();
