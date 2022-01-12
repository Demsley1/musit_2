const router = require('express').Router();

const apiRoutes = require('./apiRoutes/');
const homeRoutes = require('./home-routes.js');


router.use('/api', apiRoutes);

module.exports = router;