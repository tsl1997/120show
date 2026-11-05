/* 大富翁 · 特殊地块事件
 * 医院：路过强制住院 3 天 + 800 元
 * 加油站：停留扣费（随石化等级）；路过可加油（步行不需油）
 * 百货商店：停留可买交通工具（摩托 1000 / 汽车 3000）
 * 机会：随机事件
 * 公园：休息
 * 派出所：安全格（传统大富翁的警察局，无惩罚）
 * 看守所：路过只是探监（仅停留时轻微损失？本作设定为纯休息格）
 */

/* 医院：停留强制住院（费用 x 物价系数） */
function hospitalPass(p) {
  p.hospitalDays = Math.max(p.hospitalDays, HOSPITAL_DAYS);
  var fee = Math.round(HOSPITAL_FEE * priceMul());
  var pay = transferMoney(p, null, fee, '住院费');
  log('【医院】🏥 ' + p.name + ' 停留医院被迫住院 ' + HOSPITAL_DAYS + ' 天，缴费 ' + fee + ' 元' + (priceMul() > 1 ? '（物价x' + priceMul() + '）' : ''), 'hospital');
  say(p, 'hospital', '被迫住院 ' + HOSPITAL_DAYS + ' 天，缴费 ' + fee + ' 元');
  return pay;
}

/* 加油站：停留扣费（随石化等级） */
function gasStayFeeCall(p) {
  return gasStayFee(p);
}

/* 加油站：路过可加油（油箱上限内），按当前油价计费
 * units：加油量（单位：汽油单位，10 的倍数） */
function gasRefuel(p, units) {
  units = Math.floor(units / GAS_UNIT) * GAS_UNIT;    /* 只能按 10 的倍数加 */
  if (units <= 0) return { ok: false, msg: '最少购买 10 单位' };
  if (p.vehicle === 'walk') return { ok: false, msg: '步行不需要加油' };
  var v = VEHICLES[p.vehicle];
  var space = v.tank - p.fuel;
  if (space < GAS_UNIT) return { ok: false, msg: '油箱已满' };
  units = Math.min(units, space);
  units = Math.floor(units / GAS_UNIT) * GAS_UNIT;
  var price = currentGasPrice();                       /* 每 10 单位的价 */
  var cost = Math.round(ifloor(units / GAS_UNIT) * price * priceMul());
  if (p.cash < cost) return { ok: false, msg: '现金不足（需 ' + cost + ' 元）' };
  p.cash -= cost;
  p.fuel += units;
  companyIncome('petro', cost, '卖油');
  log('【加油站】⛽ ' + p.name + ' 加油 ' + units + ' 单位，花费 ' + cost + ' 元（油价 ' + price + '/10单位 x 物价' + priceMul() + '）', 'gas');
  return { ok: true };
}

/* 百货商店：买交通工具 */
function buyVehicle(p, vid) {
  var v = VEHICLES[vid];
  if (!v) return { ok: false, msg: '没有这种交通工具' };
  if (p.vehicle === vid) return { ok: false, msg: '已经拥有' };
  if (vid === 'walk') return { ok: false, msg: '不能购买步行' };
  /* 载具只能升级购买：walk→moto→car，不能降级 */
  var order = { walk: 0, moto: 1, car: 2 };
  if (order[vid] < order[p.vehicle]) return { ok: false, msg: '只能换更好的车，不能倒退' };
  var cost = Math.round(v.cost * priceMul());
  if (p.cash < cost) return { ok: false, msg: '现金不足（需 ' + cost + ' 元）' };
  p.cash -= cost;
  p.vehicle = vid;
  p.fuel = 0;                                          /* 新车油箱空 */
  log('【百货】🛒 ' + p.name + ' 购买「' + v.name + '」！花费 ' + cost + ' 元，以后每次掷 ' + v.dice + ' 个骰子', 'mall');
  say(p, 'vehicle', '买下「' + v.name + '」，以后掷 ' + v.dice + ' 个骰子');
  return { ok: true };
}

/* 机会格：随机事件 */
function chanceEvent(p) {
  /* v8：稻荷神社运势——吉只出好事、凶只出坏事，有效期 1 个月 */
  var f = activeFortune(p);
  var pool = CHANCE_EVENTS;
  if (f === '吉') pool = CHANCE_EVENTS.filter(function (e) { return e.money > 0; });
  else if (f === '凶') pool = CHANCE_EVENTS.filter(function (e) { return e.money < 0; });
  var ev = pool[Math.floor(Math.random() * pool.length)];
  if (f) log('【运势】' + (f === '吉' ? '⛩️ 吉签护体，' : '⛩️ 凶签缠身，') +
    '本次随机事件被改写为' + (f === '吉' ? '好' : '坏') + '结果', 'fortune');
  if (ev.money > 0) {
    p.cash += ev.money;
  } else if (ev.money < 0) {
    var need = Math.round(-ev.money * priceMul());
    var pay = transferMoney(p, null, need, '机会');
    if (!pay.ok) log('【机会】' + p.name + ' ' + ev.text + '（但钱不够，付不出）', 'chance');
  }
  log('【机会】⭐ ' + p.name + ' ' + ev.text, 'chance');
  say(p, ev.money > 0 ? 'chanceGood' : 'chanceBad', ev.text);
  return ev;
}
