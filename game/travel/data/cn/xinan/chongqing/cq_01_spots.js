/* 重庆 分册01：景点圣地（两江四岸/8D交通/老城记忆/世界遗产） */
window.CQ_SPOTS = window.CQ_SPOTS || [];
window.CQ_SPOTS.push(
  /* ---- 两江四岸名片（沿用原条目） ---- */
  { id: 'chongqing_hongyadong', name: '洪崖洞', icon: '🏮', price: 0, desc: '11层吊脚楼群依崖而建，夜景神似《千与千寻》。1楼和11楼都是马路，"魔幻山城"的官方名片。' },
  { id: 'chongqing_qinggui', name: '李子坝轻轨穿楼', icon: '🚇', price: 0, desc: '轨道2号线从8层居民楼中穿过，全国独一份。楼下观景平台举手机的人比乘客多，"穿楼名场面"。' },
  { id: 'chongqing_ciqikou', name: '磁器口古镇', icon: '🏮', price: 0, desc: '千年水陆码头，陈麻花排队最凶。茶馆里川剧变脸，江边有"码头文化"的记忆。' },
  { id: 'chongqing_changjiang', name: '长江索道', icon: '🚡', price: 30, desc: '"万里长江第一条空中走廊"，4分钟横渡长江。轿厢晃晃悠悠，脚下是滚滚江水与码头旧影。' },
  { id: 'cqp_jiefangbei', name: '解放碑步行街', icon: '🕴️', price: 0, desc: '抗战胜利纪功碑立在渝中母城中心，碑下是全国人气最旺的商圈。游客本地人摩肩接踵，跨年倒计时挤成一片。' },
  { id: 'cqp_chaotianmen', name: '朝天门·来福士', icon: '⛴️', price: 0, desc: '长江嘉陵江在朝天门汇流，两色江水像"鸳鸯锅"。来福士八栋楼扬帆造型，站在广场看大江东去。' },
  { id: 'cqp_qiansimen', name: '千厮门大桥·洪崖洞夜景机位', icon: '🌉', price: 0, desc: '节假日千厮门大桥直接"封桥"让游客拍照。桥上看洪崖洞金色吊脚楼倒映江面，是8D夜景的顶级视角。' },
  { id: 'cqp_danzishi', name: '弹子石老街', icon: '🏘️', price: 0, desc: '南滨路上的百年老街复建，长嘉汇观景台看两江交汇。晚上灯光一路铺到朝天门，比江对岸还热闹。' },
  { id: 'cqp_longmenhao', name: '龙门浩老街', icon: '🏛️', price: 0, desc: '重庆开埠时期的老码头，洋行别墅与石阶廊桥复原。江景咖啡店坐一下午，东水门大桥在头顶划过。' },
  /* ---- 老城记忆与魔幻民居 ---- */
  { id: 'cqp_shibati', name: '十八梯传统风貌区', icon: '🪜', price: 0, desc: '从上半城到下半城的千年石梯，曾是平民的"另一个重庆"。老街改造后，老字号与怀旧墙绘守着旧时光。' },
  { id: 'cqp_shanchengxiang', name: '山城巷', icon: '🏮', price: 0, desc: '依崖而建的老巷，金马寺小学、仁爱堂遗址藏在绿荫里。站在崖边步道看长江与轻轨同框。' },
  { id: 'cqp_baixiangju', name: '白象居', icon: '🏢', price: 0, desc: '二十多层无电梯的魔幻老楼，六部楼梯通向不同楼层。连廊上看索道从楼前掠过，摄影师的天堂。' },
  { id: 'cqp_elinyuan', name: '鹅岭公园·瞰胜楼', icon: '🌳', price: 0, desc: '渝中最高处的老公园，民国时是私家园林。登瞰胜楼两江尽收眼底，本地人看夜景的免费宝地。' },
  { id: 'chongqing_ekan', name: '鹅岭二厂·山城步道', icon: '🪜', price: 0, desc: '老印刷厂改的文创园，《从你的全世界路过》取景地。山城第三步道爬坡上坎，"重庆的立体日常"。' },
  { id: 'cqp_fotuguan', name: '佛图关公园', icon: '🌼', price: 0, desc: '"开往春天的列车"在这里出名：轻轨从佛图关站钻出，穿行在梅花与蔷薇的花海间。' },
  /* ---- 博物馆与寺院会馆 ---- */
  { id: 'cqp_sanxiabowu', name: '重庆中国三峡博物馆', icon: '🏛️', price: 0, desc: '三峡文物与巴渝历史的大本营，镇馆之宝乌杨阙是汉代石阙。顶层可望人民大礼堂的穹顶。' },
  { id: 'cqp_dalitang', name: '人民大礼堂', icon: '⛩️', price: 0, desc: '天坛式穹顶的仿古建筑，重庆的地标天际线。门前的广场上，大爷放风筝、游客拍照，本地生活气息十足。' },
  { id: 'cqp_huguang', name: '湖广会馆', icon: '🏯', price: 25, desc: '清代移民会馆群，禹王宫戏楼雕梁画栋。"湖广填四川"的记忆，都藏在这些江西湖南老宅的飞檐里。' },
  { id: 'cqp_luohansi', name: '罗汉寺', icon: '⛩️', price: 0, desc: '千年古寺夹在高楼玻璃幕墙之间，电影《疯狂的石头》在此取景。香火与都市仅一墙之隔。' },
  /* ---- 抗战红岩与涂鸦街区 ---- */
  { id: 'cqp_baigongguan', name: '渣滓洞·白公馆', icon: '🚩', price: 0, desc: '歌乐山下的两座监狱，江姐、小萝卜头的故事发生地。刑讯室与牢房原样保留，走出山门心情久久难平。' },
  { id: 'cqp_zhongshan', name: '中山四路', icon: '🏛️', price: 0, desc: '渝中最美的民国街，桂园、周公馆藏在梧桐深处。抗战时的名人府邸，如今是静谧的红色记忆大道。' },
  { id: 'cqp_chuanmei', name: '川美黄桷坪涂鸦街', icon: '🎨', price: 0, desc: '一公里长的居民楼外墙全被涂鸦覆盖，比自由行更自由的艺术。老厂房与火锅店混搭，山城最年轻的血液。' },
  /* ---- 主城周边与世界遗产 ---- */
  { id: 'chongqing_wansheng', name: '武隆天生三桥', icon: '🏞️', price: 135, desc: '世界自然遗产，三座天然石拱桥震撼。《变形金刚4》取景地，地缝天坑"大地之眼"。' },
  { id: 'chongqing_dazu', name: '大足石刻', icon: '🙏', price: 115, desc: '世界文化遗产，唐宋石刻艺术巅峰。千手观音830只手金光闪耀，"东方艺术明珠"。' },
  { id: 'cqp_xianvshan', name: '仙女山国家森林公园', icon: '🌲', price: 60, desc: '武隆的高山草原，夏天避暑冬天滑雪。牛羊在草甸上散步，被叫"东方瑞士"，雾散时真有欧洲山野味。' },
  { id: 'cqp_furongdong', name: '芙蓉洞', icon: '🕳️', price: 80, desc: '世界特级溶洞，钟乳石珊瑚状石花五彩斑斓。洞内地下河流过亿万年的雕琢，一步一景如入地宫。' },
  { id: 'cqp_jinyunshan', name: '缙云山·金刚碑', icon: '⛰️', price: 0, desc: '北碚的"川东小峨眉"，登狮子峰看嘉陵江。山脚金刚碑古镇曾是商埠，如今改造得文艺又安静。' },
  { id: 'cqp_taipingmen', name: '东水门古城墙', icon: '🧱', price: 0, desc: '明代的重庆老城门之一，城墙下就是湖广会馆。摸着青砖走下码头，还能听见老城门的江风。' },
  { id: 'cqp_jiujie', name: '九街·观音桥夜生活', icon: '🌃', price: 0, desc: '重庆夜生活新地标，酒馆音乐节与美食街连成一片。凌晨三点还在排队，"不夜城"的江湖气最浓。' },
  { id: 'cqp_beicang', name: '北仓文创街区', icon: '📦', price: 0, desc: '老粮仓改的文创园，书店咖啡馆藏在灰砖厂房里。闹市中的安静角落，适合发呆一下午。' },
  { id: 'cqp_dongshuimen_ya', name: '老君洞·南山', icon: '⛰️', price: 0, desc: '南山老君洞道观依山而建，登顶可俯瞰渝中半岛两江环抱。香火缭绕，是本地人登高祈福的去处。' },
  { id: 'cqp_wansheng_kua', name: '龙水峡地缝', icon: '🕳️', price: 80, desc: '武隆的地缝峡谷深不见底，栈道贴着石壁走。抬头一线天、低头暗河奔涌，地球的裂缝里凉意透骨。' }
);
