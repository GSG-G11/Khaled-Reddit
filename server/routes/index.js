const router = require('express').Router();

const {
  getAllPosts,
} = require('../controllers');

router.get('/posts', getAllPosts);

module.exports = router;
