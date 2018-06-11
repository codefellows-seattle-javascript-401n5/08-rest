'use strict';

let http = require('http');
require('dotenv').config();

const router = require('./lib/router.js');
const api = require('./api/api.js');

let isRunning = false;

const app = http.createServer(router.route);

module.exports = {
  start: (port) => {
    if (!isRunning) {
      app.listen(port, (err) => {
        if (err) {throw err;}
        isRunning = true;
        console.log('Server up on port', port);
      });
    }
    else {
      console.log('Server is already up');
    }
  },

  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log('Server is not running');
    });
  },
};