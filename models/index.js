const Music = require('./Music');
const User = require('./User');
const Playlist = require('./Playlist');
const { uniqueId } = require('lodash');

// create associations
User.hasMany(Playlist, {
    foreignKey: 'user_id'
});

// Playlist will become a through table
Playlist.belongsTo(User, {
    foreignKey: 'user_id'
});

Playlist.hasMany(Music, {
    foreignKey: 'playlist_id'
});

Music.belongsTo(Playlist, {
    foreignKey: 'playlist_id'
});

User.hasMany(Music, {
    foreignKey: 'user_id'
});

Music.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Music, Playlist, User };