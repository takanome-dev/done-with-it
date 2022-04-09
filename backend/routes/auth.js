const express = require("express");
const router = express.Router();
const schemas = require("../helpers/schemas");
const helpers = require("../helpers/auth");
const store = require("../store/users");
const validation = require("../middleware/validation");

router.post("/", validation.validate(schemas.userSchema), async (req, res) => {
	const { email, password } = req.body;
	const user = await store.getUserByEmail(email);
	if (!user || user.password !== password)
		return res.status(400).json({ error: "Invalid email or password." });

	const token = helpers.generateToken(user);
	return res.json(token);
});

module.exports = router;
