/* ============================================================
 * 数据层 —— 商品表 / 老物件表 / 时间线事件 / 成就
 * 纯数据，调平衡改这里即可
 * ============================================================ */

/* 现代侧货源：现代批发进价 → 1980 黑市基准价
 * buy 现代进价(元)  vol 体积(格)  base 1980基准价(元)
 * risk 风险权重     winter/summer 季节系数 */
var GOODS_MODERN = [
  { id:'sweater',  name:'尾单腈纶毛衣', buy:7,   vol:1,   base:35,  risk:1,   winter:1.35, summer:0.8,  desc:'1980年的时髦硬货，入冬后价格翻着跟头涨' },
  { id:'glasses',  name:'蛤蟆镜',       buy:6,   vol:1,   base:20,  risk:1,   winter:1.0,  summer:1.2,  desc:'迪厅青年标配，墨镜一戴谁都不爱' },
  { id:'ewatch',   name:'电子表',       buy:3,   vol:1,   base:32,  risk:1.5, winter:1.1,  summer:1.0,  desc:'奢侈品替代品，有走私嫌疑，价高风险高' },
  { id:'lighter',  name:'电子打火机',   buy:0.5, vol:0.2, base:10,  risk:1,   winter:1.1,  summer:1.0,  desc:'见火就着，社交场上的神器' },
  { id:'stocking', name:'水晶丝袜',     buy:1,   vol:0.2, base:4,   risk:1.5, winter:0.7,  summer:1.3,  desc:'严打期间属“精神污染”品，慎带' },
  { id:'noodles',  name:'方便面',       buy:2,   vol:0.5, base:6,   risk:0.5, winter:1.0,  summer:1.1,  desc:'新奇零食，县城里没人见过' },
  { id:'candy',    name:'泡泡糖',       buy:0.3, vol:0.1, base:1.5, risk:0.5, winter:1.0,  summer:1.1,  desc:'小孩子的硬通货' },
  { id:'umbrella', name:'折叠尼龙伞',   buy:8,   vol:1.5, base:15,  risk:0.5, winter:1.0,  summer:1.3,  desc:'80年代紧俏货，雨天能卖断货' },
  { id:'jeans',    name:'牛仔裤',       buy:15,  vol:1,   base:50,  risk:1,   winter:1.0,  summer:1.1,  desc:'潮流价，年轻人抢着要' },
  { id:'calc',     name:'电子计算器',   buy:30,  vol:2,   base:180, risk:3,   winter:1.0,  summer:1.0,  desc:'万元户身份象征，暴利但极易被查' }
];

/* 1980 侧老物件：1980 买价 → 2026 市价（带回现代变现）
 * vol 体积(格)   mod 现代市价(元)   sources 购买渠道 */
var GOODS_OLD = [
  { id:'monkey', name:'庚申猴票', vol:0.2, mod:6500,
    sources:[
      { key:'office', name:'邮局排队', price:1.5, limit:10, from:'1980-02', to:'1980-07', desc:'限购10枚/月' },
      { key:'black',  name:'邮市黑市', price:3,   from:'1980-02', desc:'不限量，贵一倍' }
    ],
    desc:'1980年2月发行，面值8分。谁能想到一张小邮票日后值一套房' },
  { id:'camera', name:'海鸥4A相机', vol:3, mod:1100,
    sources:[{ key:'shop', name:'华侨商店', price:210, desc:'凭侨汇券' }],
    desc:'双反相机，当年的一般家庭三年收入' },
  { id:'watch', name:'上海牌手表', vol:1, mod:550,
    sources:[{ key:'shop', name:'百货大楼', price:125, desc:'结婚三大件之一' }],
    desc:'一块上海表，当年是丈母娘的最低要求' },
  { id:'yantai', name:'大前门烟标', vol:0.1, mod:35,
    sources:[{ key:'shop', name:'供销社', price:0.4, desc:'一包三毛五' }],
    desc:'烟标收藏热，成套的更有价值' },
  { id:'longjing', name:'龙井陈茶', vol:1, mod:350,
    sources:[{ key:'shop', name:'茶庄', price:12, desc:'明前茶' }],
    desc:'越陈越香，这一行里少数不会过期的货' },
  { id:'moutai', name:'1985年茅台', vol:1, mod:18000,
    sources:[{ key:'shop', name:'糖酒公司', price:8, limit:2, from:'1985-10', desc:'限购2瓶/月' }],
    desc:'八块钱一瓶的“国酒”。当年喝它的人不知道，日后一瓶顶几年工资' },
  { id:'feile', name:'飞乐音响股票', vol:0.5, mod:2800,
    sources:[{ key:'shop', name:'证券柜台', price:50, limit:5, from:'1984-10', desc:'限购5股/月' }],
    desc:'新中国第一只股票，面值五十元。买了就压箱底' }
];

/* 时间线大事件（1980-1992）
 * date 触发月份  dur 持续月数(空=永久) */
