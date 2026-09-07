/* ============ 主题收藏系列·中国文脉A（古都/国宝/美食） ============ */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  window.TRAVEL_SERIES.push({
    id: 'sr_gudu', cat: 'china', name: '千年古都系列（华夏王朝）', years: '——', author: '华夏文明', theme: '古都地标收藏',
    background: '西安十三朝、洛阳十三朝、南京六朝、北京五朝、开封八朝、杭州南宋——六大古都串起半部中国史。',
    story: '一座城的城墙下，埋着半部中国史。',
    protagonist: '历代王朝与都城', slogan: '地上看山西，地下看陕西，都城看六朝兴废。',
    cities: ['xian', 'luoyang', 'nanjing', 'beijing', 'kaifeng', 'hangzhou'],
    items: [
      { id: 'gudu_xian', name: '西安·兵马俑陶俑', type: '古都信物', city: 'xian', price: 180, desc: '秦俑千人千面——十三朝古都的地下军团。' },
      { id: 'gudu_luoyang', name: '洛阳·牡丹瓷', type: '古都信物', city: 'luoyang', price: 160, desc: '牡丹瓷定格花开——千年帝都的国色天香。' },
      { id: 'gudu_nanjing', name: '南京·云锦书签', type: '古都信物', city: 'nanjing', price: 150, desc: '寸锦寸金的云锦——六朝金粉地的织造传奇。' },
      { id: 'gudu_beijing', name: '北京·故宫角楼模型', type: '古都信物', city: 'beijing', price: 170, desc: '九梁十八柱七十二条脊——紫禁城的建筑绝唱。' },
      { id: 'gudu_kaifeng', name: '开封·清明上河园木刻', type: '古都信物', city: 'kaifeng', price: 140, desc: '一卷上河图，梦回大宋东京汴梁。' },
      { id: 'gudu_hangzhou', name: '杭州·南宋官窑杯', type: '古都信物', city: 'hangzhou', price: 180, desc: '雨过天青的南宋官窑——临安城的雅致残梦。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_guobao', cat: 'china', name: '国宝重器系列（镇馆之宝）', years: '——', author: '华夏文明', theme: '国宝文物收藏',
    background: '从曾侯乙编钟到三星堆青铜，从兵马俑到莫高窟——每一件国宝都是文明的年轮。全国各大博物馆的镇馆之宝等你集齐。',
    story: '国宝不语，一眼千年。',
    protagonist: '各大博物馆镇馆之宝', slogan: '一眼千年，相隔万年。',
    cities: ['xian', 'wuhan', 'changsha', 'chengdu', 'dunhuang', 'datong', 'luoyang', 'beijing'],
    items: [
      { id: 'gb_wuhan', name: '越王勾践剑文创', type: '国宝卡', city: 'wuhan', price: 180, desc: '千年不锈的天下第一剑——湖北省博物馆镇馆之宝。' },
      { id: 'gb_xian', name: '兵马俑手办', type: '国宝卡', city: 'xian', price: 180, desc: '秦俑千人千面——世界第八大奇迹。' },
      { id: 'gb_changsha', name: '马王堆素纱襌衣', type: '国宝卡', city: 'changsha', price: 200, desc: '四十九克轻若烟雾——西汉织造的巅峰。' },
      { id: 'gb_chengdu', name: '三星堆青铜面具', type: '国宝卡', city: 'chengdu', price: 200, desc: '纵目千年的古蜀凝视——沉睡三千年一醒惊天下。' },
      { id: 'gb_dunhuang', name: '莫高窟飞天壁画临本', type: '国宝卡', city: 'dunhuang', price: 220, desc: '反弹琵琶的飞天——丝路之上的千年画廊。' },
      { id: 'gb_datong', name: '云冈石窟造像拓片', type: '国宝卡', city: 'datong', price: 200, desc: '昙曜五窟的大佛微笑——北魏皇家石窟。' },
      { id: 'gb_luoyang', name: '龙门卢舍那拓片', type: '国宝卡', city: 'luoyang', price: 200, desc: '卢舍那大佛的东方微笑——武则天容貌的传说。' },
      { id: 'gb_beijing', name: '故宫《千里江山图》文创', type: '国宝卡', city: 'beijing', price: 220, desc: '十八岁王希孟的青绿山水——故宫顶流。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_meishi', cat: 'china', name: '舌尖中国美食系列（城市味道）', years: '——', author: '中华饮食', theme: '城市招牌美食收藏',
    background: '一方水土一方味：武汉的过早、北京的烤鸭、川渝的火锅、江南的点心——每一座城市的清晨与深夜，都由味道定义。',
    story: '民以食为天——尝遍一座城，才算来过一座城。',
    protagonist: '中华名小吃', slogan: '唯美食与旅行不可辜负。',
    cities: ['wuhan', 'beijing', 'chongqing', 'shanghai', 'xian', 'guangzhou', 'changsha', 'chengdu'],
    items: [
      { id: 'ms_wuhan', name: '武汉·热干面', type: '美食卡', city: 'wuhan', price: 80, desc: '碱水面拌芝麻酱——武汉人的过早信仰。' },
      { id: 'ms_beijing', name: '北京·果木烤鸭', type: '美食卡', city: 'beijing', price: 100, desc: '果木挂炉，片皮蘸糖——京城百年味道。' },
      { id: 'ms_chongqing', name: '重庆·九宫格火锅', type: '美食卡', city: 'chongqing', price: 100, desc: '牛油九宫格——山城的麻辣江湖。' },
      { id: 'ms_shanghai', name: '上海·南翔小笼包', type: '美食卡', city: 'shanghai', price: 90, desc: '皮薄汁多的城隍庙味道。' },
      { id: 'ms_xian', name: '西安·羊肉泡馍', type: '美食卡', city: 'xian', price: 90, desc: '自己掰馍才够味——长安的碳水豪情。' },
      { id: 'ms_guangzhou', name: '广州·一盅两件早茶', type: '美食卡', city: 'guangzhou', price: 100, desc: '虾饺凤爪配普洱——广州人的慢生活。' },
      { id: 'ms_changsha', name: '长沙·黑色臭豆腐', type: '美食卡', city: 'changsha', price: 80, desc: '闻着臭吃着香——火宫殿的灵魂小吃。' },
      { id: 'ms_chengdu', name: '成都·红油串串', type: '美食卡', city: 'chengdu', price: 90, desc: '竹签上的成都——麻辣鲜香的市井江湖。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_shuixiang', cat: 'china', name: '江南水乡系列（烟雨江南）', years: '——', author: '江南文脉', theme: '江南风物收藏',
    background: '君到姑苏见，人家尽枕河。小桥流水的江南：园林、评弹、黄酒、青团——温柔了整个中国的想象。',
    story: '春风又绿江南岸——摇一把乌篷船，枕一帘水乡梦。',
    protagonist: '江南六城', slogan: '江南好，风景旧曾谙。',
    cities: ['suzhou', 'hangzhou', 'shaoxing', 'yangzhou', 'huangshan', 'jingdezhen'],
    items: [
      { id: 'sxz_suzhou', name: '苏州·园林花窗剪纸', type: '水乡信物', city: 'suzhou', price: 150, desc: '移步换景的花窗——咫尺之内再造乾坤。' },
      { id: 'sxz_hangzhou', name: '杭州·西湖龙井', type: '水乡信物', city: 'hangzhou', price: 170, desc: '明前一芽一叶——狮峰山下的豆花香。' },
      { id: 'sxz_shaoxing', name: '绍兴·花雕黄酒', type: '水乡信物', city: 'shaoxing', price: 160, desc: '女儿红埋坛十八年——水乡的酒香与乡愁。' },
      { id: 'sxz_yangzhou', name: '扬州·漆器雕花盒', type: '水乡信物', city: 'yangzhou', price: 170, desc: '点螺漆器的千年光泽——淮扬风雅。' },
      { id: 'sxz_huangshan', name: '黄山·徽派砖雕拓片', type: '水乡信物', city: 'huangshan', price: 160, desc: '粉墙黛瓦马头墙——徽州三雕的功夫。' },
      { id: 'sxz_jingdezhen', name: '景德镇·青花瓷杯', type: '水乡信物', city: 'jingdezhen', price: 180, desc: '白釉青花一火成——千年瓷都的手温。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_minzu', cat: 'china', name: '民族风情系列（多彩中华）', years: '——', author: '五十六个民族', theme: '民族风情收藏',
    background: '从草原那达慕到雪域晒佛节，从傣家泼水到苗侗歌舞——五十六个民族的节日与歌谣，构成多彩中华。',
    story: '各美其美，美美与共。',
    protagonist: '各族兄弟姐妹', slogan: '像石榴籽一样紧紧抱在一起。',
    cities: ['hulunbeier', 'kashi', 'xishuangbanna', 'lasa', 'guiyang', 'yinchuan'],
    items: [
      { id: 'mz_hulunbeier', name: '呼伦贝尔·蒙古族哈达', type: '风情卡', city: 'hulunbeier', price: 150, desc: '那达慕的哈达与马头琴——草原的祝福。' },
      { id: 'mz_kashi', name: '喀什·维吾尔族小花帽', type: '风情卡', city: 'kashi', price: 150, desc: '朵帕巴扎与都塔尔琴声——丝路老城的风情。' },
      { id: 'mz_xishuangbanna', name: '西双版纳·傣族筒帕', type: '风情卡', city: 'xishuangbanna', price: 150, desc: '泼水节的筒帕与孔雀舞——雨林傣乡。' },
      { id: 'mz_lasa', name: '拉萨·藏式经幡', type: '风情卡', city: 'lasa', price: 160, desc: '风马旗在雪域猎猎——高原的祈祷。' },
      { id: 'mz_guiyang', name: '贵阳·苗族银饰', type: '风情卡', city: 'guiyang', price: 170, desc: '苗家银冠叮当响——黔中多彩民族风。' },
      { id: 'mz_yinchuan', name: '银川·回族盖碗茶具', type: '风情卡', city: 'yinchuan', price: 140, desc: '八宝盖碗刮碗子——塞上回乡待客礼。' },
    ]
  });
})();
