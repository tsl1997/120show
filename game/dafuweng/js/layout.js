/* 大富翁 · 三国地图坐标与寻路 v8
 * 每个区域有独立的网格：cn 13x13 双环(80格)，jp/us 11x11 田字(各57格)。
 * 全局 idx 0-193；WORLD_LAYOUT[idx] 给出 region 与区域内序号 local。
 * 区域之间不连通，只能靠港口/机场传送。
 */
var TILE_COORDS = (function () {
  var pos = {}, idx = 0, c, r;
  /* 中国：13x13 双环，外环 48 + 内环 24 + 连接道 8 = 80 */
  for (c = 1; c <= 13; c++) pos[idx++] = { c: c, r: 13 };
  for (r = 12; r >= 1; r--) pos[idx++] = { c: 13, r: r };
  for (c = 12; c >= 1; c--) pos[idx++] = { c: c, r: 1 };
  for (r = 2; r <= 12; r++) pos[idx++] = { c: 1, r: r };
  for (c = 4; c <= 10; c++) pos[idx++] = { c: c, r: 10 };
  for (r = 9; r >= 4; r--) pos[idx++] = { c: 10, r: r };
  for (c = 9; c >= 4; c--) pos[idx++] = { c: c, r: 4 };
  for (r = 5; r <= 9; r++) pos[idx++] = { c: 4, r: r };
  pos[idx++] = { c: 7, r: 2 };  pos[idx++] = { c: 7, r: 3 };
  pos[idx++] = { c: 11, r: 7 }; pos[idx++] = { c: 12, r: 7 };
  pos[idx++] = { c: 7, r: 11 }; pos[idx++] = { c: 7, r: 12 };
  pos[idx++] = { c: 2, r: 7 };  pos[idx++] = { c: 3, r: 7 };
  return pos;
})();

/* 11x11 田字：外环 40 + 横排 9 + 竖排 8 = 57 */
function buildCrossCoords() {
  var pos = {}, idx = 0, c, r;
  for (c = 1; c <= 11; c++) pos[idx++] = { c: c, r: 11 };
  for (r = 10; r >= 1; r--) pos[idx++] = { c: 11, r: r };
  for (c = 10; c >= 1; c--) pos[idx++] = { c: c, r: 1 };
  for (r = 2; r <= 10; r++) pos[idx++] = { c: 1, r: r };
  for (c = 2; c <= 10; c++) pos[idx++] = { c: c, r: 6 };
  for (r = 2; r <= 5; r++) pos[idx++] = { c: 6, r: r };
  for (r = 7; r <= 10; r++) pos[idx++] = { c: 6, r: r };
  return pos;
}
var CROSS_COORDS = buildCrossCoords();

var REGION_COORDS = { cn: TILE_COORDS, jp: CROSS_COORDS, us: CROSS_COORDS };

function makeCoordKey(coords) {
  var m = {};
  for (var i in coords) m[coords[i].c + ',' + coords[i].r] = parseInt(i, 10);
  return m;
}
var COORD_KEY = makeCoordKey(TILE_COORDS);               /* 兼容旧代码：中国区反查 */
var REGION_COORD_KEY = {
  cn: COORD_KEY, jp: makeCoordKey(CROSS_COORDS), us: makeCoordKey(CROSS_COORDS)
};

/* 每区域内部的邻接（local 序号） */
var REGION_ADJ = (function () {
  var out = {};
  for (var r in REGION_COORDS) {
    var coords = REGION_COORDS[r], key = REGION_COORD_KEY[r], list = [];
    for (var i = 0; i < REGION_SIZE[r]; i++) {
      var a = coords[i], adj = [];
      [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) {
        var k = (a.c + d[0]) + ',' + (a.r + d[1]);
        if (key[k] != null) adj.push(key[k]);
      });
      list.push(adj);
    }
    out[r] = list;
  }
  return out;
})();

/* 全局 ADJ（idx 邻接，兼容所有旧模块：chain/estate/items/tests） */
var ADJ = WORLD_LAYOUT.map(function (d) {
  return REGION_ADJ[d.region][d.local].map(function (l) {
    return REGION_OFFSET[d.region] + l;
  });
});

