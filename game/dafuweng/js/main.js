/* 大富翁 · 主程序 v2
 * 异步动画主循环：scheduleTurn → (AI 延迟 | 人类按钮) → await takeTurn() → 下一轮
 * 单屏布局：地图居左，右侧为当前玩家卡 + 全员 chips + 公司 + 日志
 */

var G = null;          /* 全局游戏状态 */

/* ===== 设置界面 ===== */
function initSetup() {
  var wrap = document.getElementById('setup');
  var html = '<h1>🎲 大富翁 · 中国城市版</h1>' +
    '<p class="setup-sub">买房收租 · 银行存贷 · 股市博弈 · 加油开车</p>' +
    '<div class="setup-block"><label>玩家人数：</label>' +
    '<select id="su-count"><option value="2">2 人</option><option value="3">3 人</option><option value="4" selected>4 人</option></select></div>' +
    '<div id="su-players"></div>' +
    '<button class="bigbtn" id="su-start">开始游戏</button>' +
    '<div class="setup-tip">每位玩家初始现金 10 万元。可以选择由你操作或电脑代打。</div>';
  wrap.innerHTML = html;

  function renderPlayerRows() {
    var n = parseInt(document.getElementById('su-count').value, 10);
    var rows = '';
    for (var i = 0; i < n; i++) {
      var av = AVATARS[i];
      rows += '<div class="su-row">' +
        '<span class="su-avatar">' + ICON_FALLBACK[av.id] + ' ' + esc(av.name) + '</span>' +
        '<input class="su-name" type="text" maxlength="8" placeholder="自定义名称" data-i="' + i + '">' +
        '<label><input type="radio" name="su-type-' + i + '" value="human" checked> 人类</label>' +
        '<label><input type="radio" name="su-type-' + i + '" value="ai"> 电脑</label>' +
        '</div>';
    }
    rows += '<div class="su-npc-block"><div class="su-npc-title">NPC 路人名称（可自定义）：</div>';
    for (var j = 0; j < NPC_COUNT; j++) {
      rows += '<input class="su-npc-name" type="text" maxlength="8" value="' + esc(NPC_NAMES[j]) + '" data-j="' + j + '">';
    }
    rows += '</div>';
    document.getElementById('su-players').innerHTML = rows;
  }

  document.getElementById('su-count').onchange = renderPlayerRows;
  renderPlayerRows();

  document.getElementById('su-start').onclick = function () {
    var n = parseInt(document.getElementById('su-count').value, 10);
    var specs = [];
    var nameInputs = document.querySelectorAll('.su-name');
    for (var i = 0; i < n; i++) {
      var isAI = document.querySelector('input[name="su-type-' + i + '"]:checked').value === 'ai';
      var nm = (nameInputs[i] && nameInputs[i].value.trim()) || '';
      specs.push({ avatar: AVATARS[i], isAI: isAI, name: nm.replace(/[<>]/g, '') });
    }
    var npcNames = [];
    var npcInputs = document.querySelectorAll('.su-npc-name');
    for (var j = 0; j < NPC_COUNT; j++) {
      var nn = (npcInputs[j] && npcInputs[j].value.trim()) || NPC_NAMES[j];
      npcNames.push(nn.replace(/[<>]/g, ''));
    }
    specs.npcNames = npcNames;
    startGame(specs);
  };
}

/* ===== 开始游戏 ===== */
function startGame(specs) {
  G = buildGame(specs);
  G.started = true;
  document.getElementById('setup').style.display = 'none';
  document.getElementById('game').style.display = 'flex';
  buildBoardDOM();
  updatePawnsDOM();
  updateHud();
  renderLog();
  log('【系统】游戏开始！' + G.players.length + ' 位玩家每人 10 万元起步，祝好运 🎉', 'sys');
  scheduleTurn();
}

