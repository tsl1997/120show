/* tools/browser_test.js — 真实 DOM 冒烟（jsdom）
 * 依赖：C:\JavaCode\HTML\blog.120.show\blog\node_modules\jsdom
 * 用法：node tools/browser_test.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const JSDOM = require('C:/JavaCode/HTML/blog.120.show/blog/node_modules/jsdom').JSDOM;
const VirtualConsole = require('C:/JavaCode/HTML/blog.120.show/blog/node_modules/jsdom').VirtualConsole;

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [
  'js/data_core.js',
  'js/data_acts/e01_05.js',
  'js/data_acts/e06_10.js',
  'js/data_acts/e11_15.js',
  'js/data_acts/e16_20.js',
  'js/data_acts/e21_25.js',
  'js/engine.js'
].map(f => fs.readFileSync(path.join(root, f), 'utf8'));

const errors = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => { errors.push('jsdomError: ' + e.message); });
vc.on('error', m => errors.push('console.error: ' + m));

const dom = new JSDOM(html, {
  runScripts: 'outside-only',
  url: 'file://' + root.replace(/\\/g, '/') + '/index.html',
  pretendToBeVisual: true,
  virtualConsole: vc
});
const { window } = dom;

// 注入 localStorage
window.localStorage = (function () { const m = {}; return {
  getItem: k => (k in m ? m[k] : null), setItem: (k, v) => { m[k] = String(v); },
  removeItem: k => { delete m[k]; }
};})();

// 关闭打字机动画的 setInterval，提升测试速度
window.setInterval = () => 0;
window.clearInterval = () => {};
window.requestAnimationFrame = fn => setTimeout(fn, 0);
window.cancelAnimationFrame = () => {};

scripts.forEach(s => {
  try { window.eval(s); } catch (e) { errors.push('script eval: ' + e.message); }
});

if (errors.length) { console.error('✗ 加载阶段错误:\n' + errors.join('\n')); process.exit(1); }
console.log('✓ 脚本加载无错误');

const doc = window.document;
const T = window.__SS_TEST__;
if (!T) { console.error('✗ 未找到测试钩子'); process.exit(1); }
if (typeof T.validate === 'function') T.validate();

// 通过真实 DOM 驱动
function click(el) { if (!el) return false; el.dispatchEvent(new window.MouseEvent('click', { bubbles: true })); return true; }
function clickText() { return click(doc.getElementById('story-area')); }
function clickOverlayBtn() { return click(doc.getElementById('ov-btn')); }

T.start();
let steps = 0; const MAX = 40000;
let last = '';
function readChoices() {
  const nodes = doc.querySelectorAll('#choices .choice');
  const out = [];
  for (let i = 0; i < nodes.length; i++) out.push({ el: nodes[i], text: nodes[i].textContent, disabled: !!nodes[i].disabled });
  return out;
}
(async () => {
  while (steps < MAX) {
    const st = T.status();
    const key = st.act + '/' + st.scene;
    if (key !== last) { last = key; console.log('  ▶ ' + key + ' vp=' + st.vp + ' star=' + st.star); }
    if (st.finished) break;
    if (T.overlay()) { clickOverlayBtn(); }
    else {
      const chs = readChoices();
      if (chs.length) {
        let idx = chs.findIndex(c => !c.disabled);
        if (idx < 0) idx = 0;
        chs[idx].el.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
      } else clickText();
    }
    await new Promise(r => setImmediate(r));
    steps++;
  }
  const st = T.status();
  if (st.finished) {
    console.log('✓ jsdom 全流程跑通！终局: ' + JSON.stringify(st));
    if (errors.length) { console.log('警告:\n' + errors.join('\n')); }
    process.exit(0);
  } else {
    console.error('✗ 未通关（' + MAX + '）。' + JSON.stringify(st));
    process.exit(1);
  }
})();
