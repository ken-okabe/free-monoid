(() => {
  "use strict";

  const freeMonoid = require("./index");
  const _M = () => freeMonoid(operator);
  const operator = list => {
    const reducer = f => ((m0, m1) => m0(f(m1.val)));
    list.chain = (f) => (list.units.reduce(reducer(f), (list.M)));
  };
  const M = _M();

  const x = M(1);
  const y = M(2);
  const z = M(5);

  const xyz = M(x)(y)(z);

  console.log("xyz---------------");
  console.log(xyz);

  console.log("xyz10---------------");
  console.log(

    xyz.chain(x => x * 10)

  );

})();
