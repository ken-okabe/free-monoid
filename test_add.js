(() => {
  "use strict";

  const freeMonoid = require("./index");

  const operator = ab => {
    ab.eval = () => ab.units
      .map(unit => unit.val)
      .reduce((a, b) => (a + b));
  };

  const M = freeMonoid(operator);
  const x = M(1);
  const y = M(2);
  const z = M(100);

  console.log(x);
  console.log(
    (M)(x)(M) //(x)
  );

  const xyz = (x)(y)(z);
  console.log(xyz.eval());

})();
