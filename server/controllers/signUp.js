const { addNewUserQuery, hasUsernameTakenQuery, hasEmailTakenQuery } = require('../database/queries');
const { signUpValidation } = require('../validation');
const { hashPassword } = require('../utils');

const signUp = (req, res) => {
  const { username, email, password } = req.body;

  signUpValidation(req.body)
    .then(() => hasUsernameTakenQuery({ username }))
    .then(() => hasEmailTakenQuery({ email }))
    .then(() => hashPassword(password))
    .then((hashedPassword) => addNewUserQuery({ email, username, hashedPassword }))
    .then((dbRes) => res.json(dbRes))
    .catch((dbError) => res.json(dbError));
};

module.exports = { signUp };
