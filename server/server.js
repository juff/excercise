const http = require('http');

require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startSever() {
	server.listen(PORT, () => {
		console.log(`listing on port ${PORT}`);
	});
}

startSever();
