/* 大富翁 · UI 层（对话框 / HUD / 日志 / 面板）
 * 依赖：G（全局状态）、config/data/board/engine 各函数
 * 所有 innerHTML 文案不含裸 <X>，用户可见占位符用【X】。
 */

/* ===== 通用小工具 ===== */
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function fmtMoney(n) { return (n < 0 ? '-' : '') + Math.abs(Math.round(n)).toLocaleString('zh-CN'); }

/* 当前行动玩家 */
function curPlayer() { return G.players[G.turn]; }

/* ===== HUD（单屏紧凑版：当前玩家大卡 + 全员 chips） ===== */
function updateHud() {
  var el = document.getElementById('hud-date');
  if (el) el.textContent = '📍' + REGION_NAMES[G.viewRegion || 'cn'] + ' · ' +
    G.year + '年' + G.month + '月' + G.day + '日 · 第' + G.round + '轮' +
    (G.priceIndex > 1 ? ' · 📈物价x' + G.priceIndex : '');
  var cur = curPlayer();
  var el2 = document.getElementById('hud-turn');
  if (el2) el2.textContent = cur ? (cur.isAI ? '🤖 ' : '👤 ') + cur.avatar.name : '-';

  /* ---- 当前玩家大卡 ---- */
  var main = document.getElementById('player-main');
  if (main && cur) {
    var p = cur;
    var veh = VEHICLES[p.vehicle];
    var status = !p.alive ? '💀 出局' :
      (p.hospitalDays > 0 ? '🏥 住院' + p.hospitalDays + '天' :
        (p.jailDays > 0 ? '💤 休养' + p.jailDays + '天' : '✅ 正常'));
    var html = '<div class="pm-head">' +
      '<span class="pm-avatar" style="background:' + PLAYER_COLORS[p.idx] + '">' + ICON_FALLBACK[p.avatar.id] + '</span>' +
      '<div><div class="pm-name" style="color:' + PLAYER_COLORS[p.idx] + '">' + esc(p.avatar.name) + (p.isAI ? ' <span class="ai-badge">AI</span>' : '') + '</div>' +
      '<div class="pm-status">' + status + ' · 📍' + REGION_NAMES[regionOf(p.pos)] + ' · ' + veh.name +
        (p.vehicle !== 'walk' ? ' ⛽' + p.fuel + '/' + veh.tank : '') +
        (activeFortune(p) ? ' · ⛩️' + activeFortune(p) : '') + '</div></div></div>' +
      '<div class="pm-rows">' +
      '<div class="pm-row"><span>现金</span><b>' + fmtMoney(p.cash) + '</b></div>' +
      '<div class="pm-row"><span>存款</span><b>' + fmtMoney(p.bank) + '</b></div>' +
      '<div class="pm-row"><span>股票</span><b>' + fmtMoney(stockValueOf(p)) + '</b></div>' +
      (p.loan ? '<div class="pm-row loan"><span>贷款</span><b>-' + fmtMoney(loanRemaining(p)) + '</b></div>' : '') +
      '<div class="pm-row total"><span>总资产</span><b>' + fmtMoney(totalAssets(p)) + '</b></div>' +
      '</div>';
    main.innerHTML = html;
  }

  /* ---- 全员 chips（点击弹详情） ---- */
  var chips = document.getElementById('player-chips');
  if (chips) {
    var html2 = '';
    G.players.forEach(function (p) {
      html2 += '<div class="pchip' + (G.turn === p.idx && p.alive ? ' active' : '') + (!p.alive ? ' dead' : '') +
        '" data-idx="' + p.idx + '" title="点击查看 ' + esc(p.name) + ' 详情">' +
        '<span class="pchip-dot" style="background:' + PLAYER_COLORS[p.idx] + '">' + ICON_FALLBACK[p.avatar.id] + '</span>' +
        '<span class="pchip-name">' + esc(p.name) + (p.god ? ' ' + GODS[p.god.id].emoji : '') + '</span>' +
        '<span class="pchip-asset">' + fmtMoney(totalAssets(p)) + '</span></div>';
    });
    chips.innerHTML = html2;
    /* 绑定点击（每次重渲染后重绑，简单可靠） */
    var nodes = chips.querySelectorAll('.pchip');
    for (var i = 0; i < nodes.length; i++) {
      (function (node) {
        node.onclick = function () {
          var idx = parseInt(node.getAttribute('data-idx'), 10);
          showPlayerDetail(G.players[idx]);
        };
      })(nodes[i]);
    }
  }

  /* ---- 公司行情（一行，点击弹详情） ---- */
  var cwrap = document.getElementById('companies');
  if (cwrap) {
    var ch = '';
    var m = marketOf(cur);
    COMPANY_DEFS.filter(function (d) { return d.market === m; }).forEach(function (def) {
      var c = G.companies[def.id];
      var st = G.stockMap[def.id];
      ch += '<span class="cinfo"><b>' + def.emoji + ' ' + esc(def.name) + '</b> Lv.' + c.level +
        ' · ' + fmtMoney(st.price) + '元' +
        (st.dividendPool > 0 ? ' · 分红池' + fmtMoney(st.dividendPool) : '') + '</span>';
    });
    cwrap.innerHTML = ch;
    cwrap.onclick = showCompanyDetail;
    cwrap.title = '点击查看公司与股市详情';
  }
}

