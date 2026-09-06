/* ============ 青海·西宁 ============ */
(function () {
  window.TRAVEL_CITIES = window.TRAVEL_CITIES || [];
  window.TRAVEL_CITIES.push({
    id: 'xining',
    name: '西宁',
    country: '中国',
    cc: 'CN',
    province: '青海',
    flag: '🇨🇳',
    region: '青藏',
    hero: '🕌',
    desc: '"夏都"：高原古城凉爽宜人，塔尔寺的酥油花精美绝伦，青海湖与茶卡盐湖从这里出发，一碗手抓羊肉配酸奶就是高原的滋味。',
    travel: [{ name: '高铁', icon: '🚄', cost: 550 }, { name: '飞机', icon: '✈️', cost: 950 }],
    visa: null,
    spots: [
      { id: 'xining_taer', name: '塔尔寺', icon: '🛕', price: 70, desc: '藏传佛教格鲁派六大寺院之一，酥油花、壁画、堆绣"艺术三绝"。酥油花馆里的"冰雕级"花艺，工匠在零度以下捏成。' },
      { id: 'xining_qinghaihu', name: '青海湖二郎剑', icon: '🌊', price: 90, desc: '中国最大内陆咸水湖，蓝得像掉落高原的天空。七月环湖油菜花金黄，骑行最经典的一段就在湖东。' },
      { id: 'xining_chaka', name: '茶卡盐湖', icon: '🪞', price: 60, desc: '"天空之镜"，盐湖把天空倒过来。小火车驶入湖心，赤脚踩盐滩拍照，镜子里的云触手可及。' },
      { id: 'xining_dongguan', name: '东关清真大寺', icon: '🕌', price: 0, desc: '西北四大清真寺之一，融合汉藏伊斯兰风格。周五主麻日万人礼拜的场面壮观，非礼拜时段可参观。' },
      { id: 'xining_dongguan_xiaochi', name: '莫家街·水井巷', icon: '🍢', price: 0, desc: '西宁美食宇宙中心：手抓、酿皮、酸奶、甜醅。马忠食府的老字号扎堆，一街吃遍青海。' },
      { id: 'xining_beichan', name: '北禅寺·南寺', icon: '⛩️', price: 0, desc: '"北山烟雨"是古湟中八景，悬空寺式的崖壁古刹。登顶看西宁全景，"高原小悬空寺"。' },
      { id: 'xining_relongjia', name: '贵德国家地质公园', icon: '🏞️', price: 55, desc: '"天下黄河贵德清"，丹霞七彩峰丛。黄河在这里是碧绿色，阿什贡峡谷像火星地表。' },
    ],
    souvenirs: [
      { id: 'xining_shouzhua', name: '手抓羊肉', icon: '🍖', tag: '食', type: '美食', price: 80, desc: '高原藏系羊清水煮撒盐，鲜嫩无膻。配椒盐或蒜醋，"手抓"是最高礼遇。' },
      { id: 'xining_suantan', name: '老酸奶', icon: '🍶', tag: '食', type: '美食', price: 10, desc: '瓷碗装、揭奶皮的青海老酸奶，厚得能立勺。撒一层白糖，高原酵香浓到化不开。' },
      { id: 'xining_niangpi', name: '酿皮', icon: '🥞', tag: '食', type: '美食', price: 10, desc: '高原小麦酿皮厚糯弹牙，辣子油泼得红亮。配面筋与韭菜，街头巷尾的国民小吃。' },
      { id: 'xining_tianpei', name: '甜醅', icon: '🍚', tag: '食', type: '美食', price: 8, desc: '青稞发酵的"高原甜酒酿"，粒粒爆开。微醺清甜，夏天冰镇冬天热吃都好。' },
      { id: 'xining_paoniurou', name: '牦牛肉干', icon: '🥩', tag: '食', type: '特产', price: 80, desc: '高原牦牛风干肉紧实喷香。超市与牧民家价格差一半，认准草膘牦牛肉。' },
      { id: 'xining_qingke', name: '青稞酒·青稞制品', icon: '🌾', tag: '食', type: '饮品', price: 40, desc: '青稞酒微甜不上头，青稞饼干麦香浓。高原主粮的"健康打开方式"。' },
      { id: 'xining_kaoshi', name: '冬虫夏草·黑枸杞', icon: '🌿', tag: '食', type: '特产', price: 300, desc: '海拔四千米的虫草是"软黄金"，黑枸杞花青素之王。专业市场要会砍价，泡水紫色惊人。' },
      { id: 'xining_yan', name: '盐雕·茶卡盐文创', icon: '🧂', tag: '衣', type: '文创', price: 45, desc: '茶卡盐做的盐雕小件与浴盐。从天空之镜带回的"盐值担当"。' },
      { id: 'xining_duixiu', name: '堆绣·唐卡', icon: '🖼️', tag: '衣', type: '文创', price: 150, desc: '塔尔寺堆绣用绸缎"拼"出佛像，立体感强。小件唐卡书签与堆绣挂饰，非遗手艺。' },
      { id: 'xining_qinghaihu_ride', name: '青海湖骑行', icon: '🚲', tag: '玩', type: '体验', price: 150, desc: '环湖骑行精华段半天，湖风与花香齐飞。七月油菜花做背景，"中国最美骑行路线"。' },
      { id: 'xining_paopao', name: '茶卡盐湖小火车', icon: '🚂', tag: '行', type: '体验', price: 50, desc: '坐小火车深入盐湖腹地，轨道延伸进天空。铁轨倒影是"天空之镜"最出片的角度。' },
      { id: 'xining_canyu', name: '藏餐体验', icon: '🍲', tag: '玩', type: '体验', price: 100, desc: '藏式餐厅吃糌粑、酥油茶、牦牛酸奶。扎西德勒的开场白，歌舞伴餐，"高原一晚"。' },
      { id: 'xining_minsu', name: '高原民宿', icon: '🏨', tag: '住', type: '住宿', price: 260, desc: '回族风情院落民宿，夏季夜凉盖被。老板会提醒你"慢点走，高原别感冒"。' },
    ],
    stories: [
      { id: 'xining_story_su', name: '酥油花是"冰雕级"工艺', icon: '🌸', desc: '塔尔寺僧人把酥油捏成花鸟人物，为防融化在零下环境操作。正月十五酥油花展，万人空巷。' },
      { id: 'xining_story_xiadu', name: '"夏都"的凉快', icon: '🌡️', desc: '西宁夏天平均气温不到二十度，"中国夏都"。南方游客七月份来要穿外套，本地人睡觉盖棉被。' },
      { id: 'xining_story_qinghaihu', name: '青海湖的"鸟岛密码"', icon: '🕊️', desc: '每年四月十万候鸟聚集青海湖鸟岛。斑头雁能飞越珠峰，"高原上的候鸟国际机场"。' },
      { id: 'xining_story_chaka', name: '茶卡的"盐值经济"', icon: '🪞', desc: '茶卡盐湖靠"天空之镜"照片爆红全网。盐湖里实则有3000年开采史，"镜面"是浅水+盐壳的光学魔术。' },
      { id: 'xining_story_yang', name: '手抓羊肉的"高原密码"', icon: '🍖', desc: '藏系羊吃虫草与野葱长大，肉自带微甜。当地人吃手抓不放料酒："好羊清水煮就赢了。"' },
      { id: 'xining_story_gao', name: '高原反应的"温柔提醒"', icon: '⛰️', desc: '西宁海拔2200米，是进藏前的"适应站"。本地攻略：到了先喝碗热甜醅，别跑别跳。' },
    ],
  });
})();
