const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });

const mongooseConnect = mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
  },
  (error, client) => {
    if (error) {
      return console.log('Unable To Connect To The Server');
    }
    console.log('Connected Successfully To PORT :- 5000');
  }
);

module.exports = mongooseConnect;
