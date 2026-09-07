/* 名古屋 分册02：特色周边（名古屋めし/喫茶早餐/陶器文创/都市体验） */
window.NGY_GIFTS = window.NGY_GIFTS || [];
window.NGY_GIFTS.push(
  /* ---- 名古屋めし（沿用原条目） ---- */
  { id: 'nagoya_misokatsu', name: '味噌猪排', icon: '🍖', tag: '食', type: '美食', price: 60, desc: '红味噌酱浇得厚厚的炸猪排，"名古屋饭"的代表。矢场味噌酱微甜浓香。' },
  { id: 'nagoya_unadon', name: '鳗鱼三吃', icon: '🐟', tag: '食', type: '美食', price: 180, desc: '一碗鳗鱼饭三种吃法：原味、加料、茶泡饭。蓬莱轩的"元祖鳗鱼三吃"百年不衰。' },
  { id: 'nagoya_teppan', name: '味噌煮乌冬·台湾拉面', icon: '🍜', tag: '食', type: '美食', price: 50, desc: '土手煮与味噌煮乌冬热气腾腾。"台湾拉面"其实是名古屋发明，辣得过瘾。' },
  { id: 'nagoya_hatcho', name: '八丁味噌', icon: '🫘', tag: '食', type: '特产', price: 35, desc: '爱知八丁味噌酿造两年，"豆味噌之王"。炖菜与煮乌冬的灵魂。' },
  { id: 'nagoya_kishimen', name: 'きしめん（宽扁面）', icon: '🍝', tag: '食', type: '美食', price: 30, desc: '名古屋的"扁面条"，滑溜入口。新干线上就能吃到，"车内名物"。' },
  { id: 'nagoya_chicken', name: '手羽先（鸡翅尖）', icon: '🍗', tag: '食', type: '美食', price: 45, desc: '世界の山酱甜辣鸡翅，"舔手指级别"。配啤酒是名古屋夜宵。' },
  { id: 'nagoya_golden', name: '金鯱文创', icon: '🐟', tag: '衣', type: '文创', price: 50, desc: '金鯱巧克力、金色摆件、城印章。"名古屋城"的金色符号，游客必买。' },
  { id: 'nagoya_le', name: '乐高/吉卜力文创', icon: '🧱', tag: '衣', type: '文创', price: 90, desc: '乐高限定名古屋城积木、吉卜力龙猫毛绒。"爱知两大乐园"的周边宇宙。' },
  { id: 'nagoya_toyotamodel', name: '丰田车模·引擎摆件', icon: '🚙', tag: '衣', type: '文创', price: 80, desc: '丰田博物馆限定车模与GT跑车模型。"制造之国"爱知的机械浪漫。' },
  { id: 'nagoya_scml', name: '乐高乐园一日', icon: '🎢', tag: '玩', type: '体验', price: 350, desc: '亚洲首座乐高乐园，"迷你名古屋"积木城市。儿童驾驶学校拿到"驾照"超有成就感。' },
  { id: 'nagoya_gibli', name: '吉卜力公园巡礼', icon: '🌳', tag: '玩', type: '体验', price: 400, desc: '龙猫之森、魔女之谷、幽灵之里三园区。真实大小的"哈尔移动城堡"头部，宫崎骏迷的终极圣地。' },
  { id: 'nagoya_toyota_tour', name: '丰田工厂参观', icon: '🏭', tag: '玩', type: '体验', price: 0, desc: '免费参观元町工厂总装线。机械臂焊接火花四溅，"世界级制造现场"。' },
  { id: 'nagoya_minsu', name: '名古屋站前酒店', icon: '🏨', tag: '住', type: '住宿', price: 300, desc: '名古屋站直达酒店，交通枢纽级便利。楼下的味噌煮乌冬深夜营业。' },
  /* ---- 新增名古屋めし与喫茶 ---- */
  { id: 'ngyg_cochin', name: '名古屋土鸡（コーチン）', icon: '🍗', tag: '食', type: '美食', price: 80, desc: '原产名古屋的地鸡品种，肉质紧实、鸡蛋鲜甜，是日本三大地鸡之一。水炊き与亲子丼最能尝出它的本味。' },
  { id: 'ngyg_oguratoast', name: '小仓吐司·喫茶早餐', icon: '☕', tag: '食', type: '美食', price: 25, desc: '烤得焦黄的厚切吐司上堆满甜红豆馅，配一杯咖啡就是名古屋式早晨。点饮品送早餐的モーニング文化，便宜到怀疑人生。' },
  { id: 'ngyg_uiro', name: '外郎糕（ういろう）', icon: '🍮', tag: '食', type: '特产', price: 25, desc: '米粉与砂糖蒸成的半透明米糕，口感Q弹软糯，青柳总本家的招牌。抹茶、红豆、黑糖多种口味，配煎茶正好。' },
  { id: 'ngyg_misooden', name: '味噌关东煮（味噌おでん）', icon: '🍢', tag: '食', type: '美食', price: 40, desc: '八丁味噌熬成的浓稠汤汁里煮大根与鸡蛋，甜咸浑厚。名古屋站地下街的立食店，一串大根配啤酒，暖心到胃。' },
  { id: 'ngyg_tenmusu', name: '天むす（虾天饭团）', icon: '🍙', tag: '食', type: '美食', price: 30, desc: '炸虾天妇罗裹进饭团，外层海苔酥脆。近铁名古屋站的这家"天むす"排队最长，一盒八个根本不够分。' },
  { id: 'ngyg_ankake', name: 'あんかけスパゲッティ', icon: '🍝', tag: '食', type: '美食', price: 35, desc: '粗面淋上勾芡的番茄浓汁，铺满炒蔬菜与香肠。名古屋独创的"意大利面异端"，加辣粉拌匀更过瘾。' },
  { id: 'ngyg_sugakiya', name: 'スガキヤ拉面', icon: '🍜', tag: '食', type: '美食', price: 20, desc: '名古屋发家的国民连锁拉面，一碗只要两三百日元。豚骨酱油清汤配细面，加个半熟蛋就是学生时代的味道。' },
  { id: 'ngyg_unagifuro', name: '鳗鱼蒲烧真空伴手礼', icon: '🐟', tag: '食', type: '特产', price: 100, desc: '鳗鱼三吃的灵魂食材，真空包装带回家微波即食。蒲烧香气不输店内现烤，回国还能复刻一碗名古屋式鳗饭。' },
  /* ---- 新增陶器与文创 ---- */
  { id: 'ngyg_minoyaki', name: '美浓烧茶碗小皿', icon: '🍵', tag: '衣', type: '特产', price: 45, desc: '岐阜美浓出产的陶器，釉色温润、纹样素雅。名古屋土产店常搭售的"和风餐具入门"，一件就点亮餐桌。' },
  { id: 'ngyg_noritake', name: '则武名瓷', icon: '🍽️', tag: '衣', type: '特产', price: 120, desc: '百年品牌则武（Noritake）的骨瓷餐具，花纹细腻如手绘。名古屋总店限定款印着金鯱，是瓷器迷的朝圣纪念。' },
  { id: 'ngyg_goshuin_atsuta', name: '热田神宫御守', icon: '⛩️', tag: '玩', type: '文创', price: 30, desc: '热田神宫限定御守，印着草薙剑与武运昌隆的绣字。神社本殿前求一支签，签文用古文写的，慢慢读才有味道。' },
  { id: 'ngyg_shachistamp', name: '金鯱御城印', icon: '📜', tag: '玩', type: '文创', price: 40, desc: '名古屋城限定的御城印与金鯱朱印，集章控人手一本。城下纪念店还能盖上当日限定的日期印章，仪式感满满。' },
  { id: 'ngyg_maglev_model', name: '磁悬浮列车模型', icon: '🚄', tag: '玩', type: '文创', price: 90, desc: 'JR东海官方出品的磁悬浮列车模型，流线车头收进透明盒。摆件还能亮灯，铁道迷书房里必须有它坐镇。' },
  /* ---- 新增体验与交通 ---- */
  { id: 'ngyg_armor', name: '战国甲胄试穿体验', icon: '⚔️', tag: '玩', type: '体验', price: 150, desc: '穿上大具足盔甲、配一把胁差合影，瞬间化身战国武将。专业店员全程协助穿戴，还能加购写真照带回家。' },
  { id: 'ngyg_ecopass', name: '名古屋地铁一日券', icon: '🚇', tag: '行', type: '体验', price: 20, desc: '周末与节假日限定的地铁一日券，一张票畅游名城、东山与港区。车站自动贩卖机随时可买，省下腿力慢慢逛。' }
);
