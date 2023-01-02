'use strict'
const express = require('express');
const cors = require('cors');
const logger = require('./src/middleware/logger');
const square = require('./src/middleware/square');
const notFound = require('./src/handler/404');
const errorHandler = require('./src/handler/500');
const { param } = require('express-validator')

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

// express.urlencoded({ extended: true })

app.get('/', (req, res) => {
  const main = {
    title: 'Hello From Main Rout!',
    availableRouts: {
      1: 'get/request-info',
      2: 'get/square-number/:id',
    },
  }
  res.send(main);
});
app.get('/request-info/', (req, res) => {
  res.status(200).send(req.params)
});
app.get('/square-number/:id', square(), (req, res) => {
  res.status(200).json(`square ${req.params.id} is ${req.myNumber}`)
});

app.use(errorHandler)
app.get('*', notFound, (req, res) => { })

const start = (port) => {
  app.listen(port, () => {
    console.log('\u001b[' + 33 + 'm' + '♠ Server Up on :' + '\u001b[' + 32 + 'm' + ` ►►► ${port} ◄◄◄`);
  });
}

module.exports = {
  app: app,
  start: start
}
