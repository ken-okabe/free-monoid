(() => {
  "use strict";
  const freeMonoid = (operator) => {
    const M = (m = []) => (m.monoid || m.identity)
      ? m
      : (() => {
        const a = b => (b.identity) //M
          ? (a)
          : !(b.monoid)
            ? (a)(M(b))
            : (() => {
              const ab = M();
              ab.units = a.units.concat(b.units);
              return ab; // (a)(b)
            })();
        a.monoid = true;
        a.val = m;
        a.units = [a];
        a.M = (m) => M(m);
        operator(a);
        return a;
      })();
    M.identity = true;
    return M;
  }
  //------------------
  const exporting = (typeof module === 'object'
  && typeof module.exports === 'object')
    ? module.exports = freeMonoid
    : self.freeMonoid = freeMonoid;
//============================
})();
