const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Playlist, Music, User, Comments } = require('../models');
const sequelize = require('../config/connection.js');

router.get('/', withAuth, (req, res) => {

    Playlist.findAll({

        where: {
            user_id: req.session.user_id
        },

        attributes: ['id', 'title', 'created_at'],
        include: [
            {
                model: Music,
                attributes: ['id', 'artist', 'song_title', 'genre', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(dbPlaylistData => {
        const playlists = dbPlaylistData.map(playlist => playlist.get({ plain: true }));

        res.render('dashboard', { playlists, loggedIn: true });
    })

});

// create a playlist from account dash
router.get('/createplaylist', withAuth, (req, res) => {
    User.findOne({
        where: {
            id: req.session.user_id
        },
        attributes: {
            exclude: ['password']
        }
    }).then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'no user found' });
            return;
        }
        const user = userData.get({ plain: true });
        res.render('create-playlist', { user, loggedIn: true });
    })
        .catch(err => {
            console.log(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Playlist.findByPk(req.params.id, {
        attributes: ['id', 'title', 'user_id', 'created_at'],
        include: [
            {
                model: Music,
                attributes: ['id', 'artist', 'song_title', 'genre', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }]
    }).then(dbPlaylistData => {
        if (!dbPlaylistData) {
            res.status(404).json({ message: 'No playlist found with this id' });
            return;
        }
        const playlist = dbPlaylistData.get({plain: true})
        
        res.render('edit-playlist', {playlist, loggedIn: true})

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;