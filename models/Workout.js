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
        type: DataTypes.BOOLEAN,
      },
      duration: {
        type: DataTypes.INTEGER,
        default: 0,
        allowNull: false
      },
      reps: {
        type: DataTypes.INTEGER,
        default: 0,
        allowNull: false
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
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'workout',
  });

module.exports = Workout;