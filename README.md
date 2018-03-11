# validator benchmark

## Packages in benchmark

| Package | Stars | Quality |
| ------- | ----- | ------- |
| [validator.js](https://github.com/guillaumepotier/validator.js) | 245 | 70
| [validate.js](https://github.com/ansman/validate.js) | 1,490 | 73
| [validatorjs](https://github.com/skaterdav85/validatorjs) | 728 | 71
| [joi](https://github.com/hapijs/joi) | 7,348 | 89
| [ajv](https://github.com/epoberezkin/ajv) | 3,166 | 87
| [mschema](https://github.com/mschema/mschema) (*) | 104 | 31
| [parambulator](https://github.com/rjrodger/parambulator) (*) | 38 | 68
| [fastest-validator](https://github.com/icebob/fastest-validator) | 114 | 67

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
   Node.JS: 8.9.4
   V8: 6.1.534.50
   Intel(R) Core(TM) i7-4770K CPU @ 3.50GHz × 8

Suite: Benchmark #1 - Simple object
√ validator.js x 336,023 ops/sec ±2.52% (89 runs sampled)
√ validate.js x 107,729 ops/sec ±0.97% (96 runs sampled)
√ validatorjs x 160,237 ops/sec ±0.82% (92 runs sampled)
√ joi x 67,978 ops/sec ±0.36% (90 runs sampled)
√ ajv x 6,550,895 ops/sec ±0.55% (96 runs sampled)
√ mschema x 517,535 ops/sec ±0.40% (92 runs sampled)
√ parambulator x 12,403 ops/sec ±3.66% (78 runs sampled)
√ fastest-validator x 3,253,249 ops/sec ±0.87% (90 runs sampled)

   validator.js        -94.87%    (336,023 ops/sec)
   validate.js         -98.36%    (107,729 ops/sec)
   validatorjs         -97.55%    (160,237 ops/sec)
   joi                 -98.96%     (67,978 ops/sec)
   ajv                   0.00%   (6,550,895 ops/sec)
   mschema             -92.10%    (517,535 ops/sec)
   parambulator        -99.81%     (12,403 ops/sec)
   fastest-validator   -50.34%   (3,253,249 ops/sec)
```

[![Result](https://user-images.githubusercontent.com/306521/37256485-a6da1734-255b-11e8-9a20-c2f16f692df4.png)](http://cloud.highcharts.com/show/yqowupa)
