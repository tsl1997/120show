/* ============================================================
 * 界面层 —— 渲染与交互（纯静态，无依赖）
 * ============================================================ */

var UIQ = {};   // 数量选择器状态 key -> qty
var QMAX = {};  // 每轮渲染计算的上限 key -> max

/* ---------- 格式化 ---------- */
function fmt(n){
  var v = Math.abs(n - Math.round(n)) < 0.05 ? Math.round(n) : n;
  return '¥' + Number(v).toLocaleString('zh-CN', { maximumFractionDigits: 1 });
}
function qget(key){
  var m = QMAX[key] || 1;
  var n = UIQ[key] || 1;
  return Math.max(1, Math.min(n, m));
}
function esc(s){ return String(s).replace(/[<>&]/g, function(c){ return { '<':'&lt;', '>':'&gt;', '&':'&amp;' }[c]; }); }

/* ---------- 启动 ---------- */
function boot(){
  var saved = load();
  if (saved && !saved.over){
    S = saved;
    showStartModal();
  } else {
    clearSave();
    startNew();
  }
}
function startNew(){
  clearSave();
  newGame();
  UIQ = {}; QMAX = {};
  save();
  renderAll();
}
function showStartModal(){
  showModal(
    '<div class="m-title">贸易倒爷1980</div>' +
    '<div class="m-text">检测到上局存档（' + dateStr(S.month) + '，现代 ' + fmt(S.modernMoney) + ' / 1980 ' + fmt(S.money80) + '）。</div>' +
    '<div class="m-btns">' +
    '<button class="btn primary" data-act="continue">继续上局</button>' +
    '<button class="btn danger" data-act="restart">新开一局</button>' +
    '</div>'
  );
}

/* ---------- 主渲染 ---------- */
function renderAll(){
  if (!S) return;
  QMAX = {};
  renderTop();
  renderTabs();
  renderMain();
  renderSidebar();
  renderLog();
  flushModals();
}

function renderTop(){
  var eraName = S.era === 'modern' ? '现代 · 城郊仓库' : '1980 · 县城';
  var apDots = '';
  for (var i=0;i<3;i++) apDots += '<span class="apdot' + (i < S.ap ? ' on' : '') + '"></span>';
  var endBtn = (policy().end && !S.over) ? '<button class="btn" data-act="endgame">收官结算</button>' : '';
  var travelBtn = S.travelCd
    ? '<button class="btn" disabled>穿越冷却中</button>'
    : '<button class="btn primary" data-act="travel">' + (S.era === 'modern' ? '穿越回1980' : '穿越回现代') + '</button>';
  document.getElementById('topbar').innerHTML =
    '<div class="brand">贸易倒爷1980</div>' +
    '<div class="stat"><label>时间</label><b>' + dateStr(S.month) + '</b></div>' +
    '<div class="stat"><label>所在地</label><b class="' + (S.era === 'modern' ? 'c-modern' : 'c-80') + '">' + eraName + '</b></div>' +
    '<div class="stat"><label>现代资金</label><b>' + fmt(S.modernMoney) + '</b></div>' +
    '<div class="stat"><label>1980资金</label><b>' + fmt(S.money80) + '</b></div>' +
    '<div class="stat"><label>行动点</label><b class="ap">' + apDots + '</b></div>' +
    '<div class="top-btns">' + travelBtn +
    '<button class="btn" data-act="next"' + (S.over ? ' disabled' : '') + '>度过本月</button>' +
    endBtn +
    '<button class="btn danger" data-act="restart">重开</button></div>';
}

function renderTabs(){
  var el = document.getElementById('tabs');
  var mCls = S.era === 'modern' ? 'tab on' : 'tab';
  var cCls = S.era === '1980' ? 'tab on' : 'tab';
  var mHint = S.era === 'modern' ? '' : '<span class="tab-hint">（需穿越）</span>';
  var cHint = S.era === '1980' ? '' : '<span class="tab-hint">（需穿越）</span>';
  var wCls = (S.era === '1980') ? 'tab' : 'tab';
  el.innerHTML =
    '<span class="' + mCls + '" data-act="tab-modern">现代市场' + mHint + '</span>' +
    '<span class="' + cCls + '" data-act="tab-80">1980集市' + cHint + '</span>' +
    '<span class="' + wCls + '" data-act="tab-workshop">毛衣作坊' + (S.era === '1980' ? '' : '<span class="tab-hint">（需穿越）</span>') + '</span>';
}

