const router = require('express').Router();

const {
  getAllPosts,
  signUp,
  logIn,
  handleSignUp,
  loginHandle,
} = require('../controllers');
const { userRouter } = require('./user');

router.get('/posts', getAllPosts);
router.get('/sign-up', handleSignUp);
router.post('/sign-up', signUp);
router.get('/log-in', loginHandle);
router.post('/log-in', logIn);
router.use('/user', userRouter);

module.exports = router;
