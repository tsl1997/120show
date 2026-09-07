/* ============ 肯尼亚·内罗毕 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'nairobi',
    name: '内罗毕',
    country: '肯尼亚',
    cc: 'KE',
    flag: '🇰🇪',
    region: '非洲',
    hero: '🦁',
    desc: '"东非小巴黎"：城市里的国家公园有狮子散步，马赛马拉的动物大迁徙在两小时车程外，赤道上的日出是金色的。',
    travel: [{ name: '飞机', icon: '✈️', cost: 8000 }],
    visa: { cost: 450, note: '电子旅行授权（eTA）' },
    spots: [
      { id: 'nairobi_park', name: '内罗毕国家公园', icon: '🦁', price: 300, desc: '全球唯一"城市里的野生动物园"，长颈鹿背后就是摩天楼。狮子、犀牛、猎豹全在，"闹市里的非洲"。' },
      { id: 'nairobi_mara', name: '马赛马拉一日飞行游', icon: '🦓', price: 1800, desc: '小飞机45分钟到马拉草原，追逐角马大迁徙。热气球清晨飞越兽群，"动物世界的实况直播"。' },
      { id: 'nairobi_giraffe', name: '长颈鹿中心', icon: '🦒', price: 60, desc: '罗斯柴尔德长颈鹿伸出紫色舌头"抢"你手里的饲料丸。亲吻长颈鹿是保留节目，"两米高的吻"。' },
      { id: 'nairobi_elephant', name: '小象孤儿院', icon: '🐘', price: 40, desc: '大象孤儿喝奶瓶、玩泥巴、勾着饲养员的手。认养一头小象，"每周收到成长日记"。' },
      { id: 'nairobi_museum', name: '肯尼亚国家博物馆', icon: '🦴', price: 80, desc: '人类祖先"图尔卡纳男孩"化石在此，一百六十万年前。鸟厅与蛇园同馆，"人类的摇篮"教科书。' },
      { id: 'nairobi_karen', name: '卡伦·布里克森博物馆', icon: '🏡', price: 60, desc: '《走出非洲》作者的咖啡农场老宅。咖啡树与蓝花楹，"丹麦女子的非洲岁月"。' },
      { id: 'nairobi_bomas', name: 'Bomas 民俗村', icon: '🥁', price: 50, desc: '各族传统村落与巨型剧院，鼓乐舞表演一场一小时。马赛族的弹跳舞，"垂直起跳"惊艳。' },
    ],
    souvenirs: [
      { id: 'nairobi_nyama', name: '百兽烤肉宴', icon: '🍖', tag: '食', type: '美食', price: 200, desc: '鳄鱼肉、鸵鸟肉、羚羊肉轮番上剑。"野味自助"在 Carnivore 餐厅，旗子插桌上=继续上肉。' },
      { id: 'nairobi_ugali', name: '乌伽黎配烤肉', icon: '🍚', tag: '食', type: '美食', price: 40, desc: '玉米粉揉成的主食团，蘸着肉汁与蔬菜吃。肯尼亚人的"手抓能量球"，配 sukuma 炒羽衣甘蓝。' },
      { id: 'nairobi_chapati', name: '印度薄饼', icon: '🫓', tag: '食', type: '美食', price: 20, desc: '移民带来的 Chapati 在肯尼亚"本地化"。街边现烙配豆汤，"斯瓦希里早餐"。' },
      { id: 'nairobi_tusker', name: '图斯克啤酒', icon: '🍺', tag: '食', type: '饮品', price: 30, desc: '"大象牌"国民啤酒，标签是两头象牙。日落时在帐篷营地开一瓶，"草原上的干杯"。' },
      { id: 'nairobi_coffee', name: '肯尼亚AA咖啡', icon: '☕', tag: '食', type: '特产', price: 120, desc: '赤道高地的黑醋栗果酸，"咖啡界红酒"。咖啡合作社参观烘焙，直购最划算。' },
      { id: 'nairobi_tea', name: '肯尼亚红茶', icon: '🍵', tag: '食', type: '特产', price: 60, desc: '全球最大红茶出口国的"柴火味"。Kericho 茶园绿浪起伏，一杯奶茶加一勺糖。' },
      { id: 'nairobi_masai_blanket', name: '马赛红格毯', icon: '🟥', tag: '衣', type: '服饰', price: 150, desc: '马赛族的红色格纹毯（Shuka），"草原防风衣"。披上拍照，"与牧羊人同框"。' },
      { id: 'nairobi_beadwork', name: '马赛串珠手环', icon: '📿', tag: '衣', type: '文创', price: 80, desc: '马赛女性手作的色彩密码：红=勇敢、蓝=天空。买一串支持手工艺合作社，"戴在手上的草原"。' },
      { id: 'nairobi_wood', name: '木雕动物', icon: '🦒', tag: '衣', type: '文创', price: 100, desc: '乌木雕的大象、五兽纪念摆件（Big Five）。机场免税区的"动物方舟"，一提一盒。' },
      { id: 'nairobi_safari', name: '热气球看日出', icon: '🎈', tag: '玩', type: '体验', price: 3200, desc: '清晨草原升空，角马群在脚下如蚁行。落地后的香槟早餐配"飞行证书"，"最贵的浪漫之一"。' },
      { id: 'nairobi_camping', name: '帐篷营地过夜', icon: '⛺', tag: '住', type: '住宿', price: 600, desc: '帐篷里有床有浴缸，狮子吼声是"白噪音"。夜晚篝火边听向导讲兽群故事，"非洲的摇篮曲"。' },
    ],
    stories: [
      { id: 'nairobi_story_migration', name: '动物大迁徙的"马拉松"', icon: '🦓', desc: '两百万角马斑马每年绕马拉河迁徙三千公里，渡河时鳄鱼埋伏。"地球上最壮观的迁徙"全年无休。' },
      { id: 'nairobi_story_city_park', name: '城市公园里的狮子', icon: '🦁', desc: '内罗毕国家公园紧贴市中心，狮子偶尔在公路边"看车"。全世界独一份的"摩天楼背景 Safari"。' },
      { id: 'nairobi_story_maasai', name: '马赛人的"弹跳舞"', icon: '🦘', desc: '马赛武士垂直起跳比谁高，跳得越高越受尊敬。红格毯+弹跳，"草原上的选秀"。' },
      { id: 'nairobi_story_kanga', name: '康加布上的"情话"', icon: '📜', desc: '康加布印着斯瓦希里谚语，母亲把"情话布"当礼物传给女儿。一条布，"流动的诗歌"。' },
      { id: 'nairobi_story_hakuna', name: '"Hakuna Matata"不是台词', icon: '🌟', desc: '狮子王的这句"没问题"是真实的斯瓦希里语日常用语。肯尼亚人挂在嘴边，游客学会的第一句话。' },
      { id: 'nairobi_story_elephant', name: '小象的"奶瓶奋斗"', icon: '🐘', desc: '小象孤儿院的小象用鼻子卷奶瓶，摔了会闹脾气。饲养员睡在旁边当"象妈妈"，"认养制度"全球网友云养象。' },
    ],
  });
})();
