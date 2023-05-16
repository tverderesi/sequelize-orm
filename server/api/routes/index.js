const peopleRoute = require("./peopleRoute");
module.exports = (app) => {
  app.use(peopleRoute);
};
