const Music = require('./Music');
const User = require('./User');
const Playlist = require('./Playlist');
const Vote = require('./Vote');
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

// vote associations
User.belongsToMany(Playlist, {
    through: Vote,
    as: 'voted_playlist',
    foreignKey: 'user_id'
});

Playlist.belongsToMany(User, {
    through: Vote,
    as: 'voted_playlists',
    foreignKey: 'playlist_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Playlist, {
    foreignKey: 'playlist_id'
});

User.hasMany(Vote, {
    foreignKey:'user_id'
})

Playlist.hasMany(Vote, {
    foreignKey: 'playlist_id'
})

module.exports = { Music, Playlist, User, Vote };