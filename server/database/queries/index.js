const { getAllPostsQuery } = require('./getAllPostsQuery');
const { hasUsernameTakenQuery, hasEmailTakenQuery } = require('./hasUserUniqeInfoTakenQuery');
const { addNewUserQuery } = require('./addNewUserQuery');
const { getUser } = require('./getUser');
const { addPostQuery } = require('./addPostQuery');

module.exports = {
  getAllPostsQuery,
  hasUsernameTakenQuery,
  hasEmailTakenQuery,
  addNewUserQuery,
  getUser,
  addPostQuery,
};
