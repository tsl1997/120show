/* 大富翁 · 地图渲染（DOM 版，CSS Grid 布局回字地图）
 * 地图 40 格：底 11 + 右 10 + 顶 10 + 左 9
 */
var PLAYER_COLORS = ['#ff6b81', '#4dabf7', '#51cf66', '#ffd43b'];

/* 格子类型的显示配置 */
var TILE_VIEW = {
  start:    { label: '起点',   icon: 'start',    cls: 'tl-start' },
  estate:   { label: '',       icon: 'estate',   cls: 'tl-estate' },
  bank:     { label: '银行',   icon: 'bank',     cls: 'tl-bank' },
  hospital: { label: '医院',   icon: 'hospital', cls: 'tl-hospital' },
  grid:     { label: '国家电网', icon: 'grid',   cls: 'tl-grid' },
  gas:      { label: '加油站', icon: 'gas',      cls: 'tl-gas' },
  mall:     { label: '百货商店', icon: 'mall',   cls: 'tl-mall' },
  stock:    { label: '证券交易所', icon: 'stock', cls: 'tl-stock' },
  park:     { label: '公园',   icon: 'park',     cls: 'tl-park' },
  police:   { label: '派出所', icon: 'police',   cls: 'tl-police' },
  chance:   { label: '机会',   icon: 'chance',   cls: 'tl-chance' },
  jail:     { label: '看守所', icon: 'jail',     cls: 'tl-jail' },
  port:     { label: '港口',   icon: 'port',     cls: 'tl-port' },
  airport:  { label: '飞机场', icon: 'airport',  cls: 'tl-airport' },
  shrine:   { label: '稻荷神社', icon: 'shrine', cls: 'tl-shrine' },
  fishery:  { label: '渔港',   icon: 'fishery',  cls: 'tl-fishery' },
  corp:     { label: '企业',   icon: 'corp',     cls: 'tl-corp' }
};

/* 生成图标 HTML（iconify 图标 + Emoji 兜底） */
function iconHTML(iconKey, size) {
  var fb = ICON_FALLBACK[iconKey] || '';
  var name = ICON[iconKey] || '';
  return '<span class="gi gi-' + iconKey + '" data-icon="' + name + '" style="font-size:' +
    (size || 18) + 'px">' + fb + '</span>';
}

/* 建图：生成 40 个 tile 的 DOM（保留中央标题区） */
function buildBoardDOM() {
  var boardEl = document.getElementById('board');
  /* 只清掉 tile，保留 .board-center */
  var oldTiles = boardEl.querySelectorAll('.tile');
  for (var i = 0; i < oldTiles.length; i++) oldTiles[i].remove();
  if (typeof layoutBoard === 'function') layoutBoardReset();
  /* v8：只渲染当前国家的格子（三国各用一套网格坐标） */
  var region = G.viewRegion || 'cn';
  G.tiles.forEach(function (tile) {
    if (tile.region !== region) return;
    var el = document.createElement('div');
    el.className = 'tile ' + (TILE_VIEW[tile.t] ? TILE_VIEW[tile.t].cls : '');
    el.id = 'tile-' + tile.idx;
    el.setAttribute('data-idx', tile.idx);

    var inner = '';
    if (tile.t === 'estate') {
      inner = '<div class="tile-colorbar" style="background:' + ESTATE_COLORS[tile.g] + '"></div>';
    }
    inner += '<div class="tile-icon">' + iconHTML(TILE_VIEW[tile.t].icon) + '</div>';
    inner += '<div class="tile-name">' + (tile.name || TILE_VIEW[tile.t].label) + '</div>';
    inner += '<div class="tile-sub"></div>';
    inner += '<div class="tile-players"></div>';
    inner += '<div class="tile-houses"></div>';

    el.innerHTML = inner;
    boardEl.appendChild(el);
  });
  if (typeof layoutBoard === 'function') layoutBoard();
  updateBoardDOM();
}

