/* 丽江 分册02：特色周边（纳西美食/高原好物/文创手作） */
window.LJ_GIFTS = window.LJ_GIFTS || [];
window.LJ_GIFTS.push(
  /* ---- 原档保留 ---- */
  { id: 'lijiang_paigutang', name: '腊排骨火锅', icon: '🍖', tag: '食', type: '美食', price: 98, desc: '象山市场腊排骨炖一锅，咸香入骨。配薄荷叶与蘸水，"丽江的冬日标配"。' },
  { id: 'lijiang_jidou', name: '鸡豆凉粉', icon: '🍮', tag: '食', type: '美食', price: 10, desc: '丽江独有的鸡豆做凉粉，冷热两吃。撒花生碎酸醋，纳西奶奶的手艺。' },
  { id: 'lijiang_naxi', name: '纳西烤鱼·烤肉', icon: '🐟', tag: '食', type: '美食', price: 60, desc: '炭火烤鱼配薄荷与蘸水，纳西风味。腊排骨之外的第二选择，"雪山下的烟火"。' },
  { id: 'lijiang_xiancao', name: '鲜花饼·青梅酒', icon: '🌸', tag: '食', type: '特产', price: 40, desc: '玫瑰花酱馅饼"咬一口春天"。青梅酒微醺，"雪山脚下的小酒馆"。' },
  { id: 'lijiang_dongba', name: '东巴文字文创', icon: '📜', tag: '衣', type: '文创', price: 45, desc: '东巴象形文字写下你的名字。世界唯一活着的象形文字，"纳西族的智慧"。' },
  { id: 'lijiang_zharan', name: '扎染围巾', icon: '🧣', tag: '衣', type: '服饰', price: 60, desc: '白沙古镇手工扎染，蓝白花纹独一无二。披上拍照"最上镜的丽江色"。' },
  { id: 'lijiang_yinshi2', name: '雪花银手镯', icon: '💍', tag: '衣', type: '服饰', price: 200, desc: '纳西银匠手工錾花，"雪花银"成色好。古城银器店认准手工錾刻。' },
  { id: 'lijiang_guqin', name: '手鼓体验课', icon: '🪘', tag: '玩', type: '体验', price: 80, desc: '非洲鼓店门口学一段"丽江节奏"。老板娘边打边唱，"会打鼓才算来过丽江"。' },
  { id: 'lijiang_guzhen', name: '酒吧街微醺夜', icon: '🍻', tag: '玩', type: '体验', price: 120, desc: '新华街酒吧一条街，民谣声漫过水渠。"艳遇之都"的夜晚，微醺刚刚好。' },
  { id: 'lijiang_machang', name: '茶马古道骑马', icon: '🐎', tag: '玩', type: '体验', price: 180, desc: '拉市海湿地骑马走茶马古道一段。马帮铃声里，"重回南丝路"。' },
  { id: 'lijiang_xuexue', name: '雪山冰川公园索道', icon: '🚡', tag: '行', type: '体验', price: 140, desc: '大索道直上海拔4506米冰川公园。租羽绒服吸氧瓶，"触手可及的冰川"。' },
  { id: 'lijiang_minu', name: '雪山观景民宿', icon: '🏨', tag: '住', type: '住宿', price: 400, desc: '古城天台民宿，躺床上看玉龙雪山。清晨阳光染白雪峰，"被雪山叫醒"。' },
  /* ---- 纳西风味（新增） ---- */
  { id: 'ljg_lijiangbaba', name: '丽江粑粑', icon: '🥞', tag: '食', type: '美食', price: 8, desc: '面粉层层擀开，夹进火腿猪油，先烙后烤得外脆里酥。趁热咬一口直掉渣，纳西人出远门都要揣上两块当干粮。' },
  { id: 'ljg_tujimixian', name: '丽江土鸡米线', icon: '🍜', tag: '食', type: '美食', price: 18, desc: '本地土鸡熬出一锅金黄清汤，米线上卧着鸡肉，再撒一把韭菜末。汤鲜得能一直喝到底，丽江人的清晨就从这碗热汤开始。' },
  { id: 'ljg_miliang', name: '米灌肠', icon: '🥓', tag: '食', type: '美食', price: 22, desc: '猪血拌糯米灌进肠衣蒸熟，切片煎到两面焦黄。外脆里糯带着肉香，蘸上辣椒面吃，是纳西人家过年才舍得端上桌的硬货。' },
  { id: 'ljg_maoniu', name: '纳西火塘牦牛火锅', icon: '🍲', tag: '食', type: '美食', price: 88, desc: '铜锅架在炭火塘上，牦牛肉片涮进滚烫骨汤。蘸水里加糊辣椒和腐乳，围炉边煮边聊，雪山下的冷夜就这么烫过去了。' },
  { id: 'ljg_sanniyu', name: '雪山三文鱼一鱼三吃', icon: '🐟', tag: '食', type: '美食', price: 98, desc: '玉水寨雪水里养大的虹鳟，一尾做成三道：鱼片薄切蘸芥末，鱼皮炸得酥脆，鱼头鱼骨滚一锅鲜汤。雪水养出的清甜。' },
  { id: 'ljg_sandieshui', name: '纳西三叠水宴', icon: '🥘', tag: '食', type: '美食', price: 128, desc: '纳西人待客的最高礼遇，菜分三轮上桌：先蜜饯点心，再主菜，后汤羹。吃到末了主人再敬三杯苏理玛酒，宾主尽欢。' },
  { id: 'ljg_suyoucha', name: '酥油茶', icon: '🍵', tag: '食', type: '饮品', price: 12, desc: '砖茶与酥油在木桶里搅打出咸香，趁热喝一大口，满嘴都是高原的暖。雪山脚下走冷了，本地人最认的就是这一碗。' },
  { id: 'ljg_sulima', name: '苏理玛酒', icon: '🍶', tag: '食', type: '饮品', price: 45, desc: '纳西人家用青稞麦子土法酿的甜米酒，琥珀色，入口绵甜。古歌里唱着“苏理玛敬给心上人”，微醺间都是高原的暖意。' },
  { id: 'ljg_junzi', name: '野生菌干货礼盒', icon: '🍄', tag: '食', type: '特产', price: 128, desc: '雨季进山捡回的松茸鸡枞牛肝菌，切片晒干装进竹篮。回家炖一只鸡，满屋都是云南森林的香气，把丽江的夏天存进家里。' },
  { id: 'ljg_xuetao', name: '拉市海雪桃', icon: '🍑', tag: '食', type: '特产', price: 30, desc: '秋天才熟的雪桃挂满高原枝头，个头大得一只手握不住。咬一口脆甜多汁，果园连着雪山，蜜意像是从雪水里长出来的。' },
  /* ---- 手工与文创（新增） ---- */
  { id: 'ljg_pijian', name: '纳西彩条披肩', icon: '🧣', tag: '衣', type: '服饰', price: 55, desc: '羊毛织成的宽披肩，红绿彩条坠着流苏。披着它在古城石板路上走一圈，既保暖又上镜，几乎每位游客都会捎一条回家。' },
  { id: 'ljg_mudiao', name: '东巴木雕摆件', icon: '🪵', tag: '玩', type: '文创', price: 88, desc: '一块木头上刻着东巴象形文字与雪山民居，线条拙朴还带着刀痕。摆上客厅的柜子，丽江的雪山与纳西故事就住进家里了。' },
  { id: 'ljg_dongbazhi', name: '东巴纸手账', icon: '📒', tag: '玩', type: '文创', price: 35, desc: '用荛花树皮手工抄造的东巴纸，厚实耐存，纸面有天然纤维纹理。订成手账本，扉页还能请师傅写上你的东巴文名字。' },
  { id: 'ljg_fengling', name: '东巴许愿风铃', icon: '🎐', tag: '玩', type: '文创', price: 25, desc: '小木牌上写着东巴文的祝福，下坠一枚铜铃。挂在屋檐下，风一过就叮当作响——这是古城里最常见的“会说话的心愿”。' },
  /* ---- 歇脚与宿（新增） ---- */
  { id: 'ljg_shuheyuan', name: '束河庭院民宿', icon: '🏡', tag: '住', type: '住宿', price: 260, desc: '束河古镇里的一座纳西小院，天井种满花草，二楼推窗望得见雪山。白天晒太阳逗猫，晚上听着渠水声入睡，慢得让人不想走。' }
);
