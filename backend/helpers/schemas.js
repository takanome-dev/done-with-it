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

const listingsSchema = {
	title: Joi.string().required(),
	description: Joi.string().allow(""),
	price: Joi.number().required().min(1),
	categoryId: Joi.number().required().min(1),
	location: Joi.object({
		latitude: Joi.number().required(),
		longitude: Joi.number().required(),
	}).optional(),
};

const messagesSchema = {
	listingId: Joi.number().required(),
	message: Joi.string().required(),
};

const pushTokenSchema = { token: Joi.string().required() };

module.exports = {
	authSchema,
	registerSchema,
	listingsSchema,
	messagesSchema,
	pushTokenSchema,
};
