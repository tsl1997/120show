# 旅行图鉴之路（game/travel）项目与数据维护文档

> 本文面向**后续维护者与 AI**。先读 §5（当前状态）可避开重构期"地雷"。
> 游戏本体：纯前端旅行收集游戏。出生在武汉的主角觉醒「旅行图鉴系统」，通过**景点打卡 / 特色周边 / 奇闻趣事**（外加**系列收藏**）点亮图鉴赚取旅行基金，攒路费从中国一路环游世界；出境需先办护照、再按国家办签证。另有「异世界副本」（动漫 / 武侠 / 玄幻作品）与「主题系列收藏」（手办 / 徽章 / 文具等）。

---

## 0. 快速事实

| 项 | 值 |
|---|---|
| 在线入口 | 主站根页「游戏」卡片 → `./game/travel/index.html`（本仓库 `game/travel/`） |
| 技术栈 | 纯静态 HTML + 原生 JS + CSS，**零构建**，无框架无依赖 |
| 运行要求 | 必须走 HTTP 服务（`python -m http.server`），不能 `file://` 双击 |
| 存档 | `localStorage`，键 `travel_book_game_v1`，无后端 |
| 校验脚本 | `node check_data.js`（数据"编译期"检查，先跑它）；改过数据要先 `node tools/build_data.js` |
| 计划文档 | `data/cn/CN_PLAN.md`（国内城市场景扩充登记）、`data/isekai/PROGRESS.md`（异世界进度）、各作品目录内 `*_00_plan.md` |
| 数据规模 | 当前 202 个唯一城市：中国 52 + 异世界副本 83（动漫 53 / 武侠 15 / 玄幻 15）+ 国外现实城市 67（29 国，含南极洲 1 站）；系列收藏 332 个（11 个根文件 + 各副本 `*_series.js`） |

---

## 1. 目录与文件职责

```
game/travel/
├─ index.html        页面骨架（44 行，只挂 data-bundle.js + app.js）
├─ app.js            游戏引擎：状态、渲染、经济、事件（约 930 行，无模块化单文件）
├─ style.css         全部样式，CSS 变量主题（--bg/--ink/--red/--gold…）
├─ check_data.js     node 数据校验（自动递归加载 data/**，规则见 §3）
├─ data-order.txt    数据加载顺序清单（894 行；顺序影响地图/图鉴里的排列，见 §2.4）
├─ data-bundle.js    ⚠️ 由 tools/build_data.js 生成，勿手改；首屏唯一的数据请求
├─ tools/            维护用生成器（build_data.js / op_00_gen.js / sm_00_gen.js / anime_series_gen.js，非游戏运行时依赖）
├─ data/
│  ├─ series_*.js           11 个主题系列收藏根文件（挂 window.TRAVEL_SERIES）
│  ├─ cn/                   中国城市（<区域拼音>/<城市>/ 三分册+组装器，52 城已全部改造）
│  ├─ world/                国外城市（<大洲>/<国家二码CC>/<city>/ 三分册+组装器）
│  └─ isekai/               异世界副本（anime / wuxia / xuanhuan 三个类型目录，83 作品）
```

数据经 `window.TRAVEL_CITIES`（城市）与 `window.TRAVEL_SERIES`（系列）两个全局数组拼装，`app.js` 启动时读取：
`app.js:9` `CITIES = window.TRAVEL_CITIES`、`app.js:14` `SERIES = window.TRAVEL_SERIES`。

### 页面五大页签（app.js 视图函数）
| Tab | 入口 data-tab | 渲染函数 | 内容 |
|---|---|---|---|
| 🏙 本城 | city | `renderCity` | 当前城市四大子板块 spot/souvenir/story/series，逐条收集 |
| 🗺 世界地图 | map | `renderMap` | 中国 / 世界 / 异世界三种地图模式分层下钻 |
| 📖 图鉴 | book | `renderBook`(+`renderSeriesBook`) | 全量收集册，含系列收藏三层浏览 |
| 🎒 背包 | bag | `renderBag` | 已收 souvenirs 与系列物品 |
| 🛂 事务所 | office | `renderOffice` | 护照办理 + 各国签证办理 |

交互全部走全局 `click` 委托（`app.js:656`），靠元素上的 `data-act / data-subtab / data-booktab / data-mapmode / data-mapact / data-sval` 分发，新增按钮动作在 `document.addEventListener('click')` 分支里加即可。

---

## 2. 数据架构（改数据前必读）

