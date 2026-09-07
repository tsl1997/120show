/* 洛杉矶 分册01：景点圣地（好莱坞/格里菲斯/圣莫尼卡/迪士尼/盖蒂/威尼斯海滩/环球影城） */
window.LA_SPOTS = window.LA_SPOTS || [];
window.LA_SPOTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'losangeles_hollywood', name: '好莱坞星光大道', icon: '⭐', price: 0, desc: '2700多颗星星嵌在人行道上，中国戏院前的明星手脚印最热。街头"超人蜘蛛侠"合影要给小费，好莱坞的烟火气。' },
  { id: 'losangeles_sign', name: '格里菲斯天文台', icon: '🔭', price: 0, desc: '免费天文台正对好莱坞标志，日落时分整城镀金。《爱乐之城》取景地，晚上望远镜排队看土星环。' },
  { id: 'losangeles_santa_monica', name: '圣莫尼卡码头', icon: '🎡', price: 80, desc: '66号公路的"终点"路牌在这里。太平洋乐园的摩天轮看海上日落，沙滩上排球与滑板齐飞。' },
  { id: 'losangeles_disney', name: '加州迪士尼·星球大战园', icon: '🚀', price: 480, desc: '迪士尼老家+"星球大战：银河边缘"园区。开千年隼、喝蓝色牛奶，星战粉的终极朝圣。' },
  { id: 'losangeles_getty', name: '盖蒂中心', icon: '🏛️', price: 0, desc: '山顶白色建筑群，梵高《鸢尾花》真迹挂在那里。免费入园，空中电车爬上山坡，花园与海景都是展品。' },
  { id: 'losangeles_venice', name: '威尼斯海滩', icon: '🛹', price: 0, desc: '海滨步道的肌肉海滩、滑板场与街头篮球。运河区的小桥流水，藏着"洛杉矶的阿姆斯特丹"。' },
  { id: 'losangeles_studio', name: '环球影城', icon: '🎬', price: 420, desc: '片场小火车带你看真实摄影棚，《速度与激情》特效体验。哈利波特园区配黄油啤酒，加州阳光版魔法世界。' },
  /* ---- 主题公园 ---- */
  { id: 'lap_disney_adventure', name: '迪士尼冒险乐园', icon: '🏰', price: 420, desc: '隔壁的迪士尼"第5 园"，"银河护卫队"过山车、Cars 飙车。"加州双园"的快乐。' },
  { id: 'lap_six_flags', name: '六旗魔术山', icon: '🎢', price: 350, desc: '全球过山车之最：Goliath、X2。洛杉矶人周末的肾上腺素，"尖叫疗法"。' },
  /* ---- 海滨与文化 ---- */
  { id: 'lap_long_beach', name: '长滩·玛丽皇后号', icon: '⛴️', price: 150, desc: '退役的豪华邮轮停在长滩港口。船内装饰比酒店还豪华，"上船晃一晃免费"。' },
  { id: 'lap_manhattan', name: '曼哈顿海滩', icon: '🏖️', price: 0, desc: '南湾的白沙滩，漫步道与高端住宅区。Sand Section 是 LA 富人区，"海滩与豪宅并存"。' },
  { id: 'lap_malibu', name: '马里布海滩', icon: '🏄', price: 0, desc: '《海滩游侠》的浪点，101公路边别墅。明星经常在海滩漫步，"加州名流的避难所"。' },
  /* ---- 街区与艺术 ---- */
  { id: 'lap_downtown', name: '市中心·Broad 博物馆', icon: '🏛️', price: 0, desc: 'Frank Gehry 设计的"撕裂"不锈钢建筑，洛杉矶现代美术馆。Pershing Square 的"天使之城"地标。' },
  { id: 'lap_melrose', name: '梅尔罗斯大道', icon: '👟', price: 0, desc: '潮牌店与名人早餐店扎堆，Paul Smith 粉墙的彩虹墙。"LA 的时尚中轴"。' },
  { id: 'lap_lacma', name: 'LACMA 城市之光', icon: '🌃', price: 150, desc: 'Chris Burden 196根旧路灯装置 "Urban Light"。日落时拍照的"LA 标准游客照"。' },
  /* ---- 自然与远郊 ---- */
  { id: 'lap_runyon', name: '鲁尼恩峡谷公园', icon: '⛰️', price: 0, desc: '好莱坞山徒步到 Runyon Summit 俯瞰 LA 城。半山腰的标牌和名人的狗一起看，"LA 的中央公园"。' },
  { id: 'lap_griffith2', name: '好莱坞山公园', icon: '⛰️', price: 0, desc: '可徒步可开车，1320 英亩的山顶。Griffith 望远镜看 LA 与好莱坞标志，"户外+宇宙"双拼。' },
  /* ---- 周边 ---- */
  { id: 'lap_anheim', name: '安那翰·天使体育场', icon: '⚾', price: 100, desc: '洛杉矶天使队主场，Big A 标志的"加州最大棒球馆"。周边迪士尼同属一城，"体育+乐园双拼"。' },
  { id: 'lap_palm', name: '棕榈泉一日', icon: '🌴', price: 250, desc: '开车 2 小时到 Coachella 沙漠。棕榈泉空中缆车与 Joshua Tree 沙漠星空，"LA 的冬季后花园"。' },
  { id: 'lap_catalina', name: '卡塔利娜岛一日', icon: '⛴️', price: 300, desc: '渡轮一小时到卡塔利娜岛。浮潜与玻璃底船看鱼，"LA 自己的海岛"。' }
);
