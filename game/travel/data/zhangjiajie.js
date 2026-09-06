/* ============ 湖南·张家界 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'zhangjiajie',
    name: '张家界',
    country: '中国',
    cc: 'CN',
    province: '湖南',
    flag: '🇨🇳',
    region: '华中',
    hero: '🏔️',
    desc: '《阿凡达》悬浮山的原型：三千奇峰拔地而起，玻璃桥上心惊肉跳，土家族的吊脚楼里歌声不断，湘西的神秘都在这里。',
    travel: [{ name: '飞机', icon: '✈️', cost: 850 }, { name: '火车', icon: '🚂', cost: 400 }],
    visa: null,
    spots: [
      { id: 'zhangjiajie_wulingyuan', name: '张家界国家森林公园', icon: '🏔️', price: 224, desc: '中国第一个国家森林公园，石英砂岩峰林全球独有。袁家界"乾坤柱"就是《阿凡达》悬浮山原型"哈利路亚山"。' },
      { id: 'zhangjiajie_daxiagu', name: '张家界大峡谷玻璃桥', icon: '🌉', price: 219, desc: '云天渡玻璃桥横跨430米，世界最长玻璃桥。低头就是400米深谷，腿软党和自拍党同框。' },
      { id: 'zhangjiajie_tianmenshan', name: '天门山', icon: '🚡', price: 278, desc: '"天门洞开"的世界最高天然穿山溶洞。999级天梯+世界最长索道+盘山99道弯，全程尖叫。' },
      { id: 'zhangjiajie_bailong', name: '百龙天梯', icon: '🛗', price: 72, desc: '"世界第一梯"，66秒垂直上升326米。贴山而建的观景电梯，"从谷底飞上山巅"的体验。' },
      { id: 'zhangjiajie_jinbianxi', name: '金鞭溪', icon: '🌊', price: 0, desc: '"世界最美峡谷"溪流穿行峰林间。猴子成群"抢劫"游客零食，徒步7.5公里全程清凉。' },
      { id: 'zhangjiajie_fenghuang', name: '凤凰古城一日', icon: '🏘️', price: 0, desc: '沱江边的吊脚楼与虹桥，沈从文笔下的边城。夜景灯河最美，苗家银饰叮当作响。' },
      { id: 'zhangjiajie_baofeng', name: '宝峰湖·黄龙洞', icon: '💎', price: 96, desc: '宝峰湖是"世界湖泊经典"，山歌在湖面回荡。黄龙洞"定海神针"石笋投保一个亿。' },
    ],
    souvenirs: [
      { id: 'zhangjiajie_yanrou', name: '土家腊肉·三下锅', icon: '🍖', tag: '食', type: '美食', price: 60, desc: '柴火熏的土家腊肉黑亮咸香，三下锅是"湘西火锅"。腊肉炒蕨菜，下饭三碗。' },
      { id: 'zhangjiajie_mijiu', name: '米酒·岩耳炖土鸡', icon: '🍶', tag: '食', type: '美食', price: 50, desc: '土家米酒甜后劲大，"摔碗酒"喝的就是豪气。岩耳长在崖壁上，炖鸡是"悬崖的味道"。' },
      { id: 'zhangjiajie_juecai', name: '蕨菜·葛根粉', icon: '🌱', tag: '食', type: '特产', price: 35, desc: '湘西野蕨菜炒腊肉香到跺脚。葛根粉冲调成羹，"山里的凉粉"。' },
      { id: 'zhangjiajie_maojian', name: '莓茶（藤茶）', icon: '🍵', tag: '食', type: '特产', price: 60, desc: '张家界莓茶"黄酮之王"，回甘明显。土家人喝了几百年，"长寿茶"。' },
      { id: 'zhangjiajie_yinshi', name: '苗银·土家织锦', icon: '💍', tag: '衣', type: '服饰', price: 130, desc: '苗银项圈与手镯叮当作响，西兰卡普土家织锦。手工挑织的"无字史书"。' },
      { id: 'zhangjiajie_ahava', name: '阿凡达文创', icon: '🛸', tag: '衣', type: '文创', price: 45, desc: '哈利路亚悬浮山模型、蓝色夜空明信片。电影取景地的"官方联动"，科幻与山水混搭。' },
      { id: 'zhangjiajie_niuer', name: '牛角梳·崖柏手串', icon: '🪮', tag: '衣', type: '文创', price: 70, desc: '湘西水牛角梳不伤发，崖柏香气安神。"山货三宝"之二。' },
      { id: 'zhangjiajie_suodao', name: '天子山索道·杨家界索道', icon: '🚡', tag: '行', type: '体验', price: 72, desc: '索道穿行峰林之间，"在悬浮山上方飞行"。脚下是刀削斧劈的砂岩柱。' },
      { id: 'zhangjiajie_bengji', name: '蹦极·飞索挑战', icon: '🪂', tag: '玩', type: '体验', price: 500, desc: '大峡谷蹦极260米高，"世界最高商业蹦极"之一。纵身一跃，"人生高光时刻"。' },
      { id: 'zhangjiajie_yan', name: '《魅力湘西》演出', icon: '🎭', tag: '玩', type: '体验', price: 228, desc: '土家哭嫁、上刀山下火海现场版。湘西神秘文化大秀，"边城故事"催泪。' },
      { id: 'zhangjiajie_miao', name: '苗寨家访', icon: '🏮', tag: '玩', type: '体验', price: 120, desc: '进苗寨喝拦门酒，长桌宴摆起。银饰满头的苗阿妹教唱山歌，"对上歌才能走"。' },
      { id: 'zhangjiajie_minsu', name: '武陵源民宿', icon: '🏨', tag: '住', type: '住宿', price: 300, desc: '景区门口的吊脚楼民宿，露台正对峰林。清晨云雾在窗外流动，"住在画里醒来"。' },
    ],
    stories: [
      { id: 'zhangjiajie_story_ahava', name: '悬浮山的"东方血统"', icon: '🛸', desc: '《阿凡达》美术团队2008年张家界采风，乾坤柱成了哈利路亚山。2010年景区直接把石柱改名"哈利路亚山"。' },
      { id: 'zhangjiajie_story_boli', name: '玻璃桥的"锤子测试"', icon: '🔨', desc: '开业前用大铁锤砸玻璃示范安全，全球直播。司机的结论："比你家阳台还结实。"' },
      { id: 'zhangjiajie_story_tianmen', name: '天门洞的"通天传奇"', icon: '🕳️', desc: '999级台阶上天门洞，"上天梯"。翼装飞行大神多次从此飞跃，"人类挑战极限的圣地"。' },
      { id: 'zhangjiajie_story_hou', name: '金鞭溪猴子的"江湖"', icon: '🐒', desc: '金鞭溪猕猴会开背包拉链，"惯犯"还会挑塑料袋。游客攻略：食物藏好，手机抓紧。' },
      { id: 'zhangjiajie_story_ku', name: '土家哭嫁的泪与笑', icon: '😢', desc: '土家姑娘出嫁前要哭嫁半个月，哭得动听是才艺。《魅力湘西》还原现场，观众跟着落泪。' },
      { id: 'zhangjiajie_story_congwen', name: '沈从文的边城', icon: '📖', desc: '"由四川过湖南去，靠东有一条官路……"凤凰古城因《边城》闻名。翠翠的渡口，如今是沱江泛舟。' },
    ],
  });
})();
