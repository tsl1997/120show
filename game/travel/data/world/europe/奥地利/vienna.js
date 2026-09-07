/* ============ 奥地利·维也纳 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'vienna',
    name: '维也纳',
    country: '奥地利',
    cc: 'SCH',
    flag: '🇦🇹',
    region: '欧洲',
    hero: '🎻',
    desc: '音乐之都：金色大厅的新年音乐会，茜茜公主的美泉宫，茨威格笔下的昨日世界，一杯维也纳咖啡配萨赫蛋糕。',
    travel: [{ name: '飞机', icon: '✈️', cost: 6600 }],
    visa: { cost: 800, note: '申根签证（法德意西通用）' },
    spots: [
      { id: 'vienna_schonnbrunn', name: '美泉宫', icon: '🏰', price: 120, desc: '哈布斯堡王朝夏宫，茜茜公主与弗兰茨约瑟夫的家。凯旋门山顶与世界最老动物园，"奥地利的凡尔赛"。' },
      { id: 'vienna_hofburg', name: '霍夫堡宫·茜茜公主博物馆', icon: '👑', price: 150, desc: '哈布斯堡冬宫，茜茜的健身房间与 assassination 真相。西班牙骑术学校利皮扎马。' },
      { id: 'vienna_ststephens', name: '圣斯特凡大教堂', icon: '⛪', price: 0, desc: '137米南塔哥特式尖顶，彩色瓦片拼出双头鹰。地下墓穴可参观，"维也纳的心脏"。' },
      { id: 'vienna_musikverein', name: '金色大厅·国家歌剧院', icon: '🎻', price: 100, desc: '新年音乐会举办地，声音"金色的共鸣"。歌剧院站票3欧，"平价听世界顶级"。' },
      { id: 'vienna_belvedere', name: '美景宫', icon: '🖼️', price: 90, desc: '克里姆特《吻》真品馆藏。上下美景宫花园，"金色时代"的画与花。' },
      { id: 'vienna_prater', name: '普拉特游乐场摩天轮', icon: '🎡', price: 60, desc: '1897年的百年摩天轮，《第三个男人》场景。转一圈20分钟，"维也纳的慢浪漫"。' },
      { id: 'vienna_cafe', name: '中央咖啡馆·维也纳咖啡文化', icon: '☕', price: 0, desc: 'UNESCO 非遗"咖啡馆文化"。Café Central 弗洛伊德托洛茨基常客，配萨赫蛋糕。' },
    ],
    sausages_note: null,
    souvenirs: [
      { id: 'vienna_schnitzel', name: '维也纳炸猪排', icon: '🍖', tag: '食', type: '美食', price: 90, desc: '比脸大的小牛肉排，配土豆沙拉与柠檬。"Figlmüller"百年老店。' },
      { id: 'vienna_sacher', name: '萨赫蛋糕', icon: '🍰', tag: '食', type: '美食', price: 60, desc: '1832年发明的巧克力杏子酱蛋糕。Hotel Sacher 原版配无奶咖啡，"维也纳的甜"。' },
      { id: 'vienna_coffee2', name: '维也纳咖啡·阿尔滕贝格', icon: '☕', tag: '食', type: '饮品', price: 45, desc: 'Einspänner 双份奶油黑咖啡。老咖啡馆大理石桌，"慢报纸时代"。' },
      { id: 'vienna_wurst', name: '香肠摊 Käsekrainer', icon: '🌭', tag: '食', type: '美食', price: 25, desc: '芝士香肠配芥末，站在街头吃。"Würstelstand"文化，深夜的救赎。' },
      { id: 'vienna_mozart', name: '莫扎特巧克力', icon: '🍫', tag: '食', type: '特产', price: 40, desc: 'Mozartkugel：杏仁糖+牛轧糖+巧克力。"音乐天才的甜味"。' },
      { id: 'vienna_music_wen', name: '音乐文创', icon: '🎼', tag: '衣', type: '文创', price: 50, desc: '莫扎特/贝多芬乐谱手稿复刻、金色大厅模型。"古典音乐之都"的纪念。' },
      { id: 'vienna_porzellan', name: '奥格滕瓷器', icon: '🏺', tag: '衣', type: '文创', price: 180, desc: 'Augarten 皇家瓷器厂手工瓷。蓝柄剑标记，"维也纳白"。' },
      { id: 'vienna_concert', name: '金色大厅听一场', icon: '🎻', tag: '玩', type: '体验', price: 250, desc: '莫扎特音乐会着古装演出。或者站票听爱乐，"音乐之都必须听一场"。' },
      { id: 'vienna_ball', name: '维也纳舞会体验（冬季）', icon: '💃', tag: '玩', type: '体验', price: 500, desc: '1-2月舞会季：歌剧院舞会、咖啡师舞会。白裙燕尾服，"昨日世界的回响"。' },
      { id: 'vienna_nasch', name: '纳旭市场觅食', icon: '🧺', tag: '玩', type: '体验', price: 50, desc: '400年历史露天市场，Omni 餐馆与咸乳酪。周六跳蚤市场。' },
      { id: 'vienna_minsu', name: '内城民宿', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '老城公寓民宿，步行到大教堂。清晨教堂钟声+马蹄声。' },
    ],
    stories: [
      { id: 'vienna_story_sisi', name: '茜茜公主的"瘦身执念"', icon: '👑', desc: '茜茜身高172cm体重不到50kg，每天健身几小时。美泉宫里有她的健身器械，"19世纪的身材焦虑"。' },
      { id: 'vienna_story_nuclear', name: '维也纳的"联合国城"', icon: '🕊️', desc: '维也纳国际中心是联合国四大总部之一。IAEA 原子能机构在此，"外交之城"。' },
      { id: 'vienna_story_coffee2', name: '咖啡馆的"报纸时代"', icon: '☕', desc: '老咖啡馆提供免费报纸，客人一杯咖啡坐一天。茨威格写尽这种"昨日世界"。' },
      { id: 'vienna_story_psych', name: '弗洛伊德的维也纳', icon: '🛋️', desc: '精神分析诞生于维也纳 Berggasse 19号。弗洛伊德咖啡馆据说是他最爱的咖啡馆。' },
      { id: 'vienna_story_plum', name: '萨赫蛋糕的"官司"', icon: '🍰', desc: '萨赫与 Hotel Imperial 为"原创蛋糕"打了7年官司。和解方案：两家都卖，"甜的胜利"。' },
      { id: 'vienna_story_music2', name: '为什么是维也纳', icon: '🎻', desc: '海顿、莫扎特、贝多芬、舒伯特、施特劳斯都在此生活。哈布斯堡的赞助让音乐成了"城市基因"。' },
    ],
  });
})();
