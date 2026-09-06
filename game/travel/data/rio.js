/* ============ 巴西·里约热内卢 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'rio',
    name: '里约热内卢',
    country: '巴西',
    cc: 'BR',
    flag: '🇧🇷',
    region: '南美',
    hero: '🏖️',
    desc: '"一月的河"：基督像张开双臂俯瞰海湾，科帕卡巴纳的白沙滩上桑巴不停，一座把热情写进基因的城市。',
    travel: [{ name: '飞机', icon: '✈️', cost: 11000 }],
    visa: { cost: 350, note: '巴西旅游签证（电子签）' },
    spots: [
      { id: 'rio_christ', name: '基督救世主像', icon: '✝️', price: 150, desc: '科尔科瓦多山顶的38米巨像，"世界新七大奇迹"之一。小火车穿过雨林上山，云海从基督脚下漫过时全车安静。' },
      { id: 'rio_sugarloaf', name: '面包山', icon: '⛰️', price: 160, desc: '两段360度旋转缆车登顶，看日落把瓜纳巴拉湾染成金色。山顶小狨猴在栏杆上跳，"里约的天际线观众席"。' },
      { id: 'rio_copacabana', name: '科帕卡巴纳海滩', icon: '🏖️', price: 0, desc: '四公里白色沙滩配波浪纹步道，足球排球沙发全在沙上。凌晨也有人跑步，"海滩即生活"。' },
      { id: 'rio_ipanema', name: '伊帕内玛海滩', icon: '🌅', price: 0, desc: '《伊帕内玛姑娘》唱火的优雅海滩，日落时全城鼓掌。沙滩分段各有"部落"：冲浪、家庭、音乐人。' },
      { id: 'rio_selaron', name: '塞勒隆阶梯', icon: '🪜', price: 0, desc: '智利艺术家用60国瓷砖铺成215级彩阶。红色台阶配上各国瓷片，《Rhythm of the Night》MV与U2都在此取景。' },
      { id: 'rio_sambadrome', name: '桑巴大道·狂欢节', icon: '🎭', price: 600, desc: '每年二月狂欢节，桑巴学校游行通宵达旦。羽毛头饰、花车、鼓点震到胸腔，"地球上最伟大的演出"。' },
      { id: 'rio_maracana', name: '马拉卡纳球场', icon: '⚽', price: 120, desc: '两届世界杯决赛场地，球王贝利打进千球的地方。游客可在草坪踢点球，看台声浪墙还留着历史的回音。' },
    ],
    souvenirs: [
      { id: 'rio_feijoada', name: '黑豆炖肉饭', icon: '🍲', tag: '食', type: '美食', price: 90, desc: '黑豆与猪杂炖足半天，配米饭木薯粉与橙子。"国菜"周六限定，吃完要睡午觉。' },
      { id: 'rio_churrasco', name: '巴西烤肉自助', icon: '🍖', tag: '食', type: '美食', price: 220, desc: '烤肉师持长剑轮番上桌，绿牌翻起就是"继续上肉"。烤菠萝解腻，"肉食者的天堂"。' },
      { id: 'rio_acai', name: '阿萨伊果碗', icon: '🫐', tag: '食', type: '美食', price: 50, desc: '亚马逊紫果打成冰沙碗，铺香蕉格兰诺拉。海滩边的"运动饮料"，冲浪者的标配。' },
      { id: 'rio_caipirinha', name: '卡琵莉亚鸡尾酒', icon: '🍹', tag: '食', type: '饮品', price: 60, desc: '甘蔗酒（Cachaça）捣青柠加糖，"国民鸡尾酒"。沙滩上五美元一杯，微醺看日落。' },
      { id: 'rio_coxinha', name: '鸡肉可乐饼', icon: '🍗', tag: '食', type: '美食', price: 25, desc: '水滴形炸物内藏鸡肉芝士，"巴西街头国民小吃"。配甘蔗汁（Garapa），下午茶双人组。' },
      { id: 'rio_coffee', name: '巴西咖啡', icon: '☕', tag: '食', type: '特产', price: 70, desc: '全球最大咖啡产国的"液体骄傲"。米纳斯咖啡醇厚坚果香，烘焙厂直购最划算。' },
      { id: 'rio_havaianas', name: '哈瓦那人字拖', icon: '🩴', tag: '衣', type: '服饰', price: 90, desc: '巴西国民人字拖，色彩多到眼花。海滩到夜店一双走天下，"巴西人的鞋"。' },
      { id: 'rio_carnival', name: '狂欢节羽毛头饰', icon: '🪶', tag: '衣', type: '服饰', price: 120, desc: '桑巴舞者的羽毛头饰与亮片装。买一顶戴上去桑巴大道，"狂欢节入场券"。' },
      { id: 'rio_hammock', name: '手编吊床', icon: '🛏️', tag: '衣', type: '特产', price: 150, desc: '东北部原住民手编棉吊床，颜色浓烈。海滩挂一棵树，"巴西的下午"就来了。' },
      { id: 'rio_bike_beach', name: '海滩骑行', icon: '🚲', tag: '玩', type: '体验', price: 60, desc: '沿科帕卡巴纳波纹步道骑行，海风带着盐味。日落到伊帕内玛，"骑行看海"。' },
      { id: 'rio_samba_class', name: '桑巴舞课', icon: '💃', tag: '玩', type: '体验', price: 150, desc: '舞蹈老师从髋部律动教起，鼓点一响身体自动跟上。两小时后舞池自由，"里约人天生会跳"。' },
      { id: 'rio_favela_tour', name: '社区（Favela）导览', icon: '🏘️', tag: '玩', type: '体验', price: 200, desc: '由本地居民带路的社会企业导览，看涂鸦与社区生活。买一杯山顶果汁，风景与人生观一起刷新。' },
      { id: 'rio_hotel', name: '海景酒店', icon: '🏨', tag: '住', type: '住宿', price: 700, desc: '科帕卡巴纳正海滩的高层酒店，阳台看日出。楼下沙滩排球声，"里约的闹钟"。' },
    ],
    stories: [
      { id: 'rio_story_christ', name: '基督像被雷劈过', icon: '⚡', desc: '基督像高山上常被雷击，2014年一次击断右手指尖。教会的说法很诗意："上帝也没忍住打了招呼。"' },
      { id: 'rio_story_beach', name: '沙滩是"客厅"', icon: '🏖️', desc: '里约人在沙滩上健身、谈生意、过生日，海滩编号代替地址。老板说"沙滩见"，就真的在沙滩开会。' },
      { id: 'rio_story_girl', name: '伊帕内玛姑娘', icon: '🎵', desc: '1962年一首《伊帕内玛姑娘》让全球记住这道海滩。歌里的高挑身影每天仍会路过，" Bossa nova 的缪斯"。' },
      { id: 'rio_story_samba', name: '桑巴学校的"战争"', icon: '🥁', desc: '狂欢节的桑巴学校按社区组建，一年只为两晚的巡游拼命。冠军揭晓夜全国直播，"社区荣誉高于一切"。' },
      { id: 'rio_story_soccer', name: '全民足球的"沙滩规则"', icon: '⚽', desc: '里约小孩在沙滩学会踢球，"沙地控球"练出细腻脚法。马拉卡纳的球员，很多都是从沙堆里跑出来的。' },
      { id: 'rio_story_safety', name: '"Smart旅行"的课堂', icon: '🛡️', desc: '里约旅行攻略第一条：手机别外露、走大路。游客学会了"低调旅行法"，里约人教你：白天海滩、夜里打车。' },
    ],
  });
})();