var curTab = 'market';
function renderMain(){
  var el = document.getElementById('main');
  var html = '';
  if (S.era === 'modern') html = renderModernMarket();
  else if (curTab === 'workshop') html = renderWorkshop();
  else html = render80Market();
  el.innerHTML = html;
}

/* ---------- 现代市场 ---------- */
function renderModernMarket(){
  var h = '<section class="panel"><h2>货源采购 <small>现代批发价 → 1980黑市价</small></h2><div class="grid">';
  for (var i=0;i<GOODS_MODERN.length;i++){
    var g = GOODS_MODERN[i];
    var key = 'b:' + g.id;
    var maxQ = Math.max(1, Math.floor(S.modernMoney / g.buy));
    QMAX[key] = maxQ;
    var pol = policy();
    var banned = pol.ban.indexOf(g.id) >= 0;
    h += '<div class="card">' +
      '<div class="card-head"><b>' + g.name + '</b><span class="price">' + fmt(g.buy) + '</span></div>' +
      '<div class="card-meta">体积 ' + g.vol + ' · 1980现价 <b class="c-80">' + fmt(p80(g.id)) + '</b>' + (banned ? ' <span class="bad">禁售中</span>' : '') + '</div>' +
      '<div class="card-desc">' + g.desc + '</div>' +
      '<div class="card-act">' + qtyRow(key) + '<button class="btn" data-act="buyModern" data-id="' + g.id + '">采购</button></div>' +
      '</div>';
  }
  h += '</div></section>';

  /* 仓库 */
  if (S.warehouse.length){
    h += '<section class="panel"><h2>仓库 <small>装进背包才能穿越带走</small></h2><div class="rows">';
    for (var w=0;w<S.warehouse.length;w++){
      var it = S.warehouse[w];
      var g2 = G_MOD[it.id];
      var k2 = 'p:' + it.id;
      var room = Math.floor((S.cap - backpackVol()) / g2.vol);
      QMAX[k2] = Math.max(1, Math.min(it.qty, room));
      h += '<div class="row"><span class="r-name">' + g2.name + ' ×' + it.qty + '</span><span class="r-meta">每件 ' + g2.vol + ' 格</span>' +
        '<span class="r-act">' + qtyRow(k2) + '<button class="btn small" data-act="pack" data-id="' + it.id + '">装包</button>' +
        '<button class="btn small ghost" data-act="clear" data-id="' + it.id + '">清仓</button></span></div>';
    }
    h += '</div></section>';
  }

  /* 现代变现 */
  var olds = [];
  for (var b=0;b<S.backpack.length;b++) if (S.backpack[b].kind === 'old') olds.push(S.backpack[b]);
  if (olds.length){
    h += '<section class="panel"><h2>老物件变现 <small>每件耗时1个月，同类第二件起折价</small></h2><div class="rows">';
    for (var o=0;o<olds.length;o++){
      var it2 = olds[o];
      var g3 = OLD[it2.id];
      var k3 = 'c:' + it2.id;
      QMAX[k3] = Math.max(1, it2.qty);
      h += '<div class="row"><span class="r-name">' + g3.name + ' ×' + it2.qty + '</span><span class="r-meta">市价 ' + fmt(g3.mod) + '</span>' +
        '<span class="r-act">' + qtyRow(k3) + '<button class="btn small" data-act="cashIn" data-id="' + it2.id + '">挂变现</button></span></div>';
    }
    h += '</div></section>';
  }
  return h;
}

