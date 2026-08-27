(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const U = window.LJ.util;

  function boot() {
    window.LJ.ui.bindEvents();
    if (S.hasSave()) {
      S.get();
      window.LJ.engine.init();
      window.LJ.ui.render();
      window.LJ.ui.toast("已读取存档", "ok");
    } else {
      window.LJ.ui.newGameModal();
      window.LJ.ui.render();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
