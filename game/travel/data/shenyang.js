/* ============ 辽宁·沈阳 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'shenyang',
    name: '沈阳',
    country: '中国',
    cc: 'CN',
    province: '辽宁',
    flag: '🇨🇳',
    region: '东北',
    hero: '🏯',
    desc: '"一朝发祥地，两代帝王城"：沈阳故宫的红墙黄瓦藏着满清起家的故事，刘老根大舞台的笑声里全是东北的豪爽。',
    travel: [{ name: '高铁', icon: '🚄', cost: 800 }, { name: '飞机', icon: '✈️', cost: 1000 }],
    visa: null,
    spots: [
      { id: 'shenyang_gugong', name: '沈阳故宫', icon: '🏯', price: 50, desc: '清朝入关前的皇宫，大政殿八角重檐独树一帜。四百年的历史起点，规模比北京故宫小，满蒙藏风格浓。' },
      { id: 'shenyang_zhaoling', name: '北陵公园（昭陵）', icon: '🌳', price: 50, desc: '清太宗皇太极的陵寝，"关外三陵"之首。松涛参天，雪后红墙映白雪，沈阳人的晨练圣地。' },
      { id: 'shenyang_shuailinfu', name: '张氏帅府', icon: '🏛️', price: 46, desc: '张作霖张学良父子的官邸，大青楼小青楼中西合璧。"东北易帜""西安事变"的历史现场。' },
      { id: 'shenyang_jiuling', name: '九一八历史博物馆', icon: '🕯️', price: 0, desc: '"残历碑"定格在1931年9月18日。免费参观，一部不能忘却的抗战史诗，出口处很多人驻足良久。' },
      { id: 'shenyang_zhongjie', name: '中街·太原街', icon: '🛍️', price: 0, desc: '中国第一条商业步行街，四百年商埠。老边饺子与中兴大厦同街，夜里的霓虹是沈阳的底气。' },
      { id: 'shenyang_gongren', name: '中国工业博物馆', icon: '⚙️', price: 0, desc: '"共和国长子"的工业记忆：老机床、铸造车间。巨大的车间空间感震撼，工业风拍照圣地。' },
      { id: 'shenyang_liulaogen', name: '刘老根大舞台', icon: '🎭', price: 180, desc: '东北二人转的顶级剧场，赵家班轮番登台。扇子手绢翻飞，插科打诨笑到脸酸，沈阳之夜的标配。' },
    ],
    souvenirs: [
      { id: 'shenyang_laobian', name: '老边饺子', icon: '🥟', tag: '食', type: '美食', price: 40, desc: '1829年创号的"天下第一饺"，煸馅独门。蒸饺一层层码上桌，蘸蒜泥醋汁，百年老味。' },
      { id: 'shenyang_jicai', name: '东北铁锅炖', icon: '🍲', tag: '食', type: '美食', price: 80, desc: '大铁锅炖大鹅贴饼子，锅边一圈玉米面饼。柴火慢炖一小时，掀盖白汽糊一脸，东北豪迈代表。' },
      { id: 'shenyang_kao rou', name: '沈阳烤肉拌饭', icon: '🍚', tag: '食', type: '美食', price: 30, desc: '石锅烤肉拌饭锅巴焦香，配辣白菜大酱汤。中街胡同里的老店，饭点排队是常态。' },
      { id: 'shenyang_maliang', name: '马家烧麦', icon: '🥠', tag: '食', type: '美食', price: 35, desc: '回民老字号，牛肉烧麦皮薄如纸、馅大汁多。老沈阳人认这一口，配羊杂汤刚好。' },
      { id: 'shenyang_heimu', name: '不老林糖', icon: '🍬', tag: '食', type: '特产', price: 20, desc: '沈阳人从小吃到大的牛轧糖，杏仁味浓郁。外地少见，一袋在手秒回童年。' },
      { id: 'shenyang_xuehua', name: '雪花啤酒·老雪', icon: '🍺', tag: '食', type: '饮品', price: 10, desc: '"夺命大绿棒子"老雪花度数高后劲足。撸串配老雪，是沈阳夏夜的社交货币。' },
      { id: 'shenyang_chikuang', name: '故宫文创', icon: '🎀', tag: '衣', type: '文创', price: 45, desc: '大政殿冰箱贴、八旗娃娃盲盒。沈阳故宫的"萌系皇家风"，比北京故宫的更野。' },
      { id: 'shenyang_gongye', name: '工业风文创', icon: '⚙️', tag: '衣', type: '文创', price: 50, desc: '老机床齿轮做成的书镇与钥匙扣。"共和国长子"的钢铁记忆，硬核纪念品。' },
      { id: 'shenyang_piying', name: '东北大花布文创', icon: '🧣', tag: '衣', type: '服饰', price: 40, desc: '大花布做成帆布包、发带与棉袄。土到极致就是潮，东北花棉袄成了时尚单品。' },
      { id: 'shenyang_huaxue', name: '棋盘山滑雪', icon: '🎿', tag: '玩', type: '体验', price: 150, desc: '沈阳人的冬季后花园，雪道平缓适合新手。摔几个跟头就会了，热奶茶管够。' },
      { id: 'shenyang_zaozi', name: '东北澡堂搓澡', icon: '🧖', tag: '玩', type: '体验', price: 80, desc: '搓澡师傅手起泥落，"搓完轻二两"。奶浴盐浴按摩一条龙，南方游客的震撼体验。' },
      { id: 'shenyang_ERTONG', name: '中街夜市小吃之旅', icon: '🍢', tag: '玩', type: '体验', price: 60, desc: '中街冰点城的老冰棍、炸串、烤冷面一路吃过去。人均几十元吃到扶墙，性价比之王。' },
      { id: 'shenyang_minsu', name: '中街公寓酒店', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '中街商圈高层公寓，窗外是中街霓虹。下楼就是步行街，夜宵方便到犯规。' },
    ],
    stories: [
      { id: 'shenyang_story_gugong', name: '故宫为什么有俩', icon: '🏯', desc: '沈阳故宫是清朝"龙兴之地"，努尔哈赤皇太极在此登基。入关后成了"陪都宫殿"，才有了南北两座故宫。' },
      { id: 'shenyang_story_918', name: '残历碑的凝固', icon: '🕯️', desc: '九一八博物馆的残历碑布满弹痕，定格1931年9月18日。每年这天沈阳全城鸣响防空警报。' },
      { id: 'shenyang_story_gongye', name: '共和国长子', icon: '⚙️', desc: '新中国第一枚国徽、第一台机床都在沈阳诞生。铁西区的老工厂如今成了博物馆与文创园。' },
      { id: 'shenyang_story_ertuan', name: '"东北式幽默"的幽默', icon: '😂', desc: '沈阳人聊天自带喜剧效果，"你瞅啥"都像段子。刘老根大舞台里，观众笑出的眼泪比掌声多。' },
      { id: 'shenyang_story_xue', name: '雪后故宫的美', icon: '❄️', desc: '红墙白雪琉璃瓦，雪后沈阳故宫是全网刷屏级画面。摄影爱好者凌晨蹲守，就为第一场雪。' },
      { id: 'shenyang_story_zhongjie', name: '中街四百年', icon: '🏮', desc: '中街与故宫同龄，是"皇商"聚起的商业街。老字号与新潮店同街共荣，沈阳的商业心脏四百年没挪窝。' },
    ],
  });
})();
