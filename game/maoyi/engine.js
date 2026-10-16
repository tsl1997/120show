/* ============================================================
 * 引擎层 —— 状态 / 价格 / 风险 / 时间线 / 交易规则
 * 纯逻辑，不碰 DOM
 * ============================================================ */

var S = null;              // 游戏状态
var SAVE_KEY = 'mydao.save.v1';

var G_MOD = {};            // 现代货源 by id
var OLD = {};              // 1980 老物件 by id
var EV_BY_ID = {};         // 事件 by id
var BACKPACK_CAP = 10;     // 初始背包容量（格）

(function initMaps(){
  for (var i = 0; i < GOODS_MODERN.length; i++) G_MOD[GOODS_MODERN[i].id] = GOODS_MODERN[i];
  for (var j = 0; j < GOODS_OLD.length; j++)   OLD[GOODS_OLD[j].id]   = GOODS_OLD[j];
  for (var k = 0; k < EVENTS.length; k++)      EV_BY_ID[EVENTS[k].id] = EVENTS[k];
})();

/* ---------- 时间工具 ---------- */
function mi(m){ return m.year * 12 + m.month; }
function ym(s){ var p = s.split('-'); return { year: parseInt(p[0],10), month: parseInt(p[1],10) }; }
function dateStr(m){ return m.year + '年' + m.month + '月'; }
function everHappened(id){ return mi(S.month) >= mi(ym(EV_BY_ID[id].date)); }

function activeEvents(){
  var cur = mi(S.month), out = [];
  for (var i = 0; i < EVENTS.length; i++){
    var e = EVENTS[i];
    var start = mi(ym(e.date));
    var dur = e.dur || 9999;
    if (cur >= start && cur < start + dur) out.push(e);
  }
  return out;
}

/* ---------- 新开局 ---------- */
function newGame(){
  S = {
    era: 'modern',                 // 当前所在地 modern / 1980
    month: { year: 1980, month: 1 },
    ap: 3,
    travelCd: false,               // 本月已穿越，下月才能再穿
    bribe: false,                  // 本月是否上供
    modernMoney: 8000,
    money80: 200,
    cap: BACKPACK_CAP,
    backpack: [],                  // {id,qty,kind} kind: modern|old
    warehouse: [{ id:'sweater', qty:100 }],
    shopStock: [],                 // {id,qty,src} src: modern|workshop
    wool: 0,
    workers: 0,
    workshop: 0,                   // 0无 1门面 2作坊 3工厂
    rep: 50,
    guanxi: 0,
    prisonMonths: 0,
    catches: 0,
    watched: false,
    trends: {},                    // 潮流指数 -3..3
    sellQueue: [],                 // 现代变现排期 {id,remaining,mult}
    boughtThisMonth: {},           // 限购计数 srcKey->qty
    monkeyTotal: 0,
    legitBonus: false,
    crashSale: false,
    exported: false,
    survivedStrike: false,
    achievements: [],
    log: [],
    over: false,
    ending: null,
    notice: null,                  // 待弹窗 {type:'prison',n}
    pendingEvents: [],
    stats: { trades: 0, bestDeal: 0, totalModern: 0, total80: 0 }
  };
  log('你在城郊仓库里发现一扇老式防盗门——门后是1980年的县城。');
  log('手里压着100件尾单腈纶毛衣和8000块钱。倒爷生涯，从今晚开始。');
  return S;
}

function log(msg){
  S.log.push(msg);
  if (S.log.length > 300) S.log.shift();
}

