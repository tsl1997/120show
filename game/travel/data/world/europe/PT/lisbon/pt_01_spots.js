/* 里斯本 分册01：景点圣地（贝伦塔/热罗尼莫斯/28路电车/老城/辛特拉/罗卡角/法朵） */
window.PT_SPOTS = window.PT_SPOTS || [];
window.PT_SPOTS.push(
  /* ---- 原档沿用条目 ---- */
  { id: 'lisbon_belem', name: '贝伦塔·大发现纪念碑', icon: '⚓', price: 30, desc: '曼努埃尔式堡垒守着特茹河口，大航海时代的启航地。纪念碑刻着32位航海家，"世界从这里变大"。' },
  { id: 'lisbon_jeronimos', name: '热罗尼莫斯修道院', icon: '⛪', price: 50, desc: '世界遗产，曼努埃尔式石雕如藤蔓生长。达伽马长眠于此，"葡萄牙的威斯敏斯特"。' },
  { id: 'lisbon_tram28', name: '28路黄色电车', icon: '🚋', price: 8, desc: '1930年代老电车叮叮当当爬过全城坡道。Alfama 老城区段最经典，"里斯本的心跳"。' },
  { id: 'lisbon_castle', name: '圣若热城堡', icon: '🏰', price: 60, desc: '摩尔人城堡俯瞰全城与特茹河。孔雀在城墙散步，"七丘之王的观景台"。' },
  { id: 'lisbon_alfama', name: '阿尔法玛老城区', icon: '🎶', price: 0, desc: '迷宫般的摩尔人老巷，法朵（Fado）从酒馆飘出。傍晚听"葡萄牙的灵魂之歌"。' },
  { id: 'lisbon_sintra', name: '辛特拉一日', icon: '🏰', price: 60, desc: '佩纳宫红黄糖果城堡立在山头，拜伦称"伊甸园"。雷加莱拉庄园的倒转井神秘莫测。' },
  { id: 'lisbon_cascais', name: '罗卡角（欧洲大陆最西端）', icon: '🌅', price: 0, desc: '"陆止于此，海始于斯"——卡蒙斯诗句刻在石碑。悬崖灯塔看大西洋日落，"欧洲的天涯海角"。' },
  /* ---- 贝伦与发现 ---- */
  { id: 'ptp_pasteis_belem', name: '贝伦蛋挞老店', icon: '🥧', price: 0, desc: '1837 年原址 Pastéis de Belém，秘方只有三人知道。门口永远排队，"蛋挞的诞生地"。' },
  { id: 'ptp_cultural', name: '贝伦文化中心', icon: '🏛️', price: 0, desc: '修道院旁的现代文化中心，临时展与书店。从修道院到此一站，"里斯本的文化客厅"。' },
  { id: 'ptp_navy', name: '海事博物馆', icon: '⛵', price: 20, desc: '大航海时代的船只模型与航海图。亨利王子塑像在门口，"葡萄牙海洋灵魂的档案馆"。' },
  /* ---- 老城与街区 ---- */
  { id: 'ptp_chiado', name: '希亚多区', icon: '🛍️', price: 0, desc: '里斯本的高档购物区，咖啡馆与书店。诗人费尔南多·佩索阿常在这里，"葡萄牙的香榭丽舍"。' },
  { id: 'ptp_bairro', name: 'Bairro Alto 上城区', icon: '🎨', price: 0, desc: '夜晚酒吧与法朵酒馆密集，白天是涂鸦与艺术工作室。"里斯本的夜生活心脏"。' },
  { id: 'ptp_principe', name: 'Príncipe Real', icon: '🌳', price: 0, desc: 'Principe Real 花园旁的波西米亚街区，古董店与素食餐厅。骄傲旗与彩虹旗共存，"里斯本的嬉皮区"。' },
  /* ---- 观景台与街道 ---- */
  { id: 'ptp_portas', name: 'Portas do Sol 观景台', icon: '🌄', price: 0, desc: '阿尔法玛老城尽头的悬崖，红瓦屋顶一直铺到河边。黄昏的光把整城点燃，"里斯本最美的角度"。' },
  { id: 'ptp_santa_luzia', name: '圣露西亚观景台', icon: '🌺', price: 0, desc: '带蓝白瓷砖长椅的花园观景台，一对恋人塑像。橘子树与葡萄藤架下，"阿尔法玛的客厅"。' },
  { id: 'ptp_augusta', name: '奥古斯塔大街凯旋门', icon: '🏛️', price: 0, desc: '商业步行街尽头的巴洛克凯旋门，1873 年建造。从门洞望大教堂与河口，"里斯本的象征门"。' },
  /* ---- 大教堂与教堂 ---- */
  { id: 'ptp_se', name: '里斯本大教堂', icon: '⛪', price: 20, desc: '1147 年最早的里斯本主教座堂，罗曼式厚重外墙。地下考古博物馆藏罗马、摩尔、中世纪三段层。' },
  { id: 'ptp_jeronimos_int', name: '修道院内部回廊', icon: '⛪', price: 50, desc: '曼努埃尔式石雕如藤蔓与绳结，每根柱头都不一样。"海洋帝国的石雕诗"。' },
  /* ---- 法朵与文化 ---- */
  { id: 'ptp_fado_museum', name: '法朵博物馆', icon: '🎵', price: 10, desc: '法朵的历史与名伶介绍，含试听室。"葡萄牙灵魂之歌的档案"。' },
  { id: 'ptp_museu', name: '国家古代艺术博物馆', icon: '🖼️', price: 20, desc: '里斯本最重要的艺术馆，15-19 世纪葡萄牙绘画、挂毯与金银器。"葡国艺术的中央馆"。' },
  /* ---- 周边与远郊 ---- */
  { id: 'ptp_obidos', name: '奥比多斯一日', icon: '🏘️', price: 150, desc: '中世纪白墙小镇，巧克力与樱桃酒。城墙可以走一圈，"葡萄牙的童话镇"。' },
  { id: 'ptp_porto', name: '波尔图一日', icon: '🍷', price: 250, desc: '火车三小时到葡萄牙第二城。杜罗河酒窖与彩色老城，波特酒的原乡，"葡萄牙的波尔多"。' },
  { id: 'ptp_monsaraz', name: 'Monsaraz 中世纪村', icon: '🏰', price: 220, desc: '西班牙边境的白色石头村，城墙内的中世纪宁静。大坝水库全貌，"葡萄牙的边陲小镇"。' },
  /* ---- 当代与生活 ---- */
  { id: 'ptp_lx_factory', name: 'LX Factory', icon: '🏭', price: 0, desc: '工业厂房改的创意园区，餐厅与独立书店。25 de Abril 大桥下，"里斯本的 SOHO"。' },
  { id: 'ptp_zoo', name: '里斯本海洋馆', icon: '🐠', price: 40, desc: '万国公园里的海洋馆，大西洋鱼类与企鹅。98 年世博会的遗产，"里斯本的水族箱"。' }
);