/* 刷新所有格子显示（owner/等级/停电标记） */
function updateBoardDOM() {
  G.tiles.forEach(function (tile) {
    var el = document.getElementById('tile-' + tile.idx);
    if (!el) return;
    var sub = el.querySelector('.tile-sub');
    var housesEl = el.querySelector('.tile-houses');
    var colorbar = el.querySelector('.tile-colorbar');

    if (tile.t === 'estate') {
      var ownerP = tile.owner != null ? G.players[tile.owner] : null;
      if (ownerP) {
        /* v5：整格背景填充玩家色（半透明叠加地区底色），更显眼 */
        var zoneBg = ['#f3f4f6', '#fffdf5', '#fdf6ec'][tile.z != null ? tile.z : 1];
        el.style.background = 'linear-gradient(160deg, ' + PLAYER_COLORS[ownerP.idx] + 'cc, ' + PLAYER_COLORS[ownerP.idx] + '88)';
        el.style.borderColor = PLAYER_COLORS[ownerP.idx];
        el.style.boxShadow = '0 0 0 2.5px ' + PLAYER_COLORS[ownerP.idx];
        el.classList.add('owned');
      } else {
        /* 无主：按地区类型染底色（贫穷灰/普通米/富裕金） */
        el.style.background = ['#eef1f4', '#fffdf5', '#f7ecd7'][tile.z != null ? tile.z : 1];
        el.style.borderColor = ['#c9d4de', '#eadbc8', '#e2c48a'][tile.z != null ? tile.z : 1];
        el.style.boxShadow = '';
        el.classList.remove('owned');
      }
      var parts = [];
      parts.push(ESTATE_LEVELS[tile.level].name);
      if (tile.level > 0) parts.push('收' + estateToll(tile));
      if (tile.level > 0 && !tile.electrified) parts.push('停电');
      sub.textContent = parts.join('·');
      /* 等级徽章：1绿 2蓝 3金 */
      var hh = tile.level > 0
        ? '<span class="lv-badge lv' + tile.level + '">' + tile.level + '</span>'
        : '';
      /* 神仙标记 */
      if (tile.god) hh += '<span class="god-mark">' + GODS[tile.god].emoji + '</span>';
      housesEl.innerHTML = hh;
    } else {
      sub.textContent = TILE_VIEW[tile.t] && tile.t !== 'start' ? specialTileSub(tile) : '';
    }
    /* 路障标记（通用：任何格子被放置都显示） */
    var hEl = el.querySelector('.tile-houses');
    if (tile.barrier != null) {
      hEl.innerHTML += '<span class="barrier-mark">🚧</span>';
    }
  });
}

/* 特殊格的副标题 */
function specialTileSub(tile) {
  switch (tile.t) {
    case 'bank':     return '存取款 · 利息 0.1%/日';
    case 'hospital': return '路过住院 3 天 · 800 元';
    case 'grid':     return tile.region === 'cn'
      ? 'Lv.' + G.companies.grid.level + ' · 停留罚款'
      : '海外营业厅 · 预存/补缴电费（不触电）';
    case 'gas':      return '汽油每10单位 ' + currentGasPrice() + ' 元';
    case 'mall': return '买摩托 1000 / 汽车 3000';
    case 'stock':    return '10 只股票 · 涨跌停 ±10%';
    case 'park':     return '休息一下';
    case 'police':   return '遵纪守法';
    case 'chance':   return '随机事件';
    case 'jail':     return '探监专用';
    case 'port':     return '⚓ 坐船出海 · 船票' + Math.round(TRAVEL_FARE.port * priceMul()) + '元';
    case 'airport':  return '✈️ 直飞他国 · 机票' + Math.round(TRAVEL_FARE.airport * priceMul()) + '元';
    case 'shrine':   return '⛩️ 路过自动祈福抽签 100-500元';
    case 'fishery':  return '🎣 投饵料钓鱼 · 碰运气';
    case 'corp': {
      var def = COMPANY_MAP[tile.cid];
      if (!def) return '企业';
      return def.emoji + ' ' + def.name + ' Lv.' + G.companies[tile.cid].level + ' · 停留收费';
    }
    default:         return '';
  }
}

/* 当前油价（每 GAS_UNIT 单位）
 * 开局首月（尚无月结记录）用基准价；之后按石化上月收益好坏浮动 */
function currentGasPrice() {
  var petro = G.companies.petro;
  if (!petro.settledOnce) return GAS_BASE_PRICE;
  var mult = petro.lastIncomeGood ? GAS_GOOD : GAS_BAD;
  return ifloor(GAS_BASE_PRICE * mult);
}

/* 刷新玩家棋子位置 */
function updatePawnsDOM() {
  /* 先清空所有 players 容器 */
  var containers = document.querySelectorAll('.tile-players');
  for (var i = 0; i < containers.length; i++) containers[i].innerHTML = '';
  G.players.forEach(function (p) {
    if (!p.alive) return;
    var el = document.getElementById('tile-' + p.pos);
    if (!el) return;
    var box = el.querySelector('.tile-players');
    var pawn = document.createElement('div');
    pawn.className = 'pawn' + (G.turn === p.idx ? ' pawn-active' : '');
    pawn.id = 'pawn-' + p.idx;
    pawn.style.background = PLAYER_COLORS[p.idx];
    pawn.title = p.avatar.name;
    pawn.innerHTML = iconHTML(p.avatar.id, 12);
    box.appendChild(pawn);
  });
}


/* ===== v8：切换国家视图 ===== */
function switchRegion(region) {
  if (!G || !REGION_NAMES[region]) return;
  if (G.viewRegion === region) return;
  G.viewRegion = region;
  buildBoardDOM();
  updatePawnsDOM();
  if (typeof updateHud === 'function') updateHud();
  if (typeof cameraFollow === 'function') cameraFollow(G.players[G.turn]);
  log('【旅行】🌏 镜头切换到「' + REGION_NAMES[region] + '」地图', 'travel');
}
