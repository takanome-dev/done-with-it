const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const auth = require("./routes/auth");
const users = require("./routes/users");

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/users", users);

app.listen(process.env.PORT, () =>
	console.log(`Server started on port ${process.env.PORT}...`)
);
