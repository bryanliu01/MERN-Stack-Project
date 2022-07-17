/**
 * To set up backend, navigate to the backend folder on the terminal and then
 * run the command 'npm init -y' to initiate the backend. This creates a package.json
 * file which allows us to add new dependencies.
 */

//First we need to require the express package
const express = require('express');

//Start up the express app
const app = express();

//React to requests using a route handler
app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the app"})
});

//Listen for requests (i.e. listen to a port number)
//If port number is detected, fire off the function inside
//which is to print the message.
app.listen(4000, () => {
    console.log('listening on port 4000!')
});

/**
 * Use the following command nodemon server.js to start the node application.
 * This tool allows the application to be refreshed whenever there are changes in 
 * the code.
 */