/* ============ 云南·西双版纳 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'xishuangbanna',
    name: '西双版纳',
    country: '中国',
    cc: 'CN',
    province: '云南',
    flag: '🇨🇳',
    region: '西南',
    hero: '🌴',
    desc: '"理想而神奇的乐土"：热带雨林里大象散步，泼水节的水花带着祝福，傣族园的孔雀舞与星光夜市，"小泰国"的风情。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1300 }, { name: '火车', icon: '🚂', cost: 700 }],
    visa: null,
    spots: [
      { id: 'banna_yuxiang', name: '中科院西双版纳热带植物园', icon: '🌿', price: 80, desc: '中国最大热带植物园，一万三千种植物。"绞杀榕""见血封喉"奇观，夜游看萤火虫与竹节虫。' },
      { id: 'banna_yexianggu', name: '野象谷', icon: '🐘', price: 65, desc: '亚洲象在中国的最后家园，高空走廊观象。运气好能见野象群过河，"雨林巨兽"近在咫尺。' },
      { id: 'banna_daizu', name: '傣族园·泼水广场', icon: '💦', price: 45, desc: '五个傣族村寨组成，天天泼水节。水花带着祝福泼全身，"湿身"才是正确姿势。' },
      { id: 'banna_dajinta', name: '告庄西双景·星光夜市', icon: '🌌', price: 0, desc: '大金塔下的东南亚最大夜市，星光如瀑。傣装拍照、六国水上市场，"西双版纳的夜晚会发光"。' },
      { id: 'banna_yuanlin', name: '曼听公园·总佛寺', icon: '🛕', price: 40, desc: '傣王御花园，白象雕塑与放生湖。总佛寺金顶辉煌，晚间有澜沧江篝火晚会。' },
      { id: 'banna_wangtianshu', name: '望天树景区', icon: '🌲', price: 120, desc: '亚洲最高树"望天树"70米直插云霄。树冠走廊凌空行走，"热带雨林之王"。' },
      { id: 'banna_jinuo', name: '基诺山寨', icon: '🏘️', price: 120, desc: '第56个民族基诺族的大本营。大鼓广场与创世传说，"少数民族活态博物馆"。' },
    ],
    souvenirs: [
      { id: 'banna_kao yu', name: '香茅草烤鱼·烤鸡', icon: '🐟', tag: '食', type: '美食', price: 45, desc: '香茅草捆鱼炭烤，柠檬香渗进肉里。配菠萝饭与喃咪蘸水，"傣味三宝"。' },
      { id: 'banna_bofan', name: '菠萝饭·菠萝蜜', icon: '🍍', tag: '食', type: '美食', price: 25, desc: '紫糯米塞进菠萝蒸，果香四溢。菠萝蜜大如西瓜，果肉金黄甜到粘手。' },
      { id: 'banna_nuomi', name: '手抓饭·竹筒饭', icon: '🍚', tag: '食', type: '美食', price: 45, desc: '芭蕉叶铺满手抓饭，五彩糯米饭好看又好吃。竹筒饭带竹膜清香，"雨林的礼物"。' },
      { id: 'banna_kaichuan', name: '椰子·百香果饮', icon: '🥥', tag: '食', type: '饮品', price: 15, desc: '现开椰子配百香果汁，热带双拼。"36度的高温，15度的快乐"。' },
      { id: 'banna_pucha', name: '普洱茶', icon: '🍵', tag: '食', type: '特产', price: 120, desc: '普洱茶六大茶山就在版纳，老班章"茶王"。茶饼越陈越香，"可以喝的古董"。' },
      { id: 'banna_xianglian', name: '热带水果干·小玉米', icon: '🌽', tag: '食', type: '特产', price: 30, desc: '菠萝蜜干、芒果干甜到心坎。小花糯玉米糯到弹牙，"夜市必囤"。' },
      { id: 'banna_daiqun', name: '傣装写真·筒裙', icon: '👗', tag: '衣', type: '服饰', price: 150, desc: '傣族筒裙修身显瘦，水灯与孔雀元素。星光夜市傣装拍照，"人均傣族公主"。' },
      { id: 'banna_xiangbao', name: '香包·手工纸', icon: '🌸', tag: '衣', type: '文创', price: 35, desc: '傣族香包装着香草，睡得安稳。构树手工纸花纹独特，"雨林手作"。' },
      { id: 'banna_foshi', name: '傣陶·银饰', icon: '🏺', tag: '衣', type: '文创', price: 90, desc: '傣族慢轮制陶非遗，陶罐古朴。傣银孔雀坠子，"水一样的民族手艺"。' },
      { id: 'banna_poshui', name: '泼水节体验', icon: '💦', tag: '玩', type: '体验', price: 60, desc: '傣族园天天过泼水节，水枪水盆齐上阵。"被泼得越湿，祝福越多"。' },
      { id: 'banna_yuxiang2', name: '雨林徒步·夜游植物园', icon: '🔦', tag: '玩', type: '体验', price: 100, desc: '向导带路认绞杀榕与见血封喉。夜游找竹节虫、萤火虫，"雨林夜话"。' },
      { id: 'banna_daba', name: '澜沧江篝火晚会', icon: '🔥', tag: '玩', type: '体验', price: 180, desc: '放水灯、跳团结舞、看六国歌舞。澜沧江边的狂欢，"湄公河之夜"。' },
      { id: 'banna_minsu', name: '傣式泳池民宿', icon: '🏨', tag: '住', type: '住宿', price: 350, desc: '告庄的傣式民宿带泳池，木梯上楼。夜里星光夜市步行可达，"热带度假模式"。' },
    ],
    stories: [
      { id: 'banna_story_poshui', name: '泼水节的"水语"', icon: '💦', desc: '泼水节是傣历新年，水是祝福的载体。被泼得越透越有福，"湿身节"名副其实。' },
      { id: 'banna_story_daxiang', name: '亚洲象的"北上旅行"', icon: '🐘', desc: '2021年野象群"一路北上"逛吃昆明，全球直播。西双版纳是大象老家，人与象如何共处成了课题。' },
      { id: 'banna_story_dong', name: '"东方多瑙河"澜沧江', icon: '🌊', desc: '澜沧江从版纳出境后叫湄公河，流经六国。江边夜市的烧烤香，"湄公河风云"的温柔面。' },
      { id: 'banna_story_cha', name: '老班章的"茶王传奇"', icon: '🍵', desc: '老班章村因普洱茶从贫困村变"土豪村"。一公斤毛茶曾炒到上万，"茶圈的茅台"。' },
      { id: 'banna_story_jinuo', name: '第56个民族的"确认"', icon: '🏘️', desc: '基诺族1979年才被正式确认为单一民族。从刀耕火种到民宿旅游，"一夜跨越千年"。' },
      { id: 'banna_story_wang', name: '望天树有多高', icon: '🌲', desc: '望天树平均高60米以上，最高80米。"抬头帽子会掉"，树冠走廊挑战恐高极限。' },
    ],
  });
})();
