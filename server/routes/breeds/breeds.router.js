const express = require('express');
const { httpGetAllBreeds } = require('./breeds.controller');

const breedsRouter = express.Router();

breedsRouter.get('/', httpGetAllBreeds);

module.exports = breedsRouter;
