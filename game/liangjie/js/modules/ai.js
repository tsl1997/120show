/* 两界搬运工 · AI NPC 接入
 * 兼容 OpenAI Chat Completions 接口。可在设置中修改地址/密钥/模型。
 */
(function () {
  'use strict';
  const LJ = (window.LJ = window.LJ || {});

  const WORLD_BACKGROUND =
    '这是游戏《两界搬运工》：2026年的现代中国与1980年的旧时中国之间有一扇能穿行的门。' +
    '玩家是一名穿越两界的倒爷，随身只有一只背包，在两界倒卖物资、鉴定古玩、经营生计，' +
    '还要吃饭喝水休息，是个活生生的人。1980年是改革开放初期的北京/广州/武汉/哈尔滨/乌鲁木齐/杭州' +
    '以及香港、东京；2026年是高楼林立的北京、上海与海外城市。';

  function cfg() {
    const s = LJ.Sys.state;
    return s.ai || (s.ai = { baseUrl: LJ.AI_DEFAULTS.baseUrl, apiKey: LJ.AI_DEFAULTS.apiKey, model: LJ.AI_DEFAULTS.model });
  }
  function save() { LJ.Sys.save(); }
  function enabled() {
    const c = LJ.Sys.state.ai;
    return !!(c && c.apiKey && c.baseUrl);
  }

  function cityContext() {
    const s = LJ.Sys.state;
    const city = LJ.Engine.currentCityDef();
    return `${city.name}，${s.world === 'old' ? '1980年' : '2026年'}。${city.intro || ''}`;
  }

  function buildPersona(npc) {
    const s = LJ.Sys.state;
    const p = s.player;
    const era = npc.era === 'modern' ? '2026年' : '1980年';
    const job = p.job ? `职业：${p.job.name}` : '无业游民（倒爷）';
    return `${WORLD_BACKGROUND}\n\n` +
      `【当前场景】${cityContext()}。\n` +
      `【你扮演的角色】姓名：${npc.name}；身份：${npc.role}；所在年代：${era}。\n` +
      `【人物设定】${npc.persona || '一个普通的当地人。'}\n` +
      `【玩家的公开信息】名字：${p.name}；声望：${Math.round(p.reputation || 0)}；${job}；随身背着一只背包。\n` +
      `【要求】严格扮演上述角色，用第一人称、贴合年代的语气说话，回应要自然、有性格、有细节，` +
      `不要提及你是AI。每次回复在50-120字左右，可用简短对话。外国角色可带其语言特色但要附中文意思。`;
  }

  async function chat(npc, userText, history) {
    const c = cfg();
    if (!c.baseUrl || !c.apiKey) throw new Error('AI 未配置');
    const messages = [{ role: 'system', content: buildPersona(npc) }];
    (history || []).slice(-8).forEach((h) => messages.push({ role: h.role, content: h.content }));
    messages.push({ role: 'user', content: userText });
    // 兼容：baseUrl 可能带 /v1，也可能不带
    const base = c.baseUrl.replace(/\/+$/, '');
    const endpoint = base.endsWith('/v1') ? base + '/chat/completions' : base + '/v1/chat/completions';
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + c.apiKey },
      body: JSON.stringify({ model: c.model, messages, temperature: 0.85, max_tokens: 300 })
    });
    if (!res.ok) {
      let detail = '';
      try { detail = (await res.json()).error ? JSON.stringify((await res.json()).error) : res.statusText; } catch (e) { detail = res.statusText; }
      throw new Error('请求失败 ' + res.status + ' ' + detail);
    }
    const data = await res.json();
    const text = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    if (!text) throw new Error('AI 无返回内容');
    return text.trim();
  }

  // 状态提示（顶栏 AI 灯）
  function renderStatus() {
    const chip = document.getElementById('aiChip');
    if (!chip) return;
    if (enabled()) {
      chip.textContent = 'AI 已接入 · ' + (LJ.Sys.state.ai.model || '');
      chip.classList.add('on');
    } else {
      chip.textContent = 'AI 未配置';
      chip.classList.remove('on');
    }
  }

  LJ.AI = { cfg, save, enabled, chat, buildPersona, renderStatus, WORLD_BACKGROUND };
})();
