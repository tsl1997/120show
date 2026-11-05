/* 大富翁 · 核心引擎
 * 回合流程：掷骰 → 逐格移动（路过事件）→ 停留事件 → 结束回合
 * 每个玩家行动一次 = 1 天。每天推进：股市收盘调价、满级公司回购。
 * 每月 1 日：存款利息结算、公司月结、油价调整。
 * 每月 5/25 日：贷款扣款。每月 15 日：NPC 交易。
 */

/* 方向中文名（岔路口日志用） */
function dirNameCN(dir) {
  return { up: '上行', down: '下行', left: '向左', right: '向右' }[dir] || dir;
}

/* 日志 */
function log(text, type) {
  G.log.push({ day: G.day, month: G.month, text: text, type: type || '' });
  if (G.log.length > 400) G.log.splice(0, G.log.length - 400);
  if (typeof renderLog === 'function') renderLog();
}

/* 掷骰子（按载具数量） */
function rollDice(p) {
  var n = VEHICLES[p.vehicle].dice;
  var arr = [];
  for (var i = 0; i < n; i++) arr.push(1 + Math.floor(Math.random() * 6));
  G.lastDice = arr;
  return arr;
}

/* 玩家是否可以行动（不在住院/坐牢/触电休养中） */
function canAct(p) {
  return p.alive && p.hospitalDays === 0 && p.jailDays === 0;
}

/* 路过事件（每经过一格触发一次，起点除外）。
 * v3 规则：路过一律不付费——所有费用（过路费/电费/罚款）只在停留时结算。
 * 路过银行/股市/加油站可以自愿进店操作（弹窗可选，关掉即无事发生）。 */
function passEvent(p, tile) {
  var dialog = false;
  switch (tile.t) {
    case 'grid':
      /* v5：路过电网弹充值窗（预存电费入口） */
      if (p.isAI) aiGridPass(p);
      else { showGridDialog(p, '路过'); dialog = true; }
      break;
    case 'bank':
      if (p.isAI) aiBankPass(p);
      else { showBankDialog(p, '路过'); dialog = true; }
      break;
    case 'stock':
      if (p.isAI) aiStockPass(p);
      else { showStockDialog(p, '路过'); dialog = true; }
      break;
    case 'gas':
      if (p.isAI) aiGasPass(p);
      else { showGasDialog(p, '路过'); dialog = true; }
      break;
    case 'shrine':
      /* v8：路过神社强制献香火钱并抽签（用户指定的例外规则） */
      shrineDraw(p);
      break;
    case 'fishery':
      if (p.isAI) aiFishing(p);          /* 人类只在停留时弹窗，路过不打断走棋 */
      break;
    case 'corp':
      if (p.isAI && Math.random() < 0.25) corpInvest(p, tile.cid);
      break;
    /* 港口 / 飞机场只在停留时可选传送，路过不打断 */
  }
  return dialog;
}

