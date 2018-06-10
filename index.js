(() => {
  "use strict";
  const freeMonoid = (operator) => (() => {
    Array.prototype.flatten = function() {
      return Array.prototype.concat.apply([], this);
    };
    const M = (() => { //(M)(a)(b)
      const m = (a) => (!!a && (!!a.M || a.identity)) //left id M
        ? (a)
        : (() => {
          const ma = b => (b.identity) //right id M
            ? (ma)
            : !b.M
              ? (ma)(M(b))
              : (() => {
                const mab = M();
                mab.units = ma.units.concat(b.units);
                mab.val = mab.units.map(unit => unit.val[0]);
                return mab; // (m)(a)(b)
              })();
          ma.val = [a].flatten();
          ma.M = m;
          ma.units = [ma];
          operator(ma);
          return ma;
        })();
      m.identity = true;
      m.val = [m]; //["__IDENTITY__"];
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
