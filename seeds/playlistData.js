const { Playlist } = require('../models');

const playlistData = [
    {
        title: 'playlist1',
        user_id: 2
    },
    {
        title: 'playlist2',
        user_id: 2
    },
    {
        title: 'playlist3',
        user_id: 3
    },
    {
        title: 'playlist4',
        user_id: 3
    },
    {
        title: 'playlist5',
        user_id: 4
    },
    {
        title: 'playlist6',
        user_id: 5
    },
    {
        title: 'playlist7',
        user_id: 5
    },
    {
        title: 'playlist8',
        user_id: 1
    },
    {
        title: 'playlist9',
        user_id: 1
    }
]

const seedPlaylist = () => Playlist.bulkCreate(playlistData);

module.exports = seedPlaylist;