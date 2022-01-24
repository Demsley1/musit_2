const router = require('express').Router();
const { Comments } = require('../../models');

// D.E: added get route at /api/comments to christian's comments routes to be able to query database and see if any comments are added.
router.get('/', (req, res) => {
  Comments.findAll({
    attributes: ['id', 'comment_text', 'playlist_id', 'user_id', 'created_at']
  }).then(dbCommentData => res.json(dbCommentData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// CREATE Comment
router.post('/', (req, res) => {
  Comments.create({
    comment_text: req.body.comment_text,
    playlist_id: req.body.playlist_id,
    user_id: req.session.user_id
  }).then(commentData => res.json(commentData))
  .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;