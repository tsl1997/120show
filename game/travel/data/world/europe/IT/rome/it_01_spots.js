/* 罗马 分册01：景点圣地（古罗马遗址/梵蒂冈/万神殿/喷泉广场/特拉斯提弗列） */
window.IT_SPOTS = window.IT_SPOTS || [];
window.IT_SPOTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'rome_colosseum', name: '罗马斗兽场', icon: '🏟️', price: 90, desc: '公元80年建成的五万人竞技场，地下机关还能看到。站在看台上想象角斗士入场，石缝里的猫都自带历史感。' },
  { id: 'rome_foro', name: '古罗马广场·帕拉蒂尼山', icon: '🏛️', price: 80, desc: '凯撒演讲的废墟、神庙的石柱与凯旋门。行走其间像翻一册断代的帝国相册，随手一指都是两千年。' },
  { id: 'rome_fontana', name: '特雷维喷泉', icon: '⛲', price: 0, desc: '巴洛克许愿池，背对池水抛一枚硬币"还会再来"。人山人海的十八世纪"露天剧场"，夜景灯光比白天更惊艳。' },
  { id: 'rome_vaticano', name: '梵蒂冈·圣彼得大教堂', icon: '⛪', price: 90, desc: '世界最大的教堂，米开朗基罗的《圣殇》在侧。登顶551级台阶俯瞰"钥匙孔广场"，梵蒂冈博物馆里西斯廷穹顶仰断脖子。' },
  { id: 'rome_pantheon', name: '万神殿', icon: '🏛️', price: 15, desc: '两千年前的混凝土穹顶至今无钢筋，中央圆孔洒下"神光"。拉斐尔长眠于此，雨天光柱里的雨丝像香水喷雾。' },
  { id: 'rome_trastevere', name: '特拉斯提弗列', icon: '🍷', price: 0, desc: '罗马人的老城生活区，鹅卵石巷子飘着意面香。日落时分爬上雅尼库伦山，全城屋顶镀上金色。' },
  { id: 'rome_spagna', name: '西班牙广场·孔多蒂街', icon: '🪜', price: 0, desc: '《罗马假日》赫本吃冰淇淋的台阶。坐在阶梯上吃Gelato虽被禁止，但买一支到巷子里吃才是"正确姿势"。' },
  /* ---- 梵蒂冈周边 ---- */
  { id: 'itp_vatican_museum', name: '梵蒂冈博物馆·西斯廷礼拜堂', icon: '🏛️', price: 100, desc: '六公里长的展线，从古埃及木乃伊到拉斐尔房间。米开朗基罗《最后的审判》在西斯廷穹顶，"脖子会酸到忘记自己"。' },
  { id: 'itp_castel', name: '圣天使堡', icon: '🏰', price: 60, desc: '哈德良陵墓改的教皇堡垒，顶上青铜天使。梵蒂冈逃命的密道直通城堡，"罗马版的秘密通道"。' },
  /* ---- 古罗马其他遗址 ---- */
  { id: 'itp_palatine', name: '帕拉蒂尼山', icon: '🌳', price: 0, desc: '罗马七座山丘中最中心的一座，凯撒与奥古斯都的宫殿遗址。橘子园与废墟交织，"Palatine"成了英语"宫殿"的词源。' },
  { id: 'itp_bocca', name: '真言之口', icon: '👄', price: 5, desc: '科斯梅丁圣母堂门廊的石雕面具，传说说谎手伸进去会被咬。游客排长队拍电影同款pose，"罗马的测谎仪"。' },
  { id: 'itp_circus', name: '马克西穆斯竞技场遗址', icon: '🏟️', price: 0, desc: '古罗马最大的赛车场遗址，能容 25 万人。如今是一片绿草与孤柱，"赛车文化的鼻祖"。' },
  { id: 'itp_appian', name: '亚壁古道·阿皮亚古道公园', icon: '🛤️', price: 0, desc: '罗马第一条大道，公元前 312 年修筑。路边古墓与基督教地下墓穴，"条条大路通罗马"的原型。' },
  { id: 'itp_catacombs', name: '圣卡利斯托地下墓穴', icon: '⛪', price: 50, desc: '公元二世纪起的基督教徒地下墓穴网络。早期教皇与殉道者的安息地，"罗马的地下梵蒂冈"。' },
  /* ---- 喷泉与广场 ---- */
  { id: 'itp_navona', name: '纳沃纳广场', icon: '⛲', price: 0, desc: '贝尼尼的四河喷泉与教堂在广场上"对话"。街头画家与露天咖啡馆环绕，"罗马的露天客厅"。' },
  { id: 'itp_spagna_fountain', name: '破船喷泉', icon: '⛵', price: 0, desc: '西班牙广场脚下，半艘船被"困"在喷泉里。17世纪为低水压设计，"罗马最萌的喷泉"。' },
  { id: 'itp_quattro', name: '四喷泉街·共和广场', icon: '⛲', price: 0, desc: '奎里纳莱山四条街交叉口各有神像喷泉。共和广场的纳亚德喷泉是少女"半裸出水"原型。' },
  /* ---- 教堂与艺术 ---- */
  { id: 'itp_borghese', name: '博尔盖塞美术馆', icon: '🖼️', price: 80, desc: '贝尼尼的《大卫》《阿波罗与达芙妮》雕塑。藏品在红衣主教旧别墅，必须提前预约，"罗马的卢浮宫"。' },
  { id: 'itp_capitol', name: '卡比托利欧博物馆', icon: '🏛️', price: 70, desc: '米开朗基罗设计的广场，罗马市政府所在地。馆内青铜《母狼》与马可·奥勒留骑马像，"罗马的诞生地"。' },
  { id: 'itp_basilica', name: '圣母大殿·拉特兰圣约翰大教堂', icon: '⛪', price: 0, desc: '天主教四座特级宗座圣殿之首（梵蒂冈外）。金色祭坛与圣人遗骨，"罗马的母堂"。' },
  { id: 'itp_san_clemente', name: '圣克莱门特教堂', icon: '⛪', price: 50, desc: '地下叠着三层建筑：公元一世纪异教神庙、基督教礼拜堂、十二世纪教堂。一座"时间剖面"，最深处还能看见公元一世纪。' },
  /* ---- 现代罗马 ---- */
  { id: 'itp_trastevere_night', name: '特拉斯提弗列夜街', icon: '🌃', price: 0, desc: '罗马的"夜猫子街区"，夜晚巷子灯火通明。从 Piazza Trilussa 一直走到 Viale di Trastevere 都不够。' },
  { id: 'itp_testaccio', name: '特斯塔乔市场·外籍社区', icon: '🛍️', price: 0, desc: '旧工人区的食品市场，Mondeggi 农场直供。本地人买菜，"罗马的菜市场宇宙"。' },
  { id: 'itp_eataly', name: 'Eataly 罗马·吃遍意大利', icon: '🍝', price: 0, desc: '罗马火车站旁的意大利美食百货，从南到北的菜一站吃齐。意面、奶酪、葡萄酒超市加餐厅合一。' },
  { id: 'itp_janiculum', name: '雅尼库伦山观景台', icon: '🌄', price: 0, desc: '罗马第二高的山丘，看全城天际线。每天正午加农炮一声轰响，"罗马的正午钟声"。' },
  /* ---- 出城与一日游 ---- */
  { id: 'itp_tivoli', name: '蒂沃利·千泉宫', icon: '⛲', price: 90, desc: '罗马城郊的哈德良别墅与千泉宫。文艺复兴的水法与花园，"罗马人的夏宫"。' },
  { id: 'itp_ostia', name: '奥斯蒂亚古城', icon: '🏛️', price: 50, desc: '古罗马的港口城市遗址，比庞贝保存更完整。地铁直达，"罗马的庞贝"。' },
  { id: 'itp_castelli', name: 'Castelli 酒乡', icon: '🍷', price: 120, desc: '罗马东南的 Frascati、Castel Gandolfo 酒乡。教皇夏宫 + 百年酒庄一日游，"罗马的后花园"。' }
);
