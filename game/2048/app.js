const size = 4;
const STORAGE_KEY = "jinbang2048-v2";

const THEMES = {
  scholar: {
    key: "scholar",
    name: "读书人",
    buttonText: "切换妃位",
    title: "金榜2048",
    eyebrow: "古风益智 · 2048 变体",
    lead: "把童生一路合并到状元，最后冲上金榜。",
    hint: "合成同级读书人",
    playText: "每次移动会出现一位新读书人。相同等级相撞时合并为更高一级，直到金榜题名。",
    boardLabel: "金榜2048棋盘",
    winTitle: "金榜题名",
    winText: "你已经合出了状元。",
    winContinueText: "你已经合出了状元，可以继续冲更高的名次。",
    winButton: "继续游玩",
    loseTitle: "落第重来",
    loseText: "棋盘已满，没有可合并的等级。",
    loseButton: "重新开始",
    state: "读书人局",
    maxTile: 2048,
    maxLabel: "状元",
    tiles: [
      [2, "童生"],
      [4, "秀才"],
      [8, "廪生"],
      [16, "举人"],
      [32, "贡士"],
      [64, "会元"],
      [128, "进士"],
      [256, "探花"],
      [512, "榜眼"],
      [1024, "状元"],
      [2048, "金榜"],
    ],
    colors: [
      "#fff4d8",
      "#ffecc2",
      "#ffe0a0",
      "#ffd17c",
      "#ffbf57",
      "#f8a83a",
      "#e08f26",
      "#c6781c",
      "#a5641a",
      "#855015",
      "#6b4012",
    ],
  },
  concubine: {
    key: "concubine",
    name: "妃子",
    buttonText: "切换做官",
    title: "凤仪2048",
    eyebrow: "宫廷合成 · 2048 变体",
    lead: "把才人一路合并到皇后，最后登上凤仪之位。",
    hint: "合成同级妃子",
    playText: "每次移动会出现一位新的妃位。相同等级相撞时合并为更高一级，直到凤仪之位。",
    boardLabel: "凤仪2048棋盘",
    winTitle: "凤仪加身",
    winText: "你已经合出了皇后。",
    winContinueText: "你已经合出了皇后，可以继续冲更高的名次。",
    winButton: "继续游玩",
    loseTitle: "宫局已满",
    loseText: "棋盘已满，没有可合并的等级。",
    loseButton: "重新开始",
    state: "妃子局",
    maxTile: 2048,
    maxLabel: "凤仪",
    tiles: [
      [2, "采女"],
      [4, "更衣"],
      [8, "美人"],
      [16, "才人"],
      [32, "婕妤"],
      [64, "昭仪"],
      [128, "贵人"],
      [256, "嫔"],
      [512, "妃"],
      [1024, "贵妃"],
      [2048, "皇后"],
    ],
    colors: [
      "#ffe9f4",
      "#ffd9ec",
      "#ffc6df",
      "#ffb0d1",
      "#ff97c0",
      "#f57cac",
      "#df5f97",
      "#c94a83",
      "#ad376e",
      "#8f2a59",
      "#732047",
    ],
  },
  official: {
    key: "official",
    name: "做官",
    buttonText: "切换武将",
    title: "登阁2048",
    eyebrow: "官场晋升 · 2048 变体",
    lead: "把九品芝麻官一路合并到入阁，最后官拜宰相。",
    hint: "合成同级官员",
    playText: "每次移动会出现一位新的官员。相同等级相撞时合并为更高一级，直到入阁拜相。",
    boardLabel: "登阁2048棋盘",
    winTitle: "入阁拜相",
    winText: "你已经官拜宰相了。",
    winContinueText: "你已经官拜宰相了，可以继续冲更高的官阶。",
    winButton: "继续游玩",
    loseTitle: "仕途受阻",
    loseText: "棋盘已满，没有可合并的等级。",
    loseButton: "重新开始",
    state: "做官局",
    maxTile: 2048,
    maxLabel: "入阁",
    tiles: [
      [2, "九品"],
      [4, "八品"],
      [8, "七品"],
      [16, "六品"],
      [32, "五品"],
      [64, "四品"],
      [128, "三品"],
      [256, "二品"],
      [512, "一品"],
      [1024, "入阁"],
      [2048, "拜相"],
    ],
    colors: [
      "#e6f8ed",
      "#d1f2de",
      "#b6e8cc",
      "#95dcb5",
      "#73ce9e",
      "#54bc87",
      "#3ba673",
      "#278d5d",
      "#1d754b",
      "#165d3c",
      "#104a30",
    ],
  },
  general: {
    key: "general",
    name: "武将",
    buttonText: "切换修仙",
    title: "封侯2048",
    eyebrow: "沙场点兵 · 2048 变体",
    lead: "把新兵一路合并到统帅，最后封侯拜将。",
    hint: "合成同级将士",
    playText: "每次移动会出现一位新的将士。相同等级相撞时合并为更高一级，直到封侯拜将。",
    boardLabel: "封侯2048棋盘",
    winTitle: "封侯拜将",
    winText: "你已经统帅三军了。",
    winContinueText: "你已经统帅三军了，可以继续冲更高的军衔。",
    winButton: "继续游玩",
    loseTitle: "兵败收兵",
    loseText: "棋盘已满，没有可合并的等级。",
    loseButton: "重新开始",
    state: "武将局",
    maxTile: 2048,
    maxLabel: "统帅",
    tiles: [
      [2, "新兵"],
      [4, "什长"],
      [8, "百夫长"],
      [16, "千夫长"],
      [32, "校尉"],
      [64, "将军"],
      [128, "都护"],
      [256, "大都督"],
      [512, "骠骑"],
      [1024, "统帅"],
      [2048, "军神"],
    ],
    colors: [
      "#ffeae0",
      "#ffdcc8",
      "#ffc9a6",
      "#ffb07e",
      "#fb9453",
      "#ee752e",
      "#d55d1b",
      "#b84b12",
      "#993c0d",
      "#7a2f09",
      "#5e2406",
    ],
  },
  immortal: {
    key: "immortal",
    name: "修仙",
    buttonText: "切换读书人",
    title: "问道2048",
    eyebrow: "修真问道 · 2048 变体",
    lead: "把炼气一路合并到大乘，最后渡劫飞升。",
    hint: "合成同级修士",
    playText: "每次移动会出现一位新的修士。相同等级相撞时合并为更高一级，直到渡劫飞升。",
    boardLabel: "问道2048棋盘",
    winTitle: "渡劫飞升",
    winText: "你已经大乘飞升了。",
    winContinueText: "你已经大乘飞升了，可以继续冲更高的境界。",
    winButton: "继续游玩",
    loseTitle: "道途已绝",
    loseText: "棋盘已满，没有可合并的等级。",
    loseButton: "重新开始",
    state: "修仙局",
    maxTile: 2048,
    maxLabel: "大乘",
    tiles: [
      [2, "炼气"],
      [4, "筑基"],
      [8, "金丹"],
      [16, "元婴"],
      [32, "化神"],
      [64, "炼虚"],
      [128, "合体"],
      [256, "渡劫"],
      [512, "大乘"],
      [1024, "真仙"],
      [2048, "飞升"],
    ],
    colors: [
      "#f1e8ff",
      "#e3d4ff",
      "#d0bdfb",
      "#bca2f4",
      "#a487ea",
      "#8a6cdc",
      "#7054c9",
      "#5b41b0",
      "#473092",
      "#372379",
      "#281c5c",
    ],
  },
};

