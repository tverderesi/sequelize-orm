"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cohort = sequelize.define(
    "Cohort",
    {
      start_date: { type: DataTypes.DATE, allowNull: false },
      level_id: { type: DataTypes.INTEGER, allowNull: false },
      teacher_id: { type: DataTypes.INTEGER, allowNull: false },
      deletedAt: { type: DataTypes.DATE, allowNull: true },
    },
    {
      paranoid: true,
      tableName: "Cohorts",
      defaultScope: {
        where: { deletedAt: null },
      },
    }
  );
  Cohort.associate = function (models) {
    Cohort.belongsTo(models.Level, {
      foreignKey: "level_id",
      as: "level",
    });
    Cohort.belongsTo(models.People, {
      foreignKey: "teacher_id",
      as: "teacher",
    });
  };
  return Cohort;
};