/* ===== 日志 ===== */
function renderLog() {
  var el = document.getElementById('log');
  if (!el) return;
  var items = G.log.slice(-60);
  var html = '';
  items.forEach(function (it) {
    html += '<div class="log-item t-' + esc(it.type) + '"><span class="log-date">' +
      it.month + '/' + it.day + '</span>' + esc(it.text) + '</div>';
  });
  el.innerHTML = html;
  el.scrollTop = el.scrollHeight;
}

/* ===== 对话框框架 v2 =====
 * 规则：
 *  - openDialog 入队；closeDialog 关闭并出队下一个；队列空时才回调 resumeIfNeeded
 *  - replaceDialog 原地刷新当前对话框（不排队、不触发 resume）——存取款/买卖股后刷新数据用
 *  - 按钮回调里绝不手动调 closeDialog+resumeIfNeeded（关闭统一走 closeDialog）
 */
var dialogQueue = [];
var dialogBusy = false;
var resumeIfNeeded = function () {};

function openDialog(title, bodyHTML, buttons) {
  dialogQueue.push({ title: title, body: bodyHTML, buttons: buttons });
  pumpDialog();
}

function pumpDialog() {
  if (dialogBusy || dialogQueue.length === 0) return;
  dialogBusy = true;
  renderDialogHead(dialogQueue.shift());
}

/* 把一个对话框渲染到屏幕（供 pumpDialog 和 replaceDialog 共用） */
function renderDialogHead(dlg) {
  var mask = document.getElementById('dialog-mask');
  document.getElementById('dialog-title').textContent = dlg.title;
  document.getElementById('dialog-body').innerHTML = dlg.body;
  var btns = document.getElementById('dialog-btns');
  btns.innerHTML = '';
  (dlg.buttons || []).forEach(function (b) {
    var btn = document.createElement('button');
    btn.className = 'dbtn' + (b.primary ? ' primary' : '') + (b.danger ? ' danger' : '');
    btn.textContent = b.label;
    btn.onclick = function () { b.onClick(); };
    btns.appendChild(btn);
  });
  mask.style.display = 'flex';
}

/* 原地刷新当前对话框（操作成功后更新数据，不关窗） */
function replaceDialog(title, bodyHTML, buttons) {
  renderDialogHead({ title: title, body: bodyHTML, buttons: buttons });
}

function closeDialog() {
  document.getElementById('dialog-mask').style.display = 'none';
  var dlgWide = document.getElementById('dialog');
  if (dlgWide) dlgWide.classList.remove('dlg-wide');
  dialogBusy = false;
  if (dialogQueue.length > 0) {
    setTimeout(pumpDialog, 120);
  } else {
    var cb = resumeIfNeeded;
    resumeIfNeeded = function () {};
    cb();
  }
}

/* ===== 银行对话框 ===== */
function bankDialogBody(p, mode) {
  var loanInfo = p.loan
    ? '<div class="tip warn">已有贷款：剩余应还 ' + fmtMoney(loanRemaining(p)) + ' 元（每月' + p.loan.payDay + '日从' + (p.loan.source === 'cash' ? '钱包' : '存款') + '扣款）</div>'
    : '';
  var limit = loanLimit(p);
  return '<div class="tip">存款利率 0.1%/日（每月1日结算）。贷款额度 = 总资产×60% = ' + fmtMoney(limit) + ' 元</div>' +
    loanInfo +
    '<div class="drow">当前现金 <b>' + fmtMoney(p.cash) + '</b> · 存款 <b>' + fmtMoney(p.bank) + '</b></div>' +
    '<div class="drow">金额：<input id="d-bank-amt" type="number" min="1" value="' + Math.max(1, ifloor(p.cash / 2)) + '"></div>';
}

function showBankDialog(p, mode) {
  var btns = [
    { label: '存款', onClick: function () {
      var v = parseInt(document.getElementById('d-bank-amt').value, 10) || 0;
      var r = bankDeposit(p, v);
      if (!r.ok) flashMsg(r.msg); else { updateHud(); replaceDialog('🏦 银行（' + mode + '）', bankDialogBody(p, mode), bankButtons(p, mode)); }
    } },
    { label: '取款', onClick: function () {
      var v = parseInt(document.getElementById('d-bank-amt').value, 10) || 0;
      var r = bankWithdraw(p, v);
      if (!r.ok) flashMsg(r.msg); else { updateHud(); replaceDialog('🏦 银行（' + mode + '）', bankDialogBody(p, mode), bankButtons(p, mode)); }
    } }
  ];
  if (mode === '停留') {
    btns.push({ label: '申请贷款', onClick: function () {
      if (p.loan) { flashMsg('已有一笔贷款未结清'); return; }
      showLoanDialog(p);
    } });
  }
  btns.push({ label: '关闭', primary: true, onClick: function () { closeDialog(); } });
  openDialog('🏦 银行（' + mode + '）', bankDialogBody(p, mode), btns);
}

