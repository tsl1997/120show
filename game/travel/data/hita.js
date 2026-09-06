/* ============ 日本·日田 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'hita',
    name: '日田',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·九州',
    hero: '🏮',
    desc: '"九州小京都"：豆田町的江户白墙，咸屋酱与木屐声，咸水温泉与天领祭，进击的巨人作者谏山创的故乡。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2500 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'hita_mameda', name: '豆田町', icon: '🏮', price: 0, desc: '"九州小京都"的江户街景，白墙格子窗。酱油老铺与和纸店，"天领日田"的商都记忆。' },
      { id: 'hita_attack', name: '进击的巨人圣地', icon: '⚔️', price: 0, desc: '谏山创故乡，"进击的巨人"主题布景散布市内。巨人像与主题馆，"墙外的世界"粉丝 pilgrimage。' },
      { id: 'hita_amagase', name: '天濑温泉', icon: '♨️', price: 60, desc: '"九州的山中温泉"，山国川沿岸旅馆。露天风吕看溪流，"秘汤氛围"。' },
      { id: 'hita_kusu', name: '九醉溪·耶马溪', icon: '⛰️', price: 0, desc: '耶马溪"日本新三景"，秋枫如火焰。青之洞门隧道由僧人凿刻30年。' },
      { id: 'hita_onsen', name: '咸屋温泉街', icon: '♨️', price: 0, desc: '豆田町旁的温泉，"喝的温泉"含铁味。手汤与足汤免费，夜灯笼。' },
      { id: 'hita_tenjin', name: '天领祭·千代寿七夕', icon: '🎋', price: 0, desc: '7月天领祭，山鉾巡行与太鼓。"江户时代的天领"复活。' },
      { id: 'hita_kurokawa2', name: '咸酒藏见学', icon: '🍶', price: 0, desc: '老酒藏"咸水酒造"参观。木桶与杜氏，"九州清酒之乡"。' },
    ],
    souvenirs: [
      { id: 'hita_yaseuma', name: 'やせうま（瘦马）', icon: '🍡', tag: '食', type: '美食', price: 25, desc: '小麦粉饼裹黄豆粉红糖，"日田古味点心"。名字来自"瘦了的马"冷笑话。' },
      { id: 'hita_ramen', name: '咸水拉面', icon: '🍜', tag: '食', type: '美食', price: 45, desc: '日田是"豚骨拉面发源地"之一。透明汤底却浓郁，老铺"咸水食堂"。' },
      { id: 'hita_wood', name: '日田木屐·杉原纸', icon: '🩴', tag: '衣', type: '文创', price: 60, desc: '日田木屐产量日本第一。杉原和纸与木屐工坊，"木头的温度"。' },
      { id: 'hita_sake', name: '日田咸水酒·烧酒', icon: '🍶', tag: '食', type: '饮品', price: 70, desc: '咸水泉水酿的清酒"三隈川"。大分烧酒"二階堂"麦烧，九州酒乡。' },
      { id: 'hita_shoyu', name: '咸屋酱油·味噌', icon: '🫙', tag: '食', type: '特产', price: 40, desc: '百年酱油铺"咸屋酱油"，木桶酿造。酱油冰淇淋意外好吃。' },
      { id: 'hita_shingeki', name: '进击的巨人周边', icon: '⚔️', tag: '衣', type: '文创', price: 60, desc: '日田限定巨人主题徽章、立体机动装置玩具。谏山创故乡馆限定，"调查兵团集结"。' },
      { id: 'hita_doburoku', name: '浊酒（DOBUROKU）', icon: '🍶', tag: '食', type: '饮品', price: 50, desc: '天濑温泉的浊酒"米粒感"。乳白色微甜，"温泉后的一杯"。' },
      { id: 'hita_yakitori', name: '川端通商店街小吃', icon: '🍢', tag: '玩', type: '体验', price: 50, desc: '日田焼きそば与鸡肉串。豆田町小吃地图，"小京都的胃"。' },
      { id: 'hita_onsen2', name: '天濑温泉旅馆巡汤', icon: '♨️', tag: '玩', type: '体验', price: 100, desc: '买汤巡手形泡2-3家旅馆。山国川夜雾，"秘汤的仪式感"。' },
      { id: 'hita_shingeki2', name: '巨人主题馆参观', icon: '🖼️', tag: '玩', type: '体验', price: 50, desc: '谏山创原画与巨人立体雕塑。"墙外世界"在故乡具象化。' },
      { id: 'hita_cycling', name: '耶马溪自行车骑行', icon: '🚲', tag: '玩', type: '体验', price: 80, desc: '沿山国川骑行，秋天枫叶隧道。"新日本三景"骑行线。' },
      { id: 'hita_minsu', name: '豆田町町屋民宿', icon: '🏨', tag: '住', type: '住宿', price: 250, desc: '白墙町屋民宿，庭院有井。夜里酱油香与温泉气交织。' },
    ],
    stories: [
      { id: 'hita_story_attack2', name: '谏山创的"墙外灵感"', icon: '⚔️', desc: '谏山创19岁带《进击的巨人》到东京，曾被拒稿多次。他说"故乡日田的大山像墙"，灵感自山。' },
      { id: 'hita_story_mameda2', name: '"天领日田"的江户地位', icon: '🏛️', desc: '江户时代日田是幕府直辖天领，"西日本的经济中枢"。咸算盘与学问之乡，广濑淡窗的咸水园。' },
      { id: 'hita_story_onsen3', name: '"喝的温泉"奇观', icon: '♨️', desc: '咸水温泉含铁可饮，"胃药温泉"。当地谚语："喝一口，肠胃百病消。"' },
      { id: 'hita_story_ame', name: '青之洞门的"三十年执念"', icon: '⛰️', desc: '僧人禅海为修路凿隧道30年（1730年）。没有炸药，一锤一锤，"信仰的力量"。' },
      { id: 'hita_story_ramen2', name: '豚骨拉面的"发源地之争"', icon: '🍜', desc: '久留米与日田都说自己是豚骨拉面发源。日田的"透明豚骨"更古老（1937年）。' },
      { id: 'hita_story_kura2', name: '咸屋酱油的"木桶百年"', icon: '🫙', desc: '老铺酱油桶用了百年不换。杜氏说："桶里住着菌的祖先。"' },
    ],
  });
})();
