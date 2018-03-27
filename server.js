'use strict';

let express = require('express');
let chalk = require('chalk');
let app = express();

app.get('/',  (req, res) => {
  return res.status(200).send('Hello World');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is up at ${PORT}`);
});
