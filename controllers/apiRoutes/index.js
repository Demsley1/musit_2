const router = require('express').Router();

const playlistRoutes = require('./playlist-routes');


router.use('/playlists', playlistRoutes);


module.exports = router;