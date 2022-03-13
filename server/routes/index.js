const router = require('express').Router();

const {
  getAllPosts,
  signUp,
  logIn,
} = require('../controllers');

router.get('/posts', getAllPosts);
router.post('/sign-up', signUp);
router.post('/log-in', logIn);

module.exports = router;
