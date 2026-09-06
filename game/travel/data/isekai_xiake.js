/* ============ 异世界·武侠《侠客行》副本 ============ */
(function () {
window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_xiake', name: '侠客行·侠客岛', country: '异世界', cc: 'CN', flag: '🏝️', region: 'isekai_wuxia', world: 'isekai', hero: '🏝️',
    desc: '"我是谁？"：石破天从乞丐阴差阳错成为长乐帮主，上侠客岛喝腊八粥、破《太玄经》——识文断字反成武学障碍。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: [
      { id: 'xk_1', name: '侠客岛腊八粥宴', icon: '🥣', price: 0, desc: '每十年一度的"赏善罚恶"之宴，喝粥者皆成武学痴人。' },
      { id: 'xk_2', name: '二十四间石室', icon: '🏛️', price: 0, desc: '李白《侠客行》蝌蚪文注解，每间石室一门绝学。' },
      { id: 'xk_3', name: '摩天崖·谢烟客居', icon: '⛰️', price: 0, desc: '玄铁令主人谢烟客的居所，"玄铁令"许一愿。' },
      { id: 'xk_4', name: '长乐帮总舵', icon: '🏯', price: 0, desc: '石破天被"绑"来的帮主之位，全帮人等他去侠客岛送死。' },
      { id: 'xk_5', name: '紫烟岛', icon: '🌊', price: 0, desc: '石破天与丁珰的荒岛岁月，学得金乌刀法配雪山剑法。' },
      { id: 'xk_6', name: '玄素庄·石清夫妇', icon: '🏚️', price: 0, desc: '石清闵柔夫妇寻找儿子二十年的起点，黑白双剑。' },
    ],
    souvenirs: [
      { id: 'xk_10', name: '《太玄经》图谱拓片', icon: '📜', tag: '玩', type: '秘籍', price: 400, desc: '二十四句蝌蚪文注解——不识字的人反而练成绝世神功。' },
      { id: 'xk_11', name: '玄铁令', icon: '🪙', tag: '玩', type: '宝物', price: 260, desc: '谢烟客的承诺令牌，持令者可让他做一件事。' },
      { id: 'xk_12', name: '赏善罚恶令（铜牌）', icon: '⚖️', tag: '玩', type: '宝物', price: 200, desc: '侠客岛的双令牌，接令者去喝腊八粥"有去无回"。' },
      { id: 'xk_13', name: '罗汉伏虎神拳谱', icon: '拳', tag: '玩', type: '秘籍', price: 150, desc: '上清观武学，石清夫妇的看家功夫。' },
      { id: 'xk_14', name: '炎炎功·金乌刀法谱', icon: '🔥', tag: '玩', type: '秘籍', price: 180, desc: '石破天误练的内功+雪山剑法的克星刀法。' },
      { id: 'xk_15', name: '腊八粥（一盏）', icon: '🥣', tag: '食', type: '神药', price: 220, desc: '药酒熬成的粥，内力大增——也把喝的人都"留"在岛上。' },
    ],
    stories: [
      { id: 'xk_20', name: '相遇·石破天', icon: '🏝️', price: 0, desc: '狗杂种？石破天？大苦瓜？"我是谁"是全书最后一问。' },
      { id: 'xk_21', name: '遭遇·石中玉', icon: '🎭', price: 0, desc: '与石破天容貌相同的浪荡子，长乐帮闯下的祸都算在他头上。' },
      { id: 'xk_22', name: '遭遇·谢烟客', icon: '🌫️', price: 0, desc: '摩天居士，玄铁令之主，想害石破天反成就了他。' },
      { id: 'xk_23', name: '相遇·丁珰', icon: '🌺', price: 0, desc: '"叮叮当当"活泼娇俏，把石破天认作"天哥"。' },
      { id: 'xk_24', name: '相遇·阿绣', icon: '🌸', price: 0, desc: '温柔的白自在孙女，叫石破天"大粽子"的姑娘。' },
      { id: 'xk_25', name: '切磋·龙木二岛主', icon: '🏮', price: 0, desc: '侠客岛主，为参透太玄经 waiting 四十年，最终随图谱灰飞烟灭。' },
      { id: 'xk_26', name: '切磋·白自在', icon: '❄️', price: 0, desc: '"威德先生"雪山派掌门，狂妄自大被 reality 打脸。' },
    ],
  });
})();