/* ===== 主循环调度（异步） ===== */
function scheduleTurn() {
  if (!G || G.gameOver || G.noLoop) return;   /* noLoop：测试模式手动驱动回合 */
  updateHud();
  updatePawnsDOM();
  var p = curPlayer();
  if (!p) return;
  /* v8：地图跟随当前行动玩家所在国家 */
  var pr = regionOf(p.pos);
  if (G.viewRegion !== pr) switchRegion(pr);
  var btn = document.getElementById('roll-btn');
  if (p.isAI) {
    btn.style.display = 'none';
    setTimeout(async function () {
      if (!G || G.gameOver) return;
      await takeTurn();
      if (G.gameOver) return;
      updatePawnsDOM();
      updateBoardDOM();
      updateHud();
      scheduleTurn();
    }, Math.max(60, ANIM.aiDelay / Math.max(1, ANIM.speed)));
    /* AI 行动前镜头先跟上 */
    if (typeof cameraFollow === 'function') cameraFollow(p);
  } else {
    btn.style.display = 'block';
    btn.textContent = '🎲 ' + p.name + ' 掷骰子';
  }
  /* 道具按钮：人类玩家且有道具时显示 */
  var ibtn = document.getElementById('item-btn');
  if (ibtn) {
    var hasItems = !p.isAI && ((p.items.diceCtrl || 0) > 0 || (p.items.barrier || 0) > 0);
    ibtn.style.display = hasItems ? 'block' : 'none';
  }
  /* 镜头跟随当前玩家 */
  if (typeof cameraFollow === 'function') cameraFollow(p);
}

/* 掷骰按钮（人类玩家）：await 完整回合（内部含动画与弹窗等待） */
function bindRollButton() {
  var btn = document.getElementById('roll-btn');
  btn.onclick = async function () {
    if (!G || G.gameOver) return;
    btn.style.display = 'none';
    await takeTurn();
    if (G.gameOver) return;
    updatePawnsDOM();
    updateBoardDOM();
    updateHud();
    scheduleTurn();
  };
}

/* ===== 全图查看（右栏按钮） ===== */
function bindFullMapButton() {
  var btn = document.getElementById('fullmap-btn');
  if (!btn) return;
  btn.onclick = function () { if (G) showFullMap(); };
}

/* ===== 镜头切换 ===== */
function bindCameraButton() {
  var btn = document.getElementById('cam-btn');
  if (!btn) return;
  btn.onclick = function () { toggleCamera(); };
}

/* ===== 道具背包按钮 ===== */
function bindItemButton() {
  var btn = document.getElementById('item-btn');
  if (!btn) return;
  btn.onclick = function () {
    var p = curPlayer();
    if (!p || p.isAI) return;
    showItemDialog(p);
  };
}

/* ===== 倍速切换 ===== */
function bindSpeedButton() {
  var btn = document.getElementById('speed-btn');
  if (!btn) return;
  btn.onclick = function () {
    if (ANIM.speed === 1) ANIM.speed = 2;
    else if (ANIM.speed === 2) ANIM.speed = 4;
    else ANIM.speed = 1;
    btn.textContent = '⏩ ' + ANIM.speed + 'x';
    btn.classList.remove('sp2', 'sp4');
    if (ANIM.speed === 2) btn.classList.add('sp2');
    if (ANIM.speed === 4) btn.classList.add('sp4');
  };
}

