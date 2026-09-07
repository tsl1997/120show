/* ============ 澳大利亚·悉尼（完全版·分册组装） ============
 * 分册：au_01地点 / au_02周边 / au_03趣事。
 * 叙事主线：歌剧院/海港大桥/邦代海滩/蓝山/考拉/咖啡文化/跨年烟花。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'sydney',
    name: '悉尼',
    country: '澳大利亚',
    cc: 'AU',
    flag: '🇦🇺',
    region: '大洋洲',
    hero: '🦘',
    desc: '南半球的阳光之城：歌剧院白帆在海湾舒展，考拉在桉树上打盹，邦代海滩的浪与咖啡香，构成"悉尼式"的松弛。',
    travel: [{ name: '飞机', icon: '✈️', cost: 5000 }],
    visa: { cost: 1050, note: '澳大利亚访客签证（600类别）' },
    spots: (window.AU_SPOTS = window.AU_SPOTS || []),
    souvenirs: (window.AU_GIFTS = window.AU_GIFTS || []),
    stories: (window.AU_STORIES = window.AU_STORIES || [])
  });
})();
