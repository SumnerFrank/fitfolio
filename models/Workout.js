const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING,
    
      },
      name: {
        type: DataTypes.STRING,
        // default: 'Workout',
        // allowNull: false
      },
      duration: {
        type: DataTypes.INTEGER,
      },
      weight: {
        type: DataTypes.INTEGER,
        default: null,
      },
      reps: {
        type: DataTypes.INTEGER,
        default: null,
      },
      sets: {
        type: DataTypes.INTEGER,
        default: 0,
      },
      distance: {
        type: DataTypes.INTEGER,
        default: 0,
      },
  totalDuration: {
    type: DataTypes.INTEGER,
    default: 0,
  },
  // created_at: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   defaultValue: DataTypes.NOW
  // } 
  // TO DO : TEST DATES AFTER SEEDING!!!
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'workout',
  });

module.exports = Workout;