const THEME_ORDER = ["scholar", "concubine", "official", "general", "immortal"];

const boardEl = document.getElementById("board");
const scoreEl = document.getElementById("score");
const bestScoreEl = document.getElementById("bestScore");
const statePill = document.getElementById("statePill");
const restartBtn = document.getElementById("restartBtn");
const undoBtn = document.getElementById("undoBtn");
const themeBtn = document.getElementById("themeBtn");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlayText = document.getElementById("overlayText");
const overlayBtn = document.getElementById("overlayBtn");
const rankList = document.getElementById("rankList");
const gameTitle = document.getElementById("gameTitle");
const themeEyebrow = document.getElementById("themeEyebrow");
const mergeHint = document.getElementById("mergeHint");

let themeKey = localStorage.getItem(`${STORAGE_KEY}-theme`) || "scholar";
let theme = THEMES[themeKey] || THEMES.scholar;
let state = createEmptyState();
let history = [];
let touchStart = null;
let winShown = false;

function createEmptyState() {
  return {
    grid: Array.from({ length: size }, () => Array(size).fill(null)),
    score: 0,
    best: Number(localStorage.getItem(`${STORAGE_KEY}-best`) || 0),
    status: "ready",
    canContinue: false,
  };
}

function createTile(value, row, col) {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    value,
    row,
    col,
    spawn: true,
    merge: false,
  };
}

