/* 大富翁 · 地产系统
 * 买地 / 盖房升级 / 过路费 / 断电惩罚
 */

/* 地产当前过路费（地区系数 + 物价系数）
 * v9：只有「有建筑」的地块才需要电；空地没有用电设备，停电也照收基础过路费。 */
function estateToll(tile) {
  if (tile.level > 0 && !tile.electrified) return 0;   /* 建筑停电才收不了 */
  var zone = ZONE_TOLL_MUL[tile.z != null ? tile.z : 1];
  return Math.round(Math.round(ESTATE_LEVELS[tile.level].toll[tile.g] * zone) * priceMul());
}

/* 地产价格（买地/升级，含物价系数） */
function estateBuyPrice(tile) {
  return Math.round(ESTATE_BUY_PRICE[tile.g] * priceMul());
}
function estateUpCost(tile, nextLevel) {
  return Math.round(ESTATE_LEVELS[nextLevel].up[tile.g] * priceMul());
}

/* 买地：玩家现金支付，获得地块 */
function buyEstate(p, tileIdx) {
  var tile = G.tiles[tileIdx];
  if (tile.t !== 'estate') return { ok: false, msg: '这不是可购买的地产' };
  if (tile.owner != null) return { ok: false, msg: '此地已有主人' };
  var price = estateBuyPrice(tile);
  if (p.cash < price) return { ok: false, msg: '现金不足（需 ' + price + ' 元）' };
  p.cash -= price;
  tile.owner = p.idx;
  /* v10：天皇不动产只在日本区域收税，中国/美国购地不缴这笔赋税 */
  if (tile.region === 'jp') tennoLandTax(p, price);
  log(p.name + ' 以 ' + price + ' 元买下【' + tile.name + '】(' + REGION_NAMES[tile.region] + ')' +
    (priceMul() > 1 ? '（物价x' + priceMul() + '）' : ''));
  say(p, 'buy', '买下【' + tile.name + '】· 花费 ' + price + ' 元');
  return { ok: true };
}

/* 升级：空地→小屋→洋楼→大厦（3 级封顶） */
function upgradeEstate(p, tileIdx) {
  var tile = G.tiles[tileIdx];
  if (tile.t !== 'estate') return { ok: false, msg: '这不是地产' };
  if (tile.owner !== p.idx) return { ok: false, msg: '这块地不是你的' };
  if (tile.level >= 3) return { ok: false, msg: '已是最高等级（大厦）' };
  var cost = estateUpCost(tile, tile.level + 1);
  if (p.cash < cost) return { ok: false, msg: '现金不足（需 ' + cost + ' 元）' };
  p.cash -= cost;
  tile.level++;
  log(p.name + ' 花费 ' + cost + ' 元，将【' + tile.name + '】升级为「' +
    ESTATE_LEVELS[tile.level].name + '」' + (priceMul() > 1 ? '（物价x' + priceMul() + '）' : ''));
  say(p, 'upgrade', '【' + tile.name + '】升级为「' + ESTATE_LEVELS[tile.level].name + '」');
  return { ok: true };
}

/* 玩家停留他人地产 → 交连锁过路费（v4：连锁 + 物价；路过不收费） */
function payToll(p, tile) {
  return payChainToll(p, tile);
}

/* 玩家总资产（贷款额度、破产清算用）
 * = 现金 + 存款 + 房产净值（购地价+升级投入） + 股票市值 - 贷款余额 */
function totalAssets(p) {
  var sum = p.cash + p.bank;
  G.tiles.forEach(function (tile) {
    if (tile.t === 'estate' && tile.owner === p.idx) {
      sum += ESTATE_BUY_PRICE[tile.g];
      for (var lv = 1; lv <= tile.level; lv++) sum += ESTATE_LEVELS[lv].up[tile.g];
    }
  });
  sum += stockValueOf(p);
  if (p.loan) sum -= loanRemaining(p);
  return sum;
}

/* 玩家股票市值 */
function stockValueOf(p) {
  var sum = 0;
  for (var sid in p.stocks) {
    var st = G.stockMap[sid];
    if (st) sum += p.stocks[sid] * st.price;
  }
  return sum;
}

/* 通用转账：from → to，优先现金 → 银行存款 → 自动卖股。
 * 返回 { ok, shortfall, paid }。ok=false 表示掏空了也不够（paid=实际转出额）。 */
function transferMoney(from, to, amount, reason) {
  var need = amount;
  var paid = 0;
  /* 1) 现金 */
  var useCash = Math.min(from.cash, need);
  from.cash -= useCash; need -= useCash; paid += useCash;
  if (to) to.cash += useCash;
  /* 2) 银行存款 */
  if (need > 0 && from.bank > 0) {
    var useBank = Math.min(from.bank, need);
    from.bank -= useBank; need -= useBank; paid += useBank;
    if (to) to.cash += useBank;
  }
  /* 3) 自动卖股（按市值从高到低），卖一股结一股，找零回钱包 */
  if (need > 0) {
    var held = [];
    for (var sid in from.stocks) {
      if (from.stocks[sid] > 0 && G.stockMap[sid]) {
        held.push({ sid: sid, value: from.stocks[sid] * G.stockMap[sid].price, cnt: from.stocks[sid] });
      }
    }
    held.sort(function (a, b) { return b.value - a.value; });
    for (var i = 0; i < held.length && need > 0; i++) {
      var st = G.stockMap[held[i].sid];
      var cnt = Math.min(held[i].cnt, Math.ceil(need / st.price));
      for (var j = 0; j < cnt && need > 0; j++) {
        from.stocks[held[i].sid]--;
        if (from.stocks[held[i].sid] === 0) delete from.stocks[held[i].sid];
        st.buyPressure -= 1;
        var give = Math.min(st.price, need);   /* 抵债部分 */
        if (to) to.cash += give;
        paid += give;
        var excess = st.price - give;          /* 找零部分 */
        if (excess > 0) from.cash += excess;
        need -= st.price;
      }
    }
    if (need > 0) need = Math.max(0, need);    /* 最后一段不足时保留缺口 */
  }
  /* 4) 还不够 → 缺口留给债权人记账（游戏简化：差额凭空消失，玩家已掏空） */
  if (need > 0) {
    log(from.name + ' 现金+存款+股票全部掏空，仍差 ' + need + ' 元！（' + (reason || '') + '）', 'warn');
    return { ok: false, shortfall: need, paid: paid };
  }
  return { ok: true, shortfall: 0, paid: paid };
}
