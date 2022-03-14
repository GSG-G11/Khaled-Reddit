const { join } = require('path');

const loginHandle = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'log-in.html'));
};

module.exports = { loginHandle };
