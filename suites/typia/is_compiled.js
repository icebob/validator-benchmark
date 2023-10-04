"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const typia_1 = __importDefault(require("typia"));
const validate = input => {
    const errors = [];
    const __is = input => {
        return "object" === typeof input && null !== input && ("string" === typeof input.name && (4 <= input.name.length && input.name.length <= 25) && ("string" === typeof input.email && /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i.test(input.email)) && "string" === typeof input.firstName && "string" === typeof input.phone && ("number" === typeof input.age && 10 <= input.age));
    };
    if (false === __is(input)) {
        const $report = typia_1.default.createValidate.report(errors);
        ((input, _path, _exceptionable = true) => {
            const $vo0 = (input, _path, _exceptionable = true) => ["string" === typeof input.name && (4 <= input.name.length || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string & MinLength<4>",
                    value: input.name
                })) && (input.name.length <= 25 || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string & MaxLength<25>",
                    value: input.name
                })) || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "(string & MinLength<4> & MaxLength<25>)",
                    value: input.name
                }), "string" === typeof input.email && (/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i.test(input.email) || $report(_exceptionable, {
                    path: _path + ".email",
                    expected: "string & Format<\"email\">",
                    value: input.email
                })) || $report(_exceptionable, {
                    path: _path + ".email",
                    expected: "(string & Format<\"email\">)",
                    value: input.email
                }), "string" === typeof input.firstName || $report(_exceptionable, {
                    path: _path + ".firstName",
                    expected: "string",
                    value: input.firstName
                }), "string" === typeof input.phone || $report(_exceptionable, {
                    path: _path + ".phone",
                    expected: "string",
                    value: input.phone
                }), "number" === typeof input.age && (10 <= input.age || $report(_exceptionable, {
                    path: _path + ".age",
                    expected: "number & Minimum<10>",
                    value: input.age
                })) || $report(_exceptionable, {
                    path: _path + ".age",
                    expected: "(number & Minimum<10>)",
                    value: input.age
                })].every(flag => flag);
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "Schema",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "Schema",
                value: input
            });
        })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    };
};
exports.validate = validate;
