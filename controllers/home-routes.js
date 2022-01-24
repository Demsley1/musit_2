const router = require('express').Router();
const { User, Playlist, Music, Comments } = require('../models');
const sequelize = require('../config/connection.js');

// Find all playlists and return attribute data and attach all relevant modal data's
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
            },
            {
                model: Comments,
                order: [
                    ['id', 'DESC']
                ],
                attributes: ['comment_text', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }

            }
        ]
    }).then(dbPlaylistData => {
        // map iterate through return database values and serialize the data
        const playlists = dbPlaylistData.map(playlist => playlist.get({ plain: true }));

        res.render('homepage', { playlists, loggedIn: req.session.loggedIn });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// login page route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// signup page handler
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup')
});

// homepage route to comments page
router.get('/comments', (req, res) => {
    Comments.findAll({
        attributes: ['id', 'comment_text', 'user_id'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbCommentData => {
        const comments = dbCommentData.map(comment => comment.get({ plain: true }));

        res.render('comments', {comments, loggedIn: req.session.loggedIn });
    })
});

module.exports = router;