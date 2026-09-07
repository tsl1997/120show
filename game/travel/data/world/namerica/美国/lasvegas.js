/* ============ 美国·拉斯维加斯 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'lasvegas',
    name: '拉斯维加斯',
    country: '美国',
    cc: 'US',
    flag: '🇺🇸',
    region: '美国·西部',
    hero: '🎰',
    desc: '沙漠中的不夜城：长街的巴黎铁塔与金字塔并立，赌场与演出彻夜灯火，"what happens in Vegas stays in Vegas"。',
    travel: [{ name: '飞机', icon: '✈️', cost: 7000 }],
    visa: { cost: 1400, note: 'B1/B2访客签证（需面签）' },
    spots: [
      { id: 'lasvegas_strip', name: '长街（The Strip）', icon: '🎡', price: 0, desc: '7公里大道装下埃菲尔铁塔、金字塔与威尼斯运河。"世界在一条街上"，夜景封神。' },
      { id: 'lasvegas_bellagio', name: '百乐宫音乐喷泉', icon: '⛲', price: 0, desc: '《十一罗汉》取景地，水柱射到140米。每15分钟一场，"免费的顶级秀"。' },
      { id: 'lasvegas_highroller', name: '豪客摩天轮', icon: '🎡', price: 150, desc: '世界最高摩天轮167米，转一圈30分钟。舱内酒吧，"微醺看全城灯火"。' },
      { id: 'lasvegas_fremont', name: '弗里蒙特街天幕', icon: '💡', price: 0, desc: '老城区LED天幕"全球最大屏幕"。高空滑索穿越灯海，"老赌城的霓虹之心"。' },
      { id: 'lasvegas_show', name: '太阳马戏 O 秀', icon: '🎭', price: 600, desc: '百乐宫水上舞台"O秀"，跳水与花样游泳。全球顶级秀，"赌城的艺术天花板"。' },
      { id: 'lasvegas_canyon', name: '大峡谷西缘一日', icon: '🏞️', price: 400, desc: '玻璃天桥悬于科罗拉多河上空1219米。直升机降落谷底香槟野餐，"此生必看的峡谷"。' },
      { id: 'lasvegas_neon', name: '霓虹灯牌墓地', icon: '💀', price: 100, desc: '退役的赌城灯牌"坟场"博物馆。旧霓虹的浪漫，"摄影师的最爱"。' },
    ],
    souvenirs: [
      { id: 'lasvegas_buffet', name: '自助餐之王 Bacchanal', icon: '🍽️', tag: '食', type: '美食', price: 500, desc: '凯撒宫自助餐"赌城自助天花板"。700种菜品，"吃回本"是门学问。' },
      { id: 'lasvegas_steak', name: '名厨牛排馆', icon: '🥩', tag: '食', type: '美食', price: 800, desc: '戈登拉姆齐、Wolfgang Puck 都在这开店。"名厨集结地"，人均四位数的牛排。' },
      { id: 'lasvegas_cocktail', name: '赌场池畔鸡尾酒', icon: '🍹', tag: '食', type: '饮品', price: 120, desc: '泳池边"Free Flow"鸡尾酒。18米高泳池看长街，"Vegas 的夏天"。' },
      { id: 'lasvegas_chip', name: '纪念筹码', icon: '🪙', tag: '衣', type: '文创', price: 30, desc: '每家赌场的限定纪念筹码，"收集控的天堂"。不赌也能买，"赌城的货币艺术"。' },
      { id: 'lasvegas_elvis', name: '猫王周边', icon: '🕺', tag: '衣', type: '文创', price: 40, desc: '猫王是"赌城之王"，白婚纱猫王合影。"Viva Las Vegas"的文化符号。' },
      { id: 'lasvegas_wedding', name: '小白教堂纪念', icon: '💍', tag: '衣', type: '文创', price: 50, desc: '"Drive-thru 婚礼教堂"是世界奇观。买枚"Vegas married"戒指当纪念。' },
      { id: 'lasvegas_shoot', name: '射击场体验', icon: '🔫', tag: '玩', type: '体验', price: 400, desc: '合法射击场体验加特林与狙击枪。"只在 Vegas 能玩"的重火力。' },
      { id: 'lasvegas_heli', name: '夜航直升机看长街', icon: '🚁', tag: '玩', type: '体验', price: 800, desc: '直升机环城夜景，香槟着陆。"空中赌城"，最浪漫的打开方式。' },
      { id: 'lasvegas_pole', name: '脱衣舞健身课', icon: '💃', tag: '玩', type: '体验', price: 300, desc: '"X-Pole"钢管舞体验课， Vegas 特色。运动量惊人，"笑着流汗"。' },
      { id: 'lasvegas_drive', name: '超跑自驾体验', icon: '🏎️', tag: '玩', type: '体验', price: 600, desc: '租兰博基尼/法拉利跑长街15分钟。"车比人多"的城市体验。' },
      { id: 'lasvegas_minsu', name: '主题酒店套房', icon: '🏨', tag: '住', type: '住宿', price: 800, desc: '威尼斯人"运河房"、百乐宫喷泉景房。"房间本身就是景点"。' },
    ],
    stories: [
      { id: 'lasvegas_story_desert', name: '沙漠里的"不夜城"', icon: '🌃', desc: '拉斯维加斯建在莫哈韦沙漠中，全年降雨10厘米。"人类在沙漠建了个霓虹绿洲"。' },
      { id: 'lasvegas_story_buffet', name: '自助餐是"赌城发明"', icon: '🍽️', desc: '1940年代赌场发明自助餐留客，"Buck Buffet"只要1美元。如今吃成了米其林级别。' },
      { id: 'lasvegas_story_move', name: '酒店会"搬家"', icon: '🏗️', desc: '1993年穹顶酒店爆破拆除，百乐宫借此全球营销。"在 Vegas，连酒店都是秀"。' },
      { id: 'lasvegas_story_cirque', name: '太阳马戏的"赌城奇迹"', icon: '🎭', desc: '太阳马戏8个驻场秀同时在演。"一个团救活一条街"的说法。' },
      { id: 'lasvegas_story_wedding2', name: '婚礼之都', icon: '💍', desc: '每年12万对情侣在 Vegas 结婚，"全球婚礼首都"。免等候期，开着车就能结婚。' },
      { id: 'lasvegas_story_hoover', name: '胡佛水坝喂活了赌城', icon: '💧', desc: '1935年胡佛水坝供电，赌城才有了不夜的电。米德湖是它的"电池"。' },
    ],
  });
})();