/* ---------- 物品工具 ---------- */
function findItem(arr, id){ for (var i=0;i<arr.length;i++) if (arr[i].id === id) return arr[i]; return null; }
function addItem(arr, id, qty){
  var a = findItem(arr, id);
  if (a) a.qty += qty; else arr.push({ id:id, qty:qty });
}
function removeItem(arr, id, qty){
  var a = findItem(arr, id);
  if (!a) return;
  a.qty -= qty;
  if (a.qty <= 0) arr.splice(arr.indexOf(a), 1);
}
function findBackpack(id, kind){
  for (var i=0;i<S.backpack.length;i++)
    if (S.backpack[i].id === id && S.backpack[i].kind === kind) return S.backpack[i];
  return null;
}
function addBackpack(id, qty, kind){
  var a = findBackpack(id, kind);
  if (a) a.qty += qty; else S.backpack.push({ id:id, qty:qty, kind:kind });
}
function removeBackpack(id, qty, kind){
  var a = findBackpack(id, kind);
  if (!a) return;
  a.qty -= qty;
  if (a.qty <= 0) S.backpack.splice(S.backpack.indexOf(a), 1);
}
function volOf(id, kind){ var g = kind === 'old' ? OLD[id] : G_MOD[id]; return g.vol; }
function nameOf(id, kind){ var g = kind === 'old' ? OLD[id] : G_MOD[id]; return g.name; }
function backpackVol(){
  var v = 0;
  for (var i=0;i<S.backpack.length;i++) v += volOf(S.backpack[i].id, S.backpack[i].kind) * S.backpack[i].qty;
  return Math.round(v * 10) / 10;
}
function addShop(id, qty, src){
  for (var i=0;i<S.shopStock.length;i++)
    if (S.shopStock[i].id === id && S.shopStock[i].src === src){ S.shopStock[i].qty += qty; return; }
  S.shopStock.push({ id:id, qty:qty, src:src });
}
function removeShop(id, qty, src){
  for (var i=0;i<S.shopStock.length;i++){
    var a = S.shopStock[i];
    if (a.id === id && a.src === src){
      a.qty -= qty;
      if (a.qty <= 0) S.shopStock.splice(i, 1);
      return;
    }
  }
}

/* ---------- 政策与价格 ---------- */
function policy(){
  var p = { riskMult:1, priceMult:1, ban:[], legit:false, export:false, end:false };
  var evs = activeEvents();
  for (var i=0;i<evs.length;i++){
    var e = evs[i];
    if (e.id === 'tighten') p.riskMult *= 1.3;
    else if (e.id === 'strike'){ p.riskMult *= 2; p.ban.push('stocking','jeans'); }
    else if (e.id === 'crash') p.priceMult *= 1.4;
    else if (e.id === 'rect'){ p.priceMult *= 0.85; p.riskMult *= 1.2; }
  }
  p.legit  = everHappened('legit');
  p.export = everHappened('open');
  p.end    = everHappened('safari');
  if (everHappened('dual')) p.priceMult *= 1.1;
  return p;
}
function seasonMult(g, m){ return (m <= 2 || m >= 11) ? g.winter : g.summer; }
function p80(id){
  var g = G_MOD[id];
  var t = S.trends[id] || 0;
  var pol = policy();
  return Math.round(g.base * (1 + t * 0.08) * seasonMult(g, S.month.month) * pol.priceMult * 10) / 10;
}
function woolPrice(){ return 8; }
function repFactor(){ return 1 + (S.rep - 50) / 250; }
function maxWorkers(){ return S.workshop >= 3 ? 30 : 10; }
function shopValue(){
  var v = 0;
  for (var i=0;i<S.shopStock.length;i++) v += S.shopStock[i].qty * 20;
  return v;
}

