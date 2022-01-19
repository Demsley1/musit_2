const router = require('express').Router();

// get route to dashboard
// get user info (name, playlists, like history)
// populate page with script (fetch call)
router.get('/', withAuth, (req, res) => {
    // if not logged in, send home
        // render dashboard
        res.render('dashboard');

        // get session user id 
        console.log(req.session.user_id);
        const userId = req.session.user_id;


});

module.exports = router;