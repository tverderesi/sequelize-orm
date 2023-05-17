const express = require("express");
const router = express.Router();
const LevelController = require("../controllers/LevelController");

// GET all Levels
router.get("/levels", LevelController.getLevels);

// GET Level by ID
router.get("/levels/:id", LevelController.getLevelById);

// Create a new Level
router.post("/levels", LevelController.createLevel);

// Delete a Level
router.delete("/levels/:id", LevelController.deleteLevel);

// Update a Level
router.put("/levels/:id", LevelController.updateLevel);

// Restore a Level
router.patch("/levels/:id/restore", LevelController.restoreLevel);

module.exports = router;
