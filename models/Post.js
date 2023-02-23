const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          post_title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          post_body: {
            type: DataTypes.STRING,
            allowNull: false
          },
          user_id: {
            type: DataTypes.STRING,
            allowNull: false
          }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
)

module.exports = Post;