/* 银行按钮组（replaceDialog 刷新用） */
function bankButtons(p, mode) {
  var btns = [
    { label: '存款', onClick: function () {
      var v = parseInt(document.getElementById('d-bank-amt').value, 10) || 0;
      var r = bankDeposit(p, v);
      if (!r.ok) flashMsg(r.msg); else { updateHud(); replaceDialog('🏦 银行（' + mode + '）', bankDialogBody(p, mode), bankButtons(p, mode)); }
    } },
    { label: '取款', onClick: function () {
      var v = parseInt(document.getElementById('d-bank-amt').value, 10) || 0;
      var r = bankWithdraw(p, v);
      if (!r.ok) flashMsg(r.msg); else { updateHud(); replaceDialog('🏦 银行（' + mode + '）', bankDialogBody(p, mode), bankButtons(p, mode)); }
    } }
  ];
  if (mode === '停留') {
    btns.push({ label: '申请贷款', onClick: function () {
      if (p.loan) { flashMsg('已有一笔贷款未结清'); return; }
      showLoanDialog(p);
    } });
  }
  btns.push({ label: '关闭', primary: true, onClick: function () { closeDialog(); } });
  return btns;
}

/* ===== 贷款对话框 ===== */
function loanDialogBody(p) {
  var limit = loanLimit(p);
  return '<div class="tip">可贷上限 ' + fmtMoney(limit) + ' 元。3期总利息15%（每期5%）、6期24%（每期4%）、12期36%（每期3%）。扣款方式选定后不可更改。</div>' +
    '<div class="drow">金额：<input id="d-loan-amt" type="number" min="100" value="' + Math.max(100, ifloor(limit / 2)) + '"></div>' +
    '<div class="drow">期数：<select id="d-loan-terms"><option value="3">3期（每期还本金1/3 + 利息5%）</option><option value="6">6期（每期1/6 + 4%）</option><option value="12">12期（每期1/12 + 3%）</option></select></div>' +
    '<div class="drow">扣款日：<select id="d-loan-payday"><option value="5">每月5日</option><option value="25">每月25日</option></select></div>' +
    '<div class="drow">扣款来源：<select id="d-loan-source"><option value="cash">钱包现金</option><option value="bank">银行存款</option></select></div>';
}

function showLoanDialog(p) {
  if (p.loan) { flashMsg('已有一笔贷款未结清'); return; }
  replaceDialog('💸 申请贷款', loanDialogBody(p), [
    { label: '确认贷款', primary: true, onClick: function () {
      var amt = parseInt(document.getElementById('d-loan-amt').value, 10) || 0;
      var terms = parseInt(document.getElementById('d-loan-terms').value, 10);
      var payDay = parseInt(document.getElementById('d-loan-payday').value, 10);
      var source = document.getElementById('d-loan-source').value;
      var r = applyLoan(p, amt, terms, payDay, source);
      if (!r.ok) { flashMsg(r.msg); return; }
      updateHud();
      /* 贷款成功 → 回到银行主界面（原地刷新），能看到新贷款状态 */
      replaceDialog('🏦 银行（停留）', bankDialogBody(p, '停留'), bankButtons(p, '停留'));
    } },
    { label: '返回', onClick: function () {
      replaceDialog('🏦 银行（停留）', bankDialogBody(p, '停留'), bankButtons(p, '停留'));
    } }
  ]);
}

/* ===== 股市对话框 ===== */
function stockDialogBody(p) {
  var rows = '';
  var list = stocksOfMarket(marketOf(p));   /* v8：只列本国股票 */
  list.forEach(function (st) {
    var chg = st.lastPrice ? (st.price - st.lastPrice) / st.lastPrice : 0;
    var chgCls = chg > 0 ? 'up' : (chg < 0 ? 'down' : '');
    var chgTxt = (chg > 0 ? '+' : '') + (chg * 100).toFixed(1) + '%';
    var held = p.stocks[st.id] || 0;
    rows += '<tr><td>' + esc(st.name) + (st.entity ? ' <span class="ent-tag">实体</span>' : '') + '</td>' +
      '<td class="' + chgCls + '">' + fmtMoney(st.price) + '</td>' +
      '<td class="' + chgCls + '">' + chgTxt + '</td>' +
      '<td class="held-cell' + (held > 0 ? ' has' : '') + '">' + held + '</td></tr>';
  });
  return '<div class="tip">📍 ' + REGION_NAMES[marketOf(p)] + ' · <b>' + marketLabel(marketOf(p)) + '</b>（只能买卖本国股票，共 ' + list.length + ' 只）</div>' +
    '<div class="tip">股价由买卖驱动（涨跌停±10%/日）。持有实体公司股票可参与分红。持仓市值 <b>' + fmtMoney(stockValueOf(p)) + '</b> 元</div>' +
    '<table class="stock-table"><tr><th>股票</th><th>现价</th><th>涨跌</th><th>持有</th></tr>' + rows + '</table>' +
    '<div class="drow">代码：<select id="d-stock-sid">' +
    list.map(function (st) { return '<option value="' + st.id + '">' + esc(st.name) + '</option>'; }).join('') +
    '</select> 数量：<input id="d-stock-cnt" type="number" min="1" value="10"></div>';
}

