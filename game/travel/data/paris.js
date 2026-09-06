/* ============ 法国·巴黎 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'paris',
    name: '巴黎',
    country: '法国',
    cc: 'SCH',
    flag: '🇫🇷',
    region: '欧洲',
    hero: '🗼',
    desc: '光之城：埃菲尔铁塔在塞纳河畔闪灯，卢浮宫的蒙娜丽莎排队三小时，转角面包房的法棍香就是巴黎的呼吸。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6000 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: [
      { id: 'paris_eiffel', name: '埃菲尔铁塔', icon: '🗼', price: 180, desc: '330米的"铁娘子"，整点闪灯五分钟是全城心跳。登顶俯瞰塞纳河的桥与宫，塔下草坪野餐才是巴黎式浪漫。' },
      { id: 'paris_louvre', name: '卢浮宫', icon: '🏛️', price: 130, desc: '世界最忙的博物馆，玻璃金字塔下三万件藏品。蒙娜丽莎前永远人头攒动，胜利女神与断臂维纳斯也值得专程。' },
      { id: 'paris_notre_dame', name: '巴黎圣母院', icon: '⛪', price: 0, desc: '雨果笔下的哥特式教堂，2019年大火后重修归来。玫瑰窗与飞扶壁仍在，尖顶重生时全巴黎都松了口气。' },
      { id: 'paris_arc', name: '凯旋门·香榭丽舍', icon: '🏛️', price: 110, desc: '拿破仑的凯旋门下有无名烈士长明火。登顶看十二条放射大道，香榭丽舍大街从脚下一直亮到协和广场。' },
      { id: 'paris_montmartre', name: '蒙马特·圣心大教堂', icon: '⛪', price: 0, desc: '艺术家山丘，小丘广场的画家帮你画一张"巴黎肖像"。圣心堂白塔立在最高处，俯瞰全城黄昏。' },
      { id: 'paris_versailles', name: '凡尔赛宫', icon: '👑', price: 150, desc: '路易十四的"太阳王宫殿"，镜厅十七面镜子晃瞎眼。后花园喷泉与大小特里亚农宫，一整天都逛不完。' },
      { id: 'paris_seine', name: '塞纳河游船', icon: '⛵', price: 110, desc: '一小时游船穿过巴黎所有地标，两岸桥洞与宫殿轮流上镜。夜航时埃菲尔整点闪灯，全船手机齐举。' },
    ],
    souvenirs: [
      { id: 'paris_croissant', name: '可颂·法棍', icon: '🥐', tag: '食', type: '美食', price: 20, desc: '酥皮可颂掉渣才正宗，法棍要夹着黄油吃。巴黎人一天进三次面包房，就是日常。' },
      { id: 'paris_macaron', name: '马卡龙', icon: '🧁', tag: '食', type: '美食', price: 45, desc: 'Laduree 的马卡龙色彩像首饰盒，外脆内糯。拉杜丽百年老店里，六枚装是"巴黎甜品的通行证"。' },
      { id: 'paris_steak', name: '法式牛排配红酒', icon: '🍷', tag: '食', type: '美食', price: 220, desc: '三分熟牛排配薯条与波尔多红酒。小酒馆里"每日特供"，主厨与食客用一句"Bon appétit"达成默契。' },
      { id: 'paris_onion_soup', name: '法式洋葱汤', icon: '🍲', tag: '食', type: '美食', price: 90, desc: '洋葱慢炒出焦糖香，面包芝士焗到拉丝。冬夜小馆里的一碗，是"巴黎的胃"。' },
      { id: 'paris_coffee', name: '左岸咖啡', icon: '☕', tag: '食', type: '饮品', price: 45, desc: '花神咖啡馆一杯浓缩坐一下午，海明威萨特都坐过。咖啡不便宜，买的是"左岸的午后"。' },
      { id: 'paris_macaron_gift', name: '鹅肝·奶酪礼盒', icon: '🧀', tag: '食', type: '特产', price: 180, desc: '三百种奶酪的"奶酪天堂"，配一小罐鹅肝酱。机场免税的真空包装款，回家也能"法式晚餐"。' },
      { id: 'paris_perfume', name: '香水·花宫娜', icon: '🌸', tag: '衣', type: '特产', price: 250, desc: '格拉斯调香师现场配"专属香"。巴黎人把香水当"看不见的衣服"，专柜试香纸都烫金。' },
      { id: 'paris_foulard', name: '爱马仕丝巾·小铺丝巾', icon: '🧣', tag: '衣', type: '服饰', price: 300, desc: '一方丝巾印着塞纳河与铁塔。爱马仕橱窗是艺术展，圣旺跳蚤市场的老丝巾也有惊喜。' },
      { id: 'paris_beret', name: '贝雷帽', icon: '🎩', tag: '衣', type: '服饰', price: 60, desc: '羊毛贝雷帽一戴，"法式慵懒"上身。蒙马特的帽子铺里，老板娘会帮你调成最俏皮的角度。' },
      { id: 'paris_metro', name: '巴黎地铁体验', icon: '🚇', tag: '行', type: '体验', price: 15, desc: '百年地铁有手风琴艺人、也有"地铁诗人"。买一叠十次票，出站就是景点——"地铁巡游"是巴黎生存技能。' },
      { id: 'paris_bike', name: '塞纳河畔骑行', icon: '🚲', tag: '玩', type: '体验', price: 60, desc: '公共自行车沿塞纳河慢骑，从卢浮宫骑到铁塔。河边路不堵车，风里全是面包香。' },
      { id: 'paris_cabaret', name: '红磨坊康康舞', icon: '💃', tag: '玩', type: '体验', price: 600, desc: '百年歌舞秀：羽毛头饰、康康舞与香槟。票价不便宜，但看过的人都说"这才叫巴黎之夜"。' },
      { id: 'paris_hotel', name: '左岸精品酒店', icon: '🏨', tag: '住', type: '住宿', price: 900, desc: '奥斯曼式老楼里的酒店，电梯像电话亭。推窗就是铁塔一角，"住在明信片里"的体感。' },
    ],
    stories: [
      { id: 'paris_story_eiffel', name: '铁塔曾被要求拆除', icon: '🗼', desc: '埃菲尔铁塔1889年建成时被文人联名抗议"丑陋"。后来它因无线电价值保住性命，如今成了法国的图腾。' },
      { id: 'paris_story_mona', name: '蒙娜丽莎的"防盗史"', icon: '🖼️', desc: '1911年蒙娜丽莎被偷，两年后才找回，从此成名。如今她被防弹玻璃罩着，每天与三万人对视。' },
      { id: 'paris_story_baguette', name: '法棍有"国家配方"', icon: '🥖', desc: '法国法律规定传统法棍只能用面粉、水、盐、酵母。每年还有"最佳法棍大赛"，冠军面包一个月内供应总统府。' },
      { id: 'paris_story_cafe', name: '咖啡馆的"座位即江湖"', icon: '☕', desc: '花神咖啡馆办过文学大奖，萨特波伏娃的座位被钉上铜牌。巴黎咖啡馆的椅子朝外摆——看人是最重要的节目。' },
      { id: 'paris_story_love', name: '爱情桥的"减重手术"', icon: '🔒', desc: '艺术桥曾被爱情锁压塌一段栏杆，巴黎2015年拆锁45吨。如今"挂锁罚款"，爱心改成电子许愿墙。' },
      { id: 'paris_story_strike', name: '罢工也是"风景"', icon: '🚧', desc: '巴黎人一年罢工多次，地铁停运但咖啡馆照常。本地人说：罢工是"生活的配乐"，游客要学会查排班。' },
    ],
  });
})();
