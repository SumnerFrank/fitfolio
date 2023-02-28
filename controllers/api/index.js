const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;