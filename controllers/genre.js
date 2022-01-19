// importing the dependencies
const router = require('express').Router();
const { Playlist } = require('../models');
const { sequelize } = require('../models/Playlist');
// all routes contain all the songs included in each genre
// this is to get the Rock data
router.get('/', (req, res) =>{
    Playlist.findAll({
        attributes: ['artist', 'song_title', 'genre'],
        where: {genre: 'Rock'}
    }).then( (data) =>{
        console.log(data)
        res.render('./partials/genre')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });

});
// this is for the rap data
router.get('/1', (req, res) =>{
    Playlist.findAll({
        attributes: ['artist', 'song_title', 'genre'],
        where: {genre: 'Rap'}
    }).then( (data) =>{
        console.log(data)
        res.render('./partials/genre')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });

});
// this is for the pop data
router.get('/2', (req, res) =>{
    Playlist.findAll({
        attributes: ['artist', 'song_title', 'genre'],
        where: {genre: 'Pop'}
    }).then( (data) =>{
        console.log(data)
        res.render('./partials/genre')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });

});
// lastly this is the route for the Other data
router.get('/3', (req, res) =>{
    Playlist.findAll({
        attributes: ['artist', 'song_title', 'genre'],
        where: {genre: 'Other'}
    }).then( (data) =>{
        console.log(data)
        res.render('./partials/genre')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });

});

module.exports = router;