/* 停留事件（移动结束后触发） */
function stayEvent(p, tile) {
  var dialog = false;
  switch (tile.t) {
    case 'estate':
      /* 1) 神仙优先：格子上的神触发 / 附身神的建筑效果（先于过路费） */
      godStayEffect(p, tile);
      godBuildingEffect(p, tile);
      /* 2) 地产结算 */
      if (tile.owner == null) {
        if (p.isAI) aiEstateStay(p, tile);
        else { showEstateDialog(p, tile); dialog = true; }
      } else if (tile.owner === p.idx) {
        if (p.isAI) aiEstateStay(p, tile);
        else { showEstateDialog(p, tile); dialog = true; }
      } else {
        /* 停在别人地盘：交连锁过路费 */
        payToll(p, tile);
      }
      break;
    case 'bank':
      if (p.isAI) aiBankStay(p);
      else { showBankDialog(p, '停留'); dialog = true; }
      break;
    case 'stock':
      if (p.isAI) aiStockStay(p);
      else { showStockDialog(p, '停留'); dialog = true; }
      break;
    case 'hospital':
      hospitalPass(p);
      break;
    case 'grid':
      /* v9：海外电网是营业厅，只办预存/补缴，不触电罚款 */
      if (tile.region === 'cn') gridStayPenalty(p);
      if (p.isAI) aiGridPass(p);
      else { showGridDialog(p); dialog = true; }
      break;
    case 'gas':
      gasStayFee(p);
      if (p.isAI) aiGasStay(p);
      else { showGasDialog(p, '停留'); dialog = true; }
      break;
    case 'mall':
      if (p.isAI) aiMallStay(p);
      else { showMallDialog(p); dialog = true; }
      break;
    case 'shrine':
      shrineDraw(p);                       /* 停留也重抽，新签覆盖旧签 */
      break;
    case 'fishery':
      if (p.isAI) aiFishing(p);
      else { showFisheryDialog(p); dialog = true; }
      break;
    case 'corp':
      corpStayFee(p, tile);
      if (p.isAI) { if (Math.random() < 0.3) corpInvest(p, tile.cid); }
      else { showCorpDialog(p, tile, '停留'); dialog = true; }
      break;
    case 'port':
      if (p.isAI) aiTravel(p, 'port');
      else { showTravelDialog(p, 'port'); dialog = true; }
      break;
    case 'airport':
      if (p.isAI) aiTravel(p, 'airport');
      else { showTravelDialog(p, 'airport'); dialog = true; }
      break;
    case 'police':
      log('【派出所】👮 ' + p.name + ' 在派出所歇脚，平安无事', 'police');
      break;
    case 'chance':
      chanceEvent(p);
      break;
    case 'jail':
      log('【看守所】🔒 ' + p.name + ' 只是来探监的，路过放行', 'jail');
      break;
    case 'park':
      log('【公园】🌳 ' + p.name + ' 在公园长椅上晒了会太阳', 'park');
      break;
    case 'start':
      log('【起点】💰 ' + p.name + ' 回到起点', 'start');
      break;
  }
  return dialog;
}

/* 每日推进（一个玩家回合结束时调用） */
function dailyTick() {
  /* 股市收盘 */
  stockDailySettle();
  /* 满级公司回购 */
  companyDailyBuyback();
  /* 住院/坐牢倒计时 */
  G.players.forEach(function (p) {
    if (p.hospitalDays > 0) p.hospitalDays--;
    if (p.jailDays > 0) p.jailDays--;
  });
  /* 贷款扣款（5 日/25 日） */
  bankDailyTick();
  /* 日期 +1 */
  G.day++;
  if (G.day > MONTH_DAYS) {
    G.day = 1;
    G.month++;
    if (G.month > 12) { G.month = 1; G.year++; }
    /* 月初结算 */
    monthlySettle();
  }
  /* 每月 15 日 NPC 交易 */
  if (G.day === 15) npcMonthlyTrade();
}

/* 每月结算（每月 1 日） */
function monthlySettle() {
  /* 顺序：电费月扣（先入账电网）→ 股息 → 利息 → 公司月结 → 物价上涨 */
  settleElectricityMonthly();
  settleTennoMonthly();          /* 天皇不动产房屋月税（无人停留也扣） */
  stockMonthlySettle();
  settleInterestMonthly();
  companyMonthlySettle();
  /* 物价系数 +1；到 PRICE_MAX 游戏结束 */
  G.priceIndex++;
  if (G.priceIndex >= PRICE_MAX) {
    log('【经济】💥 通货膨胀失控！物价系数达到 ' + G.priceIndex + '，游戏结束！', 'warn');
    endGame();
    return;
  }
  log('【日历】📅 进入 ' + G.year + ' 年 ' + G.month + ' 月 · 物价系数涨至 x' + G.priceIndex, 'calendar');
}

/* 执行一次玩家行动（异步动画版）：骰子动画 → 逐格走棋 → 路过事件 → 停留事件。
 * ANIM.speed >= 100 时动画延时被压缩到 0ms，逻辑与同步版完全一致。 */
