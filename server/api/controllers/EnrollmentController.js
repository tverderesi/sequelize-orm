const database = require("../models");

class EnrollmentController {
  static async getEnrollments(req, res) {
    try {
      const response = await database.Enrollment.findAll();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getEnrollmentById(req, res) {
    const { id } = req.params;
    try {
      const response = await database.Enrollment.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async createEnrollment(req, res) {
    const newEnrollment = req.body;
    try {
      const createdEnrollment = await database.Enrollment.create(newEnrollment);
      return res.status(201).json(createdEnrollment);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteEnrollment(req, res) {
    const { id } = req.params;
    try {
      await database.Enrollment.destroy({
        where: { id: Number(id) },
      });
      return res
        .status(200)
        .json({ message: "Enrollment deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updateEnrollment(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      await database.Enrollment.update(newData, {
        where: { id: Number(id) },
      });
      return res
        .status(200)
        .json({ message: "Enrollment updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = EnrollmentController;
