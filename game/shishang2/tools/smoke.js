/* tools/smoke.js — 无头冒烟测试（Node）
 * 用最小 DOM 桩驱动引擎，把全部 23 幕自动跑一遍：
 *   每步 advance()，出现选择则选第一个可用项，出现过场则点击确认。
 * 用法：node tools/smoke.js
 */
'use strict';
const path = require('path');
const root = path.join(__dirname, '..');

/* ---------- 最小 DOM 桩 ---------- */
function makeEl(id) {
  const el = {
    id: id, _children: [], _handlers: {}, _label: undefined,
    textContent: '', scrollTop: 0, scrollHeight: 0,
    disabled: false, className: '',
    classList: {
      _s: {},
      add: function (c) { this._s[c] = 1; },
      remove: function (c) { delete this._s[c]; },
      toggle: function (c, f) { if (f === undefined) f = !this._s[c]; if (f) this._s[c] = 1; else delete this._s[c]; return !!f; },
      contains: function (c) { return !!this._s[c]; }
    },
    setAttribute: function (k, v) { this[k] = v; },
    addEventListener: function (t, fn) { this._handlers[t] = fn; },
    appendChild: function (ch) { this._children.push(ch); return ch; },
    querySelector: function () { return null; },
    querySelectorAll: function () { return []; },
    _emit: function (t, ev) { if (this._handlers[t]) this._handlers[t](ev || { target: this, preventDefault: function () {} }); }
  };
  Object.defineProperty(el, 'innerHTML', {
    get: function () { return this._html || ''; },
    set: function (v) { this._html = v; this._children.length = 0; }
  });
  return el;
}
const byId = {};
global.document = {
  getElementById: function (id) { if (!byId[id]) byId[id] = makeEl(id); return byId[id]; },
  createElement: function () { return makeEl(); },
  querySelectorAll: function () { return []; },
  addEventListener: function () {}
};
global.window = global;
global.SS = global.SS || {};
global.addEventListener = function () {};

/* ---------- 加载 ---------- */
require(path.join(root, 'js', 'data_core.js'));
require(path.join(root, 'js', 'data_acts', 'e01_05.js'));
require(path.join(root, 'js', 'data_acts', 'e06_10.js'));
require(path.join(root, 'js', 'data_acts', 'e11_15.js'));
require(path.join(root, 'js', 'data_acts', 'e16_20.js'));
require(path.join(root, 'js', 'data_acts', 'e21_25.js'));
require(path.join(root, 'js', 'engine.js'));

const tick = () => new Promise(r => setImmediate(r));
const T = window.__SS_TEST__;

async function main() {
  T.start();
  let steps = 0, MAX = 60000;
  let act = '', scene = '';
  while (steps < MAX) {
    const s = T.status();
    if (s.finished) break;
    if (s.act !== act || s.scene !== scene) {
      act = s.act; scene = s.scene;
      console.log('  ▶ 幕 ' + s.act + ' · 场景 ' + s.scene + '  (价值点=' + s.vp + ' 武道=' + s.wb + ' 星=' + s.star + ')');
    }
    if (T.overlay()) { T.confirm(); await tick(); steps++; continue; }
    if (steps > 0 && steps % 1000 === 0) console.log('      [step' + steps + '] dbg=' + JSON.stringify(T.debug()) + ' chs=' + T.choices().length + ' raw=' + JSON.stringify(T.choicesRaw()));
    const chs = T.choices();
    if (chs.length) {
      let idx = -1;
      for (let i = 0; i < chs.length; i++) if (!chs[i].disabled) { idx = i; break; }
      if (idx === -1) idx = 0;
      if (steps % 500 === 0) console.log('      [step' + steps + '] 选择项: ' + JSON.stringify(chs.map(c => c.text.slice(0, 12))));
      try { T.choose(idx); } catch (e) { console.error('      ✗ choose 异常: ' + e.message + '\n' + e.stack.split('\n').slice(0, 4).join('\n')); process.exit(1); }
      await tick();
      steps++;
      continue;
    }
    try { T.step(); } catch (e) { console.error('✗ step 异常: ' + e.message + '\n' + e.stack.split('\n').slice(0, 4).join('\n')); process.exit(1); }
    await tick();
    steps++;
  }
  const s = T.status();
  if (s.finished) {
    console.log('✓ 全流程跑通！');
    console.log('  终局：' + JSON.stringify(s));
  } else {
    console.error('✗ 未通关（步骤上限 ' + MAX + '）。当前：' + JSON.stringify(s));
    process.exit(1);
  }
}

main().catch(e => { console.error('✗ 异常：', e); process.exit(1); });
