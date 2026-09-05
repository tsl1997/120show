/* tools/check.js — 数据完整性校验（Node）
 * 用法：node tools/check.js
 * 校验：幕表注册、场景id唯一、跳转目标存在、图鉴id匹配等。
 */
'use strict';
const fs = require('fs');
const path = require('path');

global.SS = {};
global.window = global;
require(path.join(__dirname, '..', 'js', 'data_core.js'));
require(path.join(__dirname, '..', 'js', 'data_acts', 'e01_05.js'));
require(path.join(__dirname, '..', 'js', 'data_acts', 'e06_10.js'));
require(path.join(__dirname, '..', 'js', 'data_acts', 'e11_15.js'));
require(path.join(__dirname, '..', 'js', 'data_acts', 'e16_20.js'));
require(path.join(__dirname, '..', 'js', 'data_acts', 'e21_25.js'));

const SS = window.SS;

function isAct(id) { return (SS.ACT_CONFIG || []).some(a => a.id === id); }
function resolveSkill(nameOrId) {
  return (SS.SKILLS || []).find(s => s.id === nameOrId || s.name === nameOrId);
}
const errors = [];

// 幕表 vs 数据
const reg = {};
(SS.ACT_CONFIG || []).forEach(a => reg[a.id] = a);
for (const id of Object.keys(SS.ACTS || {})) {
  if (!reg[id]) errors.push('幕未注册: ' + id);
}

// 场景校验
for (const actId of Object.keys(SS.ACTS)) {
  const scenes = SS.ACTS[actId];
  const ids = {};
  scenes.forEach(sc => {
    if (ids[sc.id]) errors.push(actId + ' 重复场景id ' + sc.id);
    ids[sc.id] = 1;
    if (!sc.lines || !sc.lines.length) errors.push(actId + '/' + sc.id + ' 无对白');
    const exits = (sc.choices && sc.choices.length) || sc.then;
    if (!exits) errors.push(actId + '/' + sc.id + ' 无出口');
    (sc.choices || []).forEach((c, i) => {
      const okGoto = c.goto === 'THE_END' || isAct(c.goto) || scenes.some(s => s.id === c.goto);
      if (c.goto && !okGoto)
        errors.push(actId + '/' + sc.id + ' choice' + i + ' goto 不存在 ' + c.goto);
      if (c.effect) checkEffects(actId, sc.id, c.effect);
    });
    if (sc.effect) checkEffects(actId, sc.id, sc.effect);
    if (sc.then && sc.then !== 'THE_END' && !isAct(sc.then) && !scenes.some(s => s.id === sc.then))
      errors.push(actId + '/' + sc.id + ' then 不存在 ' + sc.then);
  });
}

function checkEffects(actId, scId, fx) {
  if (!Array.isArray(fx)) return;
  fx.forEach(e => {
    if (!Array.isArray(e)) return;
    const op = e[0];
    const goodIds = new Set((SS.GOODS || []).map(g => g.id));
    const charIds = new Set((SS.CHARS || []).map(c => c.id));
    const achIds = new Set((SS.ACHIEVES || []).map(a => a.id));
    const skillIds = new Set((SS.SKILLS || []).map(s => s.id));
    const memIds = new Set((SS.MEMS || []).map(m => m.id));
    if (op === 'item' && !goodIds.has(e[2])) errors.push(actId + '/' + scId + ' item 不存在 ' + e[2]);
    if (op === 'skill' && !resolveSkill(e[1])) errors.push(actId + '/' + scId + ' skill 不存在 ' + e[1]);
    if (op === 'look' && e[1] === '顾客' && !charIds.has(e[2])) errors.push(actId + '/' + scId + ' 图鉴角色不存在 ' + e[2]);
    if (op === 'look' && e[1] === '世界' && !SS.WORLDS[e[2]]) errors.push(actId + '/' + scId + ' 图鉴世界不存在 ' + e[2]);
    if (op === 'look' && e[1] === '名场' && !memIds.has(e[2])) errors.push(actId + '/' + scId + ' 名场面不存在 ' + e[2]);
    if (op === 'ach' && !achIds.has(e[2])) errors.push(actId + '/' + scId + ' 成就不存在 ' + e[2]);
  });
}

// 商品/顾客/顾客解锁
(SS.CUSTOMERS || []).forEach(c => {
  if (c.unlockAct && !reg[c.unlockAct]) errors.push('顾客解锁幕不存在 ' + c.unlockAct);
});

if (errors.length) {
  console.log('✗ 校验失败 ' + errors.length + ' 条：');
  errors.forEach(e => console.log('  - ' + e));
  process.exit(1);
} else {
  const totalScenes = Object.values(SS.ACTS).reduce((n, s) => n + s.length, 0);
  console.log('✓ 校验通过');
  console.log('  幕数: ' + Object.keys(SS.ACTS).length);
  console.log('  场景总数: ' + totalScenes);
  console.log('  商品: ' + SS.GOODS.length + ' | 顾客: ' + SS.CUSTOMERS.length + ' | 角色图鉴: ' + SS.CHARS.length + ' | 武功: ' + SS.SKILLS.length + ' | 成就: ' + SS.ACHIEVES.length);
}
