/* ============ 主题收藏系列·日本风物（歌谣/泡沫/扭蛋/印章/御守） ============ */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  window.TRAVEL_SERIES.push({
    id: 'sr_jp_song', cat: 'japan', name: '时代之声·歌曲合集', years: '昭和-平成', author: '日本歌谣史', theme: '演歌·City Pop·岛歌',
    background: '从昭和演歌到八十年代都市流行（City Pop），从冲绳岛歌到北海道雪国之歌——一首歌记住一座城，是日本旅行的浪漫打开方式。',
    story: '老喫茶店的唱片机沙沙转着，唱针落下的那一刻，整座城市都温柔了。',
    protagonist: '昭和与平成歌者', slogan: '歌が街に流れる（歌声流过街头）',
    cities: ['tokyo', 'osaka', 'kyoto', 'hokkaido', 'okinawa', 'yokohama', 'fukuoka', 'nagoya'],
    items: [
      { id: 'jsong_tokyo', name: '东京·City Pop 黑胶特辑', type: '歌谣唱片', city: 'tokyo', price: 120, desc: '涩谷唱片店里淘一张八十年代都市流行，黄昏的霓虹都唱进 grooves 里。' },
      { id: 'jsong_osaka', name: '大阪·浪速演歌名盘', type: '歌谣唱片', city: 'osaka', price: 110, desc: '道顿堀深夜的演歌，一口关西腔唱尽人情冷暖。' },
      { id: 'jsong_kyoto', name: '京都·祇园旅情歌选', type: '歌谣唱片', city: 'kyoto', price: 110, desc: '祇园艺妓小路的琴声与演歌，都是京都的夜风。' },
      { id: 'jsong_hokkaido', name: '北海道·雪国之歌', type: '歌谣唱片', city: 'hokkaido', price: 100, desc: '函馆的坂道、札幌的雪，唱针落进北国的寂静。' },
      { id: 'jsong_okinawa', name: '冲绳·岛歌（シマ唄）集', type: '歌谣唱片', city: 'okinawa', price: 100, desc: '三线一响，冲绳的海风与乡愁就漫上来。' },
      { id: 'jsong_yokohama', name: '横滨·爵士喫茶 LP', type: '歌谣唱片', city: 'yokohama', price: 120, desc: '港都的爵士喫茶店，咖啡与黑胶一坐一下午。' },
      { id: 'jsong_fukuoka', name: '福冈·博多小调明信片唱片', type: '歌谣唱片', city: 'fukuoka', price: 95, desc: '屋台的烟火气配上博多音头，九州的味道。' },
      { id: 'jsong_nagoya', name: '名古屋·演歌名曲选', type: '歌谣唱片', city: 'nagoya', price: 100, desc: '东海道上的演歌与味噌煮，一样浓烈。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_jp_bubble', cat: 'japan', name: '泡沫年代·平成图鉴', years: '1980s-1990s', author: 'バブル世代', theme: '泡沫时代的风景',
    background: '霓虹灯、跑车、冲浪、滑雪、不夜城——泡沫年代的日本大胆又浮夸。把那份"昭和终末的浪漫"收进收藏夹吧。',
    story: '那是一个以为霓虹永远不会熄灭的年代。',
    protagonist: 'バブル世代', slogan: '景气，真好！',
    cities: ['tokyo', 'osaka', 'yokohama', 'okinawa', 'hokkaido', 'fukuoka', 'nagoya', 'kumamoto'],
    items: [
      { id: 'jbub_tokyo', name: '东京·泡沫时代霓虹明信片', type: '泡沫年代', city: 'tokyo', price: 80, desc: '新宿歌舞伎町不熄的灯，定格在泡沫最亮的几年。' },
      { id: 'jbub_osaka', name: '大阪·道顿堀霓虹海报', type: '泡沫年代', city: 'osaka', price: 80, desc: '巨型招牌层层叠叠，大阪把浮夸写在脸上。' },
      { id: 'jbub_yokohama', name: '横滨·港未来夜景拍立得', type: '泡沫年代', city: 'yokohama', price: 85, desc: '摩天轮初亮的那年，港都的夜刚刚开始。' },
      { id: 'jbub_okinawa', name: '冲绳·泡沫冲浪海报', type: '泡沫年代', city: 'okinawa', price: 75, desc: '荧光色沙滩装与浪板，南国的夏日永不完结。' },
      { id: 'jbub_hokkaido', name: '北海道·泡沫滑雪海报', type: '泡沫年代', city: 'hokkaido', price: 75, desc: '粉雪与霓虹滑雪服的配色，是那个年代的审美。' },
      { id: 'jbub_fukuoka', name: '福冈·屋台夜灯卡片', type: '泡沫年代', city: 'fukuoka', price: 70, desc: '中洲屋台的暖帘与蒸腾的热气，九十年代延续至今。' },
      { id: 'jbub_nagoya', name: '名古屋·地下街霓虹照', type: '泡沫年代', city: 'nagoya', price: 70, desc: '迷宫般的地下街，灯光是泡沫年代的地铁名片。' },
      { id: 'jbub_kumamoto', name: '熊本·平成初期街景胶片', type: '泡沫年代', city: 'kumamoto', price: 70, desc: '熊本城下的老街，还有未拆除的复古招牌。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_jp_gacha', cat: 'japan', name: '扭蛋大作战·城市胶囊', years: '——', author: 'ガシャポン文化', theme: '各地扭蛋限定',
    background: '从秋叶原的扭蛋圣殿到奈良的小鹿、冲绳的シーサー——每一台扭蛋机，都是城市送给你的小彩蛋。',
    story: '硬币叮当落下，旋钮一转——不知道会开出什么，才是扭蛋最迷人的部分。',
    protagonist: '扭蛋收藏家', slogan: '转动吧，命运之蛋！',
    cities: ['tokyo', 'osaka', 'kyoto', 'nara', 'okinawa', 'hokkaido', 'sendai', 'fukuoka'],
    items: [
      { id: 'jgacha_tokyo', name: '秋叶原·机台限定扭蛋', type: '扭蛋', city: 'tokyo', price: 60, desc: '机台多到整面墙，赌上"一发入魂"的欧气。' },
      { id: 'jgacha_osaka', name: '难波·章鱼烧扭蛋', type: '扭蛋', city: 'osaka', price: 55, desc: '会翻面的章鱼烧小玩偶，大阪人爱到不行。' },
      { id: 'jgacha_kyoto', name: '京都·和果子扭蛋', type: '扭蛋', city: 'kyoto', price: 55, desc: '水信玄饼、大福、最中，迷你到舍不得拆。' },
      { id: 'jgacha_nara', name: '奈良·小鹿扭蛋', type: '扭蛋', city: 'nara', price: 55, desc: '会点头讨鹿仙贝的小鹿，萌度超标。' },
      { id: 'jgacha_okinawa', name: '冲绳·シーサー扭蛋', type: '扭蛋', city: 'okinawa', price: 55, desc: '红瓦屋顶上的守护兽，招福防灾样样会。' },
      { id: 'jgacha_hokkaido', name: '北海道·雪人扭蛋', type: '扭蛋', city: 'hokkaido', price: 55, desc: '戴小帽子的雪人公仔，冬天限定配色。' },
      { id: 'jgacha_sendai', name: '仙台·伊达政宗扭蛋', type: '扭蛋', city: 'sendai', price: 55, desc: '独眼龙头盔迷你版，东北的战国魂。' },
      { id: 'jgacha_fukuoka', name: '福冈·明太子扭蛋', type: '扭蛋', city: 'fukuoka', price: 55, desc: '粉红明太子表情包，博多特产成精了。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_jp_stamp', cat: 'japan', name: '车站印章·城市印记', years: '——', author: '駅スタンプ文化', theme: '车站与城市印章',
    background: '盖一枚车站纪念章，或求一方御城印——日本的印章文化藏在一路盖章的旅程里，集齐就是一部专属旅行年谱。',
    story: '每盖下一枚章，就把那座城轻轻按进了自己的手帐。',
    protagonist: '盖章旅行者', slogan: '一城一印，把旅行盖成书。',
    cities: ['tokyo', 'kyoto', 'osaka', 'nagoya', 'sendai', 'nara', 'hakone', 'hokkaido'],
    items: [
      { id: 'jstamp_tokyo', name: '东京站·丸之内站舍印', type: '车站印章', city: 'tokyo', price: 45, desc: '红砖站舍与八重洲口，百年车站的第一枚章。' },
      { id: 'jstamp_kyoto', name: '京都站·车站纪念章', type: '车站印章', city: 'kyoto', price: 45, desc: '中央大厅的格子穹顶，京都的门面印进手帐。' },
      { id: 'jstamp_osaka', name: '大阪站·展望台印章', type: '车站印章', city: 'osaka', price: 45, desc: '梅田展望台俯瞰全城，大阪的灯都在掌纹里。' },
      { id: 'jstamp_nagoya', name: '名古屋站·金鯱印章', type: '车站印章', city: 'nagoya', price: 45, desc: '名古屋城屋脊的金鯱，东海道的守护兽。' },
      { id: 'jstamp_sendai', name: '仙台站·伊达家纹印', type: '车站印章', city: 'sendai', price: 45, desc: '竹雀纹的家纹，仙台就是伊达的城下町。' },
      { id: 'jstamp_nara', name: '近铁奈良·鹿印', type: '车站印章', city: 'nara', price: 45, desc: '小鹿叼着仙贝的章，一盖就想去春日大社。' },
      { id: 'jstamp_hakone', name: '箱根·登山电车纪念印', type: '车站印章', city: 'hakone', price: 50, desc: '红壳登山电车过山洞，盖章框画着芦之湖。' },
      { id: 'jstamp_hokkaido', name: '函馆站·五棱郭星印', type: '车站印章', city: 'hokkaido', price: 45, desc: '星形要塞与百万夜景，北国第一枚章。' },
    ]
  });
  window.TRAVEL_SERIES.push({
    id: 'sr_jp_omamori', cat: 'japan', name: '御守·结缘与祈愿', years: '——', author: '神社寺院', theme: '各地御守信物',
    background: '恋爱、学业、平安、必胜、良缘——把心愿系在小小的御守里。每一道神社的神明，都守着一个温柔的祝愿。',
    story: '御守不只是一针一线缝出的布囊，它是神明替你保管的小小愿望。',
    protagonist: '祈愿的人', slogan: '心願成就（心愿达成）',
    cities: ['tokyo', 'kyoto', 'nara', 'osaka', 'nagoya', 'hakone', 'fukuoka', 'kamakura'],
    items: [
      { id: 'jomamori_tokyo', name: '明治神宫·结缘御守', type: '御守', city: 'tokyo', price: 60, desc: '参道上的百年神木见证，愿遇见对的人。' },
      { id: 'jomamori_kyoto', name: '清水寺·恋爱成就御守', type: '御守', city: 'kyoto', price: 60, desc: '音羽之泷下许愿，地主神社的良缘绳结。' },
      { id: 'jomamori_nara', name: '春日大社·良缘小鹿御守', type: '御守', city: 'nara', price: 60, desc: '万盏灯笼下的小鹿，衔来一整年的好运气。' },
      { id: 'jomamori_osaka', name: '住吉大社·交通安全御守', type: '御守', city: 'osaka', price: 60, desc: '住吉大神守护船旅，如今守护每一次出行平安。' },
      { id: 'jomamori_nagoya', name: '热田神宫·必胜御守', type: '御守', city: 'nagoya', price: 65, desc: '草薙神剑镇座的古老神宫，考试比赛都灵。' },
      { id: 'jomamori_hakone', name: '箱根神社·九头龙除厄御守', type: '御守', city: 'hakone', price: 65, desc: '湖中鸟居的朱红，把厄运挡在神境之外。' },
      { id: 'jomamori_fukuoka', name: '太宰府天满宫·学业御守', type: '御守', city: 'fukuoka', price: 65, desc: '学问之神菅原道真座前，愿笔尖开出花来。' },
      { id: 'jomamori_kamakura', name: '鹤冈八幡宫·必胜御守', type: '御守', city: 'kamakura', price: 60, desc: '源氏武士信奉的武神，把勇气缝进布囊。' },
    ]
  });
})();
