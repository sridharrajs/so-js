'use strict';

//https://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html

let MongoClient = require('mongodb').MongoClient;

class ConnectionFactory {

  static connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(process.env.mongodb_url, function (err, db) {
        if (err) {
          reject(err);
        }
        resolve(db);
      });
    });
  }

}

module.exports = ConnectionFactory;