/* 两界搬运工 · 物品数据库
 * 现代价 = 2025-2026 中国零售市场参考价（人民币元）
 * 旧时价 = 1980 年购买/黑市参考价（旧时人民币元）
 * 说明：UI 只显示当前世界对应的价格（现代只看现代价，旧时只看旧时价）。
 * 价格不会出现"现代商品1块钱"的失真；80年代凭票平价与议价/黑市价差明确。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});

  // [id, 名称, 类别, 重量kg, 现代价, 旧时价, 描述, 用途]
  const RAW = [
    /* ============ 主食 / 食品 ============ */
    ['rice5', '东北大米 5kg', 'food', 5, 32, 4.2, '颗粒饱满的粳米，管饱的硬通货。'],
    ['noodle', '挂面 500g', 'food', 0.5, 6, 0.5, '耐储存的干面条，出门必备。'],
    ['flour10', '面粉 5kg', 'food', 5, 26, 3.2, '蒸馒头包饺子都靠它。'],
    ['bun', '白面馒头（2个）', 'food', 0.3, 4, 0.16, '刚出笼的热馒头，松软香甜。'],
    ['millet', '小米 1kg', 'food', 1, 14, 0.9, '熬粥养胃的粗粮。'],
    ['soybean', '黄豆 1kg', 'food', 1, 12, 0.7, '发豆芽、磨豆浆的原料。'],
    ['pork', '冷鲜猪肉 500g', 'food', 0.5, 30, 1.1, '肥瘦相间的鲜肉，解馋顶饿。'],
    ['beef', '牛肉 500g', 'food', 0.5, 52, 1.9, '高蛋白的硬菜，补气力。'],
    ['chicken', '白条鸡 1只', 'food', 1.5, 18, 2.5, '整鸡一只，炖汤红烧两相宜。'],
    ['egg10', '鸡蛋 10个', 'food', 0.6, 13, 1.0, '每顿饭的蛋白质担当。'],
    ['milk', '常温牛奶 250ml', 'drink', 0.26, 3.5, 0.45, '解渴又管饱的乳白饮品。'],
    ['canned', '午餐肉罐头 340g', 'food', 0.4, 18, 3.5, '铁皮罐里的硬菜，方便携带。'],
    ['biscuit', '苏打饼干 500g', 'food', 0.55, 10, 1.2, '咸香酥脆，垫肚子好物。'],
    ['candy', '水果硬糖 500g', 'food', 0.55, 14, 1.8, '五颜六色的甜，小孩最爱。'],
    ['whiteCandy', '大白兔奶糖 500g', 'food', 0.55, 26, 4.2, '奶香浓郁的老牌糖。'],
    ['chocolate', '巧克力 100g', 'food', 0.12, 16, 9, '苦中带甜，稀罕的洋点心。'],
    ['instantNoodle', '方便面（袋装）', 'food', 0.1, 4, 2.8, '开水一泡就好的现代快餐。'],
    ['sugar', '白砂糖 500g', 'food', 0.55, 7, 0.6, '做菜煮甜汤都离不开。'],
    ['salt', '食盐 500g', 'food', 0.55, 3, 0.15, '百味之首，刚需中的刚需。'],
    ['peanutOil', '花生油 5L', 'food', 4.6, 105, 8.5, '香喷喷的炒菜油。'],
    ['pickle', '榨菜 100g', 'food', 0.12, 3, 0.2, '下饭开胃的小咸菜。'],

    /* ============ 饮品（口渴系统核心） ============ */
    ['water', '瓶装纯净水 550ml', 'drink', 0.6, 2.5, 1.2, '干净卫生的现代饮用水。'],
    ['cola', '可口可乐 500ml', 'drink', 0.55, 3.5, 3, '一开盖就冒泡的洋汽水。'],
    ['soda', '北冰洋汽水（瓶）', 'drink', 0.6, 6, 0.2, '冰凉的橘子味汽水，喝完退瓶。'],
    ['beer', '啤酒 640ml（瓶）', 'drink', 0.7, 5, 0.6, '麦香醇厚的解渴佳酿。'],
    ['teaJasmine', '茉莉花茶 100g', 'drink', 0.12, 28, 2.6, '一撮茶叶泡一天，回味悠长。'],
    ['longjing', '西湖龙井 50g', 'drink', 0.06, 180, 15, '色翠香幽的明前绿茶。'],
    ['coffee', '速溶咖啡 12条', 'drink', 0.15, 20, 15, '提神醒脑的黑色饮品。'],
    ['juice', '橙汁 1L 盒装', 'drink', 1.1, 8, 0, '维C满满的鲜榨风味。'],
    ['sprite', '雪碧 500ml', 'drink', 0.55, 3.5, 3, '透心凉的气泡水。'],
    ['baijiu', '西凤酒 500ml', 'drink', 1.1, 158, 8.5, '老牌白酒，谈事送礼都合适。'],
    ['maotai', '茅台酒 500ml', 'drink', 1.2, 2500, 28, '酱香醇厚的国酒。'],
    ['agedMaotai', '1980年陈年茅台', 'special', 1.2, 52000, 28, '窖藏四十多年的老酒，一瓶难求。'],
    ['yellowWine', '绍兴黄酒 坛', 'drink', 5, 45, 4, '温一温更香的老酒。'],

    /* ============ 日用百货 ============ */
    ['soap', '香皂（块）', 'daily', 0.1, 5, 0.6, '带着花香的清洁品。'],
    ['towel', '纯棉毛巾', 'daily', 0.2, 15, 1.8, '柔软吸水的好毛巾。'],
    ['toothpaste', '牙膏', 'daily', 0.15, 8, 0.9, '清清凉凉护牙齿。'],
    ['thermos', '保温壶', 'daily', 1.2, 68, 13, '一壶热水，从早暖到晚。'],
    ['flashlight', '强光手电筒（含电池）', 'daily', 0.5, 35, 25, '一按即亮的现代照明神器。'],
    ['battery', '五号电池 4节', 'daily', 0.2, 12, 2.5, '手电收音机的能量来源。'],
    ['detergent', '洗衣粉 1kg', 'daily', 1.1, 24, 2.2, '泡沫丰富的去污粉。'],
    ['umbrella', '折叠伞', 'daily', 0.5, 39, 8, '下雨天自动弹开的伞。'],
    ['plasticBasin', '塑料脸盆', 'daily', 0.6, 25, 12, '轻便结实的现代塑料盆。'],

    /* ============ 批发 ============ */
    ['matches', '火柴 整箱200盒', 'wholesale', 4, 80, 13, '一划就着，家家需要。'],
    ['enamel', '搪瓷杯 一箱12个', 'wholesale', 5, 160, 30, '印着红花的老式搪瓷杯。'],
    ['workglove', '劳保手套 一捆12双', 'wholesale', 1.5, 95, 18, '结实耐磨的干活手套。'],
    ['nylonRope', '尼龙绳 50m', 'wholesale', 1.5, 30, 22, '又轻又牢的现代绳索。'],
    ['notebook', '练习本 一包20本', 'wholesale', 2, 40, 9, '学生写作业的横格本。'],
    ['ballpen', '圆珠笔 一盒12支', 'wholesale', 0.4, 45, 11, '顺滑好写的圆珠笔。'],
    ['bulb', '白炽灯泡 一箱20只', 'wholesale', 4, 110, 24, '一拉就亮的老式灯泡。'],
    ['soapPowder', '皂粉 大袋', 'wholesale', 2, 30, 4, '洗衣服去污的大袋皂粉。'],

    /* ============ 种子 ============ */
    ['wheatseed', '高产小麦种 5kg', 'seed', 5, 120, 36, '亩产翻番的现代良种。'],
    ['riceseed', '杂交水稻种 5kg', 'seed', 5, 180, 50, '让稻米增产的杂交种。'],
    ['cornseed', '甜玉米种 2kg', 'seed', 2, 90, 25, '又甜又糯的玉米种。'],
    ['tomatoseed', '抗病番茄种 500g', 'seed', 0.5, 75, 22, '抗病性强的番茄种。'],
    ['cottonseed', '高产棉种 5kg', 'seed', 5, 150, 45, '棉絮更长的棉花种。'],

    /* ============ 农水特产 ============ */
    ['apple', '红富士苹果 一筐', 'produce', 15, 95, 16, '脆甜多汁的当季苹果。'],
    ['banana', '香蕉 一整箱', 'produce', 14, 85, 14, '南方来的软糯香蕉。'],
    ['orange', '赣南脐橙 一筐', 'produce', 15, 110, 20, '汁水足的甜橙。'],
    ['lychee', '增城荔枝 一筐', 'produce', 12, 120, 8, '壳红肉白的岭南佳果。'],
    ['longan', '龙眼 一筐', 'produce', 12, 90, 6, '桂圆肉厚核小的鲜果。'],
    ['prawn', '冻虾 一箱', 'produce', 10, 260, 60, '码头冷链的鲜冻大虾。'],
    ['hairtail', '带鱼 一箱', 'produce', 10, 190, 42, '银光闪闪的深海带鱼。'],
    ['crab', '阳澄湖大闸蟹 礼箱', 'produce', 5, 1880, 40, '膏满黄肥的水产珍馐。'],
    ['wuchangFish', '武昌鱼 两条', 'produce', 2, 45, 2.5, '肉质细嫩的江鱼。'],
    ['lotus', '洪湖莲藕 一捆', 'produce', 10, 12, 1.2, '粉糯清甜的湖藕。'],
    ['dami', '江汉大米 10kg', 'produce', 10, 58, 3.6, '鱼米之乡的稻米。'],
    ['pineNut', '红松子 1kg', 'produce', 1, 60, 3, '林区采的饱满松子。'],
    ['woodEar', '黑木耳 500g', 'produce', 0.5, 50, 3, '泡发后滑嫩的山珍。'],
    ['soybeanOilN', '东北大豆油 5L', 'produce', 4.6, 79, 4.6, '黑土地出产的豆油。'],
    ['raisin', '吐鲁番葡萄干 500g', 'produce', 0.55, 30, 3, '沙漠里晒出的甜蜜。'],
    ['hamiMelon', '哈密瓜（个）', 'produce', 2.5, 25, 2.5, '又脆又甜的西域瓜。'],
    ['jadeMaterial', '和田玉籽料（块）', 'produce', 0.8, 12000, 300, '温润的玉石原料，识货者得之。'],
    ['xinganWool', '新疆细羊毛 10kg', 'produce', 10, 550, 40, '卷曲柔软的高档羊毛。'],
    ['longCotton', '新疆长绒棉 20kg', 'produce', 20, 840, 64, '絮长性好的纺织原料。'],
    ['silkBolt', '真丝绸缎 10米', 'fashion', 2, 1600, 180, '手感顺滑的丝绸面料。'],

    /* ============ 服装 ============ */
    ['coat', '羊毛大衣', 'fashion', 1.8, 799, 78, '挺括保暖的呢大衣。'],
    ['jeans', '牛仔裤', 'fashion', 0.8, 269, 24, '耐磨百搭的粗布裤。'],
    ['sneaker', '运动鞋', 'fashion', 0.9, 399, 36, '轻便弹性的胶底鞋。'],
    ['scarf', '真丝围巾', 'fashion', 0.2, 329, 28, '色彩鲜亮的丝巾。'],
    ['downcoat', '羽绒服', 'fashion', 1.2, 999, 96, '轻而蓬松的保暖服。'],
    ['dacron', '的确良布 3米', 'fashion', 1.2, 88, 7.5, '挺括不易皱的新式面料。'],
    ['cloth', '纯棉布 3米', 'fashion', 1.5, 42, 3.2, '透气亲肤的棉布。'],
    ['nylonStocking', '尼龙丝袜（双）', 'fashion', 0.1, 12, 6, '光滑耐磨的时髦丝袜。'],
    ['leatherShoes', '牛皮皮鞋', 'fashion', 1, 380, 32, '擦得锃亮的头层牛皮鞋。'],

    /* ============ 电子产品 ============ */
    ['radio', '袖珍收音机', 'electronic', 0.5, 260, 38, '能听新闻和歌曲的晶体管收音机。'],
    ['watch', '电子表', 'electronic', 0.1, 180, 35, '带夜光与闹钟的电子表。'],
    ['calculator', '计算器', 'electronic', 0.2, 89, 16, '按键噼啪作响的八位计算器。'],
    ['camera', '胶片相机', 'electronic', 1, 1450, 115, '咔嚓一声定格时光的老相机。'],
    ['cassette', '便携磁带机', 'electronic', 0.8, 680, 62, '放一盘磁带就能听歌。'],
    ['fan', '台式电风扇', 'electronic', 3, 239, 48, '三档风速的摇头电扇。'],
    ['bwTV', '黑白电视机', 'electronic', 8, 800, 420, '旋钮换台的黑白电视。'],
    ['colorTV', '彩色电视机', 'electronic', 20, 3500, 1800, '画面鲜艳的彩色电视。'],
    ['sewingMachine', '缝纫机', 'electronic', 12, 800, 150, '嗒嗒响的铁家伙，缝衣神器。'],

    /* ============ 工业品 ============ */
    ['electricMotor', '三相异步电机', 'industrial', 30, 3200, 800, '带动各种机械的电动机。'],
    ['dieselEngine', '小型柴油机', 'industrial', 45, 4200, 1200, '轰隆隆的柴油动力。'],
    ['handTractor', '手扶拖拉机', 'industrial', 120, 12800, 4500, '田地里的铁牛。'],
    ['bearing', '轴承套装 10套', 'industrial', 8, 260, 45, '转得又稳又顺的轴承。'],
    ['welder', '电焊机', 'industrial', 25, 1600, 380, '火花四溅的焊接设备。'],
    ['waterPump', '离心水泵', 'industrial', 15, 980, 260, '抽水浇地的泵。'],

    /* ============ 书刊 / 技术 ============ */
    ['englishBook', '英语教材（套）', 'book', 1.2, 45, 3, '字母从ABC学起的教材。'],
    ['radioBook', '无线电入门（册）', 'book', 0.6, 35, 2.5, '教你装收音机的启蒙书。'],
    ['agriBook', '农业技术手册', 'book', 0.6, 30, 2.5, '科学种田的参考书。'],
    ['dictionary', '英汉词典', 'book', 1.5, 55, 6, '查单词必备的厚词典。'],
    ['classics', '世界文学名著（册）', 'book', 1, 40, 4, '铅字印刷的文学经典。'],
    ['seedManual', '杂交水稻制种技术册', 'tech', 0.5, 3000, 300, '记载现代制种技术的资料。'],
    ['icsManual', '集成电路工艺笔记', 'tech', 0.5, 5000, 600, '关于芯片工艺的珍贵笔记。'],
    ['radioTech', '收音机改良图纸', 'tech', 0.3, 2200, 220, '能提升收音机性能的图纸。'],
    ['plasticTech', '塑料成型工艺手册', 'tech', 0.4, 1800, 150, '塑料加工的技术手册。'],

    /* ============ 邮票 / 票证 ============ */
    ['monkey', '庚申猴票 单张', 'stamp', 0.001, 9500, 0.08, '红底金猴的生肖邮票。'],
    ['monkeySet', '庚申猴票 四方联', 'stamp', 0.004, 52000, 0.32, '四张连排的猴票整版。'],
    ['redstamp', '“全国山河一片红”', 'stamp', 0.001, 68000, 0.1, '存世极少的珍邮。'],
    ['landscape', '黄山风景邮票 一套', 'stamp', 0.005, 1800, 0.6, '印着黄山美景的套票。'],
    ['meatTicket', '肉票（1斤）', 'ticket', 0, 25, 1.1, '凭此票买一斤猪肉；票证收藏也值钱。'],
    ['cigaretteTicket', '烟票', 'ticket', 0, 10, 0.5, '凭此票买烟；稀缺票证有收藏价值。'],
    ['wineTicket', '酒票', 'ticket', 0, 10, 0.5, '凭此票买酒；稀缺票证有收藏价值。'],
    ['foodTicket', '粮票（1斤）', 'ticket', 0, 12, 0.25, '凭此票买一斤主粮；全国粮票可跨省，收藏火热。'],
    ['clothTicket', '布票（1尺）', 'ticket', 0, 15, 0.6, '凭此票买一尺布料；收藏价值不低。'],
    ['oilTicket', '油票（1斤）', 'ticket', 0, 18, 0.85, '凭此票买一斤油；稀缺票证。'],
    ['sugarTicket', '糖票（1斤）', 'ticket', 0, 16, 0.8, '凭此票买一斤糖；稀缺票证。'],

    /* ============ 特殊 ============ */
    ['hongtashan', '红塔山香烟（条）', 'special', 0.4, 135, 7.5, '醇厚的紧俏烟。'],
    ['panda', '熊猫香烟（条）', 'special', 0.4, 18000, 15, '特供档次的珍稀烟。'],
    ['xifengJiu', '西凤酒（瓶）', 'special', 1.1, 158, 8.5, '老牌凤香型白酒。'],

    /* ============ 古董谜团件 ============ */
    ['mystery_jar', '神秘的罐子', 'antique', 3, 5, 18, '泥垢覆盖的旧罐子，鉴定后或有大发现。'],
    ['mystery_bowl', '破损的碗', 'antique', 0.5, 5, 12, '残损旧碗，真假与年代待鉴定。'],
    ['mystery_scroll', '发黄的画卷', 'antique', 0.5, 5, 25, '画心未展的旧画卷，或藏名迹。'],
    ['mystery_bronze', '生锈的铜器', 'antique', 2, 5, 35, '锈迹斑斑的铜器，锈下或有文章。'],
    ['mystery_jade', '温润的玉佩', 'antique', 0.3, 5, 15, '包浆温润的旧玉佩，真伪待辨。']
  ];

  // 消耗效果
  const CONSUME = {
    bun: { hunger: 24, thirst: -2, energy: 4, spirit: 3 },
    milk: { hunger: 6, thirst: 20, energy: 3, spirit: 2 },
    canned: { hunger: 42, thirst: -4, energy: 10, spirit: 2 },
    biscuit: { hunger: 35, thirst: -3, energy: 8, spirit: 3 },
    candy: { hunger: 22, thirst: 2, energy: 6, spirit: 6 },
    whiteCandy: { hunger: 22, thirst: 2, energy: 7, spirit: 8 },
    chocolate: { hunger: 18, thirst: 1, energy: 12, spirit: 10 },
    instantNoodle: { hunger: 46, thirst: 3, energy: 10, spirit: 3 },
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
    yellowWine: { hunger: 0, thirst: 12, energy: -6, spirit: 12 }
  };

  const ITEMS = {};
  RAW.forEach((r) => {
    ITEMS[r[0]] = {
      id: r[0], name: r[1], cat: r[2], size: r[3],
      modern: r[4], old: r[5], desc: r[6], action: r[7] || 'trade',
      consume: CONSUME[r[0]] || null,
      isMystery: r[0].startsWith('mystery_'),
      isTicket: r[2] === 'ticket'
    };
  });

  // 文物谱系（鉴定揭示）
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

  // 各城市的需求画像（影响市场饱和度的均衡点与偏好）
  // needBoost: 这座城市格外渴求的类别（饱和回偏速度更快、初始偏低）
  LJ.CITY_DEMAND = {
    beijing: { produce: 0.6, fashion: 0.4, electronic: 0.5, drink: 0.3, seed: 0.5, tech: 0.4, special: 0.5, daily: 0.3 },
    guangzhou: { produce: 0.4, industrial: 0.7, fashion: 0.3, food: 0.5, daily: 0.4, electronic: 0.4 },
    wuhan: { electronic: 0.6, fashion: 0.5, drink: 0.3, special: 0.4, daily: 0.3, industrial: 0.3 },
    harbin: { produce: 0.9, food: 0.6, fashion: 0.5, drink: 0.5, daily: 0.4 },
    urumqi: { fashion: 0.6, daily: 0.5, food: 0.5, electronic: 0.6, drink: 0.4 },
    hangzhou: { industrial: 0.6, produce: 0.4, special: 0.5, tech: 0.3, electronic: 0.5, book: 0.4 },
    hongkong: { antique: 0.8, stamp: 0.5, special: 0.6, food: 0.4, electronic: 0.4 },
    tokyo: { antique: 0.7, tech: 0.5, special: 0.4, produce: 0.4, book: 0.3 },
    shanghai: { fashion: 0.5, electronic: 0.4, wholesale: 0.4, drink: 0.3 },
    sanfrancisco: { industrial: 0.6, seed: 0.5, produce: 0.4 },
    london: { antique: 0.6, special: 0.5, book: 0.4 },
    nairobi: { industrial: 0.6, daily: 0.5, food: 0.4, wholesale: 0.4 }
  };

  // 国家统购兜底价类别（粮食/农产品价格有下限）
  LJ.PRICE_FLOOR = {
    food: 0.6, produce: 0.6, seed: 0.55, daily: 0.5, wholesale: 0.5,
    fashion: 0.45, electronic: 0.45, industrial: 0.45, book: 0.5, tech: 0.5,
    drink: 0.5, special: 0.4, antique: 0.4, stamp: 0.4, ticket: 0.4
  };
})();
