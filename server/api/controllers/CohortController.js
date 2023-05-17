const database = require("../models");

class CohortController {
  static async getCohorts(req, res) {
    try {
      const response = await database.Cohort.findAll();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async getCohortById(req, res) {
    const { id } = req.params;
    try {
      const response = await database.Cohort.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async getCohortsByLevelId(req, res) {
    const { id } = req.params;
    try {
      const response = await database.Cohort.findAll({
        where: { level_id: Number(id) },
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async getCohortsByTeacherId(req, res) {
    const { id } = req.params;
    try {
      const response = await database.Cohort.findAll({
        where: { teacher_id: Number(id) },
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async getAllCohortsMaxSize(req, res) {
    try {
      const response = await database.Cohort.findAll({
        attributes: ["id", "maxSize"],
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async getCohortMaxSize(req, res) {
    const { id } = req.params;
    try {
      const response = await database.Cohort.findOne({
        where: { id: Number(id) },
        attributes: ["id", "maxSize"],
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async getFullCohorts(req, res) {
    const maxSize = await CohortController.getAllCohortsMaxSize();
    console.log(maxSize);
    try {
      const response = await database.Cohort.findAndCountAll({
        where: { status: "confirmed" },
        include: ["cohortId"],
        group: ["cohortId"],
        having: database.Sequelize.literal("count(*) >= maxSize"),
      });
      return res.status(200).json(response.count);
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }
  static async createCohort(req, res) {
    const newCohort = req.body;
    try {
      const createdCohort = await database.Cohort.create(newCohort);
      return res.status(201).json(createdCohort);
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async deleteCohort(req, res) {
    const { id } = req.params;
    try {
      await database.Cohort.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: "Cohort deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async updateCohort(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      await database.Cohort.update(newData, {
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: "Cohort updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async restoreCohort(req, res) {
    const { id } = req.params;
    try {
      const cohort = await database.Cohort.restore({
        where: { id: Number(id) },
      });

      if (!cohort) {
        return res.status(404).json({ message: "Cohort not found" });
      }

      return res.status(200).json({ message: "Cohort restored successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }
}

module.exports = CohortController;