/* ---------- 1980 集市 ---------- */
function render80Market(){
  var pol = policy();
  var h = '<section class="panel"><h2>老物件 <small>带回现代变现的硬货</small></h2><div class="grid">';
  for (var i=0;i<GOODS_OLD.length;i++){
    var g = GOODS_OLD[i];
    h += '<div class="card old"><div class="card-head"><b>' + g.name + '</b><span class="price c-80">现代值 ' + fmt(g.mod) + '</span></div>';
    h += '<div class="card-meta">体积 ' + g.vol + '</div><div class="card-desc">' + g.desc + '</div>';
    for (var s=0;s<g.sources.length;s++){
      var src = g.sources[s];
      var avail = srcAvailable(src);
      var left = srcLimitLeft(src);
      var key = 'o:' + g.id + ':' + src.key;
      QMAX[key] = avail ? Math.max(1, left) : 1;
      var tip = src.desc || '';
      if (src.limit) tip += ' · 本月余 ' + left;
      if (!avail) tip = '未到发售时间';
      h += '<div class="src' + (avail ? '' : ' off') + '"><span>' + src.name + ' <b>' + fmt(src.price) + '</b><small>' + tip + '</small></span>' +
        '<span class="src-act">' + (avail ? qtyRow(key) + '<button class="btn small" data-act="buyOld" data-id="' + g.id + '" data-src="' + src.key + '">买</button>' : '<span class="muted">暂不可购</span>') + '</span></div>';
    }
    h += '</div>';
  }
  h += '</div></section>';

  /* 毛线 */
  var wkey = 'wl';
  QMAX[wkey] = Math.max(1, Math.floor(S.money80 / woolPrice()));
  h += '<section class="panel"><h2>原料</h2><div class="row"><span class="r-name">毛线 ×' + S.wool + ' 单位</span>' +
    '<span class="r-meta">' + fmt(woolPrice()) + '/单位 · 每件毛衣耗2单位</span>' +
    '<span class="r-act">' + qtyRow(wkey) + '<button class="btn small" data-act="buyWool">买毛线</button></span></div></section>';

  /* 摆摊出货（背包现代货） */
  var mods = [];
  for (var b=0;b<S.backpack.length;b++) if (S.backpack[b].kind === 'modern') mods.push(S.backpack[b]);
  if (mods.length){
    h += '<section class="panel"><h2>摆摊出货 <small>露天集市，风险全额，消耗1行动点</small></h2><div class="rows">';
    for (var m=0;m<mods.length;m++){
      var it = mods[m];
      var g2 = G_MOD[it.id];
      var k2 = 's:' + it.id;
      QMAX[k2] = Math.max(1, it.qty);
      h += '<div class="row"><span class="r-name">' + g2.name + ' ×' + it.qty + '</span>' +
        '<span class="r-meta">现价 <b class="c-80">' + fmt(p80(it.id) * repFactor()) + '</b>' + (pol.ban.indexOf(it.id)>=0 ? ' <span class="bad">禁售</span>' : '') + '</span>' +
        '<span class="r-act">' + qtyRow(k2) + '<button class="btn small" data-act="sellStall" data-id="' + it.id + '">摆摊</button>' +
        '<button class="btn small ghost" data-act="moveShop" data-id="' + it.id + '">搬进店铺</button></span></div>';
    }
    h += '</div></section>';
  }

  /* 门面出货 */
  if (S.workshop >= 1 && S.shopStock.length){
    h += '<section class="panel"><h2>门面出货 <small>有店面，风险减半，售价+5%</small></h2><div class="rows">';
    var seen = {};
    for (var sh=0;sh<S.shopStock.length;sh++){
      var a = S.shopStock[sh];
      if (seen[a.id]) continue;
      seen[a.id] = 1;
      var k4 = 'h:' + a.id;
      QMAX[k4] = Math.max(1, a.qty);
      h += '<div class="row"><span class="r-name">' + g(a.id) + ' ×' + a.qty + '</span>' +
        '<span class="r-meta">现价 <b class="c-80">' + fmt(p80(a.id) * repFactor() * 1.05) + '</b></span>' +
        '<span class="r-act">' + qtyRow(k4) + '<button class="btn small" data-act="sellShop" data-id="' + a.id + '">出货</button></span></div>';
    }
    h += '</div></section>';
  }

  /* 作坊出货 */
  var wn = 0;
  for (var wk=0;wk<S.shopStock.length;wk++) if (S.shopStock[wk].src === 'workshop') wn += S.shopStock[wk].qty;
  if (S.workshop >= 2 && wn > 0){
    h += '<section class="panel"><h2>作坊出货</h2><div class="row"><span class="r-name">自产毛衣 ×' + wn + '</span>' +
      '<span class="r-meta">现价 <b class="c-80">' + fmt(p80('sweater') * repFactor() * 1.05) + '</b></span>' +
      '<span class="r-act"><button class="btn small" data-act="sellWorkshop">全部出货</button></span></div></section>';
  }

  /* 上供 */
  h += '<section class="panel"><h2>市管会</h2><div class="row"><span class="r-name">上供疏通</span>' +
    '<span class="r-meta">¥10/次 · 本月隐蔽+6、关系+5' + (S.bribe ? '（本月已上供）' : '') + '</span>' +
    '<span class="r-act"><button class="btn small" data-act="bribe">上供 ¥10</button></span></div></section>';
  return h;
}

