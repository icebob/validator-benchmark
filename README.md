# validator benchmark

## Packages in benchmark

| Package | Stars | Quality |
| ------- | ----- | ------- |
| [validator.js](https://github.com/guillaumepotier/validator.js) | 249 | 70
| [validate.js](https://github.com/ansman/validate.js) | 1,754 | 73
| [validatorjs](https://github.com/skaterdav85/validatorjs) | 900 | 71
| [joi](https://github.com/hapijs/joi) | 9,597 | 89
| [ajv](https://github.com/epoberezkin/ajv) | 4,364 | 87
| [mschema](https://github.com/mschema/mschema) (*) | 106 | 31
| [parambulator](https://github.com/rjrodger/parambulator) (*) | 41 | 68
| [fastest-validator](https://github.com/icebob/fastest-validator) | 224 | 68
| [yup](https://github.com/jquense/yup) | 3049 | 71

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
√ validator.js                508,110 rps
√ validate.js                 159,814 rps
√ validatorjs                 156,339 rps
√ joi                          95,418 rps
√ ajv                       5,045,181 rps
√ mschema                     568,794 rps
√ parambulator                 14,722 rps
√ fastest-validator         5,198,816 rps
√ yup                          10,139 rps

   validator.js            -90.23%        (508,110 rps)   (avg: 1μs)
   validate.js             -96.93%        (159,814 rps)   (avg: 6μs)
   validatorjs             -96.99%        (156,339 rps)   (avg: 6μs)
   joi                     -98.16%         (95,418 rps)   (avg: 10μs)
   ajv                      -2.96%      (5,045,181 rps)   (avg: 198ns)
   mschema                 -89.06%        (568,794 rps)   (avg: 1μs)
   parambulator            -99.72%         (14,722 rps)   (avg: 67μs)
   fastest-validator            0%      (5,198,816 rps)   (avg: 192ns)
   yup                      -99.8%         (10,139 rps)   (avg: 98μs)
```

[![Result](https://user-images.githubusercontent.com/306521/41873673-f8e5a86e-78c5-11e8-8e84-364a11308536.png)](https://cloud.highcharts.com/show/yqowupa)
