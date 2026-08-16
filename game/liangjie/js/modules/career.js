/* 两界搬运工 · 职业系统
 * 现代培训→考证→旧时职业（工资+每月票证）→介绍信/通行证/护照。
 * 票证不再由邮局出售：来自单位发放、工厂领取、黑市高价、路人以物易物。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  function renderTraining(content) {
    const s = LJ.Sys.state;
    content.appendChild(el(`<div class="panel-note">🎓 职业培训中心。考取证书，回到1980年就能凭证书谋到好差事。<br>培训按天推进，期间自动吃喝（吃家中存粮或花钱买饭）。</div>`));
    const grid = el(`<div class="cards">${LJ.Courses.map((c) => {
      const done = s.player.certs.includes(c.id);
      const afford = s.money.modern.CNY >= c.cost;
      return `<div class="card"><h3>${done ? '✅' : ''}${c.name}</h3>
        <p>费用${c.cost}元 · ${c.days}天${c.unlock.length ? '<br>解锁职业：' + c.unlock.join('、') : ''}</p>
        <div class="trade-ops"><button data-course="${c.id}" ${done || !afford ? 'disabled' : ''}>${done ? '已结业' : '报名'}</button></div></div>`;
    }).join('')}</div>`);
    $all('button', grid).forEach((b) => b.addEventListener('click', () => LJ.Career.enroll(b.dataset.course)));
    content.appendChild(grid);
  }

  function enroll(courseId) {
    const s = LJ.Sys.state;
    const c = LJ.Courses.find((x) => x.id === courseId);
    if (!c) return;
    if (s.player.certs.includes(c.id)) { LJ.Engine.toast('已取得该证书。'); return; }
    if (s.money.modern.CNY < c.cost) { LJ.Engine.toast('费用不足。'); return; }
    if (s.player.energy < 20) { LJ.Engine.toast('身体太差，学不进去，先休息。'); return; }
    s.money.modern.CNY -= c.cost;
    LJ.Engine.log(`报名「${c.name}」，花费${c.cost}元，开始为期${c.days}天的培训。`);
    for (let d = 0; d < c.days; d++) {
      LJ.Engine.advance(24);
      LJ.Survival.autoNourish(true);
      if (s.player.energy < 10) s.player.energy = 10;
    }
    if (!s.player.certs.includes(c.id)) s.player.certs.push(c.id);
    s.player.skills[c.skill] = (s.player.skills[c.skill] || 0) + 12;
    LJ.Engine.log(`结业！取得「${c.name}」证书。`);
    LJ.Engine.toast(`🎓 取得证书：${c.name}`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  function renderService(content) {
    const s = LJ.Sys.state;
    content.appendChild(el(`<div class="panel-note">🪪 行政服务中心。办理护照与经商登记。</div>`));
    const box = el(`<div class="cards">
      <div class="card"><h3>${s.player.passport ? '✅' : ''} 中国护照</h3><p>${s.player.passport ? '已办理' : '出国必备。费用200元，办理约7天。'}</p>
        <div class="trade-ops"><button data-passport ${s.player.passport ? 'disabled' : ''}>${s.player.passport ? '已持有' : '办理'}</button></div></div>
      <div class="card"><h3>${LJ.Trade.isRegistered(s.city) ? '✅' : ''} 经商登记（${LJ.Engine.currentCityDef().name}）</h3><p>${LJ.Trade.isRegistered(s.city) ? '已登记，官方集市可正常收购。' : '未登记时官方集市收购价打8折。费用200元。'}</p>
        <div class="trade-ops"><button data-register ${LJ.Trade.isRegistered(s.city) ? 'disabled' : ''}>${LJ.Trade.isRegistered(s.city) ? '已登记' : '登记'}</button></div></div>
    </div>`);
    $('button[data-register]', box).addEventListener('click', () => {
      if (LJ.Trade.isRegistered(s.city)) return;
      if (s.money.modern.CNY < 200) { LJ.Engine.toast('费用不足。'); return; }
      s.money.modern.CNY -= 200;
      s.flags.registered = s.flags.registered || { modern: {}, old: {} };
      s.flags.registered.modern[s.city] = true;
      LJ.Engine.advance(0.5);
      LJ.Engine.log(`在${LJ.Engine.currentCityDef().name}办理了经商登记。`);
      LJ.Engine.toast('🪪 经商登记完成！');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    $('button', box).addEventListener('click', () => {
      if (s.player.passport) return;
      if (s.money.modern.CNY < 200) { LJ.Engine.toast('费用不足。'); return; }
      s.money.modern.CNY -= 200;
      for (let d = 0; d < 7; d++) { LJ.Engine.advance(24); LJ.Survival.autoNourish(true); if (s.player.energy < 10) s.player.energy = 10; }
      s.player.passport = true;
      LJ.Engine.log('办理护照成功，耗时7天。');
      LJ.Engine.toast('🪪 护照已办好！可以出境了。');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    content.appendChild(box);
  }

  function renderOffice(content) {
    const s = LJ.Sys.state;
    const p = s.player;
    content.appendChild(el(`<div class="panel-note">📋 街道办。1980年办事都要靠这里开证明。治安风险：${p.wanted}/100${p.wanted >= 80 ? ' ⚠️ 你已被盯上！' : ''}</div>`));
    const box = el(`<div class="cards">
      <div class="card"><h3>${p.introLetter ? '✅' : ''} 介绍信</h3><p>${p.introLetter ? '已持有，可全国乘车出差。' : (p.job || p.reputation >= 8) ? '你符合条件，可花2元开具。' : '需要有单位挂靠（职业）或社会声望8+（靠做买卖积累）。'}</p>
        <div class="trade-ops"><button data-intro ${p.introLetter || !(p.job || p.reputation >= 8) ? 'disabled' : ''}>${p.introLetter ? '已开具' : '开具'}</button></div></div>
      <div class="card"><h3>${p.hkPermit ? '✅' : ''} 港澳通行证</h3><p>${p.hkPermit ? '已持有，可过罗湖去香港。' : '需担任「翻译员」职业，花3元办理。'}</p>
        <div class="trade-ops"><button data-hk ${p.hkPermit || !(p.job && p.job.id === 'translator') ? 'disabled' : ''}>${p.hkPermit ? '已办理' : '办理'}</button></div></div>
      <div class="card"><h3>${LJ.Trade.isRegistered(s.city) ? '✅' : ''} 经商登记（${LJ.Engine.currentCityDef().name}）</h3><p>${LJ.Trade.isRegistered(s.city) ? '已登记，官方集市可正常收购。' : '未登记时官方集市收购价打8折。费用5元。'}</p>
        <div class="trade-ops"><button data-register ${LJ.Trade.isRegistered(s.city) ? 'disabled' : ''}>${LJ.Trade.isRegistered(s.city) ? '已登记' : '登记'}</button></div></div>
    </div>`);
    $('button[data-register]', box).addEventListener('click', () => {
      if (LJ.Trade.isRegistered(s.city)) return;
      if (s.money.old.CNY < 5) { LJ.Engine.toast('钱不够。'); return; }
      s.money.old.CNY -= 5;
      s.flags.registered = s.flags.registered || { modern: {}, old: {} };
      s.flags.registered.old[s.city] = true;
      LJ.Engine.advance(0.5);
      LJ.Engine.log(`在${LJ.Engine.currentCityDef().name}办理了经商登记。`);
      LJ.Engine.toast('🪪 经商登记完成！');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    $('button[data-intro]', box).addEventListener('click', () => {
      if (p.introLetter) return;
      if (!(p.job || p.reputation >= 8)) { LJ.Engine.toast('不符合条件。'); return; }
      if (s.money.old.CNY < 2) { LJ.Engine.toast('钱不够。'); return; }
      s.money.old.CNY -= 2; p.introLetter = true;
      LJ.Engine.advance(0.5);
      LJ.Engine.log('街道办开具了介绍信。你可以坐火车去外地了。');
      LJ.Engine.toast('📜 拿到介绍信！');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    $('button[data-hk]', box).addEventListener('click', () => {
      if (p.hkPermit) return;
      if (!(p.job && p.job.id === 'translator')) { LJ.Engine.toast('需要翻译员身份。'); return; }
      if (s.money.old.CNY < 3) { LJ.Engine.toast('钱不够。'); return; }
      s.money.old.CNY -= 3; p.hkPermit = true;
      LJ.Engine.advance(0.5);
      LJ.Engine.log('办理了港澳通行证，可赴香港。');
      LJ.Engine.toast('🛂 拿到港澳通行证！');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    content.appendChild(box);

    content.appendChild(el(`<h3 class="sub">就业 / 换工作（每月发工资和票证）</h3>`));
    const jobGrid = el(`<div class="cards">${LJ.Jobs.map((j) => {
      const has = p.job && p.job.id === j.id;
      const meet = j.need.every((n) => p.certs.includes(n));
      return `<div class="card"><h3>${has ? '✅' : ''}${j.name}</h3>
        <p>${j.desc}<br>月薪${j.salary}元 · 每月发票：${Object.keys(j.tickets).map((t) => `${LJ.Items[t].name}×${j.tickets[t]}`).join('、')}</p>
        <div class="trade-ops"><button data-job="${j.id}" ${has || !meet ? 'disabled' : ''}>${has ? '在任' : '就职'}</button>${has ? `<button data-quit>辞职</button>` : ''}</div></div>`;
    }).join('')}</div>`);
    $all('button', jobGrid).forEach((b) => {
      if (b.dataset.job) b.addEventListener('click', () => LJ.Career.takeJob(b.dataset.job));
      if (b.dataset.quit) b.addEventListener('click', () => LJ.Career.quitJob());
    });
    content.appendChild(jobGrid);

    // 旧时住房扩建
    content.appendChild(el(`<h3 class="sub">住房申请（扩建旧时住处）</h3>`));
    const oldHome = s.flags.home.old;
    content.appendChild(el(`<div class="panel-note">当前旧时住处：${oldHome.name}（容量${oldHome.cap}kg）</div>`));
    const homeGrid = el(`<div class="cards">${LJ.Career.OLD_HOME_UPGRADES.map((u) => {
      const done = oldHome.cap >= u.cap;
      const afford = s.money.old.CNY >= u.cost;
      return `<div class="card"><h3>${done ? '✅' : ''}${u.name}</h3><p>储物容量 ${u.cap}kg</p><div class="trade-ops"><button data-oldhome="${u.cap}" ${done || !afford ? 'disabled' : ''}>${done ? '已拥有' : LJ.Engine.money(u.cost) + '元'}</button></div></div>`;
    }).join('')}</div>`);
    $all('button', homeGrid).forEach((b) => {
      if (!b.dataset.oldhome) return;
      b.addEventListener('click', () => {
        const u = LJ.Career.OLD_HOME_UPGRADES.find((x) => x.cap === Number(b.dataset.oldhome));
        if (!u || oldHome.cap >= u.cap) return;
        if (s.money.old.CNY < u.cost) { LJ.Engine.toast('钱不够。'); return; }
        s.money.old.CNY -= u.cost;
        oldHome.cap = u.cap; oldHome.name = u.name;
        LJ.Engine.log(`旧时住处扩建为「${u.name}」，容量 ${u.cap}kg。`);
        LJ.Engine.toast(`🏠 ${u.name}`);
        LJ.Sys.save(); LJ.UI.renderAll();
      });
    });
    content.appendChild(homeGrid);
  }

  function takeJob(jobId) {
    const s = LJ.Sys.state;
    const j = LJ.Jobs.find((x) => x.id === jobId);
    if (!j) return;
    if (s.player.job) { LJ.Engine.toast('你已有工作，先辞职再换。'); return; }
    if (!j.need.every((n) => s.player.certs.includes(n))) { LJ.Engine.toast('证书不满足要求。'); return; }
    s.player.job = { id: j.id, name: j.name, salary: j.salary, days: 0 };
    s.player.reputation = Math.max(s.player.reputation, 20);
    LJ.Engine.advance(0.5);
    LJ.Engine.log(`你成为「${j.name}」，月薪${j.salary}元，单位按月发票证。`);
    LJ.Engine.toast(`💼 就职：${j.name}`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  function quitJob() {
    const s = LJ.Sys.state;
    if (!s.player.job) return;
    LJ.Engine.log(`辞去了「${s.player.job.name}」。`);
    s.player.job = null;
    LJ.Engine.toast('已辞职。');
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  // 每月结算：工资 + 票证
  function tickJob(world, n) {
    const s = LJ.Sys.state;
    if (world !== 'old' || !s.player.job) return;
    const j = LJ.Jobs.find((x) => x.id === s.player.job.id);
    s.player.job.days += n;
    while (s.player.job.days >= 30) {
      s.player.job.days -= 30;
      s.money.old.CNY += s.player.job.salary;
      const tLst = [];
      Object.entries(j ? j.tickets : {}).forEach(([tid, q]) => {
        LJ.Trade.addItem(s.home.old, tid, q);
        if (LJ.Items[tid]) tLst.push(`${LJ.Items[tid].name}×${q}`);
      });
      LJ.Engine.log(`领工资：${s.player.job.name} 月薪${s.player.job.salary}元，另发：${tLst.join('、') || '无'}。`);
    }
    LJ.Sys.save();
  }

  LJ.Career = {
    renderTraining, enroll, renderService, renderOffice, takeJob, quitJob, tickJob,
    OLD_HOME_UPGRADES: [
      { name: '独立正房', cap: 80, cost: 1200 },
      { name: '两进院落', cap: 160, cost: 9000 },
      { name: '三进大宅', cap: 300, cost: 60000 }
    ]
  };
})();
