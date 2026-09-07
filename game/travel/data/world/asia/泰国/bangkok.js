/* ============ 泰国·曼谷 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'bangkok',
    name: '曼谷',
    country: '泰国',
    cc: 'TH',
    flag: '🇹🇭',
    region: '东南亚',
    hero: '🛕',
    desc: '"天使之城"：金顶寺庙与摩天楼贴肩而立，嘟嘟车在热浪里穿梭，芒果糯米饭的甜香混着河岸的香料气。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1800 }, { name: '高铁·中老铁路', icon: '🚄', cost: 1500 }],
    visa: { cost: 0, note: '中泰互免签证（停留不超过30天）' },
    spots: [
      { id: 'bangkok_wat_arun', name: '郑王庙（黎明寺）', icon: '🛕', price: 5, desc: '湄南河畔的"埃菲尔铁塔"，碎瓷片贴出的塔身在阳光下闪光。日落时分对岸远眺，是曼谷明信片的永恒主角。' },
      { id: 'bangkok_grand_palace', name: '大皇宫·玉佛寺', icon: '👑', price: 30, desc: '金翅鸟与尖顶佛塔挤满庭院，玉佛由整块翡翠雕成。进殿要遮膝脱鞋，泰式金碧辉煌的顶点就在这里。' },
      { id: 'bangkok_wat_pho', name: '卧佛寺', icon: '🛌', price: 6, desc: '46米镀金卧佛脚底镶着108幅吉祥图案，走完脚底要五分钟。这里还是泰式按摩的"祖庭"，学按摩的来朝圣。' },
      { id: 'bangkok_chatuchak', name: '乍都乍周末市场', icon: '🛍️', price: 0, desc: '一万五千个摊位的"世界最大市场"，从古着到恐龙玩具应有尽有。地图都画不清巷子，迷路就是购物的一部分。' },
      { id: 'bangkok_chinatown', name: '唐人街耀华力路', icon: '🏮', price: 0, desc: '两百年华人街，金铺与燕窝铺霓虹连成河。夜宵档的炭烤海鲜和鱼翅羹香气，隔着三条街都能闻到。' },
      { id: 'bangkok_icon_siam', name: '暹罗天地 ICONSIAM', icon: '🏙️', price: 0, desc: '湄南河畔的超级商场，底层复刻水上市场。喷泉灯光秀整点开演，奢侈品与街头小吃同层共处。' },
      { id: 'bangkok_khao_san', name: '考山路', icon: '🎉', price: 0, desc: '全球背包客的"朝圣路口"：酒吧、纹身、炸昆虫。夜里的考山路人浪从街头涌到巷尾，青春浓度超标。' },
    ],
    souvenirs: [
      { id: 'bangkok_mango_rice', name: '芒果糯米饭', icon: '🥭', tag: '食', type: '美食', price: 15, desc: '椰浆糯米垫底、芒果切片、淋咸椰奶。三块钱的幸福在曼谷街头复制了千万份，依然吃不腻。' },
      { id: 'bangkok_tom_yum', name: '冬阴功汤', icon: '🍤', tag: '食', type: '美食', price: 60, desc: '香茅、南姜、青柠、辣酱与虾同煮，酸辣鲜冲直击天灵盖。"泰国国汤"，一碗下去毛孔全开。' },
      { id: 'bangkok_padthai', name: '泰式炒河粉', icon: '🍝', tag: '食', type: '美食', price: 30, desc: '河粉配豆芽碎花生和青柠角，酸甜咸三位一体。摊主铁锅颠出火苗，一盘十几块钱吃出米其林快乐。' },
      { id: 'bangkok_hainan_rice', name: '海南鸡饭', icon: '🍗', tag: '食', type: '美食', price: 25, desc: '华人移民带来的白切鸡配油饭，蘸姜辣酱。红大哥水门鸡排长队几十年，味道稳定得像钟表。' },
      { id: 'bangkok_milk_tea', name: '泰式奶茶', icon: '🧋', tag: '食', type: '饮品', price: 10, desc: '橙红色的"手标奶茶"甜到发光，加冰才正宗。配一片烤吐司，是曼谷的国民下午茶。' },
      { id: 'bangkok_coconut', name: '现剖椰子·椰子冰淇淋', icon: '🥥', tag: '食', type: '饮品', price: 12, desc: '路边一刀开椰子，喝完水还能刮椰肉。椰子冰淇淋夹面包是"泰式三明治"，甜到游客集体点头。' },
      { id: 'bangkok_thai_snack', name: '香兰叶点心', icon: '🍃', tag: '食', type: '美食', price: 15, desc: '香兰叶包裹的椰丝小糕点，绿得像翡翠。市场三块钱一盒，打开就见"热带绿宝石"。' },
      { id: 'bangkok_pha_khao', name: '泰式花裤衩·大象裤', icon: '🩳', tag: '衣', type: '服饰', price: 25, desc: '满市场五块钱一条的"花哨裤"，橡胶沙滩裤配大象纹。曼谷人均一双拖鞋一条花裤，懒散是标配。' },
      { id: 'bangkok_baht_souvenir', name: '大象文创·泰丝', icon: '🐘', tag: '衣', type: '文创', price: 60, desc: '泰丝围巾光泽温润，大象木雕憨态可掬。Jim Thompson 泰丝博物馆的文创区，把"泰国金"带回家。' },
      { id: 'bangkok_tuktuk', name: '嘟嘟车穿城', icon: '🛺', tag: '行', type: '体验', price: 30, desc: '三轮摩托在热浪与喇叭声里"漂移"，风比空调猛。上车前谈好价，下车记得欣赏司机的微笑杀。' },
      { id: 'bangkok_boat', name: '湄南河公交船', icon: '⛴️', tag: '行', type: '体验', price: 3, desc: '几块钱的水上公交摇摇晃晃，两岸寺庙与高楼交替。船夫收钱不看票看眼力，本地人跳上跳下如履平地。' },
      { id: 'bangkok_massage', name: '泰式按摩', icon: '💆', tag: '玩', type: '体验', price: 60, desc: '"被瑜伽师掰了一小时"是泰式按摩的官方感受。两小时的古法按摩下来，脚踝都被按得咯咯响。' },
      { id: 'bangkok_muir', name: '暹罗海洋世界', icon: '🐠', tag: '玩', type: '体验', price: 120, desc: '东南亚最大水族馆，玻璃底船从鲨鱼背上划过。曼谷地下两层的"海底世界"，避暑绝佳。' },
      { id: 'bangkok_hotel', name: '湄南河景酒店', icon: '🏨', tag: '住', type: '住宿', price: 400, desc: '曼谷酒店性价比之王：泳池、自助早餐、河景房。凌晨的湄南河亮灯，阳台上看就是免费演出。' },
    ],
    stories: [
      { id: 'bangkok_story_tuktuk', name: '嘟嘟车的"出租车谈判学"', icon: '🛺', desc: '曼谷嘟嘟车不打表，上车前谈价是必备技能。谈崩了司机笑一笑就走，谈成了就是一路风与笑声。' },
      { id: 'bangkok_story_wat', name: '"曼谷"的全名有168个字母', icon: '📜', desc: '曼谷的泰文全名长达一百多个字符，是全世界最长城市名。泰国学生要背它的完整名，考试内容之一。' },
      { id: 'bangkok_story_songkran', name: '泼水节全城开战', icon: '💦', desc: '每年四月宋干节，全城变成"打水仗战场"，路人自动进入应战状态。手机防水袋是当月曼谷卖得最好的商品。' },
      { id: 'bangkok_story_market', name: '水上市场的船家', icon: '🛶', desc: '丹嫩沙多水上市场，船娘划着木船卖椰子冰和船面。买卖在船与船之间完成，桨声与吆喝声混成节奏。' },
      { id: 'bangkok_story_monk', name: '僧侣与"黄金时代"', icon: '🙏', desc: '泰国男性一生要短期出家一次，清晨街头橙色袈裟排队化缘。给僧侣布施是曼谷人每天的修行。' },
      { id: 'bangkok_story_tuktuk_price', name: '"免费"游佛寺的套路', icon: '⚠️', desc: '街头有司机说"今天大皇宫关门我带你游别的"，其实是购物套路。游客的防骗第一课，旅行攻略必备条目。' },
    ],
  });
})();
