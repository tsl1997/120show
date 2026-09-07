/* ============ 阿联酋·迪拜（完全版·分册组装） ============
 * 分册：ae_01地点 / ae_02周边 / ae_03趣事。
 * 叙事主线：哈利法塔/棕榈岛/沙漠冲沙/朱美拉清真寺/奢靡与黑袍/音乐喷泉。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'dubai',
    name: '迪拜',
    country: '阿联酋',
    cc: 'AE',
    flag: '🇦🇪',
    region: '中东',
    hero: '🏜️',
    desc: '沙漠里的未来之城：世界第一高楼刺破云层，人工棕榈岛漂在海面，一半是黄金市集的传统，一半是奢靡与科技的极限。',
    travel: [{ name: '飞机', icon: '✈️', cost: 3200 }],
    visa: { cost: 0, note: '阿联酋免签（停留不超过30天）' },
    spots: (window.AE_SPOTS = window.AE_SPOTS || []),
    souvenirs: (window.AE_GIFTS = window.AE_GIFTS || []),
    stories: (window.AE_STORIES = window.AE_STORIES || [])
  });
})();
