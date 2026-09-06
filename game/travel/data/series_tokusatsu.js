/* ============ 主题收藏系列·特摄剧（三大类+怪兽） ============ */
(function () {
  window.TRAVEL_SERIES = window.TRAVEL_SERIES || [];
  const T = s => window.TRAVEL_SERIES.push(s);
  /* 类别一：圆谷·奥特曼系列 */
  T({ id: 'toku_ultra', cat: 'tokusatsu', name: '奥特曼系列（圆谷）', years: '1966-至今', author: '円谷英二·圆谷制作', theme: '巨大英雄·光之巨人', background: '1966年初代奥特曼开创"巨大变身英雄"特摄类型，圆谷株式会社出品。M78星云光之国的设定影响亚洲数代人，迪迦奥特曼是中国90后的集体记忆。', story: '来自M78星云的宇宙警备队队员与地球人合体，变身成40米巨人与怪兽战斗。奥特曼计时器闪烁的三分钟，是人类与光签订的契约。', protagonist: '初代奥特曼/早田进', slogan: '变身！（シュワッチ！）', cities: ['tokyo', 'hiroshima'], items: [
    { id: 'ultra_soft', name: '初代奥特曼软胶（Sofubi）', type: '手办模型', city: 'tokyo', price: 130, desc: 'B-Club 复刻银红软胶，"三分钟 Timer"胸口。' },
    { id: 'ultra_badge', name: '奥特兄弟徽章盒', type: '徽章谷子', city: 'tokyo', price: 55, desc: '初代/赛文/泰罗/迪迦/泽塔吧唧五枚。' },
    { id: 'ultra_tshirt', name: 'M78星云宇宙警备队T恤', type: '服饰包箱', city: 'hiroshima', price: 100, desc: '宇宙警备队徽章满印，"光之国制式"。' },
    { id: 'ultra_plush', name: '奥特曼计时器抱枕', type: '毛绒公仔', city: 'tokyo', price: 80, desc: '蓝红计时器抱枕，会"噔噔噔"想象。' },
    { id: 'ultra_berry', name: '奥特曼变身器玩具', type: '生活数码联名', city: 'tokyo', price: 160, desc: '迪迦神光棒/泽塔光弩发声玩具，"变身音效"。' }] });
  /* 类别二：东映·假面骑士系列 */
  T({ id: 'toku_rider', cat: 'tokusatsu', name: '假面骑士系列（东映）', years: '1971-至今', author: '石之森章太郎原作·东映', theme: '变身英雄·改造人悲剧', background: '1971年初代假面骑士开创"变身腰带"商业模式。从昭和改造人的悲剧到平成空的我"守护微笑"，令和时代腰带玩具年销百万。', story: '被秘密组织修卡改造的本乡猛逃出魔掌，以假面骑士之名保护人类自由。"改造人的悲伤"与"守护他人的笑容"是系列底色。', protagonist: '本乡猛（初代假面骑士）', slogan: '变身！（変身！）', cities: ['tokyo'], items: [
    { id: 'rider_belt', name: 'DX 变身腰带（Decade/Cbuild）', type: '手办模型', city: 'tokyo', price: 250, desc: '发声发光变身腰带，"变身"喊出来才有效。' },
    { id: 'rider_badge', name: '平成二十骑士徽章', type: '徽章谷子', city: 'tokyo', price: 60, desc: '空我到时王的骑士徽章盒，情怀拉满。' },
    { id: 'rider_tshirt', name: '假面骑士机车T恤', type: '服饰包箱', city: 'tokyo', price: 100, desc: '旋风号摩托车+绿围巾经典构图。' },
    { id: 'rider_plush', name: '骑士君毛绒系列', type: '毛绒公仔', city: 'tokyo', price: 90, desc: 'chibi 化骑士全员，电王桃塔罗斯超萌。' },
    { id: 'rider_watch', name: '变身手环（DX Apps）', type: '生活数码联名', city: 'tokyo', price: 180, desc: 'App 联动手环，变身音效实时播放。' }] });
  /* 类别三：东映·超级战队系列 */
  T({ id: 'toku_sentai', cat: 'tokusatsu', name: '超级战队系列（东映）', years: '1975-至今', author: '八手三郎·东映', theme: '五色战队·合体机器人', background: '1975年《秘密战队五连者》开创"五色战队+合体机器人"模式，48代延续是吉尼斯纪录最长寿特摄。美国《恐龙战队》Power Rangers 即其改编。', story: '五位配色不同的战士身穿战斗服对抗邪恶组织，驾驶巨大机器人合体迎敌。红色永远是队长，"合体！"。', protagonist: '红色战士（红一号）', slogan: '合体！（ギンギン合体！）', cities: ['tokyo'], items: [
    { id: 'sentai_figure', name: '五连者合体机器人模型', type: '手办模型', city: 'tokyo', price: 260, desc: 'Varidreen 五机合体，"合体音效"贴纸。' },
    { id: 'sentai_badge', name: '历代红战士徽章', type: '徽章谷子', city: 'tokyo', price: 55, desc: '48代红色战士吧唧精选盒。' },
    { id: 'sentai_tshirt', name: '五色战队T恤', type: '服饰包箱', city: 'tokyo', price: 100, desc: '红黄蓝绿粉五色剪影排排站。' },
    { id: 'sentai_plush', name: '战队君毛绒', type: '毛绒公仔', city: 'tokyo', price: 85, desc: '五色小战士挂件套组。' },
    { id: 'sentai_henshin', name: '变身器音棒', type: '生活数码联名', city: 'tokyo', price: 150, desc: '历代变身器发声玩具，"队长我们先走"。' }] });
  /* 彩蛋：东宝·怪兽哥斯拉 */
  T({ id: 'kaiju_godzilla', cat: 'tokusatsu', name: '哥斯拉（东宝怪兽）', years: '1954-至今', author: '东宝株式会社', theme: '怪兽之王', background: '1954年《哥斯拉》诞生于核爆阴影，开创怪兽（Kaiju）电影类型。2023年《哥斯拉-1.0》获奥斯卡最佳视效，"怪兽之王"横扫全球。', story: '氢弹试验唤醒的远古巨兽哥斯拉登陆东京，吐息烧尽城市。它是核灾难的化身，也是打不死的"怪兽之王"。', protagonist: '哥斯拉', slogan: '怪兽之王，君临东京！', cities: ['tokyo'], items: [
    { id: 'godzilla_figure', name: '哥斯拉-1.0 手办', type: '手办模型', city: 'tokyo', price: 280, desc: '负一号版黑色焦土皮肤，背鳍发光件。' },
    { id: 'godzilla_badge', name: '东宝怪兽徽章', type: '徽章谷子', city: 'tokyo', price: 50, desc: '哥斯拉/拉顿/摩斯拉/基多拉四天王。' },
    { id: 'godzilla_tshirt', name: '哥斯拉东京烧毁图T恤', type: '服饰包箱', city: 'tokyo', price: 100, desc: '1954年初代海报复刻，"怪兽电影海报艺术"。' },
    { id: 'godzilla_plush', name: '哥斯拉毛绒（Q版）', type: '毛绒公仔', city: 'tokyo', price: 90, desc: '再凶的怪兽，做成毛绒都可爱。' },
    { id: 'godzilla_sound', name: '哥斯拉吼叫音音箱', type: '生活数码联名', city: 'tokyo', price: 200, desc: '开机播放经典吼叫，邻居投诉款。' }] });
})();
