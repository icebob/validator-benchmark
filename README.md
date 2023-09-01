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
√ validator.js              1 015 954 rps
√ validate.js                 541 653 rps
√ validatorjs                 371 656 rps
√ joi                         328 248 rps
√ ajv                      13 746 633 rps
√ mschema                   1 328 883 rps
√ parambulator                 50 065 rps
√ fastest-validator        14 922 257 rps
√ yup                          83 047 rps
√ nope                      3 513 749 rps
√ jsvalidator               1 725 869 rps
√ Valibot                   4 241 779 rps
√ Zod                       1 819 350 rps

   validator.js            -93,19%      (1 015 954 rps)   (avg: 984ns)
   validate.js             -96,37%        (541 653 rps)   (avg: 1μs)
   validatorjs             -97,51%        (371 656 rps)   (avg: 2μs)
   joi                      -97,8%        (328 248 rps)   (avg: 3μs)
   ajv                      -7,88%     (13 746 633 rps)   (avg: 72ns)
   mschema                 -91,09%      (1 328 883 rps)   (avg: 752ns)
   parambulator            -99,66%         (50 065 rps)   (avg: 19μs)
   fastest-validator            0%     (14 922 257 rps)   (avg: 67ns)
   yup                     -99,44%         (83 047 rps)   (avg: 12μs)
   nope                    -76,45%      (3 513 749 rps)   (avg: 284ns)
   jsvalidator             -88,43%      (1 725 869 rps)   (avg: 579ns)
   Valibot                 -71,57%      (4 241 779 rps)   (avg: 235ns)
   Zod                     -87,81%      (1 819 350 rps)   (avg: 549ns)
                                                                               
┌───────────────────┬────────────────────────────────────────────────────┐     
│ validator.js      │ ███                                                │     
├───────────────────┼────────────────────────────────────────────────────┤     
│ validate.js       │ ██                                                 │     
├───────────────────┼────────────────────────────────────────────────────┤     
│ validatorjs       │ █                                                  │     
├───────────────────┼────────────────────────────────────────────────────┤     
│ joi               │ █                                                  │     
├───────────────────┼────────────────────────────────────────────────────┤     
│ ajv               │ ██████████████████████████████████████████████     │     
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
└───────────────────┴────────────────────────────────────────────────────┘        
-----------------------------------------------------------------------

```

![Chart](https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7B%22type%22%3A%22bar%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22validator.js%22%2C%22validate.js%22%2C%22validatorjs%22%2C%22joi%22%2C%22ajv%22%2C%22mschema%22%2C%22parambulator%22%2C%22fastest-validator%22%2C%22yup%22%2C%22nope%22%2C%22jsvalidator%22%2C%22Valibot%22%2C%22Zod%22%5D%2C%22datasets%22%3A%5B%7B%22label%22%3A%22Dataset%201%22%2C%22backgroundColor%22%3A%22rgba%2854%2C%20162%2C%20235%2C%200.5%29%22%2C%22borderColor%22%3A%22rgb%2854%2C%20162%2C%20235%29%22%2C%22borderWidth%22%3A1%2C%22data%22%3A%5B1029404.3852626813%2C518136.2796003347%2C371176.3709122277%2C326997.3578613485%2C13592543.544116907%2C1316555.4062001477%2C50461.06655467634%2C14861383.983933723%2C83573.34845917636%2C3491181.70620786%2C1722527.6882876458%2C4229267.4588741%2C2038643.5454261303%5D%7D%5D%7D%2C%22options%22%3A%7B%22responsive%22%3Afalse%2C%22legend%22%3A%7B%22display%22%3Afalse%2C%22position%22%3A%22top%22%7D%2C%22title%22%3A%7B%22display%22%3Atrue%2C%22text%22%3A%22Simple%20object%7C%28ops%2Fsec%29%22%7D%2C%22layout%22%3A%7B%22padding%22%3A20%7D%7D%7D)