const express = require("express");
const router = express.Router();
const CohortController = require("../controllers/CohortController");

// GET all cohorts
router.get("/cohorts", CohortController.getCohorts);

//GET all cohorts max size
router.get("/cohorts/max-size", CohortController.getAllCohortsMaxSize);

// GET cohort max size
router.get("/cohorts/:id/max-size", CohortController.getCohortMaxSize);

//GET full cohorts
router.get("/cohorts/full", CohortController.getFullCohorts);

// GET cohort by ID
router.get("/cohorts/:id", CohortController.getCohortById);

// GET cohorts by level ID
router.get("/cohorts/level/:id", CohortController.getCohortsByLevelId);

// GET cohorts by teacher ID
router.get("/cohorts/teacher/:id", CohortController.getCohortsByTeacherId);

// Create a new cohort
router.post("/cohorts", CohortController.createCohort);

// Delete a cohort
router.delete("/cohorts/:id", CohortController.deleteCohort);

// Update a cohort
router.put("/cohorts/:id", CohortController.updateCohort);

//Restore a cohort
router.patch("/cohorts/:id/restore", CohortController.restoreCohort);

module.exports = router;
