(() => {
  "use strict";

  const freeMonoid = require("./index");
  const _M = () => freeMonoid(operator);
  const operator = list => {

    //const M = list.M;

    //list.toArr = list.units.map(unit =>);

  };
  const M = _M();
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


})();
