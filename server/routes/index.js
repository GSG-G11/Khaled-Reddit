const router = require('express').Router();

const {
  getAllPosts,
  signUp,
  logIn,
  handleSignUp,
} = require('../controllers');

router.get('/posts', getAllPosts);
router.get('/sign-up', handleSignUp);
router.post('/sign-up', signUp);
router.post('/log-in', logIn);

module.exports = router;
