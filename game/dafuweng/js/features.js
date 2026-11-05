/* 大富翁 · 三国新玩法 v8
 * ① 港口/飞机场跨国传送  ② 天皇不动产赋税  ③ 稻荷神社抽签与运势
 * ④ 渔港捕鱼小游戏        ⑤ 美国实体企业停留收费 + 投资
 */

var TRAVEL_FARE = { port: 300, airport: 1000 };   /* 船票 / 机票基准价（乘物价系数） */
var TENNO_LAND_TAX = 0.20;                        /* 购地一次性赋税：地价 20% */
var TENNO_HOUSE_TAX = 0.10;                       /* 房屋月税：当月过路费的 10% */
var SHRINE_FEE_MIN = 100, SHRINE_FEE_MAX = 500;
var BAIT_LEVELS = [100, 500, 1000];

/* 加权随机表（捕鱼 / 企业投资共用） */
var FISH_TABLE = [
  { name: '空钩（什么都没有）', emoji: '🪝', mul: 0,   w: 30 },
  { name: '小沙丁鱼',         emoji: '🐟', mul: 0.5, w: 25 },
  { name: '真鲷',             emoji: '🐠', mul: 1,   w: 25 },
  { name: '蓝鳍金枪鱼',       emoji: '🐟', mul: 2,   w: 15 },
  { name: '锦鲤王',           emoji: '🎏', mul: 6,   w: 5  }
];
function rollWeighted(table) {
  var total = 0, i;
  for (i = 0; i < table.length; i++) total += table[i].w;
  var r = Math.random() * total;
  for (i = 0; i < table.length; i++) {
    r -= table[i].w;
    if (r <= 0) return table[i];
  }
  return table[table.length - 1];
}

/* 神社运势也影响「运气型」收益（捕鱼 / 企业投资）：
 * 吉签抽到空钩时较大概率重抽非空；凶签抽到大奖时较大概率被打回小奖。 */
function fortuneReroll(table, picked, p) {
  var f = activeFortune(p);
  if (!f) return picked;
  if (f === '吉' && picked.mul === 0 && Math.random() < 0.6) {
    return rollWeighted(table.filter(function (x) { return x.mul > 0; }));
  }
  if (f === '凶' && picked.mul >= 2 && Math.random() < 0.6) {
    return rollWeighted(table.filter(function (x) { return x.mul < 2; }));
  }
  return picked;
}

/* ===== ① 跨国传送 ===== */
function travelOptions(p, mode) {
  var cur = regionOf(p.pos);
  var fare = Math.round(TRAVEL_FARE[mode] * priceMul());
  return REGIONS.filter(function (r) { return r !== cur; }).map(function (r) {
    return { region: r, name: REGION_NAMES[r], fare: fare, target: REGION_GATES[r][mode] };
  });
}

function travelTo(p, region, mode) {
  if (!REGION_GATES[region]) return { ok: false, msg: '没有这个国家' };
  if (region === regionOf(p.pos)) return { ok: false, msg: '已经在这个国家了' };
  var fare = Math.round(TRAVEL_FARE[mode] * priceMul());
  if (p.cash < fare) return { ok: false, msg: '现金不足（需 ' + fare + ' 元）' };
  p.cash -= fare;
  var target = REGION_GATES[region][mode];
  p.pos = target;
  p.lastDir = mode === 'port' ? 'right' : 'up';
  switchRegion(region);
  var how = mode === 'port' ? '坐船漂洋过海' : '搭乘国际航班';
  log('【旅行】' + (mode === 'port' ? '⚓' : '✈️') + ' ' + p.name + how + '前往【' +
    REGION_NAMES[region] + '·' + (G.tiles[target].name || '口岸') + '】，票价 ' + fare + ' 元', 'travel');
  say(p, 'item', how + '抵达' + REGION_NAMES[region] + '（票价 ' + fare + ' 元）');
  if (typeof updateHud === 'function') updateHud();
  if (typeof updatePawnsDOM === 'function') updatePawnsDOM();
  return { ok: true, target: target, fare: fare };
}

