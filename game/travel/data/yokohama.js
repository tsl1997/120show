/* ============ 日本·横滨 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'yokohama',
    name: '横滨',
    country: '日本',
    cc: 'JP',
    flag: '🇯🇵',
    region: '日本·关东',
    hero: '🎡',
    desc: '港口之都·中华街的故乡：港未来21的摩天轮与红砖仓库，中华街的肉包子香气，实物大高达矗立在这里。',
    travel: [{ name: '高铁·新干线', icon: '🚄', cost: 2300 }, { name: '飞机', icon: '✈️', cost: 2500 }],
    visa: { cost: 300, note: '日本单次旅游签证（旅行社代办）' },
    spots: [
      { id: 'yokohama_minatomirai', name: '港未来21', icon: '🎡', price: 0, desc: '摩天楼群+摩天轮+帆船日本丸。"Cosmo Clock 21"是带时钟的摩天轮，夜景浪漫。' },
      { id: 'yokohama_chinatown', name: '横滨中华街', icon: '🏮', price: 0, desc: '亚洲最大中华街，关帝庙与牌楼金碧辉煌。肉包子、熊猫烧卖飘香，"日本的中国胃"。' },
      { id: 'yokohama_gundam', name: '实物大高达 Factory', icon: '🤖', price: 30, desc: '18米实物大α型高达可动表演。腿部细节震撼，"机器人迷的麦加"。' },
      { id: 'yokohama_akarenga', name: '红砖仓库', icon: '🏛️', price: 0, desc: '百年红砖仓库改的商场与啤酒园。海风吹着踩板广场，圣诞市集全日本最大。' },
      { id: 'yokohama_cup', name: '杯面博物馆', icon: '🍜', price: 60, desc: '安藤百福发明纪念馆：自己做杯面。从100种配料选4种，"世界上独一无二的一杯"。' },
      { id: 'yokohama_sanjigen', name: '三菱港未来美术馆·NAMJATOWN', icon: '🎨', price: 40, desc: 'NAMJATOWN是万代南梦宫室内游乐园。猫型乐园里藏着"万代IP小宇宙"。' },
      { id: 'yokohama_sangyo', name: '三溪园', icon: '🌿', price: 70, desc: '丝绸巨商原三溪的日式庭园，古建筑17座移筑。"三重塔映池塘"，四季皆画。' },
    ],
    souvenirs: [
      { id: 'yokohama_ikinari', name: '崎阳轩烧卖便当', icon: '🍱', tag: '食', type: '美食', price: 60, desc: '烧卖每人偶"Hi君"陪伴，百年车站便当之王。新干线里人手一份的横滨味道。' },
      { id: 'yokohama_china', name: '中华街肉包子', icon: '🥟', tag: '食', type: '美食', price: 15, desc: '肉包子比脸大，江户记、皇朝的队伍。现蒸现吃，"中华街的门面担当"。' },
      { id: 'yokohama_ramen', name: '家系拉面', icon: '🍜', tag: '食', type: '美食', price: 50, desc: '豚骨酱油汤配粗面菠菜叉烧，"横滨家系"。汤浓到挂勺，配饭团绝了。' },
      { id: 'yokohama_bier', name: '麒麟啤酒·横滨啤酒', icon: '🍺', tag: '食', type: '饮品', price: 40, desc: '麒麟啤酒发祥地就是横滨。红砖仓库里的麒麟横滨啤酒村，"源头的一杯"。' },
      { id: 'yokohama_gundam_wen', name: '高达模型（ガンプラ）', icon: '🤖', tag: '衣', type: '文创', price: 120, desc: '横滨高达工厂限定模型、钢普拉套装。"高达之父"大河原邦男配色，模型迷 pilgrimage。' },
      { id: 'yokohama_bandai', name: '万代IP周边', icon: '🎮', tag: '衣', type: '文创', price: 80, desc: 'NAMJATOWN里的万代IP周边：龙珠、海贼王、光之美少女。扭蛋机阵列，"一个都不想错过"。' },
      { id: 'yokohama_china_wen', name: '中华街文创', icon: '🐲', tag: '衣', type: '文创', price: 30, desc: '熊猫玩偶、龙纹扇子、中华点心礼盒。横滨中华街的"中式浪漫"。' },
      { id: 'yokohama_cup2', name: 'DIY 杯面制作', icon: '🍜', tag: '玩', type: '体验', price: 40, desc: '手绘杯身+自选配料，"世界上只此一杯"。杯面博物馆的亲子活动之王。' },
      { id: 'yokohama_cosmo', name: 'Cosmo World 游乐', icon: '🎡', tag: '玩', type: '体验', price: 100, desc: '摩天轮+过山车+云霄飞车套餐。夜景里的游乐场，"横滨的浪漫心跳"。' },
      { id: 'yokohama_boat', name: '港口游船·帆船日本丸', icon: '⛵', tag: '行', type: '体验', price: 80, desc: '游船绕港未来与山下公园。登"日本丸"帆船，"大航海时代的浪漫"。' },
      { id: 'yokohama_night', name: '山下公园海景散步', icon: '🌊', tag: '玩', type: '体验', price: 0, desc: '冰川丸邮轮停泊的海滨公园。海风吹着冰淇淋，"横滨的慢生活"。' },
      { id: 'yokohama_minsu', name: '港未来景酒店', icon: '🏨', tag: '住', type: '住宿', price: 500, desc: '港未来摩天楼酒店，夜景灯光触手可及。摩天轮就在窗外转动。' },
    ],
    stories: [
      { id: 'yokohama_story_gundam', name: '实物大高达的"站起来"', icon: '🤖', desc: '横滨高达能跪下、转头、挥手。工程师说："它不是玩具，是日本机械艺术的宣言。"' },
      { id: 'yokohama_story_china', name: '中华街的"开埠史"', icon: '🏮', desc: '1859年横滨开港，广东船员聚居成街。如今600多家店，"日本最大的唐人街"。' },
      { id: 'yokohama_story_cupmen', name: '杯面是"灾难的礼物"', icon: '🍜', desc: '安藤百福在自家后院小屋发明方便面。杯面博物馆里" instant ramen 隧道"讲尽百年泡面史。' },
      { id: 'yokohama_story_akarenga', name: '红砖仓库的"第二人生"', icon: '🏛️', desc: '旧海关仓库废弃后被改成文化商场。"历史的砖+现代的店"，改造范本。' },
      { id: 'yokohama_story_ike', name: '家系拉面的"八街血统"', icon: '🍜', desc: '1974年"吉村家"开创家系，徒弟开店形成"家系地图"。汤的浓淡面硬度都能定制。' },
      { id: 'yokohama_story_minato', name: '"港未来"的未来感', icon: '🎡', desc: '1980年代造陆新区，如今是横滨封面。摩天轮转一圈15分钟，"看着海转圈圈"。' },
    ],
  });
})();
