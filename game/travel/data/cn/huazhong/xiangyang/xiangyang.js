/* ============ 湖北·襄阳（分册版组装器） ============
 * 分册：xya_01地点 / xya_02周边 / xya_03趣事。
 * 三条主题线：古隆中·三国文脉 / 铁打城池·城墙护城河 / 汉水·一江两岸。
 * 城市字段照抄旧档，条目 id 保留兼容旧存档。
 */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'xiangyang',
    name: '襄阳',
    country: '中国',
    cc: 'CN',
    province: '湖北',
    flag: '🇨🇳',
    region: '华中',
    hero: '🏰',
    desc: '华夏第一城池：汉江穿城而过，铁打的襄阳城墙守护着三国与金庸笔下的侠气，一碗牛肉面配黄酒唤醒清晨。',
    travel: [{ name: '高铁', icon: '🚄', cost: 170 }, { name: '汽车', icon: '🚌', cost: 100 }],
    visa: null,
    spots: (window.XYA_SPOTS = window.XYA_SPOTS || []),
    souvenirs: (window.XYA_GIFTS = window.XYA_GIFTS || []),
    stories: (window.XYA_STORIES = window.XYA_STORIES || []),
  });
})();
