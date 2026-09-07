/* ============ 福建·泉州 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'quanzhou',
    name: '泉州',
    country: '中国',
    cc: 'CN',
    province: '福建',
    flag: '🇨🇳',
    region: '东南',
    hero: '⛵',
    desc: '宋元中国的世界海洋商贸中心：开元寺东西塔刺桐红，蟳埔村的簪花围，半城烟火半城仙，"此地古称佛国，满街都是圣人"。',
    travel: [{ name: '高铁', icon: '🚄', cost: 560 }, { name: '飞机', icon: '✈️', cost: 830 }],
    visa: null,
    spots: [
      { id: 'quanzhou_kaiyuansi', name: '开元寺·东西塔', icon: '🛕', price: 0, desc: '福建最大佛寺，双石塔屹立七百多年。弘一法师在此圆寂，"此地古称佛国"匾额是朱熹所题。' },
      { id: 'quanzhou_xunpu', name: '蟳埔村簪花围', icon: '🌸', price: 0, desc: '蚵壳厝老宅与"头上花园"簪花围。赵丽颖同款照片爆火，全村阿姨头上都是春天。' },
      { id: 'quanzhou_qingjingsi', name: '清净寺·关岳庙', icon: '🕌', price: 3, desc: '中国最古老清真寺之一，千年石构大门。隔壁关帝庙香火鼎盛，"一街两种信仰"和谐共存。' },
      { id: 'quanzhou_tiansheng', name: '洛阳桥', icon: '🌉', price: 0, desc: '中国第一座跨海石桥，"筏形基础"发明地。千年石桥卧波，蔡襄题字，"海内第一桥"。' },
      { id: 'quanzhou_xijie', name: '西街·钟楼', icon: '🏮', price: 0, desc: '泉州最早的老街，红砖古厝连绵。钟楼下四向街巷，面线糊与四果汤香气交织。' },
      { id: 'quanzhou_qingyuanshan', name: '清源山·老君岩', icon: '⛰️', price: 70, desc: '中国最大道教石雕老君岩"慈眉善目"。弘一法师舍利塔在山间，"闽南蓬莱第一山"。' },
      { id: 'quanzhou_chongwu', name: '崇武古城·惠安女', icon: '🏖️', price: 45, desc: '明代抗倭石头古城，惠安女"封建头民主肚"。惠女服饰全国独一份，海边劳作风景线。' },
    ],
    souvenirs: [
      { id: 'quanzhou_mianxian', name: '面线糊·醋肉', icon: '🍲', tag: '食', type: '美食', price: 15, desc: '细面线熬糊加大肠醋肉，配油条泡着吃。"泉州人的早餐仪式"，加一勺当归酒更地道。' },
      { id: 'quanzhou_niurou', name: '姜母鸭·牛排（泉州版）', icon: '🦆', tag: '食', type: '美食', price: 68, desc: '老姜麻油砂锅焖鸭，温补暖胃。泉州牛排是咖喱牛肋骨，"误会的名字，实在的美味"。' },
      { id: 'quanzhou_siguo', name: '四果汤·石花膏', icon: '🍧', tag: '食', type: '美食', price: 10, desc: '石花膏刨冰加蜜豆水果四种料。夏天人手一碗，"闽南的快乐水"。' },
      { id: 'quanzhou_runbing', name: '润饼·炸物', icon: '🌯', tag: '食', type: '美食', price: 15, desc: '薄饼皮卷胡萝卜丝海蛎香菜。"闽南春卷"，清明节的仪式美食。' },
      { id: 'quanzhou_tieguanyin2', name: '安溪铁观音', icon: '🍵', tag: '食', type: '特产', price: 100, desc: '乌龙茶代表"七泡有余香"。观音韵兰花香，泉州茶桌的日常。' },
      { id: 'quanzhou_cizao', name: '德化白瓷·安溪藤铁', icon: '🏺', tag: '衣', type: '文创', price: 120, desc: '德化白瓷"中国白"如凝脂。安溪藤铁工艺家居出口全球，"泉州手艺双雄"。' },
      { id: 'quanzhou_zanhua', name: '蟳埔簪花围体验', icon: '🌸', tag: '玩', type: '体验', price: 30, desc: '阿姨帮你盘头簪花，鲜花围成花环。"今生簪花，世世漂亮"，出片率100%。' },
      { id: 'quanzhou_muyu', name: '惠安女服饰体验', icon: '👗', tag: '衣', type: '服饰', price: 60, desc: '黄斗笠花头巾银腰链，惠安女经典装束。"封建头，民主肚，节约衫，浪费裤"。' },
      { id: 'quanzhou_oulu', name: '海蛎煎·海鲜大排档', icon: '🦪', tag: '食', type: '美食', price: 30, desc: '蟳埔海蛎现开现煎，配甜辣酱。码头渔船直供，"海蛎子的鲜味顶点"。' },
      { id: 'quanzhou_nanyin', name: '南音茶馆', icon: '🎻', tag: '玩', type: '体验', price: 50, desc: '世界非遗南音"中国音乐活化石"。茶馆里琵琶洞箫，"千年前的宋朝流行曲"。' },
      { id: 'quanzhou_huayuan', name: '梧林传统村落一日', icon: '🏘️', tag: '玩', type: '体验', price: 90, desc: '闽南官式大厝与南洋洋楼同村。哥特式侨建楼群，"华侨的家书变成房子"。' },
      { id: 'quanzhou_minsu', name: '红砖古厝民宿', icon: '🏨', tag: '住', type: '住宿', price: 280, desc: '西街旁红砖古厝民宿，燕尾脊翘向天空。清晨开元寺钟声悠悠传来。' },
    ],
    stories: [
      { id: 'quanzhou_story_citong', name: '"刺桐城"的世界地位', icon: '⛵', desc: '宋元时泉州是"东方第一大港"，马可·波罗惊叹。刺桐花开满城得名，2021年整城申遗成功。' },
      { id: 'quanzhou_story_zanhua', name: '簪花围的"走红"', icon: '🌸', desc: '蟳埔女世代头戴花环，蚵壳厝前拍照火了。一句"今生簪花，世世漂亮"让全村排队。' },
      { id: 'quanzhou_story_xinyang', name: '满街都是圣人的城', icon: '🙏', desc: '清真寺、关帝庙、佛寺、教堂同街而立。"世界宗教博物馆"，多元信仰共存千年。' },
      { id: 'quanzhou_story_nanyin', name: '南音是"宋朝的CD"', icon: '🎻', desc: '南音保留唐宋曲牌与泉州方言演唱。联合国非遗，老艺人说："听南音，思故乡。"' },
      { id: 'quanzhou_story_hui', name: '惠安女的一身"矛盾"', icon: '👗', desc: '头包严实、腰带上移露出肚脐。千斤石头压头发定型，"惠安女精神"写进民俗史。' },
      { id: 'quanzhou_story_qiao', name: '泉州人的"下南洋"', icon: '🏝️', desc: '泉州侨胞遍布东南亚，侨批（家书）成世界记忆遗产。梧林洋楼就是"用家书盖的房子"。' },
    ],
  });
})();
