'use strict';
/* ================= 环游中国·图鉴之旅 =================
 * 主角出生武汉，首次旅游时觉醒"旅行图鉴系统"。
 * 三大图鉴：景点打卡 / 特色周边 / 奇闻趣事。
 * 点亮图鉴获得旅行基金，攒钱去下一座城市；出国需护照+签证。
 * ===================================================== */

/* ---------- 数据合并 ---------- */
const CITIES = (window.TRAVEL_CITIES || []).slice();
const CITY_BY_ID = {};
CITIES.forEach(c => { CITY_BY_ID[c.id] = c; });

/* ---------- 系列收藏（动漫/特摄/全球主题） ---------- */
const SERIES = (window.TRAVEL_SERIES || []).slice();
const SERIES_BY_ID = {};
const CITY_SERIES = {};
const SERIES_TYPE_ICON = { '手办模型': '🧸', '徽章谷子': '🎖️', '服饰包箱': '🎒', '毛绒公仔': '🧸', '生活数码联名': '📱', '球星卡': '🃏', '诗句卡': '📜', '城印章': '🖌️', '美妆': '💄', '奢侈品': '👑' };
const SERIES_CAT_ICON = { anime: '📺', tokusatsu: '🦸', usa: '🗽', china: '📜', beauty: '💄', luxury: '👑' };
SERIES.forEach(sr => {
  SERIES_BY_ID[sr.id] = sr;
  (sr.items || []).forEach(it => {
    it.seriesId = sr.id;
    it.kind = 'series';
    it.icon = it.icon || SERIES_TYPE_ICON[it.type] || '⭐';
    (CITY_SERIES[it.city] = CITY_SERIES[it.city] || []).push(it);
  });
});
function seriesItemsOf(city) { return CITY_SERIES[city.id] || []; }

/* ---------- 经济参数（图鉴奖励 = 现实花销 × 返还率，刚好支撑下一段旅程） ---------- */
const ECON = {
  START_MONEY: 500,          // 初始旅行基金
  PASSPORT_COST: 120,        // 护照工本费（现实：120元）
  RATES:  { cn: { spot: 3.0, souvenir: 3.0 }, foreign: { spot: 3.5, souvenir: 3.5 } },
  MIN_R:  { cn: { spot: 50, souvenir: 50, story: 50 }, foreign: { spot: 80, souvenir: 80, story: 80 } },
  STORY_R: { cn: 50, foreign: 80 },       // 奇闻趣事固定奖励
  CITY_BONUS: { cn: 300, foreign: 600 },  // 城市全收集奖金
};
const FOREIGN_TAG = '✈️出境';

/* ---------- 存档 ---------- */
const SAVE_KEY = 'travel_book_game_v1';
function defaultState() {
  return {
    money: ECON.START_MONEY,
    city: 'wuhan',
    passport: false,
    visas: {},            // { JP: true, ... }
    collected: {},        // { itemId: {k:'spot'|'souvenir'|'story'} }
    visited: ['wuhan'],
    cityBonus: {},        // 已领取全收集奖金的城市
    seenIntro: false,
    subTab: 'spot',
    mapMode: 'china',
    mapRegion: null,
    mapContinent: null,
    mapCountry: null,
    bookTab: 'spot',
    bookOpen: {},         // 图鉴手风琴展开状态
  };
}
let S = load();
function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return defaultState();
    const st = JSON.parse(raw);
    return Object.assign(defaultState(), st);
  } catch (e) { return defaultState(); }
}
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) {} }

/* ---------- 工具 ---------- */
const $ = sel => document.querySelector(sel);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const fmtMoney = n => {
  const v = Math.round(n * 10) / 10;
  return '¥' + (Number.isInteger(v) ? v : v.toFixed(1));
};
function isForeign(city) { return city.cc !== 'CN'; }
function cityItems(city, kind) { if (kind === 'series') return seriesItemsOf(city); return (city[kind === 'story' ? 'stories' : kind + 's'] || []); }
function itemKindId(kind, itemId) { return itemId; }

function rewardOf(city, kind, item) {
  const f = isForeign(city) ? 'foreign' : 'cn';
  if (kind === 'story') return ECON.STORY_R[f];
  if (kind === 'series') kind = 'souvenir';
  const price = Math.max(0, +item.price || 0);
  return Math.max(ECON.MIN_R[f][kind], Math.round(price * ECON.RATES[f][kind]));
}
function cityStat(city) {
  let total = 0, got = 0;
  ['spot', 'souvenir', 'story'].forEach(k => {
    cityItems(city, k).forEach(it => { total++; if (S.collected[it.id]) got++; });
  });
  seriesItemsOf(city).forEach(it => { total++; if (S.collected[it.id]) got++; });
  return { got, total };
}
function allStat() {
  let total = 0, got = 0;
  CITIES.forEach(c => { const s = cityStat(c); total += s.total; got += s.got; });
  return { got, total };
}
function bagItems() {
  const out = [];
  CITIES.forEach(c => cityItems(c, 'souvenir').forEach(it => { if (S.collected[it.id]) out.push({ city: c, it }); }));
  SERIES.forEach(sr => sr.items.forEach(it => { if (S.collected[it.id]) out.push({ city: CITY_BY_ID[it.city] || sr.items[0] && { name: '系列收藏', flag: '🌟' }, it }); }));
  return out;
}
function hasVisa(city) {
  if (!isForeign(city)) return true;
  if (city.visa && city.visa.cost === 0) return true;  // 免签
  return !!S.visas[city.cc];
}

