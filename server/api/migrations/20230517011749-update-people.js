"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Enrollments", {
      fields: ["student_id"],
      type: "foreign key",
      references: {
        table: "People",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      "Enrollments",
      "Enrollments_student_id_fkey"
    );
  },
};
