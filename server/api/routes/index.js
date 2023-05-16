const peopleRoute = require("./peopleRoute");
const cohortRoute = require("./cohortRoute");
module.exports = (app) => {
  app.use(peopleRoute);
  app.use(cohortRoute);
};
