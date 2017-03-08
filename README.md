# validator benchmark

## Packages in benchmark

| Package | Stars | Quality |
| ------- | ----- | ------- |
| [validator.js](https://github.com/guillaumepotier/validator.js) | 231 | 70
| [validate.js](https://github.com/ansman/validate.js) | 888 | 73
| [validatorjs](https://github.com/skaterdav85/validatorjs) | 355 | 71
| [joi](https://github.com/hapijs/joi) | 4,101 | 89
| [ajv](https://github.com/epoberezkin/ajv) | 1,112 | 87
| [mschema](https://github.com/mschema/mschema) (*) | 95 | 31
| [parambulator](https://github.com/rjrodger/parambulator) (*) | 35 | 68
| [fastest-validator](https://github.com/icebob/fastest-validator) | - | -

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
   Node.JS: 6.10.0
   V8: 5.1.281.93
   Intel(R) Core(TM) i7-4770K CPU @ 3.50GHz × 8

Suite: Benchmark #1 - Simple object
√ validator.js x 112,358 ops/sec ±0.26% (90 runs sampled)
√ validate.js x 20,944 ops/sec ±0.87% (90 runs sampled)
√ validatorjs x 107,254 ops/sec ±0.92% (93 runs sampled)
√ joi x 32,286 ops/sec ±11.46% (88 runs sampled)
√ ajv x 60,728 ops/sec ±1.29% (90 runs sampled)
√ mschema x 219,744 ops/sec ±1.10% (93 runs sampled)
√ parambulator x 9,435 ops/sec ±2.04% (87 runs sampled)
√ fastest-validator x 4,017,242 ops/sec ±0.20% (96 runs sampled)

   validator.js       -97.12%    (112,358 ops/sec)
   validate.js        -99.46%     (20,944 ops/sec)
   validatorjs        -97.25%    (107,254 ops/sec)
   joi                -99.17%     (32,286 ops/sec)
   ajv                -98.44%     (60,728 ops/sec)
   mschema            -94.37%    (219,744 ops/sec)
   parambulator       -99.76%      (9,435 ops/sec)
   fastest-validator     0.00%   (4,017,242 ops/sec)
```

[![Result](https://cloud.highcharts.com/images/yqowupa/2/600.png)](http://cloud.highcharts.com/show/yqowupa)
