/* ============ 越南·河内 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hanoi',
    name: '河内',
    country: '越南',
    cc: 'VN',
    flag: '🇻🇳',
    region: '东南亚',
    hero: '🛵',
    desc: '千年升龙古城：摩托洪流穿过法式老街，街头塑料凳上的滴漏咖啡慢慢滴，一碗河粉的清晨就是河内的答案。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1200 }, { name: '火车', icon: '🚂', cost: 700 }],
    visa: { cost: 260, note: '电子签证（E-visa）' },
    spots: [
      { id: 'hanoi_hoan_kiem', name: '还剑湖', icon: '🐢', price: 0, desc: '市中心的一汪碧水，传说黎太祖还剑给神龟。清晨市民在湖边晨跑打太极，玉山寺的红桥是全城最上镜的转角。' },
      { id: 'hanoi_old_quarter', name: '三十六行街', icon: '🏮', price: 0, desc: '千年老城区，一条街卖一种行当：纸街、锡街、丝街。摩托车与摊贩挤在法式骑楼下，烟火气扑面而来。' },
      { id: 'hanoi_hcmc', name: '胡志明纪念堂', icon: '🏛️', price: 0, desc: '巴亭广场上的灰色纪念堂，胡志明水晶棺供人瞻仰。士兵换岗一动不动，广场上的越南国旗迎风招展。' },
      { id: 'hanoi_temple_literature', name: '文庙·国子监', icon: '🎓', price: 15, desc: '越南第一所大学（1070年建），82块进士碑被摸得发亮。孔子像前学生求考运，殿里挂着汉字匾额。' },
      { id: 'hanoi_train_street', name: '火车街', icon: '🚂', price: 0, desc: '铁轨贴着咖啡馆门前的窄巷，火车来时全场"收桌退潮"。每天两班的绿皮车擦身而过，这是河内最刺激的下午茶。' },
      { id: 'hanoi_opera', name: '河内大剧院·三十六古街夜市', icon: '🎭', price: 0, desc: '法国殖民时期的小歌剧院，米黄色墙配铸铁栏杆。周末夜市封街摆摊，一路吃穿用玩到还剑湖。' },
      { id: 'hanoi_water_puppet', name: '水上木偶戏', icon: '🎭', price: 30, desc: '升龙王朝的水上木偶戏，演员藏在水中操纵木偶。凤凰飞出水面、龙喷水的瞬间，全场的快门声都是掌声。' },
    ],
    souvenirs: [
      { id: 'hanoi_pho', name: '河粉（Pho）', icon: '🍜', tag: '食', type: '美食', price: 15, desc: '牛骨汤底熬一夜，生牛肉片用热汤烫熟。配九层塔和青柠，"国饭"从街头吃到老店都好吃。' },
      { id: 'hanoi_bun_cha', name: '烤肉米线', icon: '🍢', tag: '食', type: '美食', price: 20, desc: '炭烤猪肉泡在酸甜鱼露汤里，配米线和生菜。奥巴马同款，"鲍勃迪伦套餐"是网红点单暗号。' },
      { id: 'hanoi_banh_mi', name: '越南法棍', icon: '🥖', tag: '食', type: '美食', price: 12, desc: '法棍夹肉酱、腌萝卜、香菜和辣椒，法国与东南亚的口味合体。两万盾的"世界最佳三明治"，站着吃才香。' },
      { id: 'hanoi_egg_coffee', name: '蛋黄咖啡', icon: '🥚', tag: '食', type: '饮品', price: 15, desc: '蛋黄打发成蛋奶霜盖在浓咖啡上。1946年物资匮乏时的发明，如今是河内咖啡文化的骄傲。' },
      { id: 'hanoi_drip', name: '滴漏咖啡', icon: '☕', tag: '食', type: '饮品', price: 12, desc: '铝制滴漏壶滴一滴等一分钟，加炼乳是"冰咖啡"。街边塑料凳一坐一下午，时间跟着咖啡一起慢。' },
      { id: 'hanoi_beer', name: '生啤（Bia Hoi）', icon: '🍺', tag: '食', type: '饮品', price: 6, desc: '街角散装生啤几毛钱一杯，配毛豆花生。傍晚整条街的塑料凳坐满，"举杯"越南话说"Môt hai ba dô!"' },
      { id: 'hanoi_coconut', name: '椰子冻·水果摊', icon: '🥥', tag: '食', type: '美食', price: 10, desc: '热带水果论盘卖：火龙果、山竹、菠萝蜜。椰子冻冰冰凉凉，是摩托洪流里的一口清凉。' },
      { id: 'hanoi_embroidery', name: '刺绣与丝绸', icon: '🧵', tag: '衣', type: '文创', price: 80, desc: '越南丝绸围巾光泽柔滑，刺绣画细到根根分明。三十六行街的"丝街"老铺，一件绣品能看半天。' },
      { id: 'hanoi_conical', name: '斗笠·奥黛', icon: '👒', tag: '衣', type: '服饰', price: 50, desc: '竹编斗笠配上奥黛长衫，越南女性的经典剪影。买一顶小斗笠当装饰，越南风情满分。' },
      { id: 'hanoi_motor_ride', name: '摩托游城', icon: '🛵', tag: '行', type: '体验', price: 40, desc: '坐上"摩的"在摩托洪流里穿梭，比任何观光车都刺激。司机一路当导游，风声里听懂半个河内。' },
      { id: 'hanoi_cooking', name: '越南菜烹饪课', icon: '👨‍🍳', tag: '玩', type: '体验', price: 120, desc: '先逛市场挑香料，再学做三道越南菜。河粉汤底的秘密、鱼露的比例，学完自己做给朋友吃。' },
      { id: 'hanoi_hotel', name: '老城精品酒店', icon: '🏨', tag: '住', type: '住宿', price: 200, desc: '法式殖民风小酒店，天台能看到还剑湖。两百块钱含早餐，前台中文英语都会一点。' },
    ],
    stories: [
      { id: 'hanoi_story_motor', name: '摩托洪流的"过街心法"', icon: '🛵', desc: '河内六百万辆摩托，过马路秘诀是"匀速慢走、绝不犹豫"。车流会绕着你转，站着不动反而最安全。' },
      { id: 'hanoi_story_36', name: '三十六行街的"一街一行"', icon: '📜', desc: '老街按行业聚居命名：银器街、纸街、竹器街。同业公会制度从十五世纪沿用至今，"一条街一种人生"。' },
      { id: 'hanoi_story_train', name: '火车贴脸过', icon: '🚂', desc: '火车街的铁轨离咖啡馆桌一米，火车来时老板喊一声"火车！火车！"全场收桌。游客蹲守三小时就为那三分钟。' },
      { id: 'hanoi_story_egg', name: '战争年代的咖啡发明', icon: '🥚', desc: '1946年牛奶短缺，咖啡店老板用蛋黄打发代替奶泡。"蛋黄咖啡"从应急发明变成河内招牌，甜到像甜品。' },
      { id: 'hanoi_story_kerbside', name: '塑料凳上的咖啡哲学', icon: '🪑', desc: '河内人蹲坐在半米高的塑料凳上喝一下午咖啡。凳子越矮、坐得越低、聊得越久，这是"地面上的咖啡馆"。' },
      { id: 'hanoi_story_kim', name: '进士碑的"考运"', icon: '🎓', desc: '文庙82块进士石碑记录着三百年科举，考生考前必来摸碑。高考季这里挤满学生和家长，孔子像前的花堆成小山。' },
    ],
  });
})();
