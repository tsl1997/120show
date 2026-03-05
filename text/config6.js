// config6.js
// 兼容层：将 config.js (window.NETWORKS) 映射为旧版页面使用的 NETWORKS 常量。

(function () {
    const source = window.NETWORKS || {};
    const mapped = {};

    Object.keys(source).forEach((chainId) => {
        const item = source[chainId] || {};
        mapped[chainId] = {
            name: item.name || chainId,
            proxy: item.proxy || "",
            rpc: item.rpc || ""
        };
    });

    window.NETWORKS_V6 = mapped;
})();

const NETWORKS = window.NETWORKS_V6 || {};
