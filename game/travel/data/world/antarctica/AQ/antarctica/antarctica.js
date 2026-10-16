/* ============ 南极洲·科考站（完全版·分册组装） ============
 * 分册：ant_01地点 / ant_02周边 / ant_03趣事。
 * 叙事主线：长城站与中山站的中国足迹 / 冰穹建站 / 南极点与麦克默多 / 极地生态与气候档案。
 * 说明：南极无主权、不设签证（《南极条约》冻结领土主张），
 *       计价采用美元——各国科考后勤通用结算币种，已在 app.js 的 FX 表登记 AQ。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'antarctica',
    name: '南极科考站',
    country: '南极洲',
    cc: 'AQ',
    flag: '🐧',
    region: '南极洲·极地科考',
    hero: '🧊',
    desc: '地球最南端的白色荒原：破冰船穿过咆哮的德雷克海峡，冰山、企鹅与极昼极夜一路相随。人类在这里建起一座座科考站——世界的尽头，也是科学的前线。',
    travel: [
      { name: '破冰船·乌斯怀亚', icon: '🚢', cost: 32000 },
      { name: '科考船·基督城', icon: '🚢', cost: 36000 },
      { name: '运输机·开普敦', icon: '✈️', cost: 42000 }
    ],
    visa: { cost: 0, note: '南极条约区域免签，需科考站邀请函与极地体检证明' },
    spots: (window.ANT_SPOTS = window.ANT_SPOTS || []),
    souvenirs: (window.ANT_GIFTS = window.ANT_GIFTS || []),
    stories: (window.ANT_STORIES = window.ANT_STORIES || [])
  });
})();
