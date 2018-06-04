(() => {
  "use strict";

  const freeMonoid = require("./index");

  const compose = (f, g) => {
    try { //check type error
      return g(f);
    } catch (e) {
      return (x => g(f(x))); // f-f compose
    }
  };

  const operator = ab => {
    ab.eval = () => ab.units
      .map(unit => unit.val)
      .reduce(compose);
  };

  const M = freeMonoid(operator);

  const err = () => {
    throw new TypeError();
  };

  const FUNCTION = 'function';
  const NUMBER = "number";

  const type = input => f => x => (typeof x === input)
    ? f(x)
    : err();

  //need to define type of args
  const add1 = M(type(NUMBER)(
    a => a + 1
  ));

  console.log(
    M(1)(add1)(add1).eval()
  );

  console.log(
    M(1)((add1)(add1)).eval()
  );

})();
