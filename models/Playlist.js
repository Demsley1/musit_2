const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Playlist model
class Playlist extends Model {}

// create fields/columns for Post model
Playlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    song_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'playlist'
  }
);

module.exports = Playlist;
