const { getAllPostsQuery } = require('./getAllPostsQuery');
const { hasUsernameTakenQuery, hasEmailTakenQuery } = require('./hasUserUniqeInfoTakenQuery');
const { addNewUserQuery } = require('./addNewUserQuery');

module.exports = {
  getAllPostsQuery, hasUsernameTakenQuery, hasEmailTakenQuery, addNewUserQuery,
};
