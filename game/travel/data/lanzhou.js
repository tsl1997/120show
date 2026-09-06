/* ============ 甘肃·兰州 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'lanzhou',
    name: '兰州',
    country: '中国',
    cc: 'CN',
    province: '甘肃',
    flag: '🇨🇳',
    region: '西北',
    hero: '🌉',
    desc: '黄河穿城的牛肉面之乡：中山桥看百年铁桥，羊皮筏子漂在黄河上，一碗"一清二白三红四绿"的牛肉面唤醒清晨。',
    travel: [{ name: '高铁', icon: '🚄', cost: 600 }, { name: '飞机', icon: '✈️', cost: 900 }],
    visa: null,
    spots: [
      { id: 'lanzhou_zhongshan', name: '中山桥（黄河铁桥）', icon: '🌉', price: 0, desc: '1909年建成的"天下黄河第一桥"，德国钢材百年不锈。夜色亮灯最迷人，桥上看黄河滚滚东去。' },
      { id: 'lanzhou_baita', name: '白塔山', icon: '⛰️', price: 0, desc: '山巅白塔与中山桥隔河相望。爬半小时俯瞰黄河穿城，"俯瞰金城"的经典机位。' },
      { id: 'lanzhou_shuiche', name: '黄河母亲雕塑·水车园', icon: '🌀', price: 0, desc: '"黄河母亲"雕像是兰州的城市名片。水车园里巨型木水车吱呀转动，重现古代灌溉智慧。' },
      { id: 'lanzhou_wuquanshan', name: '五泉山公园', icon: '⛲', price: 0, desc: '霍去病西征"鞭插五泉"传说之地。古建层叠、泉水叮咚，本地人的晨练后花园。' },
      { id: 'lanzhou_gansu_bo', name: '甘肃省博物馆', icon: '🏺', price: 0, desc: '铜奔马"马踏飞燕"真品所在地，中国旅游标志的故乡。丝绸之路文物精华，免费预约必看。' },
      { id: 'lanzhou_zhengning', name: '正宁路夜市', icon: '🏮', price: 0, desc: '"牛奶鸡蛋醪糟"大爷的网红摊位，香飘整条街。烤串、甜胚子、灰豆子，兰州夜宵江湖。' },
      { id: 'lanzhou_xinglongshan', name: '兴隆山', icon: '🍂', price: 40, desc: '陇右名山，成吉思汗曾在山中歇驾。秋天彩林满山，冬天雾凇挂枝，兰州人的周末后花园。' },
    ],
    souvenirs: [
      { id: 'lanzhou_niuroumian', name: '兰州牛肉面', icon: '🍜', tag: '食', type: '美食', price: 12, desc: '"一清二白三红四绿五黄"，牛肉面界的祖师爷。早上七点头锅汤最香，本地人从不知"兰州拉面"这个名字。' },
      { id: 'lanzhou_kaourou', name: '烤羊肉串', icon: '🍢', tag: '食', type: '美食', price: 30, desc: '红柳枝串的羊肉在炭火上滋滋响，孜然辣子面霸道。兰州夜市的灵魂，配杏皮水刚好。' },
      { id: 'lanzhou_sanpao', name: '三炮台茶', icon: '🍵', tag: '食', type: '饮品', price: 25, desc: '盖碗茶里泡着春尖茶、桂圆、红枣、冰糖。刮碗子喝一下午，"西北人的下午茶"。' },
      { id: 'lanzhou_xingpi', name: '杏皮水', icon: '🥤', tag: '食', type: '饮品', price: 8, desc: '敦煌杏皮水在兰州也遍地开花，酸甜解腻。烤肉摊标配，冰镇后一口透心凉。' },
      { id: 'lanzhou_tianpei', name: '甜胚子·灰豆子', icon: '🍮', tag: '食', type: '美食', price: 10, desc: '甜胚子是燕麦发酵的"西北冰淇淋"，灰豆子是麻豌豆甜汤。两样合一碗，兰州甜品双绝。' },
      { id: 'lanzhou_baihe', name: '兰州百合', icon: '🧄', tag: '食', type: '特产', price: 60, desc: '唯一甜百合，炒菜煲汤清甜无渣。"蔬菜界的稀有物种"，礼盒装送人倍有面。' },
      { id: 'lanzhou_heiya', name: '黑瓜子·三泡台料', icon: '🌰', tag: '食', type: '特产', price: 35, desc: '兰州黑瓜子"打瓜籽"嗑起来上头。配三炮台料包带回家，复原西北茶馆时光。' },
      { id: 'lanzhou_diaosu', name: '黄河雕塑文创', icon: '🗿', tag: '衣', type: '文创', price: 40, desc: '黄河母亲微缩摆件、铜奔马笔架。省博文创区的"兰州名片"，送朋友人人认识。' },
      { id: 'lanzhou_taoci', name: '刻葫芦', icon: '🖌️', tag: '衣', type: '文创', price: 55, desc: '在指甲盖大的葫芦上微雕山水人物。兰州独门绝技，送一颗"掌上乾坤"。' },
      { id: 'lanzhou_piufazi', name: '羊皮筏子漂流', icon: '🛶', tag: '玩', type: '体验', price: 120, desc: '坐上十三只羊皮囊扎成的筏子漂黄河，"吹牛皮"一词的来历。艄公一桨一桨，漂过百年铁桥。' },
      { id: 'lanzhou_dahuan', name: '黄河夜游索道', icon: '🚡', tag: '行', type: '体验', price: 50, desc: '白塔山索道横跨黄河，缆车里看落日熔金。夜景亮灯后整座城市在河面碎成星光。' },
      { id: 'lanzhou_niuroumian_tie', name: '牛肉面拉面体验课', icon: '👨‍🍳', tag: '玩', type: '体验', price: 80, desc: '跟拉面师傅学"九九八十一揉"，亲手拉出毛细与二细。学不会没关系，吃自己拉的面最香。' },
      { id: 'lanzhou_minsu', name: '黄河景民宿', icon: '🏨', tag: '住', type: '住宿', price: 250, desc: '滨河路的河景民宿，夜里听水声入睡。清晨阳台看晨跑队伍与晨雾黄河。' },
    ],
    stories: [
      { id: 'lanzhou_story_mian', name: '"兰州没有兰州拉面"', icon: '🍜', desc: '兰州本地只有"牛肉面"，全国开的"兰州拉面"多是青海化隆人开的。兰州人的执念：牛肉面是牛肉面！' },
      { id: 'lanzhou_story_niupi', name: '"吹牛皮"的来历', icon: '🐑', desc: '羊皮筏子要用嘴吹鼓羊皮囊，牛皮太大吹不动。说大话"吹牛皮"正是从黄河边来的。' },
      { id: 'lanzhou_story_ma', name: '马踏飞燕的故乡', icon: '🐎', desc: '中国旅游标志"铜奔马"出土于甘肃武威，藏在甘肃省博。正面看骏马三足腾空，侧面笑点密集成了"表情包"。' },
      { id: 'lanzhou_story_tieqiao', name: '德国建的桥用了108年', icon: '🌉', desc: '中山桥钢材从德国海运到天津再陆运兰州，1909年通车。合同期80年"保固"，实际用了百年仍在服役。' },
      { id: 'lanzhou_story_zaoshang', name: '牛肉面的"时间学"', icon: '⏰', desc: '头锅汤上午七点最鲜，下午汤"泄了"就不香了。兰州人宁愿早起，也要赶那一碗头锅。' },
      { id: 'lanzhou_story_shanshui', name: '两山夹一河的城市', icon: '🏞️', desc: '兰州是中国唯一黄河穿城的省会，南北皋兰山夹峙。城市沿着河谷东西展开，"最长的带状城市"之一。' },
    ],
  });
})();