/* ---------- 毛衣作坊 ---------- */
function renderWorkshop(){
  var h = '';
  var levels = ['（还没有产业）','临街门面','毛衣作坊','针织厂'];
  h += '<section class="panel"><h2>毛衣作坊 <small>产业线</small></h2>';
  h += '<div class="ws-level">当前等级：<b class="c-80">' + levels[S.workshop] + '</b></div>';
  h += '<div class="rows">';
  h += '<div class="row"><span class="r-name">工人 ' + S.workers + ' / ' + maxWorkers() + '</span><span class="r-meta">月薪 ¥15/人 · 1人≈10件/月' + (S.workshop>=3?'（工厂×10）':'') + '</span>' +
    '<span class="r-act"><button class="btn small" data-act="hire" data-n="1">雇1人</button>' +
    '<button class="btn small" data-act="hire" data-n="3">雇3人</button>' +
    '<button class="btn small ghost" data-act="fire" data-n="1">解雇1人</button></span></div>';
  h += '<div class="row"><span class="r-name">毛线库存 ' + S.wool + ' 单位</span><span class="r-meta">预计月产 ' + (S.workshop>=2 ? S.workers*10*(S.workshop>=3?10:1) : 0) + ' 件 · 需毛线 ' + (S.workshop>=2 ? S.workers*10*(S.workshop>=3?10:1)*2 : 0) + ' 单位</span>' +
    '<span class="r-meta"></span><span class="r-act"><button class="btn small" data-act="buyWool50">买毛线×50</button></span></div>';
  h += '</div>';

  /* 升级 */
  h += '<div class="upgrades">';
  h += '<button class="btn' + (S.workshop === 0 ? ' primary' : '') + '" data-act="upgrade" data-to="store"' + (S.workshop !== 0 ? ' disabled' : '') + '>租门面 ¥300<br><small>销量×3、风险减半、解锁店铺库存</small></button>';
  h += '<button class="btn' + (S.workshop === 1 ? ' primary' : '') + '" data-act="upgrade" data-to="workshop"' + (S.workshop !== 1 ? ' disabled' : '') + '>开办作坊 ¥800<br><small>买毛线雇女工，自产毛衣</small></button>';
  var pol = policy();
  var facOk = S.workshop === 2 && pol.legit && S.rep >= 60;
  h += '<button class="btn' + (S.workshop === 2 ? ' primary' : '') + '" data-act="upgrade" data-to="factory"' + (S.workshop !== 2 ? ' disabled' : '') + '>开办工厂 ¥3000<br><small>产量×10 · 需个体户合法化+信誉60' + (S.workshop===2 ? (!pol.legit ? '（未合法化）' : (S.rep<60 ? '（信誉不足）' : '')) : '') + '</small></button>';
  h += '</div>';

  if (S.workshop >= 3 && pol.export){
    h += '<div class="note good">出口订单已解锁：工厂产出每月自动成交，价格上浮40%。</div>';
  }
  h += '</section>';
  return h;
}

