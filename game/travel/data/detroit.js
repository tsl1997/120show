/* ============ 美国·底特律 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'detroit',
    name: '底特律',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·中西部',
    hero: '🚗',
    desc: '汽车城：福特、通用、克莱斯勒三巨头的故乡，摩城音乐从这里响起，废墟与复兴并存，"Detroit Hustles Harder"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7300 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'detroit_henryford', name: '亨利福特博物馆·绿菲尔德村', icon: '🚗', price: 240, desc: '"美国创新史"：福特T型车、肯尼迪座驾、罗莎帕克斯公交车。爱迪生实验室完整搬来，"美国发明的全家福"。' },
      { id: 'detroit_ford', name: '福特 Rouge 工厂之旅', icon: '🏭', price: 150, desc: '世界最大汽车工厂复合体参观。F-150 总装线现场，"皮卡之王的诞生"。' },
      { id: 'detroit_arena', name: '福克斯剧院· Comerica 球场', icon: '🏟️', price: 60, desc: '福克斯剧院金碧辉煌是"底特律的百老汇"。老虎队主场，"汽车城的家伙们"。' },
      { id: 'detroit_arts', name: '底特律美术馆（DIA）', icon: '🖼️', price: 80, desc: '迭戈里维拉壁画《底特律工业》震撼整面大厅。凡高自画像馆藏，"工业城的艺术底气"。' },
      { id: 'detroit_eastern', name: '东市场（Eastern Market）', icon: '🛒', price: 0, desc: '百年农产品市场，周六人声鼎沸。壁画涂鸦遍布街区，"底特律的胃"。' },
      { id: 'detroit_motown', name: '摩城博物馆（Hitsville U.S.A.）', icon: '🎤', price: 60, desc: 'Motown 唱片的小白屋录音棚。杰克逊五兄弟、Marvin Gaye 的起点，"美国流行乐的摇篮"。' },
      { id: 'detroit_ruins', name: '密歇根中央车站废墟', icon: '🏚️', price: 0, desc: '18层废弃火车站曾是"城市衰败"象征。2024年福特改造后重生，"废墟的新生"。' },
    ],
    souvenirs: [
      { id: 'detroit_coney', name: 'Coney Dog 辣椒热狗', icon: '🌭', tag: '食', type: '美食', price: 40, desc: '底特律式热狗：辣椒酱+芥末+洋葱。Lafayette 与 American 双雄"隔街百年对头"。' },
      { id: 'detroit_pizza', name: '底特律式披萨', icon: '🍕', tag: '食', type: '美食', price: 90, desc: '方形铸锅披萨，边脆底软配"边蘸酱"。Budd’ 1946年发明，"汽车工人的午餐"。' },
      { id: 'detroit_better', name: 'Better Made 薯片', icon: '🍟', tag: '食', type: '特产', price: 25, desc: '底特律本土薯片品牌，"红色包装是信仰"。本地人从小吃到大的味道。' },
      { id: 'detroit_motown_wen', name: '摩城唱片周边', icon: '🎤', tag: '衣', type: '文创', price: 60, desc: 'Motown 黑胶、Jackson 5 复刻海报。"Hitsville"的经典 logo T。' },
      { id: 'detroit_auto_wen', name: '汽车品牌周边', icon: '🚙', tag: '衣', type: '文创', price: 70, desc: '野马、科尔维特、F-150模型与徽章。"汽车城的信仰周边"。' },
      { id: 'detroit_shinola', name: 'Shinola 手表', icon: '⌚', tag: '衣', type: '服饰', price: 800, desc: '"底特律制造"复兴品牌手表与皮具。"Detroit Built"的城市骄傲。' },
      { id: 'detroit_mural', name: '东市场壁画巡礼', icon: '🎨', tag: '玩', type: '体验', price: 40, desc: 'Market 电视塔涂鸦是打卡顶流。街区壁画年年更新，"废墟变画廊"。' },
      { id: 'detroit_ruin2', name: '废墟摄影之旅', icon: '📸', tag: '玩', type: '体验', price: 100, desc: '导览探访 Packard 工厂废墟与教堂。"Beautiful Ruins"是底特律美学。' },
      { id: 'detroit_river', name: '河畔步道观加拿大', icon: '🌉', tag: '行', type: '体验', price: 0, desc: '底特律河对岸就是加拿大温莎。大使桥夜景，"一步之遥的两国"。' },
      { id: 'detroit_gm', name: 'GM Renaissance 中心观景', icon: '🏙️', tag: '行', type: '体验', price: 0, desc: '通用汽车总部大楼73层免费观景台。俯瞰全城与河流，"汽车城的封面"。' },
      { id: 'detroit_minsu', name: '市中心 Lofts 酒店', icon: '🏨', tag: '住', type: '住宿', price: 500, desc: '老办公楼改造的 Lofts 酒店。工业风房间，"底特律的复兴气质"。' },
    ],
    stories: [
      { id: 'detroit_story_assembly', name: '流水线改变世界', icon: '🏭', desc: '1913年福特 Highland Park 工厂首创流水线。汽车从奢侈品变日用品，"现代制造业的起点"。' },
      { id: 'detroit_story_motown2', name: '摩城之声的" crossover "', icon: '🎤', desc: 'Berry Gordy 800美元创业，Motown 让黑人音乐统治排行榜。"The Sound of Young America"。' },
      { id: 'detroit_story_bankrupt', name: '破产城市的"重生"', icon: '📈', desc: '2013年底特律破产（180亿美元债务）。十年后市中心复兴，"美国城市转型的教科书"。' },
      { id: 'detroit_story_robocop', name: '《铁甲威龙》与底特律', icon: '🤖', desc: '电影设定未来底特律由机器人警察维持。城市还在广场立了"洛博考普"雕像。' },
      { id: 'detroit_story_mural2', name: '东市场的"涂鸦复兴"', icon: '🎨', desc: '艺术家把市场仓库画成露天美术馆。"Murals in the Market"节每年刷新。' },
      { id: 'detroit_story_pizza2', name: '方形披萨的"汽车工厂血统"', icon: '🍕', desc: '1946年 Budd’ 用汽车零件店的蓝钢盘烤披萨。"方锅"就是当年工具盘。' },
    ],
  });
})();
