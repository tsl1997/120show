/* ============ 韩国·首尔 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'seoul',
    name: '首尔',
    country: '韩国',
    cc: 'KR',
    flag: '🇰🇷',
    region: '东亚',
    hero: '🏯',
    desc: '汉江奇迹的心脏：景福宫的韩服少女、北村的青瓦巷、江南的霓虹与明洞的烤肉香，K文化在这座城里昼夜不停。',
    travel: [{ name: '飞机', icon: '✈️', cost: 1600 }, { name: '轮船', icon: '🛳️', cost: 900 }],
    visa: { cost: 280, note: '韩国旅游签证（C-3，旅行社代办）' },
    spots: [
      { id: 'seoul_gyeongbok', name: '景福宫', icon: '🏯', price: 20, desc: '朝鲜王朝正宫，"勤政殿"匾额高悬。穿韩服进宫免门票，光化门前换岗仪式鼓乐齐鸣，一步一景皆韩剧。' },
      { id: 'seoul_bukchon', name: '北村韩屋村', icon: '🏘️', price: 0, desc: '六百年的青瓦小巷层层叠在山坡上。巷口挂着"安静参观"木牌，韩屋院落里飘着茶香与檐铃。' },
      { id: 'seoul_namsan', name: 'N首尔塔·南山', icon: '🗼', price: 40, desc: '山顶塔身的"爱情锁"挂了成千上万把。夜晚俯瞰首尔，汉江大桥像发光的琴弦铺开。' },
      { id: 'seoul_myungdong', name: '明洞', icon: '🛍️', price: 0, desc: '韩妆与街头的美食宇宙：辣炒年糕、糖饼、现烤鱼糕。美妆店员举着小样在门口"抢人"，热闹到离谱。' },
      { id: 'seoul_gangnam', name: '江南·K-Star Road', icon: '🌃', price: 0, desc: '《江南style》唱火的富人区，KPOP 经纪公司扎堆。狎鸥亭罗德奥街的时尚浓度，肉眼可见地"顶"。' },
      { id: 'seoul_hongdae', name: '弘大街头演出', icon: '🎸', price: 0, desc: '周末夜晚弘大街头变身露天演唱会，练习生、乐队、舞团轮番开麦。围一圈就是一场免费的青春盛宴。' },
      { id: 'seoul_changdeok', name: '昌德宫·后苑', icon: '🌳', price: 30, desc: '联合国世界遗产，后苑的芙蓉池亭是韩国园林巅峰。古树三百年苍苍，秋天红枫铺满甬道。' },
      { id: 'seoul_dongdaemun', name: '东大门设计广场·夜市', icon: '🏗️', price: 0, desc: '扎哈设计的银色流线建筑夜里像外星飞船。隔壁夜市通宵营业，麻药玉米、烤鸡爪是深夜顶流。' },
    ],
    souvenirs: [
      { id: 'seoul_samgyetang', name: '参鸡汤', icon: '🍲', tag: '食', type: '美食', price: 130, desc: '整童子鸡塞糯米人参红枣炖到脱骨，汤白如奶。韩国人"以热制热"的伏天标配，喝完汗都带着人参味。' },
      { id: 'seoul_bulgogi', name: '韩式烤肉', icon: '🥩', tag: '食', type: '美食', price: 150, desc: '炭火现烤雪花牛五花，生菜包肉配蒜瓣辣酱。服务员帮烤还帮剪，"包饭"手势学会了才算入门。' },
      { id: 'seoul_bibimbap', name: '石锅拌饭', icon: '🍚', tag: '食', type: '美食', price: 70, desc: '滚烫石锅把锅巴烙得金黄，拌入辣酱与煎蛋。彩虹配菜先拍照再搅拌，是韩国料理的仪式。' },
      { id: 'seoul_tteokbokki', name: '辣炒年糕', icon: '🍢', tag: '食', type: '美食', price: 40, desc: '甜辣酱裹着年糕鱼饼咕嘟冒泡。路摊三件套：炒年糕、鱼糕串、血肠，站着吃完才算地道。' },
      { id: 'seoul_kimchi', name: '泡菜·鱼糕', icon: '🥬', tag: '食', type: '特产', price: 50, desc: '辣白菜、萝卜块装盒带走，机场有真空包装款。韩国人的冰箱哲学：没有泡菜的饭桌不完整。' },
      { id: 'seoul_makgeolli', name: '烧酒·玛格丽米酒', icon: '🍶', tag: '食', type: '饮品', price: 25, desc: '绿瓶烧酒配炸鸡，或乳白玛格丽配煎饼。"配（喝法）"文化：烧酒混啤酒叫"炸弹"。' },
      { id: 'seoul_cosmetic', name: '韩妆护肤', icon: '💄', tag: '衣', type: '特产', price: 120, desc: '面膜买十送五、小样塞满购物袋。明洞美妆店柜姐中文十级，买单像一场快闪活动。' },
      { id: 'seoul_kpop', name: 'KPOP专辑·周边', icon: '💿', tag: '衣', type: '文创', price: 100, desc: '专辑开箱抽小卡、应援棒、明星同款。追星女孩的钱包在明洞和弘大之间反复横跳。' },
      { id: 'seoul_hanbok', name: '韩服租赁', icon: '👘', tag: '玩', type: '体验', price: 120, desc: '两小时韩服体验，穿去景福宫免费入宫。裙摆拖过青瓦巷，路人会用韩语夸你"漂亮"。' },
      { id: 'seoul_sauna', name: '汗蒸幕', icon: '🧖', tag: '玩', type: '体验', price: 80, desc: '盐房、黄土房、冰雪房轮着蒸，出来裹着羊角帽吃水煮蛋。韩剧同款"搓澡一条龙"，通宵也能睡。' },
      { id: 'seoul_noryangjin', name: '鹭梁津水产市场', icon: '🦀', tag: '玩', type: '体验', price: 180, desc: '一楼买活蟹活章鱼，二楼现加工。会动的章鱼刺身挑战勇气，老板娘用中文喊"帅哥尝尝"。' },
      { id: 'seoul_karaoke', name: '练歌房K歌', icon: '🎤', tag: '玩', type: '体验', price: 50, desc: '韩式练习室小包厢，铃鼓和音效帮腔。唱一首骑马舞神曲全场起立，不唱完不许走。' },
      { id: 'seoul_hotel', name: '明洞商务酒店', icon: '🏨', tag: '住', type: '住宿', price: 450, desc: '楼下就是夜市街，快递小哥和炸鸡车同框。韩国酒店赠品是泡面，深夜食堂自带。' },
    ],
    stories: [
      { id: 'seoul_story_hanbok', name: '韩服免票进宫', icon: '👘', desc: '穿韩服游景福宫免门票，于是宫墙内外满是"朝鲜少女"。游客和本地人都夸：这是推广传统最聪明的一招。' },
      { id: 'seoul_story_kpop', name: '江南style的遗产', icon: '💃', desc: '2012年《江南style》让全球记住了"江南"，如今狎鸥亭还有骑马舞涂鸦。一首歌带火一个区的行情，世界罕见。' },
      { id: 'seoul_story_love', name: '南山爱情锁', icon: '🔒', desc: 'N首尔塔的栏杆被爱情锁挂满，锁墙重到需要定期清理。情侣仪式感拉满，情侣锁从巴黎一路火到首尔。' },
      { id: 'seoul_story_hongdae', name: '弘大的"练习生街头"', icon: '🎤', desc: '弘大街头演出是偶像预备役的战场，不少团体成名前都在这里开麦。观众说：免费的舞台，未来的巨星。' },
      { id: 'seoul_story_food', name: '炸鸡配酒的"炸鸡文化"', icon: '🍗', desc: '韩剧《来自星星的你》一句"初雪配炸鸡啤酒"带火全网。首尔炸鸡店密度全球第一，深夜的外卖摩托都是鸡香。' },
      { id: 'seoul_story_dongdaemun', name: '东大门的"不夜城"', icon: '🌙', desc: '东大门批发市场凌晨营业，全球买手飞来扫货。设计广场亮灯时，时尚与市井在同一条街上交接班。' },
    ],
  });
})();
