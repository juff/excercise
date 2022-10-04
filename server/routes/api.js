const express = require('express');

const petsRouter = require('./pets/pets.router');

const api = express.Router();

api.use('/retrievepetswithbreeddata', petsRouter);

module.exports = api;
