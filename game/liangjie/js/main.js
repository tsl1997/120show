/* 两界搬运工 · 主入口
 * 绑定事件、注册地点渲染器、初始化游戏。
 */
(function () {
  'use strict';
  const LJ = window.LJ;
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  /* —— 家（落脚点） —— */
  function renderHome(content) {
    const s = LJ.Sys.state;
    const w = s.world;
    const home = LJ.Engine.currentCityDef().places.home;
    const portal = w === 'modern'
      ? '衣柜后的那扇门通向1980年。攒点现代物资，穿过门去试试行情。'
      : '这扇门通向2026年。淘到的文物、邮票、老酒，带回去就能变现。';
    content.appendChild(el(`<div class="home-panel">
      <h3>${home[0]}</h3>
      <p>${home[1]}</p>
      <div class="panel-note">🚪 ${portal}</div>
    </div>`));
    content.appendChild(el(`<h3 class="sub">家中的事情</h3><div class="cards">
      <div class="card"><h3>😴 睡觉</h3><p>睡8小时，恢复体力。</p><div class="trade-ops"><button data-do="rest">睡觉</button></div></div>
      <div class="card"><h3>🍜 吃喝</h3><p>吃家里的存粮、喝开水。</p><div class="trade-ops"><button data-do="eat">看看有什么</button></div></div>
    </div>`));
    $all('button', content).forEach((b) => {
      if (b.dataset.do === 'rest') b.addEventListener('click', () => LJ.Survival.rest());
      if (b.dataset.do === 'eat') b.addEventListener('click', () => LJ.Survival.renderHomeEating(LJ.UI.$('#content')));
    });
  }

  /* —— 旅馆 —— */
  function renderHotel(content) {
    const s = LJ.Sys.state;
    const city = LJ.Engine.currentCityDef().name;
    content.appendChild(el(`<div class="panel-note">🏨 ${city}的旅馆。可以住宿休息，也可以在餐厅用餐。</div>`));
    content.appendChild(el(`<div class="cards">
      <div class="card"><h3>😴 住一晚</h3><p>${s.world === 'old' ? '2元/晚' : '200元/晚'}，睡8小时。</p><div class="trade-ops"><button data-do="hotel-rest">住宿</button></div></div>
    </div>`));
    $('button[data-do="hotel-rest"]', content).addEventListener('click', () => {
      const s = LJ.Sys.state;
      const cost = s.world === 'old' ? 2 : 200;
      const wallet = s.world === 'modern' ? s.money.modern : s.money.old;
      if (wallet.CNY < cost) { LJ.Engine.toast('住不起。'); return; }
      wallet.CNY -= cost;
      s.player.energy = 100;
      LJ.Engine.advance(8, {});
      LJ.Engine.log(`在${city}的旅馆住了一晚（${cost}元）。`);
      LJ.Engine.toast('😴 一夜安眠，体力恢复。');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    LJ.Survival.renderDining(content);
  }

  /* —— 文化地标 —— */
  function renderCulture(content) {
    const s = LJ.Sys.state;
    const w = s.world;
    const cityId = s.city;
    const placeId = LJ.Engine.currentPlaceDef()[0];
    const placeKey = s.location;
    let entry = LJ.CULTURE['culture#' + cityId] || LJ.CULTURE[placeKey] || (w === 'modern' ? LJ.CULTURE['park#modern'] : null);
    const lines = entry ? entry.lines : ['此地风光正好，且行且看。'];
    content.appendChild(el(`<div class="culture-card">${lines.map((l) => `<p>${l}</p>`).join('')}</div>`));
    content.appendChild(el(`<div class="cards"><div class="card"><h3>🚶 散步</h3><p>在这里走走，恢复心情，听听风声。</p><div class="trade-ops"><button data-do="stroll">散步</button></div></div></div>`));
    $('button[data-do="stroll"]', content).addEventListener('click', () => LJ.Survival.stroll());
  }

  function init() {
    const s = LJ.Sys.load();
    LJ.EngineStocks.init();

    // 新手引导日志
    if (!s.flags._boot) {
      s.flags._boot = true;
      LJ.Engine.log('你站在2026年的出租屋里，衣柜后那扇斑驳的门，通向1980年。');
      LJ.Engine.log('第一步：去「批发市场」买点尼龙绳、手电筒，或到「超市」买几瓶可乐——这些在1980年都是稀罕物。');
      LJ.Engine.log('第二步：攒点干粮和水（人会饿，更会渴），穿过衣柜后的门。');
      LJ.Engine.log('第三步：在1980年的街上叫卖，或深夜去「鸽子市」出手（价高但涨治安风险）。');
      LJ.Engine.log('第四步：用旧时人民币去「邮局」买8分钱的猴票、去「文物商店」淘谜团罐、去黑市囤1980年茅台——带回2026年就是天价。');
      LJ.Engine.log('想跑外地？在「街道办」办介绍信（需要职业或做买卖攒声望）。');
      LJ.Sys.save();
      LJ.Engine.toast('欢迎来到《两界搬运工》，一扇门，两本账，四十六年的价差。');
    }

    // 地点渲染器注册
    LJ.PlaceRenderers = {
      home: renderHome,
      market: (c, p) => LJ.Trade.renderMarket(c, p),
      wholesale: (c, p) => LJ.Trade.renderWholesale(c, p),
      restaurant: (c) => LJ.Survival.renderDining(c),
      hotel: renderHotel,
      station: (c) => LJ.Travel.renderIntercity(c),
      airport: (c) => LJ.Travel.renderFlights(c),
      bank: (c) => LJ.Finance.renderBank(c),
      stock: (c) => LJ.Finance.renderStock(c),
      training: (c) => LJ.Career.renderTraining(c),
      office: (c) => LJ.Career.renderOffice(c),
      service: (c) => LJ.Career.renderService(c),
      antique: (c, p) => LJ.Antique.renderAppraise(c, p),
      auction: (c, p) => LJ.Antique.renderAppraise(c, p),
      friendship: (c, p) => LJ.Antique.renderAppraise(c, p),
      blackmarket: (c, p) => LJ.Trade.renderBlackMarket(c, p),
      warehouse: (c) => LJ.Trade.renderWarehouse(c),
      street: (c) => LJ.Trade.renderStreet(c),
      culture: renderCulture,
      park: renderCulture
    };

    // 事件绑定
    $('#crossBtn').addEventListener('click', () => LJ.Engine.crossPortal());
    $('#manualSave').addEventListener('click', () => { LJ.Sys.save(); LJ.Engine.toast('✅ 已手动存档'); });
    $('#resetGame').addEventListener('click', () => {
      if (window.confirm('确定要重置《两界搬运工》的全部存档吗？此操作无法撤销。')) {
        LJ.Sys.reset();
        window.location.reload();
      }
    });

    LJ.UI.renderAll();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
