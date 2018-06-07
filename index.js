(() => {
  "use strict";
  const freeMonoid = (operator) => {
    const M = (m) => (!!m && (!!m.M || m.identity))
      ? (m)
      : (() => {
        const a = b => (b.identity) //M
          ? (a)
          : !b.M
            ? (a)(M(b))
            : (() => {
              const ab = M();
              ab.units = a.units.concat(b.units);
              ab.val = ab.units.map(unit => unit.val[0]);
              return ab; // (a)(b)
            })();
        a.val = a.val ? [] : [m];
        a.units = [a];
        a.M = (m) => M(m);
        operator(a);
        return a;
      })();
    M.identity = true;
    M.val = (m) => (m);
    return M;
  };
  //------------------
  const exporting = (typeof module === "object"
  && typeof module.exports === "object")
    ? module.exports = freeMonoid
    : self.freeMonoid = freeMonoid;
//============================
})();
