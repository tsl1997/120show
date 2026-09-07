/* 异世界·美少女战士 分册02：人物相遇与大事件 */
window.SM_STORIES = window.SM_STORIES || [];
window.SM_STORIES.push(
  /* ---- 内部五战士 ---- */
  { id: 'smc_usagi', name: '月野兔（水手月亮）', icon: '🌙', desc: '爱哭爱吃爱睡的14岁少女，倩妮迪公主转世——"我要代表月亮消灭你！"最终成为新倩妮迪女王。' },
  { id: 'smc_ami', name: '水野亚美（水手水星）', icon: '💧', desc: 'IQ300的超级学霸，水手战士的超算大脑——"水星气泡攻击"。' },
  { id: 'smc_rei', name: '火野丽（水手火星）', icon: '🔥', desc: '神社巫女，火射手的御姐战士——"恶灵退散！"与小兔的吵架搭档。' },
  { id: 'smc_makoto', name: '木野真琴（水手木星）', icon: '⚡', desc: '最高的力气+最好的厨艺，花与雷的战士。' },
  { id: 'smc_minako', name: '爱野美奈子（水手金星）', icon: '💛', desc: '水手V的前身，金星战士——偶像梦想与 volleyball 的明星。' },
  { id: 'smc_mamoru', name: '地场卫（夜礼服假面）', icon: '🎩', desc: '夜礼服假面/安迪米奥王子，小兔的命中注定，红玫瑰的骑士。' },
  { id: 'smc_chibiusa', name: '小小兔（水手小月亮）', icon: '🍓', desc: '来自30世纪的任性小公主，"我要妈妈的时间机器！"' },
  /* ---- 外部四战士 ---- */
  { id: 'smc_haruka', name: '天王遥（水手天王星）', icon: '🏎️', desc: '赛车手外形的帅气"王子殿下"，天空之剑的持有者。' },
  { id: 'smc_michiru', name: '海王满（水手海王星）', icon: '🎻', desc: '小提琴家与画家，深海之镜的优雅战士。' },
  { id: 'smc_setsuna', name: '冥王雪奈（水手冥王星）', icon: '🕰️', desc: '时间之门的孤独守护者——"禁止的时间旅行"的看守人。' },
  { id: 'smc_hotaru', name: '土萌萤（水手土星）', icon: '🪐', desc: '终焉与重生的沉默战士——"沈默之镰"的少女。' },
  /* ---- 猫与家人 ---- */
  { id: 'smc_luna', name: '露娜', icon: '🐱', desc: '额头月牙的黑猫导师，"小兔你又迟到了！"变身装备的发放者。' },
  { id: 'smc_artemis', name: '阿提米丝', icon: '😼', desc: '美奈子的白猫搭档，露娜的欢喜冤家。' },
  { id: 'smc_diana', name: '黛安娜', icon: '🐈', desc: '露娜与阿提米丝未来之女，从30世纪来的小灰猫。' },
  { id: 'smc_family', name: '月野一家', icon: '🏠', desc: '爸爸谦之（摄影师）、妈妈育子、弟弟进悟——"小兔你又睡过头了！"' },
  { id: 'smc_naru', name: '大阪奈留', icon: '🎒', desc: '小兔的好友，眼镜店的普通少女——总被卷入事件的倒霉蛋。' },
  { id: 'smc_umino', name: '海野栗雄', icon: '🤓', desc: '奈留的青梅竹马，"情报通"眼镜男。' },
  /* ---- 敌人：黑暗王国 ---- */
  { id: 'sme_beryl', name: '贝利尔女王', icon: '🌑', desc: '黑暗王国的女王，对安迪米奥的执念——梅塔利亚能量的人间容器。' },
  { id: 'sme_metalia', name: '梅塔利亚大王', icon: '🕳️', desc: '黑暗王国的真正本体，混沌气息的巨大能量体。' },
  { id: 'sme_jadeite', name: '四天王·杰戴特', icon: '🪨', desc: '东方的守护骑士，第一代收集能量的帅哥反派。' },
  { id: 'sme_nephrite', name: '四天王·奈佛莱特', icon: '⭐', desc: '南方的守护骑士，与奈留的悲剧恋——"星之泪"。' },
  { id: 'sme_zoisite', name: '四天王·佐伊赛特', icon: '🌹', desc: '西方的守护骑士，收集彩虹水晶的急先锋。' },
  { id: 'sme_kunzite', name: '四天王·昆茨埃特', icon: '⚔️', desc: '北方的守护骑士，四天王之首，最后的强敌。' },
  /* ---- 死月/黑月亮 ---- */
  { id: 'sme_rubeus', name: '鲁贝乌斯', icon: '🚀', desc: '黑月亮的时空犯罪者，追杀小小兔的赤发男。' },
  { id: 'sme_esmeraude', name: '艾丝梅拉特', icon: '💚', desc: '绿发女妖，"未来的女王是我"的嫉妒化身。' },
  { id: 'sme_saphir', name: '萨菲尔', icon: '🔷', desc: '王子迪亚蒙德的弟弟，最后的良知。' },
  { id: 'sme_diamond', name: '王子迪亚蒙德', icon: '👑', desc: '黑月亮的领袖，被 wise man 操控的悲剧王子。' },
  { id: 'sme_wiseman', name: '智者怀斯曼', icon: '🔮', desc: '死亡幻影的真身——混沌的黑月使者。' },
  { id: 'sme_blacklady', name: '黑色淑女（黑小兔）', icon: '🖤', desc: '被洗脑的小小兔——"父亲的记忆和母亲的帽子都是我的"。' },
  /* ---- 无限学园/死亡月亮/银河 ---- */
  { id: 'sme_tomoe', name: '土萌博士', icon: '🧪', desc: '萤的父亲，被恶灵附身的天才科学家——无限学园的"教授"。' },
  { id: 'sme_mistress9', name: '女主宰九号', icon: '🕷️', desc: '寄生在萤体内的死亡月亮女王之魂。' },
  { id: 'sme_pharaoh90', name: '法老90', icon: '☄️', desc: '来自异次元的终极存在——土星觉醒的导火索。' },
  { id: 'sme_nehellenia', name: '尼黑伦尼亚女王', icon: '🪞', desc: '死亡月亮的始祖，镜中永葆青春的诅咒女王。' },
  { id: 'sme_amazon', name: '亚马逊四重奏', icon: '🎪', desc: '塞蕾丝、帕拉帕拉、裘裘、贝丝——马戏团的少女四人组，最后的水手战士候补。' },
  { id: 'sme_galaxia', name: '水手加拉西亚', icon: '🌌', desc: '银河最强的战士，"被混沌附身的光"——最终章的敌与悲。' },
  { id: 'sme_starlights', name: '星光三剑侠', icon: '🎤', desc: '星野光、大气光、夜天光——来自Kinmoku星的偶像歌手战士。' },
  { id: 'smc_chibichibi', name: '小小小兔（ChibiChibi）', icon: '✨', desc: '"小小小——！"两岁的神秘幼女，加拉西亚的希望之光。' },
  /* ---- 大事件 ---- */
  { id: 'smv_first_transform', name: '第一次变身', icon: '🌙', desc: '迟到少女救下黑猫露娜——"月棱镜力量，变身！"美少女战士的起点。' },
  { id: 'smv_tuxedo_rose', name: '夜礼服假面与玫瑰', icon: '🌹', desc: '每次危机时的红玫瑰登场——"水手月亮，振作起来！"' },
  { id: 'smv_four_generals', name: '四天王之战', icon: '⚔️', desc: '收集银水晶的争夺——前世守护骑士的悲剧对决。' },
  { id: 'smv_beryl_final', name: '贝利尔决战', icon: '🌑', desc: '东京塔的最终之战——倩妮迪公主的银水晶觉醒。' },
  { id: 'smv_moon_memory', name: '银千年王国的记忆', icon: '🌕', desc: '千年前的悲剧：安迪米奥为公主挡刀——转世之恋的起点。' },
  { id: 'smv_chibiusa_arrive', name: '小小兔从天而降', icon: '🍓', desc: '"把银水晶交出来！"——30世纪的危机预告。' },
  { id: 'smv_crystal_tokyo', name: '水晶东京的陷落', icon: '💎', desc: '未来都市的黑月入侵——小小兔寻找水手战士的过去。' },
  { id: 'smv_outer_awaken', name: '外部三战士登场', icon: '🔭', desc: '三枚 "talisman" 诞生——天王海王冥王的冷酷使命。' },
  { id: 'smv_saturn_awaken', name: '土星觉醒', icon: '🪐', desc: '"沈默"的代价——萤的毁灭与重生，世界重启的奇蹟。' },
  { id: 'smv_deadmoon_circus', name: '死亡月亮马戏团之战', icon: '🎪', desc: '恶梦镜中的尼黑伦尼亚——"永远的美"的诅咒。' },
  { id: 'smv_galaxia_war', name: '银河终战', icon: '🌌', desc: '战士们逐一陨落，小兔走到最后的孤独决战——爱是最后的武器。' },
  { id: 'smv_wedding', name: '最后的婚礼', icon: '💒', desc: '漫画最终回：小兔与卫的婚礼——"月亮，永远闪耀"。' }
);
