"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("Cohorts", "deletedAt", {
        type: Sequelize.DATE,
        allowNull: true,
      })
      .then(() => {
        return queryInterface.changeColumn("Cohorts", "level_id", {
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: "SET NULL",
          references: {
            model: "Levels",
            key: "id",
          },
          onUpdate: "CASCADE",
        });
      })
      .then(() => {
        return queryInterface.changeColumn("Cohorts", "teacher_id", {
          type: Sequelize.INTEGER,
          allowNull: true,
          onDelete: "SET NULL",
          references: {
            model: "People",
            key: "id",
          },
          onUpdate: "CASCADE",
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn("Cohorts", "deletedAt")
      .then(() => {
        return queryInterface.changeColumn("Cohorts", "level_id", {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: null,
          references: {
            model: "Levels",
            key: "id",
          },
          onUpdate: "CASCADE",
        });
      })
      .then(() => {
        return queryInterface.changeColumn("Cohorts", "teacher_id", {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: null,
          references: {
            model: "People",
            key: "id",
          },
          onUpdate: "CASCADE",
        });
      });
  },
};
