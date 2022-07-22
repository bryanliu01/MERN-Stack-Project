const { json } = require('express')
const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//Get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}


//Get a single workout
const getWorkout = async (req, res) => {
    //Get current id of the request
    const {id} = req.params
    
    //Check if req id is valid as a 12 byte string or 24 hex character string or an integer
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    //Otherwise if id is valid, then we find the id in the data model
    const workout = await Workout.findById(id)

    //If workout does not exist, display error message
    if (!workout) {
        return res.status(404)/json({error: 'No such workout'})
    }

    //Else display success message
    res.status(200).json(workout)

}

//Create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    //Add document to database
    //Asynchronous function
    try {
        
        //This handler will wait until a new Workout instance can be created
        //before continuing with the execution of the code
        const workout = await Workout.create({title, load, reps})
        
        //Send sucess status message of workout
        res.status(200).json(workout)
    }
    catch (error) {
        //If error has occured, show error status messsage
        res.status(400).json({error: error.message})
    }
}

//Delete a workout
const deleteWorkout = async (req, res) => {
    //Get id
    const {id} = req.params

    //Check if req id is valid as a 12 byte string or 24 hex character string or an integer
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    //In mongoose, the name used is _id rather than id. We assign _id = id
    const workout = await Workout.findOneAndDelete({_id: id})

    //If workout does not exist send error message
    if (!workout) {
        return res.status(400)/json({error: 'No such workout'})
    }
    //Else send success message and show the workout that is deleted
    res.status(200).json(workout)

}

//Update a workout
const updateWorkout = async(req, res) => {
    //Get id
    const {id} = req.params

    //Check if req id is valid as a 12 byte string or 24 hex character string or an integer
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    //Find the specificed id and update
    const workout = await Workout.findOneAndUpdate({_id: id}, {
        //Triple dot operator (spread operator) allows us to copy part or all
        //of an iterable object quickly
        ...req.body
    })

    //If workout does not exist send error message
    if (!workout) {
        return res.status(400)/json({error: 'No such workout'})
    }
    //Else send success message and show the workout that is updated
    res.status(200).json(workout)
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}