/* ---------- Toast / Modal ---------- */
function toast(html, cls) {
  const el = document.createElement('div');
  el.className = 'toast ' + (cls || '');
  el.innerHTML = html;
  $('#toast-wrap').appendChild(el);
  setTimeout(() => el.remove(), 2800);
}
function showModal(html) { $('#modal-wrap').innerHTML = '<div class="modal-box">' + html + '</div>'; $('#modal-wrap').classList.remove('hidden'); }
function closeModal() { $('#modal-wrap').classList.add('hidden'); $('#modal-wrap').innerHTML = ''; }
$('#modal-wrap').addEventListener('click', e => { if (e.target.id === 'modal-wrap') closeModal(); });

/* ---------- HUD ---------- */
function renderHUD() {
  $('#hud-money').textContent = fmtMoney(S.money);
  const c = CITY_BY_ID[S.city] || CITIES[0];
  $('#hud-city').textContent = c ? c.name : '—';
  const a = allStat();
  $('#hud-progress').textContent = a.got + '/' + a.total;
}

/* ================= 视图：本城 ================= */
const KIND_META = {
  spot:     { tab: 'spot',     label: '景点打卡', btn: '打卡', icon: '📍' },
  souvenir: { tab: 'souvenir', label: '特色周边', btn: '买下', icon: '🛍️' },
  story:    { tab: 'story',    label: '奇闻趣事', btn: '听闻', icon: '💬' },
  series:   { tab: 'series',   label: '系列收藏', btn: '收藏', icon: '🌟' },
};
function renderCity() {
  const c = CITY_BY_ID[S.city];
  const LB = c.labels || {};
  const LBof = (k, f) => (LB[k] != null ? LB[k] : f);
  if (!c) { $('#view').innerHTML = '<div class="bag-empty">数据未加载，请检查 data 文件。</div>'; return; }
  const st = cityStat(c);
  const done = st.got === st.total && st.total > 0;
  const foreign = isForeign(c);
  let html = `
  <div class="city-hero" data-emoji="${c.hero || '🏙️'}">
    <h2>${c.flag} ${esc(c.name)} <span style="font-size:13px;opacity:.85">${c.world === 'isekai' ? '🌌 异世界副本' : foreign ? FOREIGN_TAG : '国内'}</span></h2>
    <div class="city-meta">${esc(c.country)} · ${esc(({ 'isekai_anime': '日本动漫世界', 'isekai_wuxia': '武侠小说世界', 'isekai_xuanhuan': '玄幻小说世界' })[c.region] || c.region)} · 已到访</div>
    <p>${esc(c.desc)}</p>
    <div class="city-progress">
      <span>${st.got}/${st.total}</span>
      <div class="pbar"><i style="width:${st.total ? (st.got / st.total * 100) : 0}%"></i></div>
      ${done ? '<span class="city-done-badge">🏆全收集</span>' : ''}
    </div>
  </div>
  <div class="sub-tabs">
    ${['spot', 'souvenir', 'story', 'series'].map(k => {
      const list = cityItems(c, k);
      const g = list.filter(i => S.collected[i.id]).length;
      return `<button class="sub-tab ${S.subTab === k ? 'active' : ''}" data-subtab="${k}">${KIND_META[k].icon} ${LBof(k + 'L', KIND_META[k].label)}<span class="cnt">${g}/${list.length} 已点亮</span></button>`;
    }).join('')}
  </div>
  <div class="item-list">`;
  const kind = S.subTab;
  cityItems(c, kind).forEach(it => {
    const got = !!S.collected[it.id];
    const rw = rewardOf(c, kind, it);
    const price = +it.price || 0;
    const sr = kind === 'series' ? SERIES_BY_ID[it.seriesId] : null;
    const tag = kind === 'spot' ? '游' : kind === 'story' ? '闻' : kind === 'series' ? '藏' : it.tag;
    const type = kind === 'spot' ? '景点' : kind === 'story' ? '趣闻' : kind === 'series' ? (it.type || '收藏') : (it.type || '周边');
    html += `
    <div class="item-card ${got ? '' : 'locked'}">
      ${got ? '<span class="collected-mark">✨</span>' : ''}
      <div class="item-head">
        <div class="item-icon">${it.icon}</div>
        <div style="flex:1">
          <div class="item-name">${esc(it.name)}${sr ? `<span style="font-size:10px;color:var(--gold)">　${esc(sr.name)}</span>` : ""}</div>
          <div class="item-tags"><span class="tagchip t-${tag}">${tag}</span><span class="tagchip">${esc(type)}</span></div>
        </div>
        <div class="item-price ${price ? '' : 'free'}">${price ? fmtMoney(price) : '免费'}</div>
      </div>
      <div class="item-desc">${got ? esc(it.desc) : '？？？（收集后解锁介绍）'}</div>
      <div class="item-foot">
        ${got
          ? '<button class="btn-do done-btn">✓ 已入图鉴</button>'
          : `<button class="btn-do" data-act="collect" data-kind="${kind}" data-item="${it.id}">${LBof(kind + 'B', KIND_META[kind].btn)}${price ? ' ' + fmtMoney(price) : ''}</button>
             <span class="reward-hint">${rw}</span>`}
      </div>
    </div>`;
  });
  html += '</div>';
  $('#view').innerHTML = html;
}