/* 区域内连通性（调试 / 测试用） */
function mapConnectivity(region) {
  var r = region || 'cn';
  var seen = { 0: true }, queue = [0];
  while (queue.length) {
    var cur = queue.shift();
    REGION_ADJ[r][cur].forEach(function (nx) {
      if (!seen[nx]) { seen[nx] = true; queue.push(nx); }
    });
  }
  return Object.keys(seen).length;
}

/* 岔路口：给出全局 idx 与来时方向，返回所有可走出口（不回头），idx 为全局 */
function junctionExits(curIdx, cameFromDir) {
  var d = WORLD_LAYOUT[curIdx];
  var region = d ? d.region : 'cn';
  var local = d ? d.local : curIdx;
  var a = REGION_COORDS[region][local];
  var key = REGION_COORD_KEY[region];
  var offset = REGION_OFFSET[region];
  var dirs = {
    right: { c: 1, r: 0 }, left: { c: -1, r: 0 },
    up: { c: 0, r: -1 }, down: { c: 0, r: 1 }
  };
  var back = { right: 'left', left: 'right', up: 'down', down: 'up' }[cameFromDir];
  var exits = [];
  for (var dir in dirs) {
    if (dir === back) continue;
    var k = (a.c + dirs[dir].c) + ',' + (a.r + dirs[dir].r);
    if (key[k] != null) exits.push({ idx: offset + key[k], dir: dir });
  }
  return exits;
}

/* 装饰区坐标（按区域网格重排） */
var REGION_DECO = {
  cn: {
    corners: [['2 / 4', '2 / 4'], ['11 / 13', '2 / 4'], ['2 / 4', '11 / 13'], ['11 / 13', '11 / 13']],
    strips: [['2 / 7', '5 / 7'], ['8 / 13', '8 / 10'], ['2 / 7', '8 / 10'], ['8 / 13', '5 / 7']],
    center: ['5 / 9', '5 / 9']
  },
  jp: {
    corners: [['2 / 6', '2 / 6'], ['7 / 11', '2 / 6'], ['2 / 6', '7 / 11'], ['7 / 11', '7 / 11']],
    strips: [], center: ['2 / 6', '2 / 6']
  },
  us: {
    corners: [['2 / 6', '2 / 6'], ['7 / 11', '2 / 6'], ['2 / 6', '7 / 11'], ['7 / 11', '7 / 11']],
    strips: [], center: ['2 / 6', '2 / 6']
  }
};

/* DOM 布局：把当前区域的 tile 放到网格位置，并同步网格尺寸与装饰 */
function layoutBoard() {
  var boardEl = document.getElementById('board');
  if (!boardEl) return;
  var region = (G && G.viewRegion) || 'cn';
  var n = REGION_GRID[region], coords = REGION_COORDS[region];
  boardEl.style.gridTemplateColumns = 'repeat(' + n + ', var(--tile-w))';
  boardEl.style.gridTemplateRows = 'repeat(' + n + ', var(--tile-h))';

  G.tiles.forEach(function (tile) {
    if (tile.region !== region) return;
    var el = document.getElementById('tile-' + tile.idx);
    if (!el) return;
    var p = coords[tile.local];
    if (!p) return;
    el.style.gridColumn = p.c;
    el.style.gridRow = p.r;
  });

  /* 装饰区跟随区域重排 */
  var deco = REGION_DECO[region];
  var corners = boardEl.querySelectorAll('.board-corner:not(.deco-strip)');
  for (var i = 0; i < corners.length; i++) {
    var c = deco.corners[i % deco.corners.length];
    if (c) { corners[i].style.gridColumn = c[0]; corners[i].style.gridRow = c[1]; }
    /* 日/美地图没有内环中心空腔，标题放左上象限，那个角的装饰让位 */
    corners[i].style.display = (region !== 'cn' && i === 0) ? 'none' : '';
  }
  var strips = boardEl.querySelectorAll('.board-corner.deco-strip');
  for (var j = 0; j < strips.length; j++) {
    strips[j].style.display = deco.strips.length ? '' : 'none';
    if (deco.strips[j]) {
      strips[j].style.gridColumn = deco.strips[j][0];
      strips[j].style.gridRow = deco.strips[j][1];
    }
  }
  var center = boardEl.querySelector('.board-center-block');
  if (center) {
    center.style.gridColumn = deco.center[0];
    center.style.gridRow = deco.center[1];
    center.style.zIndex = '0';
  }
}

function layoutBoardReset() {}
