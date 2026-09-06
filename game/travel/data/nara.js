/* ============ 日本·奈良 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'nara',
    name: '奈良',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关西',
    hero: '🦌',
    desc: '千年古都·平城京：奈良公园的鹿仙贝传说，东大寺大佛俯瞰众生，春日大社的灯与鹿，一座被鹿"接管"的千年古都。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2500 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'nara_kouen', name: '奈良公园·鹿群', icon: '🦌', price: 0, desc: '1200多只"神的使者"在公园自由漫步。买一包鹿仙贝，被鹿群"围攻鞠躬"是奈良名场面。' },
      { id: 'nara_todaiji', name: '东大寺', icon: '🛕', price: 30, desc: '世界最大木造建筑之一，卢舍那大佛高15米。大佛鼻孔柱洞"钻过去"能开运，孩子们排队钻洞。' },
      { id: 'nara_kasuga', name: '春日大社', icon: '⛩️', price: 0, desc: '三千座石灯笼与吊灯笼的森林神社，鹿也在这里"参拜"。紫藤花开时如紫色瀑布。' },
      { id: 'nara_heijo', name: '平城宫迹', icon: '🏛️', price: 0, desc: '世界遗产，1200年前的都城朱雀门复原。大极殿气势恢宏，"遣唐使"时代的国际都市记忆。' },
      { id: 'nara_horyuji', name: '法隆寺', icon: '🛕', price: 40, desc: '世界最古老的木构建筑群（607年）。五重塔与金堂，"佛教传来的原点"。' },
      { id: 'nara_naramachi', name: '奈良町·元兴寺', icon: '🏮', price: 0, desc: '老町屋改的咖啡店与杂货铺。奈良人偶与墨的老铺，慢悠悠的"古都后巷"。' },
      { id: 'nara_yakushi', name: '药师寺', icon: '🛕', price: 40, desc: '东塔被称为"冻结的音乐"，三重塔比例绝美。玄奘三藏院供着西安玄奘顶骨分骨。' },
    ],
    souvenirs: [
      { id: 'nara_kakinoha', name: '柿叶寿司', icon: '🍣', tag: '食', type: '美食', price: 50, desc: '柿叶包裹的鲭鱼押寿司，"古都的保存食"。柿叶抗菌防腐，一口一个咸鲜。' },
      { id: 'nara_toka', name: '奈良漬', icon: '🥒', tag: '食', type: '特产', price: 40, desc: '酒糟腌制的白瓜咸甜带酒香。配茶泡饭，"千年古都的味道"。' },
      { id: 'nara_senbei', name: '鹿仙贝', icon: '🦌', tag: '食', type: '美食', price: 3, desc: '喂鹿专用米糠麦麸饼，鹿群"鞠躬讨食"。买一包体验"被鹿包围"的快乐。' },
      { id: 'nara_chagayu', name: '茶粥套餐', icon: '🍵', tag: '食', type: '美食', price: 45, desc: '焙茶煮粥配奈良渍与胡麻豆腐。古都的"茶饭"传统，清淡养生。' },
      { id: 'nara_sumi', name: '奈良墨', icon: '🖋️', tag: '衣', type: '文创', price: 100, desc: '奈良墨占日本产墨九成，"南都油烟墨"。文房爱好者必收，磨墨时墨香清幽。' },
      { id: 'nara_itto', name: '一刀雕鹿偶', icon: '🦌', tag: '衣', type: '文创', price: 80, desc: '一刀雕的小鹿木偶憨态可掬。奈良传统工艺，"带一只木鹿回家"。' },
      { id: 'nara_deer_wenxue', name: '鹿文创全家桶', icon: '🦌', tag: '衣', type: '文创', price: 40, desc: '小鹿饼干、鹿角发夹、鹿蹄印冰箱贴。奈良的"鹿经济"文创，萌力十足。' },
      { id: 'nara_sabi', name: '赤肤烧陶器', icon: '🏺', tag: '衣', type: '文创', price: 150, desc: '奈良传统茶陶"赤肤烧"，红褐色调古朴。茶道具收藏级。' },
      { id: 'nara_deer_feeding', name: '鹿仙贝投喂体验', icon: '🫓', tag: '玩', type: '体验', price: 3, desc: '举起仙贝鹿群围拢，"鹿的鞠躬"是讨食绝技。拍照时护好纸袋——鹿会吃纸。' },
      { id: 'nara_yuzuruha', name: '若草山夜景', icon: '🌄', tag: '玩', type: '体验', price: 30, desc: '若草山烧山祭（1月）火光染红夜空。平日登顶俯瞰奈良盆地，鹿群散落在草坡。' },
      { id: 'nara_kimono', name: '古都和服漫步', icon: '👘', tag: '玩', type: '体验', price: 250, desc: '穿和服在鹿群与古寺间漫步。奈良的"鹿与和服"同框，经典构图。' },
      { id: 'nara_minsu', name: '町屋民宿', icon: '🏨', tag: '住', type: '住宿', price: 300, desc: '奈良町老町屋民宿，庭院里有石佛。夜里安静，鹿鸣偶尔传来。' },
    ],
    stories: [
      { id: 'nara_story_deer', name: '鹿是"神的使者"', icon: '🦌', desc: '春日大社祭神骑白鹿而来，鹿从此被奉为神使。伤害鹿在古时是死罪，如今鹿仍"自由执业"。' },
      { id: 'nara_story_bow', name: '鹿会鞠躬讨食', icon: '🙇', desc: '奈良鹿讨食时会连续鞠躬，像"受过礼仪培训"。动物学家研究：这是讨食习性与低头动作的结合。' },
      { id: 'nara_story_todaiji', name: '大佛的"开眼"仪式', icon: '🙏', desc: '752年大佛开眼法会动用一万僧侣。大佛几次被战火烧毁又重建，"不屈的金铜佛"。' },
      { id: 'nara_story_horyuji', name: '世界最老的木建筑', icon: '🛕', desc: '法隆寺金堂建于7世纪末，比中国现存最老木构还早。"飞鸟时代"的工艺至今稳固。' },
      { id: 'nara_story_todaiji_hole', name: '钻大佛鼻孔开运', icon: '🕳️', desc: '东大寺柱底的洞与大佛鼻孔同大，钻过即"开运"。大人也能钻，排队一小时"钻个好运"。' },
      { id: 'nara_story_deerbiscuit', name: '鹿仙贝的百年配方', icon: '🫓', desc: '鹿仙贝无糖无盐，1892年就开始制作。鹿爱吃但"不伤鹿"，配方被严格管理。' },
    ],
  });
})();
