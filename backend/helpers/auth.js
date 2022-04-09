const jwt = require("jsonwebtoken");

const generateToken = (user) => {
	return jwt.sign(
		{ userId: user.id, name: user.name, email: user.email },
		process.env.JWT_PRIVATE_KEY
	);
};

const getToken = (req) => req.header("x-auth-token");

const verifyToken = (token) => {
	return jwt.verify(token, process.env.JWT_PRIVATE_KEY);
};

module.exports = {
	generateToken,
	getToken,
	verifyToken,
};
