/* ============ 日本·箱根 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hakone',
    name: '箱根',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关东',
    hero: '♨️',
    desc: '富士山下的温泉之乡：芦之湖海贼船、大涌谷的黑玉子、强罗公园与雕刻之森，EVA"第三新东京市"的原型地。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2300 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'hakone_lake', name: '芦之湖海贼船', icon: '⛵', price: 60, desc: '海盗船横渡芦之湖，天气好时富士山倒映。箱根神社"水中鸟居"就在湖畔，"逆富士"名场面。' },
      { id: 'hakone_owakudani', name: '大涌谷·黑玉子', icon: '🌋', price: 0, desc: '活火山口的硫磺喷气，"地狱谷"景观。黑玉子（黑鸡蛋）吃一颗延寿7年，"必吃的黑蛋"。' },
      { id: 'hakone_chokoku', name: '雕刻之森美术馆', icon: '🖼️', price: 80, desc: '日本首个户外美术馆，毕加索馆藏品丰富。儿童"编绳迷宫"与温泉足汤，"艺术+温泉"。' },
      { id: 'hakone_pola', name: 'POLA 美术馆', icon: '🖼️', price: 80, desc: '印象派收藏：莫奈、雷诺阿真品。地下建筑与自然光，"美术馆界的隐世贵族"。' },
      { id: 'hakone_yumoto', name: '箱根汤本温泉街', icon: '♨️', price: 0, desc: '箱根温泉玄关，"汤本见付"灯笼街。手汤与足汤一路，夜温泉街灯笼点灯。' },
      { id: 'hakone_hakonecheck', name: '箱根关所·旧街道石叠', icon: '⛩️', price: 50, desc: '江户时代"入铁炮出女"检查关所。复原关所与资料馆，"旧东海道"石叠徒步。' },
      { id: 'hakone_gora', name: '强罗公园·缆车巡游', icon: '🚡', price: 60, desc: '法式庭园"强罗公园"，白椿花。登山缆车+空中缆车+海贼船，"交通本身就是景点"。' },
    ],
    souvenirs: [
      { id: 'hakone_kuro', name: '黑玉子（黑鸡蛋）', icon: '🥚', tag: '食', type: '美食', price: 10, desc: '硫磺泉煮熟的蛋壳全黑，"吃一颗延寿七年"。大涌谷限定，味道就是普通蛋的"魔法加成"。' },
      { id: 'hakone_chaya', name: '汤本茶屋·葛切', icon: '🍮', tag: '食', type: '美食', price: 40, desc: '本葛葛切黑蜜糖浆，"透明的甜"。箱根茶屋的老铺味，配抹茶。' },
      { id: 'hakone_kurotama', name: '黑蛋文创·温泉馒头', icon: '🍞', tag: '食', type: '特产', price: 30, desc: '黑蛋造型玩偶、温泉馒头礼盒。"箱根黑"伴手礼全家桶。' },
      { id: 'hakone_kinpa', name: '寄木细工', icon: '🧩', tag: '衣', type: '文创', price: 150, desc: '箱根"寄木细工"几何拼木，秘密盒要12步才能打开。国家级传统工艺品，"木头的魔方"。' },
      { id: 'hakone_tosho', name: '箱根玻璃·琉璃细工', icon: '🔮', tag: '衣', type: '文创', price: 80, desc: '威尼斯玻璃风"箱根琉璃之森"限定。玻璃风铃与餐具，"透明的浪漫"。' },
      { id: 'hakone_eva', name: 'EVA 圣地周边', icon: '🤖', tag: '衣', type: '文创', price: 60, desc: '箱根是"第三新东京市"原型，EVA主题店限定。初号机配色商品，"使徒来袭的故乡"。' },
      { id: 'hakone_pirate', name: '海贼船巡游', icon: '⛵', tag: '行', type: '体验', price: 60, desc: '皇家II号/南欧风海贼船三选一。湖上35分钟，"箱根的必打卡交通"。' },
      { id: 'hakone_onsen2', name: '温泉一日汤巡', icon: '♨️', tag: '玩', type: '体验', price: 120, desc: '箱根17汤各具特色，"汤巡手形"泡多家。汤本、强罗、仙石原，"温泉大集合"。' },
      { id: 'hakone_rope', name: '空中缆车看大涌谷', icon: '🚡', tag: '行', type: '体验', price: 50, desc: '缆车跨越火山口，脚下白烟滚滚。"空中看地狱"的体验。' },
      { id: 'hakone_museum2', name: '美术馆巡礼', icon: '🖼️', tag: '玩', type: '体验', price: 100, desc: '雕刻之森+POLA+小王子馆一日券。"箱根是美术馆密度最高的温泉地"。' },
      { id: 'hakone_hiking', name: '旧街道石叠徒步', icon: '🥾', tag: '玩', type: '体验', price: 0, desc: '元箱根→箱根关所的石叠古道，杉树参天。"江户旅人的路"。' },
      { id: 'hakone_minsu', name: '温泉旅馆一泊二食', icon: '🏨', tag: '住', type: '住宿', price: 600, desc: '汤本或仙石原的温泉旅馆，怀石晚餐。露天风吕看山，"箱根的奢华"。' },
    ],
    stories: [
      { id: 'hakone_story_kuro2', name: '黑玉子的"延寿传说"', icon: '🥚', desc: '大涌谷硫磺泉煮蛋，蛋壳硫化变黑。"吃一颗多活七年"是江户时代的营销，如今是必打卡。' },
      { id: 'hakone_story_eva2', name: 'EVA的"第三新东京市"', icon: '🤖', desc: '庵野秀明把箱根设定为EVA主舞台。芦之湖、大涌谷都出现在动画里，"圣地巡礼"常年不衰。' },
      { id: 'hakone_story_seki', name: '关所的"入铁炮出女"', icon: '⛩️', desc: '江户幕府在箱根设关所：防铁炮进、防女性出（人质）。"女性出关要证件"，制度严格。' },
      { id: 'hakone_story_kiwi', name: '寄木细工的"秘密盒"', icon: '🧩', desc: '寄木细工秘密盒最多需125步才能打开。江户时代商人的"保险箱"，"木头的智力游戏"。' },
      { id: 'hakone_story_onsen3', name: '箱根17汤的"温泉宇宙"', icon: '♨️', desc: '箱根不是单一温泉，是17个泉质不同的温泉群。"汤本、强罗、仙石原……每汤个性"。' },
      { id: 'hakone_story_fuji', name: '芦之湖的"逆富士"', icon: '🗻', desc: '清晨无风时富士山倒映湖面，"逆富士"。看到的人据说会有好运，"起早的奖励"。' },
    ],
  });
})();
