const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config.env' });
const JWT_SECRET = process.env.KEY;

const fetchUser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.json('Invalid Credentials. Pls Try Again Later');
  }
  const data = jwt.verify(token, JWT_SECRET);
  if (!data) {
    return res.json('Invalid Crendentials ,  Token Note Matched');
  }
  req.user = data.user;
  next();
};

module.exports = fetchUser;
