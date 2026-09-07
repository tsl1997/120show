/* 河内 分册02：特色周边（河粉/烤肉米线/法棍/滴漏咖啡/生啤/奥黛/丝巾） */
window.VN_GIFTS = window.VN_GIFTS || [];
window.VN_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'hanoi_pho', name: '河粉（Pho）', icon: '🍜', tag: '食', type: '美食', price: 12, desc: '牛骨汤底熬一夜，生牛肉片用热汤烫熟。配九层塔和青柠，"国饭"从街头吃到老店都好吃。' },
  { id: 'hanoi_bun_cha', name: '烤肉米线', icon: '🍢', tag: '食', type: '美食', price: 18, desc: '炭烤猪肉泡在酸甜鱼露汤里，配米线和生菜。奥巴马同款，"鲍勃迪伦套餐"是网红点单暗号。' },
  { id: 'hanoi_banh_mi', name: '越南法棍', icon: '🥖', tag: '食', type: '美食', price: 10, desc: '法棍夹肉酱、腌萝卜、香菜和辣椒，法国与东南亚的口味合体。两万盾的"世界最佳三明治"，站着吃才香。' },
  { id: 'hanoi_egg_coffee', name: '蛋黄咖啡', icon: '🥚', tag: '食', type: '饮品', price: 12, desc: '蛋黄打发成蛋奶霜盖在浓咖啡上。1946年物资匮乏时的发明，如今是河内咖啡文化的骄傲。' },
  { id: 'hanoi_drip', name: '滴漏咖啡', icon: '☕', tag: '食', type: '饮品', price: 10, desc: '铝制滴漏壶滴一滴等一分钟，加炼乳是"冰咖啡"。街边塑料凳一坐一下午，时间跟着咖啡一起慢。' },
  { id: 'hanoi_beer', name: '生啤（Bia Hoi）', icon: '🍺', tag: '食', type: '饮品', price: 5, desc: '街角散装生啤几毛钱一杯，配毛豆花生。傍晚整条街的塑料凳坐满，"举杯"越南话说"Môt hai ba dô!"' },
  { id: 'hanoi_coconut', name: '椰子冻·水果摊', icon: '🥥', tag: '食', type: '美食', price: 8, desc: '热带水果论盘卖：火龙果、山竹、菠萝蜜。椰子冻冰冰凉凉，是摩托洪流里的一口清凉。' },
  { id: 'hanoi_embroidery', name: '刺绣与丝绸', icon: '🧵', tag: '衣', type: '文创', price: 70, desc: '越南丝绸围巾光泽柔滑，刺绣画细到根根分明。三十六行街的"丝街"老铺，一件绣品能看半天。' },
  { id: 'hanoi_conical', name: '斗笠·奥黛', icon: '👒', tag: '衣', type: '服饰', price: 40, desc: '竹编斗笠配上奥黛长衫，越南女性的经典剪影。买一顶小斗笠当装饰，越南风情满分。' },
  { id: 'hanoi_motor_ride', name: '摩托游城', icon: '🛵', tag: '行', type: '体验', price: 35, desc: '坐上"摩的"在摩托洪流里穿梭，比任何观光车都刺激。司机一路当导游，风声里听懂半个河内。' },
  { id: 'hanoi_cooking', name: '越南菜烹饪课', icon: '👨‍🍳', tag: '玩', type: '体验', price: 100, desc: '先逛市场挑香料，再学做三道越南菜。河粉汤底的秘密、鱼露的比例，学完自己做给朋友吃。' },
  { id: 'hanoi_hotel', name: '老城精品酒店', icon: '🏨', tag: '住', type: '住宿', price: 180, desc: '法式殖民风小酒店，天台能看到还剑湖。两百块钱含早餐，前台中文英语都会一点。' },
  /* ---- 新增 ---- */
  { id: 'vng_cha_ca', name: 'Cha Ca 烤鱼粉', icon: '🐟', tag: '食', type: '美食', price: 35, desc: '河内的"烤鱼粉"，' +
  '茴香与姜黄腌渍' +
  '油炸后撒花生' +
  '与葱花。' +
  'Obama 也来打卡。' },
  { id: 'vng_com', name: '越南春卷', icon: '🌯', tag: '食', type: '美食', price: 15, desc: '米纸包虾、' +
  '米粉、薄荷，' +
  '蘸花生酱。' +
  '越南国菜之一。' },
  { id: 'vng_nem', name: 'Nem Chua 酸肉肠', icon: '🌭', tag: '食', type: '特产', price: 10, desc: '发酵生猪肉卷' +
  '配辣椒与蒜，' +
  '配啤酒的好东西。' },
  { id: 'vng_milk', name: '椰子咖啡', icon: '🥥', tag: '食', type: '饮品', price: 18, desc: '越南版星巴克，' +
  '椰奶咖啡配滴漏壶。' +
  '"热带椰风咖啡"。' },
  { id: 'vng_ao_dai', name: '奥黛定制', icon: '👘', tag: '衣', type: '服饰', price: 150, desc: '奥黛合身长衫配长裤，' +
  '量身定做 24 小时。' +
  '36 行街的' +
  '裁缝店是"必到打卡"。' },
  { id: 'vng_lacquer', name: '越南漆器', icon: '🏺', tag: '衣', type: '文创', price: 80, desc: '蛋壳镶嵌的漆器' +
  '盒与托盘，' +
  '越南的"传统工艺之王"。' },
  { id: 'vng_ao_bac', name: '北越苗族蜡染', icon: '🧵', tag: '衣', type: '文创', price: 150, desc: '苗族蓝靛蜡染布' +
  '图案古老，' +
  '一条围巾或挂布，' +
  '"越南的"民族手作""。' },
  { id: 'vng_cooking2', name: '河粉汤底课', icon: '🍜', tag: '玩', type: '体验', price: 150, desc: '老师教你八角、肉桂' +
  '与牛骨慢炖六小时，' +
  '做出纯正 Pho 汤。' }
);