var EVENTS = [
  { id:'monkeyIssue', date:'1980-02', title:'庚申猴票发行',
    text:'邮电部发行庚申年特种邮票“猴票”，面值8分。集邮的门槛，从这一张小小的邮票开始。',
    hint:'1980集市的老物件里出现了猴票：邮局限购、黑市有溢价。' },
  { id:'tighten', date:'1982-01', dur:6, title:'打击投机倒把收紧',
    text:'中央发出通知，打击经济领域犯罪活动。集市上的便衣多了起来，秤杆都攥出了汗。',
    hint:'稽查风险上升30%，持续6个月。' },
  { id:'strike', date:'1983-08', dur:6, title:'严打开始',
    text:'“严打”风暴席卷全国，奇装异服首当其冲——穿喇叭裤上街都可能被剪裤脚。倒爷们的冬天来了。',
    hint:'稽查风险翻倍；丝袜、牛仔裤禁止出售。案值过大直接判刑。' },
  { id:'legit', date:'1984-10', title:'个体户合法化',
    text:'十二届三中全会后，个体经济登上大雅之堂。“雇工”不再是资本家复辟，倒爷可以升级成老板了。',
    hint:'门面与雇工风险清零；信誉60以上可开办工厂。' },
  { id:'dual', date:'1985-01', title:'价格双轨制',
    text:'生产资料价格双轨制推行，计划价与市场价之间的价差，成了倒爷们名正言顺的利润空间。',
    hint:'黑市价长期上浮10%。' },
  { id:'crash', date:'1988-08', dur:3, title:'价格闯关',
    text:'中央决定价格闯关，物价应声而涨。抢购风潮席卷全国，仓库里的货一夜之间金贵起来。',
    hint:'黑市价 ×1.4，持续3个月。囤货的窗口，出大货的机会。' },
  { id:'rect', date:'1989-01', dur:6, title:'治理整顿',
    text:'闯关受挫，转入治理整顿。银根收紧，集市冷清，货压在手就是赔。',
    hint:'黑市价 ×0.85，风险上升，持续6个月。' },
  { id:'open', date:'1990-12', title:'沪市开市',
    text:'上海证券交易所鸣锣开市。与此同时，外贸公司的订单也开始找上门来。',
    hint:'工厂解锁出口订单：产出自动售出，价格上浮。' },
  { id:'safari', date:'1992-03', title:'南巡春风',
    text:'邓小平南巡讲话后，“下海”成为时代热词。你的时代，也到了收官的时刻。',
    hint:'终局判定开启，可以随时选择收官，或撑到1993年自动结算。' }
];

/* 成就 */
var ACHIEVEMENTS = [
  { id:'first',    name:'第一桶金',   text:'现代账户破万，尾单终于开始生钱。' },
  { id:'wanyuan',  name:'万元户',     text:'八十年代的顶级富人。' },
  { id:'survive',  name:'躲过严打',   text:'1983年严打全身而退。' },
  { id:'crash',    name:'闯关抄底',   text:'在价格闯关的风口出了一笔大货。' },
  { id:'monkey10', name:'猴票藏家',   text:'手里攒下了十枚以上的庚申猴票。' },
  { id:'boss',     name:'厂长',       text:'从倒爷升级成实业家。' },
  { id:'export',   name:'出口创汇',   text:'工厂的货装上了出口的船。' },
  { id:'stamp80',  name:'集邮大家',   text:'庚申猴票攒够八十枚，一版在手。' },
  { id:'free',     name:'重获自由',   text:'铁窗之后重新做人。' }
];

/* 结局 */
var ENDINGS = {
  boss:    { id:'boss',    title:'民营实业家',   text:'1992年的春风里，你的针织厂挂上了私营企业的牌照。十二年倒买倒卖，最终你把自己“倒”成了一名厂长。工人们说，厂长当年是靠一仓库毛衣起家的。' },
  stamp:   { id:'stamp',   title:'邮市传奇',     text:'整版庚申猴票躺在你手里。邮市上的人提起你都要尊称一声前辈——那张八分钱的猴子，陪你走完了整个八十年代。' },
  arb:     { id:'arb',     title:'时间套利者',   text:'你从不办厂，只做倒卖。现代账户里的数字，是十二年时间差兑换出来的利息。没有人知道你经历过什么。' },
  wanyuan: { id:'wanyuan', title:'万元户',       text:'八十年代末，你是县里最早的万元户。三转一响置办齐整，来提亲的人踏破了门槛。' },
  plain:   { id:'plain',   title:'平凡倒爷',     text:'赚过，也栽过。1992年你盘掉铺子回到现代，银行里的存款够你下半生衣食无忧——只是偶尔还会想起那扇防盗门。' },
  prison:  { id:'prison',  title:'铁窗倒爷',     text:'投机倒把，数额巨大。铁窗里的你总会想起卖出的第一件毛衣——如果那天收手就好了。' },
  broke:   { id:'broke',   title:'血本无归',     text:'货压在手里，钱赔了个精光。倒爷这碗饭，终究不是人人吃得起的。' }
};
