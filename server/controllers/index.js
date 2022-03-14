const { getAllPosts } = require('./getAllPosts');
const { signUp } = require('./signUp');
const { logIn } = require('./login');
const { handleSignUp } = require('./handleSignUp');
const { loginHandle } = require('./handleLogIn');

module.exports = {
  getAllPosts, signUp, logIn, handleSignUp, loginHandle,
};