async function takeTurn() {
  var p = G.players[G.turn];
  resetSayCount();
  if (!p.alive) { nextTurn(); return null; }
  if (!canAct(p)) {
    log('【医院/看守所】' + p.name + ' 卧床休养中……', 'warn');
    say(p, 'idle', '卧床休养中，本回合无法行动');
    finishTurn();
    await waitToastsDone();
    return null;
  }

  /* AI 道具决策（遥控骰子/路障） */
  if (p.isAI && typeof aiUseItems === 'function') aiUseItems(p);

  /* ---- 1. 骰子动画（地图中央） ---- */
  var dice;
  if (p.diceCtrlNext != null) {
    /* 遥控骰子：把指定点数拆成骰子数组（3骰以内展示） */
    var pts = p.diceCtrlNext;
    p.diceCtrlNext = null;
    dice = [];
    var remain = pts;
    while (remain > 0) {
      var d = Math.min(6, remain);
      dice.push(d);
      remain -= d;
    }
    while (dice.length > 3) {   /* 超过3骰合并展示 */
      var a = dice.shift(), b = dice.pop();
      dice.push(Math.min(6, a + b));
    }
    log('【道具】🎯 遥控骰子生效：' + p.name + ' 掷出 ' + pts + ' 点！', 'item');
  } else {
    dice = rollDice(p);
  }
  var v = VEHICLES[p.vehicle];
  if (p.vehicle !== 'walk' && p.fuel < v.perMove) {
    log('【载具】⛽ ' + p.name + ' 没油了！被迫步行掷 1 个骰子', 'warn');
    dice = [1 + Math.floor(Math.random() * 6)];
    G.lastDice = dice;
  } else if (p.vehicle !== 'walk') {
    p.fuel -= v.perMove;
  }
  var steps = dice.reduce(function (a, b) { return a + b; }, 0);
  log('【骰子】🎲 ' + p.name + ' 掷出 ' + dice.join(' + ') + ' = ' + steps + ' 点', 'dice');

  if (typeof showDiceAnim === 'function') showDiceAnim(dice, p);
  await asleep(ANIM.dice);
  if (typeof hideDiceAnim === 'function') hideDiceAnim();
  await asleep(ANIM.settle);
  /* v7：AI 骰子结束后，先在屏幕中心报一句出发信息 */
  if (p.isAI) say(p, 'dice', '掷出 ' + steps + ' 点，出发！');

  /* ---- 2. 逐格走棋（田字地图：岔路口随机转向，不回头） ---- */
  var pos = p.pos;
  for (var st = 1; st <= steps; st++) {
    var exits = junctionExits(pos, p.lastDir);
    if (exits.length === 0) exits = junctionExits(pos, null);   /* 死角兜底（不应发生） */
    var pick = exits[Math.floor(Math.random() * exits.length)];
    if (exits.length > 1) {
      log('【岔路】🔀 ' + p.name + ' 在岔路口转向 ' + dirNameCN(pick.dir), 'dice');
    }
    p.lastDir = pick.dir;
    pos = pick.idx;
    p.pos = pos;
    if (typeof updatePawnsDOM === 'function') updatePawnsDOM();
    if (typeof highlightTile === 'function') highlightTile(pos);
    /* v6：镜头每步跟随行动玩家（地图跟着人物动） */
    if (typeof cameraFollow === 'function') cameraFollow(p);
    await asleep(ANIM.step);
    /* 路障拦截：强制停下（无论剩几步），路障消失 */
    var tileNow = G.tiles[pos];
    if (tileNow.barrier != null) {
      var placer = G.players[tileNow.barrier];
      log('【道具】🚧 ' + p.name + ' 撞上路障，被强制拦停在【' + (tileNow.name || TILE_VIEW[tileNow.t].label) + '】！（放置者：' + placer.name + '）', 'item');
      tileNow.barrier = null;
      if (typeof updateBoardDOM === 'function') updateBoardDOM();
      break;   /* 提前结束移动 */
    }
    if (G.tiles[pos].t === 'start') {
      p.cash += START_SALARY;
      log('【起点】💰 ' + p.name + ' 领取工资 ' + START_SALARY + ' 元', 'start');
      say(p, 'salary', '路过起点，领到工资 ' + START_SALARY + ' 元');
      if (typeof updateHud === 'function') updateHud();
    }
    if (st < steps) {
      passEvent(p, G.tiles[pos]);
      if (!p.isAI) await waitDialogsClosed();
    }
    if (typeof highlightTile === 'function') highlightTile(pos, false);
  }

  /* ---- 3. 停留事件 ---- */
  var tile = G.tiles[pos];
  stayEvent(p, tile);
  /* v7：本回合一句台词都没有 → 补一条「停在 X」的摘要，保证中心有信息 */
  if (getSayCount() === 0) {
    var place = tile.name || (TILE_VIEW[tile.t] ? TILE_VIEW[tile.t].label : '这里');
    say(p, 'idle', '停在【' + place + '】，平安无事');
  }
  if (!p.isAI) await waitDialogsClosed();

  /* 一轮（所有玩家各行动一次）= 游戏内 1 天。 */
  finishTurn();
  /* v8：本回合的气泡全部播完再交棒，避免上一位玩家的话串到下一位 */
  await waitToastsDone();
  return { moved: true, steps: steps, dice: dice };
}

