// Variables
const express = require("express");
const workout = require("../models/workoutModel");
const router = express.Router();
const {getworkouts, getworkout, createWorkout, updateWorkout, deleteWorkout} = require("../controllers/workoutController");

// Routes
router.get("/", getworkouts)

router.get("/:id", getworkout)

router.post("/", createWorkout)

router.patch("/:id", updateWorkout)

router.delete("/:id", deleteWorkout)

// Export
module.exports = router;
