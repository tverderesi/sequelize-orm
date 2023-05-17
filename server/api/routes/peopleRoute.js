const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

// GET all people
router.get("/people", PersonController.getPeople);

// GET person by ID
router.get("/person/:id", PersonController.getPerson);

// Update a person
router.put("/people/:id", PersonController.updatePerson);

// Delete a person
router.delete("/people/:id", PersonController.deletePerson);

// Restore a person
router.post("/people", PersonController.createPerson);

// Restore a person
router.patch("/people/:id/restore", PersonController.restorePerson);

// Get Enrollments by Person ID
router.get(
  "/people/:id/enrollments",
  PersonController.getEnrollmentsByPersonId
);

// Remove Enrollment by Person ID and Enrollment ID
router.delete(
  "/people/:id/enrollments/:enrollmentId",
  PersonController.removeEnrollmentByPersonIdAndEnrollmentId
);

module.exports = router;