/* 等中心消息气泡队列播放完毕（测试模式 / 无气泡层时立即返回） */
async function waitToastsDone() {
  if (ANIM.speed >= 100) return;
  var guard = 0;
  while (guard++ < 200) {
    var busy = (typeof toastBusy !== 'undefined' && toastBusy) ||
      (typeof toastQueue !== 'undefined' && toastQueue.length > 0);
    if (!busy) return;
    await asleep(100);
  }
}

/* 等待全部对话框关闭（人类玩家操作弹窗期间，走棋/回合暂停） */
function waitDialogsClosed() {
  return new Promise(function (resolve) {
    function check() {
      var busy = (typeof dialogQueue !== 'undefined' && dialogQueue.length > 0) ||
        (document.getElementById('dialog-mask').style.display === 'flex');
      if (!busy) resolve();
      else setTimeout(check, 100);
    }
    setTimeout(check, 100);
  });
}

/* 回合收尾：日期推进 + 破产检查 + 交棒 */
function finishTurn() {
  /* 神仙附身倒计时（本回合玩家，交棒前） */
  godTurnTick(G.players[G.turn]);
  /* 找下一个存活玩家；如果绕了一圈回到序列头 → 新的一天 */
  var n = G.players.length;
  var next = G.turn;
  for (var i = 0; i < n; i++) {
    next = (next + 1) % n;
    if (G.players[next].alive) break;
  }
  if (next <= G.turn || (G.turn === n - 1 && next === 0)) {
    /* 绕回队首：一天结束 */
    dailyTick();
    checkBankruptcy();
  } else {
    checkBankruptcy();
  }
  G.turn = next;
  if (G.turn === 0) G.round++;
  if (G.players.filter(function (x) { return x.alive; }).length <= 1) {
    endGame();
  }
  if (typeof updateHud === 'function') updateHud();
}

/* 下一个玩家（兼容旧调用） */
function nextTurn() { finishTurn(); }

/* 破产判定：现金+存款+股票全为 0 且有欠款 → 出局
 * （贷款扣款不足会滚存，不立即出局；只有总资产 < 0 才出局） */
function checkBankruptcy() {
  G.players.forEach(function (p) {
    if (!p.alive) return;
    if (totalAssets(p) < 0) {
      bankrupt(p);
    }
  });
}

/* 破产出局：资产归债权人/银行 */
function bankrupt(p) {
  p.alive = false;
  /* 房产充公（无主化） */
  G.tiles.forEach(function (tile) {
    if (tile.t === 'estate' && tile.owner === p.idx) tile.owner = null;
  });
  log('【破产】💥 ' + p.name + ' 破产出局！名下资产被拍卖', 'warn');
  say(p, 'bankrupt', '破产出局，名下资产被拍卖');
  if (G.players.filter(function (x) { return x.alive; }).length <= 1) endGame();
}

/* 游戏结束 */
function endGame() {
  G.gameOver = true;
  G.phase = 'gameover';
  var alive = G.players.filter(function (x) { return x.alive; });
  G.winners = alive.length ? alive : G.players;
  log('【结束】🏆 游戏结束！最终资产排名：', 'end');
  var ranked = G.players.slice().sort(function (a, b) { return totalAssets(b) - totalAssets(a); });
  ranked.forEach(function (p, i) {
    log('  第 ' + (i + 1) + ' 名：' + p.name + '（总资产 ' + totalAssets(p) + ' 元）', 'end');
  });
  if (typeof showGameOver === 'function') showGameOver();
}
