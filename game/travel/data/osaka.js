/* ============ 日本·大阪府 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'osaka',
    name: '大阪府',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关西',
    hero: '🐙',
    desc: '"天下厨房"的烟火之都：道顿堀的格力高跑者霓虹、章鱼烧的锅铲声、大阪人自来熟的笑，热闹是这座城的方言。',
    travel: [{ name: '飞机', icon: '✈️', cost: 2000 }, { name: '高铁·新干线', icon: '🚄', cost: 2200 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'osaka_doutonbori', name: '道顿堀', icon: '🏮', price: 0, desc: '巨型霓虹招牌的怪兽电寸场：格力高跑者、蟹道乐大螃蟹。河边一边啃章鱼烧一边看灯，大阪夜色的正确打开方式。' },
      { id: 'osaka_castle', name: '大阪城天守阁', icon: '🏯', price: 40, desc: '丰臣秀吉的"太阁之城"，白墙绿瓦配金色虎纹装饰。护城河与巨石城墙气势仍在，顶层俯瞰大阪全景。' },
      { id: 'osaka_usj', name: '日本环球影城', icon: '🎢', price: 420, desc: '哈利波特魔法世界、马里奥园区、侏罗纪漂流。黄油啤酒无酒精但够甜，排队两小时喊一声"值得"。' },
      { id: 'osaka_kuromon', name: '黑门市场', icon: '🐟', price: 0, desc: '"大阪的厨房"，一百多家摊位现开海胆、现烤和牛。边走边吃是默认规则，摊主招呼声比商品还热。' },
      { id: 'osaka_shinsaibashi', name: '心斋桥筋商店街', icon: '🛍️', price: 0, desc: '600米带顶棚的购物长廊，药妆店密度全日本第一。从潮牌到百年老铺，走完腿已软、袋已满。' },
      { id: 'osaka_tsutenkaku', name: '通天阁·新世界', icon: '🗼', price: 20, desc: '大阪的"埃菲尔铁塔"，下层是老式居酒屋与串炸店。塔顶的福神"Billiken"摸脚许愿，据说愿望会实现。' },
      { id: 'osaka_sumiyoshi', name: '住吉大社', icon: '⛩️', price: 0, desc: '日本住吉造神社的总本社，倒立石"反桥"陡得让人手脚并用。求航海平安千年香火不断。' },
    ],
    souvenirs: [
      { id: 'osaka_takoyaki', name: '章鱼烧', icon: '🐙', tag: '食', type: '美食', price: 35, desc: '铁盘翻飞转出金黄圆球，章鱼块烫嘴、柴鱼片跳舞。外脆内流心，大阪的"灵魂街头小吃"。' },
      { id: 'osaka_okonomiyaki', name: '御好烧', icon: '🥞', tag: '食', type: '美食', price: 55, desc: '"想加啥加啥"的铁板煎饼，木鱼花在热饼上跳舞。摊主拿两把小铲"咔咔"分割，仪式感满分。' },
      { id: 'osaka_kushikatsu', name: '串炸', icon: '🍢', tag: '食', type: '美食', price: 45, desc: '裹糠深炸的肉串蔬菜串，蘸酱一口一个。铁规：酱料池公用、禁止回蘸！桌上写着"二次蘸酱禁止"。' },
      { id: 'osaka_kani', name: '蟹道乐螃蟹宴', icon: '🦀', tag: '食', type: '美食', price: 250, desc: '巨型雪蟹从刺身到烤蟹、蟹肉釜饭一蟹六吃。门口的机械大螃蟹是合影地标，吃蟹是"到此一游"的正式手续。' },
      { id: 'osaka_ikayaki', name: '大阪烧鱿鱼饼', icon: '🦑', tag: '食', type: '美食', price: 25, desc: '街头铁板现压的鱿鱼薄饼刷甜酱油。边走边吃、纸托接汁，是大阪人从小练的技能。' },
      { id: 'osaka_ramen_ish', name: '吃倒太郎', icon: '🍙', tag: '食', type: '美食', price: 60, desc: '松屋式的"倒灶"文化：便宜大碗吃到扶墙。大阪话"kuidaore"（吃到破产）是这座城市给吃货的勋章。' },
      { id: 'osaka_sake', name: '日本酒·啤酒工厂', icon: '🍺', tag: '食', type: '饮品', price: 40, desc: '朝日、麒麟工厂参观免费试饮。大阪人喝酒不矜持，"干杯"一声整条居酒屋街都会回头。' },
      { id: 'osaka_glico', name: '格力高跑者周边', icon: '🏃', tag: '衣', type: '文创', price: 40, desc: '招牌跑者姿态做成钥匙扣、T恤、年轮蛋糕盒。学跑者同款举手姿势拍照，是道顿堀的打卡宪法。' },
      { id: 'osaka_banpaku', name: '万博纪念品·沙漏', icon: '⏳', tag: '衣', type: '文创', price: 50, desc: '1970世博会"太阳之塔"文创与吹气玩偶。大阪人对外来文化的热情，五十年前就已经"世界级"。' },
      { id: 'osaka_subway', name: '大阪地铁一日券', icon: '🚇', tag: '行', type: '体验', price: 30, desc: '御堂筋线纵贯南北，大阪地铁报站自带大阪腔。一天坐遍梅田、难波、天王寺，路痴也容易迷路成精。' },
      { id: 'osaka_ferris', name: '天保山摩天轮', icon: '🎡', tag: '玩', type: '体验', price: 50, desc: '曾经的世界最大摩天轮，四色车厢里有透明地板款。转到顶端能望见明石海峡大桥和机场跑道。' },
      { id: 'osaka_taiko', name: '太鼓达人游戏机', icon: '🥁', tag: '玩', type: '体验', price: 15, desc: '游戏中心的两根鼓棒，敲一局太鼓达人。大阪人打鼓手速与方言一样快，围观者自动鼓掌。' },
      { id: 'osaka_hotel', name: '难波商务酒店', icon: '🏨', tag: '住', type: '住宿', price: 300, desc: '三平米精致小房，洗漱品齐全、便利店楼下。大阪住宿性价比之王，出门就是美食街。' },
    ],
    stories: [
      { id: 'osaka_story_kuidaore', name: '"吃到破产"的城市', icon: '🍽️', desc: '大阪话"kuidaore"意为"吃到破产"，是这座城给吃货的骄傲称号。大阪人看到好吃的，第一反应不是拍照，是冲上去。' },
      { id: 'osaka_story_glico', name: '格力高跑者的"挥手学"', icon: '🏃', desc: '道顿堀跑者霓虹牌换了六代，姿势始终是双手举起的胜利造型。游客拍照必须学这个手势，算是暗号。' },
      { id: 'osaka_story_zhashi', name: '串炸"禁止回蘸"', icon: '🚫', desc: '公用蘸酱池里不许把咬过的串再放回去，是百年铁规。违反会被店员温柔提醒，被同桌朋友无情嘲笑。' },
      { id: 'osaka_story_yunishiki', name: '大阪人自来熟', icon: '🗣️', desc: '排队的大阪大爷会主动跟你唠十分钟家常，商店街摊主见人就喊"来尝尝嘛"。东京人内敛、大阪人自来熟，是日本公认南北差异。' },
      { id: 'osaka_story_billiken', name: '摸脚的福神', icon: '🦶', desc: '通天阁的福神 Billiken 是"会带来好运的神"，先许愿再摸它的脚。一百年来它的脚底被摸得锃亮。' },
      { id: 'osaka_story_tanaka', name: '霓虹灯牌的"怪兽电寸场"', icon: '💡', desc: '道顿堀的蟹道乐机械蟹会挥钳、河豚灯笼会鼓气。大阪人不满足于灯牌，直接把店铺招牌做成了机械动物园。' },
    ],
  });
})();
