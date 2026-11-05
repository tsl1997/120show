/* 大富翁 · 道具系统 v5
 * 遥控骰子 🎯：使用后本回合掷出指定点数（1-18）
 * 路障 🚧：放置在任意格子，路过者（含自己以外所有人）强制停下，拦停后消失
 * 购买：百货商店（价格 x 物价系数）
 */

/* 买道具（百货） */
function buyItem(p, itemId) {
  var it = ITEMS[itemId];
  if (!it) return { ok: false, msg: '没有这种道具' };
  var cost = Math.round(it.cost * priceMul());
  if (p.cash < cost) return { ok: false, msg: '现金不足（需 ' + cost + ' 元）' };
  p.cash -= cost;
  p.items[itemId] = (p.items[itemId] || 0) + 1;
  log('【道具】' + it.emoji + ' ' + p.name + ' 购买「' + it.name + '」x1（' + cost + ' 元）', 'item');
  return { ok: true };
}

/* 使用遥控骰子（掷骰前） */
function useDiceCtrl(p, points) {
  points = Math.floor(points);
  if ((p.items.diceCtrl || 0) <= 0) return { ok: false, msg: '没有遥控骰子' };
  if (points < 1 || points > 18) return { ok: false, msg: '点数范围 1-18' };
  p.items.diceCtrl--;
  p.diceCtrlNext = points;
  log('【道具】🎯 ' + p.name + ' 使用遥控骰子：下回合必出 ' + points + ' 点！', 'item');
  say(p, 'item', '用了遥控骰子，指定 ' + points + ' 点');
  return { ok: true };
}

/* 放置路障（任意格子，不能放已有路障的格） */
function placeBarrier(p, tileIdx) {
  if ((p.items.barrier || 0) <= 0) return { ok: false, msg: '没有路障' };
  var tile = G.tiles[tileIdx];
  if (!tile) return { ok: false, msg: '格子不存在' };
  if (tile.barrier != null) return { ok: false, msg: '该格已有路障' };
  p.items.barrier--;
  tile.barrier = p.idx;
  log('【道具】🚧 ' + p.name + ' 在【' + (tile.name || TILE_VIEW[tile.t].label) + '】放置了路障！', 'item');
  say(p, 'item', '在【' + (tile.name || TILE_VIEW[tile.t].label) + '】放了路障');
  if (typeof updateBoardDOM === 'function') updateBoardDOM();
  return { ok: true };
}
