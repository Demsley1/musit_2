const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Playlist extends Model {
    // upvote method
    static upvote(body, models) {
        return models.Vote.create({
            playlist_id: body.playlist_id,
            user_id: body.user_id            
        }).then(() => {
            return Playlist.findOne({
                where: {
                    id: body.playlist_id
                },
                attributes: ['id', 'title', 'user_id',
                    [
                        sequelize.literal('(SELECT COUNT(*) FROM vote WHERE playlist.id = vote.playlist_id)'),
                        'vote_count'
                    ]
                ]
            })
        })
    }
};

Playlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [2]
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
        modelName: 'playlist'
    },
);

module.exports = Playlist;