function stockButtons(p) {
  return [
    { label: '买入', onClick: function () {
      var sid = document.getElementById('d-stock-sid').value;
      var cnt = parseInt(document.getElementById('d-stock-cnt').value, 10) || 0;
      var r = buyStock(p, sid, cnt);
      if (!r.ok) flashMsg(r.msg);
      updateHud();
      replaceDialog('📈 ' + marketLabel(marketOf(p)), stockDialogBody(p), stockButtons(p));
    } },
    { label: '卖出', onClick: function () {
      var sid = document.getElementById('d-stock-sid').value;
      var cnt = parseInt(document.getElementById('d-stock-cnt').value, 10) || 0;
      var r = sellStock(p, sid, cnt);
      if (!r.ok) flashMsg(r.msg);
      updateHud();
      replaceDialog('📈 ' + marketLabel(marketOf(p)), stockDialogBody(p), stockButtons(p));
    } },
    { label: '关闭', primary: true, onClick: function () { closeDialog(); } }
  ];
}

function showStockDialog(p, mode) {
  openDialog('📈 ' + marketLabel(marketOf(p)) + '（' + mode + '）', stockDialogBody(p), stockButtons(p));
}

/* ===== 电网对话框 ===== */
function gridDialogBody(p) {
  var info = gridStayCheck(p);
  var debtTip = info.debt > 0
    ? '<div class="tip warn">⚠️ 当前欠费 <b>' + fmtMoney(info.debt) + '</b> 元，中国区建筑停电中！补缴欠费后立即恢复供电。</div>'
    : '';
  return '<div class="tip">⚡ 国家电网只覆盖<b>中国区有建筑</b>的地块（' + GRID_BASE_FEE + ' 元/栋/月 x 物价）。' +
    '日本/美国建筑由当地电网供电，<b>不收电费、永不停电</b>；空地没有用电设备，也照常收基础过路费。</div>' +
    '<div class="tip">每月 1 日自动按「预存 → 钱包现金 → 银行存款」顺序扣款，不必特地跑来预存；三处都掏空才会欠费。可预存，不可取现。</div>' +
    '<div class="tip">中国区建筑 <b>' + info.buildings + '</b> 栋 · 海外建筑 <b>' + info.overseas + '</b> 栋（免电费） · 空地 <b>' + info.empty +
    '</b> 块，本月应缴 <b>' + fmtMoney(info.monthlyNeed) + '</b> 元（物价 x' + priceMul() + '），当前预存 <b>' + fmtMoney(info.prepaid) + '</b> 元' +
    (info.debt > 0 ? '，欠费 ' + fmtMoney(info.debt) + ' 元' : '') + '。</div>' + debtTip +
    '<div class="drow">预存金额：<input id="d-grid-amt" type="number" min="100" step="100" value="' +
      Math.max(100, info.monthlyNeed * 2 + info.debt) + '"></div>';
}

function gridDialogTitle(mode) {
  return '⚡ 国家电网（Lv.' + G.companies.grid.level + (mode ? ' · ' + mode : '') + '）';
}

/* v7 修复：以前用 document.getElementById('d-grid-amt') 判断要不要加按钮，
 * 但按钮数组是在 openDialog 渲染 body 之前构造的，输入框根本还不在 DOM 里，
 * 导致「路过电网」弹窗只有预存金额和关闭，没有「预存电费」按钮。 */
function gridButtons(p, mode) {
  return [
    { label: '预存电费', primary: true, onClick: function () {
      var input = document.getElementById('d-grid-amt');
      var v = input ? (parseInt(input.value, 10) || 0) : 0;
      var r = gridPrepay(p, v);
      if (!r.ok) flashMsg(r.msg);
      updateHud();
      /* 原地刷新：显示新的预存余额 / 欠费结清状态，按钮保持可用 */
      replaceDialog(gridDialogTitle(mode), gridDialogBody(p), gridButtons(p, mode));
    } },
    { label: '关闭', onClick: function () { closeDialog(); } }
  ];
}

function showGridDialog(p, mode) {
  openDialog(gridDialogTitle(mode), gridDialogBody(p), gridButtons(p, mode));
}

/* ===== 加油站对话框 ===== */
function gasDialogBody(p) {
  var v = VEHICLES[p.vehicle];
  if (p.vehicle === 'walk') {
    return '<div class="tip">你正在步行，不需要加油。购买摩托车/汽车请去百货商店。</div>';
  }
  var price = currentGasPrice();
  return '<div class="tip">当前油价：' + price + ' 元 / 10单位（按石化上月收益浮动）。油箱：<b>' + p.fuel + '/' + v.tank + '</b>，每次行动耗油 ' + v.perMove + '。</div>' +
    '<div class="drow">加油量（10的倍数）：<input id="d-gas-units" type="number" min="10" step="10" value="' + GAS_UNIT + '"></div>';
}

function gasButtons(p) {
  if (p.vehicle === 'walk') {
    return [{ label: '关闭', primary: true, onClick: function () { closeDialog(); } }];
  }
  return [
    { label: '加油', primary: true, onClick: function () {
      var units = parseInt(document.getElementById('d-gas-units').value, 10) || 0;
      var r = gasRefuel(p, units);
      if (!r.ok) flashMsg(r.msg);
      updateHud();
      replaceDialog('⛽ 加油站', gasDialogBody(p), gasButtons(p));
    } },
    { label: '关闭', onClick: function () { closeDialog(); } }
  ];
}

function showGasDialog(p, mode) {
  openDialog('⛽ 加油站（' + mode + '）', gasDialogBody(p), gasButtons(p));
}

