// importing the dependencies
const router = require('express').Router();
const { Music } = require('../models');
// all routes contain all the songs included in each genre
// this is to get the Rock(#1) data
router.get('/1', (req, res) =>{
    Music.findAll({
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
// this is for the pop(#2) data
router.get('/2', (req, res) =>{
    Music.findAll({
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
// this is for the rap(hip-hop #3) data
router.get('/3', (req, res) =>{
    Music.findAll({
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
//this is the route for the Country(#4) data
router.get('/4', (req, res) =>{
    Music.findAll({
        attributes: ['artist', 'song_title', 'genre'],
        where: {genre: 'Country'}
    }).then( (data) =>{
        console.log(data)
        res.render('./partials/genre')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });

});
// lastly this is the route for the Other(#5) data
router.get('/5', (req, res) =>{
    Music.findAll({
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