const router = require("express").Router();
const path = require("path");
const withAuth = require('../../utils/auth');
// const db =require('../../models');


// // router.get("/", (req, res) => {
// //     res.sendFile(path.join(__dirname, "../public/index.html"));
// // });

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "views/exercise.handlebars"));
});

// db.Workout.find({}).then(function (res) {
//     console.log("Checking if db is populated");
//     if (res.length === 0) {
//         console.log("DB is empty");
//         require("./seeds/index.js");
//     }
// });

// //get workouts
// router.get("/api/workouts", (req, res) => {

//     db.Workout.find({}).then(dbWorkout => {
//         // console.log("ALL WORKOUTS");
//         // console.log(dbWorkout);
//         dbWorkout.forEach(workout => {
//             var total = 0;
//             workout.exercises.forEach(e => {
//                 total += e.duration;
//             });
//             workout.totalDuration = total;

//         });

//         res.json(dbWorkout);
//     }).catch(err => {
//         res.json(err);
//     });
// });

// // add exercise
// router.put("/api/workouts/:id", (req, res) => {

//     db.Workout.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//             $inc: { totalDuration: req.body.duration },
//             $push: { exercises: req.body }
//         },
//         { new: true }).then(dbWorkout => {
//             res.json(dbWorkout);
//         }).catch(err => {
//             res.json(err);
//         });

// });

// //create workout
// router.post("/api/workouts", ({ body }, res) => {
//     // console.log("WORKOUT TO BE ADDED");
//     // console.log(body);

//     db.Workout.create(body).then((dbWorkout => {
//         res.json(dbWorkout);
//     })).catch(err => {
//         res.json(err);
//     });
// });

// // get workouts in range
// router.get("/api/workouts/range", (req, res) => {

//     db.Workout.find({}).then(dbWorkout => {
//         console.log("ALL WORKOUTS");
//         console.log(dbWorkout);

//         res.json(dbWorkout);
//     }).catch(err => {
//         res.json(err);
//     });

// });

// router.get("/stats", (req, res) => {
//     res.sendFile(path.join(__dirname, "stats"));
// });


module.exports = router;