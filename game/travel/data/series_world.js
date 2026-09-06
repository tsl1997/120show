/* ============ 主题收藏系列·美国/中国/日韩美妆/法国 ============ */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  const S = s => window.TRAVEL_SERIES.push(s);
  /* 美国：DC英雄 */
  S({ id: 'usa_dc', cat: 'usa', name: 'DC 英雄宇宙', years: '1938-至今', author: 'DC Comics', theme: '超级英雄', background: '1938年超人开创超级英雄类型，蝙蝠侠、神奇女侠与正义联盟构成"美国神话"。纽约大都会与哥谭市的双城设定。', story: '氪星遗孤超人在大都会守护人类，哥谭市的蝙蝠侠以恐惧惩戒罪犯。"是选择了善良，才成为超人。"（这句话是改述）', protagonist: '超人&蝙蝠侠', slogan: 'Truth, Justice and a Better Tomorrow！', cities: ['newyork'], items: [
    { id: 'dc_superman', name: '超人飞行手办', type: '手办模型', city: 'newyork', price: 220, desc: '红披风飘扬破云而出，DC Direct 版。' },
    { id: 'dc_batman', name: '蝙蝠侠夜巡手办', type: '手办模型', city: 'newyork', price: 220, desc: '哥谭石像鬼旁的黑暗骑士，披铁丝披风。' },
    { id: 'dc_badge', name: '正义联盟徽章', type: '徽章谷子', city: 'newyork', price: 50, desc: '超蝙神奇女侠闪电侠海王钢骨六枚。' },
    { id: 'dc_hoodie', name: '哥谭市警局卫衣', type: '服饰包箱', city: 'newyork', price: 130, desc: '"GCPD"哥谭市警局制服风卫衣。' },
    { id: 'dc_plush', name: '超人&蝙蝠侠毛绒', type: '毛绒公仔', city: 'newyork', price: 95, desc: 'Q版黑白双雄，"世界最快手办搭档"。' }] });
  /* 美国：漫威 */
  S({ id: 'usa_marvel', cat: 'usa', name: '漫威英雄宇宙', years: '1962-至今', author: '斯坦·李·Marvel', theme: '超级英雄', background: '蜘蛛侠、钢铁侠、复仇者联盟的宇宙。纽约是漫威的"主战场"：复仇者大厦、皇后区蜘蛛侠，"Excelsior!"', story: '被放射性蜘蛛咬中的高中生彼得帕克明白："能力越大，责任越大。"钢铁侠托尼则从军火商变成"我爱 you 三千遍"的英雄。', protagonist: '蜘蛛侠&钢铁侠', slogan: '能力越大，责任越大！', cities: ['newyork'], items: [
    { id: 'mv_spider', name: '蜘蛛侠倒挂手办', type: '手办模型', city: 'newyork', price: 220, desc: '倒挂吐丝经典姿势，皇后区夜景底座。' },
    { id: 'mv_ironman', name: '钢铁侠 Mark3 手办', type: '手办模型', city: 'newyork', price: 260, desc: '红金装甲开面细节+掌心炮特效。' },
    { id: 'mv_badge', name: '复仇者联盟徽章', type: '徽章谷子', city: 'newyork', price: 55, desc: 'A 标志+六人组吧唧盒。' },
    { id: 'mv_hoodie', name: '钢铁侠方舟反应堆卫衣', type: '服饰包箱', city: 'newyork', price: 140, desc: '胸口发光反应堆灯，"I am Iron Man"。' },
    { id: 'mv_plush', name: '蜘蛛侠&格鲁特毛绒', type: '毛绒公仔', city: 'newyork', price: 95, desc: '"I am Groot"小树人+小蜘蛛。' }] });
  /* 美国：NBA球星卡 */
  S({ id: 'usa_nba', cat: 'usa', name: 'NBA 球星卡', years: '1946-至今', author: 'NBA·Panini·Topps', theme: '球星卡收藏', background: '球星卡是美国的硬核收藏文化：1986年乔丹新秀卡拍出超200万美元。Panini 与 Topps 的球星卡拆包直播是欧美流行文化。', story: '一张小卡片承载王朝记忆：乔丹的最后一投、科比的81分、詹姆斯的追赶乔丹、库里的三分革命。签名字卡"RPA"是卡界圣杯。', protagonist: '乔丹/科比/詹姆斯/库里', slogan: '收藏一段王朝！', cities: ['newyork', 'chicago', 'miami', 'losangeles'], items: [
    { id: 'nba_jordan', name: '乔丹新秀卡复刻（1986 Fleer）', type: '球星卡', city: 'chicago', price: 300, desc: '"篮球之神"新秀年卡片复刻版，PSA 评级盒。' },
    { id: 'nba_kobe', name: '科比81分纪念卡', type: '球星卡', city: 'losangeles', price: 280, desc: '紫金8/24双面设计，曼巴精神永存。' },
    { id: 'nba_lebron', name: '詹姆斯天选之子卡', type: '球星卡', city: 'miami', price: 260, desc: '"Chosen 1"封面故事致敬款，骑士热火湖人三队。' },
    { id: 'nba_curry', name: '库里三分革命卡', type: '球星卡', city: 'newyork', price: 240, desc: '金州勇士30号，"改变篮球的男人"。' },
    { id: 'nba_pack', name: 'Panini 拆卡包', type: '球星卡', city: 'newyork', price: 150, desc: '未拆封 Prizm 卡包，"拆卡一夜暴富（梦）"。' }] });
  /* 美国：泰迪熊 */
  S({ id: 'usa_teddy', cat: 'usa', name: '泰迪熊（Teddy Bear）', years: '1902-至今', author: '莫里斯·米奇汤姆（Ideal）', theme: '毛绒玩偶', background: '1902年罗斯福总统拒猎小熊的新闻催生了"Teddy\'s Bear"。纽约布鲁克林的 Ideal 公司生产了第一只泰迪熊，至今是全球最经典的毛绒玩偶。', story: '罗斯福总统在猎熊时拒绝射杀被捆住的小熊，漫画与玩偶商让"泰迪熊"风靡世界。"每只泰迪熊都需要一个拥抱"。', protagonist: '泰迪熊', slogan: '每个孩子都需要一只泰迪熊！', cities: ['newyork'], items: [
    { id: 'teddy_classic', name: '古典泰迪熊（mohair）', type: '毛绒公仔', city: 'newyork', price: 400, desc: '马海毛+木屑填充的收藏级泰迪，关节可动。' },
    { id: 'teddy_steam', name: '泰迪熊保护协会徽章', type: '徽章谷子', city: 'newyork', price: 30, desc: '"Teddy Bear Protector"铜质徽章。' },
    { id: 'teddy_bag', name: '泰迪熊帆布包', type: '服饰包箱', city: 'newyork', price: 90, desc: '复古泰迪图案帆布托特包。' },
    { id: 'teddy_plush2', name: '迷你抱抱泰迪', type: '毛绒公仔', city: 'newyork', price: 70, desc: '可别在包上的抱抱泰迪，"永远陪你"。' },
    { id: 'teddy_franklin', name: 'FAO Schwarz 泰迪', type: '毛绒公仔', city: 'newyork', price: 300, desc: '纽约传奇玩具店 FAO Schwarz 限定款。' }] });
  /* 中国：古诗词系列 */
  S({ id: 'cn_poem', cat: 'china', name: '古诗词·山河集', years: '唐-清', author: '李白·杜甫·白居易 等', theme: '古诗词×城市', background: '把中国诗词与旅行城市绑定：在正确的城市收集正确的诗句。"跟着诗词去旅行"是最中国的收集玩法。', story: '每一座城都住着一句诗。收集诗句卡，集齐"山河诗集"，你就是行走的《唐诗宋词地图》。', protagonist: '诗人们', slogan: '跟着诗词去旅行！', cities: ['yangzhou', 'wuhan', 'xian', 'hangzhou', 'suzhou', 'dunhuang', 'chongqing', 'taian'], items: [
    { id: 'poem_yangzhou', name: '诗句卡·烟花三月下扬州', type: '诗句卡', city: 'yangzhou', price: 30, desc: '李白《黄鹤楼送孟浩然之广陵》。在扬州瘦西湖收集。' },
    { id: 'poem_wuhan', name: '诗句卡·昔人已乘黄鹤去', type: '诗句卡', city: 'wuhan', price: 30, desc: '崔颢《黄鹤楼》。登黄鹤楼收集，"白云千载空悠悠"。' },
    { id: 'poem_xian', name: '诗句卡·春风得意马蹄疾', type: '诗句卡', city: 'xian', price: 30, desc: '孟郊《登科后》。在西安城墙骑马路线收集。' },
    { id: 'poem_dunhuang', name: '诗句卡·西出阳关无故人', type: '诗句卡', city: 'dunhuang', price: 30, desc: '王维《送元二使安西》。阳关遗址收集。' },
    { id: 'poem_chongqing', name: '诗句卡·朝辞白帝彩云间', type: '诗句卡', city: 'chongqing', price: 30, desc: '李白《早发白帝城》。奉节白帝城（重庆）收集。' },
    { id: 'poem_taian', name: '诗句卡·会当凌绝顶', type: '诗句卡', city: 'taian', price: 30, desc: '杜甫《望岳》。登泰山收集，"一览众山小"。' },
    { id: 'poem_suzhou', name: '诗句卡·姑苏城外寒山寺', type: '诗句卡', city: 'suzhou', price: 30, desc: '张继《枫桥夜泊》。寒山寺敲钟收集。' },
    { id: 'poem_hangzhou', name: '诗句卡·欲把西湖比西子', type: '诗句卡', city: 'hangzhou', price: 30, desc: '苏轼《饮湖上初晴后雨》。游西湖收集。' },
    { id: 'poem_set', name: '《山河诗集》收藏册', type: '诗句卡', city: 'wuhan', price: 60, desc: '集齐诗句卡可兑换的精装诗集册，配活字印章。' }] });
  /* 中国：古城系列 */
  S({ id: 'cn_ancient', cat: 'china', name: '中国古都·古城印集', years: '夏-清', author: '十三朝与百座城', theme: '古城印章收集', background: '西安、北京、南京、洛阳、开封、杭州、安阳、郑州并称中国八大古都；平遥、荆州、襄阳是保存最完好的古城。以"城印"（城市印章）收集的方式打卡古都。', story: '在每座古城盖下一枚专属城印：秦砖汉瓦、明墙清楼，印章集齐时，中华五千年的骨架就在你手上了。', protagonist: '旅行的你', slogan: '一城一印，千年入册！', cities: ['xian', 'beijing', 'nanjing', 'luoyang', 'kaifeng', 'hangzhou', 'pingyao', 'jingzhou'], items: [
    { id: 'ancient_xian', name: '城印·长安（西安）', type: '城印章', city: 'xian', price: 25, desc: '秦汉唐三朝印记，兵马俑纹样印泥。' },
    { id: 'ancient_beijing', name: '城印·北京（紫禁城）', type: '城印章', city: 'beijing', price: 25, desc: '明清北京城印章，故宫角楼图案。' },
    { id: 'ancient_nanjing', name: '城印·金陵（南京）', type: '城印章', city: 'nanjing', price: 25, desc: '六朝古都印，明城墙砖文风格。' },
    { id: 'ancient_luoyang', name: '城印·神都（洛阳）', type: '城印章', city: 'luoyang', price: 25, desc: '十三朝神都印，牡丹与卢舍那纹。' },
    { id: 'ancient_pingyao', name: '城印·平遥古城', type: '城印章', city: 'pingyao', price: 25, desc: '明清县城印，票号汇通天下纹。' },
    { id: 'ancient_jingzhou', name: '城印·荆州古城', type: '城印章', city: 'jingzhou', price: 25, desc: '三国荆州印，关羽与古城墙纹。' },
    { id: 'ancient_album', name: '《古城印集》收藏册', type: '城印章', city: 'beijing', price: 55, desc: '印册专用本，盖满古城印即成"行走的方志"。' }] });
  /* 日本美妆 */
  S({ id: 'jp_beauty', cat: 'beauty', name: '日本美妆集', years: '1980-至今', author: 'SK-II·资生堂·黛珂', theme: '美妆护肤', background: '日本美妆以"皮肤科学+仪式感"闻名：SK-II 的Pitera、资生堂红腰子、黛珂紫苏水都是机场免税排队王。', story: '在大阪（SK-II发源地）与东京银座收集日妆名品，"透明感"是日本美妆的终极追求。', protagonist: '护肤爱好者', slogan: '透明感，就是日本美妆的执念。', cities: ['osaka', 'tokyo'], items: [
    { id: 'jpb_skii', name: 'SK-II 神仙水（发源地限定）', type: '美妆', city: 'osaka', price: 900, desc: 'Pitera 精华230ml，大阪 高档百货限定套盒。' },
    { id: 'jpb_shiseido', name: '资生堂红妍精华', type: '美妆', city: 'tokyo', price: 700, desc: '"红腰子"维稳精华，银座旗舰限定。' },
    { id: 'jpb_decorte', name: '黛珂紫苏水', type: '美妆', city: 'tokyo', price: 400, desc: '紫苏与迷迭香爽肤水，油皮亲妈。' },
    { id: 'jpb_canmake', name: 'CANMAKE 井田五色眼影', type: '美妆', city: 'tokyo', price: 90, desc: '开架之光，"日系透明感眼妆"。' },
    { id: 'jpb_fujiko', name: 'Fujiko 头发蓬蓬粉', type: '美妆', city: 'osaka', price: 80, desc: '网红蓬蓬粉，"拯救塌头"。' }] });
  /* 韩国美妆 */
  S({ id: 'kr_beauty', cat: 'beauty', name: '韩国美妆集（K-Beauty）', years: '2000-至今', author: '爱茉莉太平洋·LG生活健康', theme: '美妆护肤', background: 'K-Beauty 以"十层护肤+玻璃肌"风靡全球。首尔明洞是美妆宇宙中心：雪花秀、后、兰芝、悦诗风吟、olive young 全球旗舰店。', story: '在首尔明洞收集 K-Beauty 名品，"玻璃肌"是韩妆给世界的答案。', protagonist: 'K-Beauty 玩家', slogan: '玻璃肌，是韩妆的浪漫。', cities: ['seoul'], items: [
    { id: 'krb_sulwhasoo', name: '雪花秀滋阴生人参焕颜精华', type: '美妆', city: 'seoul', price: 800, desc: '人参精华"旗帜产品"， flagship 限定套盒。' },
    { id: 'krb_whoo', name: '后 Whoo 天气丹', type: '美妆', city: 'seoul', price: 900, desc: '宫廷级贵妇线，"王后的 intuitions"。' },
    { id: 'krb_innisfree', name: '悦诗风吟济州绿茶籽精华', type: '美妆', city: 'seoul', price: 120, desc: '济州岛绿茶原料，明洞旗舰店体验。' },
    { id: 'krb_oliveyoung', name: 'Olive Young 购物袋（满载）', type: '美妆', city: 'seoul', price: 300, desc: '"韩国 drugstore 大扫货"：面膜、贴片、小样。' },
    { id: 'krb_lip', name: 'Romand 果汁唇釉', type: '美妆', city: 'seoul', price: 80, desc: '韩系水光唇釉鼻祖，色号全到选不过来。' }] });
  /* 法国奢侈品 */
  S({ id: 'fr_luxury', cat: 'luxury', name: '法国奢侈品殿堂', years: '1837-至今', author: 'LV·爱马仕·香奈儿·迪奥·卡地亚', theme: '奢侈品牌朝圣', background: '法国是全球奢侈品圣地：LV 箱包起家、爱马仕的马具血统、香奈儿的2.55、迪奥的新风貌、卡地亚的猎豹。巴黎蒙田大道与旺多姆广场是"奢侈品圣地巡礼"终点站。', story: '在巴黎的旗舰店里理解什么叫"工艺与时间"：一只爱马仕铂金包要一个工匠手工缝制18小时。', protagonist: '时尚旅人', slogan: '时尚易逝，风格永存。', cities: ['paris'], items: [
    { id: 'lux_lv', name: 'LV 老花小物（巴黎限定）', type: '奢侈品', city: 'paris', price: 2000, desc: 'Monogram 小卡包/挂件，"老花入门"。' },
    { id: 'lux_hermes', name: '爱马仕丝巾', type: '奢侈品', city: 'paris', price: 3000, desc: '90cm 真丝丝巾，一幅画一块丝。"爱马仕不是包，是丝巾开始的"。' },
    { id: 'lux_chanel', name: '香奈儿 N°5', type: '奢侈品', city: 'paris', price: 1500, desc: '1921年"女人要闻起来像女人"的传奇香水。' },
    { id: 'lux_dior', name: '迪奥 Ladurée 马卡龙联名礼盒', type: '奢侈品', city: 'paris', price: 800, desc: '迪奥咖啡+马卡龙下午茶套餐，"粉色 elegant"。' },
    { id: 'lux_cartier', name: '卡地亚 Love 手镯（入门款）', type: '奢侈品', city: 'paris', price: 8000, desc: '螺丝手镯需要"专用螺丝刀"才能戴上，"爱情锁"。' }] });
})();