/* ================= 视图：世界地图（分层：中国/世界） ================= */
const CHINA_REGIONS = [
  ['🏙️', '华中', '武汉·荆州·襄阳·洛阳·长沙'],
  ['🗼', '华北', '北京·天津·承德·大同·平遥'],
  ['❄️', '东北', '哈尔滨·沈阳·大连·长春·漠河'],
  ['🏜️', '西北', '西安·兰州·敦煌·银川·乌鲁木齐·喀什'],
  ['🐎', '塞北', '呼和浩特·呼伦贝尔'],
  ['🌉', '华东', '上海·南京·苏州·扬州·杭州·绍兴·黄山·景德镇·青岛·泰安'],
  ['⛵', '东南', '厦门·泉州'],
  ['🌴', '华南', '广州·深圳·三亚·桂林'],
  ['🐼', '西南', '成都·重庆·乐山·贵阳·丽江·西双版纳'],
  ['🏔️', '青藏', '拉萨·西宁'],
  ['🎡', '港澳台', '香港·澳门·台北'],
];
const CONTINENT_META = [
  ['🏯', 'asia', '亚洲', '东亚·东南亚·南亚·中东'],
  ['🏰', 'europe', '欧洲', '西欧·南欧·北欧·东欧'],
  ['🦁', 'africa', '非洲', '北非·东非·南部非洲'],
  ['🗽', 'namerica', '北美洲', '美国·加拿大·墨西哥·古巴'],
  ['🌴', 'samerica', '南美洲', '巴西·阿根廷·秘鲁·智利'],
  ['🦘', 'oceania', '大洋洲', '澳大利亚·新西兰·太平洋岛屿'],
  ['🐧', 'antarctica', '南极洲', '极地探险终点'],
];
const COUNTRY_CONT = {
  '中国': 'china',
  '日本': 'asia', '韩国': 'asia', '泰国': 'asia', '新加坡': 'asia', '马来西亚': 'asia', '印度尼西亚': 'asia', '越南': 'asia', '菲律宾': 'asia', '印度': 'asia', '尼泊尔': 'asia', '斯里兰卡': 'asia', '马尔代夫': 'asia', '阿联酋': 'asia', '沙特阿拉伯': 'asia', '以色列': 'asia', '约旦': 'asia', '土耳其': 'asia', '蒙古': 'asia', '乌兹别克斯坦': 'asia', '柬埔寨': 'asia',
  '法国': 'europe', '英国': 'europe', '意大利': 'europe', '西班牙': 'europe', '德国': 'europe', '俄罗斯': 'europe', '葡萄牙': 'europe', '荷兰': 'europe', '希腊': 'europe', '奥地利': 'europe', '瑞士': 'europe', '匈牙利': 'europe', '捷克': 'europe', '挪威': 'europe', '芬兰': 'europe', '丹麦': 'europe', '冰岛': 'europe', '爱尔兰': 'europe', '比利时': 'europe', '波兰': 'europe', '克罗地亚': 'europe', '瑞典': 'europe',
  '埃及': 'africa', '南非': 'africa', '肯尼亚': 'africa', '摩洛哥': 'africa', '赞比亚': 'africa', '坦桑尼亚': 'africa', '突尼斯': 'africa', '塞舌尔': 'africa', '毛里求斯': 'africa', '埃塞俄比亚': 'africa',
  '美国': 'namerica', '加拿大': 'namerica', '墨西哥': 'namerica', '古巴': 'namerica',
  '巴西': 'samerica', '阿根廷': 'samerica', '秘鲁': 'samerica', '智利': 'samerica', '哥伦比亚': 'samerica', '厄瓜多尔': 'samerica', '玻利维亚': 'samerica',
  '澳大利亚': 'oceania', '新西兰': 'oceania', '斐济': 'oceania', '法属波利尼西亚': 'oceania',
  '南极洲': 'antarctica',
};
function continentOf(city) {
  if (city.world === 'isekai') return 'isekai';
  if (city.cc === 'CN') return 'china';
  return COUNTRY_CONT[city.country] || 'asia';
}
function crumbBtn(label, act, val) {
  return '<button class="travel-chip" data-mapact="' + act + '" ' + (val ? 'data-mapval="' + val + '"' : '') + '>' + label + '</button>';
}
function renderCityCards(cities) {
  let html = '<div class="map-grid">';
  cities.forEach(c => {
    const st = cityStat(c);
    const here = S.city === c.id;
    const visited = S.visited.includes(c.id);
    const foreign = isForeign(c);
    const visaOk = hasVisa(c);
    html += `
    <div class="city-card ${here ? 'here' : ''}">
      <div class="cc-head">
        <span class="cc-flag">${c.flag}</span>
        <div>
          <div class="cc-name">${esc(c.name)}</div>
          <div class="cc-region">${esc(c.province || c.region)}${c.province ? ' · ' + esc(c.region) : ''}${visited && !here ? ' · 已去过' : ''}</div>
        </div>
        <span class="cc-progress" style="margin-left:auto">${st.got}/${st.total}</span>
      </div>
      <div class="cc-desc">${esc(c.desc)}</div>
      ${here ? '<div class="here-chip">📍 你现在就在这里</div>' : `
        <div class="cc-travels">
          ${(c.travel || []).map((t, i) =>
            `<button class="travel-chip" data-act="go" data-city="${c.id}" data-t="${i}" ${!visaOk ? 'disabled' : ''}>${t.icon} ${esc(t.name)} ${fmtMoney(t.cost)}</button>`).join('')}
        </div>`}
      ${foreign && !here ? `<div class="visa-note ${visaOk ? 'ok' : ''}">${visaOk ? '🛂 ' + (c.visa && c.visa.cost === 0 ? esc(c.visa.note || '免签') : '签证已办理') : '🛂 需要签证（去事务所办理）'}</div>` : ''}
    </div>`;
  });
  return html + '</div>';
}
function renderMap() {
  const v = $('#view');
  let html = `<div class="sub-tabs">
    <button class="sub-tab ${S.mapMode !== 'world' && S.mapMode !== 'isekai' ? 'active' : ''}" data-mapmode="china">🇨🇳 中国地图</button>
    <button class="sub-tab ${S.mapMode === 'world' ? 'active' : ''}" data-mapmode="world">🌍 世界地图</button>
    <button class="sub-tab ${S.mapMode === 'isekai' ? 'active' : ''}" data-mapmode="isekai">🌌 异世界</button>
  </div>`;
  if (S.mapMode === 'isekai') {
    // ---- 异世界：三类作品副本 ----
    const worlds = [
      ['📺', 'isekai_anime', '日本动漫世界', '走入漫画与动画的舞台：米花町、贝克街、无限列车……'],
      ['⚔️', 'isekai_wuxia', '武侠小说世界', '飞雪连天射白鹿，笑书神侠倚碧鸳。江湖路远，秘籍无双。'],
      ['🐉', 'isekai_xuanhuan', '玄幻小说世界', '九龙拉棺启程，北斗星域争锋。仙路尽头谁为峰？'],
    ];
    html += `<div class="office-note">🌌 图鉴系统觉醒后可开启"穿越之门"，进入故事的世界。每个作品都是一座"副本地图"，景点·宝物·人物远超现实城市。</div>`;
    if (!S.mapRegion) {
      html += '<div class="map-grid">';
      worlds.forEach(([icon, key, name, sub]) => {
        const list = CITIES.filter(c => c.world === 'isekai' && c.region === key);
        const got = list.reduce((a, c) => a + cityStat(c).got, 0);
        const tot = list.reduce((a, c) => a + cityStat(c).total, 0);
        html += '<div class="city-card" data-mapact="region" data-mapval="' + key + '" style="cursor:pointer"><div class="cc-head"><span class="cc-flag">' + icon + '</span><div><div class="cc-name">' + name + '</div><div class="cc-region">' + list.length + ' 个作品副本</div></div><span class="cc-progress" style="margin-left:auto">' + got + '/' + tot + '</span></div><div class="cc-desc">' + esc(sub) + '</div></div>';
      });
      html += '</div>';
    } else {
      const wmeta = worlds.find(w => w[1] === S.mapRegion) || ['', ''];
      html += '<div class="map-group-title">' + crumbBtn('🌌 异世界', 'region', '') + ' ' + wmeta[0] + ' ' + wmeta[2] + '</div>';
      html += renderCityCards(CITIES.filter(c => c.world === 'isekai' && c.region === S.mapRegion));
    }
    v.innerHTML = html;
    return;
  }
  if (S.mapMode !== 'world') {
    html += `<div class="office-note">🇨🇳 按区域划分。点击区域，查看里面的城市。</div>`;
    if (!S.mapRegion) {
      html += '<div class="map-grid">';
      CHINA_REGIONS.forEach(([icon, name, cities]) => {
        const list = CITIES.filter(c => c.cc === 'CN' && c.region === name);
        const got = list.reduce((a, c) => a + cityStat(c).got, 0);
        const tot = list.reduce((a, c) => a + cityStat(c).total, 0);
        html += '<div class="city-card" data-mapact="region" data-mapval="' + name + '" style="cursor:pointer"><div class="cc-head"><span class="cc-flag">' + icon + '</span><div><div class="cc-name">' + name + '</div><div class="cc-region">' + list.length + ' 座城市</div></div><span class="cc-progress" style="margin-left:auto">' + got + '/' + tot + '</span></div><div class="cc-desc">' + esc(cities) + '</div></div>';
      });
      html += '</div>';
    } else {
      const meta = CHINA_REGIONS.find(r => r[1] === S.mapRegion) || ['', ''];
      html += '<div class="map-group-title">' + crumbBtn('🏠 中国地图', 'region', '') + ' ' + meta[0] + ' ' + esc(S.mapRegion) + '</div>';
      html += renderCityCards(CITIES.filter(c => c.cc === 'CN' && c.region === S.mapRegion));
    }
  } else {
    const cont = S.mapContinent ? CONTINENT_META.find(m => m[1] === S.mapContinent) : null;
    if (!cont) {
      html += '<div class="office-note">🌍 按七大洲划分国家与城市。多个国家的城市总和，远比任何一个国家都多——这就是世界。</div><div class="map-grid">';
      CONTINENT_META.forEach(([icon, key, name, sub]) => {
        const list = CITIES.filter(c => continentOf(c) === key);
        const countries = new Set(list.map(c => c.country)).size;
        const got = list.reduce((a, c) => a + cityStat(c).got, 0);
        const tot = list.reduce((a, c) => a + cityStat(c).total, 0);
        html += '<div class="city-card" data-mapact="continent" data-mapval="' + key + '" style="cursor:pointer"><div class="cc-head"><span class="cc-flag">' + icon + '</span><div><div class="cc-name">' + name + '</div><div class="cc-region">' + countries + ' 个国家 · ' + list.length + ' 城</div></div><span class="cc-progress" style="margin-left:auto">' + got + '/' + tot + '</span></div><div class="cc-desc">' + esc(sub) + '</div></div>';
      });
      html += '</div>';
    } else {
      const all = CITIES.filter(c => continentOf(c) === cont[1]);
      if (!S.mapCountry) {
        html += '<div class="map-group-title">' + crumbBtn('🌍 世界地图', 'continent', '') + ' ' + cont[0] + ' ' + cont[2] + '</div>';
        const byCountry = {};
        all.forEach(c => (byCountry[c.country] = byCountry[c.country] || []).push(c));
        html += '<div class="map-grid">';
        Object.keys(byCountry).sort((a, b) => byCountry[b].length - byCountry[a].length).forEach(cn => {
          const list = byCountry[cn];
          const got = list.reduce((a, c) => a + cityStat(c).got, 0);
          const tot = list.reduce((a, c) => a + cityStat(c).total, 0);
          const flag = list[0].flag;
          html += '<div class="city-card" data-mapact="country" data-mapval="' + esc(cn) + '" style="cursor:pointer"><div class="cc-head"><span class="cc-flag">' + flag + '</span><div><div class="cc-name">' + esc(cn) + '</div><div class="cc-region">' + list.length + ' 座城市</div></div><span class="cc-progress" style="margin-left:auto">' + got + '/' + tot + '</span></div><div class="cc-desc">' + esc([...new Set(list.map(c => c.region))].join(' · ')) + '</div></div>';
        });
        html += '</div>';
      } else {
        const list = all.filter(c => c.country === S.mapCountry);
        const subRegions = [...new Set(list.map(c => c.region))];
        html += '<div class="map-group-title">' + crumbBtn('🌍 世界', 'continent', '') + ' ' + crumbBtn(cont[0] + ' ' + esc(cont[2]), 'country', '') + ' ' + list[0].flag + ' ' + esc(S.mapCountry) + '</div>';
        if (subRegions.length > 1) {
          subRegions.forEach(sr => {
            html += '<div class="map-group-title">' + esc(sr) + '（' + list.filter(c => c.region === sr).length + ' 城）</div>';
            html += renderCityCards(list.filter(c => c.region === sr));
          });
        } else {
          html += renderCityCards(list);
        }
      }
    }
  }
  v.innerHTML = html;
}
function handleMapAct(t) {
  const act = t.dataset.mapact, val = t.dataset.mapval;
  if (act === 'region') { S.mapRegion = val || null; }
  else if (act === 'continent') { S.mapContinent = val || null; S.mapCountry = null; }
  else if (act === 'country') { S.mapCountry = val || null; }
  save(); renderMap();
}
/* ---- 系列收藏图鉴 ---- */
function renderSeriesBook() {
  let html = '<div class="office-note">🌟 主题系列收藏：动漫、特摄、球星卡、古诗词、美妆与奢侈品。每个系列收集全部物品可点亮 🏆。</div>';
  const cats = [['anime', '📺 日本动漫'], ['tokusatsu', '🦸 日本特摄剧'], ['usa', '🗽 美国流行'], ['china', '📜 中国文脉'], ['beauty', '💄 日韩美妆'], ['luxury', '👑 法国奢侈品']];
  cats.forEach(([cat, label]) => {
    const list = SERIES.filter(x => x.cat === cat);
    if (!list.length) return;
    html += `<div class="map-group-title">${label}（${list.length} 个系列）</div>`;
    list.forEach(sr => {
      const got = sr.items.filter(i => S.collected[i.id]).length;
      const open = !!S.bookOpen[sr.id];
      html += `
      <div class="book-city ${open ? 'open' : ''}">
        <div class="book-city-head" data-act="toggleBook" data-city="${sr.id}" data-kind="series">
          <span>${SERIES_CAT_ICON[sr.cat] || '⭐'}</span><h4>${esc(sr.name)}</h4>
          <span class="bprog">${got}/${sr.items.length}${got === sr.items.length ? ' 🏆' : ''}</span>
          <span class="arrow">▶</span>
        </div>
        <div class="book-city-body">
          <div style="font-size:12px;color:var(--ink2);line-height:1.7;padding:8px 4px">
            <b>${esc(sr.years)} · ${esc(sr.author)}</b>　主题：${esc(sr.theme)}<br>
            主角：${esc(sr.protagonist)}　<sapn style="color:var(--gold)">「${esc(sr.slogan)}」</sapn><br>
            ${esc(sr.background)}<br>${esc(sr.story)}
          </div>
          <div class="bk-grid">`;
      sr.items.forEach(it => {
        const got2 = !!S.collected[it.id];
        html += '<div class="bk-cell ' + (got2 ? 'got' : '') + '"><span class="bk-ico">' + (got2 ? it.icon : '❓') + '</span><span class="bk-name">' + (got2 ? esc(it.name) : '<span class="bk-unknown">？？？？</span>') + '</span><span class="bk-sub">' + (got2 ? esc((CITY_BY_ID[it.city] || {}).name || '') + ' · ' + esc(it.type) : '尚未收集') + '</span></div>';
      });
      html += '</div></div></div>';
    });
  });
  return html;
}

