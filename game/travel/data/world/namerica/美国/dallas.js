/* ============ 美国·达拉斯 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'dallas',
    name: '达拉斯',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🤠',
    desc: '牛仔与金融的德州心脏：JFK 被刺的迪利广场，牛仔竞技与达拉斯牛仔队，六大旗过山车，"big things happen in Texas"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7400 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'dallas_dealey', name: '迪利广场·六层博物馆', icon: '📚', price: 130, desc: '1963年肯尼迪遇刺地点，教科书仓库六层窗。阴谋论与史实并存，"美国历史的创伤现场"。' },
      { id: 'dallas_cowboys', name: 'AT&T 体育场（达拉斯牛仔队）', icon: '🏈', price: 200, desc: '"世界的核心"：10万座球场与巨型屏幕。美式足球信仰中心，"Friday night lights"。' },
      { id: 'dallas_sixflags', name: '六旗过山车乐园', icon: '🎢', price: 350, desc: '德州六旗：Titan 过山车时速85英里。La Vibora 雪橇滑车，"德州人玩刺激"。' },
      { id: 'dallas_stockyards', name: '沃斯堡牲畜市场（Fort Worth）', icon: '🐂', price: 0, desc: '每天两次"牛群巡游"，真牛仔赶长角牛上街。Rodeo 竞技每晚，"牛仔城依旧活着"。' },
      { id: 'dallas_art', name: '达拉斯艺术区', icon: '🖼️', price: 0, desc: '全美最大连片艺术区：贝聿铭设计的音乐厅。温斯皮尔歌剧院，"德州的文化野心"。' },
      { id: 'dallas_klyde', name: 'Klyde Warren 公园', icon: '🌳', price: 0, desc: '建在高速公路上的"空中公园"。餐车+草坪+图书馆，"城市缝合的样本"。' },
      { id: 'dallas_margarita', name: '主教艺术区·深埃鲁', icon: '🏘️', price: 0, desc: 'Bishop Arts 独立小店街区，Deep Ellum 涂鸦与live house。"达拉斯的文艺双面"。' },
    ],
    souvenirs: [
      { id: 'dallas_bbq2', name: '德州 BBQ：Pecan Lodge', icon: '🍖', tag: '食', type: '美食', price: 160, desc: '达拉斯 BBQ 王者，肋排与牛胸。排队两小时起步，"烟熏就是德州方言"。' },
      { id: 'dallas_mexican', name: '达拉斯 Tex-Mex：Meso Maya', icon: '🌮', tag: '食', type: '美食', price: 80, desc: '内陆墨西哥菜，"达拉斯辣酱"很有名。margarita 配餐。' },
      { id: 'dallas_steak', name: '德州牛排馆', icon: '🥩', tag: '食', type: '美食', price: 250, desc: '鲍勃牛排馆牛排王者。"德州分量"，牛排比脸大。' },
      { id: 'dallas_drpepper', name: 'Dr Pepper 胡椒博士', icon: '🥤', tag: '食', type: '特产', price: 30, desc: '德州威科发明的汽水，博物馆在威科。"10-2-4"喝汽水钟表梗。' },
      { id: 'dallas_cowboy_wen', name: '达拉斯牛仔队周边', icon: '🏈', tag: '衣', type: '服饰', price: 120, desc: '"美国之队"的星标帽与球衣。牛仔队吉祥物 Rowdy 玩偶。' },
      { id: 'dallas_cowboy_hat', name: '牛仔帽与靴子', icon: '🤠', tag: '衣', type: '服饰', price: 300, desc: '沃斯堡 Stockyards 定制牛仔靴（莱迪老铺）。"真正的德州靴"，可穿一辈子。' },
      { id: 'dallas_rodeo2', name: '沃斯堡 Rodeo 夜赛', icon: '🐂', tag: '玩', type: '体验', price: 150, desc: 'Stockyards 骑牛与套小牛比赛每晚。牛仔们下班来比赛，"上班是爱好， rodeo 是生活"。' },
      { id: 'dallas_sixflags2', name: '六旗德州一日', icon: '🎢', tag: '玩', type: '体验', price: 350, desc: '德州六旗13个过山车。"Mr. Freeze"倒弹发射，"德州人的肾上腺素"。' },
      { id: 'dallas_jfk', name: 'JFK 遇刺路线自驾', icon: '🚗', tag: '玩', type: '体验', price: 80, desc: '按当年车队路线自驾：迪利广场→帕克兰医院。"X 标记"还在柏油路上。' },
      { id: 'dallas_statefair', name: '德州州际博览会', icon: '🎡', tag: '玩', type: '体验', price: 150, desc: '9-10月的"德州最大派对"：油炸一切（可油炸百事可乐）。Big Tex 巨人偶说话。' },
      { id: 'dallas_minsu', name: 'Uptown 酒店', icon: '🏨', tag: '住', type: '住宿', price: 550, desc: 'Uptown 区精品酒店，电车直达市中心。"达拉斯的时髦面"。' },
    ],
    stories: [
      { id: 'dallas_story_jfk2', name: '迪利广场的"历史 X"', icon: '📚', desc: '1963年11月22日肯尼迪车队经过迪利广场遇刺。柏油路上的 X 标记弹着点，游客站上去拍照。' },
      { id: 'dallas_story_cowboys2', name: '"Americ’ Team"的诞生', icon: '🏈', desc: '1978年 NFL 官方纪录片称牛仔队为"美国之队"。全美一半人爱它，另一半恨它。' },
      { id: 'dallas_story_big', name: '"德州一切都大"', icon: '🤠', desc: '德州州训："Do’ mess with Texas"。牛排大、球场大、头发大（牛仔帽），"Big in Texas"。' },
      { id: 'dallas_story_stocks', name: '长角牛的"每日巡游"', icon: '🐂', desc: '沃斯堡每天11点与16点赶15头长角牛巡街。18对牛角展开2米，"活的历史"。' },
      { id: 'dallas_story_shopping', name: '"德州的华尔街"', icon: '💰', desc: '达拉斯人均亿万富翁密度全美前列。美国最大银行与能源公司总部聚集，"低调的有钱"。' },
      { id: 'dallas_story_art', name: '贝聿铭的"达拉斯音乐厅"', icon: '🎼', desc: 'Meyerson 音乐厅是贝聿铭作品，音响世界级。"贝聿铭晚年最满意的建筑之一"。' },
    ],
  });
})();
