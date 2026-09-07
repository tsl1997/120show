# 异世界副本扩充总进度

> ✅ **全部完成（2026-09-07）**：36个作品全部重写，总计约5400条目，check_data.js 校验0错误。
> 流程：每作品 = spots分册 + stories分册(剧情名场面) + gifts分册 + 势力系列（TRAVEL_SERIES） + 组装器(isekai_xxx.js) + index.html挂载 + check_data校验。
> 分册window数组命名：SP/ST/GF 加作品前缀。动漫副本的人物已迁入各副本目录内的势力系列（生成器 anime_series_gen.js / op_00_gen.js / sm_00_gen.js）。
> 三个分类目录：anime / wuxia / xuanhuan。

## 已完成
- ✅ wuxia 已完成15作：tianlong97/sheDiao95/shendiao92/yitian95/xiaoao85/luding75/shujian40/bixue50/feihu45/xueshan30/liancheng40/xiake40/baima20/yuanyang20/yuenv20（约数）
- ✅ db 龙珠（新建）：93条（db_01~03 + db_series 3势力系列，2026-09-07 系列化）
- ✅ onepiece 海贼王：607条（op_01~op_10）+系列「草帽海贼团伙伴」
- ✅ naruto 火影忍者：229条（na_01~na_09；na_02~na_07 已改为势力系列，2026-09-07）
- ✅ conan 柯南：177条（co_01~co_08；co_02~co_06 已改为势力系列，2026-09-07）
- ✅ slamdunk 灌篮高手：97条（sl_01~03 + sl_series 3势力系列，2026-09-07）
- ✅ sailormoon 美少女战士：84条（sm_01~03 + sm_series 7势力系列，2026-09-07 系列化）

## 待办清单（按顺序推进）
| # | 作品 | 文件夹 | 状态 |
|---|---|---|---|
| 4 | 灌篮高手 | anime/slamdunk | ✅ |
| 5 | 美少女战士 | anime/sailormoon | ✅ |
| 6 | 龙珠（新建，index.html已引用） | anime/db | ✅ |
| 7 | 天龙八部 | wuxia/tianlong | ✅ |
| 8 | 射雕英雄传 | wuxia/sheDiao | ✅ |
| 9 | 神雕侠侣 | wuxia/shendiao | ✅ |
| 10 | 倚天屠龙记 | wuxia/yitian | ✅ |
| 11 | 笑傲江湖 | wuxia/xiaoao | ✅ |
| 12 | 鹿鼎记 | wuxia/luding | ✅ |
| 13 | 书剑恩仇录 | wuxia/shujian | ✅ |
| 14 | 碧血剑 | wuxia/bixue | ✅ |
| 15 | 飞狐外传 | wuxia/feihu | ✅ |
| 16 | 雪山飞狐 | wuxia/xueshan | ✅ |
| 17 | 连城诀 | wuxia/liancheng | ✅ |
| 18 | 侠客行 | wuxia/xiake | ✅ |
| 19 | 白马啸西风 | wuxia/baima | ✅ |
| 20 | 鸳鸯刀 | wuxia/yuanyang | ✅ |
| 21 | 越女剑 | wuxia/yuenv | ✅ |
| 22 | 斗罗大陆 | xuanhuan/douluo | ✅ |
| 23 | 斗破苍穹 | xuanhuan/doupo | ✅ |
| 24 | 遮天 | xuanhuan/zhetian | ✅ |
| 25 | 盘龙 | xuanhuan/panlong | ✅ |
| 26 | 武动乾坤 | xuanhuan/wudong | ✅ |
| 27 | 大主宰 | xuanhuan/dazhuzai | ✅ |
| 28 | 星辰变 | xuanhuan/xingchen | ✅ |
| 29 | 吞噬星空 | xuanhuan/tunshi | ✅ |
| 30 | 莽荒纪 | xuanhuan/manghuang | ✅ |
| 31 | 神墓 | xuanhuan/shenmu | ✅ |
| 32 | 阳神 | xuanhuan/yangshen | ✅ |
| 33 | 雪鹰领主 | xuanhuan/xueying | ✅ |
| 34 | 完美世界·圣墟 | xuanhuan/wanmei_shengxu | ✅ |
| 35 | 佛本是道 | xuanhuan/fo | ✅ |
| 36 | 龙蛇演义 | xuanhuan/longshe | ✅ |

## 系列收藏计划
- series_isekai_b.js：湘北先发五虎（灌篮）/ 七颗龙珠（龙珠）/ 内部水手战士（美战）
- series_isekai_wuxia.js：武林绝学系列（金庸功法）/ 金庸美人系列 / 神兵利器系列
- series_isekai_xuanhuan.js：异火榜（斗破）/ 封号斗罗（斗罗）/ 天帝人皇（遮天）等

## 完成后统一动作
1. index.html 挂载分册（在对应 isekai_*.js 行之前插入）
2. node check_data.js 校验
3. 本文件打勾