/* ===== 地产对话框 ===== */
function showEstateDialog(p, tile) {
  var price = ESTATE_BUY_PRICE[tile.g];
  var btns = [];
  var body;
  if (tile.owner == null) {
    body = '<div class="tip">【' + esc(tile.name) + '】（' + ['普通', '繁华', '核心'][tile.g] + '地段）无主之地。购地价 ' + fmtMoney(price) + ' 元。</div>' +
      '<div class="tip">建后过路费：小屋 ' + ESTATE_LEVELS[1].toll[tile.g] + ' / 洋楼 ' + ESTATE_LEVELS[2].toll[tile.g] + ' / 大厦 ' + ESTATE_LEVELS[3].toll[tile.g] + ' 元</div>' +
      '<div class="drow">您的现金：<b>' + fmtMoney(p.cash) + '</b> 元</div>';
    btns = [
      { label: '购买（' + fmtMoney(price) + '元）', primary: true, onClick: function () {
        var r = buyEstate(p, tile.idx);
        if (!r.ok) { flashMsg(r.msg); return; }
        updateHud(); updateBoardDOM(); closeDialog();
      } },
      { label: '放弃', onClick: function () { closeDialog(); } }
    ];
  } else if (tile.owner === p.idx) {
    var lv = ESTATE_LEVELS[tile.level];
    var next = tile.level < 3 ? ESTATE_LEVELS[tile.level + 1] : null;
    body = '<div class="tip">【' + esc(tile.name) + '】是您的产业，当前等级：' + lv.name + '，过路费 ' + estateToll(tile) + ' 元' +
      (tile.level > 0 && !tile.electrified ? '（建筑停电中收不了）' : '') + '。</div>' +
      (next ? '<div class="tip">升级到「' + next.name + '」需 ' + fmtMoney(next.up[tile.g]) + ' 元，过路费涨到 ' + next.toll[tile.g] + ' 元。</div>' : '<div class="tip warn">已是满级大厦。</div>') +
      '<div class="drow">您的现金：<b>' + fmtMoney(p.cash) + '</b> 元</div>';
    btns = next ? [
      { label: '升级（' + fmtMoney(next.up[tile.g]) + '元）', primary: true, onClick: function () {
        var r = upgradeEstate(p, tile.idx);
        if (!r.ok) { flashMsg(r.msg); return; }
        updateHud(); updateBoardDOM(); closeDialog();
      } },
      { label: '保持现状', onClick: function () { closeDialog(); } }
    ] : [{ label: '关闭', primary: true, onClick: function () { closeDialog(); } }];
  } else {
    body = '<div class="tip">【' + esc(tile.name) + '】属于 ' + esc(G.players[tile.owner].avatar.name) + '，过路费已支付。</div>';
    btns = [{ label: '关闭', primary: true, onClick: function () { closeDialog(); } }];
  }
  openDialog('🏠 ' + esc(tile.name), body, btns);
}

/* ===== 百货商店 ===== */
function mallDialogBody(p) {
  var v1 = VEHICLES.moto, v2 = VEHICLES.car;
  var dc = Math.round(ITEMS.diceCtrl.cost * priceMul());
  var br = Math.round(ITEMS.barrier.cost * priceMul());
  return '<div class="tip">交通工具与道具一应俱全（价格随物价浮动）</div>' +
    '<div class="mall-item">🏍️ ' + v1.name + '：' + fmtMoney(Math.round(v1.cost * priceMul())) + ' 元（掷2骰，耗油5，箱100）</div>' +
    '<div class="mall-item">🚗 ' + v2.name + '：' + fmtMoney(Math.round(v2.cost * priceMul())) + ' 元（掷3骰，耗油10，箱200）</div>' +
    '<div class="mall-item">🎯 遥控骰子：' + fmtMoney(dc) + ' 元（下回合掷出指定点数 1-18）</div>' +
    '<div class="mall-item">🚧 路障：' + fmtMoney(br) + ' 元（放任意格，路过者强制停下）</div>' +
    '<div class="tip">当前载具：' + VEHICLES[p.vehicle].name + ' · 背包：🎯x' + (p.items.diceCtrl || 0) + ' 🚧x' + (p.items.barrier || 0) + ' · 现金 <b>' + fmtMoney(p.cash) + '</b></div>';
}
function showMallDialog(p) {
  replaceDialog('🛒 百货商店', mallDialogBody(p), mallButtons(p));
}
function mallButtons(p) {
  return [
    { label: '买摩托', onClick: function () {
      var r = buyVehicle(p, 'moto');
      if (!r.ok) flashMsg(r.msg);
      updateHud(); replaceDialog('🛒 百货商店', mallDialogBody(p), mallButtons(p));
    } },
    { label: '买汽车', onClick: function () {
      var r = buyVehicle(p, 'car');
      if (!r.ok) flashMsg(r.msg);
      updateHud(); replaceDialog('🛒 百货商店', mallDialogBody(p), mallButtons(p));
    } },
    { label: '🎯 遥控骰子', onClick: function () {
      var r = buyItem(p, 'diceCtrl');
      if (!r.ok) flashMsg(r.msg);
      updateHud(); replaceDialog('🛒 百货商店', mallDialogBody(p), mallButtons(p));
    } },
    { label: '🚧 路障', onClick: function () {
      var r = buyItem(p, 'barrier');
      if (!r.ok) flashMsg(r.msg);
      updateHud(); replaceDialog('🛒 百货商店', mallDialogBody(p), mallButtons(p));
    } },
    { label: '离开', primary: true, onClick: function () { closeDialog(); } }
  ];
}

