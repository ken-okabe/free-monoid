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

```js
const _M = () => freeMonoid(operator);
const operator = list => {
  const M = list.M;
  list.freeFrom = arr => arr.reduce((m, x) => (m)(x), (M));
  list.fold = (f) => (M)(list.val
    .reduce((M)(f).compose()));
  list.fmap = (f) => list.freeFrom(list.val
    .map((M)(f).compose()));
  list.compose = () => list.val
    .reduce((f, g) => (x => g(f(x))));
};
const M = _M();
```

```js
const plus = (M)((x) => (y => x + y));

mlog("------")(
  (M)(1)
    .fmap(M(5)
      .fmap(plus))
);

const plus1 = (M)(1)
  .fmap(plus);

mlog("------")(
  (M)(1)(2)(3)
    .fmap((plus1)(plus1))
);
```

```sh
------
6
------
3,4,5
```

## Other derivatives from `free-monoid`

### Timeline Monoid

<https://www.npmjs.com/package/timeline-monoid>
