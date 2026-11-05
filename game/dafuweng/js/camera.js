/* 大富翁 · 镜头系统 v5
 * 跟随模式：行动玩家所在区域放大居中（transform: scale + translate）
 * 全图模式：完整显示 13x13 地图（缩小适配）
 * 切换按钮在 HUD；AI/人类回合开始时自动跟随。
 */
var cameraMode = 'follow';       /* 'follow' | 'full' */
var CAM_ZOOM = 1.9;              /* 跟随模式放大倍数 */

function toggleCamera() {
  cameraMode = cameraMode === 'follow' ? 'full' : 'follow';
  applyCamera();
  var btn = document.getElementById('cam-btn');
  if (btn) btn.textContent = cameraMode === 'follow' ? '🔍 跟随' : '🗺 全图';
}

/* 计算并应用镜头（以某玩家为中心） */
function applyCamera(focusIdx) {
  var board = document.getElementById('board');
  var zone = document.getElementById('board-zone');
  if (!board || !zone) return;
  if (cameraMode === 'full') {
    board.style.transform = 'none';
    return;
  }
  var idx = focusIdx != null ? focusIdx : (G && G.players[G.turn] ? G.players[G.turn].pos : 0);
  var wd = WORLD_LAYOUT[idx];
  if (!wd || wd.region !== G.viewRegion) return;   /* 玩家不在当前显示的国家 */
  var co = REGION_COORDS[wd.region][wd.local];
  if (!co) return;
  /* 格子中心像素位置（相对 board） */
  var tw = board.querySelector('.tile');
  var cw = tw ? tw.offsetWidth : 50;
  var ch = tw ? tw.offsetHeight : 36;
  var gap = 3;
  var cx = (co.c - 0.5) * (cw + gap);
  var cy = (co.r - 0.5) * (ch + gap);
  /* 以玩家为中心缩放：board 原点平移到 (zone中心 - 玩家位置*zoom) */
  var zoneW = zone.clientWidth, zoneH = zone.clientHeight;
  var tx = zoneW / 2 - cx * CAM_ZOOM;
  var ty = zoneH / 2 - cy * CAM_ZOOM;
  board.style.transformOrigin = '0 0';
  board.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + CAM_ZOOM + ')';
}

/* 回合开始/移动时调用 */
function cameraFollow(p) {
  if (cameraMode === 'follow') applyCamera(p ? p.pos : null);
}
