const peopleRoute = require("./peopleRoute");
const cohortRoute = require("./cohortRoute");
const levelRoute = require("./levelRoute");
const enrollmentRoute = require("./enrollmentRoute");

module.exports = (app) => {
  app.use(peopleRoute);
  app.use(cohortRoute);
  app.use(levelRoute);
  app.use(enrollmentRoute);
};
