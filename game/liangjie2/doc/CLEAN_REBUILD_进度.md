# Clean rebuild progress

本文档由 AI 生成，用于记录本次清空代码后的重建进度。原有 `doc/` 资料仍保留；本文件是本次实现的唯一进度记录，不把旧版代码当作参考实现。

| 阶段 | 状态 | 说明 |
|---|---|---|
| 清除旧代码 | completed | 已删除 index.html、style.css、js/data.js、js/game.js、js/world-v2.js、js/game-v2.js |
| 读取规则 | completed | 已读取原始说明和 50-169 扩展资料；发现部分 AI 生成规则与用户要求冲突，按用户要求优先 |
| 干净架构 | completed | 见 `REBUILD_PLAN.md` |
| 领域数据 | in_progress | 先建立现代北京、历史北京、双世界、路线、价格和库存数据 |
| 界面 | pending | 背包和钱包使用真实可点击标签 |
| AI | pending | 保留 OpenAI-compatible 接入，但不让 AI 直接修改货币余额或跳过交通/税务校验 |
| 测试 | pending | 数据验证、状态隔离、时间推进、路线发现、背包操作、页面检查 |

## 不可回退规则

- 不恢复任何被删除的旧 JavaScript。
- 不将城市内部 ID、市场渠道 ID、英文枚举直接显示给玩家。
- 不用 0 代表缺货、未知、年代不适用或没有资料。
- 不用一个全局时间戳保存两界时间。
- 不用城市下拉框实现瞬移。
