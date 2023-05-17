"use strict";
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define(
    "People",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      active: { type: DataTypes.BOOLEAN, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, allowNull: false },
      deletedAt: { type: DataTypes.DATE, allowNull: true },
    },
    {
      paranoid: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      tableName: "People",
    }
  );
  People.associate = function (models) {
    // associations can be defined here
  };
  return People;
};
