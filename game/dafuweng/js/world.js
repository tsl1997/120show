/* 大富翁 · 三国世界 v8
 * 三个独立区域，各自有网格坐标与股市：
 *   cn 中国：13x13 双环，80 格（沿用旧地图）
 *   jp 日本：11x11 田字，57 格，中心是东京皇宫（天皇不动产）
 *   us 美国：11x11 田字，57 格，四家实体企业散布在中心与外环
 * 区域之间不直接连通，只能靠「港口（坐船）」或「飞机场（直飞）」传送。
 * WORLD_LAYOUT 是全局格子表（idx 0-193），每格带 region / local。
 */

var REGIONS = ['cn', 'jp', 'us'];
var REGION_NAMES = { cn: '中国', jp: '日本', us: '美国' };
var REGION_GRID = { cn: 13, jp: 11, us: 11 };
var MARKET_NAMES = { cn: '沪深股市', jp: '东京股市', us: '纽约股市' };

/* 各国城市名池（洗牌后分配给地产格，保证不重复） */
var JP_CITY_POOL = [
  '东京', '大阪', '京都', '名古屋', '札幌', '福冈', '神户', '横滨', '广岛', '仙台',
  '奈良', '冲绳', '金泽', '静冈', '长野', '冈山', '熊本', '鹿儿岛', '新潟', '青森',
  '函馆', '姬路', '镰仓', '箱根', '日光', '宇都宫', '千叶', '埼玉', '川崎', '富山',
  '高松', '松山', '和歌山', '长崎', '别府', '盛冈', '秋田', '福井'
];
var US_CITY_POOL = [
  '纽约', '洛杉矶', '芝加哥', '休斯顿', '旧金山', '西雅图', '波士顿', '迈阿密', '拉斯维加斯', '华盛顿',
  '亚特兰大', '达拉斯', '丹佛', '费城', '圣地亚哥', '波特兰', '底特律', '奥斯汀', '纳什维尔', '新奥尔良',
  '奥兰多', '盐湖城', '檀香山', '匹兹堡', '克利夫兰', '辛辛那提', '巴尔的摩', '圣路易斯', '密尔沃基', '萨克拉门托',
  '凤凰城', '圣安东尼奥', '夏洛特', '印第安纳波利斯', '堪萨斯城', '哥伦布', '里士满', '布法罗'
];

/* 日本区域的特殊格（local 序号 → 定义），其余全部是地产 */
var JP_SPECIALS = {
  0:  { t: 'port',    name: '横滨港' },
  3:  { t: 'chance' },
  6:  { t: 'fishery', name: '北海道渔港' },
  9:  { t: 'bank' },
  12: { t: 'shrine',  name: '稻荷大社' },
  16: { t: 'stock' },
  20: { t: 'hospital' },
  24: { t: 'airport', name: '成田机场' },
  28: { t: 'park' },
  31: { t: 'chance' },
  32: { t: 'gas' },
  36: { t: 'mall' },
  40: { t: 'bank' },
  44: { t: 'corp', cid: 'tenno', name: '东京皇宫' },
  47: { t: 'shrine', name: '伏见稻荷' },
  48: { t: 'fishery', name: '濑户内渔港' },
  50: { t: 'grid',   name: '东京电业' },
  52: { t: 'stock' },
  56: { t: 'park' }
};

/* 美国区域的特殊格：四家实体企业 */
var US_SPECIALS = {
  0:  { t: 'port',    name: '旧金山港' },
  3:  { t: 'chance' },
  6:  { t: 'fishery', name: '阿拉斯加渔港' },
  9:  { t: 'bank' },
  12: { t: 'corp', cid: 'tesla', name: '特斯拉工厂' },
  16: { t: 'stock' },
  20: { t: 'hospital' },
  24: { t: 'airport', name: '肯尼迪机场' },
  28: { t: 'park' },
  31: { t: 'chance' },
  32: { t: 'gas' },
  33: { t: 'corp', cid: 'wallst', name: '华尔街' },
  36: { t: 'mall' },
  40: { t: 'bank' },
  44: { t: 'corp', cid: 'apple', name: '苹果园区' },
  47: { t: 'chance' },
  48: { t: 'fishery', name: '佛罗里达渔港' },
  50: { t: 'grid',   name: '纽约电业' },
  52: { t: 'corp', cid: 'hollywood', name: '好莱坞' },
  56: { t: 'park' }
};

/* 生成 11x11 田字区域的 57 格布局 */
function makeRegionLayout(region, specials) {
  var arr = [];
  for (var i = 0; i < 57; i++) {
    var sp = specials[i];
    if (sp) {
      var o = { region: region, local: i, t: sp.t };
      if (sp.name) o.name = sp.name;
      if (sp.cid) o.cid = sp.cid;
      arr.push(o);
    } else {
      /* 地区类型：每 7 格一块贫穷、每 5 格一块富裕，其余普通 */
      var z = (i % 7 === 0) ? 0 : ((i % 5 === 0) ? 2 : 1);
      var g = z === 0 ? 0 : (z === 2 ? (i % 3 === 0 ? 1 : 2) : 1);
      arr.push({ region: region, local: i, t: 'estate', z: z, g: g });
    }
  }
  return arr;
}

var CN_OFFSET = 0;
var JP_OFFSET = MAP_LAYOUT.length;                  /* 80 */
var US_OFFSET = MAP_LAYOUT.length + 57;            /* 137 */
var REGION_OFFSET = { cn: CN_OFFSET, jp: JP_OFFSET, us: US_OFFSET };
var REGION_SIZE = { cn: MAP_LAYOUT.length, jp: 57, us: 57 };

var WORLD_LAYOUT = (function () {
  var cn = MAP_LAYOUT.map(function (d, i) {
    var o = { region: 'cn', local: i, t: d.t };
    if (d.name) o.name = d.name;
    if (d.z != null) o.z = d.z;
    if (d.g != null) o.g = d.g;
    if (d.cid) o.cid = d.cid;
    return o;
  });
  return cn.concat(makeRegionLayout('jp', JP_SPECIALS), makeRegionLayout('us', US_SPECIALS));
})();

/* 每个区域的「港口 / 机场」全局 idx（传送目的地） */
var REGION_GATES = {
  cn: { port: CN_OFFSET + 6,  airport: CN_OFFSET + 28 },
  jp: { port: JP_OFFSET + 0,  airport: JP_OFFSET + 24 },
  us: { port: US_OFFSET + 0,  airport: US_OFFSET + 24 }
};

/* 全局 idx → 区域 / 区域内序号 */
function regionOf(idx) { return WORLD_LAYOUT[idx] ? WORLD_LAYOUT[idx].region : 'cn'; }
function localOf(idx) { return WORLD_LAYOUT[idx] ? WORLD_LAYOUT[idx].local : 0; }
function regionLabel(idx) { return REGION_NAMES[regionOf(idx)] + '·' + (WORLD_LAYOUT[idx].name || ''); }
