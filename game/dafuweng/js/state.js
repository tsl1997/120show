/* 大富翁 · 游戏状态
 * 全局状态对象 G，游戏的所有可变数据都在这里。
 * 命名空间：G.players / G.tiles / G.stocks / G.companies / G.npcs / G.day
 */
function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/* 数值取整（金额），向下取整避免利息小数 */
function ifloor(n) { return Math.floor(n); }

/* 新建玩家 */
function newPlayer(idx, avatar, isAI, name) {
  return {
    idx: idx,                    /* 玩家序号 0-3 */
    avatar: avatar,              /* { id, name, icon } */
    name: name || avatar.name,   /* 自定义名称（默认用头像名） */
    god: null,                   /* 附身神仙 { id, turnsLeft }（天使/恶魔） */
    lastDir: 'right',            /* 上一步行走方向（岔路口用） */
    isAI: !!isAI,                /* 是否电脑 */
    alive: true,                 /* 是否还在游戏（未破产） */
    pos: 0,                      /* 当前格子索引 */
    cash: 100000,                /* 钱包现金（初始 10 万，避免短期破产） */
    bank: 0,                     /* 银行存款 */
    loan: null,                  /* 贷款 { amount, terms, perTerm, interestPerTerm, payDay, source, paid } */
    stocks: {},                  /* 持股 { stockId: 股数 } */
    vehicle: 'walk',             /* 载具：walk / moto / car */
    fuel: 0,                     /* 当前油量 */
    hospitalDays: 0,             /* 剩余住院天数 */
    jailDays: 0,                 /* 剩余坐牢天数 */
    powerOffDays: 0,             /* 房产断电天数（欠电费） */
    electValue: 0,               /* 电费预存余额 */
    electDebt: 0,                /* 电费欠费（停电中，补缴后恢复） */
    unpaidTollTotal: 0,          /* 累计未付过路费（黑名单标记用） */
    items: { diceCtrl: 0, barrier: 0 },   /* 道具背包 */
    diceCtrlNext: null,          /* 遥控骰子指定的点数（本回合生效） */
    fortune: null,               /* 稻荷神社运势 { type:'吉'|'凶', until:绝对月份 } */
    color: null                  /* 显示色（由 board.js 分配） */
  };
}

/* 新建股票状态 */
function newStock(def) {
  return {
    id: def.id,
    name: def.name,
    market: def.market || 'cn',  /* v8：所属国家股市 cn / jp / us */
    entity: def.entity,          /* 实体公司 id 或 null */
    price: def.initPrice,
    lastPrice: def.initPrice,
    history: [def.initPrice],    /* 价格历史（图表用） */
    volume: 0,                   /* 当日成交量 */
    buyPressure: 0,              /* 当日净买压（正=净买入，负=净卖出） */
    dividendPool: 0,             /* 待分红池（公司注入） */
    monthlyRevenue: 0,           /* 本月营收（实体公司） */
    lastMonthlyRevenue: 0,       /* 上月营收（NPC 决策用） */
    buybackPool: 0,              /* 回购池（公司满级后） */
    totalShares: 100000,         /* 总股本（固定，便于百分比计算） */
    npcShares: 0,                /* NPC 合计持股 */
    playerShares: 0              /* 玩家合计持股 */
  };
}

/* 新建公司状态（电网/石化） */
function newCompany(def) {
  return {
    id: def.id,
    name: def.name,
    level: 1,
    cash: 0,                     /* 公司账户余额 */
    monthlyIncome: 0,            /* 本月收入 */
    lastMonthlyIncome: 0,        /* 上月收入 */
    lastIncomeGood: false,       /* 上月收益好坏（调油价用） */
    settledOnce: false           /* 是否完成过月结（首月油价用基准价） */
  };
}

/* 新建 NPC */
function newNPC(idx, name) {
  return {
    idx: idx,
    name: name || NPC_NAMES[idx] || ('路人' + idx),
    cash: 20000,                 /* NPC 资金（影响买卖力度） */
    stocks: {},                  /* 持股 */
    mood: 0                      /* 情绪 -1~+1（对市场整体） */
  };
}