/* ================= 视图：图鉴 ================= */
function renderBook() {
  const tabs = [['spot', '📍 景点打卡'], ['souvenir', '🛍️ 特色周边'], ['story', '💬 奇闻趣事'], ['series', '🌟 系列收藏']];
  let html = `<div class="book-tabs">${tabs.map(([k, l]) =>
    `<button class="sub-tab ${S.bookTab === k ? 'active' : ''}" data-booktab="${k}">${l}</button>`).join('')}</div>`;
  const kind = S.bookTab;
  if (kind === 'series') { $('#view').innerHTML = html + renderSeriesBook(); return; }
  // 按国家分组
  const byCountry = {};
  CITIES.forEach(c => (byCountry[c.country] = byCountry[c.country] || []).push(c));
  const countryNames = Object.keys(byCountry).sort((a, b) => (a === '中国' ? -1 : b === '中国' ? 1 : a.localeCompare(b, 'zh')));
  countryNames.forEach(cn => {
    html += `<div class="map-group-title">${cn === '中国' ? '🇨🇳' : cn === '异世界' ? '🌌' : '🌍'} ${esc(cn)}</div>`;
    byCountry[cn].forEach(c => {
      const list = cityItems(c, kind);
      const g = list.filter(i => S.collected[i.id]).length;
      const open = !!S.bookOpen[c.id + kind];
      html += `
      <div class="book-city ${open ? 'open' : ''}">
        <div class="book-city-head" data-act="toggleBook" data-city="${c.id}" data-kind="${kind}">
          <span>${c.flag}</span><h4>${esc(c.name)}</h4>
          <span class="bprog">${g}/${list.length}${g === list.length && list.length ? ' 🏆' : ''}</span>
          <span class="arrow">▶</span>
        </div>
        <div class="book-city-body"><div class="bk-grid">`;
      list.forEach(it => {
        const got = !!S.collected[it.id];
        html += `<div class="bk-cell ${got ? 'got' : ''}">
          <span class="bk-ico">${got ? it.icon : '❓'}</span>
          <span class="bk-name">${got ? esc(it.name) : '<span class="bk-unknown">？？？？</span>'}</span>
          <span class="bk-sub">${got ? esc(it.desc.slice(0, 18)) + '…' : '尚未收集'}</span>
        </div>`;
      });
      html += '</div></div></div>';
    });
  });
  $('#view').innerHTML = html;
}

