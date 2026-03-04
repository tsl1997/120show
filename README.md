# 120.show 项目说明

这是一个以 `index.html` 为入口的个人主页项目，包含 Web3、视觉交互、内容工具等多个独立页面。

## 本地调试注意事项（重要）

- 不要直接双击 HTML 文件用 `file://` 打开（例如 `file:///.../qing/index.html`）。
- 原因：页面里使用了 `fetch('data.json')` 读取数据，`file://` 场景下浏览器会因为同源/CORS 安全策略拦截请求。
- 正确方式：请使用本地 HTTP 服务启动项目后访问。

示例（在项目根目录执行）：

```bash
python -m http.server 8000
```

然后在浏览器访问：

- `http://localhost:8000/`
- `http://localhost:8000/qing/`

## 目录简述

- `index.html`：个人主页入口
- `web3/`：链上交互实验
- `camera/`：视觉交互实验
- `qing/`：轻小说下载中心（依赖 `data.json`）
- `qifu/`、`zlib/`、`airdrop/`、`text/`：其他独立页面
