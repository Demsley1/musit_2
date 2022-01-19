const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboardRoutes');
const genreRoutes = require('./playlistViewpage');


router.use('/', homeRoutes);
router.use(dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/genre', genreRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;