function cloneState(source) {
  return {
    grid: source.grid.map((row) => row.map((tile) => (tile ? { ...tile } : null))),
    score: source.score,
    best: source.best,
    status: source.status,
    canContinue: source.canContinue,
  };
}

function currentLabels() {
  return theme.tiles;
}

function currentMaxTile() {
  return theme.maxTile;
}

function save() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      grid: state.grid,
      score: state.score,
      best: state.best,
      status: state.status,
      canContinue: state.canContinue,
      winShown,
      themeKey,
    })
  );
  localStorage.setItem(`${STORAGE_KEY}-best`, String(state.best));
  localStorage.setItem(`${STORAGE_KEY}-theme`, themeKey);
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (data.themeKey && THEMES[data.themeKey]) {
      themeKey = data.themeKey;
      theme = THEMES[themeKey];
    }
    state.grid = (data.grid || state.grid).map((row) =>
      row.map((tile) => (tile ? { ...tile, spawn: false, merge: false } : null))
    );
    const hasTiles = state.grid.some((row) => row.some(Boolean));
    if (!hasTiles) return false;
    state.score = data.score || 0;
    state.best = data.best || 0;
    state.status = data.status || "playing";
    state.canContinue = Boolean(data.canContinue);
    winShown = Boolean(data.winShown);
    return true;
  } catch {
    return false;
  }
}

function init() {
  renderTheme();
  renderRankList();
  if (!load()) {
    resetGame();
  } else {
    renderTheme();
    syncBest();
    render();
  }
  bindEvents();
}

function resetGame() {
  history = [];
  winShown = false;
  state = createEmptyState();
  addRandomTile();
  addRandomTile();
  state.status = "playing";
  syncBest();
  render();
  save();
}

function toggleTheme() {
  const idx = THEME_ORDER.indexOf(themeKey);
  themeKey = THEME_ORDER[(idx + 1) % THEME_ORDER.length];
  theme = THEMES[themeKey];
  renderTheme();
  renderRankList();
  render();
  save();
}

function renderTheme() {
  gameTitle.textContent = theme.title;
  themeEyebrow.textContent = theme.eyebrow;
  themeBtn.textContent = theme.buttonText;
  mergeHint.textContent = theme.hint;
  boardEl.setAttribute("aria-label", theme.boardLabel);
}

function syncBest() {
  state.best = Math.max(state.best || 0, Number(localStorage.getItem(`${STORAGE_KEY}-best`) || 0), state.score);
  bestScoreEl.textContent = String(state.best);
}

function addRandomTile() {
  const empties = [];
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (!state.grid[row][col]) empties.push([row, col]);
    }
  }
  if (!empties.length) return;
  const [row, col] = empties[Math.floor(Math.random() * empties.length)];
  const value = Math.random() < 0.9 ? 2 : 4;
  state.grid[row][col] = createTile(value, row, col);
}

function renderRankList() {
  rankList.innerHTML = currentLabels()
    .map(([value, label]) => `<li><span>${label}</span><b>${value}</b></li>`)
    .join("");
}

