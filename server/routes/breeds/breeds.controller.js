const { getAllBreeds } = require('../../models/breeds.model');

async function httpGetAllBreeds(req, res) {
	return res.status(200).json(await getAllBreeds());
}

module.exports = {
	httpGetAllBreeds,
};
