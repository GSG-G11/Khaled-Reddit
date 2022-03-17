const router = require('express').Router();

const {
  getAllPosts,
  signUp,
  logIn,
  handleSignUp,
  handleLogin,
  addPosts,
  notFound,
  serverError,
} = require('../controllers');
const { userRouter } = require('./user');

router.get('/posts', getAllPosts);
router.get('/sign-up', handleSignUp);
router.post('/sign-up', signUp);
router.get('/log-in', handleLogin);
router.post('/log-in', logIn);
router.post('/post', addPosts);
router.use('/user', userRouter);

router.use(notFound);
router.use(serverError);

module.exports = router;
