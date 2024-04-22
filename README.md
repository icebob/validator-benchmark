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
| [Typia](https://github.com/samchon/typia) |
| [TypeBox](https://github.com/sinclairzx81/typebox) |

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
====================

√ validator.js          1 042 449 ops/sec
√ validate.js             530 266 ops/sec
√ validatorjs             373 417 ops/sec
√ joi                     322 830 ops/sec
√ ajv                  14 032 040 ops/sec
√ mschema               1 323 370 ops/sec
√ parambulator             49 942 ops/sec
√ fastest-validator    15 083 985 ops/sec
√ yup                     197 715 ops/sec
√ nope                  3 506 647 ops/sec
√ jsvalidator           1 755 752 ops/sec
√ Valibot               4 164 354 ops/sec
√ Zod                   1 985 027 ops/sec
√ Typia                 9 654 026 ops/sec
√ TypeBox              16 583 409 ops/sec

   validator.js            -93,71%   (1 042 449 ops/sec)   (avg: 959ns)
   validate.js              -96,8%    (530 266 ops/sec)   (avg: 1μs)
   validatorjs             -97,75%    (373 417 ops/sec)   (avg: 2μs)
   joi                     -98,05%    (322 830 ops/sec)   (avg: 3μs)
   ajv                     -15,39%   (14 032 040 ops/sec)   (avg: 71ns)
   mschema                 -92,02%   (1 323 370 ops/sec)   (avg: 755ns)
   parambulator             -99,7%     (49 942 ops/sec)   (avg: 20μs)
   fastest-validator        -9,04%   (15 083 985 ops/sec)   (avg: 66ns)
   yup                     -98,81%    (197 715 ops/sec)   (avg: 5μs)
   nope                    -78,85%   (3 506 647 ops/sec)   (avg: 285ns)
   jsvalidator             -89,41%   (1 755 752 ops/sec)   (avg: 569ns)
   Valibot                 -74,89%   (4 164 354 ops/sec)   (avg: 240ns)
   Zod                     -88,03%   (1 985 027 ops/sec)   (avg: 503ns)
   Typia                   -41,79%   (9 654 026 ops/sec)   (avg: 103ns)
   TypeBox                      0%   (16 583 409 ops/sec)   (avg: 60ns)
                                                                               
┌───────────────────┬────────────────────────────────────────────────────┐
│ validator.js      │ ███                                                │
├───────────────────┼────────────────────────────────────────────────────┤
│ validate.js       │ ██                                                 │
├───────────────────┼────────────────────────────────────────────────────┤
│ validatorjs       │ █                                                  │
├───────────────────┼────────────────────────────────────────────────────┤
│ joi               │ █                                                  │
├───────────────────┼────────────────────────────────────────────────────┤
│ ajv               │ ██████████████████████████████████████████         │
├───────────────────┼────────────────────────────────────────────────────┤
│ mschema           │ ████                                               │
├───────────────────┼────────────────────────────────────────────────────┤
│ parambulator      │                                                    │
├───────────────────┼────────────────────────────────────────────────────┤
│ fastest-validator │ █████████████████████████████████████████████      │
├───────────────────┼────────────────────────────────────────────────────┤
│ yup               │ █                                                  │
├───────────────────┼────────────────────────────────────────────────────┤
│ nope              │ ███████████                                        │
├───────────────────┼────────────────────────────────────────────────────┤
│ jsvalidator       │ █████                                              │
├───────────────────┼────────────────────────────────────────────────────┤
│ Valibot           │ █████████████                                      │
├───────────────────┼────────────────────────────────────────────────────┤
│ Zod               │ ██████                                             │
├───────────────────┼────────────────────────────────────────────────────┤
│ Typia             │ █████████████████████████████                      │
├───────────────────┼────────────────────────────────────────────────────┤
│ TypeBox           │ ██████████████████████████████████████████████████ │
└───────────────────┴────────────────────────────────────────────────────┘
-----------------------------------------------------------------------

```

![Chart](https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22validator.js%22%2C%22validate.js%22%2C%22validatorjs%22%2C%22joi%22%2C%22ajv%22%2C%22mschema%22%2C%22parambulator%22%2C%22fastest-validator%22%2C%22yup%22%2C%22nope%22%2C%22jsvalidator%22%2C%22Valibot%22%2C%22Zod%22%2C%22Typia%22%2C%22TypeBox%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22Dataset%201%22%2C%22backgroundColor%22%3A%22rgba%2854%2C%20162%2C%20235%2C%200.5%29%22%2C%22borderColor%22%3A%22rgb%2854%2C%20162%2C%20235%29%22%2C%22borderWidth%22%3A1%2C%22data%22%3A%5B1042449.1410525093%2C530266.1290130694%2C373417.0331221108%2C322829.57181244873%2C14032040.248611119%2C1323370.144769534%2C49941.663143282334%2C15083984.64160836%2C197714.89164774131%2C3506647.1994713047%2C1755752.4191094423%2C4164353.9145206804%2C1985026.9850479832%2C9654025.576236466%2C16583408.893709676%5D%7D%5D%7D%2C%22options%22%3A%7B%22responsive%22%3Afalse%2C%22legend%22%3A%7B%22display%22%3Afalse%2C%22position%22%3A%22top%22%7D%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Simple%20object%7C%28ops%2Fsec%29%22%7D%2C%22layout%22%3A%7B%22padding%22%3A20%7D%7D%7D)