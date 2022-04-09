const Joi = require("joi");

const userSchema = {
	email: Joi.string().email().required(),
	password: Joi.string().required().min(8),
};

module.exports = {
	userSchema,
};
