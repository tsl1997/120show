/* 日本·福冈 分册01：景点圣地（屋台拉面/太宰府/博多海湾/九州巡礼） */
window.FUK_SPOTS = window.FUK_SPOTS || [];
window.FUK_SPOTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'fukuoka_yatai', name: '中洲屋台街', icon: '🏮', price: 60, desc: '福冈有全国最多的路边摊，傍晚推车出摊。坐在帘子边喝一杯，"拉面爷爷"的深夜温柔。' },
  { id: 'fukuoka_dazaifu', name: '太宰府天满宫', icon: '⛩️', price: 0, desc: '学问之神菅原道真的总本社，考生必拜。梅枝饼与飞梅传说，表参道 shops 飘着甜香。' },
  { id: 'fukuoka_ohori', name: '大濠公园·福冈城迹', icon: '⛲', price: 0, desc: '仿西湖而建的水池公园，划船慢悠悠。福冈城"舞鹤城"石垣，樱花季夜樱点灯。' },
  { id: 'fukuoka_canal', name: '博多运河城', icon: '🛍️', price: 0, desc: '"运河中的商业城"，喷泉秀每小时上演。拉面竞技场里有全国名店，"拉面的宇宙中心"。' },
  { id: 'fukuoka_yanagawa', name: '柳川游船', icon: '🛶', price: 100, desc: '"水都柳川"的川下舟游，船夫唱歌撑篙。蒸笼鳗鱼饭是柳川名物，"水乡的下午"。' },
  { id: 'fukuoka_mojiko', name: '门司港怀旧区', icon: '🚉', price: 0, desc: '大正风红砖火车站，"九州铁道纪念馆"。关门海峡对岸就是本州，蓝翼吊桥开合。' },
  { id: 'fukuoka_tower', name: '福冈塔·Fukuoka PayPay Dome', icon: '🗼', price: 40, desc: '镜面玻璃塔映着博多湾。 PayPay Dome 软银鹰主场，棒球夜一片黄。' },
  /* ---- 博多市区与祭典（新增） ---- */
  { id: 'fukp_kushida', name: '栉田神社', icon: '🏮', price: 0, desc: '博多总镇守，千年历史藏着山笠祭的起点。御神木大银杏下，博多人爱在这里求缘分与家宅平安。' },
  { id: 'fukp_yamakasa', name: '博多祇园山笠', icon: '🎎', price: 0, desc: '每年七月十五凌晨，几十人扛着山笠狂奔，像一场全城暴走。追山笠的队伍喊着号子，看一次就忘不了博多的狂野。' },
  { id: 'fukp_dontaku', name: '博多咚打祭', icon: '🎊', price: 0, desc: '黄金周的全城派对，百万人走上街头看花车巡游。咚打太鼓与彩车华服，"博多最美的春天"就在五月。' },
  { id: 'fukp_kawabata', name: '川端商店街', icon: '🏮', price: 0, desc: '有顶棚的怀旧商店街，老茶铺、布店、杂货铺挤挤挨挨。尽头连着栉田神社，逛着逛着就走进博多的旧时光。' },
  { id: 'fukp_acros', name: '阿库罗斯福冈', icon: '🌿', price: 0, desc: '台阶状屋顶种满绿植，像一座倒立的绿色金字塔。爬到顶能俯瞰天神街景，"建筑与自然共生"的教科书。' },
  { id: 'fukp_tenjin', name: '天神地下街', icon: '🛍️', price: 0, desc: '玻璃拱顶的地下街像欧洲拱廊，时装、书店、甜品铺一家接一家。雨天不淋雨就能逛遍天神，地下比地面还热闹。' },
  { id: 'fukp_hakatast', name: '博多站', icon: '🚉', price: 0, desc: '九州新干线终点，站前广场与地下街四季有活动。博多口出去就是拉面店与药妆店，车站本身就是个商圈。' },
  { id: 'fukp_maizuru', name: '舞鹤公园·福冈城迹', icon: '🏯', price: 0, desc: '福冈城石垣与护城河环抱，春天樱花把城迹染成粉色。登上天守台旧址，天神的高楼尽收眼底。' },
  { id: 'fukp_hakozaki', name: '筥崎宫', icon: '⛩️', price: 0, desc: '博多最古老的神社之一，朱红鸟居排排立。胜利与除厄的信仰，战国武将也来祈求加护。' },
  { id: 'fukp_rakan', name: '光明禅寺·红叶苔庭', icon: '🍁', price: 0, desc: '太宰府的小寺，枯山水庭园用苔藓画出星海。红叶季枫影铺满白砂，京都式禅意藏在九州深处。' },
  { id: 'fukp_kyuhaku', name: '九州国立博物馆', icon: '🏛️', price: 60, desc: '日本第四座国立博物馆，亚洲主题展品跨文化对话。建筑像海浪，与太宰府的天满宫一路之隔。' },
  /* ---- 博多海湾与海岛（新增） ---- */
  { id: 'fukp_momochi', name: '百道海滨公园', icon: '🏖️', price: 0, desc: '沙滩正对福冈塔，黄昏看夕阳沉进博多湾。一旁海钓台伸进海里，跑步遛狗的福冈人把这里当后花园。' },
  { id: 'fukp_nokonoshima', name: '能古岛花海', icon: '🌼', price: 40, desc: '坐船十五分钟就到能古岛，山坡上一年四季花海轮换。秋天波斯菊开满坡，能古岛是福冈人的周末后花园。' },
  { id: 'fukp_itoshima', name: '系岛·樱井二见浦', icon: '🌅', price: 0, desc: '白色鸟居立在礁石上，情侣爱来"夫妇岩"合影。夕阳把海面染成粉色，系岛是冲浪与文艺咖啡馆的聚集地。' },
  { id: 'fukp_umino', name: '海之中道海滨公园', icon: '🌺', price: 40, desc: '半岛上的大海滨公园，花田、水族馆、露营场齐全。自行车道沿海绕行，带娃家庭的九州首选。' },
  { id: 'fukp_hakata_bay', name: '博多湾夜游船', icon: '🛳️', price: 60, desc: '傍晚从博多埠头出发，海上看福冈塔与城市灯海。汽笛一响，博多的高楼在海风里慢慢亮起来。' },
  { id: 'fukp_marinoa', name: '玛丽诺亚城摩天轮', icon: '🎡', price: 20, desc: '博多湾畔的奥特莱斯与摩天轮组合，傍晚亮起彩虹灯。边购物边看落日，玛丽诺亚是海边的购物流行地。' },
  /* ---- 九州周边一日（新增） ---- */
  { id: 'fukp_nanzoin', name: '南藏院·涅槃大佛', icon: '🛕', price: 20, desc: '全日本最大的卧佛横卧山间，长四十米、重三百吨。许愿石叠成小山，太宰府附近的一处秘境。' },
  { id: 'fukp_kokura', name: '小仓城·小仓街', icon: '🏯', price: 30, desc: '北九州的古城，天守阁倒映护城河。附近旦过市场的老铺，站食炸猪排盖饭是当地人的日常。' }
);
