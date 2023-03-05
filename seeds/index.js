const seedWorkouts = require('./workout-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedWorkouts();
  console.log('\n----- WORKOUTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
