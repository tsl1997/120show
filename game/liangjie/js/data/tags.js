(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const R = window.LJ.reg;

  const tags = {
    sex: ["男", "女", "中性"],
    lifeStage: ["儿童", "少年", "青年", "中年", "老年", "少女", "少妇", "熟女", "熟男"],
    role: ["学生", "工作人士", "主妇", "退休", "无业", "待业"],
    education: ["文盲", "小学", "初中", "高中", "中专", "大专", "本科", "研究生", "博士", "海归"],
    faith: ["无神论", "儒家", "佛教", "道教", "基督教", "伊斯兰教", "民间信仰", "其他"],
    family: ["未婚", "已婚", "有子女", "无子女", "独居", "大家庭", "丧偶"],
    wealth: ["赤贫", "温饱", "小康", "中产", "富裕", "富豪", "巨富", "权贵"],
    temperament: ["豪爽", "谨慎", "贪婪", "正直", "圆滑", "多疑", "浪漫", "现实", "保守", "激进", "温柔", "泼辣", "孤僻", "健谈", "虚荣", "节俭"],
    hobby: ["烟", "酒", "茶", "书画", "音乐", "棋牌", "古董", "服饰", "美食", "运动", "汽车", "摄影", "花草", "宠物", "旅行", "读书", "钓鱼", "收藏", "戏曲", "武侠"],
    preference: ["烟酒", "名茶", "文房", "珠宝", "服饰", "电子", "机械", "农资", "药材", "食材", "洋货", "奢侈品"]
  };

  const profession = [
    { id: "buyer", name: "采购员", world: "old", dept: "国营厂/商业局", req: {} },
    { id: "boss", name: "私企老板", world: "both", dept: "工商局", req: {} },
    { id: "overseas", name: "海外华人", world: "both", dept: "侨务/出入境", req: {} },
    { id: "translator", name: "翻译", world: "both", dept: "外事/使馆", req: { skill: "英语", cert: "雅思" } },
    { id: "politician", name: "政治家", world: "old", dept: "政府", req: {} },
    { id: "appraiser", name: "文物鉴定师", world: "old", dept: "荣宝斋/文管局", req: { skill: "文物鉴定" } },
    { id: "dealer", name: "个体户", world: "old", dept: "工商局", req: {} },
    { id: "farmer", name: "农场主", world: "both", dept: "农业局", req: {} },
    { id: "exporter", name: "外贸商", world: "both", dept: "外贸部/海关", req: {} },
    { id: "banker", name: "金融家", world: "modern", dept: "证监会/银保监", req: {} },
    { id: "doctor", name: "医生", world: "both", dept: "卫健委", req: {} },
    { id: "teacher", name: "教师", world: "both", dept: "教委", req: {} },
    { id: "engineer", name: "工程师", world: "both", dept: "工业局", req: {} },
    { id: "lawyer", name: "律师", world: "modern", dept: "司法局", req: {} },
    { id: "official", name: "公务员", world: "modern", dept: "组织部", req: {} }
  ];

  const skill = [
    { id: "english", name: "英语", certs: ["雅思", "托福"] },
    { id: "japanese", name: "日语", certs: ["JLPT"] },
    { id: "russian", name: "俄语", certs: ["俄语等级"] },
    { id: "appraisal", name: "文物鉴定", certs: ["文物鉴定师证"] },
    { id: "computer", name: "计算机", certs: ["软考"] },
    { id: "finance", name: "金融", certs: ["证券从业", "CFA"] },
    { id: "driving", name: "驾驶", certs: ["驾照"] },
    { id: "business", name: "工商管理", certs: ["MBA"] },
    { id: "agri", name: "农业", certs: ["农艺师"] },
    { id: "medical", name: "医学", certs: ["执业医师"] }
  ];

  const tierDef = [
    { tier: 1, name: "寻常", wealth: ["赤贫", "温饱"], desc: "日用廉价品" },
    { tier: 2, name: "耐用", wealth: ["温饱", "小康"], desc: "普通耐用消费品" },
    { tier: 3, name: "体面", wealth: ["小康", "中产"], desc: "中端大宗商品" },
    { tier: 4, name: "高级", wealth: ["富裕", "富豪"], desc: "高档精品" },
    { tier: 5, name: "顶级", wealth: ["富豪", "巨富", "权贵"], desc: "顶级奢侈品与稀缺品" }
  ];

  R.register("tags", tags);
  R.register("profession", { items: profession, map: profession.reduce((m, p) => (m[p.id] = p, m), {}) });
  R.register("skills", { items: skill, map: skill.reduce((m, s) => (m[s.id] = s, m), {}) });
  R.register("tiers", { items: tierDef, map: tierDef.reduce((m, t) => (m[t.tier] = t, m), {}) });
})();