### 2.1 城市对象 schema（push 进 `window.TRAVEL_CITIES`）

组装器示例（`data/cn/dongbei/changchun/changchun.js`、`data/world/asia/JP/fukuoka/fukuoka.js`、`data/isekai/wuxia/baima/isekai_baima.js`）：

```js
window.TRAVEL_CITIES.push({
  id: 'changchun',          // 必须全局唯一；= 组装器文件名。存档引用它，改名=玩家丢档
  name: '长春',             // 城市中文名
  country: '中国',          // 国家中文名（世界地图按它分组，见 COUNTRY_CONT）
  cc: 'CN',                 // 国家二码。cc!=='CN' 视为国外（需护照/签证）
  province: '吉林',         // 仅国内城市有：省级展示（地图卡片"cc-region"用）
  flag: '🇨🇳',               // 国家/作品旗帜 emoji
  region: '东北',           // 见下方"region 三种含义"
  hero: '🎬',               // 城市大图标（city-hero 水印）
  desc: '…',               // 一句话文案（city-hero / 地图卡片）
  travel: [{ name: '高铁', icon: '🚄', cost: 900 }, …],  // 到达方式，≥1 条
  visa: null,               // 国外必填 { cost, note }；cost===0 表示免签；国内写 null
  world: undefined,         // 仅异世界副本为 'isekai'
  labels: undefined,        // 可选：覆盖默认子板块文案（见下）
  spots: window.CC_SPOTS || [],     // 引用 window 分册数组（见 §2.4）
  souvenirs: window.CC_GIFTS || [],
  stories: window.CC_STORIES || [],
});
```

**`region` 三种含义（app 用途不同，别混用）：**
- 中国城市：中文大区名 `华中/华北/东北/西北/塞北/华东/东南/华南/西南/青藏/港澳台`，必须命中 `app.js:216` `CHINA_REGIONS`（新增/改名需同步该表）。
- 异世界：`isekai_anime | isekai_wuxia | isekai_xuanhuan`，对应地图「🌌异世界」的三个副本大类；显示文案映射在 `app.js:167`。
- 国外现实城市：子区域文案，如日本 `日本·九州`；只作地图内分组标题，不参与逻辑。

**`labels`（isekai 常用）**：键 `spotL/souvenirL/storyL`（板块名）与 `spotB/souvenirB/storyB`（按钮动词），如柯南 `{ spotL:'景点圣地', souvenirL:'特色宝物', storyL:'人物相遇', spotB:'前往', souvenirB:'获取', storyB:'相遇' }`。

### 2.2 条目对象 schema（分册里 push 的对象）

```js
// spots（景点）：id/name/icon/price/desc
{ id: 'changchun_weiman', name: '伪满皇宫博物院', icon: '🏛️', price: 70, desc: '…' }
// souvenirs（周边）：多 tag/type；price 可 0（免费）
{ id: 'cairo_koshari', name: '库沙利', icon: '🍚', tag: '食', type: '美食', price: 25, desc: '…' }
// stories（趣事/人物/事件）：无 price（奖励固定），conan 的分册 02~06/08 人物事件也都进 stories
{ id: 'cairo_story_pyramid', name: '金字塔的"十万工匠"', icon: '🔺', desc: '…' }
```

- `desc` ≥18 字、有画面感；避免连续 4+ 英文字母（校验告警）。
- `tag ∈ {衣,食,住,行,玩,游,闻}`（仅 souvenirs）；`type` 白名单见 `check_data.js:28` TYPES（美食/饮品/特产/文创/服饰/体验/住宿/宝物…，异世界另有 秘籍/法宝/手办/魂环/异火… 等，需加 type 时**同步扩展 TYPES**）。
- **id 全局唯一**，前缀 = 本城缩写。不同体系后缀习惯：中国城旧条目 `changchun_*`、新增 `ccp_/ccg_/ccs_`；武侠 `bmp_/bmc_/bmg_`；柯南 `coz_`(地点) 等。新条目保持该城前缀可读；改已发布 id = 玩家丢失收集。

### 2.3 系列收藏（`data/series_*.js` → `window.TRAVEL_SERIES`）

```js
A({ id: 'anime_doraemon', cat: 'anime', name: '哆啦A梦',
    years: '1970-至今', author: '藤子·F·不二雄', theme: '奇幻·日常',
    background: '…', story: '…', protagonist: '哆啦A梦', slogan: '…',
    cities: ['takaoka', 'tokyo'],
    items: [ { id: 'dora_figure', name: '…', type: '手办模型', city: 'takaoka', price: 160, desc: '…' }, … ] });
```

