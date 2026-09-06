/* ============ 日本·熊本 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'kumamoto',
    name: '熊本',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·九州',
    hero: '🐻',
    desc: '熊本熊的老家：黑色的阿苏火山口冒着烟气，熊本城"武者返"石垣巍峨，还有吉祥物收入冠军 KUMAMON 的幽默老家。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2500 }, { name: '飞机', icon: '✈️', cost: 2600 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'kumamoto_aso', name: '阿苏山火山口', icon: '🌋', price: 50, desc: '世界最大级别破火山口，中岳火山口冒烟。草千里骑马看火山，"大地在呼吸"。' },
      { id: 'kumamoto_castle', name: '熊本城', icon: '🏯', price: 60, desc: '"日本三名城"之一，"武者返"石垣陡峭如墙。2016年地震后修复中，"不屈的重生"。' },
      { id: 'kumamoto_kumamon', name: '熊本熊广场', icon: '🐻', price: 0, desc: '熊本熊（KUMAMON）部长办公室，每天表演。握手合影要排队，"全球最富有的熊"。' },
      { id: 'kumamoto_suizenji', name: '水前寺成趣园', icon: '🌿', price: 40, desc: '仿东海道五十三次做成的回游式庭园。"出水神社"涌泉清澈，细川家百年造园。' },
      { id: 'kumamoto_kurokawa', name: '黑川温泉', icon: '♨️', price: 60, desc: '木造温泉街"手汤"一路，露天风吕巡游。穿浴衣漫步，"日本最美温泉乡"之一。' },
      { id: 'kumamoto_oyano', name: '天草·三角港', icon: '⛵', price: 0, desc: '天草四郎"岛原之乱"的历史舞台。海豚湾游船看野生海豚，"命中率98%"。' },
      { id: 'kumamoto_yamaga', name: '山鹿灯笼祭·八千代座', icon: '🏮', price: 30, desc: '金灯笼千年祭典（8月）。八千代座歌舞伎剧场百年木造，"旋转舞台"还在转。' },
    ],
    souvenirs: [
      { id: 'kumamoto_basashi', name: '马肉刺身（马刺）', icon: '🐎', tag: '食', type: '美食', price: 90, desc: '熊本名物马刺，"樱花色"马肉霜降。配生姜酱油与酒，"熊本宴席的骄傲"。' },
      { id: 'kumamoto_taipien', name: '太平燕', icon: '🍜', tag: '食', type: '美食', price: 40, desc: '粉丝汤面配虾仁青菜，"熊本中华"。当地婚礼必上，"喜庆的味道"。' },
      { id: 'kumamoto_mustard', name: '芥末莲藕', icon: '🪡', tag: '食', type: '特产', price: 35, desc: '莲藕孔里塞满味噌芥末炸制。"一个孔一个秘密"的城下町料理。' },
      { id: 'kumamoto_ibu', name: '赤牛饭·阿苏赤牛', icon: '🐄', tag: '食', type: '美食', price: 80, desc: '阿苏放牧赤牛瘦而不柴，"火山草喂养"。赤牛饭与牛排，"草原的味道"。' },
      { id: 'kumamoto_labo', name: '球磨烧酒', icon: '🍶', tag: '食', type: '饮品', price: 60, desc: '米烧酒"球磨烧酒"发源地。米香清冽，"日本烧酒之乡"。' },
      { id: 'kumamoto_kumamon_snack', name: '熊本熊零食全家桶', icon: '🐻', tag: '食', type: '特产', price: 40, desc: 'KUMAMON 巧克力、饼干、肉桂卷。吉祥物授权收入超千亿，"熊本的顶流"。' },
      { id: 'kumamoto_kumamon_wen', name: '熊本熊周边', icon: '🐻', tag: '衣', type: '文创', price: 50, desc: '熊本熊玩偶、T恤、文具。红色腮红是"免税标志"的冷知识。' },
      { id: 'kumamoto_shimpu', name: '山鹿灯笼·肥后象嵌', icon: '🏮', tag: '衣', type: '文创', price: 100, desc: '和纸做的金灯笼工艺，肥后象嵌金属镶嵌。"熊本双绝"手艺。' },
      { id: 'kumamoto_onsen2', name: '黑川温泉巡汤', icon: '♨️', tag: '玩', type: '体验', price: 120, desc: '买"汤巡手形"泡三家露天风吕。木屐浴衣走在温泉街，"穿越的感觉"。' },
      { id: 'kumamoto_horse', name: '阿苏骑马', icon: '🐎', tag: '玩', type: '体验', price: 150, desc: '草千里滨骑马，火山口做背景。"在活火山上骑马"的体验。' },
      { id: 'kumamoto_dolphin', name: '天草海豚游船', icon: '🐬', tag: '玩', type: '体验', price: 200, desc: '船追野生瓶鼻海豚群，几乎必见。海豚跳跃，"天草的礼物"。' },
      { id: 'kumamoto_minsu', name: '温泉旅馆', icon: '🏨', tag: '住', type: '住宿', price: 400, desc: '黑川温泉旅馆一泊二食，露天风吕配山涧。夜里只有溪流声。' },
    ],
    stories: [
      { id: 'kumamoto_story_kumamon2', name: '熊本熊的"千亿生意"', icon: '🐻', desc: '熊本熊免费授权策略让熊本旅游收入暴增，年产值超千亿日元。"最成功的地区营销案例"。' },
      { id: 'kumamoto_story_aso', name: '阿苏的"地球呼吸"', icon: '🌋', desc: '阿苏中岳火山口常年喷气，火山警报分级开放。草千里的牛马悠闲吃草，"与火山共存"。' },
      { id: 'kumamoto_story_basashi2', name: '马刺为什么在熊本', icon: '🐎', desc: '战国时代战马战略储备，战败马被食用成传统。如今马刺是宴席最高规格。' },
      { id: 'kumamoto_story_castle2', name: '熊本城的"石垣艺术"', icon: '🏯', desc: '"武者返"石垣上陡下缓，忍者爬不上来。加藤清正的建筑智慧，400年后仍坚固。' },
      { id: 'kumamoto_story_kurokawa2', name: '黑川温泉的"拒绝现代化"', icon: '♨️', desc: '温泉街坚持木造建筑、电线地下化。全街共识："要赚钱，先保护风景。"' },
      { id: 'kumamoto_story_amakusa', name: '天草的"潜伏吉利支丹"', icon: '⚓', desc: '岛原之乱后基督徒隐秘信仰250年。天草的教堂群是世界遗产"潜伏基督徒"遗产。' },
    ],
  });
})();
