//Import the express package
const express = require('express');

//Create an instancce of a router
const router = express.Router();

//Router handler, this will fire when the URL is equal to this
//GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
});

//GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
});

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
});

//DELETEa new workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
});

//UPDATE a new workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
});

module.exports = router;