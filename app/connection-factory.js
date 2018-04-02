/**
 * Created by sridharrajs on 1/13/16.
 */

'use strict';

let mongoose = require('mongoose');

let db = mongoose;

db.Promise = global.Promise;

class ConnectionFactory {

  static connect() {
    db.connect(process.env.mongodb_url);
    return new Promise((resolve, reject) => {
      db.connection.on('open', () => {
        resolve('SUCCESS');
      }).on('error', (err) => {
        reject(err);
      });
    });
  }

}

module.exports = ConnectionFactory;
