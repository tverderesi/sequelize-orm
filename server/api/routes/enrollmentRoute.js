const express = require("express");
const router = express.Router();
const EnrollmentController = require("../controllers/EnrollmentController");

// Get all enrollments
router.get("/enrollments", EnrollmentController.getEnrollments);

// Get enrollment by ID
router.get("/enrollments/:id", EnrollmentController.getEnrollmentById);

// Create a new enrollment
router.post("/enrollments", EnrollmentController.createEnrollment);

// Update an enrollment
router.put("/enrollments/:id", EnrollmentController.updateEnrollment);

// Delete an enrollment
router.delete("/enrollments/:id", EnrollmentController.deleteEnrollment);

module.exports = router;