/* ================= 视图：背包 ================= */
function renderBag() {
  const items = bagItems();
  if (!items.length) {
    $('#view').innerHTML = '<div class="bag-empty">🎒 背包还是空的。<br>去「本城」收集美食、特产和体验吧！<br><br><small>背包无限大，装得下整个世界。</small></div>';
    return;
  }
  const byCity = {};
  items.forEach(x => (byCity[x.city.name] = byCity[x.city.name] || []).push(x));
  let html = `<div class="office-note">🎒 共 <b>${items.length}</b> 件收藏。背包无限大，每一件都是旅途的纪念。</div>`;
  Object.keys(byCity).forEach(cn => {
    html += `<div class="bag-city-title">${byCity[cn][0].city.flag} ${esc(cn)}</div><div class="bag-grid">`;
    byCity[cn].forEach(({ it }) => {
      html += `<div class="bag-item"><span class="bi-ico">${it.icon}</span>
        <div><div class="bi-name">${esc(it.name)}</div><div class="bi-type">${esc(it.type || '周边')}${it.tag ? ' · ' + it.tag : ''}</div></div></div>`;
    });
    html += '</div>';
  });
  $('#view').innerHTML = html;
}

/* ================= 视图：事务所 ================= */
function renderOffice() {
  let html = `
  <div class="office-note">🛂 出国旅行前需要：<b>护照</b>（一次办理，终身有效，工本费${fmtMoney(ECON.PASSPORT_COST)}）→ <b>签证</b>（按国家办理一次）。免签国家无需签证。出境图鉴的奖励比国内更丰厚！</div>
  <div class="doc-card">
    <span class="doc-ico">📕</span>
    <div class="doc-info">
      <h4>中华人民共和国护照</h4>
      <p> Saying "世界那么大，我想去看看" 的底气。办理一次，全球通用。</p>
    </div>
    ${S.passport ? '<span class="doc-state ok">✓ 已办理</span>' : `<button class="btn-doc" data-act="passport">办理 ${fmtMoney(ECON.PASSPORT_COST)}</button>`}
  </div>
  <div class="map-group-title">🌍 各国签证</div>`;
  const seen = {};
  CITIES.forEach(c => {
    if (!isForeign(c) || seen[c.cc]) return;
    seen[c.cc] = c;
  });
  Object.values(seen).forEach(c => {
    const free = c.visa && c.visa.cost === 0;
    const got = free || !!S.visas[c.cc];
    html += `
    <div class="doc-card">
      <span class="doc-ico">${c.flag}</span>
      <div class="doc-info">
        <h4>${esc(c.country)}签证</h4>
        <p>${esc((c.visa && c.visa.note) || '')}${c.visa && c.visa.cost ? ' · 费用约' + fmtMoney(c.visa.cost) : ''}</p>
      </div>
      ${got
        ? '<span class="doc-state ok">✓ ' + (free ? '免签' : '已办理') + '</span>'
        : `<button class="btn-doc" data-act="visa" data-cc="${c.cc}">办理 ${fmtMoney(c.visa.cost)}</button>`}
    </div>`;
  });
  $('#view').innerHTML = html;
}

