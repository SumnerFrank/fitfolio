const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment, Post, User, Workout } = require('../../models');

//Get all workouts
router.get('/', (req, res) => {
    Workout.findAll({
        // attributes: [
        //     'id',
        //     'type',
        //     'duration',
        //     'reps',
        //     'sets',
        //     'distance'
        // ]  TO DO: WILL SHOW ALL VALUES IF COMMENTED OUT!!!
    })
    .then(dbWorkoutData => res.json(dbWorkoutData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//get one workout
router.get('/:id', (req, res) => {
    Workout.findAll({
        attributes: [
            'id',
            'type',
            'duration',
            'reps',
            'sets',
            'distance'
        ]
    })
    .then(dbWorkoutData => {
        if (!dbWorkoutData) {
            res.status(404).json({ message: 'Comment ID Not Found.' });
            return;
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

//Create a workout
router.post('/', withAuth, (req, res) => {
    if (req.session.loggedIn) {
    Workout.create({
        type: req.body.type,
        duration: req.body.duration,
        reps: req.session.reps,
        sets: req.session.sets,
        distance: req.session.distance
    })
    .then(dbWorkoutData => res.json(dbWorkoutData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
});

//Delete a workout
router.delete('/:id', withAuth, (req, res) => {
    Workout.destroy({
        where: {id: req.params.id}
    })
    .then(dbWorkoutData => {
        if (!dbWorkoutData) {
            res.status(404).json({ message: 'No workout found with this id' });
            return;
        }
        res.json(dbWorkoutData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;