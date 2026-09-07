/* 深圳 分册01：景点圣地（山海/特区地标/科技之城/主题乐园）
 * 沿用旧档 7 个原景点条目（shenzhen_ 前缀）+ 新增 19 个（id: sznp_ 前缀）。 */
window.SZN_SPOTS = window.SZN_SPOTS || [];
window.SZN_SPOTS.push(
  { id: 'shenzhen_shijie', name: '世界之窗', icon: '🌍', price: 220, desc: '"一天环游世界"，埃菲尔铁塔按1:3复刻。微缩景观+文化表演，夜场烟花更浪漫。' },
  { id: 'shenzhen_huanlegu', name: '欢乐谷·锦绣中华', icon: '🎢', price: 230, desc: '欢乐谷木质过山车"雪域雄鹰"俯冲尖叫。锦绣中华微缩中华景观，"一步一城"。' },
  { id: 'shenzhen_dameisha', name: '大梅沙·较场尾', icon: '🏖️', price: 0, desc: '免费海滨浴场沙软浪缓。较场尾民宿彩墙如童话小镇，"深圳的海"。' },
  { id: 'shenzhen_lianhuashan', name: '莲花山·深圳湾公园', icon: '🌳', price: 0, desc: '莲花山顶广场俯瞰市民中心，"深圳天际线机位"。深圳湾骑行海边栈道，日落看候鸟。' },
  { id: 'shenzhen_huaqiangbei', name: '华强北·深圳博物馆', icon: '💻', price: 0, desc: '"中国电子第一街"，手机配件宇宙。深圳博物馆讲"深圳速度"，改革开放的奇迹现场。' },
  { id: 'shenzhen_guangchang', name: '平安金融中心云际观光层', icon: '🏙️', price: 200, desc: '600米"深圳之巅"，116层观光层。云上深圳+Free Sky 观光，玻璃栈道悬空。' },
  { id: 'shenzhen_gankeng', name: '甘坑客家小镇·大鹏所城', icon: '🏘️', price: 0, desc: '客家围屋与明清海防所城。大鹏所城"将军村"，较场尾就在旁边。' },
  /* ---- 特区地标与山海 ---- */
  { id: 'sznp_lianhua_dxp', name: '莲花山公园·邓小平像', icon: '🗽', price: 0, desc: '山顶广场的邓小平铜像面朝深圳中轴线，登高者常来献花留影。俯瞰市民中心楼群，那曲"春天的故事"就从脚下铺开。' },
  { id: 'sznp_dengguangxiu', name: '深圳湾灯光秀', icon: '🌃', price: 0, desc: '入夜后深圳湾沿岸楼宇联播灯光秀，人才公园海边是最佳机位。整片湾区倒映进海面，深圳把夜景做成名片。' },
  { id: 'sznp_gaigekai', name: '深圳改革开放展览馆', icon: '📜', price: 0, desc: '"大潮起珠江"常设展，把特区四十年装进一个馆。国贸三天一层楼的老照片、蛇口开山炮，看得人心潮难平。' },
  { id: 'sznp_zhongying', name: '中英街', icon: '🛍️', price: 0, desc: '一条街横跨深港两制，界碑立在街心成了必打卡点。老铺卖着港货零食，百米老街浓缩了百年边贸史。' },
  { id: 'sznp_qianhai', name: '前海石公园', icon: '🏗️', price: 0, desc: '前海是"特区中的特区"，前海石见证滩涂变新城。隔海望去摩天轮缓缓转动，深圳仍在向海生长。' },
  { id: 'sznp_nantou', name: '南头古城', icon: '🏘️', price: 0, desc: '深圳的"城市之根"，东晋设宝安县时这里就有人烟。城墙根下潮牌店与咖啡馆共生，老砖瓦讲着年轻城的前世。' },
  { id: 'sznp_chiwan', name: '赤湾天后宫', icon: '⛩️', price: 0, desc: '赤湾山下的妈祖庙香火绵延数百年，郑和下西洋曾来祭祀。古庙面朝伶仃洋，守着深圳最早的出海记忆。' },
  /* ---- 山海与自然 ---- */
  { id: 'sznp_rencai', name: '深圳人才公园', icon: '🌟', price: 0, desc: '全国首座人才主题公园，星光桥镌刻着深圳的功勋人物。黄昏看日落、入夜赏灯光秀，是湾区夜景的免费机位。' },
  { id: 'sznp_xichong', name: '西涌海滩', icon: '🌌', price: 30, desc: '深圳最长的沙滩，玻璃海水配细软沙。白天冲浪赶海，入夜走向天文台观星，大鹏的蓝可以看上一整天。' },
  { id: 'sznp_xiaomeisha', name: '小梅沙', icon: '🏖️', price: 50, desc: '大鹏湾畔的"东方夏威夷"，沙滩细白海水澄澈。海洋世界与度假酒店环湾而建，是深圳人最念旧的海边。' },
  { id: 'sznp_wutongshan', name: '梧桐山', icon: '⛰️', price: 0, desc: '鹏城第一峰，好汉坡直上九百四十三米。山顶云海翻涌时，深圳湾与香港群山同框，是登山客的周末天堂。' },
  { id: 'sznp_xianhu', name: '仙湖植物园·弘法寺', icon: '🌿', price: 15, desc: '梧桐山脚的植物王国，化石森林与仙人掌温室最出片。半山弘法寺香火旺盛，湖光山色里上炷平安香。' },
  { id: 'sznp_haishang', name: '海上世界', icon: '🛳️', price: 0, desc: '远洋客轮明华轮泊进蛇口，成为夜生活的中心。邓小平题字仍在船身，音乐喷泉与酒吧街把海风衬得热闹。' },
  { id: 'sznp_wanqu', name: '欢乐港湾·湾区之光', icon: '🎡', price: 100, desc: '宝安湾畔的摩天轮高一百二十八米，名叫"湾区之光"。转到最高处，前海湾的日落与城市灯火同框入画。' },
  { id: 'sznp_chunsun', name: '华润大厦"春笋"', icon: '🌇', price: 0, desc: '形如春笋的华润大厦在深圳湾畔拔节而上。傍晚塔身映着霞光，从人才公园望过去，就是一幅现代山海图。' },
  /* ---- 科技之城与主题乐园 ---- */
  { id: 'sznp_kejiyuan', name: '深圳湾科技园·腾讯滨海大厦', icon: '🏢', price: 0, desc: '两栋弧形塔楼并肩的腾讯滨海大厦立在深圳湾畔。入夜后科技园灯火通明，这座城市最年轻的野心都在加班。' },
  { id: 'sznp_dajiang', name: '大疆"天空之城"', icon: '🚁', price: 0, desc: '悬挑结构层层托起空中花园，是大疆全球总部大楼。无人机之都的地标建筑，科幻感像随时会起飞。' },
  { id: 'sznp_oct', name: '华侨城创意园', icon: '🎨', price: 0, desc: '旧厂房改出的文艺街区，涂鸦墙、独立书店藏在树荫里。周末创意市集人潮涌动，是深圳青年的精神地标。' },
  { id: 'sznp_dongbu', name: '东部华侨城', icon: '🚡', price: 180, desc: '大侠谷与茶溪谷双谷相依，云海索道把山海拉近。茵特拉根小镇像欧洲一角，是深圳人的度假后花园。' }
);
