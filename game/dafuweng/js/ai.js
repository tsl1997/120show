/* 大富翁 · AI 玩家决策
 * 决策原则（按优先级）：
 *   1. 保命：现金 < 1500 时优先变现（卖股/取存款）
 *   2. 加油：有载具且油量 < 单次消耗 x 2 → 加满
 *   3. 买地/升级：现金充足时优先核心地段（g=2 > 1 > 0）
 *   4. 存钱：路过银行且现金 > 8000 → 存 50%
 *   5. 电费：路过电网，预存余额 < 名下建筑月费 x 2 → 补足
 *   6. 股票：现金 > 12000 时，选最近 5 日趋势最好的实体股买一点
 *   7. 贷款：现金 < 3000 且有可观资产 → 贷总资产 40%
 */

/* AI 路过银行：现金多则存 */
function aiBankPass(p) { aiBankCore(p); }
/* AI 停留银行：完整决策 */
function aiBankStay(p) { aiBankCore(p); }

function aiBankCore(p) {
  if (p.cash > 8000) {
    var amt = ifloor((p.cash - 5000) / 2);
    if (amt > 0) bankDeposit(p, amt);
  } else if (p.cash < 1500 && p.bank > 0) {
    bankWithdraw(p, Math.min(p.bank, 3000 - p.cash));
  }
  /* 贷款决策：现金吃紧且有资产 */
  if (!p.loan && p.cash < 3000) {
    var limit = loanLimit(p);
    var want = Math.min(ifloor(limit * 0.4), 8000);
    if (want >= 1000) {
      var terms = want > 6000 ? 12 : 6;
      applyLoan(p, want, terms, Math.random() < 0.5 ? 5 : 25, 'cash');
    }
  }
}

/* AI 路过/停留股市 */
function aiStockPass(p) { aiStockCore(p); }
function aiStockStay(p) { aiStockCore(p); }

function aiStockCore(p) {
  /* 卖出亏损股（价格低于成本不追踪，简单按趋势） */
  /* 买入：现金充足时，选最近 5 日涨幅最高的实体股 */
  if (p.cash < 12000) return;
  var best = null, bestPerf = 0;
  G.stocks.forEach(function (st) {
    var h = st.history.slice(-6);
    if (h.length < 3) return;
    var perf = (h[h.length - 1] - h[0]) / h[0];
    if (st.entity && perf > bestPerf) { bestPerf = perf; best = st; }
  });
  if (best && bestPerf > 0.02) {
    var spend = ifloor((p.cash - 10000) * 0.5);
    var cnt = Math.floor(spend / best.price);
    if (cnt > 0) buyStock(p, best.id, cnt);
  }
  /* 卖出：趋势转差的持仓 */
  for (var sid in p.stocks) {
    var st = G.stockMap[sid];
    var h2 = st.history.slice(-4);
    if (h2.length >= 2) {
      var perf2 = (h2[h2.length - 1] - h2[0]) / h2[0];
      if (perf2 < -0.05) sellStock(p, sid, p.stocks[sid]);
    }
  }
}

/* AI 路过加油站 */
function aiGasPass(p) { aiGasCore(p); }
function aiGasStay(p) { aiGasCore(p); }

function aiGasCore(p) {
  if (p.vehicle === 'walk') return;
  var v = VEHICLES[p.vehicle];
  if (p.fuel < v.perMove * 2) {
    /* 加到接近满 */
    gasRefuel(p, v.tank - p.fuel);
  }
}

/* AI 路过电网：预存电费 */
function aiGridPass(p) {
  var fee = monthlyElectricityFee(p);   /* 含物价系数，与月末扣款一致 */
  if (fee <= 0) return;
  var target = (p.electDebt || 0) + fee * 3;
  var need = target - p.electValue;
  if (need > 0 && p.cash > need + 2000) {
    gridPrepay(p, need);
  }
}

/* v6：AI 回合开始时检查电费欠费，有钱就补缴（避免停电死亡螺旋） */
function aiElectricityCheck(p) {
  var fee = monthlyElectricityFee(p);
  if (fee <= 0) return;
  var target = (p.electDebt || 0) + fee * 3;
  var need = target - p.electValue;
  if (need > 0 && p.cash > need + 3000 && typeof gridPrepay === 'function') {
    gridPrepay(p, Math.min(need, Math.floor(p.cash * 0.5)));
  }
}

/* AI 停留地产格：买地或升级 */
function aiEstateStay(p, tile) {
  if (tile.owner == null) {
    if (p.cash > ESTATE_BUY_PRICE[tile.g] + 2000) buyEstate(p, tile.idx);
  } else if (tile.owner === p.idx) {
    if (tile.level < 3 && p.cash > ESTATE_LEVELS[tile.level + 1].up[tile.g] + 2500) {
      upgradeEstate(p, tile.idx);
    }
  }
}

/* AI 停留百货 */
function aiMallStay(p) {
  /* 现金充足时买摩托/汽车（骰子多是硬道理） */
  if (p.vehicle === 'walk' && p.cash > 6000) buyVehicle(p, 'moto');
  else if (p.vehicle === 'moto' && p.cash > 10000) buyVehicle(p, 'car');
  /* v5：富余资金买道具（遥控骰子留着关键时刻用，路障放对手门口） */
  if (p.cash > 60000 && (p.items.diceCtrl || 0) < 2) buyItem(p, 'diceCtrl');
  if (p.cash > 40000 && (p.items.barrier || 0) < 2) buyItem(p, 'barrier');
}

/* AI 使用道具（每回合开始时判断） */
function aiUseItems(p) {
  /* 电费：欠费及时补缴（v6） */
  aiElectricityCheck(p);
  /* 路障：放在领先对手的当前位置（他下一步必撞） */
  if ((p.items.barrier || 0) > 0) {
    var richest = null, maxAsset = -1;
    G.players.forEach(function (o) {
      if (o.alive && o.idx !== p.idx) {
        var a = totalAssets(o);
        if (a > maxAsset) { maxAsset = a; richest = o; }
      }
    });
    if (richest) placeBarrier(p, richest.pos);
  }
  /* 遥控骰子：现金紧张时用大点数冲起点领工资；否则 60% 概率随机用 */
  if ((p.items.diceCtrl || 0) > 0) {
    var wd = WORLD_LAYOUT[p.pos];
    var distToStart = (REGION_SIZE[wd.region] - wd.local) % REGION_SIZE[wd.region];  /* 本区域回起点步数 */
    if (p.cash < 5000 && distToStart <= 18 && distToStart >= 1) {
      useDiceCtrl(p, distToStart);          /* 精准回起点领工资 */
    } else if (Math.random() < 0.3) {
      useDiceCtrl(p, 5 + Math.floor(Math.random() * 13));
    }
  }
}

/* AI 电费管理（路过电网补充）— 已由 aiGridPass 处理 */
