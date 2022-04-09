const express = require("express");
const multer = require("multer");
const router = express.Router();

const auth = require("../middleware/auth");
const imageResize = require("../middleware/imageResize");
const listingMapper = require("../mappers/listings");
const store = require("../store/listings");
const schemas = require("../helpers/schemas");
const validation = require("../middleware/validation");

const upload = multer({
	dest: "uploads/",
	limits: { fieldSize: 25 * 1024 * 1024 },
});

router.get("/", async (req, res) => {
	const listings = await store.getListings();
	const resources = listings.map(listingMapper);
	return res.json(resources);
});

router.post(
	"/",
	[
		// Order of these middleware matters.
		// "upload" should come before other "validate" because we have to handle
		// multi-part form data. Once the upload middleware from multer applied,
		// request.body will be populated and we can validate it. This means
		// if the request is invalid, we'll end up with one or more image files
		// stored in the uploads folder. We'll need to clean up this folder
		// using a separate process.
		auth.requireAuth,
		upload.array("images", process.env.MAX_IMAGE_COUNT),
		validation.validateSchema(schemas.listingsSchema),
		validation.validateCategoryId,
		imageResize,
	],

	async (req, res) => {
		const listing = {
			title: req.body.title,
			price: parseFloat(req.body.price),
			categoryId: parseInt(req.body.categoryId),
			description: req.body.description,
		};
		listing.images = req.images.map((fileName) => ({ fileName: fileName }));
		if (req.body.location) listing.location = JSON.parse(req.body.location);
		if (req.user) listing.userId = req.user.userId;

		await store.addListing(listing);

		return res.status(201).json(listing);
	}
);

module.exports = router;
