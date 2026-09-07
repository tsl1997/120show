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
| 校验脚本 | `node check_data.js`（数据"编译期"检查，先跑它） |
| 计划文档 | `data/cn/CN_PLAN.md`（国内城市场景扩充登记）、`data/isekai/PROGRESS.md`（异世界进度）、各作品目录内 `*_00_plan.md` |
| 数据规模 | 当前 154 个唯一城市：中国 52 + 异世界副本 36 + 国外现实城市 71（28 国）；系列收藏 12 个 data 根文件 |

---

## 1. 目录与文件职责

```
game/travel/
├─ index.html        页面骨架 + 全部数据文件的 <script> 挂载清单（顺序敏感，见 §2.4）
├─ app.js            游戏引擎：状态、渲染、经济、事件（约 684 行，无模块化单文件）
├─ style.css         全部样式，CSS 变量主题（--bg/--ink/--red/--gold…）
├─ check_data.js     node 数据校验（自动递归加载 data/**，规则见 §3）
├─ data/
│  ├─ series_*.js           12 个主题系列收藏文件（挂 window.TRAVEL_SERIES）
│  ├─ cn/                   中国城市（<区域拼音>/<城市>/ 三分册+组装器，52 城已全部改造）
│  ├─ world/                国外城市（<大洲>/<国家二码CC>/<city>.js；日本已分册化，见 §5）
│  └─ isekai/               异世界副本（anime / wuxia / xuanhuan 三个类型目录，36 作品）
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
- 12 个系列根文件：series_anime_a/b、series_devilfruit、series_isekai_b、series_isekai_wuxia、series_isekai_xuanhuan、series_tokusatsu、series_world、series_china_a/b、series_japan_a。（series_isekai_a.js 已删除——火影/柯南人物改为直接在各副本目录内定义势力系列。）**`check_data.js` 目前不校验系列**，新增时自检 city/type/id。

### 2.4 组装方式与挂载顺序（最容易踩坑处）

分册文件把对象 push 进**按城市前缀命名的 window 数组**；组装器 push 城市时保存的是该数组的**活引用**（`window.CC_SPOTS || []`），因此只要分册与组装器都在 app.js 前加载，同城文件先后几乎不影响结果，但项目仍约定严格顺序：

1. **分册先、组装器后**（推荐 4 行/城）：`<city>/<prefix>_01_spots.js`、`_02_gifts.js`、`_03_stories.js`、然后 `<city>.js`。
2. **组装器在数据阶段**会同时向 `TRAVEL_CITIES` push；而 series 文件名不带前缀、只声明数据，二者都必须在 `app.js` 之前（当前 index 中 series 段排最前）。
3. **多个分册可共用同一 window 数组**：柯南 co_02~06、co_08 都 push 进 `CO_STORIES`；小体量异世界作品用单个 `_01_all.js` 同时定义 `SPOTS/STORIES/GIFTS` 三个数组。
4. 校验脚本 `check_data.js` 自动递归读 `data/**`，并把 `isekai_*.js`（组装器）排序到所有分册之后模拟上述顺序。

**三种数据形态对照**（读任何数据目录前先判断属于哪种）：
| 形态 | 文件构成 | 现状 | index.html 挂载 |
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
node check_data.js             # 数据校验（改过任何 data 文件后必跑）
```

`check_data.js` 规则摘要：城市必需字段齐全；城市/条目 id 全库唯一；travel/visa 合法；spot 6–10、souvenir 12–18、story 4–7（越界仅告警）；souvenir tag/type 白名单；描述 ≥18 字、无长英文；国外城建议 ≥1 免费条目；单城净赚落在 2000–12000 健康区间；汇总 `国内≥国外`。**0 错误（`process.exitCode=1` 即红）才算通过。**

> Windows PowerShell 下 node 中文可能乱码（代码页问题），不影响判断；需读输出时用 `node check_data.js > out.txt` 再以 UTF-8 打开。

---

## 4. 内容扩充 SOP

### 4.1 新增 / 扩容一座国内城市（一次只做一座，参照 CN_PLAN.md）
1. `data/cn/<区域拼音>/<cityId>/` 建目录，规划前缀（全库唯一，拼城市拼音，如 长春=CC）。
2. 保留既有城市字段与**既有条目 id**（存档兼容），写 `_00_plan.md` 大纲 → 分册 `_01_spots` / `_02_gifts` / `_03_stories`。
3. 写组装器 `<cityId>.js` push 城市（spots 引用 `window.<前缀>_SPOTS`…）。
4. `index.html`：旧单文件引用替换/新增为该城"分册×N + 组装器"行。
5. `node check_data.js` 0 错误 → 在 CN_PLAN 登记表打勾记录总条数（目标约 90–105 条/城，生活气息优先：早市/街区/方言/节庆/传说）。

### 4.2 新增异世界作品副本（参照 PROGRESS.md 与各 `*_00_plan.md`）
1. 建 `data/isekai/<anime|wuxia|xuanhuan>/<work>/`；city `id='isekai_<work>'`，`cc:'CN'`、`world:'isekai'`、`region` 对应三类、`travel:[穿越之门 520]`、`visa:null`，并配 `labels` 文案。
2. 分册 push window 数组 → 组装器 `isekai_<work>.js` 最后加载。
3. `index.html` 挂分册+组装器；跑校验；在 PROGRESS.md 打勾；如需在作品上加"组合系列"（如少年侦探团/黑衣组织、草帽海贼团），在对应 `series_isekai_*.js` 增补。
4. 建议配套：在作品目录写 `*_00_plan.md` 记录结构与条数。

### 4.3 新增主题系列收藏
在对应 `series_*.js` 追加一个 `A({…})`；`items[].city` 用已存在城市 id；需新图标同步 `SERIES_TYPE_ICON`；注意系列名括号分组规则与特判表。

### 4.4 存档兼容红线（QA 自查单）
- 不改任何已发布城市 / 条目 / 系列的 `id`；只增不改是铁律。
- 删除城市会令旧档 `city` 悬空（app 有兜底 `|| CITIES[0]`，仍会弹回武汉，但 `collected` 残留无害）。
- 经济数值、文案、图标改动不破坏存档。

---

## 5. 当前开发状态（2026-09-07，接手先读）

> 工作区有一大波**未提交的重构**（日本迁移 + 异世界系列化）。`node check_data.js` 已归 0 错误（通过），154 个唯一城市。

### 已完成
- **JP 19 城全部分册化**：旧单体文件已删除，`index.html` 日本段已按「3 分册 + 组装器」重写。
- **动漫副本系列化（6/6 完成）**：海贼王、美少女战士、龙珠、灌篮、火影、柯南的人物已全部从 stories 迁入各副本目录的**势力系列**（TRAVEL_SERIES），stories 只保留剧情名场面；旧 `series_isekai_a.js`（历代火影/侦探团/黑衣组织等重复小系列）已删除，由更全的副本内势力系列取代。生成器：`op_00_gen.js` / `sm_00_gen.js` / `anime_series_gen.js`。
- app.js 已支持：同一副本多系列按 `color` 分色块展示（本城·系列收藏分组、图鉴系列详情着色、图鉴列表行色点），系列无 color 时按 id 哈希配色。

### 待办
- 武侠/玄幻副本仍为旧结构（人物在 stories 里），如需可按同法系列化。
- 国外非日本城市仍为单体式，如需扩容可同法分册化。

### 提交建议
- 分多条提交：① JP 迁移；② 海贼王系列化；③ 美少女战士系列化；④ 龙珠/灌篮/火影/柯南系列化 + app 配色支持。风格参考 `git log --oneline`。

---

## 6. 其它注意
- 全部文件 UTF-8（含中文与 emoji）；勿用 GBK 编辑器覆盖保存，否则会像 `git diff` 里那样出现乱码字节。
- app.js / 分册内文案字符串大量使用 emoji 与全角标点，编辑时保持原风格（中文双引号等）以免打断模板拼接。
- `check_data.js` 是数据唯一自动化防线；改完 data 记得跑，别只看浏览器。
