const express = require("express");
const router = express.Router();
const store = require("../store/categories");

router.get("/", async (req, res) => {
	const categories = await store.getCategories();
	return res.json(categories);
});

module.exports = router;
