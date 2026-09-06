/* ============ 葡萄牙·里斯本 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'lisbon',
    name: '里斯本',
    country: '葡萄牙',
    cc: 'SCH',
    flag: '🇵🇹',
    region: '欧洲',
    hero: '🚋',
    desc: '七丘之城·大航海的起点：28路黄色电车爬过石板坡，蛋挞的甜香混着法朵的忧伤，贝伦塔见证"地理大发现"的启航。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6200 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: [
      { id: 'lisbon_belem', name: '贝伦塔·大发现纪念碑', icon: '⚓', price: 60, desc: '曼努埃尔式堡垒守着特茹河口，大航海时代的启航地。纪念碑刻着32位航海家，"世界从这里变大"。' },
      { id: 'lisbon_jeronimos', name: '热罗尼莫斯修道院', icon: '⛪', price: 80, desc: '世界遗产，曼努埃尔式石雕如藤蔓生长。达伽马长眠于此，"葡萄牙的威斯敏斯特"。' },
      { id: 'lisbon_tram28', name: '28路黄色电车', icon: '🚋', price: 15, desc: '1930年代老电车叮叮当当爬过全城坡道。Alfama 老城区段最经典，"里斯本的心跳"。' },
      { id: 'lisbon_castle', name: '圣若热城堡', icon: '🏰', price: 100, desc: '摩尔人城堡俯瞰全城与特茹河。孔雀在城墙散步，"七丘之王的观景台"。' },
      { id: 'lisbon_alfama', name: '阿尔法玛老城区', icon: '🎶', price: 0, desc: '迷宫般的摩尔人老巷，法朵（Fado）从酒馆飘出。傍晚听"葡萄牙的灵魂之歌"。' },
      { id: 'lisbon_sintra', name: '辛特拉一日', icon: '🏰', price: 120, desc: '佩纳宫红黄糖果城堡立在山头，拜伦称"伊甸园"。雷加莱拉庄园的倒转井神秘莫测。' },
      { id: 'lisbon_cascais', name: '罗卡角（欧洲大陆最西端）', icon: '🌅', price: 0, desc: '"陆止于此，海始于斯"——卡蒙斯诗句刻在石碑。悬崖灯塔看大西洋日落，"欧洲的天涯海角"。' },
    ],
    souvenirs: [
      { id: 'lisbon_pastel', name: '贝伦蛋挞（Pastel de Nata）', icon: '🥧', tag: '食', type: '美食', price: 15, desc: '1837年老店秘方：酥皮千层+焦糖蛋心。撒肉桂粉趁热吃，"一天卖两万个"。' },
      { id: 'lisbon_bacalhau', name: '鳕鱼料理（Bacalhau）', icon: '🐟', tag: '食', type: '美食', price: 60, desc: '葡萄牙人说有365种鳕鱼做法。"Bacalhau à Brás"蛋丝鳕鱼最经典。' },
      { id: 'lisbon_ovo', name: '阿威罗软蛋', icon: '🥚', tag: '食', type: '特产', price: 30, desc: '蛋黄丝拉成贝壳形状的甜点，"修道院甜品艺术"。 Portuguese egg thread art。' },
      { id: 'lisbon_azulejo', name: '青花瓷砖（Azulejo）', icon: '🔵', tag: '衣', type: '文创', price: 60, desc: '葡萄牙蓝白瓷砖画，全城墙面都是画布。瓷砖博物馆与手作小件，"墙上的五百年"。' },
      { id: 'lisbon_cork', name: '软木制品', icon: '🪵', tag: '衣', type: '特产', price: 70, desc: '葡萄牙产全球一半软木。软木钱包、帽子和高跟鞋，"环保的葡国骄傲"。' },
      { id: 'lisbon_fado_cd', name: '法朵唱片·沙丁鱼罐头', icon: '🎵', tag: '衣', type: '文创', price: 45, desc: 'Fado 女伶 Amália 的黑胶。彩色沙丁鱼罐头是里斯本"最潮伴手礼"。' },
      { id: 'lisbon_tuktuk', name: 'Tuk-Tuk 巡游七丘', icon: '🛺', tag: '行', type: '体验', price: 150, desc: '电动 Tuk-Tuk 穿老城坡道，司机讲历史。省腿神器，"里斯本的敞篷车"。' },
      { id: 'lisbon_sintra2', name: '辛特拉宫殿一日', icon: '🏰', tag: '玩', type: '体验', price: 120, desc: '佩纳宫+摩尔城堡+雷加莱拉庄园。火车40分钟+巴士上山，"童话的一天"。' },
      { id: 'lisbon_fado_night', name: '法朵之夜（Fado Show）', icon: '🎶', tag: '玩', type: '体验', price: 200, desc: '小酒馆里听 Saudite（乡愁）之声。熄灯后歌手开嗓，"听不懂也会流泪"。' },
      { id: 'lisbon_miradouro', name: '观景台日落巡礼', icon: '🌄', tag: '玩', type: '体验', price: 0, desc: '圣露西亚、恩宠观景台一杯酒看日落。Alfama 红瓦连到河边，"七丘的金色黄昏"。' },
      { id: 'lisbon_minsu', name: '老城瓷砖民宿', icon: '🏨', tag: '住', type: '住宿', price: 500, desc: 'Alfama 瓷砖墙民宿，阳台晾着衣服。楼下面包房蛋挞香叫早。' },
    ],
    stories: [
      { id: 'lisbon_story_earthquake', name: '1755年大地震改变世界', icon: '🌊', desc: '9级地震+海啸+大火毁掉全城，哲学家伏尔泰因此写《老实人》。庞巴尔侯爵重建：新城市"防火防震"。' },
      { id: 'lisbon_story_pastel2', name: '蛋挞是"修士的发明"', icon: '🥧', desc: '热罗尼莫斯修道院用蛋黄浆洗衣服，剩蛋黄做蛋挞。1837年糖厂买下配方开"贝伦饼店"，秘方只有三人知道。' },
      { id: 'lisbon_story_vasco', name: '达伽马的"直航印度"', icon: '⚓', desc: '1498年达伽马绕好望角直航印度，改变世界贸易。他的石棺就在热罗尼莫斯修道院。' },
      { id: 'lisbon_story_tram', name: '28路电车的"幸存者"', icon: '🚋', desc: '里斯本曾有几百年电车网，如今只剩5条线。28路穿越最陡坡道，"老电车是活的文物"。' },
      { id: 'lisbon_story_fado2', name: '法朵是"渔民妻的等待"', icon: '🎶', desc: 'Fado 源自海员妻子唱的思乡曲。2011年列入世界非遗，"用歌声把乡愁唱出来"。' },
      { id: 'lisbon_story_cork2', name: '软木树的"九次剥皮"', icon: '🪵', desc: '栓皮栎树皮每9年剥一次，一棵树活200年。"剥了皮不死，越长越好"，可持续之王。' },
    ],
  });
})();
