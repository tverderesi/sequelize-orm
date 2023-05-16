const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router.get("/people", PersonController.getPeople);
router.get("/person/:id", PersonController.getPerson);
router.patch("/people/:id", PersonController.updatePerson);
router.delete("/people/:id", PersonController.deletePerson);
router.post("/people", PersonController.createPerson);

module.exports = router;
