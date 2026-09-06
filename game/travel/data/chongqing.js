/* ============ 重庆 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'chongqing',
    name: '重庆',
    country: '中国',
    cc: 'CN',
    province: '重庆',
    flag: '🇨🇳',
    region: '西南',
    hero: '🌶️',
    desc: '8D魔幻山城：轻轨穿楼、洪崖洞夜色如《千与千寻》，火锅的红油翻滚着江湖气，导航在这里都会迷路。',
    travel: [{ name: '高铁', icon: '🚄', cost: 280 }, { name: '飞机', icon: '✈️', cost: 600 }],
    visa: null,
    spots: [
      { id: 'chongqing_hongyadong', name: '洪崖洞', icon: '🏮', price: 0, desc: '11层吊脚楼群依崖而建，夜景神似《千与千寻》。1楼和11楼都是马路，"魔幻山城"的官方名片。' },
      { id: 'chongqing_qinggui', name: '李子坝轻轨穿楼', icon: '🚇', price: 0, desc: '轨道2号线从8层居民楼中穿过，全国独一份。楼下观景平台举手机的人比乘客多，"穿楼名场面"。' },
      { id: 'chongqing_ciqikou', name: '磁器口古镇', icon: '🏮', price: 0, desc: '千年水陆码头，陈麻花排队最凶。茶馆里川剧变脸，江边有"码头文化"的记忆。' },
      { id: 'chongqing_changjiang', name: '长江索道', icon: '🚡', price: 30, desc: '"万里长江第一条空中走廊"，4分钟横渡长江。轿厢晃晃悠悠，脚下是滚滚江水与码头旧影。' },
      { id: 'chongqing_wansheng', name: '武隆天生三桥', icon: '🏞️', price: 135, desc: '世界自然遗产，三座天然石拱桥震撼。《变形金刚4》取景地，地缝天坑"大地之眼"。' },
      { id: 'chongqing_ekan', name: '鹅岭二厂·山城步道', icon: '🪜', price: 0, desc: '老印刷厂改的文创园，《从你的全世界路过》取景地。山城第三步道爬坡上坎，"重庆的立体日常"。' },
      { id: 'chongqing_dazu', name: '大足石刻', icon: '🙏', price: 115, desc: '世界文化遗产，唐宋石刻艺术巅峰。千手观音830只手金光闪耀，"东方艺术明珠"。' },
    ],
    souvenirs: [
      { id: 'chongqing_huoguo', name: '九宫格老火锅', icon: '🍲', tag: '食', type: '美食', price: 120, desc: '牛油锅底咕嘟冒泡，毛肚"七上八下"。中间格涮菜、十字格煮食，"重庆人的火锅礼仪"。' },
      { id: 'chongqing_xiaomian', name: '重庆小面', icon: '🍜', tag: '食', type: '美食', price: 15, desc: '麻辣鲜香的碱水面，"豌杂面"是进阶版。板凳面庄蹲着吃，"小面50强"各有拥趸。' },
      { id: 'chongqing_chuanchuan', name: '串串香·冷串串', icon: '🍢', tag: '食', type: '美食', price: 60, desc: '签签牛肉数签结账，红油锅底够味。李串串老店排队，"重庆人的深夜食堂"。' },
      { id: 'chongqing_youyu', name: '酸辣粉·烤脑花', icon: '🍜', tag: '食', type: '美食', price: 20, desc: '酸辣粉红薯粉弹牙酸辣。烤脑花绵密如芝士，"勇者的美味"，磁器口必尝。' },
      { id: 'chongqing_chenpi', name: '陈麻花·火锅底料', icon: '🥨', tag: '食', type: '特产', price: 40, desc: '磁器口陈麻花甜咸双味咔嚓脆。火锅底料打包回家，"重庆的味道可以快递"。' },
      { id: 'chongqing_pijiucheng', name: '江小白·梅见', icon: '🍶', tag: '食', type: '饮品', price: 30, desc: '重庆产的小曲清香酒，文案走红全网。梅见青梅酒配火锅，"解辣神器"。' },
      { id: 'chongqing_3d', name: '8D山城文创', icon: '🏙️', tag: '衣', type: '文创', price: 40, desc: '轻轨穿楼冰箱贴、立体地图 T恤。"导航失灵"的山城，文创都在玩立体。' },
      { id: 'chongqing_shuke', name: '蜀绣·大足石刻文创', icon: '🧵', tag: '衣', type: '文创', price: 90, desc: '蜀绣熊猫双面绣，大足石刻千手观音书签。石刻美学"掌上化"。' },
      { id: 'chongqing_suodao2', name: '凯旋路电梯·皇冠大扶梯', icon: '🛗', tag: '行', type: '体验', price: 10, desc: '中国最长坡地扶梯112米长。坐电梯下山、坐扶梯过江，"重庆交通的魔幻日常"。' },
      { id: 'chongqing_yezijing', name: '南山一棵树夜景', icon: '🌃', tag: '玩', type: '体验', price: 30, desc: '俯瞰渝中半岛夜色的最佳观景台。"小香港"的灯火层层叠叠铺满山城。' },
      { id: 'chongqing_kaoyu', name: '两江游船', icon: '🚢', tag: '玩', type: '体验', price: 158, desc: '夜游长江嘉陵江交汇处，洪崖洞金色倒影。朝天门码头出发，"立体山城的水上视角"。' },
      { id: 'chongqing_minsu', name: '江景吊脚楼民宿', icon: '🏨', tag: '住', type: '住宿', price: 350, desc: '洪崖洞旁的江景房，夜里灯火如画。清晨被楼下小面香唤醒，"山城的早晨"。' },
    ],
    stories: [
      { id: 'chongqing_story_dao', name: '导航在重庆会"哭"', icon: '🗺️', desc: '重庆立体交通让导航晕头转向：负一楼出口、平层进楼。本地人指路："往上走"，外地人："哪是上？"' },
      { id: 'chongqing_story_lou', name: '楼顶是马路的城市', icon: '🏙️', desc: '重庆1楼出门是马路，坐电梯上11楼还是马路。"平行世界"的山城地形，全球罕见。' },
      { id: 'chongqing_story_huo', name: '火锅的"码头起源"', icon: '🍲', desc: '火锅起源于朝天门码头纤夫的"水八块"。牛下水配辣椒花椒，江湖菜的鼻祖。' },
      { id: 'chongqing_story_kan', name: '《千与千寻》的"重庆分寻"', icon: '🏮', desc: '洪崖洞夜景神似宫崎骏动画，全网喊它"千与千寻重庆分寻"。官方没承认，游客都认了。' },
      { id: 'chongqing_story_shugu', name: '"雾都"与"火炉"', icon: '🔥', desc: '重庆夏天40度、冬天云雾缭绕。"火炉+雾都"双称号，冰粉与火锅同样火爆。' },
      { id: 'chongqing_story_bangbang', name: '消失中的"棒棒军"', icon: '🧗', desc: '山城地形催生了扛货的"棒棒军"，一根竹棒爬遍坡坎。如今逐渐消失，成了城市的集体记忆。' },
    ],
  });
})();
