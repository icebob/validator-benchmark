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
Suite: Benchmark #1 - Simple object
›› validator.js x 112,707 ops/sec ±0.24% (91 runs sampled)
›› validate.js x 21,018 ops/sec ±0.59% (95 runs sampled)
›› validatorjs x 122,977 ops/sec ±0.63% (94 runs sampled)
›› joi x 32,841 ops/sec ±11.84% (90 runs sampled)
›› ajv x 61,438 ops/sec ±1.07% (91 runs sampled)
›› mschema x 215,844 ops/sec ±0.81% (94 runs sampled)
›› parambulator x 9,390 ops/sec ±2.54% (83 runs sampled)
```

[![Result](https://cloud.highcharts.com/images/yqowupa/0/600.png)](http://cloud.highcharts.com/show/yqowupa)