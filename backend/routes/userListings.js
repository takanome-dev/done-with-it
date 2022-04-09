const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const listingMapper = require("../mappers/listings");
const store = require("../store/listings");

router.get("/listings", auth.requireAuth, async (req, res) => {
	const listings = await store.getUserListings(req.user.userId);
	const resources = listings.map(listingMapper);
	return res.json(resources);
});

module.exports = router;
