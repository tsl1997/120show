/* ============ 承德（分册立体版·组装器） ============
 * 分册：cde_01地点 / cde_02周边 / cde_03趣事。
 * 叙事主线：避暑山庄 / 皇家外八庙 / 木兰秋狝 / 满蒙汉藏多民族相会。
 * 说明：由旧档 data/cn/huabei/chengde.js 扩容而来，
 * 全部旧条目的 spots/souvenirs/stories 原样并入分册。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'chengde',
    name: '承德',
    country: '中国',
    cc: 'CN',
    province: '河北',
    flag: '🇨🇳',
    region: '华北',
    hero: '🏞️',
    desc: '清王朝的避暑后花园：世界最大的皇家园林避暑山庄在此，外八庙金顶映着磬锤峰，塞罕坝的绿洲就在北边。',
    travel: [{ name: '高铁', icon: '🚄', cost: 700 }, { name: '飞机', icon: '✈️', cost: 900 }],
    visa: null,
    spots: (window.CDE_SPOTS = window.CDE_SPOTS || []),
    souvenirs: (window.CDE_GIFTS = window.CDE_GIFTS || []),
    stories: (window.CDE_STORIES = window.CDE_STORIES || []),
  });
})();
