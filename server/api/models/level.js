"use strict";
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define(
    "Level",
    {
      descr_level: { type: DataTypes.STRING, allowNull: false },
      deletedAt: { type: DataTypes.DATE, allowNull: true },
    },
    {
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      tableName: "Levels",
      paranoid: true,
      defaultScope: {
        where: { deletedAt: null },
      },
    }
  );

  Level.associate = function (models) {
    Level.hasMany(models.Cohort, {
      foreignKey: "level_id",
      as: "cohorts",
    });
  };

  return Level;
};
