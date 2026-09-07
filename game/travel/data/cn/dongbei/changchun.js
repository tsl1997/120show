/* ============ 吉林·长春 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'changchun',
    name: '长春',
    country: '中国',
    cc: 'CN',
    province: '吉林',
    flag: '🇨🇳',
    region: '东北',
    hero: '🎬',
    desc: '"北国春城"：新中国电影与汽车的摇篮，伪满皇宫藏着沉重历史，净月潭的林海雪原，冬天还有世界级冰雪新天地。',
    travel: [{ name: '高铁', icon: '🚄', cost: 900 }, { name: '飞机', icon: '✈️', cost: 1200 }],
    visa: null,
    spots: [
      { id: 'changchun_weiman', name: '伪满皇宫博物院', icon: '🏛️', price: 70, desc: '末代皇帝溥仪"执政"十四年的宫殿，中西日三种风格混搭。展陈细致还原傀儡王朝的十三年，看完心情复杂。' },
      { id: 'changchun_changying', name: '长影旧址博物馆', icon: '🎬', price: 90, desc: '新中国电影摇篮：译制片、黑白片的诞生地。老摄影棚与录音室开放参观，"电影粉的朝圣地"。' },
      { id: 'changchun_qiche', name: '一汽·红旗文化展馆', icon: '🚗', price: 60, desc: '"共和国汽车长子"，第一辆红旗轿车诞生地。看老红旗加长车阵列，工业浪漫拉满。' },
      { id: 'changchun_jingyuetan', name: '净月潭', icon: '🌲', price: 30, desc: '亚洲最大人工林海环绕的一汪碧水。夏天环潭骑行，冬天雪地摩托与越野滑雪，"长春之肺"。' },
      { id: 'changchun_shijie', name: '长影世纪城·冰雪新天地', icon: '🎡', price: 240, desc: '特效电影主题园，四季皆可玩。冬季冰雪新天地用十万方冰雕出"冰城世界"，夜灯一开美到失语。' },
      { id: 'changchun_wenhua', name: '这有山', icon: '⛰️', price: 0, desc: '商场里"建了一座山"，山洞、栈道、庙宇层叠。网红室内打卡地，逛商场像进桃花源。' },
      { id: 'changchun_nanguan', name: '南湖公园·新民大街', icon: '🌿', price: 0, desc: '伪满"八大部"老建筑沿街排开，新民大街是全国历史文化名街。夏夜南湖划船，冬夜看冰灯。' },
    ],
    souvenirs: [
      { id: 'changchun_guobaorou', name: '长春锅包肉', icon: '🍖', tag: '食', type: '美食', price: 45, desc: '长春版锅包肉更"土"更实在：番茄酱版的甜酸。雪后来一盘配大米饭，东北冬天的标配。' },
      { id: 'changchun_zhaxianguan', name: '真不同酱肉', icon: '🍖', tag: '食', type: '美食', price: 55, desc: '百年酱肉老号，酱肘子肥而不腻。真空装带回家，切片配酒就是一桌东北硬菜。' },
      { id: 'changchun_hongchang', name: '鼎丰真糕点', icon: '🍪', tag: '食', type: '特产', price: 40, desc: '1907年老字号，萨其马松软不粘牙。月饼与绿豆糕是长春人的节令记忆。' },
      { id: 'changchun_huimian', name: '回宝珍饺子', icon: '🥟', tag: '食', type: '美食', price: 30, desc: '回民饺子老号，牛肉灌汤饺一口爆汁。配糖蒜与饺子汤，"原汤化原食"。' },
      { id: 'changchun_remi', name: '人参·鹿茸', icon: '🌿', tag: '食', type: '特产', price: 200, desc: '长白山人参与鹿茸的正规集散地。参片泡水、鹿茸片炖汤，东北三宝带回家。' },
      { id: 'changchun_lanyou', name: '蓝莓干·木耳', icon: '🫐', tag: '食', type: '特产', price: 60, desc: '长白山野生蓝莓干酸甜浓，秋木耳厚实。山货大礼包，炖汤泡水都好。' },
      { id: 'changchun_dianying', name: '长影文创', icon: '🎞️', tag: '衣', type: '文创', price: 45, desc: '《英雄儿女》《上甘岭》海报胶片书签。新中国电影迷的情怀藏品，"胶片里的年代"。' },
      { id: 'changchun_qichemodel', name: '红旗车模', icon: '🚙', tag: '衣', type: '文创', price: 120, desc: '红旗轿车合金模型，工业迷的心头好。从CA72到概念车，"中国汽车史"摆一排。' },
      { id: 'changchun_xuewen', name: '冰雪文创', icon: '⛄', tag: '衣', type: '文创', price: 35, desc: '冰雕迷你灯、雪绒玩偶。长春冰雪新天地的"可带走版"，摆在桌上自带寒气。' },
      { id: 'changchun_huaxue2', name: '净月潭滑雪·雪地摩托', icon: '🏂', tag: '玩', type: '体验', price: 180, desc: '城市里的国家级滑雪场，雪道穿林海。雪地摩托轰鸣穿越，雪雾扑面超解压。' },
      { id: 'changchun_paozao', name: '东北大澡堂', icon: '🧖', tag: '玩', type: '体验', price: 80, desc: '长春的洗浴文化登峰造极，搓澡+自助餐+影院一票通玩。南方网友："这是洗浴界的迪士尼。"' },
      { id: 'changchun_zhuoou', name: '卓展商圈夜生活', icon: '🌃', tag: '玩', type: '体验', price: 60, desc: '重庆路商圈的夜市与酒吧街。长春夜生活节奏慢，撸串唱歌到半夜，实惠到感人。' },
      { id: 'changchun_minsu', name: '红旗街公寓酒店', icon: '🏨', tag: '住', type: '住宿', price: 260, desc: '红旗街商圈的公寓酒店，楼下就是"这有山"。冬天进门就有暖气，室外零下二十也不怕。' },
    ],
    stories: [
      { id: 'changchun_story_dianying', name: '新中国电影的摇篮', icon: '🎬', desc: '长春电影制片厂前身是1945年成立的东北电影公司，创造了七个"新中国第一"。《董存瑞》《英雄儿女》都出自这里。' },
      { id: 'changchun_story_qiche', name: '第一辆"解放"下线', icon: '🚗', desc: '1956年7月13日，第一辆解放牌卡车在一汽驶下生产线，终结了中国不能造车的历史。全厂工人激动落泪。' },
      { id: 'changchun_story_puyi', name: '溥仪的"伪皇宫"', icon: '🏛️', desc: '溥仪在长春当了十四年"执政"，实际毫无自由。博物院里他的日记与手表，件件都是傀儡生涯的注脚。' },
      { id: 'changchun_story_lvbai', name: '净月潭的"绿巨人"', icon: '🌲', desc: '净月潭林海是上世纪人工种下的，如今是亚洲最大人工林。瓦松、樟子松层层叠叠，冬天变成雪原。' },
      { id: 'changchun_story_xi', name: '长影译制片的腔调', icon: '🎙️', desc: '《列宁在1918》等经典译制腔是几代人的记忆。长影配音演员的"腔调"，成了网络时代的新梗。' },
      { id: 'changchun_story_bing', name: '冰雕是"极寒的艺术"', icon: '❄️', desc: '冰雪新天地的冰砖取自净月潭，透光率极高。零下二十度里工人日夜雕琢，"冰是北方人的乐高"。' },
    ],
  });
})();
