# Free Monoid

#### npm package: [https://www.npmjs.com/package/free-monoid](https://www.npmjs.com/package/free-monoid)

### Free moniod in JavaScript  

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
const operator = ab => {
  ab.eval = () => ab.units
    .map(unit => unit.val)
    .reduce((a, b) => (a + b));
}; //lazy evaluation

const M = freeMonoid(operator);
const x = M(1);
const y = M(2);
const z = M(100);

console.log(x);
console.log(
  (M)(x)(M) // === (x)
); // (M) as identity element = 0

const xyz = (x)(y)(z); // x + y + z
console.log(xyz.eval()); //lazy eval
```

```sh
103
```

## Other derivatives from `free-monoid`

#### Timeline Monoid
[https://www.npmjs.com/package/timeline-monoid](https://www.npmjs.com/package/timeline-monoid)
