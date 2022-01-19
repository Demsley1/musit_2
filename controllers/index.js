const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./home-routes');
const genreRoutes= require('./genre');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/genre', genreRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;