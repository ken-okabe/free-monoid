(() => {
  "use strict";

  const freeMonoid = require("./index");
  const _M = () => freeMonoid(operator);
  const operator = list => {
    list.eval = () => list.val.reduce((a, b) => (a + b));
  };
  const M = _M();

  const x = M(1);
  const y = M(2);
  const z = M(5);

  console.log(x);
  console.log(
    (M)(x) // === (x) left identity
  );
  console.log(
    (x)(M) // === (x) right identity
  );

  const xyz = (x)(y)(z);
  console.log(xyz);
  console.log(xyz.eval()); //lazy eval

})();
