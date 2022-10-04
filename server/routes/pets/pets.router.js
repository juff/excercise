const express = require('express');
const { httpGetAllPets } = require('./pets.controller');

const petsRouter = express.Router();

petsRouter.get('/', httpGetAllPets);

module.exports = petsRouter;
