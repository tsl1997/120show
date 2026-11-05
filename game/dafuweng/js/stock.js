/* 大富翁 · 股市系统
 * 核心规则：
 *  - 股价只受买卖驱动：买入推涨、卖出压跌（涨跌停 ±10%）
 *  - 每日收盘后按当日净买压调整次日价格
 *  - 实体公司（电网/石化）的收入注入分红池，月末按持股分红
 *  - 公司满级后，留存资金每日回购股票
 *  - NPC 路人每月定期交易：公司收益比上月好→买，差→卖；幅度越大意愿越强
 */

/* 买股票（内部通用：玩家/NPC 都走这里）
 * buyer: { cash/或bank, stocks } ；用 count 压力 */
function buyStockInternal(buyer, sid, count, payFrom) {
  var st = G.stockMap[sid];
  if (!st) return { ok: false, msg: '无此股票' };
  count = Math.floor(count);
  if (count <= 0) return { ok: false, msg: '数量无效' };
  var cost = count * st.price;
  var bal = payFrom === 'bank' ? buyer.bank : buyer.cash;
  if (bal < cost) return { ok: false, msg: '资金不足' };
  if (payFrom === 'bank') buyer.bank -= cost; else buyer.cash -= cost;
  buyer.stocks[sid] = (buyer.stocks[sid] || 0) + count;
  st.buyPressure += count;
  st.volume += count;
  return { ok: true };
}

/* 卖股票（内部通用） */
function sellStockInternal(seller, sid, count) {
  var st = G.stockMap[sid];
  if (!st) return { ok: false, msg: '无此股票' };
  count = Math.floor(count);
  if (count <= 0 || (seller.stocks[sid] || 0) < count) return { ok: false, msg: '持股不足' };
  seller.stocks[sid] -= count;
  if (seller.stocks[sid] === 0) delete seller.stocks[sid];
  seller.cash += count * st.price;
  st.buyPressure -= count;
  st.volume += count;
  return { ok: true };
}

/* 玩家买/卖（带日志，走现金） */
function buyStock(p, sid, count) {
  var r = buyStockInternal(p, sid, count, 'cash');
  if (r.ok) {
    log('【股市】' + p.avatar.name + ' 买入 ' + G.stockMap[sid].name + ' x' + count +
      '（' + count * G.stockMap[sid].price + ' 元）', 'stock');
  }
  return r;
}
function sellStock(p, sid, count) {
  var r = sellStockInternal(p, sid, count);
  if (r.ok) {
    log('【股市】' + p.avatar.name + ' 卖出 ' + G.stockMap[sid].name + ' x' + count +
      '（' + count * G.stockMap[sid].price + ' 元）', 'stock');
  }
  return r;
}

/* 每日收盘：按净买压调价（涨跌停 ±10%）
 * 价格变化 = clamp(净买压 / 流通盘比例影响系数, -10%, +10%)
 * pressure: 净买入手数（正=买，负=卖） */
function stockDailySettle() {
  G.stocks.forEach(function (st) {
    var pressureRatio = st.buyPressure / st.totalShares;
    /* 弹性系数：买卖占流通盘 1% → 约 ±8% 价格变动（玩家小单也有感知，大单触顶） */
    var change = pressureRatio * 8;
    var capped = Math.max(-STOCK_LIMIT, Math.min(STOCK_LIMIT, change));
    if (Math.abs(capped) < 0.0001) {
      /* 无交易 → 价格微幅随机游走（有实体公司持平，无实体的纯随机） */
      if (st.entity) {
        capped = 0;
      } else {
        capped = (Math.random() - 0.5) * 0.02;   /* ±1% 随机游走 */
      }
    }
    st.lastPrice = st.price;
    /* 涨幅向上取整、跌幅向下取整，保证涨跌停对低价股也生效 */
    var raw = st.price * (1 + capped);
    var newPrice = capped >= 0 ? Math.max(st.price + 1, Math.ceil(raw)) : Math.max(1, Math.floor(raw));
    /* 低价股保护：涨跌后价格至少变动 1 元 */
    if (capped > 0 && newPrice <= st.price) newPrice = st.price + 1;
    if (capped < 0 && newPrice >= st.price) newPrice = Math.max(1, st.price - 1);
    st.price = newPrice;
    st.history.push(newPrice);
    if (st.history.length > 60) st.history.shift();
    st.buyPressure = 0;
    st.volume = 0;
  });
}