/* ===== 道具背包（人类玩家操作） ===== */
function showItemDialog(p) {
  var body = '<div class="tip">背包：🎯 遥控骰子 x' + (p.items.diceCtrl || 0) + ' · 🚧 路障 x' + (p.items.barrier || 0) + '</div>' +
    '<div class="drow">🎯 指定点数（1-18）：<input id="d-dice-points" type="number" min="1" max="18" value="6"></div>' +
    '<div class="drow">🚧 路障放在第几格：<input id="d-barrier-idx" type="number" min="0" max="' + (G.tiles.length - 1) + '" value="' + G.players[(p.idx + 1) % G.players.length].pos + '"></div>';
  var btns = [];
  if ((p.items.diceCtrl || 0) > 0) {
    btns.push({ label: '🎯 使用遥控骰子', primary: true, onClick: function () {
      var pts = parseInt(document.getElementById('d-dice-points').value, 10) || 0;
      var r = useDiceCtrl(p, pts);
      if (!r.ok) flashMsg(r.msg);
      else { updateHud(); closeDialog(); }
    } });
  }
  if ((p.items.barrier || 0) > 0) {
    btns.push({ label: '🚧 放置路障', onClick: function () {
      var idx = parseInt(document.getElementById('d-barrier-idx').value, 10);
      var r = placeBarrier(p, idx);
      if (!r.ok) flashMsg(r.msg);
      else { updateHud(); closeDialog(); }
    } });
  }
  btns.push({ label: '关闭', onClick: function () { closeDialog(); } });
  openDialog('🎒 道具背包', body, btns);
}

/* ===== 游戏结束 ===== */
function showGameOver() {
  var ranked = G.players.slice().sort(function (a, b) { return totalAssets(b) - totalAssets(a); });
  var rows = ranked.map(function (p, i) {
    return '<div class="rank-row"><span>第' + (i + 1) + '名</span><b style="color:' + PLAYER_COLORS[p.idx] + '">' + esc(p.avatar.name) + '</b><span>' + fmtMoney(totalAssets(p)) + ' 元</span></div>';
  }).join('');
  openDialog('🏆 游戏结束', '<div class="tip">最终排名（按总资产）：</div>' + rows, [
    { label: '再来一局', primary: true, onClick: function () { location.reload(); } }
  ]);
}

/* ===== 骰子动画（地图中央） ===== */
function showDiceAnim(dice, p) {
  var el = document.getElementById('dice-anim');
  if (!el) return;
  var n = dice.length;
  var html = '<div class="dice-who">' + ICON_FALLBACK[p.avatar.id] + ' ' + esc(p.name) + '</div><div class="dice-row">';
  for (var i = 0; i < n; i++) html += '<span class="dice die-rolling">?</span>';
  html += '</div>';
  el.innerHTML = html;
  el.style.display = 'flex';
  /* 滚动效果：快速换随机点数 */
  var spins = Math.max(8, Math.round(18 / Math.max(1, ANIM.speed)));
  var spinCount = 0;
  var timer = setInterval(function () {
    var dies = el.querySelectorAll('.dice');
    for (var i = 0; i < dies.length; i++) {
      dies[i].textContent = 1 + Math.floor(Math.random() * 6);
    }
    spinCount++;
    if (spinCount >= spins) {
      clearInterval(timer);
      /* 定格：显示真实结果 */
      var final = el.querySelectorAll('.dice');
      for (var j = 0; j < final.length; j++) {
        final[j].textContent = dice[j];
        final[j].classList.remove('die-rolling');
        final[j].classList.add('die-settled');
      }
    }
  }, Math.max(40, Math.round(ANIM.dice / spins / Math.max(1, ANIM.speed))));
}

function hideDiceAnim() {
  var el = document.getElementById('dice-anim');
  if (el) { el.style.display = 'none'; el.innerHTML = ''; }
}

/* ===== 走棋高亮 ===== */
function highlightTile(idx, on) {
  var el = document.getElementById('tile-' + idx);
  if (!el) return;
  if (on === false) el.classList.remove('tile-hl');
  else el.classList.add('tile-hl');
}

/* ===== 提示条 ===== */
var flashTimer = null;
function flashMsg(msg) {
  var el = document.getElementById('flash');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  if (flashTimer) clearTimeout(flashTimer);
  flashTimer = setTimeout(function () { el.classList.remove('show'); }, 2200);
}


