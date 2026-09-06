/* ============ 江苏·南京 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'nanjing',
    name: '南京',
    country: '中国',
    cc: 'CN',
    province: '江苏',
    flag: '🇨🇳',
    region: '华东',
    hero: '🏮',
    desc: '六朝古都、十朝都会：秦淮河的桨声灯影，梧桐掩映的民国风情，鸭血粉丝汤配盐水鸭，金陵的厚重与温柔都在。',
    travel: [{ name: '高铁', icon: '🚄', cost: 350 }, { name: '飞机', icon: '✈️', cost: 700 }],
    visa: null,
    spots: [
      { id: 'nanjing_zhongshan', name: '中山陵·钟山风景区', icon: '⛰️', price: 0, desc: '392级台阶直上博爱坊，"天下为公"匾额高悬。免费预约，梧桐大道深秋金黄，明孝陵石象路更是"最美600米"。' },
      { id: 'nanjing_fuzimiao', name: '夫子庙·秦淮河', icon: '🏮', price: 0, desc: '"烟笼寒水月笼纱"，画舫夜游秦淮最经典。乌衣巷口夕阳斜，科举博物馆的"试卷迷宫"很出片。' },
      { id: 'nanjing_zongtonf', name: '总统府', icon: '🏛️', price: 35, desc: '中国近代史遗址博物馆：太平天国天王府、民国总统府。一步一百年，煦园里的石舫静看风云。' },
      { id: 'nanjing_dabao', name: '侵华日军南京大屠杀遇难同胞纪念馆', icon: '🕯️', price: 0, desc: '万人坑遗址与史料陈列，"12.13"的永恒记忆。馆内肃穆安静，出口的和平雕塑令人久久无言。' },
      { id: 'nanjing_mingxiaoling', name: '明孝陵', icon: '🛕', price: 70, desc: '明太祖朱元璋陵寝，世界文化遗产。秋天石象路银杏红枫铺就"南京最美六百米"。' },
      { id: 'nanjing_xuanwu', name: '玄武湖·明城墙', icon: '🌉', price: 0, desc: '江南三大名湖之一，台城段城墙可登。紫峰大厦与古鸡鸣寺同框，"古都的现代机位"。' },
      { id: 'nanjing_laomendong', name: '老门东', icon: '🏮', price: 0, desc: '明清风貌历史街区，巷子里全是小吃与文创。白天逛店、夜里灯笼亮起，"南京的里坊生活"。' },
    ],
    souvenirs: [
      { id: 'nanjing_yaxue', name: '鸭血粉丝汤', icon: '🍜', tag: '食', type: '美食', price: 20, desc: '鸭血嫩滑、粉丝弹牙，配鸭油烧饼。"没有一只鸭子能活着离开南京"的平民美味。' },
      { id: 'nanjing_yanshuiya', name: '盐水鸭', icon: '🦆', tag: '食', type: '特产', price: 60, desc: '桂花季腌制的"桂花鸭"皮白肉嫩咸鲜足。真空装是南京手信的"官方答案"。' },
      { id: 'nanjing_tangbao', name: '蟹黄汤包', icon: '🥟', tag: '食', type: '美食', price: 30, desc: '皮薄如纸提起来像灯笼，先开窗后喝汤。蟹黄汤汁鲜到烫嘴，配姜丝香醋。' },
      { id: 'nanjing_huotui', name: '金陵烤鸭·糕团', icon: '🍖', tag: '食', type: '美食', price: 45, desc: '南京烤鸭浇"卤子"是灵魂，莲湖糕团店的桂花糖芋苗甜糯。秦淮小吃的"甜咸双绝"。' },
      { id: 'nanjing_yuduan', name: '云锦文创', icon: '🧵', tag: '衣', type: '文创', price: 200, desc: '南京云锦"寸锦寸金"，皇家织造技艺。云锦书签与领带，"织中之圣"的可穿戴版。' },
      { id: 'nanjing_yuhua', name: '雨花石', icon: '💎', tag: '衣', type: '文创', price: 30, desc: '雨花台捡的"幸运石"纹理如画。一盆水养雨花石，"把南京的雨带回家"。' },
      { id: 'nanjing_jinling', name: '金陵折扇·绒花', icon: '🪭', tag: '衣', type: '文创', price: 80, desc: '金陵折扇竹骨雅致，绒花是《延禧攻略》带火的非遗。"发髻上的南京"。' },
      { id: 'nanjing_suanzao', name: '盐酿桂花蜜·酸枣糕', icon: '🍯', tag: '食', type: '特产', price: 40, desc: '灵谷寺桂花蜜冲水即饮，"金陵秋天的味道"。酸枣糕开胃，老门东手作铺有售。' },
      { id: 'nanjing_chuanyue', name: '秦淮画舫夜游', icon: '⛴️', tag: '行', type: '体验', price: 80, desc: '夜泊秦淮近酒家，画舫摇过大照壁。两岸灯笼倒映水中，"金陵夜色"封神时刻。' },
      { id: 'nanjing_xuetang', name: '科举博物馆探秘', icon: '🎓', tag: '玩', type: '体验', price: 50, desc: '地下四层的"试卷迷宫"，互动体验科举考试。拍一张"金榜题名"，"状元打卡照"流行全网。' },
      { id: 'nanjing_sheying', name: '颐和路民国风旅拍', icon: '📸', tag: '玩', type: '体验', price: 220, desc: '黄墙梧桐的民国街区旗袍旅拍。"一条颐和路，半部民国史"的镜头感。' },
      { id: 'nanjing_minsu', name: '梧桐树下的民宿', icon: '🏨', tag: '住', type: '住宿', price: 380, desc: '颐和路附近的民国小楼民宿，木地板吱呀作响。清晨阳光透过梧桐叶洒进窗台。' },
    ],
    stories: [
      { id: 'nanjing_story_ya', name: '没有一只鸭子活着离开南京', icon: '🦆', desc: '南京人一年吃掉一亿只鸭：盐水鸭、烤鸭、鸭血粉丝。外地人问"你们为什么这么爱吃鸭"，本地人：鸭子好，南京好。' },
      { id: 'nanjing_story_wutong', name: '梧桐树的浪漫', icon: '🌳', desc: '传说蒋介石为宋美龄种满城法国梧桐，俯瞰像项链。秋天的陵园路金黄漫天，"南京的秋"上了无数壁纸。' },
      { id: 'nanjing_story_liuchao', name: '六朝古都的"虎踞龙盘"', icon: '🐉', desc: '诸葛亮叹南京"钟山龙蟠，石头虎踞"。六朝、明、民国在此定都，"十朝都会"的称号实至名归。' },
      { id: 'nanjing_story_qinhuai', name: '秦淮八艳的故事', icon: '🎨', desc: '李香君、董小宛等秦淮八艳才情与气节并重。媚香楼里桃花扇的故事，比想象中更刚烈。' },
      { id: 'nanjing_story_dabaoyen', name: '南京大屠杀的铭记', icon: '🕯️', desc: '每年12月13日全城警报响起，车辆停驶鸣笛。纪念馆墙上"300000"数字提醒：铭记历史，珍爱和平。' },
      { id: 'nanjing_story_xueshi', name: '雪后的鸡鸣寺', icon: '❄️', desc: '"南朝四百八十寺"之首鸡鸣寺，雪后樱花配黄墙是顶流画面。春天樱花大道人山人海，"南京的浪漫顶点"。' },
    ],
  });
})();
