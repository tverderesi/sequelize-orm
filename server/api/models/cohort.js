"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cohort = sequelize.define(
    "Cohort",
    {
      start_date: DataTypes.DATE,
      level_id: DataTypes.INTEGER,
      teacher_id: DataTypes.INTEGER,
    },
    {}
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
