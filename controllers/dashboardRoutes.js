const router = require('express').Router();

// get route to dashboard
// get user info (name, playlists, like history)
// populate page with script (fetch call)
router.get('/dashboard', (req, res) => {
    // if not logged in, send home
    if (req.session.loggedIn) {
        res.render('dashboard');
        return;
    }
    // render dashboard
    // get session user id 
    // pass id to fn to retreive user playlists
    // loop to add playlists to page 
    res.redirect('/');
});

module.exports = router;