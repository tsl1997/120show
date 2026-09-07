/* 波士顿 分册02：特色周边（龙虾卷/蛤蜊浓汤/牡蛎/奶油派/烘豆/红袜队/自由之路徒步） */
window.BO_GIFTS = window.BO_GIFTS || [];
window.BO_GIFTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'boston_lobster', name: '龙虾卷', icon: '🦞', tag: '食', type: '美食', price: 150, desc: '黄油冷拌龙虾肉塞满黄油烤面包，"新英格兰之魂"。Quincy Market 排队王。' },
  { id: 'boston_clam', name: '蛤蜊浓汤', icon: '🍲', tag: '食', type: '美食', price: 60, desc: '奶油蛤蜊浓汤装在面包碗里。"Chowder"的祖师爷版本，暖到骨头。' },
  { id: 'boston_oyster', name: '牡蛎生蚝拼盘', icon: '🦪', tag: '食', type: '美食', price: 130, desc: '波士顿生蚝吧文化，"半打起配香槟"。Union Oyster House 1826年开业，美国最老餐厅。' },
  { id: 'boston_cream', name: '波士顿奶油派', icon: '🍰', tag: '食', type: '美食', price: 35, desc: '海绵蛋糕+卡仕达+巧克力淋面，"马萨诸塞官方甜点"。Omni Parker House 发明。' },
  { id: 'boston_beans', name: '烘豆·豆汤面包', icon: '🫘', tag: '食', type: '特产', price: 30, desc: '"Bean Town"豆城的糖蜜烘豆。老派新英格兰味道，"波士顿的昵称由来"。' },
  { id: 'boston_harvard_wen', name: '哈佛/MIT 文创', icon: '🎓', tag: '衣', type: '文创', price: 50, desc: '哈佛红卫衣、MIT 铜鼠钥匙扣。"学霸周边"，书店里全都有。' },
  { id: 'boston_redsox', name: '红袜队周边', icon: '🧢', tag: '衣', type: '服饰', price: 100, desc: '红袜队帽"波士顿默认配置"。芬威球场限定款，"Bean Town 的信仰"。' },
  { id: 'boston_tea_wen', name: '茶叶党文创', icon: '🍵', tag: '衣', type: '文创', price: 25, desc: '波士顿倾茶事件茶罐、自由之路印章册。"反抗精神"的纪念。' },
  { id: 'boston_walk', name: '自由之路全程徒步', icon: '🥾', tag: '玩', type: '体验', price: 0, desc: '跟着红砖线走完16站，"2.5小时的美国史"。中文导览 App 可用。' },
  { id: 'boston_whale', name: '出海观鲸', icon: '🐋', tag: '玩', type: '体验', price: 260, desc: '夏季座头鲸与长须鲸出没。船长保证"看到鲸鱼"，"大西洋的震撼"。' },
  { id: 'boston_rowing', name: '查尔斯河皮划艇', icon: '🛶', tag: '玩', type: '体验', price: 100, desc: '划过哈佛桥与大学划船队中间。"The Charles"是波士顿人的生活方式。' },
  { id: 'boston_minsu', name: 'Back Bay 褐石民宿', icon: '🏨', tag: '住', type: '住宿', price: 800, desc: '19世纪褐石联排里的民宿，壁炉与旋转楼梯。"波士顿的优雅"。' },
  /* ---- 波士顿其他菜 ---- */
  { id: 'bog_yankee', name: '新英格兰蛤蜊浓汤升级版', icon: '🥣', tag: '食', type: '美食', price: 50, desc: 'Union Oyster House 的 1840 年秘方。奶油蛤蜊+土豆+培根，"新英格兰的味觉坐标"。' },
  { id: 'bog_whoopie', name: 'Whoopie Pie', icon: '🧁', tag: '食', type: '美食', price: 20, desc: '新英格兰版的奥利奥，两片巧克力饼夹奶油，新英格兰的国民甜点。' },
  { id: 'bog_cannoli', name: '北岸 Cannoli', icon: '🥯', tag: '食', type: '特产', price: 25, desc: 'Mike Pastry 的 Cannoli 配意式奶酪馅。North End 的"意大利人排队王"。' },
  /* ---- 文创与服饰 ---- */
  { id: 'bog_samp', name: '波士顿大学卫衣', icon: '🎓', tag: '衣', type: '服饰', price: 100, desc: 'Boston University 与哈佛 MIT 的卫衣。"大学城"标配。' },
  { id: 'bog_celtics', name: '凯尔特人队周边', icon: '🏀', tag: '衣', type: '服饰', price: 120, desc: 'NBA 凯尔特人队绿色球衣，18 冠王朝。"波士顿的篮球信仰"。' },
  /* ---- 体验课 ---- */
  { id: 'bog_harvard_tour', name: '哈佛学生导览', icon: '🎓', tag: '玩', type: '体验', price: 0, desc: '免费学生导览' + '（含华裔学生会中文版），' + '讲"哈佛谎言"与校训。' },
  { id: 'bog_fenway_tour', name: '芬威球场导览', icon: '⚾', tag: '玩', type: '体验', price: 200, desc: '每天 9:00-17:00 多场导览，看"绿色怪物"墙内部。"棒球迷的圣殿"。' },
  /* ---- 住宿 ---- */
  { id: 'bog_back_bay', name: '后湾精品酒店', icon: '🏨', tag: '住', type: '住宿', price: 900, desc: 'Back Bay 维多利亚风酒店，靠近纽伯里街。百年老房改的现代精品。' },
  { id: 'bog_north_end', name: '北岸民宿', icon: '🏠', tag: '住', type: '住宿', price: 600, desc: '北岸意大利区公寓，' + '楼下是 Cannoli 店与咖啡馆。"老波士顿的烟火气"。' }
);
