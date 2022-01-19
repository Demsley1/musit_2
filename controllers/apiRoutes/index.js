const router = require('express').Router();

const musicRoutes = require('./music-routes');
const userRoutes = require('./user-routes');
const playlistRoutes = require('./playlist-routes');

router.use('/music', musicRoutes);
router.use('/users', userRoutes);
router.use('/playlists', playlistRoutes);

module.exports = router;