/* ---------- 侧栏 ---------- */
function renderSidebar(){
  var el = document.getElementById('sidebar');
  var h = '';

  /* 背包 */
  h += '<div class="side-box"><h3>背包 <small>' + backpackVol() + ' / ' + S.cap + ' 格</small></h3>';
  var volbar = Math.min(100, backpackVol() / S.cap * 100);
  h += '<div class="volbar"><i style="width:' + volbar + '%"></i></div>';
  if (!S.backpack.length) h += '<div class="muted">空的</div>';
  for (var i=0;i<S.backpack.length;i++){
    var b = S.backpack[i];
    var nm = b.kind === 'old' ? OLD[b.id].name : G_MOD[b.id].name;
    var vol = volOf(b.id, b.kind) * b.qty;
    var act = '';
    if (b.kind === 'modern'){
      var k1 = 'u:' + b.id, k2 = 'm:' + b.id;
      QMAX[k1] = Math.max(1, b.qty); QMAX[k2] = Math.max(1, b.qty);
      act = qtyRow(k1) + '<button class="btn tiny" data-act="unpack" data-id="' + b.id + '">卸仓库</button>' +
            '<button class="btn tiny" data-act="moveShop" data-id="' + b.id + '">搬店铺</button>';
    } else {
      act = '<span class="muted">带回现代变现</span>';
    }
    h += '<div class="row"><span class="r-name">' + nm + ' ×' + b.qty + '</span><span class="r-meta">' + vol + '格</span><span class="r-act">' + act + '</span></div>';
  }
  h += '</div>';

  /* 仓库 */
  h += '<div class="side-box"><h3>仓库 <small>现代</small></h3>';
  if (!S.warehouse.length) h += '<div class="muted">空的</div>';
  for (var w=0;w<S.warehouse.length;w++){
    var it = S.warehouse[w];
    h += '<div class="row"><span class="r-name">' + g(it.id) + ' ×' + it.qty + '</span></div>';
  }
  h += '</div>';

  /* 店铺库存 */
  h += '<div class="side-box"><h3>店铺库存 <small>1980</small></h3>';
  if (!S.shopStock.length) h += '<div class="muted">空的</div>';
  for (var s=0;s<S.shopStock.length;s++){
    var a = S.shopStock[s];
    h += '<div class="row"><span class="r-name">' + g(a.id) + ' ×' + a.qty + '</span><span class="r-meta">' + (a.src === 'workshop' ? '自产' : '倒卖') + '</span></div>';
  }
  h += '</div>';

  /* 状态 */
  var pol = policy();
  var st = [];
  st.push(['信誉', S.rep]);
  st.push(['市管会关系', S.guanxi]);
  st.push(['判刑月数', S.prisonMonths]);
  st.push(['被盯上', S.watched ? '是' : '否']);
  st.push(['本月隐蔽', S.bribe ? '已上供' : '无']);
  if (pol.riskMult > 1) st.push(['稽查压力', '×' + pol.riskMult.toFixed(1)]);
  if (pol.priceMult !== 1) st.push(['黑市价', '×' + pol.priceMult.toFixed(2)]);
  h += '<div class="side-box"><h3>状态</h3><div class="stats">';
  for (var t=0;t<st.length;t++) h += '<div class="stat-line"><label>' + st[t][0] + '</label><b>' + st[t][1] + '</b></div>';
  h += '</div></div>';

  /* 成就 */
  h += '<div class="side-box"><h3>成就 <small>' + S.achievements.length + '/' + ACHIEVEMENTS.length + '</small></h3>';
  for (var a2=0;a2<ACHIEVEMENTS.length;a2++){
    var got = S.achievements.indexOf(ACHIEVEMENTS[a2].id) >= 0;
    h += '<div class="ach' + (got ? ' on' : '') + '">' + (got ? '✓' : '○') + ' ' + ACHIEVEMENTS[a2].name + '</div>';
  }
  h += '</div>';

  el.innerHTML = h;
}

/* ---------- 日志 ---------- */
function renderLog(){
  var el = document.getElementById('log');
  var lines = S.log.slice(-30).reverse();
  var h = '';
  for (var i=0;i<lines.length;i++) h += '<div class="log-line">' + esc(lines[i]) + '</div>';
  el.innerHTML = h;
}

/* ---------- 数量选择器 ---------- */
function qtyRow(key){
  var n = qget(key);
  return '<span class="qty"><button class="qbtn" data-act="qm" data-key="' + key + '">−</button>' +
    '<b>' + n + '</b>' +
    '<button class="qbtn" data-act="qp" data-key="' + key + '">＋</button>' +
    '<button class="qbtn wide" data-act="qa" data-key="' + key + '">满</button></span>';
}

/* ---------- 弹窗 ---------- */
function showModal(html){
  document.getElementById('modal-root').innerHTML = '<div class="mask"><div class="modal">' + html + '</div></div>';
}
function closeModal(){ document.getElementById('modal-root').innerHTML = ''; }

function flushModals(){
  if (!S) return;
  if (document.getElementById('modal-root').innerHTML) return; /* 弹窗排队显示 */
  if (S.over){
    var e = S.ending;
    showModal(
      '<div class="m-title">' + e.title + '</div>' +
      '<div class="m-text">' + e.text + '</div>' +
      '<div class="m-stats">' +
      '<div><label>游戏时长</label><b>' + dateStr(S.month) + ' 收官</b></div>' +
      '<div><label>现代资产</label><b>' + fmt(S.modernMoney) + '</b></div>' +
      '<div><label>1980资产</label><b>' + fmt(S.money80) + '</b></div>' +
      '<div><label>猴票总数</label><b>' + S.monkeyTotal + ' 枚</b></div>' +
      '<div><label>交易次数</label><b>' + S.stats.trades + '</b></div>' +
      '<div><label>最大单笔</label><b>' + fmt(S.stats.bestDeal) + '</b></div>' +
      '<div><label>判刑月数</label><b>' + S.prisonMonths + '</b></div>' +
      '</div>' +
      '<div class="m-btns"><button class="btn primary" data-act="restart">再来一局</button></div>'
    );
    return;
  }
  if (S.notice && S.notice.type === 'prison'){
    var n = S.notice.n;
    S.notice = null;
    showModal(
      '<div class="m-title bad">判刑 ' + n + ' 个月</div>' +
      '<div class="m-text">严打期间案值过大，以投机倒把罪论处。狱中的日子一天一天熬，生意停了，人也转了运。</div>' +
      '<div class="m-btns"><button class="btn primary" data-act="modal-close">服刑</button></div>'
    );
    return;
  }
  if (S.pendingEvents.length){
    var ev = S.pendingEvents.shift();
    showModal(
      '<div class="m-title">' + ev.title + '</div>' +
      '<div class="m-sub">' + dateStr(S.month) + '</div>' +
      '<div class="m-text">' + ev.text + '</div>' +
      '<div class="m-hint">' + ev.hint + '</div>' +
      '<div class="m-btns"><button class="btn primary" data-act="modal-close">知道了</button></div>'
    );
    return;
  }
}

