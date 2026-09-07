/* 巴塞罗那 分册01：景点圣地（高迪三件套/哥特区/诺坎普/巴塞罗内塔/蒙特惠奇） */
window.ES_SPOTS = window.ES_SPOTS || [];
window.ES_SPOTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'barcelona_sagrada', name: '圣家堂', icon: '⛪', price: 130, desc: '高迪建了43年至今未完工的"石头圣经"。阳光穿过彩色玻璃把中殿染成森林，塔尖上的"从天而降"让所有人失语。' },
  { id: 'barcelona_casa_mila', name: '米拉之家·巴特罗之家', icon: '🏠', price: 110, desc: '波浪形石砌外墙配锻铁阳台，屋顶烟囱像"戴头盔的士兵"。高迪说"直线属于人类，曲线属于上帝"。' },
  { id: 'barcelona_park_guell', name: '古埃尔公园', icon: '🦎', price: 60, desc: '马赛克蜥蜴与波浪长椅把公园变成童话。从山腰观景台俯瞰全城与地中海，"高迪的糖果城堡"。' },
  { id: 'barcelona_gothic', name: '哥特区·兰布拉大道', icon: '🏛️', price: 0, desc: '两千年老城墙与窄巷，大教堂的鹅在回廊里踱步。兰布拉大道上"活雕塑"一动不动，被逗笑就算他赢。' },
  { id: 'barcelona_campnou', name: '诺坎普球场', icon: '⚽', price: 130, desc: '九万九千人的"足球圣殿"，梅西的外号刻在草坪边上。博物馆里的奖杯墙，巴萨球迷进去会哭。' },
  { id: 'barcelona_beach', name: '巴塞罗内塔海滩', icon: '🏖️', price: 0, desc: '城市地铁直达的海滩，沙滩排球场一排十个。金色沙滩配海鲜饭老店，午后阳光把海面烫成碎金。' },
  { id: 'barcelona_montjuic', name: '蒙特惠奇山·魔幻喷泉', icon: '⛲', price: 0, desc: '山顶的奥运场馆与城堡缆车。夜里魔幻喷泉随音乐变色起舞，水幕灯光秀免费看了百年。' },
  /* ---- 高迪其他作品 ---- */
  { id: 'esp_casa_vicens', name: '文森之家', icon: '🏠', price: 60, desc: '高迪的第一件主要作品，1883 年建成。彩色马赛克瓷砖+伊斯兰风几何，"高迪的青春宣言"。' },
  { id: 'esp_palau', name: '桂尔宫·桂尔公园', icon: '🏛️', price: 60, desc: '高迪给桂尔家族设计的宅邸，烟囱像蘑菇与精灵。联合国教科文遗产，"加泰罗尼亚最梦幻的屋顶"。' },
  { id: 'esp_colonia', name: '桂尔纺织村', icon: '🏘️', price: 0, desc: '高迪早期为桂尔家族工人设计的工人新村。教堂、学校、住宅、商店统一风格，"工业革命时代的乌托邦村"。' },
  { id: 'esp_batllo', name: '巴特罗之家内部', icon: '🐉', price: 110, desc: '高迪的"龙腹之屋"，内部如海洋中世界。屋顶像龙的脊背，每片瓷砖颜色渐变。' },
  /* ---- 哥特区与老城 ---- */
  { id: 'esp_cathedral', name: '巴塞罗那大教堂', icon: '⛪', price: 20, desc: '13-15 世纪的哥特式主教堂，屋顶看全城与海。每周日晨有"叠人塔"传统。' },
  { id: 'esp_picasso', name: '毕加索博物馆', icon: '🖼️', price: 35, desc: '哥特区五座宫殿组成，毕加索青少年时期到蓝色时期作品。"巴塞罗那与毕加索共同的青春"。' },
  { id: 'esp_ciutadella', name: '城堡公园·议会大厦', icon: '🌳', price: 0, desc: '1888 世博会旧址，加泰罗尼亚议会宫就坐落其中。湖里天鹅与喷泉，"巴塞罗那的中央公园"。' },
  /* ---- 现代与艺术 ---- */
  { id: 'esp_macba', name: 'MACBA 当代艺术博物馆', icon: '🎨', price: 20, desc: 'RICHARD MEIER 设计的白盒子现代馆。前广场是滑板少年圣地，"艺术与街头的混合地"。' },
  { id: 'esp_fundacio', name: '米罗基金会', icon: '🎨', price: 35, desc: '胡安·米罗的"私人美术馆"，蒙锥克山上的现代主义建筑。"加泰罗尼亚的现代艺术之家"。' },
  /* ---- 美食与市场 ---- */
  { id: 'esp_boqueria', name: '博盖利亚菜市场', icon: '🥬', price: 0, desc: '兰布拉大道入口的百年菜市场，生蚝、果汁、伊比利亚火腿、彩色糖果。"巴塞罗那的果酱"。' },
  { id: 'esp_santjosep', name: 'Sant Josep 美食市集', icon: '🥘', price: 0, desc: 'Eixample 区的美食市集，加泰罗尼亚菜小酒馆扎堆。面包、海鲜饭、香肠，"本地的下酒市集"。' },
  /* ---- 周边与远郊 ---- */
  { id: 'esp_figueres', name: '达利戏剧博物馆', icon: '🎨', price: 60, desc: '火车 1.5 小时到达达利故乡菲格雷斯。达利亲自设计展馆，外墙有巨型蛋与面包，"超现实主义者的梦"。' },
  { id: 'esp_tarragona', name: '塔拉戈纳一日', icon: '🏛️', price: 100, desc: '火车 1 小时到罗马古城。圆形剧场与城墙，"地中海的罗马"。' },
  { id: 'esp_sitges', name: '锡切斯小镇', icon: '🏖️', price: 70, desc: '火车 40 分钟到海滨小镇。粉红教堂、现代主义建筑，"巴塞罗那人的周末海岸"。' },
  /* ---- 建筑之旅 ---- */
  { id: 'esp_born', name: '波恩文化中心·旧市场', icon: '🏛️', price: 0, desc: '19 世纪市场改的文化中心，玻璃顶下的市集保存原貌。"哥特区的现代客厅"。' },
  { id: 'esp_tibidabo', name: '提比达博山', icon: '⛪', price: 60, desc: '巴塞罗那最高的山，山顶的"神圣之心"教堂。百年老式游乐园仍营业，"像高迪的童年城堡"。' },
  { id: 'esp_olimpic', name: '蒙特惠奇奥运村', icon: '🏟️', price: 0, desc: '1992 奥运主场馆，现为体育与文化中心。通信塔变成城市地标，"奥运精神的延续"。' }
);
