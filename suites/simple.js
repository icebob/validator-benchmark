"use strict";

const Benchmarkify = require("benchmarkify");
const benchmark = new Benchmarkify("Validators benchmark", { drawChart: true, chartImage: true }).printHeader();

let bench = benchmark.createSuite("Simple object");

const obj = {
	name: "John Doe",
	email: "john.doe@company.space",
	firstName: "John",
	phone: "123-4567",
	age: 33
};

// ---- validator.js ----
(function () {
	const is = require('validator.js').Assert;
	const validator = require('validator.js').validator();

	const constraints = {
		name: [is.notBlank(), is.ofLength({ min: 4, max: 25 })],
		email: is.email(),
		firstName: is.notBlank(),
		phone: is.notBlank(),
		age: [is.required(), is.greaterThan(18)]
	};

	bench.add("validator.js", () => {
		validator.validate(obj, constraints);
	});

}());


// ---- validate.js ----
(function () {
	const validate = require("validate.js");

	const constraints = {
		name: {
			presence: true,
			length: {
				minimum: 4,
				maximum: 25
			}
		},
		email: { email: true },
		firstName: { presence: true },
		phone: { presence: true },
		age: {
			numericality: {
				onlyInteger: true,
				greaterThan: 18
			}
		}
	};

	bench.add("validate.js", () => {
		return validate(obj, constraints);
	});
}());

// ---- validatorjs ----
(function () {
	const Validator = require('validatorjs');

	const constraints = {
		name: "required|min:4|max:25",
		email: "required|email",
		firstName: "required",
		phone: "required",
		age: "required|integer|min:18"
	};

	bench.add("validatorjs", () => {
		let validation = new Validator(obj, constraints);
		return validation.passes();
	});

}());

// ---- joi ----
(function () {
	const Joi = require('joi');

	const schema = Joi.object().keys({
		name: Joi.string().min(4).max(25).required(),
		email: Joi.string().email().required(),
		firstName: Joi.required(),
		phone: Joi.required(),
		age: Joi.number().integer().min(18).required()
	});

	bench.add("joi", () => {
		return schema.validate(obj);
	});

}());



// ---- ajv ----
(function () {
	const Ajv = require('ajv');
	const addFormats = require("ajv-formats")
	const ajv = new Ajv();
	addFormats(ajv);

	const constraints = {
		type: "object",
		properties: {
			name: { type: "string", minLength: 4, maxLength: 25 },
			email: { type: "string", format: "email" },
			firstName: { type: "string" },
			phone: { type: "string" },
			age: { type: "integer", minimum: 18 }
		},
		required: [
			"name",
			"email",
			"firstName",
			"phone",
			"age"
		]
	};

	const validate = ajv.compile(constraints);

	bench.add("ajv", () => {
		return validate(obj);
	});
}());


// ---- mschema ----
(function () {
	const mschema = require('mschema');

	const constraints = {
		name: {
			type: "string",
			minLength: 4,
			maxLength: 25
		},
		email: "string",
		firstName: "string",
		phone: "string",
		age: {
			type: "number",
			min: 18
		}
	};

	bench.add("mschema", () => {
		return mschema.validate(obj, constraints);
	});

}());


// ---- parambulator ----
(function () {
	const parambulator = require('parambulator');

	const constraints = {
		name: {
			type$: "string",
			required$: true,
			minlen$: 4,
			maxlen$: 25
		},
		email: { type$: "string", required$: true },
		firstName: { type$: "string", required$: true },
		phone: { type$: "string", required$: true },
		age: {
			type$: "number",
			required$: true,
			min$: 18
		}
	};

	let check = parambulator(constraints);

	bench.add("parambulator", () => {
		return check.validate(obj, (err) => {
			//console.log(err);
		});
	});

}());

// ---- fastest-validator ----
(function () {
	const Validator = require('fastest-validator');
	const v = new Validator();

	const constraints = {
		name: {
			type: "string",
			min: 4,
			max: 25
		},
		email: { type: "email" },
		firstName: { type: "string" },
		phone: { type: "string" },
		age: {
			type: "number",
			min: 18
		}
	};

	let check = v.compile(constraints);

	let testObj = obj;

	bench.add("fastest-validator", () => {
		let res = check(testObj);
		if (res !== true)
			throw new Error("Validation error!", res);
	});

}());

// ---- yup ----
(function () {
	const yup = require('yup');

	const schema = yup.object().shape({
		name: yup.string().min(4).max(25).required(),
		email: yup.string().email().required(),
		firstName: yup.string().required(),
		phone: yup.string().required(),
		age: yup.number().integer().min(18).required(),
	});


	bench.add("yup", () => {
		return schema.isValid(obj);
	});

}());

// ---- nope ----
(function () {
	const nope = require('nope-validator');

	const schema = nope.object().shape({
		name: nope.string().min(4).max(25).required(),
		email: nope.string().email().required(),
		firstName: nope.string().required(),
		phone: nope.string().required(),
		age: nope.number().integer().min(18).required(),
	});

	let temp;

	bench.add("nope", () => {
		temp = schema.validate(obj);
		if (temp !== undefined) {
			throw new Error("Validation error!", temp);
		}
	});

}());

// ---- jsvalidator ----
(function () {
	const jsvalidator = require("jsvalidator");

	const schema = {
		type: "object",
		schema: [
			{ name: "name", type: "string", min: 4, max: 25, required: true },
			{ name: "email", type: "string", regex: /^\S+@\S+\.\S+$/, required: true },
			{ name: "firstName", type: "string", required: true },
			{ name: "phone", type: "string", required: true },
			{ name: "age", type: "number", min: 18, required: true }
		],
		required: true
	};

	let temp;

	bench.add("jsvalidator", () => {
		temp = jsvalidator.validate(obj, schema);
		if (temp.success !== true) {
			throw new Error("Validation error!", temp.err);
		}
	});
}());

// ---- Valibot ----
(function () {
	const v = require('valibot');

	const schema = v.object({
		name: v.string([v.minLength(4), v.maxLength(25)]),
		email: v.string([v.email()]),
		firstName: v.string(),
		phone: v.string(),
		age: v.number([v.minValue(18)]),
	});


	bench.add("Valibot", () => {
		return v.parse(schema, obj);
	});

}());

// ---- Zod ----
(function () {
	const { z } = require('zod');

	const schema = z.object({
		name: z.string().min(4).max(25),
		email: z.string().email(),
		firstName: z.string(),
		phone: z.string(),
		age: z.number().int().gte(18),
	});


	bench.add("Zod", () => {
		return schema.parse(obj);
	});

}());

// ---- unknownutil ----
(function () {
	const { isString, isNumber, isObjectOf, ensure } = require('unknownutil');
	const isSchema = isObjectOf({
		name: isString,
		email: isString,
		firstName: isString,
		phone: isString,
		age: isNumber
	})

	bench.add('unknownutil', () => {
		return ensure(obj, isSchema);
	});

}());


bench.run();
