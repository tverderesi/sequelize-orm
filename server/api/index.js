const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv").config();

const app = express();
const routes = require("./routes");
app.use(bodyParser.json());

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);

routes(app);
module.exports = app;
