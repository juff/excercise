const { getAllPets } = require('../../models/pets.model');

async function httpGetAllPets(req, res) {
	return res.status(200).json(await getAllPets());
}

module.exports = {
	httpGetAllPets,
};
