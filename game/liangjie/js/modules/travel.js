/* 两界搬运工 · 交通系统
 * 同城步行、城际铁路（1980绿皮车要一两天）、国际航班（现代/旧时解锁）。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  /* —— 可到达城市（含条件解锁） —— */
  function reachableFrom(cityId) {
    const s = LJ.Sys.state;
    const w = s.world;
    const out = [];
    if (w === 'old') {
      Object.keys(LJ.World.oldRoutes).forEach((key) => {
        const [a, b] = key.split('|');
        if (a === cityId) out.push({ city: b, route: LJ.World.oldRoutes[key], mode: '绿皮火车', cond: null });
        if (b === cityId) out.push({ city: a, route: LJ.World.oldRoutes[key], mode: '绿皮火车', cond: null });
      });
      // 条件解锁：香港（港澳通行证）、东京（日语证书+翻译）；以及返程
      if (cityId === 'guangzhou') {
        out.push({ city: 'hongkong', route: { hours: 3, cost: 5 }, mode: '罗湖过境', cond: 'hkPermit' });
      }
      if (cityId === 'beijing') {
        out.push({ city: 'tokyo', route: { hours: 6, cost: 150 }, mode: '飞机（首都机场）', cond: 'tokyo' });
      }
      if (cityId === 'hongkong') {
        out.push({ city: 'guangzhou', route: { hours: 3, cost: 5 }, mode: '罗湖过境', cond: 'hkPermit' });
      }
      if (cityId === 'tokyo') {
        out.push({ city: 'beijing', route: { hours: 6, cost: 150 }, mode: '飞机（成田机场）', cond: 'tokyo' });
      }
    } else {
      // 现代：高铁到上海等
      Object.keys(LJ.World.modernRoutes).forEach((key) => {
        const [a, b] = key.split('|');
        if (a === cityId) out.push({ city: b, route: LJ.World.modernRoutes[key], mode: LJ.World.modernRoutes[key].mode, cond: null });
        if (b === cityId) out.push({ city: a, route: LJ.World.modernRoutes[key], mode: LJ.World.modernRoutes[key].mode, cond: null });
      });
    }
    // 去重
    const seen = {};
    return out.filter((o) => (seen[o.city] ? false : (seen[o.city] = true)));
  }

  function condUnlocked(cond) {
    const s = LJ.Sys.state;
    if (!cond) return true;
    if (cond === 'hkPermit') return !!s.player.hkPermit;
    if (cond === 'tokyo') return s.player.certs.includes('japanese') && !!s.player.job;
    return false;
  }

  /* —— 城际车站界面 —— */
  function renderIntercity(content) {
    const s = LJ.Sys.state;
    const city = LJ.Engine.currentCityDef();
    const list = reachableFrom(s.city);
    if (s.world === 'old' && !s.player.introLetter) {
      content.appendChild(el(`<div class="panel-note">🚫 没有介绍信，售票员不卖你票。1980年出远门必须有单位或街道办开的介绍信。<br>→ 去「街道办」想办法。</div>`));
    }
    if (!list.length) {
      content.appendChild(el(`<div class="empty">从这里没有直达线路。</div>`));
      return;
    }
    const grid = el(`<div class="cards">${list.map((o) => {
      const targetName = (o.city === 'hongkong' || o.city === 'tokyo')
        ? (s.world === 'old' ? LJ.World.intlOld[o.city].name : LJ.World.intlModern[o.city].name)
        : (LJ.World[s.world][o.city] ? LJ.World[s.world][o.city].name : o.city);
      const locked = !condUnlocked(o.cond);
      return `<div class="card"><h3>${locked ? '🔒' : ''}${targetName}</h3>
        <p>${o.mode} · 约${o.route.hours}小时 · 票价${o.route.cost}元${o.cond && locked ? '<br>· ' + (o.cond === 'hkPermit' ? '需港澳通行证' : '需日语证书与翻译身份') : ''}</p>
        <div class="trade-ops"><button data-go="${o.city}" ${locked ? 'disabled' : ''}>出发</button></div></div>`;
    }).join('')}</div>`);

    $all('button', grid).forEach((b) => b.addEventListener('click', () => LJ.Travel.travelTo(b.dataset.go)));
    content.appendChild(grid);
  }

  /* —— 执行城际旅行 —— */
  function travelTo(toCity) {
    const s = LJ.Sys.state;
    const w = s.world;
    const from = s.city;
    const item = reachableFrom(from).find((o) => o.city === toCity);
    if (!item) { LJ.Engine.toast('没有这条线路。'); return; }
    if (!condUnlocked(item.cond)) { LJ.Engine.toast('条件未满足，无法前往。'); return; }
    if (s.world === 'old' && !s.player.introLetter) { LJ.Engine.toast('没有介绍信，买不到车票。'); return; }

    const wallet = s.world === 'modern' ? s.money.modern : s.money.old;
    if (wallet.CNY < item.route.cost) { LJ.Engine.toast('买不起车票。'); return; }
    if (s.player.energy < 20) { LJ.Engine.toast('太累了，出不了远门，先休息。'); return; }

    wallet.CNY -= item.route.cost;
    LJ.Engine.log(`你乘${item.mode}从${LJ.World[s.world][from] ? LJ.World[s.world][from].name : from}前往${toCity}，约${item.route.hours}小时。`);
    LJ.Engine.toast(`🚂 ${item.mode}，一路摇晃……`);
    // 长途按天吃喝（吃背包干粮/喝水，缺则花钱买）
    let hoursLeft = item.route.hours;
    while (hoursLeft > 0) {
      const step = Math.min(hoursLeft, 24);
      LJ.Engine.advance(step, { energy: Math.round(25 * step / item.route.hours) });
      if (step >= 24) LJ.Survival.autoNourish(true);
      hoursLeft -= step;
    }

    s.city = toCity;
    const target = s.world === 'old'
      ? (LJ.World.old[toCity] || LJ.World.intlOld[toCity])
      : (LJ.World.modern[toCity] || LJ.World.intlModern[toCity]);
    s.location = (target && target.places.station) ? 'station' : (target && target.places.airport) ? 'airport' : 'home';
    LJ.Engine.visitCity(toCity);
    LJ.Engine.log(`抵达${target ? target.name : toCity}。`);
    LJ.Engine.toast(`🏙️ 到达${target ? target.name : toCity}`);
    LJ.Sys.save();
    LJ.UI.renderAll();
  }

  /* —— 现代国际航班 —— */
  function renderFlights(content) {
    const s = LJ.Sys.state;
    if (!s.player.passport) {
      content.appendChild(el(`<div class="panel-note">🚫 没有护照，无法出境。→ 去「行政服务中心」办理护照。</div>`));
      return;
    }
    const isHub = !!LJ.World.intlModern[s.city];
    const options = isHub ? [{ id: 'beijing', name: '北京', hours: LJ.World.intlModern[s.city].flightHours, cost: LJ.World.intlModern[s.city].flightCost }] : Object.keys(LJ.World.intlModern).map((k) => ({ id: k, name: LJ.World.intlModern[k].name, hours: LJ.World.intlModern[k].flightHours, cost: LJ.World.intlModern[k].flightCost }));
    const grid = el(`<div class="cards">${options.map((o) =>
      `<div class="card"><h3>✈️ ${o.name}</h3><p>飞行约${o.hours}小时 · 经济舱${o.cost}元</p><div class="trade-ops"><button data-fly="${o.id}">购票乘机</button></div></div>`
    ).join('')}</div>`);
    $all('button', grid).forEach((b) => b.addEventListener('click', () => LJ.Travel.flyTo(b.dataset.fly)));
    content.appendChild(grid);
  }

  function flyTo(toCity) {
    const s = LJ.Sys.state;
    if (!s.player.passport) { LJ.Engine.toast('没有护照。'); return; }
    let o;
    if (s.world === 'modern') {
      if (LJ.World.intlModern[s.city]) o = { id: 'beijing', hours: LJ.World.intlModern[s.city].flightHours, cost: LJ.World.intlModern[s.city].flightCost };
      else o = { id: toCity, hours: LJ.World.intlModern[toCity].flightHours, cost: LJ.World.intlModern[toCity].flightCost };
    } else {
      o = { id: toCity, hours: 6, cost: 150 };
    }
    if (s.money.modern.CNY < o.cost) { LJ.Engine.toast('买不起机票。'); return; }
    s.money.modern.CNY -= o.cost;
    let hoursLeft = o.hours;
    while (hoursLeft > 0) {
      const step = Math.min(hoursLeft, 24);
      LJ.Engine.advance(step, { energy: Math.round(20 * step / o.hours) });
      if (step >= 24) LJ.Survival.autoNourish(true);
      hoursLeft -= step;
    }
    s.city = o.id;
    const target = s.world === 'modern' ? (LJ.World.intlModern[o.id] || LJ.World.modern[o.id]) : LJ.World.intlOld[o.id];
    s.location = (target && target.places.airport) ? 'airport' : 'home';
    LJ.Engine.visitCity(o.id);
    LJ.Engine.log(`✈️ 你飞抵${target ? target.name : o.id}。`);
    LJ.Engine.toast(`✈️ 已抵达${target ? target.name : o.id}`);
    LJ.Sys.save();
    LJ.UI.renderAll();
  }

  /* —— 旧时国际（东京/香港 通过车站入口） —— */
  // 旧时东京从北京机场飞（见 reachableFrom/condUnlocked）

  LJ.Travel = { renderIntercity, travelTo, renderFlights, flyTo, reachableFrom, condUnlocked };
})();
