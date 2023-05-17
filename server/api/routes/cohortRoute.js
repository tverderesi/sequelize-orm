const express = require("express");
const router = express.Router();
const CohortService = require("../services/CohortService");

// GET all cohorts
router.get("/cohorts", async (req, res) => {
  try {
    const cohorts = await CohortService.getCohorts();
    return res.status(200).json(cohorts);
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
});

// GET all cohorts max size
router.get("/cohorts/max-size", async (req, res) => {
  try {
    const cohorts = await CohortService.getAllCohortsMaxSize();
    return res.status(200).json(cohorts);
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
});

// GET cohort max size
router.get("/cohorts/:id/max-size", async (req, res) => {
  const { id } = req.params;
  try {
    const cohort = await CohortService.getCohortMaxSize(id);
    return res.status(200).json(cohort);
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
});

// GET full cohorts
router.get("/cohorts/full", async (req, res) => {
  try {
    const cohorts = await CohortService.getFullCohorts();
    return res.status(200).json(cohorts);
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
});

// GET cohort by ID
router.get("/cohorts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cohort = await CohortService.getCohortById(id);
    return res.status(200).json(cohort);
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
});

// GET cohorts by level ID
router.get("/cohorts/level/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cohorts = await CohortService.getCohortsByLevelId(id);
    return res.status(200).json(cohorts);
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
});

// GET cohorts by teacher ID
router.get("/cohorts/teacher/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cohorts = await CohortService.getCohortsByTeacherId(id);
    return res.status(200).json(cohorts);
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
});

// Create a new cohort
router.post("/cohorts", async (req, res) => {
  const newCohort = req.body;
  try {
    const createdCohort = await CohortService.createCohort(newCohort);
    return res.status(201).json(createdCohort);
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
});

// Delete a cohort
router.delete("/cohorts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await CohortService.deleteCohort(id);
    return res.status(200).json({ message: "Cohort deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
});

// Update a cohort
router.put("/cohorts/:id", async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    await CohortService.updateCohort(id, newData);
    return res.status(200).json({ message: "Cohort updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
});

// Restore a cohort
router.patch("/cohorts/:id/restore", async (req, res) => {
  const { id } = req.params;
  try {
    await CohortService.restoreCohort(id);
    return res.status(200).json({ message: "Cohort restored successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.stack });
  }
});

module.exports = router;