function render() {
  const boardRect = boardEl.getBoundingClientRect();
  const gap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--gap")) || 12;
  const cellSize = (boardRect.width - gap * 5) / 4;
  boardEl.innerHTML = "";

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const tile = state.grid[row][col];
      if (!tile) continue;
      const el = document.createElement("div");
      el.className = `cell${tile.spawn ? " spawn" : ""}${tile.merge ? " merge" : ""}`;
      el.style.left = `${gap + col * (cellSize + gap)}px`;
      el.style.top = `${gap + row * (cellSize + gap)}px`;
      el.style.width = `${cellSize}px`;
      el.style.height = `${cellSize}px`;
      el.style.transform = "none";
      el.style.background = tileBackground(tile.value);
      el.style.color = tile.value >= 512 ? "#ffffff" : "#314069";
      el.dataset.label = tileLabel(tile.value);
      el.dataset.scale = tileLabel(tile.value).length >= 4 ? "3" : tileLabel(tile.value).length >= 3 ? "2" : "1";
      el.style.fontSize = fontSizeFor(tile.value);
      el.style.zIndex = String(2 + row * size + col);
      boardEl.appendChild(el);
    }
  }

  scoreEl.textContent = String(state.score);
  bestScoreEl.textContent = String(state.best);
  statePill.textContent =
    state.status === "lost" ? "已落第" : state.status === "won" ? `已${theme.maxLabel}加身` : `正在${theme.state}`;
  statePill.style.color = state.status === "lost" ? "#ff7d9d" : state.status === "won" ? "#ffd166" : "#9db4d8";
  undoBtn.disabled = history.length === 0;

  if (state.status === "won" && !winShown) {
    overlayTitle.textContent = theme.winTitle;
    overlayText.textContent = theme.winText;
    overlayBtn.textContent = theme.winButton;
    overlay.classList.remove("hidden");
    winShown = true;
  } else if (state.status === "lost") {
    overlayTitle.textContent = theme.loseTitle;
    overlayText.textContent = theme.loseText;
    overlayBtn.textContent = theme.loseButton;
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }

  save();
}

function tileLabel(value) {
  const match = currentLabels().find(([rankValue]) => rankValue === value);
  return match ? match[1] : theme.maxLabel;
}

function fontSizeFor(value) {
  const label = tileLabel(value);
  if (label.length >= 4) return "17px";
  if (label.length === 3) return "20px";
  return "25px";
}

function tileBackground(value) {
  const palette = theme.colors;
  const index = Math.max(0, Math.min(palette.length - 1, Math.log2(value) - 1));
  const amt = value >= 512 ? 8 : 22;
  return `linear-gradient(180deg, ${lighten(palette[index], amt)}, ${palette[index]})`;
}

function lighten(hex, amount) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  const r = Math.min(255, ((num >> 16) & 255) + amount);
  const g = Math.min(255, ((num >> 8) & 255) + amount);
  const b = Math.min(255, (num & 255) + amount);
  return `rgb(${r}, ${g}, ${b})`;
}

function move(direction) {
  if (state.status === "lost") return;
  if (state.status === "won" && !state.canContinue) return;

  const prev = cloneState(state);
  const result = slide(direction);
  if (!result.changed) return;

  history.push(prev);
  if (history.length > 8) history.shift();

  state.grid = result.grid;
  state.score += result.scoreGain;
  state.best = Math.max(state.best, state.score);

  const maxTile = getMaxTile();
  if (maxTile >= currentMaxTile()) {
    state.status = "won";
  }

  addRandomTile();
  if (!hasMoves()) {
    state.status = "lost";
  } else if (state.status !== "won") {
    state.status = "playing";
  }

  syncBest();
  render();
}

