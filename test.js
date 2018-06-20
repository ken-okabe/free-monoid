(() => {
  "use strict";

  const freeMonoid = require("./index");
  const _M = () => freeMonoid(operator);
  const operator = list => {

    list.eval = () => list.val.reduce((a, b) => (a + b));

  };
  const M = _M();


  const x = (M)(1);
  const y = (M)(2);
  const z = (M)(5);

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




  //---------------------------


  console.log(
    "============================================"
  );
  console.log(
    (M)
  );

  console.log(
    "============================================"
  );
  console.log(
    (M)()
  );
  console.log(
    "============================================"
  );
  console.log(
    (M)(1)
  );
  console.log(
    "============================================"
  );
  console.log(
    (M)(1)(M)
  );
  console.log(
    "============================================"
  );
  console.log(
    (M)(1)(2)
  );
  console.log(
    "============================================"
  );
  console.log(
    (M)(1)(2)(9)
  );

  const ab = (M)(1)(2);

  const cd = (M)(10)(20);

  const e = (M)(9);

  const ecd = (e)(cd);

  const abecd = (ab)(ecd);


  console.log(
    "============================================"
  );
  console.log(
    abecd
  );


  console.log(
    "============================================"
  );
  console.log(
    M([444, [555, 44]])
  );
  const toList = arr => arr.reduce((a, b) => (a)(b), (M));
  console.log(
    toList([2, 1])
  );







})();
