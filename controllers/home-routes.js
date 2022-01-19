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

module.exports = router;