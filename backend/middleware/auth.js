const helpers = require("../helpers/auth");

const requireAuth = (req, res, next) => {
	const token = helpers.getToken(req);

	if (!token)
		return res.status(401).send({ error: "Access denied. No token provided." });

	try {
		const payload = helpers.verifyToken(token);
		req.user = payload;
		return next();
	} catch (err) {
		return res.status(400).send({ error: "Invalid token." });
	}
};

const requireAdmin = (req, res, next) => {
	const token = helpers.getToken(req);

	if (!token)
		return res.status(401).send({ error: "Access denied. No token provided." });

	try {
		const payload = helpers.verifyToken(token);
		if (!payload.isAdmin)
			return res.status(403).json({ error: "Access denied." });
		return next();
	} catch (err) {
		return res.status(400).send({ error: "Invalid token." });
	}
};

module.exports = {
	requireAuth,
	requireAdmin,
};
