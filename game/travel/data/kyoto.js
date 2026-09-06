/* ============ 日本·京都府 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kyoto',
    name: '京都府',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关西',
    hero: '⛩️',
    desc: '千年古都·平安京的遗韵：一千七百座寺庙静立山水间，祇园的花见小路摇曳着艺伎的裙裾，四季皆是画。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2400 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'kyoto_fushimi', name: '伏见稻荷大社', icon: '⛩️', price: 0, desc: '上万座朱红鸟居沿稻荷山铺成隧道，被称为"千本鸟居"。狐狸石像守着神域，爬到山顶要两小时，每一转身都是名场面。' },
      { id: 'kyoto_kinkakuji', name: '金阁寺', icon: '✨', price: 20, desc: '三层的金箔楼阁倒映在镜湖池中，晴天像一枚浮在水面上的金印。"一休哥"故事里的将军府邸，金得毫无道理又不容置疑。' },
      { id: 'kyoto_arashiyama', name: '岚山竹林·渡月桥', icon: '🎋', price: 0, desc: '高野竹林的小径绿雾弥漫，风一吹竹叶沙沙作响。出"竹林小火车"沿保津川峡谷慢行，秋天红叶染两岸。' },
      { id: 'kyoto_kiyomizu', name: '清水寺', icon: '🏯', price: 20, desc: '悬空的木造舞台由139根柱子撑在崖壁上，"从清水舞台跳下去"是日本谚语。音羽瀑布三股泉水，各许一个愿望。' },
      { id: 'kyoto_gion', name: '祇园·花见小路', icon: '🏮', price: 0, desc: '京都最大的艺伎区，傍晚偶见白色粉颈的舞伎疾行。石板路、木格窗、红灯笼，随便一帧都是《艺伎回忆录》。' },
      { id: 'kyoto_kiyomizuzaka', name: '二年坂·三年坂', icon: '🧱', price: 0, desc: '石板坡道两侧是百年町屋改成的和果子铺与杂货店。穿和服走这段路的人密度全国最高，坡道自带滤镜。' },
      { id: 'kyoto_katsura', name: '京都御所·二条城', icon: '🏛️', price: 40, desc: '德川幕府的京都行在，"莺声地板"走上去会鸣叫防刺客。大政奉还的历史就在这间厅堂里落锤。' },
    ],
    souvenirs: [
      { id: 'kyoto_kaiseki', name: '怀石料理', icon: '🍱', tag: '食', type: '美食', price: 350, desc: '一汁三菜的"高级日料之魂"，旬物摆盘如山水画。豆腐、鲷鱼、栗子各归其位，吃的是季节本身。' },
      { id: 'kyoto_yudofu', name: '汤豆腐', icon: '🍲', tag: '食', type: '美食', price: 100, desc: '南禅寺门前的百年豆腐料理，昆布汤里轻煮嫩豆腐。蘸柚子酱油，清淡到让味蕾重启。' },
      { id: 'kyoto_matcha_full', name: '抹茶全家福', icon: '🍵', tag: '食', type: '美食', price: 80, desc: '抹茶荞麦面、抹茶蕨饼、抹茶白玉一字排开。宇治就在隔壁，京都的"绿色"可以吃一天。' },
      { id: 'kyoto_kyo_wagashi', name: '京果子', icon: '🍡', tag: '食', type: '美食', price: 60, desc: '练切菓子捏成樱花、枫叶、小兔子，一天吃完就过季。配一碗现打抹茶，茶道的入门甜点。' },
      { id: 'kyoto_sake_fushimi', name: '伏见清酒', icon: '🍶', tag: '食', type: '饮品', price: 70, desc: '月桂冠、黄樱的软水清酒甘口顺滑。酒藏一条街可试饮，酒瓶插在河边像小旗子。' },
      { id: 'kyoto_tsukemono', name: '京都渍物', icon: '🥬', tag: '食', type: '特产', price: 40, desc: '千枚渍、柴渍是京都人餐桌的"和食呼吸"。锦市场按克卖，甜咸酸脆全在一小碟里。' },
      { id: 'kyoto_yatsuhashi', name: '八桥', icon: '🥮', tag: '食', type: '特产', price: 50, desc: '肉桂皮香的生八桥与烤脆的八桥饼，京都手信之王。红色包装一提，全世界都知道你来了京都。' },
      { id: 'kyoto_furoshiki', name: '风吕敷包袱布', icon: '🎀', tag: '衣', type: '文创', price: 60, desc: '一块布包出所有形状的京都智慧。西阵织纹样、友禅染图腾，学三种包法就能出门炫技。' },
      { id: 'kyoto_yuzen', name: '友禅染小物', icon: '🎨', tag: '衣', type: '文创', price: 120, desc: '京友禅染的和风扇、手帕、零钱包。一笔一色都是手工，金线勾边贵气内敛。' },
      { id: 'kyoto_kimono_rental', name: '和服租赁漫步', icon: '👘', tag: '玩', type: '体验', price: 300, desc: '清水坂选一套真丝和服，发型发饰全套。走在千年石板路上，木屐声自己就会变慢。' },
      { id: 'kyoto_tea_ceremony', name: '茶道体验', icon: '🫖', tag: '玩', type: '体验', price: 150, desc: '茶室里跪坐、转碗、三口半。老师轻声说"一期一会"，这碗抹茶从此有了重量。' },
      { id: 'kyoto_rickshaw', name: '岚山人力车', icon: '🛺', tag: '行', type: '体验', price: 180, desc: '车夫一身藏青短打，拉你穿过竹林并全程导游。跑上坡还能稳稳加速，服务与体能双满分。' },
      { id: 'kyoto_ryokan', name: '京町家旅馆一晚', icon: '🏨', tag: '住', type: '住宿', price: 600, desc: '百年木造町家改的旅馆，庭园枯山水推窗可见。榻榻米上睡一晚，早晨被寺庙的钟声叫醒。' },
    ],
    stories: [
      { id: 'kyoto_story_maiko', name: '花见小路的"追拍"规矩', icon: '📸', desc: '艺伎与舞伎上下班路上被游客围堵成常态，京都市政府干脆立牌禁止私拍。想合影请去付费的正规体验。' },
      { id: 'kyoto_story_shikaku', name: '京都的"格子脾气"', icon: '🚪', desc: '京都店家多为木格门面，主人常把格子门半掩——想进来就得敲门。这扇格子被游客戏称"京都的社恐结界"。' },
      { id: 'kyoto_story_mizu', name: '京都是"水做的都"', icon: '💧', desc: '地下水软水成就了京都豆腐与伏见清酒，两家百年豆腐店就隔着一口古井。京料理的第一味是水。' },
      { id: 'kyoto_story_oniwa', name: '枯山水的禅意', icon: '🪨', desc: '龙安寺十五块石头无论从哪个角度看都有一块"藏"起来。五百年来无数人坐石阶上数，数完都说"悟了"。' },
      { id: 'kyoto_story_sitochan', name: '寺庙之城的一千七百寺', icon: '🏯', desc: '京都保有寺庙一千七百多座，二战时因全城无军事目标幸免于轰炸。千年木造街景，是全人类的侥幸与福气。' },
      { id: 'kyoto_story_geisha', name: '艺伎不是"公主"', icon: '🎭', desc: '艺伎是艺术家：三味线、舞、茶道样样十年功。那个白色假面般的妆容，其实是几十年如一日的职业自律。' },
    ],
  });
})();
