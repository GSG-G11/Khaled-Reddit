const { join } = require('path');

const notFound = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', '..', 'public/html/404.html'));
};

const serverError = (err, req, res, next) => {
  const status = err.status || 500;
  switch (status) {
    case 500:
      res.status(500).sendFile(join(__dirname, '..', '..', '..', 'public/html/500.html'));
      break;
    default:
      res.status(status).json({ msg: err.message, status });
  }
};
module.exports = { notFound, serverError };
