/* ============ 广东·深圳 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'shenzhen',
    name: '深圳',
    country: '中国',
    cc: 'CN',
    province: '广东',
    flag: '🇨🇳',
    region: '华南',
    hero: '🏙️',
    desc: '"深圳速度"的奇迹之城：从小渔村到摩天森林只用四十年，主题乐园与科技展馆并存，海风里都是年轻的闯劲。',
    travel: [{ name: '高铁', icon: '🚄', cost: 550 }, { name: '飞机', icon: '✈️', cost: 850 }],
    visa: null,
    spots: [
      { id: 'shenzhen_shijie', name: '世界之窗', icon: '🌍', price: 220, desc: '"一天环游世界"，埃菲尔铁塔按1:3复刻。微缩景观+文化表演，夜场烟花更浪漫。' },
      { id: 'shenzhen_huanlegu', name: '欢乐谷·锦绣中华', icon: '🎢', price: 230, desc: '欢乐谷木质过山车"雪域雄鹰"俯冲尖叫。锦绣中华微缩中华景观，"一步一城"。' },
      { id: 'shenzhen_dameisha', name: '大梅沙·较场尾', icon: '🏖️', price: 0, desc: '免费海滨浴场沙软浪缓。较场尾民宿彩墙如童话小镇，"深圳的海"。' },
      { id: 'shenzhen_lianhuashan', name: '莲花山·深圳湾公园', icon: '🌳', price: 0, desc: '莲花山顶广场俯瞰市民中心，"深圳天际线机位"。深圳湾骑行海边栈道，日落看候鸟。' },
      { id: 'shenzhen_huaqiangbei', name: '华强北·深圳博物馆', icon: '💻', price: 0, desc: '"中国电子第一街"，手机配件宇宙。深圳博物馆讲"深圳速度"，改革开放的奇迹现场。' },
      { id: 'shenzhen_guangchang', name: '平安金融中心云际观光层', icon: '🏙️', price: 200, desc: '600米"深圳之巅"，116层观光层。云上深圳+Free Sky 观光，玻璃栈道悬空。' },
      { id: 'shenzhen_gankeng', name: '甘坑客家小镇·大鹏所城', icon: '🏘️', price: 0, desc: '客家围屋与明清海防所城。大鹏所城"将军村"，较场尾就在旁边。' },
    ],
    souvenirs: [
      { id: 'shenzhen_chaozhou', name: '潮汕牛肉火锅', icon: '🍲', tag: '食', type: '美食', price: 130, desc: '现切黄牛肉按部位涮，吊龙、匙柄各有时长。"深圳人的第二故乡味"。' },
      { id: 'shenzhen_shaokao', name: '光明乳鸽·椰子鸡', icon: '🍗', tag: '食', type: '美食', price: 60, desc: '光明招待所乳鸽"皮脆肉嫩"。椰子鸡火锅清甜，"深圳人发明的火锅"。' },
      { id: 'shenzhen_zaocha', name: '肠粉·猪脚饭', icon: '🍜', tag: '食', type: '美食', price: 25, desc: '广式肠粉滑嫩，隆江猪脚饭"打工人之光"。凌晨的猪脚饭，"深圳的温柔"。' },
      { id: 'shenzhen_haiwei', name: '海味干货·南澳海胆', icon: '🦪', tag: '食', type: '特产', price: 100, desc: '南澳海胆炒饭金黄喷香。海味街干货礼盒，"海边的手信"。' },
      { id: 'shenzhen_tech', name: '无人机·科技文创', icon: '🚁', tag: '衣', type: '文创', price: 150, desc: '大疆旗舰店体验最新航拍器。无人机模型、机器人盲盒，"科技之城的手办"。' },
      { id: 'shenzhen_hua', name: '华强北数码', icon: '📱', tag: '衣', type: '特产', price: 100, desc: '耳机、键盘、智能手表淘货天堂。"全球硬件硅谷"，砍价乐趣无穷。' },
      { id: 'shenzhen_wenhua', name: '改革开放纪念文创', icon: '🐂', tag: '衣', type: '文创', price: 40, desc: '"拓荒牛"铜雕模型、深圳改革开放展览馆徽章。"深圳精神"的实体化。' },
      { id: 'shenzhen_chuan', name: '红树林观鸟·深圳湾骑行', icon: '🚲', tag: '玩', type: '体验', price: 50, desc: '深圳湾公园租单车海边骑行，黑脸琵鹭冬季来。城市绿道的"深圈权限"。' },
      { id: 'shenzhen_qian', name: '潜水·较场尾赶海', icon: '🤿', tag: '玩', type: '体验', price: 300, desc: '大鹏潜点浮潜看珊瑚小鱼。较场尾赶海抓蟹，"深圳的隐藏海边玩法"。' },
      { id: 'shenzhen_kafei', name: '咖啡·青年艺术展', icon: '☕', tag: '玩', type: '体验', price: 60, desc: '华侨城创意园（OCT）看展喝咖啡。旧厂房艺术区，"深圳的文艺肌肉"。' },
      { id: 'shenzhen_ye', name: '灯光秀·海上世界夜', icon: '🌃', tag: '玩', type: '体验', price: 0, desc: '市民中心灯光秀整点上演。海上世界明华轮音乐喷泉，"深圳的夜很年轻"。' },
      { id: 'shenzhen_minsu', name: '较场尾海景民宿', icon: '🏨', tag: '住', type: '住宿', price: 400, desc: '彩色民宿群推窗见海。阳台听浪，"深圳的度假周末"。' },
    ],
    stories: [
      { id: 'shenzhen_story_su', name: '"深圳速度"的由来', icon: '🏗️', desc: '国贸大厦"三天一层楼"，深圳速度从此得名。四十年从小渔村到2000万人口大都市，世界奇迹。' },
      { id: 'shenzhen_story_lai', name: '"来了就是深圳人"', icon: '🤝', desc: '深圳平均年龄33岁，移民城市没有排外。这句话印在街头，"深圳的包容是刻在骨子里的"。' },
      { id: 'shenzhen_story_qiang', name: '华强北的"造富神话"', icon: '💻', desc: '一米柜台走出过亿万富翁。山寨机时代后转型创客天堂，"全球硬件硅谷"的进化史。' },
      { id: 'shenzhen_story_wu', name: '无人机之城', icon: '🚁', desc: '全球70%的消费级无人机产自深圳。大疆总部"天空之城"大厦成了新地标。' },
      { id: 'shenzhen_story_hai', name: '深圳的海不输三亚', icon: '🌊', desc: '大鹏半岛被《中国国家地理》评为中国最美海岸之一。西涌天文台观星，"城市边的星空"。' },
      { id: 'shenzhen_story_shu', name: '图书馆之城', icon: '📚', desc: '深圳图书馆之城：700多个图书馆免费开放。年轻人在书城排队，"最卷的城市也最好学"。' },
    ],
  });
})();
