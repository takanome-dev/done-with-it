const Joi = require("joi");

const authSchema = {
	email: Joi.string().email().required(),
	password: Joi.string().required().min(8),
};

const registerSchema = {
	name: Joi.string().required().min(4),
	email: Joi.string().email().required(),
	password: Joi.string().required().min(8),
};

module.exports = {
	authSchema,
	registerSchema,
};