/* ---------- 月度推进 ---------- */
function advanceMonth(){
  if (S.over) return [];
  S.month.month++;
  if (S.month.month > 12){ S.month.month = 1; S.month.year++; }
  S.ap = 3;
  S.travelCd = false;
  S.bribe = false;
  S.boughtThisMonth = {};

  /* 潮流随机游走 */
  for (var i = 0; i < GOODS_MODERN.length; i++){
    var g = GOODS_MODERN[i];
    var t = (S.trends[g.id] || 0) + Math.round(Math.random() * 2 - 1);
    S.trends[g.id] = Math.max(-3, Math.min(3, t));
  }

  /* 时间线事件触发 */
  var fired = [];
  for (var j = 0; j < EVENTS.length; j++){
    var e = EVENTS[j];
    if (mi(S.month) === mi(ym(e.date))) fired.push(e);
  }
  for (var f = 0; f < fired.length; f++) S.pendingEvents.push(fired[f]);

  /* 严打存活标记 */
  if (!S.survivedStrike && mi(S.month) > mi(ym('1984-02'))) S.survivedStrike = true;

  /* 个体户合法化：信誉奖励（一次性） */
  if (!S.legitBonus && everHappened('legit')){
    S.legitBonus = true;
    S.rep = Math.min(100, S.rep + 10);
    log('赶上个体户合法化的春风，在县里有了口碑，信誉+10。');
  }

  /* 工资与租金 */
  var wage = S.workers * 15;
  var rent = S.workshop >= 1 ? (S.workshop >= 3 ? 250 : 75) : 0;
  if (wage + rent > 0){
    if (S.money80 >= wage + rent){
      S.money80 -= wage + rent;
    } else if (S.money80 >= wage){
      S.money80 -= wage;
      S.workshop = Math.max(1, S.workshop - 1);
      log('交不起租金，生意降级。');
    } else {
      if (S.workers > 0){ log('工资都发不出，' + S.workers + '名工人散去。'); S.workers = 0; }
      S.money80 = 0;
      if (S.workshop >= 1){ S.workshop--; log('资金断裂，店面难以为继。'); }
    }
  }

  /* 作坊生产 */
  if (S.workshop >= 2 && S.workers > 0){
    var cap = S.workers * 10 * (S.workshop >= 3 ? 10 : 1);
    var make = Math.min(cap, Math.floor(S.wool / 2));
    if (make > 0){
      S.wool -= make * 2;
      addShop('sweater', make, 'workshop');
      log('作坊本月产出 ' + make + ' 件毛衣。');
    } else if (S.wool < 2){
      log('原料见底，作坊停工待料。');
    }
  }

  /* 工厂出口订单（1990.12 后自动售出） */
  if (S.workshop >= 3 && everHappened('open')){
    var n = 0;
    for (var w = 0; w < S.shopStock.length; w++)
      if (S.shopStock[w].src === 'workshop'){ n += S.shopStock[w].qty; S.shopStock.splice(w,1); w--; }
    if (n > 0){
      var val = Math.round(n * p80('sweater') * repFactor() * 1.4);
      S.money80 += val;
      S.exported = true;
      if (val > S.stats.bestDeal) S.stats.bestDeal = val;
      log('出口订单成交：' + n + ' 件毛衣，收 ¥' + val + '。');
    }
  }

  /* 现代变现排期：每月自动售出1件，同类逐件折价 */
  if (S.sellQueue.length){
    for (var k = S.sellQueue.length - 1; k >= 0; k--){
      var it = S.sellQueue[k];
      var g = OLD[it.id];
      var mv = Math.round(g.mod * it.mult);
      S.modernMoney += mv;
      S.stats.totalModern += mv;
      if (mv > S.stats.bestDeal) S.stats.bestDeal = mv;
      log('变现：' + g.name + ' ×1，得 ¥' + mv + '。');
      it.remaining--;
      it.mult = Math.max(0.6, it.mult * 0.85);
      if (it.remaining <= 0) S.sellQueue.splice(k, 1);
    }
  }

  /* 背包升级里程碑 */
  if (S.modernMoney >= 10000 && S.cap < 20){ S.cap = 20; log('装备升级：背包容量提升到20格。'); }
  if (S.modernMoney >= 100000 && S.cap < 30){ S.cap = 30; log('买了辆小货车，背包容量提升到30格。'); }

  checkAchievements();
  checkBankrupt();

  /* 时间线到头，自动收官 */
  if (S.month.year >= 1993 && !S.over){ gameOver('time'); return []; }
  return fired;
}

function checkBankrupt(){
  if (S.over) return;
  if (S.modernMoney < 100 && S.money80 < 50 && assetValue() < 200) gameOver('broke');
}
function assetValue(){
  var v = S.modernMoney * 0.3 + S.money80 * 0.3 + shopValue() + S.wool * 4;
  for (var i=0;i<S.backpack.length;i++){
    var b = S.backpack[i];
    if (b.kind === 'old') v += OLD[b.id].mod * b.qty * 0.5;
    else v += G_MOD[b.id].buy * b.qty * 0.3;
  }
  for (var w=0;w<S.warehouse.length;w++) v += G_MOD[S.warehouse[w].id].buy * S.warehouse[w].qty * 0.3;
  return v;
}

