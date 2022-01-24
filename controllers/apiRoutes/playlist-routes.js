const router = require('express').Router();
const { Playlist, Music, User, Vote } = require('../../models');
const sequelize = require('../../config/connection.js');
const withAuth = require('../../utils/auth.js');

// get /playlists
router.get('/', (req, res) => {
    Playlist.findAll({
        attributes: [
            'id',
            'title',
            'user_id',
            'created_at',
            [
                sequelize.literal('(SELECT COUNT(*) FROM vote WHERE playlist.id = vote.playlist_id)'),
                'vote_count'
            ]
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Music,
                attributes: ['id', 'artist', 'song_title', 'genre', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(dbPlaylistData => res.json(dbPlaylistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/upvote', (req, res) => {
    Vote.findAll({
        include: [
            {
                model: User,
                key: 'id'
            },
            {
                model: Playlist,
                key: 'id'
            }
        ]
    }).then(dbPlaylistData => res.json(dbPlaylistData))
        .catch(err => {
            consolelog(err);
            res.status(500).json(err);
        });
});

// get /playlists/1
router.get('/:id', (req, res) => {
    Playlist.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'user_id',
            'created_at',
            [
                sequelize.literal('(SELECT COUNT(*) FROM vote WHERE playlist.id = vote.playlist_id)'),
                'vote_count'
            ]
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Music,
                attributes: ['id', 'artist', 'song_title', 'genre', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(dbPlaylistData => {
        if (!dbPlaylistData) {
            res.status(404).json({ message: 'No playlist found with this id' });
            return;
        }
        res.json(dbPlaylistData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create /playlists
router.post('/', (req, res) => {
    Playlist.create({
        title: req.body.title,
        user_id: req.session.user_id
    }).then(dbPlaylistData => res.json(dbPlaylistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// upvote a playlist /api/playlists/upvote
router.put('/upvote', withAuth, (req, res) => {
    console.log(req.body);
    Playlist.upvote(req.body, { Vote })
        .then(updatedPlaylistData => {
            if (!updatedPlaylistData) {
                res.status(404).json({ message: 'No playlist found with that id' });
                return;
            }
            res.json(updatedPlaylistData)
        })
        .catch (err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update /playlists/1
router.put('/:id', (req, res) => {
    Playlist.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(dbPlaylistData => {
        if (!dbPlaylistData) {
            res.status(404).json({ message: 'No playlist found with this id' });
            return;
        }
        res.json(dbPlaylistData)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete /playlists/1
router.delete('/:id', (req, res) => {
    Playlist.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPlaylistData => {
        if (!dbPlaylistData) {
            res.status(404).json({ message: 'No playlist found with this id ' });
            return;
        }
        res.json(dbPlaylistData)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;