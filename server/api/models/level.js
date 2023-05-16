"use strict";
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define(
    "Level",
    {
      descr_level: DataTypes.STRING,
    },
    {
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      tableName: "Levels",
    }
  );
  Level.associate = function (models) {
    // associations can be defined here
  };
  return Level;
};
