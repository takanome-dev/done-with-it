const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const listingsStore = require("../store/listings");
const store = require("../store/users");
const schemas = require("../helpers/schemas");
const validation = require("../middleware/validation");

router.get("/", auth.requireAdmin, async (req, res) => {
	const users = await store.getUsers();
	return res.json(users);
});

router.get("/:id", auth.requireAdmin, async (req, res) => {
	const userId = parseInt(req.params.id);
	const user = await store.getUserById(userId);
	if (!user) return res.status(404).json("User not found");

	const listings = await listingsStore.getUserListings(userId);

	return res.json({
		id: user.id,
		name: user.name,
		email: user.email,
		listings: listings.length,
	});
});

router.post(
	"/",
	validation.validateSchema(schemas.registerSchema),
	async (req, res) => {
		const { name, email, password } = req.body;

		const emailExist = await store.getUserByEmail(email);
		if (emailExist)
			return res
				.status(400)
				.json({ error: "A user with the given email already exists." });

		const user = { name, email, password };
		await store.addUser(user);

		return res.status(201).json(user);
	}
);

module.exports = router;
