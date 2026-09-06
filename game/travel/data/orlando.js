/* ============ 美国·奥兰多 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'orlando',
    name: '奥兰多',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·南部',
    hero: '🏰',
    desc: '世界主题公园之都：迪士尼世界四园一水，环球影城哈利波特魔法世界，"地球上最快乐的地方"就在佛州中部。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7600 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'orlando_disney', name: '华特迪士尼世界', icon: '🏰', price: 800, desc: '全球最大迪士尼：魔法王国、EPCOT、好莱坞影城、动物王国。灰姑娘城堡烟花秀，"4园1周都玩不完"。' },
      { id: 'orlando_universal', name: '环球影城·冒险岛', icon: '🎢', price: 700, desc: '哈利波特魔法世界双园区（对角巷+霍格莫德）。坐霍格沃茨特快"穿越"两园，黄油啤酒必喝。' },
      { id: 'orlando_seaworld', name: '海洋世界（SeaWorld）', icon: '🐋', price: 600, desc: '虎鲸表演与过山车组合园。Mako 极速过山车，"海洋+刺激"双拼。' },
      { id: 'orlando_water', name: '水上乐园：Volcano Bay', icon: '🌊', price: 450, desc: '环球火山湾水上乐园，"TapuTapu"手环排队。 Krakatau 火山滑道，"水上乐园的天花板"。' },
      { id: 'orlando_kennedy', name: '肯尼迪航天中心一日', icon: '🚀', price: 350, desc: '一小时车程外的 NASA 发射场。看亚特兰蒂斯航天飞机真机，有机会看火箭发射。' },
      { id: 'orlando_icon', name: 'ICON Park·奥兰多之眼', icon: '🎡', price: 200, desc: '120米摩天轮+ Madame Tussauds 蜡像馆+水族馆。"国际大道"的娱乐中心。' },
      { id: 'orlando_outlets', name: '奥特莱斯购物', icon: '🛍️', price: 0, desc: '佛罗里达购物中心与 Premium Outlets。"税低+折扣"，购物党的天堂。' },
    ],
    souvenirs: [
      { id: 'orlando_mickey', name: '米奇米妮周边', icon: '🐭', tag: '衣', type: '文创', price: 100, desc: '迪士尼世界限定：城堡爆米花桶、米奇耳朵。"全球迪士尼限定"，佛州独有款。' },
      { id: 'orlando_butterbeer', name: '黄油啤酒·魔法袍', icon: '🍺', tag: '食', type: '美食', price: 60, desc: '黄油啤酒（奶油汽水）+魔法杖+学院袍。"麻瓜也能拥有魔法"。' },
      { id: 'orlando_wand', name: '互动魔杖', icon: '🪄', tag: '衣', type: '文创', price: 350, desc: '奥利凡德魔杖店选杖，园区30个点位"施法"互动。"魔杖选择巫师"。' },
      { id: 'orlando_simpson', name: '辛普森/马里奥周边', icon: '🍄', tag: '衣', type: '文创', price: 60, desc: '环球影城 Duff 啤酒罐、超级任天堂世界商品。佛州限定马里奥帽。' },
      { id: 'orlando_nasa_wen', name: 'NASA 航天文创', icon: '🚀', tag: '衣', type: '文创', price: 80, desc: '登月50周年纪念币、火箭模型。"KSC 限定"太空纪念。' },
      { id: 'orlando_fireworks', name: '城堡烟花 Happily Ever After', icon: '🎆', tag: '玩', type: '体验', price: 0, desc: '灰姑娘城堡投影+烟花的巅峰秀。提前1小时占位，"排队也值的眼泪"。' },
      { id: 'orlando_hogwarts', name: '霍格沃茨特快体验', icon: '🚂', tag: '玩', type: '体验', price: 0, desc: '国王十字站"穿墙"上车。两侧车窗与车厢"魔法切换"，双园票专属。' },
      { id: 'orlando_dino', name: '动物王国阿凡达飞行', icon: '🦋', tag: '玩', type: '体验', price: 0, desc: 'Avatar Flight of Passage 4D骑乘。潘多拉星球夜景荧光，"迪士尼最强项目"。' },
      { id: 'orlando_coaster', name: 'VelociCoaster 迅猛龙过山车', icon: '🦖', tag: '玩', type: '体验', price: 0, desc: '70英里时速4个翻转的"侏罗纪极速"。环球最新王牌，"过山车迷的圣杯"。' },
      { id: 'orlando_launch', name: '看火箭发射', icon: '🚀', tag: '玩', type: '体验', price: 150, desc: 'KSC 观景区看 SpaceX 猎鹰发射。轰鸣+震动+光尾，"震撼值爆表"。' },
      { id: 'orlando_minsu', name: '主题度假别墅', icon: '🏨', tag: '住', type: '住宿', price: 800, desc: 'Kissimmee 私人泳池别墅，"迪士尼十分钟的豪宅"。全家出游首选。' },
    ],
    stories: [
      { id: 'orlando_story_disney2', name: '迪士尼世界的"秘密地道"', icon: '🐭', desc: '魔法王国地下有"/utilidor"员工隧道网。米老鼠永远不会在错误的区域出现。' },
      { id: 'orlando_story_hp', name: '哈利波特园区的"魔法细节"', icon: '⚡', desc: '对角巷屋顶都是"歪的"（透视魔法），霍格莫德雪永不化。J.K.罗琳亲自审了每个细节。' },
      { id: 'orlando_story_1965', name: '"佛罗里达计划"的秘密', icon: '🏰', desc: '华特迪士尼1965年秘密买下27400亩沼泽地（用假公司）。奥兰多迪士尼世界是他生前最后的梦想。' },
      { id: 'orlando_story_museum', name: '"全世界最快乐的地方"的由来', icon: '🎠', desc: '魔法王国开业广告语："The Happiest Place on Earth"。真·快乐工厂：每年2500万人。' },
      { id: 'orlando_story_rocket', name: '在奥兰多"顺便看火箭"', icon: '🚀', desc: 'KSC 离奥兰多1小时，SpaceX 一月多次发射。"乐园+太空"双打卡，佛州限定。' },
      { id: 'orlando_story_butter', name: '黄油啤酒的"配方保密"', icon: '🍺', desc: '环球影城黄油啤酒无酒精，配方全世界只有几位厨师知道。每年卖出千升，"魔法最好喝的部分"。' },
    ],
  });
})();
