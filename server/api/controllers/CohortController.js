const database = require("../models");

class CohortController {
  static async getCohorts(req, res) {
    try {
      const response = await database.Cohorts.findAll();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async getCohortById(req, res) {
    const { id } = req.params;
    try {
      const response = await database.Cohorts.findOne({
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
      const response = await database.Cohorts.findOne({
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
      const response = await database.Cohorts.findOne({
        where: { teacher_id: Number(id) },
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async createCohort(req, res) {
    const newCohort = req.body;
    try {
      const createdCohort = await database.Cohorts.create(newCohort);
      return res.status(201).json(createdCohort);
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }

  static async deleteCohort(req, res) {
    const { id } = req.params;
    try {
      await database.Cohorts.destroy({
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
      await database.Cohorts.update(newData, {
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: "Cohort updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.stack });
    }
  }
}

module.exports = CohortController;
