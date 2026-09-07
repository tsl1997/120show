/* 新德里 分册02：特色周边（黄油鸡/塔利/街头小吃/纱丽/银饰/突突车/瑜伽） */
window.IN_GIFTS = window.IN_GIFTS || [];
window.IN_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'newdelhi_curry', name: '黄油鸡与咖喱', icon: '🍛', tag: '食', type: '美食', price: 50, desc: '番茄黄油酱炖烤鸡，配馕饼或长米。印度菜的灵魂是玛萨拉香料，"微辣"也会让外地人冒汗。' },
  { id: 'newdelhi_thali', name: '塔利套餐', icon: '🍽️', tag: '食', type: '美食', price: 35, desc: '一个铁盘装六七个小碗：咖喱、豆糊、酸奶、甜点。印度人的"套餐哲学"，每一口都是不同味觉区。' },
  { id: 'newdelhi_chaats', name: '街头小吃合集', icon: '🥟', tag: '食', type: '美食', price: 15, desc: 'Pani Puri空心球灌酸辣水、萨莫萨炸三角、帕夫巴吉。一次吃遍"酸辣甜脆"，肠胃勇士的试炼场。' },
  { id: 'newdelhi_chai', name: '马萨拉奶茶', icon: '☕', tag: '食', type: '饮品', price: 6, desc: '生姜、豆蔻、肉桂与红茶同煮，加奶加糖。街边陶杯一捧五块钱，喝完暖到指尖。' },
  { id: 'newdelhi_lassi', name: '拉西酸奶', icon: '🥛', tag: '食', type: '饮品', price: 12, desc: '浓稠酸奶加芒果或藏红花，陶罐装盖着豆腐皮。饭后一杯助消化，甜口的"印度营养快线"。' },
  { id: 'newdelhi_spice', name: '香料市场采购', icon: '🌶️', tag: '食', type: '特产', price: 40, desc: '月光集市的香料街，辣椒红黄绿堆成小山。玛萨拉、姜黄、孜然按两称，带一包回家厨房秒变印度。' },
  { id: 'newdelhi_kurtas', name: '库尔塔·纱丽', icon: '🧥', tag: '衣', type: '服饰', price: 120, desc: '传统长衫库尔塔男女皆可穿，纱丽一披就是六米布的学问。手工刺绣的亮片在灯光下闪成星河。' },
  { id: 'newdelhi_silver', name: '银饰·宝石', icon: '💎', tag: '衣', type: '文创', price: 150, desc: '拉贾斯坦风格的银手镯、绿松石戒指。月光集市"砍价从三折开始"，砍完老板还请你喝茶。' },
  { id: 'newdelhi_tuktuk', name: '突突车巡游', icon: '🛺', tag: '行', type: '体验', price: 20, desc: '三轮突突车在牛、行人、摩托之间"见缝插针"。司机超车时喊"主角来了"，车内装饰比庙还花哨。' },
  { id: 'newdelhi_yoga', name: '瑜伽晨课', icon: '🧘', tag: '玩', type: '体验', price: 40, desc: '瑜伽发源地的一小时晨课，导师纠正到你怀疑人生。印度街头瑜伽馆一个月学费，国内上一节课的价。' },
  { id: 'newdelhi_meena', name: '手绘海娜', icon: '🖌️', tag: '玩', type: '体验', price: 30, desc: '海娜颜料在手背画出孔雀与藤蔓，一周不掉色。婚礼上新娘全身画满，平时游客画一小朵就够发朋友圈。' },
  { id: 'newdelhi_hotel', name: '康诺特广场酒店', icon: '🏨', tag: '住', type: '住宿', price: 200, desc: '殖民风环形广场旁的精品酒店，天台餐厅看鸽子飞过印度门。旅行预算友好，服务超出预期。' },
  /* ---- 新增 ---- */
  { id: 'ing_rogan', name: '罗根乔什羊肉', icon: '🍖', tag: '食', type: '美食', price: 80, desc: '克什米尔红花与羊肉慢炖，' +
  '橙红浓香。' +
  '配馕饼抹着吃，' +
  '"印度的"国宴菜""。' },
  { id: 'ing_dosa', name: '南印度 Dosa 薄饼', icon: '🥞', tag: '食', type: '美食', price: 25, desc: '发酵米浆摊成纸薄煎饼，' +
  '包土豆咖喱与椰子酸辣酱。' +
  '"印度可丽饼"。' },
  { id: 'ing_biryani', name: '海得拉巴香饭', icon: '🍚', tag: '食', type: '美食', price: 50, desc: '藏红花与肉桂焖的' +
  '长粒米香饭，' +
  '肉与香料分层烤。' +
  '海得拉巴的"灵魂饭"。' },
  { id: 'ing_gulab', name: 'Gulab Jamun 糖球', icon: '🍩', tag: '食', type: '美食', price: 10, desc: '奶酪球泡玫瑰糖浆，' +
  '印度婚礼必备甜点。' +
  '"印度的"甜甜圈""。' },
  { id: 'ing_pani_puri', name: 'Pani Puri 空心球', icon: '🥟', tag: '食', type: '美食', price: 5, desc: '空心脆球灌酸辣水、' +
  '土豆与鹰嘴豆。' +
  '一口吞，' +
  '"印度"街食之王""。' },
  { id: 'ing_pashmina', name: '克什米尔羊绒披肩', icon: '🧣', tag: '衣', type: '服饰', price: 400, desc: '克什米尔手工羊绒，' +
  '绣花两个月才出成品。' +
  '能穿过戒指的' +
  '"极薄极暖"。' },
  { id: 'ing_ayur', name: '阿育吠陀油按摩', icon: '💆', tag: '玩', type: '体验', price: 250, desc: '5000 年历史的印度传统按摩，' +
  '温芝麻油从头流到顶。' +
  '结束后像"再生"，' +
  '"阿育吠陀的精华"。' },
  { id: 'ing_bindi', name: 'Bindi 额头贴', icon: '🔴', tag: '衣', type: '文创', price: 30, desc: '印度教女性额头的吉祥痣，' +
  '彩色与水晶款。' +
  '贴在额头当"便携"装饰。' },
  { id: 'ing_sitar', name: '西塔琴小摆件', icon: '🎵', tag: '衣', type: '文创', price: 80, desc: '印度传统乐器，' +
  '拉维·香卡的灵魂之声。' +
  '小摆件装饰房间，' +
  '"西塔琴的微缩"。' },
  { id: 'ing_rishikesh', name: '瑞诗凯诗瑜伽静修', icon: '🧘', tag: '玩', type: '体验', price: 800, desc: '喜马拉雅山脚下的瑜伽之都，' +
  '7 天静修含住宿与素食。' +
  '"披头士"曾在此学冥想。' },
  { id: 'ing_obser', name: '孟买一日', icon: '🏙️', tag: '玩', type: '体验', price: 200, desc: '飞机 1.5 小时到金融中心，' +
  '印度门与泰姬陵酒店，' +
  '宝莱坞与贫民窟并存，' +
  '"印度的"纽约城""。' }
);
