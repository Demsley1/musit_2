const router = require('express').Router();
const { User, Music, Playlist } = require('../models')


// Use sequelize literal to get music data from music table
// until playlist routes are set up to pass that in instead of user models
router.get('/', (req, res) => {
    Playlist.findAll({
        attributes: ['id'],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Playlist,
                attributes: ['id', 'title', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(dbMusicData => {
        const songs = dbMusicData.map(music => music.get({ plain: true }));
             
        res.render('homepage', { songs, loggedIn: req.session.loggedIn });
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