function checkAchievements(){
  function unlock(id){
    if (S.achievements.indexOf(id) >= 0) return;
    for (var i=0;i<ACHIEVEMENTS.length;i++){
      if (ACHIEVEMENTS[i].id === id){
        S.achievements.push(id);
        log('【成就】' + ACHIEVEMENTS[i].name + '：' + ACHIEVEMENTS[i].text);
        return;
      }
    }
  }
  if (S.modernMoney >= 10000) unlock('first');
  if (S.money80 >= 10000) unlock('wanyuan');
  if (S.monkeyTotal >= 10) unlock('monkey10');
  if (S.monkeyTotal >= 80) unlock('stamp80');
  if (S.workshop >= 3) unlock('boss');
  if (S.exported) unlock('export');
  if (S.prisonMonths > 0 && S.prisonMonths < 6) unlock('free');
}

/* ---------- 交易动作（返回 {ok, msg}） ---------- */
function spendAP(n){
  var cost = n || 0;
  if (S.over) return { ok:false, msg:'本局已结束。' };
  if (S.ap < cost) return { ok:false, msg:'本月行动点用完了，点“度过本月”进入下个月。' };
  S.ap -= cost;
  return { ok:true };
}

function buyModern(id, qty){
  var r = spendAP(0);
  var g = G_MOD[id];
  if (!g) return r;
  var cost = g.buy * qty;
  if (S.modernMoney < cost) return { ok:false, msg:'现代资金不够，这批货要 ¥' + cost + '。' };
  S.modernMoney -= cost;
  addItem(S.warehouse, id, qty);
  return { ok:true, msg:'采购 ' + g.name + ' ×' + qty + '，花费 ¥' + cost + '。' };
}

function pack(id, qty){
  var g = G_MOD[id];
  var inWh = findItem(S.warehouse, id);
  if (!inWh || inWh.qty < qty) return { ok:false, msg:'仓库里没那么多货。' };
  var vol = g.vol * qty;
  if (backpackVol() + vol > S.cap) return { ok:false, msg:'背包装不下，还差 ' + Math.round((backpackVol()+vol-S.cap)*10)/10 + ' 格。' };
  removeItem(S.warehouse, id, qty);
  addBackpack(id, qty, 'modern');
  return { ok:true, msg:'装入背包：' + g.name + ' ×' + qty + '（占 ' + vol + ' 格）。' };
}

function unpack(id, qty){
  var a = findBackpack(id, 'modern');
  if (!a || a.qty < qty) return { ok:false, msg:'背包里没这么多。' };
  removeBackpack(id, qty, 'modern');
  addItem(S.warehouse, id, qty);
  return { ok:true, msg:'卸回仓库：' + g(id) + ' ×' + qty + '。' };
}
function g(id){ return G_MOD[id].name; }

function moveToShop(id, qty){
  var a = findBackpack(id, 'modern');
  if (!a || a.qty < qty) return { ok:false, msg:'背包里没这么多。' };
  removeBackpack(id, qty, 'modern');
  addShop(id, qty, 'modern');
  return { ok:true, msg:'搬进店铺：' + g(id) + ' ×' + qty + '。' };
}

function clearStock(id, qty){
  /* 清仓：按进价3折处理尾货（现代） */
  var fromBack = findBackpack(id, 'modern');
  var inWh = findItem(S.warehouse, id);
  var total = (fromBack ? fromBack.qty : 0) + (inWh ? inWh.qty : 0);
  if (total < qty) return { ok:false, msg:'没有这么多货可清。' };
  var left = qty, gain = 0;
  if (fromBack){ var t = Math.min(left, fromBack.qty); removeBackpack(id, t, 'modern'); left -= t; gain += t; }
  if (left > 0 && inWh){ removeItem(S.warehouse, id, left); gain += left; }
  var money = Math.round(G_MOD[id].buy * gain * 0.3);
  S.modernMoney += money;
  return { ok:true, msg:'清仓 ' + g(id) + ' ×' + gain + '，回收 ¥' + money + '（三折）。' };
}

function srcAvailable(src){
  if (src.from && mi(S.month) < mi(ym(src.from))) return false;
  if (src.to && mi(S.month) > mi(ym(src.to))) return false;
  return true;
}
function srcLimitLeft(src){
  if (!src.limit) return 999;
  return src.limit - (S.boughtThisMonth[src.key] || 0);
}

