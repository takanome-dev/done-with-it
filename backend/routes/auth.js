const express = require("express");
const router = express.Router();

const helpers = require("../helpers/auth");
const schemas = require("../helpers/schemas");
const store = require("../store/users");
const validation = require("../middleware/validation");

router.post(
	"/",
	validation.validateSchema(schemas.userSchema),
	async (req, res) => {
		const { email, password } = req.body;
		const user = await store.getUserByEmail(email);
		if (!user || user.password !== password)
			return res.status(400).json({ error: "Invalid email or password." });

		const token = helpers.generateToken(user);
		return res.json(token);
	}
);

module.exports = router;
