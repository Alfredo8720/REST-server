require('dotenv').config();

const Server = require('./models/server');
//const server = require('./models/server');

//Instanciamos la clase
const server = new Server();

server.listen();

