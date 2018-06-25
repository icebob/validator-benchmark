# validator benchmark

## Packages in benchmark

| Package | Stars | Quality |
| ------- | ----- | ------- |
| [validator.js](https://github.com/guillaumepotier/validator.js) | 245 | 70
| [validate.js](https://github.com/ansman/validate.js) | 1,626 | 73
| [validatorjs](https://github.com/skaterdav85/validatorjs) | 823 | 71
| [joi](https://github.com/hapijs/joi) | 8,347 | 89
| [ajv](https://github.com/epoberezkin/ajv) | 3,694 | 87
| [mschema](https://github.com/mschema/mschema) (*) | 104 | 31
| [parambulator](https://github.com/rjrodger/parambulator) (*) | 38 | 68
| [fastest-validator](https://github.com/icebob/fastest-validator) | 167 | 68
| [yup](https://github.com/jquense/yup) | 2093 | 71

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
   Node.JS: 8.11.0
   V8: 6.2.414.50
   Intel(R) Core(TM) i7-4770K CPU @ 3.50GHz × 8

Suite: Simple object
√ validator.js                469,880 rps
√ validate.js                 155,271 rps
√ validatorjs                 148,868 rps
√ joi                          37,369 rps
√ ajv                       4,714,450 rps
√ mschema                     538,521 rps
√ parambulator                 13,997 rps
√ fastest-validator         3,996,619 rps
√ yup                           8,368 rps

   validator.js            -90.03%        (469,880 rps)   (avg: 2μs)
   validate.js             -96.71%        (155,271 rps)   (avg: 6μs)
   validatorjs             -96.84%        (148,868 rps)   (avg: 6μs)
   joi                     -99.21%         (37,369 rps)   (avg: 26μs)
   ajv                          0%      (4,714,450 rps)   (avg: 212ns)
   mschema                 -88.58%        (538,521 rps)   (avg: 1μs)
   parambulator             -99.7%         (13,997 rps)   (avg: 71μs)
   fastest-validator       -15.23%      (3,996,619 rps)   (avg: 250ns)
   yup                     -99.82%          (8,368 rps)   (avg: 119μs)
```

[![Result](https://user-images.githubusercontent.com/306521/41873673-f8e5a86e-78c5-11e8-8e84-364a11308536.png)](https://cloud.highcharts.com/show/yqowupa)
