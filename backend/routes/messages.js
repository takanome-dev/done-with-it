const express = require("express");
const router = express.Router();
const { Expo } = require("expo-server-sdk");

const auth = require("../middleware/auth");
const messagesStore = require("../store/messages");
const listingsStore = require("../store/listings");
const sendPushNotification = require("../helpers/pushNotifications");
const schemas = require("../helpers/schemas");
const usersStore = require("../store/users");
const validation = require("../middleware/validation");

router.get("/", auth.requireAuth, async (req, res) => {
	const messages = await messagesStore.getMessagesForUser(req.user.userId);

	const mapUser = async (userId) => {
		const user = await usersStore.getUserById(userId);
		return { id: user.id, name: user.name };
	};

	const resources = messages.map((message) => ({
		id: message.id,
		listingId: message.listingId,
		dateTime: message.dateTime,
		content: message.content,
		fromUser: mapUser(message.fromUserId),
		toUser: mapUser(message.toUserId),
	}));

	return res.json(resources);
});

router.post(
	"/",
	[auth.requireAuth, validation.validateSchema(schemas.messagesSchema)],
	async (req, res) => {
		const { listingId, message } = req.body;

		const listing = await listingsStore.getListing(listingId);
		if (!listing) return res.status(400).send({ error: "Invalid listingId." });

		const targetUser = await usersStore.getUserById(parseInt(listing.userId));
		if (!targetUser) return res.status(400).send({ error: "Invalid userId." });

		await messagesStore.addMessage({
			fromUserId: req.user.userId,
			toUserId: listing.userId,
			listingId,
			content: message,
		});

		const { expoPushToken } = targetUser;

		if (Expo.isExpoPushToken(expoPushToken))
			await sendPushNotification(expoPushToken, message);

		return res.status(201).json();
	}
);

module.exports = router;
