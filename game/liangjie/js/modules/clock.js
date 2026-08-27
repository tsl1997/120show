(function () {
  "use strict";
  window.LJ = window.LJ || {};
  const S = window.LJ.state;
  const U = window.LJ.util;

  function c(w) { return S.clock(w); }

  function advance(w, minutes) {
    const cl = c(w);
    const events = [];
    let total = Math.max(0, minutes);
    let prevMonth = cl.month, prevYear = cl.year, prevDay = cl.day;
    while (total > 0) {
      const step = Math.min(total, 30);
      cl.minute += step;
      total -= step;
      if (cl.minute >= 60) {
        cl.hour += Math.floor(cl.minute / 60);
        cl.minute = cl.minute % 60;
        if (cl.hour >= 24) {
          const days = Math.floor(cl.hour / 24);
          cl.hour = cl.hour % 24;
          cl.day += days;
          while (cl.day > 30) {
            cl.day -= 30;
            cl.month += 1;
            if (cl.month > 12) {
              cl.month = 1;
              cl.year += 1;
            }
          }
        }
      }
    }
    if (w === "old") {
      if (cl.month !== prevMonth || cl.year !== prevYear) {
        events.push({ type: "month", year: cl.year, month: cl.month });
        LJ.engine && LJ.engine.applyTimeline(cl.year, cl.month);
      } else if (cl.day !== prevDay) {
        events.push({ type: "day", year: cl.year, month: cl.month, day: cl.day });
      }
    }
    return events;
  }

  function dateStr(w) {
    const cl = c(w);
    return cl.year + "年" + cl.month + "月" + cl.day + "日 " + U.pad(cl.hour) + ":" + U.pad(cl.minute);
  }

  function dateShort(w) {
    const cl = c(w);
    return cl.year + "." + U.pad(cl.month) + "." + U.pad(cl.day);
  }

  function monthKey(w) {
    const cl = c(w);
    return cl.year + "-" + U.pad(cl.month);
  }

  function elapsedDays(from, to) {
    return Math.floor((to.year * 360 + to.month * 30 + to.day) - (from.year * 360 + from.month * 30 + from.day));
  }

  window.LJ.clock = { advance, dateStr, dateShort, monthKey, elapsedDays };
})();
