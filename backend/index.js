const express = require("express");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());

app.listen(process.env.PORT, () =>
	console.log(`Server started on port ${process.env.PORT}...`)
);