- `cat` ∈ `app.js:18` `SERIES_CATS` 八类：anime/isekai/tokusatsu/japan/usa/china/beauty/luxury。
- 系列名以 `（XXX）` 结尾时，app 自动归到分组「XXX」（`seriesGroupOf`）；个别特判在 `app.js:392`（如 `anime_onepiece`→航海王）。
- `items[].city` 必须指向已存在城市 id；这些物品会出现在该城的「本城·系列收藏」板块并计入城市/图鉴/背包进度。
- 系列 item 的 `type` 若需要图标，在 `app.js:17` `SERIES_TYPE_ICON` 补映射。
- 11 个系列根文件：series_anime_a/b、series_devilfruit、series_isekai_b、series_isekai_wuxia、series_isekai_xuanhuan、series_tokusatsu、series_world、series_china_a/b、series_japan_a。（series_isekai_a.js 已删除——火影/柯南人物改为直接在各副本目录内定义势力系列。）`check_data.js` 现已校验系列（`cat` 白名单、`items[].city` 必须存在、条目 id 全局唯一、price 合法），新增后跑一遍即可。

### 2.4 组装方式与加载顺序（最容易踩坑处）

分册文件把对象 push 进**按城市前缀命名的 window 数组**；组装器 push 城市时保存的是该数组的**活引用**（`window.CC_SPOTS || []`）。顺序仍然有意义——它决定城市/作品在「世界地图」「图鉴」里的**排列先后**——所以顺序被固化在 `data-order.txt`，由 `tools/build_data.js` 合并成 `data-bundle.js`：

1. **`index.html` 不再逐个挂载数据文件**，只挂 `data-bundle.js` + `app.js`（首屏从 895 个请求降到 2 个）。
2. **顺序来源是 `data-order.txt`**（一行一个路径，894 行），不是靠文件名推导——根目录 series 段与 isekai 段是人工排的，字母序会排乱。
3. **同一目录内约定：分册先、组装器后**（`<prefix>_01_spots.js`、`_02_gifts.js`、`_03_stories.js`，然后 `<city>.js`）。新增文件若没写进 `data-order.txt`，`build_data.js` 会自动插到同目录末尾并打印提示。
4. **多个分册可共用同一 window 数组**：柯南 co_02~06、co_08 都 push 进 `CO_STORIES`；小体量异世界作品用单个 `_01_all.js` 同时定义 `SPOTS/STORIES/GIFTS` 三个数组。
5. 校验脚本 `check_data.js` 会检查 `data-order.txt` 与磁盘双向一致、且 `data-bundle.js` 是最新的；**改完数据忘记重新生成 bundle 会被记为错误**。

> 改任何 `data/**` 文件后必须执行：`node tools/build_data.js && node check_data.js`

**三种数据形态对照**（读任何数据目录前先判断属于哪种）：
| 形态 | 文件构成 | 现状 | data-order.txt 内 |
|---|---|---|---|
| 分册式（推荐） | `<prefix>_01_spots / _02_gifts / _03_stories`(+`_00_plan.md`) + 组装器 `<city>.js` | 全部中国 52 城、日本已迁 18 城、异世界大部 | 每城 4 行（或按分册数） |
| 单册全量 | `<PREFIX>_01_all.js` + 组装器 `isekai_<work>.js` | 小体量武侠/玄幻异世界 | 每城 2 行 |
| 单体式（旧） | 单文件内联 spots/souvenirs/stories 直接 push | 世界非日本城市 | 每城 1 行 |

目录约定：`data/cn/<区域拼音>/<city>/`、`data/world/<大洲>/<CC二码>/<city>.js`、`data/isekai/<anime|wuxia|xuanhuan>/<work>/`。

### 2.5 app.js 经济与存档要点

- 经济常量 `ECON`（`app.js:41`）：初始基金 500、护照 120、签证按 `c.visa.cost`；奖励公式 `rewardOf`（`app.js:96`）：story 固定（国内 50/国外 80），spot/souvenir = `max(MIN_R, round(price×RATE))`，RATE 国内 3.0/国外 3.5；城市图鉴全收集奖金 国内 300/国外 600（记入 `cityBonus`，只发一次）。
- 存档默认结构 `defaultState`（`app.js:53`）字段：money、city、passport、visas{}、collected{ itemId:{k} }、visited[]、cityBonus{}、seenIntro、subTab、mapMode/mapRegion/mapContinent/mapCountry、bookTab、bookOpen{}、seriesCat、seriesSel。
- 地图逻辑（`app.js` 下）：`continentOf`（`app.js:248`）——isekai / CN 特判，其余查 `COUNTRY_CONT`（`app.js:238`），**新国家未入表会兜底归 `asia`**；新增国家/大区请同步 `COUNTRY_CONT` 与 `CONTINENT_META`。
- 系列图鉴三层浏览状态存 `seriesCat`/`seriesSel`；手风琴展开状态存 `bookOpen`。

