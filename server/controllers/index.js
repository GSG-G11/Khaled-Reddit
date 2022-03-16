const { getAllPosts } = require('./getAllPosts');
const { signUp } = require('./signUp');
const { logIn } = require('./login');
const { authorization } = require('./checkCookies');
const {
  handleProfile, handleSignUp, handleLogin, handleHome,
} = require('./handlers');
const { logOut, addPosts } = require('./user');

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
};
