(() => {
  "use strict";

  const freeMonoid = require("./index");

  const _M = () => freeMonoid(operator);
  const operator = list => {
    const composition = (f, g) => (x => g(f(x)));
    list.eval = () => list.val.reduce(composition); //lazy eval

    list.chain = (f) => !f.M
      ? list.val.reduce(reduction(f), (list.M))
      : list.val.reduce(reduction(f.eval()), (list.M));
    const reduction = (f) => (m, x) => (m)(f(x));

    list.reduce = (f) => (list.M)(f(list.val));

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

  const double = (a) => (M)(a)(a);
  const add1 = (M)((a) => (a + 1));

  mlog("xyz--chain------")(
    xyz
      .chain(double)
      .chain(double)
      .chain((add1)(add1))
      .chain(add1)
  );

  mlog("------")(
    (M)(888).chain(add1)
  );
  mlog("------")(
    (add1)(add1).chain(f => f(3)) //4,4
  );

  mlog("------")(
    (M)(9).chain(x => x)
  );
  console.log("------");

  const plus = (x) => (y => x + y);
  console.log(
    plus(1)(5)
  );
  mlog("------")(
    (M)(1).chain(plus(5))
  );
  mlog("------")(
    (M)(plus).chain(plus)
  );

  const plus1 = (M)(1).chain(plus);
  mlog("------")(
    M(5)(plus1)
      .chain(plus1)
  );
  mlog("------")(
    (plus1)
      .chain(plus1)
  );
  mlog("------")(
    (plus1)(plus1)
  );

  mlog("------")(
    (plus1)(5)
  );
  mlog("------")(
    M(5).chain(plus1)
  );





})();
