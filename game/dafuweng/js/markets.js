/* 大富翁 · 三国股市与实体企业 v8
 * 每个国家一套独立股市（各 10 只，共 30 只），股价机制完全相同（买卖驱动 + 涨跌停），
 * 但只能在本国的证券交易所买卖本国股票。
 * 实体公司：中国 2 家、日本 2 家、美国 4 家，收入进公司账户 → 分红给持有其股票的玩家。
 */

/* 中国股市的 10 只在 data.js 已定义，这里补 market 标记 */
STOCKS.forEach(function (s) { if (!s.market) s.market = 'cn'; });

var JP_STOCKS = [
  { id: 'tenno', name: '天皇不动产', entity: 'tenno', initPrice: 120, market: 'jp' },
  { id: 'inari', name: '稻荷神社',   entity: 'inari', initPrice: 80,  market: 'jp' },
  { id: 'jp01', name: '丰田汽车', entity: null, initPrice: 65, market: 'jp' },
  { id: 'jp02', name: '索尼电子', entity: null, initPrice: 70, market: 'jp' },
  { id: 'jp03', name: '软银集团', entity: null, initPrice: 55, market: 'jp' },
  { id: 'jp04', name: '任天堂',   entity: null, initPrice: 90, market: 'jp' },
  { id: 'jp05', name: '三菱重工', entity: null, initPrice: 45, market: 'jp' },
  { id: 'jp06', name: '资生堂',   entity: null, initPrice: 50, market: 'jp' },
  { id: 'jp07', name: '优衣库',   entity: null, initPrice: 60, market: 'jp' },
  { id: 'jp08', name: '新干线',   entity: null, initPrice: 40, market: 'jp' }
];

var US_STOCKS = [
  { id: 'apple',     name: '苹果科技',   entity: 'apple',     initPrice: 150, market: 'us' },
  { id: 'tesla',     name: '特斯拉',     entity: 'tesla',     initPrice: 110, market: 'us' },
  { id: 'wallst',    name: '华尔街投行', entity: 'wallst',    initPrice: 90,  market: 'us' },
  { id: 'hollywood', name: '好莱坞影城', entity: 'hollywood', initPrice: 70,  market: 'us' },
  { id: 'us01', name: '微软',     entity: null, initPrice: 130, market: 'us' },
  { id: 'us02', name: '亚马逊',   entity: null, initPrice: 120, market: 'us' },
  { id: 'us03', name: '可口可乐', entity: null, initPrice: 60,  market: 'us' },
  { id: 'us04', name: '波音',     entity: null, initPrice: 80,  market: 'us' },
  { id: 'us05', name: '耐克',     entity: null, initPrice: 65,  market: 'us' },
  { id: 'us06', name: '麦当劳',   entity: null, initPrice: 55,  market: 'us' }
];

STOCKS = STOCKS.concat(JP_STOCKS, US_STOCKS);

/* 实体企业定义（每家都有同 id 的股票，收入参与分红） */
var COMPANY_DEFS = [
  { id: 'grid',      name: '国家电网',   market: 'cn', emoji: '⚡',   desc: '电费 / 触电罚款' },
  { id: 'petro',     name: '中国石化',   market: 'cn', emoji: '🛢️', desc: '加油 / 加油站服务费' },
  { id: 'tenno',     name: '天皇不动产', market: 'jp', emoji: '🏯',   desc: '仅日本区：购地 20% 赋税 / 房屋月税' },
  { id: 'inari',     name: '稻荷神社',   market: 'jp', emoji: '⛩️', desc: '祈福抽签费' },
  { id: 'apple',     name: '苹果科技',   market: 'us', emoji: '🍎',   desc: '园区服务费 / 新品抢购' },
  { id: 'tesla',     name: '特斯拉',     market: 'us', emoji: '🚗',   desc: '充电服务 / 试驾' },
  { id: 'wallst',    name: '华尔街投行', market: 'us', emoji: '💹',   desc: '咨询费 / 投资理财' },
  { id: 'hollywood', name: '好莱坞影城', market: 'us', emoji: '🎬',   desc: '门票 / 票房抽奖' }
];

var COMPANY_MAP = {};
COMPANY_DEFS.forEach(function (d) { COMPANY_MAP[d.id] = d; });

/* 玩家所在国家 = 所在格子的区域；交易所只列该国股票 */
function marketOf(p) { return regionOf(p.pos); }
function marketLabel(m) { return MARKET_NAMES[m] || m; }
function stocksOfMarket(m) {
  return G.stocks.filter(function (s) { return s.market === m; });
}