/* ---------- 事件处理 ---------- */
function doAct(act, el){
  if (S.over && act !== 'restart' && act !== 'modal-close') return;
  var id = el.getAttribute('data-id');
  var src = el.getAttribute('data-src');
  var n = parseInt(el.getAttribute('data-n') || '0', 10);
  var key = el.getAttribute('data-key');
  var res = null;

  switch (act){
    case 'tab-modern':
      curTab = 'market';
      if (S.era !== 'modern'){ showModal('<div class="m-title">穿越提示</div><div class="m-text">你人在1980，先穿越回现代。</div><div class="m-btns"><button class="btn primary" data-act="modal-close">好</button></div>'); }
      else renderAll();
      return;
    case 'tab-80':
      curTab = 'market';
      if (S.era !== '1980'){ showModal('<div class="m-title">穿越提示</div><div class="m-text">你人在现代，先穿越回1980。</div><div class="m-btns"><button class="btn primary" data-act="modal-close">好</button></div>'); }
      else renderAll();
      return;
    case 'tab-workshop':
      if (S.era !== '1980'){ showModal('<div class="m-title">穿越提示</div><div class="m-text">作坊在1980，先穿越过去。</div><div class="m-btns"><button class="btn primary" data-act="modal-close">好</button></div>'); return; }
      curTab = 'workshop';
      renderAll();
      return;
    case 'qm': UIQ[key] = qget(key) - 1; renderAll(); return;
    case 'qp': UIQ[key] = qget(key) + 1; renderAll(); return;
    case 'qa': UIQ[key] = QMAX[key] || 1; renderAll(); return;
    case 'modal-close': closeModal(); flushModals(); return;
    case 'restart': startNew(); return;
    case 'continue': closeModal(); renderAll(); return;
    case 'next':
      advanceMonth();
      save();
      renderAll();
      return;
    case 'endgame':
      gameOver('time');
      save();
      renderAll();
      return;
    case 'buyModern': res = buyModern(id, qget('b:' + id)); break;
    case 'pack':       res = pack(id, qget('p:' + id)); break;
    case 'unpack':     res = unpack(id, qget('u:' + id)); break;
    case 'moveShop':   res = moveToShop(id, qget('m:' + id)); break;
    case 'clear':      res = clearStock(id, qget('p:' + id)); break;
    case 'buyOld':     res = buyOld(id, src, qget('o:' + id + ':' + src)); break;
    case 'buyWool':    res = buyWool(qget('wl')); break;
    case 'buyWool50':  res = buyWool(50); break;
    case 'sellStall':  res = sellStall(id, qget('s:' + id)); break;
    case 'sellShop':   res = sellShop(id, qget('h:' + id)); break;
    case 'sellWorkshop': res = sellWorkshop(); break;
    case 'bribe':      res = bribe(); break;
    case 'hire':       res = hire(n); break;
    case 'fire':       res = fire(n); break;
    case 'upgrade':    res = upgrade(el.getAttribute('data-to')); break;
    case 'cashIn':     res = cashIn(id, qget('c:' + id)); break;
    case 'travel':     res = travel(); break;
  }
  if (res && res.msg) log(res.msg);
  if (res && res.ok) save();
  renderAll();
}

document.addEventListener('click', function(ev){
  var el = ev.target.closest ? ev.target.closest('[data-act]') : null;
  if (!el || el.disabled) return;
  doAct(el.getAttribute('data-act'), el);
});

/* 启动 */
boot();
