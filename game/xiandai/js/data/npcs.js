/* ================================================================
   两界人生 · NPC 人物表（NPCS）
   字段说明见 doc/4数据表说明.md
   ================================================================ */

/* ---------------- NPC表 ----------------
   id: 中文名，作 key（也是好感数组的 key）
   world: '26' 现代 | '80' 旧时
   place: 所在店铺 id（见 SHOPS）
   age: 年龄（送礼/剧情用）
   female: 是否女性（看电影/美颜丹判定）
   married: 是否已婚
   likes: 特别喜欢/接受的物品id或标签（送礼只收喜欢的）
   pregUntil: 到某年还是孕妇（张姨1981后生娃）
   desc: 简介
----------------------------------------------- */
const NPCS = {
  "老王头":  { world:"26", place:"wangtou", age:65, likes:["tobacco","liquor","烟票","酒票"], desc:"小卖铺老板，爱抽旱烟" },
  "王富贵":  { world:"26", place:"wangfugui", age:50, likes:["maotai","zhonghua","stamp_monkey"], desc:"老王头儿子，海外经商归来，收藏家" },
  "虾仁":    { world:"26", place:"xiaren", age:30, likes:["cap","beauty"], desc:"跨位面废品回收站老板" },
  "顾老板":  { world:"26", place:"caipiao", age:45, likes:["maotai","zhonghua","stamp_monkey"], desc:"福利彩票店老板，卖刮刮乐" },
  "马总":    { world:"26", place:"kuaidi", age:55, likes:["maotai","zhonghua"], desc:"阿狸bb的马总，退休后开快递站体验生活" },
  "张姨":    { world:"80", place:"liangdian", age:30, female:true, married:true, pregUntil:1981, likes:["补品","sugar","guantou","noodle"], desc:"粮店老板，1980年怀孕" },
  "何雨柱":  { world:"80", place:"fandian", age:42, likes:["maotai","zhonghua","酒票"], desc:"国营饭店大厨" },
  "李叔":    { world:"80", place:"cai", age:52, likes:["酒票","liquor","tobacco"], desc:"菜市场摊主" },
  "王大姐":  { world:"80", place:"gongxiao", age:48, likes:["补品","guantou","sugar"], desc:"供销社售货员" },
  "周奶奶":  { world:"80", place:"caifeng", age:70, likes:["补品","guantou","sugar","细粮"], desc:"老裁缝" },
  "孙悟空":  { world:"80", place:"youdian", age:30, likes:["补品","maotai"], desc:"从灵台山学艺归来，邮电局职工" },
  "张一冇":  { world:"80", place:"dianying", age:38, likes:["酒票","maotai"], desc:"电影导演，张姨丈夫" },
  "钱所长":  { world:"80", place:"chuxu", age:52, likes:["maotai","zhonghua","swine","ssmoke"], desc:"储蓄所所长，钱厂长之兄" },
  "李清照":  { world:"80", place:"shudian", age:16, female:true, likes:["诗歌","流行","dacron","book_tang","dacron"], desc:"16岁才女，魅力90" },
  "李婶":    { world:"80", place:"jiedao", age:50, female:true, married:true, likes:["补品","guantou"], desc:"街道办，李叔之妻" },
  "钱厂长":  { world:"80", place:"shipinchang", age:50, likes:["maotai","zhonghua","swine","ssmoke"], desc:"红星食品厂厂长" },
  "钱老大爷":{ world:"80", place:"fandian", age:72, likes:["补品","guantou","maotai","细粮"], desc:"钱家老爷子，常去国营饭店吃饭" },
  "强子":    { world:"80", place:"heishi", age:22, likes:["流行","稀奇","外国"], desc:"黑市老大，据说是高官之子，能量很大" },
  "周大哥":  { world:"80", place:"rejie", age:28, likes:["流行","稀罕"], desc:"周奶奶的孙子，经营热闹街区（公开版黑市）" },
};
