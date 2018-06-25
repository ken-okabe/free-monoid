(() => {
  "use strict";
  const freeMonoid = (operator) => (() => {
    const flattenDeep = (arr1) => arr1
      .reduce((acc, val) => Array.isArray(val)
        ? acc.concat(flattenDeep(val))
        : acc.concat(val), []);
    const M = (() => { //(M)(a)(b)
      const toList = arr => arr.reduce((a, b) => (a)(b), (M));
      const m = (a) => (Array.isArray(a))
        ? toList(flattenDeep(a))
        : (!!a && !!a.M)
          ? (a)
          : (() => {
            const ma = b => (b === m) // right id
              ? (ma)
              : !b.M
                ? (ma)(M(b))
                : (() => {
                  const mab = M();
                  mab.units = ma.units.concat(b.units);
                  mab.val = mab.units.map(unit => unit.val[0]);
                  return mab; // (m)(a)(b)
                })();
            ma.M = m;
            ma.val = [a];
            ma.units = [ma];
            operator(ma);
            return ma;
          })();
      m.M = m;
      m.val = [m]; //["__IDENTITY__"];
      m.units = [m];
      operator(m);
      return (m);
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
