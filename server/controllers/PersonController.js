const database = require("../api/models");

class PessoaController {
  static async getPeople(req, res) {
    try {
      const response = await database.People.findAll();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PessoaController;
