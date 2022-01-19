const router = require('express').Router();
const withAuth = require('../utils/auth');

// get route to dashboard
// get user info (name, playlists, like history)
// populate page with script (fetch call)
router.get('/dashboard', withAuth, (req, res) => {
    // if not logged in, send home
    if (req.session.loggedIn) {
        // render dashboard
        res.render('dashboard');

        // get session user id 
        console.log(req.session.user_id);
        const userId = req.session.user_id;

        // build a function to populate playlists
        // pass id to fn to retreive user playlists
        // loop to add playlists to page 
        return;
    }



    res.redirect('/');
});

module.exports = router;