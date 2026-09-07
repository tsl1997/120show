/* 莫斯科 分册02：特色周边（红菜汤/饺子/伏特加/鱼子酱/套娃/航天/住宿） */
window.RU_GIFTS = window.RU_GIFTS || [];
window.RU_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'moscow_borscht', name: '红菜汤配黑面包', icon: '🍲', tag: '食', type: '美食', price: 35, desc: '甜菜根炖出紫红色浓汤，配黑面包与酸奶油。一勺下去"战斗民族"，暖从胃升到脸。' },
  { id: 'moscow_pelmeni', name: '西伯利亚饺子', icon: '🥟', tag: '食', type: '美食', price: 30, desc: '小饺子冻成一袋，煮熟蘸黄油与酸奶油。西伯利亚猎人打包口粮的智慧，如今是国民家常菜。' },
  { id: 'moscow_beef_stroganoff', name: '斯特罗加诺夫牛肉', icon: '🥩', tag: '食', type: '美食', price: 80, desc: '牛肉条配蘑菇酸奶油酱，浇在土豆泥上。贵族姓氏命名的菜，"俄式浓汤的代表"。' },
  { id: 'moscow_blini', name: '布林饼·鱼子酱', icon: '🥞', tag: '食', type: '美食', price: 90, desc: '薄煎饼卷红鱼子酱与酸奶油，"俄式可丽饼"。谢肉节连吃一周，配一杯伏特加才是全套。' },
  { id: 'moscow_vodka', name: '伏特加', icon: '🍶', tag: '食', type: '饮品', price: 40, desc: '冰镇伏特加配腌黄瓜与黑面包，"一口闷"是待客诚意。博物馆里还展示"调香伏特加"的历史。' },
  { id: 'moscow_icecream', name: '古姆冰淇淋', icon: '🍦', tag: '食', type: '美食', price: 8, desc: '红场边百年冰淇淋配方，零下二十度照样卖。战斗民族冬天吃冰淇淋的底气，来自"身体是热的"。' },
  { id: 'moscow_matryoshka', name: '套娃', icon: '🪆', tag: '衣', type: '文创', price: 80, desc: '手工彩绘椴木套娃，从五层到二十层。老奶奶画的"家族套娃"，每层脸都不一样。' },
  { id: 'moscow_ushanka', name: '乌尚卡毛皮帽', icon: '🎩', tag: '衣', type: '服饰', price: 180, desc: '护耳毛皮帽一戴，零下三十度不慌。"军大衣+毛帽"是战斗民族的冬季制服，拍照自带气场。' },
  { id: 'moscow_amber', name: '波罗的海琥珀', icon: '🟠', tag: '衣', type: '特产', price: 150, desc: '琥珀手串与"眼泪瓶"，千年树脂的光泽。加里宁格勒产的蜜蜡，灯光下像凝固的夕阳。' },
  { id: 'moscow_sputnik', name: '航天文创', icon: '🚀', tag: '衣', type: '文创', price: 50, desc: '加加林与卫星一号的徽章、T恤。航天博物馆旁的商店，"人类第一位宇航员"的纪念品全球独一份。' },
  { id: 'moscow_ice_ride', name: '红场滑冰场', icon: '⛸️', tag: '玩', type: '体验', price: 70, desc: '冬天红场变身露天冰场，洋葱顶当背景。摔倒在"世界最美冰场"，起身都自带童话滤镜。' },
  { id: 'moscow_banya', name: '俄式桑拿', icon: '🧖', tag: '玩', type: '体验', price: 90, desc: '高温蒸汽后用桦树枝"抽打"促进循环，再跳冰窟窿。"战斗民族"的解压方式，试过的人都说上头。' },
  { id: 'moscow_hotel', name: '红场景观酒店', icon: '🏨', tag: '住', type: '住宿', price: 450, desc: '窗外就是圣瓦西里九色洋葱顶。夜里教堂灯光亮起，"明信片里的房间"。' },
  /* ---- 俄式其他菜 ---- */
  { id: 'rug_pirozhki', name: 'Pirozhki 馅饼', icon: '🥟', tag: '食', type: '美食', price: 12, desc: '烤或煎的俄式小馅饼，肉馅、菜馅、果酱馅。街头一袋三四个，"苏联年代的方便食品"。' },
  { id: 'rug_shchi', name: 'Shchi 卷心菜汤', icon: '🥬', tag: '食', type: '美食', price: 25, desc: '卷心菜与牛肉慢炖，酸奶油一勺变乳白。"俄罗斯厨房的母汤"。' },
  { id: 'rug_salo', name: 'Salo 腌猪油', icon: '🥓', tag: '食', type: '美食', price: 15, desc: '乌克兰的腌猪油片，配伏特加与大蒜面包。"东欧心脏杀手"。' },
  { id: 'rug_kvass', name: 'Kvass 麦格瓦斯', icon: '🍺', tag: '食', type: '饮品', price: 8, desc: '黑面包发酵的酸甜饮料，夏天街头小桶装卖。"俄罗斯国民可乐"。' },
  { id: 'rug_medovukha', name: '蜂蜜酒（Medovukha）', icon: '🍯', tag: '食', type: '饮品', price: 25, desc: '蜂蜜发酵的低度酒，甜润不上头。俄罗斯乡间传统饮品，"斯拉夫蜜酒"。' },
  /* ---- 茶与文化 ---- */
  { id: 'rug_samovar', name: 'Samovar 茶炊', icon: '🫖', tag: '玩', type: '文创', price: 180, desc: '俄罗斯传统黄铜茶炊，中间烧炭外面煮茶。摆在家里是"茶文化的灵魂器"。' },
  { id: 'rug_pavlovo', name: '帕夫洛沃刺绣', icon: '🎨', tag: '衣', type: '文创', price: 120, desc: '俄罗斯传统白线十字绣，餐巾、桌布与围裙。"斯拉夫奶奶的手艺"。' },
  { id: 'rug_gzhel', name: '格热利陶瓷', icon: '🏺', tag: '衣', type: '文创', price: 80, desc: '莫斯科周边小镇的白蓝瓷，茶壶、盘子、木勺。"俄罗斯的青花瓷"。' },
  { id: 'rug_khokhloma', name: '霍赫洛玛彩绘', icon: '🪵', tag: '衣', type: '文创', price: 60, desc: '金底红黑木器，汤碗、勺子、木盒。"金底木器的活遗产"。' },
  /* ---- 文创与服饰 ---- */
  { id: 'rug_papakha', name: '羊毛高帽·库班帽', icon: '🎩', tag: '衣', type: '服饰', price: 120, desc: '高加索羊毛高帽，冬天配大衣是"哥萨克风"。"战斗民族的山地时尚"。' },
  { id: 'rug_palit', name: '套娃彩绘工作坊', icon: '🎨', tag: '玩', type: '体验', price: 100, desc: '在老师的指导下自己彩绘椴木套娃，从 5 件到 12 件不等。"带回家的手作艺术"。' },
  /* ---- 体验课 ---- */
  { id: 'rug_banya_full', name: '全套俄式桑拿 + 冰窟', icon: '🧖', tag: '玩', type: '体验', price: 180, desc: '传统俄罗斯 Banyas 体验，白桦树枝拍打+蒸气+冰水池跳。"战斗民族"必过的人生关。' },
  { id: 'rug_bolshoi_show', name: '大剧院芭蕾舞剧', icon: '🩰', tag: '玩', type: '体验', price: 250, desc: '《天鹅湖》《胡桃夹子》在大剧院本家演。二楼站票 30 欧，"俄罗斯芭蕾的朝圣"。' },
  /* ---- 住宿 ---- */
  { id: 'rug_metro', name: '国家大都会酒店', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '1903 年开业，革命前的奢华遗产。海明威在 1935 年下榻过，"红场旁的帝国记忆"。' },
  { id: 'rug_airbnb', name: '老城公寓民宿', icon: '🏠', tag: '住', type: '住宿', price: 250, desc: '莫斯科老城区的斯大林式公寓，挑高 3 米与水晶灯。"苏联时代的空间遗产"。' }
);
