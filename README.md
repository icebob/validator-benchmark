# validator benchmark

## Packages in benchmark

| Package | Stars | Quality |
| ------- | ----- | ------- |
| [validator.js](https://github.com/guillaumepotier/validator.js) | 251 | 70
| [validate.js](https://github.com/ansman/validate.js) | 2,132 | 73
| [validatorjs](https://github.com/skaterdav85/validatorjs) | 1,119 | 71
| [joi](https://github.com/hapijs/joi) | 13,645 | 89
| [ajv](https://github.com/epoberezkin/ajv) | 6,468 | 87
| [mschema](https://github.com/mschema/mschema) (*) | 107 | 31
| [parambulator](https://github.com/rjrodger/parambulator) (*) | 41 | 68
| [fastest-validator](https://github.com/icebob/fastest-validator) | 691 | 68
| [yup](https://github.com/jquense/yup) | 7,314 | 71

 (*) not supported advanced types (email, url, ...etc)

## Benchmark #1 (simple object)

### Test object
```js
let object = {
    name: "john doe",
    email: "john.doe@company.space",
    firstName: "John",
    phone: "123-4567",
    age: 33
}
```

### Code
[/suites/simple.js](https://github.com/icebob/validator-benchmark/blob/master/suites/simple.js)

### Result

```
========================
  Validators benchmark
========================

Platform info:
==============
   Windows_NT 10.0.19045 x64
   Node.JS: 18.16.0
   V8: 10.2.154.26-node.26
   CPU: 13th Gen Intel(R) Core(TM) i5-13500 × 20
   Memory: 32 GB

Suite: Simple object
√ validator.js              1 034 473 rps
√ validate.js                 551 637 rps
√ validatorjs                 369 036 rps
√ joi                         321 142 rps
√ ajv                      13 513 907 rps
√ mschema                   1 322 497 rps
√ parambulator                 50 392 rps
√ fastest-validator        15 290 993 rps
√ yup                          89 046 rps

   validator.js            -93,23%      (1 034 473 rps)   (avg: 966ns)
   validate.js             -96,39%        (551 637 rps)   (avg: 1μs)
   validatorjs             -97,59%        (369 036 rps)   (avg: 2μs)
   joi                      -97,9%        (321 142 rps)   (avg: 3μs)
   ajv                     -11,62%     (13 513 907 rps)   (avg: 73ns)
   mschema                 -91,35%      (1 322 497 rps)   (avg: 756ns)
   parambulator            -99,67%         (50 392 rps)   (avg: 19μs)
   fastest-validator            0%     (15 290 993 rps)   (avg: 65ns)
   yup                     -99,42%         (89 046 rps)   (avg: 11μs)
-----------------------------------------------------------------------

```