function buyOld(id, srcKey, qty){
  var r = spendAP(0);
  if (!r.ok) return r;
  if (S.era !== '1980') return { ok:false, msg:'人在现代，得先穿越回1980。' };
  var g = OLD[id];
  var src = null;
  for (var i=0;i<g.sources.length;i++) if (g.sources[i].key === srcKey) src = g.sources[i];
  if (!src) return { ok:false, msg:'没有这个购买渠道。' };
  if (!srcAvailable(src)) return { ok:false, msg:'现在还没到发售的时候。' };
  var left = srcLimitLeft(src);
  if (left <= 0) return { ok:false, msg:'本月限购已满，下个月再来。' };
  qty = Math.min(qty, left);
  var cost = src.price * qty;
  if (S.money80 < cost) return { ok:false, msg:'1980资金不够，要 ¥' + cost + '。' };
  var vol = g.vol * qty;
  if (backpackVol() + vol > S.cap) return { ok:false, msg:'背包装不下（' + g.name + ' 每件占 ' + g.vol + ' 格）。' };
  S.money80 -= cost;
  addBackpack(id, qty, 'old');
  S.boughtThisMonth[src.key] = (S.boughtThisMonth[src.key] || 0) + qty;
  if (id === 'monkey') S.monkeyTotal += qty;
  return { ok:true, msg:'购入 ' + g.name + ' ×' + qty + '，花费 ¥' + cost + '。' };
}

function buyWool(qty){
  var r = spendAP(0);
  if (!r.ok) return r;
  if (S.era !== '1980') return { ok:false, msg:'人在现代，得先穿越回1980。' };
  var cost = woolPrice() * qty;
  if (S.money80 < cost) return { ok:false, msg:'1980资金不够，要 ¥' + cost + '。' };
  S.money80 -= cost;
  S.wool += qty;
  return { ok:true, msg:'购入毛线 ×' + qty + '，花费 ¥' + cost + '。' };
}

/* ---------- 稽查 ---------- */
function caughtRoll(val, id, qty, locFactor){
  var pol = policy();
  var g = G_MOD[id];
  var score = qty * g.risk * locFactor * pol.riskMult - (S.bribe ? 6 : 0) - S.guanxi / 10 - (S.watched ? 20 : 0);
  score = Math.max(0, score);
  if (Math.random() * 100 < score){ caught(val); return true; }
  return false;
}
function caught(val){
  S.catches++;
  if (S.catches >= 3 && !S.watched){
    S.watched = true;
    log('市管会已经盯上你了——之后每次出货风险大增。');
  }
  var fine = Math.min(S.money80, Math.max(50, Math.round(val * 0.3)));
  S.money80 -= fine;
  log('【查获】市管会突击检查！货物没收，罚款 ¥' + fine + '。');
  var inStrike = false, evs = activeEvents();
  for (var i=0;i<evs.length;i++) if (evs[i].id === 'strike') inStrike = true;
  if (inStrike && val > 300){
    var n = Math.min(6, 1 + Math.floor(val / 800));
    prison(n);
  }
}
function prison(n){
  S.prisonMonths += n;
  S.rep = Math.max(0, S.rep - 30);
  S.guanxi = 0;
  S.notice = { type:'prison', n:n };
  for (var i=0;i<n;i++) advanceMonth();
  if (S.prisonMonths >= 6 && !S.over) gameOver('prison');
}

/* ---------- 1980 侧出货 ---------- */
function sellStall(id, qty){
  var r = spendAP(1);
  if (!r.ok) return r;
  if (S.era !== '1980') return { ok:false, msg:'人在现代，得先穿越回1980。' };
  var a = findBackpack(id, 'modern');
  if (!a || a.qty < qty) return { ok:false, msg:'背包里没这么多货。' };
  var pol = policy();
  if (pol.ban.indexOf(id) >= 0) return { ok:false, msg:'严打期间，' + g(id) + ' 属于违禁品，不许摆摊。' };
  var price = p80(id) * repFactor();
  var val = price * qty;
  if (caughtRoll(val, id, qty, 1.0)) return { ok:true, msg:'出货失败。' };
  S.money80 += val;
  S.stats.trades++;
  S.stats.total80 += val;
  if (val > S.stats.bestDeal) S.stats.bestDeal = val;
  S.rep = Math.min(100, S.rep + 1);   /* 诚信买卖攒口碑 */
  removeBackpack(id, qty, 'modern');
  if (activeEvents().some(function(e){ return e.id==='crash'; }) && val >= 500) S.crashSale = true;
  log('摆摊卖出 ' + g(id) + ' ×' + qty + '，收 ¥' + Math.round(val) + '。');
  return { ok:true, msg:null };
}

