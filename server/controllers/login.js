const { jwtSignPromise, comparepassword } = require('../utils');
const { logInValidation } = require('../validation');
const { getUser } = require('../database/queries');

const logIn = (req, res) => {
  const { username, password } = req.body;
  logInValidation(req.body)
    .then((data) => getUser(username))
    .then((response) => {
      if (response.rows.length === 0) {
        return res.json({ message: 'wrong username or password' });
      }
      return response.rows[0];
    })
    .then((userInfo) => comparepassword(password, userInfo.password))
    .then((result) => {
      if (result) {
        jwtSignPromise(username)
          .then((token) => res.cookie('info', token).json(token))
          .catch((err) => res.json({ message: 'error' }));
      } else {
        res.json({ message: 'wrong username or password' });
      }
    })
    .catch((err) => res.json(err));
};
module.exports = { logIn };
