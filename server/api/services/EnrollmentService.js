const sequelize = require("sequelize");
const { Enrollment, Cohort, sequelize } = require("../models");

class EnrollmentService {
  static async getFullCohorts() {
    const transaction = await sequelize.transaction();
    try {
      const response = await Enrollment.findAll({
        attributes: [
          "cohort_id",
          [sequelize.fn("COUNT", sequelize.col("*")), "count"],
          [sequelize.literal("cohort.maxSize"), "maxSize"],
          [sequelize.literal("COUNT(*) > cohort.maxSize"), "isOverCapacity"],
        ],
        where: {
          status: "confirmed",
        },
        include: {
          model: Cohort,
          as: "cohort",
          attributes: [],
        },
        group: ["cohort_id", "cohort.maxSize"],
        having: sequelize.literal("COUNT(*) > cohort.maxSize"),
        transaction,
      });

      await transaction.commit();
      return response;
    } catch (error) {
      await transaction.rollback();
      throw new Error(error.stack);
    }
  }
  static async getAllEnrollments() {
    try {
      const enrollments = await Enrollment.findAll();
      return enrollments;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getEnrollmentById(id) {
    try {
      const enrollment = await Enrollment.findOne({
        where: { id: Number(id) },
      });
      return enrollment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getEnrollmentByPersonId(personId) {
    try {
      const enrollment = await Enrollment.findOne({
        where: { personId: Number(personId) },
      });
      return enrollment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getEnrollmentsByCohortId(cohortId) {
    try {
      const enrollments = await Enrollment.findAll({
        where: { cohortId: Number(cohortId) },
      });
      return enrollments;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createEnrollment(enrollmentData) {
    try {
      const createdEnrollment = await Enrollment.create(enrollmentData);
      return createdEnrollment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteEnrollment(id) {
    try {
      await Enrollment.destroy({
        where: { id: Number(id) },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateEnrollment(id, updatedData) {
    try {
      await Enrollment.update(updatedData, {
        where: { id: Number(id) },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async restoreEnrollment(id) {
    try {
      const restoredEnrollment = await Enrollment.restore({
        where: { id: Number(id) },
        individualHooks: true,
      });

      return restoredEnrollment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async restoreEnrollmentByPersonId(personId) {
    try {
      const restoredEnrollment = await Enrollment.restore({
        where: { personId: Number(personId) },
        individualHooks: true,
      });

      return restoredEnrollment;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = EnrollmentService;
