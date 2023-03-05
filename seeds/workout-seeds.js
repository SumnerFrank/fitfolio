const {Workout} = require("../models");

const workoutdata = [
  
    // day: new Date().setDate(new Date().getDate()-10),
    
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      },
  
  
  
    // day: new Date().setDate(new Date().getDate()-9),
   
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      },
    
  
  
    // day: new Date().setDate(new Date().getDate()-8),
    
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      },
  
  
  
    // day: new Date().setDate(new Date().getDate()-7),
    
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      },
  
  
  
    // day: new Date().setDate(new Date().getDate()-6),
    
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4
      },
  
  
    // day: new Date().setDate(new Date().getDate()-5),
   
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      },
    
  
  
    // day: new Date().setDate(new Date().getDate()-4),
   
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4
      },
  
    // day: new Date().setDate(new Date().getDate()-3),
 
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      },
    

    // day: new Date().setDate(new Date().getDate()-2),

      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      },
 
 
  
    // day: new Date().setDate(new Date().getDate()-1),
    
      {
        type: "cardio",
        name: "Bench",
        duration: 30,
        distance: 2
      },
];



// db.Workout.deleteMany({})
//   .then(() => db.Workout.collection.insertMany(seedWorkouts))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

const seedWorkouts = () => Workout.bulkCreate(workoutdata);

module.exports = seedWorkouts;

