/* ============ 新疆·喀什 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kashi',
    name: '喀什',
    country: '中国',
    cc: 'CN',
    province: '新疆',
    flag: '🇨🇳',
    region: '西北',
    hero: '🕌',
    desc: '"不到喀什，不算到过新疆"：两千年丝路古城，高台民居层叠如迷宫，艾提尕尔清真寺的月塔下，时光慢得像手作的铜壶。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2400 }, { name: '火车', icon: '🚂', cost: 1600 }],
    visa: null,
    spots: [
      { id: 'kashi_gucheng', name: '喀什古城', icon: '🏘️', price: 0, desc: '活着的千年古城，土黄色小巷像迷宫。开城仪式的歌舞、铜匠铺的敲打声，孩子踢球的巷子全是生活。' },
      { id: 'kashi_aitigaer', name: '艾提尕尔清真寺', icon: '🕌', price: 45, desc: '全国最大清真寺之一，黄墙绿门两座宣礼塔。古尔邦节万人跳萨满舞的广场，平时鸽子成群。' },
      { id: 'kashi_gaotai', name: '高台民居', icon: '🏚️', price: 30, desc: '六百年崖上"悬空"土陶民居群，过街楼层层叠叠。小巷随坡而上，手工作坊藏在转角。' },
      { id: 'kashi_xiangfei', name: '香妃园', icon: '🌺', price: 30, desc: '香妃墓绿色琉璃穹顶，伊斯兰陵墓建筑精品。传说香妃体有异香，园里沙枣花开正应景。' },
      { id: 'kashi_zhongba', name: '中西亚国际贸易市场（东巴扎）', icon: '🛍️', price: 0, desc: '两千年丝路商埠的延续，周日最热闹。地毯、乐器、干果堆积如山，"砍价的天堂"。' },
      { id: 'kashi_panshangu', name: '帕米尔高原·白沙湖一日', icon: '🏔️', price: 300, desc: '沿中巴友谊公路上帕米尔，白沙湖蓝得离谱。慕士塔格峰"冰山之父"雪顶倒映湖中，塔吉克乡民挥手致意。' },
      { id: 'kashi_shicha', name: '百年老茶馆', icon: '🍵', price: 0, desc: '《追风筝的人》取景地，二楼木窗望老街。一壶药茶配馕，老人弹都塔尔，时光在这里打盹。' },
    ],
    souvenirs: [
      { id: 'kashi_kao rou', name: '红柳烤肉·缸子肉', icon: '🍢', tag: '食', type: '美食', price: 35, desc: '红柳枝串的大肉串炭火直冒油花。缸子肉是羊汤炖新疆洋葱，暖到胃里。' },
      { id: 'kashi_shouzhuafan', name: '喀什抓饭', icon: '🍚', tag: '食', type: '美食', price: 35, desc: '羊腿抓饭配酸奶与格瓦斯，甜咸双拼。巴扎口的老店一锅饭卖到中午就见底。' },
      { id: 'kashi_wumei', name: '无花果·石榴', icon: '🍐', tag: '食', type: '特产', price: 25, desc: '喀什无花果软糯如蜜，石榴籽红得像宝石。鲜果按筐卖，甜度"中国天花板"。' },
      { id: 'kashi_yaocha', name: '药茶', icon: '🍵', tag: '食', type: '饮品', price: 20, desc: '老茶馆的药茶含玫瑰、藏红花与草药。一壶配一块方糖，"丝路的养生法"。' },
      { id: 'kashi_zhuan', name: '巴旦木·鹰嘴豆', icon: '🌰', tag: '食', type: '特产', price: 45, desc: '喀什巴旦木"维族人的坚果之王"。鹰嘴豆炖汤泡馕，高蛋白的古老作物。' },
      { id: 'kashi_ditan', name: '手工地毯', icon: '🧶', tag: '衣', type: '特产', price: 400, desc: '和田-喀什手工羊毛地毯，一毯织数月。花纹是家族密码，"铺在地上的花园"。' },
      { id: 'kashi_tongqi', name: '铜匠铺铜器', icon: '🫖', tag: '衣', type: '文创', price: 160, desc: '古城铜匠街錾花铜壶、铜盘，敲打声就是BGM。每一件都是孤品，"手工的温度"。' },
      { id: 'kashi_huapiao', name: '艾德莱斯绸·花帽', icon: '🧢', tag: '衣', type: '服饰', price: 80, desc: '四棱小花帽（朵帕）男女皆宜，艾德莱斯围巾灵动。戴上逛古城，本地人夸你"亚克西"。' },
      { id: 'kashi_tuofu', name: '土陶', icon: '🏺', tag: '衣', type: '文创', price: 90, desc: '高台民居第七代土陶匠人的碗罐。孔雀绿釉碗"喀什蓝"，非遗土陶的手温。' },
      { id: 'kashi_gucheng_she', name: '古城旅拍', icon: '📸', tag: '玩', type: '体验', price: 250, desc: '穿艾德莱斯长裙在土墙巷口拍写真，光影绝美。孩子会入镜给你当"氛围组"。' },
      { id: 'kashi_pa Simi', name: '帕米尔一日', icon: '🚙', tag: '玩', type: '体验', price: 300, desc: '白沙湖-喀拉库勒湖一日游，塔吉克家访喝奶茶。海拔3800米看"冰山之父"，震撼值爆表。' },
      { id: 'kashi_yejing', name: '古城夜市巡吃', icon: '🍢', tag: '玩', type: '体验', price: 80, desc: '夜市烤蛋（鸽子蛋、鹅蛋）是一绝。蜂蜜烤蛋"夜市爱马仕"，百味小吃走一路吃一路。' },
      { id: 'kashi_minsu', name: '古城民宿', icon: '🏨', tag: '住', type: '住宿', price: 260, desc: '老城改造的维族庭院民宿，天台望清真寺月塔。清晨被馕坑香与诵经声唤醒。' },
    ],
    stories: [
      { id: 'kashi_story_kaicheng', name: '古城开城仪式', icon: '🎺', desc: '每天清晨古城门"开城"：歌舞、花帽、鼓乐迎客。维族大爷跳麦西来甫，游客被拉进去一起转圈。' },
      { id: 'kashi_story_gaotai', name: '高台民居的"悬崖人生"', icon: '🏚️', desc: '民居建在高崖上六百年，房子"长"在房子上。过街楼下人畜同行，"楼上的邻居"是城里最老的居民。' },
      { id: 'kashi_story_zhui', name: '《追风筝的人》取景地', icon: '🪁', desc: '电影为还原阿富汗喀布尔，全球选址后锁定喀什老城。百年茶馆与巷子，"最像喀布尔的中国城"。' },
      { id: 'kashi_story_tashiku', name: '塔什库尔干的塔吉克人', icon: '🏔️', desc: '帕米尔高原的塔吉克族是中国唯一白种人主体民族。他们见面吻手礼，鹰笛与鹰舞是灵魂。' },
      { id: 'kashi_story_yuan', name: '香妃的真实故事', icon: '🌺', desc: '传说香妃"体有异香"，实为容妃——乾隆的维族妃子。墓里葬的是家族陵，故事比史实更浪漫。' },
      { id: 'kashi_story_bansheng', name: '喀什的"半部西域史"', icon: '📜', desc: '张骞、班超、玄奘、马可·波罗都经过喀什。"两千年丝路，半部在喀什"不是夸张。' },
    ],
  });
})();