/* ================= 动作 ================= */
function collect(kind, itemId) {
  const c = CITY_BY_ID[S.city];
  const it = cityItems(c, kind).find(i => i.id === itemId);
  if (!it || S.collected[itemId]) return;
  const price = Math.max(0, +it.price || 0);
  if (S.money < price) { toast('💰 旅行基金不足！先去点亮更多免费图鉴攒攒钱～'); return; }
  S.money -= price;
  S.collected[itemId] = { k: kind };
  const rw = rewardOf(c, kind, it);
  S.money += rw;
  const verb = kind === 'spot' ? '打卡成功' : kind === 'souvenir' ? '收入背包' : '涨知识了';
  toast(`${it.icon} ${esc(it.name)} ${verb}！奖励 <b>+${fmtMoney(rw)}</b>`, 'reward');
  // 城市全收集检查
  const st = cityStat(c);
  if (st.got === st.total && !S.cityBonus[c.id]) {
    S.cityBonus[c.id] = true;
    const bonus = isForeign(c) ? ECON.CITY_BONUS.foreign : ECON.CITY_BONUS.cn;
    S.money += bonus;
    setTimeout(() => toast(`🏆 ${esc(c.name)}图鉴全收集！奖金 <b>+${fmtMoney(bonus)}</b>`, 'reward'), 600);
  }
  save(); renderHUD();
  renderCity();   // 实时刷新卡片状态
  showModal(`<h3>${KIND_META[kind].icon} ${esc(it.name)}</h3>
    <div class="reward-pop">
      <span class="rp-ico">${it.icon}</span>
      <div>${esc(it.desc)}</div>
      <span class="rp-money">+${fmtMoney(rw)}</span>
      <button class="btn-big" data-act="closeModal">继续旅程</button>
    </div>`);
}
function goCity(cityId, tIdx) {
  const from = CITY_BY_ID[S.city], to = CITY_BY_ID[cityId];
  if (!to || S.city === cityId) return;
  const t = (to.travel || [])[tIdx];
  if (!t) return;
  if (isForeign(to)) {
    if (!S.passport) { toast('📕 出国需要先办理护照！去「🛂 事务所」办理。'); return; }
    if (!hasVisa(to)) { toast(`🛂 还没有${to.country}的签证，先去事务所办理～`); return; }
  }
  if (S.money < t.cost) { toast('💰 旅行基金不够买票！先在本城多收集一些图鉴～'); return; }
  S.money -= t.cost;
  S.city = cityId;
  if (!S.visited.includes(cityId)) S.visited.push(cityId);
  S.subTab = 'spot';
  save();
  toast(`${t.icon} 花费 <b>${fmtMoney(t.cost)}</b> 乘${t.name}前往 ${to.flag} ${esc(to.name)}`);
  renderHUD(); switchTab('city');
}
function buyPassport() {
  if (S.passport) return;
  if (S.money < ECON.PASSPORT_COST) { toast('💰 护照工本费不够，先攒攒旅行基金～'); return; }
  S.money -= ECON.PASSPORT_COST;
  S.passport = true;
  save(); renderHUD();
  toast('📕 护照办理成功！世界的大门向你敞开～', 'reward');
  renderOffice();
}
function buyVisa(cc) {
  const c = CITIES.find(x => x.cc === cc && isForeign(x));
  if (!c || S.visas[cc] || (c.visa && c.visa.cost === 0)) return;
  const cost = c.visa.cost || 0;
  if (S.money < cost) { toast('💰 签证费不够，先攒攒旅行基金～'); return; }
  S.money -= cost;
  S.visas[cc] = true;
  save(); renderHUD();
  toast(`🛂 ${esc(c.country)}签证到手！可以出发了`, 'reward');
  renderOffice();
}
function showIntro() {
  showModal(`<h3>🌱 序章 · 图鉴觉醒</h3>
  <div class="m-body">你出生在九省通衢的江城——武汉。
  某个周末，你第一次独自登上黄鹤楼，极目楚天，长江浩荡东去。
  忽然，一只白鹤掠过楼檐，神秘的机械音在脑海中响起——

  【旅行图鉴系统·绑定成功】

  「旅者你好！景点打卡、特色周边、奇闻趣事，皆可收录图鉴。
  每点亮一枚图鉴，都将获得旅行基金奖励。
  热干面的香气、编钟的回响、两江四岸的灯火……都从家乡武汉开始！」

  你摸摸口袋，里面有 ${fmtMoney(ECON.START_MONEY)} 启动资金。
  一场没有期限、背包无限大的旅程，开始了。</div>
  <div class="m-foot"><button class="btn-big" data-act="closeModal">出发！🧳</button></div>`);
}
function doReset() {
  showModal(`<h3>🔄 重新开始？</h3><div class="m-body">将清空所有图鉴进度、背包与基金，回到武汉的起点。</div>
  <div class="m-foot"><button class="btn-big" data-act="resetYes">确认重置</button>
  <button class="btn-big" style="background:#9c948a;margin-left:10px" data-act="closeModal">取消</button></div>`);
}

