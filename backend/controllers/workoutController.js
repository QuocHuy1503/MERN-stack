const { response } = require("express");
const Workout = require("../models/workoutModel");

const getworkouts = async (request, response ) => {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    response.status(200).json(workouts);

}

const getworkout = async (request, response) => {
    try{
        const { id } = request.params;
        const getSingleWorkout = await Workout.findById(id);
        response.status(200).json(getSingleWorkout);
    }catch(error){
        if(error.kind === 'ObjectId'){
            return response.status(404).json({ error: 'Workout not found' });
        }
        response.status(400).json({ error: error.message });
    }
}

const createWorkout = async (request, response) => {
    const { title, reps, load, set } = request.body;
    try{
        const workout = await Workout.create({ title, reps, load, set });
        response.status(200).json(workout);
    }catch(error){
        response.status(400).json({ error: error.message });
    }
}

const updateWorkout = async (request, response) => {
    const {id} = request.params;
    const { title, reps, load, set } = request.body;
    try{
        const updateWorkout = await Workout.findByIdAndUpdate(id, { title, reps, load, set });
        response.status(200).json(updateWorkout);
    }catch(error){
        if(error.kind === 'ObjectId'){
            return response.status(404).json({ error: 'Workout not found' });
        }
        response.status(400).json({ error: error.message });
    }
}

const deleteWorkout = async (request, response) => {
    const {id} = request.params;
    try{
        const deletedWorkout = await Workout.findByIdAndDelete(id);
        response.status(200).json(deletedWorkout);
    }catch(error){
        if(error.kind === 'ObjectId'){
            return response.status(404).json({ error: 'Workout not found' });
        }
        response.status(400).json({ error: error.message });
    }
}

module.exports = {
    getworkouts,
    getworkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}