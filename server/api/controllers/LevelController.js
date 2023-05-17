const database = require("../models");

class LevelController {
  static async getLevels(req, res) {
    try {
      const response = await database.Level.findAll();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getLevelById(req, res) {
    const { id } = req.params;
    try {
      const response = await database.Level.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async createLevel(req, res) {
    const newLevel = req.body;
    try {
      const createdLevel = await database.Level.create(newLevel);
      return res.status(201).json(createdLevel);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Level.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: "Level deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      await database.Level.update(newData, {
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: "Level updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async restoreLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Level.restore({
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: "Level restored successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = LevelController;
