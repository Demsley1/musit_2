const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Song data model
class Music extends Model {}

// create fields/columns for Music model
Music.init(
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
    playlist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'playlist',
        key: 'id'
      }
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
    modelName: 'music'
  }
);

module.exports = Music;
