/* ============ 新加坡 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'singapore',
    name: '新加坡',
    country: '新加坡',
    cc: 'SG',
    flag: '🇸🇬',
    region: '东南亚',
    hero: '🦁',
    desc: '花园城市国家：鱼尾狮口喷清泉，滨海湾的超级树夜里发光，小贩中心里藏着米其林，一座把规则与浪漫都写进城市的国家。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2000 }],
    visa: { cost: 0, note: '中新互免签证（停留不超过30天）' },
    spots: [
      { id: 'singapore_merlion', name: '鱼尾狮公园', icon: '🦁', price: 0, desc: '狮头鱼身喷水像，"狮城"的官方合影点。背后金沙酒店与摩天轮同框，一张照片集齐新加坡天际线。' },
      { id: 'singapore_gardens', name: '滨海湾花园', icon: '🌳', price: 60, desc: '十八棵超级树高五十米，晚上上演灯光音乐秀。云雾林的室内瀑布从七层楼顶砸下，进门就被水雾打湿镜头。' },
      { id: 'singapore_mbs', name: '金沙酒店空中花园', icon: '🏊', price: 160, desc: '57层楼顶的"无边泳池"横跨三座塔楼。不入住也可上空中花园观景台，俯瞰海湾夜景是新加坡的封神机位。' },
      { id: 'singapore_sentosa', name: '圣淘沙岛', icon: '🏖️', price: 40, desc: '环球影城、水族馆、亚洲最南端灯塔全在这座岛。巴拉湾海滩的吊桥走过去，脚下一半是海水一半是地图边缘。' },
      { id: 'singapore_uvs', name: '新加坡环球影城', icon: '🎢', price: 420, desc: '东南亚唯一的环球影城，变形金刚与木乃伊过山车是招牌。失落世界的激流勇进，湿身是入场费。' },
      { id: 'singapore_zoo', name: '新加坡动物园·夜间野生动物园', icon: '🦍', price: 100, desc: '"开放式"动物园没有笼子，红毛猩猩在你头顶荡秋千。夜间的动物园坐游览车，与狮子隔一条壕沟对视。' },
      { id: 'singapore_chinatown', name: '牛车水·佛牙寺', icon: '🏮', price: 0, desc: '唐人街的红砖骑楼里藏着金碧辉煌的佛牙寺。发传人的"佛牙"舍利塔四层供着，隔壁是麦士威熟食中心。' },
    ],
    souvenirs: [
      { id: 'singapore_hainan_chicken', name: '海南鸡饭', icon: '🍗', tag: '食', type: '美食', price: 30, desc: '天天海南鸡饭的队伍拐两个弯，鸡肉滑嫩配姜蓉酱油。小贩中心几块钱的"国饭"，了凡油鸡饭还拿到过米其林一星。' },
      { id: 'singapore_chili_crab', name: '辣椒螃蟹', icon: '🦀', tag: '食', type: '美食', price: 160, desc: '番茄辣酱裹着泥蟹，配炸馒头蘸酱汁。斯里兰卡大钳蟹一只十几块新币，"国菜"吃法是用手拆。' },
      { id: 'singapore_laksa', name: '叻沙', icon: '🍜', tag: '食', type: '美食', price: 30, desc: '椰浆咖喱汤底泡粗米粉，虾米香辣入魂。加东叻沙用勺吃不用筷子，汤要喝到见碗底。' },
      { id: 'singapore_kaya', name: '咖椰吐司·半熟蛋', icon: '🍞', tag: '食', type: '美食', price: 15, desc: '亚坤的炭烤咖椰吐司配半生熟蛋和南洋咖啡。本地人的国民早餐，"蘸"是唯一正确吃法。' },
      { id: 'singapore_bak_kwa', name: '美珍香肉干', icon: '🥓', tag: '食', type: '特产', price: 80, desc: '炭烤猪肉干油亮喷香，切块论斤卖。春节排队两小时的"伴手礼顶流"，铁盒装更显体面。' },
      { id: 'singapore_kopi', name: '南洋咖啡', icon: '☕', tag: '食', type: '饮品', price: 10, desc: '"黑咖啡"Kopi-O"加糖、加奶的叫"Kopi-C"，行话先学会再点单。街角咖啡店的拉茶与咖啡乌，都带炼乳香。' },
      { id: 'singapore_durian', name: '榴莲体验', icon: '🤢', tag: '食', type: '美食', price: 60, desc: '芽笼榴莲一条街，猫山王按公斤卖。"果中之王"的爱与怕只隔一口，吃了记得别带上地铁。' },
      { id: 'singapore_merlion_souvenir', name: '鱼尾狮周边', icon: '🦁', tag: '衣', type: '文创', price: 35, desc: '鱼尾狮巧克力、钥匙扣、开瓶器全家桶。机场免税区的"国家代言人"，一买就停不下来。' },
      { id: 'singapore_orchid', name: '胡姬花文创', icon: '🌺', tag: '衣', type: '文创', price: 55, desc: '国花胡姬花镀金做成耳环和书签。卓锦·万代兰的美丽被永久封存，是新加坡的"花式国礼"。' },
      { id: 'singapore_mrt', name: '地铁MRT环游', icon: '🚇', tag: '行', type: '体验', price: 20, desc: '全球最干净的地铁之一，禁止饮食执法严格。 EZ-Link 卡一刷，樟宜到市区四十分钟。' },
      { id: 'singapore_changi', name: '樟宜机场星耀', icon: '✈️', tag: '玩', type: '体验', price: 60, desc: '机场里的雨漩涡瀑布从七层楼顶落下，森林谷里藏着一万个树种。"全球最佳机场"本身就是一个景点。' },
      { id: 'singapore_sky_dine', name: '克拉克码头游船', icon: '🛶', tag: '玩', type: '体验', price: 70, desc: '驳船游新加坡河，两岸彩色骑楼与金融区同框。晚上酒吧街灯火通明，河风比空调温柔。' },
      { id: 'singapore_hotel', name: '海湾景观酒店', icon: '🏨', tag: '住', type: '住宿', price: 800, desc: '新加坡房价全国最贵，但景观真香。窗外就是滨海湾灯光秀，泡着澡看超级树亮灯。' },
    ],
    stories: [
      { id: 'singapore_story_clean', name: '"罚款之国"的规矩', icon: '🚫', desc: '地铁饮食、乱丢口香糖、喂鸽子都要罚款，口香糖一度全面禁售。游客的攻略第一条：看标识，别硬来。' },
      { id: 'singapore_story_hawker', name: '小贩中心的米其林', icon: '🎫', desc: '大排档摊位拿到米其林一星，一份油鸡饭三块钱。新加坡把"路边摊"做成了国家级美食名片。' },
      { id: 'singapore_story_merlion', name: '被雷劈过的鱼尾狮', icon: '⚡', desc: '老鱼尾狮2002年遭雷击"破相"，如今搬迁到了新家。现在的鱼尾狮公园雕塑是"二代目"，依然喷水不断。' },
      { id: 'singapore_story_tree', name: '超级树是"垃圾发电厂"', icon: '🌳', desc: '滨海湾花园的超级树其实连着环保系统，收集雨水、光伏发电。晚上亮灯时没人想到它们还是"绿色工人"。' },
      { id: 'singapore_story_mrt', name: '樟宜机场里的瀑布', icon: '💦', desc: '星耀樟宜的雨漩涡是全球最高室内瀑布，每小时水流量四万升。旅客拖着行李看瀑布，登机前顺便逛了"植物园"。' },
      { id: 'singapore_story_mbs', name: '三座塔撑起一艘船', icon: '🚢', desc: '金沙酒店三塔顶上横着一艘"船"（空中花园），被吐槽像"三根筷子插着船板"。如今它成了国家名片。' },
    ],
  });
})();
