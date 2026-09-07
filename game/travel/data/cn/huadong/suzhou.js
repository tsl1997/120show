/* ============ 江苏·苏州 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'suzhou',
    name: '苏州',
    country: '中国',
    cc: 'CN',
    province: '江苏',
    flag: '🇨🇳',
    region: '华东',
    hero: '🌉',
    desc: '"上有天堂，下有苏杭"：拙政园的移步换景，平江路的评弹吴语，一碗苏式汤面浇头讲究，园林之城把精致刻进了骨子里。',
    travel: [{ name: '高铁', icon: '🚄', cost: 380 }, { name: '飞机', icon: '✈️', cost: 750 }],
    visa: null,
    spots: [
      { id: 'suzhou_zhuozheng', name: '拙政园', icon: '🌿', price: 80, desc: '中国四大名园之首，"一步一景"的江南园林巅峰。借景北寺塔的构图绝了，夏天荷花满池，雨打芭蕉更有味。' },
      { id: 'suzhou_liuyuan', name: '留园·网师园', icon: '🏡', price: 55, desc: '留园冠云峰亭亭玉立，网师园是"小园极则"。夜游网师园有昆曲演出，园林夜宴梦回明清。' },
      { id: 'suzhou_huqiu', name: '虎丘', icon: '⛰️', price: 70, desc: '"到苏州不游虎丘乃憾事也"——苏东坡说的。斜塔云岩寺塔比比萨斜塔还早，剑池下藏着吴王阖闾墓之谜。' },
      { id: 'suzhou_pingjiang', name: '平江路·山塘街', icon: '🌉', price: 0, desc: '800年格局未变的水巷，摇橹船欸乃而过。评弹声从茶馆飘出，"君到姑苏见，人家尽枕河"。' },
      { id: 'suzhou_beisita', name: '北寺塔·盘门三景', icon: '🛕', price: 0, desc: '北寺塔是苏州古城制高点。盘门是中国唯一水陆并列城门，"吴都八门"的水门闸口仍在。' },
      { id: 'suzhou_bowuguan', name: '苏州博物馆', icon: '🏛️', price: 0, desc: '贝聿铭封山之作，"中而新、苏而新"。片石假山以壁为纸、以石为绘，馆藏秘色瓷莲花碗是国宝。' },
      { id: 'suzhou_jinji', name: '金鸡湖·诚品书店', icon: '🌃', price: 0, desc: '园区摩天楼天际线与古典苏州形成对望。东方之门"秋裤楼"打卡，诚品书店通宵购书的文艺地标。' },
    ],
    souvenirs: [
      { id: 'suzhou_tangmian', name: '苏式汤面', icon: '🍜', tag: '食', type: '美食', price: 25, desc: '"头汤面"是苏州人的仪式感：枫镇大肉面、三虾面。浇头几十种，面细如银丝汤清而不寡。' },
      { id: 'suzhou_yuebing', name: '苏式鲜肉月饼', icon: '🥮', tag: '食', type: '美食', price: 10, desc: '现烤酥皮一咬掉渣，鲜肉馅汁水丰盈。长发西饼、胥城大厦的队伍排出半条街。' },
      { id: 'suzhou_songshu', name: '松鼠桂鱼', icon: '🐟', tag: '食', type: '美食', price: 120, desc: '炸得形如松鼠浇糖醋汁"吱吱"作响。苏帮菜的排面担当，造型与味道双杀。' },
      { id: 'suzhou_gao', name: '桂花糕·青团', icon: '🍡', tag: '食', type: '美食', price: 15, desc: '桂花拉糕黏糯不粘牙，青团豆沙春日限定。采芝斋的老味，配一壶碧螺春正好。' },
      { id: 'suzhou_biluochun', name: '碧螺春', icon: '🍵', tag: '食', type: '特产', price: 120, desc: '洞庭东西山的"吓煞人香"，一嫩三鲜。明前茶卷曲如螺，白毫隐翠，杯中"春满江南"。' },
      { id: 'suzhou_cixiu', name: '苏绣', icon: '🪡', tag: '衣', type: '文创', price: 150, desc: '四大名绣之首，双面绣猫"正反如一"。一根丝线劈成六十四分之一，绣娘的手是 microscope。' },
      { id: 'suzhou_silk', name: '丝绸围巾', icon: '🧣', tag: '衣', type: '服饰', price: 180, desc: '苏州丝绸博物馆旁的真丝围巾，宋锦缎面。"蚕桑之乡"的温柔，送长辈最合适。' },
      { id: 'suzhou_yuanlin', name: '园林文创', icon: '🪟', tag: '衣', type: '文创', price: 45, desc: '花窗、太湖石造型冰箱贴与折扇。"移步换景"做成文具，桌上一角江南。' },
      { id: 'suzhou_pipa', name: '评弹体验', icon: '🎻', tag: '玩', type: '体验', price: 80, desc: '平江路茶馆听吴侬软语弹词开篇。听不懂词也醉了，琵琶三弦叮咚入梦。' },
      { id: 'suzhou_chuan', name: '摇橹船水巷游', icon: '🛶', tag: '行', type: '体验', price: 60, desc: '摇橹阿姨哼着小调穿水巷，两岸枕河人家。船娘吴歌一开嗓，"苏州的声音"。' },
      { id: 'suzhou_hanfu', name: '园林汉服旅拍', icon: '📸', tag: '玩', type: '体验', price: 250, desc: '穿宋制汉服在拙政园拍写真，月洞门与花窗入镜。"园林+汉服"是苏州旅拍的顶配。' },
      { id: 'suzhou_minsu', name: '临水民宿', icon: '🏨', tag: '住', type: '住宿', price: 450, desc: '平江路深处的白墙黛瓦民宿，推窗就是小桥流水。夜里评弹声隐约，一枕江南。' },
    ],
    stories: [
      { id: 'suzhou_story_yuanlin', name: '园林的"框景魔法"', icon: '🪟', desc: '苏州园林用月洞门、花窗做"画框"，一框一景。设计师说：园林不是房子多，是"看不见的地方"多。' },
      { id: 'suzhou_story_tangmian', name: '头汤面的执念', icon: '🍜', desc: '面馆五点半开门，老苏州六点前到店才喝得上"头汤"。第二碗起汤就"浑"了，讲究人的倔强。' },
      { id: 'suzhou_story_xietajie', name: '蟹壳黄与"苏州胃"', icon: '🥮', desc: '苏州人吃面要"宽汤硬面重青"，点心讲究"应季而食"。不时不食是苏州人的时间表。' },
      { id: 'suzhou_story_shuimo', name: '评弹的"苏州FM"', icon: '🎻', desc: '老苏州早晨泡茶馆听评弹一下午，"书场"就是当年的广播电台。吴语的软糯，被称为"最温柔的中国话"。' },
      { id: 'suzhou_story_shuangmian', name: '双面绣的"两面派"', icon: '🪡', desc: '双面绣正反两面图案一样精美，猫眼两面瞳色不同。绣娘劈线细到放大镜才看得清，"指尖上的奇迹"。' },
      { id: 'suzhou_story_ximen', name: '盘门水门的智慧', icon: '🌉', desc: '水门闸口可放可断，既通船又御敌。2500年前的水城设计，如今仍在使用——"活着的古城规划"。' },
    ],
  });
})();
