(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  function L(o) {
    return Object.assign({ stock: [], services: [], buyCat: [], npcs: [], culture: [], unlock: {}, district: "south" }, o);
  }

  const districts = {
    bj_1980: {
      south: { name: "城南", tag: "市井烟火·起点", desc: "大杂院、街道办、供销社、老字号、文物商店都在这片。" },
      east: { name: "城东", tag: "工厂与商业", desc: "百货大楼、国营工厂、电影院与菜市场云集。" },
      west: { name: "城西", tag: "政务与文教", desc: "部委机关、银行、医院与书店的所在。" },
      north: { name: "城北", tag: "涉外与名胜", desc: "友谊商店、大使馆与故宫长城等名胜。" }
    },
    bj_modern: {
      south: { name: "城南", tag: "烟火生活区", desc: "出租屋、批发市场、超市、古玩城都在这里。" },
      east: { name: "城东", tag: "商业与资本", desc: "CBD、商场、4S店与创业门店。" },
      west: { name: "城西", tag: "科技与物流", desc: "中关村电子市场、网购终端、工业园区与机场仓储。" },
      north: { name: "城北", tag: "文教与康养", desc: "培训中心、医院、车管所与公园农场。" }
    }
  };

  const locations = [
    L({ id: "bj_1980_dazayuan", city: "bj_1980", district: "south", name: "四合院大杂院", type: "residence", desc: "80年代北京落脚点，左邻右舍都是市井烟火。先去街道办办户口、领票证。" }),
    L({ id: "bj_1980_jiedao", city: "bj_1980", district: "south", name: "东城街道办事处", type: "government", services: ["hukou", "tickets", "intro"], desc: "办理户口、领取定量票证、开具介绍信的基层机构。", npcs: ["wang_jiedao"] }),
    L({ id: "bj_1980_police", city: "bj_1980", district: "south", name: "派出所", type: "government", services: ["security"], desc: "维护治安、办理临时居住手续。", npcs: ["sun_minjing"] }),
    L({ id: "bj_1980_gongxiao", city: "bj_1980", district: "south", name: "国营供销社", type: "state_store", desc: "凭票购买柴米油盐的基层商店。", buyCat: ["food_staple", "food_fresh", "food_processed", "tobacco"],
      stock: [
        { i: "rice", q: 500, ch: "state" }, { i: "flour", q: 500, ch: "state" }, { i: "pork", q: 200, ch: "state" }, { i: "egg", q: 200, ch: "state" },
        { i: "cabbage", q: 500, ch: "state" }, { i: "sugar", q: 300, ch: "state" }, { i: "cooking_oil", q: 200, ch: "state" }, { i: "salt", q: 500, ch: "state" },
        { i: "soy_sauce", q: 300, ch: "state" }, { i: "soap", q: 300, ch: "state" }, { i: "matches", q: 500, ch: "state" }, { i: "beibingyang", q: 200, ch: "state" },
        { i: "tofu", q: 200, ch: "state" }, { i: "vermicelli", q: 200, ch: "state" }, { i: "peanut", q: 200, ch: "state" }, { i: "melon_seeds", q: 200, ch: "state" },
        { i: "fruit_candy", q: 300, ch: "state" }, { i: "milk_candy", q: 300, ch: "state" }, { i: "taosu", q: 200, ch: "state" }, { i: "canned_fruit", q: 200, ch: "state" },
        { i: "vinegar", q: 300, ch: "state" }, { i: "msg", q: 300, ch: "state" }, { i: "bulk_liquor", q: 200, ch: "state" }, { i: "erguotou", q: 200, ch: "state" },
        { i: "dagianmen", q: 300, ch: "state" }, { i: "cig_hengda", q: 300, ch: "state" }, { i: "cig_guangrong", q: 300, ch: "state" }, { i: "cig_dashengchan", q: 300, ch: "state" }
      ] }),
    L({ id: "bj_1980_dashilan", city: "bj_1980", district: "south", name: "大栅栏老字号", type: "market", desc: "六必居酱菜、同仁堂药材、内联升布鞋，传统老字号云集。", buyCat: ["medicine"], npcs: ["chen_laozihao"],
      stock: [
        { i: "danggui", q: 50, ch: "free" }, { i: "tianma", q: 50, ch: "free" }, { i: "huanglian", q: 50, ch: "free" }, { i: "goji", q: 100, ch: "free" },
        { i: "longjing_tea", q: 30, ch: "free" }, { i: "jasmine_tea", q: 100, ch: "free" }, { i: "wild_ginseng", q: 5, ch: "free" }, { i: "deer_antler", q: 10, ch: "free" },
        { i: "cloth_shoes", q: 200, ch: "free" }, { i: "vinegar", q: 200, ch: "free" }
      ] }),
    L({ id: "bj_1980_gezishi", city: "bj_1980", district: "south", name: "鸽子市(地下黑市)", type: "black_market", desc: "凌晨开放的非法黑市，不用票但风险高；还能买到票证和大件票。", buyCat: null, npcs: ["jingge"],
      services: ["tkt_black", "big_black"],
      stock: [
        { i: "electronic_watch", q: 200, ch: "black" }, { i: "nylon_stockings", q: 200, ch: "black" }, { i: "sunglasses", q: 150, ch: "black" },
        { i: "walkman", q: 40, ch: "black" }, { i: "recorder", q: 50, ch: "black" }, { i: "marlboro", q: 100, ch: "black" }, { i: "jeans", q:80, ch: "black" },
        { i: "luncheon_meat", q: 300, ch: "black" }, { i: "rice", q: 500, ch: "black" }, { i: "pork", q: 200, ch: "black" }, { i: "egg", q: 300, ch: "black" },
        { i: "cooking_oil", q: 200, ch: "black" }, { i: "maotai", q: 30, ch: "black" }, { i: "cig_zhonghua", q: 100, ch: "black" }, { i: "teresa_tape", q: 100, ch: "black" },
        { i: "famicom", q: 30, ch: "black" }, { i: "game_cart", q: 100, ch: "black" }
      ] }),
    L({ id: "bj_1980_rongbaozhai", city: "bj_1980", district: "south", name: "荣宝斋文物商店", type: "antique_market", desc: "国营文物商店，鉴定师职业在此大显身手。", buyCat: ["antique"],
      stock: [
        { i: "qing_porcelain", q: 30, ch: "free" }, { i: "yuan_datou", q: 100, ch: "free" }, { i: "monkey_stamp", q: 200, ch: "free" },
        { i: "zisha_pot", q: 10, ch: "free" }, { i: "grain_ticket_sheet", q: 50, ch: "free" }, { i: "picture_book", q: 300, ch: "free" }, { i: "newyear_painting", q: 200, ch: "free" }
      ] }),
    L({ id: "bj_1980_trust", city: "bj_1980", district: "south", name: "信托商店", type: "antique_market", desc: "寄卖旧货的国营信托店，老物件流通处。", buyCat: ["antique"], npcs: ["zhou_zhanggui"],
      stock: [
        { i: "rosewood_furniture", q: 10, ch: "free" }, { i: "old_maotai", q: 20, ch: "free" }, { i: "watch_shanghai", q: 30, ch: "free" },
        { i: "camera_seagull", q: 20, ch: "free" }, { i: "typewriter", q: 10, ch: "free" }, { i: "radio", q: 30, ch: "free" }, { i: "mead_jacket", q: 50, ch: "free" }
      ] }),
    L({ id: "bj_1980_scrap", city: "bj_1980", district: "south", name: "废品收购站", type: "antique_market", desc: "回收废铜烂铁旧书报，常有人把老物件当废品卖。", buyCat: ["antique", "daily", "electronics"], npcs: ["liu_daye"],
      stock: [{ i: "yuan_datou", q: 20, ch: "free" }, { i: "qing_porcelain", q: 10, ch: "free" }, { i: "copper_ton", q: 5, ch: "free" }] }),
    L({ id: "bj_1980_liulichang", city: "bj_1980", district: "south", name: "琉璃厂文化街", type: "antique_market", desc: "古书字画文房四宝一条街，捡漏圣地。", buyCat: ["antique", "book_edu"],
      stock: [
        { i: "xuan_paper", q: 100, ch: "free" }, { i: "pen_hero", q: 100, ch: "free" }, { i: "ink", q: 100, ch: "free" }, { i: "tangbohu", q: 3, ch: "free" },
        { i: "qibaishi", q: 5, ch: "free" }, { i: "novel_book", q: 200, ch: "free" }, { i: "pictorial", q: 200, ch: "free" }
      ] }),
    L({ id: "bj_1980_hostel", city: "bj_1980", district: "south", name: "前门小旅社", type: "hotel", services: ["hotel"], desc: "大通铺小旅社，凭介绍信入住。" }),
    L({ id: "bj_1980_bathhouse", city: "bj_1980", district: "south", name: "清华池澡堂", type: "hotel", services: ["bath"], desc: "泡澡堂子是老北京的享受。" }),
    L({ id: "bj_1980_tiantan", city: "bj_1980", district: "south", name: "天坛", type: "tourism", services: ["sight"], desc: "祈年殿，触发诗词。", culture: ["tiantan"] }),
    L({ id: "bj_1980_station", city: "bj_1980", district: "south", name: "北京站", type: "freight", services: ["train"], desc: "铁路客运与国营行李房托运中枢。", npcs: ["feng_zhanzhang", "maopiao_ay"] }),
    L({ id: "bj_1980_yongdingmen", city: "bj_1980", district: "south", name: "永定门货运站", type: "freight", desc: "大宗物资交割与车皮调运。" }),
    L({ id: "bj_1980_bus_south", city: "bj_1980", district: "south", name: "城南公交站", type: "bus_stop", services: ["bus"], desc: "老式铰接公共汽车，上车一毛钱，通往城东城西城北。" }),

    L({ id: "bj_1980_department", city: "bj_1980", district: "east", name: "北京市百货大楼", type: "state_store", desc: "国营商业巅峰，凭票供应。售货员张秉贵在此抓糖。", buyCat: ["clothing", "daily"], npcs: ["zhang_binggui"],
      stock: [
        { i: "bike_forever", q: 20, ch: "state" }, { i: "bike_phoenix", q: 20, ch: "state" }, { i: "sewing_machine", q: 20, ch: "state" }, { i: "watch_shanghai", q: 30, ch: "state" },
        { i: "tv_daodao", q: 15, ch: "state" }, { i: "tv_color", q: 8, ch: "state" }, { i: "radio", q: 40, ch: "state" }, { i: "electric_fan", q: 30, ch: "state" },
        { i: "thermos", q: 100, ch: "state" }, { i: "washing_machine", q: 15, ch: "state" }, { i: "camera_seagull", q: 20, ch: "state" }, { i: "recorder", q: 20, ch: "state" },
        { i: "cotton_cloth", q: 500, ch: "state" }, { i: "flower_cloth", q: 500, ch: "state" }, { i: "dacron_fabric", q: 300, ch: "state" }, { i: "card_brocade", q: 200, ch: "state" },
        { i: "wool_yarn", q: 200, ch: "state" }, { i: "towel", q: 300, ch: "state" }, { i: "bed_sheet", q: 200, ch: "state" }, { i: "cotton_socks", q: 500, ch: "state" },
        { i: "jiefang_shoes", q: 300, ch: "state" }, { i: "cloth_shoes", q: 300, ch: "state" }, { i: "leather_shoes", q: 150, ch: "state" }, { i: "army_cap", q: 300, ch: "state" },
        { i: "scarf_wool", q: 200, ch: "state" }, { i: "enamel_basin", q: 300, ch: "state" }, { i: "enamel_cup", q: 300, ch: "state" }, { i: "aluminum_pot", q: 200, ch: "state" },
        { i: "iron_wok", q: 200, ch: "state" }, { i: "kitchen_knife", q: 200, ch: "state" }, { i: "scissors", q: 200, ch: "state" }, { i: "mirror_small", q: 300, ch: "state" },
        { i: "comb", q: 300, ch: "state" }, { i: "toothpaste", q: 500, ch: "state" }, { i: "toothbrush", q: 500, ch: "state" }, { i: "perfumed_soap", q: 500, ch: "state" },
        { i: "detergent", q: 300, ch: "state" }, { i: "battery", q: 500, ch: "state" }, { i: "bulb", q: 500, ch: "state" }, { i: "flashlight", q: 300, ch: "state" },
        { i: "plastic_bucket", q: 200, ch: "state" }, { i: "padlock", q: 200, ch: "state" }, { i: "mead_jacket", q: 100, ch: "state" }, { i: "pen_hero", q: 300, ch: "state" },
        { i: "schoolbag", q: 200, ch: "state" }, { i: "typewriter", q: 10, ch: "state" }
      ] }),
    L({ id: "bj_1980_caimarket", city: "bj_1980", district: "east", name: "东单菜市场", type: "market", desc: "北京最大的国营菜市场，鸡鸭鱼肉蛋菜。", buyCat: ["food_staple", "food_fresh", "food_processed"],
      stock: [
        { i: "pork", q: 300, ch: "state" }, { i: "beef", q: 100, ch: "state" }, { i: "egg", q: 300, ch: "state" }, { i: "hairtail", q: 200, ch: "state" },
        { i: "cabbage", q: 500, ch: "state" }, { i: "potato", q: 500, ch: "state" }, { i: "tomato", q: 300, ch: "state" }, { i: "apple", q: 300, ch: "state" },
        { i: "dried_shrimp", q: 200, ch: "state" }, { i: "tofu", q: 300, ch: "state" }, { i: "peanut", q: 300, ch: "state" }, { i: "canned_fish", q: 200, ch: "state" }
      ] }),
    L({ id: "bj_1980_daoxiangcun", city: "bj_1980", district: "east", name: "稻香村食品店", type: "state_store", desc: "南味糕点老字号，桃酥月饼闻名。", buyCat: [],
      stock: [
        { i: "taosu", q: 300, ch: "free" }, { i: "cake", q: 300, ch: "free" }, { i: "mooncake", q: 300, ch: "free" }, { i: "fruit_candy", q: 300, ch: "free" },
        { i: "milk_candy", q: 300, ch: "free" }, { i: "malt_extract", q: 200, ch: "free" }, { i: "candy_rabbit", q: 300, ch: "free" }
      ] }),
    L({ id: "bj_1980_steel", city: "bj_1980", district: "east", name: "首钢生活区", type: "factory", services: ["work"], desc: "工人多、工资高、缺副食品的倾销天堂。", npcs: ["li_shifu"] }),
    L({ id: "bj_1980_textile", city: "bj_1980", district: "east", name: "北京纺织厂", type: "factory", services: ["work"], desc: "国营大厂，女工云集，三班倒机器轰鸣。" }),
    L({ id: "bj_1980_electron", city: "bj_1980", district: "east", name: "无线电厂", type: "factory", services: ["work"], desc: "生产收音机元器件，技术人员紧缺。" }),
    L({ id: "bj_1980_workerclub", city: "bj_1980", district: "east", name: "工人俱乐部", type: "tourism", services: ["sight"], desc: "交谊舞会、棋牌室、乒乓球室。" }),
    L({ id: "bj_1980_cinema", city: "bj_1980", district: "east", name: "首都电影院", type: "tourism", services: ["sight"], desc: "《少林寺》《庐山恋》一票难求。" }),
    L({ id: "bj_1980_hotel_bf", city: "bj_1980", district: "east", name: "北京饭店", type: "hotel", services: ["hotel"], desc: "涉外大饭店，气派非凡，一般人住不起。" }),
    L({ id: "bj_1980_bus_east", city: "bj_1980", district: "east", name: "城东公交站", type: "bus_stop", services: ["bus"], desc: "老式铰接公共汽车，上车一毛钱，通往城西城南城北。" }),

    L({ id: "bj_1980_ministry", city: "bj_1980", district: "west", name: "各大部委·外贸总公司", type: "government", services: ["batch"], desc: "跑计划内批文、进出口配额的终极机构。", npcs: ["qian_jingli"] }),
    L({ id: "bj_1980_bank", city: "bj_1980", district: "west", name: "人民银行储蓄所", type: "bank", services: ["bank"], desc: "存钱取钱的国营储蓄所，也办理外汇兑换。", npcs: ["zhao_kuaiji"] }),
    L({ id: "bj_1980_bookstore", city: "bj_1980", district: "west", name: "新华书店", type: "market", desc: "全国唯一书店体系，小人书柜台前永远围着孩子。", buyCat: ["book_edu"],
      stock: [
        { i: "picture_book", q: 500, ch: "free" }, { i: "novel_book", q: 300, ch: "free" }, { i: "pictorial", q: 200, ch: "free" },
        { i: "pencil", q: 500, ch: "free" }, { i: "notebook", q: 500, ch: "free" }, { i: "ink", q: 300, ch: "free" }, { i: "newyear_painting", q: 300, ch: "free" }
      ] }),
    L({ id: "bj_1980_hospital", city: "bj_1980", district: "west", name: "协和医院", type: "hospital", services: ["hospital"], desc: "80年代稀缺的医疗资源，看病要排队。", npcs: ["zheng_daifu"] }),
    L({ id: "bj_1980_pharmacy", city: "bj_1980", district: "west", name: "同仁堂药店", type: "market", desc: "百年药铺，中西药皆有。", buyCat: ["medicine"],
      stock: [
        { i: "painkiller", q: 300, ch: "free" }, { i: "ganmaoling", q: 300, ch: "free" }, { i: "vitamin", q: 200, ch: "free" },
        { i: "iodine_tincture", q: 200, ch: "free" }, { i: "gauze", q: 300, ch: "free" }, { i: "rendan", q: 500, ch: "free" }, { i: "fengyoujing", q: 500, ch: "free" },
        { i: "shidishui", q: 300, ch: "free" }, { i: "antibiotic", q: 50, ch: "free" }, { i: "wild_ginseng", q: 5, ch: "free" }, { i: "deer_antler", q: 10, ch: "free" }
      ] }),
    L({ id: "bj_1980_beihai", city: "bj_1980", district: "west", name: "北海公园", type: "tourism", services: ["sight"], desc: "让我们荡起双桨的地方。", culture: ["beihai"] }),
    L({ id: "bj_1980_bus_west", city: "bj_1980", district: "west", name: "城西公交站", type: "bus_stop", services: ["bus"], desc: "老式铰接公共汽车，上车一毛钱，通往城东南北。" }),

    L({ id: "bj_1980_friend", city: "bj_1980", district: "north", name: "北京友谊商店", type: "friend_store", desc: "只收外汇券的涉外商店，进口货稀缺。", buyCat: [],
      stock: [
        { i: "coca_cola", q: 100, ch: "fec" }, { i: "walkman", q: 30, ch: "fec" }, { i: "marlboro", q: 50, ch: "fec" }, { i: "jeans", q: 40, ch: "fec" },
        { i: "tv_color", q: 20, ch: "fec" }, { i: "cig_zhonghua", q: 100, ch: "fec" }, { i: "maotai", q: 50, ch: "fec" }, { i: "chocolate", q: 100, ch: "fec" }
      ] }),
    L({ id: "bj_1980_embassy", city: "bj_1980", district: "north", name: "外国驻华大使馆", type: "government", desc: "接触海外NPC、触发外事与跨国线。" }),
    L({ id: "bj_1980_gugong", city: "bj_1980", district: "north", name: "故宫", type: "tourism", services: ["sight"], desc: "文化触发，附近有农民兜售老物件。", culture: ["gugong"] }),
    L({ id: "bj_1980_changcheng", city: "bj_1980", district: "north", name: "长城八达岭", type: "tourism", services: ["sight"], desc: "不到长城非好汉。", culture: ["changcheng"] }),
    L({ id: "bj_1980_yiheyuan", city: "bj_1980", district: "north", name: "颐和园", type: "tourism", services: ["sight"], desc: "昆明湖、长廊。", culture: ["yiheyuan"] }),
    L({ id: "bj_1980_xiangshan", city: "bj_1980", district: "north", name: "香山", type: "tourism", services: ["sight"], desc: "红叶满山，登高望远。", culture: ["xiangshan"] }),
    L({ id: "bj_1980_post", city: "bj_1980", district: "north", name: "东四邮局", type: "market", desc: "寄信、发电报、买邮票。庚申年猴票刚刚发行！", buyCat: ["antique"],
      stock: [{ i: "monkey_stamp", q: 300, ch: "free" }, { i: "grain_ticket_sheet", q: 50, ch: "free" }, { i: "picture_book", q: 200, ch: "free" }] }),
    L({ id: "bj_1980_bus_north", city: "bj_1980", district: "north", name: "城北公交站", type: "bus_stop", services: ["bus"], desc: "老式铰接公共汽车，上车一毛钱，通往城东西南。" }),

    L({ id: "bj_modern_chengyuan", city: "bj_modern", district: "south", name: "城中村出租屋", type: "residence", desc: "你现代世界落脚点，家徒四壁但租金便宜。" }),
    L({ id: "bj_modern_supermarket", city: "bj_modern", district: "south", name: "连锁超市", type: "state_store", desc: "现代超市，物美价廉，商品论件卖。", buyCat: [],
      stock: [
        { i: "rice", q: 999, ch: "free" }, { i: "noodle", q: 999, ch: "free" }, { i: "pork", q: 999, ch: "free" }, { i: "egg", q: 999, ch: "free" },
        { i: "apple", q: 999, ch: "free" }, { i: "banana", q: 999, ch: "free" }, { i: "soap", q: 999, ch: "free" }, { i: "matches", q: 999, ch: "free" },
        { i: "plastic_basin", q: 999, ch: "free" }, { i: "nylon_rope", q: 999, ch: "free" }, { i: "led_flashlight", q: 999, ch: "free" }, { i: "thermos", q: 999, ch: "free" },
        { i: "chicken_breast", q: 999, ch: "free" }, { i: "mutton", q: 999, ch: "free" }, { i: "grass_carp", q: 999, ch: "free" }, { i: "shrimp_fresh", q: 999, ch: "free" },
        { i: "milk_box", q: 999, ch: "free" }, { i: "yogurt", q: 999, ch: "free" }, { i: "bread", q: 999, ch: "free" }, { i: "chips", q: 999, ch: "free" },
        { i: "chocolate", q: 999, ch: "free" }, { i: "coffee", q: 999, ch: "free" }, { i: "mineral_water", q: 999, ch: "free" }, { i: "cucumber", q: 999, ch: "free" },
        { i: "eggplant", q: 999, ch: "free" }, { i: "green_pepper", q: 999, ch: "free" }, { i: "watermelon", q: 999, ch: "free" }, { i: "grape", q: 999, ch: "free" },
        { i: "orange", q: 999, ch: "free" }, { i: "strawberry", q: 999, ch: "free" }, { i: "laundry_liquid", q: 999, ch: "free" }, { i: "shampoo", q: 999, ch: "free" },
        { i: "tissue_paper", q: 999, ch: "free" }, { i: "trash_bag", q: 999, ch: "free" }
      ] }),
    L({ id: "bj_modern_wholesale", city: "bj_modern", district: "south", name: "两元店批发市场", type: "market", desc: "廉价批发市场，囤1980年「神物」的地方。", buyCat: ["daily", "electronics", "clothing"],
      stock: [
        { i: "plastic_basin", q: 9999, ch: "free" }, { i: "nylon_rope", q: 9999, ch: "free" }, { i: "led_flashlight", q: 9999, ch: "free" },
        { i: "calculator", q: 9999, ch: "free" }, { i: "electronic_watch", q: 9999, ch: "free" }, { i: "nylon_stockings", q: 9999, ch: "free" },
        { i: "sunglasses", q: 9999, ch: "free" }, { i: "soap", q: 9999, ch: "free" }, { i: "matches", q: 9999, ch: "free" }, { i: "battery", q: 9999, ch: "free" },
        { i: "bulb", q: 9999, ch: "free" }, { i: "detergent", q: 9999, ch: "free" }, { i: "toothpaste", q: 9999, ch: "free" }, { i: "screwdriver", q: 9999, ch: "free" },
        { i: "tape", q: 9999, ch: "free" }, { i: "socket", q: 9999, ch: "free" }, { i: "safety_helmet", q: 9999, ch: "free" }
      ] }),
    L({ id: "bj_modern_antique", city: "bj_modern", district: "south", name: "潘家园古玩城", type: "antique_market", desc: "把1980年带回来的粮票、邮票、旧茅台、银元变现的地方。", buyCat: ["antique"], npcs: ["paimai_manager"],
      stock: [
        { i: "monkey_stamp", q: 50, ch: "free" }, { i: "yuan_datou", q: 50, ch: "free" }, { i: "old_maotai", q: 20, ch: "free" },
        { i: "qing_porcelain", q: 20, ch: "free" }, { i: "zisha_pot", q: 10, ch: "free" }
      ] }),
    L({ id: "bj_modern_pharmacy", city: "bj_modern", district: "south", name: "连锁药店", type: "market", desc: "现代药品齐全。", buyCat: ["medicine"],
      stock: [
        { i: "ibuprofen", q: 999, ch: "free" }, { i: "cold_granule", q: 999, ch: "free" }, { i: "bandaid", q: 999, ch: "free" },
        { i: "thermometer", q: 999, ch: "free" }, { i: "antibiotic", q: 999, ch: "free" }, { i: "iodine_pill", q: 999, ch: "free" }, { i: "vitamin", q: 999, ch: "free" }
      ] }),
    L({ id: "bj_modern_furniture", city: "bj_modern", district: "south", name: "家具城", type: "market", desc: "买家具布置住所。", buyCat: ["appliance", "daily"] }),
    L({ id: "bj_modern_bus_south", city: "bj_modern", district: "south", name: "城南公交站", type: "bus_stop", services: ["bus"], desc: "现代公交车，刷卡两元，通往城东西北。" }),

    L({ id: "bj_modern_cbd", city: "bj_modern", district: "east", name: "CBD金融区", type: "government", services: ["bank", "property"], desc: "银行、外汇与房产中介所在。", npcs: ["bank_manager", "house_agent"] }),
    L({ id: "bj_modern_cinema", city: "bj_modern", district: "east", name: "商业综合体·影院", type: "tourism", services: ["sight"], desc: "逛街看电影吃饭一条龙。" }),
    L({ id: "bj_modern_4s", city: "bj_modern", district: "east", name: "汽车4S店", type: "market", services: ["buycar"], desc: "购买现代载具。", buyCat: [] }),
    L({ id: "bj_modern_shop", city: "bj_modern", district: "east", name: "创业门店", type: "factory", services: ["openshop"], desc: "开店分支：超市模拟器的舞台。" }),
    L({ id: "bj_modern_bus_east", city: "bj_modern", district: "east", name: "城东公交站", type: "bus_stop", services: ["bus"], desc: "现代公交车，刷卡两元，通往城西南北。" }),

    L({ id: "bj_modern_electronics", city: "bj_modern", district: "west", name: "中关村电子市场", type: "market", desc: "现代电子设备集散地。", buyCat: ["electronics"],
      stock: [
        { i: "mobile_phone", q: 999, ch: "free" }, { i: "laptop", q: 999, ch: "free" }, { i: "tablet", q: 999, ch: "free" }, { i: "tv_color", q: 999, ch: "free" },
        { i: "washing_machine", q: 999, ch: "free" }, { i: "refrigerator", q: 999, ch: "free" }, { i: "electric_fan", q: 999, ch: "free" }, { i: "radio", q: 999, ch: "free" },
        { i: "camera_seagull", q: 999, ch: "free" }, { i: "earphone", q: 999, ch: "free" }, { i: "powerbank", q: 999, ch: "free" }, { i: "bt_speaker", q: 999, ch: "free" },
        { i: "smart_watch", q: 999, ch: "free" }, { i: "router", q: 999, ch: "free" }, { i: "microwave", q: 999, ch: "free" }, { i: "rice_cooker", q: 999, ch: "free" },
        { i: "induction_cooker", q: 999, ch: "free" }, { i: "air_fryer", q: 999, ch: "free" }, { i: "air_con", q: 999, ch: "free" }, { i: "printer", q: 999, ch: "free" },
        { i: "drone", q: 999, ch: "free" }, { i: "walkie_talkie", q: 999, ch: "free" }, { i: "gps_handheld", q: 999, ch: "free" }, { i: "night_vision", q: 200, ch: "free" }
      ] }),
    L({ id: "bj_modern_online", city: "bj_modern", district: "west", name: "网购终端", type: "market", services: ["online", "daigou"], desc: "网购全国各省特产与海外代购奢侈品，下单后到工业园区仓储提货。", npcs: ["daigou_buyer"] }),
    L({ id: "bj_modern_industrial", city: "bj_modern", district: "west", name: "工业园区仓储", type: "freight", desc: "成吨购买化肥、种子、机床零件的大宗仓储区，也是网购提货点。",
      stock: [
        { i: "fertilizer_urea", q: 9999, ch: "free" }, { i: "seed_hybrid_rice", q: 9999, ch: "free" }, { i: "greenhouse_film", q: 9999, ch: "free" },
        { i: "antibiotic", q: 9999, ch: "free" }, { i: "wrench_set", q: 9999, ch: "free" }, { i: "iodine_pill", q: 9999, ch: "free" }, { i: "mask_n95", q: 9999, ch: "free" },
        { i: "disinfectant", q: 9999, ch: "free" }
      ] }),
    L({ id: "bj_modern_airport", city: "bj_modern", district: "west", name: "大兴机场·国际仓储", type: "freight", desc: "海外代购奢侈品提货与跨国物流枢纽。" }),
    L({ id: "bj_modern_bus_west", city: "bj_modern", district: "west", name: "城西公交站", type: "bus_stop", services: ["bus"], desc: "现代公交车，刷卡两元，通往城东南北。" }),

    L({ id: "bj_modern_school", city: "bj_modern", district: "north", name: "职业技能培训中心", type: "school", services: ["training"], desc: "在这里学英语/日语/俄语/文物鉴定/计算机，考证书。", npcs: ["training_teacher"] }),
    L({ id: "bj_modern_hospital", city: "bj_modern", district: "north", name: "三甲医院", type: "hospital", services: ["hospital"], desc: "现代医疗资源。" }),
    L({ id: "bj_modern_dmv", city: "bj_modern", district: "north", name: "车管所", type: "government", services: ["dmv"], desc: "办驾照、给车辆上牌。" }),
    L({ id: "bj_modern_park", city: "bj_modern", district: "north", name: "奥林匹克公园", type: "tourism", services: ["sight"], desc: "现代北京的休闲绿地。", culture: ["beihai"] }),
    L({ id: "bj_modern_farm", city: "bj_modern", district: "north", name: "郊区农场", type: "factory", services: ["farm"], desc: "种田分支：委托AI打理的农场。" }),
    L({ id: "bj_modern_bus_north", city: "bj_modern", district: "north", name: "城北公交站", type: "bus_stop", services: ["bus"], desc: "现代公交车，刷卡两元，通往城东西南。" })
  ];

  R.register("locations_bj", { items: locations, map: locations.reduce((m, l) => (m[l.id] = l, m), {}) });
  R.register("districts", districts);
})();
