/* 纽约 分册01：景点圣地（自由女神/时代广场/中央公园/大都会/帝国大厦/百老汇/高线公园） */
window.NY_SPOTS = window.NY_SPOTS || [];
window.NY_SPOTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'newyork_statue', name: '自由女神像', icon: '🗽', price: 150, desc: '渡轮驶向自由岛，铜像举火炬迎了一百多年风浪。登基座远眺曼哈顿天际线，"移民的灯塔"名不虚传。' },
  { id: 'newyork_times_square', name: '时代广场', icon: '🎆', price: 0, desc: '"世界的十字路口"，巨幅广告屏亮到没有夜晚。跨年夜百万人挤在这里等水晶球落下，平时也是人浪如潮。' },
  { id: 'newyork_central_park', name: '中央公园', icon: '🌳', price: 0, desc: '341公顷的城市绿肺，松鼠在草坪上跳来跳去。划船湖、草莓园、绵羊草坪，四季都有电影取景机位。' },
  { id: 'newyork_met', name: '大都会艺术博物馆', icon: '🏛️', price: 160, desc: '两百万件藏品走不完：埃及神庙整座搬进来。屋顶花园看中央公园全景，"一天看遍五千年"。' },
  { id: 'newyork_empire', name: '帝国大厦', icon: '🏢', price: 200, desc: '1931年的钢铁传奇，86层观景台看纽约层层铺开。夜里塔身变色灯光，"金刚爬过的楼"依然坚挺。' },
  { id: 'newyork_broadway', name: '百老汇', icon: '🎭', price: 320, desc: '《狮子王》《汉密尔顿》连演几十年。当天抽"Lottery折扣票"，前排座位几十美元就能拿下。' },
  { id: 'newyork_highline', name: '高线公园', icon: '🚂', price: 0, desc: '废弃高架铁路改成空中花园，穿过旧仓库与公寓。走到尽头是哈德逊广场的"大松果"雕塑，新旧纽约一线牵。' },
  /* ---- 纽约博物馆群 ---- */
  { id: 'nyp_9_11', name: '9/11 纪念馆与博物馆', icon: '🕊️', price: 260, desc: '双子塔原址的两个下沉水池瀑布。"记住·不要忘记"。博物馆收着钢梁与遗物，"伤疤上的反思"。' },
  { id: 'nyp_guggenheim', name: '古根海姆·Whitney 美术馆', icon: '🖼️', price: 220, desc: '赖特设计的螺旋形古根海姆，绕一圈看完一遍。Whitney 偏当代艺术，High Line 步行可达。' },
  { id: 'nyp_moma_ps1', name: 'MoMA 与 PS1 当代', icon: '🎨', price: 200, desc: 'MoMA 藏梵高《星月夜》与毕加索。 PS1 在皇后区，"纽约当代艺术双星"。' },
  { id: 'nyp_natural', name: '美国自然历史博物馆', icon: '🦕', price: 150, desc: '泰坦巨龙与陨石展厅。"博物馆奇妙夜"取景地，恐龙化石让孩子尖叫。' },
  /* ---- 街区与社区 ---- */
  { id: 'nyp_williamsburg', name: '布鲁克林·威廉斯堡', icon: '🏘️', price: 0, desc: '曼哈顿隔河相望的"独立王国"。Bedford Ave 街头艺术与精酿，"纽约最酷的邮编"。' },
  { id: 'nyp_chinatown', name: '纽约唐人街与小意大利', icon: '🏮', price: 0, desc: '曼哈顿下城两个社区仅一街之隔。法拉盛是"纽约第二唐人街"，"两条街两世界"。' },
  { id: 'nyp_harlem', name: '哈林·阿波罗剧院', icon: '🎤', price: 100, desc: '阿波罗剧院"业余之夜"发现迈克尔·杰克逊。Harlem Renaissance 的中心，"黑人的精神首都"。' },
  { id: 'nyp_soho', name: 'SoHo 铸铁街区', icon: '🏬', price: 0, desc: '19世纪铸铁建筑群，纽约最有气质的购物街。Street Artist 与画廊，"时尚与艺术"双线。' },
  /* ---- 自由与文化 ---- */
  { id: 'nyp_wall', name: '华尔街·911 博物馆', icon: '💰', price: 30, desc: '纽约证券交易所与铜牛，摸摸牛角招财。Fearless Girl 女孩雕像对抗铜牛，"华尔街的女权"。' },
  { id: 'nyp_grand', name: '中央车站', icon: '🚉', price: 0, desc: '1913年的"交通圣殿"，穹顶星空图逆向。飞鸟与猎户星座的天花板，"纽约的地下天"。' },
  /* ---- 现代与远眺 ---- */
  { id: 'nyp_one', name: 'One World Observatory', icon: '🌆', price: 280, desc: '原址新建的 1 号世贸，102 层观景台。三面落地玻璃窗，"自由塔的复仇"。' },
  { id: 'nyp_brooklyn_br', name: '布鲁克林大桥', icon: '🌉', price: 0, desc: '1883年建的第一座钢丝悬索桥。步行过桥 30 分钟看曼哈顿天际线，"纽约最美的步道"。' },
  { id: 'nyp_edge', name: 'The Edge 哈德逊观景', icon: '🪟', price: 220, desc: '西半球最高的户外空中观景台。玻璃地板悬在 335 米高空，"腿软观景的升级版"。' },
  /* ---- 周边与远郊 ---- */
  { id: 'nyp_woodbury', name: 'Woodbury 奥特莱斯一日', icon: '🛍️', price: 100, desc: '一小时车程到 220 店 Outlet 大卖场。"纽约客的购物圣地"，血拼到腿软。' },
  { id: 'nyp_hudson', name: '哈德逊河谷一日', icon: '🍂', price: 200, desc: '火车一小时看西点军校与 Storm King 雕塑园。秋天红叶与河谷，"纽约的郊区清肺"。' },
  { id: 'nyp_west_point', name: '西点军校参观', icon: '🎓', price: 150, desc: '美国陆军军官学校。"责任·荣誉·国家"。游客能看校园与教堂，"美国军事的摇篮"。' }
);