function sellShop(id, qty){
  var r = spendAP(1);
  if (!r.ok) return r;
  if (S.workshop < 1) return { ok:false, msg:'还没有店面，先在集市摆摊吧。' };
  var total = 0;
  for (var i=0;i<S.shopStock.length;i++) if (S.shopStock[i].id === id) total += S.shopStock[i].qty;
  if (total < qty) return { ok:false, msg:'店铺库存不足。' };
  var pol = policy();
  if (pol.ban.indexOf(id) >= 0) return { ok:false, msg:'严打期间，' + g(id) + ' 属于违禁品。' };
  var val = p80(id) * repFactor() * 1.05 * qty;
  if (caughtRoll(val, id, qty, 0.5)) return { ok:true, msg:'出货失败。' };
  S.money80 += val;
  S.stats.trades++;
  S.stats.total80 += val;
  if (val > S.stats.bestDeal) S.stats.bestDeal = val;
  S.rep = Math.min(100, S.rep + 1);
  var left = qty;
  for (var w=0;w<S.shopStock.length && left>0;w++){
    var a = S.shopStock[w];
    if (a.id !== id) continue;
    var t = Math.min(left, a.qty);
    removeShop(id, t, a.src);
    left -= t;
    w = -1;
  }
  log('门面出货 ' + g(id) + ' ×' + qty + '，收 ¥' + Math.round(val) + '。');
  return { ok:true, msg:null };
}

function sellWorkshop(){
  var r = spendAP(1);
  if (!r.ok) return r;
  if (S.workshop < 2) return { ok:false, msg:'还没有开办作坊。' };
  var n = 0;
  for (var i=0;i<S.shopStock.length;i++) if (S.shopStock[i].src === 'workshop') n += S.shopStock[i].qty;
  if (n <= 0) return { ok:false, msg:'作坊库里没有自产毛衣。' };
  var val = n * p80('sweater') * repFactor() * 1.05;
  if (caughtRoll(val, 'sweater', n, 0.5)) return { ok:true, msg:'出货失败。' };
  S.money80 += val;
  S.stats.trades++;
  S.stats.total80 += val;
  if (val > S.stats.bestDeal) S.stats.bestDeal = val;
  S.rep = Math.min(100, S.rep + 1);
  for (var w=0;w<S.shopStock.length;w++)
    if (S.shopStock[w].src === 'workshop'){ S.shopStock.splice(w,1); w--; }
  log('作坊出货：自产毛衣 ' + n + ' 件，收 ¥' + Math.round(val) + '。');
  return { ok:true, msg:null };
}

function bribe(){
  var r = spendAP(1);
  if (!r.ok) return r;
  if (S.era !== '1980') return { ok:false, msg:'人在现代，得先穿越回1980。' };
  if (S.money80 < 10) return { ok:false, msg:'身上没带零钱。' };
  S.money80 -= 10;
  S.bribe = true;
  S.guanxi = Math.min(100, S.guanxi + 5);
  return { ok:true, msg:'给市管会上供 ¥10：本月隐蔽提升，关系+5。' };
}

