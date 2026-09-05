// 陶氏族谱 · 静态页逻辑
// 读取 data.json(本地服务器)或 data.js(file:// 双击打开),渲染世系树与详情。

(function () {
  const treeEl = document.getElementById('tree');
  const detailEl = document.getElementById('detail');
  const detailContent = document.getElementById('detailContent');
  const backdropEl = document.getElementById('backdrop');

  let persons = [];
  let byId = new Map();
  let selectedId = null;

  // ---------- 数据加载 ----------
  async function loadData() {
    try {
      const res = await fetch('data.json', { cache: 'no-store' });
      if (res.ok) {
        const d = await res.json();
        if (d && Array.isArray(d.persons) && d.persons.length) {
          if (document.getElementById('subtitle')) {
            document.getElementById('subtitle').textContent = '数据来源:data.json';
          }
          return d.persons;
        }
      }
    } catch (e) {
      /* file:// 下 fetch 被禁止,走 data.js 兜底 */
    }
    if (window.TAO_DATA && Array.isArray(window.TAO_DATA.persons)) {
      if (document.getElementById('subtitle')) {
        document.getElementById('subtitle').textContent = '数据来源:data.js';
      }
      return window.TAO_DATA.persons;
    }
    return [];
  }

  // ---------- 关系计算 ----------
  function index() {
    byId = new Map(persons.map((p) => [p.id, p]));
  }

  function childrenOf(id) {
    return persons.filter((p) => p.father_id === id).sort((a, b) => a.id - b.id);
  }

  function siblingsOf(p) {
    if (p.father_id == null) return [];
    return persons.filter((s) => s.father_id === p.father_id && s.id !== p.id).sort((a, b) => a.id - b.id);
  }

  function motherOf(p) {
    if (p.father_id == null) return null;
    const f = byId.get(p.father_id);
    return f && f.spouse ? f.spouse : null;
  }

  function fatherOf(p) {
    return p.father_id != null ? byId.get(p.father_id) : null;
  }

  // ---------- 渲染树 ----------
  function nodeHtml(p) {
    const cls = ['node', 'person'];
    if (p.gender === '女') cls.push('female');
    const kids = childrenOf(p.id);
    const hasKids = p.gender === '男' && kids.length > 0;
    const isEnded = p.gender === '男' && kids.length === 0;
    const toggle =
      hasKids
        ? '<button class="toggle open" data-toggle="' + p.id + '" title="展开 / 收起" aria-label="展开或收起">' +
          '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path class="v" d="M4 12h16"/><path class="h" d="M12 4v16"/></svg></button>'
        : '';
    return (
      '<div class="' + cls.join(' ') + '" data-id="' + p.id + '">' +
      toggle +
      '<b>' + p.name + '</b>' +
      '<span class="gen-tag">第' + p.generation + '世' + (isEnded ? ' · 无后' : '') + '</span>' +
      '</div>'
    );
  }

  function branchHtml(p) {
    const spouse = p.spouse ? '<div class="node spouse">' + p.spouse + '</div>' : '';
    const kids = childrenOf(p.id);
    let inner = '<div class="family">' + nodeHtml(p) + spouse + '</div>';
    if (kids.length) {
      inner +=
        '<div class="subtree"><ul>' +
        kids.map((k) => '<li class="group">' + branchHtml(k) + '</li>').join('') +
        '</ul></div>';
    }
    return inner;
  }

  function renderTree() {
    const roots = persons.filter((p) => p.father_id == null).sort((a, b) => a.id - b.id);
    if (!roots.length) {
      treeEl.innerHTML = '<div class="msg">未找到数据,请检查 data.json / data.js。</div>';
      return;
    }
    const html = '<ul class="roots">' + roots.map((r) => '<li class="group">' + branchHtml(r) + '</li>').join('') + '</ul>';
    treeEl.innerHTML = html;

    // 点击人物 → 打开详情
    treeEl.querySelectorAll('.node.person').forEach((el) => {
      el.addEventListener('click', () => openDetail(Number(el.dataset.id)));
    });

    // 点击折叠按钮 → 平滑展开/收起分支
    treeEl.querySelectorAll('.toggle').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const li = btn.closest('li.group');
        if (!li) return;
        toggleBranch(li, btn);
      });
    });
  }

  function toggleBranch(li, btn) {
    const sub = li.querySelector(':scope > .subtree');
    if (!sub) return;
    const collapsing = !li.classList.contains('collapsed');
    li.classList.toggle('collapsed', collapsing);
    btn.classList.toggle('open', !collapsing);

    sub.style.transition = 'max-height 0.42s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease';

    if (collapsing) {
      sub.style.maxHeight = sub.offsetHeight + 'px';
      requestAnimationFrame(() => {
        sub.style.maxHeight = '0px';
        sub.style.opacity = '0';
      });
    } else {
      sub.style.maxHeight = sub.scrollHeight + 'px';
      sub.style.opacity = '1';
      // 动画结束后清除行内 max-height,恢复自适应
      setTimeout(() => {
        if (!li.classList.contains('collapsed')) sub.style.maxHeight = '';
      }, 480);
    }
  }

  function setSelected(id) {
    selectedId = id;
    treeEl.querySelectorAll('.node.person').forEach((el) => {
      el.classList.toggle('selected', Number(el.dataset.id) === id);
    });
  }

  // ---------- 详情面板 ----------
  function showDrawer(open) {
    detailEl.classList.toggle('show', open);
    backdropEl.classList.toggle('show', open);
  }

  function openDetail(id) {
    const p = byId.get(id);
    if (!p) return;
    setSelected(id);

    const father = fatherOf(p);
    const mother = motherOf(p);
    const kids = childrenOf(id);
    const sibs = siblingsOf(p);

    const tagSex = p.gender === '女' ? '女' : '男';
    let html =
      '<div class="detail-head">' +
      '<h2>' + p.name + '</h2>' +
      '<div class="detail-tags">' +
      '<span class="tag gen">第 ' + p.generation + ' 世</span>' +
      '<span class="tag">' + tagSex + '</span>' +
      (p.gender === '男' && kids.length === 0 ? '<span class="tag ended">无后</span>' : '') +
      '</div></div>';

    if (p.zi || p.hao) {
      html += '<div class="block"><h3>字 / 号</h3>' +
        '<p class="line">' + [p.zi, p.hao].filter(Boolean).join(' · ') + '</p></div>';
    }

    if (p.notes) {
      html += '<div class="block"><h3>备注 / 断代说明</h3>' +
        '<p class="cite-note">' + p.notes + '</p></div>';
    }

    if (father || mother) {
      html += '<div class="block"><h3>父母</h3><ul class="rel-list">';
      if (father) {
        html += '<li class="rel-item" data-nav="' + father.id + '">' + father.name +
          '<span class="rel-sex">父</span></li>';
      }
      if (mother) {
        html += '<li class="rel-item">' + mother + '<span class="rel-sex">母</span></li>';
      }
      html += '</ul></div>';
    }

    if (p.spouse) {
      html += '<div class="block"><h3>配偶</h3><ul class="rel-list">' +
        '<li class="rel-item">' + p.spouse + '<span class="rel-sex">妻</span></li>' +
        '</ul></div>';
    }

    if (kids.length) {
      html += '<div class="block"><h3>子女 (' + kids.length + ')</h3><ul class="rel-list">';
      kids.forEach((k) => {
        html += '<li class="rel-item" data-nav="' + k.id + '">' + k.name +
          '<span class="rel-sex">' + (k.gender === '女' ? '女' : '男') + '</span></li>';
      });
      html += '</ul></div>';
    } else if (p.gender === '男') {
      html += '<div class="block"><h3>子女</h3><p class="line">无(该支已断)</p></div>';
    }

    if (sibs.length) {
      html += '<div class="block"><h3>兄弟姐妹 (' + sibs.length + ')</h3><ul class="rel-list">';
      sibs.forEach((s) => {
        html += '<li class="rel-item" data-nav="' + s.id + '">' + s.name +
          '<span class="rel-sex">' + (s.gender === '女' ? '女' : '男') + '</span></li>';
      });
      html += '</ul></div>';
    }

    // 内容切换时重新触发淡入
    detailContent.classList.remove('content-anim');
    void detailContent.offsetWidth;
    detailContent.innerHTML = html;
    detailContent.classList.add('content-anim');

    showDrawer(true);

    detailContent.querySelectorAll('.rel-item[data-nav]').forEach((el) => {
      el.addEventListener('click', () => openDetail(Number(el.dataset.nav)));
    });
  }

  function closeDrawer() {
    showDrawer(false);
  }

  document.getElementById('closeDetail').addEventListener('click', closeDrawer);
  backdropEl.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // ---------- 启动 ----------
  loadData().then((data) => {
    persons = data;
    index();
    renderTree();
  });
})();
