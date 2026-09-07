/* 巴厘岛 分册02：特色周边（脏鸭餐/猫屎咖啡/沙龙/木雕/巴厘SPA/瑜伽） */
window.ID_GIFTS = window.ID_GIFTS || [];
window.ID_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'bali_nasi', name: '脏鸭餐', icon: '🦆', tag: '食', type: '美食', price: 50, desc: '整鸭炸得酥脆到骨头都能嚼，配三色米饭与参巴酱。乌布稻田边吃"脏鸭"，是巴厘的仪式感午餐。' },
  { id: 'bali_babi', name: '烤乳猪饭', icon: '🐷', tag: '食', type: '美食', price: 35, desc: '巴厘印度教才有的猪肉料理，脆皮乳猪配血肠和辣酱。伊卡河边的摊子排队三十年，吃完手指都要嘬干净。' },
  { id: 'bali_sate', name: '沙爹烤串·烤鱼', icon: '🍢', tag: '食', type: '美食', price: 25, desc: '金巴兰海滩的炭烤海鲜配椰壳烤玉米。脚踩白沙、头顶星星，烤鱼香与海浪声是"巴厘晚餐标配"。' },
  { id: 'bali_luwak', name: '猫屎咖啡', icon: '☕', tag: '食', type: '饮品', price: 60, desc: '麝香猫"加工"的咖啡豆，全球最贵的咖啡之一。咖啡庄园里试喝十种口味，猫在笼子里一脸高冷。' },
  { id: 'bali_coconut', name: '椰子水·Es Kelapa', icon: '🥥', tag: '食', type: '饮品', price: 12, desc: '热带岛屿的"天然电解质水"，现剖椰子配椰肉。椰壳还能做成碗带回家，环保又好喝。' },
  { id: 'bali_bintang', name: 'Bintang啤酒', icon: '🍺', tag: '食', type: '饮品', price: 18, desc: '"五星啤酒"是巴厘海滩的官方饮料，冰镇配日落。红绿圆标一出现，就知道到巴厘了。' },
  { id: 'bali_sarong', name: '沙龙布（纱笼）', icon: '🩳', tag: '衣', type: '服饰', price: 35, desc: '进庙必须围的"庙裙"，热带花卉图案。一条纱笼百变：围腰、披肩、沙滩巾，巴厘的"万能布"。' },
  { id: 'bali_wood', name: '木雕·石雕', icon: '🗿', tag: '衣', type: '文创', price: 80, desc: '马斯村的木雕匠人刻出神像与猫头鹰。一小尊"神猴哈奴曼"摆件，放在案头守护专注。' },
  { id: 'bali_silver', name: '乌布银器', icon: '💍', tag: '衣', type: '文创', price: 120, desc: '巴厘银匠的细丝工艺全球有名，花藤纹手镯是招牌。可定制刻字，"海岛限定"的纪念。' },
  { id: 'bali_surf', name: '冲浪教学', icon: '🏄', tag: '玩', type: '体验', price: 130, desc: '库塔软浪区两小时速成课，教练拖板带你追浪。第一次站起来那三秒，会上瘾。' },
  { id: 'bali_spa', name: '巴厘式SPA', icon: '💆', tag: '玩', type: '体验', price: 100, desc: '花瓣浴、热石按摩、天然磨砂一条龙。两小时下来皮肤滑得能"反光"，价格只要国内三分之一。' },
  { id: 'bali_yoga', name: '乌布瑜伽晨课', icon: '🧘', tag: '玩', type: '体验', price: 50, desc: '稻田边的瑜伽馆，鸟鸣当背景音。一小时的拜日式下来，浑身通透。' },
  { id: 'bali_villa', name: '私人泳池别墅', icon: '🏨', tag: '住', type: '住宿', price: 400, desc: '巴厘的住宿性价比之王：独栋别墅带泳池。清晨被鸟叫醒，跳进泳池游两圈再吃早餐。' },
  /* ---- 新增 ---- */
  { id: 'idg_ayam', name: 'Ayam Betutu 香料鸡', icon: '🍗', tag: '食', type: '美食', price: 40, desc: '巴厘香料塞满鸡腹包蕉叶慢烤 6 小时，' +
  '香料浸到骨头里。' },
  { id: 'idg_nasi_campur', name: 'Nasi Campur 印尼拌饭', icon: '🍚', tag: '食', type: '美食', price: 20, desc: '米饭配三四种小菜：' +
  '花生、辣酱、椰浆咖喱。' +
  '"印尼人的日常饭"。' },
  { id: 'idg_arak', name: 'Arak 巴厘米酒', icon: '🍶', tag: '食', type: '饮品', price: 25, desc: '椰子花发酵的传统酒，' +
  '60 度烈。' +
  '本地人加蜂蜜喝，' +
  '"巴厘的"生命之水""。' },
  { id: 'idg_kopi_luwak', name: '猫屎咖啡礼盒', icon: '🎁', tag: '食', type: '特产', price: 250, desc: '巴厘庄园产的麝香猫咖啡，' +
  '100 克礼盒装。' +
  '给爱咖啡的朋友，' +
  '"最贵的伴手礼"。' },
  { id: 'idg_gede', name: 'Batik 蜡染布', icon: '🧵', tag: '衣', type: '服饰', price: 150, desc: '印尼传统蜡染，' +
  '巴厘几何与印尼花鸟。' +
  '作围巾或墙上装饰，' +
  '"东南亚的扎染"。' },
  { id: 'idg_aglonema', name: '巴厘精油 SPA 套装', icon: '🧴', tag: '衣', type: '特产', price: 80, desc: '依兰、白姜、' +
  '茉莉花油，' +
  '带回家继续做 SPA。' },
  { id: 'idg_kecak', name: 'Kecak 火舞门票', icon: '🔥', tag: '玩', type: '体验', price: 100, desc: '乌鲁瓦图悬崖的百人合唱火舞，' +
  '夕阳背景。' +
  '"巴厘的"古希腊剧场""。' },
  { id: 'idg_dive', name: '图兰奔潜水', icon: '🤿', tag: '玩', type: '体验', price: 350, desc: '世界级的沉船潜水点，' +
  '二战美国货轮 USS Liberty。' +
  '入门级开放水域，' +
  '看鱼群与海龟。' },
  { id: 'idg_rafting', name: '阿勇河漂流', icon: '🚣', tag: '玩', type: '体验', price: 150, desc: '两小时激流与瀑布，' +
  '穿过热带雨林。' +
  '"巴厘的肾上腺素"。' },
  { id: 'idg_uluwatu_dinner', name: '金巴兰海鲜烛光晚餐', icon: '🌅', tag: '食', type: '体验', price: 280, desc: '沙滩上铺桌布，' +
  '夕阳配烤龙虾。' +
  '"巴厘最浪漫的海边晚餐"。' }
);
