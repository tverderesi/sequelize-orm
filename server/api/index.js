const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv").config();
const app = express();

app.use(bodyParser.json());

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);

module.exports = app;
