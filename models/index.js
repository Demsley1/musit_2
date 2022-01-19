const Music = require('./Music');
const User = require('./User');
const Playlist = require('./Playlist');

// create associations
User.hasMany(Playlist, {
    foreignKey: 'user_id'
});

// Playlist will become a through table
Playlist.belongsToMany(User, {
    foreignKey: 'user_id'
});

Playlist.hasMany(Music, {
    foreignKey: 'playlist_id'
});

Music.belongsToMany(Playlist, {
    foreignKey: 'playlist_id'
});


module.exports = { Music, Playlist, User };