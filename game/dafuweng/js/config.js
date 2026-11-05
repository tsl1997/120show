/* 大富翁 · 中国城市版 —— 全局配置
 * 加载顺序：config → data → state → board → estate → bank → stock → company → events → engine → ai → main
 */

/* 城市名池（洗牌取用，保证不重复；田字地图 34 块地产，池子留足冗余） */
var CITY_POOL = [
  '北京', '上海', '广州', '深圳', '杭州', '南京', '成都', '重庆',
  '武汉', '西安', '苏州', '天津', '长沙', '郑州', '青岛', '大连',
  '厦门', '宁波', '无锡', '合肥', '福州', '济南', '沈阳', '昆明',
  '贵阳', '南昌', '南宁', '兰州', '太原', '石家庄', '哈尔滨', '长春',
  '呼和浩特', '银川', '西宁', '拉萨', '乌鲁木齐', '海口', '珠海', '佛山',
  '东莞', '泉州', '温州', '烟台', '唐山', '徐州', '绍兴', '嘉兴',
  '洛阳', '襄阳', '宜昌', '岳阳', '桂林', '丽江', '大同', '包头',
  '锦州', '牡丹江', '克拉玛依', '日喀则'
];

/* 图标（Iconify 开源图标库）+ Emoji 兜底 */
var ICON = {
  start:    'game-icons:money-bag',
  estate:   'game-icons:home-garage',
  bank:     'game-icons:bank',
  hospital: 'game-icons:health-normal',
  grid:     'game-icons:power-lightning',
  gas:      'game-icons:fuel-tower',
  mall:     'game-icons:shopping-cart',
  stock:    'game-icons:chart-line-up',
  park:     'game-icons:park-alt',
  police:   'game-icons:policeman',
  chance:   'game-icons:suspended-star',
  jail:     'game-icons:padlock',
  oil:      'game-icons:deposit-oil'
};

var ICON_FALLBACK = {
  start: '💰', estate: '🏠', bank: '🏦', hospital: '🏥', grid: '⚡',
  gas: '⛽', mall: '🛒', stock: '📈', park: '🌳', police: '👮',
  chance: '⭐', jail: '🔒', oil: '🛢️',
  walk: '🚶', moto: '🏍️', car: '🚗',
  mouse: '🐭', fox: '🦊', panda: '🐼', duck: '🦆',
  port: '⚓', airport: '✈️', shrine: '⛩️', fishery: '🎣', corp: '🏢'
};

/* 玩家形象 */
var AVATARS = [
  { id: 'mouse', name: '米鼠', icon: 'game-icons:mouse' },
  { id: 'fox',   name: '阿狸', icon: 'game-icons:fox' },
  { id: 'panda', name: '熊猫', icon: 'game-icons:panda' },
  { id: 'duck',  name: '唐鸭', icon: 'game-icons:duck' }
];

/* 载具：dice=骰子数，perMove=每次行动耗油，tank=油箱容量 */
var VEHICLES = {
  walk: { id: 'walk', name: '步行',   cost: 0,    tank: 0,   perMove: 0,  dice: 1 },
  moto: { id: 'moto', name: '摩托车', cost: 1000, tank: 100, perMove: 5,  dice: 2 },
  car:  { id: 'car',  name: '小汽车', cost: 3000, tank: 200, perMove: 10, dice: 3 }
};

/* 银行 */
var BANK_DAILY_RATE = 0.001;            /* 存款日息 0.1% */
var LOAN_MAX_RATIO  = 0.6;              /* 贷款额度 = 总资产 x 60% */
/* 分期方案：期数 -> 每期利息率（3期共15%、6期共24%、12期共36%） */
var LOAN_PLANS = { 3: 0.05, 6: 0.04, 12: 0.03 };
var LOAN_OVERDUE_PENALTY = 0.05;        /* 分期扣款不足时的滚存罚息 */

/* 股市 */
var STOCK_LIMIT      = 0.10;            /* 每日涨跌停 ±10% */
var STOCK_COUNT      = 10;
var STOCK_START_PRICE = 100;

/* NPC（路人） */
var NPC_COUNT = 4;
var NPC_NAMES = ['王大爷', '李阿姨', '赵铁柱', '钱多多', '孙大圣', '周小妹'];

/* 公司（电网/石化），等级 1-5 */
var COMPANY_LEVELS = [
  { toll: 200,  fine: 500 },
  { toll: 350,  fine: 700 },
  { toll: 500,  fine: 900 },
  { toll: 700,  fine: 1200 },
  { toll: 1000, fine: 1500 }
];

/* 医院 */
var HOSPITAL_FEE  = 800;
var HOSPITAL_DAYS = 3;

