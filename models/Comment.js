const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model {}
 
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          comment_body: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          post_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                model: 'post',
                key: 'id'
            },
            onDelete: 'cascade'
          }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment'
    }
)

module.exports = Comment; 