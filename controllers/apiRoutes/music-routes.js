const router = require('express').Router();
const { Music, Playlist, User } = require('../../models');
const sequelize = require('../../config/connection');

// api/music, tested ok, GET
router.get('/', (req,res) => {
    Music.findAll({
        attributes: [
            'id',
            'artist',
            'created_at',
            'song_title',
            'genre',
            'user_id',
            'playlist_id'
        ],
        include: [
          {
            model: Playlist,
            attributes: ['id', 'title', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          }
        ]
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
    .then(dbMusicData => res.json(dbMusicData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// api/music/id, tested ok, GET
router.get('/:id', (req, res) => {
    Music.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'artist',
        'created_at',
        'song_title',
        'genre',
        'playlist_id',
        'user_id'
      ],
      include: [
        {
          model: Playlist,
          attributes: ['id', 'title', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    //   include: [
    //     // include the Comment model here:
    //     {
    //       model: User,
    //       attributes: ['username']
    //     },
    //     {
    //       model: Comment,
    //       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //       include: {
    //         model: User,
    //         attributes: ['username']
    //       }
    //     }
    //   ]
    })
      .then(dbMusicData => {
        if (!dbMusicData) {
          res.status(404).json({ message: 'No song data found with this id' });
          return;
        }
        res.json(dbMusicData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // api/music/id, tested ok, POST
router.post('/', (req, res) => {
    Music.create({
      artist: req.body.artist,
      song_title: req.body.song_title,
      genre: req.body.genre,
      playlist_id: req.body.playlist_id,
      user_id: req.session.user_id
    })
      .then(dbMusicData => res.json(dbMusicData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// api/music/id, tested ok, PUT
router.put('/:id', (req, res) => {
  Music.update(
    {
      artist: req.body.artist,
      song_title: req.body.song_title,
      genre: req.body.genre
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbMusicData => {
      if (!dbMusicData) {
        res.status(404).json({ message: 'No song data found with this id' });
        return;
      }
      res.json(dbMusicData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// api/music/id, tested ok, DELETE
router.delete('/:id', (req, res) => {
  Music.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbMusicData => {
      if (!dbMusicData) {
        res.status(404).json({ message: 'No song data with this id' });
        return;
      }
      res.json(dbMusicData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;