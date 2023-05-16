"use strict";
module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define(
    "Enrollment",
    {
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cohort_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "Enrollments",
    }
  );

  // Define associations if needed
  Enrollment.associate = (models) => {
    Enrollment.belongsTo(models.Cohort, {
      foreignKey: "cohort_id",
      as: "cohort",
    });
    Enrollment.belongsTo(models.People, {
      foreignKey: "student_id",
      as: "people",
    });
  };

  return Enrollment;
};
