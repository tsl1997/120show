/* 深圳 分册02：特色周边（广府客家美食/山海手信/打工人文创/科技体验）
 * 沿用旧档 12 个原周边条目（shenzhen_ 前缀）+ 新增 14 个（id: szng_ 前缀）。 */
window.SZN_GIFTS = window.SZN_GIFTS || [];
window.SZN_GIFTS.push(
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
  /* ---- 广府与客家美食 ---- */
  { id: 'szng_shaola', name: '广式烧腊', icon: '🍖', tag: '食', type: '美食', price: 45, desc: '烧腊铺橱窗吊着油亮烧鹅与叉烧，皮脆肉嫩蘸酸梅酱。深圳人下班"斩料加菜"，一份烧腊配饭就有家的味道。' },
  { id: 'szng_kejia_doufu', name: '客家酿豆腐', icon: '🍲', tag: '食', type: '美食', price: 42, desc: '豆腐挖空塞进肉馅，煎至两面金黄再入砂锅焖。客家围屋里代代相传的功夫菜，豆香裹着肉汁十分下饭。' },
  { id: 'szng_tangshui', name: '深夜糖水', icon: '🍮', tag: '食', type: '美食', price: 22, desc: '加班后的深夜钻进糖水铺，来一碗杨枝甘露或姜撞奶。甜味把白天的紧绷一点点化开，深圳人的夜宵也能温柔。' },
  { id: 'szng_liangcha', name: '广式凉茶', icon: '🍵', tag: '食', type: '饮品', price: 18, desc: '廿四味入口苦得皱眉，回甘却来得很干脆。深圳人上火就钻进凉茶铺，广东人的养生都在这杯黑汤里。' },
  /* ---- 山海手信与农渔特产 ---- */
  { id: 'szng_shajing_hao', name: '沙井蚝礼盒', icon: '🦪', tag: '食', type: '特产', price: 98, desc: '宝安沙井是千年蚝乡，生蚝肥美鲜甜。金蚝腊得油润、蚝豉晒得干香，煮粥炖汤全是海的味道。' },
  { id: 'szng_nanshan_lizhi', name: '南山荔枝', icon: '🍒', tag: '食', type: '特产', price: 68, desc: '糯米糍与桂味核小肉厚，入口清甜带一丝桂花香。六月南山红了枝头，是深圳人夏天最甜的惦记。' },
  /* ---- 打工人与城市文创 ---- */
  { id: 'szng_dagongren', name: '打工人文化衫', icon: '👕', tag: '衣', type: '服饰', price: 88, desc: '印着"来了就是深圳人"的T恤卫衣，胸口再来一句"好好打工"。穿去上班是自嘲，穿去别处是深圳人的暗号。' },
  { id: 'szng_liangmao', name: '客家凉帽', icon: '👒', tag: '衣', type: '服饰', price: 68, desc: '甘坑客家小镇的手编竹帽，檐下缝青布挡风遮阳。客家人戴了数百年的日常，如今成了文艺的深圳手信。' },
  { id: 'szng_pilu', name: '黑脸琵鹭玩偶', icon: '🐦', tag: '玩', type: '文创', price: 65, desc: '黑脸琵鹭每年冬天从北方飞来深圳湾越冬，自带"饭勺嘴"十分可爱。把毛茸茸的它带回家，红树林的记忆随行。' },
  { id: 'szng_guanlan_banhua', name: '观澜版画体验', icon: '🖼️', tag: '玩', type: '体验', price: 80, desc: '在观澜版画村跟老师刻版上墨，亲手拓一张深圳印象。油墨碾过木版，浮躁被压平，慢手艺最治愈。' },
  /* ---- 科技与山海体验、住宿 ---- */
  { id: 'szng_dajiang_ke', name: '大疆航拍体验课', icon: '🚁', tag: '游', type: '体验', price: 260, desc: '在无人机之都亲手飞一把，教练手把手带看取景。上帝视角掠过深圳湾与天际线，科技城的浪漫是自己掌控天空。' },
  { id: 'szng_wanqu_piao', name: '湾区之光摩天轮票', icon: '🎡', tag: '游', type: '体验', price: 100, desc: '乘"湾区之光"升至一百二十八米高空，前海湾尽收眼底。日落场最抢手，一圈看完湾区从黄昏入夜。' },
  { id: 'szng_shekou_market', name: '蛇口海鲜代加工', icon: '🦐', tag: '食', type: '体验', price: 150, desc: '在蛇口市场挑一网活蹦乱跳的海鲜，转角大排档现炒上桌。椒盐皮皮虾配冰啤酒，渔港烟火吃得浑身舒坦。' },
  { id: 'szng_haijing', name: '深圳湾高空海景酒店', icon: '🏙️', tag: '住', type: '住宿', price: 520, desc: '高层客房躺着就能望见深圳湾与香港群山，入夜灯光秀在窗前铺开。出差人的小犒赏，睡在云端看城市呼吸。' }
);
