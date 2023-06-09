const database = require("../models");

class PersonController {
  static async getPeople(req, res) {
    try {
      const response = await database.People.findAll();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async getPerson(req, res) {
    const { id } = req.params;
    try {
      const response = await database.People.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const createdPerson = await database.People.create(newPerson);
      return res.status(201).json(createdPerson);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async deletePerson(req, res) {
    const { id } = req.params;
    try {
      await database.People.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: "Person deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async updatePerson(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      await database.People.update(newData, {
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: "Person updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async restorePerson(req, res) {
    const { id } = req.params;
    try {
      await database.People.restore({
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: "Person restored successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getEnrollmentsByPersonId(req, res) {
    const { studentId } = req.params;
    try {
      const response = await database.Enrollment.findAll({
        where: { student_id: Number(studentId) },
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async removeEnrollmentByPersonIdAndEnrollmentId(req, res) {
    const { studentId, enrollmentId } = req.params;
    try {
      await database.Enrollment.destroy({
        where: { id: Number(enrollmentId), student_id: Number(studentId) },
      });
      return res
        .status(200)
        .json({ message: "Enrollment removed successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PersonController;