/* ===== v8：三国全图查看（可切换国家） ===== */
function fullMapPayload(region) {
  var n = REGION_GRID[region], coords = REGION_COORDS[region];
  var byLocal = {};
  G.tiles.forEach(function (t) { if (t.region === region) byLocal[t.local] = t.idx; });
  var byCoord = {};
  for (var i in coords) byCoord[coords[i].c + ',' + coords[i].r] = parseInt(i, 10);
  var zoneBg = ['#eef1f4', '#fffdf5', '#f7ecd7'];
  var zoneName = ['贫穷', '普通', '富裕'];
  var legend = '<div class="map-legend">' +
    '<span><i style="background:#eef1f4"></i>贫穷(x0.6)</span>' +
    '<span><i style="background:#fffdf5"></i>普通(x1)</span>' +
    '<span><i style="background:#f7ecd7"></i>富裕(x1.4)</span>' +
    G.players.map(function (p) {
      return '<span><i style="background:' + PLAYER_COLORS[p.idx] + '"></i>' + esc(p.name) + '</span>';
    }).join('') +
    '<span>😇天使 😈恶魔 🧧财神 🥀穷神 🚧路障</span>' +
    '<span>⚓港口 ✈️机场 ⛩️神社 🎣渔港 🏢企业 · 数字=建筑等级</span>' +
    '</div>';
  var html = legend + '<div class="minimap-wrap"><div class="minimap" style="grid-template-columns: repeat(' + n + ', 62px)">';
  for (var r = 1; r <= n; r++) {
    for (var c = 1; c <= n; c++) {
      var local = byCoord[c + ',' + r];
      var idx = (local == null) ? null : byLocal[local];
      if (idx == null) { html += '<div class="mini-cell mini-blank"></div>'; continue; }
      var t = G.tiles[idx];
      var owner = t.owner != null ? G.players[t.owner] : null;
      var style = '';
      if (owner) style = 'background:' + PLAYER_COLORS[owner.idx] + ';color:#fff';
      else if (t.t === 'estate') style = 'background:' + zoneBg[t.z != null ? t.z : 1];
      var label = t.name || (TILE_VIEW[t.t] ? TILE_VIEW[t.t].label : '');
      var tip = label + (t.t === 'estate'
        ? ' · ' + zoneName[t.z != null ? t.z : 1] + '地区 · ' + ESTATE_LEVELS[t.level].name +
          ' · 过路' + estateToll(t) + '元' + (owner ? ' · 业主:' + owner.name : '')
        : '');
      var badges = '';
      if (t.t === 'estate' && t.level > 0) badges += '<span class="mini-lv">' + t.level + '</span>';
      if (t.t === 'estate' && t.level > 0 && !t.electrified) badges += '<span title="建筑停电">⚡</span>';
      if (t.god) badges += '<span title="' + GODS[t.god].name + '">' + GODS[t.god].emoji + '</span>';
      if (t.barrier != null) badges += '<span title="路障">🚧</span>';
      G.players.forEach(function (pl) {
        if (pl.alive && pl.pos === idx) {
          badges += '<span class="mini-pawn" style="background:' + PLAYER_COLORS[pl.idx] +
            '" title="' + esc(pl.name) + '">' + ICON_FALLBACK[pl.avatar.id] + '</span>';
        }
      });
      html += '<div class="mini-cell mini-' + t.t + '" style="' + style + '" title="' + esc(tip) + '">' +
        '<div class="mini-name">' + esc(label) + '</div>' +
        '<div class="mini-badges">' + badges + '</div></div>';
    }
  }
  html += '</div></div>';
  var btns = REGIONS.map(function (rg) {
    return { label: (rg === region ? '● ' : '') + REGION_NAMES[rg] + '地图',
      onClick: function () { renderFullMap(rg); } };
  });
  btns.push({ label: '关闭', primary: true, onClick: function () { closeDialog(); } });
  return {
    title: '🗺 ' + REGION_NAMES[region] + '全图 · ' + n + '×' + n + '（' + REGION_SIZE[region] +
      ' 格通行）· 物价 x' + priceMul(),
    body: html, buttons: btns
  };
}
function showFullMap(region) {
  var pl = fullMapPayload(region || G.viewRegion || 'cn');
  openDialog(pl.title, pl.body, pl.buttons);
  var dlg = document.getElementById('dialog');
  if (dlg) dlg.classList.add('dlg-wide');
}
function renderFullMap(region) {
  var pl = fullMapPayload(region);
  replaceDialog(pl.title, pl.body, pl.buttons);
  var dlg = document.getElementById('dialog');
  if (dlg) dlg.classList.add('dlg-wide');
}

/* ===== v8：跨国交通 / 渔港 / 企业 弹窗 ===== */
function showTravelDialog(p, mode) {
  var isPort = mode === 'port';
  var fare = Math.round(TRAVEL_FARE[mode] * priceMul());
  var opts = travelOptions(p, mode);
  var body = '<div class="tip">' + (isPort ? '⚓ 港口：从地图边缘的海洋坐船横渡' : '✈️ 飞机场：直飞对应国家的机场') +
    '。单程票价 <b>' + fmtMoney(fare) + '</b> 元（物价 x' + priceMul() + '）。</div>' +
    '<div class="tip">抵达后落在目的地国家的' + (isPort ? '港口' : '机场') + '，本回合即告结束。不去别的国家也可以直接离开。</div>' +
    '<div class="drow">当前位置：<b>' + REGION_NAMES[regionOf(p.pos)] + '</b> · 现金 <b>' + fmtMoney(p.cash) + '</b> 元</div>';
  var btns = opts.map(function (o) {
    return { label: '前往' + o.name + '（' + fmtMoney(o.fare) + '元）', onClick: function () {
      var r = travelTo(p, o.region, mode);
      if (!r.ok) flashMsg(r.msg); else closeDialog();
    } };
  });
  btns.push({ label: '留在本地', primary: true, onClick: function () { closeDialog(); } });
  openDialog((isPort ? '⚓ 港口 · 坐船出海' : '✈️ 飞机场 · 国际航班'), body, btns);
}

