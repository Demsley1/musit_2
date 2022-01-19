const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Playlist, Music, User, } = require('../models');
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
        res.render('create-playlist', {user, loggedIn: true});
    })
    .catch(err => {
        console.log(err);
    });
});

module.exports = router;