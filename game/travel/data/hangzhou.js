/* ============ 浙江·杭州 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hangzhou',
    name: '杭州',
    country: '中国',
    cc: 'CN',
    province: '浙江',
    flag: '🇨🇳',
    region: '华东',
    hero: '🌉',
    desc: '人间天堂：西湖十景四季如画，龙井茶山飘着清香， digital 之城与千年古都共存，一碗片儿川开启杭州的清晨。',
    travel: [{ name: '高铁', icon: '🚄', cost: 390 }, { name: '飞机', icon: '✈️', cost: 720 }],
    visa: null,
    spots: [
      { id: 'hangzhou_xihu', name: '西湖', icon: '🌊', price: 0, desc: '世界文化遗产，"欲把西湖比西子"。苏堤春晓、断桥残雪、三潭印月，十景走一圈就是一部宋代诗集。' },
      { id: 'hangzhou_leifeng', name: '雷峰塔·灵隐寺', icon: '🛕', price: 40, desc: '雷峰夕照与白蛇传说千年流传。灵隐寺香火鼎盛，飞来峰石窟造像三百余尊，济公的传说在这里。' },
      { id: 'hangzhou_longjing', name: '龙井村·梅家坞', icon: '🍃', price: 0, desc: '龙井茶原产地，层层茶山如绿色指纹。春天采茶体验，坐在茶农家喝一杯明前龙井，"整个春天都在杯里"。' },
      { id: 'hangzhou_xixi', name: '西溪国家湿地公园', icon: '🛶', price: 80, desc: '"西溪且留下"——宋高宗的感叹。摇橹船穿芦苇荡，火柿节秋天挂满红灯笼，城市里的野趣秘境。' },
      { id: 'hangzhou_qinghefang', name: '清河坊·南宋御街', icon: '🏮', price: 0, desc: '南宋皇城的商业街，胡庆余堂"江南药王"。定胜糕与龙须糖，穿宋制汉服逛街最应景。' },
      { id: 'hangzhou_liangzhu', name: '良渚古城遗址公园', icon: '🏛️', price: 60, desc: '五千年中华文明的实证地，世界文化遗产。莫角山宫殿区与反山王陵，玉琮上的神徽精细到毫米。' },
      { id: 'hangzhou_qianjiang', name: '钱江新城灯光秀·城市阳台', icon: '🌃', price: 0, desc: '"大金球"与日月同辉的CBD夜景。整点灯光秀点亮钱塘江两岸，"古典杭州的另一面"。' },
    ],
    souvenirs: [
      { id: 'hangzhou_pianerchuan', name: '片儿川', icon: '🍜', tag: '食', type: '美食', price: 20, desc: '雪菜、笋片、瘦肉片浇头，"杭州人的元气面"。奎元馆百年老店，"一碗面的百年江湖"。' },
      { id: 'hangzhou_dongpo', name: '东坡肉', icon: '🍖', tag: '食', type: '美食', price: 68, desc: '苏东坡任杭州知州时的"民生菜"，慢火煨到酥烂。一小方砂锅上桌，肥而不腻入口即化。' },
      { id: 'hangzhou_longjing_cha', name: '西湖龙井', icon: '🍵', tag: '食', type: '特产', price: 150, desc: '"绿茶皇后"，明前狮峰龙井一叶难求。豆花香与板栗香交织，"色绿、香郁、味甘、形美"四绝。' },
      { id: 'hangzhou_xiaolong', name: '知味观小笼·猫耳朵', icon: '🥟', tag: '食', type: '美食', price: 30, desc: '杭州小笼皮薄汁多，猫耳朵是"面做的贝壳"。知味观百年点心拼盘，一次尝遍杭州味。' },
      { id: 'hangzhou_oufen', name: '西湖藕粉·桂花糖', icon: '🍮', tag: '食', type: '特产', price: 35, desc: '西湖藕粉冲出来晶莹剔透，撒桂花更香。糖桂花是杭州甜品的"万能钥匙"。' },
      { id: 'hangzhou_silk', name: '杭罗·丝绸', icon: '🧣', tag: '衣', type: '服饰', price: 200, desc: '杭罗与苏缎并称，"丝绸之府"的手艺。丝巾与睡衣轻盈透气，杭州丝绸市场可以淘货。' },
      { id: 'hangzhou_sanhua', name: '王星记扇子', icon: '🪭', tag: '衣', type: '文创', price: 80, desc: '百年扇庄，黑纸扇"雨淋不透、日晒不翘"。一把扇子甩出西湖十景，"杭州的名片"。' },
      { id: 'hangzhou_xihu_wenxue', name: '西湖文创', icon: '🔮', tag: '衣', type: '文创', price: 40, desc: '断桥、雷峰塔冰箱贴，白娘子许仙盲盒。西博文创的"传说系列"，把神话带回家。' },
      { id: 'hangzhou_chashan', name: '龙井采茶炒茶体验', icon: '🌱', tag: '玩', type: '体验', price: 150, desc: '春天背茶篓上山采青，跟师傅学铁锅杀青。炒好的茶自己冲泡，"从叶到杯"的完整仪式。' },
      { id: 'hangzhou_huachuan', name: '西湖摇橹船', icon: '🛶', tag: '行', type: '体验', price: 180, desc: '包一条摇橹船游三潭印月，船娘讲白蛇传。避开人潮的西湖玩法，"水上视角"最诗意。' },
      { id: 'hangzhou_qima2', name: '径山骑行·九溪徒步', icon: '🚲', tag: '玩', type: '体验', price: 100, desc: '九溪十八涧徒步，溪水从脚下叮咚流过。径山茶山骑行，"杭州人的周末山水"。' },
      { id: 'hangzhou_minsu', name: '茶山民宿', icon: '🏨', tag: '住', type: '住宿', price: 450, desc: '龙井山里的茶园民宿，露台对着层层茶田。清晨云雾漫过茶山，"住在画里"。' },
    ],
    stories: [
      { id: 'hangzhou_story_bai', name: '断桥不断', icon: '🌉', desc: '断桥其实在冬天雪后"桥面雪化桥背雪残"才像断开。白娘子与许仙在此借伞定情，"断桥不断，肝肠寸断"。' },
      { id: 'hangzhou_story_dongpo', name: '苏东坡的"水利 工程"', icon: '🌊', desc: '苏堤是苏东坡疏浚西湖的淤泥堆成。"东坡肉"是他给民工的犒劳——大文豪还是基建狂魔。' },
      { id: 'hangzhou_story_longjing', name: '十八棵御茶的传说', icon: '🍃', desc: '乾隆下江南在狮峰山采茶，惊闻太后生病随手一扔竟治好。山顶十八棵茶树从此封为"御茶"。' },
      { id: 'hangzhou_story_liangzhu', name: '良渚改写"五千年"', icon: '🏛️', desc: '良渚古城水利系统是世界最早大型水利工程之一。2019年申遗成功，中华五千年文明有了国际认证。' },
      { id: 'hangzhou_story_jingji', name: '杭儿风的"排队学"', icon: '👥', desc: '杭州人爱尝鲜，网红店排队全国闻名。从奶茶到葱包烩，"杭儿风"一刮就是一条街。' },
      { id: 'hangzhou_story_xihu', name: '西湖为什么免费', icon: '🎫', desc: '2002年西湖在全国率先免门票，"还湖于民"。结果游客暴增带动全城消费，"免费西湖"成了经济学案例。' },
    ],
  });
})();
