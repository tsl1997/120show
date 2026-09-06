/* ============ 美国·奥斯汀 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'austin',
    name: '奥斯汀',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🦇',
    desc: '"硅丘"·现场音乐之都：德州首府，SXSW 与奥斯汀限定的"Keep Austin Weird"，国会大道桥下150万只蝙蝠起飞。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7400 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'austin_capitol', name: '德州州议会大厦', icon: '🏛️', price: 0, desc: '比国会山还高4米的粉色花岗岩大厦。免费参观"孤星州"的权力中心。' },
      { id: 'austin_bats', name: '国会大道蝙蝠桥', icon: '🦇', price: 0, desc: '北美最大城市蝙蝠群150万只。日落后"蝙蝠龙卷风"起飞，壮观到失语。' },
      { id: 'austin_sxsw', name: 'SXSW 音乐节·ACL 音乐节', icon: '🎸', price: 500, desc: '"South by Southwest"科技+音乐+电影大融合。Zilker 公园 ACL 音乐节，"现场音乐之都"的巅峰。' },
      { id: 'austin_barton', name: '巴顿温泉池·Hamilton Pool', icon: '🏊', price: 30, desc: '天然温泉池常年22度，"免费的城市泳池"。Hamilton Pool 天坑瀑布，"德州仙境"。' },
      { id: 'austin_ladybird', name: 'Lady Bird 湖·Zilker 公园', icon: '🌳', price: 0, desc: '市中心湖泊皮划艇+骑行绿道。Zilker 公园风筝节与圣诞灯，"奥斯汀的客厅"。' },
      { id: 'austin_rainey', name: 'Rainey 街· sixth 街', icon: '🍻', price: 0, desc: 'Rainey 街老屋改酒吧群，"Bungalow 酒馆宇宙"。Sixth 街夜生活，"德州的不夜街"。' },
      { id: 'austin_hill', name: '德州山乡·弗雷德里克斯堡', icon: '🍇', price: 0, desc: '德州 German 移民小镇与酒庄区。Enchanted Rock 花岗岩穹顶徒步，"德州的桃花源"。' },
    ],
    souvenirs: [
      { id: 'austin_bbq3', name: 'Franklin BBQ 排队之旅', icon: '🍖', tag: '食', type: '美食', price: 160, desc: '全球最火 BBQ：排队6小时卖完即止。奥巴马也来排队（还请了客），"烟熏牛胸的朝圣"。' },
      { id: 'austin_taco', name: '早餐 Taco', icon: '🌯', tag: '食', type: '美食', price: 30, desc: '奥斯汀人早餐吃 Taco：鸡蛋培根酪梨酱。Veracruz All Natural 排队王，"德州早餐革命"。' },
      { id: 'austin_breakfast', name: '德州辣椒·Frito Pie', icon: '🌶️', tag: '食', type: '美食', price: 40, desc: 'Frito Pie：薯片袋里倒辣椒芝士。"德州世界杯球场发明"，豪迈级零食。' },
      { id: 'austin_coffee', name: '德州精酿与蒸馏', icon: '🍺', tag: '食', type: '饮品', price: 50, desc: '奥斯汀精酿与 Texas whiskey。蒂托手工伏特加也产自奥斯汀，"本地骄傲"。' },
      { id: 'austin_bat_wen', name: '蝙蝠文创', icon: '🦇', tag: '衣', type: '文创', price: 35, desc: '蝙蝠桥 T恤、蝙蝠玩偶。"世界蝙蝠之都"的萌系周边。' },
      { id: 'austin_weird', name: 'Keep Austin Weird 周边', icon: '🦄', tag: '衣', type: '文创', price: 35, desc: '"保持奥斯汀怪异"T恤与贴纸。城市精神口号，"怪就是酷"。' },
      { id: 'austin_bat_watch', name: '蝙蝠起飞观赏', icon: '🦇', tag: '玩', type: '体验', price: 30, desc: '日落时在桥上/游船看蝙蝠群起飞。"150万只同时升空"像龙卷风。' },
      { id: 'austin_kayak2', name: 'Lady Bird 湖皮划艇', icon: '🛶', tag: '玩', type: '体验', price: 100, desc: '划艇看天际线与乌龟晒背。"城市中心的野生时刻"。' },
      { id: 'austin_music', name: 'Sixth 街 Livehouse 一夜', icon: '🎤', tag: '玩', type: '体验', price: 100, desc: '一条街几十个 livehouse，门口就能听到天团。"现场音乐之都"名副其实。' },
      { id: 'austin_hill2', name: 'Enchanted Rock 徒步', icon: '🥾', tag: '玩', type: '体验', price: 60, desc: '粉色花岗岩穹顶攀顶，"德州的自然奇迹"。夜晚星空银河。' },
      { id: 'austin_minsu', name: 'South Congress 民宿', icon: '🏨', tag: '住', type: '住宿', price: 600, desc: 'SoCo 街区民宿，屋顶看州议会大厦。楼下就是餐车与黑胶店。' },
    ],
    stories: [
      { id: 'austin_story_bat2', name: '蝙蝠是" pest 控制王者"', icon: '🦇', desc: '国会大道蝙蝠群每晚吃掉3万磅昆虫。"奥斯汀免费pest control"，市民曾经想赶走它们，如今是城市名片。' },
      { id: 'austin_story_sxsw2', name: 'SXSW 的"魔法"', icon: '🎸', desc: '1987年创办的音乐节，如今科技领袖都来演讲。Twitter 在 SXSW 爆红，"未来在奥斯汀首秀"。' },
      { id: 'austin_story_franklin', name: 'Franklin BBQ 的"排队文化"', icon: '🍖', desc: '清晨8点排队，下午2点售罄。老板 Aaron Franklin 米其林星，"BBQ 界的乔布斯"。' },
      { id: 'austin_story_weird2', name: '"Keep Austin Weird"的由来', icon: '🦄', desc: '2000年社区为保护本地小店反对连锁。一句话变成城市灵魂，"怪是奥斯汀的骄傲"。' },
      { id: 'austin_story_capital', name: '粉红花岗岩的"孤星州"', icon: '🏛️', desc: '德州州议会大厦用本地粉色花岗岩，比国会山高。"德州人的骄傲具象化"。' },
      { id: 'austin_story_tech', name: '"硅丘"的崛起', icon: '💻', desc: '特斯拉总部、戴尔、甲骨文迁入奥斯汀。房价涨了但"怪"还没丢，"科技公司也要保持怪"。' },
    ],
  });
})();
