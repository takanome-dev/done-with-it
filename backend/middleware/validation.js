const Joi = require("joi");
const store = require("../store/categories");

const validateSchema = (schema) => (req, res, next) => {
	const result = Joi.validate(req.body, schema);

	if (result.error)
		return res.status(400).send({ error: result.error.details[0].message });

	return next();
};

const validateCategoryId = async (req, res, next) => {
	const category = await store.getCategory(parseInt(req.body.categoryId));

	if (!category) return res.status(400).send({ error: "Invalid categoryId." });

	next();
};

module.exports = {
	validateSchema,
	validateCategoryId,
};
