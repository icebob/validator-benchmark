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
√ validator.js              1 052 002 rps
√ validate.js                 548 263 rps
√ validatorjs                 370 125 rps
√ joi                         318 588 rps
√ ajv                      14 153 672 rps
√ mschema                   1 304 864 rps
√ parambulator                 50 230 rps
√ fastest-validator        15 105 474 rps
√ yup                          81 920 rps
√ nope                      3 499 180 rps
√ jsvalidator               1 804 324 rps

   validator.js            -93,04%      (1 052 002 rps)   (avg: 950ns)
   validate.js             -96,37%        (548 263 rps)   (avg: 1μs)
   validatorjs             -97,55%        (370 125 rps)   (avg: 2μs)
   joi                     -97,89%        (318 588 rps)   (avg: 3μs)
   ajv                       -6,3%     (14 153 672 rps)   (avg: 70ns)
   mschema                 -91,36%      (1 304 864 rps)   (avg: 766ns)
   parambulator            -99,67%         (50 230 rps)   (avg: 19μs)
   fastest-validator            0%     (15 105 474 rps)   (avg: 66ns)
   yup                     -99,46%         (81 920 rps)   (avg: 12μs)
   nope                    -76,84%      (3 499 180 rps)   (avg: 285ns)
   jsvalidator             -88,06%      (1 804 324 rps)   (avg: 554ns)
-----------------------------------------------------------------------

```
