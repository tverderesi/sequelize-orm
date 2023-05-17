module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Enrollments",
      [
        {
          status: "confirmed",
          student_id: 1,
          cohort_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "confirmed",
          student_id: 2,
          cohort_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "confirmed",
          student_id: 3,
          cohort_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "confirmed",
          student_id: 4,
          cohort_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "cancelled",
          student_id: 1,
          cohort_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status: "cancelled",
          student_id: 2,
          cohort_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Enrollments", null, {});
  },
};
