'use strict';

let express = require('express');
let app = express();
let async = require('async');

app.get('/', (req, res) => {

  return res.status(200).send({
    result: 'hello world'
  });

});

module.exports = app;