/* ================= 事件 ================= */
function switchTab(tab) {
  document.querySelectorAll('#tabs .tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  if (['city', 'map', 'book', 'bag', 'office'].includes(tab)) {
    ({ city: renderCity, map: renderMap, book: renderBook, bag: renderBag, office: renderOffice })[tab]();
  }
  window.scrollTo(0, 0);
}
document.getElementById('tabs').addEventListener('click', e => {
  const b = e.target.closest('.tab'); if (b) switchTab(b.dataset.tab);
});
document.addEventListener('click', e => {
  const t = e.target.closest('[data-act],[data-subtab],[data-booktab],[data-mapmode],[data-mapact]');
  if (!t) return;
  if (t.dataset.mapmode) { S.mapMode = t.dataset.mapmode; S.mapRegion = null; S.mapContinent = null; S.mapCountry = null; save(); renderMap(); return; }
  if (t.dataset.mapact) { handleMapAct(t); return; }
  if (t.dataset.subtab) { S.subTab = t.dataset.subtab; save(); renderCity(); return; }
  if (t.dataset.booktab) { S.bookTab = t.dataset.booktab; save(); renderBook(); return; }
  const act = t.dataset.act;
  if (act === 'collect') collect(t.dataset.kind, t.dataset.item);
  else if (act === 'go') goCity(t.dataset.city, +t.dataset.t);
  else if (act === 'passport') buyPassport();
  else if (act === 'visa') buyVisa(t.dataset.cc);
  else if (act === 'toggleBook') {
    const key = t.dataset.city + t.dataset.kind;
    S.bookOpen[key] = !S.bookOpen[key]; save();
    const box = t.closest('.book-city'); box.classList.toggle('open');
  }
  else if (act === 'closeModal') closeModal();
  else if (act === 'resetYes') { S = defaultState(); S.seenIntro = true; save(); closeModal(); renderHUD(); switchTab('city'); toast('🔄 旅程重新开始，欢迎回到武汉！'); }
});
document.getElementById('btn-reset').addEventListener('click', doReset);

/* ================= 启动 ================= */
renderHUD();
switchTab('city');
if (!S.seenIntro) { showIntro(); S.seenIntro = true; save(); }
