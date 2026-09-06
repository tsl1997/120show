/* ============ 异世界·玄幻《龙蛇演义》副本 ============ */
(function () {
window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_longshe', name: '龙蛇演义·国术世界', country: '异世界', cc: 'CN', flag: '🐉', region: 'isekai_xuanhuan', world: 'isekai', hero: '🐉',
    desc: '梦入神机的国术流开山：大学生王超遇 mafia 大姐头唐紫尘，从形意拳明劲到"打破虚空见神不坏"，国术对抗枪械。',
    labels: { spotL: '圣地秘境', souvenirL: '武学宝典', storyL: '高手相逢', spotB: '探访', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: [
      { id: 'ls_1', name: '国术馆', icon: '🏟️', price: 0, desc: '王超学拳的起点，"国术"复兴的旗帜。' },
      { id: 'ls_2', name: '武林大会擂台', icon: '🥊', price: 0, desc: '天下高手聚会的擂台，一拳定胜负。' },
      { id: 'ls_3', name: '王超拳馆', icon: '🏛️', price: 0, desc: '王超后来开设的拳馆，传承国术。' },
      { id: 'ls_4', name: '军队特训营', icon: '🎖️', price: 0, desc: '军中暗劲高手的特训地，"枪炮与拳脚"。' },
      { id: 'ls_5', name: '暗劲宗门', icon: '⛩️', price: 0, desc: '各大暗劲宗门：形意/太极/八卦/八极。' },
      { id: 'ls_6', name: '海外华人武馆', icon: '🏝️', price: 0, desc: '海外拳坛，GOD 组织的战场。' },
    ],
    souvenirs: [
      { id: 'ls_10', name: '形意拳谱（明暗化劲）', icon: '📖', tag: '玩', type: '秘籍', price: 300, desc: '明劲→暗劲→化劲→丹劲→神境的五重境界图。' },
      { id: 'ls_11', name: '薛颠象形拳谱', icon: '🐦', tag: '玩', type: '秘籍', price: 260, desc: '民国宗师薛颠的象形拳，"猴形"身法。' },
      { id: 'ls_12', name: '国术真意手札', icon: '✍️', tag: '玩', type: '秘籍', price: 280, desc: '历代宗师的"拳意"手札，"拳与道合"。' },
      { id: 'ls_13', name: '丹劲秘卷', icon: '💊', tag: '玩', type: '秘籍', price: 320, desc: '丹劲境界：内气如丹，打破虚空见神不坏。' },
      { id: 'ls_14', name: '拳王手套', icon: '🥊', tag: '衣', type: '宝物', price: 150, desc: '世界拳王的手套，"拳台之上无国界"。' },
      { id: 'ls_15', name: '唐门暗器包', icon: '🎯', tag: '衣', type: '宝物', price: 120, desc: '唐紫尘的门派遗产，暗器与毒物。' },
      { id: 'ls_16', name: '八极拳贴山靠图谱', icon: '🏋️', tag: '玩', type: '秘籍', price: 160, desc: '"文有太极安天下，武有八极定乾坤"。' },
    ],
    stories: [
      { id: 'ls_20', name: '切磋·王超', icon: '🐉', price: 0, desc: '从大学生到"打破虚空"的国术第一人。' },
      { id: 'ls_21', name: '相遇·唐紫尘', icon: '🌹', price: 0, desc: '唐门大姐大，王超的师父兼爱人，"尘姐"。' },
      { id: 'ls_22', name: '切磋·巴立明', icon: '👊', price: 0, desc: '打法凶悍的海外拳王，王超的老对手。' },
      { id: 'ls_23', name: '切磋·陈彬', icon: '🥋', price: 0, desc: '军中高手，王超的战友与对手。' },
      { id: 'ls_24', name: '遭遇·休斯', icon: '🔫', price: 0, desc: 'GOD 组织的枪械大师，"枪炮 vs 国术"。' },
      { id: 'ls_25', name: '论道·拳圣', icon: '🧙', price: 0, desc: '上一代"见神不坏"的宗师，传说中的人物。' },
      { id: 'ls_26', name: '论道·GOD首领', icon: '👁️', price: 0, desc: '海外神秘组织 GOD 的首领，终极对手。' },
    ],
  });
})();
