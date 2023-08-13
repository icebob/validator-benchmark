# validator benchmark

## Packages in benchmark

| Package |
| ------- |
| [ajv](https://github.com/epoberezkin/ajv) |
| [fastest-validator](https://github.com/icebob/fastest-validator) |
| [joi](https://github.com/hapijs/joi) |
| [mschema](https://github.com/mschema/mschema) (*) |
| [parambulator](https://github.com/rjrodger/parambulator) (*) |
| [validate.js](https://github.com/ansman/validate.js) |
| [validatorjs](https://github.com/skaterdav85/validatorjs) |
| [validator.js](https://github.com/guillaumepotier/validator.js) |
| [Valibot](https://github.com/fabian-hiller/valibot) |
| [yup](https://github.com/jquense/yup) |
| [Zod](https://github.com/colinhacks/zod) |

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
√ validator.js              1 034 165 rps
√ validate.js                 557 089 rps
√ validatorjs                 370 808 rps
√ joi                         325 518 rps
√ ajv                      14 193 429 rps
√ mschema                   1 344 248 rps
√ parambulator                 50 734 rps
√ fastest-validator        15 001 791 rps
√ yup                          82 656 rps
√ nope                      3 403 903 rps
√ jsvalidator               1 778 932 rps
√ Valibot                     414 225 rps
√ Zod                       1 858 197 rps

   validator.js            -93,11%      (1 034 165 rps)   (avg: 966ns)
   validate.js             -96,29%        (557 089 rps)   (avg: 1μs)
   validatorjs             -97,53%        (370 808 rps)   (avg: 2μs)
   joi                     -97,83%        (325 518 rps)   (avg: 3μs)
   ajv                      -5,39%     (14 193 429 rps)   (avg: 70ns)
   mschema                 -91,04%      (1 344 248 rps)   (avg: 743ns)
   parambulator            -99,66%         (50 734 rps)   (avg: 19μs)
   fastest-validator            0%     (15 001 791 rps)   (avg: 66ns)
   yup                     -99,45%         (82 656 rps)   (avg: 12μs)
   nope                    -77,31%      (3 403 903 rps)   (avg: 293ns)
   jsvalidator             -88,14%      (1 778 932 rps)   (avg: 562ns)
   Valibot                 -97,24%        (414 225 rps)   (avg: 2μs)
   Zod                     -87,61%      (1 858 197 rps)   (avg: 538ns)
-----------------------------------------------------------------------

```