function slide(direction) {
  const grid = Array.from({ length: size }, () => Array(size).fill(null));
  let changed = false;
  let scoreGain = 0;
  const lines = getLines(direction);

  lines.forEach((line) => {
    const compact = [];
    const tiles = line
      .map(({ row, col }) => state.grid[row][col])
      .filter(Boolean)
      .map((tile) => ({ ...tile, spawn: false, merge: false }));

    for (let i = 0; i < tiles.length; i++) {
      const current = tiles[i];
      const next = tiles[i + 1];
      if (next && next.value === current.value) {
        const merged = createTile(current.value * 2, line[compact.length].row, line[compact.length].col);
        merged.spawn = false;
        merged.merge = true;
        compact.push(merged);
        scoreGain += merged.value;
        i++;
      } else {
        compact.push(current);
      }
    }

    compact.forEach((tile, index) => {
      const target = line[index];
      if (tile.row !== target.row || tile.col !== target.col) changed = true;
      tile.row = target.row;
      tile.col = target.col;
      grid[target.row][target.col] = tile;
    });

    if (compact.length !== tiles.length) changed = true;
  });

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const oldTile = state.grid[row][col];
      const newTile = grid[row][col];
      if (!!oldTile !== !!newTile) changed = true;
      if (oldTile && newTile && oldTile.value !== newTile.value) changed = true;
    }
  }

  return { grid, changed, scoreGain };
}

function getLines(direction) {
  const lines = [];
  if (direction === "left" || direction === "right") {
    for (let row = 0; row < size; row++) {
      const line = [];
      const cols = direction === "left" ? [0, 1, 2, 3] : [3, 2, 1, 0];
      cols.forEach((col) => line.push({ row, col }));
      lines.push(line);
    }
  } else {
    for (let col = 0; col < size; col++) {
      const line = [];
      const rows = direction === "up" ? [0, 1, 2, 3] : [3, 2, 1, 0];
      rows.forEach((row) => line.push({ row, col }));
      lines.push(line);
    }
  }
  return lines;
}

function hasMoves() {
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const tile = state.grid[row][col];
      if (!tile) return true;
      const neighbors = [state.grid[row + 1]?.[col], state.grid[row]?.[col + 1]];
      if (neighbors.some((n) => n && n.value === tile.value)) return true;
    }
  }
  return false;
}

function getMaxTile() {
  let max = 0;
  state.grid.forEach((row) => {
    row.forEach((tile) => {
      if (tile) max = Math.max(max, tile.value);
    });
  });
  return max;
}

function undo() {
  if (!history.length) return;
  state = history.pop();
  state.grid.forEach((row) => row.forEach((tile) => tile && (tile.spawn = false, tile.merge = false)));
  state.status = "playing";
  syncBest();
  render();
}

function bindEvents() {
  restartBtn.addEventListener("click", resetGame);
  themeBtn.addEventListener("click", toggleTheme);
  overlayBtn.addEventListener("click", () => {
    if (state.status === "lost") {
      resetGame();
    } else {
      state.canContinue = true;
      state.status = "playing";
      overlay.classList.add("hidden");
      render();
    }
  });
  undoBtn.addEventListener("click", undo);

  window.addEventListener(
    "keydown",
    (event) => {
      const keyMap = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down",
        a: "left",
        d: "right",
        w: "up",
        s: "down",
        A: "left",
        D: "right",
        W: "up",
        S: "down",
      };
      const direction = keyMap[event.key];
      if (!direction) return;
      event.preventDefault();
      move(direction);
    },
    { passive: false }
  );

  boardEl.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];
      touchStart = { x: touch.clientX, y: touch.clientY };
    },
    { passive: true }
  );

  boardEl.addEventListener(
    "touchend",
    (event) => {
      if (!touchStart) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStart.x;
      const dy = touch.clientY - touchStart.y;
      const threshold = 26;
      touchStart = null;
      if (Math.max(Math.abs(dx), Math.abs(dy)) < threshold) return;
      if (Math.abs(dx) > Math.abs(dy)) {
        move(dx > 0 ? "right" : "left");
      } else {
        move(dy > 0 ? "down" : "up");
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", () => render());
}

init();
