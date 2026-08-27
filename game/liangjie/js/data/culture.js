(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  const culture = {
    gugong: { text: "紫禁城巍峨壮丽，六百年风云尽收眼底。", note: "故宫" },
    tiantan: { text: "九天阊阖开宫殿，万国衣冠拜冕旒。", author: "王维", note: "天坛祈年殿" },
    changcheng: { text: "不到长城非好汉，屈指行程二万。", author: "毛泽东", note: "长城八达岭" },
    yiheyuan: { text: "春湖落日水拖蓝，天影楼台上下涵。", note: "颐和园" },
    xihu: { text: "欲把西湖比西子，淡妆浓抹总相宜。", author: "苏轼", note: "西湖" },
    huanghelou: { text: "昔人已乘黄鹤去，此地空余黄鹤楼。黄鹤一去不复返，白云千载空悠悠。", author: "崔颢", note: "黄鹤楼" },
    ice: { text: "忽如一夜春风来，千树万树梨花开。", author: "岑参", note: "冰灯游园会" },
    peak: { text: "狮子山下，同舟共济，人生不免崎岖。", note: "太平山顶俯瞰维港" },
    ueno: { text: "樱花如云霞，钟声来自何方？上野抑或浅草。", author: "松尾芭蕉(俳句)", note: "上野公园" },
    osaka: { text: "随露珠凋零，随露珠涌现，此即吾身。大阪往事，宛如梦中之梦。", author: "丰臣秀吉(辞世句)", note: "大阪城" },
    ginza: { text: "东京的霓虹灯不眠，这是一个由技术、纪律与庞大资本构筑的黄金帝国。", note: "银座" },
    moscow: { text: "假如生活欺骗了你，不要悲伤，不要心急。", author: "普希金", note: "莫斯科" },
    wallstreet: { text: "做一个世界的水手，奔赴所有的港口。", author: "惠特曼", note: "纽约" },
    tokyo_tower: { text: "雨夜的都市高速公路，霓虹在车窗流淌，昭和的狂欢曲刚刚奏响。", note: "东京塔" }
  };

  R.register("culture", culture);
})();
