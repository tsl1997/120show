/* 巴厘岛 分册01：景点圣地（海神庙/乌布/火山/悬崖/海滩/水神庙/巴厘文化） */
window.ID_SPOTS = window.ID_SPOTS || [];
window.ID_SPOTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'bali_tanah_lot', name: '海神庙', icon: '⛩️', price: 25, desc: '建在海中巨岩上的十六世纪庙宇，涨潮时孤悬海上。日落时分潮水拍岩、庙影鎏金，是巴厘岛最经典的剪影。' },
  { id: 'bali_ubud', name: '乌布·圣猴森林', icon: '🐒', price: 20, desc: '艺术家聚集的山城，画廊、银器铺、瑜伽馆挤满小巷。圣猴森林里七百多只猕猴"当家"，眼镜手机请收好。' },
  { id: 'bali_tegallalang', name: '德格拉朗梯田', icon: '🌾', price: 10, desc: '层层叠叠的绿色水稻梯田配棕榈树，是"明信片巴厘"本片。秋千荡到田埂上空，尖叫与稻香一起起飞。' },
  { id: 'bali_batur', name: '巴杜尔火山日出', icon: '🌋', price: 200, desc: '凌晨两点出发爬火山，山顶云海配日出金光。下山还能泡火山温泉，疲惫全被硫磺泉洗掉。' },
  { id: 'bali_uluwatu', name: '乌鲁瓦图断崖', icon: '🌊', price: 25, desc: '七十米悬崖上的"情人崖"，传说殉情女子化为此地。傍晚Kecak火舞在崖顶开演，篝火与海浪声一起燃烧。' },
  { id: 'bali_kuta', name: '库塔海滩', icon: '🏄', price: 0, desc: '冲浪初学者的天堂，浪长而缓、租赁店满街。傍晚日落时整片海滩变成金红色，酒吧音乐从巷口一路排到海边。' },
  { id: 'bali_jatiluwih', name: '水神庙·圣泉寺', icon: '💧', price: 25, desc: '圣泉寺的泉水据说能洗净厄运，游客排队在泉眼"淋身"。巴厘印度教的莲花座、伞盖与花盒，处处是仪式感。' },
  /* ---- 新增 ---- */
  { id: 'idp_nusa_dua', name: '努沙杜瓦海滩', icon: '🏖️', price: 0, desc: '巴厘最南端的国际度假区，' +
  '白沙细如面粉。' +
  '五星级酒店群，' +
  '婚礼与蜜月圣地。' },
  { id: 'idp_seminyak', name: '长谷·水明漾', icon: '🏖️', price: 0, desc: '库塔北面的潮人海滩，' +
  '冲浪店与精品咖啡馆。' +
  '傍晚落日吧挤满西方游客，' +
  '"巴厘的"加州海滩""。' },
  { id: 'idp_uluwatu2', name: 'Padang Padang 海滩', icon: '🌊', price: 20, desc: '《美食、祈祷与恋爱》电影取景地，' +
  '礁石间的隐秘海滩。' +
  '冲浪胜地的"秘密角落"。' },
  { id: 'idp_tirta', name: '圣泉寺 Tirta Empul', icon: '💦', price: 20, desc: '千年印度教圣泉寺，' +
  '圣水从 11 个龙嘴涌出。' +
  '信徒下池沐浴祈福，' +
  '"巴厘版的洗礼"。' },
  { id: 'idp_kintamani', name: '金塔马尼火山观景', icon: '⛰️', price: 30, desc: '巴杜尔火山旁的观景餐厅，' +
  '全景观火山与湖泊。' +
  '"印尼版的"山景酒店""。' },
  { id: 'idp_nusa_penida', name: '努沙佩尼达岛', icon: '🏝️', price: 350, desc: '巴厘东南的小岛，' +
  '"精灵坠崖"如恐龙脖颈。' +
  '一日游船前往，' +
  '"巴厘的后花园"。' },
  { id: 'idp_lovina', name: '罗威纳海豚', icon: '🐬', price: 200, desc: '巴厘北部的黑沙滩，' +
  '清晨出海看海豚群。' +
  '运气好时 50+ 头同框，' +
  '"巴厘的安静一面"。' },
  { id: 'idp_uluwatu_temple', name: '乌鲁瓦图庙', icon: '⛩️', price: 30, desc: '悬崖顶端的印度教神庙，' +
  '猴子比游客还凶。' +
  '夕阳与 Kecak 火舞闻名。' },
  { id: 'idp_ulu', name: '乌鲁瓦图·Padang Padang', icon: '🏄', price: 0, desc: '世界级冲浪点，' +
  '礁石浪适合高手。' +
  '普通游客在沙滩喝椰子看人冲，' +
  '"巴厘冲浪的圣殿"。' },
  { id: 'idp_sidemen', name: 'Sidemen 稻田山谷', icon: '🌾', price: 0, desc: '乌布以东的梯田山谷，' +
  '游客比乌布少 90%。' +
  '徒步与自行车穿过稻田，' +
  '"巴厘的"第二乌布""。' },
  { id: 'idp_klungkung', name: '巴厘岛传统艺术中心', icon: '🎭', price: 30, desc: '巴厘的传统文化与舞蹈中心，' +
  '巴龙舞与 Kecak 的故乡。' +
  '"舞蹈的灵魂之地"。' }
);
