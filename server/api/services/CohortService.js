const { Cohort, sequelize } = require("../models");

class CohortService {
  static async getAllCohorts() {
    try {
      return await Cohort.findAll();
    } catch (error) {
      throw new Error(error.stack);
    }
  }

  static async getCohortById(id) {
    try {
      return await Cohort.findOne({
        where: { id: Number(id) },
      });
    } catch (error) {
      throw new Error(error.stack);
    }
  }

  static async getCohortsByLevelId(id) {
    try {
      return await Cohort.findAll({
        where: { level_id: Number(id) },
      });
    } catch (error) {
      throw new Error(error.stack);
    }
  }

  static async getCohortsByTeacherId(id) {
    try {
      return await Cohort.findAll({
        where: { teacher_id: Number(id) },
      });
    } catch (error) {
      throw new Error(error.stack);
    }
  }

  static async getAllCohortsMaxSize() {
    try {
      return await Cohort.findAll({
        attributes: ["id", "maxSize"],
      });
    } catch (error) {
      throw new Error(error.stack);
    }
  }

  static async getCohortMaxSize(id) {
    try {
      return await Cohort.findOne({
        where: { id: Number(id) },
        attributes: ["id", "maxSize"],
      });
    } catch (error) {
      throw new Error(error.stack);
    }
  }

  static async createCohort(newCohort) {
    const transaction = await sequelize.transaction();
    try {
      const createdCohort = await Cohort.create(newCohort, { transaction });
      await transaction.commit();
      return createdCohort;
    } catch (error) {
      await transaction.rollback();
      throw new Error(error.stack);
    }
  }

  static async deleteCohort(id) {
    const transaction = await sequelize.transaction();
    try {
      await Cohort.destroy({
        where: { id: Number(id) },
        transaction,
      });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw new Error(error.stack);
    }
  }

  static async updateCohort(id, newData) {
    const transaction = await sequelize.transaction();
    try {
      await Cohort.update(newData, {
        where: { id: Number(id) },
        transaction,
      });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw new Error(error.stack);
    }
  }

  static async restoreCohort(id) {
    const transaction = await sequelize.transaction();
    try {
      const cohort = await Cohort.restore({
        where: { id: Number(id) },
        transaction,
      });

      if (!cohort) {
        await transaction.rollback();
        throw new Error("Cohort not found");
      }

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw new Error(error.stack);
    }
  }
}

module.exports = CohortService;
