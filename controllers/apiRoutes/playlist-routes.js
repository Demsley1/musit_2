const router = require('express').Router();
const { Playlist, User } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req,res) => {
    Playlist.findAll({
        attributes: [
            'id',
            'artist',
            'created_at',
            'song_title',
            'genre'
        ],
        // include: [
        //     // Comment model here -- attached username to comment
        //     {
        //       model: Comment,
        //       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //       include: {
        //         model: User,
        //         attributes: ['username']
        //       }
        //     },
        //     {
        //       model: User,
        //       attributes: ['username']
        //     },
        //   ]
    })
    .then(dbPlaylistData => res.json(dbPlaylistData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Playlist.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'artist',
        'created_at',
        'song_title'
      ],
      include: [
        // include the Comment model here:
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    })
      .then(dbPlaylistData => {
        if (!dbPlaylistData) {
          res.status(404).json({ message: 'No playlist found with this id' });
          return;
        }
        res.json(dbPlaylistData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req, res) => {
    Playlist.create({
      artist: req.body.artist,
      song_title: req.body.song_title,
      genre: req.body.genre,
    //   user_id: req.session.user_id
    })
      .then(dbPlaylistData => res.json(dbPlaylistData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;