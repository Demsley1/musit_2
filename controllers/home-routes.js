const router = require('express').Router();
const { User, Playlist } = require('../models')

router.get('/', (req, res) => {
    res.render('homepage');
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