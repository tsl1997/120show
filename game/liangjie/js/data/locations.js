(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  function L(o) {
    if (o.buyCat === undefined) {
      if (o.type === "black_market") o.buyCat = null;
      else if (o.type === "antique_market") o.buyCat = ["antique"];
      else o.buyCat = [];
    }
    return Object.assign({ stock: [], npcs: [], culture: [], travel: [], unlock: {} }, o);
  }

  const locations = [
    L({ id: "bj_modern_chengyuan", city: "bj_modern", name: "城中村出租屋", type: "residence", desc: "你现代世界落脚点，家徒四壁但租金便宜。" }),
    L({ id: "bj_modern_supermarket", city: "bj_modern", name: "连锁超市", type: "state_store", desc: "现代超市，物美价廉，商品论件卖。", stock: [{ i: "rice", q: 999, ch: "free" }, { i: "noodle", q: 999, ch: "free" }, { i: "pork", q: 999, ch: "free" }, { i: "egg", q: 999, ch: "free" }, { i: "apple", q: 999, ch: "free" }, { i: "soap", q: 999, ch: "free" }, { i: "matches", q: 999, ch: "free" }, { i: "plastic_basin", q: 999, ch: "free" }, { i: "nylon_rope", q: 999, ch: "free" }, { i: "led_flashlight", q: 999, ch: "free" }, { i: "thermos", q: 999, ch: "free" }] }),
    L({ id: "bj_modern_wholesale", city: "bj_modern", name: "两元店批发市场", type: "market", desc: "廉价批发市场，囤1980年「神物」的地方。", stock: [{ i: "plastic_basin", q: 9999, ch: "free" }, { i: "nylon_rope", q: 9999, ch: "free" }, { i: "led_flashlight", q: 9999, ch: "free" }, { i: "calculator", q: 9999, ch: "free" }, { i: "electronic_watch", q: 9999, ch: "free" }, { i: "nylon_stockings", q: 9999, ch: "free" }, { i: "sunglasses", q: 9999, ch: "free" }, { i: "soap", q: 9999, ch: "free" }, { i: "matches", q: 9999, ch: "free" }] }),
    L({ id: "bj_modern_electronics", city: "bj_modern", name: "中关村电子市场", type: "market", desc: "现代电子设备集散地。", stock: [{ i: "mobile_phone", q: 999, ch: "free" }, { i: "laptop", q: 999, ch: "free" }, { i: "tv_color", q: 999, ch: "free" }, { i: "washing_machine", q: 999, ch: "free" }, { i: "refrigerator", q: 999, ch: "free" }, { i: "electric_fan", q: 999, ch: "free" }, { i: "radio", q: 999, ch: "free" }, { i: "camera_seagull", q: 999, ch: "free" }] }),
    L({ id: "bj_modern_antique", city: "bj_modern", name: "潘家园古玩城", type: "antique_market", desc: "把1980年带回来的粮票、邮票、旧茅台、银元变现的地方。", stock: [{ i: "monkey_stamp", q: 50, ch: "free" }, { i: "yuan_datou", q: 50, ch: "free" }, { i: "old_maotai", q: 20, ch: "free" }, { i: "qing_porcelain", q: 20, ch: "free" }] }),
    L({ id: "bj_modern_online", city: "bj_modern", name: "网购终端", type: "market", desc: "网购全国各省特产与海外代购奢侈品的中枢，下单后到陆港码头提货。", stock: [] }),
    L({ id: "bj_modern_industrial", city: "bj_modern", name: "工业园区仓储", type: "freight", desc: "成吨购买化肥、种子、机床零件的大宗仓储区。", stock: [{ i: "fertilizer_urea", q: 9999, ch: "free" }, { i: "seed_hybrid_rice", q: 9999, ch: "free" }, { i: "greenhouse_film", q: 9999, ch: "free" }, { i: "antibiotic", q: 9999, ch: "free" }, { i: "wrench_set", q: 9999, ch: "free" }] }),
    L({ id: "bj_modern_cbd", city: "bj_modern", name: "CBD金融区", type: "government", desc: "开公司、办信托、买豪宅、做外汇与股票的地方。" }),
    L({ id: "bj_modern_airport", city: "bj_modern", name: "大兴机场·国际仓储", type: "freight", desc: "海外代购奢侈品提货与跨国物流枢纽。" }),
    L({ id: "bj_modern_hospital", city: "bj_modern", name: "三甲医院", type: "hospital", desc: "现代医疗资源。" }),
    L({ id: "bj_modern_school", city: "bj_modern", name: "职业技能培训中心", type: "school", desc: "在这里学英语/日语/俄语/文物鉴定/计算机，考证书。" }),
    L({ id: "bj_modern_dmv", city: "bj_modern", name: "车管所", type: "government", desc: "办驾照、给车辆上牌。" }),
    L({ id: "bj_modern_farm", city: "bj_modern", name: "郊区农场", type: "factory", desc: "种田分支：委托AI打理的农场。" }),
    L({ id: "bj_modern_shop", city: "bj_modern", name: "创业门店", type: "factory", desc: "开店分支：超市模拟器的舞台。" }),

    L({ id: "bj_1980_dazayuan", city: "bj_1980", name: "四合院大杂院", type: "residence", desc: "80年代北京落脚点，左邻右舍都是市井烟火。" }),
    L({ id: "bj_1980_department", city: "bj_1980", name: "北京市百货大楼(王府井)", type: "state_store", desc: "国营商业巅峰，凭票供应。", stock: [{ i: "bike_forever", q: 20, ch: "state" }, { i: "sewing_machine", q: 20, ch: "state" }, { i: "watch_shanghai", q: 30, ch: "state" }, { i: "tv_daodao", q: 15, ch: "state" }, { i: "tv_color", q: 8, ch: "state" }, { i: "radio", q: 40, ch: "state" }, { i: "electric_fan", q: 30, ch: "state" }, { i: "thermos", q: 100, ch: "state" }, { i: "washing_machine", q: 15, ch: "state" }] }),
    L({ id: "bj_1980_gongxiao", city: "bj_1980", name: "国营供销社", type: "state_store", desc: "凭票购买柴米油盐的基层商店。", stock: [{ i: "rice", q: 500, ch: "state" }, { i: "flour", q: 500, ch: "state" }, { i: "pork", q: 200, ch: "state" }, { i: "egg", q: 200, ch: "state" }, { i: "cabbage", q: 500, ch: "state" }, { i: "sugar", q: 300, ch: "state" }, { i: "cooking_oil", q: 200, ch: "state" }, { i: "salt", q: 500, ch: "state" }, { i: "soy_sauce", q: 300, ch: "state" }, { i: "soap", q: 300, ch: "state" }, { i: "matches", q: 500, ch: "state" }, { i: "beibingyang", q: 200, ch: "state" }] }),
    L({ id: "bj_1980_friend", city: "bj_1980", name: "北京友谊商店", type: "friend_store", desc: "只收外汇券的涉外商店，进口货稀缺。", stock: [{ i: "coca_cola", q: 100, ch: "fec" }, { i: "walkman", q: 30, ch: "fec" }, { i: "marlboro", q: 50, ch: "fec" }, { i: "jeans", q: 40, ch: "fec" }, { i: "tv_color", q: 20, ch: "fec" }] }),
    L({ id: "bj_1980_dashilan", city: "bj_1980", name: "大栅栏老字号", type: "market", desc: "六必居酱菜、同仁堂药材，传统老字号。", stock: [{ i: "danggui", q: 50, ch: "free" }, { i: "tianma", q: 50, ch: "free" }, { i: "longjing_tea", q: 30, ch: "free" }, { i: "jasmine_tea", q: 100, ch: "free" }] }),
    L({ id: "bj_1980_gezishi", city: "bj_1980", name: "鸽子市(地下黑市)", type: "black_market", desc: "凌晨开放的非法黑市，不用票但风险高。", stock: [{ i: "electronic_watch", q: 200, ch: "black" }, { i: "nylon_stockings", q: 200, ch: "black" }, { i: "sunglasses", q: 150, ch: "black" }, { i: "walkman", q: 40, ch: "black" }, { i: "recorder", q: 50, ch: "black" }, { i: "marlboro", q: 100, ch: "black" }, { i: "jeans", q: 80, ch: "black" }, { i: "luncheon_meat", q: 300, ch: "black" }] }),
    L({ id: "bj_1980_rongbaozhai", city: "bj_1980", name: "荣宝斋文物商店", type: "antique_market", desc: "国营文物商店，鉴定师职业在此大显身手。", stock: [{ i: "qing_porcelain", q: 30, ch: "free" }, { i: "yuan_datou", q: 100, ch: "free" }, { i: "monkey_stamp", q: 200, ch: "free" }, { i: "zisha_pot", q: 10, ch: "free" }] }),
    L({ id: "bj_1980_station", city: "bj_1980", name: "北京站", type: "freight", desc: "铁路客运与国营行李房托运中枢。" }),
    L({ id: "bj_1980_yongdingmen", city: "bj_1980", name: "永定门货运站", type: "freight", desc: "大宗物资交割与车皮调运。" }),
    L({ id: "bj_1980_ministry", city: "bj_1980", name: "各大部委·外贸总公司", type: "government", desc: "跑计划内批文、进出口配额的终极机构。" }),
    L({ id: "bj_1980_embassy", city: "bj_1980", name: "外国驻华大使馆", type: "government", desc: "接触海外NPC、触发外事与跨国线。" }),
    L({ id: "bj_1980_gugong", city: "bj_1980", name: "故宫", type: "tourism", desc: "文化触发，附近有农民兜售老物件。", culture: ["gugong"] }),
    L({ id: "bj_1980_tiantan", city: "bj_1980", name: "天坛", type: "tourism", desc: "祈年殿，触发诗词。", culture: ["tiantan"] }),
    L({ id: "bj_1980_changcheng", city: "bj_1980", name: "长城八达岭", type: "tourism", desc: "不到长城非好汉。", culture: ["changcheng"] }),
    L({ id: "bj_1980_yiheyuan", city: "bj_1980", name: "颐和园", type: "tourism", desc: "昆明湖、长廊。", culture: ["yiheyuan"] }),
    L({ id: "bj_1980_steel", city: "bj_1980", name: "首钢生活区", type: "factory", desc: "工人多、工资高、缺副食品的倾销天堂。" }),
    L({ id: "bj_1980_textile", city: "bj_1980", name: "北京纺织厂", type: "factory", desc: "国营大厂，女工云集。" }),
    L({ id: "bj_1980_hospital", city: "bj_1980", name: "协和医院", type: "hospital", desc: "80年代稀缺的医疗资源。" }),
    L({ id: "bj_1980_hotel", city: "bj_1980", name: "北京饭店", type: "hotel", desc: "涉外宾馆，普通人需介绍信。" }),

    L({ id: "gz_1980_gaodi", city: "gz_1980", name: "高第街服装市场", type: "black_market", desc: "全国第一批服装批发个体户集散地。", stock: [{ i: "nylon_stockings", q: 999, ch: "black" }, { i: "sunglasses", q: 999, ch: "black" }, { i: "jeans", q: 500, ch: "black" }, { i: "teresa_tape", q: 500, ch: "black" }, { i: "electronic_watch", q: 999, ch: "black" }] }),
    L({ id: "gz_1980_harbor", city: "gz_1980", name: "黄埔港码头", type: "freight", desc: "华南大宗走私货靠岸点。" }),
    L({ id: "gz_1980_qingping", city: "gz_1980", name: "清平中药材市场", type: "market", buyCat: ["medicine"], desc: "华南最大中药材集散地。" }),
    L({ id: "gz_1980_whiteswan", city: "gz_1980", name: "白天鹅宾馆", type: "hotel", desc: "涉外星级酒店。" }),

    L({ id: "heb_1980_factory", city: "heb_1980", name: "三大动力厂生活区", type: "factory", desc: "电机/锅炉/汽轮机厂工人，高消费力。" }),
    L({ id: "heb_1980_qiulin", city: "heb_1980", name: "秋林公司", type: "state_store", desc: "俄式百货，秋林红肠大列巴。" }),
    L({ id: "heb_1980_shanhuo", city: "heb_1980", name: "长白山野山货集散地", type: "black_market", desc: "东北最大山货鸽子市。", stock: [{ i: "wild_ginseng", q: 20, ch: "black" }, { i: "deer_antler", q: 30, ch: "black" }, { i: "mink_fur", q: 30, ch: "black" }, { i: "black_fungus", q: 200, ch: "black" }, { i: "pine_nut", q: 300, ch: "black" }] }),
    L({ id: "heb_1980_ice", city: "heb_1980", name: "松花江冰灯游园会", type: "tourism", desc: "兆麟公园冰灯展。", culture: ["ice"] }),

    L({ id: "wlmq_1980_bazaar", city: "wlmq_1980", name: "二道桥巴扎", type: "market", buyCat: ["food_processed", "textile", "antique"], desc: "异域风情集市。", stock: [{ i: "raisin", q: 500, ch: "free" }, { i: "hami_melon", q: 300, ch: "free" }, { i: "jade_hetian", q: 30, ch: "black" }, { i: "long_staple_cotton", q: 999, ch: "free" }, { i: "fine_wool", q: 999, ch: "free" }] }),
    L({ id: "wlmq_1980_karamay", city: "wlmq_1980", name: "克拉玛依油田", type: "factory", desc: "西北重工业核心。" }),

    L({ id: "wh_1980_hanzheng", city: "wh_1980", name: "汉正街小商品市场", type: "market", buyCat: ["daily", "electronics", "clothing"], desc: "全国个体户中转心脏。", stock: [{ i: "nylon_rope", q: 999, ch: "free" }, { i: "plastic_basin", q: 999, ch: "free" }, { i: "calculator", q: 999, ch: "free" }] }),
    L({ id: "wh_1980_dock", city: "wh_1980", name: "汉口码头区", type: "freight", desc: "长江航运中枢。" }),
    L({ id: "wh_1980_huanghelou", city: "wh_1980", name: "黄鹤楼旧址", type: "tourism", desc: "滚滚长江东逝水。", culture: ["huanghelou"] }),

    L({ id: "hz_1980_xihu", city: "hz_1980", name: "西湖断桥", type: "tourism", desc: "欲把西湖比西子。", culture: ["xihu"] }),
    L({ id: "hz_1980_longjing", city: "hz_1980", name: "龙井村茶园", type: "factory", desc: "顶级龙井源头。" }),
    L({ id: "hz_1980_canal", city: "hz_1980", name: "大运河拱宸桥码头", type: "freight", desc: "江南水运枢纽。" }),

    L({ id: "cd_1980_herb", city: "cd_1980", name: "荷花池药材市场", type: "market", buyCat: ["medicine"], desc: "川药药库。", stock: [{ i: "danggui", q: 500, ch: "free" }, { i: "huanglian", q: 500, ch: "free" }, { i: "tianma", q: 500, ch: "free" }] }),

    L({ id: "hk_1980_central", city: "hk_1980", name: "中环", type: "government", desc: "全球资本清洗机。" }),
    L({ id: "hk_1980_kwaichung", city: "hk_1980", name: "葵涌码头", type: "freight", desc: "全球物流咽喉。" }),
    L({ id: "hk_1980_kowloon", city: "hk_1980", name: "九龙城寨", type: "black_market", desc: "法外之地，地下黑市。" }),
    L({ id: "hk_1980_peak", city: "hk_1980", name: "太平山顶", type: "tourism", desc: "权力的奥林匹斯山。", culture: ["peak"] }),

    L({ id: "tokyo_1980_akiba", city: "tokyo_1980", name: "秋叶原", type: "market", buyCat: ["electronics"], desc: "全球微电子与家电圣地。", stock: [{ i: "walkman", q: 500, ch: "free" }, { i: "famicom", q: 300, ch: "free" }, { i: "game_cart", q: 999, ch: "free" }, { i: "tv_color", q: 500, ch: "free" }, { i: "recorder", q: 500, ch: "free" }] }),
    L({ id: "tokyo_1980_ginza", city: "tokyo_1980", name: "银座", type: "antique_market", desc: "泡沫资本与高档艺术品销金窟。" }),
    L({ id: "tokyo_1980_shinjuku", city: "tokyo_1980", name: "新宿·歌舞伎町", type: "black_market", desc: "极道暗流与地下外汇。" }),
    L({ id: "tokyo_1980_ueno", city: "tokyo_1980", name: "上野公园", type: "tourism", desc: "樱花与国立博物馆。", culture: ["ueno"] }),

    L({ id: "osaka_1980_den", city: "osaka_1980", name: "日本桥电电城", type: "market", buyCat: ["electronics"], desc: "关西砍价版秋叶原。", stock: [{ i: "tv_color", q: 800, ch: "free" }, { i: "recorder", q: 800, ch: "free" }, { i: "walkman", q: 800, ch: "free" }] }),
    L({ id: "osaka_1980_dotonbori", city: "osaka_1980", name: "道顿堀", type: "black_market", desc: "大阪黑市与美食。", culture: ["osaka"] }),

    L({ id: "nyc_1980_wallstreet", city: "nyc_1980", name: "华尔街", type: "government", desc: "全球资本绞肉机。" }),
    L({ id: "nyc_1980_chinatown", city: "nyc_1980", name: "曼哈顿唐人街", type: "black_market", desc: "地下汇兑与帮派网络。" }),

    L({ id: "sf_1980_paloalto", city: "sf_1980", name: "帕洛阿尔托", type: "factory", desc: "车库创业与风投摇篮。" }),
    L({ id: "sf_1980_sandhill", city: "sf_1980", name: "桑德山路", type: "government", desc: "风险投资奥林匹斯山。" }),

    L({ id: "detroit_1980_river", city: "detroit_1980", name: "河江总装车间", type: "factory", desc: "十万蓝领的血汗熔炉。" }),
    L({ id: "la_1980_hollywood", city: "la_1980", name: "好莱坞", type: "tourism", desc: "全球眼球操盘室。" }),
    L({ id: "la_1980_aero", city: "la_1980", name: "南加州航空走廊", type: "factory", desc: "军工复合体。" }),
    L({ id: "houston_1980_ship", city: "houston_1980", name: "休斯顿航道", type: "freight", desc: "全球能源动脉。" }),
    L({ id: "houston_1980_permian", city: "houston_1980", name: "二叠纪盆地", type: "factory", desc: "野猫赌徒的生死场。" }),

    L({ id: "moscow_1980_gum", city: "moscow_1980", name: "国营百货GUM", type: "state_store", desc: "排长队的国营百货。" }),
    L({ id: "moscow_1980_beryozka", city: "moscow_1980", name: "别列兹卡特供商店", type: "friend_store", desc: "只收硬通货的特供店。", stock: [{ i: "jeans", q: 100, ch: "fec" }, { i: "marlboro", q: 200, ch: "fec" }, { i: "coca_cola", q: 200, ch: "fec" }] }),
    L({ id: "moscow_1980_lubyanka", city: "moscow_1980", name: "卢比扬卡·克格勃总部", type: "government", desc: "无处不在的恐惧与监听。" }),
    L({ id: "moscow_1980_arbat", city: "moscow_1980", name: "阿尔巴特街黑市", type: "black_market", desc: "地下外汇与西方文化黑市。", stock: [{ i: "luncheon_meat", q: 500, ch: "black" }, { i: "nylon_stockings", q: 500, ch: "black" }, { i: "jeans", q: 300, ch: "black" }] }),

    L({ id: "novosibirsk_1980_akadem", city: "novosibirsk_1980", name: "科学城研究所群", type: "factory", desc: "苏联科技与智力最强心脏。" }),
    L({ id: "tyumen_1980_samotlor", city: "tyumen_1980", name: "萨莫特洛尔油田", type: "factory", desc: "吞噬无数劳力的超级油井。" }),
    L({ id: "kharkov_1980_malyshev", city: "kharkov_1980", name: "马雷舍夫工厂", type: "factory", desc: "红色铁甲洪流摇篮。" }),
    L({ id: "leningrad_1980_port", city: "leningrad_1980", name: "列宁格勒大港", type: "freight", desc: "波罗的海走私咽喉。" })
  ];

  R.register("locations", { items: locations, map: locations.reduce((m, l) => (m[l.id] = l, m), {}) });
})();
