const express = require('express');
const { addFeed } = require('./message-controller');

const kafkaRoute = express.Router();

kafkaRoute.post('/addfeed', addFeed);

module.exports = { kafkaRoute };
