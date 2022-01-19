const router = require('express').Router();
const sequelize = require('../config/connection');
const { Playlist, User, } = require('../models');
const withAuth = require('../utils/auth');

router.get('/myplaylist', async (req, res) => {
    Playlist.findAll({
        attributes: { exclude: ['password'] }
    }).then(dbPlaylistData => {
        const playlist = dbPlaylistData.map(playlist => playlist.get({ plain: true }));
        res.render('myplaylist', { playlist, loggedIn: req.session.loggedIn });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
})

router.get('/edit/:id', withAuth, (req, res) => {
    Playlist.findByPk(req.params.id, {
      attributes: [
        'id',
        'artist',
        'song_title',
        'genre',
        'created_at'
      ],
      include: [
        // {
        //   model: Comment,
        //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        //   include: {
        //     model: User,
        //     attributes: ['username']
        //   }
        // },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPlaylistData => {
        if (dbPlaylistData) {
          const playlist = dbPlaylistData.get({ plain: true });
  
          res.render('edit-playlist', {
            playlist,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
router.get('/createplaylist', withAuth, async (req, res) => {
    try {
        const playlistData = await Playlist.findAll({
            where: {
                id: req.session.user_id
            }
        })
        console.log(playlistData);
        res.render('create-playlist');
    }
    catch {
        res.json({ msg: 'Failed to retrieve playlist' })
    }
});

module.exports = router;