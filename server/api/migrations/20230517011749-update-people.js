"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("People", "deletedAt", {
        type: Sequelize.DATE,
        allowNull: true,
      })
      .then(() => {
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
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("People", "deletedAt").then(() => {
      return queryInterface.removeConstraint(
        "Enrollments",
        "Enrollments_student_id_fkey"
      );
    });
  },
};
