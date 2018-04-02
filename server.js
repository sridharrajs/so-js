'use strict';

let chalk = require('chalk');
let dotenv = require('dotenv').config();


if (dotenv.error) {
  console.trace(chalk.red('.env file is missing'));
  process.exit(0);
}

let connectionFactory = require('./app/connection-factory');

connectionFactory.connect().then(() => {
  console.log(`Db connection established =>  ${chalk.blue('SUCCESS')} `);

  let app = require('./app/app');
  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`Server is up at ${PORT} => ${chalk.blue('SUCCESS')} `);
  });
}).catch((err) => {
  console.log('err in server.js ', err.stack);
});


