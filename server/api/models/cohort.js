'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cohort = sequelize.define('Cohort', {
    start_date: DataTypes.DATE,
    level_id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER
  }, {});
  Cohort.associate = function(models) {
    // associations can be defined here
  };
  return Cohort;
};