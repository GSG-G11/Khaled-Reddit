const { getAllPosts } = require('./getAllPosts');
const { signUp } = require('./signUp');
const { logIn } = require('./login');
const { handleSignUp } = require('./handleSignUp');

module.exports = {
  getAllPosts, signUp, logIn, handleSignUp,
};
