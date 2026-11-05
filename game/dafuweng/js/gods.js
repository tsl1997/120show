/* 大富翁 · 神仙系统 v4
 * 财神（一次性）：停留触发，4 位数字滚动，奖励 0-9999 现金，给完消失
 * 穷神（一次性）：停留触发，3 位数字滚动 100-999，发给其他所有玩家，给完消失
 * 天使（附身 7 回合）：停留的格子建筑 +1；空地免费盖小屋；自己的地共 +2；别人的地也 +1（内鬼）
 * 恶魔（附身 7 回合）：停留的格子建筑 -1（无论谁的）
 * 天使/恶魔效果结算先于过路费。
 */

/* 物价系数下的费用（统一入口） */
function priceMul() { return G.priceIndex || 1; }

/* 神仙触发入口（stayEvent 在过路费前调用）。
 * 返回 true 表示本次停留的神仙效果已处理（部分场景影响后续过路费）。 */
function godStayEffect(p, tile) {
  if (!tile.god) return false;
  var handled = false;

  /* --- 常驻神（天使/恶魔）：附身玩家 --- */
  if (tile.god === 'tianshi' || tile.god === 'emeng') {
    /* 格子上的神仙被拾取 → 附身（格子神位清空，之后随玩家行动生效） */
    var def = GODS[tile.god];
    p.god = { id: tile.god, turnsLeft: def.turns };
    tile.god = null;
    log('【神仙】' + def.emoji + ' ' + def.name + '附身 ' + p.name + '！效果持续 ' + def.turns + ' 回合', 'god');
    say(p, 'god', def.emoji + ' ' + def.name + '附身，效果持续 ' + def.turns + ' 回合');
    handled = true;
  }

  /* --- 一次性神（财神/穷神）：立即结算 --- */
  if (tile.god === 'caishen') {
    tile.god = null;
    godCaishen(p);
    handled = true;
  } else if (tile.god === 'qiongshen') {
    tile.god = null;
    godQiongshen(p);
    handled = true;
  }

  return handled;
}

/* 财神：4 位数字滚动 → 随机 0-9999 现金奖励 */
function godCaishen(p) {
  var amount = Math.floor(Math.random() * 10000);   /* 0-9999 */
  log('【财神】🧧 财神附身 ' + p.name + '！', 'god');
  if (typeof showGodRoll === 'function') {
    showGodRoll('🧧 财神赐福', 4, function (val) {
      p.cash += val;
      log('【财神】🧧 ' + p.name + ' 获得神仙赐予 ' + val + ' 元！财神飘然而去', 'god');
      say(p, 'god', '财神赐福，获得 ' + val + ' 元');
      if (typeof updateHud === 'function') updateHud();
    });
  } else {
    p.cash += amount;
    log('【财神】🧧 ' + p.name + ' 获得神仙赐予 ' + amount + ' 元！财神飘然而去', 'god');
    say(p, 'god', '财神赐福，获得 ' + amount + ' 元');
  }
}

/* 穷神：3 位数字滚动 → 随机 100-999 发给其他所有玩家 */
function godQiongshen(p) {
  var amount = 100 + Math.floor(Math.random() * 900);   /* 100-999 */
  log('【穷神】🥀 穷神附身 ' + p.name + '！', 'god');
  if (typeof showGodRoll === 'function') {
    showGodRoll('🥀 穷神散财', 3, function (val) {
      var others = G.players.filter(function (x) { return x.alive && x.idx !== p.idx; });
      others.forEach(function (o) { o.cash += val; });
      log('【穷神】🥀 ' + p.name + ' 被迫给其他 ' + others.length + ' 位玩家每人发 ' + val + ' 元！穷神心满意足地离开', 'god');
      say(p, 'god', '穷神散财，给每人发了 ' + val + ' 元');
      if (typeof updateHud === 'function') updateHud();
    });
  } else {
    var others = G.players.filter(function (x) { return x.alive && x.idx !== p.idx; });
    others.forEach(function (o) { o.cash += amount; });
    log('【穷神】🥀 ' + p.name + ' 被迫给其他 ' + others.length + ' 位玩家每人发 ' + amount + ' 元！穷神心满意足地离开', 'god');
    say(p, 'god', '穷神散财，给每人发了 ' + amount + ' 元');
  }
}

/* 天使/恶魔的建筑效果（每回合停留时结算，先于过路费）
 * 返回 true = 地块等级有变化（影响后续过路费计算） */
function godBuildingEffect(p, tile) {
  if (!p.god || tile.t !== 'estate') return false;
  var changed = false;

  if (p.god.id === 'tianshi') {
    /* 天使：+1；空地免费盖房；自己的地再 +1 */
    if (tile.level < 3) {
      tile.level++;
      changed = true;
      var extra = (tile.owner === p.idx && tile.level < 3) ? 1 : 0;
      if (extra) { tile.level++; }
      log('【天使】😇 天使显灵！【' + tile.name + '】建筑升到 ' + ESTATE_LEVELS[tile.level].name +
        (tile.owner === p.idx ? '（自家地加盖 ' + (1 + extra) + ' 层）' : (tile.owner != null ? '（帮 ' + G.players[tile.owner].name + ' 白盖一层，内鬼行为！）' : '（空地免费盖房）')), 'god');
    } else {
      log('【天使】😇【' + tile.name + '】已是满级大厦，天使无事可做', 'god');
    }
  } else if (p.god.id === 'emeng') {
    /* 恶魔：-1，无论谁的 */
    if (tile.level > 0) {
      tile.level--;
      changed = true;
      log('【恶魔】😈 恶魔降世！【' + tile.name + '】建筑被拆到 ' + ESTATE_LEVELS[tile.level].name +
        (tile.owner != null && tile.owner !== p.idx ? '（' + G.players[tile.owner].name + ' 的地遭殃）' : ''), 'god');
    } else {
      log('【恶魔】😈【' + tile.name + '】已是空地，恶魔无从破坏', 'god');
    }
  }
  if (changed && typeof updateBoardDOM === 'function') updateBoardDOM();
  return changed;
}

/* 每回合结束：附身倒计时（回合 = 玩家行动一次） */
function godTurnTick(p) {
  if (!p.god) return;
  p.god.turnsLeft--;
  if (p.god.turnsLeft <= 0) {
    var def = GODS[p.god.id];
    log('【神仙】' + def.emoji + ' ' + def.name + '离开 ' + p.name + '，附身结束', 'god');
    p.god = null;
  }
}
