"use strict";
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define(
    "People",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { len: [3, 70] },
      },
      active: { type: DataTypes.BOOLEAN, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      role: { type: DataTypes.STRING, allowNull: false },
      deletedAt: { type: DataTypes.DATE, allowNull: true },
    },
    {
      paranoid: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      tableName: "People",
      defaultScope: {
        where: { deletedAt: null },
      },
    }
  );
  People.associate = function (models) {
    People.hasMany(models.Enrollment, {
      foreignKey: "student_id",
      as: "enrollments",
      scope: {
        status: "confirmed",
      },
    });
  };
  return People;
};
