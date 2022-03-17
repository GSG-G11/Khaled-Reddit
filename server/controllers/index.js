const { getAllPosts } = require('./getAllPosts');
const { signUp } = require('./signUp');
const { logIn } = require('./login');
const { authorization } = require('./checkCookies');
const {
  handleProfile, handleSignUp, handleLogin, handleHome, notFound, serverError,
} = require('./handlers');
const {
  logOut, addPosts, getUserPosts, deletePost,
} = require('./user');

module.exports = {
  getAllPosts,
  signUp,
  logIn,
  handleSignUp,
  handleLogin,
  handleProfile,
  handleHome,
  authorization,
  logOut,
  addPosts,
  getUserPosts,
  deletePost,
  notFound,
  serverError,
};
