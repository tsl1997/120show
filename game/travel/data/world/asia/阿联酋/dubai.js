/* ============ 阿联酋·迪拜 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'dubai',
    name: '迪拜',
    country: '阿联酋',
    cc: 'AE',
    flag: '🇦🇪',
    region: '中东',
    hero: '🏜️',
    desc: '沙漠里的未来之城：世界第一高楼刺破云层，人工棕榈岛漂在海面，一半是黄金市集的传统，一半是奢靡与科技的极限。',
    travel: [{ name: '飞机', icon: '✈️', cost: 3200 }],
    visa: { cost: 0, note: '阿联酋免签（停留不超过30天）' },
    spots: [
      { id: 'dubai_burj_khalifa', name: '哈利法塔', icon: '🏙️', price: 230, desc: '828米世界第一高楼，124层观景台俯瞰沙漠与海湾。日落时段票价最贵也最值，看城市的灯"从沙漠里长出来"。' },
      { id: 'dubai_mall_fountain', name: '迪拜购物中心·音乐喷泉', icon: '⛲', price: 0, desc: '全球最大商场之一，室内有水族馆和滑雪场。室外的音乐喷泉每半小时开演，水柱射到150米高。' },
      { id: 'dubai_palm', name: '朱美拉棕榈岛·亚特兰蒂斯', icon: '🌴', price: 0, desc: '人工填海造出的棕榈树形岛，"世界第八大奇迹"。亚特兰蒂斯酒店的水族馆和水上乐园，亲子游的天花板。' },
      { id: 'dubai_desert', name: '沙漠冲沙', icon: '🏜️', price: 180, desc: '越野车在沙丘上"过山车"，尖叫声混着阿拉伯音乐。日落时骑骆驼、画海娜、看猎鹰表演，晚餐在沙漠帐篷里。' },
      { id: 'dubai_mosque', name: '朱美拉清真寺', icon: '🕌', price: 25, desc: '迪拜最美的法蒂玛风格清真寺，粉白石雕在夕阳下发亮。唯一对非穆斯林开放参观的清真寺，讲解员中文都熟练。' },
      { id: 'dubai_old_town', name: '阿法迪历史区·黄金市集', icon: '🛖', price: 0, desc: '风塔老屋与巷子画廊，重现迪拜采珠时代的模样。黄金市集的橱窗里金链堆成山，"世界上最大的金戒指"在此。' },
      { id: 'dubai_frame', name: '迪拜相框', icon: '🖼️', price: 80, desc: '150米高的巨型金框，一侧是老城区、一侧是新迪拜。电梯里地板突然变玻璃，恐高者的"社死现场"。' },
    ],
    souvenirs: [
      { id: 'dubai_shawarma', name: '沙威玛卷饼', icon: '🌯', tag: '食', type: '美食', price: 25, desc: '旋转烤肉现削现卷，蒜蓉酱是灵魂。迪拜街头"国民快餐"，十迪拉姆吃到撑。' },
      { id: 'dubai_arabic_grill', name: '阿拉伯烤肉套餐', icon: '🍖', tag: '食', type: '美食', price: 120, desc: '烤羊肉串、烤鸡、烤番茄配阿拉伯香米饭。大饼裹肉蘸酱，"手抓"才是正确吃法。' },
      { id: 'dubai_dates', name: '椰枣·阿拉伯咖啡', icon: '🌴', tag: '食', type: '美食', price: 45, desc: '王室级椰枣裹开心果巧克力，配小杯无糖阿拉伯咖啡。礼盒包装是迪拜"最高规格"伴手礼。' },
      { id: 'dubai_camel_milk', name: '骆驼奶冰淇淋', icon: '🐫', tag: '食', type: '美食', price: 35, desc: '骆驼奶做的冰淇淋奶香浓郁，迪拜限定。商场里还有"黄金冰淇淋"，金箔撒在上面。' },
      { id: 'dubai_gold', name: '黄金饰品', icon: '🥇', tag: '衣', type: '特产', price: 600, desc: '黄金市集按克卖，手工费可谈。22K金链的"中东重量感"，回国转手也不亏。' },
      { id: 'dubai_perfume', name: '阿拉伯香精·乌木香', icon: '🌸', tag: '衣', type: '特产', price: 150, desc: '没稀释的香精一滴留香三天，乌木玫瑰是经典。调香师现场配比，"中东体香"从一瓶开始。' },
      { id: 'dubai_abaya', name: '黑袍与头巾', icon: '🧕', tag: '衣', type: '服饰', price: 120, desc: '优雅的阿巴亚黑袍绣着暗纹，游客可以买来当"沙漠斗篷"。走进清真寺前借用长袍是免费礼仪。' },
      { id: 'dubai_sand_art', name: '沙画瓶', icon: '🎨', tag: '衣', type: '文创', price: 50, desc: '艺人在小瓶里用彩沙画出骆驼与日落。现场定制你的名字，"沙漠记忆"装进一瓶。' },
      { id: 'dubai_safari', name: '冲沙四驱', icon: '🚙', tag: '玩', type: '体验', price: 180, desc: '兰德酷路泽在沙丘间俯冲漂移，"沙漠过山车"晕车者慎选。司机技术越好，尖叫越大声。' },
      { id: 'dubai_camel', name: '骆驼骑行·猎鹰', icon: '🐫', tag: '玩', type: '体验', price: 100, desc: '骆驼起立的一瞬间最刺激，骑上就进入"沙漠节奏"。猎鹰戴着头罩站在主人手臂上，近距离看眼神超凶。' },
      { id: 'dubai_marina', name: '游艇夜游', icon: '🛥️', tag: '玩', type: '体验', price: 250, desc: '迪拜码头的游船晚宴，两岸高楼灯火如银河。哈利法塔在船尾越退越远，夜景越来越完整。' },
      { id: 'dubai_hotel', name: '帆船酒店下午茶', icon: '🏨', tag: '住', type: '住宿', price: 900, desc: '七星的帆船酒店，大堂的金饰多到晃眼。住不起也吃得起下午茶——海滨露台配香槟，值回票价。' },
    ],
    stories: [
      { id: 'dubai_story_burj', name: '世界第一的"保密高度"', icon: '🏙️', desc: '哈利法塔建到一半才公布最终高度828米，防同行"抢第一"。设计预留了"长高空间"，够后再加节段。' },
      { id: 'dubai_story_gold', name: '金店按斤称', icon: '🥇', desc: '黄金市集橱窗里的金链粗过登山绳，店员用天平称重卖金。游客常说："这简直是金库开商店。"' },
      { id: 'dubai_story_palm', name: '棕榈岛是"卫星可见"工程', icon: '🌴', desc: '朱美拉棕榈岛耗资140亿美元填海，宇航员说从太空都能看到轮廓。一棵"棕榈树"住着几万人。' },
      { id: 'dubai_story_camel', name: '骆驼也选美', icon: '🏆', desc: '阿联酋每年办骆驼选美大赛，冠军骆驼身价上千万。骆驼的美学标准：长脖、大驼峰、走路带风。' },
      { id: 'dubai_story_atm', name: '沙漠里的"黄金ATM"', icon: '🏧', desc: '迪拜有真正的黄金自动取款机，插入银行卡能吐出金条和金币。机器屏幕实时显示金价，排队试的人不少。' },
      { id: 'dubai_story_fountain', name: '喷泉会"跳舞"', icon: '⛲', desc: '迪拜音乐喷泉的水柱随音乐起舞，从《波斯市场》到中国歌曲都会放。每晚免费看，游客蹲守半小时不嫌久。' },
    ],
  });
})();
