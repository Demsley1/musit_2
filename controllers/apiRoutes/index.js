const router = require('express').Router();

const playlistRoutes = require('./playlist-routes');
const userRoutes = require('./user-routes')

router.use('/playlists', playlistRoutes);
router.use('/users', userRoutes);

module.exports = router;