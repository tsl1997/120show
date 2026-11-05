/* 大富翁 · 实体公司系统（国家电网 / 中国石化）
 * 收入来源：
 *   电网：路过缴电费（每人每建筑）+ 停留触电罚款（随等级）
 *   石化：加油站停留扣费（随等级）+ 卖油收入
 * 分配：收入的 30% 留公司升级 → 50% 进分红池 → 20% 公司现金留存
 * 注意用户规则：50% 分红、30% 升级、其余留存。满级后回购股票（每日）。
 */

/* 公司收入入口（所有电网/石化进账都走这里） */
function companyIncome(cid, amount, reason) {
  var c = G.companies[cid];
  if (!c || amount <= 0) return;
  c.monthlyIncome += amount;
  c.cash += amount;
  /* 同步到股票的月营收（NPC 决策用） */
  var st = G.stockMap[cid];
  if (st) st.monthlyRevenue = c.monthlyIncome;
}

/* 每月 1 日：公司月结 */
function companyMonthlySettle() {
  Object.keys(G.companies).forEach(function (cid) {
    var c = G.companies[cid];
    var st = G.stockMap[cid];

    /* 1) 尝试升级（优先级最高）
     * 升级费用 = 当前等级对应 toll x 20（约为 20 天过路费） */
    var upgradeCost = Math.round(COMPANY_LEVELS[c.level - 1].toll * 20 * priceMul());
    while (c.level < 5 && c.cash >= upgradeCost) {
      c.cash -= upgradeCost;
      c.level++;
      log('【公司】' + c.name + ' 升级！现在是 Lv.' + c.level, 'company');
      upgradeCost = COMPANY_LEVELS[c.level - 1].toll * 20;
    }

    /* 2) 分红：50% 现金进分红池 */
    var dividendBase = Math.floor(c.cash * 0.5);
    var pool = st ? Math.floor(dividendBase) : 0;
    if (st && pool > 0) {
      st.dividendPool += pool;
      c.cash -= pool;
      log('【公司】' + c.name + ' 本月净留存收益 ' + c.lastMonthlyIncome + ' 元，其中 ' + pool + ' 元注入分红池', 'company');
    }

    /* 3) 记录收入好坏 → 影响下月油价 */
    c.settledOnce = true;
    c.lastIncomeGood = c.monthlyIncome >= c.lastMonthlyIncome;

    /* 4) 滚动记录 */
    st.lastMonthlyRevenue = st.monthlyRevenue;
    st.monthlyRevenue = 0;
    c.lastMonthlyIncome = c.monthlyIncome;
    c.monthlyIncome = 0;
  });
}

/* 每日：公司满级后用留存资金回购股票（只买不卖） */
function companyDailyBuyback() {
  Object.keys(G.companies).forEach(function (cid) {
    var c = G.companies[cid];
    var st = G.stockMap[cid];
    if (!st || c.level < 5) return;              /* 未满级不回购 */
    if (c.cash < st.price * 10) return;          /* 钱太少不回购 */
    /* 每日回购金额 = 现金的 10%，向上推动股价 */
    var budget = Math.floor(c.cash * 0.1);
    var cnt = Math.floor(budget / st.price);
    if (cnt <= 0) return;
    c.cash -= cnt * st.price;
    st.buyPressure += cnt;                        /* 回购=买入压力 → 推涨股价 */
    st.volume += cnt;
    log('【公司】' + c.name + ' 回购 ' + cnt + ' 股自家股票', 'company');
  });
}

/* ===== 电网收费 ===== */

/* v3：电费 = 预存制。路过电网不收费。
 * 停留电网时若本月电费未预存，提示补缴（弹窗里操作）；月末统一从预存扣。 */
function gridStayCheck(p) {
  var cnt = regionBuildingCounts(p);
  return {
    buildings: cnt.cn,             /* 只有中国区建筑接国家电网 */
    overseas: cnt.overseas,        /* 日美建筑本地供电，不计费不停电 */
    empty: cnt.empty,              /* 空地不需要电 */
    monthlyNeed: monthlyElectricityFee(p),
    prepaid: p.electValue,
    debt: p.electDebt || 0
  };
}

/* 玩家停留在电网：触电罚款（随等级，x 物价）+ 2 天不能行动 */
function gridStayPenalty(p) {
  var fine = Math.round(COMPANY_LEVELS[G.companies.grid.level - 1].fine * priceMul());
  var pay = transferMoney(p, null, fine, '触电罚款');
  companyIncome('grid', fine, '触电罚款');
  p.jailDays = Math.max(p.jailDays, 2);
  log('【电网】⚡ ' + p.name + ' 在电网触电！罚款 ' + fine + ' 元，休养 2 天', 'grid');
  say(p, 'grid', '触电！罚款 ' + fine + ' 元，休养 2 天');
}

