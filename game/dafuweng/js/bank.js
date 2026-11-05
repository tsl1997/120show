/* 大富翁 · 银行系统
 * 存款（日息 0.1%，每月 1 日结算上月利息，舍去小数）
 * 贷款（额度=总资产60%；3/6/12期；每月5日或25日扣款；扣钱包或银行存款，选定不可改）
 */

/* 月度利息结算（每月 1 日调用）：按存款 x 天数 x 0.1% 计算，舍去小数 */
function settleInterestMonthly() {
  G.players.forEach(function (p) {
    if (!p.alive || p.bank <= 0) return;
    var days = MONTH_DAYS;
    var interest = ifloor(p.bank * BANK_DAILY_RATE * days);
    if (interest > 0) {
      p.bank += interest;
      log('【银行】' + p.avatar.name + ' 收到上月存款利息 ' + interest + ' 元（存款 ' + p.bank + ' 元）', 'bank');
    }
  });
}

/* 贷款额度 */
function loanLimit(p) {
  return ifloor(totalAssets(p) * LOAN_MAX_RATIO);
}

/* 贷款剩余应还（本金+未计利息；已还部分扣除） */
function loanRemaining(p) {
  if (!p.loan) return 0;
  var L = p.loan;
  var totalPlan = Math.ceil(L.amount * (1 + LOAN_PLANS[L.terms] * L.terms)) - L.paid;
  return Math.max(0, totalPlan);
}

/* 申请贷款
 * p：玩家；amount：金额；terms：3/6/12；payDay：5 或 25；source：'cash' 或 'bank' */
function applyLoan(p, amount, terms, payDay, source) {
  if (p.loan) return { ok: false, msg: '已有一笔贷款未结清' };
  if (LOAN_PLANS[terms] == null) return { ok: false, msg: '期数只能是 3 / 6 / 12' };
  if (payDay !== 5 && payDay !== 25) return { ok: false, msg: '扣款日只能是 5 日或 25 日' };
  if (source !== 'cash' && source !== 'bank') return { ok: false, msg: '扣款来源只能是钱包或银行存款' };
  amount = Math.floor(amount);
  if (amount <= 0) return { ok: false, msg: '贷款金额必须大于 0' };
  var limit = loanLimit(p);
  if (amount > limit) return { ok: false, msg: '超出贷款额度（当前可贷 ' + limit + ' 元）' };

  var perTermInterest = LOAN_PLANS[terms];       /* 每期利息率 */
  p.loan = {
    amount: amount,
    terms: terms,
    payDay: payDay,
    source: source,
    perInstallment: Math.ceil(amount / terms) + Math.ceil(amount * perTermInterest),
    paid: 0,
    paidTerms: 0
  };
  p[source === 'cash' ? 'cash' : 'bank'] += amount;
  log('【银行】' + p.avatar.name + ' 贷款 ' + amount + ' 元，' + terms + ' 期，每月 ' + payDay +
    ' 日从' + (source === 'cash' ? '钱包' : '银行存款') + '扣款，每期 ' + p.loan.perInstallment + ' 元', 'bank');
  return { ok: true };
}

/* 每日银行例行（5 日/25 日扣贷款款） */
function bankDailyTick() {
  if (G.day !== 5 && G.day !== 25) return;
  G.players.forEach(function (p) {
    if (!p.alive || !p.loan) return;
    var L = p.loan;
    if (G.day !== L.payDay) return;
    /* 本期应扣 */
    var due = L.perInstallment;
    /* 最后一期抹零 */
    var remaining = loanRemaining(p);
    if (remaining > 0 && due > remaining) due = remaining;
    /* 扣款来源 */
    var paid = 0;
    if (L.source === 'bank' && p.bank >= due) { p.bank -= due; paid = due; }
    else if (L.source === 'cash' && p.cash >= due) { p.cash -= due; paid = due; }
    else {
      /* 指定来源不足：尝试另一边补足（扣款方式不可改，但钱不够时挪用另一账户） */
      if (L.source === 'bank') {
        var useBank = p.bank; p.bank = 0;
        var need = due - useBank;
        if (p.cash >= need) { p.cash -= need; paid = due; }
        else { paid = useBank + p.cash; p.cash = 0; }
      } else {
        var useCash = p.cash; p.cash = 0;
        var need2 = due - useCash;
        if (p.bank >= need2) { p.bank -= need2; paid = due; }
        else { paid = useCash + p.bank; p.bank = 0; }
      }
    }
    L.paid += paid;
    if (paid < due) {
      /* 罚息：缺口滚入下期 */
      var penalty = Math.ceil((due - paid) * LOAN_OVERDUE_PENALTY);
      L.amount += (due - paid) + penalty;
      log('【银行】' + p.avatar.name + ' 贷款扣款不足！缺口 ' + (due - paid) + ' 元已滚入本金并加收 ' + penalty + ' 元罚息', 'warn');
    } else {
      L.paidTerms++;
      log('【银行】' + p.avatar.name + ' 按期偿还 ' + paid + ' 元（' + L.paidTerms + '/' + L.terms + ' 期）', 'bank');
    }
    if (loanRemaining(p) <= 0) {
      p.loan = null;
      log('【银行】' + p.avatar.name + ' 贷款全部结清！信用良好 🎉', 'bank');
    }
  });
}

/* 银行柜台操作（路过银行可存取） */
function bankDeposit(p, amount) {
  amount = Math.floor(amount);
  if (amount <= 0 || p.cash < amount) return { ok: false, msg: '金额无效' };
  p.cash -= amount; p.bank += amount;
  log('【银行】' + p.avatar.name + ' 存入 ' + amount + ' 元', 'bank');
  return { ok: true };
}
function bankWithdraw(p, amount) {
  amount = Math.floor(amount);
  if (amount <= 0 || p.bank < amount) return { ok: false, msg: '金额无效' };
  p.bank -= amount; p.cash += amount;
  log('【银行】' + p.avatar.name + ' 取出 ' + amount + ' 元', 'bank');
  return { ok: true };
}
