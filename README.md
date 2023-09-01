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
√ validator.js              1 015 954 rps
√ validate.js                 541 653 rps
√ validatorjs                 371 656 rps
√ joi                         328 248 rps
√ ajv                      13 746 633 rps
√ mschema                   1 328 883 rps
√ parambulator                 50 065 rps
√ fastest-validator        14 922 257 rps
√ yup                          83 047 rps
√ nope                      3 513 749 rps
√ jsvalidator               1 725 869 rps
√ Valibot                   4 241 779 rps
√ Zod                       1 819 350 rps

   validator.js            -93,19%      (1 015 954 rps)   (avg: 984ns)
   validate.js             -96,37%        (541 653 rps)   (avg: 1μs)
   validatorjs             -97,51%        (371 656 rps)   (avg: 2μs)
   joi                      -97,8%        (328 248 rps)   (avg: 3μs)
   ajv                      -7,88%     (13 746 633 rps)   (avg: 72ns)
   mschema                 -91,09%      (1 328 883 rps)   (avg: 752ns)
   parambulator            -99,66%         (50 065 rps)   (avg: 19μs)
   fastest-validator            0%     (14 922 257 rps)   (avg: 67ns)
   yup                     -99,44%         (83 047 rps)   (avg: 12μs)
   nope                    -76,45%      (3 513 749 rps)   (avg: 284ns)
   jsvalidator             -88,43%      (1 725 869 rps)   (avg: 579ns)
   Valibot                 -71,57%      (4 241 779 rps)   (avg: 235ns)
   Zod                     -87,81%      (1 819 350 rps)   (avg: 549ns)
-----------------------------------------------------------------------

```
