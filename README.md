# 120.show 项目说明

English version: `README.en.md`

`120.show` 是一个纯静态的个人实验站点，以 `index.html` 为导航入口，收录了 Web3 工具、视觉交互页面、内容工具和资源索引。

项目特点：

- 纯前端，无后端依赖（静态托管即可运行）。
- 多页面独立设计，互相低耦合，便于单页维护。
- 部分页面依赖浏览器能力（钱包扩展、摄像头、剪贴板等）。

## 在线地址

- 主站：`https://120.show/`
- 站点地图：`https://120.show/sitemap.xml`

## 快速开始

### 1) 克隆并进入目录

```bash
git clone <your-repo-url>
cd 120show
```

### 2) 使用本地 HTTP 服务启动（必须）

不要直接双击 HTML 用 `file://` 打开。部分页面使用了 `fetch`（如 `qing/data.json`），在 `file://` 协议下会被浏览器安全策略拦截。

```bash
python -m http.server 8000
```

访问：

- `http://localhost:8000/`
- `http://localhost:8000/qing/`
- `http://localhost:8000/text/`

## 技术栈与运行方式

- 核心形态：静态 HTML + CSS + JavaScript
- Web3 相关页面：`ethers.js`、钱包注入对象（`window.ethereum`）
- `text/` 子项目：`Vue 3` + `TailwindCSS` + `ethers.js`（CDN 直连）
- 构建流程：无（Zero Build）

> 说明：由于多个页面通过 CDN 加载前端依赖，离线环境或网络受限环境下可能出现资源加载失败。

## 页面与模块导航

### 主页入口

- `index.html`：主导航页，按「Web3 实验 / 视觉交互 / 内容工具」分组展示。
  - Web3 分类在主页仅保留一个合集入口（`web3/index.html`），所有 Web3 工具在合集页内分类导航。

### Web3 实验

Web3 工具统一由 `web3/index.html` 作为合集入口，按功能分类：

- **转账**
  - `web3/transfer.html`：EVM 测试网转账（21 个测试网，可自定义 RPC）。
  - `web3/transfer-trx.html`：TRX 测试网转账（Shasta / Nile）。
  - `web3/transfer-sol.html`：SOL 测试网转账（Devnet / Testnet）。
- **钱包生成**
  - `web3/wallet-evm.html`：EVM 钱包批量生成（CSV / TXT 导出）。
  - `web3/wallet-trx.html`：TRX 钱包批量生成（CSV / TXT 导出）。
  - `web3/wallet-sol.html`：SOL 钱包批量生成（CSV / TXT 导出）。
  - `web3/wallet.html`：离线 EVM 钱包生成器（普通 / 前后缀定制靓号）。
- **余额检查**
  - `airdrop/testnet.html`：多测试网地址余额检查。
  - `airdrop/balance-trx.html`：TRX 测试网余额检查（txt / csv 导入）。
  - `airdrop/balance-sol.html`：SOL 测试网余额检查（txt / csv 导入）。
- **部署与合约**
  - `web3/deploy.html`：合约部署测试台。
  - `web3/deploybot.html`：DeployBot 执行台（策略自动化）。
- **协议与实验**
  - `web3/send.html`：以太坊转账全景（含 EOA 与 CREATE2 场景展示）。
  - `web3/aa.html`：AA 账号体验台（Sepolia 相关流程）。
- **其他**
  - `tool/testnet.html`：多链测试网信息速查（官网 / 浏览器 / 水龙头 / RPC）。
  - `text/index.html`：全链存证与内容发布页面（独立 DApp）。

### 视觉交互

- `camera/picture/index.html`：人脸追踪图库交互（需摄像头权限）。
- `camera/smokeflower/index3.html`：手势烟火 AR 页面（需摄像头权限）。
- `qifu/index.html`：赛博祈福轻交互页。

### 内容工具 / 资源页

- `tool/2fa.html`：2FA 验证码工具（本地存储账户信息）。
- `tool/opencode.html`：OpenCode 配置生成器（支持连接 `/models` 测试接口）。
- `qing/index.html`：轻小说下载中心（数据源为 `qing/data.json`）。
- `zlib/index.html`：共享入口工具页。

## 目录结构

```text
120show/
├─ index.html
├─ README.md
├─ sitemap.xml
├─ robots.txt
├─ CNAME
├─ web3/          # Web3 工具合集（转账 / 钱包生成 / 部署 / 实验）
├─ airdrop/       # 余额检查工具
├─ camera/
├─ qing/
├─ qifu/
├─ zlib/
├─ tool/          # 通用工具（testnet 信息速查等）
└─ text/
```

## 数据维护说明

### `qing/` 轻小说数据

- 原始文本：`qing/轻小说存储地址2.txt`
- 转换脚本：`qing/转换.py`
- 前端数据：`qing/data.json`

更新流程（在 `qing/` 目录）：

```bash
python 转换.py
```

脚本会将文本条目解析为 JSON，并覆盖生成 `data.json`。

### `text/` 全链存证子项目

- 入口：`text/index.html`
- 配置主文件：`text/config.js`
- 兼容配置：`text/config6.js`
- 历史版本归档：`text/archive/`
- 子项目说明：`text/README.MD`

## 常见问题（FAQ）

### 页面空白 / 数据加载失败

- 请确认不是通过 `file://` 打开。
- 请确认本地服务正常运行，且地址为 `http://localhost:8000`。

### 钱包相关功能不可用

- 请确认浏览器已安装 MetaMask 等 EVM 钱包扩展。
- 请切换到页面要求的网络（如 Sepolia）。

### 摄像头页面无法工作

- 请授予浏览器摄像头权限。
- 建议使用最新版 Chromium 内核浏览器。

## 安全与隐私提示

- `tool/2fa.html` 使用本地存储保存数据，请自行保护本机环境。
- `web3/wallet.html`、`web3/wallet-evm.html`、`web3/wallet-trx.html`、`web3/wallet-sol.html` 涉及私钥生成，请在可信设备和网络环境中使用。
- 任何链上交互前请先在测试网验证流程，避免主网误操作。

## 许可

当前仓库未显式声明统一 License。

如需开源分发，建议先补充 `LICENSE` 文件并明确各子模块许可范围。
