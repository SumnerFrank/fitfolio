const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const Workout = require('./Workout');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Workout.belongsTo(User, {
    foreignKey: 'user_id'
});

Workout.hasMany(Comment, {
    foreignKey: 'workout_id'
});


module.exports = { User, Comment, Post, Workout };