/* AI：约 55% 概率出发，随机挑一个去得起的目的地 */
function aiTravel(p, mode) {
  if (Math.random() > 0.55) return false;
  var opts = travelOptions(p, mode).filter(function (o) { return p.cash > o.fare + 3000; });
  if (!opts.length) return false;
  var pick = opts[Math.floor(Math.random() * opts.length)];
  return travelTo(p, pick.region, mode).ok;
}

/* ===== ② 天皇不动产赋税 ===== */
/* 从现金 → 存款扣税，扣到多少算多少，全部计入天皇不动产当月收入 */
function collectTennoTax(p, amount, reason) {
  var tax = Math.round(amount);
  if (tax <= 0) return 0;
  var paid = 0;
  var useCash = Math.min(p.cash, tax);
  p.cash -= useCash; tax -= useCash; paid += useCash;
  if (tax > 0) {
    var useBank = Math.min(p.bank, tax);
    p.bank -= useBank; tax -= useBank; paid += useBank;
  }
  if (paid > 0) {
    companyIncome('tenno', paid, reason);
    log('【天皇不动产】🏯 ' + p.name + ' 缴纳' + reason + ' ' + paid + ' 元' +
      (tax > 0 ? '（尚欠 ' + tax + ' 元，实在没钱了）' : ''), 'tax');
  }
  return paid;
}

/* 购地时：地价 20% 一次性赋税（仅日本区，在 buyEstate 内按 region 调用） */
function tennoLandTax(p, landPrice) {
  return collectTennoTax(p, landPrice * TENNO_LAND_TAX, '日本区购地赋税（地价20%）');
}

/* 每月 1 日：只对「日本区域」有建筑的地块收房屋月税（当前过路费的 10%），
 * 无论这个月有没有人停留。中国/美国房产不归天皇不动产管辖。 */
function settleTennoMonthly() {
  var total = 0, count = 0;
  G.tiles.forEach(function (t) {
    if (t.t !== 'estate' || t.region !== 'jp' || t.owner == null || t.level <= 0) return;
    var owner = G.players[t.owner];
    if (!owner || !owner.alive) return;
    var tax = Math.round(estateToll(t) * TENNO_HOUSE_TAX);
    if (tax > 0) { total += collectTennoTax(owner, tax, '【' + t.name + '】房屋月税（过路费10%）'); count++; }
  });
  if (total > 0) log('【天皇不动产】📊 日本区域 ' + count + ' 栋建筑，本月房屋税合计 ' + total + ' 元已入账', 'tax');
  return total;
}

/* ===== ③ 稻荷神社抽签与运势 ===== */
function activeFortune(p) {
  if (!p.fortune) return null;
  var now = G.year * 12 + G.month;
  if (now >= p.fortune.until) { p.fortune = null; return null; }
  return p.fortune.type;
}
function fortuneText(p) {
  var f = activeFortune(p);
  if (!f) return '无';
  return f + '（' + REGION_NAMES.jp + '祈福，至第 ' + (p.fortune.until - (G.year * 12)) + ' 月初）';
}

/* 路过 / 停留神社都会自动扣抽签费并重抽（新的覆盖旧的，不可叠加，有效期 1 个月） */
function shrineDraw(p) {
  var fee = SHRINE_FEE_MIN + Math.floor(Math.random() * (SHRINE_FEE_MAX - SHRINE_FEE_MIN + 1));
  var useCash = Math.min(p.cash, fee);
  p.cash -= useCash;
  var rest = fee - useCash;
  if (rest > 0) {
    var useBank = Math.min(p.bank, rest);
    p.bank -= useBank;
    fee = useCash + useBank;
  } else {
    fee = useCash;
  }
  companyIncome('inari', fee, '祈福抽签费');
  var good = Math.random() < 0.55;
  var type = good ? '吉' : '凶';
  p.fortune = { type: type, until: G.year * 12 + G.month + 1 };
  log('【稻荷神社】⛩️ ' + p.name + ' 献上 ' + fee + ' 元香火钱，抽到「' + type +
    '」！' + (good ? '随机事件将走好运' : '随机事件将走霉运') + '，有效期 1 个月（新签覆盖旧签）', 'fortune');
  say(p, 'god', '在稻荷神社抽到「' + type + '」（香火钱 ' + fee + ' 元）');
  if (typeof updateHud === 'function') updateHud();
  return { fee: fee, type: type };
}

