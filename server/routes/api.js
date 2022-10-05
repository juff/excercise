const express = require('express');

const breedsRouter = require('./breeds/breeds.router');

const api = express.Router();

api.use('/retrievepetswithbreeddata', breedsRouter);

module.exports = api;
