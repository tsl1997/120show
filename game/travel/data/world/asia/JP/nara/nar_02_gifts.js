/* 奈良 分册02：特色周边（古都吃食/南都工艺/鹿与人气体验/古都名宿） */
window.NAR_GIFTS = window.NAR_GIFTS || [];
window.NAR_GIFTS.push(
  /* ---- 古都吃食（沿用原条目） ---- */
  { id: 'nara_kakinoha', name: '柿叶寿司', icon: '🍣', tag: '食', type: '美食', price: 50, desc: '柿叶包裹的鲭鱼押寿司，"古都的保存食"。柿叶抗菌防腐，一口一个咸鲜。' },
  { id: 'nara_toka', name: '奈良漬', icon: '🥒', tag: '食', type: '特产', price: 40, desc: '酒糟腌制的白瓜咸甜带酒香。配茶泡饭，"千年古都的味道"。' },
  { id: 'nara_senbei', name: '鹿仙贝', icon: '🦌', tag: '食', type: '美食', price: 3, desc: '喂鹿专用米糠麦麸饼，鹿群"鞠躬讨食"。买一包体验"被鹿包围"的快乐。' },
  { id: 'nara_chagayu', name: '茶粥套餐', icon: '🍵', tag: '食', type: '美食', price: 45, desc: '焙茶煮粥配奈良渍与胡麻豆腐。古都的"茶饭"传统，清淡养生。' },
  /* ---- 南都工艺（沿用原条目） ---- */
  { id: 'nara_sumi', name: '奈良墨', icon: '🖋️', tag: '衣', type: '文创', price: 100, desc: '奈良墨占日本产墨九成，"南都油烟墨"。文房爱好者必收，磨墨时墨香清幽。' },
  { id: 'nara_itto', name: '一刀雕鹿偶', icon: '🦌', tag: '衣', type: '文创', price: 80, desc: '一刀雕的小鹿木偶憨态可掬。奈良传统工艺，"带一只木鹿回家"。' },
  { id: 'nara_deer_wenxue', name: '鹿文创全家桶', icon: '🦌', tag: '衣', type: '文创', price: 40, desc: '小鹿饼干、鹿角发夹、鹿蹄印冰箱贴。奈良的"鹿经济"文创，萌力十足。' },
  { id: 'nara_sabi', name: '赤肤烧陶器', icon: '🏺', tag: '衣', type: '文创', price: 150, desc: '奈良传统茶陶"赤肤烧"，红褐色调古朴。茶道具收藏级。' },
  /* ---- 鹿与人气体验（沿用原条目） ---- */
  { id: 'nara_deer_feeding', name: '鹿仙贝投喂体验', icon: '🫓', tag: '玩', type: '体验', price: 3, desc: '举起仙贝鹿群围拢，"鹿的鞠躬"是讨食绝技。拍照时护好纸袋——鹿会吃纸。' },
  { id: 'nara_yuzuruha', name: '若草山夜景', icon: '🌄', tag: '玩', type: '体验', price: 30, desc: '若草山烧山祭（1月）火光染红夜空。平日登顶俯瞰奈良盆地，鹿群散落在草坡。' },
  { id: 'nara_kimono', name: '古都和服漫步', icon: '👘', tag: '玩', type: '体验', price: 250, desc: '穿和服在鹿群与古寺间漫步。奈良的"鹿与和服"同框，经典构图。' },
  { id: 'nara_minsu', name: '町屋民宿', icon: '🏨', tag: '住', type: '住宿', price: 300, desc: '奈良町老町屋民宿，庭院里有石佛。夜里安静，鹿鸣偶尔传来。' },
  /* ---- 新增：食与饮 ---- */
  { id: 'narg_yoshino_kuzu', name: '吉野葛·葛菓子', icon: '🍡', tag: '食', type: '特产', price: 45, desc: '用吉野山冬天挖的葛根提炼本葛，做成葛切与葛馒头。琥珀色的葛饼淋上黑蜜，入口清凉，是夏天的古都风物。' },
  { id: 'narg_somen', name: '三轮素面', icon: '🍜', tag: '食', type: '美食', price: 35, desc: '奈良发祥的手延素面，细如银丝却弹牙。冷面配一碟大和酱菜，筷子绕起一缕，呲溜一声就是夏天的声音。' },
  { id: 'narg_sake', name: '奈良地酒·菩提酛', icon: '🍶', tag: '食', type: '饮品', price: 80, desc: '奈良是日本酒的发祥地，菩提酛用生米酿出圆润的旨味。常温小酌配奈良渍，古都的夜因此变得绵长。' },
  { id: 'narg_yamatotcha', name: '大和茶·茶粥茶', icon: '🍵', tag: '食', type: '饮品', price: 25, desc: '大和平原的茶园在晨雾里采下新芽，焙成煎茶与茶粥用的茶叶。拿本地好水冲开，茶香里能尝到盆地清晨的露水。' },
  { id: 'narg_daibutsu_pudding', name: '大佛布丁', icon: '🍮', tag: '食', type: '美食', price: 15, desc: '玻璃罐盖上印着大佛的圆脸，口味从大和茶到卡仕达有好几种。挖一口嫩滑布丁，是逛完东大寺的甜味句号。' },
  { id: 'narg_shojin', name: '精进料理一席', icon: '🍱', tag: '食', type: '美食', price: 180, desc: '奈良古寺的一席精进料理，芝麻豆腐、当季野菜与豆皮层层叠叠。吃的是禅寺千年的俭约，舌尖却意外地丰盛。' },
  /* ---- 新增：工艺与手信 ---- */
  { id: 'narg_sarashi', name: '奈良晒布·手巾', icon: '🧵', tag: '衣', type: '服饰', price: 120, desc: '麻布经日光漂白的“奈良晒”，是飞鸟时代的上贡名产。做成手巾吸汗不粘身，古寺里的清凉就藏在经纬之间。' },
  { id: 'narg_yoshinosugi', name: '吉野杉木器', icon: '🪵', tag: '衣', type: '文创', price: 60, desc: '吉野杉纹路直而细腻，削成托盘、杯垫与便当盒。木头自带清香，盛饭盛茶久了会养出温润的琥珀色。' },
  { id: 'narg_shosoin_zuroku', name: '正仓院展图录', icon: '📚', tag: '闻', type: '文创', price: 120, desc: '每年秋的正仓院展目录厚得像本辞书，唐代琵琶与玻璃碗一页页摊开。带回家随时翻看，等于把千年宝库搬进书房。' },
  /* ---- 新增：行与游 ---- */
  { id: 'narg_bus', name: '奈良巴士一日券', icon: '🚌', tag: '行', type: '体验', price: 60, desc: '一张票就能搭上环绕古都的巴士，鹿群与寺社一站接一站。想随时跳下车喂鹿或喝杯茶，这张券最自由。' },
  { id: 'narg_jinrikisha', name: '奈良公园人力车', icon: '🛺', tag: '游', type: '体验', price: 150, desc: '车夫拉着你在奈良公园的林荫道小跑，鹿群让路、五重塔的影子掠过。想看古都又不想走路，这趟巡游正合适。' },
  /* ---- 新增：季节限定体验与名宿 ---- */
  { id: 'narg_toukae', name: '奈良灯花会夜游', icon: '🏮', tag: '玩', type: '体验', price: 0, desc: '每年八月入夜，奈良公园与东大寺前点亮两万盏烛火。烛光摇进池水与鹿影之间，夏夜的蝉声都安静了下来。' },
  { id: 'narg_yamayaki', name: '若草山烧山观览', icon: '🔥', tag: '玩', type: '体验', price: 40, desc: '每年一月的夜晚，若草山三面山坡同时点火，火线蜿蜒成金色的弧光。看完这场火烧山，古都的一年才算真正开始。' },
  { id: 'narg_goshuin', name: '南都寺社御朱印帐', icon: '📖', tag: '玩', type: '体验', price: 80, desc: '东大寺、兴福寺到唐招提寺各有专属御朱印，毛笔朱印一页页积累。集满一本，等于把南都佛教走了一圈。' },
  { id: 'narg_narahotel', name: '奈良酒店名宿', icon: '🏨', tag: '住', type: '住宿', price: 400, desc: '明治末年的木造本馆是登录文化财，爱因斯坦访日时曾在此下榻。旧楼梯咯吱作响，时间在这里走得比大佛还慢。' }
);
