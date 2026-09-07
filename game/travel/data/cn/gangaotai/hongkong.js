/* ============ 香港 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hongkong',
    name: '香港',
    country: '中国',
    cc: 'CN',
    province: '香港',
    flag: '🇭🇰',
    region: '港澳台',
    hero: '🌆',
    desc: '东方之珠，霓虹与摩天楼贴着山海生长。叮叮车穿过百年街巷，茶餐厅的冻柠茶续着一整个江湖的传说。',
    travel: [{ name: '高铁', icon: '🚄', cost: 580 }, { name: '飞机', icon: '✈️', cost: 1000 }, { name: '轮船', icon: '⛴️', cost: 260 }],
    visa: null,
    spots: [
      { id: 'hongkong_weiduoliya', name: '维多利亚港', icon: '🌉', price: 0, desc: '世界三大天然良港之一，两岸摩天楼在夜幕下上演"幻彩咏香江"。天星小轮两块多港币，是最平价的观光游轮。' },
      { id: 'hongkong_taiping_shan', name: '太平山顶', icon: '🚡', price: 88, desc: '乘1888年开通的山顶缆车斜爬373米，车厢里人是斜的。凌霄阁观景台俯瞰港岛夜色，"世界三大夜景"名不虚传。' },
      { id: 'hongkong_miaojie', name: '庙街夜市', icon: '🏮', price: 0, desc: '港片里的江湖现场：大排档、算命摊、歌女音箱。傍晚灯牌一亮，煲仔饭香气混着吆喝，市井味拉满。' },
      { id: 'hongkong_avenue_stars', name: '星光大道', icon: '🌟', price: 0, desc: '尖沙咀海滨的明星手印长廊，李小龙铜像摆着经典踢腿。走到尽头正好赶上八点灯光秀，维港为你谢幕。' },
      { id: 'hongkong_disney', name: '香港迪士尼', icon: '🏰', price: 639, desc: '全球最小但精悍的迪士尼，"奇妙处处通"排队友好。灰熊山谷急速矿车是全球独有，晚上的城堡光影秀很出片。' },
      { id: 'hongkong_dayushan', name: '大屿山·天坛大佛', icon: '🙏', price: 0, desc: '昂坪360水晶缆车脚下就是山海，25米青铜大佛端坐云端。宝莲禅寺斋堂的素面值得排一小时队。' },
      { id: 'hongkong_wenwuguan', name: '香港故宫文化博物馆', icon: '🏺', price: 60, desc: '西九文化区的紫禁城宝藏分馆，故宫文物常驻展出。落地窗对着维港，看文物看海两不误。' },
    ],
    souvenirs: [
      { id: 'hongkong_dianxin', name: '港式早茶点心', icon: '🥟', tag: '食', type: '美食', price: 80, desc: '莲香楼式推车点心已少见，但虾饺烧卖马拉糕仍在。一壶普洱加点心，老广式悠闲在港岛延续。' },
      { id: 'hongkong_dongningcha', name: '茶餐厅冻柠茶', icon: '🍋', tag: '食', type: '饮品', price: 20, desc: '"茶走、冻柠、走冰"行话满天飞。丝袜奶茶滑、冻柠茶够酸，菠萝油一夹，港剧同款早餐达成。' },
      { id: 'hongkong_shaoyaofan', name: '烧味饭', icon: '🍗', tag: '食', type: '美食', price: 55, desc: '叉烧、烧鸭、油鸡"三拼"斩件铺在饭上。玻璃橱窗里挂着焦红脆皮，师傅手起刀落快过镜头切换。' },
      { id: 'hongkong_yudan', name: '街头鱼蛋·鸡蛋仔', icon: '🍡', tag: '食', type: '美食', price: 15, desc: '咖喱鱼蛋一串六粒弹牙，鸡蛋仔现烤外壳脆到咔咔响。旺角街头两件套，边走边吃才地道。' },
      { id: 'hongkong_tangshui', name: '糖水', icon: '🍮', tag: '食', type: '美食', price: 30, desc: '芝麻糊细滑、杨枝甘露清爽、腐竹白果鸡蛋糖水古早。香港人的宵夜仪式：一碗糖水收尾才算圆满。' },
      { id: 'hongkong_baozaifan', name: '煲仔饭', icon: '🍚', tag: '食', type: '美食', price: 65, desc: '炭火砂锅现煮，腊味油香渗进饭里。锅底那层金黄饭焦要用力铲，是懂行人的隐藏吃法。' },
      { id: 'hongkong_quzijidan', name: '曲奇四重奏·珍妮小熊曲奇', icon: '🍪', tag: '食', type: '特产', price: 90, desc: '牛油小熊曲奇铁罐，排队代购的香港手信之王。奶香酥化，一罐四味，带回家里秒空。' },
      { id: 'hongkong_laojiangjiu', name: '楼上有牌奶茶铺文创', icon: '🧋', tag: '衣', type: '文创', price: 45, desc: '港式霓虹灯牌、茶餐厅牌价表做成冰箱贴和帆布袋。霓虹熄了，文创把它留在了包上。' },
      { id: 'hongkong_dingding', name: '叮叮车·天星小轮', icon: '🚋', tag: '行', type: '体验', price: 3, desc: '港岛叮叮车慢悠悠穿过百年街道，天星小轮六分钟横渡维港。加起来不到十港币，是最怀旧的交通组合。' },
      { id: 'hongkong_dianying', name: '维港游船晚宴', icon: '🛥️', tag: '玩', type: '体验', price: 300, desc: '登游船绕维港一圈，夜景配自助餐。从海面看幻彩咏香江，比岸上贵十倍、也美十倍。' },
      { id: 'hongkong_maihaipai', name: '海洋公园', icon: '🐬', tag: '玩', type: '体验', price: 498, desc: '上山缆车看海景、下山坐全球最快之一的海豚过山车。熊猫馆和海洋馆双拼，亲子游天花板。' },
      { id: 'hongkong_jiudian', name: '尖沙咀海景房', icon: '🏨', tag: '住', type: '住宿', price: 800, desc: '香港房间小，但窗外的维港夜色是大片。落地窗前灯火通明，睡前多看十分钟都不亏。' },
    ],
    stories: [
      { id: 'hongkong_story_dingding', name: '叮叮车开了120年', icon: '🚋', desc: '香港电车1904年通车至今，是全球现存唯一全双层电车车队。票价个位数港币，被市民称为"移动的时光机"。' },
      { id: 'hongkong_story_siwa', name: '丝袜奶茶的名字', icon: '🧦', desc: '拉茶用的棉纱网被茶染成茶色，像极了丝袜——"丝袜奶茶"因此得名。真没用到丝袜，放心喝。' },
      { id: 'hongkong_story_nihong', name: '正在消失的霓虹灯牌', icon: '💫', desc: '港片里漫天霓虹曾是城市符号，如今灯牌陆续拆除。博物馆开始收藏灯牌，文创把"霓虹美学"延续下来。' },
      { id: 'hongkong_story_wuxia', name: '九龙城寨的传说', icon: '🏙️', desc: '曾经的"三不管"九龙城寨密度惊人，拆掉后成了全球游戏与电影的原型。公园里只剩石碑，江湖只在影像里了。' },
      { id: 'hongkong_story_lianxianglou', name: '老茶楼的谢幕', icon: '🫖', desc: '百年推车点心茶楼陆续结业，港人排队告别。一盅两件的旧时光，如今要靠新式茶楼和文创复刻。' },
      { id: 'hongkong_story_shilong', name: '李小龙的手印', icon: '👊', desc: '星光大道的李小龙铜像是全街最热合影点，游客集体摆出"如水"的功夫姿势。手印长廊上，功夫巨星的能量还在。' },
    ],
  });
})();
