const router = require('express').Router();

const {
  getAllPosts,
  signUp,
  logIn,
  handleSignUp,
  loginHandle,
} = require('../controllers');

router.get('/posts', getAllPosts);
router.get('/sign-up', handleSignUp);
router.post('/sign-up', signUp);
router.get('/log-in', loginHandle);
router.post('/log-in', logIn);

module.exports = router;
