const userRouter = require('express').Router();
const {
  handleHome, handleProfile, authorization, logOut, getAllPosts, addPosts,
} = require('../../controllers');

userRouter.use(authorization);

userRouter.get('/posts', getAllPosts);
userRouter.get('/', handleHome);
userRouter.get('/profile', handleProfile);
userRouter.get('/log-out', logOut);
userRouter.post('/post', addPosts);

module.exports = { userRouter };
