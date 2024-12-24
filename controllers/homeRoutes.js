const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Render homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ['username'] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render a single post
router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          { model: User, attributes: ['username'] },
          { model: Comment, include: [{ model: User, attributes: ['username'] }] },
        ],
      });
  
      const post = postData.get({ plain: true });
      res.render('single-post', {
        post,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;