/* ===== 玩家详情弹窗（非阻塞：只在玩家空闲时可开） ===== */
function showPlayerDetail(p) {
  var rows = '';
  rows += '<div class="dt-row"><span>现金</span><b>' + fmtMoney(p.cash) + '</b></div>';
  rows += '<div class="dt-row"><span>银行存款</span><b>' + fmtMoney(p.bank) + '</b></div>';
  rows += '<div class="dt-row"><span>股票市值</span><b>' + fmtMoney(stockValueOf(p)) + '</b></div>';
  var estateVal = 0, estateRows = '';
  G.tiles.forEach(function (t) {
    if (t.t === 'estate' && t.owner === p.idx) {
      var val = ESTATE_BUY_PRICE[t.g];
      for (var lv = 1; lv <= t.level; lv++) val += ESTATE_LEVELS[lv].up[t.g];
      estateVal += val;
      estateRows += '<div class="dt-row"><span>' + esc(t.name) + '（' + ESTATE_LEVELS[t.level].name + '）</span><b>' + fmtMoney(val) +
        (t.level > 0 && !t.electrified ? ' ⚠停电' : '') + '</b></div>';
    }
  });
  rows += '<div class="dt-row"><span>房产总值</span><b>' + fmtMoney(estateVal) + '</b></div>';
  if (p.loan) {
    rows += '<div class="dt-row loan"><span>贷款剩余</span><b>-' + fmtMoney(loanRemaining(p)) + '</b></div>';
    rows += '<div class="dt-row sub"><span>每月' + p.loan.payDay + '日扣 ' + fmtMoney(p.loan.perInstallment) + '（' + (p.loan.source === 'cash' ? '钱包' : '存款') + '）</span></div>';
  }
  rows += '<div class="dt-row total"><span>总资产</span><b>' + fmtMoney(totalAssets(p)) + '</b></div>';
  rows += '<div class="dt-row"><span>当前位置</span><b>📍 ' + REGION_NAMES[regionOf(p.pos)] + '</b></div>';
  rows += '<div class="dt-row"><span>神社运势</span><b>⛩️ ' + esc(fortuneText(p)) + '</b></div>';
  if (estateRows) rows += '<div class="dt-sec">🏠 房产明细</div>' + estateRows;
  /* 股票持仓 */
  var stockRows = '';
  for (var sid in p.stocks) {
    var st = G.stockMap[sid];
    if (st && p.stocks[sid] > 0) {
      stockRows += '<div class="dt-row"><span>' + esc(st.name) + ' x' + p.stocks[sid] + '</span><b>' + fmtMoney(p.stocks[sid] * st.price) + '</b></div>';
    }
  }
  if (stockRows) rows += '<div class="dt-sec">📈 持仓明细</div>' + stockRows;
  var veh = VEHICLES[p.vehicle];
  rows += '<div class="dt-sec">🚗 载具</div><div class="dt-row"><span>' + veh.name + (p.vehicle !== 'walk' ? '（油 ' + p.fuel + '/' + veh.tank + '）' : '') + '</span><b>' + (p.vehicle !== 'walk' ? '掷' + veh.dice + '骰' : '掷1骰') + '</b></div>';

  openDialog((p.isAI ? '🤖 ' : '👤 ') + p.avatar.name + ' 的资产', rows, [
    { label: '关闭', primary: true, onClick: function () { closeDialog(); } }
  ]);
}

/* ===== 公司详情弹窗 ===== */
function showCompanyDetail() {
  var rows = '';
  REGIONS.forEach(function (m) {
    rows += '<div class="dt-sec">🌏 ' + REGION_NAMES[m] + ' · ' + marketLabel(m) + '</div>';
    COMPANY_DEFS.filter(function (d) { return d.market === m; }).forEach(function (def) {
      var c = G.companies[def.id];
      var st = G.stockMap[def.id];
      rows += '<div class="dt-row"><span>' + def.emoji + ' <b>' + esc(def.name) + '</b> Lv.' + c.level + '/5</span>' +
        '<span>股价 ' + fmtMoney(st.price) + ' · 本月 ' + fmtMoney(c.monthlyIncome) + ' · 分红池 ' + fmtMoney(st.dividendPool) + '</span></div>';
    });
    stocksOfMarket(m).forEach(function (st) {
      var chg = st.lastPrice ? (st.price - st.lastPrice) / st.lastPrice : 0;
      rows += '<div class="dt-row"><span>' + esc(st.name) + (st.entity ? '（实体）' : '') + '</span><b>' +
        fmtMoney(st.price) + ' <span class="' + (chg > 0 ? 'up' : chg < 0 ? 'down' : '') + '">' +
        (chg > 0 ? '+' : '') + (chg * 100).toFixed(1) + '%</span></b></div>';
    });
  });
  openDialog('🏢 三国公司与股市行情（30 只）', rows, [
    { label: '关闭', primary: true, onClick: function () { closeDialog(); } }
  ]);
}

/* ===== 启动 ===== */
document.addEventListener('DOMContentLoaded', function () {
  initSetup();
  bindRollButton();
  bindSpeedButton();
  bindCameraButton();
  bindItemButton();
  bindFullMapButton();
});

/* 调试入口（控制台可用；testMode=true 时跳过全部动画） */
window.__monopoly = {
  get state() { return G; },
  setSpeed: function (x) { ANIM.speed = x; },
  start: function (nAI, testMode) {   /* 快速开局（默认全 AI + 测试模式） */
    var specs = [];
    for (var i = 0; i < Math.max(2, nAI || 4); i++) specs.push({ avatar: AVATARS[i % 4], isAI: true });
    if (testMode !== false) {
      ANIM.speed = 1000;   /* 跳过动画 */
      startGame(specs);
      G.noLoop = true;     /* 禁用主循环，由测试手动 await takeTurn() 驱动 */
    } else {
      startGame(specs);    /* 真实模式：完整主循环 */
    }
    return G;
  }
};