/* ========== 构建整局游戏状态 ========== */
/* opts: { players: [{ avatar, isAI }], }
 * 返回 G 对象，之后由 main.js 装配渲染。 */
function buildGame(playersSpec) {
  /* 三国城市名分别洗牌，各自从 0 开始分配 */
  var namePools = { cn: shuffle(CITY_POOL), jp: shuffle(JP_CITY_POOL), us: shuffle(US_CITY_POOL) };
  var nameCursor = { cn: 0, jp: 0, us: 0 };
  var tiles = WORLD_LAYOUT.map(function (d, i) {
    var tile = {
      idx: i,
      region: d.region,          /* 所属国家 */
      local: d.local,            /* 区域内序号 */
      t: d.t,
      cid: d.cid || null,        /* 企业格对应的公司 id */
      name: d.name || null,
      z: d.z != null ? d.z : 1,
      g: d.g != null ? d.g : (d.z != null ? d.z : 1),
      owner: null,
      level: 0,
      electrified: true,
      barrier: null,
      god: null,
      icon: null
    };
    if (d.t === 'estate') {
      var r = d.region;
      tile.name = namePools[r][nameCursor[r]++] || (REGION_NAMES[r] + '城市' + d.local);
    }
    return tile;
  });

  var stocks = STOCKS.map(newStock);
  var stockMap = {};
  stocks.forEach(function (s) { stockMap[s.id] = s; });
  var marketStockIds = { cn: [], jp: [], us: [] };
  stocks.forEach(function (s) { if (marketStockIds[s.market]) marketStockIds[s.market].push(s.id); });

  var companies = {};
  COMPANY_DEFS.forEach(function (def) { companies[def.id] = newCompany(def); });

  var npcs = [];
  var npcNames = (playersSpec.npcNames) || NPC_NAMES;
  for (var i = 0; i < NPC_COUNT; i++) {
    npcs.push(newNPC(i, npcNames[i]));
  }

  var players = playersSpec.map(function (spec, i) {
    return newPlayer(i, spec.avatar, spec.isAI, spec.name);
  });

  /* 神仙：中国 2 位 + 日本 1 位 + 美国 1 位，保证各国都能遇到 */
  var godIds = ['caishen', 'qiongshen', 'tianshi', 'emeng'];
  var pools = {};
  REGIONS.forEach(function (r) {
    pools[r] = shuffle(tiles.filter(function (t) { return t.region === r && t.t === 'estate'; })
      .map(function (t) { return t.idx; }));
  });
  [['cn', 0], ['cn', 1], ['jp', 2], ['us', 3]].forEach(function (pair) {
    if (pools[pair[0]].length) tiles[pools[pair[0]][0]].god = godIds[pair[1]];
  });

  return {
    day: 1, month: 1, year: 1,   /* 从 1年1月1日 开始 */
    priceIndex: 1,               /* 物价系数：每月+1，到 10 游戏结束 */
    viewRegion: 'cn',            /* 当前显示的国家地图 */
    marketStockIds: marketStockIds,  /* 各国股市的股票 id 列表 */
    turn: 0,                     /* 当前行动玩家序号 */
    round: 1,                    /* 第几轮 */
    players: players,
    tiles: tiles,
    stocks: stocks,
    stockMap: stockMap,
    companies: companies,
    npcs: npcs,
    log: [],                     /* 游戏日志 { day, month, text, type } */
    phase: 'idle',               /* idle / moving / action / gameover */
    started: false,
    gameOver: false,
    winners: [],
    lastDice: null,              /* 最近一次骰子结果数组 */
    pendingLoans: {}             /* 每月待扣贷款 { playerIdx: [loan...] } */
  };
}

/* 调试入口 */
/* window.__monopoly = ... 由 main.js 装配 */