/* ---------- 作坊管理 ---------- */
function hire(n){
  if (S.workshop < 2) return { ok:false, msg:'先开办作坊才能雇工。' };
  if (S.workers + n > maxWorkers()) return { ok:false, msg:'人手上限 ' + maxWorkers() + ' 人。' };
  var cost = n * 15;
  if (S.money80 < cost) return { ok:false, msg:'首月工资要 ¥' + cost + '。' };
  S.money80 -= cost;
  S.workers += n;
  return { ok:true, msg:'雇了 ' + n + ' 名待业女工，预付首月工资 ¥' + cost + '。' };
}
function fire(n){
  if (S.workers < n) return { ok:false, msg:'没有那么多工人。' };
  S.workers -= n;
  return { ok:true, msg:'辞退 ' + n + ' 名工人。' };
}
function upgrade(to){
  var r = spendAP(1);
  if (!r.ok) return r;
  if (S.era !== '1980') return { ok:false, msg:'人在现代，得先穿越回1980。' };
  if (to === 'store' && S.workshop === 0){
    if (S.money80 < 300) return { ok:false, msg:'租门面要 ¥300。' };
    S.money80 -= 300;
    S.workshop = 1;
    log('租下一间临街门面，倒卖升级成开店。月租 ¥75。');
    return { ok:true, msg:'门面到手！批量出货、风险减半。' };
  }
  if (to === 'workshop' && S.workshop === 1){
    if (S.money80 < 800) return { ok:false, msg:'开办作坊要 ¥800。' };
    S.money80 -= 800;
    S.workshop = 2;
    log('后院改成毛衣作坊，买毛线、雇女工、自己出成品。');
    return { ok:true, msg:'作坊开办成功！产业线开启。' };
  }
  if (to === 'factory' && S.workshop === 2){
    var pol = policy();
    if (!pol.legit) return { ok:false, msg:'个体户还没合法化，办厂再等等。' };
    if (S.rep < 60) return { ok:false, msg:'信誉不足60，没人敢跟你合伙。' };
    if (S.money80 < 3000) return { ok:false, msg:'开办工厂要 ¥3000。' };
    S.money80 -= 3000;
    S.workshop = 3;
    log('针织厂挂牌！产量×10，工人上限30人。');
    return { ok:true, msg:'工厂挂牌！产量×10，1990年后还有出口订单。' };
  }
  return { ok:false, msg:'条件不满足。' };
}

/* ---------- 现代变现 ---------- */
function cashIn(id, qty){
  var r = spendAP(1);
  if (!r.ok) return r;
  if (S.era !== 'modern') return { ok:false, msg:'人在1980，得先穿越回现代。' };
  var a = findBackpack(id, 'old');
  if (!a || a.qty < qty) return { ok:false, msg:'背包里没这么多。' };
  removeBackpack(id, qty, 'old');
  S.sellQueue.push({ id:id, remaining:qty, mult:1 });
  var g = OLD[id];
  return { ok:true, msg:'挂上变现：' + g.name + ' ×' + qty + '，每月自动售出1件（同类逐件折价）。' };
}

/* ---------- 穿越 ---------- */
function travel(){
  var r = spendAP(1);
  if (!r.ok) return r;
  if (S.travelCd) return { ok:false, msg:'刚穿完需要缓一个月，下个月再穿。' };
  if (S.era === 'modern'){
    S.era = '1980';
    log('推开防盗门——县城的梧桐树影落在1980年的青石板路上。');
  } else {
    S.era = 'modern';
    log('穿过防盗门回到现代。城郊的仓库还是老样子。');
  }
  S.travelCd = true;
  return { ok:true, msg:null };
}

/* ---------- 终局 ---------- */
function gameOver(reason){
  if (S.over) return;
  S.over = true;
  var e;
  if (reason === 'prison') e = ENDINGS.prison;
  else if (reason === 'broke') e = ENDINGS.broke;
  else {
    var asset = S.money80 + shopValue();
    if (S.workshop >= 3 && asset >= 500000) e = ENDINGS.boss;
    else if (S.monkeyTotal >= 80) e = ENDINGS.stamp;
    else if (S.modernMoney >= 500000) e = ENDINGS.arb;
    else if (S.money80 >= 10000) e = ENDINGS.wanyuan;
    else e = ENDINGS.plain;
  }
  S.ending = e;
  log('【终局】' + e.title);
}

/* ---------- 存档 ---------- */
function save(){
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch(e){}
}
function load(){
  try {
    var s = localStorage.getItem(SAVE_KEY);
    return s ? JSON.parse(s) : null;
  } catch(e){ return null; }
}
function clearSave(){
  try { localStorage.removeItem(SAVE_KEY); } catch(e){}
}

/* ---------- 调试导出 ---------- */
window.__mydao = {
  get S(){ return S; },
  newGame: newGame,
  advanceMonth: advanceMonth,
  buyModern: buyModern,
  pack: pack,
  unpack: unpack,
  moveToShop: moveToShop,
  clearStock: clearStock,
  buyOld: buyOld,
  buyWool: buyWool,
  sellStall: sellStall,
  sellShop: sellShop,
  sellWorkshop: sellWorkshop,
  bribe: bribe,
  hire: hire,
  fire: fire,
  upgrade: upgrade,
  cashIn: cashIn,
  travel: travel,
  gameOver: gameOver,
  p80: p80,
  policy: policy,
  backpackVol: backpackVol,
  assetValue: assetValue
};
