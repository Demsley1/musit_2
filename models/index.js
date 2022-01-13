const Playlist = require('./Playlist');
const User = require('./User');

// create associations
User.hasMany(Playlist, {
    foreignKey: 'user_id'
});

Playlist.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});



module.exports = { Playlist, User };