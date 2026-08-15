/* 两界搬运工 · 职业系统
 * 现代培训 → 考证 → 旧时职业 → 介绍信 / 通行证 / 公派资格。
 * 现代相对静止，培训需要消耗现代时间与金钱。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  /* —— 现代职业培训 —— */
  function renderTraining(content) {
    const s = LJ.Sys.state;
    content.appendChild(el(`<div class="panel-note">🎓 职业培训中心。在这里花时间与金钱考取证书，回到1980年就能凭证书谋到好差事。<br>培训需要连续消耗现代天数（期间照常吃喝）。</div>`));
    const grid = el(`<div class="cards">${LJ.Courses.map((c) => {
      const done = s.player.certs.includes(c.id);
      const afford = s.money.modern.CNY >= c.cost;
      return `<div class="card"><h3>${done ? '✅ ' : ''}${c.name}</h3>
        <p>费用${c.cost}元 · 需${c.days}天<br>${c.unlock.length ? '解锁旧时职业：' + c.unlock.join('、') : '提升技能等级'}</p>
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
    // 培训期间按天推进，自动吃喝（吃家里的存粮，或花钱买饭）
    for (let d = 0; d < c.days; d++) {
      LJ.Engine.advance(24);
      LJ.Survival.autoNourish(true);
      if (s.player.energy < 10) s.player.energy = 10;
    }
    if (!s.player.certs.includes(c.id)) s.player.certs.push(c.id);
    s.player.skills[c.skill] = (s.player.skills[c.skill] || 0) + 12;
    LJ.Engine.log(`结业！取得「${c.name}」证书，${LJ.catName(c.skill)}技能提升。`);
    LJ.Engine.toast(`🎓 取得证书：${c.name}`);
    LJ.Sys.save(); LJ.UI.renderAll();
  }

  /* —— 现代行政服务 —— */
  function renderService(content) {
    const s = LJ.Sys.state;
    content.appendChild(el(`<div class="panel-note">🪪 行政服务中心。办理护照等证件。</div>`));
    const box = el(`<div class="cards">
      <div class="card"><h3>${s.player.passport ? '✅' : ''} 中国护照</h3><p>${s.player.passport ? '已办理' : '出国必备。费用200元，办理约7天。'}</p>
        <div class="trade-ops"><button data-passport ${s.player.passport ? 'disabled' : ''}>${s.player.passport ? '已持有' : '办理'}</button></div></div>
    </div>`);
    $('button', box).addEventListener('click', () => {
      if (s.player.passport) return;
      if (s.money.modern.CNY < 200) { LJ.Engine.toast('费用不足。'); return; }
      s.money.modern.CNY -= 200;
      for (let d = 0; d < 7; d++) {
        LJ.Engine.advance(24);
        LJ.Survival.autoNourish(true);
        if (s.player.energy < 10) s.player.energy = 10;
      }
      s.player.passport = true;
      LJ.Engine.log('办理护照成功，耗时7天。');
      LJ.Engine.toast('🪪 护照已办好！可以出境了。');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    content.appendChild(box);
  }

  /* —— 旧时街道办 —— */
  function renderOffice(content) {
    const s = LJ.Sys.state;
    const p = s.player;
    content.appendChild(el(`<div class="panel-note">📋 街道办。1980年办事都要靠这里开证明。治安风险：${p.wanted}/100${p.wanted >= 80 ? ' ⚠️ 你已被盯上！' : ''}</div>`));

    const box = el(`<div class="cards">
      <div class="card"><h3>${p.introLetter ? '✅' : ''} 介绍信</h3><p>${p.introLetter ? '已持有，可全国乘车出差。' : (p.job || p.reputation >= 8) ? '你符合条件，可花2元开具。' : '需要先有一份单位挂靠（职业）或社会声望8+（靠做买卖积累）。'}</p>
        <div class="trade-ops"><button data-intro ${p.introLetter ? 'disabled' : ''} ${(p.job || p.reputation >= 8) ? '' : 'disabled'}>${p.introLetter ? '已开具' : '开具'}</button></div></div>
      <div class="card"><h3>${p.hkPermit ? '✅' : ''} 港澳通行证</h3><p>${p.hkPermit ? '已持有，可过罗湖去香港。' : '需担任「翻译员」职业，花3元办理。'}</p>
        <div class="trade-ops"><button data-hk ${p.hkPermit ? 'disabled' : ''} ${p.job && p.job.id === 'translator' ? '' : 'disabled'}>${p.hkPermit ? '已办理' : '办理'}</button></div></div>
    </div>`);
    $('button[data-intro]', box).addEventListener('click', () => {
      if (p.introLetter) return;
      if (!(p.job || p.reputation >= 8)) { LJ.Engine.toast('不符合条件。'); return; }
      if (s.money.old.CNY < 2) { LJ.Engine.toast('钱不够。'); return; }
      s.money.old.CNY -= 2;
      p.introLetter = true;
      LJ.Engine.advance(0.5);
      LJ.Engine.log('街道办开具了介绍信。你可以坐火车去外地了。');
      LJ.Engine.toast('📜 拿到介绍信！');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    $('button[data-hk]', box).addEventListener('click', () => {
      if (p.hkPermit) return;
      if (!(p.job && p.job.id === 'translator')) { LJ.Engine.toast('需要翻译员身份。'); return; }
      if (s.money.old.CNY < 3) { LJ.Engine.toast('钱不够。'); return; }
      s.money.old.CNY -= 3;
      p.hkPermit = true;
      LJ.Engine.advance(0.5);
      LJ.Engine.log('办理了港澳通行证，可赴香港。');
      LJ.Engine.toast('🛂 拿到港澳通行证！');
      LJ.Sys.save(); LJ.UI.renderAll();
    });
    content.appendChild(box);

    // 就业
    content.appendChild(el(`<h3 class="sub">就业 / 换工作</h3>`));
    const jobGrid = el(`<div class="cards">${LJ.Jobs.map((j) => {
      const has = p.job && p.job.id === j.id;
      const meet = j.need.every((n) => p.certs.includes(n));
      return `<div class="card"><h3>${has ? '✅' : ''}${j.name}</h3>
        <p>${j.desc}<br>月薪${j.salary}元 · 需要证书：${j.need.map((n) => LJ.catName(n)).join('、')}</p>
        <div class="trade-ops"><button data-job="${j.id}" ${has || !meet ? 'disabled' : ''}>${has ? '在任' : '就职'}</button>${has ? `<button data-quit="${j.id}">辞职</button>` : ''}</div></div>`;
    }).join('')}</div>`);
    $all('button', jobGrid).forEach((b) => {
      if (b.dataset.job) b.addEventListener('click', () => LJ.Career.takeJob(b.dataset.job));
      if (b.dataset.quit) b.addEventListener('click', () => LJ.Career.quitJob());
    });
    content.appendChild(jobGrid);
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
    LJ.Engine.log(`你成为「${j.name}」，月薪${j.salary}元。`);
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

  // 工资结算（按旧世界天数）
  function tickJob(world, n) {
    const s = LJ.Sys.state;
    if (world !== 'old' || !s.player.job) return;
    s.player.job.days += n;
    while (s.player.job.days >= 30) {
      s.player.job.days -= 30;
      s.money.old.CNY += s.player.job.salary;
      LJ.Engine.log(`领工资：${s.player.job.name} 月薪${s.player.job.salary}元。`);
    }
    LJ.Sys.save();
  }

  LJ.Career = { renderTraining, enroll, renderService, renderOffice, takeJob, quitJob, tickJob };
})();
