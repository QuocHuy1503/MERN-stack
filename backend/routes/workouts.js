// Variables
const express = require("express");
const router = express.Router();

// Routes
router.get("/", (request, response) => {
    response.send("Getting workouts list");
})

router.get("/:id", (request, response) => {
    response.send("Getting a single workout");
})

router.post("/", (request, response) => {
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
