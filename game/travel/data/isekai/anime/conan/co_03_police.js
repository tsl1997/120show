/* 异世界·名侦探柯南 势力系列收藏（警视厅） */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  window.TRAVEL_SERIES.push({ id: 'sr_co_police', cat: 'isekai', name: '警视厅·警察群像', color: '#2e86c1',
    years: '1994-至今', author: '青山刚昌', theme: '警察群像收藏',
    background: '目暮、高木、佐藤、白鸟等搜查一课，大阪府警与警校五人组——守护米花町的蓝衣人们。', story: '"下辈子的彩票"——松田阵平与殉职刑警们的正义。',
    protagonist: '目暮十三·佐藤美和子', slogan: '正义的勋章', cities: ['isekai_conan'],
    items: [
    { id: 'cop_megure', name: '目暮十三警部', icon: '🎩', desc: '搜查一课的老牌警部，帽檐下藏着为妻子挡伤的疤。"毛利君，你怎么看？"的口头禅担当。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_takagi', name: '高木涉刑警', icon: '📓', desc: '认真老实的年轻刑警，佐藤的搭档与恋人。"涉"的名字总被念错。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_sato', name: '佐藤美和子警部补', icon: '👩‍✈️', desc: '搜查一课的"女刑警之花"，枪法与散打一流。与高木的车内告白与一年之约。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_shiratori', name: '白鸟任三郎警部', icon: '🌹', desc: '精英警部，带着恋爱小说家般的细腻推理，小林老师的恋人。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_chiba', name: '千叶和伸刑警', icon: '🍩', desc: '减肥永远失败的可爱刑警，与由美阿姨的若即若离。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_yumi', name: '宫本由美', icon: '🚦', desc: '交通课的女警，佐藤的闺蜜，也是高木佐藤这对的牵线红娘。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_matsumoto', name: '松本清长管理官', icon: '🎖️', desc: '警视厅高层，佐藤父亲的老部下，"羽田浩司案"的当事刑警之一。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_kuroda', name: '黑田兵卫', icon: '🕶️', desc: '从长野调来的警视厅刑警——朗姆三嫌疑之一，"知道太多的人"。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_kobayashi', name: '小林澄子老师', icon: '🍎', desc: '帝丹小学班主任，少年侦探团的守护人，"少年侦探团顾问"。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_matsuda', name: '松田阵平', icon: '💣', desc: '警校五人组的拆弹天才，米花町连环炸弹案中殉职——"下辈子的彩票给你"。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_hagiwara', name: '萩原研二', icon: '🎰', desc: '松田的挚友，四年前的爆炸案殉职——"上辈子的彩票"的另一位主角。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_date', name: '伊达航', icon: '💪', desc: '警校五人组的"大哥"，因病殉职的前辈。佐藤一直敬爱的师兄。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_morofushi', name: '诸伏景光（ Scotch）', icon: '🍀', desc: '公安卧底，降谷零的挚友。为保护情报自尽——"对不起，诸伏"。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_hiro', name: '诸伏高明', icon: '🧠', desc: '长野县警的"孔明"，景光的哥哥——智慧与兄弟情的双线。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_osaka', name: '服部平藏', icon: '🗡️', desc: '大阪府警本部长，平次的父亲，剑道与魄力并存的"鬼平藏"。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_touyama', name: '远山银司郎', icon: '⚖️', desc: '大阪府警刑事部长，和叶的父亲，平藏的老搭档。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_otaki', name: '大泷悟郎', icon: '🏍️', desc: '大阪府警的豪爽刑警，平次的办案搭档。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_toyama_k', name: '远山和叶', icon: '🏮', desc: '平次的青梅竹马，合气道的护身符少女。"平次那个笨蛋——"大阪之恋。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_nakamori', name: '中森银三警部', icon: '🚔', desc: '追捕怪盗基德二十年的警部，青子的父亲——"可恶的怪盗小子！"', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_nakamori_aoko', name: '中森青子', icon: '🐟', desc: '快斗的青梅竹马，"给怪盗基德一条小鱼干"的诅咒少女。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_touko', name: '警察学校五人组', icon: '🎓', desc: '萩原、伊达、松田、景光、降谷——警校时代的"五人组"，如今各自走向命运。', type: '人物卡', city: 'isekai_conan', price: 160 },
    { id: 'cop_detective_kudo', name: '目暮警部与小五郎', icon: '🤝', desc: '"沉睡的小五郎"是警视厅最依赖的名侦探——真相背后是柯南的蝴蝶结与手表。', type: '人物卡', city: 'isekai_conan', price: 160 }
    ]
  });
})();
