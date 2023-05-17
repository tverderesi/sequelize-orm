const express = require("express");
const router = express.Router();
const cohortController = require("../controllers/CohortController");

// GET all cohorts
router.get("/cohorts", cohortController.getCohorts);

// GET cohort by ID
router.get("/cohorts/:id", cohortController.getCohortById);

// GET cohorts by level ID
router.get("/cohorts/level/:id", cohortController.getCohortsByLevelId);

// GET cohorts by teacher ID
router.get("/cohorts/teacher/:id", cohortController.getCohortsByTeacherId);

// Create a new cohort
router.post("/cohorts", cohortController.createCohort);

// Delete a cohort
router.delete("/cohorts/:id", cohortController.deleteCohort);

// Update a cohort
router.put("/cohorts/:id", cohortController.updateCohort);

//Restore a cohort
router.patch("/cohorts/:id/restore", cohortController.restoreCohort);

module.exports = router;
