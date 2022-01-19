const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./home-routes');

const genreRoutes= require('./genre');

const dashboardRoutes = require('./dashboardRoutes');




router.use('/', homeRoutes);
router.use(dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/genre', genreRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;