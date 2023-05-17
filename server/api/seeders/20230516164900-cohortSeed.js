"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Cohorts",
      [
        {
          start_date: "2020-02-01",
          level_id: 1,
          teacher_id: 6,
          maxSize: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: "2020-02-01",
          level_id: 2,
          teacher_id: 5,
          maxSize: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: "2020-02-01",
          level_id: 3,
          teacher_id: 6,
          maxSize: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          start_date: "2020-07-01",
          level_id: 3,
          teacher_id: 6,
          maxSize: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cohorts", null, {});
  },
};