---

## 3. 本地运行与校验

```bash
cd game/travel
python -m http.server 8000     # 然后访问 http://localhost:8000/game/travel/
node tools/build_data.js       # 改过任何 data 文件后：重新生成 data-bundle.js
node check_data.js             # 数据校验（必跑）
```

`check_data.js` 规则摘要：城市必需字段齐全；城市/条目/系列 id 全库唯一；travel/visa 合法；**spots/souvenirs/stories 不得为空（记错误）**，数量低于 spot 6 / souvenir 8 / story 4 仅告警；souvenir tag/type 白名单；描述 ≥18 字、无长英文；国外城建议 ≥1 免费条目；系列校验（`cat` 白名单、`items[].city` 必须存在、price 合法）；**`data-order.txt` 与 `data/**` 双向一致性（未登记 / 不存在 / 大小写不符均记错误）+ `data-bundle.js` 是否最新（文件数、顺序、缺漏）**；汇总 `国外≥国内`。**0 错误（`process.exitCode=1` 即红）才算通过。**

> Windows PowerShell 下 node 中文可能乱码（代码页问题），不影响判断；需读输出时用 `node check_data.js > out.txt` 再以 UTF-8 打开。

---

## 4. 内容扩充 SOP

### 4.1 新增 / 扩容一座国内城市（一次只做一座，参照 CN_PLAN.md）
1. `data/cn/<区域拼音>/<cityId>/` 建目录，规划前缀（全库唯一，拼城市拼音，如 长春=CC）。
2. 保留既有城市字段与**既有条目 id**（存档兼容），写 `_00_plan.md` 大纲 → 分册 `_01_spots` / `_02_gifts` / `_03_stories`。
3. 写组装器 `<cityId>.js` push 城市（spots 引用 `window.<前缀>_SPOTS`…）。
4. 执行 `node tools/build_data.js`：新文件会自动补进 `data-order.txt` 并重新生成 `data-bundle.js`（想指定位置就手动把路径插到 `data-order.txt` 的合适行）。
5. `node check_data.js` 0 错误 → 在 CN_PLAN 登记表打勾记录总条数（目标约 90–105 条/城，生活气息优先：早市/街区/方言/节庆/传说）。

### 4.2 新增异世界作品副本（参照 PROGRESS.md 与各 `*_00_plan.md`）
1. 建 `data/isekai/<anime|wuxia|xuanhuan>/<work>/`；city `id='isekai_<work>'`，`cc:'CN'`、`world:'isekai'`、`region` 对应三类、`travel:[穿越之门 520]`、`visa:null`，并配 `labels` 文案。
2. 分册 push window 数组 → 组装器 `isekai_<work>.js` 最后加载。
3. 跑 `node tools/build_data.js` 重新生成 bundle，再跑校验；在 PROGRESS.md 打勾；如需在作品上加"组合系列"（如少年侦探团/黑衣组织、草帽海贼团），在对应 `series_isekai_*.js` 增补。
4. 建议配套：在作品目录写 `*_00_plan.md` 记录结构与条数。

### 4.3 新增主题系列收藏
在对应 `series_*.js` 追加一个 `A({…})`；`items[].city` 用已存在城市 id；需新图标同步 `SERIES_TYPE_ICON`；注意系列名括号分组规则与特判表。

### 4.4 存档兼容红线（QA 自查单）
- 不改任何已发布城市 / 条目 / 系列的 `id`；只增不改是铁律。
- 删除城市会令旧档 `city` 悬空（app 有兜底 `|| CITIES[0]`，仍会弹回武汉，但 `collected` 残留无害）。
- 经济数值、文案、图标改动不破坏存档。

---

## 5. 当前开发状态（2026-09-10，接手先读）

> 数据已达 **202 城、332 个系列**。`node check_data.js` **0 错误、35 个告警**（告警均为小体量武侠/玄幻作品条目偏少、个别 tag 覆盖不足，属正常）。

