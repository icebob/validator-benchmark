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
   13th Gen Intel(R) Core(TM) i5-13500 × 20

Suite: Simple object
√ validator.js              1 063 463 rps
√ validate.js                 547 103 rps
√ validatorjs                 383 264 rps
√ joi                         304 857 rps
√ ajv                      15 840 319 rps
√ mschema                   1 357 728 rps
√ parambulator                 49 903 rps
√ fastest-validator        15 322 816 rps
√ yup                          45 075 rps

   validator.js            -93,29%      (1 063 463 rps)   (avg: 940ns)
   validate.js             -96,55%        (547 103 rps)   (avg: 1μs)
   validatorjs             -97,58%        (383 264 rps)   (avg: 2μs)
   joi                     -98,08%        (304 857 rps)   (avg: 3μs)
   ajv                          0%     (15 840 319 rps)   (avg: 63ns)
   mschema                 -91,43%      (1 357 728 rps)   (avg: 736ns)
   parambulator            -99,68%         (49 903 rps)   (avg: 20μs)
   fastest-validator        -3,27%     (15 322 816 rps)   (avg: 65ns)
   yup                     -99,72%         (45 075 rps)   (avg: 22μs)
-----------------------------------------------------------------------
```
