const compression = require("compression");
const express = require("express");
const helmet = require("helmet");

const app = express();
const auth = require("./routes/auth");
const categories = require("./routes/categories");
const listings = require("./routes/listings");
const messages = require("./routes/messages");
const users = require("./routes/users");

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/categories", categories);
app.use("/api/listings", listings);
app.use("/api/messages", messages);
app.use("/api/users", users);

app.listen(process.env.PORT, () =>
	console.log(`Server started on port ${process.env.PORT}...`)
);
