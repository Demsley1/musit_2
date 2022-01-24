const Music = require('./Music');
const User = require('./User');
const Playlist = require('./Playlist');
const Comments = require('./Comments')

// create associations
User.hasMany(Playlist, {
    foreignKey: 'user_id'
});


Playlist.belongsTo(User, {
    foreignKey: 'user_id'
});

// User and Playlist are associated to Music as a One to Many
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

// Playlist and User are associated to Comments as a One to Many as well
Playlist.hasMany(Comments, {
    foreignKey: 'playlist_id'
});

Comments.belongsTo(Playlist, {
    foreignKey: 'playlist_id'
});

User.hasMany(Comments, {
    foreignKey: 'user_id'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Music, Playlist, User , Comments }