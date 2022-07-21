//Imports the dotenv library allowing us to access environmental variables from .env
require('dotenv').config();

/**
 * To set up backend, navigate to the backend folder on the terminal and then
 * run the command 'npm init -y' to initiate the backend. This creates a package.json
 * file which allows us to add new dependencies.
 */

//First we need to require the express package
const express = require('express');

//Connect mongoose to manage relationships betweenn data, provides schema validation
//and interacts between the objects in code and the representation of those objects in MongoDB
const mongoose = require('mongoose');

//We can import other files by specifying the location in the require() function
const workoutRoutes = require('./routes/workout')

//Start up the express app
const app = express();

//Middleware
//Use express json to detect and parse in JSON payloads
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
    
});

//Uses the imported route from other files when we fire a request to the api
app.use('/api/workouts', workoutRoutes)

//Connect to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //Listen for requests (i.e. listen to a port number). If port number is detected, fire off the 
        //function inside. To detect this port, go to localhost:4000.
        //which is to print the message. We have stored the PORT=4000 in the .env file.
        app.listen(process.env.PORT, () => {
            console.log('connnected to the db and listening on port', process.env.PORT)
        });
    })
    .catch((error) => {
        console.log(error)
    })


/**
 * Use the following command nodemon server.js to start the node application.
 * This tool allows the application to be refreshed whenever there are changes in 
 * the code.
 */

