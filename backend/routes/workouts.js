// Variables
const express = require("express");
const workout = require("../models/workoutModel");
const router = express.Router();

// Routes
router.get("/", (request, response) => {
    response.send("Getting workouts list");
})

router.get("/:id", (request, response) => {
    response.send("Getting a single workout");
})

router.post("/", async (request, response) => {
    const {title, reps, load, set} = request.body;
    try{
        const newWorkout = await workout.create({title, reps, load, set});
        console.log(newWorkout);
        newWorkout.save();
    }catch(error){
        console.log(error);
    }
    response.send("Creating a new workout");
})

router.patch("/:id", (request, response) => {
    response.send("Updating a workout");
})

router.delete("/:id", (request, response) => {
    response.send("Deleting a workout");
})

// Export
module.exports = router
