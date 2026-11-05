/* 大富翁 · 连锁地块 v4
 * 规则：同一玩家拥有的、在地图上直线相邻（曼哈顿距离 1）的地块构成连锁。
 * 停留在连锁中任一地块，需支付整条连锁所有地块的过路费总和。
 * 连锁定义：从停留地块出发，同 owner 的水平方向连通块 ∪ 垂直方向连通块。
 */

/* 求连锁地块集合（含起点） */
function chainOf(tileIdx) {
  var tile = G.tiles[tileIdx];
  if (tile.t !== 'estate' || tile.owner == null) return [tileIdx];
  var owner = tile.owner;
  var inChain = {};
  inChain[tileIdx] = true;
  var queue = [tileIdx];
  while (queue.length) {
    var cur = queue.shift();
    ADJ[cur].forEach(function (nx) {
      var t = G.tiles[nx];
      if (!inChain[nx] && t.t === 'estate' && t.owner === owner) {
        inChain[nx] = true;
        queue.push(nx);
      }
    });
  }
  return Object.keys(inChain).map(Number);
}

/* 停留连锁地块：支付整条链的过路费（物价系数生效） */
function payChainToll(p, tile) {
  var owner = G.players[tile.owner];
  var chain = chainOf(tile.idx);
  /* v9：统一用 estateToll 口径（已含地区系数 + 物价 + 停电判断）。
   * 空地不需要电，即使名下标了欠费也照收基础过路费。 */
  var total = 0;
  var parts = [];
  chain.forEach(function (i) {
    var t = G.tiles[i];
    var toll = estateToll(t);
    total += toll;
    if (t.level > 0 && toll > 0) parts.push(t.name + '(' + toll + ')');
  });
  if (total <= 0) {
    if (chain.length > 1) log('【连锁】' + owner.name + ' 的 ' + chain.length + ' 连地块【' + chain.map(function (i) { return G.tiles[i].name; }).join('-') + '】建筑全部停电，免过路费！', 'warn');
    else if (tile.level > 0 && !tile.electrified) log('【' + tile.name + '】建筑停电，免过路费！');
    return { ok: true, chain: chain, toll: 0 };
  }
  var paid = transferMoney(p, owner, total, '连锁过路费');
  if (chain.length > 1) {
    log('【连锁】🔗 ' + p.name + ' 停入 ' + owner.name + ' 的 ' + chain.length + ' 连地块【' +
      chain.map(function (i) { return G.tiles[i].name; }).join('-') + '】，支付连锁过路费 ' + total + ' 元（物价x' + priceMul() + '）', 'toll');
  } else {
    log(p.name + ' 停留【' + tile.name + '】，向 ' + owner.name + ' 支付过路费 ' + total + ' 元' + (priceMul() > 1 ? '（物价x' + priceMul() + '）' : ''), 'toll');
  }
  /* 中心气泡：付款方喊痛、收款方得意 */
  say(p, 'toll', '在【' + tile.name + '】向 ' + owner.name + ' 交了 ' + total + ' 元过路费');
  if (owner.alive) say(owner, 'receiveToll', '收到 ' + p.name + ' 的 ' + total + ' 元过路费');
  return { ok: paid.ok, chain: chain, toll: total };
}