### 已完成
- **JP 19 城全部分册化**：旧单体文件已删除，`index.html` 日本段已按「3 分册 + 组装器」重写；国外现实城市也已全部按「3 分册 + 组装器」改造。
- **动漫副本系列化（6/6 完成）**：海贼王、美少女战士、龙珠、灌篮、火影、柯南的人物已全部从 stories 迁入各副本目录的**势力系列**（TRAVEL_SERIES），stories 只保留剧情名场面；旧 `series_isekai_a.js`（历代火影/侦探团/黑衣组织等重复小系列）已删除，由更全的副本内势力系列取代。生成器：`tools/op_00_gen.js` / `tools/sm_00_gen.js` / `tools/anime_series_gen.js`。
- app.js 已支持：同一副本多系列按 `color` 分色块展示（本城·系列收藏分组、图鉴系列详情着色、图鉴列表行色点），系列无 color 时按 id 哈希配色。

### 待办
- 武侠副本仍为旧结构（人物在 stories 里），如需可按玄幻/动漫同法系列化；玄幻副本已带 `*_series.js`。

### 已完成（2026-09-12）
- **新增城市「南极科考站」**（`data/world/antarctica/AQ/antarctica/`，id `antarctica`）：世界地图上「🐧 南极洲」由 0 城变为 1 城。10 景点 / 12 周边 / 9 趣事，共 31 条；免签；美元计价（`app.js` FX 表新增 `AQ`）；船票 32000/36000/42000 为全库最贵，定位后期"极地探险终点"。详见该目录下 `ant_00_plan.md`。

### 已完成（2026-09-11）
- **数据加载改造**：894 个手写 `<script>` → `data-order.txt` + `tools/build_data.js` 合并成单个 `data-bundle.js`。`index.html` 从 937 行降到 44 行，首屏数据请求从 895 个降到 1 个；加载顺序与原挂载逐项比对完全一致（894/894）。
- **图鉴懒渲染**：`renderBook` 原先一次性把全部 11,362 个格子写进 DOM（折叠状态也渲染），改为展开时才渲染（新函数 `bookBodyHTML`）。打开图鉴页的 DOM 元素从约 4.6 万降到 1,442。
- **修复本城页白屏**：`renderCity()` 原先在 `if (!c)` 判空**之前**就访问 `c.labels`，存档里城市 id 失效时会 TypeError 白屏；现改为回退到出生城市武汉并修正存档（新增 `homeCity()`，与 `renderHUD` 共用）。
- **修复系列色注入**：`seriesColor()` 现在只接受合法 hex（该值会被直接拼进 style 属性）；现有 33 种颜色全部合法，配色无变化。
- 验证：`node check_data.js` 0 错误 / 35 警告（与改造前一致）；jsdom DOM 冒烟测试 19/19 通过。

### 已修复（2026-09-10）
- 修复**本城页崩溃**：`app.js` 收集按钮误用 `fmtLocal(price, fxOf(c))`，而 `fxOf` 对国内/异世界城市返回 `null`，导致 `null.sym` 报错、页面空白（曾影响所有城市）。改为 `fxOf(c) ? fmtLocal(...) : fmtMoney(...)`，已对 201 城 × 7 视图共 1411 项渲染验证通过。
- 修复「佛本是道·蜀山」空城：组装器变量名 `FBD_*` → `FD_*`，`index.html` 改挂 `fd_01/02/03`（原先误挂已删除的 `FBD_01_all.js`），并补全过短描述。
- 修复 5 个武侠分册在 `index.html` 中的**大小写不符**（BM/LC/XK/YY/YE → 小写），避免部署到 Linux 时 404。
- `check_data.js` 增强：空城市记错误、数量告警只设下限、新增系列校验与 index.html 挂载一致性校验（告警从 555 条噪音降到 35 条有效项）。
- 清理仓库根目录的临时/生成器脚本，生成器统一移入 `tools/`。

### 提交建议
- 分多条提交：① 数据修复（fo + 大小写）；② check_data 增强；③ 清理与文档。风格参考 `git log --oneline`。

---

## 6. 其它注意
- 全部文件 UTF-8（含中文与 emoji）；勿用 GBK 编辑器覆盖保存，否则会像 `git diff` 里那样出现乱码字节。
- app.js / 分册内文案字符串大量使用 emoji 与全角标点，编辑时保持原风格（中文双引号等）以免打断模板拼接。
- `check_data.js` 是数据唯一自动化防线；改完 data 记得跑，别只看浏览器。
