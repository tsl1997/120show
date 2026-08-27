(function () {
  "use strict";
  window.LJ = window.LJ || {};

  const listeners = {};

  function on(evt, fn) {
    (listeners[evt] = listeners[evt] || []).push(fn);
    return () => off(evt, fn);
  }

  function off(evt, fn) {
    const l = listeners[evt];
    if (!l) return;
    const i = l.indexOf(fn);
    if (i >= 0) l.splice(i, 1);
  }

  function emit(evt, payload) {
    (listeners[evt] || []).slice().forEach((fn) => {
      try {
        fn(payload);
      } catch (e) {
        console.error("[eventBus]", evt, e);
      }
    });
  }

  window.LJ.events = { on, off, emit };
})();