function fisheryBody(p, last) {
  var odds = FISH_TABLE.map(function (f) { return f.emoji + f.name + '(x' + f.mul + ')'; }).join('、');
  return '<div class="tip">🎣 投入鱼饵料，钓到的鱼能卖不同价钱——本质上是台碰运气的机器。</div>' +
    '<div class="tip">可能收获：' + esc(odds) + '。长期期望约等于不赚不亏。</div>' +
    (last ? '<div class="tip ' + (last.net >= 0 ? '' : 'warn') + '">上次：' + last.fish.emoji + ' ' +
      esc(last.fish.name) + '，卖 ' + last.value + ' 元，净 ' + (last.net >= 0 ? '+' : '') + last.net + ' 元</div>' : '') +
    '<div class="drow">当前现金 <b>' + fmtMoney(p.cash) + '</b> 元</div>';
}
function fisheryButtons(p, last) {
  var btns = BAIT_LEVELS.map(function (b) {
    return { label: '投 ' + b + ' 元饵料', onClick: function () {
      var r = goFishing(p, b);
      if (!r.ok) { flashMsg(r.msg); return; }
      replaceDialog('🎣 渔港 · 碰碰运气', fisheryBody(p, r), fisheryButtons(p, r));
    } };
  });
  btns.push({ label: '收竿离开', primary: true, onClick: function () { closeDialog(); } });
  return btns;
}
function showFisheryDialog(p) {
  openDialog('🎣 渔港 · 碰碰运气', fisheryBody(p, null), fisheryButtons(p, null));
}

function corpBody(p, tile, last) {
  var def = COMPANY_MAP[tile.cid], c = G.companies[tile.cid], st = G.stockMap[tile.cid];
  var held = p.stocks[tile.cid] || 0;
  return '<div class="tip">' + def.emoji + ' <b>' + esc(def.name) + '</b>（' + marketLabel(def.market) +
    '）· Lv.' + c.level + '/5 · 主营：' + esc(def.desc) + '</div>' +
    '<div class="dt-row"><span>股价</span><b>' + fmtMoney(st.price) + ' 元</b></div>' +
    '<div class="dt-row"><span>我的持股</span><b>' + held + ' 股</b></div>' +
    '<div class="dt-row"><span>本月营收</span><b>' + fmtMoney(c.monthlyIncome) + ' 元</b></div>' +
    '<div class="dt-row"><span>待分红池</span><b>' + fmtMoney(st.dividendPool) + ' 元</b></div>' +
    '<div class="tip">投入 <b>' + fmtMoney(Math.round(500 * priceMul())) + '</b> 元参与「' + esc(def.desc) +
    '」，结果随机（华尔街波动更大）。投资款会计入该公司营收，间接利好股东。</div>' +
    (last ? '<div class="tip ' + (last.net >= 0 ? '' : 'warn') + '">上次投资：' + esc(last.result.name) +
      '，收回 ' + last.value + ' 元，净 ' + (last.net >= 0 ? '+' : '') + last.net + ' 元</div>' : '') +
    '<div class="drow">当前现金 <b>' + fmtMoney(p.cash) + '</b> 元</div>';
}
function corpButtons(p, tile, last) {
  return [
    { label: '投资试试', primary: true, onClick: function () {
      var r = corpInvest(p, tile.cid);
      if (!r.ok) { flashMsg(r.msg); return; }
      replaceDialog('🏢 ' + COMPANY_MAP[tile.cid].name, corpBody(p, tile, r), corpButtons(p, tile, r));
    } },
    { label: '离开', onClick: function () { closeDialog(); } }
  ];
}
function showCorpDialog(p, tile, mode) {
  openDialog('🏢 ' + COMPANY_MAP[tile.cid].name, corpBody(p, tile, null), corpButtons(p, tile, null));
}

/* ===== v7：中央信息气泡（AI 操作/角色台词，短暂浮现） =====
 * 队列式逐条播放，每条约 1.7 秒（受倍速影响），最多积压 4 条。
 * 测试模式（ANIM.speed >= 100）不渲染，避免长跑测试产生大量定时器。 */
var toastQueue = [];
var toastBusy = false;

function showToast(msg) {
  if (typeof ANIM !== 'undefined' && ANIM.speed >= 100) return;
  var layer = document.getElementById('toast-layer');
  if (!layer) return;
  toastQueue.push(msg);
  while (toastQueue.length > 4) toastQueue.shift();
  pumpToast();
}

function pumpToast() {
  if (toastBusy || toastQueue.length === 0) return;
  var layer = document.getElementById('toast-layer');
  if (!layer) return;
  toastBusy = true;
  var m = toastQueue.shift();
  layer.innerHTML = '<div class="toast-card tone-' + esc(m.tone) + '" style="border-color:' + m.color + '">' +
    '<div class="toast-avatar" style="background:' + m.color + '">' + m.emoji + '</div>' +
    '<div class="toast-main">' +
      '<div class="toast-head"><b>' + esc(m.name) + '</b><span>' + esc(m.action) + '</span></div>' +
      '<div class="toast-line">「' + esc(m.line) + '」</div>' +
    '</div></div>';
  setTimeout(function () {
    layer.innerHTML = '';
    toastBusy = false;
    pumpToast();
  }, Math.max(260, Math.round(1300 / Math.max(1, ANIM.speed))));
}
