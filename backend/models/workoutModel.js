const mongoose = require('mongoose');

//The MongoDB does not have an inbuilt schema, we will need to create one.
//Create the schema frameowrk
const Schema = mongoose.Schema

//Create a new instance of the schema object
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

//Apply schema to a model
module.exports = mongoose.model('Workout', workoutSchema)