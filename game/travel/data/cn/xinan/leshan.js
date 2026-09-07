/* ============ 四川·乐山 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'leshan',
    name: '乐山',
    country: '中国',
    cc: 'CN',
    province: '四川',
    flag: '🇨🇳',
    region: '西南',
    hero: '🗿',
    desc: '大佛脚下的小城：世界最大石刻坐佛守望三江，峨眉山金顶云海佛光，钵钵鸡与跷脚牛肉撑起"四川美食指数"。',
    travel: [{ name: '高铁', icon: '🚄', cost: 330 }, { name: '飞机', icon: '✈️', cost: 700 }],
    visa: null,
    spots: [
      { id: 'leshan_dafu', name: '乐山大佛', icon: '🗿', price: 80, desc: '71米的弥勒坐佛"山是一尊佛，佛是一座山"。开凿90年治水患，九曲栈道贴壁而下，佛脚仰望最震撼。' },
      { id: 'leshan_emei', name: '峨眉山', icon: '⛰️', price: 160, desc: '四大佛教名山之一，金顶十方普贤金像耀眼。猴子"抢劫"背包成常态，云海日出与佛光齐观。' },
      { id: 'leshan_wannian', name: '万年寺·清音阁', icon: '🛕', price: 0, desc: '万年寺无梁砖殿与普贤铜像千年不损。清音阁双桥清音，"峨眉山水最秀处"。' },
      { id: 'leshan_diaolou', name: '东方佛都·乌木博物馆', icon: '🏛️', price: 80, desc: '三千余尊佛像群雕，"佛国世界的复刻"。乌木博物馆阴沉木雕巧夺天工。' },
      { id: 'leshan_shangzhong', name: '上中顺美食街', icon: '🍢', price: 0, desc: '乐山小吃宇宙中心：钵钵鸡、甜皮鸭、油炸串串。本地人从街头吃到巷尾，"味蕾马拉松"。' },
      { id: 'leshan_jiajiang', name: '夹江千佛岩', icon: '🛕', price: 0, desc: '青衣江畔2400余尊唐代摩崖造像。"千佛岩"比大佛更小众，水声与佛影相伴。' },
      { id: 'leshan_zhuhai', name: '沐川竹海·黑竹沟', icon: '🎋', price: 60, desc: '沐川竹海十万亩楠竹涛声，"天然氧吧"。黑竹沟号称"中国百慕大"，神秘探险地。' },
    ],
    souvenirs: [
      { id: 'leshan_boboji', name: '钵钵鸡', icon: '🍗', tag: '食', type: '美食', price: 30, desc: '藤椒油泡着的签签鸡片，红油与藤椒双味。签签一把一把抽，"上瘾的速度像嗑瓜子"。' },
      { id: 'leshan_tiaojiao', name: '跷脚牛肉', icon: '🍲', tag: '食', type: '美食', price: 35, desc: '百年药膳汤底烫牛杂，"跷着脚吃"得名。配干碟蘸水，苏稽镇老店最正宗。' },
      { id: 'leshan_tianpi', name: '甜皮鸭', icon: '🦆', tag: '食', type: '美食', price: 40, desc: '鸭皮刷糖浆炸得焦甜，"乐山人的鸭子"。赵鸭子、纪六孃排队如龙。' },
      { id: 'leshan_doufu', name: '豆腐脑·油炸串串', icon: '🥣', tag: '食', type: '美食', price: 15, desc: '乐山豆腐脑加馓子花生，咸鲜浓稠。油炸串串刷辣椒面，"咔嚓"一声停不下来。' },
      { id: 'leshan_yumi', name: '西坝豆腐', icon: '🧈', tag: '食', type: '美食', price: 60, desc: '西坝镇豆腐宴三百多道菜。"豆腐都能开宴席"，川菜的温柔派。' },
      { id: 'leshan_zhuyashi', name: '竹叶青茶·犍为茉莉', icon: '🍵', tag: '食', type: '特产', price: 90, desc: '峨眉山竹叶青"扁直如竹"，杯中根根立。犍为茉莉花茶香飘三江。' },
      { id: 'leshan_yanshui', name: '沐川乌骨黑鸡·猕猴桃', icon: '🍗', tag: '食', type: '特产', price: 50, desc: '乌骨黑鸡"黑得彻底"，滋补佳品。徐氏猕猴桃红心甜糯，"竹海里的馈赠"。' },
      { id: 'leshan_dafu_wen', name: '大佛文创', icon: '🖼️', tag: '衣', type: '文创', price: 45, desc: '大佛冰箱贴、弥勒"开心"T恤。"乐山大佛微笑"，被做成表情包周边。' },
      { id: 'leshan_foyuan', name: '峨眉山猴文创', icon: '🐒', tag: '衣', type: '文创', price: 40, desc: '灵猴玩偶"抱走你的零食"。峨眉山猴文化文创，被抢过包的人秒懂。' },
      { id: 'leshan_jiaozinian', name: '金顶云海夜宿', icon: '🌄', tag: '玩', type: '体验', price: 0, desc: '金顶住一晚看日出云海与佛光。"运气好能看到七彩光环自己站在中间"。' },
      { id: 'leshan_zhuxie', name: '峨眉山猴群互动', icon: '🐒', tag: '玩', type: '体验', price: 0, desc: '生态猴区买猴粮投喂。护住背包！猴子抢食"快准狠"，"互动=斗智斗勇"。' },
      { id: 'leshan_piwei', name: '三江游船观大佛', icon: '⛴️', tag: '行', type: '体验', price: 70, desc: '游船江上看大佛全景，"只有船上看得到整尊佛"。三江交汇水色分明。' },
      { id: 'leshan_minsu', name: '嘉定坊民宿', icon: '🏨', tag: '住', type: '住宿', price: 240, desc: '大佛旁嘉定坊古街民宿，夜里灯笼亮起。早晨碗钵钵鸡香从街头飘来。' },
    ],
    stories: [
      { id: 'leshan_story_dafu', name: '大佛闭眼的传说', icon: '🗿', desc: '网传大佛曾四次"闭眼流泪"，实为酸雨侵蚀霉变。科学解释之外，民间传说更添神秘。' },
      { id: 'leshan_story_haitong', name: '海通和尚"自目可剜"', icon: '🙏', desc: '开凿大佛的海通和尚为保佛财自挖双眼："自目可剜，佛财难得"。90年凿山，三代人接力。' },
      { id: 'leshan_story_hou', name: '峨眉猴的"江湖规矩"', icon: '🐒', desc: '峨眉猴认袋子不认人，"抢包如闪电"。攻略第一条：塑料袋别拎手里，"背前不背后"。' },
      { id: 'leshan_story_foguang', name: '金顶"佛光"的科学', icon: '🌈', desc: '午后云雾中七彩光环包裹人影，"佛光"是衍射现象。古人认为是佛显灵，如今排队拍照。' },
      { id: 'leshan_story_qiao', name: '跷脚牛肉的"板凳文化"', icon: '🪑', desc: '汤锅店长板凳一翘脚就吃，"跷脚牛肉"由此得名。一碗汤里的百年江湖。' },
      { id: 'leshan_story_sanjiang', name: '三江交汇的水色', icon: '🌊', desc: '岷江、青衣江、大渡河三江汇流，水色分明。大佛正对三江，"镇水"是它的初心。' },
    ],
  });
})();
