const router = require('express').Router();

const {
  getAllPosts,
  signUp,
} = require('../controllers');

router.get('/posts', getAllPosts);
router.post('/sign-up', signUp);

module.exports = router;
