// importing the dependencies
const router = require('express').Router();
const { Playlist } = require('../models');
const { sequelize } = require('../models/Playlist');

router.get('/rock', (req, res) =>{
    const rockgenre= 'Rock'
    Playlist.findAll({
        attributes: [
            'artist',
            'song_title',
            'genre',
            'user_id'
        ],
        where: sequelize.where(
            sequelize.fn('LOCATE', Sequelize.col('genre'), rockgenre))
    }).then( () =>{
        res.render('playlist-viewpage')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });

});







module.exports = router;