const router = require('express').Router();

const musicRoutes = require('./music-routes');
const userRoutes = require('./user-routes');
const playlistRoutes = require('./playlist-routes');
const commentRoutes = require('./comment-routes')

router.use('/music', musicRoutes);
router.use('/users', userRoutes);
router.use('/playlists', playlistRoutes);
router.use('/comments', commentRoutes)

module.exports = router;