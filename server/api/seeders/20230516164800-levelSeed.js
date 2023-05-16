"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Levels",
      [
        {
          descr_level: "starter",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_level: "intermediate",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_level: "advanced",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Levels", null, {});
  },
};
