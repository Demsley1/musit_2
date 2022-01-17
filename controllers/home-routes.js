const router = require('express').Router();
const { User, Playlist } = require('../models')
const withAuth = require('../utils/auth');

// until playlist routes are set up to pass that in instead of user models
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    }).then(dbUserData => {
        const user = dbUserData.map(user => user.get({ plain: true }));
        res.render('homepage', { user, loggedIn: req.session.loggedIn });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
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

router.get('/createplaylist', withAuth, async (req, res) => {
    try {
        const playlistData = await Playlist.findAll({
            where: {
                id: req.session.user_id
            }
        })
        console.log(playlistData);
        res.render('create-playlist');
    }
    catch {
        res.json({ msg: 'Failed to retrieve playlist' })
    }
});

router.get('/myplaylist', async (req, res) => {
    Playlist.findAll({
        attributes: { exclude: ['password'] }
    }).then(dbPlaylistData => {
        const playlist = dbPlaylistData.map(playlist => playlist.get({ plain: true }));
        res.render('myplaylist', { playlist, loggedIn: req.session.loggedIn });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
})

module.exports = router;