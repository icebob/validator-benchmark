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
Platform info:
==============
   Windows_NT 6.1.7601 x64
   Node.JS: 10.16.0
   V8: 6.8.275.32-node.52
   Intel(R) Core(TM) i7-4770K CPU @ 3.50GHz × 8

Suite: Simple object
√ validator.js                566,527 rps
√ validate.js                 212,279 rps
√ validatorjs                 197,163 rps
√ joi                         162,628 rps
√ ajv                       7,246,357 rps
√ mschema                     677,122 rps
√ parambulator                 24,562 rps
√ fastest-validator         8,279,376 rps
√ yup                          20,783 rps

   validator.js            -93.16%        (566,527 rps)   (avg: 1μs)
   validate.js             -97.44%        (212,279 rps)   (avg: 4μs)
   validatorjs             -97.62%        (197,163 rps)   (avg: 5μs)
   joi                     -98.04%        (162,628 rps)   (avg: 6μs)
   ajv                     -12.48%      (7,246,357 rps)   (avg: 138ns)
   mschema                 -91.82%        (677,122 rps)   (avg: 1μs)
   parambulator             -99.7%         (24,562 rps)   (avg: 40μs)
   fastest-validator            0%      (8,279,376 rps)   (avg: 120ns)
   yup                     -99.75%         (20,783 rps)   (avg: 48μs)
-----------------------------------------------------------------------
```

[![Result](https://user-images.githubusercontent.com/306521/68978853-404a8500-07fc-11ea-94e4-0c25546dad04.png)](https://cloud.highcharts.com/show/yqowupa)
