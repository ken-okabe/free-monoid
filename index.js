(() => {
  "use strict";
  const freeMonoid = (operator) => (() => {
    const M = (() => { //(M)(a)(b)
      const m = (a) => (!!a && (!!a.M || a.identity))
        ? (a)
        : (() => {
          const ma = b => (b.identity) //M
            ? (ma)
            : !b.M
              ? (ma)(M(b))
              : (() => {
                const mab = M();
                const [m, ...bUnits] = b.units;
                mab.units = ma.units.concat(bUnits);
                mab.val = mab.units.map(unit => unit.val[0]);
                return mab; // (m)(a)(b)
              })();
          ma.val = [a];
          ma.M = m;
          ma.units = m.units.concat(ma);
          operator(a);
          return ma;
        })();
      m.identity = true;
      m.val = ["__IDENTITY__"];
      m.units = [m];
      return m;
    })();
    return M;
  })();
  //=================
  const exporting = (typeof module === "object"
  && typeof module.exports === "object")
    ? module.exports = freeMonoid
    : self.freeMonoid = freeMonoid;
    //============================

})();
