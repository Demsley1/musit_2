const router = require('express').Router();
const { User, Playlist } = require('../models')
const withAuth = require('../utils/auth');

// until playlist routes are set up to pass that in instead of user models
router.get('/', (req, res) => {
    Playlist.findAll({
        attributes: ['id', 'artist', 'created_at', 'song_title', 'genre'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbPlaylistData => {
        const playlists = dbPlaylistData.map(playlist => playlist.get({ plain: true }));
             
        res.render('homepage', { playlists, loggedIn: req.session.loggedIn });

    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup')
});

module.exports = router;