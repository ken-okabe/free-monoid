# Free Monoid

#### npm package: <https://www.npmjs.com/package/free-monoid>

### Free moniod in JavaScript

```js
const M = freeMonoid(operator);
```

### Identity: (M)

#### (M)(a) = (a) = (a)(M)

### Associative

#### ((a)(b))(c) = (a)(b)(c) = (a)((b)(c))

## Installation

```sh
$ npm install free-monoid
```

## Usage

```js
const freeMonoid = require("free-monoid");
```

## Additive monoid derived from `free-monoid`

```js
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
```

```sh
8
```

## List monad derived from `free-monoid`

<https://www.npmjs.com/package/list-monad>

#### monad laws validation

```js
const util = require("util");
const validate = a => b => util.inspect(a) === util.inspect(b)
  ? true : false;

const f = x => (M)(x + 7);
const g = x => (M)(x * 5);
const a = 9;
const m = (M)(3)(5)(7);

console.log(
  validate(
    (M)(a).bind(f)
  )(
    f(a)
  )
);
console.log(
  validate(
    m.bind(M)
  )(
    m
  )
);
console.log(
  validate(
    m.bind(f)
      .bind(g)
  )(
    m.bind(x => f(x)
      .bind(g))
  )
);
```

```sh
true
true
true
```

## Other derivatives from `free-monoid`

### Timeline Monoid

<https://www.npmjs.com/package/timeline-monoid>