/* ===== ④ 渔港捕鱼（赌博机器） ===== */
function goFishing(p, bait) {
  bait = Math.round(bait);
  if (BAIT_LEVELS.indexOf(bait) < 0) return { ok: false, msg: '饵料档位只能是 100 / 500 / 1000' };
  if (p.cash < bait) return { ok: false, msg: '现金不足（需 ' + bait + ' 元鱼饵）' };
  p.cash -= bait;
  var fish = fortuneReroll(FISH_TABLE, rollWeighted(FISH_TABLE), p);
  var value = Math.round(bait * fish.mul);
  p.cash += value;
  var net = value - bait;
  log('【渔港】🎣 ' + p.name + ' 投入 ' + bait + ' 元鱼饵，钓到 ' + fish.emoji + ' ' + fish.name +
    '，卖得 ' + value + ' 元（净 ' + (net >= 0 ? '+' : '') + net + '）', net >= 0 ? 'fish' : 'warn');
  say(p, net >= 0 ? 'chanceGood' : 'chanceBad', '钓鱼：' + fish.emoji + fish.name + '，' +
    (net >= 0 ? '净赚 ' : '亏了 ') + Math.abs(net) + ' 元');
  if (typeof updateHud === 'function') updateHud();
  return { ok: true, fish: fish, bait: bait, value: value, net: net };
}

function aiFishing(p) {
  if (p.cash < 3000 || Math.random() > 0.35) return false;
  var bait = p.cash > 20000 ? 500 : 100;
  return goFishing(p, bait).ok;
}

/* ===== ⑤ 美国实体企业 ===== */
function corpStayFee(p, tile) {
  var cid = tile.cid;
  if (!cid || !G.companies[cid]) return;
  var c = G.companies[cid], def = COMPANY_MAP[cid];
  var fee = Math.round(COMPANY_LEVELS[c.level - 1].toll * priceMul());
  transferMoney(p, null, fee, def.name + '服务费');
  companyIncome(cid, fee, '服务费');
  log('【企业】' + def.emoji + ' ' + p.name + ' 停留在【' + def.name + '】（Lv.' + c.level +
    '），支付 ' + fee + ' 元', 'corp');
  say(p, 'toll', '在【' + def.name + '】花了 ' + fee + ' 元');
}

/* 企业投资：花 500 元，随机回报（与捕鱼同款权重，华尔街波动更大） */
function corpInvest(p, cid) {
  var def = COMPANY_MAP[cid];
  if (!def || !G.companies[cid]) return { ok: false, msg: '没有这家企业' };
  var cost = Math.round(500 * priceMul());
  if (p.cash < cost) return { ok: false, msg: '现金不足（需 ' + cost + ' 元）' };
  p.cash -= cost;
  companyIncome(cid, cost, '投资款');
  var table = cid === 'wallst'
    ? [{ name: '踩雷', mul: 0, w: 45 }, { name: '小赚', mul: 0.5, w: 27 },
       { name: '翻倍', mul: 2, w: 22 }, { name: '暴富', mul: 6, w: 6 }]
    : FISH_TABLE;
  var res = fortuneReroll(table, rollWeighted(table), p);
  var value = Math.round(cost * res.mul);
  p.cash += value;
  var net = value - cost;
  log('【企业】' + def.emoji + ' ' + p.name + ' 在【' + def.name + '】投入 ' + cost + ' 元「' +
    def.desc + '」，结果：' + res.name + '，收回 ' + value + ' 元（净 ' + (net >= 0 ? '+' : '') + net + '）',
    net >= 0 ? 'corp' : 'warn');
  say(p, net >= 0 ? 'chanceGood' : 'chanceBad', '在' + def.name + '投资：' + res.name +
    '，' + (net >= 0 ? '净赚 ' : '亏了 ') + Math.abs(net) + ' 元');
  if (typeof updateHud === 'function') updateHud();
  return { ok: true, result: res, cost: cost, value: value, net: net };
}
