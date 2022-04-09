const express = require("express");
const router = express.Router();
const schemas = require("../helpers/schemas");
const helpers = require("../helpers/auth");
const usersStore = require("../store/users");
const validation = require("../middleware/validation");

router.post("/", validation.validate(schemas.userSchema), (req, res) => {
	const { email, password } = req.body;
	const user = usersStore.getUserByEmail(email);
	if (!user || user.password !== password)
		return res.status(400).send({ error: "Invalid email or password." });

	const token = helpers.generateToken(user);
	res.send(token);
});

module.exports = router;
