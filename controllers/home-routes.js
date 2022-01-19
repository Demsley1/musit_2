const router = require('express').Router();
const { User, Playlist, Music } = require('../models');
const sequelize = require('../config/connection.js');

// until playlist routes are set up to pass that in instead of user models
router.get('/', (req, res) => {
    Playlist.findAll({
        limit: 3,
        attributes: ['id',
                     'title',
                     'user_id',
                     'created_at'
                    ],
        include:[
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
        const playlists = dbPlaylistData.map(playlist => playlist.get({ plain: true }));

        console.log(playlists);
             
        res.render('homepage', { playlists, loggedIn: req.session.loggedIn });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }

    res.render('signup')
});

module.exports = router;