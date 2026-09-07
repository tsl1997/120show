/* 吉隆坡 分册02：特色周边（椰浆饭/肉骨茶/沙爹/榴莲/白咖啡/巴迪/锡器） */
window.MY_GIFTS = window.MY_GIFTS || [];
window.MY_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'kualalumpur_nasi', name: '椰浆饭', icon: '🍛', tag: '食', type: '美食', price: 12, desc: '椰浆蒸饭配参巴辣酱、炸江鱼仔、花生和溏心蛋。"国民早餐"从路边摊吃到飞机餐，辣酱是灵魂。' },
  { id: 'kualalumpur_bakuteh', name: '肉骨茶', icon: '🍲', tag: '食', type: '美食', price: 30, desc: '当归党参炖排骨汤浓到发黑，配油条蘸汤。巴生肉骨茶是"药膳派"，一碗下肚浑身发热。' },
  { id: 'kualalumpur_satay', name: '沙爹烤串', icon: '🍢', tag: '食', type: '美食', price: 18, desc: '腌好的鸡肉串炭火烤香，蘸花生酱汁。街头夜市的烟熏味能飘三条街，配黄瓜片和洋葱解腻。' },
  { id: 'kualalumpur_roti', name: '印度飞饼', icon: '🥞', tag: '食', type: '美食', price: 8, desc: '印度师傅把面团甩到薄如纸，煎脆配咖喱汁。 Teh Tarik"拉茶"一起点，看师傅拉出泡沫才完整。' },
  { id: 'kualalumpur_durian', name: '猫山王榴莲', icon: '🤢', tag: '食', type: '美食', price: 80, desc: '马来西亚"果王之王"，苦甜回甘。SS2榴莲摊论盒卖，老板教你"闻屁股"挑果的玄学。' },
  { id: 'kualalumpur_white_coffee', name: '怡保白咖啡', icon: '☕', tag: '食', type: '饮品', price: 15, desc: '低温烘培的咖啡不苦涩，奶香顺滑。旧街场白咖啡一条街，铁罐装是回家手信。' },
  { id: 'kualalumpur_teh_tarik', name: '拉茶', icon: '🧋', tag: '食', type: '饮品', price: 8, desc: '红茶与炼乳从杯到杯"拉"出泡沫。印度师傅手臂拉出彩虹弧线，看表演免费、喝茶便宜。' },
  { id: 'kualalumpur_batik', name: '巴迪蜡染布', icon: '🎨', tag: '衣', type: '文创', price: 50, desc: '马来西亚蜡染花布，热带花鸟图案色彩浓烈。做成衬衫、桌布、手包，国礼级别工艺品。' },
  { id: 'kualalumpur_pewter', name: '锡器·白锡杯', icon: '🥛', tag: '衣', type: '文创', price: 90, desc: '皇家雪兰莪锡器工坊，全球最大锡矿文明的手艺传承。一只锡杯冰镇啤酒更爽口，刻字定制是热门。' },
  { id: 'kualalumpur_kltower', name: '天空之盒·高空观景', icon: '🌆', tag: '玩', type: '体验', price: 40, desc: '双子塔对面的"天空之盒"玻璃观景台，脚下就是全城。拍"悬浮"照是标配，恐高者请看远方。' },
  { id: 'kualalumpur_klcc_park', name: '城中城公园喷泉夜跑', icon: '⛲', tag: '玩', type: '体验', price: 0, desc: '双子塔脚下的绿洲，晚上喷泉配音乐。免费看塔灯熄灭仪式，本地人跑步遛娃两不误。' },
  { id: 'kualalumpur_ktm', name: 'KTM电动火车体验', icon: '🚆', tag: '行', type: '体验', price: 8, desc: '百年铁路系统穿城过海，票价亲民。去巴生吃肉骨茶、去黑风洞拜神，一张票搞定。' },
  { id: 'kualalumpur_hotel', name: '双子塔景酒店', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '吉隆坡五星酒店性价比惊人，双塔景房两百多新元。泡着浴缸看塔灯闪烁，热带夜晚刚刚好。' },
  /* ---- 新增 ---- */
  { id: 'myg_ayam_percik', name: '马来烤鸡 Ayam Percik', icon: '🍗', tag: '食', type: '美食', price: 25, desc: '椰浆香料腌鸡，' +
  '串烤成焦糖色。' +
  '"东海岸的"国民主菜""。' },
  { id: 'myg_laksa', name: '叻沙 Laksa', icon: '🍜', tag: '食', type: '美食', price: 18, desc: '椰浆咖喱汤底' +
  '配米粉、虾、鸡丝。' +
  '辣到冒汗也要喝光，' +
  '"南洋魂之汤"。' },
  { id: 'myg_cendol', name: '煎蕊 Cendol', icon: '🍧', tag: '食', type: '美食', price: 8, desc: '椰糖刨冰配绿色' +
  '粉条与红豆。' +
  '热带解暑神器，' +
  '"马来西亚"夏日甜品""。' },
  { id: 'myg_teh', name: 'Teh Tarik 拉茶课', icon: '🧋', tag: '玩', type: '体验', price: 30, desc: '学印度师傅拉出' +
  '一米高的茶线，' +
  '做出奶泡绵密的红茶。' },
  { id: 'myg_mangosteen', name: '山竹果', icon: '🟣', tag: '食', type: '美食', price: 30, desc: '"果后"山竹酸甜' +
  '软糯，热带水果之王。' +
  '7-8 月盛产。' },
  { id: 'myg_borneo', name: '婆罗洲伊班族手工', icon: '🪶', tag: '衣', type: '文创', price: 150, desc: '沙捞越伊班族藤编' +
  '与珠串项链。' +
  '"原住民的"马来灵魂""。' },
  { id: 'myg_royal', name: '皇家雪兰莪锡器套装', icon: '🥄', tag: '衣', type: '文创', price: 350, desc: '一整套茶壶糖罐，' +
  '皇家认证' +
  '雪兰莪 93% 纯锡。' +
  '"马来西亚的"国礼""。' }
);
