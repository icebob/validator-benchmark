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
√ validator.js x 109,847 ops/sec ±0.25% (93 runs sampled)
√ validate.js x 21,189 ops/sec ±1.12% (91 runs sampled)
√ validatorjs x 109,509 ops/sec ±0.88% (92 runs sampled)
√ joi x 32,896 ops/sec ±10.42% (91 runs sampled)
√ ajv x 62,585 ops/sec ±1.25% (95 runs sampled)
√ mschema x 228,382 ops/sec ±0.76% (92 runs sampled)
√ parambulator x 9,325 ops/sec ±1.75% (87 runs sampled)
√ fastest-validator x 3,292,995 ops/sec ±0.84% (89 runs sampled)

   validator.js        -96.66%    (109,847 ops/sec)
   validate.js         -99.36%     (21,189 ops/sec)
   validatorjs         -96.67%    (109,509 ops/sec)
   joi                 -99.00%     (32,896 ops/sec)
   ajv                 -98.10%     (62,585 ops/sec)
   mschema             -93.06%    (228,382 ops/sec)
   parambulator        -99.72%      (9,325 ops/sec)
   fastest-validator     0.00%   (3,292,995 ops/sec)
```

[![Result](https://cloud.highcharts.com/images/yqowupa/4/800.png)](http://cloud.highcharts.com/show/yqowupa)
