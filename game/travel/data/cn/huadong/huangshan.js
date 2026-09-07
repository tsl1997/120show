/* ============ 安徽·黄山 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'huangshan',
    name: '黄山',
    country: '中国',
    cc: 'CN',
    province: '安徽',
    flag: '🇨🇳',
    region: '华东',
    hero: '⛰️',
    desc: '"五岳归来不看山，黄山归来不看岳"：奇松怪石云海温泉四绝齐备，山脚下的徽州古村白墙黛瓦，一城揽尽安徽之美。',
    travel: [{ name: '高铁', icon: '🚄', cost: 330 }, { name: '飞机', icon: '✈️', cost: 800 }],
    visa: null,
    spots: [
      { id: 'huangshan_shan', name: '黄山风景区', icon: '🏔️', price: 190, desc: '世界文化与自然双遗产。迎客松、飞来石、光明顶，"奇松怪石云海温泉"四绝，日出云海是一生必看。' },
      { id: 'huangshan_xihai', name: '西海大峡谷', icon: '🏞️', price: 0, desc: '"梦幻景区"，网红小火车穿越峡谷。栈道贴壁千仞，云海从脚下漫过，黄山最刺激的一段。' },
      { id: 'huangshan_hongcun', name: '宏村', icon: '🏘️', price: 94, desc: '世界遗产徽州古村，"中国画里的乡村"。月沼倒映白墙黛瓦，南湖画桥是《卧虎藏龙》取景地。' },
      { id: 'huangshan_xidi', name: '西递', icon: '🏛️', price: 94, desc: '明清古民居博物馆，"桃花源里人家"。胡文光刺史牌楼巍峨，木雕砖雕石雕"三雕"精美绝伦。' },
      { id: 'huangshan_tunxi', name: '屯溪老街', icon: '🏮', price: 0, desc: '"流动的清明上河图"，徽墨歙砚老铺连排。臭鳜鱼与毛豆腐的香气，夜灯下的青石板路。' },
      { id: 'huangshan_chengkan', name: '呈坎·棠樾牌坊群', icon: '⛩️', price: 102, desc: '呈坎"江南第一村"，八卦布局迷宫般神秘。棠樾七座牌坊列阵，"忠孝节义"的石头史记。' },
      { id: 'huangshan_xinanj', name: '新安江山水画廊', icon: '🚢', price: 148, desc: '乘船游新安江，两岸徽村与枇杷林。春天油茶花开，"山水画廊"名副其实。' },
    ],
    souvenirs: [
      { id: 'huangshan_chouguiyu', name: '臭鳜鱼', icon: '🐟', tag: '食', type: '美食', price: 88, desc: '闻着臭吃着鲜，"徽菜之首"。腌制发酵的鳜鱼蒜瓣肉，红烧浇汁下饭三碗。' },
      { id: 'huangshan_maodoufu', name: '毛豆腐', icon: '🧈', tag: '食', type: '美食', price: 25, desc: '长着白绒毛的豆腐煎到两面黄，蘸辣酱吃。"发酵的魔法"，外地人的勇者挑战。' },
      { id: 'huangshan_she', name: '黄山烧饼', icon: '🫓', tag: '食', type: '特产', price: 20, desc: '梅干菜猪肉馅炉烤酥饼，"蟹壳黄"。刚出炉咔嚓掉渣，一袋接一袋停不下来。' },
      { id: 'huangshan_heimu', name: '徽墨·歙砚', icon: '🖤', tag: '衣', type: '文创', price: 180, desc: '"天下墨业在绩溪"，徽墨描金描彩；歙砚四大名砚之一。文房收藏级，"落纸如漆"。' },
      { id: 'huangshan_chemu', name: '太平猴魁·祁门红茶', icon: '🍵', tag: '食', type: '特产', price: 130, desc: '猴魁两叶抱一芽"猴韵"十足，祁红是"世界三大高香茶"。安徽茶的双子星。' },
      { id: 'huangshan_weicai', name: '徽州贡菊', icon: '🌼', tag: '食', type: '特产', price: 45, desc: '黄山贡菊泡水清肝明目，"四大名菊"之首。一撮菊花一杯水，"徽州的白月光"。' },
      { id: 'huangshan_tiehua', name: '徽州竹雕·砖雕文创', icon: '🧱', tag: '衣', type: '文创', price: 90, desc: '徽州三雕小件：竹雕笔筒、砖雕镇纸。把徽派建筑的精美"搬"上桌面。' },
      { id: 'huangshan_sheying', name: '黄山日出云海观测', icon: '🌄', tag: '玩', type: '体验', price: 0, desc: '光明顶或清凉台蹲日出，云海翻涌如潮。"不到光明顶，不见黄山景"，冻着也值。' },
      { id: 'huangshan_hongcun_xiezhen', name: '宏村写生·汉服旅拍', icon: '🎨', tag: '玩', type: '体验', price: 120, desc: '月沼边写生的学生成风景，你也可以画一幅。汉服旅拍在白墙黛瓦间，"画里乡村"成片。' },
      { id: 'huangshan_wenquan', name: '黄山温泉', icon: '♨️', tag: '玩', type: '体验', price: 198, desc: '黄山四绝之一的飘雪温泉，李白曾来泡。爬山后泡汤，"四绝打卡完成"。' },
      { id: 'huangshan_susong', name: '山上住宿看日出', icon: '🏨', tag: '住', type: '住宿', price: 600, desc: '山上酒店虽贵但能看日出云海。凌晨五点裹军大衣出门，"人生高光时刻"。' },
    ],
    stories: [
      { id: 'huangshan_story_xuke', name: '徐霞客的"黄山宣言"', icon: '📖', desc: '"薄海内外无如徽之黄山"——徐霞客两登黄山后感叹。这句话让黄山名扬天下四百年。' },
      { id: 'huangshan_story_yingsong', name: '迎客松的"年龄谜"', icon: '🌲', desc: '迎客松千岁高龄，有专职"保姆"守着。风速超标还要给它"体检加固"，国宝级待遇。' },
      { id: 'huangshan_story_hongcun', name: '宏村的"牛形水系"', icon: '💧', desc: '宏村整体布局像一头牛：月沼是牛胃、水圳是牛肠。600年前的人工水系至今饮用，古人智慧封神。' },
      { id: 'huangshan_story_hui', name: '徽商的"无徽不成镇"', icon: '💰', desc: '明清徽商富甲天下，回家狂盖宅院祠堂。白墙黛瓦的马头墙，是"徽商的乡愁与排面"。' },
      { id: 'huangshan_story_chou', name: '臭鳜鱼的"化学魔法"', icon: '🐟', desc: '鳜鱼腌六七天产生特殊发酵香，"似臭非臭"。徽州人靠它翻山运鱼保鲜，如今成了名菜。' },
      { id: 'huangshan_story_yunhai', name: '黄山云海是"海"', icon: '☁️', desc: '黄山年均云海日达250天，云层如海浪拍打峰尖。摄影师说："每次上山，黄山都给你不同的画。"' },
    ],
  });
})();
