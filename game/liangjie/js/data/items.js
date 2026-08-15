/* 两界搬运工 · 物品数据库
 * 现代价格 = 2025-2026 中国零售市场参考价（人民币元）
 * 旧时价格 = 1980 年购买/黑市参考价（旧时人民币元）
 * 核心原则：绝不出现“现代商品卖1块钱”的失真物价；
 * 80年代“凭票平价”与“议价/黑市”双轨价差、跨时代稀缺溢价都单列。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});

  // [id, 名称, 类别, 重量kg, 现代价, 旧时价, 描述, 用途]
  // 用途: use=可食用/消耗, trade=可倒卖, tool=工具(车票/介绍信等)
  const RAW = [
    /* ============ 主食 / 食品（现代参考：2026 市场价） ============ */
    ['rice5', '东北大米 5kg 袋', 'food', 5, 32, 4.2, '现代：超市零售约6.4元/kg；旧时：议价粮约0.84元/斤'],
    ['noodle', '挂面 500g 把', 'food', 0.5, 6, 0.5, '现代：约6元/把；旧时：副食店0.5元/把'],
    ['flour10', '面粉 5kg 袋', 'food', 5, 26, 3.2, '现代：约5.2元/kg；旧时：凭粮票平价'],
    ['bun', '白面馒头（2个）', 'food', 0.3, 4, 0.16, '现代：2元/个；旧时：国营饭店8分/个'],
    ['millet', '小米 1kg', 'food', 1, 14, 0.9, '现代：14元/kg；旧时：0.45元/斤'],
    ['soybean', '黄豆 1kg', 'food', 1, 12, 0.7, '现代：12元/kg；旧时：0.35元/斤'],
    ['pork', '冷鲜猪肉 500g', 'food', 0.5, 30, 1.1, '现代：约30元/500g；旧时：凭肉票1.1元/500g'],
    ['beef', '牛肉 500g', 'food', 0.5, 52, 1.9, '现代：约52元/500g；旧时：高档肉食1.9元/500g'],
    ['chicken', '白条鸡 1只', 'food', 1.5, 18, 2.5, '现代：整鸡约18元；旧时：约2.5元/只'],
    ['egg10', '鸡蛋 10个', 'food', 0.6, 13, 1.0, '现代：约1.3元/个；旧时：1角/个'],
    ['milk', '常温牛奶 250ml', 'drink', 0.26, 3.5, 0.45, '现代：3.5元/盒；旧时：凭奶票约0.45元/瓶'],
    ['canned', '午餐肉罐头 340g', 'food', 0.4, 18, 3.5, '现代：18元/罐；旧时：稀罕罐头3.5元/罐'],
    ['biscuit', '苏打饼干 500g', 'food', 0.55, 10, 1.2, '现代：10元；旧时：点心店1.2元/斤'],
    ['candy', '水果硬糖 500g', 'food', 0.55, 14, 1.8, '现代：14元；旧时：1.8元/斤'],
    ['whiteCandy', '大白兔奶糖 500g', 'food', 0.55, 26, 4.2, '现代：26元；旧时：紧俏高级糖4.2元/斤'],
    ['chocolate', '巧克力 100g', 'food', 0.12, 16, 9, '现代：16元；旧时：进口巧克力天价9元/块'],
    ['instantNoodle', '方便面（袋装）', 'food', 0.1, 4, 2.8, '现代：4元；旧时：黑市“新鲜玩意儿”2.8元/袋'],
    ['sugar', '白砂糖 500g', 'food', 0.55, 7, 0.6, '现代：7元；旧时：凭糖票约0.6元/斤'],
    ['salt', '食盐 500g', 'food', 0.55, 3, 0.15, '现代：3元；旧时：凭盐票0.15元/斤'],
    ['peanutOil', '花生油 5L 桶', 'food', 4.6, 105, 8.5, '现代：约105元/桶；旧时：凭油票8.5元/桶'],
    ['pickle', '榨菜 100g', 'food', 0.12, 3, 0.2, '现代：3元；旧时：酱菜0.2元/袋'],

    /* ============ 饮品（口渴系统核心） ============ */
    ['water', '瓶装纯净水 550ml', 'drink', 0.6, 2.5, 1.2, '现代：2.5元；旧时：无菌瓶装水是怪稀罕物，黑市1.2元/瓶'],
    ['cola', '可口可乐 500ml', 'drink', 0.55, 3.5, 3, '现代：3.5元；旧时：友谊商店/黑市“洋饮料”3元/瓶'],
    ['soda', '北冰洋汽水（瓶）', 'drink', 0.6, 6, 0.2, '现代：6元/瓶（复古款）；旧时：街头2毛/瓶，喝完退瓶'],
    ['beer', '啤酒 640ml（瓶）', 'drink', 0.7, 5, 0.6, '现代：5元；旧时：凭酒票或议价0.6元/瓶'],
    ['teaJasmine', '茉莉花茶 100g', 'drink', 0.12, 28, 2.6, '现代：28元；旧时：北京人最爱的口粮茶2.6元/两'],
    ['longjing', '西湖龙井 50g', 'drink', 0.06, 180, 15, '现代：180元；旧时：出口级好茶15元/两'],
    ['coffee', '速溶咖啡 12条', 'drink', 0.15, 20, 15, '现代：20元；旧时：进口稀罕货15元/盒'],
    ['juice', '橙汁 1L 盒装', 'drink', 1.1, 8, 0, '现代：8元；旧时：无此类商品，不流通'],
    ['sprite', '雪碧 500ml', 'drink', 0.55, 3.5, 3, '现代：3.5元；旧时：洋饮料3元/瓶'],
    ['baijiu', '西凤酒 500ml', 'drink', 1.1, 158, 8.5, '现代：158元；旧时：老牌白酒8.5元/瓶（需酒票）'],
    ['maotai', '茅台酒 500ml', 'drink', 1.2, 2500, 28, '现代：官方零售约2500元；旧时：凭票约8元，黑市议价28元/瓶'],
    ['agedMaotai', '1980年陈年茅台', 'special', 1.2, 52000, 28, '旧时买来窖藏，2026年一瓶难求，拍卖价5.2万+'],
    ['boiledwater', '大碗茶（碗）', 'drink', 0.3, 0, 0.05, '旧时：茶馆5分/碗，解渴之物；现代无此消费'],
    ['warmWater', '白开水（杯）', 'drink', 0.3, 0, 0.02, '烧开的自来水，最朴素的解渴办法'],

    /* ============ 日用百货 ============ */
    ['soap', '香皂（块）', 'daily', 0.1, 5, 0.6, '现代：5元；旧时：带花香紧俏品0.6元/块'],
    ['towel', '纯棉毛巾', 'daily', 0.2, 15, 1.8, '现代：15元；旧时：凭布票或议价1.8元'],
    ['toothpaste', '牙膏', 'daily', 0.15, 8, 0.9, '现代：8元；旧时：0.9元/管'],
    ['thermos', '保温壶', 'daily', 1.2, 68, 13, '现代：68元；旧时：暖瓶13元/个'],
    ['flashlight', '强光手电筒（含电池）', 'daily', 0.5, 35, 25, '现代：35元；旧时：黑市“神物”，一照之下值25元'],
    ['battery', '五号电池 4节', 'daily', 0.2, 12, 2.5, '现代：12元；旧时：2.5元/4节'],
    ['detergent', '洗衣粉 1kg', 'daily', 1.1, 24, 2.2, '现代：24元；旧时：2.2元/袋'],
    ['umbrella', '折叠伞', 'daily', 0.5, 39, 8, '现代：39元；旧时：自动折叠伞稀罕8元/把'],
    ['matches', '火柴 整箱200盒', 'wholesale', 4, 80, 13, '现代：80元/箱；旧时：13元/箱'],
    ['enamel', '搪瓷杯 一箱12个', 'wholesale', 5, 160, 30, '现代：160元；旧时：30元/箱'],
    ['workglove', '劳保手套 一捆12双', 'wholesale', 1.5, 95, 18, '现代：95元；旧时：18元/捆'],
    ['plasticBasin', '塑料脸盆', 'daily', 0.6, 25, 12, '现代：25元；旧时：塑料制品稀罕，12元/个'],
    ['nylonRope', '尼龙绳 50m', 'wholesale', 1.5, 30, 22, '现代：30元；旧时：黑市“降维打击神物”，22元/卷'],
    ['notebook', '练习本 一包20本', 'wholesale', 2, 40, 9, '现代：40元；旧时：9元/包'],
    ['ballpen', '圆珠笔 一盒12支', 'wholesale', 0.4, 45, 11, '现代：45元；旧时：11元/盒'],
    ['bulb', '白炽灯泡 一箱20只', 'wholesale', 4, 110, 24, '现代：110元；旧时：24元/箱'],
    ['soapPowder', '皂粉 大袋', 'wholesale', 2, 30, 4, '现代：30元；旧时：4元/袋'],

    /* ============ 种子 ============ */
    ['wheatseed', '高产小麦种 5kg', 'seed', 5, 120, 36, '现代：120元；旧时：科学院关注的良种36元'],
    ['riceseed', '杂交水稻种 5kg', 'seed', 5, 180, 50, '现代：180元；旧时：高产试验种50元'],
    ['cornseed', '甜玉米种 2kg', 'seed', 2, 90, 25, '现代：90元；旧时：25元'],
    ['tomatoseed', '抗病番茄种 500g', 'seed', 0.5, 75, 22, '现代：75元；旧时：抗病性强22元'],
    ['cottonseed', '高产棉种 5kg', 'seed', 5, 150, 45, '现代：150元；旧时：纤维品质好45元'],

    /* ============ 农水特产（跨区贸易核心） ============ */
    ['apple', '红富士苹果 一筐', 'produce', 15, 95, 16, '现代：95元/筐；旧时：16元/筐'],
    ['banana', '香蕉 一整箱', 'produce', 14, 85, 14, '现代：85元；旧时：北方罕见，14元/箱'],
    ['orange', '赣南脐橙 一筐', 'produce', 15, 110, 20, '现代：110元；旧时：20元/筐'],
    ['lychee', '增城荔枝 一筐', 'produce', 12, 120, 8, '现代：120元（北方稀缺）；旧时：广州产地价8元/筐'],
    ['longan', '龙眼 一筐', 'produce', 12, 90, 6, '现代：90元；旧时：产地价6元/筐'],
    ['prawn', '冻虾 一箱', 'produce', 10, 260, 60, '现代：260元；旧时：码头冷链货60元/箱'],
    ['hairtail', '带鱼 一箱', 'produce', 10, 190, 42, '现代：190元；旧时：北方稀罕海产42元/箱'],
    ['crab', '阳澄湖大闸蟹 礼箱', 'produce', 5, 1880, 40, '现代：1880元；旧时：1980年大闸蟹没几人吃，40元/箱！'],
    ['wuchangFish', '武昌鱼 两条', 'produce', 2, 45, 2.5, '现代：45元；旧时：江鱼2.5元'],
    ['lotus', '洪湖莲藕 一捆', 'produce', 10, 12, 1.2, '现代：12元；旧时：1.2元/捆'],
    ['dami', '江汉大米 10kg', 'produce', 10, 58, 3.6, '现代：58元；旧时：3.6元/袋'],
    ['pineNut', '红松子 1kg', 'produce', 1, 60, 3, '现代：60元；旧时：山货3元/斤'],
    ['woodEar', '黑木耳 500g', 'produce', 0.5, 50, 3, '现代：50元；旧时：山货3元/斤'],
    ['soybeanOilN', '东北大豆油 5L', 'produce', 4.6, 79, 4.6, '现代：79元；旧时：计划外豆油4.6元/桶'],
    ['raisin', '吐鲁番葡萄干 500g', 'produce', 0.55, 30, 3, '现代：30元；旧时：3元/斤'],
    ['hamiMelon', '哈密瓜（个）', 'produce', 2.5, 25, 2.5, '现代：25元；旧时：2.5元/个'],
    ['jadeMaterial', '和田玉籽料（块）', 'produce', 0.8, 12000, 300, '现代：12000元；旧时：当地人不识货，300元/块'],
    ['xinganWool', '新疆细羊毛 10kg', 'produce', 10, 550, 40, '现代：550元；旧时：兵团计划外羊毛40元'],
    ['longCotton', '新疆长绒棉 20kg', 'produce', 20, 840, 64, '现代：840元；旧时：兵团原棉64元'],
    ['silkBolt', '真丝绸缎 10米', 'fashion', 2, 1600, 180, '现代：1600元；旧时：出口级真丝180元'],
    ['yellowWine', '绍兴黄酒 坛', 'drink', 5, 45, 4, '现代：45元；旧时：4元/坛'],

    /* ============ 服装 ============ */
    ['coat', '羊毛大衣', 'fashion', 1.8, 799, 78, '现代：799元；旧时：78元'],
    ['jeans', '牛仔裤', 'fashion', 0.8, 269, 24, '现代：269元；旧时：24元'],
    ['sneaker', '运动鞋', 'fashion', 0.9, 399, 36, '现代：399元；旧时：36元'],
    ['scarf', '真丝围巾', 'fashion', 0.2, 329, 28, '现代：329元；旧时：28元'],
    ['downcoat', '羽绒服', 'fashion', 1.2, 999, 96, '现代：999元；旧时：96元'],
    ['dacron', '的确良布 3米', 'fashion', 1.2, 88, 7.5, '现代：88元；旧时：凭布票7.5元'],
    ['cloth', '纯棉布 3米', 'fashion', 1.5, 42, 3.2, '现代：42元；旧时：凭布票3.2元'],
    ['nylonStocking', '尼龙丝袜（双）', 'fashion', 0.1, 12, 6, '现代：12元；旧时：时髦奢侈品6元/双'],
    ['leatherShoes', '牛皮皮鞋', 'fashion', 1, 380, 32, '现代：380元；旧时：32元'],

    /* ============ 电子产品 ============ */
    ['radio', '袖珍收音机', 'electronic', 0.5, 260, 38, '现代：260元；旧时：38元'],
    ['watch', '电子表', 'electronic', 0.1, 180, 35, '现代：180元；旧时：黑市“香港电子表”35元'],
    ['calculator', '计算器', 'electronic', 0.2, 89, 16, '现代：89元；旧时：16元'],
    ['camera', '胶片相机', 'electronic', 1, 1450, 115, '现代：1450元；旧时：115元'],
    ['cassette', '便携磁带机', 'electronic', 0.8, 680, 62, '现代：680元；旧时：62元'],
    ['fan', '台式电风扇', 'electronic', 3, 239, 48, '现代：239元；旧时：48元'],
    ['bwTV', '黑白电视机', 'electronic', 8, 800, 420, '现代：800元（复古收藏）；旧时：凭票约420元'],
    ['colorTV', '彩色电视机', 'electronic', 20, 3500, 1800, '现代：3500元；旧时：彩电天价1800元还买不到'],
    ['sewingMachine', '缝纫机', 'electronic', 12, 800, 150, '现代：800元；旧时：“三大件”之一，凭票150元'],

    /* ============ 工业品 ============ */
    ['electricMotor', '三相异步电机', 'industrial', 30, 3200, 800, '现代：3200元；旧时：800元'],
    ['dieselEngine', '小型柴油机', 'industrial', 45, 4200, 1200, '现代：4200元；旧时：1200元'],
    ['handTractor', '手扶拖拉机', 'industrial', 120, 12800, 4500, '现代：12800元；旧时：3000-5000元一台'],
    ['bearing', '轴承套装 10套', 'industrial', 8, 260, 45, '现代：260元；旧时：45元'],
    ['welder', '电焊机', 'industrial', 25, 1600, 380, '现代：1600元；旧时：380元'],
    ['waterPump', '离心水泵', 'industrial', 15, 980, 260, '现代：980元；旧时：260元'],

    /* ============ 书刊 / 技术 ============ */
    ['englishBook', '英语教材（套）', 'book', 1.2, 45, 3, '现代：45元；旧时：3元'],
    ['radioBook', '无线电入门（册）', 'book', 0.6, 35, 2.5, '现代：35元；旧时：2.5元'],
    ['agriBook', '农业技术手册', 'book', 0.6, 30, 2.5, '现代：30元；旧时：2.5元'],
    ['dictionary', '英汉词典', 'book', 1.5, 55, 6, '现代：55元；旧时：6元'],
    ['classics', '世界文学名著（册）', 'book', 1, 40, 4, '现代：40元；旧时：4元'],
    ['seedManual', '杂交水稻制种技术册', 'tech', 0.5, 3000, 300, '现代：3000元；旧时：科院试购300元'],
    ['icsManual', '集成电路工艺笔记', 'tech', 0.5, 5000, 600, '现代：5000元；旧时：工厂垂涎600元'],
    ['radioTech', '收音机改良图纸', 'tech', 0.3, 2200, 220, '现代：2200元；旧时：220元'],
    ['plasticTech', '塑料成型工艺手册', 'tech', 0.4, 1800, 150, '现代：1800元；旧时：150元'],

    /* ============ 邮票 / 票证 ============ */
    ['monkey', '庚申猴票 单张', 'stamp', 0.001, 9500, 0.08, '现代：单张约9500元；旧时：邮局8分钱出售！'],
    ['monkeySet', '庚申猴票 四方联', 'stamp', 0.004, 52000, 0.32, '现代：四方联52000元；旧时：0.32元'],
    ['redstamp', '“全国山河一片红”', 'stamp', 0.001, 68000, 0.1, '现代：珍邮68000元；旧时：面值1角，存量极少'],
    ['landscape', '黄山风景邮票 一套', 'stamp', 0.005, 1800, 0.6, '现代：1800元；旧时：0.6元'],
    ['meatTicket', '肉票（张）', 'ticket', 0, 0, 0, '旧时：购买猪肉的凭证，凭票平价供应'],
    ['cigaretteTicket', '烟票（张）', 'ticket', 0, 0, 0, '旧时：购买香烟的凭证'],
    ['wineTicket', '酒票（张）', 'ticket', 0, 0, 0, '旧时：购买白酒的凭证'],
    ['foodTicket', '粮票（斤）', 'ticket', 0, 0, 0, '旧时：购买主粮的凭证，全国粮票可跨省'],
    ['clothTicket', '布票（尺）', 'ticket', 0, 0, 0, '旧时：购买布料衣物的凭证'],
    ['oilTicket', '油票（斤）', 'ticket', 0, 0, 0, '旧时：购买食用油的凭证'],
    ['sugarTicket', '糖票（斤）', 'ticket', 0, 0, 0, '旧时：购买白糖的凭证'],

    /* ============ 特殊 ============ */
    ['hongtashan', '红塔山香烟（条）', 'special', 0.4, 135, 7.5, '现代：135元；旧时：紧俏烟7.5元/条'],
    ['panda', '熊猫香烟（条）', 'special', 0.4, 18000, 15, '现代：特供烟18000元/条；旧时：15元/条（有价无市）'],
    ['xifengJiu', '西凤酒（瓶）', 'special', 1.1, 158, 8.5, '现代：158元；旧时：8.5元/瓶'],

    /* ============ 古董（谜团件，需鉴定） ============ */
    ['mystery_jar', '神秘的罐子', 'antique', 3, 0, 18, '泥垢覆盖的旧罐子，鉴定后揭示真实器物'],
    ['mystery_bowl', '破损的碗', 'antique', 0.5, 0, 12, '残损旧碗，鉴定后揭示真实器物'],
    ['mystery_scroll', '发黄的画卷', 'antique', 0.5, 0, 25, '画心未展的旧画卷，鉴定后揭示真实作品'],
    ['mystery_bronze', '生锈的铜器', 'antique', 2, 0, 35, '锈蚀遮住纹饰的铜器，鉴定后揭示真实器物'],
    ['mystery_jade', '温润的玉佩', 'antique', 0.3, 0, 15, '包浆温润的旧玉佩，真假与年代待鉴定']
  ];

  // 消耗效果：hunger 饱腹 / thirst 解渴 / energy 精力 / spirit 心情
  const CONSUME = {
    rice5: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    noodle: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    flour10: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    bun: { hunger: 24, thirst: -2, energy: 4, spirit: 3 },
    millet: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    soybean: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    pork: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    beef: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    chicken: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    egg10: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    milk: { hunger: 6, thirst: 20, energy: 3, spirit: 2 },
    canned: { hunger: 42, thirst: -4, energy: 10, spirit: 2 },
    biscuit: { hunger: 35, thirst: -3, energy: 8, spirit: 3 },
    candy: { hunger: 22, thirst: 2, energy: 6, spirit: 6 },
    whiteCandy: { hunger: 22, thirst: 2, energy: 7, spirit: 8 },
    chocolate: { hunger: 18, thirst: 1, energy: 12, spirit: 10 },
    instantNoodle: { hunger: 46, thirst: 3, energy: 10, spirit: 3 },
    sugar: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    salt: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    peanutOil: { hunger: 0, thirst: 0, energy: 0, spirit: 0 },
    pickle: { hunger: 5, thirst: -4, energy: 1, spirit: 2 },
    water: { hunger: 0, thirst: 38, energy: 1, spirit: 0 },
    cola: { hunger: 0, thirst: 24, energy: 5, spirit: 7 },
    soda: { hunger: 0, thirst: 26, energy: 3, spirit: 6 },
    beer: { hunger: 0, thirst: 18, energy: -4, spirit: 8 },
    teaJasmine: { hunger: 0, thirst: 20, energy: 2, spirit: 9 },
    longjing: { hunger: 0, thirst: 20, energy: 2, spirit: 12 },
    coffee: { hunger: 0, thirst: 10, energy: 12, spirit: 8 },
    juice: { hunger: 0, thirst: 26, energy: 4, spirit: 5 },
    sprite: { hunger: 0, thirst: 24, energy: 4, spirit: 6 },
    baijiu: { hunger: 0, thirst: 8, energy: -10, spirit: 14 },
    maotai: { hunger: 0, thirst: 6, energy: -12, spirit: 20 },
    agedMaotai: { hunger: 0, thirst: 4, energy: -12, spirit: 24 },
    boiledwater: { hunger: 0, thirst: 30, energy: 0, spirit: 2 },
    warmWater: { hunger: 0, thirst: 26, energy: 0, spirit: 1 },
    yellowWine: { hunger: 0, thirst: 12, energy: -6, spirit: 12 }
  };

  const ITEMS = {};
  RAW.forEach((r) => {
    ITEMS[r[0]] = {
      id: r[0], name: r[1], cat: r[2], size: r[3],
      modern: r[4], old: r[5], desc: r[6], action: r[7] || 'trade',
      consume: CONSUME[r[0]] || null,
      isMystery: r[0].startsWith('mystery_')
    };
  });

  // 文物谱系：鉴定成功后揭示的真实器物
  const RELIC_SERIES = [
    { period: '中国新石器', region: 'china', list: ['红山玉猪龙', '良渚玉琮', '仰韶彩陶钵', '马家窑彩陶罐', '龙山黑陶高柄杯', '齐家文化玉璧', '大汶口白陶鬶'] },
    { period: '商周', region: 'china', list: ['商代兽面纹爵', '商代玉戈', '西周散氏盘拓本', '西周窃曲纹簋', '战国错金银带钩', '战国谷纹玉璧', '战国铜镜'] },
    { period: '秦汉', region: 'china', list: ['秦半两钱范', '汉代鎏金铜灯', '汉代画像砖', '汉代玉剑璏', '汉代四神规矩镜', '汉代陶说唱俑', '汉代封泥'] },
    { period: '唐宋', region: 'china', list: ['唐三彩骆驼俑', '唐代海兽葡萄镜', '唐代长沙窑执壶', '宋汝窑天青洗', '宋官窑贯耳瓶', '宋定窑刻花碗', '宋建窑兔毫盏'] },
    { period: '元明清', region: 'china', list: ['元青花缠枝莲罐', '明永乐甜白釉碗', '明成化斗彩杯', '清康熙青花棒槌瓶', '清乾隆珐琅彩碗', '清道光慎德堂瓷杯'] },
    { period: '近现代名家', region: 'china', list: ['齐白石花卉册页', '徐悲鸿奔马立轴', '张大千泼彩山水', '傅抱石人物小品', '李可染牧牛图', '吴冠中江南水乡'] },
    { period: '日本', region: 'japan', list: ['绳文火焰纹陶器', '弥生铜铎', '平安时代经筒', '镰仓时代武士刀装具', '江户有田烧大盘', '江户浮世绘初版', '明治七宝烧花瓶'] },
    { period: '欧洲', region: 'europe', list: ['中世纪彩绘圣经残页', '文艺复兴铜版画', '荷兰静物油画', '法国路易十五座钟', '英国乔治时期银壶', '维也纳珐琅盒'] },
    { period: '古埃及', region: 'egypt', list: ['古埃及圣甲虫印章', '古埃及荷鲁斯护符', '古埃及青铜猫像', '古埃及乌沙布提俑', '古埃及托勒密银币'] }
  ];

  // 部分顶级重器的现代价值（拍卖级）
  const TOP_PRICES = {
    '宋汝窑天青洗': 90000000, '清乾隆珐琅彩碗': 41000000, '元青花缠枝莲罐': 28000000,
    '齐白石花卉册页': 18000000, '古埃及圣甲虫印章': 8500000, '江户浮世绘初版': 3200000
  };

  LJ.Items = ITEMS;
  LJ.Consume = CONSUME;
  LJ.RelicSeries = RELIC_SERIES;
  LJ.TopPrices = TOP_PRICES;

  LJ.catName = function (cat) {
    const m = {
      food: '食品', drink: '饮品', daily: '日用', wholesale: '批发',
      seed: '种子', produce: '农水产', fashion: '服装', electronic: '电子',
      industrial: '工业品', book: '书刊', tech: '技术', antique: '古董',
      stamp: '邮票', ticket: '票证', special: '特殊'
    };
    return m[cat] || cat;
  };

  // 各城市的需求画像：cat -> 出售加成（百分比），用于跨区贸易
  LJ.CITY_DEMAND = {
    beijing: { produce: 0.6, fashion: 0.4, electronic: 0.5, drink: 0.3, seed: 0.5, tech: 0.4, special: 0.5 },
    guangzhou: { produce: 0.4, industrial: 0.7, fashion: 0.3, food: 0.5, daily: 0.4 },
    wuhan: { electronic: 0.6, fashion: 0.5, drink: 0.3, special: 0.4, daily: 0.3 },
    harbin: { produce: 0.9, food: 0.6, fashion: 0.5, drink: 0.5, daily: 0.4 },
    urumqi: { fashion: 0.6, daily: 0.5, food: 0.5, electronic: 0.6, drink: 0.4 },
    hangzhou: { industrial: 0.6, produce: 0.4, special: 0.5, tech: 0.3, electronic: 0.5 },
    hongkong: { antique: 0.8, stamp: 0.5, special: 0.6, food: 0.4 },
    tokyo: { antique: 0.7, tech: 0.5, special: 0.4, produce: 0.4 }
  };
})();