/* 每月 1 日：公司分红 + 满级回购启动 */
function stockMonthlySettle() {
  G.stocks.forEach(function (st) {
    /* 分红池按持股比例分给玩家和 NPC（公司留存的 30% 已在 company.js 扣除） */
    if (st.dividendPool > 0) {
      var pool = st.dividendPool;
      st.dividendPool = 0;
      /* 收集所有持有人 */
      var holders = [];
      G.players.forEach(function (p) {
        if (p.alive && (p.stocks[st.id] || 0) > 0) holders.push({ who: p, cnt: p.stocks[st.id] });
      });
      G.npcs.forEach(function (n) {
        if (n.stocks[st.id] > 0) holders.push({ who: n, cnt: n.stocks[st.id] });
      });
      var totalHeld = 0;
      holders.forEach(function (h) { totalHeld += h.cnt; });
      if (totalHeld > 0) {
        holders.forEach(function (h) {
          var share = ifloor(pool * h.cnt / totalHeld);
          if (share > 0) {
            h.who.cash += share;
            if (h.who.avatar) log('【分红】' + h.who.avatar.name + ' 持有 ' + st.name +
              ' x' + h.cnt + '，分得 ' + share + ' 元', 'stock');
            else log('【分红】' + h.who.name + ' 持有 ' + st.name + ' x' + h.cnt + '，分得 ' + share + ' 元', 'stock');
          }
        });
      }
    }
  });
}

/* 辅助：玩家持股数（安全读取） */
function sidcnt(st, p) { return p.stocks[st.id] || 0; }

/* NPC 每月交易（每月 15 日左右定期执行）
 * 逻辑：公司收益好于上月 → 买；差 → 卖；幅度越大意愿越强。
 * 第一个月（无上月数据）→ 随机买。 */
function npcMonthlyTrade() {
  G.npcs.forEach(function (npc) {
    var budget = npc.cash * (0.1 + Math.random() * 0.2);  /* 每月拿 10%-30% 现金交易 */
    /* 挑选股票：有上月营收对比的实体股优先，其余随机 */
    var targets = [];
    G.stocks.forEach(function (st) {
      var perf = 0;
      if (st.entity) {
        perf = st.lastMonthlyRevenue === 0 ? 0 :
          (st.monthlyRevenue - st.lastMonthlyRevenue) / Math.max(1, st.lastMonthlyRevenue);
      } else {
        /* 非实体股：按最近 5 日价格趋势模拟“收益” */
        var h = st.history.slice(-6);
        if (h.length >= 2) perf = (h[h.length - 1] - h[0]) / h[0];
      }
      targets.push({ st: st, perf: perf });
    });

    targets.forEach(function (t) {
      var st = t.st;
      var perf = t.perf;
      var intent = 0;                                 /* -1 卖 ~ +1 买 */
      if (G.month === 1 && st.entity) {
        intent = Math.random() < 0.5 ? 0.3 : 0;       /* 第一个月随机买实体股 */
      } else if (G.month === 1) {
        intent = Math.random() < 0.3 ? 0.2 : 0;       /* 第一个月随机买 */
      } else if (perf > 0.05) {
        intent = Math.min(1, perf * 2);               /* 收益好 → 买 */
      } else if (perf < -0.05) {
        intent = Math.max(-1, perf * 2);              /* 收益差 → 卖 */
      }
      if (Math.abs(intent) < 0.05) return;

      if (intent > 0) {
        var spend = ifloor(budget * intent);
        if (spend < st.price) return;
        var cnt = Math.floor(spend / st.price);
        var r = buyStockInternal(npc, st.id, cnt, 'cash');
        if (r.ok) log('【股市】' + npc.name + ' 买入 ' + st.name + ' x' + cnt, 'npc');
      } else {
        var held = npc.stocks[st.id] || 0;
        if (held > 0) {
          var sellCnt = Math.max(1, ifloor(held * Math.abs(intent)));
          var r2 = sellStockInternal(npc, st.id, Math.min(sellCnt, held));
          if (r2.ok) log('【股市】' + npc.name + ' 卖出 ' + st.name + ' x' + Math.min(sellCnt, held), 'npc');
        }
      }
    });
  });
}