/* 加油站：10 单位汽油基准价 100 元，按石化上月收益浮动 */
var GAS_UNIT       = 10;
var GAS_BASE_PRICE = 100;               /* 每 10 单位汽油的价格 */
var GAS_GOOD       = 0.8;               /* 收益好：降价 20% */
var GAS_BAD        = 1.3;               /* 收益差：涨价 30% */

/* 电费：每栋建筑每月基础电费 100 元 */
var GRID_BASE_FEE = 100;

/* 房屋等级：toll/up 数组下标 = 地块档位（0普通 1繁华 2核心） */
var ESTATE_LEVELS = [
  { name: '空地', toll: [80,  120, 150], up: [0,    0,    0   ] },
  { name: '小屋', toll: [180, 260, 340], up: [0,    0,    0   ] },
  { name: '洋楼', toll: [280, 400, 520], up: [400,  700,  1100] },
  { name: '大厦', toll: [420, 600, 780], up: [600,  1000, 1600] }
];
var ESTATE_BUY_PRICE = [800, 1500, 2500];   /* 购地价（按档位） */

/* 地块卡通配色（三档） */
var ESTATE_COLORS = ['#ffd7ea', '#ffedc2', '#d3f2ff'];
var ESTATE_BORDER = ['#ff9ec8', '#ffc06e', '#7cc6ff'];

/* 日历：每月 30 天 */
var MONTH_DAYS = 30;

/* ---------- 动画时长（毫秒）与倍速 ---------- */
/* speed：1/2/4 玩家可切换；>=100 时跳过全部动画（测试用） */
/* v7：整体节奏放慢，逐格走棋看得清（右上角倍速按钮仍可 2x/4x 加速） */
var ANIM = { dice: 850, step: 320, settle: 380, aiDelay: 650, speed: 1 };

/* 异步等待（受倍速影响） */
function asleep(ms) {
  return new Promise(function (r) { setTimeout(r, Math.max(0, Math.round(ms / ANIM.speed))); });
}


/* ---------- 物价系数（v4） ----------
 * 每月 1 日 +1，从 1 涨到 10（到 10 时游戏结束）。
 * 所有扣费项目 x 系数：买地/升级/过路费/医院/加油/买车/机会罚款/穷神/电费/公司升级。
 * 不受影响：银行存款利息、股票价格、贷款分期金额、起点工资、财神奖励、NPC 交易。 */
var PRICE_MAX = 10;

/* ---------- 神仙（v4） ----------
 * 财神：一次性。停留触发，4 位数字滚动 0-9999 现金奖励，给完消失。
 * 穷神：一次性。停留触发，3 位数字滚动 100-999，发给其他所有玩家，给完消失。
 * 天使：附身 7 回合。停留的格子建筑无条件 +1（空地免费盖小屋）；
 *       停自己的地再 +1（共 +2）；停别人的地也 +1（内鬼行为）。结算先于过路费。
 * 恶魔：附身 7 回合。停留的格子建筑 -1（无论谁的），降到 0 为止。结算先于过路费。 */
var GODS = {
  caishen: { id: 'caishen', name: '财神', icon: 'game-icons:money-bag',  emoji: '🧧', once: true },
  qiongshen:{ id: 'qiongshen', name: '穷神', icon: 'game-icons:empty-bag', emoji: '🥀', once: true },
  tianshi: { id: 'tianshi', name: '天使', icon: 'game-icons:angel-outfit', emoji: '😇', once: false, turns: 7 },
  emeng:   { id: 'emeng',   name: '恶魔', icon: 'game-icons:devil',       emoji: '😈', once: false, turns: 7 }
};
/* 开局随机布置的神仙数量（从地产格里挑） */
var GOD_SPAWN_COUNT = 4;

/* ---------- 起点工资（不受物价系数影响） ---------- */
var START_SALARY = 2000;


/* ---------- 地区类型（v5）：过路费系数 ----------
 * 贫穷 0.6 / 普通 1.0 / 富裕 1.4（只乘过路费，不影响地价/升级） */
var ZONE_TOLL_MUL = { 0: 0.6, 1: 1.0, 2: 1.4 };
var ZONE_NAMES = { 0: '贫穷', 1: '普通', 2: '富裕' };

/* ---------- 道具（v5） ---------- */
/* 遥控骰子：使用后本回合掷出指定点数（1-18 任选） */
/* 路障：放置在任意格子，路过者强制停在该格（拦停后路障消失） */
var ITEMS = {
  diceCtrl: { id: 'diceCtrl', name: '遥控骰子', emoji: '🎯', cost: 5000, desc: '本回合掷出指定点数（1-18）' },
  barrier:  { id: 'barrier',  name: '路障',     emoji: '🚧', cost: 2000, desc: '放置在任意格子，路过者强制停下' }
};
