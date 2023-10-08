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

√ validator.js          1 023 397 ops/sec
√ validate.js             529 948 ops/sec
√ validatorjs             370 442 ops/sec
√ joi                     323 164 ops/sec
√ ajv                  13 859 044 ops/sec
√ mschema               1 303 805 ops/sec
√ parambulator             50 519 ops/sec
√ fastest-validator    14 880 485 ops/sec
√ yup                      83 749 ops/sec
√ nope                  3 480 196 ops/sec
√ jsvalidator           1 772 962 ops/sec
√ Valibot               4 153 651 ops/sec
√ Zod                   2 053 469 ops/sec
√ Typia                 9 518 755 ops/sec

   validator.js            -93,12%   (1 023 397 ops/sec)   (avg: 977ns)
   validate.js             -96,44%    (529 948 ops/sec)   (avg: 1μs)
   validatorjs             -97,51%    (370 442 ops/sec)   (avg: 2μs)
   joi                     -97,83%    (323 164 ops/sec)   (avg: 3μs)
   ajv                      -6,86%   (13 859 044 ops/sec)   (avg: 72ns)
   mschema                 -91,24%   (1 303 805 ops/sec)   (avg: 766ns)
   parambulator            -99,66%     (50 519 ops/sec)   (avg: 19μs)
   fastest-validator            0%   (14 880 485 ops/sec)   (avg: 67ns)
   yup                     -99,44%     (83 749 ops/sec)   (avg: 11μs)
   nope                    -76,61%   (3 480 196 ops/sec)   (avg: 287ns)
   jsvalidator             -88,09%   (1 772 962 ops/sec)   (avg: 564ns)
   Valibot                 -72,09%   (4 153 651 ops/sec)   (avg: 240ns)
   Zod                      -86,2%   (2 053 469 ops/sec)   (avg: 486ns)
   Typia                   -36,03%   (9 518 755 ops/sec)   (avg: 105ns)
                                                                               
┌───────────────────┬────────────────────────────────────────────────────┐
│ validator.js      │ ███                                                │
├───────────────────┼────────────────────────────────────────────────────┤
│ validate.js       │ ██                                                 │
├───────────────────┼────────────────────────────────────────────────────┤
│ validatorjs       │ █                                                  │
├───────────────────┼────────────────────────────────────────────────────┤
│ joi               │ █                                                  │
├───────────────────┼────────────────────────────────────────────────────┤
│ ajv               │ ███████████████████████████████████████████████    │
├───────────────────┼────────────────────────────────────────────────────┤
│ mschema           │ ████                                               │
├───────────────────┼────────────────────────────────────────────────────┤
│ parambulator      │                                                    │
├───────────────────┼────────────────────────────────────────────────────┤
│ fastest-validator │ ██████████████████████████████████████████████████ │
├───────────────────┼────────────────────────────────────────────────────┤
│ yup               │                                                    │
├───────────────────┼────────────────────────────────────────────────────┤
│ nope              │ ████████████                                       │
├───────────────────┼────────────────────────────────────────────────────┤
│ jsvalidator       │ ██████                                             │
├───────────────────┼────────────────────────────────────────────────────┤
│ Valibot           │ ██████████████                                     │
├───────────────────┼────────────────────────────────────────────────────┤
│ Zod               │ ███████                                            │
├───────────────────┼────────────────────────────────────────────────────┤
│ Typia             │ ████████████████████████████████                   │
└───────────────────┴────────────────────────────────────────────────────┘       
-----------------------------------------------------------------------

```

![Chart](https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22validator.js%22%2C%22validate.js%22%2C%22validatorjs%22%2C%22joi%22%2C%22ajv%22%2C%22mschema%22%2C%22parambulator%22%2C%22fastest-validator%22%2C%22yup%22%2C%22nope%22%2C%22jsvalidator%22%2C%22Valibot%22%2C%22Zod%22%2C%22Typia%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22Dataset%201%22%2C%22backgroundColor%22%3A%22rgba%2854%2C%20162%2C%20235%2C%200.5%29%22%2C%22borderColor%22%3A%22rgb%2854%2C%20162%2C%20235%29%22%2C%22borderWidth%22%3A1%2C%22data%22%3A%5B1023397.1344880234%2C529948.0650896212%2C370441.71173674153%2C323163.5342267978%2C13859043.654577304%2C1303805.0587636281%2C50519.184460618344%2C14880485.091253228%2C83749.2914789953%2C3480195.7958154725%2C1772961.952236505%2C4153650.96359122%2C2053468.5037092837%2C9518754.606506245%5D%7D%5D%7D%2C%22options%22%3A%7B%22responsive%22%3Afalse%2C%22legend%22%3A%7B%22display%22%3Afalse%2C%22position%22%3A%22top%22%7D%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Simple%20object%7C%28ops%2Fsec%29%22%7D%2C%22layout%22%3A%7B%22padding%22%3A20%7D%7D%7D)