/* 预存电费（只能存不能取）；若处于停电欠费状态，补缴够欠费立即复电 */
function gridPrepay(p, amount) {
  amount = Math.floor(amount);
  if (amount <= 0 || p.cash < amount) return { ok: false, msg: '金额无效' };
  p.cash -= amount;
  /* 欠费优先从本次预存里结清 */
  var debt = p.electDebt || 0;
  var clear = Math.min(amount, debt);
  if (clear > 0) {
    p.electDebt = debt - clear;
    companyIncome('grid', clear, '补缴电费');
    amount -= clear;
  }
  p.electValue += amount;
  log('【电网】' + p.name + ' 预存电费 ' + (amount + clear) + ' 元（补缴欠费 ' + clear + ' 元，预存余额 ' + p.electValue + ' 元）', 'grid');
  if (p.electDebt === 0) {
    var restored = 0;
    G.tiles.forEach(function (tile) {
      if (tile.t === 'estate' && tile.owner === p.idx && !tile.electrified) {
        tile.electrified = true;
        restored++;
      }
    });
    if (restored > 0) {
      log('【电网】✅ ' + p.name + ' 欠费已结清，' + restored + ' 块房产恢复供电！', 'grid');
      if (typeof updateBoardDOM === 'function') updateBoardDOM();
    }
  }
  return { ok: true };
}

/* ===== 石化收费 ===== */

/* 玩家停留在加油站：扣费（随石化等级，x 物价） */
function gasStayFee(p) {
  var fee = Math.round(COMPANY_LEVELS[G.companies.petro.level - 1].toll * priceMul());
  var pay = transferMoney(p, null, fee, '加油费');
  companyIncome('petro', fee, '加油服务');
  log('【加油站】' + p.name + ' 停留在加油站，服务费 ' + fee + ' 元', 'gas');
  return pay;
}


/* ===== v9：每月电费结算（按国家自治 + 自动补扣） =====
 * 规则修正：
 *  - 国家电网只覆盖「中国区有建筑」的地块；日本/美国的建筑由当地电网供电，
 *    既不产生电费，也永远不会停电（之前跨三国一起算，玩家在国外无法缴费就全盘停摆）。
 *  - 空地没有用电设备，永远通电、照收基础过路费。
 *  - 扣款三段式：预存 → 钱包现金 → 银行存款 自动划扣，不再要求玩家必须跑到电网预存；
 *    只有三处都掏空才记欠费，且只停中国区有建筑的地块。
 */
function regionBuildingCounts(p) {
  var cn = 0, overseas = 0, empty = 0;
  G.tiles.forEach(function (t) {
    if (t.t !== 'estate' || t.owner !== p.idx) return;
    if (t.level === 0) { empty++; return; }
    if (t.region === 'cn') cn++; else overseas++;
  });
  return { cn: cn, overseas: overseas, empty: empty };
}

function monthlyElectricityFee(p) {
  return Math.round(regionBuildingCounts(p).cn * GRID_BASE_FEE * priceMul());
}

function settleElectricityMonthly() {
  var totalIncome = 0;
  G.players.forEach(function (pl) {
    if (!pl.alive) return;

    /* ① 海外建筑 / 空地一律强制通电 */
    G.tiles.forEach(function (tile) {
      if (tile.t !== 'estate' || tile.owner !== pl.idx) return;
      if (tile.region !== 'cn' || tile.level === 0) tile.electrified = true;
    });

    var fee = monthlyElectricityFee(pl);
    if (fee <= 0) {
      if (pl.electDebt > 0) pl.electDebt = 0;
      return;
    }

    var due = fee + (pl.electDebt || 0);
    var paid = 0;
    /* ② 预存抵扣 */
    var fromPrepaid = Math.min(pl.electValue, due);
    pl.electValue -= fromPrepaid; paid += fromPrepaid;
    /* ③ 钱包现金 → ④ 银行存款 自动补扣 */
    var rest = due - paid;
    if (rest > 0) {
      var useCash = Math.min(pl.cash, rest);
      pl.cash -= useCash; rest -= useCash; paid += useCash;
    }
    if (rest > 0) {
      var useBank = Math.min(pl.bank, rest);
      pl.bank -= useBank; rest -= useBank; paid += useBank;
    }
    pl.electDebt = Math.max(0, rest);
    totalIncome += paid;

    var powered = pl.electDebt === 0;
    var byAccount = paid - fromPrepaid;
    G.tiles.forEach(function (tile) {
      if (tile.t === 'estate' && tile.region === 'cn' && tile.level > 0 && tile.owner === pl.idx) {
        tile.electrified = powered;
      }
    });
    if (powered) {
      log('【电网】💡 ' + pl.name + ' 扣除本月电费 ' + paid + ' 元（预存抵 ' + fromPrepaid +
        ' + 账户自动划扣 ' + byAccount + '），中国区 ' + regionBuildingCounts(pl).cn + ' 栋建筑正常供电', 'grid');
    } else {
      log('【电网】⚠️ ' + pl.name + ' 电费应缴 ' + due + ' 元，仅付 ' + paid + ' 元，欠费 ' + pl.electDebt +
        ' 元：仅中国区建筑停电（空地与海外房产照常收租）！', 'warn');
    }
  });
  if (totalIncome > 0) {
    companyIncome('grid', totalIncome, '电费');
    log('【电网】📊 本月电费收入合计 ' + totalIncome + ' 元已入账', 'grid');
  }
  if (typeof updateBoardDOM === 'function') updateBoardDOM();
  return totalIncome;
}
