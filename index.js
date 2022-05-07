const express = require('express');
require('dotenv').config({ path: './config.env' });
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

require('./db');
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use(require('./routers/auth'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('The Site Is Successfully Of PORT :-', PORT);
});
