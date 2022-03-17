const { handleProfile } = require('./handleProfile');
const { handleSignUp } = require('./handleSignUp');
const { handleLogin } = require('./handleLogIn');
const { handleHome } = require('./handleHome');
const { notFound, serverError } = require('./handleErrors');

module.exports = {
  handleProfile, handleSignUp, handleLogin, handleHome, notFound, serverError,
};
