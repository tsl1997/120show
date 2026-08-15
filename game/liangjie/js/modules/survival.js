/* 两界搬运工 · 生存系统
 * 体力 / 饱腹 / 口渴 / 心情。
 * 人不仅会饿，更会渴——口渴的衰减比饥饿更快，缺水会迅速击垮你。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});
  const $ = LJ.UI.$, el = LJ.UI.el, $all = LJ.UI.$all;

  function curWallet() {
    const s = LJ.Sys.state;
    return s.world === 'modern' ? s.money.modern : s.money.old;
  }

  /* —— 睡觉 —— */
  function rest() {
    const s = LJ.Sys.state;
    if (s.player.energy >= 98) { LJ.Engine.toast('你精神饱满，还不困。'); return; }
    LJ.Engine.log('你沉沉睡去，一觉到天明。');
    LJ.Engine.toast('😴 睡了8小时，恢复了体力。');
    LJ.Engine.advance(8, {});
    s.player.energy = 100;
    s.player.spirit = LJ.Engine.clamp(s.player.spirit + 8, 0, 100);
    LJ.Sys.save();
    LJ.UI.renderAll();
  }

  /* —— 散步 —— */
  function stroll() {
    const s = LJ.Sys.state;
    if (s.player.energy < 4) { LJ.Engine.toast('太累了，走不动了。'); return; }
    LJ.Engine.advance(1, { energy: 4 });
    s.player.spirit = LJ.Engine.clamp(s.player.spirit + 15, 0, 100);
    LJ.Engine.log('你在附近散了散步，心情舒畅了些。');
    LJ.Engine.toast('🚶 散步回来，心情好多了。');
    LJ.Sys.save();
    LJ.UI.renderAll();
  }

  /* —— 使用背包物品 —— */
  function useItem(id) {
    const s = LJ.Sys.state;
    const def = LJ.Items[id];
    if (!def || !def.consume) { LJ.Engine.toast('这东西不能直接使用。'); return; }
    const slot = s.bag.find((x) => x.id === id);
    if (!slot || slot.qty < 1) { LJ.Engine.toast('背包里没有这件物品。'); return; }
    const c = def.consume;
    s.player.hunger = LJ.Engine.clamp(s.player.hunger + (c.hunger || 0), 0, 100);
    s.player.thirst = LJ.Engine.clamp(s.player.thirst + (c.thirst || 0), 0, 100);
    s.player.energy = LJ.Engine.clamp(s.player.energy + (c.energy || 0), 0, 100);
    s.player.spirit = LJ.Engine.clamp(s.player.spirit + (c.spirit || 0), 0, 100);
    slot.qty -= 1;
    if (slot.qty <= 0) s.bag = s.bag.filter((x) => x !== slot);
    LJ.Engine.advance(0.25);
    LJ.Engine.log(`你使用了「${def.name}」。`);
    LJ.Engine.toast(`🍽️ ${def.name}`);
    LJ.Sys.save();
    LJ.UI.renderAll();
  }

  // 自动补给：长途/培训期间自动吃喝（先吃家中/背包存粮，缺则花钱买水买粮）
  function removeOne(list, id) {
    const slot = list.find((x) => x.id === id);
    if (!slot) return false;
    slot.qty -= 1;
    if (slot.qty <= 0) { const i = list.indexOf(slot); list.splice(i, 1); }
    return true;
  }
  function autoNourish(autoBuy) {
    const s = LJ.Sys.state;
    const wallet = s.world === 'modern' ? s.money.modern : s.money.old;
    const clamp = LJ.Engine.clamp;
    const findFood = () => {
      let slot = s.home.find((x) => LJ.Items[x.id] && LJ.Items[x.id].consume && (LJ.Items[x.id].consume.hunger || 0) >= 15);
      if (slot) return slot;
      slot = s.bag.find((x) => LJ.Items[x.id] && LJ.Items[x.id].consume && (LJ.Items[x.id].consume.hunger || 0) >= 15);
      return slot;
    };
    const findDrink = () => {
      let slot = s.home.find((x) => LJ.Items[x.id] && LJ.Items[x.id].consume && (LJ.Items[x.id].consume.thirst || 0) >= 15);
      if (slot) return slot;
      slot = s.bag.find((x) => LJ.Items[x.id] && LJ.Items[x.id].consume && (LJ.Items[x.id].consume.thirst || 0) >= 15);
      return slot;
    };
    let acted = false;
    if (s.player.hunger < 55) {
      const slot = findFood();
      if (slot) {
        const c = LJ.Items[slot.id].consume;
        s.player.hunger = clamp(s.player.hunger + (c.hunger || 0), 0, 100);
        s.player.thirst = clamp(s.player.thirst + (c.thirst || 0), 0, 100);
        removeOne(s.home.includes(slot) ? s.home : s.bag, slot.id);
        acted = true;
      } else if (autoBuy && wallet.CNY >= 4) {
        wallet.CNY -= 4;
        s.player.hunger = clamp(s.player.hunger + 45, 0, 100);
        s.player.thirst = clamp(s.player.thirst + 8, 0, 100);
        acted = true;
      }
    }
    if (s.player.thirst < 60) {
      const slot = findDrink();
      if (slot) {
        const c = LJ.Items[slot.id].consume;
        s.player.thirst = clamp(s.player.thirst + (c.thirst || 0), 0, 100);
        removeOne(s.home.includes(slot) ? s.home : s.bag, slot.id);
        acted = true;
      } else if (autoBuy && wallet.CNY >= 2) {
        wallet.CNY -= 2;
        s.player.thirst = clamp(s.player.thirst + 38, 0, 100);
        acted = true;
      }
    }
    if (s.player.energy < 10) s.player.energy = 10;
    return acted;
  }

  /* —— 在家吃存粮/喝水 —— */
  function renderHomeEating(content) {
    const s = LJ.Sys.state;
    const list = s.home;
    content.appendChild(el(`<div class="panel-note">家里储存的食物与水。点击“使用”即可吃喝。也可以花小钱烧一壶白开水。</div>`));
    const freeWater = el(`<button class="primary">♨️ 烧一壶白开水（+口渴30）</button>`);
    freeWater.addEventListener('click', () => {
      s.player.thirst = LJ.Engine.clamp(s.player.thirst + 30, 0, 100);
      LJ.Engine.advance(0.5, {});
      LJ.Engine.log('你烧了一壶开水，咕咚咕咚喝了个痛快。');
      LJ.Engine.toast('♨️ 白开水下肚，人活过来了。');
      LJ.Sys.save();
      LJ.UI.renderAll();
    });
    content.appendChild(freeWater);

    const eatables = list.filter((x) => LJ.Items[x.id] && LJ.Items[x.id].consume);
    if (!eatables.length) {
      content.appendChild(el(`<div class="empty">家里没有可吃喝的东西。<br>去饭店或商店补充些食物和水吧。</div>`));
      return;
    }
    const grid = el(`<div class="cards">${eatables.map((x) => {
      const def = LJ.Items[x.id];
      return `<div class="card"><h3>${def.name} ×${x.qty}</h3><p>${def.desc}</p><div class="trade-ops"><button data-use="${x.id}">使用</button></div></div>`;
    }).join('')}</div>`);
    $all('button', grid).forEach((b) => b.addEventListener('click', () => LJ.Survival.useItem(b.dataset.use)));
    content.appendChild(grid);
  }

  /* —— 餐厅菜单 —— */
  function renderDining(content) {
    const s = LJ.Sys.state;
    const w = s.world;
    const city = LJ.Engine.currentCityDef().name;
    const meals = w === 'modern' ? MODERN_MEALS : OLD_MEALS;
    const wallet = curWallet();
    const unit = w === 'modern' ? '元' : '元';

    content.appendChild(el(`<div class="panel-note">${city}的餐馆。${w === 'old' ? '1980年的国营饭店，肉菜要肉票，但汤水解渴不贵。' : '2026年的馆子，丰俭由人。'}</div>`));

    const grid = el(`<div class="cards">${meals.map((m) => {
      const afford = wallet.CNY >= m.cost;
      return `<div class="card"><h3>${m.name}</h3><p>${m.desc}<br>价格：${m.cost}${unit}</p><div class="trade-ops"><button data-meal="${m.id}" ${afford ? '' : 'disabled'}>点餐</button></div></div>`;
    }).join('')}</div>`);

    $all('button', grid).forEach((b) => b.addEventListener('click', () => {
      const m = meals.find((x) => x.id === b.dataset.meal);
      if (!m) return;
      if (wallet.CNY < m.cost) { LJ.Engine.toast('钱不够。'); return; }
      wallet.CNY -= m.cost;
      s.player.hunger = LJ.Engine.clamp(s.player.hunger + (m.hunger || 0), 0, 100);
      s.player.thirst = LJ.Engine.clamp(s.player.thirst + (m.thirst || 0), 0, 100);
      s.player.spirit = LJ.Engine.clamp(s.player.spirit + (m.spirit || 0), 0, 100);
      LJ.Engine.advance(m.time || 0.5);
      LJ.Engine.log(`在${city}的餐馆吃了「${m.name}」，花了${m.cost}元。`);
      LJ.Engine.toast(`🍽️ ${m.name}`);
      LJ.Sys.save();
      LJ.UI.renderAll();
    }));

    content.appendChild(grid);
  }

  const MODERN_MEALS = [
    { id: 'm_plain', name: '白粥小菜', cost: 12, hunger: 30, thirst: 8, spirit: 4, time: 0.4, desc: '清粥一暖，人就有了底气。' },
    { id: 'm_worker', name: '工作餐（一荤一素一汤）', cost: 25, hunger: 52, thirst: 14, spirit: 8, time: 0.5, desc: '打工人的性价比之选。' },
    { id: 'm_business', name: '商务餐', cost: 88, hunger: 72, thirst: 20, spirit: 16, time: 0.9, desc: '精致体面，边吃边谈事。' },
    { id: 'm_water', name: '矿泉水 + 鲜榨果汁', cost: 10, hunger: 0, thirst: 55, spirit: 6, time: 0.2, desc: '专治口渴。' }
  ];
  const OLD_MEALS = [
    { id: 'o_tea', name: '大碗茶', cost: 0.05, hunger: 0, thirst: 30, spirit: 3, time: 0.1, desc: '5分钱一大碗，解渴消暑。' },
    { id: 'o_noodle', name: '大碗面', cost: 0.3, hunger: 45, thirst: 10, spirit: 5, time: 0.4, desc: '热汤面，几分钱的满足。' },
    { id: 'o_dumpling', name: '饺子（二两）', cost: 1, hunger: 55, thirst: 5, spirit: 8, time: 0.5, desc: '过年才舍得吃的奢侈。' },
    { id: 'o_pork', name: '红烧肉套餐', cost: 1.5, hunger: 65, thirst: 6, spirit: 12, time: 0.6, desc: '国营饭店的招牌硬菜，解馋。' },
    { id: 'o_soup', name: '蛋花汤', cost: 0.15, hunger: 6, thirst: 26, spirit: 4, time: 0.2, desc: '鲜香解渴。' }
  ];

  LJ.Survival = {
    rest, stroll, useItem, autoNourish, renderHomeEating, renderDining
  };
})();
