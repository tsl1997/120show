# 120.show Project Guide

`120.show` is a static personal lab website. The main entry is `index.html`, which links to multiple independent pages for Web3 tools, visual interaction demos, and content utilities.

Project highlights:

- Pure frontend, no backend required.
- Independent pages with low coupling, easy to maintain.
- Some pages require browser capabilities (wallet extension, camera, clipboard).

## Online Links

- Main site: `https://120.show/`
- Sitemap: `https://120.show/sitemap.xml`

## Quick Start

### 1) Clone and enter project

```bash
git clone <your-repo-url>
cd 120show
```

### 2) Start a local HTTP server (required)

Do not open pages via `file://`. Some pages use `fetch` (for example `qing/data.json`), and browsers will block those requests under file protocol.

```bash
python -m http.server 8000
```

Then open:

- `http://localhost:8000/`
- `http://localhost:8000/qing/`
- `http://localhost:8000/text/`

## Stack and Runtime

- Base: static HTML + CSS + JavaScript
- Web3 pages: `ethers.js` + injected wallet object (`window.ethereum`)
- `text/` subproject: `Vue 3` + `TailwindCSS` + `ethers.js` from CDN
- Build step: none (Zero Build)

Note: several pages load dependencies from CDN, so restricted/offline environments may fail to load assets.

## Page Navigation

### Main entry

- `index.html`: central navigation page grouped by Web3 / Visual Interaction / Tools.
  - The Web3 category on the homepage keeps a single hub entry (`web3/index.html`); all Web3 tools are categorized inside the hub.

### Web3 pages

Web3 tools are unified under `web3/index.html` as a hub, grouped by function:

- **Transfer**
  - `web3/transfer.html`: EVM testnet transfer (21 testnets, custom RPC).
  - `web3/transfer-trx.html`: TRX testnet transfer (Shasta / Nile).
  - `web3/transfer-sol.html`: SOL testnet transfer (Devnet / Testnet).
- **Wallet generation**
  - `web3/wallet-evm.html`: EVM wallet batch generator (CSV / TXT export).
  - `web3/wallet-trx.html`: TRX wallet batch generator (CSV / TXT export).
  - `web3/wallet-sol.html`: SOL wallet batch generator (CSV / TXT export).
  - `web3/wallet.html`: offline EVM wallet generator (vanity prefix/suffix).
- **Balance checker**
  - `airdrop/testnet.html`: multi-testnet address balance checker.
  - `airdrop/balance-trx.html`: TRX testnet balance checker (txt / csv import).
  - `airdrop/balance-sol.html`: SOL testnet balance checker (txt / csv import).
- **Deployment & contracts**
  - `web3/deploy.html`: contract deployment test page.
  - `web3/deploybot.html`: DeployBot execution console (automated strategies).
- **Protocols & experiments**
  - `web3/send.html`: Ethereum transfer playground (EOA and CREATE2 scenarios).
  - `web3/aa.html`: Account Abstraction playground (Sepolia-related flow).
- **Others**
  - `tool/testnet.html`: multi-chain testnet info lookup (official site / explorer / faucet / RPC).
  - `text/index.html`: multi-chain content registry and publishing DApp.

### Visual interaction pages

- `camera/picture/index.html`: head-motion gallery interaction (camera required).
- `camera/smokeflower/index3.html`: gesture fireworks AR page (camera required).
- `qifu/index.html`: lightweight wish/interaction page.

### Tool and resource pages

- `tool/2fa.html`: 2FA code tool (stores data in local storage).
- `tool/opencode.html`: OpenCode config generator (supports `/models` endpoint test).
- `qing/index.html`: light novel download center (data from `qing/data.json`).
- `zlib/index.html`: shared access utility page.

## Directory Structure

```text
120show/
|- index.html
|- README.md
|- README.en.md
|- sitemap.xml
|- robots.txt
|- CNAME
|- web3/          # Web3 tool hub (transfer / wallet / deploy / experiments)
|- airdrop/       # balance checker tools
|- camera/
|- qing/
|- qifu/
|- zlib/
|- tool/          # general tools (testnet info lookup, etc.)
`- text/
```

## Data Maintenance

### `qing/` light novel data

- Source text: `qing/轻小说存储地址2.txt`
- Converter script: `qing/转换.py`
- Frontend data: `qing/data.json`

Update flow (run inside `qing/`):

```bash
python 转换.py
```

The script parses source text and regenerates `data.json`.

### `text/` subproject

- Entry: `text/index.html`
- Main config: `text/config.js`
- Compatibility config: `text/config6.js`
- Archived versions: `text/archive/`
- Subproject doc: `text/README.MD`

## FAQ

### Page is blank or data fails to load

- Make sure you are not using `file://`.
- Make sure local server is running at `http://localhost:8000`.

### Wallet features do not work

- Install MetaMask or another EVM-compatible wallet extension.
- Switch to the network required by the page (for example Sepolia).

### Camera pages do not work

- Grant camera permissions in your browser.
- Use a modern Chromium-based browser.

## Security Notes

- `tool/2fa.html` stores data in browser local storage; secure your local device.
- `web3/wallet.html`, `web3/wallet-evm.html`, `web3/wallet-trx.html`, `web3/wallet-sol.html` can generate private keys; use only in a trusted environment.
- Test every on-chain flow on testnets before using mainnet.

## License

No unified repository license is currently declared.

If you plan to distribute this project, add a `LICENSE` file first and define scope for submodules.
