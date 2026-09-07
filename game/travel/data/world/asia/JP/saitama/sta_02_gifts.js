/* 埼玉 分册02：特色周边（埼玉味道/秩父长瀞手信/非遗文创/山野体验住宿） */
window.STA_GIFTS = window.STA_GIFTS || [];
window.STA_GIFTS.push(
  /* ---- 沿用原条目（原样保留） ---- */
  { id: 'saitama_shinkenko', name: '深谷葱·狭山茶', icon: '🧅', tag: '食', type: '特产', price: 30, desc: '深谷葱"日本葱王"甜到可以生吃。狭山茶香浓，"埼玉的绿"。' },
  { id: 'saitama_zenko', name: '草加煎饼', icon: '🫓', tag: '食', type: '特产', price: 30, desc: '草加宿驿站的酱油煎饼，"咔嚓"三百年。现烤的脆度，手信经典。' },
  { id: 'saitama_koedo', name: '川越红薯甜点', icon: '🍠', tag: '食', type: '美食', price: 35, desc: '川越"红薯街"：红薯冰淇淋、红薯条、红薯咖啡。"小江户的甜"。' },
  { id: 'saitama_crayon', name: '蜡笔小新周边', icon: '🖍️', tag: '衣', type: '文创', price: 45, desc: '小新玩偶、动感超人徽章、小白T恤。春日部限定"野原家全家福"。' },
  { id: 'saitama_densha', name: '铁道文创', icon: '🚆', tag: '衣', type: '文创', price: 40, desc: '铁道博物馆限定模型、车票书签。E7系新干线钥匙扣，"铁道宅收藏"。' },
  { id: 'saitama_bonsai', name: '盆栽文创', icon: '🪴', tag: '衣', type: '文创', price: 60, desc: '迷你盆栽摆件与盆栽明信片。大宫盆栽村的"微缩绿意"。' },
  { id: 'saitama_kasukabe2', name: '小新主题咖啡', icon: '☕', tag: '玩', type: '体验', price: 50, desc: '春日部小新咖啡店，餐点全是角色造型。动感超人拉面，"童年照进现实"。' },
  { id: 'saitama_densha2', name: '新干线驾驶模拟', icon: '🚄', tag: '玩', type: '体验', price: 60, desc: '铁道博物馆驾驶E7系模拟器。从大宫开到长冈，"当一天司机"。' },
  { id: 'saitama_kawagoe2', name: '川越和服漫步', icon: '👘', tag: '玩', type: '体验', price: 120, desc: '穿和服逛藏造老街与时间之钟。",小江户"的江户风写真。' },
  { id: 'saitama_river', name: '长瀞漂流', icon: '🚣', tag: '玩', type: '体验', price: 150, desc: '岩畳段平缓漂流，夏天地狱谷激流段。船夫撑篙讲川柳，"秩父的水上时光"。' },
  { id: 'saitama_minsu', name: '秩父温泉民宿', icon: '🏨', tag: '住', type: '住宿', price: 250, desc: '秩父山间温泉民宿，夜听溪流。清晨芝樱或红叶就在窗外。' },
  /* ---- 埼玉味道（扩容） ---- */
  { id: 'stag_chichibu_tonmiso', name: '秩父·豚味噌丼', icon: '🍱', tag: '食', type: '美食', price: 40, desc: '甜咸的味噌酱裹住厚切猪肉，盖在热饭上就是秩父的招牌“豚味噌丼”。夜祭归来的冬夜，来一碗最是暖胃。' },
  { id: 'stag_nagatoro_ayu', name: '长瀞·盐烤香鱼', icon: '🐟', tag: '食', type: '美食', price: 45, desc: '荒川清流养大的香鱼，夏天串起盐烤，外皮焦脆、鱼肉细嫩带清香。溪谷边吹着凉风趁热吃，最是应季。' },
  { id: 'stag_kawagoe_imoi', name: '川越·芋恋和果子', icon: '🍡', tag: '食', type: '特产', price: 30, desc: '菓子屋横丁的人气点心“芋恋”，红薯蒸糕里裹着甜甜的红豆馅。趁温热咬一口，软糯香绵，是川越的秋日味道。' },
  { id: 'stag_chichibu_whisky', name: '秩父·威士忌', icon: '🥃', tag: '食', type: '饮品', price: 200, desc: '秩父蒸馏所的小批量威士忌近年横扫国际烈酒大奖，单桶原酒一瓶难求。山间小城的水源与匠心，酿出了日本威士忌的新传说。' },
  { id: 'stag_gyoda_jellyfry', name: '行田·ゼリーフライ', icon: '🍘', tag: '食', type: '美食', price: 15, desc: '名字听起来像果冻，其实是行田的炸土豆蔬菜饼。现炸出锅浇上酱汁，外脆里绵，是当地人从小吃到大的平民味。' },
  /* ---- 手艺与文创（扩容） ---- */
  { id: 'stag_kawagoe_tousan', name: '川越·唐桟织物', icon: '🧵', tag: '衣', type: '服饰', price: 300, desc: '川越唐桟是江户时代便出名的条纹棉布，蓝染细格清爽耐看。老铺至今用手织机慢工细活，做成布巾与提袋最有“小江户”味道。' },
  { id: 'stag_iwatsuki_doll', name: '岩槻·雏人形摆件', icon: '🎎', tag: '衣', type: '文创', price: 250, desc: '岩槻职人亲手裱糊的雏人形，衣裳纹样一笔一画都讲究。挑一对迷你雏人形或五月人形，把“人形之町”的手艺带回家。' },
  { id: 'stag_kawagoe_aitai', name: '川越冰川神社·钓鲷签', icon: '🎣', tag: '玩', type: '文创', price: 20, desc: '川越冰川神社的名物是“钓鲷鱼”，用竹竿从池中钓起红白小鲷，签文就藏在鱼肚里。盛夏风铃祭时，满院叮当声不断。' },
  { id: 'stag_gyoda_tabi', name: '行田·手缝足袋', icon: '🧦', tag: '衣', type: '服饰', price: 120, desc: '行田曾是日本足袋产量第一的产地，分趾布袜讲究到脚趾处都立体服帖。挑一双手缝足袋，袜底常绣着行田的乡土小花。' },
  /* ---- 行玩体验与山野住宿（扩容） ---- */
  { id: 'stag_rankuru_sl', name: '秩父铁道·SL帕雷奥号', icon: '🚂', tag: '行', type: '体验', price: 80, desc: '红色蒸汽机车“帕雷奥号”拖着复古车厢，慢悠悠穿过秩父山间。汽笛长鸣、白烟飘散，大人小孩都忍不住探出车窗。' },
  { id: 'stag_kawagoe_rickshaw', name: '川越·人力车巡游', icon: '🛺', tag: '行', type: '体验', price: 60, desc: '车夫拉着人力车穿过藏造老街与神社，边跑边讲川越典故，遇到心仪小店随时可停。坐上它，像搭了一趟江户风的“专车”。' },
  { id: 'stag_omiya_bonsai', name: '大宫·盆栽手作体验', icon: '🪴', tag: '玩', type: '体验', price: 120, desc: '在大宫盆栽村跟职人学修枝、换盆与缠线，亲手完成一盆迷你盆栽。带走作品的同时，也带走了“一棵树三代养”的耐心。' },
  { id: 'stag_kitain_shakyo', name: '川越喜多院·写经体验', icon: '🖋️', tag: '玩', type: '体验', price: 40, desc: '于喜多院静谧的客殿端坐，临一页《般若心经》。墨香伴着钟声，把旅行的心慢慢放平，抄完还可奉纳祈福。' },
  { id: 'stag_mitsumine_shukubo', name: '三峰神社·宿坊一夜', icon: '🛏️', tag: '住', type: '住宿', price: 400, desc: '留宿三峰神社山门的宿坊，晚餐是朴素的山蔬料理，夜里风声穿过古杉。清晨随早祷醒来，身心都被山气洗过一遍。' }
);
