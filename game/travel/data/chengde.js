/* ============ 河北·承德 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'chengde',
    name: '承德',
    country: '中国',
    cc: 'CN',
    province: '河北',
    flag: '🇨🇳',
    region: '华北',
    hero: '🏞️',
    desc: '清王朝的避暑后花园：世界最大的皇家园林避暑山庄在此，外八庙金顶映着磬锤峰，塞罕坝的绿洲就在北边。',
    travel: [{ name: '高铁', icon: '🚄', cost: 700 }, { name: '飞机', icon: '✈️', cost: 900 }],
    visa: null,
    spots: [
      { id: 'chengde_bishushanzhuang', name: '避暑山庄', icon: '🏞️', price: 145, desc: '世界最大的皇家园林，康熙乾隆每年在此住半年。湖区烟雨楼仿江南、山区放马、平原试马埒，"移天缩地"的巅峰之作。' },
      { id: 'chengde_waiba_miao', name: '普陀宗乘之庙', icon: '🛕', price: 80, desc: '外八庙之首，仿布达拉宫而建的"小布达拉宫"。大红台金顶在阳光下耀眼，藏汉建筑艺术的合璧。' },
      { id: 'chengde_puning', name: '普宁寺', icon: '🙏', price: 80, desc: '世界最大的金漆木雕大佛（千手千眼观音）高27米。汉藏合璧寺院，香火鼎盛，钟声悠远。' },
      { id: 'chengde_qingchui', name: '磬锤峰', icon: '🪨', price: 50, desc: '一根38.9米的擎天石棒立在山巅，"棒槌山"。传说是一根定海神针，索道上去看落日最出片。' },
      { id: 'chengde_saihanba', name: '塞罕坝国家森林公园', icon: '🌲', price: 130, desc: '三代人把荒漠种成百万亩林海，"最美绿色奇迹"。七星湖湿地倒映白桦，秋天金色铺到天边。' },
      { id: 'chengde_jinshanling', name: '金山岭长城', icon: '🧱', price: 65, desc: '摄影爱好者心中的"最美长城段"，敌楼密集、障墙精巧。清晨云海漫过城墙，随手一拍都是大片。' },
      { id: 'chengde_erxian', name: '二仙居小吃街', icon: '🏮', price: 0, desc: '承德老味小吃一条街，羊汤馆子冒着热气。夜晚灯笼亮起，本地人端着碗站在路边吸溜。' },
    ],
    souvenirs: [
      { id: 'chengde_yangtang', name: '平泉羊汤', icon: '🍲', tag: '食', type: '美食', price: 25, desc: '老汤熬羊杂配烧饼，撒香菜辣椒油。清晨一碗下肚浑身冒汗，承德人的"元气早餐"。' },
      { id: 'chengde_wanuo', name: '莜面窝窝', icon: '🥟', tag: '食', type: '美食', price: 18, desc: '莜面卷成蜂窝状蒸熟，蘸羊肉蘑菇卤。坝上三件套之一，粗粮香浓顶饱。' },
      { id: 'chengde_erxian_gao', name: '荞面河漏', icon: '🍜', tag: '食', type: '美食', price: 15, desc: '荞面压成的"河漏床子面"，浇卤热吃。承德老味，粗粮细作的典范。' },
      { id: 'chengde_xingren', name: '杏仁露·大扁杏', icon: '🥛', tag: '食', type: '饮品', price: 15, desc: '"露露"杏仁露的原产地就在承德，鲜磨杏仁茶热热一碗。大扁杏干甜脆，是山里的馈赠。' },
      { id: 'chengde_mogu', name: '坝上白蘑', icon: '🍄', tag: '食', type: '特产', price: 80, desc: '塞罕坝草原的白蘑干香浓郁，炖鸡汤一绝。"口蘑"家族的顶级货，伴手礼硬通货。' },
      { id: 'chengde_luorou', name: '御土荷叶鸡', icon: '🍗', tag: '食', type: '美食', price: 45, desc: '山庄湖里的荷叶包鸡蒸制，荷香渗进肉里。当年是"皇帝吃过的味道"，如今人人可尝。' },
      { id: 'chengde_bowen', name: '避暑山庄文创', icon: '🖼️', tag: '衣', type: '文创', price: 55, desc: '《四库全书》书签、烟雨楼冰箱贴、山水丝巾。皇家园林的美学，装进书包带回城。' },
      { id: 'chengde_tanghua', name: '满族剪纸·布糊画', icon: '✂️', tag: '衣', type: '文创', price: 45, desc: '丰宁满族剪纸与滕氏布糊画都是国家级非遗。一幅"吉祥鹿"挂件，满族手艺活灵活现。' },
      { id: 'chengde_binglang', name: '榛子·山核桃', icon: '🌰', tag: '食', type: '特产', price: 50, desc: '燕山山脉的野生榛子颗颗饱满，炒熟喷香。剥一下午的快乐，是山里的慢时光。' },
      { id: 'chengde_qima', name: '坝上骑马', icon: '🐎', tag: '玩', type: '体验', price: 180, desc: '京北第一草原策马半天，风吹草低见牛羊。马倌带路走"草原天路"，人少景野。' },
      { id: 'chengde_huaxue', name: '金山岭滑雪', icon: '🎿', tag: '玩', type: '体验', price: 280, desc: '雪季的长城脚下滑雪场，滑行时能看见敌楼。初级道友好，雪质松软。' },
      { id: 'chengde_luyou', name: '山庄湖上摇橹船', icon: '🛶', tag: '行', type: '体验', price: 50, desc: '在避暑山庄湖区坐摇橹船，船娘哼着小调。烟雨楼倒影里晃悠，"皇帝的湖"任你游。' },
      { id: 'chengde_minsu', name: '山庄旁民宿', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '步行可达山庄的院落民宿，院里一棵老杏树。夏夜凉爽盖棉被，名副其实"避暑"。' },
    ],
    stories: [
      { id: 'chengde_story_bishu', name: '皇帝的"第二政治中心"', icon: '👑', desc: '避暑山庄不只是度假地：康熙乾隆在此接见使者、处理政务，"军事猎场+夏宫+外交舞台"三合一。' },
      { id: 'chengde_story_saihanba', name: '三代人造出一片林海', icon: '🌲', desc: '1962年建场时"黄沙遮天日"，三代塞罕坝人造出百万亩林海。联合国"地球卫士奖"颁给了这片绿色奇迹。' },
      { id: 'chengde_story_bangchui', name: '棒槌山的传说', icon: '🪨', desc: '磬锤峰像一根定海神针，传说摸一摸"保平安"。当地谚语："摸摸棒槌山，能活一百年。"' },
      { id: 'chengde_story_xiaobudala', name: '为什么建"小布达拉宫"', icon: '🛕', desc: '乾隆为庆祝自己六十大寿、接待各族王公，仿拉萨布达拉宫建庙。"一座庙胜过十万兵"是它的历史使命。' },
      { id: 'chengde_story_jinshanling', name: '长城摄影师的天堂', icon: '📸', desc: '金山岭365度无死角：春天杏花开上城墙、秋天彩林裹敌楼。全球摄影大赛的长城大片多出自这里。' },
      { id: 'chengde_story_lian', name: '山庄的荷花会"迁徙"', icon: '🪷', desc: '山庄湖区荷花由热河泉水滋养，六月开到九月。园林师说："这些荷花，是200年前皇帝种下的后代。"' },
    ],
  });
})();
