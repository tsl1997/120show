/* ============ 异世界·武侠《连城诀》副本 ============ */
(function () {
window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'isekai_liancheng', name: '连城诀·荆州寻宝', country: '异世界', cc: 'CN', flag: '💰', region: 'isekai_wuxia', world: 'isekai', hero: '💰',
    desc: '金庸最黑暗的人性寓言：为一座梁武帝宝藏，师父骗徒弟、父亲陷女儿、兄弟相残。狄云从湘西乡下的老实人，看尽人间丑恶。',
    labels: { spotL: '江湖圣地', souvenirL: '武功秘籍', storyL: '高手相遇', spotB: '前往', souvenirB: '习得', storyB: '切磋' },
    travel: [{ name: '穿越之门', icon: '🌌', cost: 520 }], visa: null,
    spots: [
      { id: 'lc_1', name: '湘西沅陵·狄云家', icon: '🏘️', price: 0, desc: '老实人狄云随师父戚长发练"躺尸剑法"的乡下老家。' },
      { id: 'lc_2', name: '万震山庄', icon: '🏯', price: 0, desc: '万震山"连城剑法"寿宴，一场设给狄云的构陷大戏。' },
      { id: 'lc_3', name: '荆州府衙大牢', icon: '⛓️', price: 0, desc: '狄云蒙冤入狱五年，狱中遇丁典学得神照经。' },
      { id: 'lc_4', name: '江陵天宁寺', icon: '🛕', price: 0, desc: '梁武帝宝藏的最终藏匿处，大佛肚里金银如山。' },
      { id: 'lc_5', name: '血刀门·藏边雪谷', icon: '🏔️', price: 0, desc: '血刀老祖与"落花流水"四侠雪战，邪派宗师的生存智慧。' },
      { id: 'lc_6', name: '丁典与凌霜华的菊园', icon: '🌼', price: 0, desc: '每年菊花会相识的爱人，被亲父活埋的悲剧。' },
    ],
    souvenirs: [
      { id: 'lc_10', name: '《连城剑法》诀（唐诗选辑）', icon: '📜', tag: '玩', type: '秘籍', price: 300, desc: '剑诀藏在《唐诗选辑》数字密码里，指向宝藏坐标。' },
      { id: 'lc_11', name: '《神照经》', icon: '📖', tag: '玩', type: '秘籍', price: 300, desc: '天下第一内功，可救濒死之人。丁典遗赠狄云。' },
      { id: 'lc_12', name: '血刀刀法', icon: '🔪', tag: '玩', type: '秘籍', price: 240, desc: '血刀老祖的邪派刀法，雪山一战胜过正派四侠。' },
      { id: 'lc_13', name: '乌蚕衣', icon: '🧥', tag: '衣', type: '宝物', price: 180, desc: '刀枪不入的贴身宝衣，狄云的保命之物。' },
      { id: 'lc_14', name: '连城宝藏金元宝', icon: '🪙', tag: '食', type: '宝物', price: 200, desc: '大佛腹中的南朝金宝——"人都疯了，要金子何用"。' },
      { id: 'lc_15', name: '菊花（凌霜华最爱的绿菊）', icon: '🌼', tag: '食', type: '宝物', price: 60, desc: '丁典每天换一盆的菊花，一段被毒杀的爱情。' },
    ],
    stories: [
      { id: 'lc_20', name: '相遇·狄云', icon: '💪', price: 0, desc: '湘西乡下老实人，被师父欺、被挚友陷，最终看破宝藏返璞归真。' },
      { id: 'lc_21', name: '相遇·丁典', icon: '🌼', price: 0, desc: '神照经传人，为凌霜华坐牢守菊。"这世界最毒的不是毒药，是人心"。' },
      { id: 'lc_22', name: '遭遇·万震山', icon: '🏗️', price: 0, desc: '夜里砌墙的手在"砌"什么？把仇人砌进墙里的 Sleepwalker。' },
      { id: 'lc_23', name: '遭遇·戚长发', icon: '🦊', price: 0, desc: '狄云的师父，"躺尸剑法"教徒弟，骗尽所有人藏到最后。' },
      { id: 'lc_24', name: '遭遇·血刀老祖', icon: '🔪', price: 0, desc: '血刀门掌门，坏得光明磊落，武功智计雪谷封神。' },
      { id: 'lc_25', name: '相遇·水笙', icon: '🎒', price: 0, desc: '被冤枉的羽衣姑娘，雪谷中等狄云归来。"我等你"。' },
      { id: 'lc_26', name: '相遇·凌霜华', icon: '🌼', price: 0, desc: '被父亲活埋的哑誓恋人，棺材板上用指甲刻的答案。' },
    ],
  });
})();
