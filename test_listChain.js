(() => {
  "use strict";

  const freeMonoid = require("./index");

  const _M = () => freeMonoid(operator);
  const operator = list => {
    list.eval = () => list.val.reduce(composition); //lazy eval
    list.chain = (f) => !f.M
      ? list.val.reduce(reduction(f), (list.M))
      : list.val.reduce(reduction(f.eval()), (list.M));
    list.reduce = (f) => (list.M)(f(list.val));
    const reduction = (f) => (m, x) => (m)(f(x));
    const composition = (f, g) => (x => g(f(x)));
  };
  const M = _M();


  const mlog = m => o => {
    console.log(m + "\n" + o.val);
    return o;
  };
  const x = (M)(1);
  const y = (M)(2);
  const z = (M)(10);

  const xyz = (x)(y)(z);

  mlog("xyz----------")(
    xyz
  );

  const add1 = (M)((a) => (a + 1));

  mlog("xyz--chain------")(
    xyz
      .chain((a) => (M)(a)(a))
      .chain((a) => (M)(a)(a))
      .chain((add1)(add1))
      .chain(add1)
  );

  mlog("------")(
    (M)(888).chain(add1)
  );
  mlog("------")(
    (add1)(add1).chain(f => f(3)) //4,4
  );

})();
