const router = require('express').Router();
const {Comments} = require('../models/comments');
const sequelize = require('../config/connection');

    // CREATE Comment
    router.post('/', (req, res) => {
      Comments.create(req.body).then((comment) => {
        console.log(comment)
        res.redirect('/');
      }).catch((err) => {
        console.log(err.message);
      });
    });

    module.exports = router;